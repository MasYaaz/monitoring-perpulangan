/**
 * Store array berisi jadwal dari setiap pondok dan dipisahkan
 * antara gontor putra & putri
 */
export const jadwal = {
	perpulangan: {
		jadwalKampusPutra: [
			{ nama: 'Gontor 1', keberangkatan: '02.00 WIB', kedatangan: '06.00 WIB' },
			{ nama: 'Gontor 3', keberangkatan: '02.00 WIB', kedatangan: '05.00 WIB' },
			{ nama: 'Gontor 4', keberangkatan: '00.00 WIB', kedatangan: '09.00 WIB' },
			{ nama: 'Gontor 5', keberangkatan: '01.00 WIB', kedatangan: '06.30 WIB' },
			{ nama: 'Gontor 6', keberangkatan: 'Opsional', kedatangan: 'Opsional' }
		],
		jadwalKampusPutri: [
			{ nama: 'Gontor Putri 1', keberangkatan: '23.00 WIB', kedatangan: '03.00 WIB' },
			{ nama: 'Gontor Putri 3', keberangkatan: '02.00 WIB', kedatangan: '04.30 WIB' },
			{ nama: 'Gontor Putri 4', keberangkatan: '01.00 WIB', kedatangan: '04.00 WIB' }
		]
	},

	arusbalik: {
		jadwalKampusPutra: [
			{ nama: 'Gontor 1', keberangkatan: '13.00 WIB' },
			{ nama: 'Gontor 3', keberangkatan: '14.00 WIB' },
			{ nama: 'Gontor 4', keberangkatan: '06.00 WIB' },
			{ nama: 'Gontor 5', keberangkatan: '09.00 WIB' },
			{ nama: 'Gontor 6', keberangkatan: 'Opsional' }
		],
		jadwalKampusPutri: [
			{ nama: 'Gontor Putri 1', keberangkatan: '10.00 WIB' },
			{ nama: 'Gontor Putri 3', keberangkatan: '09.00 WIB' },
			{ nama: 'Gontor Putri 4', keberangkatan: '09.10 WIB' }
		]
	}
};

/**
 * Store array untuk menggabungkan semua array yang ada di jadwal
 *
 * Digunakan untuk buat objek each di jadwal pondok
 */
export const jadwalSemua = [
	{
		title: 'Gontor Putri',
		subtitle: 'Senin, 8 September 2025',
		data: jadwal.perpulangan.jadwalKampusPutri
	},
	{
		title: 'Gontor Putra',
		subtitle: 'Selasa, 9 September 2025',
		data: jadwal.perpulangan.jadwalKampusPutra
	}
];
