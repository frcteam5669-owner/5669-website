<script lang="ts">
    export let ordered
    export let start
  </script>
  
  {#if ordered}
    <ol {start}><slot></slot></ol>
  {:else}
    <ul><slot></slot></ul>
  {/if}

  <style>
    ol {
        padding: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }
  </style>