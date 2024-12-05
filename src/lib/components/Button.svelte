<script lang="ts">
	export let text: string;
	export let href = '';
	export let defaultClasses =
		'font-sans bg-dark-brown text-off-white p-4 text-xl rounded-full box-shadow hover:text-dark-brown hover:bg-off-white transition-all duration-300 ease-in-out border hover:border-dark-brown border-transparent flex justify-center';
	export let extraClasses = '';
</script>

{#if href}
	<a class={`${defaultClasses} ${extraClasses}`} {href}>
		{text}
	</a>
{:else}
	<button class={`${defaultClasses} ${extraClasses}`}>
		{text}
	</button>
{/if}
