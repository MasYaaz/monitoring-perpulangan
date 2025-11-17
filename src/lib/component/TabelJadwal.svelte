<script>
	import { jadwalSemua } from '../data/jadwal';
</script>

<div class="flex w-full max-w-4xl flex-col gap-5 lg:gap-10">
	{#each jadwalSemua as j}
		<div class="flex flex-col gap-2">
			<div>
				<h3 class="font-heading text-center text-lg font-bold lg:text-2xl dark:text-white">
					{j.title}
				</h3>

				<h4 class="font-heading text-center text-xs lg:-mt-1 lg:text-lg dark:text-white">
					{j.subtitle}
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
				<tbody class="text-primary bg-gray-100 text-xs font-semibold lg:text-base">
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
