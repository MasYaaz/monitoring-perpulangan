<script lang="ts">
	import HalamanUtamaContentWrapper from '../component/HalamanUtama/HalamanUtamaContentWrapper.svelte';
</script>

<section
	class="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-5 bg-[url('./images/foto-alakbar2.webp')] bg-cover bg-center dark:bg-[url('./images/foto-alakbar1.webp')]"
	id="section_1"
>
	<!-- Background -->
	<div
		class="from-secondary/10 via-secondary/70 to-secondary/100 dark:from-primary/10 dark:via-primary/70 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>

	<!-- Section Content -->
	<HalamanUtamaContentWrapper />
</section>
