<script lang="ts">
	import Switch from "./switch.svelte"
</script>

<div class="w-full max-w-2xl space-y-8">
	<div class="space-y-6">
		<h3 class="text-lg font-medium">Settings Panel</h3>
		<div class="space-y-4 bg-neutral-50 p-4 rounded-lg">
			<Switch 
				id="notifications"
				label="Email notifications"
				checked={true}
			/>
			
			<Switch 
				id="push"
				label="Push notifications"
				checked={false}
			/>
			
			<Switch 
				id="sms"
				label="SMS notifications"
				checked={false}
			/>
			
			<Switch 
				id="marketing"
				label="Marketing emails"
				checked={true}
			/>
		</div>
	</div>

	<div class="space-y-6">
		<h3 class="text-lg font-medium">Different States</h3>
		<div class="space-y-4">
			<Switch 
				id="enabled"
				label="Enabled switch"
				checked={true}
			/>
			
			<Switch 
				id="disabled-off"
				label="Disabled switch (off)"
				checked={false}
				disabled={true}
			/>
			
			<Switch 
				id="disabled-on"
				label="Disabled switch (on)"
				checked={true}
				disabled={true}
			/>
		</div>
	</div>
</div>