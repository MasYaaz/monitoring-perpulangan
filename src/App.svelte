<script>
	import './app.css';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import { onMount, onDestroy } from 'svelte';
	import Sertifikat from './lib/Sertifikat.svelte';
	import { refs, ids, visibleFlags } from './lib/store/sectionRefs';
	import { scrollToSection } from './lib/utils/scrollTo';
	import { handleScroll } from './lib/utils/scrollHandler';
	import Navbar from './lib/component/Navbar.svelte';
	import { menuItems, mySkill, profilItems } from './lib/store/array';
	import Footer from './lib/component/Footer.svelte';
	import Denah from './lib/component/Denah.svelte';
	import Tatib from './lib/component/Tatib.svelte';

	// Observer
	let observer;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = Object.keys(refs).find((key) => refs[key] === entry.target);
					if (id) {
						visibleFlags[id] = entry.isIntersecting;
					}
				});
			},
			{ threshold: 0 }
		);

		ids.forEach((id) => {
			const el = refs[id];
			if (el) observer.observe(el);
		});
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect(); // bersihkan observer juga
		};
	});
</script>

<Navbar />
<main class="bg-secondary dark:bg-primary flex flex-col items-center">
	<!-- Halaman Utama -->
	<section
		class="relative w-full flex justify-center min-h-screen xl:max-h-screen bg-cover bg-[url('./images/back.webp')]"
		id="section_1"
	>
		<div
			class="absolute inset-0 bg-gradient-to-b from-secondary/60 to-secondary/100 dark:from-primary/90 dark:to-primary/100"
		></div>

		<div
			class="flex flex-col justify-center items-center gap-6 h-full px-6 lg:px-10 2xl:grid 2xl:grid-cols-6 2xl:max-w-7xl 2xl:mx-auto 2xl:gap-6 pt-25 md:pt-30 2xl:pt-40"
		>
			<!-- Kolom 1: Gambar tunggal -->
			<div
				bind:this={refs['gambarRef']}
				class="transition-transform ease-out duration-700 hidden 2xl:flex justify-center col-span-3"
				class:translate-y-10={!visibleFlags['gambarRef']}
				class:opacity-0={!visibleFlags['gambarRef']}
				class:translate-y-0={visibleFlags['gambarRef']}
				class:opacity-100={visibleFlags['gambarRef']}
			>
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
				bind:this={refs['gambarRef']}
				class="transition-transform ease-out duration-700 flex justify-center items-center col-span-2"
				class:translate-y-10={!visibleFlags['gambarRef']}
				class:opacity-0={!visibleFlags['gambarRef']}
				class:translate-y-0={visibleFlags['gambarRef']}
				class:opacity-100={visibleFlags['gambarRef']}
			>
				<div class="grid gap-5 h-[400px] md:h-[500px] xl:h-[700px]">
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
				bind:this={refs['textRef']}
				class="flex flex-row 2xl:flex-col items-left justify-center text-center gap-1 lg:gap-5 h-full xl:h-[700px] transition-transform ease-out duration-700 grid-cols-2 2xl:grid-cols-4"
				class:translate-y-10={!visibleFlags['textRef']}
				class:opacity-0={!visibleFlags['textRef']}
				class:translate-y-0={visibleFlags['textRef']}
				class:opacity-100={visibleFlags['textRef']}
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

	<!-- Denah Al-Akbar -->
	<section id="section_2" class="w-screen flex px-10 pt-20 min-h-screen flex-col items-center">
		<Denah />
	</section>

	<!-- Tata Tertib -->
	<section
		class="w-full h-screen flex flex-col px-10 pt-20 items-center 2xl:mt-40 justify-center gap-8"
		id="section_3"
	>
		<Tatib />
	</section>

	<!-- Jadwal -->
	<section
		id="section_4"
		class="flex items-center w-full min-h-screen px-6 bg-secondary dark:bg-primary"
	>
		<div
			class="container mx-auto px-4 transition-transform duration-500"
			bind:this={refs['sertifikat']}
			class:-translate-x-24={!visibleFlags['sertifikat']}
			class:opacity-0={!visibleFlags['sertifikat']}
			class:translate-x-0={visibleFlags['sertifikat']}
			class:opacity-100={visibleFlags['sertifikat']}
		>
			<Sertifikat />
		</div>
	</section>

	<!-- Data Santri -->
	<section
		class="w-full min-h-screen bg-secondary dark:bg-primary px-6 md:px-16 lg:px-32 py-20 flex flex-col items-center justify-around gap-8 md:pt-30 z-30"
		id="section_5"
	>
		<div class="max-w-lg lg:max-w-4xl flex flex-col items-center">
			<div
				bind:this={refs['card1Section4R']}
				class:-translate-x-24={!visibleFlags['card1Section4R']}
				class:opacity-0={!visibleFlags['card1Section4R']}
				class:translate-x-0={visibleFlags['card1Section4R']}
				class:opacity-100={visibleFlags['card1Section4R']}
				class="bg-brown shadow-light shadow-2xl/20 p-5 md:p-7 mb-10 w-content text-center rounded-2xl shadow-xl transition-all duration-700 ease-out transform"
			>
				<h2
					class="font-primary text-secondary text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-light mb-2"
				>
					Link Portofolio Saya
				</h2>
			</div>
			<div
				class="flex gap-20 flex-col md:flex-row 2xl:flex-nowrap justify-center md:gap-30 px-4 items-center"
			>
				<!-- Kartu 1 -->
				<div
					bind:this={refs['card2Section4R']}
					class:-translate-x-24={!visibleFlags['card2Section4R']}
					class:opacity-0={!visibleFlags['card2Section4R']}
					class:translate-x-0={visibleFlags['card2Section4R']}
					class:opacity-100={visibleFlags['card2Section4R']}
					class="w-full md:w-1/2 transition-all flex justify-center duration-700 ease-out transform"
				>
					<a href="https://github.com/MasYaaz" target="_blank" aria-label="Github">
						<FontAwesomeIcon
							icon={faGithub}
							class="text-[160px] dark:text-secondary lg:text-[220px] hover:scale-115 duration-700"
						/>
					</a>
				</div>

				<!-- Kartu 2 -->
				<div
					bind:this={refs['card3Section4R']}
					class:translate-x-24={!visibleFlags['card3Section4R']}
					class:opacity-0={!visibleFlags['card3Section4R']}
					class:translate-x-0={visibleFlags['card3Section4R']}
					class:opacity-100={visibleFlags['card3Section4R']}
					class="w-fit md:w-1/2 transition-all duration-700 ease-out transform"
				>
					<a
						href="https://www.shutterstock.com/g/MasYaaz"
						target="_blank"
						aria-label="Shutterstock"
					>
						<img
							loading="lazy"
							alt="Shutterstock"
							src="./images/shutterstock.svg"
							class="w-45 lg:w-60 h-fit p-4 md:mb-3 hover:scale-115 transition-transform duration-300"
						/>
					</a>
				</div>
			</div>
			<p
				bind:this={refs['card4Section4R']}
				class:-translate-x-24={!visibleFlags['card4Section4R']}
				class:opacity-0={!visibleFlags['card4Section4R']}
				class:translate-x-0={visibleFlags['card4Section4R']}
				class:opacity-100={visibleFlags['card4Section4R']}
				class="mt-5 md:mt-30 text-center text-primary text-lg md:text-xl font-medium font-primary transition-all duration-700 ease-out transform"
			>
				-- Thanks for your attention --
			</p>
		</div>
	</section>
</main>

<Footer />
