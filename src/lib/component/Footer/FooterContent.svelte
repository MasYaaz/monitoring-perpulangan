<script>
	import Description from './Description.svelte';
	import Navigation from './Navigation.svelte';
	import SocialMedia from './SocialMedia.svelte';
	import Copyright from './Copyright.svelte';
</script>

<div
	class="text-primary dark:text-secondary relative z-20 my-5 px-6 md:mx-10 md:max-w-4xl lg:max-w-7xl"
>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
		<Description />
		<Navigation />
		<SocialMedia />
	</div>

	<Copyright />
</div>
