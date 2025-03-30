<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import { page } from "$app/state";
	// import Purchase from "../Purchase.svelte";

	onMount(() => {
		setBackground("/releases/wind-and-water/background.webp");
	});
	let audio: HTMLAudioElement;
	const title = "Wind And Water";
	const description =
		'"Wind And Water" is a song inspired by "Go the Distance" from Disney\'s Hercules and "Colors of the Wind" by Disney\'s Pocahontas. It features an encouraging message about keeping faith when struggling to live up to your own expectations.';
	const coverImage = "/releases/wind-and-water/cover.webp";
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
		"Wind And Water" is a song inspired by "Go the Distance" from Disney's
		<i>Hercules</i> and "Colors of the Wind" by Disney's <i>Pocahontas</i>.
		It features an encouraging message about keeping faith when struggling
		to live up to your own expectations.
	</p>
</InitialBox>
<AudioPlayer
	bind:player={audio}
	src="/releases/wind-and-water/music.mp3"
	startTime={130.5}
	endTime={178} />
<!-- <Purchase>
	<paypal-add-to-cart-button data-id="NCDYS9L7P67X8"
	></paypal-add-to-cart-button>
	<script>
		cartPaypal.AddToCart({ id: "NCDYS9L7P67X8" });
	</script>
</Purchase> -->
<Listen
	spotify="https://open.spotify.com/album/5a5t04DsYZKqxZOUdZPRVP?si=pz5USCziRjWZKvCfTO6zrA"
	appleMusic="https://music.apple.com/us/album/wind-and-water-single/1632963815"
	youtube="https://youtu.be/0V9jrgM7g_8"
	youtubeMusic="https://music.youtube.com/playlist?list=OLAK5uy_kX10xFIFoEPkES3YCpK4u5XIitJYvwY2c&feature=share"
	pandora="https://pandora.app.link/9PjhR0Y0hrb"
	amazonMusic="https://music.amazon.com/albums/B0B5HSKKM5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_MVSNjuwdS95oxEEr52KsJeWfY" />
