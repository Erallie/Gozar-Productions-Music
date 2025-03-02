<script lang="ts">
	import { ButtonDirection, TextColor } from "$lib/types/types";
	import { onMount } from "svelte";
	import Button from "./Button.svelte";
	import { page } from "$app/state";
	import logo from "$lib/images/gozar-productions-logo.svg";

	let isSticky = $state(false);
	let hgroupElement: HTMLElement | null = null;
	let isHome = $state(true);

	$effect(() => {
		isHome = page.url.pathname == "/";
	});

	const handleScroll = () => {
		if (hgroupElement) {
			const rect = hgroupElement.getBoundingClientRect();
			isSticky = rect.top <= 10; // Check if the top of the hgroup is less than or equal to 10px from the top of the viewport
		}
	};

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check on mount

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	let isPerformancePage = $state(false);

	$effect(() => {
		isPerformancePage = page.url.pathname == "/performances";
	});
</script>

<header>
	<nav>
		<Button
			link={isHome ? "https://gozarproductions.com" : "/"}
			newTab={false}
			direction={ButtonDirection.Left}
			color={TextColor.Black}
			invertBackground
			>{isHome ? "Gozar Productions" : "Back to Erika Gozar"}</Button
		>
	</nav>
</header>
<hgroup bind:this={hgroupElement} class={isSticky ? "sticky" : undefined}>
	<div>
		<h1>Gozar Productions</h1>
		<h2>Music</h2>
	</div>
	<img src={logo} alt="Gozar Productions Logo" />
</hgroup>

<style>
	hgroup {
		z-index: 100;
		position: sticky;
		top: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: max-content;
		padding: 10px;
		margin: 24px auto 0px;
		text-shadow:
			0 0 1em white,
			0 0 1em white;

		border-radius: 35px;
		transition: background-color 0.3s;
		& > img {
			aspect-ratio: 1 / 1;
			height: 4em;
			vertical-align: middle;
		}
		& h1,
		& h2 {
			text-align: right;
			padding: 0px;
			margin: 0px;
		}
		&.sticky {
			text-shadow: none;
			background-color: hsl(0, 0%, 97%);
			/* border-style: solid; */
			/* border-width: 2px; */
		}
		& > :first-child {
			margin: auto 0px;
			margin-right: 0.4em;
		}
		& > :last-child {
			margin: auto 0px;
			margin-left: 0.4em;
		}
	}

	header {
		position: fixed;
		width: 100%;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: left;
	}
</style>
