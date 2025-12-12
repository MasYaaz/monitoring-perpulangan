import { toggleMenu } from './toggleMenu';

/**
 * Menggulirkan tampilan (viewport) secara halus (*smooth scroll*) ke elemen target berdasarkan ID.
 *
 * Fungsi ini melakukan pengecekan terlebih dahulu apakah elemen dengan ID tersebut ada di DOM.
 *
 * Jika elemen ditemukan, layar akan bergeser otomatis ke posisi elemen tersebut.
 *
 * juga berfungsi sebagai penutup menu mobile ketika tombol diklik (dengan fungsi toggle menu)
 *
 * @param {string} id - ID unik dari elemen HTML tujuan (harus string persis sesuai atribut `id`, tanpa tanda '#').
 * @returns {void}
 *
 * @example
 * // Penggunaan di dalam handler klik tombol/link
 * <button on:click={() => scrollToSection('section_faq')}>
 * Lihat FAQ
 * </button>
 */
export const scrollToSection = (id: string) => {
	const el = document.getElementById(id);
	toggleMenu();
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
};
