<script lang="ts">
	import HalamanUtamaContentWrapper from '../component/HalamanUtama/HalamanUtamaContentWrapper.svelte';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-[url('./images/back.webp')] bg-cover"
	id="section_1"
>
	<!-- Background -->
	<div
		class="from-secondary/60 to-secondary/100 dark:from-primary/90 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>

	<!-- Section Content -->
	<HalamanUtamaContentWrapper />
</section>
