import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';

let processorPromise: ReturnType<typeof createSatteriMarkdownProcessor> | null = null;

function getProcessor() {
  if (!processorPromise) {
    processorPromise = createSatteriMarkdownProcessor();
  }
  return processorPromise;
}

/**
 * Render a raw Markdown string to an HTML string at build time (SSG).
 * Uses Astro's own Markdown pipeline so output matches `render()` from content collections.
 */
export async function renderMarkdownToString(markdown: string): Promise<string> {
  if (!markdown || !markdown.trim()) return '';
  const processor = await getProcessor();
  const result = await processor.render(markdown);
  return result.code;
}