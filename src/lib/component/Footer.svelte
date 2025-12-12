<script>
	import FooterContent from './Footer/FooterContent.svelte';
</script>

<footer class="relative flex w-full justify-center overflow-hidden pt-20">
	<!-- Background Image -->
	<div
		class="absolute inset-0 z-0 bg-[url('./images/foto-alakbar2.webp')] bg-cover bg-bottom dark:bg-[url('./images/foto-alakbar2.webp')]"
	></div>

	<!-- Overlay Transparan -->
	<div
		class="from-secondary/60 via-secondary/80 to-secondary/100 dark:from-primary/90 dark:via-primary/95 dark:to-primary/100 absolute inset-0 z-10 bg-gradient-to-t"
	></div>

	<!-- Konten Footer -->
	<FooterContent />
</footer>
