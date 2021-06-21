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
	<title>3-mora nouns</title>
</svelte:head>

<div class="content">
	<h1 id="3-mora-nouns">3-mora nouns</h1>
	
	<p>Can be all types, however only ~10% are 中高, with another ~10% 尾高.</p>
	<h2>Commonly used 中高</h2>
	
	<table>
		<StyledPitch
			pattern="2/3"
			texts={[
				"日本が：にほんが",
				"卵が：たまごが",
				"心が：こころが",
				"お箸が：おはしが",
				"お菓子が：おかしが",
				"匂いが：においが",
				"貴方が：あなたが",
			]}
		/>
	</table>
	
	<h2>Commonly used 尾高</h2>
	
	<table>
		<StyledPitch
			pattern="3/3"
			texts={[
				"言葉が：ことばが",
				"男が：おとこが",
				"女が：おんなが",
				"皆んなが：みんなが",
			]}
		/>
	</table>
	
	<h2>Commonly used 頭高</h2>
	
	<table>
		<StyledPitch
			pattern="1/3"
			texts={[
				"午前は：ごぜんは",
				"家族は：かぞくは",
				"眼鏡は：めがねは",
				"景色は：けしきは",
				"荷物は：にもつは",
				"電気は：でんきは",
				"天気は：てんきは",
				"元気な：げんきな",
				"どなたの：どなたの",
				"どんな：どんなの",
				"どちらの：どちらの",
			]}
		/>
	</table>
	
	<p>The rest (the majority) are 平板.</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
