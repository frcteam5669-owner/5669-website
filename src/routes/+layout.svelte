<script lang="ts">
	import { fade } from "svelte/transition";
	import { beforeNavigate, afterNavigate } from "$app/navigation";
	import Loader from "$lib/components/Loader.svelte";

	import Header from "$lib/components/Header.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "$lib/styles/main.css";
	import "$lib/styles/prism-theme.css";
	import "$lib/styles/font.css";
	let breakpoint = 1100;
	let y: number;
	let open = false;
	function handleHamburgerClick() {
		console.log("asdf");
		open = !open;
	}
	import { page } from "$app/stores";
	let pathName: string | string[] = "";
	page.subscribe(() => {
		pathName = $page.url.pathname.split("/");
		pathName.pop();
		pathName = pathName.join("/");
		open = false;
	});

	export let data;
	let { navigations, pathname } = data;
	$: ({ navigations, pathname } = data); // so it stays in sync when `data` changes
	let loaderState = "none";
	beforeNavigate(({ to }) => {
		if (to?.route.id) {
			loaderState = "out";
		}
	});
	afterNavigate(() => {
		loaderState = "in";
		document.body.scrollTo({top: 0, behavior: 'instant'});
	});
</script>

<svelte:window
	bind:innerWidth={y}
	on:resize={(e) => {
		open = false;
	}}
/>
<Loader {loaderState} />
<Sidebar {navigations} {open} />
<Header {breakpoint} {y} on:click={handleHamburgerClick} {open} {navigations} />
{#key pathname}
	<main
		in:fade={{ duration: 300, delay: 550 }}
		out:fade={{ duration: 500 }}
	>
		<slot />
	</main>
{/key}
<Footer {navigations} />
