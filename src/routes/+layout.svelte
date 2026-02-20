<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/jpeg" href="/avatar.jpg" />
	<link rel="apple-touch-icon" href="/avatar.jpg" />
	<meta name="theme-color" content="#0a0f1a" />
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
