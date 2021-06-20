<script lang="ts">
	import StyledPitch from "../lib/StyledPitch.svelte";
</script>

<svelte:head>
	<title>1-mora nouns</title>
</svelte:head>

<div class="content">
	<h2 id="1-mora-nouns">1-mora nouns</h2>
	
	<p>Notes from Dogen's <strong>Japanese Phonetics Episode 8</strong>. <a href="https://www.patreon.com/dogen/">Support him on Patreon</a> to access his video lessons and hear native recordings and full explanations</p>
	
	<ul>
		<li>
			<p>70% are 頭高, being primarily Chinese in origin, and tend to represent ideas or concepts.</p>
		</li>
		<li>
			<p>30% are 平板, and tend to be everyday nouns and objects.</p>
		</li>
	</ul>

	<h3>Body parts</h3>

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
	<h3>Heat</h3>
	
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
	<h3>Life</h3>
	
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

	<h3>Question words</h3>

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
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	h1 {
		text-align: center;
		color: #252525;
		text-transform: uppercase;
	}

	h2 {
		text-transform: uppercase;
	}
</style>
