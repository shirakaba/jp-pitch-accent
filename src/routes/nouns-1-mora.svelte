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
	<title>1-mora nouns</title>
</svelte:head>

<div class="content">
	<h1 id="1-mora-nouns">1-mora nouns</h1>
	
	<ul>
		<li>
			<p>70% are 頭高, being primarily Chinese in origin, and tend to represent ideas or concepts.</p>
		</li>
		<li>
			<p>30% are 平板, and tend to be everyday nouns and objects.</p>
		</li>
	</ul>

	<h2>Body parts</h2>

	<table>
		<StyledPitch
			pattern="1-010"
			texts={[
				"目が痛い：めがいたい",
				"手が痛い：てがいたい",
				"歯が痛い：はがいたい",
			]}
		/>
		<StyledPitch
			pattern="0+110"
			texts={[
				"胃が痛い：いがいたい",
			]}
		/>
	</table>
	<h2>Heat</h2>
	
	<table>
		<StyledPitch
			pattern="1-010"
			texts={[
				"火が強い：ひがつよい",
			]}
		/>
		<StyledPitch
			pattern="0+10"
			texts={[
				"日が出る：ひがでる",
			]}
		/>
	</table>
	<h2>Life</h2>
	
	<table>
		<StyledPitch
			pattern="1-010"
			texts={[
				"木が高い：きがたかい",
			]}
		/>
		<StyledPitch
			pattern="0+110"
			texts={[
				"気が長い：きがながい",
			]}
		/>
	</table>

	<h2>Question words</h2>

	<table>
		<StyledPitch
			pattern="1/2"
			texts={[
				"何処が：どこが",
				"どれが：どれが",
				"どうか：どうか",
				"何が：なにが",
				"何故か：なぜか",
				"誰が：だれが",
			]}
		/>
	</table>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
