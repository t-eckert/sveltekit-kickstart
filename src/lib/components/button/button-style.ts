import { cva } from "cva"

const buttonStyle = cva(
	"select-none cursor-pointer group flex flex-row gap-1 items-center justify-center transition-all disabled:cursor-not-allowed",
	{
		variants: {
			role: {
				primary: "",
				secondary: "",
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
				square: "rounded-md px-1 py-1 aspect-square"
			}
		},
		compoundVariants: [
			{
				role: "primary",
				tone: "neutral",
				class: [
					"bg-neutral-800",
					"text-neutral-50",
					"border",
					"border-neutral-600",
					"outline",
					"outline-neutral-700",
					"active:outline-blue-500",
					"focus:outline-blue-500",
					"dark:bg-neutral-800",
					"dark:text-neutral-300",
					"hover:bg-neutral-950"
				]
			},
			{
				role: "primary",
				tone: "positive",
				class: ["bg-green-600", "text-green-50", "hover:bg-green-700"]
			},
			{
				role: "primary",
				tone: "negative",
				class: ["bg-red-600", "text-red-50", "hover:bg-red-700"]
			},
			{
				role: "secondary",
				tone: "neutral",
				class: ["bg-stone-200", "text-stone-800", "hover:text-stone-900", "hover:bg-stone-300"]
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
					"text-stone-700",
					"dark:text-zinc-300",
					"hover:bg-stone-100",
					"dark:hover:bg-zinc-900",
					"hover:text-stone-900",
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
