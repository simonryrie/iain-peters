<script lang="ts">
	import { rockyRamblers, ccGuide } from '$lib/content/content';
</script>

<div class="flex gap-12">
	<img
		src="/iain-12.jpg"
		class="w-1/2 object-cover"
		alt="A photograph of Iain Peters climbing with his dogs"
	/>
	<div
		class="w-1/2 flex flex-col gap-12 items-around justify-center bg-blue-600/20 p-8 rounded-3xl"
	>
		<h3 class="text-3xl font-sans font-bold">Other Books by Iain Peters</h3>
		<div class="flex flex-col gap-12 items-around justify-center">
			<div class="flex gap-6 items-center">
				<img
					class="w-[200px]"
					src="/rocky-ramblers-2.jpg"
					alt="Front cover for Rocky Rambler's Wild Walks"
				/>
				<p>{@html rockyRamblers}</p>
			</div>
			<div class="flex gap-6 items-center">
				<img
					class="w-[200px]"
					src="/north-devon.jpg"
					alt="Front cover for Climbers’ Club Guide to North Devon and Cornwall"
				/>
				<p>{@html ccGuide}</p>
			</div>
		</div>
	</div>
</div>
