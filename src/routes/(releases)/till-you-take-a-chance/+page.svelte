<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/till-you-take-a-chance/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "'Till You Take a Chance";
	const description =
		'"\'Till You Take a Chance" is a fan-made song about Viva La Dirt League\'s YouTube series, "Bored". Featuring a beautiful piano accompaniment, this song shares an inspirational message about the possibilities that may ensue when taking initiative.';
	const coverImage = "/releases/till-you-take-a-chance/cover.webp";
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
</svelte:head>

<InitialBox imageSource={coverImage} imageAlt={title}>
	<h1>{title}</h1>
	<p>
		"'Till You Take a Chance" is a fan-made song about <a
			href="https://www.youtube.com/VivaLaDirtLeague"
			target="_blank">Viva La Dirt League</a
		>'s YouTube series,
		<a
			href="https://youtube.com/playlist?list=PLSMETuURtTXDkOm6Xx4Q-1HS8W54GrBDm&si=xcubV3vkbXoAt3CG"
			target="_blank">"Bored"</a
		>. Featuring a beautiful piano accompaniment, this song shares an
		inspirational message about the possibilities that may ensue when taking
		initiative.
	</p>
</InitialBox>
<AudioPlayer
	bind:player={audio}
	src="/releases/till-you-take-a-chance/music.mp3"
	startTime={67}
	endTime={101} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="G5WRNPAMYLFFG"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "G5WRNPAMYLFFG" });
	</script>
</Purchase> -->
<Listen
	download="https://ko-fi.com/s/e5f625dc96"
	spotify="https://open.spotify.com/track/3HJEOe6xlaO5Mp5oht2Qhw?si=0728c866d5524bf5"
	appleMusic="https://music.apple.com/us/song/till-you-take-a-chance/1861940507"
	youtube="https://youtu.be/ozpqbv4CxiY"
	youtubeMusic="https://music.youtube.com/watch?v=iCL-HzRCuXc&si=iKpUrtnKgRYWU-QH"
	pandora="https://www.pandora.com/artist/erika-gozar/till-you-take-a-chance/till-you-take-a-chance/TRzxmxkrrhmxppc?part=ug-desktop&corr=129617029899525102"
	amazonMusic="https://music.amazon.com/albums/B0G7MTNCPW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_caVo5CHFZrRN2rYBXfb9orsTF&trackAsin=B0G7NHK9Z9" />
