<script lang="ts">
	import Logo from "./Logo.svelte";
	export let navigations;
</script>

<footer>
	<div class="footer-inner">
		<div class="footer-column">
			<a href="../" id="" class="logo-block">
				<Logo size={50} />
			</a>
		</div>
		<div class="footer-column">
			<h3>Techmen Robotics</h3>
			{#each navigations as nav}
				{#if !nav.pages}
				<a href={"../"+nav.slug}>{nav.title}</a>
				{/if}
			{/each}
		</div>

		{#each navigations as nav}
			{#if nav.pages}
				<div class="footer-column">
					<h3>{nav.title}</h3>
					{#each nav.pages as page}
						{#if page.redirectUrl}
						  <a href={page.redirectUrl} target="_blank"
							>{page.title}
						  </a>
						  {/if}
						{#if !page.redirectUrl}
						<a href={"../"+nav.slug + "/" + page.slug}>{page.title}</a>
						{/if}
					{/each}
				</div>
			{/if}
		{/each}
	</div>
	<div class="footer-bottom">
		Copyright &copy; Techmen Robotics {`${new Date().getFullYear()}`}
	</div>
</footer>

<style>
	footer {
		border-top: 1px dashed var(--gray400);
		background: var(--black);
	}
	.logo-block {
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: flex-start;
	}
	.logo-block:before {
		content: none !important;
	}
	.footer-inner {
		width: min(var(--header-width), 100%);
		margin: auto;
		padding: 20px 0;
		padding-top: 50px;
		padding-bottom:40px;
		display: grid;
		
grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 600px){
	.logo-block {
		width: 90px;
	}
	.footer-inner {
		
grid-template-columns: repeat(2, 1fr);
	}}
	@media (max-width: 400px){
	.footer-inner {
		
grid-template-columns: repeat(1, 1fr);
	}

	}
	.footer-bottom {
		border-top: 1px dashed var(--gray300);
		width: calc(min(var(--header-width), 100%) - 50px);
		margin: auto;
		padding: 40px 0;
		color: var(--gray400);
	}
	.footer-column {
		flex-grow: 1;
		min-width: 100px;
		padding-left: 24px;
		padding-bottom: 20px;
	}
	h3 {
		margin-top: 0;
		font-size: 16px;
		font-weight: 600;
		color: var(--white);
		font-family: "JetBrains Mono", monospace;
		margin-bottom: 20px;
		text-transform: uppercase;
		text-align: left;
		
	}
	a {
		text-transform: uppercase;
		
		display: block;
		margin-bottom: 16px;
		color: var(--gray500);
		font-size: 15px;
		font-weight: 400;
		font-family: "JetBrains Mono", monospace;
		text-decoration: none;
		width: fit-content;
		padding: 2px 0
	}
	a:hover,
	a:focus {
		color: white !important;
	}
	a::before {
		border-bottom: 1px dashed transparent;
	}
	a:hover::before,a:focus::before {
    content: "";
		border-bottom: 1px dashed var(--gray500);
	}

</style>
