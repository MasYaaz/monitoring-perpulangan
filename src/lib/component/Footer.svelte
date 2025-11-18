<script>
	import { scrollToSection } from '../utils/scrollTo';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { isDark } from '../store/darkMode';
	import { navItems, socialMedia } from '../store/array';
	$: logoSrc = $isDark ? './dark-theme.svg' : './light-theme.svg';
	$: ikpmSrc = $isDark ? './ikpm-dark.svg' : './ikpm-light.svg';
</script>

<footer class="relative w-full overflow-hidden pt-20">
	<!-- Background Image -->
	<div class="absolute inset-0 bg-[url('./images/back.webp')] bg-cover bg-center"></div>

	<!-- Overlay Transparan -->
	<div
		class="from-secondary/60 via-secondary/80 to-secondary/100 dark:from-primary/90 dark:via-primary/95 dark:to-primary/100 absolute inset-0 bg-gradient-to-t"
	></div>
	<!-- Ubah ke bg-black/60 jika mau gelap -->

	<!-- Konten Footer -->
	<div class="text-primary dark:text-secondary relative z-10 py-10 md:px-6">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-0">
			<!-- Kolom 1: Brand/Deskripsi -->
			<div class="flex flex-col gap-2">
				<div class="flex gap-1 md:gap-3">
					<img
						src={logoSrc}
						alt="logo"
						width="187"
						height="187"
						class="h-auto w-30"
						loading="lazy"
					/>
					<img
						src={ikpmSrc}
						alt="logo"
						width="187"
						height="187"
						class="h-auto w-22"
						loading="lazy"
					/>
				</div>
				<div>
					<p class="text-base font-bold uppercase lg:text-lg">Satgas IKPM Gontor Cabang Surabaya</p>
					<p class="max-w-md text-xs lg:text-sm">
						Jl. Sultan Iskandar Muda Danakarya No. 71 A Ampel, Surabaya
					</p>
					<p class="max-w-md text-justify text-xs lg:text-sm">
						Tlp. (031) 350 3502 || Wabsite: www.ikpmsby.org
					</p>
				</div>
			</div>

			<!-- Kolom 2: Navigasi -->
			<div class="flex flex-col lg:hidden lg:items-end">
				<h3 class="text-dark mb-2 text-xl font-semibold">Navigasi</h3>
				<div class="flex flex-col gap-3">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.id)}
							aria-label={item.aria}
							class="flex justify-baseline gap-2 text-sm font-semibold tracking-wide text-white uppercase transition-colors"
						>
							<svelte:component this={item.icon} size="20" />
							{item.aria}
						</button>
					{/each}
				</div>
			</div>

			<!-- Kolom 3: Sosial Media -->
			<div class="flex flex-col lg:items-end">
				<h3 class="text-dark mb-2 text-xl font-semibold">Our Media</h3>
				<div class="flex space-x-4">
					{#each socialMedia as s}
						<a target="_blank" href={s.href} aria-label={s.aria} class="hover:scale-105">
							<FontAwesomeIcon icon={s.icon} class="text-dark text-xl" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Garis dan copyright -->
		<div class="mx-auto flex max-w-7xl flex-col">
			<hr class="border-primary dark:border-secondary my-6 mt-16 border-[0.5px]" />
			<p class="text-dark2 text-center text-sm">
				&copy; 2025 SATGAS IKPM - Cabang Surabaya . All rights reserved.
			</p>
		</div>
	</div>
</footer>
