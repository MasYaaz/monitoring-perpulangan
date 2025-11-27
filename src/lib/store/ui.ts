import { writable } from 'svelte/store';

export const halamanAktif = writable('section_1'); // string
export const menuTerbuka = writable(false); // boolean
export const showNavbar = writable(false); // boolean

export const toggleMenu = () => {
	menuTerbuka.update((val) => !val);
};

export const scrollToSection = (id: string) => {
	const el = document.getElementById(id);
	menuTerbuka.update((val) => !val);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
};
