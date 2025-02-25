<script>
    import InitialBox from "$lib/components/InitialBox.svelte";
    import Listen from "$lib/components/Listen.svelte";
    import { onMount } from "svelte";
    import AudioPlayer from "$lib/components/AudioPlayer.svelte";

    onMount(() => {
        document.documentElement.style.setProperty(
            "--background-image",
            'url("/releases/in-the-darkness/background.png")',
        );
    });
</script>

<InitialBox
    imageSource="/releases/in-the-darkness/cover.png"
    imageAlt="For Sam"
>
    <h1>In the Darkness</h1>
    <p>
        "In the Darkness" is a song about hope enduring through the hardest of
        times. Written in the style of musical theater and film, this ballad
        hopes to encourage people who are in the midst of a dark season in their
        life.
    </p>
</InitialBox>
<AudioPlayer
    src="/releases/in-the-darkness/music.mp3"
    startTime={15}
    endTime={45}
/>
<Listen
    spotify="https://open.spotify.com/album/7fJfWpRIb3ZuLUBmuTN7zW?si=0_8JKnxiTCCbNo8h93Ha5A"
    appleMusic="https://music.apple.com/us/album/in-the-darkness-single/1652446209"
    youtube="https://youtu.be/hcz72F3lb2g"
    youtubeMusic="https://music.youtube.com/watch?v=v_NDgytTgkk&feature=share"
    pandora="https://pandora.app.link/vZ51YdwNEub"
    amazonMusic="https://music.amazon.com/albums/B0BL6QLYBZ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_X8XvWddFr4S2OCeIuQwcPzyjo&trackAsin=B0BL71BGT4"
/>
