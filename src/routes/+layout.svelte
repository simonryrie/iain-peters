<script lang="ts">
	import '../app.css';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Iain Peters - The Corridor</title>
	<meta name="description" content="Website for author Iain Peters' book The Corridor" />
	<meta name="keywords" content="Iain Peters, The Corridor, climbing, CSA, mountaineering" />
	<meta property="og:url" content="https://iainpeters.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Iain Peters" />
	<meta property="og:description" content="Website for author Iain Peters' book The Corridor" />
	<meta property="og:image" content="https://iainpeters.com/cover-5.jpg" />
	<meta name="robots" content="index, follow" />
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<NavigationBar />
<slot />
<Footer />
