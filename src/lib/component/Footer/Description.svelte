<script lang="ts">
	import { isDark } from '../../store/darkMode';
	$: logoSrc = $isDark ? './dark-theme.svg' : './light-theme.svg';
	$: ikpmSrc = $isDark ? './ikpm-dark.svg' : './ikpm-light.svg';
</script>

<div class="flex flex-col gap-2">
	<div class="flex gap-1 md:gap-3">
		<img src={logoSrc} alt="logo" width="187" height="187" class="h-auto w-30" loading="lazy" />
		<img src={ikpmSrc} alt="logo" width="187" height="187" class="h-auto w-22" loading="lazy" />
	</div>
	<div>
		<p class="text-lg font-bold uppercase lg:text-2xl">Satgas IKPM Gontor</p>
		<p class="-mt-1 text-lg font-bold uppercase lg:text-xl">Cabang Surabaya</p>
		<p class="max-w-md text-[11px] font-medium lg:text-sm">
			Jl. Sultan Iskandar Muda Danakarya No. 71 A Ampel, Surabaya
		</p>
		<p class="max-w-md text-justify text-[11px] font-medium lg:text-sm">
			Tlp. (031) 350 3502 || Wabsite: www.ikpmsby.org
		</p>
	</div>
</div>
