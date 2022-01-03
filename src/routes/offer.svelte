<script lang="ts">
  import QRCode from "qrcode";
import Chat from "../components/chat.svelte";
  import { onMount } from "svelte";
  import Scanner from "../components/scanner.svelte";
  let canvas: HTMLCanvasElement;
  let scan = false;
  let connected = false;
  let sendChannel: RTCDataChannel;

  onMount(() => {
    const iceConfiguration: any = {};
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
    sendChannel.onopen = (e) => {console.log("Connection opened."); connected = true};
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
  <canvas bind:this={canvas} />
  <button on:click={() => (scan = true)}>Start Scan</button>
  {#if scan}
    <Scanner />
  {/if}
  {#if connected}
    <Chat channel={sendChannel}/>
  {/if}
</main>

<style>
</style>
