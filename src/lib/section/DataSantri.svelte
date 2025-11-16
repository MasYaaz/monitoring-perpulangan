<script>
	import { User } from 'lucide-svelte';
	import { dataSantri } from '../data/santri';
</script>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-10 pt-20 md:pt-25 2xl:pt-30"
	id="section_5"
>
	<div class="flex h-full w-full flex-col items-center justify-between gap-5">
		<div
			class="dark:bg-secondary dark:text-primary bg-primary text-secondary dark:shadow-secondary rounded-3xl p-5 shadow-md/50"
		>
			<User class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div>
			<h2
				class="font-heading text-center text-3xl font-black uppercase lg:text-5xl dark:text-white"
			>
				Data Santri
			</h2>
			<h2 class="font-heading text-center text-lg font-bold uppercase lg:text-2xl dark:text-white">
				Tiap - tiap Pondok
			</h2>
		</div>
	</div>
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
						{#each dataSantri as d, i}
							<tr class="text-center">
								<td class="w-[5%] py-1">{i + 1}</td>
								<td class="w-[45%] px-1 py-1 text-left">{d.nama}</td>
								<td class="w-[10%] py-1">{d.kelas}</td>
								<td class="hidden w-[20%] py-1 md:table-cell">{d.pondok}</td>
								<td class="hidden w-[25%] py-1 md:table-cell">{d.kendaraan}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>
