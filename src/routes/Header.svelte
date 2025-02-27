<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { page } from "$app/state";
    import logo from "$lib/images/gozar-productions-logo.svg";

    let isSticky = $state(false);
    let hgroupElement: HTMLElement | null = null;

    const handleScroll = () => {
        if (hgroupElement) {
            const rect = hgroupElement.getBoundingClientRect();
            isSticky = rect.top <= 10; // Check if the top of the hgroup is less than or equal to 10px from the top of the viewport
        }
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header>
    <nav>
        <ul>
            <li aria-current={page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="https://gozarproductions.com">Gozar Productions</a>
            </li>
        </ul>
    </nav>
</header>
<hgroup bind:this={hgroupElement} class={isSticky ? "sticky" : undefined}>
    <div>
        <h1>Gozar Productions</h1>
        <h2>Music</h2>
    </div>
    <img src={logo} alt="Gozar Productions Logo" />
</hgroup>

<style>
    hgroup {
        z-index: 100;
        position: sticky;
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        padding: 10px;
        margin: -6px auto;
        text-shadow:
            0 0 1em white,
            0 0 1em white;

        border-radius: 35px;
        transition: background-color 0.3s;
    }

    hgroup.sticky {
        text-shadow: none;
        background-color: hsl(0, 0%, 97%);
        /* border-style: solid; */
        /* border-width: 2px; */
    }
    hgroup > img {
        aspect-ratio: 1 / 1;
        height: 4em;
        vertical-align: middle;
    }
    hgroup h1,
    hgroup h2 {
        text-align: right;
        padding: 0px;
        margin: 0px;
    }

    hgroup > :first-child {
        margin: auto 0px;
        margin-right: 0.4em;
    }
    hgroup > :last-child {
        margin: auto 0px;
        margin-left: 0.4em;
    }

    header {
        width: 100%;
    }

    nav {
        /* Add any additional styles for the nav if needed */
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        /* Add any additional styles for the list items if needed */
    }
</style>
