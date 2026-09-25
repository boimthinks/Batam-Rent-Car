# Petunjuk AI Agent: Lincah Rent Car (Astro SSG)

## Aturan Komunikasi
- **Bahasa**: Selalu gunakan Bahasa Indonesia dalam semua respon, pesan, dan percakapan tanpa terkecuali.
- Ringkas, padat, dan solutif.

## Project Info
- **Domain**: lincahrentcar.com
- **Brand**: Lincah Rent Car (Rental Mobil Batam - Lepas Kunci & Dengan Supir)
- **Tagline**: "Sewa Mobil Cepat, Nyaman, & Fleksibel di Batam"
- **Kontak WA**: `+6281373703639` (0813-7370-3639)
- **Kantor**: Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai - Batam, Kepri 29431

## Akses Data & Pengetahuan
- **SUMBER-PENGETAHUAN.md**: Sumber kebenaran tunggal data brand, armada, harga sewa, titik jemput pelabuhan/bandara, syarat lepas kunci, dan artikel blog.
- **Skill `penulis-ahli`**: WAJIB digunakan saat menulis, mengedit, atau merancang konten blog/artikel untuk memastikan human touch, optimasi SEO/GEO, dan bebas deteksi klise AI.

## Tech Stack
- **Framework**: Astro v7 (Latest - Static Site Generation)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **UI Architecture**: Mobile App Shell (Thumb-zone friendly, sticky bar, fixed bottom nav, modal bottom sheets, responsive desktop container max-w-5xl)
- **Content Engine**: Astro Content Layer API (`src/content.config.ts`) dengan validasi Zod
- **Typography**: `@fontsource/plus-jakarta-sans` lokal untuk performa Core Web Vitals (LCP/CLS)

## Routing SILO & Multibahasa
- `/` (Beranda ID)
- `/mobil/` & `/mobil/[slug]` (Katalog unit & detail spesifikasi)
- `/layanan/` & `/layanan/[slug]` (Lepas kunci, dengan supir, sewa bulanan, antar jemput)
- `/lokasi/` & `/lokasi/[slug]` (Hub titik jemput pelabuhan Batam Centre, Harbour Bay, Bandara Hang Nadim, dll.)
- `/blog/` & `/blog/[slug]` (Edukasi, panduan pelabuhan, rute Batam)
- `/en/` & `/en/car/[slug]` (Direktori wisman Singapura & Malaysia, kalkulasi estimasi SGD/MYR, alt hreflang)

## Perintah Penting
- `npm run dev`: Menjalankan development server
- `npm run build`: Build static site untuk produksi ke `dist/`
- `npm run lint`: Validasi TypeScript (`tsc --noEmit`)
