import $, { useState as Me, useRef as yt } from "react";
const r = {
  // Primary colors - Brand colors for WSC Sports
  primary: {
    100: "#F1FF6C",
    // Light yellow
    200: "#F4FF99",
    // Hover state (extracted from Figma)
    300: "#E5FF00",
    // Base yellow (main brand color)
    400: "#C2FF00",
    // Active state (extracted from Figma)
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
    100: "#FF6161",
    // Light red (hover)
    300: "#FF3131",
    // Medium red (default)
    500: "#B72C2C",
    // Dark red (active)
    700: "#500009",
    // Very dark red
    900: "#8E1616"
    // Disabled state
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
}, wt = (d) => {
  const p = d.split(".");
  let g = r;
  for (const l of p)
    if (g = g[l], g === void 0) return;
  return g;
}, Q = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "40px"
}, be = {
  none: "0px",
  sm: "4px",
  md: "8px",
  full: "9999px"
  // "All the way radius" from Figma
}, M = {
  // Font families from Figma
  fontFamily: {
    primary: ["Inter", "system-ui", "sans-serif"],
    // Main font family
    heading: ["Sora", "system-ui", "sans-serif"],
    // For main page titles only
    mono: ["Monaco", "Consolas", "monospace"]
  },
  // Font sizes from Figma typography system
  fontSize: {
    // Headlines
    h1: "40px",
    // Headline 1 - 2.857rem
    h2: "32px",
    // Headline 2 - 2.286rem  
    h3: "24px",
    // Headline 3 - 1.714rem
    // Body text
    bodyXL: "20px",
    // Body XL - 1.429rem
    bodyL: "18px",
    // Body L - 1.286rem
    bodyM: "16px",
    // Body M - 1.143rem (base)
    bodyS: "14px",
    // Body S - 1rem
    bodyXS: "12px",
    // Body XS - 0.857rem
    // Labels
    label: "11px",
    // Label - 0.786rem
    // Page title (uses Sora)
    pageTitle: "72px"
    // Main page title
  },
  // Font weights from Figma
  fontWeight: {
    regular: 400,
    // Regular - body text, long-form content
    semibold: 600,
    // Semi-Bold - subheadings, form labels, emphasis
    bold: 700
    // Bold - headings, section titles, button labels
  },
  // Line heights from Figma (all use 140%)
  lineHeight: {
    normal: 1.4,
    // 140% - used for all body text and headlines
    heading: 1.25,
    // 125% - used for page titles (Sora)
    relaxed: 1.6
    // 160% - used in some descriptions
  },
  // Letter spacing
  letterSpacing: {
    normal: "0",
    tight: "-0.4px",
    // Used in body text
    wide: "0.025em"
  },
  // Typography scale with complete definitions
  scale: {
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used for large, attention-grabbing headlines in promotional areas or in rules system."
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used for page titles, section headers, and prominent UI headings."
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Useful for page intros, grouped sections, or modal headlines."
    },
    bodyXL: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used for subheadings, section intros, or supporting titles."
    },
    bodyL: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used to emphasize body text or create light hierarchy above 16px. Ideal for callouts or key details."
    },
    bodyM: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used for long-form content such as paragraphs and main descriptions, and main tabs labels"
    },
    bodyS: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used for primary content like input text, labels, links, and secondary tabs labels"
    },
    bodyXS: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used for secondary information such as captions, helper text, timeline labels, or tooltips."
    },
    label: {
      fontSize: "11px",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: "Inter, system-ui, sans-serif",
      usage: "Used for tab labels and chart metadata"
    }
  }
}, Ct = (d) => M.scale[d];
var Re = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function mt() {
  if (Ye) return le;
  Ye = 1;
  var d = $, p = Symbol.for("react.element"), g = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, x = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(W, v, B) {
    var j, _ = {}, E = null, O = null;
    B !== void 0 && (E = "" + B), v.key !== void 0 && (E = "" + v.key), v.ref !== void 0 && (O = v.ref);
    for (j in v) l.call(v, j) && !F.hasOwnProperty(j) && (_[j] = v[j]);
    if (W && W.defaultProps) for (j in v = W.defaultProps, v) _[j] === void 0 && (_[j] = v[j]);
    return { $$typeof: p, type: W, key: E, ref: O, props: _, _owner: x.current };
  }
  return le.Fragment = g, le.jsx = C, le.jsxs = C, le;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function bt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var d = $, p = Symbol.for("react.element"), g = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), W = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), P = Symbol.iterator, V = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = P && e[P] || e[V];
      return typeof n == "function" ? n : null;
    }
    var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
          o[i - 1] = arguments[i];
        D("error", e, o);
      }
    }
    function D(e, n, o) {
      {
        var i = S.ReactDebugCurrentFrame, f = i.getStackAddendum();
        f !== "" && (n += "%s", o = o.concat([f]));
        var h = o.map(function(u) {
          return String(u);
        });
        h.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var ee = !1, te = !1, N = !1, re = !1, L = !1, X;
    X = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === F || L || e === x || e === B || e === j || re || e === O || ee || te || N || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === _ || e.$$typeof === C || e.$$typeof === W || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function oe(e, n, o) {
      var i = e.displayName;
      if (i)
        return i;
      var f = n.displayName || n.name || "";
      return f !== "" ? o + "(" + f + ")" : o;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case g:
          return "Portal";
        case F:
          return "Profiler";
        case x:
          return "StrictMode";
        case B:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            var n = e;
            return K(n) + ".Consumer";
          case C:
            var o = e;
            return K(o._context) + ".Provider";
          case v:
            return oe(e, e.render, "ForwardRef");
          case _:
            var i = e.displayName || null;
            return i !== null ? i : I(e.type) || "Memo";
          case E: {
            var f = e, h = f._payload, u = f._init;
            try {
              return I(u(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, z = 0, J, q, s, a, A, de, fe;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function he() {
      {
        if (z === 0) {
          J = console.log, q = console.info, s = console.warn, a = console.error, A = console.group, de = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        z++;
      }
    }
    function ie() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: J
            }),
            info: R({}, e, {
              value: q
            }),
            warn: R({}, e, {
              value: s
            }),
            error: R({}, e, {
              value: a
            }),
            group: R({}, e, {
              value: A
            }),
            groupCollapsed: R({}, e, {
              value: de
            }),
            groupEnd: R({}, e, {
              value: fe
            })
          });
        }
        z < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = S.ReactCurrentDispatcher, ve;
    function xe(e, n, o) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (f) {
            var i = f.stack.trim().match(/\n( *(at )?)/);
            ve = i && i[1] || "";
          }
        return `
` + ve + e;
      }
    }
    var je = !1, ge;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new Ne();
    }
    function ke(e, n) {
      if (!e || je)
        return "";
      {
        var o = ge.get(e);
        if (o !== void 0)
          return o;
      }
      var i;
      je = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = ae.current, ae.current = null, he();
      try {
        if (n) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (k) {
              i = k;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (k) {
              i = k;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            i = k;
          }
          e();
        }
      } catch (k) {
        if (k && i && typeof k.stack == "string") {
          for (var c = k.stack.split(`
`), w = i.stack.split(`
`), y = c.length - 1, b = w.length - 1; y >= 1 && b >= 0 && c[y] !== w[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (c[y] !== w[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || c[y] !== w[b]) {
                    var T = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, T), T;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        je = !1, ae.current = h, ie(), Error.prepareStackTrace = f;
      }
      var Z = e ? e.displayName || e.name : "", Y = Z ? xe(Z) : "";
      return typeof e == "function" && ge.set(e, Y), Y;
    }
    function Xe(e, n, o) {
      return ke(e, !1);
    }
    function Ke(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ye(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, Ke(e));
      if (typeof e == "string")
        return xe(e);
      switch (e) {
        case B:
          return xe("Suspense");
        case j:
          return xe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Xe(e.render);
          case _:
            return ye(e.type, n, o);
          case E: {
            var i = e, f = i._payload, h = i._init;
            try {
              return ye(h(f), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, _e = {}, Ie = S.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var n = e._owner, o = ye(e.type, e._source, n ? n.type : null);
        Ie.setExtraStackFrame(o);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Je(e, n, o, i, f) {
      {
        var h = Function.call.bind(se);
        for (var u in e)
          if (h(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((i || "React class") + ": " + o + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              c = e[u](n, u, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (me(f), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, u, typeof c), me(null)), c instanceof Error && !(c.message in _e) && (_e[c.message] = !0, me(f), m("Failed %s type: %s", o, c.message), me(null));
          }
      }
    }
    var qe = Array.isArray;
    function Fe(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Ze(e) {
      try {
        return ze(e), !1;
      } catch {
        return !0;
      }
    }
    function ze(e) {
      return "" + e;
    }
    function Te(e) {
      if (Ze(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ze(e);
    }
    var We = S.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, Oe;
    function et(e) {
      if (se.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if (se.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, n) {
      typeof e.ref == "string" && We.current;
    }
    function nt(e, n) {
      {
        var o = function() {
          Be || (Be = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function ot(e, n) {
      {
        var o = function() {
          Oe || (Oe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var it = function(e, n, o, i, f, h, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: u,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function at(e, n, o, i, f) {
      {
        var h, u = {}, c = null, w = null;
        o !== void 0 && (Te(o), c = "" + o), tt(n) && (Te(n.key), c = "" + n.key), et(n) && (w = n.ref, rt(n, f));
        for (h in n)
          se.call(n, h) && !Qe.hasOwnProperty(h) && (u[h] = n[h]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (h in y)
            u[h] === void 0 && (u[h] = y[h]);
        }
        if (c || w) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && nt(u, b), w && ot(u, b);
        }
        return it(e, c, w, f, i, We.current, u);
      }
    }
    var Se = S.ReactCurrentOwner, Pe = S.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var n = e._owner, o = ye(e.type, e._source, n ? n.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function De() {
      {
        if (Se.current) {
          var e = I(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function st(e) {
      return "";
    }
    var Ae = {};
    function lt(e) {
      {
        var n = De();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function He(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = lt(n);
        if (Ae[o])
          return;
        Ae[o] = !0;
        var i = "";
        e && e._owner && e._owner !== Se.current && (i = " It was passed a child from " + I(e._owner.type) + "."), G(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), G(null);
      }
    }
    function $e(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Fe(e))
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            Ce(i) && He(i, n);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = U(e);
          if (typeof f == "function" && f !== e.entries)
            for (var h = f.call(e), u; !(u = h.next()).done; )
              Ce(u.value) && He(u.value, n);
        }
      }
    }
    function ct(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === _))
          o = n.propTypes;
        else
          return;
        if (o) {
          var i = I(n);
          Je(o, e.props, "prop", i, e);
        } else if (n.PropTypes !== void 0 && !we) {
          we = !0;
          var f = I(n);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var i = n[o];
          if (i !== "children" && i !== "key") {
            G(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    var Ue = {};
    function Le(e, n, o, i, f, h) {
      {
        var u = ne(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = st();
          w ? c += w : c += De();
          var y;
          e === null ? y = "null" : Fe(e) ? y = "array" : e !== void 0 && e.$$typeof === p ? (y = "<" + (I(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var b = at(e, n, o, f, h);
        if (b == null)
          return b;
        if (u) {
          var T = n.children;
          if (T !== void 0)
            if (i)
              if (Fe(T)) {
                for (var Z = 0; Z < T.length; Z++)
                  $e(T[Z], e);
                Object.freeze && Object.freeze(T);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(T, e);
        }
        if (se.call(n, "key")) {
          var Y = I(e), k = Object.keys(n).filter(function(gt) {
            return gt !== "key";
          }), Ee = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[Y + Ee]) {
            var xt = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, Y, xt, Y), Ue[Y + Ee] = !0;
          }
        }
        return e === l ? ut(b) : ct(b), b;
      }
    }
    function dt(e, n, o) {
      return Le(e, n, o, !0);
    }
    function ft(e, n, o) {
      return Le(e, n, o, !1);
    }
    var pt = ft, ht = dt;
    ce.Fragment = l, ce.jsx = pt, ce.jsxs = ht;
  }()), ce;
}
process.env.NODE_ENV === "production" ? Re.exports = mt() : Re.exports = bt();
var t = Re.exports;
const Et = ({
  showSpacing: d = !0,
  showRadius: p = !0
}) => {
  const g = [
    { label: "4px", value: Q.xs },
    { label: "8px", value: Q.sm },
    { label: "16px", value: Q.md },
    { label: "24px", value: Q.lg },
    { label: "32px", value: Q.xl },
    { label: "40px", value: Q.xxl }
  ], l = [
    { label: "0 px", value: be.none, style: { borderRadius: "0px" } },
    { label: "4 px", value: be.sm, style: { borderRadius: "4px" } },
    { label: "8 px", value: be.md, style: { borderRadius: "8px" } },
    { label: "All the way radius", value: be.full, style: { borderRadius: "32px" } }
  ];
  return /* @__PURE__ */ t.jsxs("div", { style: {
    backgroundColor: "#010101",
    padding: "80px",
    fontFamily: "Inter, system-ui, sans-serif",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "68px" }, children: [
      /* @__PURE__ */ t.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "48px"
      }, children: [
        /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ t.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Foundations" }),
          /* @__PURE__ */ t.jsx("span", { style: { color: "#F0F0F0", fontSize: "20px" }, children: "›" }),
          /* @__PURE__ */ t.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Grid & Spacing" })
        ] }),
        /* @__PURE__ */ t.jsx("span", { style: {
          color: "#F0F0F0",
          fontSize: "20px",
          fontWeight: 700,
          textDecoration: "underline"
        }, children: "StoryBook Link" })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { style: { maxWidth: "1620px" }, children: [
        /* @__PURE__ */ t.jsx("h1", { style: {
          fontFamily: "Sora, system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "72px",
          lineHeight: "90px",
          color: "#E5FF00",
          margin: "0 0 48px 0",
          width: "900px"
        }, children: "Grid & Spacing" }),
        /* @__PURE__ */ t.jsx("p", { style: {
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
    /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: "200px" }, children: [
      d && /* @__PURE__ */ t.jsxs("div", { style: { width: "354px" }, children: [
        /* @__PURE__ */ t.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.92)",
          marginBottom: "24px",
          margin: "0 0 24px 0"
        }, children: "Spacers" }),
        /* @__PURE__ */ t.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: g.map((x, F) => /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            backgroundColor: "#3F3F2B",
            height: x.value,
            width: "100%",
            marginBottom: "8px"
          } }),
          /* @__PURE__ */ t.jsx("span", { style: {
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.92)"
          }, children: x.label })
        ] }, F)) })
      ] }),
      p && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.92)",
          marginBottom: "24px",
          margin: "0 0 24px 0"
        }, children: "Radius" }),
        /* @__PURE__ */ t.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: l.map((x, F) => /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            backgroundColor: "#3F3F2B",
            height: "32px",
            width: "80px",
            marginBottom: "8px",
            border: "2px dashed #F1FF6C",
            ...x.style
          } }),
          /* @__PURE__ */ t.jsx("span", { style: {
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.92)"
          }, children: x.label })
        ] }, F)) })
      ] })
    ] })
  ] });
}, vt = ({ color: d, label: p, colorCode: g, size: l = "normal" }) => {
  const x = {
    backgroundColor: d,
    width: l === "large" ? "200px" : "176px",
    height: "80px",
    borderRadius: "8px",
    marginBottom: "16px",
    border: d === "#010101" ? "1px solid #ffffff" : "none"
  };
  return /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
    /* @__PURE__ */ t.jsx("div", { style: x }),
    /* @__PURE__ */ t.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      color: "rgba(255, 255, 255, 0.92)"
    }, children: [
      /* @__PURE__ */ t.jsx("span", { children: p }),
      /* @__PURE__ */ t.jsx("span", { children: g })
    ] })
  ] });
}, ue = ({ title: d, description: p, colors: g }) => /* @__PURE__ */ t.jsx("div", { style: { marginBottom: "40px" }, children: /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: "52px", alignItems: "flex-start" }, children: [
  /* @__PURE__ */ t.jsxs("div", { style: {
    width: "406px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }, children: [
    /* @__PURE__ */ t.jsx("h3", { style: {
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "24px",
      fontWeight: 700,
      color: "rgba(255, 255, 255, 0.92)",
      margin: 0,
      lineHeight: 1.4
    }, children: d }),
    /* @__PURE__ */ t.jsx("p", { style: {
      fontFamily: "Inter, system-ui, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      color: "rgba(255, 255, 255, 0.92)",
      margin: 0,
      lineHeight: 1.4,
      letterSpacing: "-0.4px"
    }, children: p })
  ] }),
  /* @__PURE__ */ t.jsx("div", { style: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    flex: 1
  }, children: g.map((l, x) => /* @__PURE__ */ t.jsx(
    vt,
    {
      color: l.color,
      label: l.label,
      colorCode: l.code
    },
    x
  )) })
] }) }), Rt = () => {
  const d = [
    { label: "100", color: r.primary[100], code: "#F1FF6C" },
    { label: "300 (Base)", color: r.primary[300], code: "#E5FF00" },
    { label: "500", color: r.primary[500], code: "#B9D300" },
    { label: "700", color: r.primary[700], code: "#3F3F2B" },
    { label: "900", color: r.primary[900], code: "#333333" }
  ], p = [
    { label: "0", color: r.neutral[0], code: "#FFFFFF" },
    { label: "100", color: r.neutral[100], code: "#F0F0F0" },
    { label: "200", color: r.neutral[200], code: "#BABABA" },
    { label: "300", color: r.neutral[300], code: "#8E8E8E" },
    { label: "400", color: r.neutral[400], code: "#616161" },
    { label: "500", color: r.neutral[500], code: "#404040" },
    { label: "600", color: r.neutral[600], code: "#333333" },
    { label: "700", color: r.neutral[700], code: "#282828" },
    { label: "800", color: r.neutral[800], code: "#181818" },
    { label: "900", color: r.neutral[900], code: "#010101" }
  ], g = [
    { label: "100", color: r.alert[100], code: "#FF5368" },
    { label: "300", color: r.alert[300], code: "#FF364E" },
    { label: "500", color: r.alert[500], code: "#AF001B" },
    { label: "700", color: r.alert[700], code: "#500009" }
  ], l = [
    { label: "100", color: r.warning[100], code: "#FFCE66" },
    { label: "300", color: r.warning[300], code: "#FFAE00" },
    { label: "500", color: r.warning[500], code: "#B27A00" },
    { label: "700", color: r.warning[700], code: "#805700" }
  ], x = [
    { label: "100", color: r.success[100], code: "#00E5A0" },
    { label: "300", color: r.success[300], code: "#00B27C" },
    { label: "500", color: r.success[500], code: "#007F58" },
    { label: "700", color: r.success[700], code: "#006547" }
  ];
  return /* @__PURE__ */ t.jsxs("div", { style: {
    backgroundColor: "#010101",
    padding: "80px",
    fontFamily: "Inter, system-ui, sans-serif",
    minHeight: "100vh"
  }, children: [
    /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "68px" }, children: [
      /* @__PURE__ */ t.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "48px"
      }, children: [
        /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ t.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Foundations" }),
          /* @__PURE__ */ t.jsx("span", { style: { color: "#F0F0F0", fontSize: "20px" }, children: "›" }),
          /* @__PURE__ */ t.jsx("span", { style: {
            color: "#F0F0F0",
            fontSize: "20px",
            fontWeight: 700
          }, children: "Colors" })
        ] }),
        /* @__PURE__ */ t.jsx("span", { style: {
          color: "#F0F0F0",
          fontSize: "20px",
          fontWeight: 700,
          textDecoration: "underline"
        }, children: "StoryBook Link" })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { style: { maxWidth: "1620px" }, children: [
        /* @__PURE__ */ t.jsx("h1", { style: {
          fontFamily: "Sora, system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "72px",
          lineHeight: "90px",
          color: "#E5FF00",
          margin: "0 0 48px 0"
        }, children: "Colors" }),
        /* @__PURE__ */ t.jsxs("div", { style: {
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "20px",
          lineHeight: 1.4,
          color: "#F0F0F0",
          letterSpacing: "-0.4px",
          marginBottom: "20px"
        }, children: [
          /* @__PURE__ */ t.jsxs("p", { style: { margin: "0 0 20px 0" }, children: [
            "WSC Sports' design system will feature a dynamic and energetic color palette inspired by the intensity of athletic competition. Bold ",
            /* @__PURE__ */ t.jsx("strong", { children: "primary colors" }),
            " will enhance visibility and clarity, while sleek ",
            /* @__PURE__ */ t.jsx("strong", { children: "neutral tones" }),
            " provide balance and professionalism. ",
            /* @__PURE__ */ t.jsx("strong", { children: "Supporting colors" }),
            " will add depth and flexibility, guiding user focus and reinforcing key actions."
          ] }),
          /* @__PURE__ */ t.jsx("p", { style: { margin: 0 }, children: "The combination ensures a modern, high-performance aesthetic, aligning with the fast-paced world of sports." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: "40px" }, children: [
      /* @__PURE__ */ t.jsx("h2", { style: {
        fontSize: "24px",
        fontWeight: 700,
        color: "rgba(255, 255, 255, 0.92)",
        marginBottom: "24px",
        fontFamily: "Inter, system-ui, sans-serif",
        letterSpacing: "-0.48px"
      }, children: "Primary Colors" }),
      /* @__PURE__ */ t.jsx(
        ue,
        {
          title: "Primary",
          description: "The primary color is our brand color, shaping the look and feel across interactive elements like buttons, links, and inputs.",
          colors: d
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      ue,
      {
        title: "Neutral",
        description: "Neutral color anchors the system; nearly every UI element- text, form fields, surfaces, and dividers- displays natural hues.",
        colors: p
      }
    ),
    /* @__PURE__ */ t.jsx(
      ue,
      {
        title: "Alert",
        description: "Error colors signal negative or destructive actions, marking error states like action failures, lost connections, etc.",
        colors: g
      }
    ),
    /* @__PURE__ */ t.jsx(
      ue,
      {
        title: "Warning",
        description: "Warning colors indicate that an action may be destructive or on hold, grabbing user attention in confirmations.",
        colors: l
      }
    ),
    /* @__PURE__ */ t.jsx(
      ue,
      {
        title: "Success",
        description: "Success colors communicate a positive action, positive trend, or a successful confirmation.",
        colors: x
      }
    )
  ] });
}, H = ({
  label: d,
  size: p,
  weight: g,
  lineHeight: l,
  usage: x,
  fontSize: F
}) => {
  const C = {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: F,
    lineHeight: "1.4",
    color: r.neutral[100],
    width: "400px",
    margin: 0,
    padding: 0
  };
  return /* @__PURE__ */ t.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "48px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 0,
    width: "100%"
  }, children: [
    /* @__PURE__ */ t.jsxs("div", { style: {
      display: "flex",
      flexDirection: "row",
      height: "36px",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 0,
      width: "100%",
      position: "relative"
    }, children: [
      /* @__PURE__ */ t.jsx("div", { style: {
        position: "absolute",
        borderBottom: `1px solid ${r.neutral[100]}`,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ t.jsx("div", { style: {
        fontFamily: "Inter, system-ui, sans-serif",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "25px",
        color: r.neutral[100],
        width: "2200px"
      }, children: d })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 0,
      width: "100%"
    }, children: [
      /* @__PURE__ */ t.jsx("div", { style: {
        ...C,
        fontWeight: 400
      }, children: d }),
      /* @__PURE__ */ t.jsx("div", { style: {
        ...C,
        fontWeight: 600
      }, children: d }),
      /* @__PURE__ */ t.jsx("div", { style: {
        ...C,
        fontWeight: 700
      }, children: d }),
      /* @__PURE__ */ t.jsxs("div", { style: {
        fontFamily: "Inter, system-ui, sans-serif",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "1.4",
        color: r.neutral[100],
        width: "440px",
        height: "136px"
      }, children: [
        /* @__PURE__ */ t.jsxs("p", { style: { margin: 0, marginBottom: "0px" }, children: [
          "Font size: ",
          p
        ] }),
        /* @__PURE__ */ t.jsxs("p", { style: { margin: 0, marginBottom: "0px" }, children: [
          "Weight: ",
          g
        ] }),
        /* @__PURE__ */ t.jsxs("p", { style: { margin: 0 }, children: [
          "Line height: ",
          l
        ] })
      ] }),
      /* @__PURE__ */ t.jsx("div", { style: {
        fontFamily: "Inter, system-ui, sans-serif",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "1.4",
        color: r.neutral[100],
        width: "560px",
        height: "136px"
      }, children: /* @__PURE__ */ t.jsx("p", { style: { margin: 0 }, children: x }) })
    ] })
  ] });
}, kt = ({ className: d }) => /* @__PURE__ */ t.jsxs(
  "div",
  {
    className: d,
    style: {
      backgroundColor: r.neutral[900],
      width: "100%",
      minHeight: "100vh",
      position: "relative",
      fontFamily: "Inter, system-ui, sans-serif"
    },
    children: [
      /* @__PURE__ */ t.jsxs("div", { style: {
        backgroundColor: r.neutral[900],
        display: "flex",
        flexDirection: "column",
        gap: "68px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minWidth: "2400px",
        paddingBottom: "96px",
        paddingTop: "80px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        borderTop: `5px solid ${r.neutral[100]}`
      }, children: [
        /* @__PURE__ */ t.jsxs("div", { style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          width: "100%"
        }, children: [
          /* @__PURE__ */ t.jsxs("div", { style: {
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 0
          }, children: [
            /* @__PURE__ */ t.jsx("div", { style: {
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "1.4",
              color: r.neutral[100]
            }, children: "Foundations" }),
            /* @__PURE__ */ t.jsx("div", { style: {
              width: "24px",
              height: "24px",
              position: "relative"
            }, children: /* @__PURE__ */ t.jsx("div", { style: {
              position: "absolute",
              top: "25%",
              left: "33.333%",
              right: "35.833%",
              bottom: "25%",
              width: "8px",
              height: "12px",
              backgroundColor: r.neutral[100],
              clipPath: "polygon(0 0, 100% 50%, 0 100%)"
            } }) }),
            /* @__PURE__ */ t.jsx("div", { style: {
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "1.4",
              color: r.neutral[100]
            }, children: "Typography" })
          ] }),
          /* @__PURE__ */ t.jsx("div", { style: {
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "1.4",
            color: r.neutral[100],
            textDecoration: "underline"
          }, children: "StoryBook Link" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "1620px",
          padding: 0
        }, children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            fontFamily: "Sora, system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "72px",
            lineHeight: "90px",
            color: r.primary[300],
            width: "900px"
          }, children: "Typography" }),
          /* @__PURE__ */ t.jsxs("div", { style: {
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "1.6",
            color: r.neutral[100],
            letterSpacing: "-0.4px",
            width: "100%",
            minWidth: "100%"
          }, children: [
            /* @__PURE__ */ t.jsx("p", { style: { margin: 0, marginBottom: "0px" }, children: "Typography defines the visual hierarchy and tone of the interface. It ensures consistency in font styles, sizes, and spacing across all products and platforms." }),
            /* @__PURE__ */ t.jsxs("p", { style: { margin: 0, marginBottom: "0px" }, children: [
              /* @__PURE__ */ t.jsx("span", { style: { fontWeight: 600 }, children: "Regular (400)" }),
              /* @__PURE__ */ t.jsx("span", { style: { fontWeight: 600 }, children: " – " }),
              /* @__PURE__ */ t.jsx("span", { children: "Used for body text, long-form content, descriptions, and supporting text." })
            ] }),
            /* @__PURE__ */ t.jsxs("p", { style: { margin: 0, marginBottom: "0px" }, children: [
              /* @__PURE__ */ t.jsx("span", { style: { fontWeight: 600 }, children: "Semi-Bold (600)" }),
              /* @__PURE__ */ t.jsx("span", { style: { fontWeight: 600 }, children: " – " }),
              /* @__PURE__ */ t.jsx("span", { children: "Used for subheadings, form labels, or emphasis within body text." })
            ] }),
            /* @__PURE__ */ t.jsxs("p", { style: { margin: 0 }, children: [
              /* @__PURE__ */ t.jsx("span", { style: { fontWeight: 600 }, children: "Bold (700)" }),
              /* @__PURE__ */ t.jsx("span", { style: { fontWeight: 600 }, children: " – " }),
              /* @__PURE__ */ t.jsx("span", { children: "Reserved for headings, section titles, and button label." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: "80px",
        paddingTop: "40px",
        color: r.neutral[100]
      }, children: [
        /* @__PURE__ */ t.jsxs("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: 0
        }, children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            fontFamily: "Sora, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "90px",
            color: r.neutral[100],
            width: "900px"
          }, children: "Inter" }),
          /* @__PURE__ */ t.jsx("div", { style: {
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "120px",
            lineHeight: "1.4",
            color: r.neutral[100],
            width: "900px"
          }, children: "Aa" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { style: {
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: "1.4",
          color: r.neutral[100],
          width: "900px"
        }, children: /* @__PURE__ */ t.jsxs("p", { style: { margin: 0 }, children: [
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          /* @__PURE__ */ t.jsx("br", {}),
          "abcdefghijklmnopqrstuvwxyz",
          /* @__PURE__ */ t.jsx("br", {}),
          "0123456789 !@#$%^&*()"
        ] }) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: "80px",
        paddingTop: "80px",
        paddingBottom: "80px",
        width: "2199px"
      }, children: [
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Headline 1",
            size: "40px | 2.857 rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used for large, attention-grabbing headlines in promotional areas or in rules system.",
            fontSize: "40px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Headline 2",
            size: "32px / 2.286rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used for page titles, section headers, and prominent UI headings.",
            fontSize: "32px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Headline 3",
            size: "24px | 1.714rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Useful for page intros, grouped sections, or modal headlines.",
            fontSize: "24px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Body XL",
            size: "20px | 1.429rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used for subheadings, section intros, or supporting titles.",
            fontSize: "20px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Body L",
            size: "18px | 1.286rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used to emphasize body text or create light hierarchy above 16px. Ideal for callouts or key details.",
            fontSize: "18px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Body M",
            size: "16px | 1.143rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used for long-form content such as paragraphs and main descriptions, and main tabs labels",
            fontSize: "16px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Body S",
            size: "14px | 1 rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used for primary content like input text, labels, links, and secondary tabs labels",
            fontSize: "14px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Body XS",
            size: "12px | 0.857rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used for secondary information such as captions, helper text, timeline labels, or tooltips.",
            fontSize: "12px"
          }
        ),
        /* @__PURE__ */ t.jsx(
          H,
          {
            label: "Label",
            size: "11px | 0.786rem",
            weight: "400, 600 ,700",
            lineHeight: "140%",
            usage: "Used for tab labels and chart metadata",
            fontSize: "11px"
          }
        )
      ] })
    ]
  }
), _t = ({
  children: d,
  variant: p = "primary",
  size: g = "medium",
  disabled: l = !1,
  fullWidth: x = !1,
  onClick: F,
  type: C = "button",
  className: W,
  style: v,
  "aria-label": B,
  ...j
}) => {
  const [_, E] = $.useState(!1), [O, P] = $.useState(!1), [V, U] = $.useState(!1), [S, m] = $.useState([]), D = $.useRef(null), ee = $.useRef(0), te = () => l ? "disabled" : O ? "active" : V ? "focused" : _ ? "hover" : "default", N = (s) => {
    if (l || !D.current) return;
    const A = D.current.getBoundingClientRect(), de = s.clientX - A.left, fe = s.clientY - A.top, pe = Math.max(A.width, A.height) * 2, he = {
      id: ee.current++,
      x: de,
      y: fe,
      size: pe,
      variant: p || "primary"
    };
    m((ie) => [...ie, he]), setTimeout(() => {
      m((ie) => ie.filter((ae) => ae.id !== he.id));
    }, 600);
  }, re = (s) => {
    switch (s) {
      case "primary":
        return "rgba(51, 51, 51, 0.3)";
      case "secondary":
        return "rgba(229, 255, 0, 0.3)";
      case "tertiary":
        return "rgba(229, 255, 0, 0.3)";
      case "alternative":
        return "rgba(240, 240, 240, 0.3)";
      case "alert":
        return "rgba(240, 240, 240, 0.3)";
      default:
        return "rgba(51, 51, 51, 0.3)";
    }
  }, L = () => {
    const s = te(), a = {
      fontFamily: M.fontFamily.primary.join(", "),
      fontSize: "14px",
      fontWeight: M.fontWeight.bold,
      lineHeight: "1.4",
      border: "none",
      borderRadius: "8px",
      cursor: l ? "not-allowed" : "pointer",
      transition: "all 0.2s cubic-bezier(0, 0, 0.2, 1)",
      // Material motion curve
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      outline: "none",
      position: "relative",
      width: x ? "100%" : "auto",
      minWidth: "64px",
      padding: "8px 16px",
      height: "32px",
      boxSizing: "border-box",
      overflow: "hidden",
      // Clip ripple to button shape
      ...v
    };
    switch (p) {
      case "primary":
        switch (s) {
          case "disabled":
            return {
              ...a,
              backgroundColor: r.primary[700],
              // #3F3F2B
              color: r.neutral[300]
              // #8E8E8E
            };
          case "active":
            return {
              ...a,
              backgroundColor: r.primary[400],
              // #C2FF00
              color: r.primary[900]
              // #333333
            };
          case "focused":
            return {
              ...a,
              backgroundColor: r.primary[300],
              // #E5FF00
              color: r.primary[900],
              // #333333
              boxShadow: "0px 0px 0px 2px rgba(229, 255, 0, 0.4)"
              // Focus ring from Figma
            };
          case "hover":
            return {
              ...a,
              backgroundColor: r.primary[200],
              // #F4FF99
              color: r.primary[900]
              // #333333
            };
          default:
            return {
              ...a,
              backgroundColor: r.primary[300],
              // #E5FF00
              color: r.primary[900]
              // #333333
            };
        }
      case "secondary":
        switch (s) {
          case "disabled":
            return {
              ...a,
              backgroundColor: "transparent",
              color: r.primary[700],
              // #3F3F2B
              border: `1px solid ${r.primary[700]}`
              // #3F3F2B
            };
          case "active":
            return {
              ...a,
              backgroundColor: r.neutral[700],
              // #282828
              color: r.primary[400],
              // #C2FF00
              border: `1px solid ${r.primary[400]}`
              // #C2FF00
            };
          case "focused":
            return {
              ...a,
              backgroundColor: r.neutral[900],
              // #010101
              color: r.primary[300],
              // #E5FF00
              border: `1px solid ${r.primary[300]}`,
              // #E5FF00
              boxShadow: "0px 0px 0px 2px rgba(229, 255, 0, 0.4)"
              // Focus ring from Figma
            };
          case "hover":
            return {
              ...a,
              backgroundColor: r.neutral[600],
              // #333333
              color: r.primary[200],
              // #F4FF99
              border: `1px solid ${r.primary[200]}`
              // #F4FF99
            };
          default:
            return {
              ...a,
              backgroundColor: "transparent",
              color: r.primary[300],
              // #E5FF00
              border: `1px solid ${r.primary[300]}`
              // #E5FF00
            };
        }
      case "tertiary":
        switch (s) {
          case "disabled":
            return {
              ...a,
              backgroundColor: "transparent",
              color: r.primary[700]
              // #3F3F2B
            };
          case "active":
            return {
              ...a,
              backgroundColor: r.neutral[700],
              // #282828
              color: r.primary[400]
              // #C2FF00
            };
          case "focused":
            return {
              ...a,
              backgroundColor: r.neutral[900],
              // #010101
              color: r.primary[300],
              // #E5FF00
              boxShadow: "0px 0px 0px 2px rgba(229, 255, 0, 0.4)"
              // Focus ring from Figma
            };
          case "hover":
            return {
              ...a,
              backgroundColor: r.neutral[600],
              // #333333
              color: r.primary[200]
              // #F4FF99
            };
          default:
            return {
              ...a,
              backgroundColor: "transparent",
              color: r.primary[300]
              // #E5FF00
            };
        }
      case "alternative":
        switch (s) {
          case "disabled":
            return {
              ...a,
              backgroundColor: r.neutral[800],
              // #181818
              color: r.neutral[700]
              // #282828
            };
          case "active":
            return {
              ...a,
              backgroundColor: r.neutral[700],
              // #282828
              color: r.primary[400]
              // #C2FF00
            };
          case "focused":
            return {
              ...a,
              backgroundColor: r.neutral[700],
              // #282828
              color: r.neutral[100],
              // #F0F0F0
              boxShadow: "0px 0px 0px 2px rgba(229, 255, 0, 0.4)"
              // Focus ring from Figma
            };
          case "hover":
            return {
              ...a,
              backgroundColor: r.neutral[600],
              // #333333
              color: r.neutral[100]
              // #F0F0F0
            };
          default:
            return {
              ...a,
              backgroundColor: r.neutral[700],
              // #282828
              color: r.neutral[100]
              // #F0F0F0
            };
        }
      case "alert":
        switch (s) {
          case "disabled":
            return {
              ...a,
              backgroundColor: r.alert[900],
              // #8E1616
              color: r.neutral[200]
              // #BABABA
            };
          case "active":
            return {
              ...a,
              backgroundColor: r.alert[500],
              // #B72C2C
              color: r.neutral[100]
              // #F0F0F0
            };
          case "focused":
            return {
              ...a,
              backgroundColor: r.alert[300],
              // #FF3131
              color: r.neutral[100],
              // #F0F0F0
              boxShadow: "0px 0px 0px 2px #F0F0F0"
              // White focus ring from Figma
            };
          case "hover":
            return {
              ...a,
              backgroundColor: r.alert[100],
              // #FF6161
              color: r.neutral[100]
              // #F0F0F0
            };
          default:
            return {
              ...a,
              backgroundColor: r.alert[300],
              // #FF3131
              color: r.neutral[100]
              // #F0F0F0
            };
        }
      default:
        return a;
    }
  }, X = () => {
    l || E(!0);
  }, ne = () => {
    E(!1);
  }, oe = (s) => {
    l || (P(!0), N(s));
  }, K = () => {
    P(!1);
  }, I = () => {
    l || U(!0);
  }, R = () => {
    U(!1);
  }, z = (s) => {
    !l && F && F(s);
  }, J = (s) => {
    if ((s.key === " " || s.key === "Enter") && !l && (P(!0), D.current)) {
      const a = D.current.getBoundingClientRect(), A = {
        clientX: a.left + a.width / 2,
        clientY: a.top + a.height / 2
      };
      N(A);
    }
  }, q = (s) => {
    (s.key === " " || s.key === "Enter") && P(!1);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("style", { children: `
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 0.6;
            }
            50% {
              opacity: 0.3;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
          
          .ripple {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: ripple 600ms cubic-bezier(0, 0, 0.2, 1);
          }
        ` }),
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        ref: D,
        type: C,
        className: W,
        style: L(),
        onClick: z,
        onMouseEnter: X,
        onMouseLeave: ne,
        onMouseDown: oe,
        onMouseUp: K,
        onFocus: I,
        onBlur: R,
        onKeyDown: J,
        onKeyUp: q,
        disabled: l,
        "aria-label": B,
        "aria-pressed": O,
        tabIndex: l ? -1 : 0,
        role: "button",
        ...j,
        children: [
          S.map((s) => /* @__PURE__ */ t.jsx(
            "div",
            {
              className: "ripple",
              style: {
                left: s.x - s.size / 2,
                top: s.y - s.size / 2,
                width: s.size,
                height: s.size,
                backgroundColor: re(s.variant)
              }
            },
            s.id
          )),
          d
        ]
      }
    )
  ] });
}, jt = ({ size: d = 16, color: p = "#F0F0F0" }) => /* @__PURE__ */ t.jsx("svg", { width: d, height: d, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
  "path",
  {
    d: "M12 4L4 12M4 4L12 12",
    stroke: p,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
let Ft = 0;
const It = ({
  value: d = "",
  onChange: p,
  placeholder: g = "Add a name",
  disabled: l = !1,
  error: x = !1,
  fullWidth: F = !1,
  id: C,
  name: W,
  "aria-label": v,
  className: B,
  style: j,
  ..._
}) => {
  const [E, O] = Me(!1), [P, V] = Me(!1), U = yt(null), S = $.useMemo(() => C || `text-input-${++Ft}`, [C]), m = (s) => {
    p && p(s.target.value);
  }, D = () => {
    O(!0);
  }, ee = () => {
    O(!1);
  }, te = () => {
    l || V(!0);
  }, N = () => {
    V(!1);
  }, re = () => {
    p && p(""), U.current && U.current.focus();
  }, L = () => l ? "disable" : x ? "error" : E && d ? "selected-filled" : E ? "selected" : d ? "filled" : P ? "hover" : "default", X = () => {
    const s = L(), a = {
      borderRadius: "8px",
      padding: "8px",
      border: "1px solid",
      outline: "none",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      position: "relative",
      width: F ? "100%" : "240px",
      minHeight: "37px",
      // 21px content + 16px padding
      boxSizing: "border-box",
      cursor: l ? "not-allowed" : "text",
      ...j
    };
    switch (s) {
      case "hover":
        return {
          ...a,
          backgroundColor: "#333333",
          borderColor: "transparent"
        };
      case "selected":
        return {
          ...a,
          backgroundColor: "#282828",
          borderColor: "#ffffff"
        };
      case "selected-filled":
        return {
          ...a,
          backgroundColor: "#282828",
          borderColor: "#ffffff"
        };
      case "filled":
        return {
          ...a,
          backgroundColor: "#282828",
          borderColor: "#333333"
        };
      case "disable":
        return {
          ...a,
          backgroundColor: "#181818",
          borderColor: "#282828"
        };
      case "error":
        return {
          ...a,
          backgroundColor: "#282828",
          borderColor: "#ff3131"
        };
      default:
        return {
          ...a,
          backgroundColor: "#282828",
          borderColor: "#333333"
        };
    }
  }, ne = () => {
    switch (L()) {
      case "hover":
        return "#f0f0f0";
      case "selected":
        return "#8e8e8e";
      case "selected-filled":
        return "#f0f0f0";
      case "filled":
        return "#f0f0f0";
      case "disable":
        return "#5d5d5d";
      case "error":
        return "#f0f0f0";
      default:
        return "#bababa";
    }
  }, oe = () => {
    switch (L()) {
      case "hover":
        return "#f0f0f0";
      case "selected":
        return "#8e8e8e";
      case "disable":
        return "#5d5d5d";
      default:
        return "#bababa";
    }
  }, K = X(), I = ne(), R = oe(), z = L(), J = (z === "selected" || z === "selected-filled" || z === "error") && E, q = z === "selected-filled";
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("style", { children: `
          #${S} {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            color: ${I} !important;
            font-family: ${M.fontFamily.primary.join(", ")} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: 21px !important;
            caret-color: ${J ? "#E5FF00" : "transparent"} !important;
          }
          
          #${S}::placeholder {
            color: ${R} !important;
            font-family: ${M.fontFamily.primary.join(", ")} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }
          
          #${S}::-webkit-input-placeholder {
            color: ${R} !important;
            font-family: ${M.fontFamily.primary.join(", ")} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }
          
          #${S}::-moz-placeholder {
            color: ${R} !important;
            font-family: ${M.fontFamily.primary.join(", ")} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }
          
          #${S}:-ms-input-placeholder {
            color: ${R} !important;
            font-family: ${M.fontFamily.primary.join(", ")} !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.4 !important;
            opacity: 1 !important;
          }
        ` }),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: B,
        style: K,
        onMouseEnter: te,
        onMouseLeave: N,
        children: /* @__PURE__ */ t.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "2px"
        }, children: [
          /* @__PURE__ */ t.jsx("div", { style: {
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            height: "21px",
            gap: "0px"
          }, children: /* @__PURE__ */ t.jsx(
            "input",
            {
              ref: U,
              type: "text",
              value: d,
              onChange: m,
              onFocus: D,
              onBlur: ee,
              placeholder: g,
              disabled: l,
              id: S,
              name: W,
              "aria-label": v,
              ..._
            }
          ) }),
          q && /* @__PURE__ */ t.jsx(
            "button",
            {
              type: "button",
              onClick: re,
              style: {
                background: "transparent",
                border: "none",
                padding: "2px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2px",
                width: "20px",
                height: "20px",
                flexShrink: 0,
                marginLeft: "4px",
                zIndex: 10
              },
              "aria-label": "Clear input",
              children: /* @__PURE__ */ t.jsx(jt, { size: 12, color: "#F0F0F0" })
            }
          )
        ] })
      }
    )
  ] });
};
export {
  _t as Button,
  Rt as Colors,
  Et as Spacing,
  It as TextInput,
  kt as Typography,
  be as borderRadius,
  r as colors,
  wt as getColor,
  Ct as getTypographyStyle,
  Q as spacing,
  M as typography
};
