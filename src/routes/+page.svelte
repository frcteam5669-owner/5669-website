<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";
	import { Video } from "flowbite-svelte";
	import { onMount } from "svelte";
	export let data;
	let { homePage } = data;
	$: ({ homePage } = data);
	let video;
	onMount(() => {
		document.querySelectorAll("video").forEach(e=>{
			e.volume = 0
		})
	});
</script>

<svelte:head>
	<title>Techmen Robotics - FRC Team 5669</title>
</svelte:head>

<div class="home-span-wrap">
	<div class="home-span-content">
		<h1>{homePage.headline}</h1>
		<SvelteMarkdown source={homePage.description} />
		{#each homePage.buttons as button}
			<a href={button.destination} class={button.important ? "btn yellow-btn" : "btn white-btn"}>{button.displayText}</a> &nbsp;
		{/each}
	</div>
</div>
<div class="home-gradient" />
<div class="home-video">
	<Video bind:this={video} src={homePage.backgroundVideo.url} autoplay muted loop />
</div>
<style>
	h1 {
		text-align: left;
	}
</style>