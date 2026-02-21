<script lang="ts">
	import { page } from '$app/state';
	import profilePhoto from '$lib/assets/profile.jfif';
	import resumePdf from '$lib/assets/Berat_Hundurel_FullStack_Engineer.pdf';

	const openResume = () => {
		window.open(resumePdf, '_blank', 'noopener,noreferrer');
	};

	let allExpanded = false;

	const professionalSummary =
		'Backend-focused Full Stack Engineer, building and operating production APIs and web applications. Experience with message-driven workflows, SQL-based systems, and containerized deployments. Comfortable owning systems end-to-end, from backend services and database design to modern frontend applications.';

	const technicalSkills = [
		{
			label: 'Languages',
			items: ['C#', 'Go', 'TypeScript', 'JavaScript']
		},
		{
			label: 'Backend',
			items: ['.NET', 'Gin', 'Chi', 'Fiber']
		},
		{
			label: 'Frontend',
			items: ['React', 'Next.js', 'Svelte']
		},
		{
			label: 'Databases',
			items: ['Microsoft SQL Server', 'PostgreSQL']
		},
		{
			label: 'Infrastructure',
			items: ['Docker', 'IIS', 'GitHub Actions', 'Testcontainers', 'CUPS']
		}
	];

	const projects = [
		{
			id: '01',
			name: 'palette-themify',
			tagline: 'Theme generator · web + TUI + CLI',
			description:
				'Web and TUI application that takes an image or an existing theme file to create and customise VS Code / Zed themes. Svelte frontend, Go API — with core palette extraction logic written in Zig.',
			stack: ['Svelte', 'Go', 'Zig'],
			url: 'https://github.com/BeratHundurel/palette-themify',
			snippet: `$ palette-themify ./sunset.jpg --target zed\n→ extracting palette…  [Zig core]\n✓ 8 colors mapped\n✓ theme.json  ·  ready to install`,
			featured: true
		},
		{
			id: '02',
			name: 'go-chat',
			tagline: 'Real-time chat over WebSockets',
			description:
				'WhatsApp-style chat application built with Templ, Gorilla WebSockets, and TailwindCSS. Server-side rendered Go templates with live message push over persistent socket connections.',
			stack: ['Go', 'Templ', 'WebSockets', 'Tailwind'],
			url: 'https://github.com/BeratHundurel/go-chat',
			snippet: `$ go run .\n→ WebSocket hub  :8080\n✓ /chat · templ rendered`,
			featured: false
		},
		{
			id: '03',
			name: 'microservices',
			tagline: 'Multi-API microservice architecture',
			description:
				'Three-service system exploring microservice patterns — two REST APIs and one Google gRPC service communicating with each other, each owning a distinct domain.',
			stack: ['Go', 'gRPC', 'REST', 'Docker'],
			url: 'https://github.com/BeratHundurel/order-auth-currency-microservices',
			snippet: `$ docker compose up\n→ api-gateway   :8080\n→ user-service  :8081\n→ order (gRPC)  :50051`,
			featured: false
		},
		{
			id: '04',
			name: 'sln-runner',
			tagline: 'TUI solution runner for .NET projects',
			description:
				'Terminal UI that scans a folder for .NET solutions, lets you select one interactively, and launches it with the configured launch settings.',
			stack: ['Rust', 'Ratatui'],
			url: 'https://github.com/BeratHundurel/sln-runner',
			snippet: `$ sln-runner ./projects\n→ 6 solutions found\n❯ MyApi  [http]`,
			featured: false
		},
		{
			id: '05',
			name: 'go-asteroids',
			tagline: 'Classic space shooter game',
			description:
				'Asteroids-inspired space shooter built with Go and the Ebiten 2D game engine. Difficulty scales over time — more asteroids, faster rotations, tighter margins.',
			stack: ['Go', 'Ebiten'],
			url: 'https://github.com/BeratHundurel/go-asteroids',
			snippet: `$ go run .\n→ window 800×600 · 60 fps\n✓ wave 1 · 12 asteroids spawned`,
			featured: false
		},
		{
			id: '06',
			name: 'rust-text-editor',
			tagline: 'Text editor with syntax highlighting',
			description:
				'Minimal text editor in Rust using the Iced GUI framework. Covers essential editing primitives and syntax highlighting, built as a dive into Rust and GUI patterns.',
			stack: ['Rust', 'Iced'],
			url: 'https://github.com/BeratHundurel/rust-text-editor',
			snippet: `$ ./text-editor ./main.rs\n→ syntax: rust\n✓ 842 tokens highlighted`,
			featured: false
		},
		{
			id: '07',
			name: 'toolkit',
			tagline: 'Reusable Go helper module',
			description:
				'Go package with helpers: ReadJSON / WriteJSON / ErrorJSON, CreateDirIfNotExist, file upload utilities, and handy string methods — designed to be dropped into any Go service.',
			stack: ['Go'],
			url: 'https://github.com/BeratHundurel/toolkit-module',
			snippet: `$ go get github.com/BeratHundurel/toolkit\n→ module resolved\n✓ JSON · Files · Strings`,
			featured: false
		},
		{
			id: '08',
			name: 'go-imgui-widgets',
			tagline: 'Dear ImGui desktop app via Go bindings',
			description:
				"Experiments with Dear ImGui's Go bindings to build a lightweight, immediate-mode desktop application.",
			stack: ['Go', 'Dear ImGui'],
			url: 'https://github.com/BeratHundurel/go-imgui-widgets',
			snippet: `$ go run .\n→ initializing Dear ImGui…\n✓ window ready · 60 fps`,
			featured: false
		}
	];

	const experience = [
		{
			company: 'Printomi',
			role: 'Full Stack Engineer (Contract)',
			period: 'November 2024 — Present',
			location: 'Istanbul',
			summary: 'Startup focused on intelligent printing infrastructure and technology solutions.',
			items: [
				'Developed fault-tolerant REST APIs powering a mobile application used by students, remote workers, and shop owners.',
				'Contributed to Docker + IIS deployments and maintained PostgreSQL in production.',
				'Built and maintained an internal CRM system for content and data operations.',
				'Implemented RabbitMQ integration for reliable distributed printing across locations.',
				'Introduced CI workflows, formatting enforcement, and test automation with Testcontainers.',
				'Integrated with CUPS and IPP protocols to automate print operations.'
			]
		},
		{
			company: 'Webbilir',
			role: 'Full Stack Engineer',
			period: 'June 2023 — January 2026',
			location: 'Maslak, Istanbul',
			summary: 'Digital agency delivering e-commerce and marketing solutions.',
			items: [
				'Built and maintained production web applications with .NET.',
				'Implemented cross-stack performance optimizations and improved Web Core Vitals by over 50% in high-impact scenarios.',
				'Worked with Microsoft SQL Server and Entity Framework Core using a database-first approach.',
				'Mentored junior developers through code reviews and debugging support.'
			]
		}
	];
