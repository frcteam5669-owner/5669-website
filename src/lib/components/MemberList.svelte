<li><slot></slot></li>

<style>
    li {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 1 0px;
        text-align: center;
        min-width: 240px;
    }
    li :global(a) {
        color: var(--yellow);
        font-weight: bold;
    }
    li :global(em) {
        font-style: normal;
        color: var(--gray500);
        font-weight: bold;
    }
    li :global(a::before) {
        border-bottom: 1.5px solid var(--yellow);
    }
    li :global(a:hover::before) {
        border-bottom: 1.5px dashed var(--yellow);
    }
</style>