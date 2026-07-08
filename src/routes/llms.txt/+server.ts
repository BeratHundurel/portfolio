import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url }) => {
	const body = `# Berat Hündürel - Full-Stack Engineer

> Backend-focused full-stack engineer building production APIs, web applications, internal tools, and open-source GPUI Component improvements. Based in Istanbul, Turkey.

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
- Open Source: 7 merged PRs to longbridge/gpui-component between Apr 24 and Jun 11, 2026

## Experience

### Printomi (Nov 2024 - Present)
Full Stack Engineer (Contract) - Istanbul
Startup focused on intelligent printing infrastructure and technology solutions.
- Built REST APIs for mobile users and shop operations
- Implemented RabbitMQ workflows for distributed print jobs
- Maintained PostgreSQL, Docker, IIS, CUPS, and IPP integrations
- Added CI, formatting checks, and Testcontainers-based automation

### Webbilir (Jun 2023 - Jan 2026)
Full Stack Engineer - Maslak, Istanbul
Digital agency delivering e-commerce and marketing solutions.
- Built and maintained production web applications with .NET
- Improved Core Web Vitals by more than 50% in high-impact scenarios
- Worked with SQL Server and EF Core using a database-first approach
- Mentored junior developers through reviews and debugging sessions

## Open Source

- longbridge/gpui-component PR #2457: highlighter empty range style leak fix
- longbridge/gpui-component PR #2408: native multi-click selection in TextView
- longbridge/gpui-component PR #2402: GPUI BoxShadow inset compatibility
- longbridge/gpui-component PR #2400: markdown code block rendering performance
- longbridge/gpui-component PR #2397: segmented tab indicator flicker fix
- longbridge/gpui-component PR #2320: popup menu minimum width to avoid resize
- longbridge/gpui-component PR #2286: SidebarMenuItem click_to_toggle support

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
