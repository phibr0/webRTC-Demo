<script lang="ts">
  import QRCode from "qrcode";
  import Chat from "../components/chat.svelte";
  import { onMount } from "svelte";
  import Scanner from "../components/scanner.svelte";
  import type { AppState } from "src/types";
  let channel: RTCDataChannel;
  let canvas: HTMLCanvasElement;
  let applicationState: AppState = "scanning";

  onMount(() => {
    addEventListener("scan", async (event: CustomEvent) => {
      applicationState = "offering";
      const offer: any = event.detail.sdp;

      const iceConfiguration: any = {};
      iceConfiguration.iceServers = [];
      iceConfiguration.iceServers.push({
        urls: "stun:stun1.l.google.com:19302",
      });
      const remoteConnection = new RTCPeerConnection(iceConfiguration);

      /*Sobald ein ICE Kandidat gefunden wurde, wird automatisch auch ein neues SDP generiert, mit dieser Funktion wird dieses ausgegeben:*/
      remoteConnection.onicecandidate = (e) => {
        console.log("New ICE Candidate, reprinting SDP:");
        console.log(JSON.stringify(remoteConnection.localDescription));
        QRCode.toCanvas(
          canvas,
          JSON.stringify(remoteConnection.localDescription),
          console.error
        );
      };

      /*Sobald der Datenkanal des gegenüberliegenden Clients gefunden wird, werden einige Funktionen überschrieben, sodass man sieht wann sie intern ausgeführt wurden:*/
      remoteConnection.ondatachannel = (e) => {
        const receiveChannel = e.channel;
        receiveChannel.onmessage = (e) =>
          console.log("Message received: " + e.data);
        receiveChannel.onopen = (e) => {
          console.log("Connection opened.");
          applicationState = "chatting";
        };
        receiveChannel.onclose = (e) => console.log("Connection closed.");
        channel = receiveChannel;
      };

      remoteConnection.setRemoteDescription(offer);

      /*Zu dem zuvor erhaltenem Offer wird nun eine Antwort erstellt und ebenfalls ausgegeben:*/
      await remoteConnection
        .createAnswer()
        .then((a) => remoteConnection.setLocalDescription(a))
        .then((a) =>
          console.log(JSON.stringify(remoteConnection.localDescription))
        );
    });
  });
</script>

<main>
  {#if applicationState === "scanning"}
    <Scanner />
  {:else if applicationState === "offering"}
    <p>Let the other User scan this Code</p>
    <canvas bind:this={canvas} />
  {:else if applicationState === "chatting"}
    <Chat {channel} />
  {/if}
</main>

<style>
  canvas {
    max-width: 100vw;
    aspect-ratio: 1;
  }
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
