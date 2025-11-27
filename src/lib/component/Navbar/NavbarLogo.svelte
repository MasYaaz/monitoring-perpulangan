<script lang="ts">
	import { isDark } from '../../store/darkMode';

	$: logoSrc = $isDark ? './light-theme.svg' : './dark-theme.svg';
</script>

<!-- Logo -->
<div class="flex w-[30%] items-center">
	<img src={logoSrc} alt="logo" class="h-auto w-24 md:w-26 lg:w-34" loading="eager" />
</div>
