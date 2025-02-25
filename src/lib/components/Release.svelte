<script lang="ts">
    let { link, imageSource, imageAlt } = $props();
</script>

<div class="rounded">
    <a href={link}><img src={imageSource} alt={imageAlt} /></a>
</div>

<style>
    div {
        width: 80%;
        margin: 10%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        transition:
            width 0.3s,
            margin 0.3s;
    }

    img {
        width: 100%;
    }

    div:has(> a:hover) {
        width: 100%;
        margin: 0px;
    }
</style>
