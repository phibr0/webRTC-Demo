<script lang="ts">
  import { onMount } from "svelte";
  import QrcodeDecoder from "qrcode-decoder";

  let video: HTMLVideoElement;

  onMount(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "environment",
        },
        audio: false,
      })
      .then((stream) => {
        video.srcObject = stream;
        let qr = new QrcodeDecoder();
        qr.decodeFromVideo(video).then((res: { data: string; }) => {
          dispatchEvent(
            new CustomEvent("scan", { detail: { data: res.data } })
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video autoplay bind:this={video}/>