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

	<!-- <StyledPitch title="..." pattern="バニラクリームフラペチーノをバニラクリームフラペチーノをバニラクリームフラペチーノを"/> -->

	<h3>Body parts</h3>

	<table>
		<StyledPitch
			pattern="1-010"
			texts={[
				{ kanji: "目が痛い", kana: "めがいたい" },
				{ kanji: "手が痛い", kana: "てがいたい" },
				{ kanji: "歯が痛い", kana: "はがいたい" },
			]}
		/>
		<StyledPitch
			pattern="0+110"
			texts={[
				{ kanji: "胃が痛い", kana: "いがいたい" },
			]}
		/>
	</table>
	<h3>Heat</h3>
	
	<table>
		<StyledPitch
			pattern="1-010"
			texts={[
				{ kanji: "火が強い", kana: "ひがつよい" },
			]}
		/>
		<StyledPitch
			pattern="0+10"
			texts={[
				{ kanji: "日が出る", kana: "ひがでる" },
			]}
		/>
	</table>
	<h3>Life</h3>
	
	<table>
		<StyledPitch
			pattern="1-010"
			texts={[
				{ kanji: "木が高い", kana: "きがたかい" },
			]}
		/>
		<StyledPitch
			pattern="0+110"
			texts={[
				{ kanji: "気が長い", kana: "きがながい" },
			]}
		/>
	</table>

	<h3>Question words</h3>

	<table>
		<StyledPitch
			pattern="10-"
			texts={[
				{ kanji: "何処が", kana: "どこが" },
				{ kanji: "どれが", kana: "どれが" },
				{ kanji: "どうか", kana: "どうか" },
				{ kanji: "何が", kana: "なにが" },
				{ kanji: "何故か", kana: "なぜか" },
				{ kanji: "誰が", kana: "だれが" },
			]}
		/>
	</table>
	<h2 id="2-mora-nouns">2-mora nouns</h2>
	
	<h3>Object pronouns and location adverbs</h3>
	
	<p>These are mostly 平板.</p>

	<table>
		<StyledPitch
			pattern="011"
			texts={[
				{ kanji: "この日", kana: "このひ" },
			]}
		/>
		<StyledPitch
			pattern="01+"
			texts={[
				{ kanji: "これは", kana: "これは" },
				{ kanji: "ここの", kana: "ここの" },
			]}
		/>
	</table>

	
	<h3>Body parts</h3>
	
	<p>These are mostly 尾高.</p>
	
	<table>
		<StyledPitch
			pattern="01-"
			texts={[
				{ kanji: "髪が", kana: "かみが" },
				{ kanji: "耳が", kana: "みみが" },
				{ kanji: "胸が", kana: "むねが" },
				{ kanji: "腹が", kana: "はらが" },
				{ kanji: "腕が", kana: "うでが" },
				{ kanji: "指が", kana: "ゆびが" },
				{ kanji: "足が", kana: "あしが" },
			]}
		/>
	</table>
	
	<p>Notable exceptions are either 平板 or 頭高:</p>
	
	<table>
		<StyledPitch
			pattern="01+"
			texts={[
				{ kanji: "口が", kana: "くちが" },
				{ kanji: "鼻が", kana: "はなが" },
				{ kanji: "首が", kana: "くびが" },
			]}
		/>
		<StyledPitch
			pattern="10-"
			texts={[
				{ kanji: "肩が", kana: "かたが" },
				{ kanji: "喉が", kana: "のどが" },
			]}
		/>
	</table>
	
	<h2 id="3-mora-nouns">3-mora nouns</h2>
	
	<p>Can be all types, however only ~10% are 中高, with another ~10% 尾高.</p>
	<h3>Commonly used 中高</h3>
	
	<table>		
		<StyledPitch
			pattern="010-"
			texts={[
				{ kanji: "日本が", kana: "にほんが" },
				{ kanji: "卵が", kana: "たまごが" },
				{ kanji: "心が", kana: "こころが" },
				{ kanji: "お箸が", kana: "おはしが" },
				{ kanji: "お菓子が", kana: "おかしが" },
				{ kanji: "匂いが", kana: "においが" },
				{ kanji: "貴方が", kana: "あなたが" },
			]}
		/>
	</table>
	
	<h3>Commonly used 尾高</h3>
	
	<table>
		<StyledPitch
			pattern="011-"
			texts={[
				{ kanji: "言葉が", kana: "ことばが" },
				{ kanji: "男が", kana: "おとこが" },
				{ kanji: "女が", kana: "おんなが" },
				{ kanji: "皆んなが", kana: "みんなが" },
			]}
		/>
	</table>
	
	<h3>Commonly used 頭高</h3>
	
	<table>
		<StyledPitch
			pattern="100-"
			texts={[
				{ kanji: "午前は", kana: "ごぜんは" },
				{ kanji: "家族は", kana: "かぞくは" },
				{ kanji: "眼鏡は", kana: "めがねは" },
				{ kanji: "景色は", kana: "けしきは" },
				{ kanji: "荷物は", kana: "にもつは" },
				{ kanji: "電気は", kana: "でんきは" },
				{ kanji: "天気は", kana: "てんきは" },
				{ kanji: "元気な", kana: "げんきな" },
				{ kanji: "どなたの", kana: "どなたの" },
				{ kanji: "どんな", kana: "どんなの" },
				{ kanji: "どちらの", kana: "どちらの" },
			]}
		/>
	</table>
	
	<p>The rest (the majority) are 平板.</p>
	
	<h2 id="4-mora-nouns">4-mora nouns</h2>
	<p>Most are 平板, as are the overwhelming majority of 4-morae, 2-kanji nouns (and な-adjectives).</p>
	
	<table>
		<StyledPitch
			pattern="0111+"
			texts={[
				{ kanji: "学校が", kana: "がっこうが" },
				{ kanji: "銀行が", kana: "ぎんこうが" },
				{ kanji: "最低の", kana: "さいていの" },
				{ kanji: "最悪の", kana: "さいあくの" },
				{ kanji: "最高の", kana: "さいこうの" },
				{ kanji: "平板の", kana: "へいばんの" },
				{ kanji: "勉強の", kana: "べんきょうの" },
				{ kanji: "心配の", kana: "しんぱいの" },
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 頭高 family:</p>
	
	<table>
		<StyledPitch
			pattern="1000-"
			texts={[
				{ kanji: "音楽は", kana: "おんがくは" },
				{ kanji: "兄弟は", kana: "きょうだいは" },
				{ kanji: "挨拶は", kana: "あいさつは" },
				{ kanji: "迷惑な", kana: "めいわくな" },
				{ kanji: "玄関は", kana: "げんかんは" },
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 中高 family:</p>
	
	<table>
		<StyledPitch
			pattern="0110-"
			texts={[
				{ kanji: "先生は", kana: "せんせいは" },
				{ kanji: "コーヒーは", kana: "コーヒーは" },
				{ kanji: "弁当は", kana: "べんとうは" },
				{ kanji: "残念な", kana: "ざんねんな" },
				{ kanji: "半分は", kana: "はんぶんは" },
				{ kanji: "案内は", kana: "はんないは" },
			]}
		/>

		<StyledPitch
			pattern="0100-"
			texts={[
				{ kanji: "土曜日の", kana: "どようびの" },
				{ kanji: "火曜日の", kana: "かようびの" },
				{ kanji: "皆さんは", kana: "みなさんは" },
				{ kanji: "アパートは", kana: "アパートは" },
				{ kanji: "失礼な", kana: "しつれいな" },
				{ kanji: "飲み物は", kana: "のみものは" },
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 尾高 family:</p>
	
	<table>
		<StyledPitch
			pattern="0111-"
			texts={[
				{ kanji: "弟が", kana: "おとうとが" },
				{ kanji: "妹が", kana: "いもうとが" },
			]}
		/>
	</table>
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
