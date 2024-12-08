<script lang="ts">
	import Button from './Button.svelte';

	let gdprApproved = false;
</script>

<div id="buy-now" class="w-full flex justify-center gap-12">
	<img
		src="/iain-1.jpg"
		class="w-1/3 object-cover"
		alt="A black-and-white photograph of Iain Peters climbing"
	/>
	<div class="bg-blue-400/20 p-8 rounded-3xl flex flex-col gap-8 text-dark-brown w-2/3">
		<h3 class="font-sans font-bold text-3xl">Buy</h3>
		<p>£18 including P&P (RRP £20) - UK delivery (2nd Class)</p>
		<p>
			For international orders, please contact me directly through one of the social media links
			below.
		</p>
		<div class="flex flex-col gap-4">
			<p>GDPR Agreement *</p>
			<label class="flex items-center gap-2">
				<input type="checkbox" bind:checked={gdprApproved} />
				I consent to having this website store my submitted information so they can respond to my inquiry.
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
</div>
