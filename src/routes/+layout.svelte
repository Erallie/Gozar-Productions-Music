<script lang="ts">
	import { TextColor } from "$lib/types/types";
	import Header from "./Header.svelte";
	import { page } from "$app/state";
	import logo from "$lib/images/gozar-productions-logo.svg";
	import "../app.css";
	import { onDestroy, onMount } from "svelte";
	import Button from "./Button.svelte";
	import LightDarkSwitcher from "./LightDarkSwitcher.svelte";

	let isPerformancePage = $state(false);

	$effect(() => {
		isPerformancePage = page.url.pathname == "/performances";
	});

	let attendButton: HTMLAnchorElement | null = $state(null);
	let attendButtonWidth = $state(300);
	let noticeMinimized = $state(false);
	let performanceBanner: HTMLDivElement | null = $state(null);
	let widthMatching = $state(false);

	let resizeObserver: ResizeObserver;

	const handleResize = (entries: ResizeObserverEntry[]) => {
		for (const entry of entries) {
			if (entry.target === attendButton) {
				// Get the offsetWidth of the attendButton
				attendButtonWidth = attendButton.offsetWidth;
			} else if (entry.target === performanceBanner) {
				// Get the regular width of the performanceBanner
				const performanceBannerWidth = entry.contentRect.width;

				// widthMatching = performanceBannerWidth === attendButtonWidth;
				if (Math.abs(performanceBannerWidth - attendButtonWidth) <= 1)
					widthMatching = true;
				/* // Check if the performance banner width matches the attend button width
                if (performanceBannerWidth === attendButtonWidth) {
                    bannerClass = 'matching-width';
                } else {
                    bannerClass = '';
                } */
			}
		}
	};

	function minimizeNotice() {
		noticeMinimized = !noticeMinimized;
		if (!noticeMinimized) {
			widthMatching = false;
		}
	}

	onMount(() => {
		if (attendButton || performanceBanner) {
			resizeObserver = new ResizeObserver(handleResize);
		}
		if (attendButton) {
			resizeObserver.observe(attendButton);
		}
		if (performanceBanner) {
			resizeObserver.observe(performanceBanner);
		}
	});

	onDestroy(() => {
		if (resizeObserver) {
			resizeObserver.disconnect();
		}
	});

	let footerHeight = $state(0);

	$effect(() => {
		if (performanceBanner && !isPerformancePage) {
			footerHeight = performanceBanner.offsetHeight;
		}
	});

	let { children } = $props();
	let isDarkMode = $state(false);
</script>

<!-- <svelte:head>
	<script
		src="https://www.paypalobjects.com/ncp/cart/cart.js"
		data-merchant-id="75LK4PR9TCJ6Q"></script>
</svelte:head> -->

