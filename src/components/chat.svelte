<script lang="ts">
  import type { Message } from "./../types";
  import { onMount } from "svelte";

  export let channel: RTCDataChannel;
  let messages: Message[] = [];
  let textField = "";

  onMount(
    () =>
      (channel.onmessage = ({ data }) =>
        (messages = [...messages, { type: "incoming", data }]))
  );

  function sendMessage() {
    if (textField) {
      messages = [...messages, { type: "outgoing", data: textField }];
      channel.send(textField);
      textField = "";
    }
  }
</script>

<main>
  <div class="messages">
    {#each messages as m}
      {#if m.type === "incoming"}
        <div class={m.type}><span>{m.data}</span></div>
      {:else}
        <div class={m.type}><span>{m.data}</span></div>
      {/if}
    {/each}
  </div>
  <div class="input">
    <input type="text" bind:value={textField} />
    <div class="btn" on:click={sendMessage}>Send</div>
  </div>
</main>

<style>

  .input {
    position: absolute;
    bottom: .5%;
    display: flex;
    width: 90%;
  }

  .input > input {
    width: 80%;
    border-radius: 0.3rem;
    background-color: #202020;
    border-color: rgb(56, 56, 56);
    color: #fff;
  }

  .input > div {
    width: 20%;
    padding: 3px;
    background-color: #202020;
    display: flex;
    place-content: center;
    margin: 0 .5rem;
    border-radius: 0.3rem;
    color: whitesmoke;
    text-align: center;
  }

  .messages {
    width: 100%;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    color: white;
    max-height: 93vh;
    overflow-y: scroll;
  }

  .outgoing {
    max-width: 70%;
    text-align: right;
    align-self: flex-end;
    background-color: #202020;
    border-radius: .5rem .5rem 0 .5rem;
    padding: 3px;
    margin-bottom: 2px;
  }

  .incoming {
    max-width: 70%;
    text-align: left;
    align-self: flex-start;
    background-color: #202020;
    border-radius: .5rem .5rem .5rem 0;
    padding: 3px;
    margin-bottom: 2px;
  }

  main {
    display: flex;
    height: 100%;
    width: 100%;
  }
</style>
