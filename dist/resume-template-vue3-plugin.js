/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Pn(e, t) {
  const n = new Set(e.split(","));
  return (s) => n.has(s);
}
const P = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, In = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], oe = () => {
}, An = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), U = Object.assign, Un = Object.prototype.hasOwnProperty, b = (e, t) => Un.call(e, t), _ = Array.isArray, G = (e) => ze(e) === "[object Map]", Wt = (e) => ze(e) === "[object Set]", N = (e) => typeof e == "function", $ = (e) => typeof e == "string", ne = (e) => typeof e == "symbol", S = (e) => e !== null && typeof e == "object", jn = (e) => (S(e) || N(e)) && N(e.then) && N(e.catch), qt = Object.prototype.toString, ze = (e) => qt.call(e), kt = (e) => ze(e).slice(8, -1), Zt = (e) => ze(e) === "[object Object]", at = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ln = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = (e, t) => !Object.is(e, t), Hn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, zn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, yt = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Nt;
const Jt = () => Nt || (Nt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ut(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = $(s) ? qn(s) : ut(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if ($(e) || S(e))
    return e;
}
const Kn = /;(?![^(]*\))/g, Bn = /:([^]+)/, Wn = /\/\*[^]*?\*\//g;
function qn(e) {
  const t = {};
  return e.replace(Wn, "").split(Kn).forEach((n) => {
    if (n) {
      const s = n.split(Bn);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function dt(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (_(e))
    for (let n = 0; n < e.length; n++) {
      const s = dt(e[n]);
      s && (t += s + " ");
    }
  else if (S(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const tt = (e) => $(e) ? e : e == null ? "" : _(e) || S(e) && (e.toString === qt || !N(e.toString)) ? JSON.stringify(e, Yt, 2) : String(e), Yt = (e, t) => t && t.__v_isRef ? Yt(e, t.value) : G(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ge(s, r) + " =>"] = o, n),
    {}
  )
} : Wt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ge(n))
} : ne(t) ? Ge(t) : S(t) && !_(t) && !Zt(t) ? String(t) : t, Ge = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ne(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ue(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let kn;
function Zn(e, t = kn) {
  t && t.active && t.effects.push(e);
}
let me;
class Jn {
  constructor(t, n, s, o) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Zn(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ke();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Yn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Be();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = X, n = me;
    try {
      return X = !0, me = this, this._runnings++, xt(this), this.fn();
    } finally {
      Ot(this), this._runnings--, me = n, X = t;
    }
  }
  stop() {
    this.active && (xt(this), Ot(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Yn(e) {
  return e.value;
}
function xt(e) {
  e._trackId++, e._depsLength = 0;
}
function Ot(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Gt(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Gt(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let X = !0, nt = 0;
const Xt = [];
function Ke() {
  Xt.push(X), X = !1;
}
function Be() {
  const e = Xt.pop();
  X = e === void 0 ? !0 : e;
}
function ft() {
  nt++;
}
function pt() {
  for (nt--; !nt && st.length; )
    st.shift()();
}
function Gn(e, t, n) {
  var s;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Gt(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((s = e.onTrack) == null || s.call(e, U({ effect: e }, n)));
  }
}
const st = [];
function Xn(e, t, n) {
  var s;
  ft();
  for (const o of e.keys()) {
    let r;
    o._dirtyLevel < t && (r ?? (r = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (r ?? (r = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((s = o.onTrigger) == null || s.call(o, U({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && st.push(o.scheduler)));
  }
  pt();
}
const Qn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ie = /* @__PURE__ */ new WeakMap(), Q = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), ot = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function R(e, t, n) {
  if (X && me) {
    let s = Ie.get(e);
    s || Ie.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = Qn(() => s.delete(n))), Gn(
      me,
      o,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function k(e, t, n, s, o, r) {
  const l = Ie.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && _(e)) {
    const c = Number(s);
    l.forEach((d, C) => {
      (C === "length" || !ne(C) && C >= c) && i.push(d);
    });
  } else
    switch (n !== void 0 && i.push(l.get(n)), t) {
      case "add":
        _(e) ? at(n) && i.push(l.get("length")) : (i.push(l.get(Q)), G(e) && i.push(l.get(ot)));
        break;
      case "delete":
        _(e) || (i.push(l.get(Q)), G(e) && i.push(l.get(ot)));
        break;
      case "set":
        G(e) && i.push(l.get(Q));
        break;
    }
  ft();
  for (const c of i)
    c && Xn(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: s,
        oldValue: o,
        oldTarget: r
      } : void 0
    );
  pt();
}
function es(e, t) {
  const n = Ie.get(e);
  return n && n.get(t);
}
const ts = /* @__PURE__ */ Pn("__proto__,__v_isRef,__isVue"), Qt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ne)
), St = /* @__PURE__ */ ns();
function ns() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = h(this);
      for (let r = 0, l = this.length; r < l; r++)
        R(s, "get", r + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(h)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ke(), ft();
      const s = h(this)[t].apply(this, n);
      return pt(), Be(), s;
    };
  }), e;
}
function ss(e) {
  ne(e) || (e = String(e));
  const t = h(this);
  return R(t, "has", e), t.hasOwnProperty(e);
}
class en {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? rn : on : r ? gs : sn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = _(t);
    if (!o) {
      if (l && b(St, n))
        return Reflect.get(St, n, s);
      if (n === "hasOwnProperty")
        return ss;
    }
    const i = Reflect.get(t, n, s);
    return (ne(n) ? Qt.has(n) : ts(n)) || (o || R(t, "get", n), r) ? i : M(i) ? l && at(n) ? i : i.value : S(i) ? o ? cn(i) : ln(i) : i;
  }
}
class os extends en {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const c = de(r);
      if (!le(s) && !de(s) && (r = h(r), s = h(s)), !_(t) && M(r) && !M(s))
        return c ? !1 : (r.value = s, !0);
    }
    const l = _(t) && at(n) ? Number(n) < t.length : b(t, n), i = Reflect.set(t, n, s, o);
    return t === h(o) && (l ? ae(s, r) && k(t, "set", n, s, r) : k(t, "add", n, s)), i;
  }
  deleteProperty(t, n) {
    const s = b(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && k(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ne(n) || !Qt.has(n)) && R(t, "has", n), s;
  }
  ownKeys(t) {
    return R(
      t,
      "iterate",
      _(t) ? "length" : Q
    ), Reflect.ownKeys(t);
  }
}
class tn extends en {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && ue(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && ue(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const rs = /* @__PURE__ */ new os(), is = /* @__PURE__ */ new tn(), ls = /* @__PURE__ */ new tn(!0), ht = (e) => e, We = (e) => Reflect.getPrototypeOf(e);
function ye(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = h(e), r = h(t);
  n || (ae(t, r) && R(o, "get", t), R(o, "get", r));
  const { has: l } = We(o), i = s ? ht : n ? Ct : mt;
  if (l.call(o, t))
    return i(e.get(t));
  if (l.call(o, r))
    return i(e.get(r));
  e !== o && e.get(t);
}
function Ne(e, t = !1) {
  const n = this.__v_raw, s = h(n), o = h(e);
  return t || (ae(e, o) && R(s, "has", e), R(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function xe(e, t = !1) {
  return e = e.__v_raw, !t && R(h(e), "iterate", Q), Reflect.get(e, "size", e);
}
function Vt(e) {
  e = h(e);
  const t = h(this);
  return We(t).has.call(t, e) || (t.add(e), k(t, "add", e, e)), this;
}
function Rt(e, t) {
  t = h(t);
  const n = h(this), { has: s, get: o } = We(n);
  let r = s.call(n, e);
  r ? process.env.NODE_ENV !== "production" && nn(n, s, e) : (e = h(e), r = s.call(n, e));
  const l = o.call(n, e);
  return n.set(e, t), r ? ae(t, l) && k(n, "set", e, t, l) : k(n, "add", e, t), this;
}
function Dt(e) {
  const t = h(this), { has: n, get: s } = We(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && nn(t, n, e) : (e = h(e), o = n.call(t, e));
  const r = s ? s.call(t, e) : void 0, l = t.delete(e);
  return o && k(t, "delete", e, void 0, r), l;
}
function Tt() {
  const e = h(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? G(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && k(e, "clear", void 0, void 0, n), s;
}
function Oe(e, t) {
  return function(s, o) {
    const r = this, l = r.__v_raw, i = h(l), c = t ? ht : e ? Ct : mt;
    return !e && R(i, "iterate", Q), l.forEach((d, C) => s.call(o, c(d), c(C), r));
  };
}
function Se(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = h(o), l = G(r), i = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, d = o[e](...s), C = n ? ht : t ? Ct : mt;
    return !t && R(
      r,
      "iterate",
      c ? ot : Q
    ), {
      // iterator protocol
      next() {
        const { value: a, done: p } = d.next();
        return p ? { value: a, done: p } : {
          value: i ? [C(a[0]), C(a[1])] : C(a),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function H(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      ue(
        `${Ln(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cs() {
  const e = {
    get(r) {
      return ye(this, r);
    },
    get size() {
      return xe(this);
    },
    has: Ne,
    add: Vt,
    set: Rt,
    delete: Dt,
    clear: Tt,
    forEach: Oe(!1, !1)
  }, t = {
    get(r) {
      return ye(this, r, !1, !0);
    },
    get size() {
      return xe(this);
    },
    has: Ne,
    add: Vt,
    set: Rt,
    delete: Dt,
    clear: Tt,
    forEach: Oe(!1, !0)
  }, n = {
    get(r) {
      return ye(this, r, !0);
    },
    get size() {
      return xe(this, !0);
    },
    has(r) {
      return Ne.call(this, r, !0);
    },
    add: H("add"),
    set: H("set"),
    delete: H("delete"),
    clear: H("clear"),
    forEach: Oe(!0, !1)
  }, s = {
    get(r) {
      return ye(this, r, !0, !0);
    },
    get size() {
      return xe(this, !0);
    },
    has(r) {
      return Ne.call(this, r, !0);
    },
    add: H("add"),
    set: H("set"),
    delete: H("delete"),
    clear: H("clear"),
    forEach: Oe(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Se(r, !1, !1), n[r] = Se(r, !0, !1), t[r] = Se(r, !1, !0), s[r] = Se(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  as,
  us,
  ds,
  fs
] = /* @__PURE__ */ cs();
function _t(e, t) {
  const n = t ? e ? fs : ds : e ? us : as;
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    b(n, o) && o in s ? n : s,
    o,
    r
  );
}
const ps = {
  get: /* @__PURE__ */ _t(!1, !1)
}, hs = {
  get: /* @__PURE__ */ _t(!0, !1)
}, _s = {
  get: /* @__PURE__ */ _t(!0, !0)
};
function nn(e, t, n) {
  const s = h(n);
  if (s !== n && t.call(e, s)) {
    const o = kt(e);
    ue(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sn = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
function ms(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Cs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ms(kt(e));
}
function ln(e) {
  return de(e) ? e : gt(
    e,
    !1,
    rs,
    ps,
    sn
  );
}
function cn(e) {
  return gt(
    e,
    !0,
    is,
    hs,
    on
  );
}
function Ve(e) {
  return gt(
    e,
    !0,
    ls,
    _s,
    rn
  );
}
function gt(e, t, n, s, o) {
  if (!S(e))
    return process.env.NODE_ENV !== "production" && ue(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = Cs(e);
  if (l === 0)
    return e;
  const i = new Proxy(
    e,
    l === 2 ? s : n
  );
  return o.set(e, i), i;
}
function ie(e) {
  return de(e) ? ie(e.__v_raw) : !!(e && e.__v_isReactive);
}
function de(e) {
  return !!(e && e.__v_isReadonly);
}
function le(e) {
  return !!(e && e.__v_isShallow);
}
function Ae(e) {
  return e ? !!e.__v_raw : !1;
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function ws(e) {
  return Object.isExtensible(e) && zn(e, "__v_skip", !0), e;
}
const mt = (e) => S(e) ? ln(e) : e, Ct = (e) => S(e) ? cn(e) : e;
function M(e) {
  return !!(e && e.__v_isRef === !0);
}
function f(e) {
  return M(e) ? e.value : e;
}
const bs = {
  get: (e, t, n) => f(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return M(o) && !M(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function vs(e) {
  return ie(e) ? e : new Proxy(e, bs);
}
function Es(e) {
  process.env.NODE_ENV !== "production" && !Ae(e) && ue("toRefs() expects a reactive object but received a plain one.");
  const t = _(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ns(e, n);
  return t;
}
class ys {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return es(h(this._object), this._key);
  }
}
function Ns(e, t, n) {
  const s = e[t];
  return M(s) ? s : new ys(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ee = [];
function xs(e) {
  ee.push(e);
}
function Os() {
  ee.pop();
}
function m(e, ...t) {
  Ke();
  const n = ee.length ? ee[ee.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Ss();
  if (s)
    te(
      s,
      n,
      11,
      [
        e + t.map((r) => {
          var l, i;
          return (i = (l = r.toString) == null ? void 0 : l.call(r)) != null ? i : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${Dn(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Vs(o)), console.warn(...r);
  }
  Be();
}
function Ss() {
  let e = ee[ee.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Vs(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Rs(n));
  }), t;
}
function Rs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Dn(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ds(e.props), r] : [o + r];
}
function Ds(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...an(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function an(e, t, n) {
  return $(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : M(t) ? (t = an(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const un = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function te(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    wt(o, t, n);
  }
}
function Te(e, t, n, s) {
  if (N(e)) {
    const o = te(e, t, n, s);
    return o && jn(o) && o.catch((r) => {
      wt(r, t, n);
    }), o;
  }
  if (_(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Te(e[r], t, n, s));
    return o;
  } else
    process.env.NODE_ENV !== "production" && m(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function wt(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, i = process.env.NODE_ENV !== "production" ? un[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const d = r.ec;
      if (d) {
        for (let C = 0; C < d.length; C++)
          if (d[C](e, l, i) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ke(), te(
        c,
        null,
        10,
        [e, l, i]
      ), Be();
      return;
    }
  }
  Ts(e, n, o, s);
}
function Ts(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = un[t];
    if (n && xs(n), m(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Os(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ue = !1, rt = !1;
const I = [];
let B = 0;
const ce = [];
let F = null, K = 0;
const dn = /* @__PURE__ */ Promise.resolve();
let bt = null;
const $s = 100;
function Ms(e) {
  const t = bt || dn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ps(e) {
  let t = B + 1, n = I.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = I[s], r = be(o);
    r < e || r === e && o.pre ? t = s + 1 : n = s;
  }
  return t;
}
function vt(e) {
  (!I.length || !I.includes(
    e,
    Ue && e.allowRecurse ? B + 1 : B
  )) && (e.id == null ? I.push(e) : I.splice(Ps(e.id), 0, e), fn());
}
function fn() {
  !Ue && !rt && (rt = !0, bt = dn.then(hn));
}
function pn(e) {
  _(e) ? ce.push(...e) : (!F || !F.includes(
    e,
    e.allowRecurse ? K + 1 : K
  )) && ce.push(e), fn();
}
function Is(e) {
  if (ce.length) {
    const t = [...new Set(ce)].sort(
      (n, s) => be(n) - be(s)
    );
    if (ce.length = 0, F) {
      F.push(...t);
      return;
    }
    for (F = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), K = 0; K < F.length; K++)
      process.env.NODE_ENV !== "production" && _n(e, F[K]) || F[K]();
    F = null, K = 0;
  }
}
const be = (e) => e.id == null ? 1 / 0 : e.id, As = (e, t) => {
  const n = be(e) - be(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function hn(e) {
  rt = !1, Ue = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), I.sort(As);
  const t = process.env.NODE_ENV !== "production" ? (n) => _n(e, n) : oe;
  try {
    for (B = 0; B < I.length; B++) {
      const n = I[B];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        te(n, null, 14);
      }
    }
  } finally {
    B = 0, I.length = 0, Is(e), Ue = !1, bt = null, (I.length || ce.length) && hn(e);
  }
}
function _n(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > $s) {
      const s = t.ownerInstance, o = s && Rn(s.type);
      return wt(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const fe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Jt().__VUE_HMR_RUNTIME__ = {
  createRecord: Xe(Us),
  rerender: Xe(js),
  reload: Xe(Fs)
});
const je = /* @__PURE__ */ new Map();
function Us(e, t) {
  return je.has(e) ? !1 : (je.set(e, {
    initialDef: Ce(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ce(e) {
  return Tn(e) ? e.__vccOpts : e;
}
function js(e, t) {
  const n = je.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Ce(s.type).render = t), s.renderCache = [], s.effect.dirty = !0, s.update();
  }));
}
function Fs(e, t) {
  const n = je.get(e);
  if (!n)
    return;
  t = Ce(t), $t(n.initialDef, t);
  const s = [...n.instances];
  for (const o of s) {
    const r = Ce(o.type);
    fe.has(r) || (r !== n.initialDef && $t(r, t), fe.add(r)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (fe.add(r), o.ceReload(t.styles), fe.delete(r)) : o.parent ? (o.parent.effect.dirty = !0, vt(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  pn(() => {
    for (const o of s)
      fe.delete(
        Ce(o.type)
      );
  });
}
function $t(e, t) {
  U(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Xe(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let W, _e = [], it = !1;
function Ls(e, ...t) {
  W ? W.emit(e, ...t) : it || _e.push({ event: e, args: t });
}
function gn(e, t) {
  var n, s;
  W = e, W ? (W.enabled = !0, _e.forEach(({ event: o, args: r }) => W.emit(o, ...r)), _e = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gn(r, t);
  }), setTimeout(() => {
    W || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, it = !0, _e = []);
  }, 3e3)) : (it = !0, _e = []);
}
const Hs = /* @__PURE__ */ zs(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zs(e) {
  return (t) => {
    Ls(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let y = null, qe = null;
function Mt(e) {
  const t = y;
  return y = e, qe = e && e.type.__scopeId || null, t;
}
function mn(e) {
  qe = e;
}
function Cn() {
  qe = null;
}
function z(e, t = y, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ht(-1);
    const r = Mt(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Mt(r), s._d && Ht(1);
    }
    return process.env.NODE_ENV !== "production" && Hs(t), l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
const Ks = Symbol.for("v-ndc"), Bs = (e) => e.__isSuspense;
function Ws(e, t) {
  t && t.pendingBranch ? _(e) ? t.effects.push(...e) : t.effects.push(e) : pn(e);
}
const qs = Symbol.for("v-scx"), ks = () => {
  {
    const e = oo(qs);
    return e || process.env.NODE_ENV !== "production" && m(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Re = {};
function Zs(e, t, {
  immediate: n,
  deep: s,
  flush: o,
  once: r,
  onTrack: l,
  onTrigger: i
} = P) {
  if (t && r) {
    const g = t;
    t = (...Ye) => {
      g(...Ye), Je();
    };
  }
  process.env.NODE_ENV !== "production" && s !== void 0 && typeof s == "number" && m(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && m(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && m(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && m(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (g) => {
    m(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ke, C = (g) => s === !0 ? g : (
    // for deep: false, only traverse root-level properties
    Y(g, s === !1 ? 1 : void 0)
  );
  let a, p = !1, w = !1;
  if (M(e) ? (a = () => e.value, p = le(e)) : ie(e) ? (a = () => C(e), p = !0) : _(e) ? (w = !0, p = e.some((g) => ie(g) || le(g)), a = () => e.map((g) => {
    if (M(g))
      return g.value;
    if (ie(g))
      return C(g);
    if (N(g))
      return te(g, d, 2);
    process.env.NODE_ENV !== "production" && c(g);
  })) : N(e) ? t ? a = () => te(e, d, 2) : a = () => (O && O(), Te(
    e,
    d,
    3,
    [j]
  )) : (a = oe, process.env.NODE_ENV !== "production" && c(e)), t && s) {
    const g = a;
    a = () => Y(g());
  }
  let O, j = (g) => {
    O = T.onStop = () => {
      te(g, d, 4), O = T.onStop = void 0;
    };
  }, Ze;
  if (Sn)
    if (j = oe, t ? n && Te(t, d, 3, [
      a(),
      w ? [] : void 0,
      j
    ]) : a(), o === "sync") {
      const g = ks();
      Ze = g.__watcherHandles || (g.__watcherHandles = []);
    } else
      return oe;
  let Z = w ? new Array(e.length).fill(Re) : Re;
  const J = () => {
    if (!(!T.active || !T.dirty))
      if (t) {
        const g = T.run();
        (s || p || (w ? g.some((Ye, Mn) => ae(Ye, Z[Mn])) : ae(g, Z))) && (O && O(), Te(t, d, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          Z === Re ? void 0 : w && Z[0] === Re ? [] : Z,
          j
        ]), Z = g);
      } else
        T.run();
  };
  J.allowRecurse = !!t;
  let Ee;
  o === "sync" ? Ee = J : o === "post" ? Ee = () => Lt(J, d && d.suspense) : (J.pre = !0, d && (J.id = d.uid), Ee = () => vt(J));
  const T = new Jn(a, oe, Ee), Je = () => {
    T.stop();
  };
  return process.env.NODE_ENV !== "production" && (T.onTrack = l, T.onTrigger = i), t ? n ? J() : Z = T.run() : o === "post" ? Lt(
    T.run.bind(T),
    d && d.suspense
  ) : T.run(), Ze && Ze.push(Je), Je;
}
function Js(e, t, n) {
  const s = this.proxy, o = $(e) ? e.includes(".") ? Ys(s, e) : () => s[e] : e.bind(s, s);
  let r;
  N(t) ? r = t : (r = t.handler, n = t);
  const l = po(this), i = Zs(o, r.bind(s), n);
  return l(), i;
}
function Ys(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Y(e, t = 1 / 0, n) {
  if (t <= 0 || !S(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, M(e))
    Y(e.value, t, n);
  else if (_(e))
    for (let s = 0; s < e.length; s++)
      Y(e[s], t, n);
  else if (Wt(e) || G(e))
    e.forEach((s) => {
      Y(s, t, n);
    });
  else if (Zt(e))
    for (const s in e)
      Y(e[s], t, n);
  return e;
}
function v(e, t) {
  if (y === null)
    return process.env.NODE_ENV !== "production" && m("withDirectives can only be used inside render functions."), e;
  const n = Vn(y) || y.proxy, s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, l, i, c = P] = t[o];
    r && (N(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Y(l), s.push({
      dir: r,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: i,
      modifiers: c
    }));
  }
  return e;
}
const Gs = (e) => !!e.type.__asyncLoader;
function pe(e, t, n, s) {
  let o;
  const r = n;
  if (_(e) || $(e)) {
    o = new Array(e.length);
    for (let l = 0, i = e.length; l < i; l++)
      o[l] = t(e[l], l, void 0, r);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && m(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (S(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, i) => t(l, i, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let i = 0, c = l.length; i < c; i++) {
        const d = l[i];
        o[i] = t(e[d], d, i, r);
      }
    }
  else
    o = [];
  return o;
}
function Pt(e, t, n = {}, s, o) {
  if (y.isCE || y.parent && Gs(y.parent) && y.parent.isCE)
    return t !== "default" && (n.name = t), q("slot", n, s);
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (m(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), x();
  const l = r && wn(r(n)), i = En(
    L,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      l && l.key || `_${t}`
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), i;
}
function wn(e) {
  return e.some((t) => yn(t) ? !(t.type === Le || t.type === L && !wn(t.children)) : !0) ? e : null;
}
const lt = (e) => e ? ho(e) ? Vn(e) || e.proxy : lt(e.parent) : null, we = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ U(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ve(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ve(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ve(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ve(e.refs) : e.refs,
    $parent: (e) => lt(e.parent),
    $root: (e) => lt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, vt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ms.bind(e.proxy)),
    $watch: (e) => Js.bind(e)
  })
), Xs = (e) => e === "_" || e === "$", Qe = (e, t) => e !== P && !e.__isScriptSetup && b(e, t), Qs = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: l, type: i, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const w = l[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Qe(s, t))
          return l[t] = 1, s[t];
        if (o !== P && b(o, t))
          return l[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && b(d, t)
        )
          return l[t] = 3, r[t];
        if (n !== P && b(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const C = we[t];
    let a, p;
    if (C)
      return t === "$attrs" ? (R(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && R(e, "get", t), C(e);
    if (
      // css module (injected by vue-loader)
      (a = i.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== P && b(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, b(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && y && (!$(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== P && Xs(t[0]) && b(o, t) ? m(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === y && m(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Qe(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && b(o, t) ? (m(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== P && b(s, t) ? (s[t] = n, !0) : b(e.props, t) ? (process.env.NODE_ENV !== "production" && m(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && m(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, l) {
    let i;
    return !!n[l] || e !== P && b(e, l) || Qe(t, l) || (i = r[0]) && b(i, l) || b(s, l) || b(we, l) || b(o.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : b(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Qs.ownKeys = (e) => (m(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function It(e) {
  return _(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function eo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, i = r.get(t);
  let c;
  return i ? c = i : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (d) => Fe(c, d, l, !0)
  ), Fe(c, t, l)), S(t) && r.set(t, c), c;
}
function Fe(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Fe(e, r, n, !0), o && o.forEach(
    (l) => Fe(e, l, n, !0)
  );
  for (const l in t)
    if (s && l === "expose")
      process.env.NODE_ENV !== "production" && m(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = to[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
    }
  return e;
}
const to = {
  data: At,
  props: jt,
  emits: jt,
  // objects
  methods: ge,
  computed: ge,
  // lifecycle
  beforeCreate: D,
  created: D,
  beforeMount: D,
  mounted: D,
  beforeUpdate: D,
  updated: D,
  beforeDestroy: D,
  beforeUnmount: D,
  destroyed: D,
  unmounted: D,
  activated: D,
  deactivated: D,
  errorCaptured: D,
  serverPrefetch: D,
  // assets
  components: ge,
  directives: ge,
  // watch
  watch: so,
  // provide / inject
  provide: At,
  inject: no
};
function At(e, t) {
  return t ? e ? function() {
    return U(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function no(e, t) {
  return ge(Ut(e), Ut(t));
}
function Ut(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function D(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ge(e, t) {
  return e ? U(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function jt(e, t) {
  return e ? _(e) && _(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : U(
    /* @__PURE__ */ Object.create(null),
    It(e),
    It(t ?? {})
  ) : t;
}
function so(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = U(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = D(e[s], t[s]);
  return n;
}
let Ft = null;
function oo(e, t, n = !1) {
  const s = ke || y;
  if (s || Ft) {
    const o = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Ft._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && m(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && m("inject() can only be used inside setup() or functional components.");
}
const ro = {}, bn = (e) => Object.getPrototypeOf(e) === ro, Lt = Ws, io = (e) => e.__isTeleport, L = Symbol.for("v-fgt"), lo = Symbol.for("v-txt"), Le = Symbol.for("v-cmt"), $e = [];
let A = null;
function x(e = !1) {
  $e.push(A = e ? null : []);
}
function co() {
  $e.pop(), A = $e[$e.length - 1] || null;
}
let ve = 1;
function Ht(e) {
  ve += e;
}
function vn(e) {
  return e.dynamicChildren = ve > 0 ? A || In : null, co(), ve > 0 && A && A.push(e), e;
}
function V(e, t, n, s, o, r) {
  return vn(
    u(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function En(e, t, n, s, o) {
  return vn(
    q(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function yn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ao = (...e) => xn(
  ...e
), Nn = ({ key: e }) => e ?? null, Me = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $(e) || M(e) || N(e) ? { i: y, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, o = null, r = e === L ? 0 : 1, l = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nn(t),
    ref: t && Me(t),
    scopeId: qe,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: y
  };
  return i ? (Et(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= $(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && m("VNode created with invalid key (NaN). VNode type:", c.type), ve > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  A && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && A.push(c), c;
}
const q = process.env.NODE_ENV !== "production" ? ao : xn;
function xn(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Ks) && (process.env.NODE_ENV !== "production" && !e && m(`Invalid vnode type when creating vnode: ${e}.`), e = Le), yn(e)) {
    const i = He(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Et(i, n), ve > 0 && !r && A && (i.shapeFlag & 6 ? A[A.indexOf(e)] = i : A.push(i)), i.patchFlag |= -2, i;
  }
  if (Tn(e) && (e = e.__vccOpts), t) {
    t = uo(t);
    let { class: i, style: c } = t;
    i && !$(i) && (t.class = dt(i)), S(c) && (Ae(c) && !_(c) && (c = U({}, c)), t.style = ut(c));
  }
  const l = $(e) ? 1 : Bs(e) ? 128 : io(e) ? 64 : S(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && Ae(e) && (e = h(e), m(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), u(
    e,
    t,
    n,
    s,
    o,
    l,
    r,
    !0
  );
}
function uo(e) {
  return e ? Ae(e) || bn(e) ? U({}, e) : e : null;
}
function He(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: l, children: i, transition: c } = e, d = t ? fo(o || {}, t) : o, C = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Nn(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? _(r) ? r.concat(Me(t)) : [r, Me(t)] : Me(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && _(i) ? i.map(On) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== L ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && He(e.ssContent),
    ssFallback: e.ssFallback && He(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && (C.transition = c.clone(C)), C;
}
function On(e) {
  const t = He(e);
  return _(e.children) && (t.children = e.children.map(On)), t;
}
function re(e = " ", t = 0) {
  return q(lo, null, e, t);
}
function Pe(e = "", t = !1) {
  return t ? (x(), En(Le, null, e)) : q(Le, null, e);
}
function Et(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (_(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Et(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !bn(t) ? t._ctx = y : o === 3 && y && (y.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: y }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [re(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = dt([t.class, s.class]));
      else if (o === "style")
        t.style = ut([t.style, s.style]);
      else if (An(o)) {
        const r = t[o], l = s[o];
        l && r !== l && !(_(r) && r.includes(l)) && (t[o] = r ? [].concat(r, l) : l);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
let ke = null, ct;
{
  const e = Jt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((l) => l(r)) : o[0](r);
    };
  };
  ct = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ke = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Sn = n
  );
}
const po = (e) => {
  const t = ke;
  return ct(e), e.scope.on(), () => {
    e.scope.off(), ct(t);
  };
};
function ho(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
process.env.NODE_ENV;
function Vn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(vs(ws(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in we)
          return we[n](e);
      },
      has(t, n) {
        return n in t || n in we;
      }
    }));
}
const _o = /(?:^|[-_])(\w)/g, go = (e) => e.replace(_o, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Rn(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dn(e, t, n = !1) {
  let s = Rn(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const l in r)
        if (r[l] === t)
          return l;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? go(s) : n ? "App" : "Anonymous";
}
function Tn(e) {
  return N(e) && "__vccOpts" in e;
}
function mo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    header(a) {
      return S(a) ? a.__isVue ? ["div", e, "VueInstance"] : M(a) ? [
        "div",
        {},
        ["span", e, C(a)],
        "<",
        i(a.value),
        ">"
      ] : ie(a) ? [
        "div",
        {},
        ["span", e, le(a) ? "ShallowReactive" : "Reactive"],
        "<",
        i(a),
        `>${de(a) ? " (readonly)" : ""}`
      ] : de(a) ? [
        "div",
        {},
        ["span", e, le(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const p = [];
    a.type.props && a.props && p.push(l("props", h(a.props))), a.setupState !== P && p.push(l("setup", a.setupState)), a.data !== P && p.push(l("data", h(a.data)));
    const w = c(a, "computed");
    w && p.push(l("computed", w));
    const O = c(a, "inject");
    return O && p.push(l("injected", O)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), p;
  }
  function l(a, p) {
    return p = U({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((w) => [
          "div",
          {},
          ["span", s, w + ": "],
          i(p[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(a, p = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : S(a) ? ["object", { object: p ? h(a) : a }] : ["span", n, String(a)];
  }
  function c(a, p) {
    const w = a.type;
    if (N(w))
      return;
    const O = {};
    for (const j in a.ctx)
      d(w, j, p) && (O[j] = a.ctx[j]);
    return O;
  }
  function d(a, p, w) {
    const O = a[w];
    if (_(O) && O.includes(p) || S(O) && p in O || a.extends && d(a.extends, p, w) || a.mixins && a.mixins.some((j) => d(j, p, w)))
      return !0;
  }
  function C(a) {
    return le(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV;
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function he(e, t, n, s) {
  e.addEventListener(t, n, s);
}
const zt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _(t) ? (n) => Hn(t, n) : t;
};
function Co(e) {
  e.target.composing = !0;
}
function Kt(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const et = Symbol("_assign"), E = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[et] = zt(o);
    const r = s || o.props && o.props.type === "number";
    he(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), r && (i = yt(i)), e[et](i);
    }), n && he(e, "change", () => {
      e.value = e.value.trim();
    }), t || (he(e, "compositionstart", Co), he(e, "compositionend", Kt), he(e, "change", Kt));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, r) {
    if (e[et] = zt(r), e.composing)
      return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? yt(e.value) : e.value, i = t ?? "";
    l !== i && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === i) || (e.value = i));
  }
};
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function wo() {
  mo();
}
process.env.NODE_ENV !== "production" && wo();
const $n = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, bo = (e) => (mn("data-v-a7b24004"), e = e(), Cn(), e), vo = {
  class: "ru-educational-background",
  style: { "margin-bottom": "1rem" }
}, Eo = { class: "ru-educational-background-title" }, yo = { class: "ru-icon-bg" }, No = {
  class: "ru-educational-background-title-text",
  style: { display: "flex", "align-items": "center", "justify-content": "space-between" }
}, xo = {
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
}, Oo = /* @__PURE__ */ bo(() => /* @__PURE__ */ u(
  "path",
  {
    d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
    "p-id": "4266"
  },
  null,
  -1
  /* HOISTED */
)), So = [
  Oo
], Vo = { style: { "margin-top": "1rem" } }, Ro = {
  __name: "BlockHeaderA",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("addItem");
    return (r, l) => (x(), V("div", vo, [
      u("div", Eo, [
        u("div", yo, [
          Pt(r.$slots, "icon", {}, void 0)
        ]),
        u("div", No, [
          re(
            tt(n.title) + " ",
            1
            /* TEXT */
          ),
          u("div", {
            style: { height: "2rem" },
            onClick: o
          }, [
            n.disabled ? Pe("v-if", !0) : (x(), V("svg", xo, So))
          ])
        ])
      ]),
      u("div", Vo, [
        Pt(r.$slots, "context", {}, void 0)
      ])
    ]));
  }
}, De = /* @__PURE__ */ $n(Ro, [["__scopeId", "data-v-a7b24004"]]), se = (e) => (mn("data-v-4521f4e2"), e = e(), Cn(), e), Do = {
  id: "ru-page",
  style: { "background-color": "rgb(207, 207, 207)" }
}, To = { id: "ru-left" }, $o = { id: "ru-avatar" }, Mo = ["src"], Po = { class: "ru-left-kw-box" }, Io = {
  key: 0,
  class: "ru-left-key"
}, Ao = ["onUpdate:modelValue"], Uo = { class: "ru-left-word" }, jo = ["onUpdate:modelValue", "disabled"], Fo = { id: "ru-right" }, Lo = { class: "ru-personage" }, Ho = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
  "div",
  { class: "ru-personage-title" },
  "个人简历",
  -1
  /* HOISTED */
)), zo = { class: "ru-personage-kws" }, Ko = ["disabled", "onUpdate:modelValue"], Bo = ["onUpdate:modelValue", "disabled"], Wo = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
    /* @__PURE__ */ u("g", null, [
      /* @__PURE__ */ u("path", {
        d: "M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), qo = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, ko = { style: { display: "flex" } }, Zo = ["onUpdate:modelValue", "disabled"], Jo = ["onUpdate:modelValue", "disabled"], Yo = ["onUpdate:modelValue", "disabled"], Go = ["onUpdate:modelValue", "disabled"], Xo = { style: { transform: "translateX(0.2rem)" } }, Qo = { style: { display: "flex" } }, er = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
  "div",
  { style: { width: "20%" } },
  "专业成绩：",
  -1
  /* HOISTED */
)), tr = ["onUpdate:modelValue", "disabled"], nr = { style: { display: "flex" } }, sr = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
  "div",
  { style: { width: "20%" } },
  "主修课程：",
  -1
  /* HOISTED */
)), or = ["onUpdate:modelValue", "disabled"], rr = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
    /* @__PURE__ */ u("g", null, [
      /* @__PURE__ */ u("path", {
        d: "M9.17157,1.17157C9.92172,0.421427,10.9391,0,12,0C12,0,17.3333,0,17.3333,0C18.3941,0,19.4116,0.421427,20.1617,1.17157C20.9119,1.92172,21.3333,2.93913,21.3333,4C21.3333,4,21.3333,5.33333,21.3333,5.33333C21.3333,5.33333,25.3333,5.33333,25.3333,5.33333C27.5425,5.33333,29.3333,7.1242,29.3333,9.33333C29.3333,9.33333,29.3333,22.6667,29.3333,22.6667C29.3333,24.8759,27.5425,26.6667,25.3333,26.6667C25.3333,26.6667,4,26.6667,4,26.6667C1.79087,26.6667,0,24.8759,0,22.6667C0,22.6667,0,9.33333,0,9.33333C0,7.1242,1.79087,5.33333,4,5.33333C4,5.33333,8,5.33333,8,5.33333C8,5.33333,8,4,8,4C8,2.93913,8.42143,1.92172,9.17157,1.17157C9.17157,1.17157,9.17157,1.17157,9.17157,1.17157ZM8,8C8,8,4,8,4,8C3.26363,8,2.66667,8.59696,2.66667,9.33333C2.66667,9.33333,2.66667,22.6667,2.66667,22.6667C2.66667,23.4031,3.26363,24,4,24C4,24,8,24,8,24C8,24,8,8,8,8C8,8,8,8,8,8ZM10.6667,24C10.6667,24,10.6667,8,10.6667,8C10.6667,8,18.6667,8,18.6667,8C18.6667,8,18.6667,24,18.6667,24C18.6667,24,10.6667,24,10.6667,24C10.6667,24,10.6667,24,10.6667,24ZM21.3333,24C21.3333,24,25.3333,24,25.3333,24C26.0697,24,26.6667,23.4031,26.6667,22.6667C26.6667,22.6667,26.6667,9.33333,26.6667,9.33333C26.6667,8.59695,26.0697,8,25.3333,8C25.3333,8,21.3333,8,21.3333,8C21.3333,8,21.3333,24,21.3333,24C21.3333,24,21.3333,24,21.3333,24ZM18.6667,5.33333C18.6667,5.33333,10.6667,5.33333,10.6667,5.33333C10.6667,5.33333,10.6667,4,10.6667,4C10.6667,3.64637,10.8071,3.30724,11.0572,3.05719C11.3072,2.80715,11.6464,2.66667,12,2.66667C12,2.66667,17.3333,2.66667,17.3333,2.66667C17.6869,2.66667,18.0261,2.80715,18.2761,3.05719C18.5261,3.30724,18.6667,3.64637,18.6667,4C18.6667,4,18.6667,5.33333,18.6667,5.33333C18.6667,5.33333,18.6667,5.33333,18.6667,5.33333Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), ir = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, lr = { style: { display: "flex" } }, cr = ["onUpdate:modelValue", "disabled"], ar = ["onUpdate:modelValue", "disabled"], ur = ["onUpdate:modelValue", "disabled"], dr = ["onUpdate:modelValue", "disabled"], fr = ["onUpdate:modelValue", "disabled"], pr = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
    /* @__PURE__ */ u("g", null, [
      /* @__PURE__ */ u("path", {
        d: "M12,3C7.02943,3,3,7.02943,3,12C3,16.9706,7.02943,21,12,21C13.7458,21,15.3755,20.5029,16.7551,19.6427C16.8297,19.5837,16.9103,19.5315,16.9959,19.4872C19.4101,17.8731,21,15.1222,21,12C21,7.02943,16.9706,3,12,3C12,3,12,3,12,3ZM19.2924,21.5307C22.1544,19.3375,24,15.8843,24,12C24,5.37258,18.6274,0,12,0C5.37258,0,0,5.37258,0,12C0,15.885,1.84624,19.3389,4.70925,21.5321C4.70925,21.5321,3.01306,34.3024,3.01306,34.3024C2.93723,34.8735,3.19503,35.4375,3.67644,35.7537C4.15785,36.0699,4.77783,36.0826,5.27175,35.7863C5.27175,35.7863,12,31.7493,12,31.7493C12,31.7493,18.7283,35.7863,18.7283,35.7863C19.2222,36.0825,19.842,36.0699,20.3235,35.7537C20.8048,35.4375,21.0627,34.8736,20.9869,34.3027C20.9869,34.3027,19.2924,21.5307,19.2924,21.5307C19.2924,21.5307,19.2924,21.5307,19.2924,21.5307ZM16.4792,23.1362C15.0951,23.6934,13.5834,24,12,24C10.4172,24,8.90599,23.6936,7.52245,23.1368C7.52245,23.1368,6.39666,31.6126,6.39666,31.6126C6.39666,31.6126,11.2282,28.7137,11.2282,28.7137C11.7033,28.4287,12.2967,28.4287,12.7717,28.7137C12.7717,28.7137,17.6038,31.6129,17.6038,31.6129C17.6038,31.6129,16.4792,23.1362,16.4792,23.1362C16.4792,23.1362,16.4792,23.1362,16.4792,23.1362Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), hr = ["onUpdate:modelValue", "disabled"], _r = ["onUpdate:modelValue", "disabled"], gr = ["onUpdate:modelValue", "disabled"], mr = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
    /* @__PURE__ */ u("g", null, [
      /* @__PURE__ */ u("path", {
        d: "M10.8906,0.593733C11.1379,0.222801,11.5542,0,12,0C12,0,20,0,20,0C20.4459,0,20.8621,0.222801,21.1095,0.593733C21.1095,0.593733,23.3803,4,23.3803,4C23.3803,4,28,4,28,4C29.0609,4,30.0783,4.42143,30.8284,5.17157C31.5785,5.92172,32,6.93913,32,8C32,8,32,22.6667,32,22.6667C32,23.7276,31.5785,24.7449,30.8284,25.4951C30.0783,26.2452,29.0609,26.6667,28,26.6667C28,26.6667,4,26.6667,4,26.6667C2.93913,26.6667,1.92172,26.2452,1.17157,25.4951C0.421428,24.7449,0,23.7276,0,22.6667C0,22.6667,0,8,0,8C0,6.93913,0.421428,5.92172,1.17157,5.17157C1.92172,4.42143,2.93913,4,4,4C4,4,8.61976,4,8.61976,4C8.61976,4,10.8906,0.593733,10.8906,0.593733C10.8906,0.593733,10.8906,0.593733,10.8906,0.593733ZM12.7136,2.66667C12.7136,2.66667,10.4427,6.07293,10.4427,6.07293C10.1954,6.44387,9.77913,6.66667,9.33333,6.66667C9.33333,6.66667,4,6.66667,4,6.66667C3.64637,6.66667,3.30724,6.80715,3.05719,7.05719C2.80715,7.30724,2.66667,7.64637,2.66667,8C2.66667,8,2.66667,22.6667,2.66667,22.6667C2.66667,23.0203,2.80715,23.3595,3.05719,23.6095C3.30724,23.8595,3.64637,24,4,24C4,24,28,24,28,24C28.3536,24,28.6928,23.8595,28.9428,23.6095C29.1928,23.3595,29.3333,23.0203,29.3333,22.6667C29.3333,22.6667,29.3333,8,29.3333,8C29.3333,7.64637,29.1928,7.30724,28.9428,7.05719C28.6928,6.80715,28.3536,6.66667,28,6.66667C28,6.66667,22.6667,6.66667,22.6667,6.66667C22.2208,6.66667,21.8045,6.44387,21.5572,6.07293C21.5572,6.07293,19.2864,2.66667,19.2864,2.66667C19.2864,2.66667,12.7136,2.66667,12.7136,2.66667C12.7136,2.66667,12.7136,2.66667,12.7136,2.66667ZM16,10.6667C13.7908,10.6667,12,12.4575,12,14.6667C12,16.8759,13.7908,18.6667,16,18.6667C18.2092,18.6667,20,16.8759,20,14.6667C20,12.4575,18.2092,10.6667,16,10.6667C16,10.6667,16,10.6667,16,10.6667ZM9.33333,14.6667C9.33333,10.9848,12.3181,8,16,8C19.6819,8,22.6667,10.9848,22.6667,14.6667C22.6667,18.3485,19.6819,21.3333,16,21.3333C12.3181,21.3333,9.33333,18.3485,9.33333,14.6667C9.33333,14.6667,9.33333,14.6667,9.33333,14.6667Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), Cr = ["disabled"], wr = /* @__PURE__ */ Object.assign({
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
  setup(e) {
    const t = e, { data: n, disabled: s } = Es(t), o = (r) => {
      s && (n.value.disabled = !n.value.disabled);
    };
    return (r, l) => (x(), V("div", Do, [
      f(s) ? Pe("v-if", !0) : (x(), V(
        "div",
        {
          key: 0,
          style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
          onClick: o
        },
        tt(f(n).disabled == !0 ? "预览" : "编辑"),
        1
        /* TEXT */
      )),
      u("div", To, [
        u("div", $o, [
          u("img", {
            src: f(n).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Mo)
        ]),
        u("div", Po, [
          (x(!0), V(
            L,
            null,
            pe(f(n).baseKw, (i, c) => (x(), V("div", {
              class: "ru-left-kw",
              key: c
            }, [
              f(n).disabled ? (x(), V(
                "div",
                Io,
                tt(i[0]),
                1
                /* TEXT */
              )) : Pe("v-if", !0),
              f(n).disabled ? Pe("v-if", !0) : v((x(), V("input", {
                key: 1,
                type: "text",
                "onUpdate:modelValue": (d) => i[0] = d,
                style: { width: "4rem" }
              }, null, 8, Ao)), [
                [E, i[0]]
              ]),
              re(" :  "),
              u("div", Uo, [
                v(u("input", {
                  "onUpdate:modelValue": (d) => i[1] = d,
                  type: "text",
                  disabled: f(n).disabled
                }, null, 8, jo), [
                  [E, i[1]]
                ])
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      u("div", Fo, [
        u("div", Lo, [
          Ho,
          u("div", zo, [
            (x(!0), V(
              L,
              null,
              pe(f(n).jobKw, (i, c) => (x(), V("div", {
                class: "ru-personage-item",
                key: c
              }, [
                v(u("input", {
                  type: "text",
                  disabled: f(n).disabled,
                  "onUpdate:modelValue": (d) => i[0] = d,
                  style: { width: "4rem" }
                }, null, 8, Ko), [
                  [E, i[0]]
                ]),
                re(" :  "),
                v(u("input", {
                  type: "text",
                  "onUpdate:modelValue": (d) => i[1] = d,
                  disabled: f(n).disabled
                }, null, 8, Bo), [
                  [E, i[1]]
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        q(De, {
          title: "教育背景",
          onAddItem: l[0] || (l[0] = (i) => f(n).educationalBackground.push({})),
          disabled: f(n).disabled
        }, {
          icon: z(() => [
            Wo
          ]),
          context: z(() => [
            (x(!0), V(
              L,
              null,
              pe(f(n).educationalBackground, (i) => (x(), V("div", null, [
                u("div", qo, [
                  u("div", ko, [
                    v(u("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (c) => i.starTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, Zo), [
                      [E, i.starTime]
                    ]),
                    re(" - "),
                    v(u("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (c) => i.endTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, Jo), [
                      [E, i.endTime]
                    ])
                  ]),
                  u("div", null, [
                    v(u("input", {
                      type: "text",
                      placeholder: "就读大学",
                      "onUpdate:modelValue": (c) => i.collegiate = c,
                      style: { "text-align": "center" },
                      disabled: f(n).disabled
                    }, null, 8, Yo), [
                      [E, i.collegiate]
                    ])
                  ]),
                  u("div", null, [
                    v(u("input", {
                      type: "text",
                      placeholder: "就读专业",
                      "onUpdate:modelValue": (c) => i.profession = c,
                      style: { "text-align": "right" },
                      disabled: f(n).disabled
                    }, null, 8, Go), [
                      [E, i.profession]
                    ])
                  ])
                ]),
                u("div", Xo, [
                  u("div", Qo, [
                    er,
                    v(u("input", {
                      type: "text",
                      "onUpdate:modelValue": (c) => i.professionalAchievement = c,
                      placeholder: "请输入专业成绩",
                      disabled: f(n).disabled
                    }, null, 8, tr), [
                      [E, i.professionalAchievement]
                    ])
                  ]),
                  u("div", nr, [
                    sr,
                    v(u("input", {
                      type: "text",
                      "onUpdate:modelValue": (c) => i.majorCourse = c,
                      placeholder: "请输入主修课程",
                      disabled: f(n).disabled
                    }, null, 8, or), [
                      [E, i.majorCourse]
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
        q(De, {
          title: "工作经验",
          onAddItem: l[1] || (l[1] = (i) => f(n).workExperience.push({})),
          disabled: f(n).disabled
        }, {
          icon: z(() => [
            rr
          ]),
          context: z(() => [
            (x(!0), V(
              L,
              null,
              pe(f(n).workExperience, (i) => (x(), V("div", null, [
                u("div", ir, [
                  u("div", lr, [
                    v(u("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (c) => i.starTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, cr), [
                      [E, i.starTime]
                    ]),
                    re(" - "),
                    v(u("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (c) => i.endTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, ar), [
                      [E, i.endTime]
                    ])
                  ]),
                  u("div", null, [
                    v(u("input", {
                      type: "text",
                      placeholder: "工作单位",
                      "onUpdate:modelValue": (c) => i.workUnit = c,
                      style: { "text-align": "center" },
                      disabled: f(n).disabled
                    }, null, 8, ur), [
                      [E, i.workUnit]
                    ])
                  ]),
                  u("div", null, [
                    v(u("input", {
                      type: "text",
                      placeholder: "工作职位",
                      "onUpdate:modelValue": (c) => i.jobPosition = c,
                      style: { "text-align": "right" },
                      disabled: f(n).disabled
                    }, null, 8, dr), [
                      [E, i.jobPosition]
                    ])
                  ])
                ]),
                v(u("textarea", {
                  rows: "2",
                  "onUpdate:modelValue": (c) => i.context = c,
                  style: { width: "100%" },
                  disabled: f(n).disabled
                }, `\r
\r
          `, 8, fr), [
                  [E, i.context]
                ])
              ]))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]),
        q(De, {
          title: "荣誉证书",
          onAddItem: l[2] || (l[2] = (i) => f(n).certificateOfHonor.push({})),
          disabled: f(n).disabled
        }, {
          icon: z(() => [
            pr
          ]),
          context: z(() => [
            (x(!0), V(
              L,
              null,
              pe(f(n).certificateOfHonor, (i, c) => (x(), V("div", {
                style: { display: "flex" },
                key: c
              }, [
                v(u("input", {
                  type: "text",
                  placeholder: "证书名称",
                  "onUpdate:modelValue": (d) => i.certificateName = d,
                  disabled: f(n).disabled
                }, null, 8, hr), [
                  [E, i.certificateName]
                ]),
                v(u("input", {
                  type: "text",
                  placeholder: "获奖时间",
                  "onUpdate:modelValue": (d) => i.awardTime = d,
                  style: { "text-align": "center" },
                  disabled: f(n).disabled
                }, null, 8, _r), [
                  [E, i.awardTime]
                ]),
                v(u("input", {
                  type: "text",
                  placeholder: "颁发单位",
                  "onUpdate:modelValue": (d) => i.issuer = d,
                  style: { "text-align": "right" },
                  disabled: f(n).disabled
                }, null, 8, gr), [
                  [E, i.issuer]
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]),
        q(De, {
          title: "自我评价",
          disabled: f(n).disabled
        }, {
          icon: z(() => [
            mr
          ]),
          context: z(() => [
            v(u("textarea", {
              rows: "4",
              style: { width: "100%" },
              "onUpdate:modelValue": l[3] || (l[3] = (i) => f(n).selfEvaluation = i),
              disabled: f(n).disabled
            }, null, 8, Cr), [
              [E, f(n).selfEvaluation]
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Bt = /* @__PURE__ */ $n(wr, [["__scopeId", "data-v-4521f4e2"]]), br = {
  install: (e) => {
    e.component(Bt.name, Bt);
  }
};
export {
  br as default
};
