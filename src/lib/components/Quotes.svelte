<script lang="ts">
	import Quote from './Quote.svelte';
	import type { Quote as QuoteType } from '$lib/content/content';

	export let quotes: QuoteType[];
</script>

<div class="flex flex-col gap-6 xl:gap-12 text-dark-brown px-0 xl:px-24">
	{#each quotes as quote, index}
		<div class={`w-full xl:w-5/6 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}>
			<Quote {quote} leftAligned={index % 2 === 0} />
		</div>
	{/each}
</div>
