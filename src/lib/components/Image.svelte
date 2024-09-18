<script lang="ts">
	export let imageObject: ImageModel;
	export let alt: string;
	let modalVisible = false;

	import { createEventDispatcher, onMount } from "svelte";

	const dispatch = createEventDispatcher();

	function modal() {
		dispatch("modal", {
			src: imageObject.url,
		});
	}

	let showImage = false;

	onMount(() => {
		setTimeout(() => {
			showImage = true;			
		}, 150);
	});
</script>

<div
	class="image-wrapper"
	style={`width: 100%; padding-bottom: ${(imageObject.height / imageObject.width) * 100}%;`}
>
	{#if showImage}
		<img src={imageObject.url} {alt}>
	{/if}
</div>

<!-- 
<GraphImage 
on:click={modal}
on:keypress={modal}
 image={imageObject} maxWidth={800} blurryPlaceholder={true} load={"eager"} backgroundColor={true} fadeIn={true} /> -->
<style>
	@keyframes placeHolderShimmer {
		0% {
			background-position: -468px 0;
		}
		100% {
			background-position: 468px 0;
		}
	}
	.image-wrapper {
		animation-duration: 1.25s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-name: placeHolderShimmer;
		animation-timing-function: linear;
		background: black;
		background: linear-gradient(
			to right,
			var(--gray200) 10%,
			var(--gray300) 18%,
			var(--gray200) 33%
		);
		background-size: 800px 104px;
		position: relative;
	}
	.image-wrapper img {
		position: absolute;
	}
</style>
