<script lang="ts">
  export let open = true;
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  let pathName = "";
  page.subscribe(() => {
    pathName = $page.url.pathname;
  });
  let categoryData: {[key:string]: {open: boolean, height?: string, title: string, content: HTMLElement | null}} = {};
  function toggleCategory(cat: string) {
    categoryData[cat].open = !categoryData[cat].open;
  }

  let heightTransition = "";
  export let navigations: any;
  let sasa: HTMLElement[] | [] = [];

  $: {
    navigations.forEach((element: any) => {
      categoryData[element.title] = {
        title: element.title,
        open: true,
        content: null,
      };
    });
  }

  onMount(() => {
    for (const key in categoryData) {
      if (Object.hasOwnProperty.call(categoryData, key)) {
        const element = categoryData[key];
        sasa.forEach((e) => {
          if (element.title == e.getAttribute("data-title"))
            element.content = e;
        });
        if (element.content) {
          element.height =
            element.content.getBoundingClientRect().height + "px";
          categoryData[key].open = false;
        }
      }
    }
  });
</script>

<div id="sidebar" class={open ? "open" : ""}>
  <div id="content">
    <div id="inner">
      {#each navigations as nav}
        {#if !nav.pages}
		  {#if nav.redirectUrl}
			<a class={$page.url.pathname.replace("/", "") ==
      nav.slug.replace("home", "")
        ? "nav-active"
        : ""} href={nav.redirectUrl} target="_blank"
			  >{nav.title}
			</a>{/if}
		  {#if !nav.redirectUrl}
			
          <a class={$page.url.pathname.replace("/", "") ==
          nav.slug.replace("home", "")
            ? "nav-active"
            : ""} href={"../"+nav.slug}
            >{nav.title}</a
          >
		  {/if}
        {/if}
      {/each}
      {#each navigations as nav, i}
        {#if nav.pages}
          <button
          class={$page.url.pathname.replace("/", "").split("/")[0] ==
                nav.slug
                  ? "category-label nav-active"
                  : "category-label "}
            on:click={() => toggleCategory(nav.title)}
          >
            {nav.title} +
          </button>
          <div
            bind:this={sasa[i]}
            data-title={nav.title}
            style:--height={categoryData[nav.title].height}
            style:transition={heightTransition}
            class={"category-content " +
              (categoryData[nav.title].open ? "category-open" : "")}
          >
            {#each nav.pages as pg}
              {#if pg.redirectUrl}
                <a href={pg.redirectUrl} target="_blank"
                tabindex={categoryData[nav.title].open ? null : -1}
                  >{pg.title}
                </a>{/if}
              {#if !pg.redirectUrl}
                <a 
                tabindex={categoryData[nav.title].open ? null : -1}
                class={$page.url.pathname.replace("/", "").split("/")[1] ==
                      pg.slug
                        ? "nav-active"
                        : ""} href={"../"+nav.slug + "/" + pg.slug} >{pg.title} </a>
              {/if}
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .category-content a {
    color: var(--gray500);
  }
  .link-active {
    color: var(--yellow) !important;
    text-decoration: underline;
  }
  .inner-margin {
    margin-left: 15px;
  }
  .innerPage {
    margin-left: 30px;
  }
  .innerPages {
    margin: 0;
    background-image: linear-gradient(
      to right,
      transparent 20px,
      var(--gray500) 20px,
      var(--gray500) 21px,
      transparent 21px
    );
  }
  a:before {
    content: none;
  }
  a {
    width: 100%;
    padding: 15px 0;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    margin-left: -7px;
    padding-left: 7px;
    font-size: 18px;
    border-bottom: 1px solid var(--gray300);
    box-sizing: border-box;
  }
  button {
    font-family: "JetBrains Mono", monospace !important;
    cursor: pointer;
    font-size: 18px !important;
    text-transform: uppercase;
    height: fit-content !important;
    padding: 15px 0 !important;
    margin-left: -7px !important;
    padding-left: 7px !important;
    border-bottom: 1px solid var(--gray300) !important;
  }
  a:hover,
  a:focus {
    color: var(--yellow);
    border-bottom: 2px solid var(--yellow);
  }
  .nav-active {
    color: var(--yellow) !important;
    border-bottom: 2px solid var(--yellow) !important;
  }
  .category-label {
    position: relative;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: 30px;
    font-family: "Space Grotesk";
    font-weight: bolder;
    width: 100%;
    height: 50px;
    display: block;
    text-align: left;
    transition: all 0.3s;
  }
  .category-label:hover,
  .category-label:focus {
    color: var(--yellow);
    border-bottom: 2px solid var(--yellow) !important;
  }
  .category-content {
    overflow: hidden;
    opacity: 0;
    transform-origin: top;

    margin: 0px 0;
    background-image: linear-gradient(
      to right,
      transparent 5px,
      var(--gray300) 5px,
      var(--gray300) 6px,
      transparent 6px
    );
    padding-left: 15px;
    height: 0px;
    transition: all 0.3s ease-in-out !important;
  }
  .category-content * {
    border: none !important;
  }
  .category-open {
    height: var(--height);
    margin-bottom: 15px;
    opacity: 1;
  }
  #sidebar {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    background: black;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    z-index: 1000000;
    border-right: 1px dashed var(--border);
    gap: 20px;
    width: 300px;
    height: 100vh;
    flex-shrink: 0;
    padding-top: 75px;

    overflow: hidden !important;
    position: fixed;
    left: -300px;
    box-shadow: 0 0 50px black;
    z-index: 100000;
    transition: 0.3s left, 0.3s opacity;
    opacity: 0;
    padding-top: 75px;
  }
  #sidebar.open {
    left: 0;
    opacity: 1;
  }
  #sidebar * {
    display: block;
  }
  #content {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    overflow-y: scroll;
    padding: 30px;
    padding-top: 30px;
    padding-bottom: 70px;
    overflow-x: hidden;

    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    overflow-y: scroll;
    padding: 30px;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 500px) {
    #sidebar {
      left: -100vw;
      width: 100vw;
    }
  }
</style>
