<script>
	import { Bus } from 'lucide-svelte';
	import TabelJadwal from '../component/TabelJadwal.svelte';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[url('./images/bg3.webp')] bg-cover bg-center px-10 pt-20 md:pt-25 lg:pt-30"
	id="section_4"
>
	<div
		class="from-secondary/100 via-secondary/60 to-secondary/100 dark:from-primary/100 dark:via-primary/70 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>
	<div class="z-10 flex h-full w-full flex-col items-center justify-between gap-2">
		<div
			class="dark:bg-secondary dark:text-primary bg-primary text-secondary dark:shadow-secondary rounded-3xl p-5 shadow-md/50"
		>
			<Bus class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div>
			<h2
				class="font-heading text-center text-4xl font-black uppercase lg:text-7xl dark:text-white"
			>
				Jadwal
			</h2>
			<h2 class="font-heading text-center text-xl font-bold uppercase lg:text-4xl dark:text-white">
				Kedatangan
			</h2>
		</div>
	</div>

	<!-- Jadwal keberangkatan -->
	<TabelJadwal />
</section>
