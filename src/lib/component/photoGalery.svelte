<script lang="ts">
	import { onMount } from 'svelte';
	import GLightbox from 'glightbox';
	import 'glightbox/dist/css/glightbox.css';

	export let images: { src: string; thumb?: string; title?: string }[] = [];

	let lightbox: any;

	onMount(() => {
		lightbox = GLightbox({
			selector: '.glightbox',
			touchNavigation: false, // swipe gesture
			loop: false, // putar galeri terus
			zoomable: true, // pinch-to-zoom di mobile
			closeButton: true, // sembunyikan tombol close
			autoplayVideos: false,
			closeOnOutsideClick: true,
			touchFollowAxis: true
		});

		return () => {
			lightbox.destroy();
		};
	});
</script>

<div>
	{#each images as img}
		<a href={img.src} class="glightbox">
			<img
				src={img.thumb || img.src}
				alt={img.title || 'image'}
				class="dark:shadow-secondary w-full max-w-xl cursor-zoom-in rounded-xl bg-cover shadow-lg/50 duration-200 hover:scale-105"
				loading="eager"
				fetchpriority="high"
			/>
		</a>
	{/each}
</div>
