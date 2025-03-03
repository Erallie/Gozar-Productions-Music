<script lang="ts">
	import type { ListSectionWrapperProps } from "$lib/types/types";

	let { ordered, children }: ListSectionWrapperProps = $props();
</script>

{#if ordered}
	<ol>
		{@render children()}
	</ol>
{:else}
	<ul>
		{@render children()}
	</ul>
{/if}

<style>
	ol,
	ul {
		list-style-position: inside;
		/* margin: 0px auto; */
		padding: 0px;
		margin-inline: 0px;
		margin-block: 0px;
	}

	ul {
		list-style-type: none;
	}
</style>
