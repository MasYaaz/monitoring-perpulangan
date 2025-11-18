import { writable } from 'svelte/store';
import { parseCSV } from './parseCSV';

export const dataSantri = writable<any[]>([]);

// Auto-load CSV begitu store di-import di mana saja
async function init() {
	const res = await fetch('/src/lib/data/dataSantri.csv');
	const text = await res.text();
	const parsed = parseCSV(text, ';');

	dataSantri.set(parsed);
}

init(); // langsung dijalankan
