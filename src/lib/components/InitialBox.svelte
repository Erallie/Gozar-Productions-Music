<script lang="ts">
	import { type InitialBoxProps } from "$lib/types/types";
	let { imageSource, imageAlt, children }: InitialBoxProps = $props();
</script>

<section id="home">
	<div>
		<img src={imageSource} alt={imageAlt} class="rounded" />
	</div>
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
		& > div:first-child {
			flex-shrink: 0;
			display: flex;
			width: 25%;
			padding: 0px;
			margin: var(--half-margin);
			& > img {
				width: 100%;
				object-fit: cover;
			}
		}
		& > div:last-child {
			margin: auto 32px;
			width: 75%;
		}
	}
	@media (max-width: 960px) {
		section {
			flex-wrap: wrap;
			background: none;
			margin: 0px auto;
			padding: 0px;
			& > div {
				background-color: white;
				border-radius: var(--rounded-radius);
			}
			& > div:first-child {
				padding: var(--margins);
				margin: var(--half-margin) auto;
				width: 300px;
				height: min-content;
				& > img {
					width: 100%;
					margin: 0px;
				}
			}
			& > div:last-child {
				padding: var(--margins) 32px;
				margin: var(--margins) auto;
				width: calc(100% + var(--margins));
				/* width: 100%; */
			}
		}
	}
	@media (max-width: 480px) {
		/* Styles for mobile devices */
		section {
			flex-wrap: wrap;
			background: white;
			width: calc(100% - var(--margins) * 2);

			padding: var(--margins);
			& > div:first-child {
				background: none;
				border-radius: 0px;

				padding: 0px;
				width: calc(100% - var(--margins));
				& > img {
					width: 100%;
				}
			}
			& > div:last-child {
				padding: 0px;
				margin: auto var(--margins);
				width: max-content;
			}
			margin: var(--margins) auto;
		}
	}
</style>
