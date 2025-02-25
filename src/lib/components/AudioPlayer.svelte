<script lang="ts">
    import { onMount } from "svelte";
    import Cookies from "js-cookie";

    let { src, startTime, endTime } = $props();

    onMount(() => {
        const audioPlayer = document.getElementById(
            "audio-player",
        ) as HTMLAudioElement;
        audioPlayer.volume = Cookies.get("volume");

        // Define the start and end time for the playback window (in seconds)
        // const startTime: number = 30; // Start at 30 seconds
        // const endTime: number = 60; // End at 60 seconds

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
</script>

<audio id="audio-player" controls controlslist="nodownload">
    <source {src} type="audio/mpeg" />
</audio>

<style>
    audio {
        margin: 10px auto;
    }
</style>
