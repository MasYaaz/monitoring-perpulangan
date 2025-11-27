<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ChevronDown } from 'lucide-svelte';

	export let label: string;
	export let items: string[] = [];
	export let value: string;
	export let open: boolean;
	export let toggle: () => void;

	// event saat memilih item
	function select(item: string) {
		value = item;
		open = false;
	}
</script>

<div class="dropdown relative w-full">
	<button
		class="bg-primary dark:bg-secondary dark:text-primary text-secondary flex w-full cursor-pointer items-center justify-between rounded-xl p-1 px-2 text-left font-[500] transition-all duration-300 ease-in md:p-2 md:px-3"
		onclick={(e) => {
			e.stopPropagation();
			toggle();
		}}
	>
		{value || label}

		<span class="transition-transform duration-300" class:rotate-180={open}>
			<ChevronDown />
		</span>
	</button>

	{#if open}
		<div
			in:fly={{ y: -10, opacity: 0, duration: 400, easing: cubicOut }}
			out:fly={{ y: -10, opacity: 0, duration: 300 }}
			class="bg-primary dark:bg-secondary dark:text-primary text-secondary absolute left-0 z-10 mt-[10px] flex w-full flex-col overflow-hidden rounded-lg font-semibold shadow-lg"
		>
			<button
				class="hover:bg-green cursor-pointer px-3 py-2 dark:hover:bg-gray-100"
				onclick={() => select('')}
			>
				Semua {label}
			</button>

			{#each items as item}
				<button
					class="hover:bg-green cursor-pointer px-3 py-2 dark:hover:bg-gray-100"
					onclick={() => select(item)}
				>
					{item}
				</button>
			{/each}
		</div>
	{/if}
</div>
