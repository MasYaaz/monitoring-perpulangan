<script>
	import { User } from 'lucide-svelte';
	import TabelDataSantri from '../component/TabelDataSantri.svelte';
	import FilterBar from '../component/FilterBar.svelte';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-[url('./images/bg4.webp')] bg-cover pt-20 md:pt-25 2xl:pt-30"
	id="section_5"
>
	<!-- Background -->
	<div
		class="from-secondary/100 via-secondary/60 to-secondary/100 dark:from-primary/100 dark:via-primary/90 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>

	<!-- Judul section -->
	<div class="z-10 flex h-full w-full flex-col items-center justify-between gap-5">
		<div
			class="dark:bg-secondary dark:text-primary bg-primary text-secondary dark:shadow-secondary rounded-3xl p-5 shadow-md/50"
		>
			<User class="h-20 w-20 lg:h-25 lg:w-25" />
		</div>

		<div>
			<h2
				class="font-heading text-center text-3xl font-black uppercase lg:text-5xl dark:text-white"
			>
				Data Santri
			</h2>
			<h2 class="font-heading text-center text-lg font-bold uppercase lg:text-2xl dark:text-white">
				Tiap - tiap Pondok
			</h2>
		</div>
	</div>

	<!-- Section Content -->
	<!-- Filter -->
	<FilterBar />

	<!-- Tabel -->
	<TabelDataSantri />
</section>
