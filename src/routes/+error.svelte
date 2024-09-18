<script lang="ts">
	import { page } from '$app/stores';
</script>
<h1>{$page.status}</h1>
<h3>{$page.error?.message}</h3>
<p>This page does not exist. <a href="./">Go back to the home page.</a></p>

<style>
    h1 {
        color: var(--gray200);
        font-size: 180px;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: var(--gray500);
        font-family: 'Jetbrains mono';
        font-weight: 900;
        margin-bottom: 0;
        animation: move;
        animation-duration: 1s;

        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        mask-image: repeating-linear-gradient(-45deg, black 0px, black 10px, #0004 10px, #0004 20px);
    }
    h3 {
        margin-top: 0px;
    }
    @keyframes move{
        0% {
            mask-position: 0px 0px;
        }
        100% {
            mask-position: 28.28px 0px;
        }
    }
    p {
        text-align: center;
    }
</style>