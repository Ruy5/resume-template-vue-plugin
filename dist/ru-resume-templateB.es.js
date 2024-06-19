import { openBlock as a, createElementBlock as n, createElementVNode as e, toDisplayString as U, createCommentVNode as k, renderSlot as T, toRefs as B, unref as l, createVNode as h, withCtx as y, Fragment as b, renderList as x, withDirectives as s, vModelText as o, createTextVNode as f, pushScopeId as $, popScopeId as C } from "vue";
const j = { style: { display: "flex", "align-items": "center", "justify-content": "space-between" } }, A = { style: { "font-size": "2rem", "border-bottom": "solid 4px #068359" } }, E = /* @__PURE__ */ e(
  "path",
  {
    d: "M512 1024C229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 794.741738 794.760389 1024 512 1024ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 754.368294 269.649625 950.859703 512 950.859703 754.350375 950.859703 950.841784 754.368294 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM548.570149 731.438811 475.429851 731.438811 475.429851 548.588068 292.579109 548.588068 292.579109 475.411201 475.429851 475.411201 475.429851 292.560457 548.570149 292.560457 548.570149 475.411201 731.420891 475.411201 731.420891 548.588068 548.570149 548.588068 548.570149 731.438811Z",
    fill: "#068359",
    "p-id": "4272"
  },
  null,
  -1
  /* HOISTED */
), N = [
  E
], O = /* @__PURE__ */ e(
  "div",
  { style: { "border-bottom": "solid 1px #068359", "margin-top": "4px" } },
  null,
  -1
  /* HOISTED */
), S = { style: { "margin-top": "1rem" } }, v = {
  __name: "BlockHeaderB",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(p, { emit: _ }) {
    const d = p, c = _, m = () => c("addItem");
    return (g, u) => (a(), n("div", null, [
      e("div", j, [
        e(
          "span",
          A,
          U(d.title),
          1
          /* TEXT */
        ),
        d.disabled ? (a(), n("svg", {
          key: 0,
          onClick: m,
          style: { height: "2rem", width: "2rem" },
          t: "1718802654871",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "4271",
          width: "200",
          height: "200"
        }, N)) : k("v-if", !0)
      ]),
      O,
      e("div", S, [
        T(g.$slots, "context")
      ])
    ]));
  }
}, M = (p, _) => {
  const d = p.__vccOpts || p;
  for (const [c, m] of _)
    d[c] = m;
  return d;
}, w = (p) => ($("data-v-6634ef0d"), p = p(), C(), p), R = { style: { display: "flex", width: "100%", "background-color": "#ffffff", "flex-direction": "column", "align-items": "center", position: "relative" } }, z = /* @__PURE__ */ w(() => /* @__PURE__ */ e(
  "div",
  { style: { "background-color": "#068359", height: "4rem", width: "95%", margin: "1rem 0", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "2rem" } },
  " 个人简历 ",
  -1
  /* HOISTED */
)), D = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, H = { style: { width: "80%", "padding-right": "2rem" } }, K = { class: "ru-personage-kws" }, Z = ["disabled", "onUpdate:modelValue"], P = ["onUpdate:modelValue", "disabled"], F = ["disabled", "onUpdate:modelValue"], L = ["onUpdate:modelValue", "disabled"], X = { style: { width: "20%" } }, q = ["src"], G = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, J = { style: { width: "100%" } }, Q = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, W = { style: { display: "flex" } }, Y = ["onUpdate:modelValue", "disabled"], I = ["onUpdate:modelValue", "disabled"], ee = ["onUpdate:modelValue", "disabled"], te = ["onUpdate:modelValue", "disabled"], de = { style: { transform: "translateX(0.2rem)" } }, le = { style: { display: "flex" } }, ie = /* @__PURE__ */ w(() => /* @__PURE__ */ e(
  "div",
  { style: { width: "10%" } },
  "专业成绩：",
  -1
  /* HOISTED */
)), se = ["onUpdate:modelValue", "disabled"], oe = { style: { display: "flex" } }, ae = /* @__PURE__ */ w(() => /* @__PURE__ */ e(
  "div",
  { style: { width: "10%" } },
  "主修课程：",
  -1
  /* HOISTED */
)), ne = ["onUpdate:modelValue", "disabled"], re = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, pe = { style: { width: "100%" } }, ue = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, ce = { style: { display: "flex" } }, _e = ["onUpdate:modelValue", "disabled"], me = ["onUpdate:modelValue", "disabled"], he = ["onUpdate:modelValue", "disabled"], ye = ["onUpdate:modelValue", "disabled"], be = ["onUpdate:modelValue", "disabled"], xe = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, ve = { style: { width: "100%" } }, fe = ["onUpdate:modelValue", "disabled"], ge = ["onUpdate:modelValue", "disabled"], we = ["onUpdate:modelValue", "disabled"], Ve = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Ue = { style: { width: "100%" } }, ke = ["disabled"], Te = /* @__PURE__ */ Object.assign({
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
    const _ = p, { data: d, disabled: c } = B(_), m = (g) => {
      c && (d.value.disabled = !d.value.disabled);
    };
    return (g, u) => (a(), n("div", R, [
      l(c) ? k("v-if", !0) : (a(), n(
        "div",
        {
          key: 0,
          style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
          onClick: m
        },
        U(l(d).disabled == !0 ? "预览" : "编辑"),
        1
        /* TEXT */
      )),
      z,
      e("div", D, [
        e("div", H, [
          h(v, {
            title: "基本信息",
            onAddItem: u[0] || (u[0] = (t) => l(d).baseKw.push(["", ""])),
            disabled: l(d).disabled
          }, {
            context: y(() => [
              e("div", K, [
                (a(!0), n(
                  b,
                  null,
                  x(l(d).jobKw, (t, i) => (a(), n("div", {
                    class: "ru-personage-item",
                    key: i
                  }, [
                    s(e("input", {
                      type: "text",
                      disabled: l(d).disabled,
                      "onUpdate:modelValue": (r) => t[0] = r,
                      style: { width: "4rem" }
                    }, null, 8, Z), [
                      [o, t[0]]
                    ]),
                    f(" :  "),
                    s(e("input", {
                      type: "text",
                      "onUpdate:modelValue": (r) => t[1] = r,
                      disabled: l(d).disabled
                    }, null, 8, P), [
                      [o, t[1]]
                    ])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                (a(!0), n(
                  b,
                  null,
                  x(l(d).baseKw, (t, i) => (a(), n("div", {
                    class: "ru-personage-item",
                    key: i
                  }, [
                    s(e("input", {
                      type: "text",
                      disabled: l(d).disabled,
                      "onUpdate:modelValue": (r) => t[0] = r,
                      style: { width: "4rem" }
                    }, null, 8, F), [
                      [o, t[0]]
                    ]),
                    f(" :  "),
                    s(e("input", {
                      type: "text",
                      "onUpdate:modelValue": (r) => t[1] = r,
                      disabled: l(d).disabled
                    }, null, 8, L), [
                      [o, t[1]]
                    ])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ]),
        e("div", X, [
          e("img", {
            style: { width: "100%" },
            src: l(d).avatar,
            alt: "",
            srcset: ""
          }, null, 8, q)
        ])
      ]),
      e("div", G, [
        e("div", J, [
          h(v, {
            title: "教育背景",
            onAddItem: u[1] || (u[1] = (t) => l(d).educationalBackground.push({})),
            disabled: l(d).disabled
          }, {
            context: y(() => [
              (a(!0), n(
                b,
                null,
                x(l(d).educationalBackground, (t) => (a(), n("div", null, [
                  e("div", Q, [
                    e("div", W, [
                      s(e("input", {
                        type: "text",
                        placeholder: "开始时间",
                        "onUpdate:modelValue": (i) => t.starTime = i,
                        style: { width: "5rem" },
                        disabled: l(d).disabled
                      }, null, 8, Y), [
                        [o, t.starTime]
                      ]),
                      f(" - "),
                      s(e("input", {
                        type: "text",
                        placeholder: "结束时间",
                        "onUpdate:modelValue": (i) => t.endTime = i,
                        style: { width: "5rem" },
                        disabled: l(d).disabled
                      }, null, 8, I), [
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
                      }, null, 8, ee), [
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
                      }, null, 8, te), [
                        [o, t.profession]
                      ])
                    ])
                  ]),
                  e("div", de, [
                    e("div", le, [
                      ie,
                      s(e("input", {
                        type: "text",
                        style: { width: "90%" },
                        "onUpdate:modelValue": (i) => t.professionalAchievement = i,
                        placeholder: "请输入专业成绩",
                        disabled: l(d).disabled
                      }, null, 8, se), [
                        [o, t.professionalAchievement]
                      ])
                    ]),
                    e("div", oe, [
                      ae,
                      s(e("input", {
                        type: "text",
                        style: { width: "90%" },
                        "onUpdate:modelValue": (i) => t.majorCourse = i,
                        placeholder: "请输入主修课程",
                        disabled: l(d).disabled
                      }, null, 8, ne), [
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
          }, 8, ["disabled"])
        ])
      ]),
      e("div", re, [
        e("div", pe, [
          h(v, {
            title: "工作经验",
            onAddItem: u[2] || (u[2] = (t) => l(d).workExperience.push({})),
            disabled: l(d).disabled
          }, {
            context: y(() => [
              (a(!0), n(
                b,
                null,
                x(l(d).workExperience, (t) => (a(), n("div", null, [
                  e("div", ue, [
                    e("div", ce, [
                      s(e("input", {
                        type: "text",
                        placeholder: "开始时间",
                        "onUpdate:modelValue": (i) => t.starTime = i,
                        style: { width: "5rem" },
                        disabled: l(d).disabled
                      }, null, 8, _e), [
                        [o, t.starTime]
                      ]),
                      f(" - "),
                      s(e("input", {
                        type: "text",
                        placeholder: "结束时间",
                        "onUpdate:modelValue": (i) => t.endTime = i,
                        style: { width: "5rem" },
                        disabled: l(d).disabled
                      }, null, 8, me), [
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
                      }, null, 8, he), [
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
                      }, null, 8, ye), [
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
          `, 8, be), [
                    [o, t.context]
                  ])
                ]))),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ])
      ]),
      e("div", xe, [
        e("div", ve, [
          h(v, {
            title: "荣誉证书",
            onAddItem: u[3] || (u[3] = (t) => l(d).certificateOfHonor.push({})),
            disabled: l(d).disabled
          }, {
            context: y(() => [
              (a(!0), n(
                b,
                null,
                x(l(d).certificateOfHonor, (t, i) => (a(), n("div", {
                  style: { display: "flex", "justify-content": "space-between" },
                  key: i
                }, [
                  s(e("input", {
                    type: "text",
                    placeholder: "证书名称",
                    "onUpdate:modelValue": (r) => t.certificateName = r,
                    disabled: l(d).disabled
                  }, null, 8, fe), [
                    [o, t.certificateName]
                  ]),
                  s(e("input", {
                    type: "text",
                    placeholder: "获奖时间",
                    "onUpdate:modelValue": (r) => t.awardTime = r,
                    style: { "text-align": "center" },
                    disabled: l(d).disabled
                  }, null, 8, ge), [
                    [o, t.awardTime]
                  ]),
                  s(e("input", {
                    type: "text",
                    placeholder: "颁发单位",
                    "onUpdate:modelValue": (r) => t.issuer = r,
                    style: { "text-align": "right" },
                    disabled: l(d).disabled
                  }, null, 8, we), [
                    [o, t.issuer]
                  ])
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ])
      ]),
      e("div", Ve, [
        e("div", Ue, [
          h(v, { title: "自我评价" }, {
            context: y(() => [
              s(e("textarea", {
                rows: "4",
                style: { width: "100%" },
                "onUpdate:modelValue": u[4] || (u[4] = (t) => l(d).selfEvaluation = t),
                disabled: l(d).disabled
              }, null, 8, ke), [
                [o, l(d).selfEvaluation]
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]));
  }
}), V = /* @__PURE__ */ M(Te, [["__scopeId", "data-v-6634ef0d"]]), $e = {
  install: (p) => {
    p.component(V.name, V);
  }
};
export {
  $e as default
};
