import { openBlock as e, createElementBlock as o } from "vue";
const n = /* @__PURE__ */ Object.assign({
  name: "RuButton"
}, {
  __name: "button",
  setup(t) {
    return (c, a) => (e(), o("button", null, "按钮"));
  }
}), s = {
  install: (t) => {
    t.component(n.name, n);
  }
};
export {
  s as default
};
