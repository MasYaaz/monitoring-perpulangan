import { writable } from 'svelte/store';

/**
 *
 * Store yang menjadi penanda halaman mana yang aktif
 */
export const halamanAktif = writable('section_1'); // string
/**
 *
 * Store yang menjadi penanda apakah menu mobile terbuka apa gak
 */
export const menuTerbuka = writable(false); // boolean
