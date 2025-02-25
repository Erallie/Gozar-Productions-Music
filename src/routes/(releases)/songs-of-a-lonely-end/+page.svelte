<script lang="ts">
    import InitialBox from "$lib/components/InitialBox.svelte";
    import Listen from "$lib/components/Listen.svelte";
    import { onMount } from "svelte";
    import { setBackground } from "$lib/scripts/set-background";
    import { type audioSource } from "$lib/types/types";
    import AlbumAudioPlayer from "$lib/components/AlbumAudioPlayer.svelte";

    onMount(() => {
        setBackground("/releases/songs-of-a-lonely-end/background.png");
    });

    // Define the audio sources
    const audioSources: audioSource[] = [
        {
            name: "Adventure Awaits",
            src: "/releases/songs-of-a-lonely-end/music/1-adventure-awaits.mp3",
            startTime: 0,
            endTime: 30,
        },
        {
            name: "The Archmage",
            src: "/releases/songs-of-a-lonely-end/music/2-the-archmage.mp3",
            startTime: 30,
            endTime: 60,
        },
        {
            name: "The Mystery of the Nexus",
            src: "/releases/songs-of-a-lonely-end/music/3-the-mystery-of-the-nexus.mp3",
            startTime: 0,
            endTime: 60,
        },
        {
            name: "The Rise of Tiamat",
            src: "/releases/songs-of-a-lonely-end/music/4-the-rise-of-tiamat.mp3",
            startTime: 0,
            endTime: 60,
        },
        {
            name: "Pandemonium",
            src: "/releases/songs-of-a-lonely-end/music/5-pandemonium.mp3",
            startTime: 16.5,
            endTime: 60,
        },
        {
            name: "An Answered Prayer",
            src: "/releases/songs-of-a-lonely-end/music/6-an-answered-prayer.mp3",
            startTime: 30,
            endTime: 60,
        },
    ];
</script>

<InitialBox
    imageSource="/releases/songs-of-a-lonely-end/cover.png"
    imageAlt="Songs of a Lonely End"
>
    <h1>Songs of a Lonely End</h1>
    <p>
        <em>Songs of a Lonely End</em> is a collection of pieces written for a lore-heavy
        Minecraft server. It follows the journey of the Grand Archmage Varnius as
        he inadvertently nearly destroys the world, and banishes himself to another
        dimension in an attempt to save the home he loves so dearly.
    </p>
</InitialBox>
<AlbumAudioPlayer {audioSources} />
<Listen
    spotify="https://open.spotify.com/album/0FMiavhfR8urUExuGSKAfB?si=rFNuy3kwTjS4k5zreGQgzg"
    appleMusic="https://music.apple.com/us/album/songs-of-a-lonely-end-ep/1632944405"
    youtube="https://youtube.com/playlist?list=OLAK5uy_nqpeOBpRJx-txxeFXPUkBB_BM919dReTM"
    youtubeMusic="https://music.youtube.com/playlist?list=OLAK5uy_m2BMnRPOL2c5q6pdHBtaZ5xn4Z19SrQms&feature=share"
    pandora="https://pandora.app.link/Vep10501hrb"
    amazonMusic="https://music.amazon.com/albums/B0B5HS5HDS?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_BIdzrKplXfA0aeQenIUh6Ux6e"
/>
