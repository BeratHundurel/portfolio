<script lang="ts">
	import { page } from '$app/state';

	const errorMessages: Record<number, { title: string; snippet: string }> = {
		400: {
			title: 'Bad Request',
			snippet: `$ request --verify
→ parsing payload...
✗ malformed syntax
✗ the server cannot process this request`
		},
		401: {
			title: 'Unauthorized',
			snippet: `$ auth --check
→ verifying credentials...
✗ authentication required
✗ access denied`
		},
		403: {
			title: 'Forbidden',
			snippet: `$ access --resolve
→ checking permissions...
✗ insufficient privileges
✗ this resource is off-limits`
		},
		404: {
			title: 'Not Found',
			snippet: `$ route --lookup "{page.url.pathname}"
→ scanning routes...
✗ no match found
✗ the page you're looking for doesn't exist`
		},
		405: {
			title: 'Method Not Allowed',
			snippet: `$ method --validate
→ checking allowed methods...
✗ request method not supported
✗ use an allowed method instead`
		},
		408: {
			title: 'Request Timeout',
			snippet: `$ request --await
→ waiting for response...
✗ connection timed out
✗ server did not receive a complete request`
		},
		429: {
			title: 'Too Many Requests',
			snippet: `$ rate-limit --check
→ analyzing request frequency...
✗ rate limit exceeded
✗ slow down and try again later`
		},
		500: {
			title: 'Internal Server Error',
			snippet: `$ server --diagnose
→ running health check...
✗ unexpected condition
✗ the server encountered an error`
		},
		502: {
			title: 'Bad Gateway',
			snippet: `$ gateway --ping
→ upstream communication...
✗ invalid response
✗ the gateway received an invalid response`
		},
		503: {
			title: 'Service Unavailable',
			snippet: `$ service --status
→ checking availability...
✗ server temporarily overloaded
✗ try again in a moment`
		},
		504: {
			title: 'Gateway Timeout',
			snippet: `$ gateway --await
→ waiting for upstream...
✗ response took too long
✗ connection timed out`
		}
	};

	const status = $derived(page.status);
	const message = $derived(page.error?.message ?? 'Something went wrong');
	const errorInfo = $derived(
		errorMessages[status] ?? {
			title: 'Error',
			snippet: `$ error --inspect
→ analyzing fault...
✗ status: ${status}
✗ ${message}`
		}
	);
</script>

<svelte:head>
	<title>{status} — {errorInfo.title}</title>
	<meta name="description" content="{status} {errorInfo.title}" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="error-shell">
	<section class="error-hero">
		<div class="error-content">
			<p class="error-eyebrow">Error {status}</p>
			<h1 class="error-title">{errorInfo.title}</h1>

			<div class="error-snippet">
				<pre><code>{errorInfo.snippet}</code></pre>
			</div>
		</div>

		<div class="error-visual">
			<div class="error-code" aria-hidden="true">{status}</div>
			<div class="error-code-glow"></div>
		</div>
	</section>

	<section class="error-suggestions">
		<p class="section-eyebrow">Quick Links</p>
		<h2 class="section-title">Maybe you were looking for</h2>

		<div class="suggestions-grid">
			<a class="suggestion-card" href="/">
				<span class="suggestion-num">01</span>
				<div class="suggestion-body">
					<span class="suggestion-name">Home</span>
					<p class="suggestion-desc">Portfolio overview and introduction</p>
				</div>
			</a>

			<a
				class="suggestion-card"
				href="https://github.com/BeratHundurel"
				target="_blank"
				rel="noreferrer"
			>
				<span class="suggestion-num">02</span>
				<div class="suggestion-body">
					<span class="suggestion-name">GitHub</span>
					<p class="suggestion-desc">Open source projects and contributions</p>
				</div>
			</a>

			<a class="suggestion-card" href="mailto:berat.hundurel@hotmail.com">
				<span class="suggestion-num">03</span>
				<div class="suggestion-body">
					<span class="suggestion-name">Contact</span>
					<p class="suggestion-desc">Get in touch via email</p>
				</div>
			</a>
		</div>
	</section>
</main>

