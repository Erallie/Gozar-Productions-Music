<script lang="ts">
	let { link, imageSource, imageAlt, children } = $props();
</script>

<a href={link} target="_blank">
	<button class="listen-button">
		<span>{imageAlt}</span
		><!-- <img
			src={imageSource}
			alt={imageAlt} /> -->{@render children()}
	</button>
</a>

<style>
	button {
		--text-color: var(--foreground);
		display: inline-flex; /* Use flexbox for horizontal alignment */
		align-items: center; /* Center items vertically */
		font-family: Montserrat;
		color: rgb(var(--text-color));
		/* border-radius: 50px; */
		border-radius: var(--rounded-radius);
		padding: 16px 28px;
		border: 2px solid rgb(var(--text-color));
		background-color: rgba(var(--text-color), 0);
		/* text-align: center; */
		letter-spacing: 0.2em;
		text-transform: uppercase;
		font-size: 0.95rem;
		margin: var(--half-margin);
		transition: background-color 0.3s;
		width: calc(100% - var(--margins));
		& > span {
			margin-left: auto;
		}
		&:hover {
			background-color: rgba(var(--text-color), 0.15);
		}
	}

	a {
		text-align: center;
		margin: auto;
		width: 100%;
	}
</style>
