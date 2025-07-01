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
	},
	{
		name: "Login",
		path: "/auth/login",
		level: 1
	},
	{
		name: "Admin",
		path: "/admin",
		level: 1
	}
]

export default routes
