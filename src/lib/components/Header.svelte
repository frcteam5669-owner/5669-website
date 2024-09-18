<script lang="ts">
  import Logo from "./Logo.svelte";
  import { page } from "$app/stores";
  export let y = 0;
  export let open = false;
  export let breakpoint = 1100;
  export let navigations;

  let hovered = new Array(100).fill([]);
  hovered.forEach((e, i) => {
    hovered[i] = [false, false, false];
  });
</script>

<header>
  <div id="content">
    {#if y > breakpoint}
    <a class="nostyle" href="../">
      <h3>Techmen Robotics</h3>
    </a>
    {/if}
    <a class="nostyle logo" href="../">
    <Logo size={40} />
    </a>
    {#if y > breakpoint}
      <div id="interactables">
        {#each navigations as nav, i}
          {#if !nav.pages}
            <a
              href={"../" + nav.slug}
              class={$page.url.pathname.replace("/", "") ==
              nav.slug.replace("home", "")
                ? "nav-active"
                : ""}>{nav.title}</a
            >
          {/if}
          {#if nav.pages}
            <div class="subsection-wrapper">
              <button
                on:mouseover={() => (hovered[i][0] = true)}
                on:focus={() => (hovered[i][0] = true)}
                on:mouseleave={() => (hovered[i][0] = false)}
                on:blur={() => (hovered[i][0] = false)}
                class={$page.url.pathname.replace("/", "").split("/")[0] ==
                nav.slug
                  ? "nav-active"
                  : ""}>{nav.title}+</button
              >
              <div
                role="menu" aria-labelledby="menubutton"
                tabindex={i}
                class={hovered[i][0] || hovered[i][1] || hovered[i][2]
                  ? "subsection subsection-active"
                  : "subsection "}
                on:mouseover={() => (hovered[i][1] = true)}
                on:focus={() => (hovered[i][1] = true)}
                on:mouseleave={() => (hovered[i][1] = false)}
              >
                {#each nav.pages as pg}
                  {#if pg.redirectUrl}
                    <a
                      on:focus={() => (hovered[i][2] = true)}
                      on:blur={() => (hovered[i][2] = false)}
                      href={pg.redirectUrl}
                      target="_blank"
                      tabindex={hovered[i][0] || hovered[i][1] || hovered[i][2]
                        ? null
                        : -1}
                      >{pg.title}
                    </a>
                  {/if}
                  {#if !pg.redirectUrl}
                    <a
                      class={$page.url.pathname
                        .replace("/", "")
                        .split("/")[1] == pg.slug
                        ? "nav-active"
                        : ""}
                      on:focus={() => (hovered[i][2] = true)}
                      on:blur={() => (hovered[i][2] = false)}
                      href={"../" + nav.slug + "/" + pg.slug}
                      tabindex={hovered[i][0] || hovered[i][1] || hovered[i][2]
                        ? null
                        : -1}>{pg.title}</a
                    >
                  {/if}
                {/each}
              </div>
            </div>
          {/if}
        {/each}
      </div>
    {/if}
    {#if y <= breakpoint}
      <button id="hamburger" on:click
        ><div class={"hamburger-icon " + (open ? "hamburger-icon-x" : "")}>
          <div class="h-i-1" />
          <div class="h-i-3" />
        </div></button
      >
    {/if}
  </div>
</header>

<style>
  :root {
    --border: rgba(255, 255, 255, 0.15);
  }
  .nostyle {
    text-decoration: none;
    width: fit-content;
    height: fit-content;
  }
  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  button {
    position: relative;
    text-decoration: none;
    transition: all 0.3s;
    padding: 0;
    z-index: 3;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: inline-block;
    width: fit-content;
    margin-bottom: -5px;
    overflow: hidden;
  }
  button::before {
    all: initial;
    content: "";
    position: absolute;
    right: 0px;
    bottom: 2px;
    width: 600%;
    height: 100%;
    display: block;
    border-bottom: 1px solid var(--white);
    transition: all 0.3s;
    z-index: -100;
    animation: 5s linear infinite a-dash-move;
    pointer-events: none;
  }
  a:not(.nostyle),
  button {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 16px;
    padding: 2px 0;
    font-size: 15px;
    border: none;
    margin-bottom: -5px;
    margin-right: 0;
  }
  button:hover,
  button:focus {
    color: var(--yellow);
  }
  a:not(.nostyle)::before,
  button::before {
    border-bottom: 2px dashed transparent;
  }
  a:not(.nostyle):hover::before,
  a:not(.nostyle):focus::before,
  button:hover::before,
  button:focus::before {
    content: "";
    border-bottom: 2px dashed var(--gray500);
  }
  a:not(.nostyle).nav-active,
  button.nav-active {
    color: var(--yellow);
  }
  a:not(.nostyle).nav-active::before,
  button.nav-active::before {
    content: "";
    border-bottom: 2px solid var(--yellow);
  }
  .subsection-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }
  .subsection {
    background: black;
    padding: 80px 16px 16px 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -22px;
    gap: 16px;
    transition: all 0.3s;
    transform: translateY(-64px);
    opacity: 0;
    pointer-events: none;
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 64px);
    mask-image: linear-gradient(to bottom, transparent, black 64px);
    border: 1px dashed var(--gray300);
  }
  .subsection-active {
    transform: translateY(0px);
    opacity: 1;
    pointer-events: all;
  }

  header {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100dvw;
    background-image: radial-gradient(
      rgba(0, 0, 0, 0.65) 1px,
      rgba(0, 0, 0, 0.95) 1px
    );
    background-size: 4px 4px;
    z-index: 1000000;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-bottom: 1px dashed var(--border);
    gap: 20px;
  }
  #content {
    width: min(var(--header-width), 100%);
    height: 65px;
    display: flex;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    box-sizing: border-box;
  }
  h3 {
    width: fit-content;
    text-align: left;
    margin-top: 1em;
    font-size: 24px;
    margin: 0 !important;
  }
  #interactables {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;
  }
  .vertical-divider {
    width: 1px;
    height: 30px;
    margin: 5px;
    background: var(--border);
  }
  .interactableIcon {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    cursor: pointer;
  }

  #hamburger {
    all: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  #hamburger::before {
    content: none !important;
  }
  .hamburger-icon {
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
  #hamburger:focus {
	outline: initial !important;
  }
  .h-i-1 {
    transform: translateY(-6px) rotate(0deg);
  }
  .h-i-3 {
    transform: translateY(6px) rotate(0deg);
  }
  .hamburger-icon:hover .h-i-1, #hamburger:focus .hamburger-icon .h-i-1 {
    transform: translateY(-4px) rotate(0);
  }
  .hamburger-icon:hover .h-i-3, #hamburger:focus .hamburger-icon .h-i-3 {
    transform: translateY(4px) rotate(0);
  }
  .hamburger-icon-x .h-i-1 {
    transform: translateY(1px) rotate(45deg);
  }
  .hamburger-icon-x .h-i-3 {
    transform: translateY(-1px) rotate(-45deg);
  }
  .hamburger-icon-x:hover .h-i-1, #hamburger:focus .hamburger-icon-x .h-i-1 {
    transform: translateY(1px) rotate(35deg);
  }
  .hamburger-icon-x:hover .h-i-3,  #hamburger:focus .hamburger-icon-x .h-i-3 {
    transform: translateY(-1px) rotate(-35deg);
  }
  
</style>
