<script lang="ts">
	import { page } from "$app/stores";
	import SvelteMarkdown from "svelte-markdown";
	import { Video } from "flowbite-svelte";
	import { onMount } from "svelte";
  import MemberList from "../../lib/components/MemberList.svelte";
  import List from "../../lib/components/List.svelte";
	export let data;
	let { homePage, navigations, url } = data;
	$: ({ homePage, navigations, url } = data);
</script>

<svelte:head>
  <title>About - Techmen Robotics - FRC Team 5669</title>
</svelte:head>
<h1>About</h1>
<Video
	src={homePage.backgroundVideo.url}
	class="w-full max-w-full h-auto"
	controls
/>

{#key url}
	{#each navigations as nav}
		{#if nav.slug == "about"}
			<SvelteMarkdown source={nav.page.content.markdown} renderers={{listitem: MemberList, list:List}}/>
		{/if}
	{/each}
{/key}