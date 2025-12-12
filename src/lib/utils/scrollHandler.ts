import { halamanAktif, menuTerbuka } from '../store/ui';
import { get } from 'svelte/store';

/**
 * Menangani event scroll pada window untuk memperbarui state UI secara real-time.
 *
 * Fungsi ini melakukan kalkulasi posisi scroll pengguna untuk:
 * 1. Menentukan section mana yang sedang dilihat (`halamanAktif`).
 * 2. Mengatur visibilitas navbar (sembunyi di section awal, tampil di section berikutnya).
 * 3. Menutup menu navigasi (mobile) secara otomatis saat pengguna menggulir.
 *
 * @remarks
 * - Menggunakan `offset` 100px agar perubahan status aktif terasa lebih responsif (sedikit sebelum elemen menyentuh atas layar).
 * - Memiliki logika khusus untuk mendeteksi jika pengguna sudah mencapai dasar halaman (`bottom of page`).
 *
 * @returns {void} Tidak mengembalikan nilai, tetapi memicu update pada Svelte store.
 */
export function handleScroll() {
	const offset = 100;
	const posisi = window.scrollY + offset;
	const tinggiHalaman = document.documentElement.scrollHeight;
	const tinggiViewport = window.innerHeight;

	// Fungsi bantu untuk ambil posisi tiap section
	const section = (id: string) => document.getElementById(id)?.offsetTop ?? 0;

	// Tentukan section aktif berdasarkan posisi scroll
	const posisiAktif =
		posisi >= section('section_5') || window.scrollY + tinggiViewport >= tinggiHalaman - 5
			? 'section_5'
			: posisi >= section('section_4')
				? 'section_4'
				: posisi >= section('section_3')
					? 'section_3'
					: posisi >= section('section_2')
						? 'section_2'
						: 'section_1';

	// Update store halaman aktif
	halamanAktif.set(posisiAktif);

	// Tutup menu jika sedang terbuka saat scroll (UX improvement)
	if (get(menuTerbuka)) {
		menuTerbuka.set(false);
	}
}
