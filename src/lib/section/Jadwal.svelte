<script>
	import { Bus } from 'lucide-svelte';
	import { jadwal } from '../data/jadwal';

	const putri = jadwal.perpulangan.jadwalKampusPutri;
	const putra = jadwal.perpulangan.jadwalKampusPutra;
</script>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-10 pt-20 md:pt-25 lg:pt-30"
	id="section_4"
>
	<div class="flex h-full w-full flex-col items-center justify-between gap-2">
		<div
			class="dark:bg-secondary dark:text-primary bg-primary text-secondary dark:shadow-secondary rounded-3xl p-5 shadow-md/50"
		>
			<Bus class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div>
			<h2
				class="font-heading text-center text-4xl font-black uppercase lg:text-7xl dark:text-white"
			>
				Jadwal
			</h2>
			<h2 class="font-heading text-center text-xl font-bold uppercase lg:text-4xl dark:text-white">
				Kedatangan
			</h2>
		</div>
	</div>
	<div class="flex w-full max-w-4xl flex-col gap-5 lg:gap-10">
		<div class="flex flex-col gap-2">
			<div>
				<h3 class="font-heading text-center text-lg font-bold lg:text-2xl dark:text-white">
					Gontor Putri
				</h3>

				<h4 class="font-heading text-center text-xs lg:-mt-1 lg:text-lg dark:text-white">
					Senin, 8 September 2025
				</h4>
			</div>
			<table
				class="dark:shadow-secondary w-full overflow-hidden rounded-xl text-left text-sm shadow-md/30"
			>
				<thead
					class=" bg-primary dark:bg-secondary text-secondary dark:text-primary text-[10px] font-normal uppercase lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No.</th>
						<th class="py-1">Pondok</th>
						<th class="py-1">Jam<br />Keberangkatan</th>
						<th class="py-1">Jam<br />Kedatangan</th>
					</tr>
				</thead>
				<tbody class="text-primary bg-gray-100 text-[10px] font-semibold lg:text-base">
					{#each putri as p, i}
						<tr class="text-center">
							<td class="px-2 py-2">{i + 1}.</td>
							<td class="px-2 py-2">{p.nama}</td>
							<td class="px-1 py-2">{p.keberangkatan}</td>
							<td class="px-1 py-2">{p.kedatangan}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="flex flex-col gap-2">
			<div>
				<h3 class="font-heading text-center text-lg font-bold lg:text-2xl dark:text-white">
					Gontor Putra
				</h3>
				<h4 class="font-heading text-center text-xs lg:-mt-1 lg:text-lg dark:text-white">
					Selasa, 9 September 2025
				</h4>
			</div>
			<table
				class="dark:shadow-secondary w-full overflow-hidden rounded-xl text-left text-sm shadow-md/30"
			>
				<thead
					class="bg-primary dark:bg-secondary text-secondary dark:text-primary text-[10px] font-normal uppercase lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No.</th>
						<th class="py-1">Pondok</th>
						<th class="py-1">Jam<br />Keberangkatan</th>
						<th class="py-1">Jam<br />Kedatangan</th>
					</tr>
				</thead>
				<tbody class="text-primary bg-gray-100 text-[10px] font-semibold lg:text-base">
					{#each putra as p, i}
						<tr class="text-center">
							<td class="px-2 py-2">{i + 1}.</td>
							<td class="px-2 py-2">{p.nama}</td>
							<td class="px-1 py-2">{p.keberangkatan}</td>
							<td class="px-1 py-2">{p.kedatangan}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>
