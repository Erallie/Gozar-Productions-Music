<script lang="ts">
    import ListenButton from "./ListenButton.svelte";
    const { spotify, appleMusic, youtube, youtubeMusic, pandora, amazonMusic } =
        $props();
</script>

<div class="listen rounded">
    <h1>Listen On</h1>
    <div class="listen-grid">
        <ListenButton
            link={spotify}
            imageSource="/social-branding/spotify.svg"
            imageAlt="Spotify"
        />
        <ListenButton
            link={appleMusic}
            imageSource="/social-branding/apple-music.svg"
            imageAlt="Apple Music"
        />
        <ListenButton
            link={youtube}
            imageSource="/social-branding/youtube.svg"
            imageAlt="YouTube"
        />
        <ListenButton
            link={youtubeMusic}
            imageSource="/social-branding/youtube-music.svg"
            imageAlt="YouTube Music"
        />
        <ListenButton
            link={pandora}
            imageSource="/social-branding/pandora.svg"
            imageAlt="Pandora"
        />
        <ListenButton
            link={amazonMusic}
            imageSource="/social-branding/amazon-music-logo.svg"
            imageAlt="Amazon Music"
        />
    </div>
</div>

<style>
    .listen {
        width: min(660px, 80%);
        margin: 20px auto;
        padding: 20px;
        background-color: white;
        box-sizing: border-box;
    }
    .listen h1 {
        margin-top: 10px;
    }
    .listen-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0px;
        padding: 10px;
    }
    h1 {
        text-align: center;
        margin-bottom: 10px;
    }
</style>
