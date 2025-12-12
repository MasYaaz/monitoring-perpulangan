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

<div class="flex h-[20%] w-full max-w-3xl flex-row items-center justify-around text-center">
	{#each menuItems as m}
		<button
			onclick={() => scrollToSection(m.id)}
			class="text-primary dark:text-secondary flex aspect-square h-[60%] w-[24%] flex-col items-center justify-center rounded-2xl p-1 uppercase shadow-lg transition-all duration-200 ease-in md:h-[80%] lg:rounded-3xl lg:p-3 lg:hover:scale-105 lg:hover:cursor-pointer xl:h-34 xl:w-34"
		>
			<svelte:component this={m.icon} class="h-10 w-10" />
			<p class="mt-1 w-full text-[10px] font-black md:text-sm">
				{m.text}
			</p>
		</button>
	{/each}
</div>
