# Welcome
If you are reading this, congratulations on making it to the repository for 5669's website. This readme is intended to be as detailed as possible in documenting the ins and outs on how the website works and how to maintain it. The hope is for this to be as accessible to complete beginners as humanly possible, but a knowledge of how the web works and super simple JavaScript will benefit greatly

# Tech Stack
At its core, the website can be split into three main parts, each serving a different function in what you see live at https://frcteam5669.com
## Svelte: The Code
First and foremost is the code that actually runs the website. This current iteration of the website was written using the [Svelte](https://svelte.dev/) framework, as well as its extension [SvelteKit](https://kit.svelte.dev), which handles a lot of the deeper logic necessary to run a website. The primary language used within the various pages and components, as well as the server-side language is [TypeScript](https://www.typescriptlang.org/), which can be seen as a typed version of JavaScript with some nice features added on top of it.

Svelte handles both the server-facing (Fetching content from the backend) and user-facing (Rendering what you see) logic in one codebase, all of which is stored in this repository.

The goal of this readme is not to teach you how Svelte or TypeScript work; to do that, you can visit any of the websites above, they have a plethora of excellent documentation and examples for you. If you need to modify anything within this repository, please see the following page to set up a development environment: 
[Development Environment](https://github.com/FRC-Team-5669-Techmen/5669-website/blob/main/DEVENV.md)

## Hygraph: The Content
A website is nothing without its content. The way that ours operates is one where the bulk of the content is separate from the code of the site, so that editing the content can be easier for those who don't understand code. To do this, we use [Hygraph](https://hygraph.com), a GraphQL based Content Management Service. Hygraph manages everything from the text you see on every page, what pages can be visited by the user, and acts as storage for the images on the site.

To learn about how to modify the content of the website using Hygraph, please see the following page:
[Hygraph](https://github.com/FRC-Team-5669-Techmen/5669-website/blob/main/CONTENT.md)

## Vercel: The Host
Finally, the last part of any website is actually putting it on the internet. Because Svelte is not raw HTML code, you need to preprocess and serve it through some special ways. To manage all of this, we use [Vercel](https://vercel.com). Vercel is a web service that offers a variety of features, but the only one we use is web hosting. 

To learn about how to manage web builds and other site-level features such as domain names and backups, see the following page:
[Vercel](https://github.com/FRC-Team-5669-Techmen/5669-website/blob/main/HOSTING.md)

## Minutiae
In addition to the above, we also have a few smaller things in play in managing our website.

### Porkbun - Domain management
At the time of writing this documentation, we use [Porkbun](https://porkbun.com) to manage our domain.

### Github - Version control
This should be mostly self explanatory as you are already here, but we use Github in tandem with Vercel to manage our hosting and version control. They work very nicely together.