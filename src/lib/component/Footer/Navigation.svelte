<script lang="ts">
	import { scrollToSection } from '../../utils/scrollTo';
	import { navItems } from '../../store/array';
</script>

<div class="flex flex-col lg:hidden lg:items-end">
	<h3 class="text-dark mb-2 text-xl font-semibold">Navigasi</h3>
	<div class="flex flex-col gap-3">
		{#each navItems as item}
			<button
				onclick={() => scrollToSection(item.id)}
				aria-label={item.aria}
				class="text-primary dark:text-secondary flex justify-baseline gap-2 text-sm font-semibold tracking-wide uppercase transition-colors"
			>
				<svelte:component this={item.icon} size="20" />
				{item.aria}
			</button>
		{/each}
	</div>
</div>
