<script lang="ts">
	import { page } from '$app/stores';
	import logo from './github-brands.svg';
</script>

<header>
	<div class="corner">
		<a href="https://github.com/shirakaba/jp-pitch-accent">
			<img src={logo} alt="GitHub" />
		</a>
	</div>

	<div></div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">About</a></li>
			<li class:active={$page.path === '/nouns-1-mora'}><a sveltekit:prefetch href="/nouns-1-mora">1-mora nouns</a></li>
			<li class:active={$page.path === '/nouns-2-mora'}><a sveltekit:prefetch href="/nouns-2-mora">2-mora nouns</a></li>
			<li class:active={$page.path === '/nouns-3-mora'}><a sveltekit:prefetch href="/nouns-3-mora">3-mora nouns</a></li>
			<li class:active={$page.path === '/nouns-4-mora'}><a sveltekit:prefetch href="/nouns-4-mora">4-mora nouns</a></li>
			<!-- <li class:active={$page.path === '/nouns-many-mora'}><a sveltekit:prefetch href="/nouns-many-mora">many-mora nouns</a></li> -->
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
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
