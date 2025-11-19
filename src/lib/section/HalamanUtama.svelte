<script lang="ts">
	import { menuItems } from '../store/array';
	import { isDark } from '../store/darkMode';
	import { scrollToSection } from '../utils/scrollTo';
	$: logoSrc = $isDark ? './logo-light.svg' : './logo-dark.svg';
	$: logoBesarSrc = $isDark ? './light-theme.svg' : './dark-theme.svg';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-[url('./images/back.webp')] bg-cover"
	id="section_1"
>
	<div
		class="from-secondary/60 to-secondary/100 dark:from-primary/90 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>
	<div class="z-10 flex h-screen w-full flex-col items-center gap-5 xl:h-full">
		<div
			class="flex h-full w-full flex-col items-center justify-center px-10 pt-25 md:pt-25 lg:h-full lg:gap-4 lg:px-12 lg:pt-25 xl:grid xl:max-w-7xl xl:grid-cols-6 xl:gap-6 xl:pt-30"
		>
			<!-- Kolom 1: Gambar tunggal -->
			<div class="col-span-3 hidden h-full transition-all duration-700 xl:flex">
				<img
					src="./images/al-akbar.webp"
					loading="eager"
					fetchpriority="high"
					alt="Foto depan"
					width="685"
					height="808"
					class="aspect-square w-auto rounded-2xl object-cover shadow-xl"
				/>
			</div>

			<!-- Kolom 2: Dua gambar bertumpuk -->
			<div class="col-span-2 flex h-[80%] w-full md:h-[70%] xl:h-full">
				<div class="flex h-full w-full flex-col-reverse gap-5 xl:flex-col">
					<div
						class="relative flex h-[80%] w-full items-center justify-center rounded-2xl bg-[url('./images/al-akbar.webp')] bg-[50%] p-10 shadow-xl xl:h-full"
					>
						<div
							class="bg-primary/90 dark:bg-secondary/90 absolute inset-0 z-0 rounded-2xl transition-all duration-300 ease-in"
						></div>
						<img
							src={logoSrc}
							class="z-10 h-full w-fit lg:hidden xl:flex"
							loading="eager"
							fetchpriority="high"
							alt="Foto depan"
						/><img
							src={logoBesarSrc}
							class="z-10 hidden h-full w-fit lg:flex xl:hidden"
							loading="eager"
							fetchpriority="high"
							alt="Foto depan"
						/>
					</div>
					<div
						class="bg-primary dark:bg-secondary text-secondary dark:text-primary flex h-[20%] w-full flex-col items-center justify-center rounded-2xl p-3 px-4 text-center font-black uppercase transition-all duration-300 ease-in md:p-5 md:px-10 xl:max-w-7xl"
					>
						<h1 class="text-xl leading-5 md:text-2xl lg:text-3xl lg:leading-tight xl:text-4xl">
							Monitoring Perpulangan
						</h1>
						<h1 class="md:text-md text-sm lg:text-lg xl:text-xl">IKPM Surabaya</h1>
					</div>
				</div>
			</div>

			<!-- Kolom 3: Bagian tombol -->
			<div
				class="flex h-[20%] w-full grid-cols-2 flex-row items-center justify-between text-center xl:h-full xl:grid-cols-4 xl:flex-col xl:items-end xl:gap-2 xl:px-0 xl:pt-0"
			>
				{#each menuItems as m}
					<button
						onclick={() => scrollToSection(m.id)}
						class="text-secondary dark:text-primary dark:bg-secondary bg-primary flex aspect-square h-[60%] w-[24%] flex-col items-center justify-center rounded-2xl uppercase shadow-lg transition-all duration-200 ease-in hover:scale-105 hover:cursor-pointer md:h-[80%] lg:rounded-3xl lg:p-3 xl:h-40 xl:w-40"
					>
						<svelte:component
							this={m.icon}
							class="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-16 xl:w-16"
						/>
						<p class="mt-1 w-full text-[6px] font-black md:text-sm lg:text-base">
							{m.text}
						</p>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
