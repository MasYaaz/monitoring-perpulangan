import { writable } from 'svelte/store';

/**
 * Store yang digunakan sebagai penanda Dropdown mana yang terbuka
 */
export const activeDropdown = writable<string | null>(null);
