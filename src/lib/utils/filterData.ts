import { writable, derived } from 'svelte/store';
import { dataSantri } from '../store/dataSantri';

// =========================================
// STATE FILTER (INPUT USER)
// =========================================

/**
 * Store writable untuk menyimpan nilai filter 'Pondok' yang dipilih user.
 * Nilai kosong ('') berarti tidak ada filter yang diterapkan.
 * @type {import('svelte/store').Writable<string>}
 */
export const filterPondok = writable('');

/**
 * Store writable untuk menyimpan nilai filter 'Kendaraan' yang dipilih user.
 * @type {import('svelte/store').Writable<string>}
 */
export const filterKendaraan = writable('');

/**
 * Store writable untuk menyimpan kata kunci pencarian (search query).
 * Digunakan untuk pencarian teks bebas pada berbagai kolom.
 * @type {import('svelte/store').Writable<string>}
 */
export const filterSearch = writable('');

// =========================================
// DROPDOWN LIST OPTIONS (DERIVED)
// =========================================

/**
 * Menghasilkan daftar unik nama pondok dari `dataSantri` untuk mengisi opsi dropdown.
 * Menggunakan `Set` untuk memastikan tidak ada duplikasi.
 * @type {import('svelte/store').Readable<string[]>}
 */
export const pondokList = derived(dataSantri, ($ds) => {
	return [...new Set($ds.map((d) => d.pondok))];
});

/**
 * Menghasilkan daftar unik jenis kendaraan dari `dataSantri` untuk opsi dropdown.
 * @type {import('svelte/store').Readable<string[]>}
 */
export const kendaraanList = derived(dataSantri, ($ds) => {
	return [...new Set($ds.map((d) => d.kendaraan))];
});

// =========================================
// MAIN FILTER LOGIC (DERIVED)
// =========================================

/**
 * Store utama yang menghasilkan daftar santri yang telah difilter.
 *
 * Logika Filter (AND Logic):
 * 1. **Pondok:** Exact match (jika filter tidak kosong).
 * 2. **Kendaraan:** Exact match (jika filter tidak kosong).
 * 3. **Search:** Partial match (case-insensitive) yang mencakup:
 * - Nama
 * - Kelas
 * - Pondok
 * - Kendaraan
 *
 * Store ini akan re-aktif (update otomatis) setiap kali `dataSantri` atau salah satu filter berubah.
 *
 * @returns {import('svelte/store').Readable<Record<string, string>[]>} Array objek santri hasil filter.
 */
export const filteredSantri = derived(
	[dataSantri, filterPondok, filterKendaraan, filterSearch],
	([$ds, $filterPondok, $filterKendaraan, $search]) => {
		const s = $search.toLowerCase();

		return $ds.filter((d) => {
			// Cek filter dropdown (abaikan jika value kosong)
			const matchPondok = $filterPondok ? d.pondok === $filterPondok : true;
			const matchKendaraan = $filterKendaraan ? d.kendaraan === $filterKendaraan : true;

			// Cek search query (mencari di string mana saja)
			const matchSearch =
				d.nama.toLowerCase().includes(s) ||
				d.kelas.toLowerCase().includes(s) ||
				d.pondok.toLowerCase().includes(s) ||
				d.kendaraan.toLowerCase().includes(s);

			// Semua kondisi harus terpenuhi (AND)
			return matchPondok && matchKendaraan && matchSearch;
		});
	}
);
