<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	export let data;
	let { navigations } = data;
	$: ({ navigations } = data);
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	console.log($page);
	let currentPage;
	$: currentPage = navigations.find((nav: any) => nav.slug == $page.params.slug);
</script>

<svelte:head>
  <title>{currentPage != null ? currentPage.title : ""} - Techmen Robotics - FRC Team 5669</title>
</svelte:head>
{#if currentPage != null && currentPage.page}
<h1>{currentPage != null ? currentPage.title : ""}</h1>
<SvelteMarkdown source={currentPage.page.content.markdown} />
{/if}
