<script>
	import { onDestroy, onMount } from 'svelte';
	import Button from './Button.svelte';
	import { browser } from '$app/environment';

	const buttonClasses =
		'box-border p-1 md:p-2 text-xl bg-off-white hover:bg-dark-brown text-dark-brown hover:text-off-white border border:transparent hover:border-off-white rounded-full transition-all duration-300 ease-in-out';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Acclaim', href: '/acclaim' }
	];

	let scrolled = false;

	function handleScroll() {
		scrolled = window.scrollY > 10;
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			handleScroll();
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});

	$: bgClass = scrolled ? 'bg-dark-brown/50' : 'bg-dark-brown';
</script>

<header
	class="sticky top-0 z-50 backdrop-blur-sm border-b border-dark-brown/20 transition-all duration-300 {bgClass}"
>
	<nav class="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
		<div class="flex justify-between items-center h-16">
			<div class="flex space-x-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-off-white hover:text-orange-200 transition-colors duration-300 ease-in-out text-sm md:text-lg relative group"
					>
						{item.label}
						<span
							class="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-200 transition-all duration-300 ease-in-out group-hover:w-full"
						></span>
					</a>
				{/each}
			</div>

			<div class="flex gap-4 items-center">
				<Button
					defaultClasses={buttonClasses}
					href="https://bsky.app/profile/iainpeters.bsky.social"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 32 32"
						fill="currentColor"
						><path
							d="M23.931,5.298c-3.21,2.418-6.663,7.32-7.931,9.951-1.267-2.631-4.721-7.533-7.931-9.951-2.316-1.744-6.069-3.094-6.069,1.201,0,.857,.49,7.206,.778,8.237,.999,3.583,4.641,4.497,7.881,3.944-5.663,.967-7.103,4.169-3.992,7.372,5.908,6.083,8.492-1.526,9.154-3.476,.123-.36,.179-.527,.179-.379,0-.148,.057,.019,.179,.379,.662,1.949,3.245,9.558,9.154,3.476,3.111-3.203,1.671-6.405-3.992-7.372,3.24,.553,6.882-.361,7.881-3.944,.288-1.031,.778-7.38,.778-8.237,0-4.295-3.753-2.945-6.069-1.201Z"
						></path></svg
					>
				</Button>
				<Button
					defaultClasses={buttonClasses}
					href="https://www.facebook.com/profile.php?id=61570505272698"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 32 32"
						fill="currentColor"
						><path
							d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"
						></path></svg
					>
				</Button>
				<a class={buttonClasses} href="mailto:hello@iainpeters.com"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 32 32"
						fill="currentColor"
						><path
							d="M30.56,8.47a8,8,0,0,0-7-7,64.29,64.29,0,0,0-15.06,0,8,8,0,0,0-7,7,64.29,64.29,0,0,0,0,15.06,8,8,0,0,0,7,7,64.29,64.29,0,0,0,15.06,0,8,8,0,0,0,7-7A64.29,64.29,0,0,0,30.56,8.47Zm-8.69,8,6.76-7.09a63.05,63.05,0,0,1,0,13ZM8.7,3.42a63.65,63.65,0,0,1,14.6,0A6,6,0,0,1,28.1,7L18.57,17H13.43L3.9,7A6,6,0,0,1,8.7,3.42Zm-5.36,19a63.05,63.05,0,0,1,0-13l6.76,7.09Zm20,6.21a63.65,63.65,0,0,1-14.6,0,6,6,0,0,1-4.94-3.92l7.75-6.78.77.81A1,1,0,0,0,13,19h6a1,1,0,0,0,.72-.31l.77-.81,7.75,6.78A6,6,0,0,1,23.3,28.58Z"
						/></svg
					></a
				>
			</div>
		</div>
	</nav>
</header>
