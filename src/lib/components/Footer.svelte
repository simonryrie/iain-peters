<script>
	import Button from './Button.svelte';

	const buttonClasses =
		'box-border p-2 text-xl bg-off-white hover:bg-dark-brown text-dark-brown hover:text-off-white border border:transparent hover:border-off-white rounded-full transition-all duration-300 ease-in-out ';
</script>

<footer
	class="bg-dark-brown w-full h-36 flex justify-around text-off-white justify-center items-center"
>
	<div class="flex flex-col gap-4">
		<p>Contact me</p>
		<div class="flex gap-4">
			<Button defaultClasses={buttonClasses} href="https://bsky.app/profile/iainpeters.bsky.social">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 32 32"
					fill="currentColor"
					><path
						d="M23.931,5.298c-3.21,2.418-6.663,7.32-7.931,9.951-1.267-2.631-4.721-7.533-7.931-9.951-2.316-1.744-6.069-3.094-6.069,1.201,0,.857,.49,7.206,.778,8.237,.999,3.583,4.641,4.497,7.881,3.944-5.663,.967-7.103,4.169-3.992,7.372,5.908,6.083,8.492-1.526,9.154-3.476,.123-.36,.179-.527,.179-.379,0-.148,.057,.019,.179,.379,.662,1.949,3.245,9.558,9.154,3.476,3.111-3.203,1.671-6.405-3.992-7.372,3.24,.553,6.882-.361,7.881-3.944,.288-1.031,.778-7.38,.778-8.237,0-4.295-3.753-2.945-6.069-1.201Z"
					></path></svg
				>
			</Button>
			<Button
				defaultClasses={buttonClasses}
				href="https://www.facebook.com/people/Iain-Peters/61570505272698/"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 32 32"
					fill="currentColor"
					><path
						d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"
					></path></svg
				>
			</Button>
		</div>
	</div>
	<p>© Iain Peters 2024</p>
</footer>
