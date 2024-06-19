/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dn(e, t) {
  const n = new Set(e.split(","));
  return (s) => n.has(s);
}
const I = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Tn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ne = () => {
}, $n = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), A = Object.assign, Pn = Object.prototype.hasOwnProperty, E = (e, t) => Pn.call(e, t), _ = Array.isArray, Z = (e) => Le(e) === "[object Map]", Kt = (e) => Le(e) === "[object Set]", x = (e) => typeof e == "function", $ = (e) => typeof e == "string", te = (e) => typeof e == "symbol", S = (e) => e !== null && typeof e == "object", In = (e) => (S(e) || x(e)) && x(e.then) && x(e.catch), zt = Object.prototype.toString, Le = (e) => zt.call(e), Bt = (e) => Le(e).slice(8, -1), Wt = (e) => Le(e) === "[object Object]", it = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Un = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = (e, t) => !Object.is(e, t), An = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, jn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, wt = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let vt;
const Jt = () => vt || (vt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function lt(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = $(s) ? Kn(s) : lt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if ($(e) || S(e))
    return e;
}
const Fn = /;(?![^(]*\))/g, Ln = /:([^]+)/, Hn = /\/\*[^]*?\*\//g;
function Kn(e) {
  const t = {};
  return e.replace(Hn, "").split(Fn).forEach((n) => {
    if (n) {
      const s = n.split(Ln);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (_(e))
    for (let n = 0; n < e.length; n++) {
      const s = ct(e[n]);
      s && (t += s + " ");
    }
  else if (S(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yt = (e) => $(e) ? e : e == null ? "" : _(e) || S(e) && (e.toString === zt || !x(e.toString)) ? JSON.stringify(e, qt, 2) : String(e), qt = (e, t) => t && t.__v_isRef ? qt(e, t.value) : Z(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Ge(s, r) + " =>"] = o, n),
    {}
  )
} : Kt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ge(n))
} : te(t) ? Ge(t) : S(t) && !_(t) && !Wt(t) ? String(t) : t, Ge = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    te(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function le(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let zn;
function Bn(e, t = zn) {
  t && t.active && t.effects.push(e);
}
let me;
class Wn {
  constructor(t, n, s, o) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Bn(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, He();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Jn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ke();
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
      return X = !0, me = this, this._runnings++, Nt(this), this.fn();
    } finally {
      xt(this), this._runnings--, me = n, X = t;
    }
  }
  stop() {
    this.active && (Nt(this), xt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Jn(e) {
  return e.value;
}
function Nt(e) {
  e._trackId++, e._depsLength = 0;
}
function xt(e) {
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
let X = !0, ke = 0;
const Zt = [];
function He() {
  Zt.push(X), X = !1;
}
function Ke() {
  const e = Zt.pop();
  X = e === void 0 ? !0 : e;
}
function at() {
  ke++;
}
function ut() {
  for (ke--; !ke && et.length; )
    et.shift()();
}
function Yn(e, t, n) {
  var s;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Gt(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((s = e.onTrack) == null || s.call(e, A({ effect: e }, n)));
  }
}
const et = [];
function qn(e, t, n) {
  var s;
  at();
  for (const o of e.keys()) {
    let r;
    o._dirtyLevel < t && (r ?? (r = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (r ?? (r = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((s = o.onTrigger) == null || s.call(o, A({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && et.push(o.scheduler)));
  }
  ut();
}
const Gn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Pe = /* @__PURE__ */ new WeakMap(), Q = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), tt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function R(e, t, n) {
  if (X && me) {
    let s = Pe.get(e);
    s || Pe.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = Gn(() => s.delete(n))), Yn(
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
function J(e, t, n, s, o, r) {
  const l = Pe.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && _(e)) {
    const c = Number(s);
    l.forEach((d, b) => {
      (b === "length" || !te(b) && b >= c) && i.push(d);
    });
  } else
    switch (n !== void 0 && i.push(l.get(n)), t) {
      case "add":
        _(e) ? it(n) && i.push(l.get("length")) : (i.push(l.get(Q)), Z(e) && i.push(l.get(tt)));
        break;
      case "delete":
        _(e) || (i.push(l.get(Q)), Z(e) && i.push(l.get(tt)));
        break;
      case "set":
        Z(e) && i.push(l.get(Q));
        break;
    }
  at();
  for (const c of i)
    c && qn(
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
  ut();
}
function Zn(e, t) {
  const n = Pe.get(e);
  return n && n.get(t);
}
const Xn = /* @__PURE__ */ Dn("__proto__,__v_isRef,__isVue"), Xt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(te)
), Ot = /* @__PURE__ */ Qn();
function Qn() {
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
      He(), at();
      const s = h(this)[t].apply(this, n);
      return ut(), Ke(), s;
    };
  }), e;
}
function kn(e) {
  te(e) || (e = String(e));
  const t = h(this);
  return R(t, "has", e), t.hasOwnProperty(e);
}
class Qt {
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
      return s === (o ? r ? sn : nn : r ? fs : tn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = _(t);
    if (!o) {
      if (l && E(Ot, n))
        return Reflect.get(Ot, n, s);
      if (n === "hasOwnProperty")
        return kn;
    }
    const i = Reflect.get(t, n, s);
    return (te(n) ? Xt.has(n) : Xn(n)) || (o || R(t, "get", n), r) ? i : P(i) ? l && it(n) ? i : i.value : S(i) ? o ? rn(i) : on(i) : i;
  }
}
class es extends Qt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const c = ce(r);
      if (!oe(s) && !ce(s) && (r = h(r), s = h(s)), !_(t) && P(r) && !P(s))
        return c ? !1 : (r.value = s, !0);
    }
    const l = _(t) && it(n) ? Number(n) < t.length : E(t, n), i = Reflect.set(t, n, s, o);
    return t === h(o) && (l ? ie(s, r) && J(t, "set", n, s, r) : J(t, "add", n, s)), i;
  }
  deleteProperty(t, n) {
    const s = E(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && J(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!te(n) || !Xt.has(n)) && R(t, "has", n), s;
  }
  ownKeys(t) {
    return R(
      t,
      "iterate",
      _(t) ? "length" : Q
    ), Reflect.ownKeys(t);
  }
}
class kt extends Qt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && le(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && le(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ts = /* @__PURE__ */ new es(), ns = /* @__PURE__ */ new kt(), ss = /* @__PURE__ */ new kt(!0), dt = (e) => e, ze = (e) => Reflect.getPrototypeOf(e);
function Ne(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = h(e), r = h(t);
  n || (ie(t, r) && R(o, "get", t), R(o, "get", r));
  const { has: l } = ze(o), i = s ? dt : n ? _t : ht;
  if (l.call(o, t))
    return i(e.get(t));
  if (l.call(o, r))
    return i(e.get(r));
  e !== o && e.get(t);
}
function xe(e, t = !1) {
  const n = this.__v_raw, s = h(n), o = h(e);
  return t || (ie(e, o) && R(s, "has", e), R(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Oe(e, t = !1) {
  return e = e.__v_raw, !t && R(h(e), "iterate", Q), Reflect.get(e, "size", e);
}
function St(e) {
  e = h(e);
  const t = h(this);
  return ze(t).has.call(t, e) || (t.add(e), J(t, "add", e, e)), this;
}
function Vt(e, t) {
  t = h(t);
  const n = h(this), { has: s, get: o } = ze(n);
  let r = s.call(n, e);
  r ? process.env.NODE_ENV !== "production" && en(n, s, e) : (e = h(e), r = s.call(n, e));
  const l = o.call(n, e);
  return n.set(e, t), r ? ie(t, l) && J(n, "set", e, t, l) : J(n, "add", e, t), this;
}
function Rt(e) {
  const t = h(this), { has: n, get: s } = ze(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && en(t, n, e) : (e = h(e), o = n.call(t, e));
  const r = s ? s.call(t, e) : void 0, l = t.delete(e);
  return o && J(t, "delete", e, void 0, r), l;
}
function Ct() {
  const e = h(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Z(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && J(e, "clear", void 0, void 0, n), s;
}
function Se(e, t) {
  return function(s, o) {
    const r = this, l = r.__v_raw, i = h(l), c = t ? dt : e ? _t : ht;
    return !e && R(i, "iterate", Q), l.forEach((d, b) => s.call(o, c(d), c(b), r));
  };
}
function Ve(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = h(o), l = Z(r), i = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, d = o[e](...s), b = n ? dt : t ? _t : ht;
    return !t && R(
      r,
      "iterate",
      c ? tt : Q
    ), {
      // iterator protocol
      next() {
        const { value: a, done: p } = d.next();
        return p ? { value: a, done: p } : {
          value: i ? [b(a[0]), b(a[1])] : b(a),
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
function K(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      le(
        `${Un(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function os() {
  const e = {
    get(r) {
      return Ne(this, r);
    },
    get size() {
      return Oe(this);
    },
    has: xe,
    add: St,
    set: Vt,
    delete: Rt,
    clear: Ct,
    forEach: Se(!1, !1)
  }, t = {
    get(r) {
      return Ne(this, r, !1, !0);
    },
    get size() {
      return Oe(this);
    },
    has: xe,
    add: St,
    set: Vt,
    delete: Rt,
    clear: Ct,
    forEach: Se(!1, !0)
  }, n = {
    get(r) {
      return Ne(this, r, !0);
    },
    get size() {
      return Oe(this, !0);
    },
    has(r) {
      return xe.call(this, r, !0);
    },
    add: K("add"),
    set: K("set"),
    delete: K("delete"),
    clear: K("clear"),
    forEach: Se(!0, !1)
  }, s = {
    get(r) {
      return Ne(this, r, !0, !0);
    },
    get size() {
      return Oe(this, !0);
    },
    has(r) {
      return xe.call(this, r, !0);
    },
    add: K("add"),
    set: K("set"),
    delete: K("delete"),
    clear: K("clear"),
    forEach: Se(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Ve(r, !1, !1), n[r] = Ve(r, !0, !1), t[r] = Ve(r, !1, !0), s[r] = Ve(
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
  rs,
  is,
  ls,
  cs
] = /* @__PURE__ */ os();
function ft(e, t) {
  const n = t ? e ? cs : ls : e ? is : rs;
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    E(n, o) && o in s ? n : s,
    o,
    r
  );
}
const as = {
  get: /* @__PURE__ */ ft(!1, !1)
}, us = {
  get: /* @__PURE__ */ ft(!0, !1)
}, ds = {
  get: /* @__PURE__ */ ft(!0, !0)
};
function en(e, t, n) {
  const s = h(n);
  if (s !== n && t.call(e, s)) {
    const o = Bt(e);
    le(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tn = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap();
function ps(e) {
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
function hs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ps(Bt(e));
}
function on(e) {
  return ce(e) ? e : pt(
    e,
    !1,
    ts,
    as,
    tn
  );
}
function rn(e) {
  return pt(
    e,
    !0,
    ns,
    us,
    nn
  );
}
function Re(e) {
  return pt(
    e,
    !0,
    ss,
    ds,
    sn
  );
}
function pt(e, t, n, s, o) {
  if (!S(e))
    return process.env.NODE_ENV !== "production" && le(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = hs(e);
  if (l === 0)
    return e;
  const i = new Proxy(
    e,
    l === 2 ? s : n
  );
  return o.set(e, i), i;
}
function se(e) {
  return ce(e) ? se(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ce(e) {
  return !!(e && e.__v_isReadonly);
}
function oe(e) {
  return !!(e && e.__v_isShallow);
}
function Ie(e) {
  return e ? !!e.__v_raw : !1;
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function _s(e) {
  return Object.isExtensible(e) && jn(e, "__v_skip", !0), e;
}
const ht = (e) => S(e) ? on(e) : e, _t = (e) => S(e) ? rn(e) : e;
function P(e) {
  return !!(e && e.__v_isRef === !0);
}
function f(e) {
  return P(e) ? e.value : e;
}
const gs = {
  get: (e, t, n) => f(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return P(o) && !P(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ms(e) {
  return se(e) ? e : new Proxy(e, gs);
}
function bs(e) {
  process.env.NODE_ENV !== "production" && !Ie(e) && le("toRefs() expects a reactive object but received a plain one.");
  const t = _(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Es(e, n);
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
    return Zn(h(this._object), this._key);
  }
}
function Es(e, t, n) {
  const s = e[t];
  return P(s) ? s : new ys(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const k = [];
function ws(e) {
  k.push(e);
}
function vs() {
  k.pop();
}
function m(e, ...t) {
  He();
  const n = k.length ? k[k.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Ns();
  if (s)
    ee(
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
          ({ vnode: r }) => `at <${Vn(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...xs(o)), console.warn(...r);
  }
  Ke();
}
function Ns() {
  let e = k[k.length - 1];
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
function xs(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Os(n));
  }), t;
}
function Os({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Vn(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ss(e.props), r] : [o + r];
}
function Ss(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...ln(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ln(e, t, n) {
  return $(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : P(t) ? (t = ln(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : x(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const cn = {
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
function ee(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    gt(o, t, n);
  }
}
function De(e, t, n, s) {
  if (x(e)) {
    const o = ee(e, t, n, s);
    return o && In(o) && o.catch((r) => {
      gt(r, t, n);
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
function gt(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, i = process.env.NODE_ENV !== "production" ? cn[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const d = r.ec;
      if (d) {
        for (let b = 0; b < d.length; b++)
          if (d[b](e, l, i) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      He(), ee(
        c,
        null,
        10,
        [e, l, i]
      ), Ke();
      return;
    }
  }
  Vs(e, n, o, s);
}
function Vs(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = cn[t];
    if (n && ws(n), m(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && vs(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Me = !1, nt = !1;
const M = [];
let B = 0;
const re = [];
let F = null, z = 0;
const an = /* @__PURE__ */ Promise.resolve();
let mt = null;
const Rs = 100;
function Cs(e) {
  const t = mt || an;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ds(e) {
  let t = B + 1, n = M.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = M[s], r = Ee(o);
    r < e || r === e && o.pre ? t = s + 1 : n = s;
  }
  return t;
}
function bt(e) {
  (!M.length || !M.includes(
    e,
    Me && e.allowRecurse ? B + 1 : B
  )) && (e.id == null ? M.push(e) : M.splice(Ds(e.id), 0, e), un());
}
function un() {
  !Me && !nt && (nt = !0, mt = an.then(fn));
}
function dn(e) {
  _(e) ? re.push(...e) : (!F || !F.includes(
    e,
    e.allowRecurse ? z + 1 : z
  )) && re.push(e), un();
}
function Ts(e) {
  if (re.length) {
    const t = [...new Set(re)].sort(
      (n, s) => Ee(n) - Ee(s)
    );
    if (re.length = 0, F) {
      F.push(...t);
      return;
    }
    for (F = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), z = 0; z < F.length; z++)
      process.env.NODE_ENV !== "production" && pn(e, F[z]) || F[z]();
    F = null, z = 0;
  }
}
const Ee = (e) => e.id == null ? 1 / 0 : e.id, $s = (e, t) => {
  const n = Ee(e) - Ee(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function fn(e) {
  nt = !1, Me = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), M.sort($s);
  const t = process.env.NODE_ENV !== "production" ? (n) => pn(e, n) : ne;
  try {
    for (B = 0; B < M.length; B++) {
      const n = M[B];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        ee(n, null, 14);
      }
    }
  } finally {
    B = 0, M.length = 0, Ts(e), Me = !1, mt = null, (M.length || re.length) && fn(e);
  }
}
function pn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Rs) {
      const s = t.ownerInstance, o = s && Sn(s.type);
      return gt(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const ae = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Jt().__VUE_HMR_RUNTIME__ = {
  createRecord: Ze(Ps),
  rerender: Ze(Is),
  reload: Ze(Ms)
});
const Ue = /* @__PURE__ */ new Map();
function Ps(e, t) {
  return Ue.has(e) ? !1 : (Ue.set(e, {
    initialDef: be(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function be(e) {
  return Rn(e) ? e.__vccOpts : e;
}
function Is(e, t) {
  const n = Ue.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, be(s.type).render = t), s.renderCache = [], s.effect.dirty = !0, s.update();
  }));
}
function Ms(e, t) {
  const n = Ue.get(e);
  if (!n)
    return;
  t = be(t), Dt(n.initialDef, t);
  const s = [...n.instances];
  for (const o of s) {
    const r = be(o.type);
    ae.has(r) || (r !== n.initialDef && Dt(r, t), ae.add(r)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (ae.add(r), o.ceReload(t.styles), ae.delete(r)) : o.parent ? (o.parent.effect.dirty = !0, bt(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  dn(() => {
    for (const o of s)
      ae.delete(
        be(o.type)
      );
  });
}
function Dt(e, t) {
  A(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ze(e) {
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
let W, he = [], st = !1;
function Us(e, ...t) {
  W ? W.emit(e, ...t) : st || he.push({ event: e, args: t });
}
function hn(e, t) {
  var n, s;
  W = e, W ? (W.enabled = !0, he.forEach(({ event: o, args: r }) => W.emit(o, ...r)), he = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    hn(r, t);
  }), setTimeout(() => {
    W || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, st = !0, he = []);
  }, 3e3)) : (st = !0, he = []);
}
const As = /* @__PURE__ */ js(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function js(e) {
  return (t) => {
    Us(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let N = null, Be = null;
function Tt(e) {
  const t = N;
  return N = e, Be = e && e.type.__scopeId || null, t;
}
function Fs(e) {
  Be = e;
}
function Ls() {
  Be = null;
}
function ue(e, t = N, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && jt(-1);
    const r = Tt(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Tt(r), s._d && jt(1);
    }
    return process.env.NODE_ENV !== "production" && As(t), l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
const Hs = Symbol.for("v-ndc"), Ks = (e) => e.__isSuspense;
function zs(e, t) {
  t && t.pendingBranch ? _(e) ? t.effects.push(...e) : t.effects.push(e) : dn(e);
}
const Bs = Symbol.for("v-scx"), Ws = () => {
  {
    const e = so(Bs);
    return e || process.env.NODE_ENV !== "production" && m(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Ce = {};
function Js(e, t, {
  immediate: n,
  deep: s,
  flush: o,
  once: r,
  onTrack: l,
  onTrigger: i
} = I) {
  if (t && r) {
    const g = t;
    t = (...qe) => {
      g(...qe), Ye();
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
  }, d = We, b = (g) => s === !0 ? g : (
    // for deep: false, only traverse root-level properties
    G(g, s === !1 ? 1 : void 0)
  );
  let a, p = !1, y = !1;
  if (P(e) ? (a = () => e.value, p = oe(e)) : se(e) ? (a = () => b(e), p = !0) : _(e) ? (y = !0, p = e.some((g) => se(g) || oe(g)), a = () => e.map((g) => {
    if (P(g))
      return g.value;
    if (se(g))
      return b(g);
    if (x(g))
      return ee(g, d, 2);
    process.env.NODE_ENV !== "production" && c(g);
  })) : x(e) ? t ? a = () => ee(e, d, 2) : a = () => (O && O(), De(
    e,
    d,
    3,
    [j]
  )) : (a = ne, process.env.NODE_ENV !== "production" && c(e)), t && s) {
    const g = a;
    a = () => G(g());
  }
  let O, j = (g) => {
    O = T.onStop = () => {
      ee(g, d, 4), O = T.onStop = void 0;
    };
  }, Je;
  if (xn)
    if (j = ne, t ? n && De(t, d, 3, [
      a(),
      y ? [] : void 0,
      j
    ]) : a(), o === "sync") {
      const g = Ws();
      Je = g.__watcherHandles || (g.__watcherHandles = []);
    } else
      return ne;
  let Y = y ? new Array(e.length).fill(Ce) : Ce;
  const q = () => {
    if (!(!T.active || !T.dirty))
      if (t) {
        const g = T.run();
        (s || p || (y ? g.some((qe, Cn) => ie(qe, Y[Cn])) : ie(g, Y))) && (O && O(), De(t, d, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          Y === Ce ? void 0 : y && Y[0] === Ce ? [] : Y,
          j
        ]), Y = g);
      } else
        T.run();
  };
  q.allowRecurse = !!t;
  let ve;
  o === "sync" ? ve = q : o === "post" ? ve = () => At(q, d && d.suspense) : (q.pre = !0, d && (q.id = d.uid), ve = () => bt(q));
  const T = new Wn(a, ne, ve), Ye = () => {
    T.stop();
  };
  return process.env.NODE_ENV !== "production" && (T.onTrack = l, T.onTrigger = i), t ? n ? q() : Y = T.run() : o === "post" ? At(
    T.run.bind(T),
    d && d.suspense
  ) : T.run(), Je && Je.push(Ye), Ye;
}
function Ys(e, t, n) {
  const s = this.proxy, o = $(e) ? e.includes(".") ? qs(s, e) : () => s[e] : e.bind(s, s);
  let r;
  x(t) ? r = t : (r = t.handler, n = t);
  const l = fo(this), i = Js(o, r.bind(s), n);
  return l(), i;
}
function qs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function G(e, t = 1 / 0, n) {
  if (t <= 0 || !S(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, P(e))
    G(e.value, t, n);
  else if (_(e))
    for (let s = 0; s < e.length; s++)
      G(e[s], t, n);
  else if (Kt(e) || Z(e))
    e.forEach((s) => {
      G(s, t, n);
    });
  else if (Wt(e))
    for (const s in e)
      G(e[s], t, n);
  return e;
}
function w(e, t) {
  if (N === null)
    return process.env.NODE_ENV !== "production" && m("withDirectives can only be used inside render functions."), e;
  const n = On(N) || N.proxy, s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, l, i, c = I] = t[o];
    r && (x(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && G(l), s.push({
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
function de(e, t, n, s) {
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
function Zs(e, t, n = {}, s, o) {
  if (N.isCE || N.parent && Gs(N.parent) && N.parent.isCE)
    return n.name = t, H("slot", n, s);
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (m(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), V();
  const l = r && _n(r(n)), i = bn(
    L,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      l && l.key || `_${t}`
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), r && r._c && (r._d = !0), i;
}
function _n(e) {
  return e.some((t) => yn(t) ? !(t.type === je || t.type === L && !_n(t.children)) : !0) ? e : null;
}
const ot = (e) => e ? po(e) ? On(e) || e.proxy : ot(e.parent) : null, ye = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ A(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Re(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Re(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Re(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Re(e.refs) : e.refs,
    $parent: (e) => ot(e.parent),
    $root: (e) => ot(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ks(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, bt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cs.bind(e.proxy)),
    $watch: (e) => Ys.bind(e)
  })
), Xs = (e) => e === "_" || e === "$", Xe = (e, t) => e !== I && !e.__isScriptSetup && E(e, t), Qs = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: l, type: i, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const y = l[t];
      if (y !== void 0)
        switch (y) {
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
        if (Xe(s, t))
          return l[t] = 1, s[t];
        if (o !== I && E(o, t))
          return l[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && E(d, t)
        )
          return l[t] = 3, r[t];
        if (n !== I && E(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const b = ye[t];
    let a, p;
    if (b)
      return t === "$attrs" ? (R(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && R(e, "get", t), b(e);
    if (
      // css module (injected by vue-loader)
      (a = i.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== I && E(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, E(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && N && (!$(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== I && Xs(t[0]) && E(o, t) ? m(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === N && m(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Xe(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && E(o, t) ? (m(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== I && E(s, t) ? (s[t] = n, !0) : E(e.props, t) ? (process.env.NODE_ENV !== "production" && m(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && m(
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
    return !!n[l] || e !== I && E(e, l) || Xe(t, l) || (i = r[0]) && E(i, l) || E(s, l) || E(ye, l) || E(o.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Qs.ownKeys = (e) => (m(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function $t(e) {
  return _(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ks(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, i = r.get(t);
  let c;
  return i ? c = i : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (d) => Ae(c, d, l, !0)
  ), Ae(c, t, l)), S(t) && r.set(t, c), c;
}
function Ae(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Ae(e, r, n, !0), o && o.forEach(
    (l) => Ae(e, l, n, !0)
  );
  for (const l in t)
    if (s && l === "expose")
      process.env.NODE_ENV !== "production" && m(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = eo[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
    }
  return e;
}
const eo = {
  data: Pt,
  props: Mt,
  emits: Mt,
  // objects
  methods: _e,
  computed: _e,
  // lifecycle
  beforeCreate: C,
  created: C,
  beforeMount: C,
  mounted: C,
  beforeUpdate: C,
  updated: C,
  beforeDestroy: C,
  beforeUnmount: C,
  destroyed: C,
  unmounted: C,
  activated: C,
  deactivated: C,
  errorCaptured: C,
  serverPrefetch: C,
  // assets
  components: _e,
  directives: _e,
  // watch
  watch: no,
  // provide / inject
  provide: Pt,
  inject: to
};
function Pt(e, t) {
  return t ? e ? function() {
    return A(
      x(e) ? e.call(this, this) : e,
      x(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function to(e, t) {
  return _e(It(e), It(t));
}
function It(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function C(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _e(e, t) {
  return e ? A(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mt(e, t) {
  return e ? _(e) && _(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : A(
    /* @__PURE__ */ Object.create(null),
    $t(e),
    $t(t ?? {})
  ) : t;
}
function no(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = A(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = C(e[s], t[s]);
  return n;
}
let Ut = null;
function so(e, t, n = !1) {
  const s = We || N;
  if (s || Ut) {
    const o = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Ut._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && x(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && m(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && m("inject() can only be used inside setup() or functional components.");
}
const oo = {}, gn = (e) => Object.getPrototypeOf(e) === oo, At = zs, ro = (e) => e.__isTeleport, L = Symbol.for("v-fgt"), io = Symbol.for("v-txt"), je = Symbol.for("v-cmt"), Te = [];
let U = null;
function V(e = !1) {
  Te.push(U = e ? null : []);
}
function lo() {
  Te.pop(), U = Te[Te.length - 1] || null;
}
let we = 1;
function jt(e) {
  we += e;
}
function mn(e) {
  return e.dynamicChildren = we > 0 ? U || Tn : null, lo(), we > 0 && U && U.push(e), e;
}
function D(e, t, n, s, o, r) {
  return mn(
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
function bn(e, t, n, s, o) {
  return mn(
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
function yn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const co = (...e) => wn(
  ...e
), En = ({ key: e }) => e ?? null, $e = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $(e) || P(e) || x(e) ? { i: N, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, s = 0, o = null, r = e === L ? 0 : 1, l = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && En(t),
    ref: t && $e(t),
    scopeId: Be,
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
  return i ? (yt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= $(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && m("VNode created with invalid key (NaN). VNode type:", c.type), we > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  U && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && U.push(c), c;
}
const H = process.env.NODE_ENV !== "production" ? co : wn;
function wn(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Hs) && (process.env.NODE_ENV !== "production" && !e && m(`Invalid vnode type when creating vnode: ${e}.`), e = je), yn(e)) {
    const i = Fe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && yt(i, n), we > 0 && !r && U && (i.shapeFlag & 6 ? U[U.indexOf(e)] = i : U.push(i)), i.patchFlag |= -2, i;
  }
  if (Rn(e) && (e = e.__vccOpts), t) {
    t = ao(t);
    let { class: i, style: c } = t;
    i && !$(i) && (t.class = ct(i)), S(c) && (Ie(c) && !_(c) && (c = A({}, c)), t.style = lt(c));
  }
  const l = $(e) ? 1 : Ks(e) ? 128 : ro(e) ? 64 : S(e) ? 4 : x(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && Ie(e) && (e = h(e), m(
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
function ao(e) {
  return e ? Ie(e) || gn(e) ? A({}, e) : e : null;
}
function Fe(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: l, children: i, transition: c } = e, d = t ? uo(o || {}, t) : o, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && En(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? _(r) ? r.concat($e(t)) : [r, $e(t)] : $e(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && _(i) ? i.map(vn) : i,
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
    ssContent: e.ssContent && Fe(e.ssContent),
    ssFallback: e.ssFallback && Fe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && (b.transition = c.clone(b)), b;
}
function vn(e) {
  const t = Fe(e);
  return _(e.children) && (t.children = e.children.map(vn)), t;
}
function ge(e = " ", t = 0) {
  return H(io, null, e, t);
}
function Nn(e = "", t = !1) {
  return t ? (V(), bn(je, null, e)) : H(je, null, e);
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
      !o && !gn(t) ? t._ctx = N : o === 3 && N && (N.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    x(t) ? (t = { default: t, _ctx: N }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ge(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function uo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ct([t.class, s.class]));
      else if (o === "style")
        t.style = lt([t.style, s.style]);
      else if ($n(o)) {
        const r = t[o], l = s[o];
        l && r !== l && !(_(r) && r.includes(l)) && (t[o] = r ? [].concat(r, l) : l);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
let We = null, rt;
{
  const e = Jt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((l) => l(r)) : o[0](r);
    };
  };
  rt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => xn = n
  );
}
const fo = (e) => {
  const t = We;
  return rt(e), e.scope.on(), () => {
    e.scope.off(), rt(t);
  };
};
function po(e) {
  return e.vnode.shapeFlag & 4;
}
let xn = !1;
process.env.NODE_ENV;
function On(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ms(_s(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ye)
          return ye[n](e);
      },
      has(t, n) {
        return n in t || n in ye;
      }
    }));
}
const ho = /(?:^|[-_])(\w)/g, _o = (e) => e.replace(ho, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Sn(e, t = !0) {
  return x(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vn(e, t, n = !1) {
  let s = Sn(t);
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
  return s ? _o(s) : n ? "App" : "Anonymous";
}
function Rn(e) {
  return x(e) && "__vccOpts" in e;
}
function go() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    header(a) {
      return S(a) ? a.__isVue ? ["div", e, "VueInstance"] : P(a) ? [
        "div",
        {},
        ["span", e, b(a)],
        "<",
        i(a.value),
        ">"
      ] : se(a) ? [
        "div",
        {},
        ["span", e, oe(a) ? "ShallowReactive" : "Reactive"],
        "<",
        i(a),
        `>${ce(a) ? " (readonly)" : ""}`
      ] : ce(a) ? [
        "div",
        {},
        ["span", e, oe(a) ? "ShallowReadonly" : "Readonly"],
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
    a.type.props && a.props && p.push(l("props", h(a.props))), a.setupState !== I && p.push(l("setup", a.setupState)), a.data !== I && p.push(l("data", h(a.data)));
    const y = c(a, "computed");
    y && p.push(l("computed", y));
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
    return p = A({}, p), Object.keys(p).length ? [
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
        ...Object.keys(p).map((y) => [
          "div",
          {},
          ["span", s, y + ": "],
          i(p[y], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(a, p = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : S(a) ? ["object", { object: p ? h(a) : a }] : ["span", n, String(a)];
  }
  function c(a, p) {
    const y = a.type;
    if (x(y))
      return;
    const O = {};
    for (const j in a.ctx)
      d(y, j, p) && (O[j] = a.ctx[j]);
    return O;
  }
  function d(a, p, y) {
    const O = a[y];
    if (_(O) && O.includes(p) || S(O) && p in O || a.extends && d(a.extends, p, y) || a.mixins && a.mixins.some((j) => d(j, p, y)))
      return !0;
  }
  function b(a) {
    return oe(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
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
function fe(e, t, n, s) {
  e.addEventListener(t, n, s);
}
const Ft = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _(t) ? (n) => An(t, n) : t;
};
function mo(e) {
  e.target.composing = !0;
}
function Lt(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Qe = Symbol("_assign"), v = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Qe] = Ft(o);
    const r = s || o.props && o.props.type === "number";
    fe(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), r && (i = wt(i)), e[Qe](i);
    }), n && fe(e, "change", () => {
      e.value = e.value.trim();
    }), t || (fe(e, "compositionstart", mo), fe(e, "compositionend", Lt), fe(e, "change", Lt));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, r) {
    if (e[Qe] = Ft(r), e.composing)
      return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? wt(e.value) : e.value, i = t ?? "";
    l !== i && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === i) || (e.value = i));
  }
};
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bo() {
  go();
}
process.env.NODE_ENV !== "production" && bo();
const yo = { style: { display: "flex", "align-items": "center", "justify-content": "space-between" } }, Eo = { style: { "font-size": "2rem", "border-bottom": "solid 4px #068359" } }, wo = /* @__PURE__ */ u(
  "path",
  {
    d: "M512 1024C229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 794.741738 794.760389 1024 512 1024ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 754.368294 269.649625 950.859703 512 950.859703 754.350375 950.859703 950.841784 754.368294 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM548.570149 731.438811 475.429851 731.438811 475.429851 548.588068 292.579109 548.588068 292.579109 475.411201 475.429851 475.411201 475.429851 292.560457 548.570149 292.560457 548.570149 475.411201 731.420891 475.411201 731.420891 548.588068 548.570149 548.588068 548.570149 731.438811Z",
    fill: "#068359",
    "p-id": "4272"
  },
  null,
  -1
  /* HOISTED */
), vo = [
  wo
], No = /* @__PURE__ */ u(
  "div",
  { style: { "border-bottom": "solid 1px #068359", "margin-top": "4px" } },
  null,
  -1
  /* HOISTED */
), xo = { style: { "margin-top": "1rem" } }, pe = {
  __name: "BlockHeaderB",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("addItem");
    return (r, l) => (V(), D("div", null, [
      u("div", yo, [
        u(
          "span",
          Eo,
          Yt(n.title),
          1
          /* TEXT */
        ),
        n.disabled ? (V(), D("svg", {
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
        }, vo)) : Nn("v-if", !0)
      ]),
      No,
      u("div", xo, [
        Zs(r.$slots, "context")
      ])
    ]));
  }
}, Oo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Et = (e) => (Fs("data-v-6634ef0d"), e = e(), Ls(), e), So = { style: { display: "flex", width: "100%", "background-color": "#ffffff", "flex-direction": "column", "align-items": "center", position: "relative" } }, Vo = /* @__PURE__ */ Et(() => /* @__PURE__ */ u(
  "div",
  { style: { "background-color": "#068359", height: "4rem", width: "95%", margin: "1rem 0", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "2rem" } },
  " 个人简历 ",
  -1
  /* HOISTED */
)), Ro = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Co = { style: { width: "80%", "padding-right": "2rem" } }, Do = { class: "ru-personage-kws" }, To = ["disabled", "onUpdate:modelValue"], $o = ["onUpdate:modelValue", "disabled"], Po = ["disabled", "onUpdate:modelValue"], Io = ["onUpdate:modelValue", "disabled"], Mo = { style: { width: "20%" } }, Uo = ["src"], Ao = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, jo = { style: { width: "100%" } }, Fo = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, Lo = { style: { display: "flex" } }, Ho = ["onUpdate:modelValue", "disabled"], Ko = ["onUpdate:modelValue", "disabled"], zo = ["onUpdate:modelValue", "disabled"], Bo = ["onUpdate:modelValue", "disabled"], Wo = { style: { transform: "translateX(0.2rem)" } }, Jo = { style: { display: "flex" } }, Yo = /* @__PURE__ */ Et(() => /* @__PURE__ */ u(
  "div",
  { style: { width: "10%" } },
  "专业成绩：",
  -1
  /* HOISTED */
)), qo = ["onUpdate:modelValue", "disabled"], Go = { style: { display: "flex" } }, Zo = /* @__PURE__ */ Et(() => /* @__PURE__ */ u(
  "div",
  { style: { width: "10%" } },
  "主修课程：",
  -1
  /* HOISTED */
)), Xo = ["onUpdate:modelValue", "disabled"], Qo = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, ko = { style: { width: "100%" } }, er = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, tr = { style: { display: "flex" } }, nr = ["onUpdate:modelValue", "disabled"], sr = ["onUpdate:modelValue", "disabled"], or = ["onUpdate:modelValue", "disabled"], rr = ["onUpdate:modelValue", "disabled"], ir = ["onUpdate:modelValue", "disabled"], lr = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, cr = { style: { width: "100%" } }, ar = ["onUpdate:modelValue", "disabled"], ur = ["onUpdate:modelValue", "disabled"], dr = ["onUpdate:modelValue", "disabled"], fr = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, pr = { style: { width: "100%" } }, hr = ["disabled"], _r = /* @__PURE__ */ Object.assign({
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
    const t = e, { data: n, disabled: s } = bs(t), o = (r) => {
      s && (n.value.disabled = !n.value.disabled);
    };
    return (r, l) => (V(), D("div", So, [
      f(s) ? Nn("v-if", !0) : (V(), D(
        "div",
        {
          key: 0,
          style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
          onClick: o
        },
        Yt(f(n).disabled == !0 ? "预览" : "编辑"),
        1
        /* TEXT */
      )),
      Vo,
      u("div", Ro, [
        u("div", Co, [
          H(pe, {
            title: "基本信息",
            onAddItem: l[0] || (l[0] = (i) => f(n).baseKw.push(["", ""])),
            disabled: f(n).disabled
          }, {
            context: ue(() => [
              u("div", Do, [
                (V(!0), D(
                  L,
                  null,
                  de(f(n).jobKw, (i, c) => (V(), D("div", {
                    class: "ru-personage-item",
                    key: c
                  }, [
                    w(u("input", {
                      type: "text",
                      disabled: f(n).disabled,
                      "onUpdate:modelValue": (d) => i[0] = d,
                      style: { width: "4rem" }
                    }, null, 8, To), [
                      [v, i[0]]
                    ]),
                    ge(" :  "),
                    w(u("input", {
                      type: "text",
                      "onUpdate:modelValue": (d) => i[1] = d,
                      disabled: f(n).disabled
                    }, null, 8, $o), [
                      [v, i[1]]
                    ])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                (V(!0), D(
                  L,
                  null,
                  de(f(n).baseKw, (i, c) => (V(), D("div", {
                    class: "ru-personage-item",
                    key: c
                  }, [
                    w(u("input", {
                      type: "text",
                      disabled: f(n).disabled,
                      "onUpdate:modelValue": (d) => i[0] = d,
                      style: { width: "4rem" }
                    }, null, 8, Po), [
                      [v, i[0]]
                    ]),
                    ge(" :  "),
                    w(u("input", {
                      type: "text",
                      "onUpdate:modelValue": (d) => i[1] = d,
                      disabled: f(n).disabled
                    }, null, 8, Io), [
                      [v, i[1]]
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
        u("div", Mo, [
          u("img", {
            style: { width: "100%" },
            src: f(n).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Uo)
        ])
      ]),
      u("div", Ao, [
        u("div", jo, [
          H(pe, {
            title: "教育背景",
            onAddItem: l[1] || (l[1] = (i) => f(n).educationalBackground.push({})),
            disabled: f(n).disabled
          }, {
            context: ue(() => [
              (V(!0), D(
                L,
                null,
                de(f(n).educationalBackground, (i) => (V(), D("div", null, [
                  u("div", Fo, [
                    u("div", Lo, [
                      w(u("input", {
                        type: "text",
                        placeholder: "开始时间",
                        "onUpdate:modelValue": (c) => i.starTime = c,
                        style: { width: "5rem" },
                        disabled: f(n).disabled
                      }, null, 8, Ho), [
                        [v, i.starTime]
                      ]),
                      ge(" - "),
                      w(u("input", {
                        type: "text",
                        placeholder: "结束时间",
                        "onUpdate:modelValue": (c) => i.endTime = c,
                        style: { width: "5rem" },
                        disabled: f(n).disabled
                      }, null, 8, Ko), [
                        [v, i.endTime]
                      ])
                    ]),
                    u("div", null, [
                      w(u("input", {
                        type: "text",
                        placeholder: "就读大学",
                        "onUpdate:modelValue": (c) => i.collegiate = c,
                        style: { "text-align": "center" },
                        disabled: f(n).disabled
                      }, null, 8, zo), [
                        [v, i.collegiate]
                      ])
                    ]),
                    u("div", null, [
                      w(u("input", {
                        type: "text",
                        placeholder: "就读专业",
                        "onUpdate:modelValue": (c) => i.profession = c,
                        style: { "text-align": "right" },
                        disabled: f(n).disabled
                      }, null, 8, Bo), [
                        [v, i.profession]
                      ])
                    ])
                  ]),
                  u("div", Wo, [
                    u("div", Jo, [
                      Yo,
                      w(u("input", {
                        type: "text",
                        style: { width: "90%" },
                        "onUpdate:modelValue": (c) => i.professionalAchievement = c,
                        placeholder: "请输入专业成绩",
                        disabled: f(n).disabled
                      }, null, 8, qo), [
                        [v, i.professionalAchievement]
                      ])
                    ]),
                    u("div", Go, [
                      Zo,
                      w(u("input", {
                        type: "text",
                        style: { width: "90%" },
                        "onUpdate:modelValue": (c) => i.majorCourse = c,
                        placeholder: "请输入主修课程",
                        disabled: f(n).disabled
                      }, null, 8, Xo), [
                        [v, i.majorCourse]
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
      u("div", Qo, [
        u("div", ko, [
          H(pe, {
            title: "工作经验",
            onAddItem: l[2] || (l[2] = (i) => f(n).workExperience.push({})),
            disabled: f(n).disabled
          }, {
            context: ue(() => [
              (V(!0), D(
                L,
                null,
                de(f(n).workExperience, (i) => (V(), D("div", null, [
                  u("div", er, [
                    u("div", tr, [
                      w(u("input", {
                        type: "text",
                        placeholder: "开始时间",
                        "onUpdate:modelValue": (c) => i.starTime = c,
                        style: { width: "5rem" },
                        disabled: f(n).disabled
                      }, null, 8, nr), [
                        [v, i.starTime]
                      ]),
                      ge(" - "),
                      w(u("input", {
                        type: "text",
                        placeholder: "结束时间",
                        "onUpdate:modelValue": (c) => i.endTime = c,
                        style: { width: "5rem" },
                        disabled: f(n).disabled
                      }, null, 8, sr), [
                        [v, i.endTime]
                      ])
                    ]),
                    u("div", null, [
                      w(u("input", {
                        type: "text",
                        placeholder: "工作单位",
                        "onUpdate:modelValue": (c) => i.workUnit = c,
                        style: { "text-align": "center" },
                        disabled: f(n).disabled
                      }, null, 8, or), [
                        [v, i.workUnit]
                      ])
                    ]),
                    u("div", null, [
                      w(u("input", {
                        type: "text",
                        placeholder: "工作职位",
                        "onUpdate:modelValue": (c) => i.jobPosition = c,
                        style: { "text-align": "right" },
                        disabled: f(n).disabled
                      }, null, 8, rr), [
                        [v, i.jobPosition]
                      ])
                    ])
                  ]),
                  w(u("textarea", {
                    rows: "2",
                    "onUpdate:modelValue": (c) => i.context = c,
                    style: { width: "100%" },
                    disabled: f(n).disabled
                  }, `\r
\r
          `, 8, ir), [
                    [v, i.context]
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
      u("div", lr, [
        u("div", cr, [
          H(pe, {
            title: "荣誉证书",
            onAddItem: l[3] || (l[3] = (i) => f(n).certificateOfHonor.push({})),
            disabled: f(n).disabled
          }, {
            context: ue(() => [
              (V(!0), D(
                L,
                null,
                de(f(n).certificateOfHonor, (i, c) => (V(), D("div", {
                  style: { display: "flex", "justify-content": "space-between" },
                  key: c
                }, [
                  w(u("input", {
                    type: "text",
                    placeholder: "证书名称",
                    "onUpdate:modelValue": (d) => i.certificateName = d,
                    disabled: f(n).disabled
                  }, null, 8, ar), [
                    [v, i.certificateName]
                  ]),
                  w(u("input", {
                    type: "text",
                    placeholder: "获奖时间",
                    "onUpdate:modelValue": (d) => i.awardTime = d,
                    style: { "text-align": "center" },
                    disabled: f(n).disabled
                  }, null, 8, ur), [
                    [v, i.awardTime]
                  ]),
                  w(u("input", {
                    type: "text",
                    placeholder: "颁发单位",
                    "onUpdate:modelValue": (d) => i.issuer = d,
                    style: { "text-align": "right" },
                    disabled: f(n).disabled
                  }, null, 8, dr), [
                    [v, i.issuer]
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
      u("div", fr, [
        u("div", pr, [
          H(pe, { title: "自我评价" }, {
            context: ue(() => [
              w(u("textarea", {
                rows: "4",
                style: { width: "100%" },
                "onUpdate:modelValue": l[4] || (l[4] = (i) => f(n).selfEvaluation = i),
                disabled: f(n).disabled
              }, null, 8, hr), [
                [v, f(n).selfEvaluation]
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ Oo(_r, [["__scopeId", "data-v-6634ef0d"]]), gr = {
  install: (e) => {
    e.component(Ht.name, Ht);
  }
};
export {
  gr as default
};
