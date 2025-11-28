<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground(
			"/releases/im-waiting-for-my-prince-to-come/background.webp"
		);
	});
	let audio: HTMLAudioElement;
	const title = "I'm Waiting for My Prince to Come";
	const description =
		'"I\'m Waiting for My Prince to Come" is a playoff on the classic Disney princess happy ending, with a twist of reality. With illustrations by Juliana Herrera, this song was meant to subvert expectations after a whimsical lead-on.';
	const coverImage = "/releases/im-waiting-for-my-prince-to-come/cover.webp";
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
	src="/releases/im-waiting-for-my-prince-to-come/music.mp3"
	startTime={83}
	endTime={121.9} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="G5WRNPAMYLFFG"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "G5WRNPAMYLFFG" });
	</script>
</Purchase> -->
<Listen
	spotify="https://open.spotify.com/track/1qf7uVnRLjcGbgiCxWGrJg?si=bb98673a24384516"
	appleMusic="https://music.apple.com/us/song/im-waiting-for-my-prince-to-come/1475679959"
	youtube="https://youtu.be/YJ-yYLIsWeg"
	youtubeMusic="https://music.youtube.com/watch?v=wkHgIF0eYKI&si=YTSQjWcHm_3Hl7sN"
	pandora="https://www.pandora.com/artist/erika-gozar/im-waiting-for-my-prince-to-come-single/im-waiting-for-my-prince-to-come/TRncbbpKhwdZnbk?part=ug-desktop&corr=129617029899525102"
	amazonMusic="https://music.amazon.com/albums/B07W6KQMG7?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_iZexTNQvTXeOqxUFC6mjQSCch&trackAsin=B07W4GBXNY" />
