<script lang="ts">
	import Cookies from "js-cookie";
	import { onMount } from "svelte";

	let { isDarkMode = $bindable(), addedClass } = $props();

	const updateTheme = (event: MediaQueryListEvent) => {
		isDarkMode = event.matches;
	};

	onMount(() => {
		const isChecked = Cookies.get("isDarkMode");
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		switch (isChecked) {
			case "false":
				isDarkMode = false;
				break;
			case "true":
				isDarkMode = true;
				break;
			default:
				isDarkMode = mediaQuery.matches;
		}

		// Listen for changes
		mediaQuery.addEventListener("change", updateTheme);

		// Cleanup listener on component destroy
		return () => {
			mediaQuery.removeEventListener("change", updateTheme);
		};
	});

	function saveDarkMode(ev: Event) {
		const isChecked = (ev.target as HTMLInputElement).checked;
		Cookies.set("isDarkMode", isChecked.toString(), {
			expires: 7,
			sameSite: "Strict",
		});
	}
</script>

<label class={addedClass}>
	<input type="checkbox" bind:checked={isDarkMode} onchange={saveDarkMode} />
	<span class="toggle-thumb"> <div class="backdrop"></div></span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="10 10 80 80"
		width="100"
		height="100">
		<defs>
			<mask id="moonShadow-{addedClass}">
				<rect x="0" y="0" width="100" height="100" fill="white" />
				<circle cx="70" cy="30" r="40" fill="black" />
			</mask>
		</defs>

		<circle
			cx="50"
			cy="50"
			r="40"
			fill="currentColor"
			stroke="0"
			mask="url(#moonShadow-{addedClass})" />
	</svg>
	<svg
		width="100px"
		height="100px"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg">
		<circle cx="50" cy="50" r="20" fill="currentColor" stroke-width="0" />
		<g stroke-width="5" stroke="currentColor">
			<line x1="20" y1="50" x2="0" y2="50" />
			<line x1="80" y1="50" x2="100" y2="50" />
			<line x1="50" y1="20" x2="50" y2="0" />
			<line x1="50" y1="80" x2="50" y2="100" />
			<line x1="30" y1="30" x2="10" y2="10" />
			<line x1="70" y1="30" x2="90" y2="10" />
			<line x1="70" y1="70" x2="90" y2="90" />
			<line x1="30" y1="70" x2="10" y2="90" />
		</g>
	</svg>
</label>

<style>
	label {
		display: inline-block;
		&.nav-switcher {
			position: fixed;
			top: var(--margins);
			right: var(--margins);
		}
		&.mobile-switcher {
			display: none;
			position: absolute;
			top: calc(100% + var(--half-margin) / 2);
			right: 0;
		}
		width: 60px;
		height: 35px;
		/* position: relative */
		z-index: 200;
		color: rgb(var(--foreground));
		transition: color 1s;
		& > svg {
			/* z-index: 201; */
			display: flex; /* Hide the SVG by default */
			position: absolute; /* Position SVGs absolutely */
			top: 22.5%; /* Align to the top of the label */
			width: 55%; /* Full width */
			height: 55%; /* Full height */
			justify-content: space-between;
			cursor: pointer;
			&:first-of-type {
				left: 0px;
			}
			&:last-of-type {
				right: 0px;
			}
		}
	}

	.toggle-thumb {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 40px;
		/* border: 2px solid rgba(var(--background-2), var(--background-opacity)); */
		cursor: pointer;
		transition: border-color 1s;
		& > .backdrop {
			position: absolute;
			background-color: rgba(
				var(--background-2),
				var(--background-opacity)
			);
			backdrop-filter: blur(50px);
			border-radius: 40px;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transition: background-color 1s;
		}
		&:before {
			z-index: 1;
			content: "";
			height: calc(80% - 2px);
			width: 26px;
			position: absolute;
			left: calc(10% - 1px);
			border: none;
			bottom: calc(10% + 1px);
			border-radius: 50%;
			background-color: rgb(var(--foreground));
			transition: 0.4s all ease;
		}
	}
	input[type="checkbox"] {
		opacity: 0;
		width: 0;
		height: 0;
		&:checked + .toggle-thumb:before {
			transform: translateX(calc(100% - 2px));
		}
	}
	@media (max-width: 644px) {
		label {
			&.nav-switcher {
				display: none;
			}
			&.mobile-switcher {
				display: block;
			}
		}
	}
</style>
