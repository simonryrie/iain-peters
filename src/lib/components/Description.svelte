<script lang="ts">
	import DescriptionSection from './DescriptionSection.svelte';
	import { description } from '$lib/content/content';
</script>

<div class="flex flex-col gap-16">
	<DescriptionSection
		heading="The Corridor"
		{description}
		src="/cover-3.jpeg"
		alt="The front cover of The Corridor by Iain Peters"
	/>
</div>
