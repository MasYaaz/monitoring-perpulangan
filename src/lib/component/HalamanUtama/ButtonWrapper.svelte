<script lang="ts">
	import { Clock, MapPinned, NotebookPen, Users } from 'lucide-svelte';
	import { scrollToSection } from '../../utils/scrollTo';

	const menuItems = [
		{
			id: 'section_2',
			icon: MapPinned,
			text: 'Denah'
		},
		{
			id: 'section_3',
			icon: NotebookPen,
			text: 'Tata Tertib'
		},
		{
			id: 'section_4',
			icon: Clock,
			text: 'Jadwal'
		},
		{
			id: 'section_5',
			icon: Users,
			text: 'Data Santri'
		}
	];
</script>

<div
	class="flex h-[20%] w-full grid-cols-2 flex-row items-center justify-between text-center xl:h-full xl:grid-cols-4 xl:flex-col xl:items-end xl:gap-2 xl:px-0 xl:pt-0"
>
	{#each menuItems as m}
		<button
			onclick={() => scrollToSection(m.id)}
			class="text-secondary dark:text-primary dark:bg-secondary bg-primary flex aspect-square h-[60%] w-[24%] flex-col items-center justify-center rounded-2xl p-1 uppercase shadow-lg transition-all duration-200 ease-in md:h-[80%] lg:rounded-3xl lg:p-3 lg:hover:scale-105 lg:hover:cursor-pointer xl:h-40 xl:w-40"
		>
			<svelte:component
				this={m.icon}
				class="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-16 xl:w-16"
			/>
			<p class="mt-1 w-full text-xs font-black md:text-sm lg:text-base">
				{m.text}
			</p>
		</button>
	{/each}
</div>
