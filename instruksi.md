---

# SPESIFIKASI PROYEK & INSTRUKSI AI AGENT: LINCAH RENT CAR

## 1. Ringkasan & Tujuan Proyek

Bangun website *Static Site Generator* (SSG) berkinerja tinggi menggunakan **Astro JS** untuk bisnis rental mobil di Batam dengan domain **`lincahrentcar.com`**. Desain mengadopsi antarmuka bergaya **Mobile App Shell** yang cepat, ramah jempol (*thumb-zone friendly*), dan minim friksi pemesanan.

* **Nama Bisnis:** Lincah Rent Car
* **Domain:** `lincahrentcar.com`
* **Alamat Kantor:** Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai - Batam, Kepri 29431
* **Kontak WhatsApp:** `+6281373703639` (0813-7370-3639)
* **Fokus Konversi:** Semua alur transaksi berujung pada percakapan WhatsApp dengan pesan awal otomatis (*pre-filled message*).

---

## 2. Token Desain & Sistem Visual (Mobile App-Like)

* **Palet Warna:**
* **Primary (Brand):** Royal Blue `#1447e6` (App bar atas, tombol primer, elemen aktif).
* **Background Utama:** Putih Bersih `#FFFFFF`.
* **Background Sekunder/Netral:** Slate/Abu-abu lembut `#F8FAFC` (latar belakang pemisah kartu).
* **Action / Conversion:** Hijau WhatsApp `#25D366` (eksklusif untuk tombol pesan/chat).


* **Tipografi:** `Plus Jakarta Sans` atau `Inter` (gunakan Astro font loader lokal/ringan agar LCP optimal).
* **Bentuk Komponen:** Sudut membulat modern (`rounded-2xl` / `16px`), elevasi bayangan halus (*subtle shadow*).

---

## 3. Tata Letak Antarmuka (UI/UX)

### A. Tampilan Mobile-First (App Shell)

* **Sticky Top Bar:** Menampilkan logo Lincah, pin lokasi ringkas (*Batam Free Trade Zone*), dan *toggle switcher* pil bahasa (`ID | EN`).
* **Horizontal Swipeable Chips:** Filter cepat kategori armada (Semua, MPV, SUV, Hiace, Lepas Kunci, Dengan Supir).
* **Vehicle Cards:** Foto mobil bersih menyerong (16:9), lencana spesifikasi kapsul (*Pills*: transmisi, kapasitas kursi, koper), harga harian IDR yang jelas (beserta estimasi SGD/MYR di versi `/en/`), dan tombol aksi WhatsApp hijau.
* **Bottom Sheet Modal:** Informasi spesifikasi lengkap dan syarat sewa ringkas tampil melalui panel geser bawah (*slide-up*), tanpa navigasi halaman baru yang berat.
* **Fixed Bottom Navigation Bar:** Mengunci navigasi di bagian bawah layar HP:
1. *Beranda* (Home)
2. *Armada* (Katalog unit)
3. *Titik Jemput* (Bandara & pelabuhan)
4. *Chat WA* (Ikon WhatsApp hijau dengan badge notifikasi "Online").



### B. Adaptasi Layar Desktop

* Pusatkan antarmuka dalam kontainer terpusat (*max-width: 1024px*).
* Sembunyikan *Bottom Navigation Bar* di layar desktop, gantikan dengan menu navigasi atas yang bersih dan terstruktur.

---

## 4. Arsitektur Routing & SEO SILO

Terapkan struktur *nested URL* yang ketat tanpa kanibalisasi kata kunci:

```text
/ (Homepage ID)
├── /mobil/
│   ├── /mobil/[slug]/
├── /layanan/
│   ├── /layanan/lepas-kunci/
│   ├── /layanan/dengan-supir/
│   ├── /layanan/sewa-bulanan/
│   └── /layanan/antar-jemput-bandara-pelabuhan/
├── /lokasi/
│   ├── /lokasi/batam-center/
│   ├── /lokasi/batu-aji/
│   ├── /lokasi/tiban/
│   ├── /lokasi/sekupang/
│   ├── /lokasi/bengkong/
│   └── /lokasi/punggur/
├── /blog/
│   ├── panduan-jemput-pelabuhan-batam-centre-vs-harbour-bay/
│   ├── rute-biaya-rental-mobil-ke-jembatan-barelang/
│   └── syarat-lepas-kunci-wisatawan-luar-batam/
└── /en/ (Direktori Khusus Wisman SG/MY)
    ├── /en/ (Homepage EN)
    ├── /en/car/[slug]/
    └── /en/guide/[slug]/

```

