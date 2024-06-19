/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kt(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const C = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, en = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], J = () => {
}, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), D = Object.assign, nn = Object.prototype.hasOwnProperty, E = (e, t) => nn.call(e, t), h = Array.isArray, Y = (e) => xe(e) === "[object Map]", rn = (e) => xe(e) === "[object Set]", N = (e) => typeof e == "function", R = (e) => typeof e == "string", ce = (e) => typeof e == "symbol", b = (e) => e !== null && typeof e == "object", sn = (e) => (b(e) || N(e)) && N(e.then) && N(e.catch), on = Object.prototype.toString, xe = (e) => on.call(e), Et = (e) => xe(e).slice(8, -1), cn = (e) => xe(e) === "[object Object]", ze = (e) => R(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, an = ln((e) => e.charAt(0).toUpperCase() + e.slice(1)), Z = (e, t) => !Object.is(e, t), un = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let nt;
const wt = () => nt || (nt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ue(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = R(r) ? hn(r) : Ue(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (R(e) || b(e))
    return e;
}
const fn = /;(?![^(]*\))/g, pn = /:([^]+)/, dn = /\/\*[^]*?\*\//g;
function hn(e) {
  const t = {};
  return e.replace(dn, "").split(fn).forEach((n) => {
    if (n) {
      const r = n.split(pn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function We(e) {
  let t = "";
  if (R(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const r = We(e[n]);
      r && (t += r + " ");
    }
  else if (b(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function k(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let _n;
function gn(e, t = _n) {
  t && t.active && t.effects.push(e);
}
let re;
class mn {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, gn(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ve();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (En(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Re();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = K, n = re;
    try {
      return K = !0, re = this, this._runnings++, rt(this), this.fn();
    } finally {
      st(this), this._runnings--, re = n, K = t;
    }
  }
  stop() {
    this.active && (rt(this), st(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function En(e) {
  return e.value;
}
function rt(e) {
  e._trackId++, e._depsLength = 0;
}
function st(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Nt(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Nt(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let K = !0, Ae = 0;
const vt = [];
function Ve() {
  vt.push(K), K = !1;
}
function Re() {
  const e = vt.pop();
  K = e === void 0 ? !0 : e;
}
function Be() {
  Ae++;
}
function Je() {
  for (Ae--; !Ae && je.length; )
    je.shift()();
}
function wn(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Nt(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, D({ effect: e }, n)));
  }
}
const je = [];
function Nn(e, t, n) {
  var r;
  Be();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((r = s.onTrigger) == null || r.call(s, D({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && je.push(s.scheduler)));
  }
  Je();
}
const vn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ne = /* @__PURE__ */ new WeakMap(), z = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Fe = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function v(e, t, n) {
  if (K && re) {
    let r = Ne.get(e);
    r || Ne.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = vn(() => r.delete(n))), wn(
      re,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function j(e, t, n, r, s, o) {
  const i = Ne.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(r);
    i.forEach((u, _) => {
      (_ === "length" || !ce(_) && _ >= a) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        h(e) ? ze(n) && l.push(i.get("length")) : (l.push(i.get(z)), Y(e) && l.push(i.get(Fe)));
        break;
      case "delete":
        h(e) || (l.push(i.get(z)), Y(e) && l.push(i.get(Fe)));
        break;
      case "set":
        Y(e) && l.push(i.get(z));
        break;
    }
  Be();
  for (const a of l)
    a && Nn(
      a,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: s,
        oldTarget: o
      } : void 0
    );
  Je();
}
function On(e, t) {
  const n = Ne.get(e);
  return n && n.get(t);
}
const bn = /* @__PURE__ */ kt("__proto__,__v_isRef,__isVue"), Ot = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ce)
), ot = /* @__PURE__ */ Sn();
function Sn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        v(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(p)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ve(), Be();
      const r = p(this)[t].apply(this, n);
      return Je(), Re(), r;
    };
  }), e;
}
function yn(e) {
  ce(e) || (e = String(e));
  const t = p(this);
  return v(t, "has", e), t.hasOwnProperty(e);
}
class bt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Rt : Vt : o ? Fn : xt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = h(t);
    if (!s) {
      if (i && E(ot, n))
        return Reflect.get(ot, n, r);
      if (n === "hasOwnProperty")
        return yn;
    }
    const l = Reflect.get(t, n, r);
    return (ce(n) ? Ot.has(n) : bn(n)) || (s || v(t, "get", n), o) ? l : y(l) ? i && ze(n) ? l : l.value : b(l) ? s ? It(l) : Dt(l) : l;
  }
}
class xn extends bt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = ee(o);
      if (!Q(r) && !ee(r) && (o = p(o), r = p(r)), !h(t) && y(o) && !y(r))
        return a ? !1 : (o.value = r, !0);
    }
    const i = h(t) && ze(n) ? Number(n) < t.length : E(t, n), l = Reflect.set(t, n, r, s);
    return t === p(s) && (i ? Z(r, o) && j(t, "set", n, r, o) : j(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = E(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && j(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ce(n) || !Ot.has(n)) && v(t, "has", n), r;
  }
  ownKeys(t) {
    return v(
      t,
      "iterate",
      h(t) ? "length" : z
    ), Reflect.ownKeys(t);
  }
}
class St extends bt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && k(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && k(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Vn = /* @__PURE__ */ new xn(), Rn = /* @__PURE__ */ new St(), Dn = /* @__PURE__ */ new St(!0), qe = (e) => e, De = (e) => Reflect.getPrototypeOf(e);
function ae(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = p(e), o = p(t);
  n || (Z(t, o) && v(s, "get", t), v(s, "get", o));
  const { has: i } = De(s), l = r ? qe : n ? Xe : Qe;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, o))
    return l(e.get(o));
  e !== s && e.get(t);
}
function ue(e, t = !1) {
  const n = this.__v_raw, r = p(n), s = p(e);
  return t || (Z(e, s) && v(r, "has", e), v(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function fe(e, t = !1) {
  return e = e.__v_raw, !t && v(p(e), "iterate", z), Reflect.get(e, "size", e);
}
function it(e) {
  e = p(e);
  const t = p(this);
  return De(t).has.call(t, e) || (t.add(e), j(t, "add", e, e)), this;
}
function ct(e, t) {
  t = p(t);
  const n = p(this), { has: r, get: s } = De(n);
  let o = r.call(n, e);
  o ? process.env.NODE_ENV !== "production" && yt(n, r, e) : (e = p(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? Z(t, i) && j(n, "set", e, t, i) : j(n, "add", e, t), this;
}
function lt(e) {
  const t = p(this), { has: n, get: r } = De(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && yt(t, n, e) : (e = p(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && j(t, "delete", e, void 0, o), i;
}
function at() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Y(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && j(e, "clear", void 0, void 0, n), r;
}
function pe(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, l = p(i), a = t ? qe : e ? Xe : Qe;
    return !e && v(l, "iterate", z), i.forEach((u, _) => r.call(s, a(u), a(_), o));
  };
}
function de(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = p(s), i = Y(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = s[e](...r), _ = n ? qe : t ? Xe : Qe;
    return !t && v(
      o,
      "iterate",
      a ? Fe : z
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = u.next();
        return f ? { value: c, done: f } : {
          value: l ? [_(c[0]), _(c[1])] : _(c),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      k(
        `${an(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function In() {
  const e = {
    get(o) {
      return ae(this, o);
    },
    get size() {
      return fe(this);
    },
    has: ue,
    add: it,
    set: ct,
    delete: lt,
    clear: at,
    forEach: pe(!1, !1)
  }, t = {
    get(o) {
      return ae(this, o, !1, !0);
    },
    get size() {
      return fe(this);
    },
    has: ue,
    add: it,
    set: ct,
    delete: lt,
    clear: at,
    forEach: pe(!1, !0)
  }, n = {
    get(o) {
      return ae(this, o, !0);
    },
    get size() {
      return fe(this, !0);
    },
    has(o) {
      return ue.call(this, o, !0);
    },
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: pe(!0, !1)
  }, r = {
    get(o) {
      return ae(this, o, !0, !0);
    },
    get size() {
      return fe(this, !0);
    },
    has(o) {
      return ue.call(this, o, !0);
    },
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: pe(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = de(o, !1, !1), n[o] = de(o, !0, !1), t[o] = de(o, !1, !0), r[o] = de(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Cn,
  Pn,
  Tn,
  $n
] = /* @__PURE__ */ In();
function Ye(e, t) {
  const n = t ? e ? $n : Tn : e ? Pn : Cn;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    E(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Mn = {
  get: /* @__PURE__ */ Ye(!1, !1)
}, An = {
  get: /* @__PURE__ */ Ye(!0, !1)
}, jn = {
  get: /* @__PURE__ */ Ye(!0, !0)
};
function yt(e, t, n) {
  const r = p(n);
  if (r !== n && t.call(e, r)) {
    const s = Et(e);
    k(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const xt = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap();
function Ln(e) {
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
function Hn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ln(Et(e));
}
function Dt(e) {
  return ee(e) ? e : Ge(
    e,
    !1,
    Vn,
    Mn,
    xt
  );
}
function It(e) {
  return Ge(
    e,
    !0,
    Rn,
    An,
    Vt
  );
}
function he(e) {
  return Ge(
    e,
    !0,
    Dn,
    jn,
    Rt
  );
}
function Ge(e, t, n, r, s) {
  if (!b(e))
    return process.env.NODE_ENV !== "production" && k(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Hn(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, l), l;
}
function G(e) {
  return ee(e) ? G(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ee(e) {
  return !!(e && e.__v_isReadonly);
}
function Q(e) {
  return !!(e && e.__v_isShallow);
}
function ve(e) {
  return e ? !!e.__v_raw : !1;
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Kn(e) {
  return Object.isExtensible(e) && un(e, "__v_skip", !0), e;
}
const Qe = (e) => b(e) ? Dt(e) : e, Xe = (e) => b(e) ? It(e) : e;
function y(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ct(e) {
  return y(e) ? e.value : e;
}
const zn = {
  get: (e, t, n) => Ct(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return y(s) && !y(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Un(e) {
  return G(e) ? e : new Proxy(e, zn);
}
function Wn(e) {
  process.env.NODE_ENV !== "production" && !ve(e) && k("toRefs() expects a reactive object but received a plain one.");
  const t = h(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Jn(e, n);
  return t;
}
class Bn {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return On(p(this._object), this._key);
  }
}
function Jn(e, t, n) {
  const r = e[t];
  return y(r) ? r : new Bn(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const U = [];
function qn(e) {
  U.push(e);
}
function Yn() {
  U.pop();
}
function g(e, ...t) {
  Ve();
  const n = U.length ? U[U.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Gn();
  if (r)
    W(
      r,
      n,
      11,
      [
        e + t.map((o) => {
          var i, l;
          return (l = (i = o.toString) == null ? void 0 : i.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${Qt(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Qn(s)), console.warn(...o);
  }
  Re();
}
function Gn() {
  let e = U[U.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Qn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Xn(n));
  }), t;
}
function Xn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${Qt(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Zn(e.props), o] : [s + o];
}
function Zn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Pt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Pt(e, t, n) {
  return R(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : y(t) ? (t = Pt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Tt = {
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
function W(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Ze(s, t, n);
  }
}
function me(e, t, n, r) {
  if (N(e)) {
    const s = W(e, t, n, r);
    return s && sn(s) && s.catch((o) => {
      Ze(o, t, n);
    }), s;
  }
  if (h(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(me(e[o], t, n, r));
    return s;
  } else
    process.env.NODE_ENV !== "production" && g(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Ze(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Tt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let _ = 0; _ < u.length; _++)
          if (u[_](e, i, l) === !1)
            return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Ve(), W(
        a,
        null,
        10,
        [e, i, l]
      ), Re();
      return;
    }
  }
  kn(e, n, s, r);
}
function kn(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Tt[t];
    if (n && qn(n), g(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Yn(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Oe = !1, Le = !1;
const x = [];
let A = 0;
const X = [];
let P = null, M = 0;
const $t = /* @__PURE__ */ Promise.resolve();
let ke = null;
const er = 100;
function tr(e) {
  const t = ke || $t;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nr(e) {
  let t = A + 1, n = x.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = x[r], o = ie(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function et(e) {
  (!x.length || !x.includes(
    e,
    Oe && e.allowRecurse ? A + 1 : A
  )) && (e.id == null ? x.push(e) : x.splice(nr(e.id), 0, e), Mt());
}
function Mt() {
  !Oe && !Le && (Le = !0, ke = $t.then(jt));
}
function At(e) {
  h(e) ? X.push(...e) : (!P || !P.includes(
    e,
    e.allowRecurse ? M + 1 : M
  )) && X.push(e), Mt();
}
function rr(e) {
  if (X.length) {
    const t = [...new Set(X)].sort(
      (n, r) => ie(n) - ie(r)
    );
    if (X.length = 0, P) {
      P.push(...t);
      return;
    }
    for (P = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), M = 0; M < P.length; M++)
      process.env.NODE_ENV !== "production" && Ft(e, P[M]) || P[M]();
    P = null, M = 0;
  }
}
const ie = (e) => e.id == null ? 1 / 0 : e.id, sr = (e, t) => {
  const n = ie(e) - ie(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function jt(e) {
  Le = !1, Oe = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), x.sort(sr);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ft(e, n) : J;
  try {
    for (A = 0; A < x.length; A++) {
      const n = x[A];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        W(n, null, 14);
      }
    }
  } finally {
    A = 0, x.length = 0, rr(e), Oe = !1, ke = null, (x.length || X.length) && jt(e);
  }
}
function Ft(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > er) {
      const r = t.ownerInstance, s = r && Gt(r.type);
      return Ze(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const te = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (wt().__VUE_HMR_RUNTIME__ = {
  createRecord: $e(or),
  rerender: $e(ir),
  reload: $e(cr)
});
const be = /* @__PURE__ */ new Map();
function or(e, t) {
  return be.has(e) ? !1 : (be.set(e, {
    initialDef: se(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function se(e) {
  return Xt(e) ? e.__vccOpts : e;
}
function ir(e, t) {
  const n = be.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, se(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function cr(e, t) {
  const n = be.get(e);
  if (!n)
    return;
  t = se(t), ut(n.initialDef, t);
  const r = [...n.instances];
  for (const s of r) {
    const o = se(s.type);
    te.has(o) || (o !== n.initialDef && ut(o, t), te.add(o)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (te.add(o), s.ceReload(t.styles), te.delete(o)) : s.parent ? (s.parent.effect.dirty = !0, et(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  At(() => {
    for (const s of r)
      te.delete(
        se(s.type)
      );
  });
}
function ut(e, t) {
  D(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function $e(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let B, _e = [];
function Lt(e, t) {
  var n, r;
  B = e, B ? (B.enabled = !0, _e.forEach(({ event: s, args: o }) => B.emit(s, ...o)), _e = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Lt(o, t);
  }), setTimeout(() => {
    B || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, _e = []);
  }, 3e3)) : _e = [];
}
let T = null, lr = null;
const ar = Symbol.for("v-ndc"), ur = (e) => e.__isSuspense;
function fr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : At(e);
}
const pr = Symbol.for("v-scx"), dr = () => {
  {
    const e = br(pr);
    return e || process.env.NODE_ENV !== "production" && g(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, ge = {};
function hr(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: l
} = C) {
  if (t && o) {
    const d = t;
    t = (...Te) => {
      d(...Te), Pe();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && g(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && g(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && g(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && g(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (d) => {
    g(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = Ie, _ = (d) => r === !0 ? d : (
    // for deep: false, only traverse root-level properties
    q(d, r === !1 ? 1 : void 0)
  );
  let c, f = !1, m = !1;
  if (y(e) ? (c = () => e.value, f = Q(e)) : G(e) ? (c = () => _(e), f = !0) : h(e) ? (m = !0, f = e.some((d) => G(d) || Q(d)), c = () => e.map((d) => {
    if (y(d))
      return d.value;
    if (G(d))
      return _(d);
    if (N(d))
      return W(d, u, 2);
    process.env.NODE_ENV !== "production" && a(d);
  })) : N(e) ? t ? c = () => W(e, u, 2) : c = () => (w && w(), me(
    e,
    u,
    3,
    [I]
  )) : (c = J, process.env.NODE_ENV !== "production" && a(e)), t && r) {
    const d = c;
    c = () => q(d());
  }
  let w, I = (d) => {
    w = S.onStop = () => {
      W(d, u, 4), w = S.onStop = void 0;
    };
  }, Ce;
  if (Yt)
    if (I = J, t ? n && me(t, u, 3, [
      c(),
      m ? [] : void 0,
      I
    ]) : c(), s === "sync") {
      const d = dr();
      Ce = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return J;
  let F = m ? new Array(e.length).fill(ge) : ge;
  const L = () => {
    if (!(!S.active || !S.dirty))
      if (t) {
        const d = S.run();
        (r || f || (m ? d.some((Te, Zt) => Z(Te, F[Zt])) : Z(d, F))) && (w && w(), me(t, u, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          F === ge ? void 0 : m && F[0] === ge ? [] : F,
          I
        ]), F = d);
      } else
        S.run();
  };
  L.allowRecurse = !!t;
  let le;
  s === "sync" ? le = L : s === "post" ? le = () => gt(L, u && u.suspense) : (L.pre = !0, u && (L.id = u.uid), le = () => et(L));
  const S = new mn(c, J, le), Pe = () => {
    S.stop();
  };
  return process.env.NODE_ENV !== "production" && (S.onTrack = i, S.onTrigger = l), t ? n ? L() : F = S.run() : s === "post" ? gt(
    S.run.bind(S),
    u && u.suspense
  ) : S.run(), Ce && Ce.push(Pe), Pe;
}
function _r(e, t, n) {
  const r = this.proxy, s = R(e) ? e.includes(".") ? gr(r, e) : () => r[e] : e.bind(r, r);
  let o;
  N(t) ? o = t : (o = t.handler, n = t);
  const i = Mr(this), l = hr(s, o.bind(r), n);
  return i(), l;
}
function gr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function q(e, t = 1 / 0, n) {
  if (t <= 0 || !b(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, y(e))
    q(e.value, t, n);
  else if (h(e))
    for (let r = 0; r < e.length; r++)
      q(e[r], t, n);
  else if (rn(e) || Y(e))
    e.forEach((r) => {
      q(r, t, n);
    });
  else if (cn(e))
    for (const r in e)
      q(e[r], t, n);
  return e;
}
const He = (e) => e ? Ar(e) ? jr(e) || e.proxy : He(e.parent) : null, oe = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ D(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? he(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? he(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? he(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? he(e.refs) : e.refs,
    $parent: (e) => He(e.parent),
    $root: (e) => He(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, et(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tr.bind(e.proxy)),
    $watch: (e) => _r.bind(e)
  })
), mr = (e) => e === "_" || e === "$", Me = (e, t) => e !== C && !e.__isScriptSetup && E(e, t), Er = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Me(r, t))
          return i[t] = 1, r[t];
        if (s !== C && E(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && E(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== C && E(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const _ = oe[t];
    let c, f;
    if (_)
      return t === "$attrs" ? (v(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && v(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== C && E(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = a.config.globalProperties, E(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && T && (!R(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== C && mr(t[0]) && E(s, t) ? g(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === T && g(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Me(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && E(s, t) ? (g(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== C && E(r, t) ? (r[t] = n, !0) : E(e.props, t) ? (process.env.NODE_ENV !== "production" && g(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && g(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== C && E(e, i) || Me(t, i) || (l = o[0]) && E(l, i) || E(r, i) || E(oe, i) || E(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Er.ownKeys = (e) => (g(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ft(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function wr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(
    (u) => Se(a, u, i, !0)
  ), Se(a, t, i)), b(t) && o.set(t, a), a;
}
function Se(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Se(e, o, n, !0), s && s.forEach(
    (i) => Se(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && g(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Nr[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Nr = {
  data: pt,
  props: ht,
  emits: ht,
  // objects
  methods: ne,
  computed: ne,
  // lifecycle
  beforeCreate: O,
  created: O,
  beforeMount: O,
  mounted: O,
  beforeUpdate: O,
  updated: O,
  beforeDestroy: O,
  beforeUnmount: O,
  destroyed: O,
  unmounted: O,
  activated: O,
  deactivated: O,
  errorCaptured: O,
  serverPrefetch: O,
  // assets
  components: ne,
  directives: ne,
  // watch
  watch: Or,
  // provide / inject
  provide: pt,
  inject: vr
};
function pt(e, t) {
  return t ? e ? function() {
    return D(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vr(e, t) {
  return ne(dt(e), dt(t));
}
function dt(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function O(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ne(e, t) {
  return e ? D(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ht(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : D(
    /* @__PURE__ */ Object.create(null),
    ft(e),
    ft(t ?? {})
  ) : t;
}
function Or(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = D(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = O(e[r], t[r]);
  return n;
}
let _t = null;
function br(e, t, n = !1) {
  const r = Ie || T;
  if (r || _t) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : _t._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && g(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && g("inject() can only be used inside setup() or functional components.");
}
const Sr = {}, Ht = (e) => Object.getPrototypeOf(e) === Sr, gt = fr, yr = (e) => e.__isTeleport, Kt = Symbol.for("v-fgt"), xr = Symbol.for("v-txt"), Vr = Symbol.for("v-cmt"), Ee = [];
let V = null;
function zt(e = !1) {
  Ee.push(V = e ? null : []);
}
function Rr() {
  Ee.pop(), V = Ee[Ee.length - 1] || null;
}
function Dr(e) {
  return e.dynamicChildren = V || en, Rr(), V && V.push(e), e;
}
function Ut(e, t, n, r, s, o) {
  return Dr(
    H(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Cr = (...e) => Jt(
  ...e
), Wt = ({ key: e }) => e ?? null, we = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? R(e) || y(e) || N(e) ? { i: T, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, r = 0, s = null, o = e === Kt ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wt(t),
    ref: t && we(t),
    scopeId: lr,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: T
  };
  return l ? (tt(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= R(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && g("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  V && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && V.push(a), a;
}
const Bt = process.env.NODE_ENV !== "production" ? Cr : Jt;
function Jt(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === ar) && (process.env.NODE_ENV !== "production" && !e && g(`Invalid vnode type when creating vnode: ${e}.`), e = Vr), Ir(e)) {
    const l = ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && tt(l, n), !o && V && (l.shapeFlag & 6 ? V[V.indexOf(e)] = l : V.push(l)), l.patchFlag |= -2, l;
  }
  if (Xt(e) && (e = e.__vccOpts), t) {
    t = Pr(t);
    let { class: l, style: a } = t;
    l && !R(l) && (t.class = We(l)), b(a) && (ve(a) && !h(a) && (a = D({}, a)), t.style = Ue(a));
  }
  const i = R(e) ? 1 : ur(e) ? 128 : yr(e) ? 64 : b(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ve(e) && (e = p(e), g(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), H(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function Pr(e) {
  return e ? ve(e) || Ht(e) ? D({}, e) : e : null;
}
function ye(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: l, transition: a } = e, u = t ? $r(s || {}, t) : s, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Wt(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? h(o) ? o.concat(we(t)) : [o, we(t)] : we(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && h(l) ? l.map(qt) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Kt ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && ye(e.ssContent),
    ssFallback: e.ssFallback && ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && (_.transition = a.clone(_)), _;
}
function qt(e) {
  const t = ye(e);
  return h(e.children) && (t.children = e.children.map(qt)), t;
}
function Tr(e = " ", t = 0) {
  return Bt(xr, null, e, t);
}
function tt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), tt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ht(t) ? t._ctx = T : s === 3 && T && (T.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: T }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Tr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $r(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = We([t.class, r.class]));
      else if (s === "style")
        t.style = Ue([t.style, r.style]);
      else if (tn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(h(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
let Ie = null, Ke;
{
  const e = wt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Ke = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ie = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Yt = n
  );
}
const Mr = (e) => {
  const t = Ie;
  return Ke(e), e.scope.on(), () => {
    e.scope.off(), Ke(t);
  };
};
function Ar(e) {
  return e.vnode.shapeFlag & 4;
}
let Yt = !1;
process.env.NODE_ENV;
function jr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Un(Kn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in oe)
          return oe[n](e);
      },
      has(t, n) {
        return n in t || n in oe;
      }
    }));
}
const Fr = /(?:^|[-_])(\w)/g, Lr = (e) => e.replace(Fr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gt(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qt(e, t, n = !1) {
  let r = Gt(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Lr(r) : n ? "App" : "Anonymous";
}
function Xt(e) {
  return N(e) && "__vccOpts" in e;
}
function Hr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    header(c) {
      return b(c) ? c.__isVue ? ["div", e, "VueInstance"] : y(c) ? [
        "div",
        {},
        ["span", e, _(c)],
        "<",
        l(c.value),
        ">"
      ] : G(c) ? [
        "div",
        {},
        ["span", e, Q(c) ? "ShallowReactive" : "Reactive"],
        "<",
        l(c),
        `>${ee(c) ? " (readonly)" : ""}`
      ] : ee(c) ? [
        "div",
        {},
        ["span", e, Q(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(c),
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
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const f = [];
    c.type.props && c.props && f.push(i("props", p(c.props))), c.setupState !== C && f.push(i("setup", c.setupState)), c.data !== C && f.push(i("data", p(c.data)));
    const m = a(c, "computed");
    m && f.push(i("computed", m));
    const w = a(c, "inject");
    return w && f.push(i("injected", w)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), f;
  }
  function i(c, f) {
    return f = D({}, f), Object.keys(f).length ? [
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
        ...Object.keys(f).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          l(f[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, f = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : b(c) ? ["object", { object: f ? p(c) : c }] : ["span", n, String(c)];
  }
  function a(c, f) {
    const m = c.type;
    if (N(m))
      return;
    const w = {};
    for (const I in c.ctx)
      u(m, I, f) && (w[I] = c.ctx[I]);
    return w;
  }
  function u(c, f, m) {
    const w = c[m];
    if (h(w) && w.includes(f) || b(w) && f in w || c.extends && u(c.extends, f, m) || c.mixins && c.mixins.some((I) => u(I, f, m)))
      return !0;
  }
  function _(c) {
    return Q(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Kr() {
  Hr();
}
process.env.NODE_ENV !== "production" && Kr();
const zr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Ur = {};
function Wr(e, t) {
  return zt(), Ut("div", null, " 基本信息 ");
}
const Br = /* @__PURE__ */ zr(Ur, [["render", Wr]]), Jr = { style: { display: "flex", width: "100%", "background-color": "#ffffff", "flex-direction": "column", "align-items": "center" } }, qr = /* @__PURE__ */ H(
  "div",
  { style: { "background-color": "#068359", height: "4rem", width: "95%", margin: "1rem 0", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "2rem" } },
  " 个人简历 ",
  -1
  /* HOISTED */
), Yr = { style: { width: "95%", margin: "1rem 0", display: "flex" } }, Gr = { style: { width: "80%" } }, Qr = { style: { width: "20%" } }, Xr = ["src"], mt = /* @__PURE__ */ Object.assign({
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
    const t = e, { data: n, disabled: r } = Wn(t);
    return (s, o) => (zt(), Ut("div", Jr, [
      qr,
      H("div", Yr, [
        H("div", Gr, [
          Bt(Br)
        ]),
        H("div", Qr, [
          H("img", {
            style: { width: "100%" },
            src: Ct(n).avatar,
            alt: "",
            srcset: ""
          }, null, 8, Xr)
        ])
      ])
    ]));
  }
}), Zr = {
  install: (e) => {
    e.component(mt.name, mt);
  }
};
export {
  Zr as default
};
