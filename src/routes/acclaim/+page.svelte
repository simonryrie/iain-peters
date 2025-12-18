<script lang="ts">
	import Quotes from '$lib/components/Quotes.svelte';
	import { quotes } from '$lib/content/content';
</script>

<main class="px-6 md:px-12 xl:px-24 py-12 flex flex-col gap-6 xl:gap-12 bg-off-white">
	<figure class="w-full lg:w-3/4 2xl:w-2/3 mx-auto flex flex-col gap-2">
		<img
			src="/BT2025Edit.png"
			alt="Iain Peters, winner of the Boardman Tasker Award for Mountain Literature 2025, alongside the
		other shortlisted authors"
		/>
		<figcaption class="text-sm md:text-base xl:text-lg">
			<i
				>Iain Peters, winner of the Boardman Tasker Award for Mountain Literature 2025, alongside
				the other shortlisted authors</i
			>
		</figcaption>
	</figure>

	<Quotes {quotes} />
</main>
