<script lang="ts">
  import { onMount } from "svelte";

  export let channel: RTCDataChannel;
  let messages: Message[] = [];
  let textField: string = "";

  interface Message {
    type: "incoming" | "outgoing";
    data: string;
  }

  onMount(() => channel.onmessage = ({ data }) => messages = [...messages, { type: "incoming", data }]);

  function sendMessage() {
    if (textField) {
      channel.send(textField);
      messages = [...messages, { type: "outgoing", data: textField }];
    }
  }
</script>

<main>
  {#each messages as m}
    {#if m.type === "incoming"}
      <div>{m.data}</div>
    {:else}
      <div>{m.data}</div>
    {/if}
  {/each}
  <input type="text" bind:value={textField} />
  <button on:click={sendMessage}>Send</button>
</main>

<style>
</style>
