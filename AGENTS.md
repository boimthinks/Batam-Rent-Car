# Petunjuk AI Agent: Lincah Rent Car (Astro SSG)

## Aturan Komunikasi
- **Bahasa**: Selalu gunakan Bahasa Indonesia dalam semua respon, pesan, dan percakapan tanpa terkecuali.
- Ringkas, padat, dan solutif.

## Project Info
- **Domain**: lincahrentcar.com
- **Brand**: Lincah Rent Car (Rental Mobil Batam & Palembang - Lepas Kunci & Dengan Supir)
- **Tagline**: "Sewa Mobil Cepat, Nyaman, & Fleksibel"
- **Kontak WA**: `+6281373703639` (0813-7370-3639)
- **Kantor Batam (Pusat)**: Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai - Batam, Kepri 29431
- **Kantor Palembang (Cabang)**: Lorong Tj. Burung Utama, Bukit Lama, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30139

## Akses Data & Pengetahuan
- **SUMBER-PENGETAHUAN.md**: Sumber kebenaran tunggal data brand, armada, harga sewa, titik jemput (Batam & Palembang), syarat lepas kunci, dan artikel blog.
- **Skill `penulis-ahli`**: WAJIB digunakan saat menulis, mengedit, atau merancang konten blog/artikel untuk memastikan human touch, optimasi SEO/GEO, dan bebas deteksi klise AI.

## Tech Stack
- **Framework**: Astro v7 (Static Site Generation - SSG)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **UI Architecture**: Mobile App Shell (Thumb-zone friendly, sticky bar dengan drawer hamburger mobile, fixed bottom nav, modal bottom sheet booking, container desktop max-w-5xl)
- **Content Engine**: Astro Content Layer API (`src/content.config.ts`) dengan validasi Zod
- **Typography**: `@fontsource/plus-jakarta-sans` lokal untuk performa Core Web Vitals (LCP/CLS)

## Arsitektur Multi-Kota (Batam & Palembang) & Preferensi Bahasa
Website melayani dua kota operasional (**Batam** sebagai flagship & **Palembang**) dalam satu domain tunggal tanpa duplikasi halaman:
1. **Penyimpanan State**:
   - Kota: Disimpan di `localStorage.getItem('lincah_city')` (`'batam'` | `'palembang'`). Default adalah `'batam'`.
   - Bahasa: Disimpan di `localStorage.getItem('lincah_lang')` (`'id'` | `'en'`). Menghormati pilihan sadar pengguna dan mencegah banner rekomendasi bahasa mengganggu pengunjung yang memilih `id`.
2. **Event `cityChange`**: Saat kota dipilih, `StickyTopBar.astro` memancarkan event `window.dispatchEvent(new CustomEvent('cityChange', { detail: { city } }))`.
3. **Komponen yang Menyesuaikan Dinamis**:
   - **Header & Footer Brand**: Subtitle berganti otomatis antara `"Batam Car Rental"` dan `"Palembang Car Rental"`. Logo SVG bertukar antara `/logo.svg` dan `/logo-palembang.svg`.
   - **Hero & Subtitle**: Halaman `/`, `/mobil`, `/layanan`, `/lokasi`, dan `/blog` secara realtime memperbarui teks H1, deskripsi penjemputan, jaminan, serta URL WhatsApp sesuai kota aktif.
   - **Titik Jemput (`PickupHubChips.astro`)**: Menampilkan hub Batam (Bandara Hang Nadim, Harbour Bay, dll.) atau hub Palembang (Bandara SMB II, Stasiun Kertapati, Pelabuhan Tanjung Api-Api, dll.).
   - **Filter Artikel Blog**: Cardview artikel di homepage dan halaman blog menyaring artikel berdasarkan atribut `data-city` / `data-article-city`.
   - **Footer**: Titik jemput populer dan badge *"Kota Aktif"* di kantor Batam / Palembang otomatis menyesuaikan.
