<script lang="ts">
	import type { Quote } from '$lib/content/content';

	export let quote: Quote;
	export let leftAligned = true;
</script>

<div
	class={`m${leftAligned ? 'l' : 'r'}-[12.5%] font-body flex flex-col gap-4 items-end p-10 bg-blue-400/20 text-dark-brown rounded-3xl`}
>
	<p class="italic text-lg">{quote.quote}</p>
	<div
		class={`${leftAligned ? 'items-start' : 'items-end text-right'} font-bold flex flex-col gap-0`}
	>
		<p>{quote.author}</p>
		<p>{quote.position}</p>
	</div>
</div>
