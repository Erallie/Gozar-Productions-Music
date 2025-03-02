<script lang="ts">
	let { link, imageSource, imageAlt } = $props();
</script>

<a href={link} target="_blank">
	<button>
		<span>{imageAlt}</span><img src={imageSource} alt={imageAlt} />
	</button>
</a>

<style>
	button {
		--text-color: 0, 0, 0;
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
		margin: 10px;
		transition: background-color 0.3s;
		width: calc(100% - 20px);
		& img {
			width: auto;
			/* aspect-ratio: 200 / 60; */
			height: 1.5em;
			vertical-align: middle; /* This can be removed with flexbox */
			transform: translate(0, -1px);
			padding-left: 0.5em;
			transition: height 0.3s;
			margin-right: auto;
		}
		& > span {
			margin-left: auto;
		}
		&:hover {
			background-color: rgba(var(--text-color), 0.15);
			& img {
				height: 1.8em;
			}
		}
	}

	a {
		text-align: center;
		margin: auto;
		width: 100%;
	}
</style>
