<script lang="ts">
	import { copy } from "svelte-copy";
	import MarkGoldSVG from "$lib/assets/logos/marks/svg/Mark-Gold.svg";
	import MarkBlackSVG from "$lib/assets/logos/marks/svg/Mark-Black.svg";
	import MarkWhiteSVG from "$lib/assets/logos/marks/svg/Mark-White.svg";
	import MarkGuides from "$lib/assets/logos/marks/svg/Mark-Guides.svg";

	import MarkGoldPNG from "$lib/assets/logos/marks/png/Mark-Gold.png";
	import MarkBlackPNG from "$lib/assets/logos/marks/png/Mark-Black.png";
	import MarkWhitePNG from "$lib/assets/logos/marks/png/Mark-White.png";

	import TypeGoldSVG from "$lib/assets/logos/type/svg/Type-Gold.svg";
	import TypeBlackSVG from "$lib/assets/logos/type/svg/Type-Black.svg";
	import TypeWhiteSVG from "$lib/assets/logos/type/svg/Type-White.svg";
	import TypeGuides from "$lib/assets/logos/type/svg/Type-Guides.svg";

	import TypeGoldPNG from "$lib/assets/logos/type/png/Type-Gold.png";
	import TypeBlackPNG from "$lib/assets/logos/type/png/Type-Black.png";
	import TypeWhitePNG from "$lib/assets/logos/type/png/Type-White.png";

	import SealSVG from "$lib/assets/logos/seal/svg/5669-Seal.svg";

	import SealPNG from "$lib/assets/logos/seal/png/5669-Seal.png";
</script>

<svelte:head>
  <title>Branding - Techmen Robotics - FRC Team 5669</title>
</svelte:head>

<h1>Branding Guidelines</h1>
<p>
	Team spirit is important to us. It shows who we are and what we are focused
	on. We are a laid back team, but when it comes to our team's representation,
	we request that you respect the guidelines we have for our branding.
