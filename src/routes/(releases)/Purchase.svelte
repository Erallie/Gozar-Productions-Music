<script lang="ts">
	let { children } = $props();
</script>

<section id="purchase">
	<h1>Purchase</h1>
	{@render children()}
</section>

<style>
	section {
		padding: var(--half-margin) var(--margins);
	}
</style>
