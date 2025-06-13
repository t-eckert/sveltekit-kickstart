import type { Actions, PageServerLoad } from "./$types"
import { error } from "@sveltejs/kit"

const load: PageServerLoad = async ({ params, locals, fetch, route, request, cookies }) => {
	console.log("Params:", params)
}

export const actions = {
	default: async (event) => {
		// Default action
	}
} satisfies Actions
