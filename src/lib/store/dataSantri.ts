import { writable } from 'svelte/store';
import { parseCSV } from '../utils/parseCSV';

export const dataSantri = writable<any[]>([]);

// Auto-load CSV begitu store di-import di mana saja
/**
 * Fungsi yang digunakan untuk ngeload data di csv dengan alur berikut :
 * 1. Fetch file csv mentah
 * 2. Kemudian dirubah menjadi text mentah,
 * 3. Lalu dirubah ke data array menggunakan fungsi parseCSV
 * 4. Dan terakhir disimpan ke store data santri
 */
async function init() {
	const res = await fetch('/data/dataSantri.csv');
	const text = await res.text();
	const parsed = parseCSV(text, ';');
	dataSantri.set(parsed);
}

init(); // langsung dijalankan
