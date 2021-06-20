<script lang="ts">
	import StyledPitch from "../lib/StyledPitch.svelte";
</script>

<main>
	<h1>1-4 mora nouns</h1>

	<p>Notes from Dogen's <strong>Japanese Phonetics Episode 8</strong>. <a href="https://www.patreon.com/dogen/">Support him on Patreon</a> to access his video lessons and hear native recordings and full explanations!</p>

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

	<!-- <StyledPitch title="..." word="バ^ニラクリームフラペチ|ーノ!をバ^ニラクリームフラペチ|ーノ!をバ^ニラクリームフラペチ|ーノ!を"/> -->

	<h3>Body parts</h3>

	<table>
		<StyledPitch
			word="^め|!がい^た|い"
			texts={[
				{ kanji: "目が痛い", kana: "^め|!がい^た|い" },
				{ kanji: "手が痛い", kana: "^て|!がい^た|い" },
				{ kanji: "歯が痛い", kana: "^は|!がい^た|い" },
			]}
		/>
		<StyledPitch
			word="い^!がいた|い"
			texts={[
				{ kanji: "胃が痛い", kana: "い^!がいた|い" },
			]}
		/>
	</table>
	<h3>Heat</h3>
	
	<table>
		<StyledPitch
			word="^ひ|!がつ^よ|い"
			texts={[
				{ kanji: "火が強い", kana: "^ひ|!がつ^よ|い" },
			]}
		/>
		<StyledPitch
			word="ひ^!がで|る"
			texts={[
				{ kanji: "日が出る", kana: "ひ^!がで|る" },
			]}
		/>
	</table>
	<h3>Life</h3>
	
	<table>
		<StyledPitch
			word="^き!|がた^か|い"
			texts={[
				{ kanji: "木が高い", kana: "^き!|がた^か|い" },
			]}
		/>
		<StyledPitch
			word="き^!がなが|い"
			texts={[
				{ kanji: "気が長い", kana: "き^!がなが|い" },
			]}
		/>
	</table>

	<h3>Question words</h3>

	<table>
		<StyledPitch
			word="^ど|こ!が"
			texts={[
				{ kanji: "何処が", kana: "^ど|こ!が" },
				{ kanji: "どれが", kana: "^ど|れ!が" },
				{ kanji: "どうか", kana: "^ど|う!か" },
				{ kanji: "何が", kana: "^な|に!が" },
				{ kanji: "何故か", kana: "^な|ぜ!か" },
				{ kanji: "誰が", kana: "^だ|れ!が" },
			]}
		/>
	</table>
	<h2 id="2-mora-nouns">2-mora nouns</h2>
	
	<h3>Object pronouns and location adverbs</h3>
	
	<p>These are mostly 平板.</p>

	<table>
		<StyledPitch
			word="こ^のひ"
			texts={[
				{ kanji: "この日", kana: "こ^のひ" },
			]}
		/>
		<StyledPitch
			word="こ^れ!は"
			texts={[
				{ kanji: "これは", kana: "こ^れ!は" },
				{ kanji: "ここの", kana: "こ^こ!の" },
			]}
		/>
	</table>

	
	<h3>Body parts</h3>
	
	<p>These are mostly 尾高.</p>
	
	<table>
		<StyledPitch
			word="か^み|!が"
			texts={[
				{ kanji: "髪が", kana: "か^み|!が" },
				{ kanji: "耳が", kana: "み^み|!が" },
				{ kanji: "胸が", kana: "む^ね|!が" },
				{ kanji: "腹が", kana: "は^ら|!が" },
				{ kanji: "腕が", kana: "う^で|!が" },
				{ kanji: "指が", kana: "ゆ^び|!が" },
				{ kanji: "足が", kana: "あ^し|!が" },
			]}
		/>
	</table>
	
	<p>Notable exceptions are either 平板 or 頭高:</p>
	
	<table>
		<StyledPitch
			word="く^ち!が"
			texts={[
				{ kanji: "口が", kana: "く^ち!が" },
				{ kanji: "鼻が", kana: "は^な!が" },
				{ kanji: "首が", kana: "く^び!が" },
			]}
		/>
		<StyledPitch
			word="^か|た!が"
			texts={[
				{ kanji: "肩が", kana: "^か|た!が" },
				{ kanji: "喉が", kana: "^の|ど!が" },
			]}
		/>
	</table>
	
	<h2 id="3-mora-nouns">3-mora nouns</h2>
	
	<p>Can be all types, however only ~10% are 中高, with another ~10% 尾高.</p>
	<h3>Commonly used 中高</h3>
	
	<table>		
		<StyledPitch
			word="に^ほ|ん!が"
			texts={[
				{ kanji: "日本が", kana: "に^ほ|ん!が" },
				{ kanji: "卵が", kana: "た^ま|ご!が" },
				{ kanji: "心が", kana: "こ^こ|ろ!が" },
				{ kanji: "お箸が", kana: "お^は|し!が" },
				{ kanji: "お菓子が", kana: "お^か|し!が" },
				{ kanji: "匂いが", kana: "に^お|い!が" },
				{ kanji: "貴方が", kana: "あ^な|た!が" },
			]}
		/>
	</table>
	
	<h3>Commonly used 尾高</h3>
	
	<table>
		<StyledPitch
			word="こ^とば|!が"
			texts={[
				{ kanji: "言葉が", kana: "こ^とば|!が" },
				{ kanji: "男が", kana: "お^とこ|!が" },
				{ kanji: "女が", kana: "お^んな|!が" },
				{ kanji: "皆んなが", kana: "み^んな|!が" },
			]}
		/>
	</table>
	
	<h3>Commonly used 頭高</h3>
	
	<table>
		<StyledPitch
			word="^ご|ぜん!は"
			texts={[
				{ kanji: "午前は", kana: "^ご|ぜん!は" },
				{ kanji: "家族は", kana: "^か|ぞく!は" },
				{ kanji: "眼鏡は", kana: "^め|がね!は" },
				{ kanji: "景色は", kana: "^け|しき!は" },
				{ kanji: "荷物は", kana: "^に|もつ!は" },
				{ kanji: "電気は", kana: "^で|んき!は" },
				{ kanji: "天気は", kana: "^て|んき!は" },
				{ kanji: "元気な", kana: "^げ|んき!な" },
				{ kanji: "どなたの", kana: "^ど|なた!の" },
				{ kanji: "どんな", kana: "^ど|んな!の" },
				{ kanji: "どちらの", kana: "^ど|ちら!の" },
			]}
		/>
	</table>
	
	<p>The rest (the majority) are 平板.</p>
	
	<h2 id="4-mora-nouns">4-mora nouns</h2>
	<p>Most are 平板, as are the overwhelming majority of 4-morae, 2-kanji nouns (and な-adjectives).</p>
	
	<table>
		<StyledPitch
			word="が^っこう!が"
			texts={[
				{ kanji: "学校が", kana: "が^っこう!が" },
				{ kanji: "銀行が", kana: "ぎ^んこう!が" },
				{ kanji: "最低の", kana: "さ^いてい!の" },
				{ kanji: "最悪の", kana: "さ^いあく!の" },
				{ kanji: "最高の", kana: "さ^いこう!の" },
				{ kanji: "平板の", kana: "へ^いばん!の" },
				{ kanji: "勉強の", kana: "べ^んきょう!の" },
				{ kanji: "心配の", kana: "し^んぱい!の" },
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 頭高 family:</p>
	
	<table>
		<StyledPitch
			word="^お|んがく!は"
			texts={[
				{ kanji: "音楽は", kana: "^お|んがく!は" },
				{ kanji: "兄弟は", kana: "^きょ|うだい!は" },
				{ kanji: "挨拶は", kana: "^あ|いさつ!は" },
				{ kanji: "迷惑な", kana: "^め|いわく!な" },
				{ kanji: "玄関は", kana: "^げ|んかん!は" },
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 中高 family:</p>
	
	<table>
		<StyledPitch
			word="せ^んせ|い!は"
			texts={[
				{ kanji: "先生は", kana: "せ^んせ|い!は" },
				{ kanji: "コーヒーは", kana: "コ^ーヒ|ー!は" },
				{ kanji: "弁当は", kana: "べ^んと|う!は" },
				{ kanji: "残念な", kana: "ざ^んね|ん!な" },
				{ kanji: "半分は", kana: "は^んぶ|ん!は" },
				{ kanji: "案内は", kana: "は^んな|い!は" },
			]}
		/>

		<StyledPitch
			word="ど^よ|うび!の"
			texts={[
				{ kanji: "土曜日の", kana: "ど^よ|うび!の" },
				{ kanji: "火曜日の", kana: "か^よ|うび!の" },
				{ kanji: "皆さんは", kana: "み^な|さん!は" },
				{ kanji: "アパートは", kana: "ア^パ|ート!は" },
				{ kanji: "失礼な", kana: "し^つ|れい!な" },
				{ kanji: "飲み物は", kana: "の^み|もの!は" },
			]}
		/>
	</table>
	
	<p>Notable exceptions in the 尾高 family:</p>
	
	<table>
		<StyledPitch
			word="お^とうと|!が"
			texts={[
				{ kanji: "弟が", kana: "お^とうと|!が" },
				{ kanji: "妹が", kana: "い^もうと|!が" },
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
