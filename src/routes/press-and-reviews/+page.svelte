<script lang="ts">
	import Quotes from '$lib/components/Quotes.svelte';
	import { quotes } from '$lib/content/content';
</script>

<main class="px-6 md:px-12 xl:px-24 py-12 flex flex-col gap-6 xl:gap-12 bg-off-white">
	<h1 class="sr-only">Press and Reviews</h1>
	<section>
		<figure class="w-full lg:w-3/4 2xl:w-2/3 mx-auto flex flex-col gap-2">
			<img
				src="/BT2025Edit.png"
				alt="Iain Peters, winner of the Boardman Tasker Award for Mountain Literature 2025, alongside the
		other shortlisted authors"
			/>
			<figcaption class="text-sm md:text-base">
				<i
					>Iain Peters, winner of the Boardman Tasker Award for Mountain Literature 2025, alongside
					the other shortlisted authors</i
				>
			</figcaption>
		</figure>
	</section>
	<section>
		<h2 class="pb-6">Press</h2>
		<div class="flex flex-col gap-4 text-sm md:text-base">
			<article>
				<a
					href="https://www.theguardian.com/world/2025/dec/28/child-abuse-victim-of-jackanory-presenter-climbing-iain-peters"
					>Child abuse victim of Jackanory presenter tells how climbing saved him</a
				>
				<span> - Jamie Grierson | The Guardian | 27th December 2025</span>
			</article>
			<article>
				<a
					href="https://www.thedevondaily.co.uk/news/local-news/devon-author-hailed-inspirational-award-winning-book-overcoming-childhood-abuse"
					>Devon author hailed as 'inspirational' for award-winning book on overcoming childhood
					abuse</a
				>
				<span> - Rob Stewart | The Devon Daily | 22nd December 2025</span>
			</article>
			<article>
				<a
					href="https://www.bristol247.com/culture/books/book-event-explores-paths-of-healing-after-historic-abuse/"
					>Book event explores paths of healing after historic abuse</a
				>
				<span> - Milan Perera | Bristol24/7 | 19th December 2025</span>
			</article>
			<article>
				<a href="https://mountainmedicineblog.7thwave.io/cgi-bin/renderpost.py?postid=8570"
					>"An Incurable Optimist" Part 2</a
				>
				<span> - Jeremy Windsor | Mountain Medicine Blog | 14th March 2025</span>
			</article>
			<article>
				<a href="https://mountainmedicineblog.7thwave.io/cgi-bin/renderpost.py?postid=8562"
					>"An Incurable Optimist" Part 1</a
				>
				<span> - Jeremy Windsor | Mountain Medicine Blog | 28th February 2025</span>
			</article>
		</div>
	</section>
	<section>
		<h2>Reviews</h2>
		<Quotes {quotes} />
	</section>
</main>

<style lang="postcss">
	a {
		@apply text-yellow-700 relative transition-colors duration-300 ease-in-out;
	}
	a::after {
		content: '';
		@apply absolute left-0 bottom-0 w-full h-0.5 bg-yellow-700 transition-all duration-300 ease-in-out;
	}
	a:hover::after {
		@apply w-0;
	}

	h2 {
		@apply text-2xl font-bold;
	}
</style>
