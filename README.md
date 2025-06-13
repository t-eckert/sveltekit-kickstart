# SvelteKit Kick Start

This is a starter SvelteKit set up that includes all of the tooling and configuration that I like to use when building websites. It's very specifically tuned to my needs. If you would like to make something like it your own, fork this!

> This is a work in progress. I am still developing some of the items that are listed below.

## Quickstart

```shell
npx degit t-eckert/sveltekit-kickstart {project-name}
```

This will copy down the repository without the Git history.


## Why

I have built several SvelteKit sites. I love the framework and I can work very quickly in it, but I found myself rewriting a lot of the same functionality with each new site. This starter kit allows me to solve all the repetitive and difficult problems once and build from there.

I've also formatted this project for AI-based development with Claude. This includes a CLAUDE.md file; tools for creating new API routes, componenents, pages, and stores; and descriptions of components to help Claude use them effectively.

## Features

### Tailwind CSS 4 and Class Variance Authority

Already configured for using Tailwind out of the box with `dark:` set up for dark theming. Includes the Prettier config to consistently order Tailwind classes. Uses Class Variance Authority to manage complex variants (e.g. different button styling)

### Styled Elements

### Taskfile

### Phosphor Icons

### Vitest

### Open Graph Config and OG Image Generator

### Bits UI

Many of the components in this starter kit make use of [Bits UI](https://www.bits-ui.com/). It is a spectacular system for developing more complex components.

### Clerk Auth

### User and Admin pages

### Caddy

### Uploader to S3 Compatible Object Stores

### Libsql (SQLite) Configuration for Edge DBs using Drizzle

The kit comes pre-configured for using Drizzle with SQLite with the Libsql

### Key-Value Store

Using the Libsql edge DB, this key-value store provides a great way to s

### Audit Log

### Containerization

### A Considered Font Stack

### Templates

### Storybook Configuration

### Toast

Built using [Svelte Sonner](https://github.com/wobsoriano/svelte-sonner)

### Light/Dark Theming

## Components

## Opinions

- I only use `+page.server.ts` because I often just want my page load code to run on the server anyway.

## Things to check out

- https://svelteflow.dev/
- https://github.com/beyonk-group/svelte-mapbox
- https://threlte.xyz/
