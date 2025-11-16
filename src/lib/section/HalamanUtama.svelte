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
	<div class="z-10 flex h-full w-full flex-col items-center gap-5 pt-20 md:pt-30 lg:pt-30 xl:pt-30">
		<div
			class="flex h-full w-full flex-col items-center justify-around lg:grid lg:grid-cols-6 lg:gap-4 lg:px-12 xl:max-w-7xl xl:gap-6"
		>
			<!-- Kolom 1: Gambar tunggal -->
			<div class="col-span-3 hidden transition-all duration-700 lg:flex">
				<img
					src="./images/al-akbar.webp"
					loading="eager"
					fetchpriority="high"
					alt="Foto depan"
					width="685"
					height="808"
					class="aspect-square h-[400px] w-auto rounded-2xl object-cover shadow-xl transition-transform duration-300 hover:scale-105 md:h-[500px] lg:h-[600px] xl:h-[700px]"
				/>
			</div>

			<!-- Kolom 2: Dua gambar bertumpuk -->
			<div class="col-span-2 flex items-center justify-center px-5 md:px-16 lg:px-0">
				<div
					class="flex h-full w-full flex-col-reverse gap-5 pb-6 md:px-0 lg:h-[600px] lg:flex-col lg:pb-0 xl:h-[700px]"
				>
					<div
						class="relative flex h-[60%] w-full items-center justify-center rounded-2xl bg-[url('./images/al-akbar.webp')] bg-[50%] p-10 shadow-xl transition-transform duration-300 hover:scale-105 2xl:h-[50%]"
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
						class="bg-primary dark:bg-secondary text-secondary dark:text-primary z-10 flex h-full items-center justify-center rounded-2xl p-3 px-4 text-center text-2xl font-black uppercase duration-300 hover:scale-105 md:p-5 md:px-10 md:text-3xl lg:text-4xl xl:w-fit xl:max-w-7xl xl:text-4xl"
					>
						<h1>Monitoring Perpulangan<br />IKPM Surabaya</h1>
					</div>
				</div>
			</div>

			<!-- Kolom 3: Bagian teks -->
			<div
				class="xl:h-[700px]lg:grid-cols-4 flex h-full w-full grid-cols-2 flex-row items-start justify-around gap-1 px-5 text-center transition-transform duration-700 ease-out lg:h-[600px] lg:flex-col lg:gap-5 lg:px-0 xl:h-[700px] xl:px-0"
			>
				{#each menuItems as m}
					<button
						onclick={() => scrollToSection(m.id)}
						class="text-secondary dark:text-primary dark:bg-secondary bg-primary flex aspect-square h-15 w-15 flex-col items-center justify-center gap-1 rounded-2xl uppercase shadow-lg transition-transform duration-200 hover:scale-105 hover:cursor-pointer md:h-25 md:w-25 lg:h-33 lg:w-33 lg:rounded-3xl lg:p-3 xl:h-40 xl:w-40"
					>
						<svelte:component
							this={m.icon}
							class="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-16 xl:w-16"
						/>
						<p class="mt-1 w-full text-[6px] font-black lg:text-sm xl:text-base">
							{m.text}
						</p>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
