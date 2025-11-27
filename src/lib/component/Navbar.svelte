<script lang="ts">
	import NavbarLogo from './Navbar/NavbarLogo.svelte';
	import DekstopMode from './Navbar/NavbarMode.svelte';
	import MobileMenu from './Navbar/MobileMenu.svelte';
</script>

<header class="flex w-full justify-center">
	<nav
		class="bg-primary/90 dark:bg-secondary/90 fixed top-2 z-30 mt-2 flex w-[95%] justify-between rounded-full p-3 px-8 shadow-md/50 backdrop-blur-md transition-all duration-200 ease-in md:mt-3 md:w-[95%] md:px-12 lg:px-16"
	>
		<NavbarLogo />
		<DekstopMode />
	</nav>
	<MobileMenu />
</header>