* **Aturan Multibahasa:**
* Gunakan tag `<link rel="alternate" hreflang="..." />` di setiap halaman yang memiliki padanan.
* Sematkan banner rekomendasi bahasa non-intrusif berbasis `navigator.language` (jangan gunakan *hard-redirect* IP).



---

## 5. Skema Astro Content Collections (`src/content/config.ts`)

Gunakan validasi Zod untuk setiap koleksi berbasis berkas Markdown (`.md`):

```typescript
import { defineCollection, z } from 'astro:content';

const armadaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['id', 'en']),
    carModel: z.string(),
    transmission: z.enum(['Matic', 'Manual', 'Both']),
    seats: z.number(),
    luggageCapacity: z.number(),
    priceDailySelfDrive: z.number().optional(),
    priceDailyWithDriver: z.number(),
    currency: z.literal('IDR').default('IDR'),
    features: z.array(z.string()),
    popularFor: z.string(),
    pickupLocations: z.array(z.string()),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

const lokasiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    areaName: z.string(),
    hubType: z.enum(['Airport', 'Ferry Terminal', 'Industrial Area', 'City Center']),
    pickupTimeEstimate: z.string(),
    deliveryFee: z.number().default(0),
    landmarkKey: z.array(z.string()),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['id', 'en']),
    pubDate: z.date(),
    author: z.string().default('Tim Operasional Lincah Rent Car'),
    summary: z.string(),
    featuredImage: z.string(),
    relatedCars: z.array(z.string()).optional(),
  }),
});

export const collections = {
  armada: armadaCollection,
  lokasi: lokasiCollection,
  blog: blogCollection,
};

```

---

## 6. Integrasi SEO Teknis, Schema.org & Meta Tags

1. **JSON-LD Structured Data:**
* **Root Layout (`AutoRental` / `LocalBusiness`):**
```json
{
  "@context": "https://schema.org",
  "@type": "AutoRental",
  "name": "Lincah Rent Car",
  "url": "https://lincahrentcar.com",
  "logo": "https://lincahrentcar.com/logo.png",
  "telephone": "+6281373703639",
  "priceRange": "IDR 300.000 - IDR 1.500.000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai",
    "addressLocality": "Batam",
    "addressRegion": "Kepulauan Riau",
    "postalCode": "29431",
    "addressCountry": "ID"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
}

```


* **Halaman Armada:** Pasang skema `Product` dan `Offer` dengan mata uang `IDR`.
* **Halaman Beranda:** Pasang skema `FAQPage` untuk menjawab pertanyaan seputar titik antar-jemput dan syarat lepas kunci.


2. **Open Graph & Aset Gambar:**
* Rasio gambar OG standar `1200x630 px`.
* Gunakan `<Image/>` dari `astro:assets` untuk konversi otomatis format WebP dan pencegahan Cumulative Layout Shift (CLS).
* Pastikan tag `canonical` selalu menggunakan URL absolut.
* Pasang `@astrojs/sitemap` dan berkas `robots.txt` standar produksi.



---

## 7. Format Tautan WhatsApp Dinamis

Format tautan wajib menggunakan URL resmi `[https://wa.me/6281373703639?text=](https://wa.me/6281373703639?text=)...`:

* **Pesan Default Halaman Indonesia:**
`Halo Admin Lincah Rent Car, saya tertarik sewa mobil [Nama Mobil] di Batam untuk tanggal [Tanggal]. Apakah unit tersedia?`
* **Pesan Default Halaman Titik Jemput (Lokasi):**
`Halo Admin Lincah Rent Car, saya butuh penjemputan mobil di [Bandara Hang Nadim / Harbour Bay / Batam Centre] untuk tanggal [Tanggal]. Mohon infonya.`
* **Pesan Default Halaman Versi Inggris (`/en/`):**
`Hi Lincah Rent Car, I would like to book [Car Model] for [Rental Dates]. Pickup point: [Harbour Bay / Batam Centre / Airport]. Could you check the availability?`
