<script lang="ts">
	import { filterPondok, filterKendaraan, pondokList, kendaraanList } from '../utils/filterData';
	import { onMount } from 'svelte';
	import FilterDropdown from './FilterBar/FilterDropdown.svelte';
	import SearchInput from './FilterBar/SearchInput.svelte';

	let openPondok = false;
	let openKendaraan = false;

	// tutup dropdown ketika klik di luar
	function handleClickOutside(event) {
		if (!event.target.closest('.dropdown')) {
			openPondok = false;
			openKendaraan = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside);
	});
</script>

<div
	class="z-20 mt-2 flex w-full max-w-4xl flex-col justify-center gap-2 text-xs md:flex-row md:text-sm lg:text-base"
>
	<div class="flex w-full justify-between gap-2 lg:w-[50%]">
		<FilterDropdown
			label="Pondok"
			items={$pondokList}
			bind:value={$filterPondok}
			open={openPondok}
			toggle={() => {
				openPondok = !openPondok;
				openKendaraan = false;
			}}
		/>

		<FilterDropdown
			label="Kendaraan"
			items={$kendaraanList}
			bind:value={$filterKendaraan}
			open={openKendaraan}
			toggle={() => {
				openKendaraan = !openKendaraan;
				openPondok = false;
			}}
		/>
	</div>

	<SearchInput />
</div>
