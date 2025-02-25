<script lang="ts">
    import { onMount } from "svelte";
    import Cookies from "js-cookie";

    let { src, startTime, endTime } = $props();

    onMount(() => {
        const audioPlayer = document.getElementById(
            "audio-player",
        ) as HTMLAudioElement;
        audioPlayer.volume = Cookies.get("volume");

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
            audioPlayer.currentTime = startTime;
            if (isPlaying) {
                playAudio();
            } else {
                pauseAudio();
            }
        }
    });
</script>

<audio id="audio-player" controls controlslist="nodownload">
    <source {src} type="audio/mpeg" />
</audio>

<style>
    audio {
        margin: 10px auto;
    }
</style>
