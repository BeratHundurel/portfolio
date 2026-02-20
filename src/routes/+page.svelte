<script lang="ts">
	import profilePhoto from '$lib/assets/108434803.jfif';
	import resumePdf from '$lib/assets/Berat_Hundurel_FullStack_Engineer.pdf';

	const openResume = () => {
		window.open(resumePdf, '_blank', 'noopener,noreferrer');
	};

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

	const experience = [
		{
			company: 'Printomi',
			role: 'Freelance Full Stack Engineer (Contract)',
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
	<title>Berat Hündürel | Full-Stack Engineer</title>
	<meta
		name="description"
		content="Portfolio of Berat Hündürel, Full-Stack Engineer focused on modern web products and scalable systems."
	/>
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
						href="https://linkedin.com/in/berat-hündürel"
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
		<p class="section-eyebrow">Skills</p>
		<h2 class="section-title">Technical Stack</h2>

		<div class="grid-row">
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
				<h3>Education</h3>
				<p>Mechatronics Engineering</p>
				<p class="muted">Istanbul Bilgi University, Istanbul</p>

				<h3 class="mt">Profiles</h3>
				<p>
					<a class="link" href="https://github.com/BeratHundurel" target="_blank" rel="noreferrer"
						>github.com/BeratHundurel</a
					>
				</p>
				<p>
					<a
						class="link"
						href="https://linkedin.com/in/berat-hündürel"
						target="_blank"
						rel="noreferrer">linkedin.com/in/berat-hündürel</a
					>
				</p>
			</div>
		</div>
	</section>
</main>
