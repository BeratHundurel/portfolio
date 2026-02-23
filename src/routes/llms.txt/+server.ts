import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }) => {
	const body = `# Berat Hündürel — Full-Stack Engineer

> Backend-focused Full Stack Engineer building and operating production APIs and web applications. Experience with message-driven workflows, SQL-based systems, and containerized deployments. Based in Istanbul, Turkey.

## About

- Name: Berat Hündürel
- Role: Full-Stack Engineer
- Location: Istanbul, Turkey
- Email: berat.hundurel@hotmail.com
- Website: ${url.origin}
- GitHub: https://github.com/BeratHundurel
- LinkedIn: https://www.linkedin.com/in/berat-h%C3%BCnd%C3%BCrel-1197b9253

## Skills

- Languages: C#, Go, TypeScript, JavaScript
- Backend: .NET, Gin, Chi, Fiber
- Frontend: React, Next.js, Svelte
- Databases: Microsoft SQL Server, PostgreSQL
- Infrastructure: Docker, IIS, GitHub Actions, Testcontainers, CUPS

## Experience

### Printomi (November 2024 — Present)
Full Stack Engineer (Contract) — Istanbul
Startup focused on intelligent printing infrastructure and technology solutions.
- Developed fault-tolerant REST APIs powering a mobile application
- Contributed to Docker + IIS deployments and maintained PostgreSQL in production
- Built and maintained an internal CRM system
- Implemented RabbitMQ integration for reliable distributed printing
- Introduced CI workflows and test automation with Testcontainers
- Integrated with CUPS and IPP protocols to automate print operations

### Webbilir (June 2023 — January 2026)
Full Stack Engineer — Maslak, Istanbul
Digital agency delivering e-commerce and marketing solutions.
- Built and maintained production web applications with .NET
- Improved Web Core Vitals by over 50% in high-impact scenarios
- Worked with Microsoft SQL Server and Entity Framework Core
- Mentored junior developers through code reviews and debugging support

## Projects

- palette-themify: Theme generator for VS Code / Zed from images. Svelte + Go + Zig. https://github.com/BeratHundurel/palette-themify
- go-chat: Real-time WhatsApp-style chat with Templ and Gorilla WebSockets. https://github.com/BeratHundurel/go-chat
- microservices: Three-service architecture with REST and gRPC. Go + Docker. https://github.com/BeratHundurel/order-auth-currency-microservices
- sln-runner: TUI solution runner for .NET projects built with Rust and Ratatui. https://github.com/BeratHundurel/sln-runner
- go-asteroids: Asteroids-inspired space shooter with Go and Ebiten. https://github.com/BeratHundurel/go-asteroids
- rust-text-editor: Minimal text editor with syntax highlighting using Rust and Iced. https://github.com/BeratHundurel/rust-text-editor
- toolkit: Reusable Go helper module with JSON, file, and string utilities. https://github.com/BeratHundurel/toolkit-module
- go-imgui-widgets: Desktop UI experiments with Dear ImGui Go bindings. https://github.com/BeratHundurel/go-imgui-widgets
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};
