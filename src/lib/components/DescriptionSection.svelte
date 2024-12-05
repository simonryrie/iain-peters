<script lang="ts">
	import Button from './Button.svelte';

	export let heading: string;
	export let description: string;
	export let imageRight = true;
	export let src: string;
	export let alt: string;
</script>

<div class="flex gap-12">
	{#if !imageRight}
		<img class="w-2/5 object-cover" {alt} {src} />
	{/if}
	<div class="leading-relaxed w-1/2 flex flex-col gap-12 text-dark-brown rounded-3xl">
		<div class="flex flex-col gap-8">
			<h3 class="text-3xl font-serif">{heading}</h3>
			<p>{@html description.replace(/\n/g, '<br>')}</p>
		</div>
		<Button
			text="Buy now"
			extraClasses="w-1/3"
			href="https://www.paypal.com/ncp/payment/LPZ3XAJE7GSZU"
		/>
	</div>
	{#if imageRight}
		<div class="w-1/2">
			<img class="object-cover" {alt} {src} />
		</div>
	{/if}
</div>
