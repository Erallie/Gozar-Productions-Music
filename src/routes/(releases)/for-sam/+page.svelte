<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/for-sam/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "For Sam";
	const description =
		'"For Sam" is a goofy song that Erika Gozar wrote for her sister\'s boyfriend as a present for Christmas. Loosely based on the style of folk pop, this silly little ditty has inside jokes that can be enjoyed by family and fans alike.';
	const coverImage = "/releases/for-sam/cover.webp";
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
	src="/releases/for-sam/music.mp3"
	startTime={30}
	endTime={60} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="G5WRNPAMYLFFG"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "G5WRNPAMYLFFG" });
	</script>
</Purchase> -->
<Listen
	spotify="https://open.spotify.com/track/0d3UuGgqGDP2XijOuJ1U5l?si=60ebe9f798cd4448"
	appleMusic="https://music.apple.com/us/album/for-sam/1662010034?i=1662010035"
	youtube="https://youtu.be/iW2p6FjE7jo"
	youtubeMusic="https://music.youtube.com/watch?v=iW2p6FjE7jo&feature=share"
	pandora="https://pandora.app.link/j9gUnin49vb"
	amazonMusic="https://music.amazon.com/albums/B0BRBSBPR9?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_MMBqKhz1Fyd7Ejygxie0NOaau&trackAsin=B0BRBQ2L8H" />
