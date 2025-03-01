<script lang="ts">
    import { TextColor } from "$lib/types/types";
    import Header from "./Header.svelte";
    import { page } from "$app/state";
    import logo from "$lib/images/gozar-productions-logo.svg";
    import "../app.css";
    import Button from "./Button.svelte";

    let isPerformancePage = $state(false);

    $effect(() => {
        isPerformancePage = page.url.pathname == "/performances";
    });

    let noticeMinimized = $state(false);

    function minimizeNotice() {
        noticeMinimized = true;
    }

    let { children } = $props();
</script>

<div class="app">
    <Header />

    <main>
        {@render children()}
    </main>

    {#if !isPerformancePage}
        <div id="performance-banner" class={noticeMinimized ? "minimized" : ""}>
            <div>
                <h2>Erika Gozar</h2>
                has<br />
                <h2>live performances</h2>
                in virtual reality
            </div>
            <Button link="/performances" newTab={false} color={TextColor.White}
                >Attend</Button
            >
            <button aria-label="Minimize" onclick={minimizeNotice}
                ><!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="-20 -20 140 140"
                >
                    <g stroke="currentColor" stroke-width="20">
                        <line x1="0" y1="0" x2="100" y2="100" />
                        <line x1="100" y1="0" x2="0" y2="100" />
                    </g>
                </svg> --><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="40"
                    viewBox="-10 -20 120 40"
                >
                    <g stroke="currentColor" stroke-width="20">
                        <line x1="0" y1="0" x2="100" y2="0" />
                    </g>
                </svg></button
            >
        </div>
    {/if}

    <footer>
        <h1>
            <img src={logo} alt="Gozar Productions Logo" />Gozar Productions
        </h1>
        <div class="links">
            <a href="/privacy-policy">Privacy Policy</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
            <a href="/disclaimer">Disclaimer</a>
        </div>
        <p>© 2025 Gozar Productions LLC. All Rights Reserved.</p>
    </footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
    }

    /* .title-block > div {
        display: inline;
    } */

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        /* max-width: 64rem; */
        /* margin: 0 auto; */
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
        background-color: black;
    }

    footer img {
        aspect-ratio: 1 / 1;
        height: 4rem;
        display: block;
        margin: 12px auto;
    }

    footer,
    footer a,
    footer p {
        color: white;
        font-weight: 300;
        text-align: center;
    }

    footer h1 {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.1em;
    }
    footer svg {
        aspect-ratio: 1 / 1;
        width: auto;
        height: 1em;
        vertical-align: middle;
    }

    footer p {
        line-height: 1.2em;
    }

    footer p,
    footer a {
        font-size: 0.85rem;
        text-decoration: none;
    }
    footer a:hover {
        text-decoration: underline;
    }

    #performance-banner {
        color: white;
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        background-color: rgba(119, 46, 46, 0.95);
        /* text-align: center; */
        justify-content: center;
        & > * {
            text-align: right;
            margin: auto 0px;
            & > * {
                display: inline;
                /* text-transform: none; */
            }
        }
        & > button {
            color: inherit;
            opacity: 0.7;
            background: none;
            margin: 0px;
            border: none;
            width: 2em;
            aspect-ratio: 128 / 48;
            height: auto;
            min-height: 0px;
            padding: 4px;
            position: absolute;
            top: 4px;
            left: 4px;
            transition: opacity 0.2s;
            & > svg {
                vertical-align: top;
                width: 100%;
                /* aspect-ratio: 140 / 40; */
                height: auto;
                /* vertical-align: center; */
            }
            &:hover {
                opacity: 1;
            }
        }
    }
</style>
