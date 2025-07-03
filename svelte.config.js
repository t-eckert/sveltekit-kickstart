import { mdsvex } from "mdsvex"
import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

const file = fileURLToPath(new URL("package.json", import.meta.url))
const json = readFileSync(file, "utf8")
const pkg = JSON.parse(json)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter(),
		version: {
			name: pkg.version
		}
	},

	extensions: [".svelte", ".svx"]
}

export default config
