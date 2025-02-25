<script lang="ts">
    import { onMount } from "svelte";
    import Cookies from "js-cookie";

    let { src, startTime, endTime } = $props();

    let audioPlayer: HTMLAudioElement;
    let isPlaying = $state(false);
    let volume = $state(1); // Default volume

    let currentTime = $state(startTime); // Current playback time
    let duration = $state(0); // Total duration of the audio

    let oldSrc = $state(src);

    function updateProgress() {
        currentTime = audioPlayer.currentTime;
        duration = audioPlayer.duration || 0; // Handle duration being NaN if audio is not loaded
    }

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

    function seek(event: Event) {
        const target = event.target as HTMLInputElement;
        const seekTime = parseFloat(target.value);
        if (seekTime > endTime) {
            currentTime = endTime;
        } else if (seekTime < startTime) {
            currentTime = startTime;
        } else {
            currentTime = seekTime;
        }
        audioPlayer.currentTime = currentTime;
    }

    onMount(() => {
        audioPlayer = document.getElementById(
            "audio-player",
        ) as HTMLAudioElement;
        volume = Cookies.get("volume");
        audioPlayer.volume = volume;
        audioPlayer.currentTime = startTime;

        audioPlayer.addEventListener("timeupdate", () => {
            updateProgress();
            if (audioPlayer.currentTime > endTime && !audioPlayer.paused) {
                pauseAudio(); // Pause the audio
            }
        });
    });

    $effect(() => {
        if (oldSrc != src) {
            audioPlayer.currentTime = startTime;
            if (isPlaying) {
                playAudio();
            } else {
                pauseAudio();
            }
            oldSrc = src;
        }
    });

    function timeStamp(time: number) {
        const stamp = Math.floor(time);
        const seconds = stamp % 60;
        const minutes = Math.floor(stamp / 60);

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    function timeSliderStyle() {
        function timePoint(point: number) {
            return `${(point / duration) * 100}`;
        }
        const middleStyle = `
            rgba(0, 0, 0, 0.17) ${timePoint(currentTime)}%
            `;
        let startingStyle: string;
        if (startTime !== 0) {
            startingStyle = `background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.66) ${timePoint(startTime)}%,
                rgba(0, 0, 0, 0.415) ${timePoint(startTime)}%,
                rgba(0, 0, 0, 0.415) ${timePoint(currentTime)}%,
            `;
        } else {
            startingStyle = `background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.5) ${timePoint(currentTime)}%,
            `;
        }
        let endingStyle: string;
        if (endTime <= duration) {
            endingStyle = `,
                rgba(0, 0, 0, 0.17) ${timePoint(endTime)}%,
                rgba(0, 0, 0, 0.66) ${timePoint(endTime)}%
                );
            `;
        } else {
            endingStyle = ");";
        }
        return startingStyle + middleStyle + endingStyle;
    }

    function volumeSliderStyle() {
        return `
            background: linear-gradient(
                to right,
            rgba(0, 0, 0, 0.5) ${volume * 100}%,
            rgba(0, 0, 0, 0.17) ${volume * 100}%
            );
        `;
    }

    let isMuted = $state(false);

    let oldVolume = $state(0);

    function toggleMute() {
        isMuted = !isMuted;
        if (isMuted) {
            oldVolume = audioPlayer.volume;
            volume = 0;
        } else {
            volume = oldVolume;
        }
        audioPlayer.volume = volume;
    }
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
        <span id="timestamp"
            ><span>{timeStamp(currentTime)}</span> /
            <span>{timeStamp(duration)}</span></span
        ><input
            type="range"
            id="time-slider"
            min="0"
            max={duration}
            step="0.1"
            bind:value={currentTime}
            oninput={seek}
            style={timeSliderStyle()}
        />
        <div id="volume-container">
            <input
                type="range"
                id="volume"
                min="0"
                max="1"
                step="0.01"
                bind:value={volume}
                oninput={setVolume}
                style={volumeSliderStyle()}
            />
            <button onclick={toggleMute}>
                <img
                    src={volume === 0
                        ? "/audio-player/volume/muted.svg"
                        : volume >= 0.5
                          ? "/audio-player/volume/volume-loud.svg"
                          : "/audio-player/volume/volume-quiet.svg"}
                    alt="Volume"
                />
            </button>
        </div>
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
        background-color: white;
        padding: 20px;
        /* border-radius: 8px; */
        /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
    }

    .controls {
        display: flex;
        align-items: center;
        width: 350px;
        /* margin-top: 10px; */
    }

    button {
        flex-grow: 0;
        flex-shrink: 0;
        height: 2.4em;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        border-radius: 20px;
        padding: 0px;
        cursor: pointer;
        margin: 0px;
        padding: 0.5em;
        transition: background-color 0.3s;
    }
    button > img {
        height: 100%;
        aspect-ratio: 1 / 1;
        vertical-align: middle;
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    /* button:hover > img {
        height: 100%;
        margin: 0px;
        /* background-color: #0056b3;
    } */

    input[type="range"] {
        appearance: none;
        margin: auto 10px;
        -webkit-appearance: none; /* Override default CSS styles */
        width: 100%; /* Full-width */
        height: 8px; /* Height of the track */
        border-radius: 5px; /* Rounded corners */
        background: lightgray; /* Default background */
        outline: none; /* Remove outline */
        margin: auto 10px;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default styles */
        appearance: none; /* Override default styles */
        width: 20px; /* Width of the thumb */
        height: 20px; /* Height of the thumb */
        border-radius: 50%; /* Rounded thumb */
        background: rgb(151, 151, 255); /* Color of the thumb */
        cursor: pointer; /* Pointer cursor on hover */
        transition: background 0.2s;
    }

    input[type="range"]::-moz-range-thumb {
        width: 20px; /* Width of the thumb */
        height: 20px; /* Height of the thumb */
        border-radius: 50%; /* Rounded thumb */
        background: rgb(151, 151, 255); /* Color of the thumb */
        cursor: pointer; /* Pointer cursor on hover */
        transition: background 0.2s;
    }

    #timestamp {
        /* white-space: nowrap; */
        text-align: center;
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
    }

    #timestamp > span {
        width: 2.4em;
        flex-shrink: 0;
        flex-grow: 0;
        text-align: center;
    }

    #volume-container {
        display: flex;
        flex-shrink: 0;
        border-radius: 20px;
    }

    #volume-container:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    #volume {
        flex-grow: 1;
        width: 0px;
        margin: auto 0px;
        transition:
            width 0.4s,
            margin 0.4s;
    }

    #volume-container:hover #volume {
        width: 100px;
        margin: auto 10px;
        transition:
            width 0.4s,
            margin 0.4s;
    }

    #volume-container:not(:hover) #volume::-webkit-slider-thumb {
        background: rgb(151, 151, 255, 0);
        /* width: 0px; */
        transition: background 0.2s;
    }
    #volume-container:not(:hover) #volume::-moz-range-thumb {
        background: rgb(151, 151, 255, 0);
        /* width: 0px; */
        transition: background 0.2s;
    }

    #time-slider {
        flex-grow: 0;
    }

    /* select {
        margin-bottom: 10px;
    } */
</style>
