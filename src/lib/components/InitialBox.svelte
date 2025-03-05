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
	@media (max-width: 480px) {
		/* Styles for mobile devices */
		section {
			flex-wrap: wrap;
			width: calc(100% - var(--margins) * 2);
			& > img {
				width: calc(100% - var(--margins));
			}
			& > div {
				margin: auto var(--margins);
				width: max-content;
			}
		}
	}
</style>