</script>

<svelte:head>
	<title>Berat Hündürel — Full-Stack Engineer</title>
	<meta
		name="description"
		content="Backend-focused Full Stack Engineer building production APIs and web apps with C#, Go, TypeScript, .NET, Svelte and Docker. Available for work in Istanbul."
	/>
	<meta name="author" content="Berat Hündürel" />
	<meta
		name="keywords"
		content="Full Stack Engineer, Backend Engineer, C#, Go, TypeScript, .NET, Svelte, React, Docker, PostgreSQL, Istanbul, Software Engineer"
	/>
	<link rel="canonical" href={page.url.href} />
	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Berat Hündürel" />
	<meta property="og:title" content="Berat Hündürel — Full-Stack Engineer" />
	<meta
		property="og:description"
		content="Backend-focused Full Stack Engineer building production APIs and web apps with C#, Go, TypeScript, .NET, Svelte and Docker. Available for work in Istanbul."
	/>
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content="{page.url.origin}/og-image.png" />
	<meta property="og:image:alt" content="Berat Hündürel — Full-Stack Engineer portfolio preview" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@BHundurel" />
	<meta name="twitter:creator" content="@BHundurel" />
	<meta name="twitter:title" content="Berat Hündürel — Full-Stack Engineer" />
	<meta
		name="twitter:description"
		content="Backend-focused Full Stack Engineer building production APIs and web apps with C#, Go, TypeScript, .NET, Svelte and Docker. Available for work in Istanbul."
	/>
	<meta name="twitter:image" content="{page.url.origin}/og-image.png" />
	<meta name="twitter:image:alt" content="Berat Hündürel — Full-Stack Engineer portfolio preview" />
</svelte:head>

