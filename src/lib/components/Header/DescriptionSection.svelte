<script lang="ts">
	export let heading: string;
	export let description: string;
	export let imageRight = true;
	export let src: string;
</script>

<div class="flex gap-12">
	{#if !imageRight}
		<img class="w-2/5 object-cover" {src} />
	{/if}
	<div class="leading-relaxed w-3/5 flex flex-col gap-4 text-dark-brown rounded-3xl">
		<h3 class="text-3xl font-serif">{heading}</h3>
		<p>{description}</p>
	</div>
	{#if imageRight}
		<img class="w-3/5 object-cover" {src} />
	{/if}
</div>
