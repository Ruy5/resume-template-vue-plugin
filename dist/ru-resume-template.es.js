/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jn(e, t) {
  const n = new Set(e.split(","));
  return (s) => n.has(s);
}
const I = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Fn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], re = () => {
}, Hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, Ln = Object.prototype.hasOwnProperty, E = (e, t) => Ln.call(e, t), y = Array.isArray, Q = (e) => Ke(e) === "[object Map]", Gt = (e) => Ke(e) === "[object Set]", N = (e) => typeof e == "function", P = (e) => typeof e == "string", oe = (e) => typeof e == "symbol", S = (e) => e !== null && typeof e == "object", zn = (e) => (S(e) || N(e)) && N(e.then) && N(e.catch), Xt = Object.prototype.toString, Ke = (e) => Xt.call(e), Qt = (e) => Ke(e).slice(8, -1), en = (e) => Ke(e) === "[object Object]", ut = (e) => P(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Kn = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ue = (e, t) => !Object.is(e, t), kn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Wn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, $t = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Rt;
const tn = () => Rt || (Rt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pt(e) {
  if (y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = P(s) ? Yn(s) : pt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (P(e) || S(e))
    return e;
}
const Zn = /;(?![^(]*\))/g, qn = /:([^]+)/, Jn = /\/\*[^]*?\*\//g;
function Yn(e) {
  const t = {};
  return e.replace(Jn, "").split(Zn).forEach((n) => {
    if (n) {
      const s = n.split(qn);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ft(e) {
  let t = "";
  if (P(e))
    t = e;
  else if (y(e))
    for (let n = 0; n < e.length; n++) {
      const s = ft(e[n]);
      s && (t += s + " ");
    }
  else if (S(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ce = (e) => P(e) ? e : e == null ? "" : y(e) || S(e) && (e.toString === Xt || !N(e.toString)) ? JSON.stringify(e, nn, 2) : String(e), nn = (e, t) => t && t.__v_isRef ? nn(e, t.value) : Q(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Qe(s, i) + " =>"] = o, n),
    {}
  )
} : Gt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qe(n))
} : oe(t) ? Qe(t) : S(t) && !y(t) && !en(t) ? String(t) : t, Qe = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    oe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Gn;
function Xn(e, t = Gn) {
  t && t.active && t.effects.push(e);
}
let ye;
class Qn {
  constructor(t, n, s, o) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Xn(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ke();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (es(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), We();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ee, n = ye;
    try {
      return ee = !0, ye = this, this._runnings++, Tt(this), this.fn();
    } finally {
      Ut(this), this._runnings--, ye = n, ee = t;
    }
  }
  stop() {
    this.active && (Tt(this), Ut(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function es(e) {
  return e.value;
}
function Tt(e) {
  e._trackId++, e._depsLength = 0;
}
function Ut(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      sn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function sn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let ee = !0, st = 0;
const on = [];
function ke() {
  on.push(ee), ee = !1;
}
function We() {
  const e = on.pop();
  ee = e === void 0 ? !0 : e;
}
function ht() {
  st++;
}
function _t() {
  for (st--; !st && ot.length; )
    ot.shift()();
}
function ts(e, t, n) {
  var s;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && sn(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((s = e.onTrack) == null || s.call(e, H({ effect: e }, n)));
  }
}
const ot = [];
function ns(e, t, n) {
  var s;
  ht();
  for (const o of e.keys()) {
    let i;
    o._dirtyLevel < t && (i ?? (i = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (i ?? (i = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((s = o.onTrigger) == null || s.call(o, H({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && ot.push(o.scheduler)));
  }
  _t();
}
const ss = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ie = /* @__PURE__ */ new WeakMap(), te = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), it = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function $(e, t, n) {
  if (ee && ye) {
    let s = Ie.get(e);
    s || Ie.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = ss(() => s.delete(n))), ts(
      ye,
      o,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function J(e, t, n, s, o, i) {
  const l = Ie.get(e);
  if (!l)
    return;
  let r = [];
  if (t === "clear")
    r = [...l.values()];
  else if (n === "length" && y(e)) {
    const a = Number(s);
    l.forEach((p, C) => {
      (C === "length" || !oe(C) && C >= a) && r.push(p);
    });
  } else
    switch (n !== void 0 && r.push(l.get(n)), t) {
      case "add":
        y(e) ? ut(n) && r.push(l.get("length")) : (r.push(l.get(te)), Q(e) && r.push(l.get(it)));
        break;
      case "delete":
        y(e) || (r.push(l.get(te)), Q(e) && r.push(l.get(it)));
        break;
      case "set":
        Q(e) && r.push(l.get(te));
        break;
    }
  ht();
  for (const a of r)
    a && ns(
      a,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: s,
        oldValue: o,
        oldTarget: i
      } : void 0
    );
  _t();
}
function os(e, t) {
  const n = Ie.get(e);
  return n && n.get(t);
}
const is = /* @__PURE__ */ jn("__proto__,__v_isRef,__isVue"), rn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(oe)
), Dt = /* @__PURE__ */ rs();
function rs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = g(this);
      for (let i = 0, l = this.length; i < l; i++)
        $(s, "get", i + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(g)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ke(), ht();
      const s = g(this)[t].apply(this, n);
      return _t(), We(), s;
    };
  }), e;
}
function ls(e) {
  oe(e) || (e = String(e));
  const t = g(this);
  return $(t, "has", e), t.hasOwnProperty(e);
}
class ln {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? pn : un : i ? vs : cn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = y(t);
    if (!o) {
      if (l && E(Dt, n))
        return Reflect.get(Dt, n, s);
      if (n === "hasOwnProperty")
        return ls;
    }
    const r = Reflect.get(t, n, s);
    return (oe(n) ? rn.has(n) : is(n)) || (o || $(t, "get", n), i) ? r : A(r) ? l && ut(n) ? r : r.value : S(r) ? o ? hn(r) : fn(r) : r;
  }
}
class as extends ln {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = fe(i);
      if (!ae(s) && !fe(s) && (i = g(i), s = g(s)), !y(t) && A(i) && !A(s))
        return a ? !1 : (i.value = s, !0);
    }
    const l = y(t) && ut(n) ? Number(n) < t.length : E(t, n), r = Reflect.set(t, n, s, o);
    return t === g(o) && (l ? ue(s, i) && J(t, "set", n, s, i) : J(t, "add", n, s)), r;
  }
  deleteProperty(t, n) {
    const s = E(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && J(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!oe(n) || !rn.has(n)) && $(t, "has", n), s;
  }
  ownKeys(t) {
    return $(
      t,
      "iterate",
      y(t) ? "length" : te
    ), Reflect.ownKeys(t);
  }
}
class an extends ln {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && pe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && pe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ds = /* @__PURE__ */ new as(), cs = /* @__PURE__ */ new an(), us = /* @__PURE__ */ new an(!0), mt = (e) => e, Ze = (e) => Reflect.getPrototypeOf(e);
function Ne(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = g(e), i = g(t);
  n || (ue(t, i) && $(o, "get", t), $(o, "get", i));
  const { has: l } = Ze(o), r = s ? mt : n ? vt : yt;
  if (l.call(o, t))
    return r(e.get(t));
  if (l.call(o, i))
    return r(e.get(i));
  e !== o && e.get(t);
}
function Oe(e, t = !1) {
  const n = this.__v_raw, s = g(n), o = g(e);
  return t || (ue(e, o) && $(s, "has", e), $(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Se(e, t = !1) {
  return e = e.__v_raw, !t && $(g(e), "iterate", te), Reflect.get(e, "size", e);
}
function Mt(e) {
  e = g(e);
  const t = g(this);
  return Ze(t).has.call(t, e) || (t.add(e), J(t, "add", e, e)), this;
}
function Pt(e, t) {
  t = g(t);
  const n = g(this), { has: s, get: o } = Ze(n);
  let i = s.call(n, e);
  i ? process.env.NODE_ENV !== "production" && dn(n, s, e) : (e = g(e), i = s.call(n, e));
  const l = o.call(n, e);
  return n.set(e, t), i ? ue(t, l) && J(n, "set", e, t, l) : J(n, "add", e, t), this;
}
function At(e) {
  const t = g(this), { has: n, get: s } = Ze(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && dn(t, n, e) : (e = g(e), o = n.call(t, e));
  const i = s ? s.call(t, e) : void 0, l = t.delete(e);
  return o && J(t, "delete", e, void 0, i), l;
}
function It() {
  const e = g(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Q(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && J(e, "clear", void 0, void 0, n), s;
}
function $e(e, t) {
  return function(s, o) {
    const i = this, l = i.__v_raw, r = g(l), a = t ? mt : e ? vt : yt;
    return !e && $(r, "iterate", te), l.forEach((p, C) => s.call(o, a(p), a(C), i));
  };
}
function Re(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = g(o), l = Q(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, p = o[e](...s), C = n ? mt : t ? vt : yt;
    return !t && $(
      i,
      "iterate",
      a ? it : te
    ), {
      // iterator protocol
      next() {
        const { value: c, done: _ } = p.next();
        return _ ? { value: c, done: _ } : {
          value: r ? [C(c[0]), C(c[1])] : C(c),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function k(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      pe(
        `${Kn(e)} operation ${n}failed: target is readonly.`,
        g(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ps() {
  const e = {
    get(i) {
      return Ne(this, i);
    },
    get size() {
      return Se(this);
    },
    has: Oe,
    add: Mt,
    set: Pt,
    delete: At,
    clear: It,
    forEach: $e(!1, !1)
  }, t = {
    get(i) {
      return Ne(this, i, !1, !0);
    },
    get size() {
      return Se(this);
    },
    has: Oe,
    add: Mt,
    set: Pt,
    delete: At,
    clear: It,
    forEach: $e(!1, !0)
  }, n = {
    get(i) {
      return Ne(this, i, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(i) {
      return Oe.call(this, i, !0);
    },
    add: k("add"),
    set: k("set"),
    delete: k("delete"),
    clear: k("clear"),
    forEach: $e(!0, !1)
  }, s = {
    get(i) {
      return Ne(this, i, !0, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(i) {
      return Oe.call(this, i, !0);
    },
    add: k("add"),
    set: k("set"),
    delete: k("delete"),
    clear: k("clear"),
    forEach: $e(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = Re(i, !1, !1), n[i] = Re(i, !0, !1), t[i] = Re(i, !1, !0), s[i] = Re(
      i,
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
  fs,
  hs,
  _s,
  ms
] = /* @__PURE__ */ ps();
function gt(e, t) {
  const n = t ? e ? ms : _s : e ? hs : fs;
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    E(n, o) && o in s ? n : s,
    o,
    i
  );
}
const gs = {
  get: /* @__PURE__ */ gt(!1, !1)
}, bs = {
  get: /* @__PURE__ */ gt(!0, !1)
}, ys = {
  get: /* @__PURE__ */ gt(!0, !0)
};
function dn(e, t, n) {
  const s = g(n);
  if (s !== n && t.call(e, s)) {
    const o = Qt(e);
    pe(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const cn = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap();
function ws(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ws(Qt(e));
}
function fn(e) {
  return fe(e) ? e : bt(
    e,
    !1,
    ds,
    gs,
    cn
  );
}
function hn(e) {
  return bt(
    e,
    !0,
    cs,
    bs,
    un
  );
}
function Te(e) {
  return bt(
    e,
    !0,
    us,
    ys,
    pn
  );
}
function bt(e, t, n, s, o) {
  if (!S(e))
    return process.env.NODE_ENV !== "production" && pe(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = Cs(e);
  if (l === 0)
    return e;
  const r = new Proxy(
    e,
    l === 2 ? s : n
  );
  return o.set(e, r), r;
}
function le(e) {
  return fe(e) ? le(e.__v_raw) : !!(e && e.__v_isReactive);
}
function fe(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function je(e) {
  return e ? !!e.__v_raw : !1;
}
function g(e) {
  const t = e && e.__v_raw;
  return t ? g(t) : e;
}
function xs(e) {
  return Object.isExtensible(e) && Wn(e, "__v_skip", !0), e;
}
const yt = (e) => S(e) ? fn(e) : e, vt = (e) => S(e) ? hn(e) : e;
function A(e) {
  return !!(e && e.__v_isRef === !0);
}
function u(e) {
  return A(e) ? e.value : e;
}
const Es = {
  get: (e, t, n) => u(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return A(o) && !A(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Vs(e) {
  return le(e) ? e : new Proxy(e, Es);
}
function _n(e) {
  process.env.NODE_ENV !== "production" && !je(e) && pe("toRefs() expects a reactive object but received a plain one.");
  const t = y(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Os(e, n);
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
    return os(g(this._object), this._key);
  }
}
function Os(e, t, n) {
  const s = e[t];
  return A(s) ? s : new Ns(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ne = [];
function Ss(e) {
  ne.push(e);
}
function $s() {
  ne.pop();
}
function w(e, ...t) {
  ke();
  const n = ne.length ? ne[ne.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Rs();
  if (s)
    se(
      s,
      n,
      11,
      [
        e + t.map((i) => {
          var l, r;
          return (r = (l = i.toString) == null ? void 0 : l.call(i)) != null ? r : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Pn(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...Ts(o)), console.warn(...i);
  }
  We();
}
function Rs() {
  let e = ne[ne.length - 1];
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
function Ts(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Us(n));
  }), t;
}
function Us({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Pn(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...Ds(e.props), i] : [o + i];
}
function Ds(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...mn(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function mn(e, t, n) {
  return P(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : A(t) ? (t = mn(e, g(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = g(t), n ? t : [`${e}=`, t]);
}
const gn = {
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
function se(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    wt(o, t, n);
  }
}
function Me(e, t, n, s) {
  if (N(e)) {
    const o = se(e, t, n, s);
    return o && zn(o) && o.catch((i) => {
      wt(i, t, n);
    }), o;
  }
  if (y(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Me(e[i], t, n, s));
    return o;
  } else
    process.env.NODE_ENV !== "production" && w(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function wt(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const l = t.proxy, r = process.env.NODE_ENV !== "production" ? gn[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let C = 0; C < p.length; C++)
          if (p[C](e, l, r) === !1)
            return;
      }
      i = i.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ke(), se(
        a,
        null,
        10,
        [e, l, r]
      ), We();
      return;
    }
  }
  Ms(e, n, o, s);
}
function Ms(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = gn[t];
    if (n && Ss(n), w(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && $s(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Fe = !1, rt = !1;
const j = [];
let Z = 0;
const de = [];
let K = null, W = 0;
const bn = /* @__PURE__ */ Promise.resolve();
let Ct = null;
const Ps = 100;
function As(e) {
  const t = Ct || bn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Is(e) {
  let t = Z + 1, n = j.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = j[s], i = xe(o);
    i < e || i === e && o.pre ? t = s + 1 : n = s;
  }
  return t;
}
function xt(e) {
  (!j.length || !j.includes(
    e,
    Fe && e.allowRecurse ? Z + 1 : Z
  )) && (e.id == null ? j.push(e) : j.splice(Is(e.id), 0, e), yn());
}
function yn() {
  !Fe && !rt && (rt = !0, Ct = bn.then(wn));
}
function vn(e) {
  y(e) ? de.push(...e) : (!K || !K.includes(
    e,
    e.allowRecurse ? W + 1 : W
  )) && de.push(e), yn();
}
function js(e) {
  if (de.length) {
    const t = [...new Set(de)].sort(
      (n, s) => xe(n) - xe(s)
    );
    if (de.length = 0, K) {
      K.push(...t);
      return;
    }
    for (K = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), W = 0; W < K.length; W++)
      process.env.NODE_ENV !== "production" && Cn(e, K[W]) || K[W]();
    K = null, W = 0;
  }
}
const xe = (e) => e.id == null ? 1 / 0 : e.id, Fs = (e, t) => {
  const n = xe(e) - xe(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function wn(e) {
  rt = !1, Fe = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), j.sort(Fs);
  const t = process.env.NODE_ENV !== "production" ? (n) => Cn(e, n) : re;
  try {
    for (Z = 0; Z < j.length; Z++) {
      const n = j[Z];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        se(n, null, 14);
      }
    }
  } finally {
    Z = 0, j.length = 0, js(e), Fe = !1, Ct = null, (j.length || de.length) && wn(e);
  }
}
function Cn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ps) {
      const s = t.ownerInstance, o = s && Mn(s.type);
      return wt(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const he = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (tn().__VUE_HMR_RUNTIME__ = {
  createRecord: et(Hs),
  rerender: et(Ls),
  reload: et(zs)
});
const He = /* @__PURE__ */ new Map();
function Hs(e, t) {
  return He.has(e) ? !1 : (He.set(e, {
    initialDef: ve(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ve(e) {
  return An(e) ? e.__vccOpts : e;
}
function Ls(e, t) {
  const n = He.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, ve(s.type).render = t), s.renderCache = [], s.effect.dirty = !0, s.update();
  }));
}
function zs(e, t) {
  const n = He.get(e);
  if (!n)
    return;
  t = ve(t), jt(n.initialDef, t);
  const s = [...n.instances];
  for (const o of s) {
    const i = ve(o.type);
    he.has(i) || (i !== n.initialDef && jt(i, t), he.add(i)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (he.add(i), o.ceReload(t.styles), he.delete(i)) : o.parent ? (o.parent.effect.dirty = !0, xt(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  vn(() => {
    for (const o of s)
      he.delete(
        ve(o.type)
      );
  });
}
function jt(e, t) {
  H(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function et(e) {
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
let q, ge = [], lt = !1;
function Bs(e, ...t) {
  q ? q.emit(e, ...t) : lt || ge.push({ event: e, args: t });
}
function xn(e, t) {
  var n, s;
  q = e, q ? (q.enabled = !0, ge.forEach(({ event: o, args: i }) => q.emit(o, ...i)), ge = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    xn(i, t);
  }), setTimeout(() => {
    q || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, lt = !0, ge = []);
  }, 3e3)) : (lt = !0, ge = []);
}
const Ks = /* @__PURE__ */ ks(
  "component:updated"
  /* COMPONENT_UPDATED */
);
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return (t) => {
    Bs(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
let V = null, qe = null;
function Ft(e) {
  const t = V;
  return V = e, qe = e && e.type.__scopeId || null, t;
}
function Et(e) {
  qe = e;
}
function Vt() {
  qe = null;
}
function D(e, t = V, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Wt(-1);
    const i = Ft(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Ft(i), s._d && Wt(1);
    }
    return process.env.NODE_ENV !== "production" && Ks(t), l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
const Ws = Symbol.for("v-ndc"), Zs = (e) => e.__isSuspense;
function qs(e, t) {
  t && t.pendingBranch ? y(e) ? t.effects.push(...e) : t.effects.push(e) : vn(e);
}
const Js = Symbol.for("v-scx"), Ys = () => {
  {
    const e = lo(Js);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Ue = {};
function Gs(e, t, {
  immediate: n,
  deep: s,
  flush: o,
  once: i,
  onTrack: l,
  onTrigger: r
} = I) {
  if (t && i) {
    const v = t;
    t = (...Xe) => {
      v(...Xe), Ge();
    };
  }
  process.env.NODE_ENV !== "production" && s !== void 0 && typeof s == "number" && w(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (v) => {
    w(
      "Invalid watch source: ",
      v,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = Je, C = (v) => s === !0 ? v : (
    // for deep: false, only traverse root-level properties
    X(v, s === !1 ? 1 : void 0)
  );
  let c, _ = !1, x = !1;
  if (A(e) ? (c = () => e.value, _ = ae(e)) : le(e) ? (c = () => C(e), _ = !0) : y(e) ? (x = !0, _ = e.some((v) => le(v) || ae(v)), c = () => e.map((v) => {
    if (A(v))
      return v.value;
    if (le(v))
      return C(v);
    if (N(v))
      return se(v, p, 2);
    process.env.NODE_ENV !== "production" && a(v);
  })) : N(e) ? t ? c = () => se(e, p, 2) : c = () => (O && O(), Me(
    e,
    p,
    3,
    [L]
  )) : (c = re, process.env.NODE_ENV !== "production" && a(e)), t && s) {
    const v = c;
    c = () => X(v());
  }
  let O, L = (v) => {
    O = U.onStop = () => {
      se(v, p, 4), O = U.onStop = void 0;
    };
  }, Ye;
  if (Un)
    if (L = re, t ? n && Me(t, p, 3, [
      c(),
      x ? [] : void 0,
      L
    ]) : c(), o === "sync") {
      const v = Ys();
      Ye = v.__watcherHandles || (v.__watcherHandles = []);
    } else
      return re;
  let Y = x ? new Array(e.length).fill(Ue) : Ue;
  const G = () => {
    if (!(!U.active || !U.dirty))
      if (t) {
        const v = U.run();
        (s || _ || (x ? v.some((Xe, In) => ue(Xe, Y[In])) : ue(v, Y))) && (O && O(), Me(t, p, 3, [
          v,
          // pass undefined as the old value when it's changed for the first time
          Y === Ue ? void 0 : x && Y[0] === Ue ? [] : Y,
          L
        ]), Y = v);
      } else
        U.run();
  };
  G.allowRecurse = !!t;
  let Ve;
  o === "sync" ? Ve = G : o === "post" ? Ve = () => kt(G, p && p.suspense) : (G.pre = !0, p && (G.id = p.uid), Ve = () => xt(G));
  const U = new Qn(c, re, Ve), Ge = () => {
    U.stop();
  };
  return process.env.NODE_ENV !== "production" && (U.onTrack = l, U.onTrigger = r), t ? n ? G() : Y = U.run() : o === "post" ? kt(
    U.run.bind(U),
    p && p.suspense
  ) : U.run(), Ye && Ye.push(Ge), Ge;
}
function Xs(e, t, n) {
  const s = this.proxy, o = P(e) ? e.includes(".") ? Qs(s, e) : () => s[e] : e.bind(s, s);
  let i;
  N(t) ? i = t : (i = t.handler, n = t);
  const l = mo(this), r = Gs(o, i.bind(s), n);
  return l(), r;
}
function Qs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function X(e, t = 1 / 0, n) {
  if (t <= 0 || !S(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, A(e))
    X(e.value, t, n);
  else if (y(e))
    for (let s = 0; s < e.length; s++)
      X(e[s], t, n);
  else if (Gt(e) || Q(e))
    e.forEach((s) => {
      X(s, t, n);
    });
  else if (en(e))
    for (const s in e)
      X(e[s], t, n);
  return e;
}
function f(e, t) {
  if (V === null)
    return process.env.NODE_ENV !== "production" && w("withDirectives can only be used inside render functions."), e;
  const n = Dn(V) || V.proxy, s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = I] = t[o];
    i && (N(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && X(l), s.push({
      dir: i,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: r,
      modifiers: a
    }));
  }
  return e;
}
const eo = (e) => !!e.type.__asyncLoader;
function z(e, t, n, s) {
  let o;
  const i = n;
  if (y(e) || P(e)) {
    o = new Array(e.length);
    for (let l = 0, r = e.length; l < r; l++)
      o[l] = t(e[l], l, void 0, i);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && w(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i);
  } else if (S(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, r) => t(l, r, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let r = 0, a = l.length; r < a; r++) {
        const p = l[r];
        o[r] = t(e[p], p, r, i);
      }
    }
  else
    o = [];
  return o;
}
function at(e, t, n = {}, s, o) {
  if (V.isCE || V.parent && eo(V.parent) && V.parent.isCE)
    return t !== "default" && (n.name = t), M("slot", n, s);
  let i = e[t];
  process.env.NODE_ENV !== "production" && i && i.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), m();
  const l = i && En(i(n)), r = On(
    T,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      l && l.key || `_${t}`
    },
    l || [],
    l && e._ === 1 ? 64 : -2
  );
  return !o && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]), i && i._c && (i._d = !0), r;
}
function En(e) {
  return e.some((t) => Sn(t) ? !(t.type === ze || t.type === T && !En(t.children)) : !0) ? e : null;
}
const dt = (e) => e ? go(e) ? Dn(e) || e.proxy : dt(e.parent) : null, we = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Te(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Te(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Te(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Te(e.refs) : e.refs,
    $parent: (e) => dt(e.parent),
    $root: (e) => dt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => so(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, xt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = As.bind(e.proxy)),
    $watch: (e) => Xs.bind(e)
  })
), to = (e) => e === "_" || e === "$", tt = (e, t) => e !== I && !e.__isScriptSetup && E(e, t), no = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: l, type: r, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const x = l[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (tt(s, t))
          return l[t] = 1, s[t];
        if (o !== I && E(o, t))
          return l[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && E(p, t)
        )
          return l[t] = 3, i[t];
        if (n !== I && E(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const C = we[t];
    let c, _;
    if (C)
      return t === "$attrs" ? ($(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && $(e, "get", t), C(e);
    if (
      // css module (injected by vue-loader)
      (c = r.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== I && E(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      _ = a.config.globalProperties, E(_, t)
    )
      return _[t];
    process.env.NODE_ENV !== "production" && V && (!P(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== I && to(t[0]) && E(o, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === V && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return tt(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && E(o, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== I && E(s, t) ? (s[t] = n, !0) : E(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i }
  }, l) {
    let r;
    return !!n[l] || e !== I && E(e, l) || tt(t, l) || (r = i[0]) && E(r, l) || E(s, l) || E(we, l) || E(o.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (no.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ht(e) {
  return y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function so(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (p) => Le(a, p, l, !0)
  ), Le(a, t, l)), S(t) && i.set(t, a), a;
}
function Le(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Le(e, i, n, !0), o && o.forEach(
    (l) => Le(e, l, n, !0)
  );
  for (const l in t)
    if (s && l === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const r = oo[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const oo = {
  data: Lt,
  props: Bt,
  emits: Bt,
  // objects
  methods: be,
  computed: be,
  // lifecycle
  beforeCreate: R,
  created: R,
  beforeMount: R,
  mounted: R,
  beforeUpdate: R,
  updated: R,
  beforeDestroy: R,
  beforeUnmount: R,
  destroyed: R,
  unmounted: R,
  activated: R,
  deactivated: R,
  errorCaptured: R,
  serverPrefetch: R,
  // assets
  components: be,
  directives: be,
  // watch
  watch: ro,
  // provide / inject
  provide: Lt,
  inject: io
};
function Lt(e, t) {
  return t ? e ? function() {
    return H(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function io(e, t) {
  return be(zt(e), zt(t));
}
function zt(e) {
  if (y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function R(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function be(e, t) {
  return e ? H(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bt(e, t) {
  return e ? y(e) && y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    Ht(e),
    Ht(t ?? {})
  ) : t;
}
function ro(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = R(e[s], t[s]);
  return n;
}
let Kt = null;
function lo(e, t, n = !1) {
  const s = Je || V;
  if (s || Kt) {
    const o = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Kt._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const ao = {}, Vn = (e) => Object.getPrototypeOf(e) === ao, kt = qs, co = (e) => e.__isTeleport, T = Symbol.for("v-fgt"), uo = Symbol.for("v-txt"), ze = Symbol.for("v-cmt"), Pe = [];
let F = null;
function m(e = !1) {
  Pe.push(F = e ? null : []);
}
function po() {
  Pe.pop(), F = Pe[Pe.length - 1] || null;
}
let Ee = 1;
function Wt(e) {
  Ee += e;
}
function Nn(e) {
  return e.dynamicChildren = Ee > 0 ? F || Fn : null, po(), Ee > 0 && F && F.push(e), e;
}
function b(e, t, n, s, o, i) {
  return Nn(
    d(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function On(e, t, n, s, o) {
  return Nn(
    M(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const fo = (...e) => Rn(
  ...e
), $n = ({ key: e }) => e ?? null, Ae = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? P(e) || A(e) || N(e) ? { i: V, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, o = null, i = e === T ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $n(t),
    ref: t && Ae(t),
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: V
  };
  return r ? (Nt(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= P(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && w("VNode created with invalid key (NaN). VNode type:", a.type), Ee > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  F && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && F.push(a), a;
}
const M = process.env.NODE_ENV !== "production" ? fo : Rn;
function Rn(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Ws) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = ze), Sn(e)) {
    const r = Be(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Nt(r, n), Ee > 0 && !i && F && (r.shapeFlag & 6 ? F[F.indexOf(e)] = r : F.push(r)), r.patchFlag |= -2, r;
  }
  if (An(e) && (e = e.__vccOpts), t) {
    t = ho(t);
    let { class: r, style: a } = t;
    r && !P(r) && (t.class = ft(r)), S(a) && (je(a) && !y(a) && (a = H({}, a)), t.style = pt(a));
  }
  const l = P(e) ? 1 : Zs(e) ? 128 : co(e) ? 64 : S(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && je(e) && (e = g(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), d(
    e,
    t,
    n,
    s,
    o,
    l,
    i,
    !0
  );
}
function ho(e) {
  return e ? je(e) || Vn(e) ? H({}, e) : e : null;
}
function Be(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, p = t ? _o(o || {}, t) : o, C = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && $n(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? y(i) ? i.concat(Ae(t)) : [i, Ae(t)] : Ae(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && y(r) ? r.map(Tn) : r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== T ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Be(e.ssContent),
    ssFallback: e.ssFallback && Be(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && (C.transition = a.clone(C)), C;
}
function Tn(e) {
  const t = Be(e);
  return y(e.children) && (t.children = e.children.map(Tn)), t;
}
function B(e = " ", t = 0) {
  return M(uo, null, e, t);
}
function ce(e = "", t = !1) {
  return t ? (m(), On(ze, null, e)) : M(ze, null, e);
}
function Nt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Nt(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Vn(t) ? t._ctx = V : o === 3 && V && (V.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: V }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [B(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _o(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ft([t.class, s.class]));
      else if (o === "style")
        t.style = pt([t.style, s.style]);
      else if (Hn(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(y(i) && i.includes(l)) && (t[o] = i ? [].concat(i, l) : l);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
let Je = null, ct;
{
  const e = tn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  ct = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Je = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Un = n
  );
}
const mo = (e) => {
  const t = Je;
  return ct(e), e.scope.on(), () => {
    e.scope.off(), ct(t);
  };
};
function go(e) {
  return e.vnode.shapeFlag & 4;
}
let Un = !1;
process.env.NODE_ENV;
function Dn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Vs(xs(e.exposed)), {
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
const bo = /(?:^|[-_])(\w)/g, yo = (e) => e.replace(bo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Mn(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let s = Mn(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (i) => {
      for (const l in i)
        if (i[l] === t)
          return l;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? yo(s) : n ? "App" : "Anonymous";
}
function An(e) {
  return N(e) && "__vccOpts" in e;
}
function vo() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    header(c) {
      return S(c) ? c.__isVue ? ["div", e, "VueInstance"] : A(c) ? [
        "div",
        {},
        ["span", e, C(c)],
        "<",
        r(c.value),
        ">"
      ] : le(c) ? [
        "div",
        {},
        ["span", e, ae(c) ? "ShallowReactive" : "Reactive"],
        "<",
        r(c),
        `>${fe(c) ? " (readonly)" : ""}`
      ] : fe(c) ? [
        "div",
        {},
        ["span", e, ae(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        r(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const _ = [];
    c.type.props && c.props && _.push(l("props", g(c.props))), c.setupState !== I && _.push(l("setup", c.setupState)), c.data !== I && _.push(l("data", g(c.data)));
    const x = a(c, "computed");
    x && _.push(l("computed", x));
    const O = a(c, "inject");
    return O && _.push(l("injected", O)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), _;
  }
  function l(c, _) {
    return _ = H({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((x) => [
          "div",
          {},
          ["span", s, x + ": "],
          r(_[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function r(c, _ = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : S(c) ? ["object", { object: _ ? g(c) : c }] : ["span", n, String(c)];
  }
  function a(c, _) {
    const x = c.type;
    if (N(x))
      return;
    const O = {};
    for (const L in c.ctx)
      p(x, L, _) && (O[L] = c.ctx[L]);
    return O;
  }
  function p(c, _, x) {
    const O = c[x];
    if (y(O) && O.includes(_) || S(O) && _ in O || c.extends && p(c.extends, _, x) || c.mixins && c.mixins.some((L) => p(L, _, x)))
      return !0;
  }
  function C(c) {
    return ae(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
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
function _e(e, t, n, s) {
  e.addEventListener(t, n, s);
}
const Zt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return y(t) ? (n) => kn(t, n) : t;
};
function wo(e) {
  e.target.composing = !0;
}
function qt(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const nt = Symbol("_assign"), h = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[nt] = Zt(o);
    const i = s || o.props && o.props.type === "number";
    _e(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let r = e.value;
      n && (r = r.trim()), i && (r = $t(r)), e[nt](r);
    }), n && _e(e, "change", () => {
      e.value = e.value.trim();
    }), t || (_e(e, "compositionstart", wo), _e(e, "compositionend", qt), _e(e, "change", qt));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: o } }, i) {
    if (e[nt] = Zt(i), e.composing)
      return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? $t(e.value) : e.value, r = t ?? "";
    l !== r && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === r) || (e.value = r));
  }
};
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Co() {
  vo();
}
process.env.NODE_ENV !== "production" && Co();
const Ot = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, xo = (e) => (Et("data-v-a7b24004"), e = e(), Vt(), e), Eo = {
  class: "ru-educational-background",
  style: { "margin-bottom": "1rem" }
}, Vo = { class: "ru-educational-background-title" }, No = { class: "ru-icon-bg" }, Oo = {
  class: "ru-educational-background-title-text",
  style: { display: "flex", "align-items": "center", "justify-content": "space-between" }
}, So = {
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
}, $o = /* @__PURE__ */ xo(() => /* @__PURE__ */ d(
  "path",
  {
    d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
    "p-id": "4266"
  },
  null,
  -1
  /* HOISTED */
)), Ro = [
  $o
], To = { style: { "margin-top": "1rem" } }, Uo = {
  __name: "BlockHeaderA",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("addItem");
    return (i, l) => (m(), b("div", Eo, [
      d("div", Vo, [
        d("div", No, [
          at(i.$slots, "icon", {}, void 0, !0)
        ]),
        d("div", Oo, [
          B(
            Ce(n.title) + " ",
            1
            /* TEXT */
          ),
          d("div", {
            style: { height: "2rem" },
            onClick: o
          }, [
            n.disabled ? ce("v-if", !0) : (m(), b("svg", So, Ro))
          ])
        ])
      ]),
      d("div", To, [
        at(i.$slots, "context", {}, void 0, !0)
      ])
    ]));
  }
}, De = /* @__PURE__ */ Ot(Uo, [["__scopeId", "data-v-a7b24004"]]), ie = (e) => (Et("data-v-da2d3371"), e = e(), Vt(), e), Do = {
  id: "ru-page",
  style: { "background-color": "rgb(207, 207, 207)" }
}, Mo = { id: "ru-left" }, Po = { id: "ru-avatar" }, Ao = ["src"], Io = { class: "ru-left-kw-box" }, jo = {
  key: 0,
  class: "ru-left-key"
}, Fo = ["onUpdate:modelValue"], Ho = { class: "ru-left-word" }, Lo = ["onUpdate:modelValue", "disabled"], zo = { id: "ru-right" }, Bo = { class: "ru-personage" }, Ko = /* @__PURE__ */ ie(() => /* @__PURE__ */ d(
  "div",
  { class: "ru-personage-title" },
  "个人简历",
  -1
  /* HOISTED */
)), ko = { class: "ru-personage-kws" }, Wo = ["disabled", "onUpdate:modelValue"], Zo = ["onUpdate:modelValue", "disabled"], qo = /* @__PURE__ */ ie(() => /* @__PURE__ */ d(
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
    /* @__PURE__ */ d("g", null, [
      /* @__PURE__ */ d("path", {
        d: "M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), Jo = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, Yo = { style: { display: "flex" } }, Go = ["onUpdate:modelValue", "disabled"], Xo = ["onUpdate:modelValue", "disabled"], Qo = ["onUpdate:modelValue", "disabled"], ei = ["onUpdate:modelValue", "disabled"], ti = { style: { transform: "translateX(0.2rem)" } }, ni = { style: { display: "flex" } }, si = /* @__PURE__ */ ie(() => /* @__PURE__ */ d(
  "div",
  { style: { width: "20%" } },
  "专业成绩：",
  -1
  /* HOISTED */
)), oi = ["onUpdate:modelValue", "disabled"], ii = { style: { display: "flex" } }, ri = /* @__PURE__ */ ie(() => /* @__PURE__ */ d(
  "div",
  { style: { width: "20%" } },
  "主修课程：",
  -1
  /* HOISTED */
)), li = ["onUpdate:modelValue", "disabled"], ai = /* @__PURE__ */ ie(() => /* @__PURE__ */ d(
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
    /* @__PURE__ */ d("g", null, [
      /* @__PURE__ */ d("path", {
        d: "M9.17157,1.17157C9.92172,0.421427,10.9391,0,12,0C12,0,17.3333,0,17.3333,0C18.3941,0,19.4116,0.421427,20.1617,1.17157C20.9119,1.92172,21.3333,2.93913,21.3333,4C21.3333,4,21.3333,5.33333,21.3333,5.33333C21.3333,5.33333,25.3333,5.33333,25.3333,5.33333C27.5425,5.33333,29.3333,7.1242,29.3333,9.33333C29.3333,9.33333,29.3333,22.6667,29.3333,22.6667C29.3333,24.8759,27.5425,26.6667,25.3333,26.6667C25.3333,26.6667,4,26.6667,4,26.6667C1.79087,26.6667,0,24.8759,0,22.6667C0,22.6667,0,9.33333,0,9.33333C0,7.1242,1.79087,5.33333,4,5.33333C4,5.33333,8,5.33333,8,5.33333C8,5.33333,8,4,8,4C8,2.93913,8.42143,1.92172,9.17157,1.17157C9.17157,1.17157,9.17157,1.17157,9.17157,1.17157ZM8,8C8,8,4,8,4,8C3.26363,8,2.66667,8.59696,2.66667,9.33333C2.66667,9.33333,2.66667,22.6667,2.66667,22.6667C2.66667,23.4031,3.26363,24,4,24C4,24,8,24,8,24C8,24,8,8,8,8C8,8,8,8,8,8ZM10.6667,24C10.6667,24,10.6667,8,10.6667,8C10.6667,8,18.6667,8,18.6667,8C18.6667,8,18.6667,24,18.6667,24C18.6667,24,10.6667,24,10.6667,24C10.6667,24,10.6667,24,10.6667,24ZM21.3333,24C21.3333,24,25.3333,24,25.3333,24C26.0697,24,26.6667,23.4031,26.6667,22.6667C26.6667,22.6667,26.6667,9.33333,26.6667,9.33333C26.6667,8.59695,26.0697,8,25.3333,8C25.3333,8,21.3333,8,21.3333,8C21.3333,8,21.3333,24,21.3333,24C21.3333,24,21.3333,24,21.3333,24ZM18.6667,5.33333C18.6667,5.33333,10.6667,5.33333,10.6667,5.33333C10.6667,5.33333,10.6667,4,10.6667,4C10.6667,3.64637,10.8071,3.30724,11.0572,3.05719C11.3072,2.80715,11.6464,2.66667,12,2.66667C12,2.66667,17.3333,2.66667,17.3333,2.66667C17.6869,2.66667,18.0261,2.80715,18.2761,3.05719C18.5261,3.30724,18.6667,3.64637,18.6667,4C18.6667,4,18.6667,5.33333,18.6667,5.33333C18.6667,5.33333,18.6667,5.33333,18.6667,5.33333Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), di = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, ci = { style: { display: "flex" } }, ui = ["onUpdate:modelValue", "disabled"], pi = ["onUpdate:modelValue", "disabled"], fi = ["onUpdate:modelValue", "disabled"], hi = ["onUpdate:modelValue", "disabled"], _i = ["onUpdate:modelValue", "disabled"], mi = /* @__PURE__ */ ie(() => /* @__PURE__ */ d(
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
    /* @__PURE__ */ d("g", null, [
      /* @__PURE__ */ d("path", {
        d: "M12,3C7.02943,3,3,7.02943,3,12C3,16.9706,7.02943,21,12,21C13.7458,21,15.3755,20.5029,16.7551,19.6427C16.8297,19.5837,16.9103,19.5315,16.9959,19.4872C19.4101,17.8731,21,15.1222,21,12C21,7.02943,16.9706,3,12,3C12,3,12,3,12,3ZM19.2924,21.5307C22.1544,19.3375,24,15.8843,24,12C24,5.37258,18.6274,0,12,0C5.37258,0,0,5.37258,0,12C0,15.885,1.84624,19.3389,4.70925,21.5321C4.70925,21.5321,3.01306,34.3024,3.01306,34.3024C2.93723,34.8735,3.19503,35.4375,3.67644,35.7537C4.15785,36.0699,4.77783,36.0826,5.27175,35.7863C5.27175,35.7863,12,31.7493,12,31.7493C12,31.7493,18.7283,35.7863,18.7283,35.7863C19.2222,36.0825,19.842,36.0699,20.3235,35.7537C20.8048,35.4375,21.0627,34.8736,20.9869,34.3027C20.9869,34.3027,19.2924,21.5307,19.2924,21.5307C19.2924,21.5307,19.2924,21.5307,19.2924,21.5307ZM16.4792,23.1362C15.0951,23.6934,13.5834,24,12,24C10.4172,24,8.90599,23.6936,7.52245,23.1368C7.52245,23.1368,6.39666,31.6126,6.39666,31.6126C6.39666,31.6126,11.2282,28.7137,11.2282,28.7137C11.7033,28.4287,12.2967,28.4287,12.7717,28.7137C12.7717,28.7137,17.6038,31.6129,17.6038,31.6129C17.6038,31.6129,16.4792,23.1362,16.4792,23.1362C16.4792,23.1362,16.4792,23.1362,16.4792,23.1362Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), gi = ["onUpdate:modelValue", "disabled"], bi = ["onUpdate:modelValue", "disabled"], yi = ["onUpdate:modelValue", "disabled"], vi = /* @__PURE__ */ ie(() => /* @__PURE__ */ d(
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
    /* @__PURE__ */ d("g", null, [
      /* @__PURE__ */ d("path", {
        d: "M10.8906,0.593733C11.1379,0.222801,11.5542,0,12,0C12,0,20,0,20,0C20.4459,0,20.8621,0.222801,21.1095,0.593733C21.1095,0.593733,23.3803,4,23.3803,4C23.3803,4,28,4,28,4C29.0609,4,30.0783,4.42143,30.8284,5.17157C31.5785,5.92172,32,6.93913,32,8C32,8,32,22.6667,32,22.6667C32,23.7276,31.5785,24.7449,30.8284,25.4951C30.0783,26.2452,29.0609,26.6667,28,26.6667C28,26.6667,4,26.6667,4,26.6667C2.93913,26.6667,1.92172,26.2452,1.17157,25.4951C0.421428,24.7449,0,23.7276,0,22.6667C0,22.6667,0,8,0,8C0,6.93913,0.421428,5.92172,1.17157,5.17157C1.92172,4.42143,2.93913,4,4,4C4,4,8.61976,4,8.61976,4C8.61976,4,10.8906,0.593733,10.8906,0.593733C10.8906,0.593733,10.8906,0.593733,10.8906,0.593733ZM12.7136,2.66667C12.7136,2.66667,10.4427,6.07293,10.4427,6.07293C10.1954,6.44387,9.77913,6.66667,9.33333,6.66667C9.33333,6.66667,4,6.66667,4,6.66667C3.64637,6.66667,3.30724,6.80715,3.05719,7.05719C2.80715,7.30724,2.66667,7.64637,2.66667,8C2.66667,8,2.66667,22.6667,2.66667,22.6667C2.66667,23.0203,2.80715,23.3595,3.05719,23.6095C3.30724,23.8595,3.64637,24,4,24C4,24,28,24,28,24C28.3536,24,28.6928,23.8595,28.9428,23.6095C29.1928,23.3595,29.3333,23.0203,29.3333,22.6667C29.3333,22.6667,29.3333,8,29.3333,8C29.3333,7.64637,29.1928,7.30724,28.9428,7.05719C28.6928,6.80715,28.3536,6.66667,28,6.66667C28,6.66667,22.6667,6.66667,22.6667,6.66667C22.2208,6.66667,21.8045,6.44387,21.5572,6.07293C21.5572,6.07293,19.2864,2.66667,19.2864,2.66667C19.2864,2.66667,12.7136,2.66667,12.7136,2.66667C12.7136,2.66667,12.7136,2.66667,12.7136,2.66667ZM16,10.6667C13.7908,10.6667,12,12.4575,12,14.6667C12,16.8759,13.7908,18.6667,16,18.6667C18.2092,18.6667,20,16.8759,20,14.6667C20,12.4575,18.2092,10.6667,16,10.6667C16,10.6667,16,10.6667,16,10.6667ZM9.33333,14.6667C9.33333,10.9848,12.3181,8,16,8C19.6819,8,22.6667,10.9848,22.6667,14.6667C22.6667,18.3485,19.6819,21.3333,16,21.3333C12.3181,21.3333,9.33333,18.3485,9.33333,14.6667C9.33333,14.6667,9.33333,14.6667,9.33333,14.6667Z",
        "fill-rule": "evenodd",
        fill: "#000000",
        "fill-opacity": "1"
      })
    ])
  ],
  -1
  /* HOISTED */
)), wi = ["disabled"], Ci = /* @__PURE__ */ Object.assign({
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
    const t = e, { data: n, disabled: s } = _n(t), o = (i) => {
      s && (n.value.disabled = !n.value.disabled);
    };
    return (i, l) => (m(), b("div", Do, [
      u(s) ? ce("v-if", !0) : (m(), b(
        "div",
        {
          key: 0,
          style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
          onClick: o
        },
        Ce(u(n).disabled == !0 ? "预览" : "编辑"),
        1
        /* TEXT */
      )),
      d("div", Mo, [
        d("div", Po, [
          d("img", {
            src: u(n).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Ao)
        ]),
        d("div", Io, [
          (m(!0), b(
            T,
            null,
            z(u(n).baseKw, (r, a) => (m(), b("div", {
              class: "ru-left-kw",
              key: a
            }, [
              u(n).disabled ? (m(), b(
                "div",
                jo,
                Ce(r[0]),
                1
                /* TEXT */
              )) : ce("v-if", !0),
              u(n).disabled ? ce("v-if", !0) : f((m(), b("input", {
                key: 1,
                type: "text",
                "onUpdate:modelValue": (p) => r[0] = p,
                style: { width: "4rem" }
              }, null, 8, Fo)), [
                [h, r[0]]
              ]),
              B(" :  "),
              d("div", Ho, [
                f(d("input", {
                  "onUpdate:modelValue": (p) => r[1] = p,
                  type: "text",
                  disabled: u(n).disabled
                }, null, 8, Lo), [
                  [h, r[1]]
                ])
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      d("div", zo, [
        d("div", Bo, [
          Ko,
          d("div", ko, [
            (m(!0), b(
              T,
              null,
              z(u(n).jobKw, (r, a) => (m(), b("div", {
                class: "ru-personage-item",
                key: a
              }, [
                f(d("input", {
                  type: "text",
                  disabled: u(n).disabled,
                  "onUpdate:modelValue": (p) => r[0] = p,
                  style: { width: "4rem" }
                }, null, 8, Wo), [
                  [h, r[0]]
                ]),
                B(" :  "),
                f(d("input", {
                  type: "text",
                  "onUpdate:modelValue": (p) => r[1] = p,
                  disabled: u(n).disabled
                }, null, 8, Zo), [
                  [h, r[1]]
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        M(De, {
          title: "教育背景",
          onAddItem: l[0] || (l[0] = (r) => u(n).educationalBackground.push({})),
          disabled: u(n).disabled
        }, {
          icon: D(() => [
            qo
          ]),
          context: D(() => [
            (m(!0), b(
              T,
              null,
              z(u(n).educationalBackground, (r) => (m(), b("div", null, [
                d("div", Jo, [
                  d("div", Yo, [
                    f(d("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (a) => r.starTime = a,
                      style: { width: "5rem" },
                      disabled: u(n).disabled
                    }, null, 8, Go), [
                      [h, r.starTime]
                    ]),
                    B(" - "),
                    f(d("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (a) => r.endTime = a,
                      style: { width: "5rem" },
                      disabled: u(n).disabled
                    }, null, 8, Xo), [
                      [h, r.endTime]
                    ])
                  ]),
                  d("div", null, [
                    f(d("input", {
                      type: "text",
                      placeholder: "就读大学",
                      "onUpdate:modelValue": (a) => r.collegiate = a,
                      style: { "text-align": "center" },
                      disabled: u(n).disabled
                    }, null, 8, Qo), [
                      [h, r.collegiate]
                    ])
                  ]),
                  d("div", null, [
                    f(d("input", {
                      type: "text",
                      placeholder: "就读专业",
                      "onUpdate:modelValue": (a) => r.profession = a,
                      style: { "text-align": "right" },
                      disabled: u(n).disabled
                    }, null, 8, ei), [
                      [h, r.profession]
                    ])
                  ])
                ]),
                d("div", ti, [
                  d("div", ni, [
                    si,
                    f(d("input", {
                      type: "text",
                      "onUpdate:modelValue": (a) => r.professionalAchievement = a,
                      placeholder: "请输入专业成绩",
                      disabled: u(n).disabled
                    }, null, 8, oi), [
                      [h, r.professionalAchievement]
                    ])
                  ]),
                  d("div", ii, [
                    ri,
                    f(d("input", {
                      type: "text",
                      "onUpdate:modelValue": (a) => r.majorCourse = a,
                      placeholder: "请输入主修课程",
                      disabled: u(n).disabled
                    }, null, 8, li), [
                      [h, r.majorCourse]
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
        M(De, {
          title: "工作经验",
          onAddItem: l[1] || (l[1] = (r) => u(n).workExperience.push({})),
          disabled: u(n).disabled
        }, {
          icon: D(() => [
            ai
          ]),
          context: D(() => [
            (m(!0), b(
              T,
              null,
              z(u(n).workExperience, (r) => (m(), b("div", null, [
                d("div", di, [
                  d("div", ci, [
                    f(d("input", {
                      type: "text",
                      placeholder: "开始时间",
                      "onUpdate:modelValue": (a) => r.starTime = a,
                      style: { width: "5rem" },
                      disabled: u(n).disabled
                    }, null, 8, ui), [
                      [h, r.starTime]
                    ]),
                    B(" - "),
                    f(d("input", {
                      type: "text",
                      placeholder: "结束时间",
                      "onUpdate:modelValue": (a) => r.endTime = a,
                      style: { width: "5rem" },
                      disabled: u(n).disabled
                    }, null, 8, pi), [
                      [h, r.endTime]
                    ])
                  ]),
                  d("div", null, [
                    f(d("input", {
                      type: "text",
                      placeholder: "工作单位",
                      "onUpdate:modelValue": (a) => r.workUnit = a,
                      style: { "text-align": "center" },
                      disabled: u(n).disabled
                    }, null, 8, fi), [
                      [h, r.workUnit]
                    ])
                  ]),
                  d("div", null, [
                    f(d("input", {
                      type: "text",
                      placeholder: "工作职位",
                      "onUpdate:modelValue": (a) => r.jobPosition = a,
                      style: { "text-align": "right" },
                      disabled: u(n).disabled
                    }, null, 8, hi), [
                      [h, r.jobPosition]
                    ])
                  ])
                ]),
                f(d("textarea", {
                  rows: "2",
                  "onUpdate:modelValue": (a) => r.context = a,
                  style: { width: "100%" },
                  disabled: u(n).disabled
                }, `\r
\r
          `, 8, _i), [
                  [h, r.context]
                ])
              ]))),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]),
        M(De, {
          title: "荣誉证书",
          onAddItem: l[2] || (l[2] = (r) => u(n).certificateOfHonor.push({})),
          disabled: u(n).disabled
        }, {
          icon: D(() => [
            mi
          ]),
          context: D(() => [
            (m(!0), b(
              T,
              null,
              z(u(n).certificateOfHonor, (r, a) => (m(), b("div", {
                style: { display: "flex" },
                key: a
              }, [
                f(d("input", {
                  type: "text",
                  placeholder: "证书名称",
                  "onUpdate:modelValue": (p) => r.certificateName = p,
                  disabled: u(n).disabled
                }, null, 8, gi), [
                  [h, r.certificateName]
                ]),
                f(d("input", {
                  type: "text",
                  placeholder: "获奖时间",
                  "onUpdate:modelValue": (p) => r.awardTime = p,
                  style: { "text-align": "center" },
                  disabled: u(n).disabled
                }, null, 8, bi), [
                  [h, r.awardTime]
                ]),
                f(d("input", {
                  type: "text",
                  placeholder: "颁发单位",
                  "onUpdate:modelValue": (p) => r.issuer = p,
                  style: { "text-align": "right" },
                  disabled: u(n).disabled
                }, null, 8, yi), [
                  [h, r.issuer]
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]),
        M(De, {
          title: "自我评价",
          disabled: u(n).disabled
        }, {
          icon: D(() => [
            vi
          ]),
          context: D(() => [
            f(d("textarea", {
              rows: "4",
              style: { width: "100%" },
              "onUpdate:modelValue": l[3] || (l[3] = (r) => u(n).selfEvaluation = r),
              disabled: u(n).disabled
            }, null, 8, wi), [
              [h, u(n).selfEvaluation]
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Jt = /* @__PURE__ */ Ot(Ci, [["__scopeId", "data-v-da2d3371"]]), xi = { style: { display: "flex", "align-items": "center", "justify-content": "space-between" } }, Ei = { style: { "font-size": "2rem", "border-bottom": "solid 4px #068359" } }, Vi = /* @__PURE__ */ d(
  "path",
  {
    d: "M512 1024C229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 794.741738 794.760389 1024 512 1024ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 754.368294 269.649625 950.859703 512 950.859703 754.350375 950.859703 950.841784 754.368294 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM548.570149 731.438811 475.429851 731.438811 475.429851 548.588068 292.579109 548.588068 292.579109 475.411201 475.429851 475.411201 475.429851 292.560457 548.570149 292.560457 548.570149 475.411201 731.420891 475.411201 731.420891 548.588068 548.570149 548.588068 548.570149 731.438811Z",
    fill: "#068359",
    "p-id": "4272"
  },
  null,
  -1
  /* HOISTED */
), Ni = [
  Vi
], Oi = /* @__PURE__ */ d(
  "div",
  { style: { "border-bottom": "solid 1px #068359", "margin-top": "4px" } },
  null,
  -1
  /* HOISTED */
), Si = { style: { "margin-top": "1rem" } }, me = {
  __name: "BlockHeaderB",
  props: ["title", "disabled"],
  emits: ["addItem"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("addItem");
    return (i, l) => (m(), b("div", null, [
      d("div", xi, [
        d(
          "span",
          Ei,
          Ce(n.title),
          1
          /* TEXT */
        ),
        n.disabled ? (m(), b("svg", {
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
        }, Ni)) : ce("v-if", !0)
      ]),
      Oi,
      d("div", Si, [
        at(i.$slots, "context")
      ])
    ]));
  }
}, St = (e) => (Et("data-v-6634ef0d"), e = e(), Vt(), e), $i = { style: { display: "flex", width: "100%", "background-color": "#ffffff", "flex-direction": "column", "align-items": "center", position: "relative" } }, Ri = /* @__PURE__ */ St(() => /* @__PURE__ */ d(
  "div",
  { style: { "background-color": "#068359", height: "4rem", width: "95%", margin: "1rem 0", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "2rem" } },
  " 个人简历 ",
  -1
  /* HOISTED */
)), Ti = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Ui = { style: { width: "80%", "padding-right": "2rem" } }, Di = { class: "ru-personage-kws" }, Mi = ["disabled", "onUpdate:modelValue"], Pi = ["onUpdate:modelValue", "disabled"], Ai = ["disabled", "onUpdate:modelValue"], Ii = ["onUpdate:modelValue", "disabled"], ji = { style: { width: "20%" } }, Fi = ["src"], Hi = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Li = { style: { width: "100%" } }, zi = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, Bi = { style: { display: "flex" } }, Ki = ["onUpdate:modelValue", "disabled"], ki = ["onUpdate:modelValue", "disabled"], Wi = ["onUpdate:modelValue", "disabled"], Zi = ["onUpdate:modelValue", "disabled"], qi = { style: { transform: "translateX(0.2rem)" } }, Ji = { style: { display: "flex" } }, Yi = /* @__PURE__ */ St(() => /* @__PURE__ */ d(
  "div",
  { style: { width: "10%" } },
  "专业成绩：",
  -1
  /* HOISTED */
)), Gi = ["onUpdate:modelValue", "disabled"], Xi = { style: { display: "flex" } }, Qi = /* @__PURE__ */ St(() => /* @__PURE__ */ d(
  "div",
  { style: { width: "10%" } },
  "主修课程：",
  -1
  /* HOISTED */
)), er = ["onUpdate:modelValue", "disabled"], tr = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, nr = { style: { width: "100%" } }, sr = { style: { display: "flex", "justify-content": "space-between", "margin-top": "1rem" } }, or = { style: { display: "flex" } }, ir = ["onUpdate:modelValue", "disabled"], rr = ["onUpdate:modelValue", "disabled"], lr = ["onUpdate:modelValue", "disabled"], ar = ["onUpdate:modelValue", "disabled"], dr = ["onUpdate:modelValue", "disabled"], cr = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, ur = { style: { width: "100%" } }, pr = ["onUpdate:modelValue", "disabled"], fr = ["onUpdate:modelValue", "disabled"], hr = ["onUpdate:modelValue", "disabled"], _r = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, mr = { style: { width: "100%" } }, gr = ["disabled"], br = /* @__PURE__ */ Object.assign({
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
    const t = e, { data: n, disabled: s } = _n(t), o = (i) => {
      s && (n.value.disabled = !n.value.disabled);
    };
    return (i, l) => (m(), b("div", $i, [
      u(s) ? ce("v-if", !0) : (m(), b(
        "div",
        {
          key: 0,
          style: { position: "absolute", "z-index": "2", right: "0.5rem", top: "0.5" },
          onClick: o
        },
        Ce(u(n).disabled == !0 ? "预览" : "编辑"),
        1
        /* TEXT */
      )),
      Ri,
      d("div", Ti, [
        d("div", Ui, [
          M(me, {
            title: "基本信息",
            onAddItem: l[0] || (l[0] = (r) => u(n).baseKw.push(["", ""])),
            disabled: u(n).disabled
          }, {
            context: D(() => [
              d("div", Di, [
                (m(!0), b(
                  T,
                  null,
                  z(u(n).jobKw, (r, a) => (m(), b("div", {
                    class: "ru-personage-item",
                    key: a
                  }, [
                    f(d("input", {
                      type: "text",
                      disabled: u(n).disabled,
                      "onUpdate:modelValue": (p) => r[0] = p,
                      style: { width: "4rem" }
                    }, null, 8, Mi), [
                      [h, r[0]]
                    ]),
                    B(" :  "),
                    f(d("input", {
                      type: "text",
                      "onUpdate:modelValue": (p) => r[1] = p,
                      disabled: u(n).disabled
                    }, null, 8, Pi), [
                      [h, r[1]]
                    ])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                (m(!0), b(
                  T,
                  null,
                  z(u(n).baseKw, (r, a) => (m(), b("div", {
                    class: "ru-personage-item",
                    key: a
                  }, [
                    f(d("input", {
                      type: "text",
                      disabled: u(n).disabled,
                      "onUpdate:modelValue": (p) => r[0] = p,
                      style: { width: "4rem" }
                    }, null, 8, Ai), [
                      [h, r[0]]
                    ]),
                    B(" :  "),
                    f(d("input", {
                      type: "text",
                      "onUpdate:modelValue": (p) => r[1] = p,
                      disabled: u(n).disabled
                    }, null, 8, Ii), [
                      [h, r[1]]
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
        d("div", ji, [
          d("img", {
            style: { width: "100%" },
            src: u(n).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Fi)
        ])
      ]),
      d("div", Hi, [
        d("div", Li, [
          M(me, {
            title: "教育背景",
            onAddItem: l[1] || (l[1] = (r) => u(n).educationalBackground.push({})),
            disabled: u(n).disabled
          }, {
            context: D(() => [
              (m(!0), b(
                T,
                null,
                z(u(n).educationalBackground, (r) => (m(), b("div", null, [
                  d("div", zi, [
                    d("div", Bi, [
                      f(d("input", {
                        type: "text",
                        placeholder: "开始时间",
                        "onUpdate:modelValue": (a) => r.starTime = a,
                        style: { width: "5rem" },
                        disabled: u(n).disabled
                      }, null, 8, Ki), [
                        [h, r.starTime]
                      ]),
                      B(" - "),
                      f(d("input", {
                        type: "text",
                        placeholder: "结束时间",
                        "onUpdate:modelValue": (a) => r.endTime = a,
                        style: { width: "5rem" },
                        disabled: u(n).disabled
                      }, null, 8, ki), [
                        [h, r.endTime]
                      ])
                    ]),
                    d("div", null, [
                      f(d("input", {
                        type: "text",
                        placeholder: "就读大学",
                        "onUpdate:modelValue": (a) => r.collegiate = a,
                        style: { "text-align": "center" },
                        disabled: u(n).disabled
                      }, null, 8, Wi), [
                        [h, r.collegiate]
                      ])
                    ]),
                    d("div", null, [
                      f(d("input", {
                        type: "text",
                        placeholder: "就读专业",
                        "onUpdate:modelValue": (a) => r.profession = a,
                        style: { "text-align": "right" },
                        disabled: u(n).disabled
                      }, null, 8, Zi), [
                        [h, r.profession]
                      ])
                    ])
                  ]),
                  d("div", qi, [
                    d("div", Ji, [
                      Yi,
                      f(d("input", {
                        type: "text",
                        style: { width: "90%" },
                        "onUpdate:modelValue": (a) => r.professionalAchievement = a,
                        placeholder: "请输入专业成绩",
                        disabled: u(n).disabled
                      }, null, 8, Gi), [
                        [h, r.professionalAchievement]
                      ])
                    ]),
                    d("div", Xi, [
                      Qi,
                      f(d("input", {
                        type: "text",
                        style: { width: "90%" },
                        "onUpdate:modelValue": (a) => r.majorCourse = a,
                        placeholder: "请输入主修课程",
                        disabled: u(n).disabled
                      }, null, 8, er), [
                        [h, r.majorCourse]
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
      d("div", tr, [
        d("div", nr, [
          M(me, {
            title: "工作经验",
            onAddItem: l[2] || (l[2] = (r) => u(n).workExperience.push({})),
            disabled: u(n).disabled
          }, {
            context: D(() => [
              (m(!0), b(
                T,
                null,
                z(u(n).workExperience, (r) => (m(), b("div", null, [
                  d("div", sr, [
                    d("div", or, [
                      f(d("input", {
                        type: "text",
                        placeholder: "开始时间",
                        "onUpdate:modelValue": (a) => r.starTime = a,
                        style: { width: "5rem" },
                        disabled: u(n).disabled
                      }, null, 8, ir), [
                        [h, r.starTime]
                      ]),
                      B(" - "),
                      f(d("input", {
                        type: "text",
                        placeholder: "结束时间",
                        "onUpdate:modelValue": (a) => r.endTime = a,
                        style: { width: "5rem" },
                        disabled: u(n).disabled
                      }, null, 8, rr), [
                        [h, r.endTime]
                      ])
                    ]),
                    d("div", null, [
                      f(d("input", {
                        type: "text",
                        placeholder: "工作单位",
                        "onUpdate:modelValue": (a) => r.workUnit = a,
                        style: { "text-align": "center" },
                        disabled: u(n).disabled
                      }, null, 8, lr), [
                        [h, r.workUnit]
                      ])
                    ]),
                    d("div", null, [
                      f(d("input", {
                        type: "text",
                        placeholder: "工作职位",
                        "onUpdate:modelValue": (a) => r.jobPosition = a,
                        style: { "text-align": "right" },
                        disabled: u(n).disabled
                      }, null, 8, ar), [
                        [h, r.jobPosition]
                      ])
                    ])
                  ]),
                  f(d("textarea", {
                    rows: "2",
                    "onUpdate:modelValue": (a) => r.context = a,
                    style: { width: "100%" },
                    disabled: u(n).disabled
                  }, `\r
\r
          `, 8, dr), [
                    [h, r.context]
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
      d("div", cr, [
        d("div", ur, [
          M(me, {
            title: "荣誉证书",
            onAddItem: l[3] || (l[3] = (r) => u(n).certificateOfHonor.push({})),
            disabled: u(n).disabled
          }, {
            context: D(() => [
              (m(!0), b(
                T,
                null,
                z(u(n).certificateOfHonor, (r, a) => (m(), b("div", {
                  style: { display: "flex", "justify-content": "space-between" },
                  key: a
                }, [
                  f(d("input", {
                    type: "text",
                    placeholder: "证书名称",
                    "onUpdate:modelValue": (p) => r.certificateName = p,
                    disabled: u(n).disabled
                  }, null, 8, pr), [
                    [h, r.certificateName]
                  ]),
                  f(d("input", {
                    type: "text",
                    placeholder: "获奖时间",
                    "onUpdate:modelValue": (p) => r.awardTime = p,
                    style: { "text-align": "center" },
                    disabled: u(n).disabled
                  }, null, 8, fr), [
                    [h, r.awardTime]
                  ]),
                  f(d("input", {
                    type: "text",
                    placeholder: "颁发单位",
                    "onUpdate:modelValue": (p) => r.issuer = p,
                    style: { "text-align": "right" },
                    disabled: u(n).disabled
                  }, null, 8, hr), [
                    [h, r.issuer]
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
      d("div", _r, [
        d("div", mr, [
          M(me, { title: "自我评价" }, {
            context: D(() => [
              f(d("textarea", {
                rows: "4",
                style: { width: "100%" },
                "onUpdate:modelValue": l[4] || (l[4] = (r) => u(n).selfEvaluation = r),
                disabled: u(n).disabled
              }, null, 8, gr), [
                [h, u(n).selfEvaluation]
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]));
  }
}), Yt = /* @__PURE__ */ Ot(br, [["__scopeId", "data-v-6634ef0d"]]), yr = {
  install: (e) => {
    e.component(Jt.name, Jt), e.component(Yt.name, Yt);
  }
};
export {
  yr as default
};
