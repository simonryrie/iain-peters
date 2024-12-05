<script lang="ts">
	import { fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import type { Quote } from '$lib/content/content';
	import { cubicOut } from 'svelte/easing';

	export let quote: Quote;
	export let leftAligned = true;

	let node: HTMLDivElement;
</script>

<IntersectionObserver element={node} once threshold={1} let:intersecting>
	<div bind:this={node}>
		{#if intersecting}
			<div
				class={`m${leftAligned ? 'l' : 'r'}-[12.5%] font-body flex flex-col gap-4 items-end p-10 bg-blue-400/20 text-dark-brown rounded-3xl`}
				transition:fly={{ x: leftAligned ? -750 : 750, duration: 1000, easing: cubicOut }}
			>
				<p class="italic text-lg">{quote.quote}</p>
				<div
					class={`${leftAligned ? 'items-start' : 'items-end text-right'} font-bold flex flex-col gap-0`}
				>
					<p>{quote.author}</p>
					<p>{quote.position}</p>
				</div>
			</div>
		{/if}
	</div>
</IntersectionObserver>
