<script lang="ts">
	import type { SectionProps } from "$lib/types/types";
	import { onDestroy, onMount } from "svelte";

	let { title, children }: SectionProps = $props();

	let content: HTMLDivElement;
	let expanded = $state(false);

	let li: HTMLLIElement;

	function expand(event: MouseEvent) {
		if (content && !content.contains(event.target as Node)) {
			expanded = !expanded;
		}
	}
	onMount(() => {
		li.addEventListener("click", expand);
	});
	onDestroy(() => {
		if (li) {
			li.removeEventListener("click", expand);
		}
	});
</script>

<section
	id={title.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}
	class="remove-styles">
	<li bind:this={li} class="rounded list-section">
		<div class="reset-wrapper">
			<h2>{title}</h2>
			<div
				bind:this={content}
				class="content rounded {expanded ? 'expanded' : ''}">
				{@render children()}
			</div>
		</div>
	</li>
</section>

<style>
	li {
		/* color: inherit; */
		background-color: rgba(0, 0, 0, 0.1);
		font-size: 1.5em;
		font-family: Montserrat;
		/* margin: 0px; */

		margin: 12px auto;
		padding: var(--half-margin);
		transition:
			background-color 0.2s,
			color 0.2s;
		&:hover {
			background-color: rgb(151, 151, 255);
			color: white;
			&:not(:has(*.expanded:hover)) {
				cursor: pointer;
			}
		}
	}

	/* a {
        color: inherit;
        font-size: 1rem;
        cursor: default;
        display: block;
        background: none;
        border: none;
        margin: 12px auto;
        padding: 0px;
        height: min-content;
        box-sizing: border-box;
        text-decoration: inherit;
        &:hover {
            color: inherit;
            text-decoration: inherit;
        }
    } */

	h2 {
		display: inline;
	}

	.reset-wrapper {
		display: inline;
		font-size: 1rem;
	}

	.content {
		max-height: 0px;
		margin: 0px;
		padding: 0px var(--margins);
		background-color: rgba(0, 0, 0, 0.2);
		overflow-y: auto;
		/* box-sizing: content-box; */
		transition:
			max-height 1s,
			padding-top 1s,
			padding-bottom 1s,
			margin-top 1s;
	}
</style>
