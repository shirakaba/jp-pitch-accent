<script lang="ts">
	import StyledPitch from "../lib/StyledPitch.svelte";
</script>

<main>
	<h1>1-4 mora nouns</h1>

	<p>Notes from Dogen's <strong>Japanese Phonetics Episode 8</strong>. <a href="https://www.patreon.com/dogen/">Support him on Patreon</a> to access his video lessons and hear native recordings and full explanations</p>

	<h2>Contents</h2>

	<ul>
		<li><a href="#1-mora-nouns">1-mora nouns</a></li>
		<li><a href="#2-mora-nouns">2-mora nouns</a></li>
		<li><a href="#3-mora-nouns">3-mora nouns</a></li>
		<li><a href="#4-mora-nouns">4-mora nouns</a></li>
	</ul>

	<h2 id="1-mora-nouns">1-mora nouns</h2>
	
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
		pattern="10-"
		texts={[
			"何処が：どこが",
			"どれが：どれが",
			"どうか：どうか",
			"何が：なにが",
			"何故か：なぜか",
			"誰が：だれが",
		]}
	/>

	<h2 id="2-mora-nouns">2-mora nouns</h2>
	
	<h3>Object pronouns and location adverbs</h3>
	
	<p>These are mostly 平板.</p>

	<StyledPitch
		pattern="011"
		texts={[
			"この日：このひ",
		]}
	/>
	<StyledPitch
		pattern="01+"
		texts={[
			"これは：これは",
			"ここの：ここの",
		]}
	/>

	
	<h3>Body parts</h3>
	
	<p>These are mostly 尾高.</p>
	
	<StyledPitch
		pattern="01-"
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
		pattern="01+"
		texts={[
			"口が：くちが",
			"鼻が：はなが",
			"首が：くびが",
		]}
	/>
	<StyledPitch
		pattern="10-"
		texts={[
			"肩が：かたが",
			"喉が：のどが",
		]}
	/>
	
	<h2 id="3-mora-nouns">3-mora nouns</h2>
	
	<p>Can be all types, however only ~10% are 中高, with another ~10% 尾高.</p>
	<h3>Commonly used 中高</h3>
	
	<StyledPitch
		pattern="010-"
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
	
	<h3>Commonly used 尾高</h3>
	
	<StyledPitch
		pattern="011-"
		texts={[
			"言葉が：ことばが",
			"男が：おとこが",
			"女が：おんなが",
			"皆んなが：みんなが",
		]}
	/>
	
	<h3>Commonly used 頭高</h3>
	
	<StyledPitch
		pattern="100-"
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
	
	<p>The rest (the majority) are 平板.</p>
	
	<h2 id="4-mora-nouns">4-mora nouns</h2>
	<p>Most are 平板, as are the overwhelming majority of 4-morae, 2-kanji nouns (and な-adjectives).</p>
	
	<StyledPitch
		pattern="0111+"
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
	
	<p>Notable exceptions in the 頭高 family:</p>
	
	<StyledPitch
		pattern="1000-"
		texts={[
			"音楽は：おんがくは",
			"兄弟は：きょうだいは",
			"挨拶は：あいさつは",
			"迷惑な：めいわくな",
			"玄関は：げんかんは",
		]}
	/>
	
	<p>Notable exceptions in the 中高 family:</p>
	
	<StyledPitch
		pattern="0110-"
		texts={[
			"先生は：せんせいは",
			"コーヒーは：コーヒーは",
			"弁当は：べんとうは",
			"残念な：ざんねんな",
			"半分は：はんぶんは",
			"案内は：はんないは",
		]}
	/>

	<StyledPitch
		pattern="0100-"
		texts={[
			"土曜日の：どようびの",
			"火曜日の：かようびの",
			"皆さんは：みなさんは",
			"アパートは：アパートは",
			"失礼な：しつれいな",
			"飲み物は：のみものは",
		]}
	/>
	
	<p>Notable exceptions in the 尾高 family:</p>
	
	<StyledPitch
		pattern="0111-"
		texts={[
			"弟が：おとうとが",
			"妹が：いもうとが",
		]}
	/>
</main>

<style>
	main {
		padding: 1em;
		max-width: 640px;
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

	table {
		border-collapse: separate;
    	border-spacing: 1em 1em;
	}
</style>
