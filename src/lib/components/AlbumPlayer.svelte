<script lang="ts">
    import { type AlbumPlayerProps, type audioSource } from "$lib/types/types";
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
    import { onMount, onDestroy } from "svelte";

    let { audioSources, defaultSource }: AlbumPlayerProps = $props();

    let selectedSource: audioSource = $state(audioSources[defaultSource]); // Default to the first audio source
    let audio: HTMLAudioElement;
    let isOpen = $state(false); // State to track dropdown visibility

    // Function to handle source change
    function changeSource(source: audioSource) {
        selectedSource = source;
        isOpen = false; // Close the dropdown after selection
        if (audio) {
            audio.src = selectedSource.src;
            // audio.play(); // Optionally play the new source immediately
        }
    }

    // Function to handle clicks outside the dropdown
    function handleClickOutside(event: MouseEvent) {
        const dropdown = document.querySelector(".custom-dropdown");
        if (dropdown && !dropdown.contains(event.target as Node)) {
            isOpen = false; // Close the dropdown
        }
    }

    onMount(() => {
        document.addEventListener("click", handleClickOutside); // Add event listener
    });

    onDestroy(() => {
        if (typeof document !== "undefined") {
            document.removeEventListener("click", handleClickOutside);
        }
    });
</script>

<div class="album-player rounded">
    <div class="custom-dropdown">
        <button
            class="selected rounded"
            onclick={() => (isOpen = !isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
        >
            <span
                >Track {audioSources.findIndex(
                    (source) => source.src === selectedSource.src,
                ) + 1}:</span
            ><span>{selectedSource.name}</span>
            <svg
                class="icon"
                fill="currentColor"
                width="8"
                height="4"
                viewBox="4 6 8 4"
            >
                <path d="M4 6l4 4 4-4H4z" />
            </svg>
        </button>
        {#if isOpen}
            <div class="options rounded" role="listbox">
                {#each audioSources as source, index}
                    <button
                        class="option rounded"
                        role="option"
                        aria-selected={source.src === selectedSource.src}
                        onclick={() => changeSource(source)}
                        tabindex="0"
                    >
                        <span class="track-index">{index + 1}:</span><span
                            >{source.name}</span
                        ><span></span>
                    </button>
                {/each}
            </div>
        {/if}
    </div>
    <hr />
    <AudioPlayer
        src={selectedSource.src}
        startTime={selectedSource.startTime}
        endTime={selectedSource.endTime}
        bind:player={audio}
        removeMargins
    />
</div>

<style>
    .album-player {
        width: min-content;
        margin: 10px auto;
        text-align: center;
        background-color: white;
        padding: 0px;
    }
    .custom-dropdown {
        position: relative;
        display: inline-block;
        /* width: max-content; */
        width: 100%;
        margin: 0px auto;
        cursor: pointer;
    }

    .selected {
        padding: 10px 20px;
        border: 2px solid white;
        background-color: white;
        cursor: pointer; /* Ensure the cursor indicates it's clickable */
    }

    .selected,
    .option {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1em;
        transition:
            background-color 0.2s,
            color 0.2s;
    }

    .options {
        position: absolute;
        background: white;
        z-index: 1000;
        width: max-content;
        min-width: 100%;
        margin-top: 5px;
        /* overflow: hidden; */
        /* border: 2px solid white; */
    }

    .option {
        width: 100%;
        background-color: white;
        appearance: none;
        border: 2px solid white;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .selected > * {
        margin: auto 4px;
    }

    .selected > :first-child {
        margin-left: 0px;
    }

    .selected > :last-child {
        margin-right: 0px;
    }

    .option > * {
        margin: auto 0px;
    }

    .option > :nth-child(2) {
        margin-left: 4px;
    }

    .option > :first-child {
        margin-right: 4px;
    }

    .track-index {
        flex-shrink: 0;
    }

    .option:hover,
    .selected:hover,
    .selected:active {
        background-color: rgb(151, 151, 255);
        color: white;
    }

    .icon {
        width: 16px; /* Adjust size as needed */
        height: 16px; /* Adjust size as needed */
        /* margin-left: 8px; */ /* Space between text and icon */
        vertical-align: middle;
        transform: translate(0px, -1px);
    }
    hr {
        border-color: black;
        border-top-width: 1px;
        margin: 0px auto;
        width: 50%;
    }
</style>
