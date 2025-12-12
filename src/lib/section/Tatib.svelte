<script lang="ts">
	import { NotebookPen } from 'lucide-svelte';
	import ProsedurTatibWrapper from '../component/ProsedurTatibWrapper.svelte';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[url('./images/bg2-2.webp')] bg-cover pt-25 2xl:pt-30 dark:bg-[url('./images/bg2-1.webp')]"
	id="section_3"
>
	<!-- Background -->
	<div
		class="from-secondary/100 via-secondary/60 to-secondary/100 dark:from-primary/100 dark:via-primary/70 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>

	<!-- Judul Section -->
	<div class="z-10 flex w-full flex-col items-center justify-center gap-5">
		<div
			class="dark:bg-secondary dark:text-primary bg-primary text-secondary rounded-3xl p-5 shadow-md/50 transition-all duration-300 ease-in"
		>
			<NotebookPen class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div
			class=" text-center font-bold uppercase transition-all duration-300 ease-in dark:text-white"
		>
			<h2 class="text-xl lg:text-3xl">Prosedur & Tata Tertib</h2>
			<h2 class="-mt-1 text-4xl font-black lg:text-5xl">Penjemputan</h2>
		</div>
	</div>

	<!-- Section Content -->
	<ProsedurTatibWrapper />
</section>
