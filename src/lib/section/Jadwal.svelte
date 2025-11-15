<script>
	import { Bus } from 'lucide-svelte';

	// let jadwalKampusPutra = [
	// 	{ nama: 'Gontor 1', keberangkatan: '02.00 WIB', kedatangan: '06.00 WIB' },
	// 	{ nama: 'Gontor 3', keberangkatan: '02.00 WIB', kedatangan: '05.00 WIB' },
	// 	{ nama: 'Gontor 4', keberangkatan: '00.00 WIB', kedatangan: '09.00 WIB' },
	// 	{ nama: 'Gontor 5', keberangkatan: '01.00 WIB', kedatangan: '06.30 WIB' },
	// 	{ nama: 'Gontor 6', keberangkatan: 'Opsional', kedatangan: 'Opsional' }
	// ];

	// let jadwalKampusPutri = [
	// 	{ nama: 'Gontor Putri 1', keberangkatan: '23.00 WIB', kedatangan: '03.00 WIB' },
	// 	{ nama: 'Gontor Putri 3', keberangkatan: '02.00 WIB', kedatangan: '04.30 WIB' },
	// 	{ nama: 'Gontor Putri 4', keberangkatan: '01.00 WIB', kedatangan: '04.00 WIB' }
	// ];

	let jadwalKampusPutra = [
		{ nama: 'Gontor 1', keberangkatan: '13.00 WIB' },
		{ nama: 'Gontor 3', keberangkatan: '14.00 WIB' },
		{ nama: 'Gontor 4', keberangkatan: '06.00 WIB' },
		{ nama: 'Gontor 5', keberangkatan: '09.00 WIB' },
		{ nama: 'Gontor 6', keberangkatan: 'Opsional' }
	];

	let jadwalKampusPutri = [
		{ nama: 'Gontor Putri 1', keberangkatan: '10.00 WIB' },
		{ nama: 'Gontor Putri 3', keberangkatan: '09.00 WIB' },
		{ nama: 'Gontor Putri 4', keberangkatan: '09.10 WIB' }
	];
</script>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-10 pt-20 md:pt-25 2xl:pt-20"
	id="section_4"
>
	<div class="flex h-full w-full flex-col items-center justify-between gap-2">
		<div class="dark:bg-secondary dark:text-primary bg-primary text-secondary rounded-3xl p-5">
			<Bus class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div>
			<h2
				class="font-heading text-center text-4xl font-black uppercase lg:text-7xl dark:text-white"
			>
				Jadwal
			</h2>
			<h2 class="font-heading text-center text-xl font-bold uppercase lg:text-4xl dark:text-white">
				Keberangkatan
			</h2>
		</div>
	</div>
	<div class="flex w-full max-w-4xl flex-col gap-5">
		<div class="flex flex-col gap-2">
			<div>
				<h3 class="font-heading text-center text-lg font-bold lg:text-xl dark:text-white">
					Gontor Putri
				</h3>
				<!-- <h4 class="text-center font-heading text-xs lg:-mt-1 lg:text-base dark:text-white">
							Kamis, 28 Agustus 2025
						</h4> -->
				<h4 class="font-heading text-center text-xs lg:-mt-1 lg:text-base dark:text-white">
					Senin, 8 September 2025
				</h4>
			</div>
			<!-- <table class="w-full overflow-hidden rounded-md text-left text-sm">
						<thead
							class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base"
						>
							<tr class="text-center">
								<th class="py-1">No.</th>
								<th class="py-1">Pondok</th>
								<th class="py-1">Jam<br />Keberangkatan</th>
								<th class="py-1">Jam<br />Kedatangan</th>
							</tr>
						</thead>
						<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
							{#each jadwalKampusPutri as jadwal, i}
								<tr class="text-center">
									<td class="px-2 py-2">{i + 1}.</td>
									<td class="px-2 py-2">{jadwal.nama}</td>
									<td class="px-1 py-2">{jadwal.keberangkatan}</td>
									<td class="px-1 py-2">{jadwal.kedatangan}</td>
								</tr>
							{/each}
						</tbody>
					</table> -->
			<table class="w-full overflow-hidden rounded-xl text-left text-sm">
				<thead
					class="font-heading bg-primary dark:bg-secondary text-secondary dark:text-primary text-xs font-normal uppercase lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No.</th>
						<th class="py-1">Pondok</th>
						<th class="py-1">Jam<br />Keberangkatan</th>
					</tr>
				</thead>
				<tbody class="font-heading text-primary bg-gray-100 text-xs lg:text-base">
					{#each jadwalKampusPutri as jadwal, i}
						<tr class="text-center">
							<td class="px-2 py-2">{i + 1}.</td>
							<td class="px-2 py-2">{jadwal.nama}</td>
							<td class="px-1 py-2">{jadwal.keberangkatan}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="flex flex-col gap-2">
			<div>
				<h3 class="font-heading text-center text-lg font-bold lg:text-xl dark:text-white">
					Gontor Putra
				</h3>
				<!-- <h4 class="text-center font-heading text-xs lg:-mt-1 lg:text-base dark:text-white">
							Jum’at, 29 Agustus 2025
						</h4> -->
				<h4 class="font-heading text-center text-xs lg:-mt-1 lg:text-base dark:text-white">
					Selasa, 9 September 2025
				</h4>
			</div>
			<!-- <table class="w-full overflow-hidden rounded-md text-left text-sm">
						<thead
							class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base"
						>
							<tr class="text-center">
								<th class="py-1">No.</th>
								<th class="py-1">Pondok</th>
								<th class="py-1">Jam<br />Keberangkatan</th>
								<th class="py-1">Jam<br />Kedatangan</th>
							</tr>
						</thead>
						<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
							{#each jadwalKampusPutra as jadwal, i}
								<tr class="text-center">
									<td class="px-2 py-2">{i + 1}.</td>
									<td class="px-2 py-2">{jadwal.nama}</td>
									<td class="px-1 py-2">{jadwal.keberangkatan}</td>
									<td class="px-1 py-2">{jadwal.kedatangan}</td>
								</tr>
							{/each}
						</tbody>
					</table> -->
			<table class="w-full overflow-hidden rounded-xl text-left text-sm">
				<thead
					class="font-heading bg-primary dark:bg-secondary text-secondary dark:text-primary text-xs font-normal uppercase lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No.</th>
						<th class="py-1">Pondok</th>
						<th class="py-1">Jam<br />Keberangkatan</th>
					</tr>
				</thead>
				<tbody class="font-heading text-primary bg-gray-100 text-xs lg:text-base">
					{#each jadwalKampusPutra as jadwal, i}
						<tr class="text-center">
							<td class="px-2 py-2">{i + 1}.</td>
							<td class="px-2 py-2">{jadwal.nama}</td>
							<td class="px-1 py-2">{jadwal.keberangkatan}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>
