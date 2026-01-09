<script lang="ts">
	import DescriptionSection from './DescriptionSection.svelte';
	import { description } from '$lib/content/content';
</script>

<div class="flex flex-col gap-6">
	<DescriptionSection
		{description}
		src="/cover-5.jpg"
		alt="The front cover of The Corridor by Iain Peters"
	/>
</div>
