<script lang="ts">
	import DescriptionSection from './DescriptionSection.svelte';

	export let description: string;
</script>

<div class="flex flex-col gap-16">
	<DescriptionSection heading="The Corridor" {description} src="/cover.jpg" />
	<DescriptionSection
		heading="About the Author"
		{description}
		imageRight={false}
		src="/iain-1.jpg"
	/>
</div>
