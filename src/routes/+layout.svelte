<script lang="ts">
	import '../app.css';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<NavigationBar />
<slot />
<Footer />
