<script lang="ts">
	import NavbarActions from './NavbarActions.svelte';
	import DekstopMenu from './DekstopMenu.svelte';
</script>

<!-- Navbar Menu -->
<div class="flex w-[25%] justify-end gap-4">
	<!-- Dekstop Mode -->
	<DekstopMenu />

	<!-- Tampilan ketika Mobile Mode -->
	<NavbarActions />
</div>
