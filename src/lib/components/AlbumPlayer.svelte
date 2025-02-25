<script lang="ts">
    import { type AlbumPlayerProps, type audioSource } from "$lib/types/types";
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";
    import { onMount } from "svelte";

    let { audioSources, defaultSource }: AlbumPlayerProps = $props();

    let selectedSource: audioSource = $state(audioSources[defaultSource]); // Default to the first audio source
    let audio: HTMLAudioElement;

    // Function to handle source change
    function changeSource(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedSource =
            audioSources.find((source) => source.src === target.value) ||
            audioSources[0];
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
    <select onchange={changeSource} value={audioSources[defaultSource].src}>
        {#each audioSources as source}
            <option value={source.src}>{source.name}</option>
        {/each}
    </select>
    <AudioPlayer
        src={selectedSource.src}
        startTime={selectedSource.startTime}
        endTime={selectedSource.endTime}
    />
</div>

<style>
    div {
        width: max-content;
        margin: auto;
    }
</style>
