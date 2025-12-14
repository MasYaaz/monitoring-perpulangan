<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let items: string[];
</script>

<div
	class="bg-secondary/20 dark:bg-primary/50 flex w-full flex-col items-center rounded-4xl px-10 pb-7 text-justify text-sm shadow/lg backdrop-blur-[2px] transition-all duration-300 ease-in"
>
	<div
		class=" text-primary dark:text-secondary flex w-full flex-col justify-center p-2 py-5 transition-all duration-300 ease-in"
	>
		<h3
			class="justify-center rounded-2xl text-center text-base font-bold uppercase transition-all duration-300 ease-in lg:text-2xl"
		>
			{title}
		</h3>
		<h4 class="-mt-1 text-center text-base font-semibold lg:text-lg">{subtitle}</h4>
	</div>
	<ol
		class="  text-primary dark:text-secondary flex h-full w-full list-decimal flex-col space-y-3 font-[500] transition-all duration-300 ease-in lg:p-3 lg:text-base"
	>
		{#each items as a}
			<li>{a}</li>
		{/each}
	</ol>
</div>
