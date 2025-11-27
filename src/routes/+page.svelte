<script lang="ts">
	import { page } from "$app/state";
	import InitialBox from "$lib/components/InitialBox.svelte";
	import Release from "$lib/components/Release.svelte";
	import Releases from "$lib/components/Releases.svelte";
	import Listen from "$lib/components/Listen.svelte";
	import { onMount } from "svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import Button from "./Button.svelte";
	import { TextColor } from "$lib/types/types";

	onMount(() => {
		setBackground("/erika-gozar-background.webp");
	});

	const title = "Erika Gozar";
	const description =
		"Erika Gozar has written music since she was 8 or 9 with simply an ear for music and no formal training in composition. Under the musical guidance of John Massaro and the vocal instruction of Gail Dubinbaum, Erika currently writes pieces for orchestra and voice in the style of film and musical theater.";
	const coverImage = "/erika-gozar.webp";
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

<Listen
	spotify="https://open.spotify.com/artist/3ZTgcqZhVFQYhDmp3s6Qaf?si=HlTBLumgSmqAYZbcXY7pTQ"
	appleMusic="https://music.apple.com/us/artist/erika-gozar/1456807299"
	youtube="https://youtube.com/GozarProductions"
	youtubeMusic="https://music.youtube.com/channel/UCpBIOFSyWcJ_BMn9NDM3wLw?feature=share?sub_confirmation=1"
	pandora="https://pandora.app.link/Xqthr6V0hrb"
	amazonMusic="https://music.amazon.com/artists/B07VLX7KRL/erika-gozar?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_uIBs3sUrzG0tfE2fxiXk3USwj" />
<Releases title="Featured Releases">
	<Release
		link="/you-are-god"
		imageSource="/releases/you-are-god/cover.webp"
		imageAlt="You Are God" />
	<Release
		link="/for-sam"
		imageSource="/releases/for-sam/cover.webp"
		imageAlt="For Sam" />
	<Release
		link="/in-the-darkness"
		imageSource="/releases/in-the-darkness/cover.webp"
		imageAlt="In the Darkness" />
	<Release
		link="/songs-of-a-lonely-end"
		imageSource="/releases/songs-of-a-lonely-end/cover.webp"
		imageAlt="Songs of a Lonely End" />
	<Release
		link="/wind-and-water"
		imageSource="/releases/wind-and-water/cover.webp"
		imageAlt="Wind and Water" />
	<Release
		link="/till-you-take-a-chance"
		imageSource="/releases/till-you-take-a-chance/cover.webp"
		imageAlt="'Till You Take a Chance" />
</Releases>
<section id="performances">
	<h1>Performances</h1>
	<p>
		Since the pandemic, it has been hard for Erika to get out to perform in
		real life. Despite this, virtual reality has provided opportunities to
		share her music when real life provided none.
	</p>
	<Button link="/performances" color={TextColor.Black} newTab={false}
		>Attend Live</Button>
</section>
<section id="contact">
	<div>
		<h1>Contact</h1>
		<p>Feel free to reach out!</p>
	</div>
	<div>
		<div>
			<h3>Erika Gozar</h3>
			<hr />
			<a href="mailto:erika@gozarproductions.com"
				>erika@gozarproductions.com</a>
		</div>
		<!-- <span class="or">- or -</span> -->
		<Button
			link="https://discord.gozarproductions.com/"
			color={TextColor.Black}
			newTab={true}
			customSVG
			marginTopMultiplier={0.5}
			marginBottomMultiplier={0.5}
			marginLeftMultiplier={0}
			marginRightMultiplier={0}
			addedClass="discord-button"
			>Join our Discord<svg
				xmlns="http://www.w3.org/2000/svg"
				width="127.14px"
				height="96.36px"
				viewBox="0 0 127.14 96.36">
				<path
					fill="currentColor"
					d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
			</svg></Button
		><br />
	</div>
</section>

<style>
	#contact {
		width: 660px;
		display: flex;
		/* width: var(--width); */
		flex-wrap: wrap;
		& > * {
			flex-grow: 1;
			margin: auto var(--margins);
			/* padding: var(--margins) 0px; */
		}
		& > :last-child {
			margin: var(--margins);
			& > :first-child {
				margin-bottom: var(--half-margin);
			}
		}
		& > :first-child {
			text-align: left;
			& * {
				margin: var(--half-margin) 0px;
			}
		}
		& h3 {
			/* text-transform: uppercase; */
			margin-top: 0px;
			margin-bottom: 0.5em;
			font-weight: 700;
		}
		& hr {
			border-top: 1px solid rgb(var(--foreground));
			width: 50%;
			/* margin: var(--half-margin) auto; */
		}
	}
	#performances {
		width: 660px;
		& > p {
			max-width: min(90%, 50rem);
			margin: 0.5em auto;
		}
	}
	@media (max-width: 778px) {
		#contact > :first-child {
			text-align: center;
			margin-bottom: var(--half-margin);
			margin-top: var(--half-margin);
		}
	}
</style>
