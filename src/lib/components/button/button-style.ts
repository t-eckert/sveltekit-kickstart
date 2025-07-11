import { cva } from "cva"

const buttonStyle = cva(
	[
		"select-none",
		"cursor-pointer",
		"group",
		"flex",
		"flex-row",
		"gap-1",
		"items-center",
		"justify-center",
		"transition-all",
		"disabled:cursor-not-allowed",
		"focus:outline-blue-500",
		"focus:ring-4",
		"focus:ring-blue-500"
	],
	{
		variants: {
			role: {
				primary: ["outline"],
				secondary: [
					"backdrop-blur-2xl",
				],
				tertiary: [
					"bg-none",
					"disabled:text-stone-300",
					"hover:disabled:text-stone-300",
					"hover:disabled:bg-none"
				]
			},
			tone: {
				neutral: "",
				positive: "",
				negative: ""
			},
			shape: {
				rectangle: "rounded-md px-2 py-1",
				circle: "rounded-full aspect-square p-1.5",
				square: "rounded-md px-1 py-1 aspect-square",
				rounded: "rounded-full px-1 py-1"
			}
		},
		compoundVariants: [
			{
				role: "primary",
				tone: "neutral",
				class: [
					"bg-neutral-800",
					"text-neutral-50",
					"border-neutral-700",
					"shadow-inner",
					"shadow-neutral-700",
					"outline-neutral-800",
					"active:outline-blue-500",
					"disabled:text-neutral-200",
					"disabled:bg-neutral-500",
					"disabled:outline-neutral-500",
					"disabled:border-neutral-500",
					"dark:bg-neutral-800",
					"dark:text-neutral-300",
					"hover:bg-neutral-950"
				]
			},
			{
				role: "primary",
				tone: "positive",
				class: [
					"bg-sky-600",
					"text-sky-50",
					"shadow-inner",
					"shadow-sky-500",
					"outline-sky-600",
					"hover:bg-sky-600",
					"hover:shadow-sky-500/50",
					"active:outline-blue-500",
					"disabled:text-sky-200",
					"disabled:bg-sky-500",
					"disabled:outline-sky-500",
					"disabled:border-sky-500",
					"dark:bg-blue-800",
					"dark:text-blue-300"
				]
			},
			{
				role: "primary",
				tone: "negative",
				class: [
					"bg-rose-600",
					"text-rose-50",
					"outline-rose-700",
					"shadow-inner",
					"shadow-rose-500",
					"active:outline-blue-500",
					"disabled:text-red-200",
					"disabled:bg-red-500",
					"disabled:outline-red-500",
					"disabled:border-red-500",
					"dark:bg-red-800",
					"dark:text-red-300",
					"hover:bg-rose-700"
				]
			},
			{
				role: "secondary",
				tone: "neutral",
				class: [
					"bg-neutral-300/40",
					"text-neutral-800",
					"hover:text-neutral-900",
					"hover:bg-neutral-300/60",
					"outline",
					"outline-neutral-300/40",
					"dark:bg-neutral-600/40",
					"dark:text-neutral-300",
					"disabled:text-neutral-400",
					"disabled:bg-neutral-300/20",
					"disabled:outline-neutral-300/20",
					"disabled:hover:bg-neutral-300/20"
				]
			},
			{
				role: "secondary",
				tone: "positive",
				class: ["bg-green-200", "text-green-800", "hover:text-green-900", "hover:bg-green-300"]
			},
			{
				role: "secondary",
				tone: "negative",
				class: ["bg-red-200", "text-red-800", "hover:text-red-900", "hover:bg-red-300"]
			},
			{
				role: "tertiary",
				tone: "neutral",
				class: [
					"text-neutral-700",
					"hover:bg-neutral-100",
					"hover:text-neutral-900",
					"outline",
					"outline-transparent",
					"focus:outline-blue-500",
					"focus:ring-4",
					"focus:ring-blue-500",
					"disabled:text-neutral-100",
					"disabled:hover:bg-transparent",
					"dark:text-neutral-300",
					"dark:hover:bg-zinc-900",
					"dark:hover:text-zinc-300"
				]
			},
			{
				role: "tertiary",
				tone: "positive",
				class: ["text-green-700", "hover:bg-green-100", "hover:text-green-900"]
			},
			{
				role: "tertiary",
				tone: "negative",
				class: ["text-red-700", "hover:bg-red-100", "hover:text-red-900"]
			}
		]
	}
)

export default buttonStyle
