<script>
	import { isDark } from '../../store/darkMode';
	import ButtonWrapper from './ButtonWrapper.svelte';
</script>

<div class="z-10 flex h-screen min-h-screen w-full max-w-5xl pt-25 md:pt-25 lg:pt-25 xl:pt-30">
	<div
		class="dark:text-secondary text-primary flex h-full w-full flex-col items-start justify-between p-6 sm:items-center md:p-10"
	>
		<div class="flex w-full flex-col items-start sm:items-center">
			<div class="relative flex h-40 w-full items-center sm:justify-center md:h-30">
				<img
					src="./logo-light.svg"
					class="absolute h-full transition-opacity duration-500 ease-in-out
                    {$isDark ? 'opacity-0' : 'opacity-100'}"
					loading="eager"
					fetchpriority="high"
					alt="Logo Light"
				/>

				<img
					src="./logo-dark.svg"
					class="absolute h-full transition-opacity duration-500 ease-in-out
                    {$isDark ? 'opacity-100' : 'opacity-0'}"
					loading="eager"
					fetchpriority="high"
					alt="Logo Dark"
				/>
			</div>

			<h1 class="max-w-xs text-4xl font-black uppercase sm:max-w-full lg:text-6xl">
				Pusat Informasi
			</h1>
			<h1 class="max-w-[240px] text-2xl font-black uppercase sm:max-w-full lg:text-4xl">
				Perpulangan & Arus Balik
			</h1>
			<h1 class="font-bold uppercase lg:text-2xl">Satuan Tugas IKPM Surabaya</h1>
		</div>

		<ButtonWrapper />
	</div>
</div>
