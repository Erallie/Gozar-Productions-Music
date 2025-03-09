<script lang="ts">
	import InitialBox from "$lib/components/InitialBox.svelte";
	import { onMount } from "svelte";
	import { setBackground } from "$lib/scripts/set-background";
	import ListSection from "./ListSection.svelte";
	import ExpandableSection from "./ExpandableSection.svelte";
	import ListSectionWrapper from "./ListSectionWrapper.svelte";
	import { page } from "$app/state";

	let howToAttendClicked = $state(false);
	let commonIssuesClicked = $state(false);

	function openHowToAttend() {
		howToAttendClicked = true;
	}

	function openCommonIssues() {
		commonIssuesClicked = true;
	}

	let calendarUrl = $state(
		"https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FPhoenix&mode=AGENDA&showCalendars=0&title=Erika%20Gozar's%20Performances&src=Y19hMTEyYzEwYTI4YWQ2NzRiMGU5MDg3Nzg3MDIwMTJmNGJjMTJkN2ViNGM2ZDA1YWNjODBhMDdiMWExNTgzODk3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB"
	);

	onMount(() => {
		setBackground("/performances/background-3.png");

		// Get the user's local time zone
		const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

		// Create a new URL object from the original link
		const url = new URL(
			"https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FPhoenix&mode=AGENDA&showCalendars=0&title=Erika%20Gozar's%20Performances&src=Y19hMTEyYzEwYTI4YWQ2NzRiMGU5MDg3Nzg3MDIwMTJmNGJjMTJkN2ViNGM2ZDA1YWNjODBhMDdiMWExNTgzODk3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB"
		);

		// Update the 'ctz' parameter with the user's time zone
		url.searchParams.set("ctz", userTimeZone);

		// Return the updated link
		calendarUrl = url.toString();
	});

	const title = "Live Performances";
	const description =
		"Erika Gozar has live performances online in Virtual Reality. To watch, download VRChat and join the VRChat Group Erika's Voice via the group code ERIKA.6930. Then keep an eye out on the announcements in the group or on our Discord for information on her performances!";
	const coverImage = "/performances/cover-2.png";
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

<InitialBox imageSource={coverImage} imageAlt="Performances">
	<h1>{title}</h1>
	<p>Erika Gozar has live performances online in Virtual Reality.</p>
	<p>
		To watch, download
		<a href="https://hello.vrchat.com/" target="_blank"
			><bold>VRChat</bold></a>
		and join the VRChat Group
		<a href="https://vrc.group/ERIKA.6930" target="_blank"
			><bold>Erika's Voice</bold></a>
		via the group code
		<a href="https://vrc.group/ERIKA.6930" target="_blank"
			><code><bold>ERIKA.6930</bold></code></a
		>. Then keep an eye out on the announcements in the group or on
		<a href="https://discord.gg/cCCEk7BX4W" target="_blank">our Discord</a> for
		information on her performances!
	</p>
	<p>See <a href="#how-to-attend">How to Attend</a> for more information.</p>
</InitialBox>

<section id="calendar">
	<h1>Performance Calendar</h1>
	<iframe
		title="Erika Gozar's Performances"
		src={calendarUrl}
		style="border-width:0"
		class="rounded"
		width="620"
		height="400"
		frameborder="0"
		scrolling="no"></iframe>
