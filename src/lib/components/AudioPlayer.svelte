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

    function timeStamp() {
        const currentStamp = Math.floor(currentTime);
        const currentSeconds = currentStamp % 60;
        const currentMinutes = Math.floor(currentStamp / 60);

        const maxStamp = Math.floor(duration);
        const maxSeconds = maxStamp % 60;
        const maxMinutes = Math.floor(maxStamp / 60);

        return `${currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds} / ${maxMinutes}:${maxSeconds < 10 ? `0${maxSeconds}` : maxSeconds}`;
    }
    function timeSliderStyle() {
        function timePoint(point: number) {
            return `${(point / duration) * 100}`;
        }
        const middleStyle = `
            hsl(0, 0%, 83%) ${timePoint(currentTime)}%
            `;
        let startingStyle: string;
        if (startTime !== 0) {
            startingStyle = `background: linear-gradient(
                to right,
                hsl(0, 0%, 34%) ${timePoint(startTime)}%,
                hsl(0, 0%, 58.5%) ${timePoint(startTime)}%,
                hsl(0, 0%, 58.5%) ${timePoint(currentTime)}%,
            `;
        } else {
            startingStyle = `background: linear-gradient(
                to right,
                hsl(0, 0%, 50%) ${timePoint(currentTime)}%,
            `;
        }
        let endingStyle: string;
        if (endTime <= duration) {
            endingStyle = `,
                hsl(0, 0%, 83%) ${timePoint(endTime)}%,
                hsl(0, 0%, 34%) ${timePoint(endTime)}%
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
            hsl(0, 0%, 50%) ${volume * 100}%,
            hsl(0, 0%, 83%) ${volume * 100}%
            );
        `;
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
        <span id="timestamp">{timeStamp()}</span><input
            type="range"
            id="time-slider"
            min="0"
            max={duration}
            step="0.1"
            bind:value={currentTime}
            oninput={seek}
            style={timeSliderStyle()}
        />
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
        /* margin-top: 10px; */
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

    #timestamp {
        white-space: nowrap;
    }

    #volume {
        margin-left: 10px;
    }

    input[type="range"] {
        appearance: none;
        -webkit-appearance: none; /* Override default CSS styles */
        width: 100%; /* Full-width */
        height: 8px; /* Height of the track */
        border-radius: 5px; /* Rounded corners */
        background: lightgray; /* Default background */
        outline: none; /* Remove outline */
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default styles */
        appearance: none; /* Override default styles */
        width: 20px; /* Width of the thumb */
        height: 20px; /* Height of the thumb */
        border-radius: 50%; /* Rounded thumb */
        background: rgb(151, 151, 255); /* Color of the thumb */
        cursor: pointer; /* Pointer cursor on hover */
    }

    input[type="range"]::-moz-range-thumb {
        width: 20px; /* Width of the thumb */
        height: 20px; /* Height of the thumb */
        border-radius: 50%; /* Rounded thumb */
        background: rgb(151, 151, 255); /* Color of the thumb */
        cursor: pointer; /* Pointer cursor on hover */
    }

    /* select {
        margin-bottom: 10px;
    } */
</style>
