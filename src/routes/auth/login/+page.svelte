<script lang="ts">
	import { fly } from "svelte/transition"
	import type { PageProps } from "./$types"
	import Json from "$lib/utils/components/json.svelte"
	import Card from "$lib/components/card/card.svelte"
	import Input from "$lib/components/input/input.svelte"
	import { H1 } from "$lib/typography"
	import Button from "$lib/components/button/button.svelte"
	import config from "$lib/config"

	let props: PageProps = $props()
</script>

<div class="flex h-[70vh] w-full items-center justify-center">
	<section class="mx-auto w-full max-w-sm" in:fly={{ y: 100, duration: 100 }}>
		<form method="post">
			<Card>
				<div class="flex flex-col items-start px-3 pt-3 pb-1">
					<div class="flex flex-col gap-2">
						<H1 text="Login" />
						<p class="text-sm leading-tight">
							Welcome to {config.title}. Login with your username and password. If you don't have an
							account, you can <a href="/auth/register" class="font-medium underline">register</a> for
							one.
						</p>
					</div>
					<div class="mt-6 flex w-full flex-col gap-2">
						<Input
							id="username"
							name="Username"
							required={true}
							placeholder="Enter your username"
						/>
						<Input
							id="password"
							name="Password"
							required={true}
							type="password"
							placeholder="Enter your password"
						/>
					</div>
					<div class="mt-12 flex w-full flex-row justify-end gap-1">
						<Button role="primary" tone="positive">
							<span class="text-sm font-medium">Continue</span>
						</Button>
						<Button role="tertiary" href="/">
							<span class="text-sm font-medium">Go back</span>
						</Button>
					</div>
				</div>
			</Card>
		</form>
	</section>
</div>
