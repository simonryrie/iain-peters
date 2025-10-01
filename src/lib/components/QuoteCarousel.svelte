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
			delay: 5000,
			disableOnInteraction: false
		}
	};

	const quotes = [
		'The Corrior is a beautifully written account of a desperate struggle for survival. I urge you to read it.',
		'Once started I couldn’t put it down. A remarkable, haunting book, it is so much more than a climber’s memoir.',
		'It’s a great story, the story of a life well-lived... takes the breath away. A compelling narrative of resilience and heroism, on and off the rock...',
		'...a joyful book and one of the most moving autobiographies that I have read, full of both deeply felt passion and compassion for others.',
		'This is a book that had to be written... I cannot stress how important this book is.',
		'Intelligent and compassionate.',
		'Peters’ writing is excellent and imaginative... in this searingly frank and moving book, and it deserves to be read by the widest possible audience.',
		'The book is different. frank, moving, and ultimately hopeful testimony. I strongly recommend it.',
		'An outstanding book.',
		"[Peters'] pitch perfect writing leads you into his world..."
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
					class="p-6 bg-dark-brown/90 text-white text-center h-32 md:h-24 mx-4 flex justify-center items-center rounded-full"
				>
					<p>{`"${quote}"`}</p>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
