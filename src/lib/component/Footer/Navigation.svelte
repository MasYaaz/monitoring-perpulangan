<script lang="ts">
	import { scrollToSection } from '../../utils/scrollTo';
	import { navItems } from '../../store/array';
</script>

<div class="flex flex-col items-center md:items-end lg:hidden lg:items-end">
	<h3 class="text-dark mb-2 text-center text-xl font-semibold md:text-right">Navigasi</h3>
	<div class="flex flex-col items-center gap-3 md:items-end">
		{#each navItems as item}
			<button
				onclick={() => scrollToSection(item.id)}
				aria-label={item.aria}
				class="text-primary dark:text-secondary flex items-center justify-baseline gap-1 text-sm font-semibold tracking-wide uppercase transition-colors"
			>
				<svelte:component this={item.icon} size="15" />
				{item.aria}
			</button>
		{/each}
	</div>
</div>
