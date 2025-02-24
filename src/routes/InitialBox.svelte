<script lang="ts">
    import { type InitialBoxProps } from "$lib/types/types";
    let { imageSource, imageAlt, children }: InitialBoxProps = $props();
</script>

<div id="title-block">
    <img src={imageSource} alt={imageAlt} />
    <div id="title-block-content">
        {@render children()}
    </div>
</div>

<style>
    #title-block {
        width: 80%;
        margin: 20px auto;
        padding: 10px;
        background-color: white;
        box-sizing: border-box;
        display: flex;
        text-align: left;
        height: min-content;
        /* height: 300px; */
    }

    #title-block > img {
        width: 25%;
        object-fit: cover;
        margin: 10px;
    }

    #title-block-content {
        margin: auto 32px;
        width: 75%;
    }
</style>
