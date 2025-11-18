import { dataSantri } from './dataSantri';

// Parse CSV
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

// Load CSV + simpan ke store
export async function loadCSV(path: string, delimiter = ';') {
	const res = await fetch(path);
	const text = await res.text();
	const parsed = parseCSV(text, delimiter);

	// Simpan ke store
	dataSantri.set(parsed);

	return parsed;
}
