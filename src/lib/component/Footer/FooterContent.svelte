<script>
	import Description from './Description.svelte';
	import Navigation from './Navigation.svelte';
	import SocialMedia from './SocialMedia.svelte';
	import Copyright from './Copyright.svelte';
</script>

<div class="text-primary dark:text-secondary relative z-20 mx-auto my-5 max-w-7xl px-6">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
		<Description />
		<Navigation />
		<SocialMedia />
	</div>

	<Copyright />
</div>
