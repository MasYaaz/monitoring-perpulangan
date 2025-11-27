<script lang="ts">
	import { isDark } from '../../store/darkMode';

	$: logoSrc = $isDark ? './logo-light.svg' : './logo-dark.svg';
	$: logoBesarSrc = $isDark ? './light-theme.svg' : './dark-theme.svg';
</script>

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
