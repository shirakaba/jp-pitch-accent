<script lang="ts">
	import StyledPitch from "./StyledPitch.svelte";
</script>

<main>
	<h1>1-4 mora nouns</h1>

	<h2>Heat</h2>

	<StyledPitch title="火が強い" word="^ひ|!がつ^よ|い"/>
	<StyledPitch title="日が出る" word="ひ^!がで|る"/>

	<h2>Life</h2>

	<StyledPitch title="木が高い" word="^き!|がた^か|い"/>
	<StyledPitch title="気が長い" word="き^!がなが|い"/>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		color: #252525;
		text-transform: uppercase;
	}

	h2 {
		text-transform: uppercase;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>