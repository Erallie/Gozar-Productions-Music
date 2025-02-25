<script lang="ts">
    import { type AlbumPlayerProps, type audioSource } from "$lib/types/types";
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
    import { onMount } from "svelte";

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

    onMount(() => {
        audio = document.getElementById("audio-player") as HTMLAudioElement;
    });
</script>

<div>
    <div class="custom-dropdown">
        <button
            class="selected"
            onclick={() => (isOpen = !isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
        >
            Track {audioSources.findIndex(
                (source) => source.src === selectedSource.src,
            ) + 1}: {selectedSource.name}
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
                        class="option"
                        role="option"
                        aria-selected={source.src === selectedSource.src}
                        onclick={() => changeSource(source)}
                        tabindex="0"
                    >
                        Track {index + 1}: {source.name}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
    <AudioPlayer
        src={selectedSource.src}
        startTime={selectedSource.startTime}
        endTime={selectedSource.endTime}
    />
</div>

<style>
    div {
        width: min-content;
        margin: 0px auto;
        text-align: center;
    }
    .custom-dropdown {
        position: relative;
        display: inline-block;
        width: max-content;
        margin: 10px auto;
        text-align: center;
        cursor: pointer;
    }

    .selected {
        padding: 10px 20px;
        border: 2px solid white;
        background-color: white;
        border-radius: 40px;
        transition:
            background-color 0.2s,
            color 0.2s;
        cursor: pointer; /* Ensure the cursor indicates it's clickable */
    }

    .options {
        position: absolute;
        background: white;
        z-index: 1000;
        width: 100%;
        margin-top: 5px;
        overflow: hidden;
    }

    .selected,
    .option {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1em;
    }

    .option {
        width: 100%;
        background-color: white;
        appearance: none;
        border-width: 0px;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer; /* Ensure the cursor indicates it's clickable */
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
        margin-left: 8px; /* Space between text and icon */
        vertical-align: middle;
        transform: translate(0px, -1px);
    }
</style>
