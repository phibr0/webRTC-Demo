<script lang="ts">
  import type { AppState } from "./../types";
  import QRCode from "qrcode";
  import Chat from "../components/chat.svelte";
  import { onMount } from "svelte";
  import Scanner from "../components/scanner.svelte";
  let canvas: HTMLCanvasElement;
  let sendChannel: RTCDataChannel;
  let applicationState: AppState = "offering";

  onMount(() => {
    const iceConfiguration: RTCConfiguration = {};
    iceConfiguration.iceServers = [];
    iceConfiguration.iceServers.push({
      urls: "stun:stun1.l.google.com:19302",
    });
    const localConnection = new RTCPeerConnection(iceConfiguration);
    /*Methoden die mit "on" beginnen sind Events, diese werden also erst zu bei Eintritt des Events ausgeführt und nicht direkt nachdem sie eingegeben wurden.
Sobald ein ICE Kandidat gefunden wurde, wird automatisch auch ein neues SDP generiert, mit dieser Funktion wird dieses ausgegeben:*/
    localConnection.onicecandidate = (e) => {
      console.log("New ICE Candidate, reprinting SDP:");
      console.log(JSON.stringify(localConnection.localDescription));
      QRCode.toCanvas(
        canvas,
        JSON.stringify(localConnection.localDescription),
        console.error
      );
    };

    /*Ein Kanal zum Datenaustausch wird erstellt und einige Funktionen werden überschrieben, sodass man sieht wann sie intern ausgeführt wurden:*/
    sendChannel = localConnection.createDataChannel("sendChannel");
    sendChannel.onmessage = (e) => console.log("Message received: " + e.data);
    sendChannel.onopen = (e) => {
      console.log("Connection opened.");
      applicationState = "chatting";
    };
    sendChannel.onclose = (e) => console.log("Connection closed.");

    /*Ein Offer wird erstellt. So wird auch der ICE Prozess gestartet*/
    localConnection
      .createOffer()
      .then((o) => localConnection.setLocalDescription(o));

    addEventListener("scan", async (event: CustomEvent) => {
      const answer: any = event.detail.sdp;
      localConnection.setRemoteDescription(answer);
    });
  });
</script>

<main>
  {#if applicationState === "offering"}
    <p>Let the other User scan this Code</p>
    <canvas bind:this={canvas} />
    <p class="btn" on:click={() => (applicationState = "scanning")}>Done</p>
  {:else if applicationState === "scanning"}
    <Scanner />
  {:else if applicationState === "chatting"}
    <Chat channel={sendChannel} />
  {/if}
</main>

<style>
  canvas {
    max-width: 100vw;
    max-height: 100vw;
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
