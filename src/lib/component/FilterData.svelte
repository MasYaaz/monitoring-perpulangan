<script>
	import { ChevronDown, Search } from 'lucide-svelte';
	import {
		filterKendaraan,
		filterPondok,
		filterSearch,
		kendaraanList,
		pondokList
	} from '../utils/filterData';

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let openPondok = false;
	let openKendaraan = false;

	// Menutup dropdown jika klik di luar
	function handleClickOutside(event) {
		if (!event.target.closest('.dropdown')) {
			openPondok = false;
			openKendaraan = false;
		}
	}

	// pasang listener
	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside);
	});
</script>

<div
	class="z-20 mt-2 flex w-full max-w-4xl flex-col justify-center gap-2 text-xs md:flex-row md:text-sm lg:text-base"
>
	<div class="flex w-full justify-between lg:w-[50%]">
		<div class="relative w-[49%]">
			<button
				class="bg-primary dark:bg-secondary dark:text-primary text-secondary flex w-full cursor-pointer items-center justify-between rounded-xl p-1 px-2 text-left font-[500] transition-all duration-300 ease-in md:p-2 md:px-3"
				onclick={(e) => {
					e.stopPropagation();
					openPondok = !openPondok;
					openKendaraan = false;
				}}
			>
				{$filterPondok || 'Pondok'}
				<span class="transition-transform duration-300" class:rotate-180={openPondok}>
					<ChevronDown />
				</span>
			</button>

			{#if openPondok}
				<div
					in:fly={{ y: -10, opacity: 0, duration: 400, easing: cubicOut }}
					out:fly={{ y: -10, opacity: 0, duration: 300 }}
					class="bg-primary dark:bg-secondary dark:text-primary text-secondary absolute left-0 z-10 mt-[10px] flex w-full flex-col overflow-hidden rounded-lg font-semibold shadow-lg"
				>
					<button
						class="hover:bg-green cursor-pointer px-3 py-2 dark:hover:bg-gray-100"
						onclick={() => {
							$filterPondok = '';
							openPondok = false;
						}}
					>
						Semua Pondok
					</button>

					{#each $pondokList as p}
						<button
							class="hover:bg-green cursor-pointer px-3 py-2 dark:hover:bg-gray-100"
							onclick={() => {
								$filterPondok = p;
								openPondok = false;
							}}
						>
							{p}
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<div class="relative w-[49%]">
			<button
				class="bg-primary dark:bg-secondary dark:text-primary text-secondary flex w-full cursor-pointer items-center justify-between rounded-xl p-1 px-2 text-left font-[500] transition-all duration-300 ease-in md:p-2 md:px-3"
				onclick={(e) => {
					e.stopPropagation();
					openKendaraan = !openKendaraan;
					openPondok = false;
				}}
			>
				{$filterKendaraan || 'Kendaraan'}
				<span class="transition-transform duration-300" class:rotate-180={openKendaraan}>
					<ChevronDown />
				</span>
			</button>

			{#if openKendaraan}
				<div
					in:fly={{ y: -10, opacity: 0, duration: 400, easing: cubicOut }}
					out:fly={{ y: -10, opacity: 0, duration: 300 }}
					class="bg-primary dark:bg-secondary dark:text-primary text-secondary absolute left-0 z-10 mt-[10px] flex w-full flex-col overflow-hidden rounded-lg font-semibold shadow-lg transition-all duration-300 ease-in"
				>
					<button
						class="hover:bg-green cursor-pointer px-3 py-2 dark:hover:bg-gray-100"
						onclick={() => {
							$filterKendaraan = '';
							openKendaraan = false;
						}}
					>
						Semua Kendaraan
					</button>

					{#each $kendaraanList as p}
						<button
							class="hover:bg-green cursor-pointer px-3 py-2 dark:hover:bg-gray-100"
							onclick={() => {
								$filterKendaraan = p;
								openKendaraan = false;
							}}
						>
							{p}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<div
		class="bg-primary text-secondary dark:bg-secondary dark:text-primary flex w-full items-center justify-between rounded-xl p-1 font-[500] transition-all duration-300 ease-in md:w-[50%] md:p-2"
	>
		<Search class="w-[8%] px-1 md:w-[10%]" />
		<input
			type="text"
			placeholder="Cari nama santri / santriwati"
			class="placeholder-secondary dark:placeholder-primary w-[90%] transition-all duration-300 ease-in focus:ring-0 focus:outline-none"
			bind:value={$filterSearch}
		/>
	</div>
</div>
