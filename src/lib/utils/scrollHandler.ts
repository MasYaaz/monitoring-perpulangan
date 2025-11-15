import { halamanAktif, menuTerbuka, showNavbar } from '../store/ui';
import { get } from 'svelte/store';

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

	// Tampilkan navbar hanya setelah user scroll melewati sedikit
	showNavbar.set(posisiAktif !== 'section_1'); // nilai bisa disesuaikan (misal 50px)

	// Tutup menu jika sedang terbuka saat scroll
	if (get(menuTerbuka)) {
		menuTerbuka.set(false);
	}
}
