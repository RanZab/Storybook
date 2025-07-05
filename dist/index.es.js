import Oe from "react";
const s = {
  // Primary colors - Brand colors for WSC Sports
  primary: {
    100: "#F1FF6C",
    // Light yellow
    300: "#E5FF00",
    // Base yellow (main brand color)
    500: "#B9D300",
    // Yellow-green
    700: "#3F3F2B",
    // Dark green
    900: "#333333"
    // Dark gray
  },
  // Neutral colors - Foundation grays
  neutral: {
    0: "#FFFFFF",
    // Pure white
    100: "#F0F0F0",
    // Very light gray
    200: "#BABABA",
    // Light gray
    300: "#8E8E8E",
    // Medium gray
    400: "#616161",
    // Darker gray
    500: "#404040",
    // Dark gray
    600: "#333333",
    // Darker gray
    700: "#282828",
    // Very dark gray
    800: "#181818",
    // Almost black
    900: "#010101"
    // Pure black
  },
  // Alert colors - Error states
  alert: {
    100: "#FF5368",
    // Light red
    300: "#FF364E",
    // Medium red
    500: "#AF001B",
    // Dark red
    700: "#500009"
    // Very dark red
  },
  // Warning colors - Caution states
  warning: {
    100: "#FFCE66",
    // Light orange
    300: "#FFAE00",
    // Orange
    500: "#B27A00",
    // Dark orange
    700: "#805700"
    // Very dark orange
  },
  // Success colors - Positive states
  success: {
    100: "#00E5A0",
    // Light green
    300: "#00B27C",
    // Green
    500: "#007F58",
    // Dark green
    700: "#006547"
    // Very dark green
  },
  // Semantic aliases for easier usage
  background: {
    primary: "#010101",
    // Main background
    secondary: "#282828",
    // Secondary background
    surface: "#333333"
    // Surface elements
  },
  text: {
    primary: "rgba(255, 255, 255, 0.92)",
    // Main text
    secondary: "#F0F0F0",
    // Secondary text
    accent: "#E5FF00",
    // Accent text
    muted: "#8E8E8E"
    // Muted text
  },
  border: {
    primary: "#333333",
    // Primary borders
    secondary: "#282828",
    // Secondary borders
    accent: "#E5FF00"
    // Accent borders
  }
}, yr = (m) => {
  const g = m.split(".");
  let p = s;
  for (const d of g)
    if (p = p[d], p === void 0) return;
  return p;
}, W = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "40px"
}, H = {
  none: "0px",
  sm: "4px",
  md: "8px",
  full: "9999px"
  // "All the way radius" from Figma
}, mr = {
  // Font families from Figma
  fontFamily: {
    primary: ["Inter", "system-ui", "sans-serif"],
    // Main font
    heading: ["Sora", "system-ui", "sans-serif"],
    // Heading font
    mono: ["Monaco", "Consolas", "monospace"]
  },
  // Font sizes from Figma
  fontSize: {
    bodyS: "16px",
    // Body M (16px) from Figma
    bodyL: "20px",
    // Body XL (20px) from Figma
    h3: "24px",
    // H3 (24px) from Figma
    h1: "72px"
    // Main heading from Figma
  },
  // Font weights from Figma
  fontWeight: {
    regular: 400,
    bold: 700,
    // Used throughout Figma design
    semibold: 600
    // Used for main heading (Sora)
  },
  // Line heights from Figma
  lineHeight: {
    normal: 1.4,
    // Main line height used in Figma
    heading: 1.25
    // 90px/72px = 1.25 for main heading
  },
  // Letter spacing from Figma
  letterSpacing: {
    normal: "0",
    tight: "-0.4px"
    // tracking-[-0.4px] from Figma
  }
};
var re = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function vr() {
  if (we) return z;
  we = 1;
  var m = Oe, g = Symbol.for("react.element"), p = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, v = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(_, x, O) {
    var F, j = {}, C = null, L = null;
    O !== void 0 && (C = "" + O), x.key !== void 0 && (C = "" + x.key), x.ref !== void 0 && (L = x.ref);
    for (F in x) d.call(x, F) && !R.hasOwnProperty(F) && (j[F] = x[F]);
    if (_ && _.defaultProps) for (F in x = _.defaultProps, x) j[F] === void 0 && (j[F] = x[F]);
    return { $$typeof: g, type: _, key: C, ref: L, props: j, _owner: v.current };
  }
  return z.Fragment = p, z.jsx = D, z.jsxs = D, z;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function gr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var m = Oe, g = Symbol.for("react.element"), p = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), _ = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), te = Symbol.iterator, ke = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var k = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var a = k.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var We = !1, De = !1, Be = !1, Ie = !1, ze = !1, ne;
    ne = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === R || ze || e === v || e === O || e === F || Ie || e === L || We || De || Be || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === j || e.$$typeof === D || e.$$typeof === _ || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case p:
          return "Portal";
        case R:
          return "Profiler";
        case v:
          return "StrictMode";
        case O:
          return "Suspense";
        case F:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ae(r) + ".Consumer";
          case D:
            var t = e;
            return ae(t._context) + ".Provider";
          case x:
            return Ye(e, e.render, "ForwardRef");
          case j:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case C: {
            var l = e, c = l._payload, i = l._init;
            try {
              return S(i(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, B = 0, oe, ie, le, se, ce, ue, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Le() {
      {
        if (B === 0) {
          oe = console.log, ie = console.info, le = console.warn, se = console.error, ce = console.group, ue = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function Ve() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: oe
            }),
            info: w({}, e, {
              value: ie
            }),
            warn: w({}, e, {
              value: le
            }),
            error: w({}, e, {
              value: se
            }),
            group: w({}, e, {
              value: ce
            }),
            groupCollapsed: w({}, e, {
              value: ue
            }),
            groupEnd: w({}, e, {
              value: fe
            })
          });
        }
        B < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, q;
    function V(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, M;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Me();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      G = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = J.current, J.current = null, Le();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              a = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              a = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            a = b;
          }
          e();
        }
      } catch (b) {
        if (b && a && typeof b.stack == "string") {
          for (var o = b.stack.split(`
`), y = a.stack.split(`
`), u = o.length - 1, f = y.length - 1; u >= 1 && f >= 0 && o[u] !== y[f]; )
            f--;
          for (; u >= 1 && f >= 0; u--, f--)
            if (o[u] !== y[f]) {
              if (u !== 1 || f !== 1)
                do
                  if (u--, f--, f < 0 || o[u] !== y[f]) {
                    var E = `
` + o[u].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, E), E;
                  }
                while (u >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = c, Ve(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", T = A ? V(A) : "";
      return typeof e == "function" && M.set(e, T), T;
    }
    function Ue(e, r, t) {
      return pe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ne(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case O:
          return V("Suspense");
        case F:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            return Ue(e.render);
          case j:
            return U(e.type, r, t);
          case C: {
            var a = e, l = a._payload, c = a._init;
            try {
              return U(c(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, ge = k.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function He(e, r, t, a, l) {
      {
        var c = Function.call.bind(I);
        for (var i in e)
          if (c(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              o = u;
            }
            o && !(o instanceof Error) && (N(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), N(null)), o instanceof Error && !(o.message in ve) && (ve[o.message] = !0, N(l), h("Failed %s type: %s", t, o.message), N(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), xe(e);
    }
    var ye = k.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, be;
    function Xe(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && ye.current;
    }
    function er(e, r) {
      {
        var t = function() {
          me || (me = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          be || (be = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, l, c, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, a, l) {
      {
        var c, i = {}, o = null, y = null;
        t !== void 0 && (he(t), o = "" + t), Ze(r) && (he(r.key), o = "" + r.key), Xe(r) && (y = r.ref, Qe(r, l));
        for (c in r)
          I.call(r, c) && !Ke.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (c in u)
            i[c] === void 0 && (i[c] = u[c]);
        }
        if (o || y) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(i, f), y && rr(i, f);
        }
        return tr(e, o, y, l, a, ye.current, i);
      }
    }
    var X = k.ReactCurrentOwner, Fe = k.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Ee() {
      {
        if (X.current) {
          var e = S(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var je = {};
    function or(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (je[t])
          return;
        je[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + S(e._owner.type) + "."), P(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), P(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Q(a) && Re(a, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = Pe(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), i; !(i = c.next()).done; )
              Q(i.value) && Re(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          He(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var l = S(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            P(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var _e = {};
    function Ce(e, r, t, a, l, c) {
      {
        var i = $e(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ar();
          y ? o += y : o += Ee();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === g ? (u = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, o);
        }
        var f = nr(e, r, t, l, c);
        if (f == null)
          return f;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (a)
              if (K(E)) {
                for (var A = 0; A < E.length; A++)
                  Se(E[A], e);
                Object.freeze && Object.freeze(E);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(E, e);
        }
        if (I.call(r, "key")) {
          var T = S(e), b = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ee = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_e[T + ee]) {
            var dr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, T, dr, T), _e[T + ee] = !0;
          }
        }
        return e === d ? lr(f) : ir(f), f;
      }
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = cr, fr = sr;
    $.Fragment = d, $.jsx = ur, $.jsxs = fr;
  }()), $;
}
process.env.NODE_ENV === "production" ? re.exports = vr() : re.exports = gr();
var n = re.exports;
const br = ({
  showSpacing: m = !0,
  showRadius: g = !0
}) => {
  const p = [
    { label: "4px", value: W.xs },
    { label: "8px", value: W.sm },
    { label: "16px", value: W.md },
    { label: "24px", value: W.lg },
    { label: "32px", value: W.xl },
    { label: "40px", value: W.xxl }
  ], d = [
    { label: "0 px", value: H.none, style: { borderRadius: "0px" } },
    { label: "4 px", value: H.sm, style: { borderRadius: "4px" } },
    { label: "8 px", value: H.md, style: { borderRadius: "8px" } },
    { label: "All the way radius", value: H.full, style: { borderRadius: "32px" } }
  ];
  return /* @__PURE__ */ n.jsxs("div", { style: {
    backgroundColor: "#010101",
    padding: "80px",
    fontFamily: "Inter, system-ui, sans-serif",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ n.jsxs("div", { style: { marginBottom: "68px" }, children: [
      /* @__PURE__ */ n.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "48px"
      }, children: [
        /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ n.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Foundations" }),
          /* @__PURE__ */ n.jsx("span", { style: { color: "#F0F0F0", fontSize: "20px" }, children: "›" }),
          /* @__PURE__ */ n.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Grid & Spacing" })
        ] }),
        /* @__PURE__ */ n.jsx("span", { style: {
          color: "#F0F0F0",
          fontSize: "20px",
          fontWeight: 700,
          textDecoration: "underline"
        }, children: "StoryBook Link" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { style: { maxWidth: "1620px" }, children: [
        /* @__PURE__ */ n.jsx("h1", { style: {
          fontFamily: "Sora, system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "72px",
          lineHeight: "90px",
          color: "#E5FF00",
          margin: "0 0 48px 0",
          width: "900px"
        }, children: "Grid & Spacing" }),
        /* @__PURE__ */ n.jsx("p", { style: {
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: 1.4,
          color: "#F0F0F0",
          letterSpacing: "-0.4px",
          margin: 0,
          width: "780px"
        }, children: "Layout grids establish structure, hierarchy, and alignment across the interface. Consistent spacing reinforces visual rhythm and clarity, enhancing readability and creating balanced, well-organized designs." })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", gap: "200px" }, children: [
      m && /* @__PURE__ */ n.jsxs("div", { style: { width: "354px" }, children: [
        /* @__PURE__ */ n.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.92)",
          marginBottom: "24px",
          margin: "0 0 24px 0"
        }, children: "Spacers" }),
        /* @__PURE__ */ n.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: p.map((v, R) => /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("div", { style: {
            backgroundColor: "#3F3F2B",
            height: v.value,
            width: "100%",
            marginBottom: "8px"
          } }),
          /* @__PURE__ */ n.jsx("span", { style: {
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.92)"
          }, children: v.label })
        ] }, R)) })
      ] }),
      g && /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.92)",
          marginBottom: "24px",
          margin: "0 0 24px 0"
        }, children: "Radius" }),
        /* @__PURE__ */ n.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: d.map((v, R) => /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("div", { style: {
            backgroundColor: "#3F3F2B",
            height: "32px",
            width: "80px",
            marginBottom: "8px",
            border: "2px dashed #F1FF6C",
            ...v.style
          } }),
          /* @__PURE__ */ n.jsx("span", { style: {
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.92)"
          }, children: v.label })
        ] }, R)) })
      ] })
    ] })
  ] });
}, xr = ({ color: m, label: g, colorCode: p, size: d = "normal" }) => {
  const v = {
    backgroundColor: m,
    width: d === "large" ? "200px" : "176px",
    height: "80px",
    borderRadius: "8px",
    marginBottom: "16px",
    border: m === "#010101" ? "1px solid #ffffff" : "none"
  };
  return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
    /* @__PURE__ */ n.jsx("div", { style: v }),
    /* @__PURE__ */ n.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      color: "rgba(255, 255, 255, 0.92)"
    }, children: [
      /* @__PURE__ */ n.jsx("span", { children: g }),
      /* @__PURE__ */ n.jsx("span", { children: p })
    ] })
  ] });
}, Y = ({ title: m, description: g, colors: p }) => /* @__PURE__ */ n.jsx("div", { style: { marginBottom: "40px" }, children: /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", gap: "52px", alignItems: "flex-start" }, children: [
  /* @__PURE__ */ n.jsxs("div", { style: {
    width: "406px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }, children: [
    /* @__PURE__ */ n.jsx("h3", { style: {
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "24px",
      fontWeight: 700,
      color: "rgba(255, 255, 255, 0.92)",
      margin: 0,
      lineHeight: 1.4
    }, children: m }),
    /* @__PURE__ */ n.jsx("p", { style: {
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      color: "rgba(255, 255, 255, 0.92)",
      margin: 0,
      lineHeight: 1.4,
      letterSpacing: "-0.4px"
    }, children: g })
  ] }),
  /* @__PURE__ */ n.jsx("div", { style: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    flex: 1
  }, children: p.map((d, v) => /* @__PURE__ */ n.jsx(
    xr,
    {
      color: d.color,
      label: d.label,
      colorCode: d.code
    },
    v
  )) })
] }) }), Fr = () => {
  const m = [
    { label: "100", color: s.primary[100], code: "#F1FF6C" },
    { label: "300 (Base)", color: s.primary[300], code: "#E5FF00" },
    { label: "500", color: s.primary[500], code: "#B9D300" },
    { label: "700", color: s.primary[700], code: "#3F3F2B" },
    { label: "900", color: s.primary[900], code: "#333333" }
  ], g = [
    { label: "0", color: s.neutral[0], code: "#FFFFFF" },
    { label: "100", color: s.neutral[100], code: "#F0F0F0" },
    { label: "200", color: s.neutral[200], code: "#BABABA" },
    { label: "300", color: s.neutral[300], code: "#8E8E8E" },
    { label: "400", color: s.neutral[400], code: "#616161" },
    { label: "500", color: s.neutral[500], code: "#404040" },
    { label: "600", color: s.neutral[600], code: "#333333" },
    { label: "700", color: s.neutral[700], code: "#282828" },
    { label: "800", color: s.neutral[800], code: "#181818" },
    { label: "900", color: s.neutral[900], code: "#010101" }
  ], p = [
    { label: "100", color: s.alert[100], code: "#FF5368" },
    { label: "300", color: s.alert[300], code: "#FF364E" },
    { label: "500", color: s.alert[500], code: "#AF001B" },
    { label: "700", color: s.alert[700], code: "#500009" }
  ], d = [
    { label: "100", color: s.warning[100], code: "#FFCE66" },
    { label: "300", color: s.warning[300], code: "#FFAE00" },
    { label: "500", color: s.warning[500], code: "#B27A00" },
    { label: "700", color: s.warning[700], code: "#805700" }
  ], v = [
    { label: "100", color: s.success[100], code: "#00E5A0" },
    { label: "300", color: s.success[300], code: "#00B27C" },
    { label: "500", color: s.success[500], code: "#007F58" },
    { label: "700", color: s.success[700], code: "#006547" }
  ];
  return /* @__PURE__ */ n.jsxs("div", { style: {
    backgroundColor: "#010101",
    padding: "80px",
    fontFamily: "Inter, system-ui, sans-serif",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ n.jsxs("div", { style: { marginBottom: "68px" }, children: [
      /* @__PURE__ */ n.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "48px"
      }, children: [
        /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ n.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Foundations" }),
          /* @__PURE__ */ n.jsx("span", { style: { color: "#F0F0F0", fontSize: "20px" }, children: "›" }),
          /* @__PURE__ */ n.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Colors" })
        ] }),
        /* @__PURE__ */ n.jsx("span", { style: {
          color: "#F0F0F0",
          fontSize: "20px",
          fontWeight: 700,
          textDecoration: "underline"
        }, children: "StoryBook Link" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { style: { maxWidth: "1620px" }, children: [
        /* @__PURE__ */ n.jsx("h1", { style: {
          fontFamily: "Sora, system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "72px",
          lineHeight: "90px",
          color: "#E5FF00",
          margin: "0 0 48px 0"
        }, children: "Colors" }),
        /* @__PURE__ */ n.jsxs("div", { style: {
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "20px",
          lineHeight: 1.4,
          color: "#F0F0F0",
          letterSpacing: "-0.4px",
          marginBottom: "20px"
        }, children: [
          /* @__PURE__ */ n.jsxs("p", { style: { margin: "0 0 20px 0" }, children: [
            "WSC Sports' design system will feature a dynamic and energetic color palette inspired by the intensity of athletic competition. Bold ",
            /* @__PURE__ */ n.jsx("strong", { children: "primary colors" }),
            " will enhance visibility and clarity, while sleek ",
            /* @__PURE__ */ n.jsx("strong", { children: "neutral tones" }),
            " provide balance and professionalism. ",
            /* @__PURE__ */ n.jsx("strong", { children: "Supporting colors" }),
            " will add depth and flexibility, guiding user focus and reinforcing key actions."
          ] }),
          /* @__PURE__ */ n.jsx("p", { style: { margin: 0 }, children: "The combination ensures a modern, high-performance aesthetic, aligning with the fast-paced world of sports." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { style: { marginBottom: "40px" }, children: [
      /* @__PURE__ */ n.jsx("h2", { style: {
        fontSize: "24px",
        fontWeight: 700,
        color: "rgba(255, 255, 255, 0.92)",
        marginBottom: "24px",
        fontFamily: "Inter, system-ui, sans-serif",
        letterSpacing: "-0.48px"
      }, children: "Primary Colors" }),
      /* @__PURE__ */ n.jsx(
        Y,
        {
          title: "Primary",
          description: "The primary color is our brand color, shaping the look and feel across interactive elements like buttons, links, and inputs.",
          colors: m
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(
      Y,
      {
        title: "Neutral",
        description: "Neutral color anchors the system; nearly every UI element- text, form fields, surfaces, and dividers- displays natural hues.",
        colors: g
      }
    ),
    /* @__PURE__ */ n.jsx(
      Y,
      {
        title: "Alert",
        description: "Error colors signal negative or destructive actions, marking error states like action failures, lost connections, etc.",
        colors: p
      }
    ),
    /* @__PURE__ */ n.jsx(
      Y,
      {
        title: "Warning",
        description: "Warning colors indicate that an action may be destructive or on hold, grabbing user attention in confirmations.",
        colors: d
      }
    ),
    /* @__PURE__ */ n.jsx(
      Y,
      {
        title: "Success",
        description: "Success colors communicate a positive action, positive trend, or a successful confirmation.",
        colors: v
      }
    )
  ] });
};
export {
  Fr as Colors,
  br as Spacing,
  H as borderRadius,
  s as colors,
  yr as getColor,
  W as spacing,
  mr as typography
};