<style>
	.error-shell {
		max-width: 1060px;
		margin: 0 auto;
		display: grid;
		gap: 4rem;
		min-height: calc(100vh - 10rem);
		align-content: center;
	}

	.error-hero {
		display: grid;
		gap: 2rem;
		align-items: center;
		position: relative;
	}

	.error-content {
		display: grid;
		gap: 0.75rem;
		position: relative;
		z-index: 1;
	}

	.error-eyebrow {
		font-size: 0.82rem;
		letter-spacing: 0.11em;
		text-transform: uppercase;
		color: rgba(240, 120, 120, 0.9);
		font-weight: 600;
	}

	.error-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		line-height: 1.1;
		letter-spacing: -0.035em;
		font-weight: 700;
		color: #f0f3fa;
		margin: 0;
	}

	.error-snippet {
		margin-top: 0.5rem;
	}

	.error-snippet pre {
		margin: 0;
		padding: 1rem 1.25rem;
		background: rgba(0, 0, 0, 0.35);
		border: 1px solid rgba(140, 165, 220, 0.1);
		border-radius: 0.75rem;
		overflow-x: auto;
		max-width: 55ch;
	}

	.error-snippet code {
		font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
		font-size: 0.78rem;
		line-height: 1.8;
		color: rgba(200, 210, 230, 0.55);
		white-space: pre;
	}

	.error-visual {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 200px;
	}

	.error-code {
		font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
		font-size: clamp(6rem, 20vw, 12rem);
		font-weight: 800;
		color: rgba(240, 120, 120, 0.08);
		line-height: 1;
		position: absolute;
		user-select: none;
		letter-spacing: -0.05em;
	}

	.error-code-glow {
		width: 300px;
		height: 300px;
		background: radial-gradient(
			ellipse at center,
			rgba(240, 120, 120, 0.08) 0%,
			rgba(240, 120, 120, 0.03) 40%,
			transparent 70%
		);
		border-radius: 50%;
		position: absolute;
		animation: pulse-glow 4s ease-in-out infinite;
	}

	@keyframes pulse-glow {
		0%,
		100% {
			opacity: 0.6;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
		}
	}

	.error-suggestions {
		display: grid;
		gap: 1.25rem;
	}

	.suggestions-grid {
		display: grid;
		gap: 0.75rem;
	}

	.suggestion-card {
		position: relative;
		overflow: hidden;
		padding: 1.25rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.025);
		border: 1px solid rgba(140, 165, 220, 0.1);
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
		align-items: center;
		color: inherit;
		text-decoration: none;
		transition:
			color 280ms ease,
			border-color 280ms ease,
			background 280ms ease,
			box-shadow 280ms ease;
	}

	.suggestion-card::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: rgba(150, 180, 240, 0.55);
		border-radius: 3px 0 0 3px;
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform 280ms ease;
	}

	.suggestion-card:hover {
		border-color: rgba(160, 185, 230, 0.28);
		background: rgba(255, 255, 255, 0.03);
		box-shadow:
			0 0 0 1px rgba(150, 180, 240, 0.04),
			0 8px 32px rgba(0, 0, 0, 0.28);
	}

	.suggestion-card:hover::before {
		transform: scaleY(1);
	}

	.suggestion-card:hover .suggestion-name {
		color: #fff;
	}

	.suggestion-card:hover .suggestion-desc {
		color: rgba(200, 210, 230, 0.7);
	}

	.suggestion-num {
		font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
		font-size: 0.8rem;
		color: rgba(150, 180, 240, 0.4);
		font-weight: 600;
		letter-spacing: 0.12em;
	}

	.suggestion-body {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.suggestion-name {
		font-size: 0.95rem;
		font-weight: 620;
		color: #e8ecf4;
		transition: color 140ms ease;
	}

	.suggestion-desc {
		font-size: 0.85rem;
		line-height: 1.5;
		color: rgba(200, 210, 230, 0.45);
		margin: 0;
		transition: color 140ms ease;
	}

	@media (prefers-reduced-motion: reduce) {
		.error-code-glow {
			animation: none;
		}

		*,
		*::before,
		*::after {
			transition: none !important;
		}
	}

	@media (min-width: 760px) {
		.error-hero {
			grid-template-columns: minmax(0, 1fr) auto;
			gap: 2rem;
		}

		.error-visual {
			min-height: 280px;
		}

		.suggestions-grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.suggestion-card {
			flex-direction: column;
			text-align: center;
			gap: 0.75rem;
		}

		.suggestion-body {
			align-items: center;
		}
	}

	@media (max-width: 640px) {
		.error-visual {
			order: -1;
			min-height: 150px;
		}

		.error-code {
			font-size: 5rem;
		}

		.error-code-glow {
			width: 200px;
			height: 200px;
		}

		.error-snippet pre {
			padding: 0.75rem 1rem;
		}

		.error-snippet code {
			font-size: 0.7rem;
		}
	}
</style>
