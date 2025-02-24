<script>
    import InitialBox from "./InitialBox.svelte";
    import Release from "./Release.svelte";
    import Releases from "./Releases.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        document.documentElement.style.setProperty(
            "--background-image",
            'url("/erika-gozar-background.png")',
        );
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
