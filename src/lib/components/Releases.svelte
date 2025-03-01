<script lang="ts">
    let { title, children } = $props();
</script>

<section id="releases">
    <h1>{title}</h1>
    <div class="grid">
        {@render children()}
    </div>
</section>

<style>
    section {
        width: 80%;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        gap: 0px;
    }
    h1 {
        text-align: center;
    }
</style>
