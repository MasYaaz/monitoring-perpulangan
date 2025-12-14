<script>
	import { filteredSantri } from '../utils/filterData';
</script>

<div
	class="z-10 mb-10 flex w-full max-w-lg flex-col gap-5 px-5 md:max-w-2xl md:px-0 lg:max-w-4xl lg:px-10"
>
	<div class=" dark:shadow-secondary w-full overflow-hidden rounded-2xl shadow-md/30">
		<table class="w-full table-fixed">
			<thead
				class=" bg-primary dark:bg-secondary text-secondary dark:text-primary text-[8px] font-bold uppercase transition-all duration-300 ease-in md:text-sm lg:text-base"
			>
				<tr class="h-8 text-center md:h-10 lg:h-12">
					<th class="w-[10%] max-w-[40px] py-1">No.</th>
					<th class="w-[45%] max-w-[200px] py-1">Nama</th>
					<th class="hidden w-[10%] max-w-[80px] truncate py-1 md:table-cell">Kelas</th>
					<th class="w-[20%] max-w-[150px] py-1">Pondok</th>
					<th class="w-[20%] max-w-[150px] py-1">Kendaraan</th>
				</tr>
			</thead>
		</table>
		<div
			class="no-scrollbar bg-secondary/20 max-h-[380px] w-full overflow-y-auto backdrop-blur-[2px] md:max-h-[420px] lg:max-h-[480px] xl:max-h-[580px]"
		>
			<table class="w-full table-fixed text-sm">
				<tbody
					class="text-primary dark:text-secondary text-xs font-semibold transition-all duration-300 ease-in lg:text-base"
				>
					{#if $filteredSantri.length === 0}
						<tr class="text-center text-sm">
							<td class="w-[10%] max-w-[40px] py-1"> - </td>
							<td class="w-[45%] max-w-[200px] truncate px-1 py-1">Hasil Tidak Ditemukan</td>
							<td class="hidden w-[10%] max-w-[80px] truncate py-1 md:table-cell"> - </td>
							<td class="w-[20%] max-w-[150px] truncate py-1"> - </td>
							<td class="w-[20%] max-w-[150px] truncate py-1"> - </td>
						</tr>
					{:else}
						{#each $filteredSantri as d, i}
							<tr class="text-center">
								<td class="w-[10%] max-w-[40px] py-1">{i + 1}</td>
								<td class="w-[45%] max-w-[200px] truncate px-1 py-1 text-left">{d.nama}</td>
								<td class="hidden w-[10%] max-w-[80px] truncate py-1 md:table-cell">{d.kelas}</td>
								<td class="w-[20%] max-w-[150px] truncate py-1">{d.pondok}</td>
								<td class="w-[20%] max-w-[150px] truncate py-1">{d.kendaraan}</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>