<main class="page-shell">
	<section class="hero">
		<div class="hero-main">
			<div class="hero-content">
				<p class="eyebrow">Full-Stack Engineer</p>
				<h1 class="hero-title">Berat Hündürel</h1>
				<p class="hero-copy">{professionalSummary}</p>

				<div class="action-row" aria-label="Primary actions">
					<button class="btn btn--primary" type="button" onclick={openResume}>
						View Resume
						<span class="btn-arrow">→</span>
					</button>
					<a class="btn" href="mailto:berat.hundurel@hotmail.com">Contact</a>
					<a class="btn" href="https://github.com/BeratHundurel" target="_blank" rel="noreferrer"
						>GitHub</a
					>
					<a
						class="btn"
						href="https://www.linkedin.com/in/berat-h%C3%BCnd%C3%BCrel-1197b9253"
						target="_blank"
						rel="noreferrer">LinkedIn</a
					>
				</div>
			</div>

			<div class="profile-panel">
				<div class="photo-frame">
					<img class="profile-photo" src={profilePhoto} alt="Portrait of Berat Hündürel" />
				</div>
				<div class="profile-info">
					<p class="profile-name">Available for work</p>
					<p class="profile-detail">berat.hundurel@hotmail.com</p>
					<p class="profile-detail">Currently at Printomi</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section">
		<p class="section-eyebrow">Experience</p>
		<h2 class="section-title">Where I've Worked</h2>

		<div class="experience-list">
			{#each experience as job (job.company)}
				<article class="experience-item">
					<div class="experience-head">
						<p class="experience-company">{job.company}</p>
						<p class="experience-meta">{job.role} · {job.location}</p>
						<p class="experience-period">{job.period}</p>
					</div>

					<p class="experience-summary">{job.summary}</p>

					<ul class="experience-points">
						{#each job.items as point (point)}
							<li>{point}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</section>

	<section class="section">
		<p class="section-eyebrow">Open Source</p>
		<div class="projects-header">
			<h2 class="section-title">Personal Projects</h2>
			<button
				class="projects-toggle"
				type="button"
				onclick={() => (allExpanded = !allExpanded)}
				aria-label={allExpanded ? 'Collapse all projects' : 'Expand all projects'}
			>
				<span class="toggle-chevron" class:rotated={allExpanded}>▶</span>
			</button>
		</div>

		<a class="project-featured" href={projects[0].url} target="_blank" rel="noreferrer">
			<div class="pf-top">
				<div class="pf-text">
					<div class="pf-meta">
						<span class="pf-num">{projects[0].id}</span>
						<div class="project-stack">
							{#each projects[0].stack as tag (tag)}
								<span class="stack-badge">{tag}</span>
							{/each}
						</div>
						<span class="project-link-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								stroke-width="5.12"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M511.894,19.228c-0.031-0.316-0.09-0.622-0.135-0.933c-0.054-0.377-0.098-0.755-0.172-1.13 c-0.071-0.358-0.169-0.705-0.258-1.056c-0.081-0.323-0.152-0.648-0.249-0.968c-0.104-0.345-0.234-0.678-0.355-1.015 c-0.115-0.319-0.22-0.641-0.35-0.956c-0.13-0.315-0.284-0.616-0.428-0.923c-0.153-0.324-0.297-0.651-0.467-0.969 c-0.158-0.294-0.337-0.574-0.508-0.86c-0.186-0.311-0.362-0.626-0.565-0.93c-0.211-0.316-0.447-0.613-0.674-0.917 c-0.19-0.253-0.366-0.513-0.568-0.76c-0.443-0.539-0.909-1.058-1.402-1.551c-0.004-0.004-0.007-0.008-0.011-0.012 c-0.004-0.004-0.008-0.006-0.011-0.01c-0.494-0.493-1.012-0.96-1.552-1.403c-0.247-0.203-0.507-0.379-0.761-0.569 c-0.303-0.227-0.6-0.462-0.916-0.673c-0.304-0.203-0.619-0.379-0.931-0.565c-0.286-0.171-0.565-0.35-0.859-0.508 c-0.318-0.17-0.644-0.314-0.969-0.467c-0.307-0.145-0.609-0.298-0.923-0.429c-0.315-0.13-0.637-0.236-0.957-0.35 c-0.337-0.121-0.669-0.25-1.013-0.354c-0.32-0.097-0.646-0.168-0.969-0.249c-0.351-0.089-0.698-0.187-1.055-0.258 c-0.375-0.074-0.753-0.119-1.13-0.173c-0.311-0.044-0.617-0.104-0.933-0.135C492.072,0.037,491.37,0,490.667,0H213.333 C201.551,0,192,9.551,192,21.333c0,11.782,9.551,21.333,21.333,21.333h225.83L6.248,475.582c-8.331,8.331-8.331,21.839,0,30.17 c8.331,8.331,21.839,8.331,30.17,0L469.333,72.837v225.83c0,11.782,9.551,21.333,21.333,21.333S512,310.449,512,298.667V21.335 C512,20.631,511.963,19.928,511.894,19.228z"
								/>
							</svg>
						</span>
					</div>
					<h3 class="pf-name">{projects[0].name}</h3>
					<p class="project-tagline">{projects[0].tagline}</p>
					<p class="project-desc">{projects[0].description}</p>
				</div>
				<div class="project-snippet">
					<pre><code>{projects[0].snippet}</code></pre>
				</div>
			</div>
		</a>

		<div class="project-rows" class:expanded={allExpanded}>
			{#each projects.slice(1) as project (project.id)}
				<a class="project-row" href={project.url} target="_blank" rel="noreferrer">
					<span class="pr-num">{project.id}</span>
					<div class="pr-body">
						<div class="pr-name-row">
							<span class="pr-name">{project.name}</span>
							<div class="pr-right">
								<div class="project-stack">
									{#each project.stack as tag (tag)}
										<span class="stack-badge">{tag}</span>
									{/each}
								</div>
								<span class="project-link-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										stroke-width="5.12"
									>
										<path
											fill="currentColor"
											d="M511.894,19.228c-0.031-0.316-0.09-0.622-0.135-0.933c-0.054-0.377-0.098-0.755-0.172-1.13 c-0.071-0.358-0.169-0.705-0.258-1.056c-0.081-0.323-0.152-0.648-0.249-0.968c-0.104-0.345-0.234-0.678-0.355-1.015 c-0.115-0.319-0.22-0.641-0.35-0.956c-0.13-0.315-0.284-0.616-0.428-0.923c-0.153-0.324-0.297-0.651-0.467-0.969 c-0.158-0.294-0.337-0.574-0.508-0.86c-0.186-0.311-0.362-0.626-0.565-0.93c-0.211-0.316-0.447-0.613-0.674-0.917 c-0.19-0.253-0.366-0.513-0.568-0.76c-0.443-0.539-0.909-1.058-1.402-1.551c-0.004-0.004-0.007-0.008-0.011-0.012 c-0.004-0.004-0.008-0.006-0.011-0.01c-0.494-0.493-1.012-0.96-1.552-1.403c-0.247-0.203-0.507-0.379-0.761-0.569 c-0.303-0.227-0.6-0.462-0.916-0.673c-0.304-0.203-0.619-0.379-0.931-0.565c-0.286-0.171-0.565-0.35-0.859-0.508 c-0.318-0.17-0.644-0.314-0.969-0.467c-0.307-0.145-0.609-0.298-0.923-0.429c-0.315-0.13-0.637-0.236-0.957-0.35 c-0.337-0.121-0.669-0.25-1.013-0.354c-0.32-0.097-0.646-0.168-0.969-0.249c-0.351-0.089-0.698-0.187-1.055-0.258 c-0.375-0.074-0.753-0.119-1.13-0.173c-0.311-0.044-0.617-0.104-0.933-0.135C492.072,0.037,491.37,0,490.667,0H213.333 C201.551,0,192,9.551,192,21.333c0,11.782,9.551,21.333,21.333,21.333h225.83L6.248,475.582c-8.331,8.331-8.331,21.839,0,30.17 c8.331,8.331,21.839,8.331,30.17,0L469.333,72.837v225.83c0,11.782,9.551,21.333,21.333,21.333S512,310.449,512,298.667V21.335 C512,20.631,511.963,19.928,511.894,19.228z"
										/>
									</svg>
								</span>
							</div>
						</div>
						<p class="pr-tagline">{project.tagline}</p>
						<div class="pr-snippet">
							<div class="pr-snippet-inner">
								<p class="pr-desc">{project.description}</p>
								{#if project.snippet}
									<pre><code>{project.snippet}</code></pre>
								{/if}
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="section">
		<p class="section-eyebrow">Skills</p>
		<h2 class="section-title">Technical Stack</h2>

		<div class="skills-grid">
			<div class="flat-card">
				<div class="skills-list">
					{#each technicalSkills as skillSection (skillSection.label)}
						<div class="skill-row">
							<p class="skill-label">{skillSection.label}</p>
							<p>{skillSection.items.join(', ')}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="flat-card">
				<h3>Currently Tinkering With</h3>
				<p>
					Exploring systems programming through personal projects in Rust and Zig — understanding
					memory, and thinking about performance in ways that enterprise C# and Java rarely demand.
				</p>

				<h3 class="mt">Why</h3>
				<p>
					Deliberately stepping outside the comfort zone of managed runtimes and opinionated
					frameworks to build a stronger foundation in how software actually works.
				</p>
			</div>
		</div>
	</section>
</main>
