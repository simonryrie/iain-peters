<script lang="ts">
	export let heading: string;
	export let description: string;
	export let imageRight = true;
	export let src: string;
	export let alt: string;
</script>

<div class="flex items-between gap-12 w-full bg-blue-500/20 py-8 px-16 rounded-3xl">
	{#if !imageRight}
		<img class="w-2/5 object-cover" {alt} {src} />
	{/if}
	<div class="leading-relaxed w-1/2 flex flex-col text-dark-brown justify-center items-center">
		<p class="text-lg">{@html description.replace(/\n/g, '<br>')}</p>
	</div>
	{#if imageRight}
		<div class="w-1/2 flex justify-center">
			<img class="object-cover" {alt} {src} />
		</div>
	{/if}
</div>
