import { writable, derived } from 'svelte/store';
import { dataSantri } from '../data/santri';

// filter value (store)
export const filterPondok = writable('');
export const filterKendaraan = writable('');
export const filterSearch = writable('');

// untuk dropdown (unique)
export const pondokList = writable([...new Set(dataSantri.map((d) => d.pondok))]);

export const kendaraanList = writable([...new Set(dataSantri.map((d) => d.kendaraan))]);

// hasil filter otomatis (derived store)
export const filteredSantri = derived(
	[filterPondok, filterKendaraan, filterSearch],
	([$filterPondok, $filterKendaraan, $search]) => {
		const s = $search.toLowerCase();
		return dataSantri.filter((d) => {
			const matchPondok = $filterPondok ? d.pondok === $filterPondok : true;
			const matchKendaraan = $filterKendaraan ? d.kendaraan === $filterKendaraan : true;

			// search cek beberapa field
			const matchSearch =
				d.nama.toLowerCase().includes(s) ||
				d.kelas.toLowerCase().includes(s) ||
				d.pondok.toLowerCase().includes(s) ||
				d.kendaraan.toLowerCase().includes(s);

			return matchPondok && matchKendaraan && matchSearch;
		});
	}
);
