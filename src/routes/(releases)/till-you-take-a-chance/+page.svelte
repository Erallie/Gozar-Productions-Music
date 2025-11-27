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
		{description}
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
	spotify="Coming Soon"
	appleMusic="Coming Soon"
	youtube="https://youtu.be/ozpqbv4CxiY"
	youtubeMusic="Coming Soon"
	pandora="Coming Soon"
	amazonMusic="Coming Soon" />
