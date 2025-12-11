<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/on-this-holy-evening/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "On This Holy Evening";
	const description =
		'"On This Holy Evening" is an original Christmas Hymn written in December 2019 and picked back up in 2025. Voiced entirely by Erika Gozar with the help of pitch-changing magic, this song celebrates Jesus\'s birth among us as the sacrificial Lamb of God.';
	const coverImage = "/releases/on-this-holy-evening/cover.webp";
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
	src="/releases/on-this-holy-evening/music.mp3"
	startTime={29}
	endTime={72} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="44RAZ9VVGJRAU"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "44RAZ9VVGJRAU" });
	</script>
</Purchase> -->
<Listen
	download="https://ko-fi.com/s/6d83aeaa25"
	spotify="https://open.spotify.com/track/167ouY14UVR5k9ethukQMB?si=741e3ff736154e0d"
	appleMusic="https://music.apple.com/us/song/on-this-holy-evening/1859428427"
	youtube="https://youtu.be/5TKWQNTtFr8"
	youtubeMusic="https://music.youtube.com/watch?v=QL9hn2TeJX4&si=0xeqBDgmpDuPep9w"
	pandora="https://www.pandora.com/artist/erika-gozar-holiday/on-this-holy-evening/on-this-holy-evening/TRmpthz5P7rdVzg?part=ug-desktop&corr=142735303130510445"
	amazonMusic="https://music.amazon.com/albums/B0G5M4RQ6Z?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_hlnz8zrXc0t2zes3J7a4s4NhT&trackAsin=B0G5LKHSCQ" />
