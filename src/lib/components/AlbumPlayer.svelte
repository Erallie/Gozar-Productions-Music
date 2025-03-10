<script lang="ts">
	import { type AlbumPlayerProps, type audioSource } from "$lib/types/types";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { onMount, onDestroy } from "svelte";

	let { audioSources, defaultSource }: AlbumPlayerProps = $props();

	let selectedSource: audioSource = $state(audioSources[defaultSource]); // Default to the first audio source
	// svelte-ignore non_reactive_update
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
	<div class="backdrop"></div>
	<div class="custom-dropdown">
		<button
			class="selected rounded"
			onclick={() => (isOpen = !isOpen)}
			aria-haspopup="true"
			aria-expanded={isOpen}>
			<span>
				Track {audioSources.findIndex(
					(source) => source.src === selectedSource.src
				) + 1}:
			</span>
			<span>{selectedSource.name}</span>
			<svg
				class="icon"
				fill="currentColor"
				width="8"
				height="4"
				viewBox="4 6 8 4">
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
						tabindex="0">
						<span class="track-index">{index + 1}:</span><span
							>{source.name}</span>
						<span></span>
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
		nested />
</div>

<style>
	.album-player {
		position: relative;
		width: min-content;
		margin: var(--half-margin) auto;
		text-align: center;
		padding: 0px;

		& > .backdrop {
			z-index: -1;
			border-radius: var(--rounded-radius);
			position: absolute;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 100%;
			background-color: rgba(
				var(--background),
				var(--background-opacity)
			);
			backdrop-filter: blur(50px);
		}
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
		padding: var(--half-margin) var(--margins);
		border: 2px solid /* rgb(var(--background)) */
			rgba(var(--background), 0);
		/* background-color: rgba(var(--background), var(--background-opacity)); */
		/* backdrop-filter: blur(50px); */
		cursor: pointer; /* Ensure the cursor indicates it's clickable */
		& > * {
			margin: auto 4px;
		}
		& > :first-child {
			margin-left: 0px;
		}
		& > :last-child {
			margin-right: 0px;
		}
	}

	.selected,
	.option {
		font-family: Montserrat;
		font-weight: 400;
		font-size: 1em;
		background-color: rgba(var(--accent), 0);
		transition:
			background-color 0.2s,
			color 0.2s;
		&:hover,
		&:active {
			background-color: rgba(var(--accent), 1);
			color: white;
		}
	}

	.options {
		position: absolute;
		background: rgba(var(--background), var(--background-opacity));
		backdrop-filter: blur(50px);
		border-radius: 25px;
		z-index: 1000;
		width: max-content;
		min-width: 100%;
		margin-top: 5px;
		overflow: hidden;
		border: 2px solid rgba(var(--background), 0);
	}

	.option {
		width: 100%;
		appearance: none;
		border: 2px solid rgba(var(--background), 0);
		padding: var(--half-margin) var(--margins);
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		& > * {
			margin: auto 0px;
		}
		& > :nth-child(2) {
			margin-left: 4px;
		}
		& > :first-child {
			margin-right: 4px;
		}
	}

	.track-index {
		flex-shrink: 0;
	}

	.icon {
		width: 16px; /* Adjust size as needed */
		height: 16px; /* Adjust size as needed */
		/* margin-left: 8px; */ /* Space between text and icon */
		vertical-align: middle;
		transform: translate(0px, -1px);
	}
	hr {
		border-color: rgb(var(--foreground));
		border-top-width: 1px;
		margin: 0px auto;
		width: 50%;
	}

	button {
		color: inherit;
	}
</style>
