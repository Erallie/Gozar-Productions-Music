<script>
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";

	onMount(() => {
		setBackground("/releases/for-sam/background.png");
	});
</script>

<InitialBox imageSource="/releases/for-sam/cover.png" imageAlt="For Sam">
	<h1>For Sam</h1>
	<p>
		"For Sam" is a goofy song that Erika Gozar wrote for her sister's
		boyfriend as a present for Christmas. Loosely based on the style of folk
		pop, this silly little ditty has inside jokes that can be enjoyed by
		family and fans alike.
	</p>
</InitialBox>
<AudioPlayer src="/releases/for-sam/music.wav" startTime={30} endTime={60} />
<Listen
	spotify="https://open.spotify.com/track/0d3UuGgqGDP2XijOuJ1U5l?si=60ebe9f798cd4448"
	appleMusic="https://music.apple.com/us/album/for-sam/1662010034?i=1662010035"
	youtube="https://youtu.be/iW2p6FjE7jo"
	youtubeMusic="https://music.youtube.com/watch?v=iW2p6FjE7jo&feature=share"
	pandora="https://pandora.app.link/j9gUnin49vb"
	amazonMusic="https://music.amazon.com/albums/B0BRBSBPR9?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_MMBqKhz1Fyd7Ejygxie0NOaau&trackAsin=B0BRBQ2L8H"
/>
