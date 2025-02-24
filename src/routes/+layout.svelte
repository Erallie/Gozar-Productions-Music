<script lang="ts">
    import Header from "./Header.svelte";

    import "../app.css";

    let { children, data } = $props();
</script>

<div class="app">
    <Header />

    <main>
        <div class="title-block">
            <img src="/erika-gozar.png" alt="Erika Gozar" />
            <div>
                <h1>Erika Gozar</h1>
                <p>
                    Erika Gozar has written music since she was 8 or 9 with
                    simply an ear for music and no formal training in
                    composition. Under the musical guidance of John Massaro and
                    the vocal instruction of Gail Dubinbaum, Erika currently
                    writes pieces for orchestra and voice in the style of film
                    and musical theater.
                </p>
            </div>
        </div>
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

    .title-block {
        width: calc(100% - 40px);
        margin: 20px;
        padding: 10px;
        background-color: white;
        box-sizing: border-box;
        display: flex;
    }

    .title-block > img {
        aspect-ratio: 1/ 1;
        width: 25%;
    }

    .title-block > * {
        margin: 10px;
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
