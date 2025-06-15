import type { Handle } from "@sveltejs/kit"
import type { Theme } from "./theme-store.svelte"

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

export default handleTheme
