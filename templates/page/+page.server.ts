import type { Actions, PageServerLoad } from "./$types"
import { error } from "@sveltejs/kit"

export function load({ params }) {
	if (params.slug === "hello-world") {
		return {
			title: "Hello world!",
			content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
		}
	}

	error(404, "Not found")
}

export const actions = {
	default: async (event) => {
		// Default action
	}
} satisfies Actions
