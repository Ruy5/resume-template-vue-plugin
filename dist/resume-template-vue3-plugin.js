import { openBlock as r, createElementBlock as u, createElementVNode as t, createTextVNode as n, withDirectives as l, vModelText as i, Fragment as b, renderList as m, createStaticVNode as h, pushScopeId as f, popScopeId as C } from "vue";
const g = (a, e) => {
  const c = a.__vccOpts || a;
  for (const [s, d] of e)
    c[s] = d;
  return c;
}, o = (a) => (f("data-v-bc1b833d"), a = a(), C(), a), w = { id: "ru-page" }, k = { id: "ru-left" }, x = { id: "ru-avatar" }, y = ["src"], V = { class: "ru-left-kw-box" }, T = { class: "ru-left-kw" }, B = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-left-key" }, "姓名", -1)), U = { class: "ru-left-word" }, R = ["disabled"], j = { class: "ru-left-kw" }, I = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-left-key" }, "年龄", -1)), M = { class: "ru-left-word" }, O = ["disabled"], S = { class: "ru-left-kw" }, A = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-left-key" }, "性别", -1)), N = { class: "ru-left-word" }, Z = ["disabled"], E = { class: "ru-left-kw" }, D = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-left-key" }, "籍贯", -1)), F = { class: "ru-left-word" }, L = ["disabled"], $ = { class: "ru-left-kw" }, q = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-left-key" }, "联系方式", -1)), z = { class: "ru-left-word" }, G = ["disabled"], H = { class: "ru-left-kw" }, J = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-left-key" }, "邮箱", -1)), K = { class: "ru-left-word" }, P = ["disabled"], Q = { id: "ru-right" }, W = { class: "ru-personage" }, X = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-personage-title" }, "个人简历", -1)), Y = { class: "ru-personage-kws" }, t3 = { class: "ru-personage-item" }, e3 = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "ru-personage-key" }, "求职岗位： ", -1)), s3 = ["disabled"], d3 = /* @__PURE__ */ h('<div class="ru-educational-background" data-v-bc1b833d><div class="ru-educational-background-title" data-v-bc1b833d><div class="ru-icon-bg" data-v-bc1b833d><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="28.333332061767578" height="28.333332061767578" viewBox="0 0 28.333332061767578 28.333332061767578" data-v-bc1b833d><g data-v-bc1b833d><path d="M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z" fill-rule="evenodd" fill="#000000" fill-opacity="1" data-v-bc1b833d></path></g></svg></div><div class="ru-educational-background-title-text" data-v-bc1b833d> 教育背景 </div></div> 123 </div>', 1), a3 = /* @__PURE__ */ Object.assign({
  name: "ResumeTemplateA"
}, {
  __name: "ResumeTemplateA",
  props: {
    data: {
      type: Object,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !0
    }
  },
  setup(a) {
    const e = a;
    return console.log(e.data), (c, s) => (r(), u("div", w, [
      t("div", k, [
        t("div", x, [
          t("img", {
            src: e.data.avatar,
            alt: "",
            srcset: ""
          }, null, 8, y)
        ]),
        t("div", V, [
          t("div", T, [
            B,
            n(":  "),
            t("div", U, [
              l(t("input", {
                "onUpdate:modelValue": s[0] || (s[0] = (d) => e.data.name = d),
                type: "text",
                disabled: e.disabled
              }, null, 8, R), [
                [i, e.data.name]
              ])
            ])
          ]),
          t("div", j, [
            I,
            n(":  "),
            t("div", M, [
              l(t("input", {
                "onUpdate:modelValue": s[1] || (s[1] = (d) => e.data.age = d),
                type: "text",
                disabled: e.disabled
              }, null, 8, O), [
                [i, e.data.age]
              ])
            ])
          ]),
          t("div", S, [
            A,
            n(":  "),
            t("div", N, [
              l(t("input", {
                "onUpdate:modelValue": s[2] || (s[2] = (d) => e.data.sex = d),
                type: "text",
                disabled: e.disabled
              }, null, 8, Z), [
                [i, e.data.sex]
              ])
            ])
          ]),
          t("div", E, [
            D,
            n(":  "),
            t("div", F, [
              l(t("input", {
                "onUpdate:modelValue": s[3] || (s[3] = (d) => e.data.address = d),
                type: "text",
                disabled: e.disabled
              }, null, 8, L), [
                [i, e.data.address]
              ])
            ])
          ]),
          t("div", $, [
            q,
            n(":  "),
            t("div", z, [
              l(t("input", {
                "onUpdate:modelValue": s[4] || (s[4] = (d) => e.data.phone = d),
                type: "text",
                disabled: e.disabled
              }, null, 8, G), [
                [i, e.data.phone]
              ])
            ])
          ]),
          t("div", H, [
            J,
            n(":  "),
            t("div", K, [
              l(t("input", {
                "onUpdate:modelValue": s[5] || (s[5] = (d) => e.data.email = d),
                type: "text",
                disabled: e.disabled
              }, null, 8, P), [
                [i, e.data.email]
              ])
            ])
          ])
        ])
      ]),
      t("div", Q, [
        t("div", W, [
          X,
          t("div", Y, [
            (r(), u(b, null, m(4, (d) => t("div", t3, [
              e3,
              l(t("input", {
                type: "text",
                "onUpdate:modelValue": s[6] || (s[6] = (v) => e.data.job = v),
                disabled: e.disabled
              }, null, 8, s3), [
                [i, e.data.job]
              ])
            ])), 64))
          ])
        ]),
        d3
      ])
    ]));
  }
}), _ = /* @__PURE__ */ g(a3, [["__scopeId", "data-v-bc1b833d"]]), p = /* @__PURE__ */ Object.assign({
  name: "ResumeTemplateB"
}, {
  __name: "ResumeTemplateB",
  setup(a) {
    return (e, c) => (r(), u("button", null, "ResumeTemplateB"));
  }
}), l3 = {
  install: (a) => {
    a.component(_.name, _), a.component(p.name, p);
  }
};
export {
  l3 as default
};
