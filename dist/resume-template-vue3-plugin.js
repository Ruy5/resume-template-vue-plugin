import { openBlock as a, createElementBlock as n, createElementVNode as e, renderSlot as $, createTextVNode as v, toDisplayString as U, createCommentVNode as f, pushScopeId as k, popScopeId as T, toRefs as j, unref as l, Fragment as h, renderList as m, withDirectives as s, vModelText as o, createVNode as b, withCtx as c } from "vue";
const B = (p, y) => {
  const d = p.__vccOpts || p;
  for (const [_, C] of y)
    d[_] = C;
  return d;
}, E = (p) => (k("data-v-a7b24004"), p = p(), T(), p), O = {
  class: "ru-educational-background",
  style: { "margin-bottom": "1rem" }
}, q = { class: "ru-educational-background-title" }, N = { class: "ru-icon-bg" }, H = {
  class: "ru-educational-background-title-text",
  style: { display: "flex", "align-items": "center", "justify-content": "space-between" }
}, R = {
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
}, S = /* @__PURE__ */ E(() => /* @__PURE__ */ e("path", {
  d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
  "p-id": "4266"
}, null, -1)), z = [
  S
], K = { style: { "margin-top": "1rem" } }, D = {
  __name: "BlockHeaderA",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(p, { emit: y }) {
    const d = p, _ = y, C = () => _("addItem");
    return (x, u) => (a(), n("div", O, [
      e("div", q, [
        e("div", N, [
          $(x.$slots, "icon", {}, void 0, !0)
        ]),
        e("div", H, [
          v(U(d.title) + " ", 1),
          e("div", {
            style: { height: "2rem" },
            onClick: C
          }, [
            d.disabled ? f("", !0) : (a(), n("svg", R, z))
          ])
        ])
      ]),
      e("div", K, [
        $(x.$slots, "context", {}, void 0, !0)
      ])
    ]));
  }
}, V = /* @__PURE__ */ B(D, [["__scopeId", "data-v-a7b24004"]]), w = (p) => (k("data-v-da2d3371"), p = p(), T(), p), P = {
  id: "ru-page",
  style: { "background-color": "rgb(207, 207, 207)" }
}, X = { id: "ru-left" }, F = { id: "ru-avatar" }, L = ["src"], G = { class: "ru-left-kw-box" }, J = {
  key: 0,
  class: "ru-left-key"
}, Q = ["onUpdate:modelValue"], W = { class: "ru-left-word" }, Y = ["onUpdate:modelValue", "disabled"], I = { id: "ru-right" }, ee = { class: "ru-personage" }, te = /* @__PURE__ */ w(() => /* @__PURE__ */ e("div", { class: "ru-personage-title" }, "个人简历", -1)), de = { class: "ru-personage-kws" }, le = ["disabled", "onUpdate:modelValue"], ie = ["onUpdate:modelValue", "disabled"], se = /* @__PURE__ */ w(() => /* @__PURE__ */ e("svg", {
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
], -1)), oe = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, ae = { style: { display: "flex" } }, ne = ["onUpdate:modelValue", "disabled"], re = ["onUpdate:modelValue", "disabled"], pe = ["onUpdate:modelValue", "disabled"], ue = ["onUpdate:modelValue", "disabled"], ce = { style: { transform: "translateX(0.2rem)" } }, _e = { style: { display: "flex" } }, he = /* @__PURE__ */ w(() => /* @__PURE__ */ e("div", { style: { width: "20%" } }, "专业成绩：", -1)), me = ["onUpdate:modelValue", "disabled"], ye = { style: { display: "flex" } }, Ce = /* @__PURE__ */ w(() => /* @__PURE__ */ e("div", { style: { width: "20%" } }, "主修课程：", -1)), be = ["onUpdate:modelValue", "disabled"], ve = /* @__PURE__ */ w(() => /* @__PURE__ */ e("svg", {
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
], -1)), xe = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, we = { style: { display: "flex" } }, fe = ["onUpdate:modelValue", "disabled"], ge = ["onUpdate:modelValue", "disabled"], Ue = ["onUpdate:modelValue", "disabled"], Ve = ["onUpdate:modelValue", "disabled"], $e = ["onUpdate:modelValue", "disabled"], ke = /* @__PURE__ */ w(() => /* @__PURE__ */ e("svg", {
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
], -1)), Te = ["onUpdate:modelValue", "disabled"], Be = ["onUpdate:modelValue", "disabled"], Me = ["onUpdate:modelValue", "disabled"], Ze = /* @__PURE__ */ w(() => /* @__PURE__ */ e("svg", {
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
], -1)), Ae = ["disabled"], je = /* @__PURE__ */ Object.assign({
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
  setup(p) {
    const y = p, { data: d, disabled: _ } = j(y), C = (x) => {
      _ && (d.value.disabled = !d.value.disabled);
    };
    return (x, u) => (a(), n("div", P, [
      l(_) ? f("", !0) : (a(), n("div", {
        key: 0,
        style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
        onClick: C
      }, U(l(d).disabled == !0 ? "预览" : "编辑"), 1)),
      e("div", X, [
        e("div", F, [
          e("img", {
            src: l(d).avatar,
            alt: "",
            srcset: ""
          }, null, 8, L)
        ]),
        e("div", G, [
          (a(!0), n(h, null, m(l(d).baseKw, (t, i) => (a(), n("div", {
            class: "ru-left-kw",
            key: i
          }, [
            l(d).disabled ? (a(), n("div", J, U(t[0]), 1)) : f("", !0),
            l(d).disabled ? f("", !0) : s((a(), n("input", {
              key: 1,
              type: "text",
              "onUpdate:modelValue": (r) => t[0] = r,
              style: { width: "4rem" }
            }, null, 8, Q)), [
              [o, t[0]]
            ]),
            v(" :  "),
            e("div", W, [
              s(e("input", {
                "onUpdate:modelValue": (r) => t[1] = r,
                type: "text",
                disabled: l(d).disabled
              }, null, 8, Y), [
                [o, t[1]]
              ])
            ])
          ]))), 128))
        ])
      ]),
      e("div", I, [
        e("div", ee, [
          te,
          e("div", de, [
            (a(!0), n(h, null, m(l(d).jobKw, (t, i) => (a(), n("div", {
              class: "ru-personage-item",
              key: i
            }, [
              s(e("input", {
                type: "text",
                disabled: l(d).disabled,
                "onUpdate:modelValue": (r) => t[0] = r,
                style: { width: "4rem" }
              }, null, 8, le), [
                [o, t[0]]
              ]),
              v(" :  "),
              s(e("input", {
                type: "text",
                "onUpdate:modelValue": (r) => t[1] = r,
                disabled: l(d).disabled
              }, null, 8, ie), [
                [o, t[1]]
              ])
            ]))), 128))
          ])
        ]),
        b(V, {
          title: "教育背景",
          onAddItem: u[0] || (u[0] = (t) => l(d).educationalBackground.push({})),
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            se
          ]),
          context: c(() => [
            (a(!0), n(h, null, m(l(d).educationalBackground, (t) => (a(), n("div", null, [
              e("div", oe, [
                e("div", ae, [
                  s(e("input", {
                    type: "text",
                    placeholder: "开始时间",
                    "onUpdate:modelValue": (i) => t.starTime = i,
                    style: { width: "5rem" },
                    disabled: l(d).disabled
                  }, null, 8, ne), [
                    [o, t.starTime]
                  ]),
                  v(" - "),
                  s(e("input", {
                    type: "text",
                    placeholder: "结束时间",
                    "onUpdate:modelValue": (i) => t.endTime = i,
                    style: { width: "5rem" },
                    disabled: l(d).disabled
                  }, null, 8, re), [
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
                  }, null, 8, pe), [
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
                  }, null, 8, ue), [
                    [o, t.profession]
                  ])
                ])
              ]),
              e("div", ce, [
                e("div", _e, [
                  he,
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (i) => t.professionalAchievement = i,
                    placeholder: "请输入专业成绩",
                    disabled: l(d).disabled
                  }, null, 8, me), [
                    [o, t.professionalAchievement]
                  ])
                ]),
                e("div", ye, [
                  Ce,
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (i) => t.majorCourse = i,
                    placeholder: "请输入主修课程",
                    disabled: l(d).disabled
                  }, null, 8, be), [
                    [o, t.majorCourse]
                  ])
                ])
              ])
            ]))), 256))
          ]),
          _: 1
        }, 8, ["disabled"]),
        b(V, {
          title: "工作经验",
          onAddItem: u[1] || (u[1] = (t) => l(d).workExperience.push({})),
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            ve
          ]),
          context: c(() => [
            (a(!0), n(h, null, m(l(d).workExperience, (t) => (a(), n("div", null, [
              e("div", xe, [
                e("div", we, [
                  s(e("input", {
                    type: "text",
                    placeholder: "开始时间",
                    "onUpdate:modelValue": (i) => t.starTime = i,
                    style: { width: "5rem" },
                    disabled: l(d).disabled
                  }, null, 8, fe), [
                    [o, t.starTime]
                  ]),
                  v(" - "),
                  s(e("input", {
                    type: "text",
                    placeholder: "结束时间",
                    "onUpdate:modelValue": (i) => t.endTime = i,
                    style: { width: "5rem" },
                    disabled: l(d).disabled
                  }, null, 8, ge), [
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
                  }, null, 8, Ue), [
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
                  }, null, 8, Ve), [
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
          `, 8, $e), [
                [o, t.context]
              ])
            ]))), 256))
          ]),
          _: 1
        }, 8, ["disabled"]),
        b(V, {
          title: "荣誉证书",
          onAddItem: u[2] || (u[2] = (t) => l(d).certificateOfHonor.push({})),
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            ke
          ]),
          context: c(() => [
            (a(!0), n(h, null, m(l(d).certificateOfHonor, (t, i) => (a(), n("div", {
              style: { display: "flex" },
              key: i
            }, [
              s(e("input", {
                type: "text",
                placeholder: "证书名称",
                "onUpdate:modelValue": (r) => t.certificateName = r,
                disabled: l(d).disabled
              }, null, 8, Te), [
                [o, t.certificateName]
              ]),
              s(e("input", {
                type: "text",
                placeholder: "获奖时间",
                "onUpdate:modelValue": (r) => t.awardTime = r,
                style: { "text-align": "center" },
                disabled: l(d).disabled
              }, null, 8, Be), [
                [o, t.awardTime]
              ]),
              s(e("input", {
                type: "text",
                placeholder: "颁发单位",
                "onUpdate:modelValue": (r) => t.issuer = r,
                style: { "text-align": "right" },
                disabled: l(d).disabled
              }, null, 8, Me), [
                [o, t.issuer]
              ])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["disabled"]),
        b(V, {
          title: "自我评价",
          disabled: l(d).disabled
        }, {
          icon: c(() => [
            Ze
          ]),
          context: c(() => [
            s(e("textarea", {
              rows: "4",
              style: { width: "100%" },
              "onUpdate:modelValue": u[3] || (u[3] = (t) => l(d).selfEvaluation = t),
              disabled: l(d).disabled
            }, null, 8, Ae), [
              [o, l(d).selfEvaluation]
            ])
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Z = /* @__PURE__ */ B(je, [["__scopeId", "data-v-da2d3371"]]), Ee = { style: { display: "flex", "align-items": "center", "justify-content": "space-between" } }, Oe = { style: { "font-size": "2rem", "border-bottom": "solid 4px #068359" } }, qe = /* @__PURE__ */ e("path", {
  d: "M512 1024C229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 794.741738 794.760389 1024 512 1024ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 754.368294 269.649625 950.859703 512 950.859703 754.350375 950.859703 950.841784 754.368294 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM548.570149 731.438811 475.429851 731.438811 475.429851 548.588068 292.579109 548.588068 292.579109 475.411201 475.429851 475.411201 475.429851 292.560457 548.570149 292.560457 548.570149 475.411201 731.420891 475.411201 731.420891 548.588068 548.570149 548.588068 548.570149 731.438811Z",
  fill: "#068359",
  "p-id": "4272"
}, null, -1), Ne = [
  qe
], He = /* @__PURE__ */ e("div", { style: { "border-bottom": "solid 1px #068359", "margin-top": "4px" } }, null, -1), Re = { style: { "margin-top": "1rem" } }, g = {
  __name: "BlockHeaderB",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(p, { emit: y }) {
    const d = p, _ = y, C = () => _("addItem");
    return (x, u) => (a(), n("div", null, [
      e("div", Ee, [
        e("span", Oe, U(d.title), 1),
        d.disabled ? (a(), n("svg", {
          key: 0,
          onClick: C,
          style: { height: "2rem", width: "2rem" },
          t: "1718802654871",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "4271",
          width: "200",
          height: "200"
        }, Ne)) : f("", !0)
      ]),
      He,
      e("div", Re, [
        $(x.$slots, "context")
      ])
    ]));
  }
}, M = (p) => (k("data-v-6634ef0d"), p = p(), T(), p), Se = { style: { display: "flex", width: "100%", "background-color": "#ffffff", "flex-direction": "column", "align-items": "center", position: "relative" } }, ze = /* @__PURE__ */ M(() => /* @__PURE__ */ e("div", { style: { "background-color": "#068359", height: "4rem", width: "95%", margin: "1rem 0", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "2rem" } }, " 个人简历 ", -1)), Ke = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, De = { style: { width: "80%", "padding-right": "2rem" } }, Pe = { class: "ru-personage-kws" }, Xe = ["disabled", "onUpdate:modelValue"], Fe = ["onUpdate:modelValue", "disabled"], Le = ["disabled", "onUpdate:modelValue"], Ge = ["onUpdate:modelValue", "disabled"], Je = { style: { width: "20%" } }, Qe = ["src"], We = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Ye = { style: { width: "100%" } }, Ie = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, e3 = { style: { display: "flex" } }, t3 = ["onUpdate:modelValue", "disabled"], d3 = ["onUpdate:modelValue", "disabled"], l3 = ["onUpdate:modelValue", "disabled"], i3 = ["onUpdate:modelValue", "disabled"], s3 = { style: { transform: "translateX(0.2rem)" } }, o3 = { style: { display: "flex" } }, a3 = /* @__PURE__ */ M(() => /* @__PURE__ */ e("div", { style: { width: "10%" } }, "专业成绩：", -1)), n3 = ["onUpdate:modelValue", "disabled"], r3 = { style: { display: "flex" } }, p3 = /* @__PURE__ */ M(() => /* @__PURE__ */ e("div", { style: { width: "10%" } }, "主修课程：", -1)), u3 = ["onUpdate:modelValue", "disabled"], c3 = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, _3 = { style: { width: "100%" } }, h3 = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, m3 = { style: { display: "flex" } }, y3 = ["onUpdate:modelValue", "disabled"], C3 = ["onUpdate:modelValue", "disabled"], b3 = ["onUpdate:modelValue", "disabled"], v3 = ["onUpdate:modelValue", "disabled"], x3 = ["onUpdate:modelValue", "disabled"], w3 = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, f3 = { style: { width: "100%" } }, g3 = ["onUpdate:modelValue", "disabled"], U3 = ["onUpdate:modelValue", "disabled"], V3 = ["onUpdate:modelValue", "disabled"], $3 = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, k3 = { style: { width: "100%" } }, T3 = ["disabled"], B3 = /* @__PURE__ */ Object.assign({
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
    }
  },
  setup(p) {
    const y = p, { data: d, disabled: _ } = j(y), C = (x) => {
      _ && (d.value.disabled = !d.value.disabled);
    };
    return (x, u) => (a(), n("div", Se, [
      l(_) ? f("", !0) : (a(), n("div", {
        key: 0,
        style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
        onClick: C
      }, U(l(d).disabled == !0 ? "预览" : "编辑"), 1)),
      ze,
      e("div", Ke, [
        e("div", De, [
          b(g, {
            title: "基本信息",
            onAddItem: u[0] || (u[0] = (t) => l(d).baseKw.push(["", ""])),
            disabled: l(d).disabled
          }, {
            context: c(() => [
              e("div", Pe, [
                (a(!0), n(h, null, m(l(d).jobKw, (t, i) => (a(), n("div", {
                  class: "ru-personage-item",
                  key: i
                }, [
                  s(e("input", {
                    type: "text",
                    disabled: l(d).disabled,
                    "onUpdate:modelValue": (r) => t[0] = r,
                    style: { width: "4rem" }
                  }, null, 8, Xe), [
                    [o, t[0]]
                  ]),
                  v(" :  "),
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (r) => t[1] = r,
                    disabled: l(d).disabled
                  }, null, 8, Fe), [
                    [o, t[1]]
                  ])
                ]))), 128)),
                (a(!0), n(h, null, m(l(d).baseKw, (t, i) => (a(), n("div", {
                  class: "ru-personage-item",
                  key: i
                }, [
                  s(e("input", {
                    type: "text",
                    disabled: l(d).disabled,
                    "onUpdate:modelValue": (r) => t[0] = r,
                    style: { width: "4rem" }
                  }, null, 8, Le), [
                    [o, t[0]]
                  ]),
                  v(" :  "),
                  s(e("input", {
                    type: "text",
                    "onUpdate:modelValue": (r) => t[1] = r,
                    disabled: l(d).disabled
                  }, null, 8, Ge), [
                    [o, t[1]]
                  ])
                ]))), 128))
              ])
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        e("div", Je, [
          e("img", {
            style: { width: "100%" },
            src: l(d).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Qe)
        ])
      ]),
      e("div", We, [
        e("div", Ye, [
          b(g, {
            title: "教育背景",
            onAddItem: u[1] || (u[1] = (t) => l(d).educationalBackground.push({})),
            disabled: l(d).disabled
          }, {
            context: c(() => [
              (a(!0), n(h, null, m(l(d).educationalBackground, (t) => (a(), n("div", null, [
                e("div", Ie, [
                  e("div", e3, [
                    s(e("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (i) => t.starTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, t3), [
                      [o, t.starTime]
                    ]),
                    v(" - "),
                    s(e("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (i) => t.endTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, d3), [
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
                    }, null, 8, l3), [
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
                    }, null, 8, i3), [
                      [o, t.profession]
                    ])
                  ])
                ]),
                e("div", s3, [
                  e("div", o3, [
                    a3,
                    s(e("input", {
                      type: "text",
                      style: { width: "90%" },
                      "onUpdate:modelValue": (i) => t.professionalAchievement = i,
                      placeholder: "请输入专业成绩",
                      disabled: l(d).disabled
                    }, null, 8, n3), [
                      [o, t.professionalAchievement]
                    ])
                  ]),
                  e("div", r3, [
                    p3,
                    s(e("input", {
                      type: "text",
                      style: { width: "90%" },
                      "onUpdate:modelValue": (i) => t.majorCourse = i,
                      placeholder: "请输入主修课程",
                      disabled: l(d).disabled
                    }, null, 8, u3), [
                      [o, t.majorCourse]
                    ])
                  ])
                ])
              ]))), 256))
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      e("div", c3, [
        e("div", _3, [
          b(g, {
            title: "工作经验",
            onAddItem: u[2] || (u[2] = (t) => l(d).workExperience.push({})),
            disabled: l(d).disabled
          }, {
            context: c(() => [
              (a(!0), n(h, null, m(l(d).workExperience, (t) => (a(), n("div", null, [
                e("div", h3, [
                  e("div", m3, [
                    s(e("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (i) => t.starTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, y3), [
                      [o, t.starTime]
                    ]),
                    v(" - "),
                    s(e("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (i) => t.endTime = i,
                      style: { width: "5rem" },
                      disabled: l(d).disabled
                    }, null, 8, C3), [
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
                    }, null, 8, b3), [
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
                    }, null, 8, v3), [
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
          `, 8, x3), [
                  [o, t.context]
                ])
              ]))), 256))
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      e("div", w3, [
        e("div", f3, [
          b(g, {
            title: "荣誉证书",
            onAddItem: u[3] || (u[3] = (t) => l(d).certificateOfHonor.push({})),
            disabled: l(d).disabled
          }, {
            context: c(() => [
              (a(!0), n(h, null, m(l(d).certificateOfHonor, (t, i) => (a(), n("div", {
                style: { display: "flex", "justify-content": "space-between" },
                key: i
              }, [
                s(e("input", {
                  type: "text",
                  placeholder: "证书名称",
                  "onUpdate:modelValue": (r) => t.certificateName = r,
                  disabled: l(d).disabled
                }, null, 8, g3), [
                  [o, t.certificateName]
                ]),
                s(e("input", {
                  type: "text",
                  placeholder: "获奖时间",
                  "onUpdate:modelValue": (r) => t.awardTime = r,
                  style: { "text-align": "center" },
                  disabled: l(d).disabled
                }, null, 8, U3), [
                  [o, t.awardTime]
                ]),
                s(e("input", {
                  type: "text",
                  placeholder: "颁发单位",
                  "onUpdate:modelValue": (r) => t.issuer = r,
                  style: { "text-align": "right" },
                  disabled: l(d).disabled
                }, null, 8, V3), [
                  [o, t.issuer]
                ])
              ]))), 128))
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      e("div", $3, [
        e("div", k3, [
          b(g, { title: "自我评价" }, {
            context: c(() => [
              s(e("textarea", {
                rows: "4",
                style: { width: "100%" },
                "onUpdate:modelValue": u[4] || (u[4] = (t) => l(d).selfEvaluation = t),
                disabled: l(d).disabled
              }, null, 8, T3), [
                [o, l(d).selfEvaluation]
              ])
            ]),
            _: 1
          })
        ])
      ])
    ]));
  }
}), A = /* @__PURE__ */ B(B3, [["__scopeId", "data-v-6634ef0d"]]), Z3 = {
  install: (p) => {
    p.component(Z.name, Z), p.component(A.name, A);
  }
};
export {
  Z3 as default
};
