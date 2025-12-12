import { dataSantri } from '../store/dataSantri';

/**
 * Mengubah string format CSV mentah menjadi array objek JavaScript.
 * Baris pertama dari CSV dianggap sebagai header (kunci objek).
 * * @param {string} csv - String mentah yang berisi seluruh konten file CSV.
 * @param {string} [delimiter=';'] - Karakter pemisah antar kolom (default: titik koma).
 * @returns {Record<string, string>[]} Array objek di mana key adalah header dan value adalah data sel.
 * @example
 * const raw = "Nama;Kelas\nBudi;1A\nSiti;1B";
 * const data = parseCSV(raw);
 * // Hasil: [{ Nama: "Budi", Kelas: "1A" }, { Nama: "Siti", Kelas: "1B" }]
 */
export function parseCSV(csv: string, delimiter = ';') {
	const lines = csv.trim().split('\n');
	if (lines.length === 0) return [];

	const headers = lines[0].split(delimiter).map((h) => h.trim());
	const result: Record<string, string>[] = [];

	for (let i = 1; i < lines.length; i++) {
		const values = lines[i].split(delimiter).map((v) => v.trim());
		const row: Record<string, string> = {};

		headers.forEach((header, idx) => {
			row[header] = values[idx] ?? '';
		});

		result.push(row);
	}

	return result;
}

/**
 * Mengambil file CSV dari URL/path, melakukan parsing, dan menyimpan hasilnya ke Svelte store `dataSantri`.
 * * @async
 * @param {string} path - URL atau path relatif menuju file CSV.
 * @param {string} [delimiter=';'] - Karakter pemisah antar kolom (default: titik koma).
 * @returns {Promise<Record<string, string>[]>} Promise yang me-resolve array data yang sudah diparsing.
 * @example
 * // Di dalam onMount atau fungsi async
 * await loadCSV('/data/santri.csv');
 */
export async function loadCSV(path: string, delimiter = ';') {
	const res = await fetch(path);
	const text = await res.text();
	const parsed = parseCSV(text, delimiter);

	// Simpan ke store
	dataSantri.set(parsed);

	return parsed;
}
