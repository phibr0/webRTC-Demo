import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-67edf5fa.js";
/* empty css                                                        */import "qrcode-decoder";
import "qrcode";
import "lz-string";
/* empty css                                                          */const Scanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let video;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `
<video autoplay${add_attribute("this", video, 0)}></video>`;
});
var answer_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-xbt0zw{display:flex;flex-direction:column;place-content:center;place-items:center;padding:1rem}p.svelte-xbt0zw{color:whitesmoke}",
  map: null
};
const Answer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-xbt0zw"}">${`${validate_component(Scanner, "Scanner").$$render($$result, { type: "answer" }, {}, {})}`}
</main>`;
});
export { Answer as default };
