<script>
	import './app.css';
	import Navbar from './lib/component/Navbar.svelte';
	import Footer from './lib/component/Footer.svelte';
	import Denah from './lib/section/Denah.svelte';
	import Tatib from './lib/section/Tatib.svelte';
	import HalamanUtama from './lib/section/HalamanUtama.svelte';
	import { onMount } from 'svelte';
	import { handleScroll } from './lib/utils/scrollHandler';
	import Jadwal from './lib/section/Jadwal.svelte';
	import DataSantri from './lib/section/DataSantri.svelte';

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<Navbar />
<main class="bg-secondary dark:bg-primary flex w-full flex-col items-center">
	<!-- Halaman Utama -->
	<HalamanUtama />

	<!-- Denah Al-Akbar -->
	<Denah />

	<!-- Tata Tertib -->
	<Tatib />

	<!-- Jadwal -->
	<Jadwal />

	<!-- Data Santri -->
	<DataSantri />
</main>

<Footer />
