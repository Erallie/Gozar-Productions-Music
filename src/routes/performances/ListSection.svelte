<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    let { title, children } = $props();

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

<li bind:this={li} class="rounded list-section">
    <div class="reset-wrapper">
        <h2>{title}</h2>
        <div
            bind:this={content}
            class="content rounded {expanded ? 'expanded' : ''}"
        >
            {@render children()}
        </div>
    </div>
</li>

<style>
    li {
        /* color: inherit; */
        background-color: rgba(0, 0, 0, 0.1);
        font-size: 1.5em;
        font-family: Montserrat;
        /* margin: 0px; */

        margin: 12px auto;
        padding: 10px;
        transition:
            background-color 0.2s,
            color 0.2s;
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

    li:hover:not(:has(*.expanded:hover)) {
        cursor: pointer;
    }

    .reset-wrapper {
        display: inline;
        font-size: 1rem;
    }

    .content.expanded {
        max-height: 440px;
        padding: 4px 20px;
        margin: 10px 0px 0px;
    }

    .content {
        max-height: 0px;
        margin: 0px;
        padding: 0px 20px;
        background-color: rgba(0, 0, 0, 0.2);
        overflow-y: auto;
        /* box-sizing: content-box; */
        transition:
            max-height 1s,
            padding-top 1s,
            padding-bottom 1s,
            margin-top 1s;
    }
    li:hover {
        background-color: rgb(151, 151, 255);
        color: white;
    }
    /* li:has(div.expanded) {
        background-color: rgb(151, 151, 255);
        color: white;
    } */
</style>
