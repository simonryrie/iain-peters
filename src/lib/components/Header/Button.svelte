<script lang="ts">
	export let primary: boolean = true;
	export let content: string;
	export let href = '';
	export let defaultClasses =
		'font-sans bg-dark-brown text-off-white p-4 text-xl rounded-full box-shadow hover:text-dark-brown hover:bg-off-white transition-all duration-300 ease-in-out';
	export let extraClasses = '';
</script>

{#if href}
	<a class={`${defaultClasses} ${extraClasses}`} {href}>
		{content}
	</a>
{:else}
	<button class={`${defaultClasses} ${extraClasses}`}>
		{content}
	</button>
{/if}