</p>
<h2>Logos</h2>
<p>Please do not edit, change, distort, recolor, or reconfigure our logos.</p>
<h3>Logo Mark</h3>
<div class="logomark-wrap">
	<div class="logomark-indiv logomark-black">
		<div class="logomark-btn">
			<a href={MarkGoldPNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={MarkGoldSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={MarkGoldSVG} alt="" />
	</div>
	<div class="logomark-indiv logomark-black">
		<div class="logomark-btn">
			<a href={MarkWhitePNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={MarkWhiteSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={MarkWhiteSVG} alt="" />
	</div>
	<div class="logomark-indiv logomark-gold">
		<div class="logomark-btn">
			<a href={MarkBlackPNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={MarkBlackSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={MarkBlackSVG} alt="" />
	</div>
	<div class="logomark-indiv logomark-white">
		<div class="logomark-btn">
			<a href={MarkBlackPNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={MarkBlackSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={MarkBlackSVG} alt="" />
	</div>
</div>
<h3>Logo Type</h3>

<div class="logotype-wrap">
	<div class="logotype-indiv logotype-black">
		<div class="logotype-btn">
			<a href={TypeGoldPNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={TypeGoldSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={TypeGoldSVG} alt="" />
	</div>
	<div class="logotype-indiv logotype-black">
		<div class="logotype-btn">
			<a href={TypeWhitePNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={TypeWhiteSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={TypeWhiteSVG} alt="" />
	</div>
	<div class="logotype-indiv logotype-gold">
		<div class="logotype-btn">
			<a href={TypeBlackPNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={TypeBlackSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={TypeBlackSVG} alt="" />
	</div>
	<div class="logotype-indiv logotype-white">
		<div class="logotype-btn">
			<a href={TypeBlackPNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={TypeBlackSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={TypeBlackSVG} alt="" />
	</div>
</div>
<h3>Team Seal</h3>
<div class="seal-wrap">
	<div class="seal-indiv seal-black">
		<div class="seal-btn">
			<a href={SealPNG} download="">
				<i class="ri-download-cloud-2-line" />
				.PNG
			</a>
			<a href={SealSVG} download="">
				<i class="ri-download-cloud-2-line" />
				.SVG
			</a>
		</div>
		<img src={SealSVG} alt="Seal"/>
	</div>
</div>
<h2>Spacing</h2>
<div class="spacing-wrap">
	<div class="spacing-indiv">
		<img src={TypeGuides} alt="" />
	</div>
	<div class="spacing-indiv">
		<img src={MarkGuides} alt="" />
	</div>
</div>
<h2>Fonts</h2>

<div class="font-wrap">
	<div class="font-border-left" />
	<div class="font-border-right" />
	<div class="font-border-top" />
	<div class="font-border-bottom" />

	<h1>Heading 1</h1>
	<p>Space Grotesk Bold - 50px</p>
	<h2>Heading 2</h2>
	<p>Space Grotesk Bold - 40px</p>
	<h3>Heading 3</h3>
	<p>Space Grotesk Bold - 30px</p>
	<p style="margin-top:50px; margin-bottom: 30px !important;">
		Body paragraphs - JetBrains Mono - 16px
	</p>
</div>
<h2>Colors</h2>
<div id="color-wrapper">
	<div id="color-main">
		<div class="color-inner">
			<h2>Techmen Gold</h2>
			<h4>YELLOW</h4>
			<div class="bottom">
				<p use:copy={"#ffe629"}>#ffe629</p>
				<p use:copy={"CMYK 0%, 10%, 84%, 0%"}>CMYK 0%, 10%, 84%, 0%</p>
			</div>
		</div>
	</div>
	<div id="color-grays">
		<div class="color-gray g-100">
			<div class="color-inner">
				<h2>Jet Black</h2>
				<h4>gray 100</h4>
				<div class="bottom">
					<p use:copy={"#000000"}>#000000</p>
					<p use:copy={"CMYK 0%, 0%, 0%, 100%"}>CMYK 0%, 0%, 0%, 100%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-200">
			<div class="color-inner">
				<h2>Gunmetal</h2>
				<h4>gray 200</h4>
				<div class="bottom">
					<p use:copy={"#121213"}>#121213</p>
					<p use:copy={"CMYK 0%, 0%, 0%, 93%"}>CMYK 0%, 0%, 0%, 93%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-300">
			<div class="color-inner">
				<h2>Charcoal</h2>
				<h4>gray 300</h4>
				<div class="bottom">
					<p use:copy={"#202026"}>#202026</p>
					<p use:copy={"CMYK 2%, 2%, 0%, 85%"}>CMYK 2%, 2%, 0%, 85%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-400">
			<div class="color-inner">
				<h2>Space Gray</h2>
				<h4>gray 400</h4>
				<div class="bottom">
					<p use:copy={"#3f3f44"}>#3f3f44</p>
					<p use:copy={"CMYK 2%, 2%, 0%, 73%"}>CMYK 2%, 2%, 0%, 73%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-500">
			<div class="color-inner">
				<h2>Ash Gray</h2>
				<h4>gray 500</h4>
				<div class="bottom">
					<p use:copy={"#696970"}>#696970</p>
					<p use:copy={"CMYK 3%, 3%, 0%, 56%"}>CMYK 3%, 3%, 0%, 56%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-600">
			<div class="color-inner">
				<h2>Aluminum</h2>
				<h4>gray 600</h4>
				<div class="bottom">
					<p use:copy={"#9b9ba3"}>#9b9ba3</p>
					<p use:copy={"CMYK 3%, 3%, 0%, 36%"}>CMYK 3%, 3%, 0%, 36%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-700">
			<div class="color-inner">
				<h2>Silver</h2>
				<h4>gray 700</h4>
				<div class="bottom">
					<p use:copy={"#babac2"}>#babac2</p>
					<p use:copy={"CMYK 3%, 3%, 0%, 24%"}>CMYK 3%, 3%, 0%, 24%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-800">
			<div class="color-inner">
				<h2>Platinum</h2>
				<h4>gray 800</h4>
				<div class="bottom">
					<p use:copy={"#dbdbe2"}>#dbdbe2</p>
					<p use:copy={"CMYK 3%, 3%, 0%, 11%"}>CMYK 3%, 3%, 0%, 11%</p>
				</div>
			</div>
		</div>
		<div class="color-gray g-900">
			<div class="color-inner">
				<h2>Prism White</h2>
				<h4>gray 900</h4>
				<div class="bottom">
					<p use:copy={"#ffffff"}>#ffffff</p>
					<p use:copy={"CMYK 0%, 0%, 0%, 0%"}>CMYK 0%, 0%, 0%, 0%</p>
				</div>
			</div>
		</div>
	</div>
</div>


<style>
	#color-wrapper,
	#color-grays {
		width: 100%;
		clip-path: polygon(
			0 15px,
			15px 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			0% 100%
		);
	}
	#color-main {
		background: var(--yellow);
		height: 250px;
	}
	#color-grays {
		display: flex;
	}

	.color-gray {
		flex-basis: 1px;
		height: 200px;
		flex-shrink: 1;
		flex-grow: 1;
		transition: flex-basis 0.15s ease-in-out !important;
		overflow: hidden;
	}
	.color-gray.g-100 {
		background: var(--gray100);
	}
	.color-gray.g-200 {
		background: var(--gray200);
	}
	.color-gray.g-300 {
		background: var(--gray300);
	}
	.color-gray.g-400 {
		background: var(--gray400);
	}
	.color-gray.g-500 {
		background: var(--gray500);
	}
	.color-gray.g-600 {
		background: var(--gray600);
	}
	.color-gray.g-700 {
		background: var(--gray700);
	}
	.color-gray.g-800 {
		background: var(--gray800);
	}
	.color-gray.g-900 {
		background: var(--gray900);
	}

	.g-100 *,
	.g-200 *,
	.g-300 *,
	.g-400 *,
	.g-500 * {
		color: var(--white);
	}
	.g-600 *,
	.g-700 *,
	.g-800 *,
	.g-900 * {
		color: var(--black);
	}

	.color-gray h4,
	#color-main h4 {
		opacity: 0.5;
		font-family: "JetBrains Mono";
		font-weight: 100;
		text-transform: uppercase;
	}

	.color-gray:hover {
		flex-basis: 350px;
	}
	.color-gray:hover .color-inner {
		opacity: 1;
	}
	.color-inner {
		position: relative;
		width: 100%;
		height: 100%;
		min-width: 0px;
		padding: 20px;
		box-sizing: border-box;
		opacity: 0;
		transition: all 0.15s ease-in-out;
		word-break: keep-all;
	}
	.color-inner * {
		word-break: keep-all;
		word-wrap: unset;
		white-space: nowrap;
		margin: 0;
		text-align: left;
	}
	#color-main .color-inner,
	#color-main .color-inner * {
		opacity: 1 !important;
		color: var(--black);
	}
	.bottom {
		position: absolute;
		bottom: 20px;
		text-transform: uppercase;
	}
	.bottom * {
		cursor: pointer;
	}

	.logomark-wrap {
		width: 100%;
		height: fit-content;
		padding: 0;
		margin: 0;
		margin-top: 0px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 15px;
	}
	.logomark-black,
	.logotype-black {
		background-color: #141414;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 8 8'%3E%3Cg fill='%23080808' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
	}
	.logomark-gold,
	.logotype-gold {
		background-color: #ffdf28;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 8 8'%3E%3Cg fill='%23ffe629' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
	}
	.logomark-white,
	.logotype-white {
		background-color: #f6f6f6;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 8 8'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
	}
	.logomark-white a,
	.logomark-gold a,
	.logotype-white a,
	.logotype-gold a {
		color: var(--gray100);
	}
	.logomark-white a::before,
	.logomark-gold a::before,
	.logomark-black a::before,
	.logotype-white a::before,
	.logotype-gold a::before,
	.logotype-black a::before {
		border-bottom: none;
	}
	.logomark-black a:hover::before,
	.logotype-black a:hover::before {
		border-bottom: 1px dashed var(--yellow);
	}
	.logomark-white a:hover::before,
	.logomark-gold a:hover::before,
	.logotype-white a:hover::before,
	.logotype-gold a:hover::before {
		border-bottom: 1px dashed var(--gray400);
	}
	.logomark-indiv {
		position: relative;
		--margin: 15px;
		display: table-cell;
		width: calc(50% - (var(--margin)));
		padding-bottom: 0 !important;
		overflow: hidden;
		margin-bottom: calc(var(--margin));
		margin-top: calc(var(--margin));
		height: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		clip-path: polygon(
			0 15px,
			15px 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			0% 100%
		);
		-webkit-clip-path: polygon(
			0 15px,
			15px 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			0% 100%
		);
	}
	.logomark-btn {
		position: absolute;
		font-weight: 800;
		bottom: 5px;
		left: 10px;
	}
	.logomark-indiv img,
	.logotype-indiv img {
		flex-shrink: 0;
		min-width: 100%;
		min-height: 100%;
		margin: 0 !important;
	}

	.logotype-wrap,
	.seal-wrap {
		width: 100%;
		height: fit-content;
		padding: 0;
		margin: 0;
		margin-top: 0px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 15px;
	}

	.logotype-indiv {
		position: relative;
		--margin: 15px;
		display: table-cell;
		width: 100%;
		padding-bottom: 0 !important;
		overflow: hidden;
		margin-bottom: calc(var(--margin));
		margin-top: calc(var(--margin));
		height: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		clip-path: polygon(
			0 15px,
			15px 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			0% 100%
		);
		-webkit-clip-path: polygon(
			0 15px,
			15px 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			0% 100%
		);
	}

	.logotype-btn {
		position: absolute;
		font-weight: 800;
		bottom: 5px;
		left: 10px;
	}

	.seal-black {
		background-color: #141414;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 8 8'%3E%3Cg fill='%23080808' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
	}
	.seal-indiv {
		position: relative;
		--margin: 15px;
		display: table-cell;
		width: 100%;
		padding-bottom: 0 !important;
		overflow: hidden;
		margin-bottom: calc(var(--margin));
		margin-top: calc(var(--margin));
		height: 450px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		clip-path: polygon(
			0 15px,
			15px 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			0% 100%
		);
		-webkit-clip-path: polygon(
			0 15px,
			15px 0,
			100% 0,
			100% calc(100% - 15px),
			calc(100% - 15px) 100%,
			0% 100%
		);
	}

	.seal-btn {
		position: absolute;
		font-weight: 800;
		bottom: 5px;
		left: 10px;
	}

	.seal-indiv img {
		height: 80%;
		margin-top: 0;
	}

	@media (max-width: 800px) {
		.logomark-indiv {
			--margin: 15px;
			width: 100%;
		}
		.logomark-indiv img {
			width: 12%;
			max-height: 300px;
		}
		.logotype-indiv {
			height: 175px;
		}
	}

	.spacing-wrap {
		width: 100%;
		height: fit-content;
		padding: 0;
		margin: 0;
		margin-top: 0px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-top: 15px;
	}
	.spacing-indiv {
		position: relative;
		--margin: 15px;
		display: table-cell;
		padding-bottom: 0 !important;
		margin-bottom: calc(var(--margin));
		margin-top: calc(var(--margin));
	}
	.spacing-indiv img {
		width: 100%;
	}
	.font-wrap {
		position: relative;
    padding: 45px 25px;
	}
	.font-wrap * {
		text-align: center;
	}

	.font-border-left,
	.font-border-right {
    --padding:150px;
		border-left: 2px dashed var(--gray300);
		height: calc(100% + (2 * var(--padding)));
		top: calc(var(--padding) * -1);
		width: 0px;
		position: absolute;
		mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			black var(--padding),
			black calc(100% - var(--padding)),
			transparent 100%
		);
	}
	.font-border-left {
		left: 0;
	}
	.font-border-right {
		right: 0;
	}

  .font-border-top,
	.font-border-bottom {
    --padding:150px;
		border-top: 2px dashed var(--gray300);
		width: calc(100% + (2 * var(--padding)));
		left: calc(var(--padding) * -1);
		height: 0px;
		position: absolute;
		mask-image: linear-gradient(
			to right,
			transparent 0%,
			black var(--padding),
			black calc(100% - var(--padding)),
			transparent 100%
		);
	}
  
	.font-border-top {
		top: 0;
	}
	.font-border-bottom {
		bottom: 0;
	}
</style>
