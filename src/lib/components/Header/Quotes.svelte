<script lang="ts">
	import Quote from './Quote.svelte';
	import type { Quote as QuoteType } from '$lib/content/content';

	export let quotes: QuoteType[];
</script>

<div class="flex flex-col gap-12 text-dark-brown">
	<div class="w-3/5">
		<Quote quote={quotes[0]} />
	</div>
	<div class="self-end w-3/5">
		<Quote quote={quotes[1]} leftAligned={false} />
	</div>
</div>
