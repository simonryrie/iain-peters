<script>
	import Button from './Button.svelte';
</script>

<header>
	<img class="relative h-screen w-screen object-cover" src="/coast-3.jpg" />
	<div
		class="absolute bg-slate-950/20 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/20 to-off-white to-100%"
	/>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-serif flex flex-col justify-center items-center gap-8"
	>
		<h1 class="text-5xl text-off-white">Iain Peters</h1>
		<h2 class="text-6xl text-orange-200 mb-6">The Corridor</h2>
		<Button content="Order" extraClasses="min-w-28" href="./order" />
	</div>
</header>
