<script lang="ts">
	import Quote from './Quote.svelte';
	import type { Quote as QuoteType } from '$lib/content/content';

	export let quotes: QuoteType[];

	let viewportWidth: number;
	const tabletBreakpoint = 768;

	$: isMobile = viewportWidth < tabletBreakpoint;

	// Generate randomized properties for each quote (like ledges on a cliff face)
	$: quoteConfigs = quotes.map((_, index) => {
		// Seed-based randomization using index for consistency
		const seed = index * 123.456;
		const random1 = (Math.sin(seed) + 1) / 2;
		const random2 = (Math.sin(seed * 1.618) + 1) / 2;
		const random3 = (Math.sin(seed * 2.718) + 1) / 2;

		// Randomized width between 65% and 90% (cliff ledges)
		const width = isMobile ? 100 : 65 + random1 * 25;

		// Randomized horizontal offset (0-15% from either side)
		const offset = isMobile ? 0 : random2 * 15;

		// Alternate sides but with some randomness for natural cliff appearance
		const baseAlignment = index % 2 === 0 ? 'left' : 'right';
		const alignment =
			random3 > 0.75 ? (baseAlignment === 'left' ? 'right' : 'left') : baseAlignment;

		return {
			width,
			offset,
			alignment,
			leftAligned: alignment === 'left'
		};
	});
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<div class="relative flex flex-col gap-16 xl:gap-24 px-0 xl:px-12">
	{#each quotes as quote, index}
		{@const config = quoteConfigs[index]}
		<div class="relative" style="width: 100%; max-width: 100%;">
			<div
				class="relative mx-auto xl:mx-0"
				style="
					width: {config.width}%;
					{config.alignment === 'left'
					? `margin-left: ${config.offset}%;`
					: `margin-right: ${config.offset}%;`}
				"
			>
				<Quote {quote} leftAligned={config.leftAligned} />
			</div>
		</div>
	{/each}
</div>
