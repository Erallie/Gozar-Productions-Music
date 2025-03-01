<script lang="ts">
    import { type InitialBoxProps } from "$lib/types/types";
    let { imageSource, imageAlt, children }: InitialBoxProps = $props();
</script>

<section id="home">
    <img src={imageSource} alt={imageAlt} class="rounded" />
    <div id="title-block-content">
        {@render children()}
    </div>
</section>

<style>
    section {
        width: 80%;
        display: flex;
        text-align: left;
        height: min-content;
        /* height: 300px; */
    }

    section > img {
        width: 25%;
        object-fit: cover;
        margin: 10px;
    }

    #title-block-content {
        margin: auto 32px;
        width: 75%;
    }
</style>
