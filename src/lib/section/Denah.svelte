<script lang="ts">
	import { MapPinned } from 'lucide-svelte';
	import PhotoGalery from '../component/photoGalery.svelte';
	import Denah from '/images/Denah Al - Akbar.png';

	const images = [{ src: Denah, title: 'Denah Masjid Al-Akbar' }];
</script>

<section
	id="section_2"
	class="w-full flex px-10 min-h-screen flex-col items-center justify-center pt-25 md:pt-30 2xl:pt-40"
>
	<div class="flex flex-col items-center gap-5 dark:text-white 2xl:max-w-7xl px-10">
		<div class="flex w-full flex-col items-center justify-center gap-2">
			<MapPinned class="h-20 w-20 lg:h-25 lg:w-25" />
			<h1 class="text-center font-heading text-2xl font-bold uppercase lg:text-4xl dark:text-white">
				Denah Masjid<br />Al-Akbar
			</h1>
		</div>
		<PhotoGalery {images} />
	</div>
</section>
