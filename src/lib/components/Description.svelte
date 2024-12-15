<script lang="ts">
	import DescriptionSection from './DescriptionSection.svelte';
	import { description } from '$lib/content/content';
</script>

<div class="flex flex-col gap-6">
	<DescriptionSection
		heading="The Corridor"
		{description}
		src="/cover-4.jpg"
		alt="The front cover of The Corridor by Iain Peters"
	/>
</div>
