<script>
  import Boost from "./lib/Boost.svelte";
  import { targetPlayer } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";

  $: console.log($socketMessageStore);
</script>

<main>
  {#if $targetPlayer?.name}
    {console.log('t')}
    <Boost percent="{$targetPlayer.boost}" />
  {/if}
</main>