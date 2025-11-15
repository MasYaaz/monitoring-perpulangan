<script>
	import { Moon, Sun } from 'lucide-svelte';
	import { isDark } from '../store/darkMode';
	import { get } from 'svelte/store';

	let dark = get(isDark);

	function toggleDark() {
		dark = !dark;
		isDark.set(dark);
	}
</script>

<button
	onclick={toggleDark}
	aria-label="tombol darkmode"
	class="text-secondary dark:text-primary transition-all duration-300 hover:scale-110 hover:cursor-pointer 2xl:mb-1"
>
	{#if dark}
		<Moon size="30" />
	{:else}
		<Sun size="30" />
	{/if}
</button>
