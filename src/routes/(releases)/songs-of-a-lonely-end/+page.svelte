<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { type audioSource } from "$lib/types/types";
	import AlbumPlayer from "$lib/components/AlbumPlayer.svelte";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/songs-of-a-lonely-end/background.webp");
	});

	// Define the audio sources
	const audioSources: audioSource[] = [
		{
			name: "Adventure Awaits",
			src: "/releases/songs-of-a-lonely-end/music/1-adventure-awaits.mp3?preview=1",
			startTime: 0,
			fullTime: 128.15675,
		},
		{
			name: "The Archmage",
			src: "/releases/songs-of-a-lonely-end/music/2-the-archmage.mp3?preview=1",
			startTime: 41,
			fullTime: 153.07755,
		},
		{
			name: "The Mystery of the Nexus",
			src: "/releases/songs-of-a-lonely-end/music/3-the-mystery-of-the-nexus.mp3",
			startTime: 0,
			fullTime: 37.9559,
		},
		{
			name: "The Rise of Tiamat",
			src: "/releases/songs-of-a-lonely-end/music/4-the-rise-of-tiamat.mp3",
			startTime: 0,
			fullTime: 34.87345,
		},
		{
			name: "Pandemonium",
			src: "/releases/songs-of-a-lonely-end/music/5-pandemonium.mp3?preview=1",
			startTime: 16.5,
			fullTime: 191.7649,
		},
		{
			name: "An Answered Prayer",
			src: "/releases/songs-of-a-lonely-end/music/6-an-answered-prayer.mp3?preview=1",
			startTime: 30,
			fullTime: 134.13875,
		},
	];
	const title = "Songs of a Lonely End";
	const description =
		"Songs of a Lonely End is a collection of pieces written for a lore-heavy Minecraft server. It follows the journey of the Grand Archmage Varnius as he inadvertently nearly destroys the world, and banishes himself to another dimension in an attempt to save the home he loves so dearly.";
	const coverImage = "/releases/songs-of-a-lonely-end/cover.webp";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={coverImage} />
	<meta property="og:image:width" content="2048" />
	<meta property="og:image:height" content="2048" />
	<meta property="og:url" content={page.url.toString()} />
	<meta property="og:site_name" content="Gozar Productions Music" />
	<meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@ErikaGozar" />
    <meta name="twitter:creator" content="@ErikaGozar" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta
		name="twitter:image"
		content="https://music.gozarproductions.com{coverImage}" />

	<link rel="canonical" href="https://music.gozarproductions.com/songs-of-a-lonely-end" />
</svelte:head>

<InitialBox imageSource={coverImage} imageAlt={title}>
	<h1>{title}</h1>
	<p>
		<em>Songs of a Lonely End</em> is a collection of pieces written for a lore-heavy
		Minecraft server. It follows the journey of the Grand Archmage Varnius as
		he inadvertently nearly destroys the world, and banishes himself to another
		dimension in an attempt to save the home he loves so dearly.
	</p>
</InitialBox>
<AlbumPlayer {audioSources} defaultSource={4} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="WRK46E3AB3D4L"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "WRK46E3AB3D4L" });
	</script>
</Purchase> -->
<Listen
	download="https://ko-fi.com/s/b0d0d0b924"
	spotify="https://open.spotify.com/album/0FMiavhfR8urUExuGSKAfB?si=rFNuy3kwTjS4k5zreGQgzg"
	appleMusic="https://music.apple.com/us/album/songs-of-a-lonely-end-ep/1632944405"
	youtube="https://youtube.com/playlist?list=OLAK5uy_nqpeOBpRJx-txxeFXPUkBB_BM919dReTM"
	youtubeMusic="https://music.youtube.com/playlist?list=OLAK5uy_m2BMnRPOL2c5q6pdHBtaZ5xn4Z19SrQms&feature=share"
	pandora="https://pandora.app.link/Vep10501hrb"
	amazonMusic="https://music.amazon.com/albums/B0B5HS5HDS?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_BIdzrKplXfA0aeQenIUh6Ux6e" />
