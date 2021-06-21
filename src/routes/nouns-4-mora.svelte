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
	<title>4-mora nouns</title>
</svelte:head>

<div class="content">
	<h1 id="4-mora-nouns">4-mora nouns</h1>
	<p>Most are 平板, as are the overwhelming majority of 4-mora, 2-kanji nouns (and な-adjectives).</p>
	
	<table>
		<StyledPitch
			pattern="0/4"
			texts={[
				"学校が：がっこうが",
				"銀行が：ぎんこうが",
				"最低の：さいていの",
				"最悪の：さいあくの",
				"最高の：さいこうの",
				"平板の：へいばんの",
				"勉強の：べんきょうの",
				"心配の：しんぱいの",
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 頭高 family:</p>
	
	<table>
		<StyledPitch
			pattern="1/4"
			texts={[
				"音楽は：おんがくは",
				"兄弟は：きょうだいは",
				"挨拶は：あいさつは",
				"迷惑な：めいわくな",
				"玄関は：げんかんは",
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 中高 family:</p>
	
	<table>
		<StyledPitch
			pattern="3/4"
			texts={[
				"先生は：せんせいは",
				"コーヒーは：コーヒーは",
				"弁当は：べんとうは",
				"残念な：ざんねんな",
				"半分は：はんぶんは",
				"案内は：はんないは",
			]}
		/>
	</table>

	<table>
		<StyledPitch
			pattern="2/4"
			texts={[
				"土曜日の：どようびの",
				"火曜日の：かようびの",
				"皆さんは：みなさんは",
				"アパートは：アパートは",
				"失礼な：しつれいな",
				"飲み物は：のみものは",
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 尾高 family:</p>
	
	<table>
		<StyledPitch
			pattern="4/4"
			texts={[
				"弟が：おとうとが",
				"妹が：いもうとが",
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
