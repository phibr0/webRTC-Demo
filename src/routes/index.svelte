<script lang="ts">
import Chat from "../components/chat.svelte";


</script>

<main>
  <h1>WebRTC Chat</h1>
  <div>
    <a href="offer" class="btn">Create Chat Offer</a>
    <a href="answer" class="btn">Accept Chat Offer</a>
  </div>
</main>

<style>
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
  }

  h1 {
    text-align: center;
    color: whitesmoke;
  }

  div {
    display: flex;
    place-content: center;
  }

  @media only screen and (max-width: 600px) {
    div {
      place-items: center;
      flex-direction: column;
    }
  }
</style>
