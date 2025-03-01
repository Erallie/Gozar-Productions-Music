<script lang="ts">
    import InitialBox from "$lib/components/InitialBox.svelte";
    import { onMount } from "svelte";
    import { setBackground } from "$lib/scripts/set-background";
    import ListSection from "./ListSection.svelte";

    onMount(() => {
        setBackground("/performances/background.png");
    });
</script>

<InitialBox imageSource="/performances/cover.png" imageAlt="Performances"
    ><h1>Live Performances</h1>
    <p>Erika Gozar has live performances online in Virtual Reality.</p>
    <p>
        To watch, download
        <a href="https://hello.vrchat.com/" target="_blank"
            ><bold>VRChat</bold></a
        >
        and join the VRChat Group
        <a href="https://vrc.group/ERIKA.6930" target="_blank"
            ><bold>Erika's Voice</bold></a
        >
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
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FPhoenix&mode=AGENDA&showCalendars=0&title=Erika%20Gozar's%20Performances&src=Y19hMTEyYzEwYTI4YWQ2NzRiMGU5MDg3Nzg3MDIwMTJmNGJjMTJkN2ViNGM2ZDA1YWNjODBhMDdiMWExNTgzODk3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB"
        style="border-width:0"
        class="rounded"
        width="620"
        height="400"
        frameborder="0"
        scrolling="no"
    ></iframe>
</section>
<section id="how-to-attend">
    <h1>How to Attend</h1>
    <ol>
        <ListSection title="Download VRChat">
            <p>
                <a href="https://hello.vrchat.com/" target="_blank">VRChat</a>
                is primarily meant to be played in VR, but it is also available on
                Windows desktop through
                <a
                    href="https://store.steampowered.com/app/438100/VRChat/?utm-source=hello-home"
                    target="_blank">Steam</a
                >
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
                If you have none of these devices and want a cheaper option, you
                can purchase a <a
                    href="https://www.meta.com/quest/quest-3s/"
                    target="_blank">Meta Quest 3S</a
                >
                for <strong>300 USD</strong> or a
                <a href="https://www.meta.com/quest/quest-3/" target="_blank"
                    >Meta Quest 3</a
                >
                for <strong>500 USD</strong> and download VRChat through the
                <a
                    href="https://www.meta.com/experiences/vrchat/1856672347794301/"
                    target="_blank">Meta Quest store</a
                >
                on your device.
            </p>
        </ListSection>
        <ListSection title="Join our Community">
            <p>
                We have a <a
                    href="https://discord.gg/cCCEk7BX4W"
                    target="_blank">Discord server</a
                >
                and a public VRChat group (<a
                    href="https://vrc.group/ERIKA.6930"
                    target="_blank">Erika's Voice</a
                >) where we send announcements about our performances.
            </p>
            <p>
                Join either of them, and keep an eye on the <a
                    href="https://discord.com/channels/1102582171207741480/1220485752677470208"
                    target="_blank">announcements channel</a
                >

                or on the
                <a
                    href="https://vrchat.com/home/group/grp_61d1c3b2-c8e8-492a-92ca-1a1411e741a5/posts"
                    target="_blank">group posts</a
                >
                for more information on where and when each performance takes place.
            </p>
        </ListSection>
        <ListSection title="Join the Instance"
            ><p>
                When a performance is about to start, we will send an
                announcement on our
                <a href="https://discord.gg/cCCEk7BX4W" target="_blank"
                    >Discord</a
                >
                and in our
                <a href="https://vrc.group/ERIKA.6930" target="_blank"
                    >VRChat group</a
                >
                with information on what group to join to attend the performance.
            </p>
            <p>
                <bold
                    >This group is usually different from our own (<a
                        href="https://vrc.group/ERIKA.6930"
                        target="_blank">Erika's Voice</a
                    >) and is specific to the venue.</bold
                >
            </p>
            <p>
                Make sure you join the correct group, and then launch VRChat and
                navigate to the <bold>Groups</bold> tab.
            </p>
            <p>
                Under
                <bold>Group Activity</bold>, you should see a group instance
                open for the group you joined.
            </p>
            <p>Join that instance and enjoy the show!</p>
        </ListSection>
        <ListSection title="Common Issues"
            ><ul>
                <ListSection title="I'm Lagging">
                    <p>
                        Rendering 80 people in a single instance all at once can
                        be pretty intensive. To avoid lag, keep the following in
                        mind:
                    </p>
                    <ul>
                        <ListSection title="Safety Settings">
                            <p>
                                Make sure you adjust your <bold
                                    >safety settings</bold
                                >
                                to avoid rendering parts of avatars that can lag
                                you.
                            </p>
                            <p>
                                This setting can be found by clicking the <bold
                                    >shield icon</bold
                                >
                                on the <bold>top-right</bold> of your
                                <bold>big menu</bold>.
                            </p>
                            <p>
                                If you are on PCVR, Make sure to turn <bold
                                    >shaders off</bold
                                > for most people, as those are the most intensive.
                            </p>
                        </ListSection>
                        <ListSection title="Avatar Culling">
                            <p>
                                Turn on <bold>avatar culling</bold> to avoid rendering
                                avatars past a certain distance away from you.
                            </p>
                            <p>
                                This setting can be found in your <bold
                                    >small menu</bold
                                >
                                under the <bold>settings tab</bold> under the
                                header
                                <bold>"Avatar Culling"</bold>.
                            </p>
                            <p>
                                This setting is <bold>more effective</bold> than
                                turning safety settings to maximum or turning
                                safe mode on, as it renders everyone as
                                <bold>non-skeletal diamonds</bold> instead of robots.
                            </p></ListSection
                        >
                    </ul>
                </ListSection>

                <ListSection title="I don't hear the performer">
                    <p>
                        Depending on the venue, the performer may be
                        transmitting their audio either <bold
                            >through their mic</bold
                        >
                        or by
                        <bold>streaming to a video player</bold> in the world.
                    </p>
                    <p>
                        If you don't hear the performance, you may need to make
                        sure your <bold>world audio</bold> is turned up in your audio
                        settings.
                    </p>
                    <p>
                        If that still doesn't fix it, make sure you <bold
                            >allow untrusted URLs</bold
                        >
                        in your settings. This can be found in your
                        <bold>big menu</bold>
                        under the <bold>Comfort & Safety</bold> tab, under the
                        <bold>Safety</bold> heading.
                    </p>
                </ListSection>
            </ul></ListSection
        >
    </ol>
</section>

<style>
    #how-to-attend {
        width: 660px;
        & > * {
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
        }
    }

    ol,
    ul {
        list-style-position: inside;
        /* margin: 0px auto; */
        padding: 0px;
    }

    ul {
        list-style-type: none;
    }

    iframe {
        padding: 10px;
        margin: -10px;
    }
</style>
