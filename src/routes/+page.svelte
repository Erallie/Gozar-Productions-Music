<script>
    import InitialBox from "$lib/components/InitialBox.svelte";
    import Release from "$lib/components/Release.svelte";
    import Releases from "$lib/components/Releases.svelte";
    import Listen from "$lib/components/Listen.svelte";
    import { onMount } from "svelte";
    import { setBackground } from "$lib/scripts/set-background";

    onMount(() => {
        setBackground("/erika-gozar-background.png");
    });
</script>

<InitialBox imageSource="/erika-gozar.png" imageAlt="Erika Gozar">
    <h1>Erika Gozar</h1>
    <p>
        Erika Gozar has written music since she was 8 or 9 with simply an ear
        for music and no formal training in composition. Under the musical
        guidance of John Massaro and the vocal instruction of Gail Dubinbaum,
        Erika currently writes pieces for orchestra and voice in the style of
        film and musical theater.
    </p>
</InitialBox>

<Listen
    spotify="https://open.spotify.com/artist/3ZTgcqZhVFQYhDmp3s6Qaf?si=HlTBLumgSmqAYZbcXY7pTQ"
    appleMusic="https://music.apple.com/us/artist/erika-gozar/1456807299"
    youtube="https://youtube.com/GozarProductions"
    youtubeMusic="https://music.youtube.com/channel/UCpBIOFSyWcJ_BMn9NDM3wLw?feature=share?sub_confirmation=1"
    pandora="https://pandora.app.link/Xqthr6V0hrb"
    amazonMusic="https://music.amazon.com/artists/B07VLX7KRL/erika-gozar?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_uIBs3sUrzG0tfE2fxiXk3USwj"
/>
<Releases title="Featured Releases">
    <Release
        link="/for-sam"
        imageSource="/releases/for-sam/cover.png"
        imageAlt="For Sam"
    />
    <Release
        link="/in-the-darkness"
        imageSource="/releases/in-the-darkness/cover.png"
        imageAlt="In the Darkness"
    />
    <Release
        link="/songs-of-a-lonely-end"
        imageSource="/releases/songs-of-a-lonely-end/cover.png"
        imageAlt="Songs of a Lonely End"
    />
    <Release
        link="/wind-and-water"
        imageSource="/releases/wind-and-water/cover.png"
        imageAlt="Wind and Water"
    />
</Releases>
