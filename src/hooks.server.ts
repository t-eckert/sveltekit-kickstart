import type { Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"
import * as auth from "$lib/server/auth.js"
import type { Theme } from "$lib/theme/theme-store.svelte"
import handleTheme from "$lib/theme/theme-handler"

const handleAuth: Handle = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName)
	if (!sessionToken) {
		event.locals.user = null
		event.locals.session = null
		return resolve(event)
	}

	const { session, user } = await auth.validateSessionToken(sessionToken)
	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt)
	} else {
		auth.deleteSessionTokenCookie(event)
	}

	event.locals.user = user
	event.locals.session = session

	return resolve(event)
}

export const handle: Handle = sequence(handleAuth, handleTheme)
