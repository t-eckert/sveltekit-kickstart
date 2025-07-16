import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { render, cleanup } from "@testing-library/svelte"
import HeadTestWrapper from "./head-test-wrapper.svelte"

// Mock the browser environment for svelte:head
Object.defineProperty(window, 'document', {
	value: global.document,
	writable: true
})

describe("Head Component", () => {
	beforeEach(() => {
		// Clear any existing meta tags
		document.head.innerHTML = ""
	})

	afterEach(() => {
		cleanup()
	})

	it("renders with required props", () => {
		const props = {
			title: "Test Page",
			description: "This is a test page description",
			url: "https://example.com",
			favicon: "/favicon.ico"
		}

		const { getByTestId } = render(HeadTestWrapper, { props })

		expect(getByTestId("title")).toHaveTextContent("Test Page")
		expect(getByTestId("description")).toHaveTextContent("This is a test page description")
		expect(getByTestId("url")).toHaveTextContent("https://example.com")
		expect(getByTestId("favicon")).toHaveTextContent("/favicon.ico")
	})

	it("renders with optional ogImage prop", () => {
		const props = {
			title: "Test Page",
			description: "This is a test page description",
			url: "https://example.com",
			favicon: "/favicon.ico",
			ogImage: "https://example.com/og-image.jpg"
		}

		const { getByTestId } = render(HeadTestWrapper, { props })

		expect(getByTestId("og-image")).toHaveTextContent("https://example.com/og-image.jpg")
	})

	it("component accepts and passes through props correctly", () => {
		const props = {
			title: "Component Test",
			description: "Testing prop passing",
			url: "https://test.com",
			favicon: "/test.ico",
			ogImage: "https://test.com/image.jpg"
		}

		const { getByTestId } = render(HeadTestWrapper, { props })

		// Test that props are correctly passed through
		expect(getByTestId("title")).toHaveTextContent("Component Test")
		expect(getByTestId("description")).toHaveTextContent("Testing prop passing")
		expect(getByTestId("url")).toHaveTextContent("https://test.com")
		expect(getByTestId("favicon")).toHaveTextContent("/test.ico")
		expect(getByTestId("og-image")).toHaveTextContent("https://test.com/image.jpg")
	})

	it("sets document title correctly", () => {
		const props = {
			title: "My Awesome Page",
			description: "Page description",
			url: "https://example.com",
			favicon: "/favicon.ico"
		}

		render(HeadTestWrapper, { props })

		expect(document.title).toBe("My Awesome Page")
	})

	it("sets meta description correctly", () => {
		const props = {
			title: "Test Page",
			description: "This is my meta description",
			url: "https://example.com",
			favicon: "/favicon.ico"
		}

		render(HeadTestWrapper, { props })

		const metaDescription = document.querySelector('meta[name="description"]')
		expect(metaDescription).toBeInTheDocument()
		expect(metaDescription?.getAttribute("content")).toBe("This is my meta description")
	})

	it("sets favicon link correctly", () => {
		const props = {
			title: "Test Page",
			description: "Page description",
			url: "https://example.com",
			favicon: "/custom-favicon.ico"
		}

		render(HeadTestWrapper, { props })

		const favicon = document.querySelector('link[rel="icon"]')
		expect(favicon).toBeInTheDocument()
		expect(favicon?.getAttribute("href")).toBe("/custom-favicon.ico")
	})

	it("sets Open Graph meta tags correctly", () => {
		const props = {
			title: "OG Test Page",
			description: "OG test description",
			url: "https://example.com/og-test",
			favicon: "/favicon.ico",
			ogImage: "https://example.com/og.jpg"
		}

		render(HeadTestWrapper, { props })

		// Check OG type
		const ogType = document.querySelector('meta[property="og:type"]')
		expect(ogType?.getAttribute("content")).toBe("website")

		// Check OG URL
		const ogUrl = document.querySelector('meta[property="og:url"]')
		expect(ogUrl?.getAttribute("content")).toBe("https://example.com/og-test")

		// Check OG title
		const ogTitle = document.querySelector('meta[property="og:title"]')
		expect(ogTitle?.getAttribute("content")).toBe("OG Test Page")

		// Check OG description
		const ogDescription = document.querySelector('meta[property="og:description"]')
		expect(ogDescription?.getAttribute("content")).toBe("OG test description")

		// Check OG image
		const ogImage = document.querySelector('meta[property="og:image"]')
		expect(ogImage?.getAttribute("content")).toBe("https://example.com/og.jpg")
	})

	it("sets Twitter meta tags correctly", () => {
		const props = {
			title: "Twitter Test Page",
			description: "Twitter test description",
			url: "https://example.com/twitter-test",
			favicon: "/favicon.ico",
			ogImage: "https://example.com/twitter.jpg"
		}

		render(HeadTestWrapper, { props })

		// Check Twitter card type
		const twitterCard = document.querySelector('meta[property="twitter:card"]')
		expect(twitterCard?.getAttribute("content")).toBe("summary_large_image")

		// Check Twitter URL
		const twitterUrl = document.querySelector('meta[property="twitter:url"]')
		expect(twitterUrl?.getAttribute("content")).toBe("https://example.com/twitter-test")

		// Check Twitter title
		const twitterTitle = document.querySelector('meta[property="twitter:title"]')
		expect(twitterTitle?.getAttribute("content")).toBe("Twitter Test Page")

		// Check Twitter description
		const twitterDescription = document.querySelector('meta[property="twitter:description"]')
		expect(twitterDescription?.getAttribute("content")).toBe("Twitter test description")

		// Check Twitter image
		const twitterImage = document.querySelector('meta[property="twitter:image"]')
		expect(twitterImage?.getAttribute("content")).toBe("https://example.com/twitter.jpg")
	})

	it("handles missing ogImage gracefully", () => {
		const props = {
			title: "No Image Page",
			description: "Page without OG image",
			url: "https://example.com",
			favicon: "/favicon.ico"
		}

		render(HeadTestWrapper, { props })

		// Should still set other meta tags
		const ogTitle = document.querySelector('meta[property="og:title"]')
		expect(ogTitle?.getAttribute("content")).toBe("No Image Page")

		// OG image should be set but with undefined content
		const ogImage = document.querySelector('meta[property="og:image"]')
		expect(ogImage).toBeInTheDocument()
		expect(ogImage?.getAttribute("content")).toBe("undefined")
	})

	it("updates meta tags when props change", () => {
		const initialProps = {
			title: "Initial Title",
			description: "Initial description",
			url: "https://example.com/initial",
			favicon: "/favicon.ico"
		}

		const { component } = render(HeadTestWrapper, { props: initialProps })

		expect(document.title).toBe("Initial Title")

		// Update props
		component.$set({
			title: "Updated Title",
			description: "Updated description",
			url: "https://example.com/updated",
			favicon: "/new-favicon.ico"
		})

		expect(document.title).toBe("Updated Title")
		
		const metaDescription = document.querySelector('meta[name="description"]')
		expect(metaDescription?.getAttribute("content")).toBe("Updated description")
		
		const ogUrl = document.querySelector('meta[property="og:url"]')
		expect(ogUrl?.getAttribute("content")).toBe("https://example.com/updated")
	})
})