<div class="app {isDarkMode ? 'dark' : 'light'}">
	<img id="background-image" alt="Background" />
	<Header bind:isDarkMode />

	<main>
		{@render children()}
	</main>

	<div
		id="performance-banner"
		bind:this={performanceBanner}
		class="{noticeMinimized ? 'minimized' : ''} {widthMatching
			? 'width-matching'
			: ''}"
		style="--attend-button-width: {attendButtonWidth}px; {isPerformancePage
			? 'display: none'
			: ''}">
		<div>
			<span>
				<h2>Erika Gozar</h2>
				<span>has</span>
			</span>
			<span>
				<h2>live performances</h2>
				<span>in virtual reality</span>
			</span>
		</div>
		<Button
			bind:element={attendButton}
			link="/performances"
			newTab={false}
			color={TextColor.White}
			marginTopMultiplier={0.5}
			marginBottomMultiplier={0.5}
			marginLeftMultiplier={0.5}
			marginRightMultiplier={0.5}
			>{#if !noticeMinimized}Attend{:else}Attend Live{/if}</Button>
		<button aria-label="Minimize" onclick={minimizeNotice}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="100"
				height="100"
				viewBox="0 -10 100 100">
				<g stroke="currentColor" stroke-width="20">
					<line id="line-vertical" x1="0" y1="0" x2="100" y2="0" />
					<line id="line-horizontal" x1="0" y1="0" x2="100" y2="0" />
				</g>
			</svg></button>
	</div>

	<footer>
		<h1>
			<img src={logo} alt="Gozar Productions Logo" />Gozar Productions
		</h1>
		<div class="links">
			<a href="https://gozarproductions.com/privacy-policy">
				Privacy Policy
			</a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100"
				height="100"
				viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="10" fill="currentColor" />
			</svg>
			<a href="https://gozarproductions.com/disclaimer">Disclaimer</a>
		</div>
		<p>© 2025 Gozar Productions LLC. All Rights Reserved.</p>
		<div class="empty" style="--height: {footerHeight}px"></div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	.dark {
		/* --background: 99, 39, 39; */
		--background-opacity: 0.7;
		--background: 0, 0, 0;
		--accent: 93, 93, 162;
		--background-2: 12, 12, 12;
		--foreground: 255, 255, 255;
		color: rgb(var(--foreground));
	}
	.light {
		--background-opacity: 0.65;
		--background: 255, 255, 255;
		--accent: 151, 151, 255;
		--background-2: 255, 255, 255;
		--foreground: 0, 0, 0;
		color: rgb(var(--foreground));
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		/* max-width: 64rem; */
		/* margin: 0 auto; */
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: black;
		& img {
			aspect-ratio: 1 / 1;
			height: 4rem;
			display: block;
			margin: 12px auto;
		}
		&,
		& a,
		& p {
			color: white;
			font-weight: 300;
			text-align: center;
		}
		& h1 {
			font-size: 1.5rem;
			font-weight: 300;
			line-height: 1.1em;
		}

		& svg {
			aspect-ratio: 1 / 1;
			width: auto;
			height: 1em;
			vertical-align: middle;
		}
		& p {
			line-height: 1.2em;
		}
		& p,
		& a {
			font-size: 0.85rem;
			text-decoration: none;
		}
		& a:hover {
			text-decoration: underline;
		}
	}

	img#background-image {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	#performance-banner {
		z-index: 200;
		color: white;
		position: fixed;
		display: flex;
		bottom: 0;
		left: 0;
		width: 100%;
		height: min-content;
		max-width: 100%;
		background-color: rgba(119, 46, 46, 0.95);
		/* text-align: center; */
		justify-content: center;
		padding: var(--half-margin);
		/* & > :nth-child(2) {
            margin: auto 0px;
            background-color: black;
            text-decoration: underline;
        } */
		& > button {
			color: inherit;
			opacity: 0.7;
			background: none;
			margin: 0px;
			border: none;
			width: 2em;
			/* aspect-ratio: 128 / 48; */
			height: min-content;
			min-height: 0px;
			padding: 4px;
			position: absolute;
			top: 6px;
			left: 6px;
			transition: opacity 0.2s;
			& > svg {
				vertical-align: top;
				width: 90%;
				/* aspect-ratio: 140 / 40; */
				height: auto;
				/* vertical-align: center; */
			}
			&:hover {
				opacity: 1;
			}
		}
		& > :first-child {
			text-align: right;
			margin: auto var(--half-margin);
			height: min-content;
			overflow: hidden;
			transition: max-width 1s;
			flex-shrink: 10;
			text-wrap-mode: nowrap;
			& > * {
				display: block;
				& h2 {
					display: inline;
				}
				& > * {
					text-wrap-mode: nowrap;
				}
			}
		}
		& #line-vertical,
		& #line-horizontal {
			transition: transform 0.2s;
		}
		&.minimized {
			/* background-color: rgba(119, 46, 46, 0); */
			max-width: var(--attend-button-width);
			border-top-right-radius: var(--rounded-radius);
			& > :first-child {
				margin: auto 0px;
			}
			& #line-vertical {
				transform: rotate(90deg) translate(-10%, -50%);
			}
			& #line-horizontal {
				transform: translate(0px, 40%);
			}
		}
		&:not(.width-matching) {
			transition:
				max-width 1s,
				background-color 1s,
				border-top-right-radius 1s;
		}
		&.width-matching {
			transition: none;
		}
	}
	@media (max-width: 930px) {
		div.empty {
			height: var(--height);
		}
	}
	@media (max-width: 480px) {
		/* Styles for mobile devices */
		#performance-banner {
			width: calc(100% - var(--margin));
			/* max-width: calc(100% - var(--margin)); */
			flex-wrap: wrap;

			justify-content: right;
			& > :first-child {
				text-wrap: wrap;
				max-height: 90px;
				transition: max-height 1s;
			}
			&.minimized > :first-child {
				max-height: 0px;
			}
		}
	}
	@media (max-width: 320px) {
		#performance-banner {
			& > :first-child {
				max-height: 84px;
			}
			& > button {
				transition:
					top 1s,
					left 1s;
			}
			&.minimized > button {
				top: 2px;
				left: 2px;
			}
		}
	}
</style>
