<script lang="ts">
	import TatibCard from './Tatib/TatibCard.svelte';

	// 1. Definisikan tipe datanya (karena pakai TS) biar rapi & aman
	type InfoCardData = {
		title: string;
		subtitle: string;
		items: string[];
	};

	// 2. Gabungkan data menjadi satu array 'single source of truth'
	const infoList: InfoCardData[] = [
		{
			title: 'Tata Tertib & Himbauan',
			subtitle: 'Untuk Para Walisantri',
			items: [
				'Wajib memakai pakaian yang sopan dan menutup aurat.',
				'Wajib memarkirkan kendaraan di tempat yang telah ditentukan.',
				'Dilarang menemui santri sebelum selesainya pengabsenan dengan pembimbing konsulatnya.',
				'Dilarang mengambil barang bawaan santri sampai ada arahan dari panitia yang bertugas.',
				'Dilarang melewati batas-batas steril yang sudah ditetapkan.',
				'Wajib menjaga kebersihan dan ketertiban.',
				'Wajib mengikuti semua arahan dari panitia yang bertugas.'
			]
		},
		{
			title: 'Prosedur Penjemputan',
			subtitle: 'Santri - Santriwati',
			items: [
				'Memasuki pintu masuk yang telah ditentukan.',
				'Parkir di tempat yang telah ditentukan.',
				'Mengkonfirmasi kedatangan di meja registrasi.',
				'Menunggu santri di tempat yang ditentukan.',
				'Setelah bertemu dengan ananda, walisantri dipersilahkan meninggalkan area Al-Akbar tanpa menetap.'
			]
		}
	];
</script>

<div class="z-20 mt-2 flex max-w-sm flex-col gap-5 px-8 md:max-w-md lg:max-w-4xl lg:flex-row">
	{#each infoList as info}
		<TatibCard title={info.title} subtitle={info.subtitle} items={info.items} />
	{/each}
</div>
