<script lang="ts">
    import Header from "$lib/components/Header.svelte";

    import "../app.css";

    let { children, data } = $props();
</script>

<div class="app">
    <Header />

    <main>
        {@render children()}
    </main>

    <footer>
        <h1>Gozar Productions</h1>
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
</style>
