import { setContext, getContext } from "svelte"
import { type Theme } from "./Theme"

class ThemeStore {
	theme: Theme = $state("light")

	toggle() {
		this.theme = this.theme === "light" ? "dark" : "light"
	}
}

const THEME_KEY = Symbol("theme")

export function initThemeStore() {
	return setContext(THEME_KEY, new ThemeStore())
}

export function getThemeStore() {
	return getContext<ReturnType<typeof initThemeStore>>(THEME_KEY)
}
