<script lang="ts">
	import { slide } from 'svelte/transition';
	import { menuTerbuka } from '../../store/ui';
	import { navItems } from '../../store/array';
	import { scrollToSection } from '../../utils/scrollTo';
</script>

<!-- Mobile Menu -->
{#if $menuTerbuka}
	<div
		transition:slide={{ duration: 400 }}
		class="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-around bg-gray-900/50 py-18 backdrop-blur-sm lg:hidden"
	>
		{#each navItems as item}
			<button
				onclick={() => scrollToSection(item.id)}
				aria-label={item.aria}
				class="bg-primary/20 flex w-[80%] items-center justify-center gap-2 rounded-full p-5 text-xl font-semibold tracking-wide text-white uppercase md:p-8"
			>
				<svelte:component this={item.icon} size="25" />
				{item.aria}
			</button>
		{/each}

		<img src="./dark-theme.svg" alt="logo satgas" class="h-25 w-auto pt-5 md:h-35" />
	</div>
{/if}
