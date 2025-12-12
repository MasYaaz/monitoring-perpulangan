<script>
	import { isDark } from '../../store/darkMode';
	import ButtonWrapper from './ButtonWrapper.svelte';
</script>

<div class="z-10 flex h-screen min-h-screen w-full max-w-5xl pt-25 md:pt-25 lg:pt-25 xl:pt-30">
	<div
		class="dark:text-secondary text-primary flex h-full w-full flex-col items-start justify-between p-6 md:items-center md:p-10 lg:items-center"
	>
		<div class="flex w-full flex-col items-start md:items-center">
			<div class="relative flex h-40 w-full items-center md:justify-center lg:h-20">
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

			<h1 class="mt-4 text-4xl font-black uppercase lg:text-6xl">Informasi Perpulangan</h1>
			<h1 class="font-black uppercase lg:text-2xl">Satuan Tugas IKPM Surabaya</h1>
		</div>

		<ButtonWrapper />
	</div>
</div>
