<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/until-that-day-comes/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "Until That Day Comes";
	const description =
		'"Until That Day Comes" is a heartfelt ballad about waiting through meaningless and uninspired days in the hopes of a bright and colorful future eventually coming to fruition.';
	const coverImage = "/releases/until-that-day-comes/cover.webp";
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
	src="/releases/until-that-day-comes/music.mp3"
	startTime={110}
	endTime={152.75} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="G5WRNPAMYLFFG"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "G5WRNPAMYLFFG" });
	</script>
</Purchase> -->
<Listen
	download="https://ko-fi.com/s/9489e7a287"
	spotify="Coming Soon"
	appleMusic="Coming Soon"
	youtube="https://youtu.be/Fr65IlnNtbQ"
	youtubeMusic="Coming Soon"
	pandora="Coming Soon"
	amazonMusic="Coming Soon" />
