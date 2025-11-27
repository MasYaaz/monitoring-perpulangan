<script>
	import ButtonWrapper from './ButtonWrapper.svelte';
	import PictureContent1 from './PictureContent1.svelte';
	import PictureContent2 from './PictureContent2.svelte';
</script>

<div class="z-10 flex h-screen w-full flex-col items-center gap-5 xl:h-full">
	<div
		class="flex h-full w-full flex-col items-center justify-center px-10 pt-25 md:pt-25 lg:h-full lg:max-w-3xl lg:gap-4 lg:pt-25 xl:grid xl:max-w-7xl xl:grid-cols-6 xl:gap-6 xl:pt-30"
	>
		<!-- Kolom 1: Gambar tunggal -->
		<PictureContent1 />

		<!-- Kolom 2: Dua gambar bertumpuk -->
		<PictureContent2 />

		<!-- Kolom 3: Bagian tombol -->
		<ButtonWrapper />
	</div>
</div>
