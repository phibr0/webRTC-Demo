import { c as create_ssr_component } from "../../chunks/index-67edf5fa.js";
/* empty css                                                        */var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-aany93{padding:1rem;background-color:#202020;width:10rem;display:flex;place-content:center;margin:1rem;border-radius:1rem;color:whitesmoke;text-align:center}h1.svelte-aany93{text-align:center;color:whitesmoke}div.svelte-aany93{display:flex;place-content:center}@media only screen and (max-width: 600px){div.svelte-aany93{place-items:center;flex-direction:column}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><h1 class="${"svelte-aany93"}">WebRTC Chat</h1>
  <div class="${"svelte-aany93"}"><a href="${"offer"}" class="${"btn svelte-aany93"}">Create Chat Offer</a>
    <a href="${"answer"}" class="${"btn svelte-aany93"}">Accept Chat Offer</a></div>
</main>`;
});
export { Routes as default };
