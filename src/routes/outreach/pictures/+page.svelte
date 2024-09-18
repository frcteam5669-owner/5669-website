<script lang="ts">
    import Gear from "$lib/components/Gear.svelte";
    import Image from "$lib/components/Image.svelte";
    let nItems = 30;
    let items = [...Array(nItems)];
    items.forEach((element, i) => {
      items[i] =
        "https://cataas.com/cat?height=" + Math.floor(Math.random() * 800);
    });
  
    let [minColWidth, maxColWidth, gap] = [300, 500, 10];
    let width, height;
  
    import { MasonryGrid } from "@egjs/svelte-grid";
    import Modal from "../../../lib/components/Modal.svelte";
  
    const defaultDirection = "end";
    const align = "left";
    const column = 0;
    const columnSize = 0;
    const columnSizeRatio = 0;
    let contentHeight = 0;
    let isInView = {};
    $: console.log(isInView);
  
    export let data;
    let { pictures } = data;
    $: ({ pictures } = data);
  
    let modalSrc = "";
    let modalOpen = false;

    $: gridCompletedRendering = new Array(pictures.length);
  
    let openModal: (e: string) => void
  </script>
  
  <svelte:head>
    <title>Pictures - Techmen Robotics - FRC Team 5669</title>
  </svelte:head>
  
  <Modal src={modalSrc} bind:openModal={openModal} />
  
  <div class="dummy" style:height={contentHeight + "px"} />
  <div class="content" bind:clientHeight={contentHeight}>
    <h1>Pictures</h1>
    {#each pictures as pic, i}
      <div class="section-title">
        <Gear size={30} color="var(--gray500)" />
        <h2>{pic.title}</h2>
      </div>
      <div class={"section-images " + (gridCompletedRendering[i] ? "grid-visible" : "grid-hidden")}>
        <div class="upper-line"></div><div class="lower-line"></div>
        <MasonryGrid
            on:renderComplete={()=>{
                console.log('asdfasdf');
                gridCompletedRendering[i] = true;
            }}
          
          {defaultDirection}
          {gap}
          {align}
          {column}
          {columnSize}
          {columnSizeRatio}
        >
          {#each pic.images as img, i}
            <div class="gallery-image"
            role="button"
            tabindex="0"
              on:click={(e) => {
                openModal(img.url);
              }}
              on:keypress={(e) => {
                openModal(img.url);
              }}
            >
              <Image
                imageObject={img}
                alt=""
              />
            </div>
          {/each}
        </MasonryGrid>
      </div>
    {/each}
  </div>
  
  <style>
    .section-title {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 20px;
      height: 60px;
    }
    .section-title * {
      margin: 0;
      text-align: left;
    }
    :global(svg) {
      flex-shrink: 0;
    }
    .content {
      position: absolute;
      width: 90vw;
      left: 50%;
      transform: translateX(-50%);
      top: 120px;
    }
    .section-images {
      border-left: 1px dashed var(--gray500);
      transform: translate(1px);
      margin-left: 14px;
      padding-left: 33px;
      padding-bottom: 35px;
        opacity: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      transition: 0.2s;
    }
    ._padding {
      padding: 12px;
    }
    .grid-visible {
        opacity: 1;
    }
    .upper-line {
        position:absolute;
        height: 20px;
        width: 0px;
        left: -1px;
        top: -22.5px;
        border-left: 1px dashed var(--gray500);
        mask-image: linear-gradient(to bottom, transparent, black);
    }

    .lower-line {
        position:absolute;
        height: 20px;
        width: 0px;
        left: -1px;
        bottom: -22.5px;
        border-left: 1px dashed var(--gray500);
        mask-image: linear-gradient(to top, transparent, black);
    }
  </style>
  