<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let text = '';
	export let href = '';
	export let defaultClasses =
		'box-border font-sans bg-dark-brown text-off-white p-4 text-xl rounded-full box-shadow hover:text-dark-brown hover:bg-off-white transition-all duration-300 ease-in-out border hover:border-dark-brown border-transparent flex justify-center';
	export let extraClasses = '';
	export let disabled = false;

	let disabledClasses =
		'bg-gray-500 hover:bg-gray-500 border-transparent hover:border-transparent hover:text-off-white cursor-default pointer-events-none';

	const handleDisabled = (e: MouseEvent | FocusEvent) => {
		if (disabled) {
			e.preventDefault();
		}
		return;
	};

	const dispatch = createEventDispatcher();
</script>

{#if href}
	<a
		class={`${defaultClasses} ${extraClasses} ${disabled ? disabledClasses : ''}`}
		href={disabled ? '' : href}
		on:click={handleDisabled}
		on:focus={handleDisabled}
		on:mouseover={handleDisabled}
		tabindex={disabled ? -1 : 0}
		aria-disabled={disabled ? 'true' : 'false'}
	>
		{text}<slot />
	</a>
{:else}
	<button
		class={`${defaultClasses} ${extraClasses}`}
		{disabled}
		on:click={() => dispatch('onClick')}
	>
		{text}<slot />
	</button>
{/if}
