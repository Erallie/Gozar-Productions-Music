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
			addedClass="nav-button"
			invertBackground>{isHome ? "Back" : "Home"}</Button>
		<paypal-cart-button class="paypal-desktop" data-id="pp-view-cart"
		></paypal-cart-button>
		<script>
			cartPaypal.Cart({ id: "pp-view-cart" });
		</script>
	</nav>
</header>
<hgroup bind:this={hgroupElement} class={isSticky ? "sticky" : undefined}>
	<div>
		<h1>Gozar Productions</h1>
		<h2>Music</h2>
	</div>
	<img src={logo} alt="Gozar Productions Logo" />
	<a
		class="nav-back-link"
		href={isHome ? "https://gozarproductions.com" : "/"}
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="-10.25 -10 120.5 120">
			<g
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="10"
				fill="none">
				<polyline points="100,0 0,50 100,100" />
			</g>
		</svg>{isHome ? "Back" : "Home"}
	</a>
	<paypal-cart-button class="paypal-mobile" data-id="pp-view-cart"
	></paypal-cart-button>
	<script>
		cartPaypal.Cart({ id: "pp-view-cart" });
	</script>
</hgroup>

<style>
	hgroup {
		z-index: 100;
		position: sticky;
		top: var(--half-margin);
		display: flex;
		align-items: center;
		justify-content: center;
		width: max-content;
		padding: var(--half-margin);
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
		justify-content: space-between;
	}
	paypal-cart-button {
		&.paypal-desktop {
			margin: var(--margins);
		}
		&.paypal-mobile {
			display: none;
			position: absolute;
			right: 0;
			top: calc(100% + var(--half-margin) / 2);
		}
	}
	a.nav-back-link {
		font-weight: initial;
		display: none;
		color: black;
		background-color: hsl(0, 0%, 97%);
		border-radius: var(--rounded-radius);
		padding: var(--half-margin);
		position: absolute;
		top: calc(100% + var(--half-margin) / 2);
		left: 0;
		height: 1.4em;
		font-size: 1em;
		text-transform: uppercase;
		transition:
			background-color 0.2s,
			color 0.2s;
		line-height: 1.4em;
		& > svg {
			height: 80%;
			aspect-ratio: 1 / 1;
			width: auto;
			vertical-align: middle;
			transform: translate(0, -1.5px);
			margin-right: var(--half-margin);
		}
		&:hover {
			background-color: rgb(151, 151, 255);
			color: white;
			text-decoration: none;
		}
	}
	@media (max-width: 875px) {
		a.nav-back-link {
			display: block;
		}
	}
	@media (max-width: 723px) {
		paypal-cart-button {
			&.paypal-desktop {
				display: none;
			}
			&.paypal-mobile {
				display: initial;
			}
		}
	}
	@media (max-width: 480px) {
		hgroup {
			font-size: calc(3.2dvw - 0.008em);
			> a.nav-back-link {
				font-size: 1.4em;
			}
		}
	}
</style>
