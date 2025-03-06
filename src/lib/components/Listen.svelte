<script lang="ts">
	import ListenButton from "./ListenButton.svelte";
	const { spotify, appleMusic, youtube, youtubeMusic, pandora, amazonMusic } =
		$props();
</script>

<section id="listen">
	<h1>Listen On</h1>
	<div>
		<ListenButton
			link={spotify}
			imageSource="/social-branding/spotify.svg"
			imageAlt="Spotify" />
		<ListenButton
			link={appleMusic}
			imageSource="/social-branding/apple-music.svg"
			imageAlt="Apple Music" />
		<ListenButton
			link={youtube}
			imageSource="/social-branding/youtube.svg"
			imageAlt="YouTube" />
		<ListenButton
			link={youtubeMusic}
			imageSource="/social-branding/youtube-music.svg"
			imageAlt="YouTube Music" />
		<ListenButton
			link={pandora}
			imageSource="/social-branding/pandora.svg"
			imageAlt="Pandora" />
		<ListenButton
			link={amazonMusic}
			imageSource="/social-branding/amazon-music-logo.svg"
			imageAlt="Amazon Music" />
	</div>
</section>

<style>
	section {
		width: 660px;
		& > div {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 0px;
			padding: var(--half-margin);
		}
	}
	h1 {
		margin-top: var(--half-margin);
		text-align: center;
		margin-bottom: var(--half-margin);
	}

	@media (max-width: 480px) {
		/* Styles for mobile devices */
		section {
			width: calc(100% - var(--margins) * 2);
			& > div {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
</style>
