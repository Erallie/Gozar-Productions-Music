<script lang="ts">
    import { page } from "$app/state";
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
</header>

<style>
</style>
