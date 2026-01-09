<script lang="ts">
	export let description: string;
	export let imageRight = true;
	export let src: string;
	export let alt: string;
</script>

<div
	class="flex flex-col xl:flex-row items-center xl:items-between gap-8 xl:gap-12 w-full bg-blue-500/20 p-4 md:p-8 xl:py-8 xl:px-16 rounded-3xl"
>
	<div
		class="leading-relaxed w-full xl:w-1/2 flex flex-col text-dark-brown justify-center items-center"
	>
		<p class="text-sm md:text-base xl:text-lg">{@html description.replace(/\n/g, '<br>')}</p>
	</div>
	{#if imageRight}
		<div class="w-full xl:w-1/2 flex justify-center">
			<img class=" max-h-[700px] 2xl:max-h-[560px] object-cover" {alt} {src} />
		</div>
	{/if}
</div>
