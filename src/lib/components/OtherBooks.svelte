<script lang="ts">
	import { rockyRamblers, ccGuide } from '$lib/content/content';
</script>

<div class="flex-col xl:flex-row gap-6 xl:gap-12 flex">
	<img
		src="/iain-12.jpg"
		class="w-full xl:w-1/2 object-cover"
		alt="A photograph of Iain Peters climbing with his dogs"
	/>
	<div
		class="text-sm md:text-base xl:text-lg w-full md:w-3/4 lg:w-2/3 md:self-center xl:self-auto xl:w-1/2 flex flex-col gap-12 items-around justify-center bg-blue-500/20 p-4 md:p-8 rounded-3xl"
	>
		<h3 class="text-2xl md:text-3xl font-sans font-bold self-center md:self-auto">
			Other Books by Iain Peters
		</h3>
		<div class="flex flex-col gap-12 items-around justify-center">
			<div class="flex gap-6 items-center">
				<img
					class="w-[100px] md:w-[200px]"
					src="/rocky-ramblers-2.jpg"
					alt="Front cover for Rocky Rambler's Wild Walks"
				/>
				<p>{@html rockyRamblers}</p>
			</div>
			<div class="flex gap-6 items-center">
				<img
					class="w-[100px] md:w-[200px]"
					src="/north-devon.jpg"
					alt="Front cover for Climbers’ Club Guide to North Devon and Cornwall"
				/>
				<p>{@html ccGuide}</p>
			</div>
		</div>
	</div>
</div>
