import { writable } from 'svelte/store';

/**
 * Store yang digunakan untuk mengatur darkMode dan menyimpannya ke localStorage
 */
export const isDark = writable(
	typeof localStorage !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false
);

isDark.subscribe((value) => {
	if (typeof document !== 'undefined') {
		document.documentElement.classList.toggle('dark', value);
		localStorage.setItem('theme', value ? 'dark' : 'light');
	}
});
