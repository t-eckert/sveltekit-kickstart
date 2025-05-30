import { setContext, getContext } from "svelte"
import { type Theme } from "./Theme"

class ThemeStore {
	theme: Theme = $state("light")

	constructor() {
		//// Initialize the theme from localStorage or default to "light"
		//const storedTheme = localStorage.getItem("theme") as Theme | null
		//if (storedTheme) {
		//	this.theme = storedTheme
		//} else {
		//	localStorage.setItem("theme", this.theme)
		//}
	}

	toggle() {
		this.theme = this.theme === "light" ? "dark" : "light"
		localStorage.setItem("theme", this.theme)
	}
}

const THEME_KEY = Symbol("theme")

export function initThemeStore() {
	return setContext(THEME_KEY, new ThemeStore())
}

export function getThemeStore() {
	return getContext<ReturnType<typeof initThemeStore>>(THEME_KEY)
}
