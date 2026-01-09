<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Description from '$lib/components/Description.svelte';
	import BuyNow from '$lib/components/BuyNow.svelte';
	import OtherBooks from '$lib/components/OtherBooks.svelte';
</script>

<PageHeader />
<main class="px-6 md:px-12 xl:px-24 py-12 flex flex-col gap-6 xl:gap-12 bg-off-white">
	<Description />
	<BuyNow />
	<OtherBooks />
</main>
