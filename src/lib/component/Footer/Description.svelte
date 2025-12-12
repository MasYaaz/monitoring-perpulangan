<script lang="ts">
	import { isDark } from '../../store/darkMode';
	$: logoSrc = $isDark ? './dark-theme.svg' : './light-theme.svg';
	$: ikpmSrc = $isDark ? './ikpm-dark.svg' : './ikpm-light.svg';
</script>

<div class="flex flex-col gap-2">
	<div class="-mr-1 flex justify-center gap-1 md:justify-start md:gap-3">
		<img src={logoSrc} alt="logo" width="187" height="187" class="h-auto w-30" loading="lazy" />
		<img src={ikpmSrc} alt="logo" width="187" height="187" class="h-auto w-22" loading="lazy" />
	</div>
	<div>
		<p class="text-center text-lg font-bold uppercase md:text-left lg:text-2xl">
			Satgas IKPM Gontor
		</p>
		<p class="-mt-2 text-center text-lg font-bold uppercase md:text-left lg:text-xl">
			Cabang Surabaya
		</p>
		<p class="text-center text-[11px] font-medium md:text-left lg:text-sm">
			Jl. Sultan Iskandar Muda Danakarya No. 71 A Ampel, Surabaya
		</p>
		<p class="text-center text-[11px] font-medium md:text-left lg:text-sm">
			Tlp. (031) 350 3502 || Wabsite: www.ikpmsby.org
		</p>
	</div>
	<div class="flex w-full flex-col items-center md:hidden">
		<hr class="border-primary dark:border-secondary my-1 w-[80%] border-[2px] md:hidden" />
		<hr class="border-primary dark:border-secondary w-[70%] border-[0.5px] md:hidden" />
	</div>
</div>
