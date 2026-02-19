<script lang="ts">
	import profilePhoto from '$lib/assets/108434803.jfif';
	import resumePdf from '$lib/assets/Berat_Hundurel_FullStack_Engineer.pdf';

	const openResume = () => {
		window.open(resumePdf, '_blank', 'noopener,noreferrer');
	};

	const professionalSummary =
		'Backend-focused Full Stack Engineer, building and operating production APIs and web applications. Experience with message-driven workflows, SQL-based systems, and containerized deployments. Comfortable owning systems end-to-end, from backend services and database design to modern frontend applications.';

	const highlights = [
		'Developed fault-tolerant REST APIs powering a mobile application used by students, remote workers, and shop owners.',
		'Implemented RabbitMQ-based message broker integration to ensure reliable printing across locations.',
		'Implemented cross-stack performance optimizations, improving Web Core Vitals scores by over 50% in high-impact scenarios.'
	];

	const quickStats = [
		{ label: 'Web Core Vitals Lift', value: '50%+' },
		{ label: 'Current Role', value: 'Nov 2024 — Present' },
		{ label: 'Location', value: 'Istanbul, TR' }
	];

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
	<section class="hero card">
		<div class="hero-topline">
			<div class="eyebrow">FULL-STACK ENGINEER · AVAILABLE FOR NEW OPPORTUNITIES</div>
			<div class="status-pill">OPEN TO REMOTE / HYBRID</div>
		</div>

		<div class="hero-main">
			<div class="hero-content">
				<h1 class="hero-title">Berat Hündürel</h1>
				<p class="hero-copy">{professionalSummary}</p>

				<div class="cta-row cta-row--hero">
					<button class="btn btn-primary" type="button" onclick={openResume}>View Resume</button>
					<a class="btn btn-secondary" href="mailto:berat.hundurel@hotmail.com">Contact Me</a>
					<a
						class="btn btn-secondary"
						href="https://github.com/BeratHundurel"
						target="_blank"
						rel="noreferrer">GitHub</a
					>
					<a
						class="btn btn-secondary"
						href="https://linkedin.com/in/berat-hündürel"
						target="_blank"
						rel="noreferrer">LinkedIn</a
					>
				</div>
			</div>

			<div class="card profile-panel">
				<div class="photo-frame">
					<img class="profile-photo" src={profilePhoto} alt="Portrait of Berat Hündürel" />
				</div>
				<p class="profile-heading">Contact</p>
				<p class="profile-text">berat.hundurel@hotmail.com</p>
				<p class="profile-heading">Current Role</p>
				<p class="profile-text">Full Stack Engineer (Contract) · Printomi</p>
			</div>
		</div>
	</section>

	<section class="card experience-section">
		<div class="section-topline">
			<h2>Experience</h2>
			<p>Sentences taken from CV.</p>
		</div>

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

	<section class="grid-row">
		<div class="card">
			<h2>Technical Skills</h2>
			<div class="skills-list">
				{#each technicalSkills as section (section.label)}
					<div class="skill-row">
						<p class="skill-label">{section.label}:</p>
						<p>{section.items.join(', ')}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="card">
			<h2>Education</h2>
			<p>Mechatronics Engineering</p>
			<p>Istanbul Bilgi University, Istanbul</p>
			<h2>Profiles</h2>
			<p>
				<a href="https://github.com/BeratHundurel" target="_blank" rel="noreferrer"
					>github.com/BeratHundurel</a
				>
			</p>
			<p>
				<a href="https://linkedin.com/in/berat-hündürel" target="_blank" rel="noreferrer"
					>linkedin.com/in/berat-hündürel</a
				>
			</p>
		</div>
	</section>
</main>
