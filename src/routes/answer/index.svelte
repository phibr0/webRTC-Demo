<script lang="ts">
  import Chat from "../../components/chat.svelte";
  import { onMount } from "svelte";
  import Scanner from "../../components/scanner.svelte";
  import type { AppState } from "src/types";
  import QRCodeCanvas from "../../components/qrcode.svelte";
  import RTCController from "../../../module/rtcController";
  import { ICE_CONFIG } from "../../static";

  let localConnection: RTCController;
  let applicationState: AppState = "scanning";
  let sdp: Promise<RTCSessionDescription>;

  onMount(() => {
    addEventListener("scan", async (event: CustomEvent) => {
      applicationState = "offering";
      const offer: RTCSessionDescriptionInit = { type: 'offer', sdp: event.detail.data };
      console.log(offer)

      localConnection = new RTCController(ICE_CONFIG, 'answer', true);
      localConnection.onOpen = () => applicationState = "chatting";
      localConnection.onClose = () => location.href = "https://phibr0.de/webRTC-Demo";
      await localConnection.setRemoteDescription(offer);
      sdp = localConnection.generateAnswer(1000);
    });
  });
</script>

<main>
  {#if applicationState === "scanning"}
    <Scanner />
  {:else if applicationState === "offering"}
    <p>Let the other User scan this Code</p>
      {#if sdp}
        {#await sdp then description}
          <QRCodeCanvas data={description.sdp}/>
        {/await}
      {/if}
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
</style>
