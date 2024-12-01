<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';
	import Description from '$lib/components/Header/Description.svelte';
	import Quotes from '$lib/components/Header/Quotes.svelte';
	import { description, quotes } from '$lib/content/content';
</script>

<Header />
<main class="px-24 py-16 flex flex-col gap-16 bg-off-white">
	<Description {description} />
	<Quotes {quotes} />
</main>
