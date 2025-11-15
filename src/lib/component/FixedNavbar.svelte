<script>
	import { menuTerbuka, showNavbar, toggleMenu } from '../store/ui';
	import { isDark } from '../store/darkMode';
	import { halamanAktif } from '../store/ui';
	import { scrollToSection } from '../utils/scrollTo';
	import DarkmodeButton from './DarkmodeButton.svelte';
	import { slide } from 'svelte/transition';
	import { navItems } from '../store/array';

	$: logoSrc = $isDark ? './dark-theme.svg' : './light-theme.svg';
</script>

{#if !$showNavbar}
	<div class="absolute flex w-full justify-center">
		<div
			class={`top-0 z-10 mt-2 flex h-12 w-[92%] justify-center rounded-md rounded-tr-xl rounded-bl-xl px-8 transition-all duration-200 ease-in md:h-16 md:w-[95%] md:px-20 2xl:h-20`}
		>
			<div class="flex w-full justify-between">
				<!-- Logo -->
				<div class="flex basis-1/3 items-center">
					<img
						src={logoSrc}
						alt="logo"
						width="187"
						height="187"
						class="w-18 md:w-26 md:p-2 lg:w-34"
						fetchpriority="high"
						loading="eager"
					/>
				</div>

				<!-- Desktop Nav -->
				<nav class="hidden basis-2/3 items-center justify-end p-2 2xl:flex">
					{#if !$isDark}
						{#each navItems as item}
							<button
								onclick={() => scrollToSection(item.id)}
								aria-label={item.aria}
								class="text-primary dark:text-secondary font-display hover:text-light mr-4 w-25 border-b-2 pb-1 text-center text-[13px] tracking-[1px] transition-transform duration-75 hover:scale-105 hover:cursor-pointer md:text-[15px] lg:mr-10"
								class:border-primary={$halamanAktif === item.id}
								class:scale-110={$halamanAktif === item.id}
								class:border-transparent={$halamanAktif !== item.id}
							>
								{item.label}
							</button>
						{/each}
					{/if}
					{#if $isDark}
						{#each navItems as item}
							<button
								onclick={() => scrollToSection(item.id)}
								aria-label={item.aria}
								class="text-primary dark:text-secondary font-display hover:text-light mr-4 w-25 border-b-2 pb-1 text-center text-[13px] tracking-[1px] transition-transform duration-75 hover:scale-105 hover:cursor-pointer md:text-[15px] lg:mr-10"
								class:border-secondary={$halamanAktif === item.id}
								class:scale-110={$halamanAktif === item.id}
								class:border-transparent={$halamanAktif !== item.id}
							>
								{item.label}
							</button>
						{/each}
					{/if}
				</nav>

				<div class="flex h-full gap-2">
					<DarkmodeButton />
					<!-- Hamburger -->
					<button class="2xl:hidden" onclick={toggleMenu} aria-label="tombol navbar">
						<svg
							class={`h-6 w-6 ${$isDark ? 'text-secondary' : 'text-primary'}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				<!-- Mobile Menu -->
				{#if $menuTerbuka}
					<nav
						transition:slide={{ duration: 400 }}
						class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm 2xl:hidden"
					>
						{#each navItems as item}
							<button
								onclick={() => scrollToSection(item.id)}
								aria-label={item.aria}
								class="hover:text-secondary my-4 w-[80%] border-b p-2 text-xl font-semibold tracking-wide text-white transition-colors"
							>
								{item.label}
							</button>
						{/each}
					</nav>
				{/if}
			</div>
		</div>
	</div>
{/if}
