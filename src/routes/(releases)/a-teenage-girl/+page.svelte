<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/a-teenage-girl/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "A Teenage Girl";
	const description =
		'"A Teenage Girl" is an enraged venting of the many troubles of a young highschooler. Written in 2016, this release is one of Erika Gozar\'s very first finished, performed, and produced works of art.';
	const coverImage = "/releases/a-teenage-girl/cover.webp";
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
	src="/releases/a-teenage-girl/music.mp3"
	startTime={91}
	endTime={122} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="G5WRNPAMYLFFG"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "G5WRNPAMYLFFG" });
	</script>
</Purchase> -->
<Listen
	spotify="https://open.spotify.com/track/7sVcxCIlWBWWEhz9Lr3IFC?si=ea1f2c8fe3a64ef2"
	appleMusic="https://music.apple.com/us/song/a-teenage-girl/1474556357"
	youtube="https://youtu.be/oe5Lose2-2o?si=6kccPXuDvxzvSX8X"
	youtubeMusic="https://music.youtube.com/watch?v=oe5Lose2-2o&si=uhk2KsBwlP4NE93R"
	pandora="https://www.pandora.com/artist/erika-gozar/a-teenage-girl-single/a-teenage-girl/TR6Vj7J3vbwj529?part=ug-desktop&corr=129617029899525102"
	amazonMusic="https://music.amazon.com/albums/B07VQ5JP2H?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_PjzDN1D8QcetBobY88FUuyvPF&trackAsin=B07VN319H5" />
