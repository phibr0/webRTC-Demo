import { c as create_ssr_component, a as add_attribute, i as is_promise, n as noop, v as validate_component } from "../../chunks/index-67edf5fa.js";
/* empty css                                                        */import "qrcode-decoder";
import QRCode from "qrcode";
import * as lzstring from "lz-string";
/* empty css                                                          */const css$1 = {
  code: "canvas.svelte-ewlrv4{max-width:100vw;max-height:100vw}",
  map: null
};
const Qrcode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let canvas;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  {
    {
      if (data) {
        QRCode.toCanvas(canvas, data, { margin: 2, errorCorrectionLevel: "low" });
        console.log(lzstring.compressToEncodedURIComponent(data));
      }
    }
  }
  return `<canvas class="${"svelte-ewlrv4"}"${add_attribute("this", canvas, 0)}></canvas>`;
});
var offer_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-phd96k{display:flex;flex-direction:column;place-content:center;place-items:center;padding:1rem}p.svelte-phd96k{color:whitesmoke}.btn.svelte-phd96k{padding:1rem;background-color:#202020;width:10rem;display:flex;place-content:center;margin:1rem;border-radius:1rem;color:whitesmoke;text-align:center;transition:all 250ms ease;cursor:pointer\n  }.btn.svelte-phd96k:hover{background-color:#292929}",
  map: null
};
const Offer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sdp;
  $$result.css.add(css);
  return `<main class="${"svelte-phd96k"}">${`<p class="${"svelte-phd96k"}">Let the other User scan this Code</p>
    ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(description) {
      return `
      ${validate_component(Qrcode, "QRCodeCanvas").$$render($$result, { data: description }, {}, {})}
    `;
    }(__value);
  }(sdp)}
    <p class="${"btn svelte-phd96k"}">Done</p>`}
</main>`;
});
export { Offer as default };
