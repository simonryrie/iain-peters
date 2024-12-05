<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Description from '$lib/components/Description.svelte';
	import Quotes from '$lib/components/Quotes.svelte';
	import { quotes } from '$lib/content/content';
	import OtherBooks from '$lib/components/OtherBooks.svelte';
</script>

<Header />
<main class="px-24 py-24 flex flex-col gap-16 bg-off-white">
	<Quotes {quotes} />
	<Description />
	<OtherBooks />
</main>
