<script lang="ts">
	import { NotebookPen } from 'lucide-svelte';
</script>

<section
	class="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-10 pt-20 md:pt-25 2xl:pt-30"
	id="section_3"
>
	<div class="flex w-full max-w-4xl flex-col items-center gap-10 dark:text-white">
		<div class="flex w-full flex-col items-center justify-center gap-2">
			<div class="dark:bg-secondary dark:text-primary bg-primary text-secondary rounded-3xl p-5">
				<NotebookPen class="h-20 w-20 lg:h-25 lg:w-25" />
			</div>

			<div>
				<h2
					class="font-heading text-center text-xl font-bold uppercase lg:text-3xl dark:text-white"
				>
					Prosedur & Tata Tertib
				</h2>
				<h2
					class="font-heading -mt-1 text-center text-4xl font-black uppercase lg:text-5xl dark:text-white"
				>
					Penjemputan
				</h2>
			</div>
		</div>
		<div class="mt-2 flex flex-col gap-5 lg:flex-row">
			<div class="flex w-full flex-col items-center justify-around gap-3 text-justify text-sm">
				<div
					class="bg-primary dark:bg-secondary text-secondary dark:text-primary flex h-20 w-full flex-col justify-center rounded-2xl p-2"
				>
					<h3 class="text-center text-xl font-bold uppercase lg:text-2xl">Prosedur Penjemputan</h3>
					<h3 class="-mt-1 text-center text-base font-semibold lg:text-lg">Santri/Santriwati</h3>
				</div>
				<ol
					class="bg-primary dark:bg-secondary text-secondary dark:text-primary flex h-full w-full list-decimal flex-col space-y-3 rounded-2xl p-10 font-[400] lg:p-15 lg:text-lg"
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
					class="bg-primary dark:bg-secondary text-secondary dark:text-primary flex h-20 w-full items-center justify-center rounded-2xl p-2 text-center text-lg font-bold uppercase lg:text-xl"
				>
					Tata Tertib dan Himbauan
				</h3>
				<ol
					class="bg-primary dark:bg-secondary text-secondary dark:text-primary flex h-full w-full list-decimal flex-col space-y-3 rounded-2xl p-10 font-[400] lg:p-12 lg:text-lg"
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
