<script lang="ts">
	import ListSectionWrapper from "./ListSectionWrapper.svelte";
	import type { ExpandedSectionProps } from "$lib/types/types";
	import { onMount, onDestroy } from "svelte";

	let { title, ordered, children }: ExpandedSectionProps = $props();

	let section: HTMLElement | null = $state(null);

	let isMaxWidth = $state(false);

	let resizeObserver: ResizeObserver;

	const handleResize = (entries: ResizeObserverEntry[]) => {
		for (const entry of entries) {
			if (entry.target === section) {
				const parentElement = section.parentElement;
				if (parentElement) {
					// Get the computed style of the parent element
					// const parentComputedStyle = getComputedStyle(parentElement);
					// Calculate the maximum width based on the parent's width
					// const parentWidth = parseFloat(parentComputedStyle.width);
					const parentWidth = parentElement.clientWidth;
					const maxWidth = parentWidth - 100; // Adjust based on your needs
					console.log(maxWidth);
					isMaxWidth = section.offsetWidth >= maxWidth - 1;
				}
			}
		}
	};
	onMount(() => {
		if (section) {
			resizeObserver = new ResizeObserver(handleResize);
			resizeObserver.observe(section);
		}
	});

	onDestroy(() => {
		if (resizeObserver) {
			resizeObserver.disconnect();
		}
	});
</script>

<section
	bind:this={section}
	class="expandable-section {isMaxWidth ? '' : 'not-max'}"
	id={title.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}
>
	<h1>{title}</h1>
	<ListSectionWrapper {ordered}>{@render children()}</ListSectionWrapper>
</section>

<style>
	section.expandable-section {
		z-index: 10;
		max-width: 20px;
		text-wrap-mode: nowrap;
		background-color: hsl(0, 0%, 90%);
		/* width: 660px; */
		overflow-x: clip;
		transition: max-width 1s;
		margin: 0px;
		&:hover {
			max-width: calc(100% - 60px);
		}
	}
</style>
