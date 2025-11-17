<script>
	import { filteredSantri } from '../utils/filterData';
</script>

<div class="mb-10 flex w-full max-w-4xl flex-col gap-5">
	<div class=" dark:shadow-secondary w-full overflow-hidden rounded-2xl shadow-md/30">
		<table class="w-full text-sm">
			<thead
				class=" bg-primary dark:bg-secondary text-secondary dark:text-primary text-xs font-bold uppercase lg:text-base"
			>
				<tr class="text-center">
					<th class="w-[5%] px-1 py-2">No.</th>
					<th class="w-[45%] py-1">Nama</th>
					<th class="w-[10%] px-2 py-1">Kelas</th>
					<th class="hidden w-[20%] py-1 md:table-cell">Pondok</th>
					<th class="hidden w-[25%] py-1 md:table-cell">Bis</th>
				</tr>
			</thead>
		</table>
		<div
			class="max-h-[380px] w-full overflow-y-auto md:max-h-[420px] lg:max-h-[480px] xl:max-h-[580px]"
		>
			<table class="w-full text-sm">
				<tbody class="text-primary bg-gray-100 text-xs font-semibold lg:text-base">
					{#if $filteredSantri.length === 0}
						<tr class="text-center text-sm">
							<td class="w-[5%] py-1"> - </td>
							<td class="w-[45%] px-1 py-1"> Hasil Tidak ditemukan</td>
							<td class="w-[10%] py-1"> - </td>
							<td class="hidden w-[20%] py-1 md:table-cell"> - </td>
							<td class="hidden w-[25%] py-1 md:table-cell"> - </td>
						</tr>
					{:else}
						{#each $filteredSantri as d, i}
							<tr class="text-center">
								<td class="w-[5%] py-1">{i + 1}</td>
								<td class="w-[45%] px-1 py-1 text-left">{d.nama}</td>
								<td class="w-[10%] py-1">{d.kelas}</td>
								<td class="hidden w-[20%] py-1 md:table-cell">{d.pondok}</td>
								<td class="hidden w-[25%] py-1 md:table-cell">{d.kendaraan}</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>
