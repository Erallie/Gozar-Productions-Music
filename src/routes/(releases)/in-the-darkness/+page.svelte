<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/in-the-darkness/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "In the Darkness";
	const description =
		'"In the Darkness" is a song about hope enduring through the hardest of times. Written in the style of musical theater and film, this ballad hopes to encourage people who are in the midst of a dark season in their life.';
	const coverImage = "/releases/in-the-darkness/cover.webp";
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
	src="/releases/in-the-darkness/music.mp3"
	startTime={26.5}
	endTime={63} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="44RAZ9VVGJRAU"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "44RAZ9VVGJRAU" });
	</script>
</Purchase> -->
<Listen
	spotify="https://open.spotify.com/album/7fJfWpRIb3ZuLUBmuTN7zW?si=0_8JKnxiTCCbNo8h93Ha5A"
	appleMusic="https://music.apple.com/us/album/in-the-darkness-single/1652446209"
	youtube="https://youtu.be/hcz72F3lb2g"
	youtubeMusic="https://music.youtube.com/watch?v=v_NDgytTgkk&feature=share"
	pandora="https://pandora.app.link/vZ51YdwNEub"
	amazonMusic="https://music.amazon.com/albums/B0BL6QLYBZ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_X8XvWddFr4S2OCeIuQwcPzyjo&trackAsin=B0BL71BGT4" />
