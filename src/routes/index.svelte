<script context="module" lang="ts">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Japanese phonetics notes</title>
</svelte:head>

<div class="content">
	<h1>Japanese phonetics notes</h1>

	<p>A website to host my notes from <a href="https://twitter.com/Dogen">Dogen</a>'s incredible series of lessons on Japanese pitch accent.</p>
	
	<p>For now, I've written up notes on <strong>Japanese Phonetics Episode 8</strong>, which covers 1-4 mora nouns. <a href="https://www.patreon.com/dogen/">Support him on Patreon</a> to access his video lessons and hear native recordings and full explanations.</p>

	<p>Whether I'll write up the whole series of pitch accent lessons (and whether I'll publish them) I still haven't decided.</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
