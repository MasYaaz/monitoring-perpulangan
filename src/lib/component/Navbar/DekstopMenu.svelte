<script lang="ts">
	import { navItems } from '../../store/array';
	import { scrollToSection, halamanAktif } from '../../store/ui';
</script>

<div class="hidden items-center transition-transform duration-500 ease-out lg:flex">
	{#each navItems as item}
		<button
			onclick={() => scrollToSection(item.id)}
			class="text-secondary dark:text-primary hover:text-light mr-4 flex w-fit justify-center border-b-2 pb-1 tracking-[1px] transition-transform duration-75 hover:scale-105 hover:cursor-pointer lg:mr-10"
			class:scale-110={$halamanAktif === item.id}
			class:border-transparent={$halamanAktif !== item.id}
			aria-label={item.aria}
		>
			<svelte:component this={item.icon} size="25" />
		</button>
	{/each}
</div>
