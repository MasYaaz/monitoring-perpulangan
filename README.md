# Website Pusat Informasi SATGAS IKPM Surabaya

![Foto](public/thumbnail.webp)

Selamat Datang di Dokumentasi Website Pusat Informasi Satgas IKPM Surabaya. Web ini menampilkan informasi perpulangan dan arus balik santri (jadwal, denah, tata tertib, dan data santri) dengan UI yang sederhana, responsif, dan mudah digunakan oleh wali santri.

## Fitur Utama

- Halaman Utama, Denah, Tata Tertib, Jadwal Kedatangan, dan Data Santri.
- Filter Data Santri berdasarkan Pondok, Kendaraan, dan pencarian teks.
- Gallery denah dengan zoom (GLightbox).
- Dark mode tersimpan di `localStorage`.
- Data santri dimuat otomatis dari CSV publik di `public/data/dataSantri.csv`.

## Teknologi & Library

- Svelte + Vite
- Tailwind CSS
- GLightbox (galeri)
- FontAwesome, Lucide
- TypeScript, CSS, HTML

## Menjalankan & Build

1. Install dependencies:

```sh
npm install
```

2. Jalankan development server:

```sh
npm run dev
```

3. Build produksi:

```sh
npm run build
```

4. Preview build:

```sh
npm run preview
```

(Lihat script di [package.json](package.json))

## Struktur & Berkas Penting

- Entry: [src/main.js](src/main.js)
- Root component: [src/App.svelte](src/App.svelte)
- Styling global: [src/app.css](src/app.css)
- Data CSV: [public/data/dataSantri.csv](public/data/dataSantri.csv)

Komponen dan util utama:

- Filter & data:
  - Store data: [`dataSantri`](src/lib/store/dataSantri.ts) (auto-load CSV)
  - Parser CSV: [`parseCSV`](src/lib/utils/parseCSV.ts) & loader [`loadCSV`](src/lib/utils/parseCSV.ts)
  - Logic filter: [`filterPondok`, `filterKendaraan`, `filterSearch`, `filteredSantri`](src/lib/utils/filterData.ts)
  - Dropdown global: [`activeDropdown`](src/lib/store/dropDown.ts) & [`setupGlobalDropdownCloser`](src/lib/utils/setupGlobalDropdownCloser.ts)
- UI behavior:
  - Scroll handler: [`handleScroll`](src/lib/utils/scrollHandler.ts)
  - Scroll-to-section: [`scrollToSection`](src/lib/utils/scrollTo.ts)
  - Toggle menu (mobile): [`toggleMenu`](src/lib/utils/toggleMenu.ts)
  - Dark mode store: [`isDark`](src/lib/store/darkMode.ts)
- Komponen penting:
  - Navbar: [src/lib/component/Navbar.svelte](src/lib/component/Navbar.svelte) (MobileMenu, DekstopMenu)
  - Filter: [src/lib/component/FilterBar.svelte](src/lib/component/FilterBar.svelte)
  - Tabel Data: [src/lib/component/TabelDataSantri.svelte](src/lib/component/TabelDataSantri.svelte)
  - Tabel Jadwal: [src/lib/component/TabelJadwal.svelte](src/lib/component/TabelJadwal.svelte)
  - Gallery: [src/lib/component/photoGalery.svelte](src/lib/component/photoGalery.svelte)

## Catatan Pengembangan

- CSV delimiter default: `;`. Parsing di [`parseCSV`](src/lib/utils/parseCSV.ts).
- Dark mode meng-update class `dark` pada `document.documentElement` dan menyimpan pilihan di `localStorage` via [`isDark`](src/lib/store/darkMode.ts).
- Pastikan file statis (gambar, CSV) ada di folder `public/` agar `fetch('/data/dataSantri.csv')` berjalan baik.
- Gunakan `npm run format` untuk menerapkan Prettier.
