<script lang="ts">
	import StyledPitch from "./StyledPitch.svelte";
</script>

<main>
	<h1>1-4 mora nouns</h1>

	<h2>1-mora nouns</h2>

	<ul>
		<li>
			<p>70% are 頭高, being primarily Chinese in origin, and tend to represent ideas or concepts.</p>
		</li>
		<li>
			<p>30% are 平板, and tend to be everyday nouns and objects.</p>
		</li>
	</ul>

	<h3>Body parts</h3>

	<div class="pitchesContainer">
		<StyledPitch title="目が痛い" word="^め|!がい^た|い"/>
		<StyledPitch title="手が痛い" word="^て|!がい^た|い"/>
		<StyledPitch title="歯が痛い" word="^は|!がい^た|い"/>
	</div>
	
	<div class="pitchesContainer">
		<StyledPitch title="胃が痛い" word="い^!がいた|い"/>
	</div>

	<h3>Heat</h3>

	<div class="pitchesContainer">
		<StyledPitch title="火が強い" word="^ひ|!がつ^よ|い"/>
		<StyledPitch title="日が出る" word="ひ^!がで|る"/>
	</div>

	<h3>Life</h3>

	<div class="pitchesContainer">
		<StyledPitch title="木が高い" word="^き!|がた^か|い"/>
		<StyledPitch title="気が長い" word="き^!がなが|い"/>
	</div>
</main>

<style>
	main {
		padding: 1em;
		max-width: 640px;
		margin: 0 auto;
	}

	.pitchesContainer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 2em;
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
