/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function An(e, t) {
  const n = new Set(e.split(","));
  return (s) => n.has(s);
}
const P = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Un = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], oe = () => {
}, jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), U = Object.assign, Fn = Object.prototype.hasOwnProperty, b = (e, t) => Fn.call(e, t), _ = Array.isArray, G = (e) => ze(e) === "[object Map]", qt = (e) => ze(e) === "[object Set]", x = (e) => typeof e == "function", T = (e) => typeof e == "string", ne = (e) => typeof e == "symbol", V = (e) => e !== null && typeof e == "object", Ln = (e) => (V(e) || x(e)) && x(e.then) && x(e.catch), Zt = Object.prototype.toString, ze = (e) => Zt.call(e), Jt = (e) => ze(e).slice(8, -1), Yt = (e) => ze(e) === "[object Object]", at = (e) => T(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, zn = Hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = (e, t) => !Object.is(e, t), Kn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Bn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Nt = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let xt;
const Gt = () => xt || (xt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ut(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = T(s) ? Zn(s) : ut(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (T(e) || V(e))
    return e;
}
const Wn = /;(?![^(]*\))/g, kn = /:([^]+)/, qn = /\/\*[^]*?\*\//g;
function Zn(e) {
  const t = {};
  return e.replace(qn, "").split(Wn).forEach((n) => {
    if (n) {
      const s = n.split(kn);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function dt(e) {
  let t = "";
  if (T(e))
    t = e;
  else if (_(e))
    for (let n = 0; n < e.length; n++) {
      const s = dt(e[n]);
      s && (t += s + " ");
    }
  else if (V(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const tt = (e) => T(e) ? e : e == null ? "" : _(e) || V(e) && (e.toString === Zt || !x(e.toString)) ? JSON.stringify(e, Xt, 2) : String(e), Xt = (e, t) => t && t.__v_isRef ? Xt(e, t.value) : G(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ge(s, r) + " =>"] = o, n),
    {}
  )
} : qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ge(n))
} : ne(t) ? Ge(t) : V(t) && !_(t) && !Yt(t) ? String(t) : t, Ge = (e, t = "") => {
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
let Jn;
function Yn(e, t = Jn) {
  t && t.active && t.effects.push(e);
}
let me;
class Gn {
  constructor(t, n, s, o) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Yn(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ke();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Xn(n.computed), this._dirtyLevel >= 4))
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
      return X = !0, me = this, this._runnings++, Ot(this), this.fn();
    } finally {
      St(this), this._runnings--, me = n, X = t;
    }
  }
  stop() {
    this.active && (Ot(this), St(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Xn(e) {
  return e.value;
}
function Ot(e) {
  e._trackId++, e._depsLength = 0;
}
function St(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Qt(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Qt(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let X = !0, nt = 0;
const en = [];
function Ke() {
  en.push(X), X = !1;
}
function Be() {
  const e = en.pop();
  X = e === void 0 ? !0 : e;
}
function ft() {
  nt++;
}
function pt() {
  for (nt--; !nt && st.length; )
    st.shift()();
}
function Qn(e, t, n) {
  var s;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Qt(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((s = e.onTrack) == null || s.call(e, U({ effect: e }, n)));
  }
}
const st = [];
function es(e, t, n) {
  var s;
  ft();
  for (const o of e.keys()) {
    let r;
    o._dirtyLevel < t && (r ?? (r = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (r ?? (r = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((s = o.onTrigger) == null || s.call(o, U({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && st.push(o.scheduler)));
  }
  pt();
}
const ts = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ie = /* @__PURE__ */ new WeakMap(), Q = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), ot = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function R(e, t, n) {
  if (X && me) {
    let s = Ie.get(e);
    s || Ie.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = ts(() => s.delete(n))), Qn(
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
function q(e, t, n, s, o, r) {
  const l = Ie.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && _(e)) {
    const c = Number(s);
    l.forEach((d, w) => {
      (w === "length" || !ne(w) && w >= c) && i.push(d);
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
    c && es(
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
function ns(e, t) {
  const n = Ie.get(e);
  return n && n.get(t);
}
const ss = /* @__PURE__ */ An("__proto__,__v_isRef,__isVue"), tn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ne)
), Vt = /* @__PURE__ */ os();
function os() {
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
function rs(e) {
  ne(e) || (e = String(e));
  const t = h(this);
  return R(t, "has", e), t.hasOwnProperty(e);
}
class nn {
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
      return s === (o ? r ? cn : ln : r ? ws : rn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = _(t);
    if (!o) {
      if (l && b(Vt, n))
        return Reflect.get(Vt, n, s);
      if (n === "hasOwnProperty")
        return rs;
    }
    const i = Reflect.get(t, n, s);
    return (ne(n) ? tn.has(n) : ss(n)) || (o || R(t, "get", n), r) ? i : M(i) ? l && at(n) ? i : i.value : V(i) ? o ? un(i) : an(i) : i;
  }
}
class is extends nn {
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
    return t === h(o) && (l ? ae(s, r) && q(t, "set", n, s, r) : q(t, "add", n, s)), i;
  }
  deleteProperty(t, n) {
    const s = b(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && q(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ne(n) || !tn.has(n)) && R(t, "has", n), s;
  }
  ownKeys(t) {
    return R(
      t,
      "iterate",
      _(t) ? "length" : Q
    ), Reflect.ownKeys(t);
  }
}
class sn extends nn {
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
const ls = /* @__PURE__ */ new is(), cs = /* @__PURE__ */ new sn(), as = /* @__PURE__ */ new sn(!0), ht = (e) => e, We = (e) => Reflect.getPrototypeOf(e);
function Ee(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = h(e), r = h(t);
  n || (ae(t, r) && R(o, "get", t), R(o, "get", r));
  const { has: l } = We(o), i = s ? ht : n ? wt : mt;
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
function Rt(e) {
  e = h(e);
  const t = h(this);
  return We(t).has.call(t, e) || (t.add(e), q(t, "add", e, e)), this;
}
function $t(e, t) {
  t = h(t);
  const n = h(this), { has: s, get: o } = We(n);
  let r = s.call(n, e);
  r ? process.env.NODE_ENV !== "production" && on(n, s, e) : (e = h(e), r = s.call(n, e));
  const l = o.call(n, e);
  return n.set(e, t), r ? ae(t, l) && q(n, "set", e, t, l) : q(n, "add", e, t), this;
}
function Dt(e) {
  const t = h(this), { has: n, get: s } = We(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && on(t, n, e) : (e = h(e), o = n.call(t, e));
  const r = s ? s.call(t, e) : void 0, l = t.delete(e);
  return o && q(t, "delete", e, void 0, r), l;
}
function Tt() {
  const e = h(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? G(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && q(e, "clear", void 0, void 0, n), s;
}
function Oe(e, t) {
  return function(s, o) {
    const r = this, l = r.__v_raw, i = h(l), c = t ? ht : e ? wt : mt;
    return !e && R(i, "iterate", Q), l.forEach((d, w) => s.call(o, c(d), c(w), r));
  };
}
function Se(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = h(o), l = G(r), i = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, d = o[e](...s), w = n ? ht : t ? wt : mt;
    return !t && R(
      r,
      "iterate",
      c ? ot : Q
    ), {
      // iterator protocol
      next() {
        const { value: a, done: p } = d.next();
        return p ? { value: a, done: p } : {
          value: i ? [w(a[0]), w(a[1])] : w(a),
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
function z(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      ue(
        `${zn(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function us() {
  const e = {
    get(r) {
      return Ee(this, r);
    },
    get size() {
      return xe(this);
    },
    has: Ne,
    add: Rt,
    set: $t,
    delete: Dt,
    clear: Tt,
    forEach: Oe(!1, !1)
  }, t = {
    get(r) {
      return Ee(this, r, !1, !0);
    },
    get size() {
      return xe(this);
    },
    has: Ne,
    add: Rt,
    set: $t,
    delete: Dt,
    clear: Tt,
    forEach: Oe(!1, !0)
  }, n = {
    get(r) {
      return Ee(this, r, !0);
    },
    get size() {
      return xe(this, !0);
    },
    has(r) {
      return Ne.call(this, r, !0);
    },
    add: z("add"),
    set: z("set"),
    delete: z("delete"),
    clear: z("clear"),
    forEach: Oe(!0, !1)
  }, s = {
    get(r) {
      return Ee(this, r, !0, !0);
    },
    get size() {
      return xe(this, !0);
    },
    has(r) {
      return Ne.call(this, r, !0);
    },
    add: z("add"),
    set: z("set"),
    delete: z("delete"),
    clear: z("clear"),
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
  ds,
  fs,
  ps,
  hs
] = /* @__PURE__ */ us();
function _t(e, t) {
  const n = t ? e ? hs : ps : e ? fs : ds;
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    b(n, o) && o in s ? n : s,
    o,
    r
  );
}
const _s = {
  get: /* @__PURE__ */ _t(!1, !1)
}, gs = {
  get: /* @__PURE__ */ _t(!0, !1)
}, ms = {
  get: /* @__PURE__ */ _t(!0, !0)
};
function on(e, t, n) {
  const s = h(n);
  if (s !== n && t.call(e, s)) {
    const o = Jt(e);
    ue(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const rn = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap();
function Cs(e) {
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
function bs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cs(Jt(e));
}
function an(e) {
  return de(e) ? e : gt(
    e,
    !1,
    ls,
    _s,
    rn
  );
}
function un(e) {
  return gt(
    e,
    !0,
    cs,
    gs,
    ln
  );
}
function Ve(e) {
  return gt(
    e,
    !0,
    as,
    ms,
    cn
  );
}
function gt(e, t, n, s, o) {
  if (!V(e))
    return process.env.NODE_ENV !== "production" && ue(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = bs(e);
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
function vs(e) {
  return Object.isExtensible(e) && Bn(e, "__v_skip", !0), e;
}
const mt = (e) => V(e) ? an(e) : e, wt = (e) => V(e) ? un(e) : e;
function M(e) {
  return !!(e && e.__v_isRef === !0);
}
function f(e) {
  return M(e) ? e.value : e;
}
const ys = {
  get: (e, t, n) => f(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return M(o) && !M(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Es(e) {
  return ie(e) ? e : new Proxy(e, ys);
}
function dn(e) {
  process.env.NODE_ENV !== "production" && !Ae(e) && ue("toRefs() expects a reactive object but received a plain one.");
  const t = _(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = xs(e, n);
  return t;
}
class Ns {
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
    return ns(h(this._object), this._key);
  }
}
function xs(e, t, n) {
  const s = e[t];
  return M(s) ? s : new Ns(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ee = [];
function Os(e) {
  ee.push(e);
}
function Ss() {
  ee.pop();
}
function m(e, ...t) {
  Ke();
  const n = ee.length ? ee[ee.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Vs();
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
          ({ vnode: r }) => `at <${Mn(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Rs(o)), console.warn(...r);
  }
  Be();
}
function Vs() {
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
function Rs(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...$s(n));
  }), t;
}
function $s({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Mn(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ds(e.props), r] : [o + r];
}
function Ds(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...fn(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fn(e, t, n) {
  return T(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : M(t) ? (t = fn(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : x(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const pn = {
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
    Ct(o, t, n);
  }
}
function De(e, t, n, s) {
  if (x(e)) {
    const o = te(e, t, n, s);
    return o && Ln(o) && o.catch((r) => {
      Ct(r, t, n);
    }), o;
  }
  if (_(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(De(e[r], t, n, s));
    return o;
  } else
    process.env.NODE_ENV !== "production" && m(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Ct(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, i = process.env.NODE_ENV !== "production" ? pn[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const d = r.ec;
      if (d) {
        for (let w = 0; w < d.length; w++)
          if (d[w](e, l, i) === !1)
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
    const o = pn[t];
    if (n && Os(n), m(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Ss(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ue = !1, rt = !1;
const I = [];
let W = 0;
const ce = [];
let F = null, B = 0;
const hn = /* @__PURE__ */ Promise.resolve();
let bt = null;
const Ms = 100;
function Ps(e) {
  const t = bt || hn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Is(e) {
  let t = W + 1, n = I.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = I[s], r = be(o);
    r < e || r === e && o.pre ? t = s + 1 : n = s;
  }
  return t;
}
function vt(e) {
  (!I.length || !I.includes(
    e,
    Ue && e.allowRecurse ? W + 1 : W
  )) && (e.id == null ? I.push(e) : I.splice(Is(e.id), 0, e), _n());
}
function _n() {
  !Ue && !rt && (rt = !0, bt = hn.then(mn));
}
function gn(e) {
  _(e) ? ce.push(...e) : (!F || !F.includes(
    e,
    e.allowRecurse ? B + 1 : B
  )) && ce.push(e), _n();
}
function As(e) {
  if (ce.length) {
    const t = [...new Set(ce)].sort(
      (n, s) => be(n) - be(s)
    );
    if (ce.length = 0, F) {
      F.push(...t);
      return;
    }
    for (F = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), B = 0; B < F.length; B++)
      process.env.NODE_ENV !== "production" && wn(e, F[B]) || F[B]();
    F = null, B = 0;
  }
}
const be = (e) => e.id == null ? 1 / 0 : e.id, Us = (e, t) => {
  const n = be(e) - be(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function mn(e) {
  rt = !1, Ue = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), I.sort(Us);
  const t = process.env.NODE_ENV !== "production" ? (n) => wn(e, n) : oe;
  try {
    for (W = 0; W < I.length; W++) {
      const n = I[W];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        te(n, null, 14);
      }
    }
  } finally {
    W = 0, I.length = 0, As(e), Ue = !1, bt = null, (I.length || ce.length) && mn(e);
  }
}
function wn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ms) {
      const s = t.ownerInstance, o = s && Tn(s.type);
      return Ct(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const fe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Gt().__VUE_HMR_RUNTIME__ = {
  createRecord: Xe(js),
  rerender: Xe(Fs),
  reload: Xe(Ls)
});
const je = /* @__PURE__ */ new Map();
function js(e, t) {
  return je.has(e) ? !1 : (je.set(e, {
    initialDef: we(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function we(e) {
  return Pn(e) ? e.__vccOpts : e;
}
function Fs(e, t) {
  const n = je.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, we(s.type).render = t), s.renderCache = [], s.effect.dirty = !0, s.update();
  }));
}
function Ls(e, t) {
  const n = je.get(e);
  if (!n)
    return;
  t = we(t), Mt(n.initialDef, t);
  const s = [...n.instances];
  for (const o of s) {
    const r = we(o.type);
    fe.has(r) || (r !== n.initialDef && Mt(r, t), fe.add(r)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (fe.add(r), o.ceReload(t.styles), fe.delete(r)) : o.parent ? (o.parent.effect.dirty = !0, vt(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  gn(() => {
    for (const o of s)
      fe.delete(
        we(o.type)
      );
  });
}
function Mt(e, t) {
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
let k, _e = [], it = !1;
function Hs(e, ...t) {
  k ? k.emit(e, ...t) : it || _e.push({ event: e, args: t });
}
function Cn(e, t) {
  var n, s;
  k = e, k ? (k.enabled = !0, _e.forEach(({ event: o, args: r }) => k.emit(o, ...r)), _e = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Cn(r, t);
  }), setTimeout(() => {
    k || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, it = !0, _e = []);
  }, 3e3)) : (it = !0, _e = []);
}
const zs = /* @__PURE__ */ Ks(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return (t) => {
    Hs(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let N = null, ke = null;
function Pt(e) {
  const t = N;
  return N = e, ke = e && e.type.__scopeId || null, t;
}
function bn(e) {
  ke = e;
}
function vn() {
  ke = null;
}
function K(e, t = N, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && zt(-1);
    const r = Pt(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Pt(r), s._d && zt(1);
    }
    return process.env.NODE_ENV !== "production" && zs(t), l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
const Bs = Symbol.for("v-ndc"), Ws = (e) => e.__isSuspense;
function ks(e, t) {
  t && t.pendingBranch ? _(e) ? t.effects.push(...e) : t.effects.push(e) : gn(e);
}
const qs = Symbol.for("v-scx"), Zs = () => {
  {
    const e = ro(qs);
    return e || process.env.NODE_ENV !== "production" && m(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Re = {};
function Js(e, t, {
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
  }, d = qe, w = (g) => s === !0 ? g : (
    // for deep: false, only traverse root-level properties
    Y(g, s === !1 ? 1 : void 0)
  );
  let a, p = !1, C = !1;
  if (M(e) ? (a = () => e.value, p = le(e)) : ie(e) ? (a = () => w(e), p = !0) : _(e) ? (C = !0, p = e.some((g) => ie(g) || le(g)), a = () => e.map((g) => {
    if (M(g))
      return g.value;
    if (ie(g))
      return w(g);
    if (x(g))
      return te(g, d, 2);
    process.env.NODE_ENV !== "production" && c(g);
  })) : x(e) ? t ? a = () => te(e, d, 2) : a = () => (S && S(), De(
    e,
    d,
    3,
    [j]
  )) : (a = oe, process.env.NODE_ENV !== "production" && c(e)), t && s) {
    const g = a;
    a = () => Y(g());
  }
  let S, j = (g) => {
    S = D.onStop = () => {
      te(g, d, 4), S = D.onStop = void 0;
    };
  }, Ze;
  if ($n)
    if (j = oe, t ? n && De(t, d, 3, [
      a(),
      C ? [] : void 0,
      j
    ]) : a(), o === "sync") {
      const g = Zs();
      Ze = g.__watcherHandles || (g.__watcherHandles = []);
    } else
      return oe;
  let Z = C ? new Array(e.length).fill(Re) : Re;
  const J = () => {
    if (!(!D.active || !D.dirty))
      if (t) {
        const g = D.run();
        (s || p || (C ? g.some((Ye, In) => ae(Ye, Z[In])) : ae(g, Z))) && (S && S(), De(t, d, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          Z === Re ? void 0 : C && Z[0] === Re ? [] : Z,
          j
        ]), Z = g);
      } else
        D.run();
  };
  J.allowRecurse = !!t;
  let ye;
  o === "sync" ? ye = J : o === "post" ? ye = () => Ht(J, d && d.suspense) : (J.pre = !0, d && (J.id = d.uid), ye = () => vt(J));
  const D = new Gn(a, oe, ye), Je = () => {
    D.stop();
  };
  return process.env.NODE_ENV !== "production" && (D.onTrack = l, D.onTrigger = i), t ? n ? J() : Z = D.run() : o === "post" ? Ht(
    D.run.bind(D),
    d && d.suspense
  ) : D.run(), Ze && Ze.push(Je), Je;
}
function Ys(e, t, n) {
  const s = this.proxy, o = T(e) ? e.includes(".") ? Gs(s, e) : () => s[e] : e.bind(s, s);
  let r;
  x(t) ? r = t : (r = t.handler, n = t);
  const l = ho(this), i = Js(o, r.bind(s), n);
  return l(), i;
}
function Gs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Y(e, t = 1 / 0, n) {
  if (t <= 0 || !V(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, M(e))
    Y(e.value, t, n);
  else if (_(e))
    for (let s = 0; s < e.length; s++)
      Y(e[s], t, n);
  else if (qt(e) || G(e))
    e.forEach((s) => {
      Y(s, t, n);
    });
  else if (Yt(e))
    for (const s in e)
      Y(e[s], t, n);
  return e;
}
function y(e, t) {
  if (N === null)
    return process.env.NODE_ENV !== "production" && m("withDirectives can only be used inside render functions."), e;
  const n = Dn(N) || N.proxy, s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, l, i, c = P] = t[o];
    r && (x(r) && (r = {
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
const Xs = (e) => !!e.type.__asyncLoader;
function pe(e, t, n, s) {
  let o;
  const r = n;
  if (_(e) || T(e)) {
    o = new Array(e.length);
    for (let l = 0, i = e.length; l < i; l++)
      o[l] = t(e[l], l, void 0, r);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && m(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (V(e))
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
function It(e, t, n = {}, s, o) {
  if (N.isCE || N.parent && Xs(N.parent) && N.parent.isCE)
    return t !== "default" && (n.name = t), H("slot", n, s);
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (m(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), v();
  const l = r && yn(r(n)), i = xn(
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
function yn(e) {
  return e.some((t) => On(t) ? !(t.type === Le || t.type === L && !yn(t.children)) : !0) ? e : null;
}
const lt = (e) => e ? _o(e) ? Dn(e) || e.proxy : lt(e.parent) : null, Ce = (
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
    $options: (e) => to(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, vt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ps.bind(e.proxy)),
    $watch: (e) => Ys.bind(e)
  })
), Qs = (e) => e === "_" || e === "$", Qe = (e, t) => e !== P && !e.__isScriptSetup && b(e, t), eo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: l, type: i, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const C = l[t];
      if (C !== void 0)
        switch (C) {
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
    const w = Ce[t];
    let a, p;
    if (w)
      return t === "$attrs" ? (R(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && R(e, "get", t), w(e);
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
    process.env.NODE_ENV !== "production" && N && (!T(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== P && Qs(t[0]) && b(o, t) ? m(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === N && m(
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
    return !!n[l] || e !== P && b(e, l) || Qe(t, l) || (i = r[0]) && b(i, l) || b(s, l) || b(Ce, l) || b(o.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : b(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (eo.ownKeys = (e) => (m(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function At(e) {
  return _(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function to(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, i = r.get(t);
  let c;
  return i ? c = i : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (d) => Fe(c, d, l, !0)
  ), Fe(c, t, l)), V(t) && r.set(t, c), c;
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
      const i = no[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
    }
  return e;
}
const no = {
  data: Ut,
  props: Ft,
  emits: Ft,
  // objects
  methods: ge,
  computed: ge,
  // lifecycle
  beforeCreate: $,
  created: $,
  beforeMount: $,
  mounted: $,
  beforeUpdate: $,
  updated: $,
  beforeDestroy: $,
  beforeUnmount: $,
  destroyed: $,
  unmounted: $,
  activated: $,
  deactivated: $,
  errorCaptured: $,
  serverPrefetch: $,
  // assets
  components: ge,
  directives: ge,
  // watch
  watch: oo,
  // provide / inject
  provide: Ut,
  inject: so
};
function Ut(e, t) {
  return t ? e ? function() {
    return U(
      x(e) ? e.call(this, this) : e,
      x(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function so(e, t) {
  return ge(jt(e), jt(t));
}
function jt(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function $(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ge(e, t) {
  return e ? U(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ft(e, t) {
  return e ? _(e) && _(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : U(
    /* @__PURE__ */ Object.create(null),
    At(e),
    At(t ?? {})
  ) : t;
}
function oo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = U(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = $(e[s], t[s]);
  return n;
}
let Lt = null;
function ro(e, t, n = !1) {
  const s = qe || N;
  if (s || Lt) {
    const o = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Lt._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && x(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && m(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && m("inject() can only be used inside setup() or functional components.");
}
const io = {}, En = (e) => Object.getPrototypeOf(e) === io, Ht = ks, lo = (e) => e.__isTeleport, L = Symbol.for("v-fgt"), co = Symbol.for("v-txt"), Le = Symbol.for("v-cmt"), Te = [];
let A = null;
function v(e = !1) {
  Te.push(A = e ? null : []);
}
function ao() {
  Te.pop(), A = Te[Te.length - 1] || null;
}
let ve = 1;
function zt(e) {
  ve += e;
}
function Nn(e) {
  return e.dynamicChildren = ve > 0 ? A || Un : null, ao(), ve > 0 && A && A.push(e), e;
}
function O(e, t, n, s, o, r) {
  return Nn(
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
function xn(e, t, n, s, o) {
  return Nn(
    H(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function On(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const uo = (...e) => Vn(
  ...e
), Sn = ({ key: e }) => e ?? null, Me = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? T(e) || M(e) || x(e) ? { i: N, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, o = null, r = e === L ? 0 : 1, l = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Sn(t),
    ref: t && Me(t),
    scopeId: ke,
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
    ctx: N
  };
  return i ? (yt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= T(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && m("VNode created with invalid key (NaN). VNode type:", c.type), ve > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  A && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && A.push(c), c;
}
const H = process.env.NODE_ENV !== "production" ? uo : Vn;
function Vn(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Bs) && (process.env.NODE_ENV !== "production" && !e && m(`Invalid vnode type when creating vnode: ${e}.`), e = Le), On(e)) {
    const i = He(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yt(i, n), ve > 0 && !r && A && (i.shapeFlag & 6 ? A[A.indexOf(e)] = i : A.push(i)), i.patchFlag |= -2, i;
  }
  if (Pn(e) && (e = e.__vccOpts), t) {
    t = fo(t);
    let { class: i, style: c } = t;
    i && !T(i) && (t.class = dt(i)), V(c) && (Ae(c) && !_(c) && (c = U({}, c)), t.style = ut(c));
  }
  const l = T(e) ? 1 : Ws(e) ? 128 : lo(e) ? 64 : V(e) ? 4 : x(e) ? 2 : 0;
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
function fo(e) {
  return e ? Ae(e) || En(e) ? U({}, e) : e : null;
}
function He(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: l, children: i, transition: c } = e, d = t ? po(o || {}, t) : o, w = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Sn(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? _(r) ? r.concat(Me(t)) : [r, Me(t)] : Me(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && _(i) ? i.map(Rn) : i,
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
  return c && s && (w.transition = c.clone(w)), w;
}
function Rn(e) {
  const t = He(e);
  return _(e.children) && (t.children = e.children.map(Rn)), t;
}
function re(e = " ", t = 0) {
  return H(co, null, e, t);
}
function Pe(e = "", t = !1) {
  return t ? (v(), xn(Le, null, e)) : H(Le, null, e);
}
function yt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (_(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), yt(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !En(t) ? t._ctx = N : o === 3 && N && (N.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    x(t) ? (t = { default: t, _ctx: N }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [re(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function po(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = dt([t.class, s.class]));
      else if (o === "style")
        t.style = ut([t.style, s.style]);
      else if (jn(o)) {
        const r = t[o], l = s[o];
        l && r !== l && !(_(r) && r.includes(l)) && (t[o] = r ? [].concat(r, l) : l);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
let qe = null, ct;
{
  const e = Gt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((l) => l(r)) : o[0](r);
    };
  };
  ct = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => $n = n
  );
}
const ho = (e) => {
  const t = qe;
  return ct(e), e.scope.on(), () => {
    e.scope.off(), ct(t);
  };
};
function _o(e) {
  return e.vnode.shapeFlag & 4;
}
let $n = !1;
process.env.NODE_ENV;
function Dn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Es(vs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ce)
          return Ce[n](e);
      },
      has(t, n) {
        return n in t || n in Ce;
      }
    }));
}
const go = /(?:^|[-_])(\w)/g, mo = (e) => e.replace(go, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Tn(e, t = !0) {
  return x(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mn(e, t, n = !1) {
  let s = Tn(t);
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
  return s ? mo(s) : n ? "App" : "Anonymous";
}
function Pn(e) {
  return x(e) && "__vccOpts" in e;
}
function wo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    header(a) {
      return V(a) ? a.__isVue ? ["div", e, "VueInstance"] : M(a) ? [
        "div",
        {},
        ["span", e, w(a)],
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
    const C = c(a, "computed");
    C && p.push(l("computed", C));
    const S = c(a, "inject");
    return S && p.push(l("injected", S)), p.push([
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
        ...Object.keys(p).map((C) => [
          "div",
          {},
          ["span", s, C + ": "],
          i(p[C], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(a, p = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : V(a) ? ["object", { object: p ? h(a) : a }] : ["span", n, String(a)];
  }
  function c(a, p) {
    const C = a.type;
    if (x(C))
      return;
    const S = {};
    for (const j in a.ctx)
      d(C, j, p) && (S[j] = a.ctx[j]);
    return S;
  }
  function d(a, p, C) {
    const S = a[C];
    if (_(S) && S.includes(p) || V(S) && p in S || a.extends && d(a.extends, p, C) || a.mixins && a.mixins.some((j) => d(j, p, C)))
      return !0;
  }
  function w(a) {
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
const Kt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _(t) ? (n) => Kn(t, n) : t;
};
function Co(e) {
  e.target.composing = !0;
}
function Bt(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const et = Symbol("_assign"), E = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[et] = Kt(o);
    const r = s || o.props && o.props.type === "number";
    he(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), r && (i = Nt(i)), e[et](i);
    }), n && he(e, "change", () => {
      e.value = e.value.trim();
    }), t || (he(e, "compositionstart", Co), he(e, "compositionend", Bt), he(e, "change", Bt));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, r) {
    if (e[et] = Kt(r), e.composing)
      return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Nt(e.value) : e.value, i = t ?? "";
    l !== i && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === i) || (e.value = i));
  }
};
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bo() {
  wo();
}
process.env.NODE_ENV !== "production" && bo();
const Et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, vo = (e) => (bn("data-v-a7b24004"), e = e(), vn(), e), yo = {
  class: "ru-educational-background",
  style: { "margin-bottom": "1rem" }
}, Eo = { class: "ru-educational-background-title" }, No = { class: "ru-icon-bg" }, xo = {
  class: "ru-educational-background-title-text",
  style: { display: "flex", "align-items": "center", "justify-content": "space-between" }
}, Oo = {
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
}, So = /* @__PURE__ */ vo(() => /* @__PURE__ */ u(
  "path",
  {
    d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
    "p-id": "4266"
  },
  null,
  -1
  /* HOISTED */
)), Vo = [
  So
], Ro = { style: { "margin-top": "1rem" } }, $o = {
  __name: "BlockHeaderA",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("addItem");
    return (r, l) => (v(), O("div", yo, [
      u("div", Eo, [
        u("div", No, [
          It(r.$slots, "icon", {}, void 0)
        ]),
        u("div", xo, [
          re(
            tt(n.title) + " ",
            1
            /* TEXT */
          ),
          u("div", {
            style: { height: "2rem" },
            onClick: o
          }, [
            n.disabled ? Pe("v-if", !0) : (v(), O("svg", Oo, Vo))
          ])
        ])
      ]),
      u("div", Ro, [
        It(r.$slots, "context", {}, void 0)
      ])
    ]));
  }
}, $e = /* @__PURE__ */ Et($o, [["__scopeId", "data-v-a7b24004"]]), se = (e) => (bn("data-v-4521f4e2"), e = e(), vn(), e), Do = {
  id: "ru-page",
  style: { "background-color": "rgb(207, 207, 207)" }
}, To = { id: "ru-left" }, Mo = { id: "ru-avatar" }, Po = ["src"], Io = { class: "ru-left-kw-box" }, Ao = {
  key: 0,
  class: "ru-left-key"
}, Uo = ["onUpdate:modelValue"], jo = { class: "ru-left-word" }, Fo = ["onUpdate:modelValue", "disabled"], Lo = { id: "ru-right" }, Ho = { class: "ru-personage" }, zo = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
  "div",
  { class: "ru-personage-title" },
  "个人简历",
  -1
  /* HOISTED */
)), Ko = { class: "ru-personage-kws" }, Bo = ["disabled", "onUpdate:modelValue"], Wo = ["onUpdate:modelValue", "disabled"], ko = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
)), qo = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, Zo = { style: { display: "flex" } }, Jo = ["onUpdate:modelValue", "disabled"], Yo = ["onUpdate:modelValue", "disabled"], Go = ["onUpdate:modelValue", "disabled"], Xo = ["onUpdate:modelValue", "disabled"], Qo = { style: { transform: "translateX(0.2rem)" } }, er = { style: { display: "flex" } }, tr = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
  "div",
  { style: { width: "20%" } },
  "专业成绩：",
  -1
  /* HOISTED */
)), nr = ["onUpdate:modelValue", "disabled"], sr = { style: { display: "flex" } }, or = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
  "div",
  { style: { width: "20%" } },
  "主修课程：",
  -1
  /* HOISTED */
)), rr = ["onUpdate:modelValue", "disabled"], ir = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
)), lr = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, cr = { style: { display: "flex" } }, ar = ["onUpdate:modelValue", "disabled"], ur = ["onUpdate:modelValue", "disabled"], dr = ["onUpdate:modelValue", "disabled"], fr = ["onUpdate:modelValue", "disabled"], pr = ["onUpdate:modelValue", "disabled"], hr = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
)), _r = ["onUpdate:modelValue", "disabled"], gr = ["onUpdate:modelValue", "disabled"], mr = ["onUpdate:modelValue", "disabled"], wr = /* @__PURE__ */ se(() => /* @__PURE__ */ u(
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
)), Cr = ["disabled"], br = /* @__PURE__ */ Object.assign({
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
    const t = e, { data: n, disabled: s } = dn(t), o = (r) => {
      s && (n.value.disabled = !n.value.disabled);
    };
    return (r, l) => (v(), O("div", Do, [
      f(s) ? Pe("v-if", !0) : (v(), O(
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
        u("div", Mo, [
          u("img", {
            src: f(n).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Po)
        ]),
        u("div", Io, [
          (v(!0), O(
            L,
            null,
            pe(f(n).baseKw, (i, c) => (v(), O("div", {
              class: "ru-left-kw",
              key: c
            }, [
              f(n).disabled ? (v(), O(
                "div",
                Ao,
                tt(i[0]),
                1
                /* TEXT */
              )) : Pe("v-if", !0),
              f(n).disabled ? Pe("v-if", !0) : y((v(), O("input", {
                key: 1,
                type: "text",
                "onUpdate:modelValue": (d) => i[0] = d,
                style: { width: "4rem" }
              }, null, 8, Uo)), [
                [E, i[0]]
              ]),
              re(" :  "),
              u("div", jo, [
                y(u("input", {
                  "onUpdate:modelValue": (d) => i[1] = d,
                  type: "text",
                  disabled: f(n).disabled
                }, null, 8, Fo), [
                  [E, i[1]]
                ])
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      u("div", Lo, [
        u("div", Ho, [
          zo,
          u("div", Ko, [
            (v(!0), O(
              L,
              null,
              pe(f(n).jobKw, (i, c) => (v(), O("div", {
                class: "ru-personage-item",
                key: c
              }, [
                y(u("input", {
                  type: "text",
                  disabled: f(n).disabled,
                  "onUpdate:modelValue": (d) => i[0] = d,
                  style: { width: "4rem" }
                }, null, 8, Bo), [
                  [E, i[0]]
                ]),
                re(" :  "),
                y(u("input", {
                  type: "text",
                  "onUpdate:modelValue": (d) => i[1] = d,
                  disabled: f(n).disabled
                }, null, 8, Wo), [
                  [E, i[1]]
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        H($e, {
          title: "教育背景",
          onAddItem: l[0] || (l[0] = (i) => f(n).educationalBackground.push({})),
          disabled: f(n).disabled
        }, {
          icon: K(() => [
            ko
          ]),
          context: K(() => [
            (v(!0), O(
              L,
              null,
              pe(f(n).educationalBackground, (i) => (v(), O("div", null, [
                u("div", qo, [
                  u("div", Zo, [
                    y(u("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (c) => i.starTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, Jo), [
                      [E, i.starTime]
                    ]),
                    re(" - "),
                    y(u("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (c) => i.endTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, Yo), [
                      [E, i.endTime]
                    ])
                  ]),
                  u("div", null, [
                    y(u("input", {
                      type: "text",
                      placeholder: "就读大学",
                      "onUpdate:modelValue": (c) => i.collegiate = c,
                      style: { "text-align": "center" },
                      disabled: f(n).disabled
                    }, null, 8, Go), [
                      [E, i.collegiate]
                    ])
                  ]),
                  u("div", null, [
                    y(u("input", {
                      type: "text",
                      placeholder: "就读专业",
                      "onUpdate:modelValue": (c) => i.profession = c,
                      style: { "text-align": "right" },
                      disabled: f(n).disabled
                    }, null, 8, Xo), [
                      [E, i.profession]
                    ])
                  ])
                ]),
                u("div", Qo, [
                  u("div", er, [
                    tr,
                    y(u("input", {
                      type: "text",
                      "onUpdate:modelValue": (c) => i.professionalAchievement = c,
                      placeholder: "请输入专业成绩",
                      disabled: f(n).disabled
                    }, null, 8, nr), [
                      [E, i.professionalAchievement]
                    ])
                  ]),
                  u("div", sr, [
                    or,
                    y(u("input", {
                      type: "text",
                      "onUpdate:modelValue": (c) => i.majorCourse = c,
                      placeholder: "请输入主修课程",
                      disabled: f(n).disabled
                    }, null, 8, rr), [
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
        H($e, {
          title: "工作经验",
          onAddItem: l[1] || (l[1] = (i) => f(n).workExperience.push({})),
          disabled: f(n).disabled
        }, {
          icon: K(() => [
            ir
          ]),
          context: K(() => [
            (v(!0), O(
              L,
              null,
              pe(f(n).workExperience, (i) => (v(), O("div", null, [
                u("div", lr, [
                  u("div", cr, [
                    y(u("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (c) => i.starTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, ar), [
                      [E, i.starTime]
                    ]),
                    re(" - "),
                    y(u("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (c) => i.endTime = c,
                      style: { width: "5rem" },
                      disabled: f(n).disabled
                    }, null, 8, ur), [
                      [E, i.endTime]
                    ])
                  ]),
                  u("div", null, [
                    y(u("input", {
                      type: "text",
                      placeholder: "工作单位",
                      "onUpdate:modelValue": (c) => i.workUnit = c,
                      style: { "text-align": "center" },
                      disabled: f(n).disabled
                    }, null, 8, dr), [
                      [E, i.workUnit]
                    ])
                  ]),
                  u("div", null, [
                    y(u("input", {
                      type: "text",
                      placeholder: "工作职位",
                      "onUpdate:modelValue": (c) => i.jobPosition = c,
                      style: { "text-align": "right" },
                      disabled: f(n).disabled
                    }, null, 8, fr), [
                      [E, i.jobPosition]
                    ])
                  ])
                ]),
                y(u("textarea", {
                  rows: "2",
                  "onUpdate:modelValue": (c) => i.context = c,
                  style: { width: "100%" },
                  disabled: f(n).disabled
                }, `\r
\r
          `, 8, pr), [
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
        H($e, {
          title: "荣誉证书",
          onAddItem: l[2] || (l[2] = (i) => f(n).certificateOfHonor.push({})),
          disabled: f(n).disabled
        }, {
          icon: K(() => [
            hr
          ]),
          context: K(() => [
            (v(!0), O(
              L,
              null,
              pe(f(n).certificateOfHonor, (i, c) => (v(), O("div", {
                style: { display: "flex" },
                key: c
              }, [
                y(u("input", {
                  type: "text",
                  placeholder: "证书名称",
                  "onUpdate:modelValue": (d) => i.certificateName = d,
                  disabled: f(n).disabled
                }, null, 8, _r), [
                  [E, i.certificateName]
                ]),
                y(u("input", {
                  type: "text",
                  placeholder: "获奖时间",
                  "onUpdate:modelValue": (d) => i.awardTime = d,
                  style: { "text-align": "center" },
                  disabled: f(n).disabled
                }, null, 8, gr), [
                  [E, i.awardTime]
                ]),
                y(u("input", {
                  type: "text",
                  placeholder: "颁发单位",
                  "onUpdate:modelValue": (d) => i.issuer = d,
                  style: { "text-align": "right" },
                  disabled: f(n).disabled
                }, null, 8, mr), [
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
        H($e, {
          title: "自我评价",
          disabled: f(n).disabled
        }, {
          icon: K(() => [
            wr
          ]),
          context: K(() => [
            y(u("textarea", {
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
}), Wt = /* @__PURE__ */ Et(br, [["__scopeId", "data-v-4521f4e2"]]), vr = {};
function yr(e, t) {
  return v(), O("div", null, " 基本信息 ");
}
const Er = /* @__PURE__ */ Et(vr, [["render", yr]]), Nr = { style: { display: "flex", width: "100%", "background-color": "#ffffff", "flex-direction": "column", "align-items": "center" } }, xr = /* @__PURE__ */ u(
  "div",
  { style: { "background-color": "#068359", height: "4rem", width: "95%", margin: "1rem 0", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "2rem" } },
  " 个人简历 ",
  -1
  /* HOISTED */
), Or = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Sr = { style: { width: "80%" } }, Vr = { style: { width: "20%" } }, Rr = ["src"], kt = /* @__PURE__ */ Object.assign({
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
  setup(e) {
    const t = e, { data: n, disabled: s } = dn(t);
    return (o, r) => (v(), O("div", Nr, [
      xr,
      u("div", Or, [
        u("div", Sr, [
          H(Er)
        ]),
        u("div", Vr, [
          u("img", {
            style: { width: "100%" },
            src: f(n).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Rr)
        ])
      ])
    ]));
  }
}), $r = {
  install: (e) => {
    e.component(Wt.name, Wt), e.component(kt.name, kt);
  }
};
export {
  $r as default
};
