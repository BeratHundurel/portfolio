<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/jpeg" href="/avatar.jpg" />
	<link rel="apple-touch-icon" href="/avatar.jpg" />
	<meta name="theme-color" content="#0a0f1a" />
</svelte:head>

{@render children()}
