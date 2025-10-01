<script lang="ts">
	import Quotes from '$lib/components/Quotes.svelte';
	import { quotes } from '$lib/content/content';
</script>

<main class="px-6 md:px-12 xl:px-24 py-12 flex flex-col gap-6 xl:gap-12 bg-off-white">
	<Quotes {quotes} />
</main>