</section>
<section class="expandable-sections">
	<div>
		<button onclick={openHowToAttend}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="200"
				height="60"
				viewBox="0 0 200 60">
				<g
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round">
					<line x1="2.5" y1="30" x2="197.5" y2="30" />
					<line x1="2.5" y1="30" x2="40" y2="2.5" />
					<line x1="2.5" y1="30" x2="40" y2="57.5" />
				</g>
			</svg>How to Attend
		</button>
		<button onclick={openCommonIssues}>
			Common Issues<svg
				xmlns="http://www.w3.org/2000/svg"
				width="200"
				height="60"
				viewBox="0 0 200 60">
				<g
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round">
					<line x1="2.5" y1="30" x2="197.5" y2="30" />
					<line x1="197.5" y1="30" x2="160" y2="2.5" />
					<line x1="197.5" y1="30" x2="160" y2="57.5" />
				</g>
			</svg>
		</button>
	</div>
	<ExpandableSection
		bind:shouldOpen={howToAttendClicked}
		title="How to Attend"
		ordered>
		<ListSectionWrapper ordered>
			<ListSection title="Download VRChat">
				<p>
					<a href="https://hello.vrchat.com/" target="_blank"
						>VRChat</a>
					is primarily meant to be played in VR, but it is also available
					on Windows desktop through
					<a
						href="https://store.steampowered.com/app/438100/VRChat/?utm-source=hello-home"
						target="_blank">Steam</a>
					or on Android via
					<a
						href="https://play.google.com/store/apps/details?id=com.vrchat.mobile.playstore&hl=en&utm-source=hello-home"
						target="_blank">Google Play</a
					>.
				</p>
				<p>
					VRChat on iOS is currently in <a
						href="https://hello.vrchat.com/blog/apple-ios-beta-signup"
						target="_blank">Closed Beta</a
					>. It is otherwise not available on Apple products.
				</p>
				<p>
					If you have none of these devices and want a cheaper option,
					you can purchase a <a
						href="https://www.meta.com/quest/quest-3s/"
						target="_blank">Meta Quest 3S</a>
					for <strong>300 USD</strong> or a
					<a
						href="https://www.meta.com/quest/quest-3/"
						target="_blank">Meta Quest 3</a>
					for <strong>500 USD</strong> and download VRChat through the
					<a
						href="https://www.meta.com/experiences/vrchat/1856672347794301/"
						target="_blank">Meta Quest store</a>
					on your device.
				</p>
			</ListSection>
			<ListSection title="Join our Community">
				<p>
					We have a <a
						href="https://discord.gg/cCCEk7BX4W"
						target="_blank">Discord server</a>
					and a public VRChat group (<a
						href="https://vrc.group/ERIKA.6930"
						target="_blank">Erika's Voice</a
					>) where we send announcements about our performances.
				</p>
				<p>
					Join either of them, and keep an eye on the <a
						href="https://discord.com/channels/1102582171207741480/1220485752677470208"
						target="_blank">announcements channel</a>

					or on the
					<a
						href="https://vrchat.com/home/group/grp_61d1c3b2-c8e8-492a-92ca-1a1411e741a5/posts"
						target="_blank">group posts</a>
					for more information on where and when each performance takes
					place.
				</p>
			</ListSection>
			<ListSection title="Join the Instance"
				><p>
					When a performance is about to start, we will send an
					announcement on our
					<a href="https://discord.gg/cCCEk7BX4W" target="_blank"
						>Discord</a>
					and in our
					<a href="https://vrc.group/ERIKA.6930" target="_blank"
						>VRChat group</a>
					with information on what group to join to attend the performance.
				</p>
				<p>
					<bold
						>This group is usually different from our own (<a
							href="https://vrc.group/ERIKA.6930"
							target="_blank">Erika's Voice</a
						>) and is specific to the venue.</bold>
				</p>
				<p>
					Make sure you join the correct group, and then launch VRChat
					and navigate to the <bold>Groups</bold> tab.
				</p>
				<p>
					Under
					<bold>Group Activity</bold>, you should see a group instance
					open for the group you joined.
				</p>
				<p>Join that instance and enjoy the show!</p>
			</ListSection>
		</ListSectionWrapper>
	</ExpandableSection>
	<ExpandableSection
		bind:shouldOpen={commonIssuesClicked}
		title="Common Issues">
		<ListSectionWrapper>
			<ListSection title="I'm Lagging">
				<p>
					Rendering 80 people in a single instance all at once can be
					pretty intensive. To avoid lag, keep the following in mind:
				</p>
				<ListSectionWrapper>
					<ListSection title="Safety Settings">
						<p>
							Make sure you adjust your <bold
								>safety settings</bold>
							to avoid rendering parts of avatars that can lag you.
						</p>
						<p>
							This setting can be found by clicking the <bold
								>shield icon</bold>
							on the <bold>top-right</bold> of your
							<bold>big menu</bold>.
						</p>
						<p>
							If you are on PCVR, Make sure to turn <bold
								>shaders off</bold> for most people, as those are
							the most intensive.
						</p>
					</ListSection>
					<ListSection title="Avatar Culling">
						<p>
							Turn on <bold>avatar culling</bold> to avoid rendering
							avatars past a certain distance away from you.
						</p>
						<p>
							This setting can be found in your <bold
								>small menu</bold>
							under the <bold>settings tab</bold> under the header
							<bold>"Avatar Culling"</bold>.
						</p>
						<p>
							This setting is <bold>more effective</bold> than
							turning safety settings to maximum or turning safe
							mode on, as it renders everyone as
							<bold>non-skeletal diamonds</bold> instead of robots.
						</p></ListSection>
				</ListSectionWrapper>
			</ListSection>

			<ListSection title="I don't hear the performer">
				<p>
					Depending on the venue, the performer may be transmitting
					their audio either <bold>through their mic</bold>
					or by
					<bold>streaming to a video player</bold> in the world.
				</p>
				<p>
					If you don't hear the performance, you may need to make sure
					your <bold>world audio</bold> is turned up in your audio settings.
				</p>
				<p>
					If that still doesn't fix it, make sure you <bold
						>allow untrusted URLs</bold>
					in your settings. This can be found in your
					<bold>big menu</bold>
					under the <bold>Comfort & Safety</bold> tab, under the
					<bold>Safety</bold> heading.
				</p>
				<p>
					If you've done all of these things, but the issue still
					persists, there may be an issue with the video player. Try <bold
						>resyncing the video</bold>
					to update your feed. The button for this should be by the
					<bold>video controls</bold> in the world.
				</p>
			</ListSection>
		</ListSectionWrapper>
	</ExpandableSection>
