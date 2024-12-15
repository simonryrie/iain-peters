<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Description from '$lib/components/Description.svelte';
	import Quotes from '$lib/components/Quotes.svelte';
	import { quotes } from '$lib/content/content';
	import BuyNow from '$lib/components/BuyNow.svelte';
	import OtherBooks from '$lib/components/OtherBooks.svelte';
</script>

<svelte:head>
	<title>Iain Peters</title>
	<meta name="description" content="Website for author Iain Peters' book The Corridor" />
	<meta name="keywords" content="Iain Peters, The Corridor, climbing, CSA, mountaineering" />
	<meta property="og:title" content="Iain Peters" />
	<meta property="og:description" content="Website for author Iain Peters' book The Corridor" />
	<meta property="og:image" content="/cover-4.jpg" />
	<meta name="robots" content="index, follow" />
	<link rel="icon" type="image/jpg" href="/cover-4.jpg" />
</svelte:head>

<Header />
<main class="px-6 md:px-12 xl:px-24 py-12 flex flex-col gap-6 xl:gap-12 bg-off-white">
	<Description />
	<BuyNow />
	<Quotes {quotes} />
	<OtherBooks />
</main>
<Footer />
