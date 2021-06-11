<script lang="ts">
	import Pitch from "./Pitch.svelte";
</script>

<main>
	<h1>Verbs</h1>

	<h2>平板</h2>

	<table>
		<!-- <tr>
			<td>開ける</td>
			<td>あける</td>
		</tr> -->
		<tr>
			<div style="position: relative; width: 400px; height: 150px; background-color: yellow;">
				<Pitch title="日が強い" word="^ひ|がつ^よ|い"/>
			</div>
		</tr>
	</table>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>