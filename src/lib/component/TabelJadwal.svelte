<script>
	const jadwal = {
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

	const jadwalSemua = [
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
</script>

<div class="z-10 flex w-full max-w-4xl flex-col gap-5 lg:gap-10">
	{#each jadwalSemua as j}
		<div class="flex flex-col gap-2">
			<div>
				<h3
					class="font-heading text-center text-lg font-bold transition-all duration-300 ease-in lg:text-2xl dark:text-white"
				>
					{j.title}
				</h3>

				<h4
					class="font-heading text-center text-xs transition-all duration-300 ease-in lg:-mt-1 lg:text-lg dark:text-white"
				>
					{j.subtitle}
				</h4>
			</div>
			<table
				class="dark:shadow-secondary w-full overflow-hidden rounded-xl text-left text-sm shadow-md/30 transition-all duration-300 ease-in"
			>
				<thead
					class=" bg-primary dark:bg-secondary text-secondary dark:text-primary text-[10px] font-normal uppercase transition-all duration-300 ease-in lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No.</th>
						<th class="py-1">Pondok</th>
						<th class="py-1">Jam<br />Keberangkatan</th>
						<th class="py-1">Jam<br />Kedatangan</th>
					</tr>
				</thead>
				<tbody
					class="text-primary bg-gray-100 text-xs font-semibold transition-all duration-300 ease-in lg:text-base"
				>
					{#each j.data as row, i}
						<tr class="text-center">
							<td class="px-2 py-2">{i + 1}.</td>
							<td class="px-2 py-2">{row.nama}</td>
							<td class="px-1 py-2">{row.keberangkatan}</td>
							<td class="px-1 py-2">{row.kedatangan}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</div>
