import "@testing-library/jest-dom"
import { vi } from "vitest"

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	unobserve: vi.fn(),
	root: null,
	rootMargin: "",
	thresholds: [],
	takeRecords: vi.fn().mockReturnValue([])
}))

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	unobserve: vi.fn()
}))

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}))
})
