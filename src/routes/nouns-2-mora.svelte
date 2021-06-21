<script context="module" lang="ts">
	import { browser, dev } from '$app/env';
	import StyledPitch from "../lib/StyledPitch.svelte";

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
	<title>2-mora nouns</title>
</svelte:head>

<div class="content">
	<h1 id="2-mora-nouns">2-mora nouns</h1>
	
	<h2>Object pronouns and location adverbs</h2>
	
	<p>These are mostly 平板.</p>

	<StyledPitch
		pattern="011"
		texts={[
			"この日：このひ",
		]}
	/>
	<StyledPitch
		pattern="0/2"
		texts={[
			"これは：これは",
			"ここの：ここの",
		]}
	/>

	
	<h2>Body parts</h2>
	
	<p>These are mostly 尾高.</p>
	
	<StyledPitch
		pattern="2/2"
		texts={[
			"髪が：かみが",
			"耳が：みみが",
			"胸が：むねが",
			"腹が：はらが",
			"腕が：うでが",
			"指が：ゆびが",
			"足が：あしが",
		]}
	/>
	
	<p>Notable exceptions are either 平板 or 頭高:</p>
	
	<StyledPitch
		pattern="0/2"
		texts={[
			"口が：くちが",
			"鼻が：はなが",
			"首が：くびが",
		]}
	/>
	<StyledPitch
		pattern="1/2"
		texts={[
			"肩が：かたが",
			"喉が：のどが",
		]}
	/>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
