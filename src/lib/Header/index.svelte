<script lang="ts">
	import { page } from '$app/stores';
	import githubLogo from './github-brands.svg';
	import twitterLogo from './twitter-brands.svg';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="https://github.com/shirakaba/jp-pitch-accent">
					<img class="icon" src={githubLogo} alt="GitHub" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/LinguaBrowse">
					<img class="icon" src={twitterLogo} alt="Twitter" />
				</a>
			</li>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">About</a></li>
			<li class:active={$page.path === '/nouns-1-mora'}><a sveltekit:prefetch href="/nouns-1-mora">1-mora nouns</a></li>
			<li class:active={$page.path === '/nouns-2-mora'}><a sveltekit:prefetch href="/nouns-2-mora">2-mora nouns</a></li>
			<li class:active={$page.path === '/nouns-3-mora'}><a sveltekit:prefetch href="/nouns-3-mora">3-mora nouns</a></li>
			<li class:active={$page.path === '/nouns-4-mora'}><a sveltekit:prefetch href="/nouns-4-mora">4-mora nouns</a></li>
			<!-- <li class:active={$page.path === '/nouns-many-mora'}><a sveltekit:prefetch href="/nouns-many-mora">many-mora nouns</a></li> -->
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	.icon {
		width: 3em;
		height: 3em;
	}

	nav {
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		max-width: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		list-style: none;
		max-width: 100%;
	}

	li {
		display: flex;
		align-items: center;
		position: relative;
		height: 3em;
		background: var(--background);
		background-size: contain;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
