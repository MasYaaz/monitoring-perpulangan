import { activeDropdown } from '../store/dropDown';

/**
 * Menginisialisasi *global event listeners* untuk menutup dropdown yang sedang aktif secara otomatis.
 *
 * Fungsi ini menangani dua skenario interaksi pengguna:
 * 1. **Click Outside:** Menutup dropdown jika pengguna mengklik di luar elemen dengan class `.dropdown`.
 * 2. **Scroll:** Menutup dropdown segera setelah pengguna melakukan scroll pada window (untuk mencegah posisi menu yang melayang tidak sesuai).
 *
 * @returns {() => void} Fungsi *cleanup* yang harus dipanggil saat komponen dihancurkan (onDestroy) untuk menghapus event listeners dan mencegah memory leak.
 *
 * @example
 * // Penggunaan dalam Svelte onMount
 * onMount(() => {
 * const cleanup = setupGlobalDropdownCloser();
 * return cleanup; // Svelte akan otomatis memanggil ini saat komponen unmount
 * });
 */
export function setupGlobalDropdownCloser() {
	// Helper untuk mereset store
	function closeAll() {
		activeDropdown.set(null);
	}

	// Handler klik: Cek apakah target klik berada di dalam elemen .dropdown
	function handleClick(event: MouseEvent) {
		// Jika yang diklik BUKAN bagian dari .dropdown, maka tutup semua
		if (!(event.target as HTMLElement).closest('.dropdown')) {
			closeAll();
		}
	}

	// Handler scroll: Tutup dropdown saat scrolling terjadi
	function handleScroll() {
		closeAll();
	}

	// Pasang listener
	window.addEventListener('click', handleClick);
	// passive: true meningkatkan performa scroll karena browser tidak perlu menunggu listener selesai
	window.addEventListener('scroll', handleScroll, { passive: true });

	// Kembalikan fungsi untuk menghapus listener (Cleanup)
	return () => {
		window.removeEventListener('click', handleClick);
		window.removeEventListener('scroll', handleScroll);
	};
}