</section>

<style>
	.expandable-sections {
		position: relative;
		display: flex;
		width: 660px;
		justify-content: space-between;
		& > div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: rgba(
				var(--background),
				var(--background-opacity)
			);
			backdrop-filter: blur(50px);
			border-radius: var(--rounded-radius);
			& svg {
				height: 0.8em;
				width: auto;
				padding: 0px var(--half-margin);
				vertical-align: middle;
			}
			& > button {
				display: inline-flex; /* Use flexbox for horizontal alignment */
				align-items: center; /* Center items vertically */
				font-family: Montserrat;
				padding: 16px 28px;
				border: none;
				background: none;
				text-align: center;
				letter-spacing: initial;
				text-transform: uppercase;
				font-size: 1.5rem;
				margin: 0px auto;
				color: inherit;
				& svg {
					transition: height 0.3s;
				}
				&:hover {
					cursor: pointer;
					& svg {
						height: 1em;
					}
				}
			}
		}
	}

	#calendar {
		width: 660px;
	}
	iframe {
		width: calc(100% - var(--margins));
		aspect-ratio: 14 / 9;
		height: auto;
		padding: var(--half-margin);
		margin: -var(--half-margin);
	}
	@media (max-width: 480px) {
		/* Styles for mobile devices */
		.expandable-sections {
			flex-wrap: wrap;
			& > :first-child {
				display: none;
			}
		}

		iframe {
			aspect-ratio: 3 / 4;
		}

		section {
			--margins: 12px;
			--half-margin: calc(var(--margins) / 2);
		}
	}
	@media (max-width: 320px) {
		iframe {
			width: min-content;
		}
		section {
			--margins: 8px;
			--half-margin: calc(var(--margins) / 2);
			&#calendar {
				max-width: 100%;
				display: block;
				margin-left: 0px;
				margin-right: 0px;
			}
		}
	}
</style>
