<script>
	const prosedur = [
		'Memasuki pintu masuk yang telah ditentukan.',
		'Parkir di tempat yang telah ditentukan.',
		'Mengkonfirmasi kedatangan di meja registrasi.',
		'Menunggu santri di tempat yang ditentukan.',
		'Setelah bertemu dengan ananda, walisantri dipersilahkan meninggalkan area Al-Akbar tanpa menetap.'
	];

	const tataTertib = [
		'Wajib memakai pakaian yang sopan dan menutup aurat.',
		'Wajib memarkirkan kendaraan di tempat yang telah ditentukan.',
		'Dilarang menemui santri sebelum selesainya pengabsenan dengan pembimbing konsulatnya.',
		'Dilarang mengambil barang bawaan santri sampai ada arahan dari panitia yang bertugas.',
		'Dilarang melewati batas-batas steril yang sudah ditetapkan.',
		'Wajib menjaga kebersihan dan ketertiban.',
		'Wajib mengikuti semua arahan dari panitia yang bertugas.'
	];
</script>

<div class="z-20 mt-2 flex max-w-lg flex-col gap-5 px-5 md:max-w-2xl lg:max-w-4xl lg:flex-row">
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
			{#each prosedur as item}
				<li>{item}</li>
			{/each}
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
			{#each tataTertib as item}
				<li>{item}</li>
			{/each}
		</ol>
	</div>
</div>
