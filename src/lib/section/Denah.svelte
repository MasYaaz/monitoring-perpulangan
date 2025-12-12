<script lang="ts">
	import { MapPinned } from 'lucide-svelte';
	import PhotoGalery from '../component/photoGalery.svelte';
	import Denah from '/images/Denah Al - Akbar.webp';

	const images = [{ src: Denah, title: 'Denah Masjid Al-Akbar' }];
</script>

<section
	id="section_2"
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[url('./images/bg1-2.webp')] bg-cover px-10 md:pt-25 2xl:pt-30 dark:bg-[url('./images/bg1-1.webp')]"
>
	<!-- Background -->
	<div
		class="from-secondary/100 via-secondary/60 to-secondary/100 dark:from-primary/100 dark:via-primary/70 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>

	<!-- Judul Section -->
	<div class="z-10 flex h-full w-full flex-col items-center justify-between gap-5">
		<div
			class="dark:bg-secondary dark:text-primary bg-primary text-secondary dark:shadow-secondary rounded-3xl p-5 shadow-md/50 transition-all duration-300 ease-in"
		>
			<MapPinned class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div>
			<h2
				class="font-heading text-center text-xl font-bold uppercase transition-all duration-300 ease-in lg:text-3xl dark:text-white"
			>
				Denah Masjid
			</h2>
			<h2
				class="font-heading text-center text-3xl font-black uppercase lg:text-6xl dark:text-white"
			>
				Al-Akbar
			</h2>
		</div>
	</div>

	<!-- Section Content -->
	<PhotoGalery {images} />
</section>
