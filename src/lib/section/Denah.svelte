<script lang="ts">
	import { MapPinned } from 'lucide-svelte';
	import PhotoGalery from '../component/photoGalery.svelte';
	import Denah from '/images/Denah Al - Akbar.png';

	const images = [{ src: Denah, title: 'Denah Masjid Al-Akbar' }];
</script>

<section
	id="section_2"
	class="flex min-h-screen w-full flex-col items-center justify-center px-10 pt-20 md:pt-30 2xl:pt-40"
>
	<div class="flex flex-col items-center gap-10 px-10 2xl:max-w-7xl dark:text-white">
		<div class="flex h-full w-full flex-col items-center justify-between gap-2">
			<div class="dark:bg-secondary dark:text-primary bg-primary text-secondary rounded-3xl p-5">
				<MapPinned class="h-20 w-20 lg:h-25 lg:w-25" />
			</div>

			<div>
				<h2
					class="font-heading text-center text-xl font-bold uppercase lg:text-3xl dark:text-white"
				>
					Denah Masjid
				</h2>
				<h2
					class="font-heading -mt-1 text-center text-4xl font-black uppercase lg:-mt-3 lg:text-7xl dark:text-white"
				>
					Al-Akbar
				</h2>
			</div>
		</div>
		<PhotoGalery {images} />
	</div>
</section>
