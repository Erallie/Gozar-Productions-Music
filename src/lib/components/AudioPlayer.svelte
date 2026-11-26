<script lang="ts">
	import { onMount } from "svelte";
	import { type AudioPlayerProps } from "$lib/types/types";

	let {
		src,
		startTime,
		fullTime,
		player = $bindable(),
		nested,
	}: AudioPlayerProps = $props();

	let isPlaying = $state(false);
	let volume = $state(1);
	let clipTime = $state(0);
	let clipDuration = $state(0);
	let currentTime = $derived(Math.min(fullTime, startTime + clipTime));
	let previewEnd = $derived(Math.min(fullTime, startTime + clipDuration));

	function updateProgress() {
		clipTime = player!.currentTime;
	}

	function updateDuration() {
		const duration = player!.duration;
		clipDuration = Number.isFinite(duration) ? duration : 0;
	}

	function updatePlaying() {
		isPlaying = !!player && !player.paused && !player.ended;
	}

	function setVolume(event: Event) {
		const target = event.target as HTMLInputElement;
		volume = parseFloat(target.value);
		player!.volume = volume;
		localStorage.setItem("volume", volume.toString());
	}

	function playAudio(audio: HTMLAudioElement) {
		if (audio.ended || audio.currentTime >= audio.duration) {
			audio.currentTime = 0;
		}
		void audio.play().catch(() => updatePlaying());
	}

	function togglePlay() {
		const audio = player!;
		if (audio.paused) {
			playAudio(audio);
		} else {
			audio.pause();
		}
	}

	function seek(event: Event) {
		const target = event.target as HTMLInputElement;
		const seekTime = Math.max(startTime, Math.min(target.valueAsNumber, previewEnd));
		player!.currentTime = seekTime - startTime;
		updateProgress();
		target.valueAsNumber = currentTime;
	}

	onMount(() => {
		const savedVolume = localStorage.getItem("volume");

		if (savedVolume !== null) {
			const newVolume = Number.parseFloat(savedVolume);

			if (Number.isFinite(newVolume)) {
				volume = newVolume;
				player!.volume = volume;
			}
		}
	});

	$effect(() => {
		const audio = player;
		const source = src;
		if (!audio || audio.getAttribute("src") === source) return;

		const shouldResume = !audio.paused && !audio.ended;
		clipTime = 0;
		clipDuration = 0;
		audio.src = source;
		if (shouldResume) {
			playAudio(audio);
		}
	});

	function timeStamp(time: number) {
		const stamp = Math.floor(time);
		const seconds = stamp % 60;
		const minutes = Math.floor(stamp / 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
	function timeSliderStyle() {
		const start = fullTime > 0 ? (startTime / fullTime) * 100 : 0;
		const position = fullTime > 0 ? (currentTime / fullTime) * 100 : 0;
		const end = fullTime > 0 ? (previewEnd / fullTime) * 100 : 0;
		const playedOpacity = startTime === 0 ? 0.5 : 0.415;

		return `background: linear-gradient(
			to right,
			rgba(var(--foreground), 0.66) ${start}%,
			rgba(var(--foreground), ${playedOpacity}) ${start}% ${position}%,
			rgba(var(--foreground), 0.17) ${position}% ${end}%,
			rgba(var(--foreground), 0.66) ${end}%
		);`;
	}

	function volumeSliderStyle() {
		return `
            background: linear-gradient(
                to right,
            rgba(var(--foreground), 0.5) ${volume * 100}%,
            rgba(var(--foreground), 0.17) ${volume * 100}%
            );
        `;
	}

	let isMuted = $state(false);

	let oldVolume = $state(0);

	function toggleMute() {
		isMuted = !isMuted;
		if (isMuted) {
			oldVolume = player!.volume;
			volume = 0;
		} else {
			volume = oldVolume;
		}
		player!.volume = volume;
	}
</script>

<section
	class={nested ? "nested" : ""}
	style="--margin: {nested ? '0' : '10'}px">
	<audio
		bind:this={player}
		preload="metadata"
		controlslist="nodownload"
		onloadedmetadata={updateDuration}
		ondurationchange={updateDuration}
		ontimeupdate={updateProgress}
		onplay={updatePlaying}
		onpause={updatePlaying}
		onended={updatePlaying}></audio>
	<div class="controls">
		<button class="rounded audio-player" onclick={togglePlay}>
			<!-- <img
				src={isPlaying
					? "/audio-player/pause.svg"
					: "/audio-player/play.svg"}
				alt={isPlaying ? "Pause" : "Play"} /> -->
			{#if isPlaying}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100"
					height="100"
					viewBox="-20 -20 140 140">
					<g stroke="currentColor" stroke-width="20">
						<line x1="25" y1="0" x2="25" y2="100" />
						<line x1="75" y1="0" x2="75" y2="100" />
					</g>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100"
					height="100"
					viewBox="-20 -20 140 140">
					<polygon
						fill="currentColor"
						stroke-width="0"
						points="0,0 100,50 0,100" />
				</svg>
			{/if}
		</button>
		<span id="timestamp">
			<span>{timeStamp(currentTime)}</span> /
			<span>{timeStamp(fullTime)}</span>
		</span>
		<input
			type="range"
			id="time-slider"
			min="0"
			max={fullTime}
			step="any"
			value={currentTime}
			disabled={clipDuration === 0}
			aria-label="Playback position"
			oninput={seek}
			style={timeSliderStyle()} />
		<div id="volume-container" class="rounded">
			<input
				type="range"
				id="volume"
				min="0"
				max="1"
				step="0.01"
				bind:value={volume}
				oninput={setVolume}
				style={volumeSliderStyle()} />
			<button class="rounded audio-player" onclick={toggleMute}>
				{#if volume === 0}
					<svg
						fill="currentColor"
						height="256px"
						width="256px"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path
							d="M22.29,16.21l-2.79-2.79l-2.79,2.79l-1.41-1.41L18.09,12l-2.79-2.79l1.41-1.41l2.79,2.79l2.79-2.79l1.41,1.41L20.91,12 l2.79,2.79L22.29,16.21z M1,12v4h5l6,5V3L6,8H1V12" />
					</svg>
				{:else if volume >= 0.5}
					<svg
						fill="currentColor"
						height="256px"
						width="256px"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path
							d="M15,21v-2c3.86,0,7-3.14,7-7s-3.14-7-7-7V3c4.96,0,9,4.04,9,9S19.96,21,15,21z M15,17v-2c1.65,0,3-1.35,3-3s-1.35-3-3-3V7 c2.76,0,5,2.24,5,5S17.76,17,15,17z M1,12v4h5l6,5V3L6,8H1V12" />
					</svg>
				{:else}
					<svg
						fill="currentColor"
						height="256px"
						width="256px"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path
							d="M1,12V8h5l6-5v18l-6-5H1V12 M20,12c0-2.76-2.24-5-5-5v2c1.65,0,3,1.35,3,3s-1.35,3-3,3v2C17.76,17,20,14.76,20,12z" />
					</svg>
				{/if}
				<!-- <img
					src={volume === 0
						? "/audio-player/volume/muted.svg"
						: volume >= 0.5
							? "/audio-player/volume/volume-loud.svg"
							: "/audio-player/volume/volume-quiet.svg"}
					alt="Volume" /> -->
			</button>
		</div>
	</div>
</section>

<style>
	section {
		margin: var(--margin) auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* border-radius: 8px; */
		/* box-shadow: 0 2px 10px rgba(var(--foreground), 0.1); */
		&.nested {
			background: none;
			backdrop-filter: none;
		}
	}

	.controls {
		display: flex;
		align-items: center;
		width: 350px;
		/* margin-top: var(--half-margin); */
	}

	button {
		color: rgb(var(--foreground));
		flex-grow: 0;
		flex-shrink: 0;
		width: 2.4em;
		height: 2.4em;
		background-color: rgba(var(--foreground), 0);
		border: none;
		padding: 0px;
		cursor: pointer;
		margin: 0px;
		padding: 0.5em;
		transition: background-color 0.3s;

		& > svg {
			height: 100%;
			width: 100%;
			aspect-ratio: 1 / 1;
			vertical-align: middle;
		}
		&:hover {
			background-color: rgba(var(--foreground), 0.2);
		}
	}

	/* button:hover > img {
        height: 100%;
        margin: 0px;
        /* background-color: #0056b3;
    } */

	input[type="range"] {
		appearance: none;
		margin: auto var(--half-margin);
		-webkit-appearance: none; /* Override default CSS styles */
		width: 100%; /* Full-width */
		height: 8px; /* Height of the track */
		border-radius: 5px; /* Rounded corners */
		background: lightgray; /* Default background */
		outline: none; /* Remove outline */
		margin: auto var(--half-margin);
		&::-webkit-slider-thumb {
			-webkit-appearance: none; /* Override default styles */
			appearance: none; /* Override default styles */
			width: 20px; /* Width of the thumb */
			height: 20px; /* Height of the thumb */
			border-radius: 50%; /* Rounded thumb */
			background: rgb(var(--accent)); /* Color of the thumb */
			cursor: pointer; /* Pointer cursor on hover */
			transition: background 0.2s;
			box-shadow: none;
		}
		&::-moz-range-thumb {
			width: 20px; /* Width of the thumb */
			height: 20px; /* Height of the thumb */
			border-radius: 50%; /* Rounded thumb */
			background: rgb(var(--accent)); /* Color of the thumb */
			cursor: pointer; /* Pointer cursor on hover */
			transition: background 0.2s;
		}
		&::-webkit-slider-thumb:hover {
			background: hsl(240, 75%, 70%);
		}
		&::-moz-range-thumb:hover {
			background: hsl(240, 75%, 70%);
		}
	}

	#timestamp {
		/* white-space: nowrap; */
		text-align: center;
		display: flex;
		flex-grow: 0;
		flex-shrink: 0;
		& > span {
			width: 2.4em;
			flex-shrink: 0;
			flex-grow: 0;
			text-align: center;
		}
	}

	#volume {
		flex-grow: 1;
		width: 100px;
		max-width: 0px;
		margin: auto 0px;
		transition:
			max-width 0.4s,
			margin 0.4s;
	}

	#volume-container {
		display: flex;
		flex-shrink: 0;
		&:hover {
			background-color: rgba(var(--foreground), 0.1);
			& #volume {
				max-width: 100px;
				margin: auto var(--half-margin);
				transition:
					max-width 0.4s,
					margin 0.4s;
			}
		}
		&:not(:hover) #volume {
			&::-webkit-slider-thumb {
				background: rgb(var(--accent), 0);
				/* width: 0px; */
				transition: background 0.2s;
			}
			&::-moz-range-thumb {
				background: rgb(var(--accent), 0);
				/* width: 0px; */
				transition: background 0.2s;
			}
		}
	}

	#time-slider {
		flex-grow: 0;
	}
	@media (max-width: 480px) {
		/* Styles for mobile devices */
		#volume-container:hover #volume {
			width: calc(var(--margins) * 4);
		}
		.controls {
			max-width: 100%;
		}
	}
	/* select {
        margin-bottom: var(--half-margin);
    } */
</style>
