<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf"
	import Button from "../lib/components/button/button.svelte"
	import Input from "../lib/components/input/input.svelte"
	import Switch from "../lib/components/switch/switch.svelte"
	import Avatar from "../lib/components/avatar/avatar.svelte"

	const { Story } = defineMeta({
		title: "Accessibility/Interactive Examples",
		tags: ["autodocs"],
		parameters: {
			docs: {
				description: {
					component:
						"Examples demonstrating keyboard navigation, screen reader support, and other accessibility features across components."
				}
			}
		}
	})
</script>

<Story name="Keyboard Navigation">
	<div class="space-y-6 p-6">
		<h2 class="text-xl font-semibold">Keyboard Navigation Demo</h2>
		<p class="text-gray-600">
			Use Tab to navigate between elements, Enter/Space to activate buttons and switches.
		</p>

		<div class="grid gap-4">
			<Button type="button" ariaLabel="First interactive button">
				{#snippet children()}First Button{/snippet}
			</Button>

			<Input
				id="demo-input"
				name="Demo Input"
				placeholder="Type something here..."
				helpText="This input has proper label association and help text"
			/>

			<Switch id="demo-switch" label="Enable notifications" checked={false} />

			<Button type="button" role="secondary">
				{#snippet children()}Last Button{/snippet}
			</Button>
		</div>

		<div class="rounded bg-blue-50 p-4">
			<h3 class="mb-2 font-medium text-blue-900">Keyboard Instructions:</h3>
			<ul class="space-y-1 text-sm text-blue-800">
				<li>• Tab/Shift+Tab: Navigate between elements</li>
				<li>• Enter/Space: Activate buttons and switches</li>
				<li>• Arrow keys: Navigate within grouped elements</li>
				<li>• Escape: Close modals and dropdowns</li>
			</ul>
		</div>
	</div>
</Story>

<Story name="Screen Reader Features">
	<div class="space-y-6 p-6">
		<h2 class="text-xl font-semibold">Screen Reader Support</h2>
		<p class="text-gray-600">Components with proper ARIA labels, descriptions, and live regions.</p>

		<div class="space-y-4">
			<div>
				<Button
					type="button"
					ariaLabel="Delete item permanently"
					ariaDescribedBy="delete-help"
					role="primary"
					tone="negative"
				>
					{#snippet children()}Delete{/snippet}
				</Button>
				<p id="delete-help" class="mt-1 text-sm text-gray-600">This action cannot be undone</p>
			</div>

			<div>
				<Avatar
					displayName="John Doe"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
					ariaLabel="John Doe's profile picture"
					role="button"
				/>
				<p class="mt-2 text-sm text-gray-600">
					Avatar with descriptive aria-label for screen readers
				</p>
			</div>

			<fieldset class="rounded border p-4">
				<legend class="px-2 font-medium">Notification Preferences</legend>
				<div class="mt-3 space-y-3">
					<Switch id="email-notif" label="Email notifications" />
					<Switch id="push-notif" label="Push notifications" checked={true} />
					<Switch id="sms-notif" label="SMS notifications" />
				</div>
			</fieldset>
		</div>

		<div class="rounded bg-green-50 p-4">
			<h3 class="mb-2 font-medium text-green-900">Screen Reader Features:</h3>
			<ul class="space-y-1 text-sm text-green-800">
				<li>• Descriptive aria-labels for context</li>
				<li>• aria-describedby for additional information</li>
				<li>• Proper semantic markup (fieldset, legend)</li>
				<li>• Form validation with aria-invalid</li>
			</ul>
		</div>
	</div>
</Story>

<Story name="Focus Management">
	<div class="space-y-6 p-6">
		<h2 class="text-xl font-semibold">Focus Management</h2>
		<p class="text-gray-600">Examples of proper focus indication and management.</p>

		<div class="grid grid-cols-2 gap-4">
			<div class="space-y-3">
				<h3 class="font-medium">Normal Focus</h3>
				<Button type="button">
					{#snippet children()}Button 1{/snippet}
				</Button>
				<Button type="button" role="secondary">
					{#snippet children()}Button 2{/snippet}
				</Button>
			</div>

			<div class="space-y-3">
				<h3 class="font-medium">Skip Links</h3>
				<a
					href="#main-content"
					class="sr-only rounded bg-blue-600 p-2 text-white focus:not-sr-only focus:absolute focus:top-0 focus:left-0"
				>
					Skip to main content
				</a>
				<Button type="button">
					{#snippet children()}Focus Me{/snippet}
				</Button>
			</div>
		</div>

		<div id="main-content" class="rounded bg-amber-50 p-4">
			<h3 class="mb-2 font-medium text-amber-900">Focus Features:</h3>
			<ul class="space-y-1 text-sm text-amber-800">
				<li>• Visible focus indicators on all interactive elements</li>
				<li>• Skip links for keyboard users</li>
				<li>• Focus trap in modals and dialogs</li>
				<li>• Logical tab order</li>
			</ul>
		</div>
	</div>
</Story>

<Story name="Error States & Validation">
	<div class="space-y-6 p-6">
		<h2 class="text-xl font-semibold">Accessible Error Handling</h2>
		<p class="text-gray-600">Form validation with proper error announcements and associations.</p>

		<form class="space-y-4">
			<Input
				id="email-field"
				name="Email"
				type="email"
				required={true}
				placeholder="your@email.com"
				helpText="We'll never share your email address"
			/>

			<Input
				id="password-field"
				name="Password"
				type="password"
				required={true}
				placeholder="••••••••"
				helpText="Must be at least 8 characters"
			/>

			<div role="group" aria-labelledby="terms-heading">
				<h3 id="terms-heading" class="mb-2 text-sm font-medium">Terms & Conditions</h3>
				<Switch id="terms-switch" label="I agree to the terms and conditions" />
			</div>

			<Button type="submit" role="primary">
				{#snippet children()}Create Account{/snippet}
			</Button>
		</form>

		<div class="rounded bg-red-50 p-4">
			<h3 class="mb-2 font-medium text-red-900">Error Handling Features:</h3>
			<ul class="space-y-1 text-sm text-red-800">
				<li>• aria-invalid on invalid inputs</li>
				<li>• Error messages associated with aria-describedby</li>
				<li>• Live regions for dynamic error announcements</li>
				<li>• Required field indicators</li>
			</ul>
		</div>
	</div>
</Story>
