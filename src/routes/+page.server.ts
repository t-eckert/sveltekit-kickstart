import type { Actions, PageServerData } from './$types';
import { error } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		// Default action
	}
} satisfies Actions;
