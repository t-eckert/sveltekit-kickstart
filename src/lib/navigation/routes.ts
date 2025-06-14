export type Route = {
	name: string
	path: string
	level: number
}

const routes: Route[] = [
	{
		name: "About",
		path: "/about",
		level: 1
	}
]

export default routes
