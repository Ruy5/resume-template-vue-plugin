import { openBlock as a, createElementBlock as r, createElementVNode as e, renderSlot as U, createTextVNode as y, toDisplayString as V, createCommentVNode as f, pushScopeId as M, popScopeId as T, toRefs as $, unref as l, Fragment as v, renderList as b, withDirectives as s, vModelText as o, createVNode as w, withCtx as c } from "vue";
const Z = (n, h) => {
  const d = n.__vccOpts || n;
  for (const [_, m] of h)
    d[_] = m;
  return d;
}, B = (n) => (M("data-v-a7b24004"), n = n(), T(), n), A = {
  class: "ru-educational-background",
  style: { "margin-bottom": "1rem" }
}, q = { class: "ru-educational-background-title" }, j = { class: "ru-icon-bg" }, E = {
  class: "ru-educational-background-title-text",
  style: { display: "flex", "align-items": "center", "justify-content": "space-between" }
}, N = {
  key: 0,
  style: { width: "100%", height: "100%" },
  t: "1718784482580",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4265",
  width: "200",
  height: "200"
}, S = /* @__PURE__ */ B(() => /* @__PURE__ */ e(
  "path",
  {
    d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
    "p-id": "4266"
  },
  null,
  -1
  /* HOISTED */
)), O = [
  S
], H = { style: { "margin-top": "1rem" } }, R = {
  __name: "BlockHeaderA",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(n, { emit: h }) {
    const d = n, _ = h, m = () => _("addItem");
    return (x, p) => (a(), r("div", A, [
      e("div", q, [
        e("div", j, [
          U(x.$slots, "icon", {}, void 0, !0)
        ]),
        e("div", E, [
          y(
            V(d.title) + " ",
            1
            /* TEXT */
          ),
          e("div", {
            style: { height: "2rem" },
            onClick: m
          }, [
            d.disabled ? f("v-if", !0) : (a(), r("svg", N, O))
          ])
        ])
      ]),
      e("div", H, [
        U(x.$slots, "context", {}, void 0, !0)
      ])
    ]));
  }
}, g = /* @__PURE__ */ Z(R, [["__scopeId", "data-v-a7b24004"]]), C = (n) => (M("data-v-da2d3371"), n = n(), T(), n), z = {
  id: "ru-page",
  style: { "background-color": "rgb(207, 207, 207)" }
}, D = { id: "ru-left" }, K = { id: "ru-avatar" }, P = ["src"], F = { class: "ru-left-kw-box" }, L = {
  key: 0,
  class: "ru-left-key"
}, X = ["onUpdate:modelValue"], G = { class: "ru-left-word" }, J = ["onUpdate:modelValue", "disabled"], Q = { id: "ru-right" }, W = { class: "ru-personage" }, Y = /* @__PURE__ */ C(() => /* @__PURE__ */ e(
  "div",
  { class: "ru-personage-title" },
  "个人简历",
  -1
  /* HOISTED */
)), I = { class: "ru-personage-kws" }, e3 = ["disabled", "onUpdate:modelValue"], t3 = ["onUpdate:modelValue", "disabled"], d3 = /* @__PURE__ */ C(() => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    fill: "none",
    version: "1.1",
    width: "28.333332061767578",
    height: "28.333332061767578",
    viewBox: "0 0 28.333332061767578 28.333332061767578"
  },
  [
    /* @__PURE__ */ e("g", null, [
      /* @__PURE__ */ e("path", {
        d: "M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), l3 = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, i3 = { style: { display: "flex" } }, s3 = ["onUpdate:modelValue", "disabled"], o3 = ["onUpdate:modelValue", "disabled"], n3 = ["onUpdate:modelValue", "disabled"], a3 = ["onUpdate:modelValue", "disabled"], r3 = { style: { transform: "translateX(0.2rem)" } }, u3 = { style: { display: "flex" } }, p3 = /* @__PURE__ */ C(() => /* @__PURE__ */ e(
  "div",
  { style: { width: "20%" } },
  "专业成绩：",
  -1
  /* HOISTED */
)), c3 = ["onUpdate:modelValue", "disabled"], C3 = { style: { display: "flex" } }, _3 = /* @__PURE__ */ C(() => /* @__PURE__ */ e(
  "div",
  { style: { width: "20%" } },
  "主修课程：",
  -1
  /* HOISTED */
)), h3 = ["onUpdate:modelValue", "disabled"], m3 = /* @__PURE__ */ C(() => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    fill: "none",
    version: "1.1",
    width: "29.33333396911621",
    height: "26.666667938232422",
    viewBox: "0 0 29.33333396911621 26.666667938232422"
  },
  [
    /* @__PURE__ */ e("g", null, [
      /* @__PURE__ */ e("path", {
        d: "M9.17157,1.17157C9.92172,0.421427,10.9391,0,12,0C12,0,17.3333,0,17.3333,0C18.3941,0,19.4116,0.421427,20.1617,1.17157C20.9119,1.92172,21.3333,2.93913,21.3333,4C21.3333,4,21.3333,5.33333,21.3333,5.33333C21.3333,5.33333,25.3333,5.33333,25.3333,5.33333C27.5425,5.33333,29.3333,7.1242,29.3333,9.33333C29.3333,9.33333,29.3333,22.6667,29.3333,22.6667C29.3333,24.8759,27.5425,26.6667,25.3333,26.6667C25.3333,26.6667,4,26.6667,4,26.6667C1.79087,26.6667,0,24.8759,0,22.6667C0,22.6667,0,9.33333,0,9.33333C0,7.1242,1.79087,5.33333,4,5.33333C4,5.33333,8,5.33333,8,5.33333C8,5.33333,8,4,8,4C8,2.93913,8.42143,1.92172,9.17157,1.17157C9.17157,1.17157,9.17157,1.17157,9.17157,1.17157ZM8,8C8,8,4,8,4,8C3.26363,8,2.66667,8.59696,2.66667,9.33333C2.66667,9.33333,2.66667,22.6667,2.66667,22.6667C2.66667,23.4031,3.26363,24,4,24C4,24,8,24,8,24C8,24,8,8,8,8C8,8,8,8,8,8ZM10.6667,24C10.6667,24,10.6667,8,10.6667,8C10.6667,8,18.6667,8,18.6667,8C18.6667,8,18.6667,24,18.6667,24C18.6667,24,10.6667,24,10.6667,24C10.6667,24,10.6667,24,10.6667,24ZM21.3333,24C21.3333,24,25.3333,24,25.3333,24C26.0697,24,26.6667,23.4031,26.6667,22.6667C26.6667,22.6667,26.6667,9.33333,26.6667,9.33333C26.6667,8.59695,26.0697,8,25.3333,8C25.3333,8,21.3333,8,21.3333,8C21.3333,8,21.3333,24,21.3333,24C21.3333,24,21.3333,24,21.3333,24ZM18.6667,5.33333C18.6667,5.33333,10.6667,5.33333,10.6667,5.33333C10.6667,5.33333,10.6667,4,10.6667,4C10.6667,3.64637,10.8071,3.30724,11.0572,3.05719C11.3072,2.80715,11.6464,2.66667,12,2.66667C12,2.66667,17.3333,2.66667,17.3333,2.66667C17.6869,2.66667,18.0261,2.80715,18.2761,3.05719C18.5261,3.30724,18.6667,3.64637,18.6667,4C18.6667,4,18.6667,5.33333,18.6667,5.33333C18.6667,5.33333,18.6667,5.33333,18.6667,5.33333Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), v3 = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, b3 = { style: { display: "flex" } }, y3 = ["onUpdate:modelValue", "disabled"], x3 = ["onUpdate:modelValue", "disabled"], w3 = ["onUpdate:modelValue", "disabled"], g3 = ["onUpdate:modelValue", "disabled"], f3 = ["onUpdate:modelValue", "disabled"], V3 = /* @__PURE__ */ C(() => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    fill: "none",
    version: "1.1",
    width: "24",
    height: "36",
    viewBox: "0 0 24 36"
  },
  [
    /* @__PURE__ */ e("g", null, [
      /* @__PURE__ */ e("path", {
        d: "M12,3C7.02943,3,3,7.02943,3,12C3,16.9706,7.02943,21,12,21C13.7458,21,15.3755,20.5029,16.7551,19.6427C16.8297,19.5837,16.9103,19.5315,16.9959,19.4872C19.4101,17.8731,21,15.1222,21,12C21,7.02943,16.9706,3,12,3C12,3,12,3,12,3ZM19.2924,21.5307C22.1544,19.3375,24,15.8843,24,12C24,5.37258,18.6274,0,12,0C5.37258,0,0,5.37258,0,12C0,15.885,1.84624,19.3389,4.70925,21.5321C4.70925,21.5321,3.01306,34.3024,3.01306,34.3024C2.93723,34.8735,3.19503,35.4375,3.67644,35.7537C4.15785,36.0699,4.77783,36.0826,5.27175,35.7863C5.27175,35.7863,12,31.7493,12,31.7493C12,31.7493,18.7283,35.7863,18.7283,35.7863C19.2222,36.0825,19.842,36.0699,20.3235,35.7537C20.8048,35.4375,21.0627,34.8736,20.9869,34.3027C20.9869,34.3027,19.2924,21.5307,19.2924,21.5307C19.2924,21.5307,19.2924,21.5307,19.2924,21.5307ZM16.4792,23.1362C15.0951,23.6934,13.5834,24,12,24C10.4172,24,8.90599,23.6936,7.52245,23.1368C7.52245,23.1368,6.39666,31.6126,6.39666,31.6126C6.39666,31.6126,11.2282,28.7137,11.2282,28.7137C11.7033,28.4287,12.2967,28.4287,12.7717,28.7137C12.7717,28.7137,17.6038,31.6129,17.6038,31.6129C17.6038,31.6129,16.4792,23.1362,16.4792,23.1362C16.4792,23.1362,16.4792,23.1362,16.4792,23.1362Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), U3 = ["onUpdate:modelValue", "disabled"], k3 = ["onUpdate:modelValue", "disabled"], M3 = ["onUpdate:modelValue", "disabled"], T3 = /* @__PURE__ */ C(() => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    fill: "none",
    version: "1.1",
    width: "32",
    height: "26.666667938232422",
    viewBox: "0 0 32 26.666667938232422"
  },
  [
    /* @__PURE__ */ e("g", null, [
      /* @__PURE__ */ e("path", {
        d: "M10.8906,0.593733C11.1379,0.222801,11.5542,0,12,0C12,0,20,0,20,0C20.4459,0,20.8621,0.222801,21.1095,0.593733C21.1095,0.593733,23.3803,4,23.3803,4C23.3803,4,28,4,28,4C29.0609,4,30.0783,4.42143,30.8284,5.17157C31.5785,5.92172,32,6.93913,32,8C32,8,32,22.6667,32,22.6667C32,23.7276,31.5785,24.7449,30.8284,25.4951C30.0783,26.2452,29.0609,26.6667,28,26.6667C28,26.6667,4,26.6667,4,26.6667C2.93913,26.6667,1.92172,26.2452,1.17157,25.4951C0.421428,24.7449,0,23.7276,0,22.6667C0,22.6667,0,8,0,8C0,6.93913,0.421428,5.92172,1.17157,5.17157C1.92172,4.42143,2.93913,4,4,4C4,4,8.61976,4,8.61976,4C8.61976,4,10.8906,0.593733,10.8906,0.593733C10.8906,0.593733,10.8906,0.593733,10.8906,0.593733ZM12.7136,2.66667C12.7136,2.66667,10.4427,6.07293,10.4427,6.07293C10.1954,6.44387,9.77913,6.66667,9.33333,6.66667C9.33333,6.66667,4,6.66667,4,6.66667C3.64637,6.66667,3.30724,6.80715,3.05719,7.05719C2.80715,7.30724,2.66667,7.64637,2.66667,8C2.66667,8,2.66667,22.6667,2.66667,22.6667C2.66667,23.0203,2.80715,23.3595,3.05719,23.6095C3.30724,23.8595,3.64637,24,4,24C4,24,28,24,28,24C28.3536,24,28.6928,23.8595,28.9428,23.6095C29.1928,23.3595,29.3333,23.0203,29.3333,22.6667C29.3333,22.6667,29.3333,8,29.3333,8C29.3333,7.64637,29.1928,7.30724,28.9428,7.05719C28.6928,6.80715,28.3536,6.66667,28,6.66667C28,6.66667,22.6667,6.66667,22.6667,6.66667C22.2208,6.66667,21.8045,6.44387,21.5572,6.07293C21.5572,6.07293,19.2864,2.66667,19.2864,2.66667C19.2864,2.66667,12.7136,2.66667,12.7136,2.66667C12.7136,2.66667,12.7136,2.66667,12.7136,2.66667ZM16,10.6667C13.7908,10.6667,12,12.4575,12,14.6667C12,16.8759,13.7908,18.6667,16,18.6667C18.2092,18.6667,20,16.8759,20,14.6667C20,12.4575,18.2092,10.6667,16,10.6667C16,10.6667,16,10.6667,16,10.6667ZM9.33333,14.6667C9.33333,10.9848,12.3181,8,16,8C19.6819,8,22.6667,10.9848,22.6667,14.6667C22.6667,18.3485,19.6819,21.3333,16,21.3333C12.3181,21.3333,9.33333,18.3485,9.33333,14.6667C9.33333,14.6667,9.33333,14.6667,9.33333,14.6667Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), Z3 = ["disabled"], $3 = /* @__PURE__ */ Object.assign({
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
  setup(n) {
    const h = n, { data: d, disabled: _ } = $(h), m = (x) => {
      _ && (d.value.disabled = !d.value.disabled);
    };
    return (x, p) => (a(), r("div", z, [
      l(_) ? f("v-if", !0) : (a(), r(
        "div",
        {
          key: 0,
          style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
          onClick: m
        },
        V(l(d).disabled == !0 ? "预览" : "编辑"),
        1
        /* TEXT */
      )),
      e("div", D, [
        e("div", K, [
          e("img", {
            src: l(d).avatar,
            alt: "",
            srcset: ""
          }, null, 8, P)
        ]),
        e("div", F, [
          (a(!0), r(
            v,
            null,
            b(l(d).baseKw, (t, i) => (a(), r("div", {
              class: "ru-left-kw",
              key: i
            }, [
              l(d).disabled ? (a(), r(
                "div",
                L,
                V(t[0]),
                1
                /* TEXT */
              )) : f("v-if", !0),
              l(d).disabled ? f("v-if", !0) : s((a(), r("input", {
                key: 1,
                type: "text",
                "onUpdate:modelValue": (u) => t[0] = u,
                style: { width: "4rem" }
              }, null, 8, X)), [
                [o, t[0]]
              ]),
              y(" :  "),
              e("div", G, [
                s(e("input", {
                  "onUpdate:modelValue": (u) => t[1] = u,
                  type: "text",
                  disabled: l(d).disabled
                }, null, 8, J), [
                  [o, t[1]]
                ])
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      e("div", Q, [
        e("div", W, [
          Y,
          e("div", I, [
            (a(!0), r(
              v,
              null,
              b(l(d).jobKw, (t, i) => (a(), r("div", {
                class: "ru-personage-item",
                key: i
              }, [
                s(e("input", {
                  type: "text",
                  disabled: l(d).disabled,
                  "onUpdate:modelValue": (u) => t[0] = u,
                  style: { width: "4rem" }
                }, null, 8, e3), [
                  [o, t[0]]
                ]),
                y(" :  "),
                s(e("input", {
                  type: "text",
                  "onUpdate:modelValue": (u) => t[1] = u,
                  disabled: l(d).disabled
                }, null, 8, t3), [
                  [o, t[1]]
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        w(g, {
          title: "教育背景",
          onAddItem: p[0] || (p[0] = (t) => l(d).educationalBackground.push({})),
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            d3
          ]),
          context: c(() => [
            (a(!0), r(
              v,
              null,
              b(l(d).educationalBackground, (t) => (a(), r("div", null, [
                e("div", l3, [
                  e("div", i3, [
                    s(e("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (i) => t.starTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, s3), [
                      [o, t.starTime]
                    ]),
                    y(" - "),
                    s(e("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (i) => t.endTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, o3), [
                      [o, t.endTime]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "就读大学",
                      "onUpdate:modelValue": (i) => t.collegiate = i,
                      style: { "text-align": "center" },
                      disabled: l(d).disabled
                    }, null, 8, n3), [
                      [o, t.collegiate]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "就读专业",
                      "onUpdate:modelValue": (i) => t.profession = i,
                      style: { "text-align": "right" },
                      disabled: l(d).disabled
                    }, null, 8, a3), [
                      [o, t.profession]
                    ])
                  ])
                ]),
                e("div", r3, [
                  e("div", u3, [
                    p3,
                    s(e("input", {
                      type: "text",
                      "onUpdate:modelValue": (i) => t.professionalAchievement = i,
                      placeholder: "请输入专业成绩",
                      disabled: l(d).disabled
                    }, null, 8, c3), [
                      [o, t.professionalAchievement]
                    ])
                  ]),
                  e("div", C3, [
                    _3,
                    s(e("input", {
                      type: "text",
                      "onUpdate:modelValue": (i) => t.majorCourse = i,
                      placeholder: "请输入主修课程",
                      disabled: l(d).disabled
                    }, null, 8, h3), [
                      [o, t.majorCourse]
                    ])
                  ])
                ])
              ]))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]),
        w(g, {
          title: "工作经验",
          onAddItem: p[1] || (p[1] = (t) => l(d).workExperience.push({})),
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            m3
          ]),
          context: c(() => [
            (a(!0), r(
              v,
              null,
              b(l(d).workExperience, (t) => (a(), r("div", null, [
                e("div", v3, [
                  e("div", b3, [
                    s(e("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (i) => t.starTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, y3), [
                      [o, t.starTime]
                    ]),
                    y(" - "),
                    s(e("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (i) => t.endTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, x3), [
                      [o, t.endTime]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "工作单位",
                      "onUpdate:modelValue": (i) => t.workUnit = i,
                      style: { "text-align": "center" },
                      disabled: l(d).disabled
                    }, null, 8, w3), [
                      [o, t.workUnit]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "工作职位",
                      "onUpdate:modelValue": (i) => t.jobPosition = i,
                      style: { "text-align": "right" },
                      disabled: l(d).disabled
                    }, null, 8, g3), [
                      [o, t.jobPosition]
                    ])
                  ])
                ]),
                s(e("textarea", {
                  rows: "2",
                  "onUpdate:modelValue": (i) => t.context = i,
                  style: { width: "100%" },
                  disabled: l(d).disabled
                }, `\r
\r
          `, 8, f3), [
                  [o, t.context]
                ])
              ]))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]),
        w(g, {
          title: "荣誉证书",
          onAddItem: p[2] || (p[2] = (t) => l(d).certificateOfHonor.push({})),
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            V3
          ]),
          context: c(() => [
            (a(!0), r(
              v,
              null,
              b(l(d).certificateOfHonor, (t, i) => (a(), r("div", {
                style: { display: "flex" },
                key: i
              }, [
                s(e("input", {
                  type: "text",
                  placeholder: "证书名称",
                  "onUpdate:modelValue": (u) => t.certificateName = u,
                  disabled: l(d).disabled
                }, null, 8, U3), [
                  [o, t.certificateName]
                ]),
                s(e("input", {
                  type: "text",
                  placeholder: "获奖时间",
                  "onUpdate:modelValue": (u) => t.awardTime = u,
                  style: { "text-align": "center" },
                  disabled: l(d).disabled
                }, null, 8, k3), [
                  [o, t.awardTime]
                ]),
                s(e("input", {
                  type: "text",
                  placeholder: "颁发单位",
                  "onUpdate:modelValue": (u) => t.issuer = u,
                  style: { "text-align": "right" },
                  disabled: l(d).disabled
                }, null, 8, M3), [
                  [o, t.issuer]
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]),
        w(g, {
          title: "自我评价",
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            T3
          ]),
          context: c(() => [
            s(e("textarea", {
              rows: "4",
              style: { width: "100%" },
              "onUpdate:modelValue": p[3] || (p[3] = (t) => l(d).selfEvaluation = t),
              disabled: l(d).disabled
            }, null, 8, Z3), [
              [o, l(d).selfEvaluation]
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"])
      ])
    ]));
  }
}), k = /* @__PURE__ */ Z($3, [["__scopeId", "data-v-da2d3371"]]), A3 = {
  install: (n) => {
    n.component(k.name, k);
  }
};
export {
  A3 as default
};
