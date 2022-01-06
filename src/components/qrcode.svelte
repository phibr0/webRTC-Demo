<script lang="ts">
  import QRCode from "qrcode";

  export let data: string;
  let canvas: HTMLCanvasElement;

  $: {
    if(data) {
      QRCode.toCanvas(canvas, data, { margin: 2, errorCorrectionLevel: "low" });
    }
  }
</script>

<canvas bind:this={canvas} />

<style>
  canvas {
    max-width: 100vw;
    max-height: 100vw;
  }
</style>
