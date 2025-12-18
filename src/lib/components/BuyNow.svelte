<script lang="ts">
	import Button from './Button.svelte';

	let gdprApproved = false;
</script>

<div
	id="buy-now"
	class="w-full flex flex-col md:flex-row justify-center gap-6 xl:gap-12 2xl:max-h-[500px]"
>
	<div
		class="max-h-[550px] text-sm md:text-base xl:text-lg bg-stone-500/20 p-4 md:p-8 rounded-3xl flex flex-col gap-4 md:gap-8 text-dark-brown md:w-2/3"
	>
		<h3 class="font-sans font-bold text-2xl md:text-3xl self-center md:self-auto">Buy</h3>
		<p>£20 including P&P - UK delivery (2nd Class)</p>
		<p>
			For international orders, please contact me directly through <a
				class="underline"
				href="mailto:hello@iainpeters.com">hello@iainpeters.com</a
			>
		</p>
		<div class="flex flex-col gap-4">
			<p>GDPR Agreement *</p>
			<label class="flex items-center gap-4">
				<input type="checkbox" bind:checked={gdprApproved} />
				I consent to having my information stored for the purpose of processing and delivering my order.
			</label>
		</div>
		<div class="flex justify-center w-full">
			<Button
				text="Buy now"
				disabled={!gdprApproved}
				href="https://www.paypal.com/ncp/payment/MFTS452XMXT2Y"
				extraClasses="w-full"
			/>
		</div>
	</div>
	<img
		src="/iain-1.jpg"
		class="w-full md:w-2/5 xl:w-1/2 object-cover 2xl:max-h-[550px]"
		alt="A black-and-white photograph of Iain Peters climbing"
	/>
</div>
