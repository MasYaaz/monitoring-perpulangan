<script lang="ts">
	import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	const socialMedia = [
		{
			href: 'https://www.instagram.com/ikpmgontorsurabaya/',
			aria: 'Instagram',
			icon: faInstagram
		},
		{
			href: 'https://web.facebook.com/ikpmsby/',
			aria: 'Facebook',
			icon: faFacebook
		}
	];
</script>

<div class="flex flex-col lg:items-end">
	<h3 class="text-dark mb-2 text-xl font-semibold">Our Media</h3>
	<div class="flex space-x-4">
		{#each socialMedia as s}
			<a target="_blank" href={s.href} aria-label={s.aria} class="hover:scale-105">
				<FontAwesomeIcon icon={s.icon} class="text-dark text-xl" />
			</a>
		{/each}
	</div>
</div>
