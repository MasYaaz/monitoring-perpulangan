<script lang="ts">
	import { filterPondok, filterKendaraan, pondokList, kendaraanList } from '../utils/filterData';
	import { onMount } from 'svelte';
	import FilterDropdown from './FilterBar/FilterDropdown.svelte';
	import SearchInput from './FilterBar/SearchInput.svelte';
	import { activeDropdown } from '../store/dropDown';
	import { setupGlobalDropdownCloser } from '../utils/setupGlobalDropdownCloser';

	let cleanup: any;

	function toggleDropdown(name: string) {
		activeDropdown.update((curr) => (curr === name ? null : name));
	}

	onMount(() => {
		cleanup = setupGlobalDropdownCloser();
		return () => cleanup();
	});
</script>

<div
	class="z-20 mt-2 flex w-full max-w-lg flex-col justify-center gap-2 px-5 text-xs md:max-w-2xl md:text-sm lg:max-w-4xl lg:flex-row lg:text-base"
>
	<div class="flex w-full justify-between gap-2 lg:w-[50%]">
		<FilterDropdown
			label="Pondok"
			items={$pondokList}
			value={$filterPondok}
			open={$activeDropdown === 'pondok'}
			toggle={() => toggleDropdown('pondok')}
			onSelect={(v) => {
				$filterPondok = v;
				toggleDropdown('pondok');
			}}
		/>

		<FilterDropdown
			label="Kendaraan"
			items={$kendaraanList}
			value={$filterKendaraan}
			open={$activeDropdown === 'kendaraan'}
			toggle={() => toggleDropdown('kendaraan')}
			onSelect={(v) => {
				$filterKendaraan = v;
				toggleDropdown('kendaraan');
			}}
		/>
	</div>

	<SearchInput />
</div>
