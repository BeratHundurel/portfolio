<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/jpeg" href="/avatar.jpg" />
	<link rel="apple-touch-icon" href="/avatar.jpg" />
	<link rel="canonical" href={page.url.href} />
	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
	<title>Berat Hündürel — Full-Stack Engineer</title>

	<meta name="theme-color" content="#0a0f1a" />
	<meta
		name="description"
		content="Backend-focused Full Stack Engineer building production APIs and web apps with C#, Go and TypeScript. Available for work in Istanbul."
	/>
	<meta name="author" content="Berat Hündürel" />
	<meta
		name="keywords"
		content="Full Stack Engineer, Backend Engineer, C#, Go, Rust, TypeScript, .NET, Svelte, React, Docker, PostgreSQL, Istanbul, Software Engineer"
	/>

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Berat Hündürel" />
	<meta property="og:title" content="Berat Hündürel — Full-Stack Engineer" />
	<meta
		property="og:description"
		content="Backend-focused Full Stack Engineer building production APIs and web apps with C#, Go and TypeScript. Available for work in Istanbul."
	/>
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content="{page.url.origin}/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
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
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Berat Hündürel",
			"url": "https://berathundurel.vercel.app",
			"jobTitle": "Full-Stack Engineer",
			"email": "mailto:berat.hundurel@hotmail.com",
			"image": "/avatar.jpg",
			"sameAs": [
				"https://github.com/BeratHundurel",
				"https://www.linkedin.com/in/berat-h%C3%BCnd%C3%BCrel-1197b9253",
				"https://x.com/BHundurel"
			],
			"knowsAbout": [
				"C#",
				"Go",
				"TypeScript",
				"JavaScript",
				".NET",
				"Svelte",
				"React",
				"Next.js",
				"Docker",
				"PostgreSQL",
				"Microsoft SQL Server",
				"gRPC",
				"RabbitMQ"
			],
			"worksFor": {
				"@type": "Organization",
				"name": "Printomi"
			},
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Istanbul",
				"addressCountry": "TR"
			}
		}
	</script>
</svelte:head>

{@render children()}
