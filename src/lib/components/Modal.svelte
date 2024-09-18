<script lang="ts">
  import { fade } from "svelte/transition";
  export let src = "";
  let modalOpen = false;
  export const openModal = (e: string) => {
    modalOpen = true;
    src = e;
  };
  export const closeModal = () => {
    modalOpen = false;
  };
  function handleKeyPress(e: KeyboardEvent) {
    if (e.key == "Escape") closeModal();
  }
  let img: HTMLElement;
</script>

<svelte:body on:keyup={handleKeyPress} />
{#if modalOpen}
  <div
    role="presentation"
    class="modal"
    transition:fade={{ duration: 100 }}
    on:click={(e) => {
      console.log(e.target);
      if (e.target != img) {
        closeModal();
      }
    }}
    on:keypress={()=>{}}
  >
    <button id="close" on:click={(e) => {
        console.log(e.target);
        if (e.target != img) {
          closeModal();
        }
      }}
      ><div class={"close-icon "}>
        <div class="h-i-1" />
        <div class="h-i-3" />
      </div></button
    >
    <div class="imgParent">
      <img {src} alt="" bind:this={img} />
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    z-index: 1000000000000000000000000;
    background: rgba(0, 0, 0, 0.747);
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    pointer-events: all;
  }
  .imgParent {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-height: calc(100vh - 130px);
    height: fit-content;
    display: flex;
    justify-content: center;
  }
  .modal img {
    opacity: 1;
    box-shadow: 0px 10px 45px rgba(0, 0, 0, 0.616);
    clip-path: none !important;
    pointer-events: all;
    user-select: none;
    -webkit-user-select: none;

    object-fit: contain;
    max-height: 100%;
    opacity: 1;
    flex-grow: 0;
    margin: 0;
  }
  

  #close {
    all: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: 50px; top: 50px;
  }
  #close::before {
    content: none !important;
  }
  .close-icon {
    position: relative;
    width: 26px;
    height: 26px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .h-i-1,
  .h-i-3 {
    width: 200%;
    height: 2px;
    background: var(--yellow);
    left: 50%;
    transition: 0.2s all;
  }
  #close:focus {
	outline: initial !important;
  }
  
  .h-i-1 {
    transform: translateY(1px) rotate(45deg);
  }
   .h-i-3 {
    transform: translateY(-1px) rotate(-45deg);
  }
</style>
