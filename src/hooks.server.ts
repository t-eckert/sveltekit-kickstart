import type { Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"
import * as auth from "$lib/server/auth.js"
import type { Theme } from "$lib/theme/theme-store.svelte"

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

const handleTheme: Handle = async ({ event, resolve }) => {
	const themeInUrl = event.url.searchParams.get("theme")
	console.log("Theme in URL:", themeInUrl)
	const themeInCookies = event.cookies.get("theme")
	console.log("Theme in Cookies:", themeInCookies)

	let theme
	if (themeInUrl) {
		theme = themeInUrl
	} else if (themeInCookies) {
		theme = themeInCookies
	} else {
		// Default to "system" if no theme is set
		theme = "system"
	}
	console.log("Using theme:", theme)

	event.cookies.set("theme", theme, { path: "/", maxAge: 60 * 60 * 24 * 365 })
	event.locals.theme = theme as Theme

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace("data-theme=\"system\"", `data-theme="${theme}"`)
		}
	})
}

export const handle: Handle = sequence(handleAuth, handleTheme)