4. **Header Mobile (Drawer Hamburger)**:
   - Pada layar mobile (`md:hidden`), header bar bersih hanya memuat Logo dan tombol Hamburger (☰).
   - Dropdown kota dan switcher bahasa (ID/EN) dipindahkan ke dalam panel drawer mobile agar tampilan mobile lapang dan tidak sesak.

## Routing SILO & Multibahasa (ID & EN)
- `/` (Beranda ID - adaptif Batam/Palembang)
- `/mobil/` & `/mobil/[slug]` (Katalog unit & detail spesifikasi)
- `/layanan/` & `/layanan/[slug]` (Lepas kunci, dengan supir, sewa bulanan, antar jemput)
- `/lokasi/` & `/lokasi/[slug]` (Direktori titik jemput Batam & Palembang)
- `/blog/` & `/blog/[slug]` (Blog & edukasi Bahasa Indonesia)
- `/en/` & `/en/car/[slug]` (Direktori wisman Singapura & Malaysia, estimasi SGD/MYR)
- `/en/layanan/` & `/en/layanan/[slug]` (Layanan versi English)
- `/en/lokasi/` & `/en/lokasi/[slug]` (Titik jemput versi English)
- `/en/guide/` & `/en/guide/[slug]` (Panduan travel versi English, berpasangan dengan `/blog/` via `alternateSlug`)

## Aturan URL (Trailing Slash WAJIB)
- Standar URL produksi: **selalu berakhir dengan `/`** (contoh: `https://lincahrentcar.com/en/lokasi/harbour-bay/`). Server host melakukan `301` dari URL tanpa slash ke URL WITH slash.
- Konfigurasi: `trailingSlash: 'always'` di `astro.config.mjs` (canonical, hreflang, dan sitemap otomatis ikut memakai trailing slash).
- Helper: `src/utils/url.ts` → `withSlash(path)` untuk path internal, `absUrl(path)` untuk URL absolut (canonical/hreflang/JSON-LD). Jangan menulis URL absolut manual.
- Saat menambah halaman, komponen, atau aturan autolink:
  - `href="/mobil/fortuner/"` (literal trailing slash) — **dilarang** `href="/mobil/fortuner"`.
  - Path dihitung di frontmatter/TS wajib dibungkus `withSlash()` / `absUrl()`.
  - URL dengan ekstensi file (aset: `/favicon.svg`, `/images/...`) **tidak** diberi trailing slash.
- Halaman `404` tidak boleh punya canonical/hreflang; layout otomatis memberi `noindex, follow`.

## Standar Menulis Artikel Blog Baru (Protokol AI Agent)
Ketika diminta membuat artikel baru, ikuti protokol berikut tanpa kecuali:
1. **Wajib Berpasangan**:
   - Buat versi ID di `src/content/blog/[slug-id].md` (`lang: "id"`).
   - Buat versi EN di `src/content/blog/[slug-en].md` (`lang: "en"`).
2. **Koneksi `alternateSlug`**:
   - File ID wajib mengisi: `alternateSlug: "[slug-en]"`.
   - File EN wajib mengisi: `alternateSlug: "[slug-id]"`.
3. **Field `city`**:
   - Wajib menyertakan `city: "Batam"` atau `city: "Palembang"` di frontmatter.
4. **Formula 3 Pilar**:
   - Topik artikel harus kombinasi: `[Unit Mobil] + [Jenis Layanan] + [Titik Jemput/Kawasan Kota]`.
5. **Auto-Linking Otomatis**:
   - Dilarang membuat link markdown manual ke mobil, layanan, dan lokasi.
   - Cukup sebutkan nama entitas secara natural; sistem SSG `AutoLinkContent.astro` dan kamus `src/data/autolinks.ts` otomatis membuat tautan pada kemunculan pertama.
6. **Catat di SUMBER-PENGETAHUAN.md**:
   - Tambahkan artikel yang baru terbit ke tabel Bagian 8.

## Perintah Penting
- `npm run dev`: Menjalankan development server
- `npm run build`: Build static site untuk produksi ke `dist/`
- `npm run lint`: Validasi TypeScript (`tsc --noEmit`)
