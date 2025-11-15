<script>
	import './app.css';
	import Navbar from './lib/component/Navbar.svelte';
	import Footer from './lib/component/Footer.svelte';
	import Denah from './lib/section/Denah.svelte';
	import Tatib from './lib/section/Tatib.svelte';
	import HalamanUtama from './lib/section/HalamanUtama.svelte';
	import { onMount } from 'svelte';
	import { handleScroll } from './lib/utils/scrollHandler';

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<Navbar />
<main class="bg-secondary dark:bg-primary flex flex-col items-center">
	<!-- Halaman Utama -->
	<HalamanUtama />

	<!-- Denah Al-Akbar -->
	<Denah />

	<!-- Tata Tertib -->
	<Tatib />

	<!-- Jadwal -->
	<section
		id="section_4"
		class="flex items-center w-full min-h-screen px-6 bg-secondary dark:bg-primary"
	></section>

	<!-- Data Santri -->
	<section
		class="w-full min-h-screen bg-secondary dark:bg-primary px-6 md:px-16 lg:px-32 py-20 flex flex-col items-center justify-around gap-8 md:pt-30 z-30"
		id="section_5"
	></section>
</main>

<Footer />
