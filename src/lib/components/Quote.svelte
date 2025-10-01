<script lang="ts">
	import type { Quote } from '$lib/content/content';

	export let quote: Quote;
	export let leftAligned = true;

	// Outdoor cliff-inspired color variations using existing theme
	const cliffColors = [
		'bg-orange-200/30 border-orange-200/50', // Sandy cliff face
		'bg-slate-400/25 border-slate-400/40', // Stone ledge
		'bg-amber-100/40 border-amber-100/60', // Weathered rock
		'bg-stone-300/30 border-stone-300/45' // Granite surface
	];

	// Use a consistent color based on quote index for predictability
	const colorSeed = (quote.author.length + quote.quote.length) % cliffColors.length;
	const cliffColor = cliffColors[colorSeed];
</script>

<div class="w-full">
	<div
		class={`font-body flex flex-col gap-6 xl:gap-8 p-4 md:p-6 xl:p-8 ${cliffColor} text-dark-brown border border-dark-brown/20 rounded-lg xl:rounded-xl text-sm md:text-base xl:text-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
	>
		<p class="leading-relaxed">{@html quote.quote}</p>
		<div
			class={`${leftAligned ? 'items-start' : 'xl:items-end xl:text-right'} font-bold flex flex-col gap-1`}
		>
			<p class="text-dark-brown">{@html quote.author}</p>
			<p class="font-normal text-dark-brown/70 text-xs md:text-sm xl:text-base">
				{@html quote.position}
			</p>
		</div>
	</div>
</div>
