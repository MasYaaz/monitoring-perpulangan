<script>
	import { Bus } from 'lucide-svelte';
	import TabelJadwal from '../component/TabelJadwal.svelte';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[url('./images/bg3.webp')] bg-cover px-10 pt-20 md:pt-25 lg:pt-30"
	id="section_4"
>
	<!-- Background -->
	<div
		class="from-secondary/100 via-secondary/60 to-secondary/100 dark:from-primary/100 dark:via-primary/90 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>

	<!-- Judul Section -->
	<div class="z-10 flex h-full w-full flex-col items-center justify-between gap-2">
		<div
			class="dark:bg-secondary dark:text-primary bg-primary text-secondary dark:shadow-secondary rounded-3xl p-5 shadow-md/50 transition-all duration-300 ease-in"
		>
			<Bus class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div
			class=" text-center font-black uppercase transition-all duration-300 ease-in dark:text-white"
		>
			<h2 class="text-4xl lg:text-7xl">Jadwal</h2>
			<h2 class="text-center text-xl lg:text-4xl">Kedatangan</h2>
		</div>
	</div>

	<!-- Section Content -->
	<TabelJadwal />
</section>
