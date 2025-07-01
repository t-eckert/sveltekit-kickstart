import { describe, it, expect, vi } from "vitest"
import { render, fireEvent } from "@testing-library/svelte"
import Button from "./button.svelte"

describe("Button Component", () => {
	it("renders button with children content", () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => "Click me"
			}
		})

		const button = getByRole("button")
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent("Click me")
	})

	it("applies correct default attributes", () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => "Test"
			}
		})

		const button = getByRole("button")
		expect(button).toHaveAttribute("type", "button")
		expect(button).not.toBeDisabled()
	})

	it("handles disabled state correctly", () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => "Test",
				disabled: true
			}
		})

		const button = getByRole("button")
		expect(button).toBeDisabled()
	})

	it("calls onclick handler when clicked", async () => {
		const mockClick = vi.fn()
		const { getByRole } = render(Button, {
			props: {
				children: () => "Test",
				onclick: mockClick
			}
		})

		const button = getByRole("button")
		await fireEvent.click(button)
		expect(mockClick).toHaveBeenCalledTimes(1)
	})

	it("renders as link when href is provided", () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => "Link",
				href: "/test"
			}
		})

		const link = getByRole("button")
		expect(link.tagName).toBe("A")
		expect(link).toHaveAttribute("href", "/test")
	})

	it("applies accessibility attributes correctly", () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => "Test",
				ariaLabel: "Custom label",
				ariaDescribedBy: "help-text",
				ariaExpanded: true
			}
		})

		const button = getByRole("button")
		expect(button).toHaveAttribute("aria-label", "Custom label")
		expect(button).toHaveAttribute("aria-describedby", "help-text")
		expect(button).toHaveAttribute("aria-expanded", "true")
	})

	it("supports different button types", () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => "Submit",
				type: "submit"
			}
		})

		const button = getByRole("button")
		expect(button).toHaveAttribute("type", "submit")
	})

	it("includes form attributes when provided", () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => "Test",
				name: "test-button",
				value: "test-value",
				formaction: "/submit"
			}
		})

		const button = getByRole("button")
		expect(button).toHaveAttribute("name", "test-button")
		expect(button).toHaveAttribute("value", "test-value")
		expect(button).toHaveAttribute("formaction", "/submit")
	})
})
