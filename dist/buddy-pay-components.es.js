import { defineComponent as a, openBlock as c, createElementBlock as r, createElementVNode as o, renderSlot as u, mergeProps as i } from "vue";
const _ = { class: "input-container" }, d = ["for"], p = ["id", "name"], b = /* @__PURE__ */ a({
  __name: "Input",
  props: {
    label: null,
    inputAttributes: { default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (c(), r("div", _, [
      o("label", {
        class: "input-label",
        for: e.label
      }, [
        u(t.$slots, "default", {}, void 0, !0)
      ], 8, d),
      o("input", i({
        id: e.label,
        class: "input",
        name: e.label
      }, e.inputAttributes), null, 16, p)
    ]));
  }
});
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, s] of t)
    n[l] = s;
  return n;
}, v = /* @__PURE__ */ m(b, [["__scopeId", "data-v-b38061ba"]]);
export {
  v as Input
};
