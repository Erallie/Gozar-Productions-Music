<script lang="ts">
    let { title, children } = $props();
</script>

<div class="releases rounded">
    <h1>{title}</h1>
    <div class="grid">
        {@render children()}
    </div>
</div>

<style>
    .releases {
        width: 80%;
        margin: 20px auto;
        padding: 20px;
        background-color: white;
        box-sizing: border-box;
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
