<script lang="ts">
	import { menuItems } from '../store/array';
	import { isDark } from '../store/darkMode';
	import { scrollToSection } from '../utils/scrollTo';
	$: logoSrc = $isDark ? './logo-light.svg' : './logo-dark.svg';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-[url('./images/back.webp')] bg-cover"
	id="section_1"
>
	<div
		class="from-secondary/60 to-secondary/100 dark:from-primary/90 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>

	<div class="z-10 flex w-full flex-col items-center gap-5 pt-20 md:pt-30 2xl:pt-30">
		<div
			class="flex h-full flex-col items-center justify-around 2xl:grid 2xl:max-w-7xl 2xl:grid-cols-6 2xl:gap-6"
		>
			<!-- Kolom 1: Gambar tunggal -->
			<div class="col-span-3 hidden pl-8 transition-all duration-700 2xl:flex">
				<img
					src="./images/al-akbar.webp"
					loading="eager"
					fetchpriority="high"
					alt="Foto depan"
					width="685"
					height="808"
					class="aspect-square h-[400px] w-auto rounded-2xl object-cover shadow-xl transition-transform duration-300 hover:scale-105 md:h-[5000px] xl:h-[700px]"
				/>
			</div>

			<!-- Kolom 2: Dua gambar bertumpuk -->
			<div
				class="col-span-2 flex w-screen items-center justify-center px-10 transition-transform duration-700 ease-out md:px-16 lg:w-full lg:px-0"
			>
				<div
					class="flex h-full w-full flex-col-reverse gap-5 pb-6 md:px-0 lg:pb-10 xl:h-[700px] 2xl:flex-col 2xl:pb-0"
				>
					<div
						class="relative flex h-full w-full items-center justify-center rounded-2xl bg-[url('./images/al-akbar.webp')] bg-[50%] p-10 shadow-xl transition-transform duration-300 hover:scale-105 2xl:h-[50%]"
					>
						<div class="bg-primary/90 dark:bg-secondary/90 absolute inset-0 z-0 rounded-2xl"></div>
						<img
							src={logoSrc}
							class="z-10 h-full object-cover"
							loading="eager"
							fetchpriority="high"
							alt="Foto depan"
						/>
					</div>
					<div
						class="bg-primary dark:bg-secondary text-secondary dark:text-primary z-10 flex h-full items-center rounded-2xl p-3 px-4 text-center text-xl font-black uppercase md:p-5 md:px-10 md:text-3xl lg:text-4xl xl:w-fit 2xl:max-w-7xl 2xl:text-4xl"
					>
						<h1>Monitoring Perpulangan IKPM Surabaya</h1>
					</div>
				</div>
			</div>

			<!-- Kolom 3: Bagian teks -->
			<div
				class="flex h-full w-full grid-cols-2 flex-row items-start justify-around gap-1 px-5 text-center transition-transform duration-700 ease-out lg:gap-5 xl:h-[700px] 2xl:grid-cols-4 2xl:flex-col 2xl:px-0"
			>
				{#each menuItems as m}
					<button
						onclick={() => scrollToSection(m.id)}
						class="text-secondary dark:text-primary dark:bg-secondary bg-primary flex aspect-square flex-col items-center justify-center gap-1 rounded-3xl p-3 uppercase shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer lg:h-40 lg:w-40"
					>
						<svelte:component this={m.icon} class="h-6 w-6 md:h-12 md:w-12 2xl:h-12 2xl:w-12" />
						<p class="mt-1 w-full text-[6px] font-black lg:text-sm 2xl:text-base">
							{m.text}
						</p>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
