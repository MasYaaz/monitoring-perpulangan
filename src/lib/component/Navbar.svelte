<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { showNavbar, toggleMenu, menuTerbuka, scrollToSection, halamanAktif } from '../store/ui';
	import DarkmodeButton from './DarkmodeButton.svelte';
	import { isDark } from '../store/darkMode';
	import { navItems } from '../store/array';
	import { cubicOut } from 'svelte/easing';

	$: logoSrc = $isDark ? './light-theme.svg' : './dark-theme.svg';
</script>

<header class="flex w-full justify-center">
	<div
		class="bg-primary dark:bg-secondary dark:shadow-secondary fixed top-2 z-50 mt-2 flex h-12 w-[92%] justify-center rounded-md rounded-tr-xl rounded-bl-xl px-8 shadow-md/50 transition-all duration-200 ease-in md:h-16 md:w-[90%] md:px-12 lg:px-16 xl:h-20 xl:rounded-lg xl:rounded-tr-3xl xl:rounded-bl-3xl 2xl:top-4"
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
					loading="eager"
				/>
			</div>

			<!-- Desktop Nav -->
			{#if $showNavbar}
				<nav
					in:fly={{ x: 50, opacity: 0, duration: 400, easing: cubicOut }}
					out:fly={{ x: -50, opacity: 0, duration: 300 }}
					class="hidden basis-2/3 items-center justify-end p-2 transition-transform duration-500 ease-out lg:flex"
				>
					{#if !$isDark}
						{#each navItems as item}
							<button
								onclick={() => scrollToSection(item.id)}
								class="text-secondary dark:text-primary hover:text-light mr-4 flex w-fit justify-center border-b-3 pb-1 tracking-[1px] transition-transform duration-75 hover:scale-105 hover:cursor-pointer lg:mr-10"
								class:border-secondary={$halamanAktif === item.id}
								class:scale-110={$halamanAktif === item.id}
								class:border-transparent={$halamanAktif !== item.id}
								aria-label={item.aria}
							>
								<svelte:component this={item.icon} size="25" />
							</button>
						{/each}
					{/if}
					{#if $isDark}
						{#each navItems as item}
							<button
								onclick={() => scrollToSection(item.id)}
								class="text-secondary dark:text-primary hover:text-light mr-4 flex w-fit justify-center border-b-3 pb-1 tracking-[1px] transition-transform duration-75 hover:scale-105 hover:cursor-pointer lg:mr-10"
								class:border-primary={$halamanAktif === item.id}
								class:scale-110={$halamanAktif === item.id}
								class:border-transparent={$halamanAktif !== item.id}
								aria-label={item.aria}
							>
								<svelte:component this={item.icon} size="25" />
							</button>
						{/each}
					{/if}
				</nav>
			{/if}

			<div class="flex h-full gap-2">
				<DarkmodeButton />
				<!-- Hamburger -->
				<button class="lg:hidden" onclick={toggleMenu} aria-label="tombol navbar">
					<svg
						class={`h-6 w-6 ${$isDark ? 'text-primary' : 'text-secondary'}`}
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
					class="fixed inset-0 z-40 flex h-screen flex-col items-center justify-center gap-2 bg-gray-900/50 backdrop-blur-sm md:gap-4 lg:hidden"
				>
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.id)}
							aria-label={item.aria}
							class="bg-primary/20 flex w-[90%] items-center justify-center gap-2 rounded-4xl p-8 text-xl font-semibold tracking-wide text-white uppercase"
						>
							<svelte:component this={item.icon} size="25" />
							{item.aria}
						</button>
					{/each}
					<img src="./dark-theme.svg" alt="logo satgas" class="h-15 w-auto pt-5 md:h-25" />
				</nav>
			{/if}
		</div>
	</div>
</header>
