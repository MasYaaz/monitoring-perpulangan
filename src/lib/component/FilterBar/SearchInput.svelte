<script>
	import { Search } from 'lucide-svelte';
	import { filterSearch } from '../../utils/filterData';
</script>

<div
	class="bg-primary text-secondary dark:bg-secondary dark:text-primary flex w-full items-center justify-between rounded-xl p-1 font-[500] transition-all duration-300 ease-in md:p-2 lg:w-[50%]"
>
	<Search class="w-[8%] px-1 md:w-[10%]" />
	<input
		type="text"
		placeholder="Cari nama santri / santriwati"
		class="placeholder-secondary dark:placeholder-primary w-[90%] transition-all duration-300 ease-in focus:ring-0 focus:outline-none"
		bind:value={$filterSearch}
	/>
</div>
