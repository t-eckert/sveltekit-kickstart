import { setContext, getContext } from "svelte"

export type Theme = "dark" | "light" | "system"

class ThemeStore {
	theme: Theme = $state("system")

	constructor(theme: Theme = "system") {
		this.theme = theme
	}
}

const THEME_KEY = Symbol("theme")

export function initThemeStore(theme: Theme = "system") {
	return setContext(THEME_KEY, new ThemeStore(theme))
}

export function getThemeStore() {
	return getContext<ReturnType<typeof initThemeStore>>(THEME_KEY)
}
