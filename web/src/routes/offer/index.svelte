<script lang="ts">
  import type { AppState } from "../../types";
  import Chat from "../../components/chat.svelte";
  import { onMount } from "svelte";
  import Scanner from "../../components/scanner.svelte";
  import QRCodeCanvas from "../../components/qrcode.svelte";
  import RTCController from "../../../module/rtcController";
  import { ICE_CONFIG } from "../../static";

  let localConnection: RTCController;
  let applicationState: AppState = "offering";
  let sdp: Promise<RTCSessionDescription> | null;

  onMount(() => {
    addEventListener("scan", async (event: CustomEvent) => {
      const answer: RTCSessionDescriptionInit = { type: 'answer', sdp: event.detail.data };
      localConnection.setRemoteDescription(answer);
    });

    localConnection = new RTCController(ICE_CONFIG, 'offer', true);
    localConnection.onOpen = () => applicationState = "chatting";
    localConnection.onClose = () => location.href = "https://phibr0.de/webRTC-Demo";
    sdp = localConnection.generateOffer(1000);
  });
</script>

<main>
  {#if applicationState === "offering"}
    <p>Let the other User scan this Code</p>
    {#if sdp}
      {#await sdp then description}
        <QRCodeCanvas data={description.sdp}/>
      {/await}
    {/if}
    <p class="btn" on:click={() => (applicationState = "scanning")}>Done</p>
  {:else if applicationState === "scanning"}
    <Scanner />
  {:else if applicationState === "chatting"}
    <Chat channel={localConnection.channel} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    padding: 1rem;
  }

  p {
    color: whitesmoke;
  }

  .btn {
    padding: 1rem;
    background-color: #202020;
    width: 10rem;
    display: flex;
    place-content: center;
    margin: 1rem;
    border-radius: 1rem;
    color: whitesmoke;
    text-align: center;
    transition: all 250ms ease;
    cursor: pointer
  }

  .btn:hover {
    background-color: #292929;
  }
</style>
