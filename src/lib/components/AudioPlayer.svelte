<script lang="ts">
    import { onMount } from "svelte";
    import Cookies from "js-cookie";

    let { src, startTime, endTime } = $props();

    let audioPlayer: HTMLAudioElement;
    let isPlaying = $state(false);
    let volume = $state(1); // Default volume

    let oldSrc = $state(src);

    function setVolume(event: Event) {
        const target = event.target as HTMLInputElement;
        volume = parseFloat(target.value);
        audioPlayer.volume = volume;
        Cookies.set("volume", volume.toString(), { expires: 7 });
    }
    function playAudio() {
        if (
            audioPlayer.currentTime < startTime ||
            audioPlayer.currentTime >= endTime
        ) {
            audioPlayer.currentTime = startTime; // Seek to start time if before it
        }
        audioPlayer.play();
        isPlaying = true;
    }

    function pauseAudio() {
        audioPlayer.pause();
        isPlaying = false;
    }

    function togglePlay() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    onMount(() => {
        audioPlayer = document.getElementById(
            "audio-player",
        ) as HTMLAudioElement;
        volume = Cookies.get("volume");
        audioPlayer.volume = volume;

        audioPlayer.addEventListener("timeupdate", () => {
            if (audioPlayer.currentTime > endTime && !audioPlayer.paused) {
                audioPlayer.pause(); // Pause the audio
                audioPlayer.currentTime = startTime; // Seek back to the start time
                // audioPlayer.play(); // Optionally, start playing again
            }
        });

        // Optional: Start playback at the defined start time
        audioPlayer.addEventListener("play", () => {
            if (
                audioPlayer.currentTime < startTime ||
                audioPlayer.currentTime >= endTime
            ) {
                audioPlayer.currentTime = startTime; // Seek to start time if before it
            }
        });

        audioPlayer.addEventListener("volumechange", () => {
            // Set the cookie with the current volume
            Cookies.set("volume", audioPlayer.volume, { expires: 7 });
        });
    });

    $effect(() => {
        if (oldSrc != src) {
            oldSrc = src;
            audioPlayer.currentTime = startTime;
            if (isPlaying) {
                playAudio();
            } else {
                pauseAudio();
            }
        }
    });
</script>

<div class="audio-player">
    <audio id="audio-player" controlslist="nodownload">
        <source {src} type="audio/mpeg" />
    </audio>
    <div class="controls">
        <button onclick={togglePlay}
            ><img
                src={isPlaying
                    ? "/audio-player/pause.svg"
                    : "/audio-player/play.svg"}
                alt={isPlaying ? "Pause" : "Play"}
            />
            <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
            >
                {#if isPlaying}
                    <g stroke="currentColor" stroke-width="20">
                        <line x1="25" y1="0" x2="25" y2="100" />
                        <line x1="75" y1="0" x2="75" y2="100" />
                    </g>
                {:else}<g stroke="currentColor" stroke-width="20">
                        <line x1="25" y1="0" x2="25" y2="100" />
                        <line x1="75" y1="0" x2="75" y2="100" />
                    </g>
                {/if}
            </svg> -->
        </button>
        <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.01"
            bind:value={volume}
            oninput={setVolume}
        />
    </div>
</div>

<style>
    /* audio {
        margin: 10px auto;
    } */
    .audio-player {
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        padding: 20px;
        /* border-radius: 8px; */
        /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
    }

    .controls {
        display: flex;
        align-items: center;
        margin-top: 10px;
    }

    button {
        height: 2em;
        background-color: rgba(0, 0, 0, 0);
        /* color: white; */
        border: none;
        border-radius: 20px;
        padding: 0px;
        cursor: pointer;
        margin: 0;
        transition: background-color 0.3s;
    }
    button > img {
        height: 80%;
        aspect-ratio: 1 / 1;
        margin: 10% auto;
    }

    button:hover > img {
        height: 100%;
        margin: auto;
        /* background-color: #0056b3; */
    }

    input[type="range"] {
        margin-left: 10px;
    }

    /* select {
        margin-bottom: 10px;
    } */
</style>
