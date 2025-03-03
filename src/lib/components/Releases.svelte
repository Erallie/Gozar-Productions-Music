<script lang="ts">
	let { title, children } = $props();
</script>

<section id="releases">
	<h1>{title}</h1>
	<div>
		{@render children()}
	</div>
</section>

<style>
	section {
		width: 80%;
		& > div {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr;
			gap: 0px;
		}
	}
	h1 {
		text-align: center;
	}
	@media (max-width: 480px) {
		/* Styles for mobile devices */
		section {
			width: calc(100% - var(--margins) * 2);
			& > div {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}
</style>
