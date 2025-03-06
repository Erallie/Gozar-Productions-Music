<script lang="ts">
	import {
		type ButtonProps,
		ButtonDirection,
		TextColor,
	} from "$lib/types/types";
	let {
		element = $bindable(),
		link,
		newTab,
		color,
		invertBackground,
		direction,
		customSVG,
		marginTopMultiplier,
		marginBottomMultiplier,
		marginLeftMultiplier,
		marginRightMultiplier,
		addedClass,
		children,
	}: ButtonProps = $props();

	if (direction === undefined) {
		direction = ButtonDirection.Right;
	}

	// svelte-ignore non_reactive_update
	let textColor: string;
	// svelte-ignore non_reactive_update
	let shadowColor: string;
	// svelte-ignore non_reactive_update
	let backgroundColor: string;
	// svelte-ignore non_reactive_update
	let backgroundOpacity: number;
	// svelte-ignore non_reactive_update
	let borderWidth: number;
	switch (color) {
		case TextColor.White:
			textColor = "255, 255, 255";
			shadowColor = "0, 0, 0";
			if (invertBackground) {
				backgroundColor = "0, 0, 0";
			}
			break;
		case TextColor.Black:
			textColor = "0, 0, 0";
			shadowColor = "255, 255, 255";
			if (invertBackground) {
				// backgroundColor = "255, 255, 255";
				backgroundColor = "247, 247, 247";
			}
			break;
	}

	if (!invertBackground) {
		backgroundColor = textColor;
		backgroundOpacity = 0;
		borderWidth = 2;
	} else {
		// backgroundOpacity = 0.7;
		backgroundOpacity = 1;
		borderWidth = 0;
	}

	// Function to determine if the link is absolute
	/* function isAbsoluteUrl(url: string) {
        return /^(http|https):\/\//.test(url) || url.startsWith("www");
    } */
</script>

<a
	bind:this={element}
	href={link}
	target={newTab ? "_blank" : undefined}
	style="text-decoration: none;
        --text-color: {textColor};
        --background-color: {backgroundColor};
        --background-opacity: {backgroundOpacity};
        --border-width: {borderWidth}px">
	<button
		class={addedClass}
		style="--margin-top-multiplier: {marginTopMultiplier !== undefined
			? `${marginTopMultiplier}`
			: '1'}; --margin-bottom-multiplier: {marginBottomMultiplier !==
		undefined
			? `${marginBottomMultiplier}`
			: '1'}; --margin-left-multiplier: {marginLeftMultiplier !==
		undefined
			? `${marginLeftMultiplier}`
			: '1'}; --margin-right-multiplier: {marginRightMultiplier !==
		undefined
			? `${marginRightMultiplier}`
			: '1'}">
		{#if !customSVG && direction == ButtonDirection.Left}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="200"
				height="60"
				viewBox="0 0 200 60">
				<g
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round">
					<line x1="2.5" y1="30" x2="197.5" y2="30" />
					<line x1="2.5" y1="30" x2="40" y2="2.5" />
					<line x1="2.5" y1="30" x2="40" y2="57.5" />
				</g>
			</svg>
		{/if}
		{@render children()}
		{#if !customSVG && direction == ButtonDirection.Right}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="200"
				height="60"
				viewBox="0 0 200 60">
				<g
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round">
					<line x1="2.5" y1="30" x2="197.5" y2="30 " />
					<line x1="197.5" y1="30" x2="160" y2="2.5" />
					<line x1="197.5" y1="30" x2="160" y2="57.5" />
				</g>
			</svg>
		{/if}
	</button>
</a>

<style>
	button {
		/* --text-color: 0, 0, 0; */
		display: inline-flex; /* Use flexbox for horizontal alignment */
		align-items: center; /* Center items vertically */
		font-family: Montserrat;
		color: rgb(var(--text-color));
		border-radius: 50px;
		padding: 16px 28px;
		border: var(--border-width) solid rgb(var(--text-color));
		background-color: rgba(
			var(--background-color),
			var(--background-opacity)
		);
		text-align: center;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		font-size: 0.95rem;
		margin: calc(var(--margins) * var(--margin-top-multiplier))
			calc(var(--margins) * var(--margin-right-multiplier))
			calc(var(--margins) * var(--margin-bottom-multiplier))
			calc(var(--margins) * var(--margin-left-multiplier));
		transition: background-color 0.3s;
		& > svg {
			width: auto;
			/* aspect-ratio: 200 / 60; */
			height: 0.8em;
			vertical-align: middle; /* This can be removed with flexbox */
			transform: translate(0, -1px);
			transition: height 0.3s;
			&:last-child {
				padding-left: 0.5em;
			}
			&:first-child {
				padding-right: 0.5em;
			}
		}
		&:hover {
			background-color: rgba(
				var(--background-color),
				min(calc(var(--background-opacity) + 0.15), 1)
			);
			& > svg {
				height: 1em;
			}
		}
	}
</style>
