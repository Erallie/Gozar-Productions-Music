<script lang="ts">
	import Portal from "svelte-portal";
	export let onClose: () => void;
</script>

<Portal target=".app">
	<div class="backdrop" on:click={onClose}></div>

	<section class="rounded modal">
		<!-- Your modal content goes here -->
		<h1>Coming Soon . . .</h1>
		<button on:click={onClose} aria-label="close"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="100"
				height="100"
				viewBox="-10 -10 120 120">
				<g stroke="currentColor" stroke-width="20">
					<line id="line-vertical" x1="0" y1="0" x2="100" y2="100" />
					<line
						id="line-horizontal"
						x1="100"
						y1="0"
						x2="0"
						y2="100" />
				</g>
			</svg>
		</button>
	</section>
</Portal>

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 400;
	}

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 401;
		min-width: 300px;
		background-color: rgba(119, 46, 46, 0.95);
		color: white;
		text-align: center;
		padding: calc(var(--margins) / 2) calc(var(--margins) * 2);
	}
	button {
		color: inherit;
		opacity: 0.7;
		background: none;
		margin: 0px;
		border: none;
		width: 2em;
		/* aspect-ratio: 128 / 48; */
		height: min-content;
		min-height: 0px;
		padding: 4px;
		position: absolute;
		top: 12px;
		left: 12px;
		transition: opacity 0.2s;
		& > svg {
			vertical-align: top;
			width: 90%;
			/* aspect-ratio: 140 / 40; */
			height: auto;
			/* vertical-align: center; */
		}
		&:hover {
			opacity: 1;
		}
	}
</style>
