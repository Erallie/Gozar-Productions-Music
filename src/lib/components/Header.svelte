<script lang="ts">
    import { page } from "$app/state";
    import logo from "$lib/images/gozar-productions-logo.svg";
</script>

<header>
    <div id="header-bar">
        <nav>
            <ul>
                <li
                    aria-current={page.url.pathname === "/"
                        ? "page"
                        : undefined}
                >
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="https://gozarproductions.com">Gozar Productions</a>
                </li>
            </ul>
        </nav>
    </div>

    <hgroup>
        <div>
            <h1>Gozar Productions</h1>
            <h2>Music</h2>
        </div>
        <img src={logo} alt="Gozar Productions Logo" />
    </hgroup>
</header>

<style>
    hgroup {
        display: flex;
        align-items: center;
        justify-content: center;
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
    hgroup > * {
        margin: auto 0.4em;
    }
</style>
