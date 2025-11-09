<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/you-are-god/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "You Are God";
	const description =
		'"You Are God" is a Christian worship song about trusting in God\'s Salvation and the strength it gives us through dark seasons. Written from the heart in 2019, this song was revamped and submitted for rerelease in 2025 in the hopes of ministering to those in trying times.';
	const coverImage = "/releases/you-are-god/cover.webp";
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
	src="/releases/you-are-god/music.mp3"
	startTime={91}
	endTime={126.5} />
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
	youtube="https://youtu.be/tAOvEYSL2l4"
	youtubeMusic="Coming Soon"
	pandora="Coming Soon"
	amazonMusic="Coming Soon" />
