<script lang="ts">
	export let heading: string;
	export let description: string;
	export let imageRight = true;
	export let src: string;
	export let alt: string;
</script>

<div class="flex items-between gap-12 w-full">
	{#if !imageRight}
		<img class="w-2/5 object-cover" {alt} {src} />
	{/if}
	<div class="leading-relaxed w-1/2 flex flex-col gap-12 text-dark-brown rounded-3xl">
		<div class="flex flex-col gap-6">
			<h3 class="text-3xl font-serif">{heading}</h3>
			<p>{@html description.replace(/\n/g, '<br>')}</p>
		</div>
	</div>
	{#if imageRight}
		<div class="w-1/2 flex justify-end">
			<img class="object-cover" {alt} {src} />
		</div>
	{/if}
</div>
