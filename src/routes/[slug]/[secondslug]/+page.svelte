<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
	export let data;
	let { navigations } = data;
	$: ({ navigations } = data);
	import { page } from "$app/stores";
	console.log($page.params)
	let slug
	let secondslug
	$: slug = $page.params.slug
	$: secondslug = $page.params.secondslug
</script>
{#key $page.params.secondslug}
	{#each navigations as nav}
		{#if nav.slug == slug && nav.pages}
		{#each nav.pages as pg}
			{#if pg.slug == secondslug}
			<h1>{pg.title}</h1>
			
				<SvelteMarkdown source={pg.page.content.markdown}></SvelteMarkdown>
			{/if}
		{/each}
		{/if}
	{/each}
{/key}