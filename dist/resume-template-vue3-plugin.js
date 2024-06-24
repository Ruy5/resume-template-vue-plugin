import { openBlock as n, createElementBlock as r, createElementVNode as e, normalizeStyle as $, renderSlot as M, createTextVNode as w, toDisplayString as T, createCommentVNode as V, pushScopeId as Z, popScopeId as A, toRefs as O, unref as t, Fragment as v, renderList as x, withDirectives as s, vModelText as a, createVNode as f, withCtx as C } from "vue";
const j = (c, m) => {
  const l = c.__vccOpts || c;
  for (const [h, o] of m)
    l[h] = o;
  return l;
}, H = (c) => (Z("data-v-e4366b00"), c = c(), A(), c), N = {
  class: "ru-educational-background",
  style: { "margin-bottom": "1rem" }
}, z = { class: "ru-educational-background-title" }, R = ["fill"], K = /* @__PURE__ */ H(() => /* @__PURE__ */ e("path", {
  d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
  "p-id": "4266"
}, null, -1)), D = [
  K
], P = { style: { "margin-top": "1rem" } }, X = {
  __name: "BlockHeaderA",
  props: ["title", "disabled", "color"],
  emits: ["addItem"],
  setup(c, { emit: m }) {
    const l = c, h = m, o = () => h("addItem");
    return (g, b) => (n(), r("div", N, [
      e("div", z, [
        e("div", {
          class: "ru-icon-bg",
          style: $({
            "background-color": l.color
          })
        }, [
          M(g.$slots, "icon", {}, void 0, !0)
        ], 4),
        e("div", {
          class: "ru-educational-background-title-text",
          style: $([{ display: "flex", "align-items": "center", "justify-content": "space-between" }, {
            "border-bottom": "solid 1px " + l.color
          }])
        }, [
          w(T(l.title) + " ", 1),
          e("div", {
            style: { height: "2rem" },
            onClick: o
          }, [
            l.disabled ? V("", !0) : (n(), r("svg", {
              key: 0,
              fill: l.color,
              style: { width: "100%", height: "100%" },
              t: "1718784482580",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "4265",
              width: "200",
              height: "200"
            }, D, 8, R))
          ])
        ], 4)
      ]),
      e("div", P, [
        M(g.$slots, "context", {}, void 0, !0)
      ])
    ]));
  }
}, B = /* @__PURE__ */ j(X, [["__scopeId", "data-v-e4366b00"]]), U = (c) => (Z("data-v-0a3dd7d5"), c = c(), A(), c), F = { id: "ru-left" }, L = { id: "ru-avatar" }, G = ["src"], J = { class: "ru-left-kw-box" }, Q = {
  key: 0,
  class: "ru-left-key"
}, W = ["onUpdate:modelValue"], Y = { class: "ru-left-word" }, I = ["onUpdate:modelValue", "disabled"], ee = { id: "ru-right" }, te = { class: "ru-personage" }, le = /* @__PURE__ */ U(() => /* @__PURE__ */ e("div", { class: "ru-personage-title" }, "个人简历", -1)), de = { class: "ru-personage-kws" }, oe = ["disabled", "onUpdate:modelValue"], ie = ["onUpdate:modelValue", "disabled"], se = /* @__PURE__ */ U(() => /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "28.333332061767578",
  height: "28.333332061767578",
  viewBox: "0 0 28.333332061767578 28.333332061767578"
}, [
  /* @__PURE__ */ e("g", null, [
    /* @__PURE__ */ e("path", {
      d: "M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z",
      "fill-rule": "evenodd",
      fill: "#000000",
      "fill-opacity": "1"
    })
  ])
], -1)), ae = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, ne = { style: { display: "flex" } }, re = ["onUpdate:modelValue", "disabled"], pe = ["onUpdate:modelValue", "disabled"], ue = ["onUpdate:modelValue", "disabled"], ce = ["onUpdate:modelValue", "disabled"], _e = { style: { transform: "translateX(0.2rem)" } }, he = { style: { display: "flex" } }, me = /* @__PURE__ */ U(() => /* @__PURE__ */ e("div", { style: { width: "20%" } }, "专业成绩：", -1)), ye = ["onUpdate:modelValue", "disabled"], Ce = { style: { display: "flex" } }, be = /* @__PURE__ */ U(() => /* @__PURE__ */ e("div", { style: { width: "20%" } }, "主修课程：", -1)), ve = ["onUpdate:modelValue", "disabled"], xe = /* @__PURE__ */ U(() => /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "29.33333396911621",
  height: "26.666667938232422",
  viewBox: "0 0 29.33333396911621 26.666667938232422"
}, [
  /* @__PURE__ */ e("g", null, [
    /* @__PURE__ */ e("path", {
      d: "M9.17157,1.17157C9.92172,0.421427,10.9391,0,12,0C12,0,17.3333,0,17.3333,0C18.3941,0,19.4116,0.421427,20.1617,1.17157C20.9119,1.92172,21.3333,2.93913,21.3333,4C21.3333,4,21.3333,5.33333,21.3333,5.33333C21.3333,5.33333,25.3333,5.33333,25.3333,5.33333C27.5425,5.33333,29.3333,7.1242,29.3333,9.33333C29.3333,9.33333,29.3333,22.6667,29.3333,22.6667C29.3333,24.8759,27.5425,26.6667,25.3333,26.6667C25.3333,26.6667,4,26.6667,4,26.6667C1.79087,26.6667,0,24.8759,0,22.6667C0,22.6667,0,9.33333,0,9.33333C0,7.1242,1.79087,5.33333,4,5.33333C4,5.33333,8,5.33333,8,5.33333C8,5.33333,8,4,8,4C8,2.93913,8.42143,1.92172,9.17157,1.17157C9.17157,1.17157,9.17157,1.17157,9.17157,1.17157ZM8,8C8,8,4,8,4,8C3.26363,8,2.66667,8.59696,2.66667,9.33333C2.66667,9.33333,2.66667,22.6667,2.66667,22.6667C2.66667,23.4031,3.26363,24,4,24C4,24,8,24,8,24C8,24,8,8,8,8C8,8,8,8,8,8ZM10.6667,24C10.6667,24,10.6667,8,10.6667,8C10.6667,8,18.6667,8,18.6667,8C18.6667,8,18.6667,24,18.6667,24C18.6667,24,10.6667,24,10.6667,24C10.6667,24,10.6667,24,10.6667,24ZM21.3333,24C21.3333,24,25.3333,24,25.3333,24C26.0697,24,26.6667,23.4031,26.6667,22.6667C26.6667,22.6667,26.6667,9.33333,26.6667,9.33333C26.6667,8.59695,26.0697,8,25.3333,8C25.3333,8,21.3333,8,21.3333,8C21.3333,8,21.3333,24,21.3333,24C21.3333,24,21.3333,24,21.3333,24ZM18.6667,5.33333C18.6667,5.33333,10.6667,5.33333,10.6667,5.33333C10.6667,5.33333,10.6667,4,10.6667,4C10.6667,3.64637,10.8071,3.30724,11.0572,3.05719C11.3072,2.80715,11.6464,2.66667,12,2.66667C12,2.66667,17.3333,2.66667,17.3333,2.66667C17.6869,2.66667,18.0261,2.80715,18.2761,3.05719C18.5261,3.30724,18.6667,3.64637,18.6667,4C18.6667,4,18.6667,5.33333,18.6667,5.33333C18.6667,5.33333,18.6667,5.33333,18.6667,5.33333Z",
      "fill-rule": "evenodd",
      fill: "#000000",
      "fill-opacity": "1"
    })
  ])
], -1)), ge = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, fe = { style: { display: "flex" } }, we = ["onUpdate:modelValue", "disabled"], Ue = ["onUpdate:modelValue", "disabled"], Ve = ["onUpdate:modelValue", "disabled"], $e = ["onUpdate:modelValue", "disabled"], ke = ["onUpdate:modelValue", "disabled"], Te = /* @__PURE__ */ U(() => /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "24",
  height: "36",
  viewBox: "0 0 24 36"
}, [
  /* @__PURE__ */ e("g", null, [
    /* @__PURE__ */ e("path", {
      d: "M12,3C7.02943,3,3,7.02943,3,12C3,16.9706,7.02943,21,12,21C13.7458,21,15.3755,20.5029,16.7551,19.6427C16.8297,19.5837,16.9103,19.5315,16.9959,19.4872C19.4101,17.8731,21,15.1222,21,12C21,7.02943,16.9706,3,12,3C12,3,12,3,12,3ZM19.2924,21.5307C22.1544,19.3375,24,15.8843,24,12C24,5.37258,18.6274,0,12,0C5.37258,0,0,5.37258,0,12C0,15.885,1.84624,19.3389,4.70925,21.5321C4.70925,21.5321,3.01306,34.3024,3.01306,34.3024C2.93723,34.8735,3.19503,35.4375,3.67644,35.7537C4.15785,36.0699,4.77783,36.0826,5.27175,35.7863C5.27175,35.7863,12,31.7493,12,31.7493C12,31.7493,18.7283,35.7863,18.7283,35.7863C19.2222,36.0825,19.842,36.0699,20.3235,35.7537C20.8048,35.4375,21.0627,34.8736,20.9869,34.3027C20.9869,34.3027,19.2924,21.5307,19.2924,21.5307C19.2924,21.5307,19.2924,21.5307,19.2924,21.5307ZM16.4792,23.1362C15.0951,23.6934,13.5834,24,12,24C10.4172,24,8.90599,23.6936,7.52245,23.1368C7.52245,23.1368,6.39666,31.6126,6.39666,31.6126C6.39666,31.6126,11.2282,28.7137,11.2282,28.7137C11.7033,28.4287,12.2967,28.4287,12.7717,28.7137C12.7717,28.7137,17.6038,31.6129,17.6038,31.6129C17.6038,31.6129,16.4792,23.1362,16.4792,23.1362C16.4792,23.1362,16.4792,23.1362,16.4792,23.1362Z",
      "fill-rule": "evenodd",
      fill: "#000000",
      "fill-opacity": "1"
    })
  ])
], -1)), Be = ["onUpdate:modelValue", "disabled"], Me = ["onUpdate:modelValue", "disabled"], Ze = ["onUpdate:modelValue", "disabled"], Ae = /* @__PURE__ */ U(() => /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "32",
  height: "26.666667938232422",
  viewBox: "0 0 32 26.666667938232422"
}, [
  /* @__PURE__ */ e("g", null, [
    /* @__PURE__ */ e("path", {
      d: "M10.8906,0.593733C11.1379,0.222801,11.5542,0,12,0C12,0,20,0,20,0C20.4459,0,20.8621,0.222801,21.1095,0.593733C21.1095,0.593733,23.3803,4,23.3803,4C23.3803,4,28,4,28,4C29.0609,4,30.0783,4.42143,30.8284,5.17157C31.5785,5.92172,32,6.93913,32,8C32,8,32,22.6667,32,22.6667C32,23.7276,31.5785,24.7449,30.8284,25.4951C30.0783,26.2452,29.0609,26.6667,28,26.6667C28,26.6667,4,26.6667,4,26.6667C2.93913,26.6667,1.92172,26.2452,1.17157,25.4951C0.421428,24.7449,0,23.7276,0,22.6667C0,22.6667,0,8,0,8C0,6.93913,0.421428,5.92172,1.17157,5.17157C1.92172,4.42143,2.93913,4,4,4C4,4,8.61976,4,8.61976,4C8.61976,4,10.8906,0.593733,10.8906,0.593733C10.8906,0.593733,10.8906,0.593733,10.8906,0.593733ZM12.7136,2.66667C12.7136,2.66667,10.4427,6.07293,10.4427,6.07293C10.1954,6.44387,9.77913,6.66667,9.33333,6.66667C9.33333,6.66667,4,6.66667,4,6.66667C3.64637,6.66667,3.30724,6.80715,3.05719,7.05719C2.80715,7.30724,2.66667,7.64637,2.66667,8C2.66667,8,2.66667,22.6667,2.66667,22.6667C2.66667,23.0203,2.80715,23.3595,3.05719,23.6095C3.30724,23.8595,3.64637,24,4,24C4,24,28,24,28,24C28.3536,24,28.6928,23.8595,28.9428,23.6095C29.1928,23.3595,29.3333,23.0203,29.3333,22.6667C29.3333,22.6667,29.3333,8,29.3333,8C29.3333,7.64637,29.1928,7.30724,28.9428,7.05719C28.6928,6.80715,28.3536,6.66667,28,6.66667C28,6.66667,22.6667,6.66667,22.6667,6.66667C22.2208,6.66667,21.8045,6.44387,21.5572,6.07293C21.5572,6.07293,19.2864,2.66667,19.2864,2.66667C19.2864,2.66667,12.7136,2.66667,12.7136,2.66667C12.7136,2.66667,12.7136,2.66667,12.7136,2.66667ZM16,10.6667C13.7908,10.6667,12,12.4575,12,14.6667C12,16.8759,13.7908,18.6667,16,18.6667C18.2092,18.6667,20,16.8759,20,14.6667C20,12.4575,18.2092,10.6667,16,10.6667C16,10.6667,16,10.6667,16,10.6667ZM9.33333,14.6667C9.33333,10.9848,12.3181,8,16,8C19.6819,8,22.6667,10.9848,22.6667,14.6667C22.6667,18.3485,19.6819,21.3333,16,21.3333C12.3181,21.3333,9.33333,18.3485,9.33333,14.6667C9.33333,14.6667,9.33333,14.6667,9.33333,14.6667Z",
      "fill-rule": "evenodd",
      fill: "#000000",
      "fill-opacity": "1"
    })
  ])
], -1)), je = ["disabled"], Ee = /* @__PURE__ */ Object.assign({
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
    },
    color: {
      type: String,
      default: "rgb(207, 207, 207)"
    }
  },
  setup(c) {
    const m = c, { data: l, disabled: h } = O(m), o = (g) => {
      h && (l.value.disabled = !l.value.disabled);
    };
    return (g, b) => (n(), r("div", {
      id: "ru-page",
      style: $({
        "background-color": m.color
      })
    }, [
      t(h) ? V("", !0) : (n(), r("div", {
        key: 0,
        style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
        onClick: o
      }, T(t(l).disabled == !0 ? "预览" : "编辑"), 1)),
      e("div", F, [
        e("div", L, [
          e("img", {
            src: t(l).avatar,
            alt: "",
            srcset: ""
          }, null, 8, G)
        ]),
        e("div", J, [
          (n(!0), r(v, null, x(t(l).baseKw, (d, p) => (n(), r("div", {
            class: "ru-left-kw",
            key: p
          }, [
            t(l).disabled ? (n(), r("div", Q, T(d[0]), 1)) : V("", !0),
            t(l).disabled ? V("", !0) : s((n(), r("input", {
              key: 1,
              type: "text",
              "onUpdate:modelValue": (_) => d[0] = _,
              style: { width: "4rem" }
            }, null, 8, W)), [
              [a, d[0]]
            ]),
            w(" :  "),
            e("div", Y, [
              s(e("input", {
                "onUpdate:modelValue": (_) => d[1] = _,
                type: "text",
                disabled: t(l).disabled
              }, null, 8, I), [
                [a, d[1]]
              ])
            ])
          ]))), 128))
        ])
      ]),
      e("div", ee, [
        e("div", te, [
          le,
          e("div", de, [
            (n(!0), r(v, null, x(t(l).jobKw, (d, p) => (n(), r("div", {
              class: "ru-personage-item",
              key: p
            }, [
              s(e("input", {
                type: "text",
                disabled: t(l).disabled,
                "onUpdate:modelValue": (_) => d[0] = _,
                style: { width: "4rem" }
              }, null, 8, oe), [
                [a, d[0]]
              ]),
              w(" :  "),
              s(e("input", {
                type: "text",
                "onUpdate:modelValue": (_) => d[1] = _,
                disabled: t(l).disabled
              }, null, 8, ie), [
                [a, d[1]]
              ])
            ]))), 128))
          ])
        ]),
        f(B, {
          title: "教育背景",
          onAddItem: b[0] || (b[0] = (d) => t(l).educationalBackground.push({})),
          disabled: t(l).disabled,
          color: m.color
        }, {
          icon: C(() => [
            se
          ]),
          context: C(() => [
            (n(!0), r(v, null, x(t(l).educationalBackground, (d) => (n(), r("div", null, [
              e("div", ae, [
                e("div", ne, [
                  s(e("input", {
                    type: "text",
                    placeholder: "开始时间",
                    "onUpdate:modelValue": (p) => d.starTime = p,
                    style: { width: "5rem" },
                    disabled: t(l).disabled
                  }, null, 8, re), [
                    [a, d.starTime]
                  ]),
                  w(" - "),
                  s(e("input", {
                    type: "text",
                    placeholder: "结束时间",
                    "onUpdate:modelValue": (p) => d.endTime = p,
                    style: { width: "5rem" },
                    disabled: t(l).disabled
                  }, null, 8, pe), [
                    [a, d.endTime]
                  ])
                ]),
                e("div", null, [
                  s(e("input", {
                    type: "text",
                    placeholder: "就读大学",
                    "onUpdate:modelValue": (p) => d.collegiate = p,
                    style: { "text-align": "center" },
                    disabled: t(l).disabled
                  }, null, 8, ue), [
                    [a, d.collegiate]
                  ])
                ]),
                e("div", null, [
                  s(e("input", {
                    type: "text",
                    placeholder: "就读专业",
                    "onUpdate:modelValue": (p) => d.profession = p,
                    style: { "text-align": "right" },
                    disabled: t(l).disabled
                  }, null, 8, ce), [
                    [a, d.profession]
                  ])
                ])
              ]),
              e("div", _e, [
                e("div", he, [
                  me,
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (p) => d.professionalAchievement = p,
                    placeholder: "请输入专业成绩",
                    disabled: t(l).disabled
                  }, null, 8, ye), [
                    [a, d.professionalAchievement]
                  ])
                ]),
                e("div", Ce, [
                  be,
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (p) => d.majorCourse = p,
                    placeholder: "请输入主修课程",
                    disabled: t(l).disabled
                  }, null, 8, ve), [
                    [a, d.majorCourse]
                  ])
                ])
              ])
            ]))), 256))
          ]),
          _: 1
        }, 8, ["disabled", "color"]),
        f(B, {
          title: "工作经验",
          onAddItem: b[1] || (b[1] = (d) => t(l).workExperience.push({})),
          disabled: t(l).disabled,
          color: m.color
        }, {
          icon: C(() => [
            xe
          ]),
          context: C(() => [
            (n(!0), r(v, null, x(t(l).workExperience, (d) => (n(), r("div", null, [
              e("div", ge, [
                e("div", fe, [
                  s(e("input", {
                    type: "text",
                    placeholder: "开始时间",
                    "onUpdate:modelValue": (p) => d.starTime = p,
                    style: { width: "5rem" },
                    disabled: t(l).disabled
                  }, null, 8, we), [
                    [a, d.starTime]
                  ]),
                  w(" - "),
                  s(e("input", {
                    type: "text",
                    placeholder: "结束时间",
                    "onUpdate:modelValue": (p) => d.endTime = p,
                    style: { width: "5rem" },
                    disabled: t(l).disabled
                  }, null, 8, Ue), [
                    [a, d.endTime]
                  ])
                ]),
                e("div", null, [
                  s(e("input", {
                    type: "text",
                    placeholder: "工作单位",
                    "onUpdate:modelValue": (p) => d.workUnit = p,
                    style: { "text-align": "center" },
                    disabled: t(l).disabled
                  }, null, 8, Ve), [
                    [a, d.workUnit]
                  ])
                ]),
                e("div", null, [
                  s(e("input", {
                    type: "text",
                    placeholder: "工作职位",
                    "onUpdate:modelValue": (p) => d.jobPosition = p,
                    style: { "text-align": "right" },
                    disabled: t(l).disabled
                  }, null, 8, $e), [
                    [a, d.jobPosition]
                  ])
                ])
              ]),
              s(e("textarea", {
                rows: "2",
                "onUpdate:modelValue": (p) => d.context = p,
                style: { width: "100%" },
                disabled: t(l).disabled
              }, `\r
\r
          `, 8, ke), [
                [a, d.context]
              ])
            ]))), 256))
          ]),
          _: 1
        }, 8, ["disabled", "color"]),
        f(B, {
          title: "荣誉证书",
          onAddItem: b[2] || (b[2] = (d) => t(l).certificateOfHonor.push({})),
          disabled: t(l).disabled,
          color: m.color
        }, {
          icon: C(() => [
            Te
          ]),
          context: C(() => [
            (n(!0), r(v, null, x(t(l).certificateOfHonor, (d, p) => (n(), r("div", {
              style: { display: "flex" },
              key: p
            }, [
              s(e("input", {
                type: "text",
                placeholder: "证书名称",
                "onUpdate:modelValue": (_) => d.certificateName = _,
                disabled: t(l).disabled
              }, null, 8, Be), [
                [a, d.certificateName]
              ]),
              s(e("input", {
                type: "text",
                placeholder: "获奖时间",
                "onUpdate:modelValue": (_) => d.awardTime = _,
                style: { "text-align": "center" },
                disabled: t(l).disabled
              }, null, 8, Me), [
                [a, d.awardTime]
              ]),
              s(e("input", {
                type: "text",
                placeholder: "颁发单位",
                "onUpdate:modelValue": (_) => d.issuer = _,
                style: { "text-align": "right" },
                disabled: t(l).disabled
              }, null, 8, Ze), [
                [a, d.issuer]
              ])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["disabled", "color"]),
        f(B, {
          title: "自我评价",
          disabled: t(l).disabled,
          color: m.color
        }, {
          icon: C(() => [
            Ae
          ]),
          context: C(() => [
            s(e("textarea", {
              rows: "4",
              style: { width: "100%" },
              "onUpdate:modelValue": b[3] || (b[3] = (d) => t(l).selfEvaluation = d),
              disabled: t(l).disabled
            }, null, 8, je), [
              [a, t(l).selfEvaluation]
            ])
          ]),
          _: 1
        }, 8, ["disabled", "color"])
      ])
    ], 4));
  }
}), E = /* @__PURE__ */ j(Ee, [["__scopeId", "data-v-0a3dd7d5"]]), Se = { style: { display: "flex", "align-items": "center", "justify-content": "space-between" } }, Oe = ["fill"], qe = { style: { "margin-top": "1rem" } }, k = {
  __name: "BlockHeaderB",
  props: ["title", "disabled", "color"],
  emits: ["addItem"],
  setup(c, { emit: m }) {
    const l = c, h = m, o = () => h("addItem");
    return (g, b) => (n(), r("div", null, [
      e("div", Se, [
        e("span", {
          style: $([{ "font-size": "2rem" }, {
            "border-bottom": "solid 4px " + l.color
          }])
        }, T(l.title), 5),
        l.disabled ? (n(), r("svg", {
          key: 0,
          onClick: o,
          style: { height: "2rem", width: "2rem" },
          t: "1718802654871",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "4271",
          width: "200",
          height: "200"
        }, [
          e("path", {
            d: "M512 1024C229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 794.741738 794.760389 1024 512 1024ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 754.368294 269.649625 950.859703 512 950.859703 754.350375 950.859703 950.841784 754.368294 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM548.570149 731.438811 475.429851 731.438811 475.429851 548.588068 292.579109 548.588068 292.579109 475.411201 475.429851 475.411201 475.429851 292.560457 548.570149 292.560457 548.570149 475.411201 731.420891 475.411201 731.420891 548.588068 548.570149 548.588068 548.570149 731.438811Z",
            fill: l.color,
            "p-id": "4272"
          }, null, 8, Oe)
        ])) : V("", !0)
      ]),
      e("div", {
        style: $([{ "margin-top": "4px" }, {
          "border-bottom": "solid 1px " + l.color
        }])
      }, null, 4),
      e("div", qe, [
        M(g.$slots, "context")
      ])
    ]));
  }
}, q = (c) => (Z("data-v-e60b6d5d"), c = c(), A(), c), He = {
  id: "rem-box",
  style: { display: "flex", width: "100%", "background-color": "#ffffff", "flex-direction": "column", "align-items": "center", position: "relative" }
}, Ne = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, ze = { style: { width: "80%", "padding-right": "2rem" } }, Re = { class: "ru-personage-kws" }, Ke = ["disabled", "onUpdate:modelValue"], De = ["onUpdate:modelValue", "disabled"], Pe = ["disabled", "onUpdate:modelValue"], Xe = ["onUpdate:modelValue", "disabled"], Fe = { style: { width: "20%" } }, Le = ["src"], Ge = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Je = { style: { width: "100%" } }, Qe = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, We = { style: { display: "flex" } }, Ye = ["onUpdate:modelValue", "disabled"], Ie = ["onUpdate:modelValue", "disabled"], e3 = ["onUpdate:modelValue", "disabled"], t3 = ["onUpdate:modelValue", "disabled"], l3 = { style: { transform: "translateX(0.2rem)" } }, d3 = { style: { display: "flex" } }, o3 = /* @__PURE__ */ q(() => /* @__PURE__ */ e("div", { style: { width: "10%" } }, "专业成绩：", -1)), i3 = ["onUpdate:modelValue", "disabled"], s3 = { style: { display: "flex" } }, a3 = /* @__PURE__ */ q(() => /* @__PURE__ */ e("div", { style: { width: "10%" } }, "主修课程：", -1)), n3 = ["onUpdate:modelValue", "disabled"], r3 = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, p3 = { style: { width: "100%" } }, u3 = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, c3 = { style: { display: "flex" } }, _3 = ["onUpdate:modelValue", "disabled"], h3 = ["onUpdate:modelValue", "disabled"], m3 = ["onUpdate:modelValue", "disabled"], y3 = ["onUpdate:modelValue", "disabled"], C3 = ["onUpdate:modelValue", "disabled"], b3 = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, v3 = { style: { width: "100%" } }, x3 = ["onUpdate:modelValue", "disabled"], g3 = ["onUpdate:modelValue", "disabled"], f3 = ["onUpdate:modelValue", "disabled"], w3 = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, U3 = { style: { width: "100%" } }, V3 = ["disabled"], $3 = /* @__PURE__ */ Object.assign({
  name: "ResumeTemplateB"
}, {
  __name: "ResumeTemplateB",
  props: {
    data: {
      type: Object,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#068359"
    }
  },
  emits: ["uploadImg"],
  setup(c, { emit: m }) {
    const l = m, h = c, { data: o, disabled: g } = O(h), b = () => {
      l("uploadImg");
    }, d = (p) => {
      g && (o.value.disabled = !o.value.disabled);
    };
    return (p, _) => (n(), r("div", He, [
      t(g) ? V("", !0) : (n(), r("div", {
        key: 0,
        style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
        onClick: d
      }, T(t(o).disabled == !0 ? "预览" : "编辑"), 1)),
      e("div", {
        style: $([{ height: "4rem", width: "95%", margin: "1rem 0", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "2rem" }, {
          "background-color": h.color
        }])
      }, " 个人简历 ", 4),
      e("div", Ne, [
        e("div", ze, [
          f(k, {
            title: "基本信息",
            onAddItem: _[0] || (_[0] = (i) => t(o).baseKw.push(["", ""])),
            disabled: t(o).disabled,
            color: h.color
          }, {
            context: C(() => [
              e("div", Re, [
                (n(!0), r(v, null, x(t(o).jobKw, (i, u) => (n(), r("div", {
                  class: "ru-personage-item",
                  key: u
                }, [
                  s(e("input", {
                    type: "text",
                    disabled: t(o).disabled,
                    "onUpdate:modelValue": (y) => i[0] = y,
                    style: { width: "4rem" }
                  }, null, 8, Ke), [
                    [a, i[0]]
                  ]),
                  w(" :  "),
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (y) => i[1] = y,
                    disabled: t(o).disabled
                  }, null, 8, De), [
                    [a, i[1]]
                  ])
                ]))), 128)),
                (n(!0), r(v, null, x(t(o).baseKw, (i, u) => (n(), r("div", {
                  class: "ru-personage-item",
                  key: u
                }, [
                  s(e("input", {
                    type: "text",
                    disabled: t(o).disabled,
                    "onUpdate:modelValue": (y) => i[0] = y,
                    style: { width: "4rem" }
                  }, null, 8, Pe), [
                    [a, i[0]]
                  ]),
                  w(" :  "),
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (y) => i[1] = y,
                    disabled: t(o).disabled
                  }, null, 8, Xe), [
                    [a, i[1]]
                  ])
                ]))), 128))
              ])
            ]),
            _: 1
          }, 8, ["disabled", "color"])
        ]),
        e("div", Fe, [
          e("img", {
            style: { width: "100%" },
            src: t(o).avatar,
            alt: "",
            srcset: "",
            onClick: b
          }, null, 8, Le)
        ])
      ]),
      e("div", Ge, [
        e("div", Je, [
          f(k, {
            title: "教育背景",
            onAddItem: _[1] || (_[1] = (i) => t(o).educationalBackground.push({})),
            disabled: t(o).disabled,
            color: h.color
          }, {
            context: C(() => [
              (n(!0), r(v, null, x(t(o).educationalBackground, (i) => (n(), r("div", null, [
                e("div", Qe, [
                  e("div", We, [
                    s(e("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (u) => i.starTime = u,
                      style: { width: "5rem" },
                      disabled: t(o).disabled
                    }, null, 8, Ye), [
                      [a, i.starTime]
                    ]),
                    w(" - "),
                    s(e("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (u) => i.endTime = u,
                      style: { width: "5rem" },
                      disabled: t(o).disabled
                    }, null, 8, Ie), [
                      [a, i.endTime]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "就读大学",
                      "onUpdate:modelValue": (u) => i.collegiate = u,
                      style: { "text-align": "center" },
                      disabled: t(o).disabled
                    }, null, 8, e3), [
                      [a, i.collegiate]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "就读专业",
                      "onUpdate:modelValue": (u) => i.profession = u,
                      style: { "text-align": "right" },
                      disabled: t(o).disabled
                    }, null, 8, t3), [
                      [a, i.profession]
                    ])
                  ])
                ]),
                e("div", l3, [
                  e("div", d3, [
                    o3,
                    s(e("input", {
                      type: "text",
                      style: { width: "90%" },
                      "onUpdate:modelValue": (u) => i.professionalAchievement = u,
                      placeholder: "请输入专业成绩",
                      disabled: t(o).disabled
                    }, null, 8, i3), [
                      [a, i.professionalAchievement]
                    ])
                  ]),
                  e("div", s3, [
                    a3,
                    s(e("input", {
                      type: "text",
                      style: { width: "90%" },
                      "onUpdate:modelValue": (u) => i.majorCourse = u,
                      placeholder: "请输入主修课程",
                      disabled: t(o).disabled
                    }, null, 8, n3), [
                      [a, i.majorCourse]
                    ])
                  ])
                ])
              ]))), 256))
            ]),
            _: 1
          }, 8, ["disabled", "color"])
        ])
      ]),
      e("div", r3, [
        e("div", p3, [
          f(k, {
            title: "工作经验",
            onAddItem: _[2] || (_[2] = (i) => t(o).workExperience.push({})),
            disabled: t(o).disabled,
            color: h.color
          }, {
            context: C(() => [
              (n(!0), r(v, null, x(t(o).workExperience, (i) => (n(), r("div", null, [
                e("div", u3, [
                  e("div", c3, [
                    s(e("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (u) => i.starTime = u,
                      style: { width: "5rem" },
                      disabled: t(o).disabled
                    }, null, 8, _3), [
                      [a, i.starTime]
                    ]),
                    w(" - "),
                    s(e("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (u) => i.endTime = u,
                      style: { width: "5rem" },
                      disabled: t(o).disabled
                    }, null, 8, h3), [
                      [a, i.endTime]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "工作单位",
                      "onUpdate:modelValue": (u) => i.workUnit = u,
                      style: { "text-align": "center" },
                      disabled: t(o).disabled
                    }, null, 8, m3), [
                      [a, i.workUnit]
                    ])
                  ]),
                  e("div", null, [
                    s(e("input", {
                      type: "text",
                      placeholder: "工作职位",
                      "onUpdate:modelValue": (u) => i.jobPosition = u,
                      style: { "text-align": "right" },
                      disabled: t(o).disabled
                    }, null, 8, y3), [
                      [a, i.jobPosition]
                    ])
                  ])
                ]),
                s(e("textarea", {
                  rows: "2",
                  "onUpdate:modelValue": (u) => i.context = u,
                  style: { width: "100%" },
                  disabled: t(o).disabled
                }, `\r
\r
          `, 8, C3), [
                  [a, i.context]
                ])
              ]))), 256))
            ]),
            _: 1
          }, 8, ["disabled", "color"])
        ])
      ]),
      e("div", b3, [
        e("div", v3, [
          f(k, {
            title: "荣誉证书",
            onAddItem: _[3] || (_[3] = (i) => t(o).certificateOfHonor.push({})),
            disabled: t(o).disabled,
            color: h.color
          }, {
            context: C(() => [
              (n(!0), r(v, null, x(t(o).certificateOfHonor, (i, u) => (n(), r("div", {
                style: { display: "flex", "justify-content": "space-between" },
                key: u
              }, [
                s(e("input", {
                  type: "text",
                  placeholder: "证书名称",
                  "onUpdate:modelValue": (y) => i.certificateName = y,
                  disabled: t(o).disabled
                }, null, 8, x3), [
                  [a, i.certificateName]
                ]),
                s(e("input", {
                  type: "text",
                  placeholder: "获奖时间",
                  "onUpdate:modelValue": (y) => i.awardTime = y,
                  style: { "text-align": "center" },
                  disabled: t(o).disabled
                }, null, 8, g3), [
                  [a, i.awardTime]
                ]),
                s(e("input", {
                  type: "text",
                  placeholder: "颁发单位",
                  "onUpdate:modelValue": (y) => i.issuer = y,
                  style: { "text-align": "right" },
                  disabled: t(o).disabled
                }, null, 8, f3), [
                  [a, i.issuer]
                ])
              ]))), 128))
            ]),
            _: 1
          }, 8, ["disabled", "color"])
        ])
      ]),
      e("div", w3, [
        e("div", U3, [
          f(k, {
            title: "自我评价",
            color: h.color
          }, {
            context: C(() => [
              s(e("textarea", {
                rows: "4",
                style: { width: "100%" },
                "onUpdate:modelValue": _[4] || (_[4] = (i) => t(o).selfEvaluation = i),
                disabled: t(o).disabled
              }, null, 8, V3), [
                [a, t(o).selfEvaluation]
              ])
            ]),
            _: 1
          }, 8, ["color"])
        ])
      ])
    ]));
  }
}), S = /* @__PURE__ */ j($3, [["__scopeId", "data-v-e60b6d5d"]]), T3 = {
  install: (c) => {
    c.component(E.name, E), c.component(S.name, S);
  }
};
export {
  T3 as default
};
