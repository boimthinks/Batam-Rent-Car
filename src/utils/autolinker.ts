import { autoLinkRules, type AutoLinkRule } from '../data/autolinks';
import { withSlash } from './url';

interface PreparedKeyword {
  keyword: string;
  ruleId: string;
  url: string;
  title: string;
  regex: RegExp;
}

/**
 * Escapes regex special characters
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Represents a segment of content during processing:
 * - isHtml: true if this segment is an HTML tag or protected link
 * - text: raw text or HTML string
 */
interface Segment {
  isHtml: boolean;
  text: string;
}

/**
 * Auto-links keywords in an HTML string based on the language ('id' | 'en').
 * - Matches longest phrases first.
 * - Only links the FIRST occurrence of any rule per article.
 * - Safely skips headings (h1-h6), existing links (a), code/pre, table headers, and tag attributes.
 */
export function applyAutoLinks(htmlContent: string, lang: 'id' | 'en' = 'id'): string {
  if (!htmlContent) return '';

  // 1. Prepare keywords sorted by length descending
  const prepared: PreparedKeyword[] = [];

  for (const rule of autoLinkRules) {
    const keywords = lang === 'en' ? rule.keywordsEn : rule.keywordsId;
    const url = lang === 'en' ? rule.urlEn : rule.urlId;
    const title = lang === 'en' ? rule.titleEn : rule.titleId;

    for (const kw of keywords) {
      const cleanKw = kw.trim();
      if (!cleanKw) continue;
      prepared.push({
        keyword: cleanKw,
        ruleId: rule.id,
        url,
        title,
        regex: new RegExp(`\\b(${escapeRegExp(cleanKw)})\\b`, 'i'),
      });
    }
  }

  // Sort longest keywords first
  prepared.sort((a, b) => b.keyword.length - a.keyword.length);

  // 2. Tokenize HTML into tags and text chunks
  const tagRegex = /(<\/?[a-zA-Z][^>]*>)/g;
  const parts = htmlContent.split(tagRegex);

  const ignoredTagsStack: string[] = [];
  const segments: Segment[] = [];

  for (const part of parts) {
    if (!part) continue;

    const openMatch = part.match(/^<([a-zA-Z0-9]+)(\s|>)/i);
    const closeMatch = part.match(/^<\/([a-zA-Z0-9]+)>/i);

    if (openMatch || closeMatch) {
      const isClosing = Boolean(closeMatch);
      const tagName = (closeMatch ? closeMatch[1] : openMatch![1]).toLowerCase();

      // Protected zones: existing anchor tags, headings, pre/code, style/script
      const isIgnoredTag = ['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'code', 'script', 'style'].includes(tagName);

      if (isIgnoredTag) {
        if (isClosing) {
          const lastIdx = ignoredTagsStack.lastIndexOf(tagName);
          if (lastIdx !== -1) {
            ignoredTagsStack.splice(lastIdx, 1);
          }
        } else if (!part.endsWith('/>')) {
          ignoredTagsStack.push(tagName);
        }
      }

      // Tags are always marked as HTML (not to be searched)
      segments.push({ isHtml: true, text: part });
    } else {
      // If currently inside an ignored tag (e.g. <a> or <h2>), mark as HTML so it won't be replaced
      const isProtected = ignoredTagsStack.length > 0;
      segments.push({ isHtml: isProtected, text: part });
    }
  }

  // 3. Process text segments with prepared rules
  const linkedRuleIds = new Set<string>();

  for (const item of prepared) {
    if (linkedRuleIds.has(item.ruleId)) continue;

    // Scan through segments to find the first occurrence
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      if (seg.isHtml) continue;

      const match = seg.text.match(item.regex);
      if (match && match.index !== undefined) {
        const matchedText = match[0];
        const matchIdx = match.index;
        const beforeText = seg.text.slice(0, matchIdx);
        const afterText = seg.text.slice(matchIdx + matchedText.length);

        const anchorHtml = `<a href="${withSlash(item.url)}" class="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-2 hover:decoration-blue-600 transition-colors" title="${item.title}">${matchedText}</a>`;

        // Replace current segment with 3 new segments: [before (text), link (html), after (text)]
        const replacements: Segment[] = [];
        if (beforeText) {
          replacements.push({ isHtml: false, text: beforeText });
        }
        replacements.push({ isHtml: true, text: anchorHtml });
        if (afterText) {
          replacements.push({ isHtml: false, text: afterText });
        }

        segments.splice(i, 1, ...replacements);
        linkedRuleIds.add(item.ruleId);
        break; // Match only once per rule across the entire article
      }
    }
  }

  // 4. Reconstruct HTML
  return segments.map((s) => s.text).join('');
}
