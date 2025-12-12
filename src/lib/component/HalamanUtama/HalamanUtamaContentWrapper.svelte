<script>
	import ButtonWrapper from './ButtonWrapper.svelte';
	import PictureContent1 from './PictureContent1.svelte';
	import PictureContent2 from './PictureContent2.svelte';
</script>

<div class="z-10 flex h-full w-full flex-col items-center pt-20 md:pt-25 lg:pt-25 xl:pt-30">
	<div
		class="flex h-full w-full max-w-md flex-col items-center justify-center gap-5 px-5 md:max-w-3xl md:px-10 lg:h-full lg:max-w-4xl lg:gap-4 xl:grid xl:max-w-7xl xl:grid-cols-6 xl:gap-6"
	>
		<!-- Kolom 1: Gambar tunggal -->
		<PictureContent1 />

		<!-- Kolom 2: Dua gambar bertumpuk -->
		<PictureContent2 />

		<!-- Kolom 3: Bagian tombol -->
		<ButtonWrapper />
	</div>
</div>
