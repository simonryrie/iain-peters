<script lang="ts">
	import Quote from './Quote.svelte';
	import type { Quote as QuoteType } from '$lib/content/content';

	export let quotes: QuoteType[];
</script>

<div class="flex flex-col gap-12 text-dark-brown">
	{#each quotes as quote, index}
		<div class={`w-3/5 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}>
			<Quote {quote} leftAligned={index % 2 === 0} />
		</div>
	{/each}
</div>
