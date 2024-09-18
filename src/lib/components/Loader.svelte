<script lang="ts">
	export let loaderState = "none";
	let outAnim = false;
	let inAnim = false;

	var delays = new Array(8).fill(0);

	function scale(number: number, outMin: number, outMax: number) {
		let inMin = 0;
		let inMax = 1;
		return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}
	function resetDelays() {
		delays.forEach((e, i) => {
			delays[i] = scale(Math.random(), 0.15, 0.5);
		});
	}

	let queueIn = false;
	let currentlyOut = false;

	$: if (loaderState === "none") {
		outAnim = false;
		inAnim = false;
		resetDelays();
	} else if (loaderState === "out") {
		outAnim = true;
		inAnim = false;
		resetDelays();
		currentlyOut = true;
		setTimeout(() => {
			currentlyOut = false;
			if (queueIn) {
				outAnim = false;
				inAnim = true;
				resetDelays();
                queueIn = false
			}
		}, 500);
	} else if (loaderState === "in") {
		if (currentlyOut) {
			queueIn = true;
		} else {
			outAnim = false;
			inAnim = true;
			resetDelays();
		}
	}
</script>

<div id="loader" class={outAnim ? "out" : "" + inAnim ? "in" : ""}>
	<div id="l-1" style="animation-duration: {delays[0]}s" />
	<div id="l-2" style="animation-duration: {delays[1]}s" />
	<div id="l-3" style="animation-duration: {delays[2]}s" />
	<div id="l-4" style="animation-duration: {delays[3]}s" />
</div>

<style>
	#loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 999999999999;
	}
	#l-1,
	#l-2,
	#l-3,
	#l-4 {
		position: absolute;
		left: 0;
		width: 100%;
		height: 25%;
		background: var(--yellow);
	}
	#l-1 {
		top: 0;
	}
	#l-2 {
		top: 25%;
	}
	#l-3 {
		top: 50%;
	}
	#l-4 {
		top: 75%;
	}
	.in * {
		right: 0 !important;
		left: unset !important;
		animation: in 0.3s var(--snap-easing) forwards;
	}
	.out * {
		left: 0 !important;
		right: unset !important;
		animation: out 0.3s var(--snap-easing) forwards;
	}
	@keyframes in {
		0% {
			width: 100%;
		}
		100% {
			width: 0%;
		}
	}
	@keyframes out {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
</style>
