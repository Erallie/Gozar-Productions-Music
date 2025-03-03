<script lang="ts">
	import { type InitialBoxProps } from "$lib/types/types";
	let { imageSource, imageAlt, children }: InitialBoxProps = $props();
</script>

<section id="home">
	<img src={imageSource} alt={imageAlt} class="rounded" />
	<div>
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
		& > img {
			width: 25%;
			object-fit: cover;
			margin: var(--half-margin);
		}
		& > div {
			margin: auto 32px;
			width: 75%;
		}
	}
</style>
