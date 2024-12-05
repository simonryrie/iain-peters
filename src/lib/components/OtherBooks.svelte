<script lang="ts">
	import { rockyRamblers, ccGuide } from '$lib/content/content';
</script>

<h3 class="text-3xl font-serif">Other books by Iain Peters</h3>
<div class="flex gap-24">
	<div class="w-1/2 flex flex-col gap-4 items-center">
		<img
			class="max-w-[400px] w-1/2"
			src="/rocky-ramblers-2.jpg"
			alt="Front cover for Rocky Rambler's Wild Walks"
		/>
		<p>{@html rockyRamblers}</p>
	</div>
	<div class="w-1/2 flex flex-col gap-4 items-center">
		<img
			class="max-w-[400px] w-1/2"
			src="/north-devon.jpg"
			alt="Front cover for Climbers’ Club Guide to North Devon and Cornwall"
		/>
		<p>{@html ccGuide}</p>
	</div>
</div>
