# Lincah Rent Car (Batam Rent Car)

Website **Static Site Generator (SSG)** berkinerja tinggi untuk bisnis rental mobil di Batam.
Dirancang dengan antarmuka bergaya **Mobile App Shell** yang cepat, ramah jempol
(*thumb-zone friendly*), dan minim friksi pemesanan. Semua alur transaksi berujung
pada percakapan WhatsApp dengan pesan awal otomatis (*pre-filled message*).

> ⚠️ **Status Proyek: Belum selesai (Work in Progress)**
> Proyek ini di-backup ke GitHub untuk dilanjutkan di perangkat lain. Beberapa
> bagian (konten, komponen, halaman `/en`, polish UI) masih dalam pengembangan.

---

## 📌 Informasi Bisnis

| Item | Detail |
|------|--------|
| **Nama Brand** | Lincah Rent Car |
| **Domain** | `lincahrentcar.com` |
| **Tagline** | "Sewa Mobil Cepat, Nyaman, & Fleksibel di Batam" |
| **WhatsApp** | `+6281373703639` (0813-7370-3639) |
| **Alamat** | Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai, Batam, Kepri 29431 |
| **Layanan** | Lepas Kunci, Dengan Supir, Sewa Mingguan/Bulanan, Antar Jemput Bandara & Pelabuhan |

---

## 🛠 Tech Stack

- **Framework:** [Astro](https://astro.build) (Static Site Generation)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **UI Architecture:** Mobile App Shell (sticky top bar, fixed bottom nav, bottom sheet modal, container desktop `max-w-5xl`)
- **Content Engine:** Astro Content Layer API (`src/content.config.ts`) dengan validasi Zod
- **Typography:** `@fontsource/plus-jakarta-sans` lokal untuk optimasi Core Web Vitals (LCP/CLS)
- **SEO:** `@astrojs/sitemap`, JSON-LD structured data, hreflang multibahasa

---

## 📁 Struktur Proyek

```text
.
├── astro.config.mjs          # Konfigurasi Astro, sitemap, Tailwind
├── src/
│   ├── components/           # Komponen UI (BottomNav, StickyTopBar, VehicleCard, dll.)
│   ├── content/              # Konten berbasis Markdown (mobil, lokasi, layanan, blog)
│   ├── layouts/              # AppLayout (shell mobile)
│   ├── pages/                # Routing & halaman (termasuk direktori /en/)
│   ├── styles/               # global.css
│   └── utils/                # i18n, whatsapp, currency helpers
├── public/                   # Aset statis (gambar, logo, favicon, robots.txt)
├── src/content.config.ts     # Skema koleksi konten (Zod)
└── package.json
```

### Routing (SEO SILO)

| Rute | Fungsi |
|------|--------|
| `/` | Beranda (ID) |
| `/mobil/` & `/mobil/[slug]` | Katalog armada & detail spesifikasi |
| `/layanan/` & `/layanan/[slug]` | Lepas kunci, dengan supir, sewa bulanan, antar jemput |
| `/lokasi/` & `/lokasi/[slug]` | Hub titik jemput (pelabuhan & bandara) |
| `/blog/` & `/blog/[slug]` | Artikel edukasi & panduan |
| `/en/` & `/en/car/[slug]` | Direktori wisman (SG/MY) dengan estimasi SGD/MYR |

---

## 🚀 Cara Menjalankan Lokal

Prasyarat: **Node.js** (v18+) & **npm**.

```bash
# 1. Install dependensi
npm install

# 2. Jalankan development server (http://localhost:4321)
npm run dev

# 3. Build untuk produksi (output ke dist/)
npm run build

# 4. Preview hasil build
npm run preview

# 5. Validasi TypeScript
npm run lint
```

---

## 📝 Catatan Pengembangan (To-Do / Lanjutan)

- [ ] Melengkapi & memperbaiki konten halaman `/en/` (kalkulasi SGD/MYR, hreflang)
- [ ] Penyempurnaan komponen UI (bottom sheet, filter chips, banner bahasa)
- [ ] Audit & penambahan Schema.org JSON-LD pada tiap halaman
- [ ] Optimasi OG image & meta tags
- [ ] Penyesuaian harga & armada terbaru di `SUMBER-PENGETAHUAN.md`
- [ ] Testing responsif desktop & mobile

---

## 📚 Referensi Internal

- `AGENTS.md` — Petunjuk untuk AI agent yang mengerjakan proyek ini.
- `instruksi.md` — Spesifikasi lengkap & instruksi desain proyek.
- `SUMBER-PENGETAHUAN.md` — Sumber data tunggal (brand, armada, harga, lokasi).

---

## 📄 Lisensi

Proyek privat untuk keperluan bisnis. Hak cipta © Lincah Rent Car.
