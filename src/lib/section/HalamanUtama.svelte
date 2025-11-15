<script lang="ts">
	import { menuItems } from '../store/array';
	import { scrollToSection } from '../utils/scrollTo';
</script>

<section
	class="relative flex w-full justify-center items-center min-h-screen bg-cover bg-[url('./images/back.webp')]"
	id="section_1"
>
	<div
		class="absolute z-0 inset-0 bg-gradient-to-b from-secondary/60 to-secondary/100 dark:from-primary/90 dark:to-primary/100"
	></div>

	<div
		class="flex z-10 flex-col justify-around min-h-screen items-center gap-6 2xl:grid 2xl:grid-cols-6 2xl:max-w-7xl 2xl:gap-6 pt-25 md:pt-30 2xl:pt-40"
	>
		<!-- Kolom 1: Gambar tunggal -->
		<div class="transition-all duration-700 col-span-3 hidden 2xl:flex">
			<img
				src="./images/al-akbar.webp"
				loading="eager"
				fetchpriority="high"
				alt="Foto depan"
				width="685"
				height="808"
				class="w-auto h-[400px] md:h-[5000px] xl:h-[700px] object-cover aspect-square rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
			/>
		</div>

		<!-- Kolom 2: Dua gambar bertumpuk -->
		<div
			class="transition-transform ease-out duration-700 flex justify-center items-center col-span-2"
		>
			<div class="flex flex-col gap-5 px-4 h-[400px] md:h-[500px] xl:h-[700px]">
				<img
					src="./images/al-akbar.webp"
					loading="eager"
					fetchpriority="high"
					alt="Foto depan"
					class="w-auto h-full object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
				/>
				<img
					src="./images/al-akbar.webp"
					loading="eager"
					fetchpriority="high"
					alt="Foto depan"
					class="w-auto h-full object-cover rounded-2xl shadow-xl hidden 2xl:flex transition-transform duration-300 hover:scale-105"
				/>
			</div>
		</div>

		<!-- Kolom 3: Bagian teks -->
		<div
			class="flex flex-row 2xl:flex-col items-left justify-center text-center gap-1 lg:gap-5 h-full xl:h-[700px] transition-transform ease-out duration-700 grid-cols-2 2xl:grid-cols-4"
		>
			{#each menuItems as m}
				<button
					onclick={() => scrollToSection(m.id)}
					class="flex aspect-square w-20 h-20 lg:h-40 flex-col items-center p-2 lg:w-40 justify-center gap-1 rounded-3xl bg-green-300 uppercase shadow-lg transition-transform duration-200 hover:scale-105"
				>
					<svelte:component this={m.icon} class="h-6 w-6 2xl:w-12 2xl:h-12" />
					<p class="mt-1 font-bold w-full text-[6px] 2xl:text-base">
						{m.text}
					</p>
				</button>
			{/each}
		</div>
	</div>
</section>
