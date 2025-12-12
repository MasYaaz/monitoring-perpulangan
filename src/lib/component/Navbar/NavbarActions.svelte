<script>
	import { isDark } from '../../store/darkMode';
	import { toggleMenu } from '../../utils/toggleMenu';
	import DarkmodeButton from '../DarkmodeButton.svelte';
</script>

<div class="flex h-full items-center gap-2">
	<DarkmodeButton />
	<!-- Hamburger -->
	<button class="lg:hidden" onclick={toggleMenu} aria-label="tombol navbar">
		<svg
			class={`h-6 w-6 ${$isDark ? 'text-primary' : 'text-secondary'}`}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
</div>
