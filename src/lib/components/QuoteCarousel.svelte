<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import { onMount } from 'svelte';

	let swiperEl: any;

	const swiperParams = {
		preload: false,
		navigation: false,
		slidesPerView: 1,
		loop: true,
		breakpoints: {
			375: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 1
			},
			1280: {
				slidesPerView: 2
			},
			2000: {
				slidesPerView: 3
			}
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		}
	};

	const quotes = [
		'Beautifully written.',
		'His pitch perfect writing leads you into his world...',
		'Intelligent and compassionate.',
		'There is a universal quality to the writing...',
		'An outstanding book.'
	];

	onMount(() => {
		register();
		Object.assign(swiperEl, swiperParams);
		if (swiperEl) {
			swiperEl.initialize();
		}
	});
</script>

<div class="bg-off-white">
	<swiper-container bind:this={swiperEl} init="false">
		{#each quotes as quote}
			<swiper-slide>
				<div
					class="p-6 bg-dark-brown text-off-white text-center h-24 mx-4 flex justify-center items-center rounded-full"
				>
					<p>{`"${quote}"`}</p>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
