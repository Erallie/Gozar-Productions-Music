<script>
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	import { setBackground } from "$lib/scripts/set-background";

	onMount(() => {
		setBackground("/releases/wind-and-water/background.png");
	});
</script>

<InitialBox
	imageSource="/releases/wind-and-water/cover.png"
	imageAlt="Wind And Water"
>
	<h1>Wind And Water</h1>
	<p>
		"Wind And Water" is a song inspired by "Go the Distance" from Disney's
		<i>Hercules</i> and "Colors of the Wind" by Disney's <i>Pocahontas</i>.
		It features an encouraging message about keeping faith when struggling
		to live up to your own expectations.
	</p>
</InitialBox>
<AudioPlayer
	src="/releases/wind-and-water/music.mp3"
	startTime={130.5}
	endTime={178}
/>
<Listen
	spotify="https://open.spotify.com/album/5a5t04DsYZKqxZOUdZPRVP?si=pz5USCziRjWZKvCfTO6zrA"
	appleMusic="https://music.apple.com/us/album/wind-and-water-single/1632963815"
	youtube="https://youtu.be/0V9jrgM7g_8"
	youtubeMusic="https://music.youtube.com/playlist?list=OLAK5uy_kX10xFIFoEPkES3YCpK4u5XIitJYvwY2c&feature=share"
	pandora="https://pandora.app.link/9PjhR0Y0hrb"
	amazonMusic="https://music.amazon.com/albums/B0B5HSKKM5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_MVSNjuwdS95oxEEr52KsJeWfY"
/>
