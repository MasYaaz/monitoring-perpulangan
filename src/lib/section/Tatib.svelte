<script lang="ts">
	import { NotebookPen } from 'lucide-svelte';
</script>

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[url('./images/bg2.webp')] bg-cover px-10 pt-20 md:pt-25 2xl:pt-30"
	id="section_3"
>
	<div
		class="from-secondary/100 via-secondary/60 to-secondary/100 dark:from-primary/100 dark:via-primary/90 dark:to-primary/100 absolute inset-0 z-0 bg-gradient-to-b"
	></div>
	<div class="z-10 flex w-full max-w-4xl flex-col items-center gap-10 dark:text-white">
		<div class="flex w-full flex-col items-center justify-center gap-5">
			<div
				class="dark:bg-secondary dark:text-primary bg-primary text-secondary dark:shadow-secondary rounded-3xl p-5 shadow-md/50 transition-all duration-300 ease-in"
			>
				<NotebookPen class="h-20 w-20 lg:h-25 lg:w-25" />
			</div>

			<div
				class=" text-center font-bold uppercase transition-all duration-300 ease-in dark:text-white"
			>
				<h2 class="text-xl lg:text-3xl">Prosedur & Tata Tertib</h2>
				<h2 class="-mt-1 text-4xl font-black lg:text-5xl">Penjemputan</h2>
			</div>
		</div>
		<div class="mt-2 flex flex-col gap-5 lg:flex-row">
			<div class="flex w-full flex-col items-center justify-around gap-3 text-justify text-sm">
				<div
					class="bg-primary dark:shadow-secondary dark:bg-secondary text-secondary dark:text-primary flex h-20 w-full flex-col justify-center rounded-2xl p-2 shadow-md/60 transition-all duration-300 ease-in"
				>
					<h3 class="text-center text-xl font-bold uppercase lg:text-2xl">Prosedur Penjemputan</h3>
					<h3 class="-mt-1 text-center text-base font-semibold lg:text-lg">Santri/Santriwati</h3>
				</div>
				<ol
					class="bg-primary dark:shadow-secondary dark:bg-secondary text-secondary dark:text-primary flex h-full w-full list-decimal flex-col space-y-3 rounded-2xl p-10 font-[500] shadow-md/80 transition-all duration-300 ease-in lg:p-15 lg:text-lg"
				>
					<li>Memasuki pintu masuk yang telah ditentukan.</li>
					<li>Parkir di tempat yang telah ditentukan.</li>
					<li>Mengkonfirmasi kedatangan di meja registrasi.</li>
					<li>Menunggu santri di tempat yang ditentukan.</li>
					<li>
						Setelah bertemu dengan ananda, walisantri dipersilahkan meninggalkan area Al-Akbar tanpa
						menetap.
					</li>
				</ol>
			</div>
			<div class="flex w-full flex-col items-center gap-3 text-justify text-sm">
				<h3
					class="bg-primary dark:bg-secondary text-secondary dark:text-primary dark:shadow-secondary flex h-20 w-full items-center justify-center rounded-2xl p-2 text-center text-lg font-bold uppercase shadow-md/60 transition-all duration-300 ease-in lg:text-xl"
				>
					Tata Tertib dan Himbauan
				</h3>
				<ol
					class="dark:bg-secondary bg-primary dark:shadow-secondary text-secondary dark:text-primary flex h-full w-full list-decimal flex-col space-y-3 rounded-2xl p-10 font-[500] shadow-md/80 transition-all duration-300 ease-in lg:p-12 lg:text-lg"
				>
					<li>Wajib memakai pakaian yang sopan dan menutup aurat.</li>
					<li>Wajib memarkirkan kendaraan di tempat yang telah ditentukan.</li>
					<li>
						Dilarang menemui santri sebelum selesainya pengabsenan dengan pembimbing konsulatnya.
					</li>
					<li>
						Dilarang mengambil barang bawaan santri sampai ada arahan dari panitia yang bertugas.
					</li>
					<li>Dilarang melewati batas-batas steril yang sudah ditetapkan.</li>
					<li>Wajib menjaga kebersihan dan ketertiban.</li>
					<li>Wajib mengikuti semua arahan dari panitia yang bertugas.</li>
				</ol>
			</div>
		</div>
	</div>
</section>
