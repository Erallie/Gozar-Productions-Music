<script lang="ts">
	import ListSectionWrapper from "./ListSectionWrapper.svelte";
	import type { ExpandedSectionProps } from "$lib/types/types";
	import { onMount, onDestroy } from "svelte";

	let {
		title,
		ordered,
		children,
		shouldOpen = $bindable(),
	}: ExpandedSectionProps = $props();

	let element: HTMLElement;

	let isMaxWidth = $state(false);

	let resizeObserver: ResizeObserver;

	function onHover() {
		shouldOpen = false;
	}

	const handleResize = (entries: ResizeObserverEntry[]) => {
		for (const entry of entries) {
			if (entry.target === element) {
				const parentElement = element.parentElement;
				if (parentElement) {
					// Get the computed style of the parent element
					// const parentComputedStyle = getComputedStyle(parentElement);
					// Calculate the maximum width based on the parent's width
					// const parentWidth = parseFloat(parentComputedStyle.width);
					const parentWidth = parentElement.clientWidth;
					const maxWidth = parentWidth - 100; // Adjust based on your needs
					isMaxWidth = element.offsetWidth >= maxWidth - 1;
				}
			}
		}
	};
	onMount(() => {
		if (element) {
			resizeObserver = new ResizeObserver(handleResize);
			resizeObserver.observe(element);
		}
	});

	onDestroy(() => {
		if (resizeObserver) {
			resizeObserver.disconnect();
		}
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
	bind:this={element}
	class="expandable-section {isMaxWidth ? '' : 'not-max'} {shouldOpen
		? 'clicked'
		: ''}"
	onmouseenter={onHover}
	id={title.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}
>
	<h1>{title}</h1>
	{@render children()}
</section>

<style>
	section.expandable-section {
		z-index: 10;
		max-width: var(--margins);
		text-wrap-mode: nowrap;
		background-color: hsl(0, 0%, 90%);
		/* width: 660px; */
		overflow-x: clip;
		transition: max-width 1s;
		margin: 0px;
		&:hover,
		&.clicked {
			max-width: calc(100% - var(--margins) * 3);
		}
	}
	@media (max-width: 480px) {
		/* Styles for mobile devices */
		section.expandable-section {
			text-wrap-mode: wrap;
			&,
			&:hover,
			&.clicked {
				max-width: 100%;
				width: 100%;
			}
			&:nth-child(2) {
				margin-bottom: var(--half-margin);
			}
			&:last-child {
				margin-top: var(--half-margin);
			}
		}
	}
</style>
