<script>
	import Button from './Button.svelte';
	import QuoteCarousel from './QuoteCarousel.svelte';

	const scrollToBuy = () => {
		const buyNowSection = document.getElementById('buy-now');

		if (buyNowSection) {
			requestAnimationFrame(() => {
				buyNowSection.scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
			});
		}
	};
</script>

<div class="mb-28 md:mb-20 relative w-full h-screen">
	<img
		class="absolute w-[170px] lg:w-[185px] xl:w-[200px] z-10 left-4 top-6 lg:left-8 lg:top-12 xl:top-16 xl:left-12 2xl:top-20 2xl:left-16"
		src="/boardman-tasker-sticker.png"
		alt="A sticker explaining that the book has been shortlisted for the Boardman Tasker Award for Mountain Literature"
	/>
	<img
		class="relative h-full w-full object-cover"
		src="/coast-3.jpg"
		alt="A photograph of the North Devon Coast"
	/>
	<div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-off-white" />
	<div
		class="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-sans font-weight-bold flex flex-col justify-center items-center gap-8"
	>
		<h1 class="text-4xl md:text-5xl text-off-white">Iain Peters</h1>
		<h2 class="text-5xl md:text-6xl text-orange-200 mb-6">The Corridor</h2>
		<Button text="Buy now" extraClasses="w-28" on:onClick={scrollToBuy} />
	</div>
	<div class="mb-10">
		<QuoteCarousel />
	</div>
</div>
