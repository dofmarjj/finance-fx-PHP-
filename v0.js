self.AMP_CONFIG = {
  v: "012308242321000",
  type: "production",
  "allow-doc-opt-in": ["amp-next-page"],
  "allow-url-opt-in": [],
  canary: 0,
  a4aProfilingRate: 0.01,
  doubleclickSraExp: 0.01,
  doubleclickSraReportExcludedBlock: 0.1,
  flexAdSlots: 0.05,
  "flexible-bitrate": 0.1,
  "ios-fixed-no-transfer": 0,
  "story-ad-placements": 0.01,
  "story-disable-animations-first-page": 1,
  "story-load-inactive-outside-viewport": 1,
  "amp-sticky-ad-to-amp-ad-v4": 0,
  "story-video-cache-apply-audio": 0,
  "amp-story-subscriptions": 1,
};
/*AMP_CONFIG*/ self.AMP_EXP = {
  "flexible-bitrate": 0.1,
  "amp-story-first-page-max-bitrate": 0.3,
  "story-disable-animations-first-page": 1,
  "story-load-first-page-only": 1,
  "story-load-inactive-outside-viewport": 1,
  "story-ad-page-outlink": 0.02,
  "amp-geo-ssr": 1,
  "story-remote-localization": 1,
  "amp-story-subscriptions": 1,
  "attribution-reporting": 0.04,
}; /*AMP_EXP*/
self, (self.AMP = self.AMP || []);
try {
  (AMP._ = AMP._ || {}),
    (self.AMP && !Array.isArray(self.AMP)) ||
      (function () {
        function t(t, i) {
          for (var n = 0; n < i.length; n++) {
            var r = i[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function i(i, n, r) {
          return n && t(i.prototype, n), r && t(i, r), i;
        }
        var n,
          r = (function () {
            function t() {
              this.vt = new e();
            }
            return (
              (t.prototype.abort = function () {
                if (!this.vt.dt && ((this.vt.dt = !0), this.vt.bt)) {
                  var t = {
                    type: "abort",
                    bubbles: !1,
                    cancelable: !1,
                    target: this.vt,
                    currentTarget: this.vt,
                  };
                  this.vt.bt(t);
                }
              }),
              i(t, [
                {
                  key: "signal",
                  get: function () {
                    return this.vt;
                  },
                },
              ]),
              t
            );
          })(),
          e = (function () {
            function t() {
              (this.dt = !1), (this.bt = null);
            }
            return (
              i(t, [
                {
                  key: "aborted",
                  get: function () {
                    return this.dt;
                  },
                },
                {
                  key: "onabort",
                  get: function () {
                    return this.bt;
                  },
                  set: function (t) {
                    this.bt = t;
                  },
                },
              ]),
              t
            );
          })();
        function s(t, i) {
          for (
            var n = i || 0,
              r = this.length,
              e = n >= 0 ? n : Math.max(r + n, 0);
            e < r;
            e++
          ) {
            var s = this[e];
            if (s === t || (t != t && s != s)) return !0;
          }
          return !1;
        }
        function u(t, i) {
          (null == i || i > t.length) && (i = t.length);
          for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
          return r;
        }
        function o(t, i) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (n) return (n = n.call(t)).next.bind(n);
          if (
            Array.isArray(t) ||
            (n = (function (t, i) {
              if (t) {
                if ("string" == typeof t) return u(t, i);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? u(t, i)
                    : void 0
                );
              }
            })(t)) ||
            (i && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0;
            return function () {
              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function h() {
          return n || (n = Promise.resolve(void 0));
        }
        var a = function () {
          var t = this;
          this.promise = new Promise(function (i, n) {
            (t.resolve = i), (t.reject = n);
          });
        };
        function c(t) {
          return new Promise(function (i) {
            i(t());
          });
        }
        function f(t) {
          var i = Object.getOwnPropertyDescriptor(t, "message");
          if (null != i && i.writable) return t;
          var n = t.message,
            r = t.stack,
            e = new Error(n);
          for (var s in t) e[s] = t[s];
          return (e.stack = r), e;
        }
        function l(t) {
          for (
            var i, n = null, r = "", e = o(arguments, !0);
            !(i = e()).done;

          ) {
            var s = i.value;
            s instanceof Error && !n ? (n = f(s)) : (r && (r += " "), (r += s));
          }
          return (
            n ? r && (n.message = r + ": " + n.message) : (n = new Error(r)), n
          );
        }
        function v(t) {
          var i, n;
          null === (i = (n = self).__AMP_REPORT_ERROR) ||
            void 0 === i ||
            i.call(n, t);
        }
        function d(t) {
          var i = l.apply(null, arguments);
          setTimeout(function () {
            throw (v(i), i);
          });
        }
        function m(t) {
          var i = l.apply(null, arguments);
          return (i.expected = !0), i;
        }
        function p(t) {
          return (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        var g = Object.prototype,
          b = g.hasOwnProperty,
          y = g.toString;
        function w(t) {
          return "[object Object]" === y.call(t);
        }
        function A(t) {
          var i = Object.create(null);
          return t && Object.assign(i, t), i;
        }
        function x(t, i) {
          return b.call(t, i);
        }
        function E(t) {
          var i = A();
          for (var n in t)
            if (x(t, n)) {
              var r = t[n];
              i[n] = w(r) ? E(r) : r;
            }
          return i;
        }
        var P = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
          O = [
            "annotation-xml",
            "color-profile",
            "font-face",
            "font-face-src",
            "font-face-uri",
            "font-face-format",
            "font-face-name",
            "missing-glyph",
          ],
          I = { childList: !0, subtree: !0 };
        function T(t, i) {
          if (!P.test(i) || O.includes(i))
            throw new t('invalid custom element name "'.concat(i, '"'));
        }
        var M = (function () {
            function t(t, i) {
              (this.t = t), (this.gt = i), (this.yt = A());
            }
            var i = t.prototype;
            return (
              (i.define = function (t, i, n) {
                this.gt.define(t, i, n);
                var r = this.yt,
                  e = r[t];
                e && (e.resolve(), delete r[t]);
              }),
              (i.get = function (t) {
                var i = this.gt.getByName(t);
                if (i) return i.ctor;
              }),
              (i.whenDefined = function (t) {
                var i = this.t;
                if ((i.Promise, T(i.SyntaxError, t), this.gt.getByName(t)))
                  return h();
                var n = this.yt,
                  r = n[t];
                return r || ((r = new a()), (n[t] = r)), r.promise;
              }),
              (i.upgrade = function (t) {
                this.gt.upgrade(t);
              }),
              t
            );
          })(),
          S = (function () {
            function t(t) {
              (this.t = t),
                (this.wt = A()),
                (this.At = ""),
                (this.xt = null),
                (this.Et = null),
                (this.Ot = [t.document]);
            }
            var i = t.prototype;
            return (
              (i.current = function () {
                var t = this.xt;
                return (this.xt = null), t;
              }),
              (i.getByName = function (t) {
                var i = this.wt[t];
                if (i) return i;
              }),
              (i.getByConstructor = function (t) {
                var i = this.wt;
                for (var n in i) {
                  var r = i[n];
                  if (r.ctor === t) return r;
                }
              }),
              (i.define = function (t, i, n) {
                var r = this.t,
                  e = r.Error,
                  s = r.SyntaxError;
                if (n)
                  throw new e(
                    "Extending native custom elements is not supported"
                  );
                if ((T(s, t), this.getByName(t) || this.getByConstructor(i)))
                  throw new e('duplicate definition "'.concat(t, '"'));
                (this.wt[t] = { name: t, ctor: i }), this.Tt(t);
                for (var u, h = o(this.Ot, !0); !(u = h()).done; ) {
                  var a = u.value;
                  this.upgrade(a, t);
                }
              }),
              (i.upgrade = function (t, i) {
                for (
                  var n, r = !!i, e = i || this.At, s = o(this.Pt(t, e), !0);
                  !(n = s()).done;

                ) {
                  var u = n.value;
                  r ? this.It(u) : this.upgradeSelf(u);
                }
              }),
              (i.upgradeSelf = function (t) {
                var i = this.getByName(t.localName);
                i && this.St(t, i);
              }),
              (i.Pt = function (t, i) {
                return i && t.querySelectorAll ? t.querySelectorAll(i) : [];
              }),
              (i.St = function (t, i) {
                var n = i.ctor;
                if (!(t instanceof n)) {
                  this.xt = t;
                  try {
                    if (new n() !== t)
                      throw new this.t.Error(
                        "Constructor illegally returned a different instance."
                      );
                  } catch (t) {
                    d(t);
                  }
                }
              }),
              (i.It = function (t) {
                var i = this.getByName(t.localName);
                if (i && (this.St(t, i), t.connectedCallback))
                  try {
                    t.connectedCallback();
                  } catch (t) {
                    d(t);
                  }
              }),
              (i.Mt = function (t) {
                if (t.disconnectedCallback)
                  try {
                    t.disconnectedCallback();
                  } catch (t) {
                    d(t);
                  }
              }),
              (i.Tt = function (t) {
                var i = this;
                if (this.At) this.At += ",".concat(t);
                else {
                  this.At = t;
                  var n = new this.t.MutationObserver(function (t) {
                    t && i.Rt(t);
                  });
                  this.Et = n;
                  for (var r, e = o(this.Ot, !0); !(r = e()).done; ) {
                    var s = r.value;
                    n.observe(s, I);
                  }
                  !(function (t, i) {
                    var n,
                      r = t.Document,
                      e = t.Element,
                      s = t.Node,
                      u = t.document,
                      o = r.prototype,
                      h = e.prototype,
                      a = s.prototype,
                      c = o.createElement,
                      f = o.importNode,
                      l = a.appendChild,
                      v = a.cloneNode,
                      d = a.insertBefore,
                      m = a.removeChild,
                      p = a.replaceChild;
                    (o.createElement = function (t) {
                      var n = i.getByName(t);
                      return n ? new n.ctor() : c.apply(this, arguments);
                    }),
                      (o.importNode = function () {
                        var t = f.apply(this, arguments);
                        return (
                          t && this === u && (i.upgradeSelf(t), i.upgrade(t)), t
                        );
                      }),
                      (a.appendChild = function () {
                        var t = l.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.insertBefore = function () {
                        var t = d.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.removeChild = function () {
                        var t = m.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.replaceChild = function () {
                        var t = p.apply(this, arguments);
                        return i.sync(), t;
                      }),
                      (a.cloneNode = function () {
                        var t = v.apply(this, arguments);
                        return (
                          t.ownerDocument === u &&
                            (i.upgradeSelf(t), i.upgrade(t)),
                          t
                        );
                      });
                    var g = h,
                      b = Object.getOwnPropertyDescriptor(g, "innerHTML");
                    if (
                      (b ||
                        ((g = Object.getPrototypeOf(t.HTMLElement.prototype)),
                        (b = Object.getOwnPropertyDescriptor(g, "innerHTML"))),
                      null !== (n = b) && void 0 !== n && n.configurable)
                    ) {
                      var y = b.set;
                      (b.set = function (t) {
                        y.call(this, t), i.upgrade(this);
                      }),
                        Object.defineProperty(g, "innerHTML", b);
                    }
                  })(this.t, this);
                }
              }),
              (i.observe = function (t) {
                this.Ot.push(t), this.Et && this.Et.observe(t, I);
              }),
              (i.sync = function () {
                this.Et && this.Rt(this.Et.takeRecords());
              }),
              (i.Rt = function (t) {
                for (var i, n = o(t, !0); !(i = n()).done; ) {
                  var r = i.value;
                  if (r) {
                    for (
                      var e, s = r.addedNodes, u = r.removedNodes, h = o(s, !0);
                      !(e = h()).done;

                    ) {
                      var a = e.value,
                        c = this.Pt(a, this.At);
                      this.It(a);
                      for (var f, l = o(c, !0); !(f = l()).done; ) {
                        var v = f.value;
                        this.It(v);
                      }
                    }
                    for (var d, m = o(u, !0); !(d = m()).done; ) {
                      var p = d.value,
                        g = this.Pt(p, this.At);
                      this.Mt(p);
                      for (var b, y = o(g, !0); !(b = y()).done; ) {
                        var w = b.value;
                        this.Mt(w);
                      }
                    }
                  }
                }
              }),
              t
            );
          })();
        function R(t, i) {
          (i.prototype = Object.create(t.prototype, {
            constructor: { configurable: !0, writable: !0, value: i },
          })),
            _(i, t);
        }
        function _(t, i) {
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, i)
            : { __proto__: { test: !0 } }.test
            ? (t.__proto__ = i)
            : (function (t, i) {
                for (
                  var n = i;
                  null !== n && !Object.isPrototypeOf.call(n, t);

                ) {
                  for (
                    var r, e = o(Object.getOwnPropertyNames(n), !0);
                    !(r = e()).done;

                  ) {
                    var s = r.value;
                    if (!Object.hasOwnProperty.call(t, s)) {
                      var u = Object.getOwnPropertyDescriptor(n, s);
                      Object.defineProperty(t, s, u);
                    }
                  }
                  n = Object.getPrototypeOf(n);
                }
              })(t, i);
        }
        function k(t) {
          return t == this || this.documentElement.contains(t);
        }
        function C(t, i, n) {
          return (
            i in t
              ? Object.defineProperty(t, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[i] = n),
            t
          );
        }
        function N(t, i) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            i &&
              (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(t, i).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function D(t) {
          for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2
              ? N(Object(n), !0).forEach(function (i) {
                  C(t, i, n[i]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (i) {
                  Object.defineProperty(
                    t,
                    i,
                    Object.getOwnPropertyDescriptor(n, i)
                  );
                });
          }
          return t;
        }
        function j(t, i) {
          return (j =
            Object.setPrototypeOf ||
            function (t, i) {
              return (t.__proto__ = i), t;
            })(t, i);
        }
        function U(t, i) {
          if ("function" != typeof i && null !== i)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(i && i.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            i && j(t, i);
        }
        function L(t) {
          return (L = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function z(t, i) {
          if (i && ("object" === p(i) || "function" == typeof i)) return i;
          if (void 0 !== i)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t);
        }
        function H(t) {
          var i = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = L(t);
            if (i) {
              var e = L(this).constructor;
              n = Reflect.construct(r, arguments, e);
            } else n = r.apply(this, arguments);
            return z(this, n);
          };
        }
        function G(t) {
          return t ? Array.prototype.slice.call(t) : [];
        }
        var V = Array.isArray;
        function F(t) {
          return V(t) ? t : [t];
        }
        function B(t, i) {
          for (var n = [], r = 0, e = 0; e < t.length; e++) {
            var s = t[e];
            i(s, e, t) ? n.push(s) : (r < e && (t[r] = s), r++);
          }
          return r < t.length && (t.length = r), n;
        }
        function q(t, i) {
          for (var n = 0; n < t.length; n++) if (i(t[n], n, t)) return n;
          return -1;
        }
        function $(t, i) {
          var n = t.indexOf(i);
          return -1 != n && (t.splice(n, 1), !0);
        }
        function W(t, i) {
          var n = t.length - i.length;
          return n >= 0 && t.indexOf(i, n) == n;
        }
        function Y(t) {
          return "string" == typeof t;
        }
        function K(t) {
          return 1 == (null == t ? void 0 : t.nodeType);
        }
        function J(t) {
          return "number" == typeof t && isFinite(t);
        }
        var X = "​​​",
          Q = "​​​​";
        function Z(t) {
          return K(t)
            ? t.tagName.toLowerCase() + (t.id ? "#".concat(t.id) : "")
            : t;
        }
        function tt(t) {
          return t.indexOf(X) >= 0;
        }
        function it(t) {
          return t.replace(X, "");
        }
        function nt(t, i) {
          var n,
            r,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "Assertion failed";
          if (i) return i;
          t && -1 == e.indexOf(t) && (e += t);
          for (
            var s = 3, u = e.split("%s"), o = u.shift(), h = [o];
            u.length;

          ) {
            var a = arguments[s++],
              c = u.shift();
            (o += Z(a) + c), h.push(a, c.trim());
          }
          var f = new Error(o);
          throw (
            ((f.messageArray = B(h, function (t) {
              return "" !== t;
            })),
            null === (n = (r = self).__AMP_REPORT_ERROR) ||
              void 0 === n ||
              n.call(r, f),
            f)
          );
        }
        function rt(t, i, n, r, e) {
          return (
            V(e) ? t(n, e.concat([i])) : t(n, "".concat(e || r, ": %s"), i), i
          );
        }
        function et(t, i, n, r, e, s, u, o, h, a, c) {
          return t;
        }
        function st(t, i) {
          return t;
        }
        function ut(t, i) {
          return t;
        }
        function ot(t, i) {
          return t;
        }
        function ht(t, i, n, r, e, s, u, o, h, a, c) {
          return nt(X, t, i, n, r, e, s, u, o, h, a, c);
        }
        function at(t) {
          return JSON.parse(t);
        }
        function ct(t) {
          return "undefined" != typeof TextEncoder
            ? new TextEncoder().encode(t)
            : ft(unescape(encodeURIComponent(t)));
        }
        function ft(t) {
          for (var i = new Uint8Array(t.length), n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n);
            et(r <= 255), (i[n] = r);
          }
          return i;
        }
        function lt(t, i) {
          var n = t.crypto;
          if (!(n = n || t.msCrypto) || !n.getRandomValues) return null;
          var r = new Uint8Array(i);
          return n.getRandomValues(r), r;
        }
        function vt(t) {
          var i = !1,
            n = null,
            r = t;
          return function () {
            if (!i) {
              for (
                var t = arguments.length, e = new Array(t), s = 0;
                s < t;
                s++
              )
                e[s] = arguments[s];
              (n = r.apply(self, e)), (i = !0), (r = null);
            }
            return n;
          };
        }
        function dt(t, i, n) {
          var r = 0,
            e = null;
          function s(s) {
            (e = null), (r = t.setTimeout(u, n)), i.apply(null, s);
          }
          function u() {
            (r = 0), e && s(e);
          }
          return function () {
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
              i[n] = arguments[n];
            r ? (e = i) : s(i);
          };
        }
        function mt(t, i, n) {
          var r = 0,
            e = 0,
            s = null;
          function u() {
            r = 0;
            var o,
              h = n - (t.Date.now() - e);
            h > 0
              ? (r = t.setTimeout(u, h))
              : ((o = s), (s = null), i.apply(null, o));
          }
          return function () {
            e = t.Date.now();
            for (var i = arguments.length, o = new Array(i), h = 0; h < i; h++)
              o[h] = arguments[h];
            (s = o), r || (r = t.setTimeout(u, n));
          };
        }
        var pt = ["javascript:", "data:", "vbscript:"],
          gt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function bt(t) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          try {
            return decodeURIComponent(t);
          } catch (t) {
            return i;
          }
        }
        function yt(t) {
          var i,
            n = A();
          if (!t) return n;
          for (; (i = gt.exec(t)); ) {
            var r = bt(i[1], i[1]),
              e = i[2] ? bt(i[2].replace(/\+/g, " "), i[2]) : "";
            n[r] = e;
          }
          return n;
        }
        function wt(t) {
          var i = (t || self).location;
          return yt(i.originalHash || i.hash);
        }
        var At = function (t) {
            return self.AMP_CONFIG ? self.AMP_CONFIG[t] : null;
          },
          xt =
            ("string" == typeof At("cdnProxyRegex")
              ? new RegExp(At("cdnProxyRegex"))
              : At("cdnProxyRegex")) ||
            /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function Et(t) {
          if (!self.document || !self.document.head) return null;
          if (self.location && xt.test(self.location.origin)) return null;
          var i = self.document.head.querySelector(
            'meta[name="'.concat(t, '"]')
          );
          return (i && i.getAttribute("content")) || null;
        }
        var Pt = At("thirdPartyUrl") || "https://3p.ampproject.net",
          Ot = At("thirdPartyFrameHost") || "ampproject.net",
          It =
            ("string" == typeof At("thirdPartyFrameRegex")
              ? new RegExp(At("thirdPartyFrameRegex"))
              : At("thirdPartyFrameRegex")) || /^d-\d+\.ampproject\.net$/,
          Tt =
            At("cdnUrl") || Et("runtime-host") || "https://cdn.ampproject.org",
          Mt = /^https?:\/\/localhost(:\d+)?$/,
          St =
            At("errorReportingUrl") ||
            "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
          Rt =
            At("betaErrorReportingUrl") ||
            "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
          _t = At("localDev") || !1,
          kt = [
            /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,
            /(^|\.)gmail\.(com|dev)$/,
          ],
          Ct = At("geoApiUrl") || Et("amp-geo-api"),
          Nt = "";
        function Dt(t) {
          var i = t || self;
          return i.__AMP_MODE
            ? i.__AMP_MODE
            : (i.__AMP_MODE = (function (t) {
                return {
                  localDev: !1,
                  development: Ut(t, wt(t)),
                  esm: !1,
                  test: !1,
                  rtvVersion: jt(t),
                  ssrReady: !1,
                };
              })(i));
        }
        function jt(t) {
          var i;
          return (
            Nt ||
              (Nt =
                (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) ||
                "01".concat("2308242321000")),
            Nt
          );
        }
        function Ut(t, i) {
          var n = i || wt(t);
          return (
            ["1", "actions", "amp", "amp4ads", "amp4email"].includes(
              n.development
            ) || !!t.AMP_DEV_MODE
          );
        }
        var Lt = function () {},
          zt = void 0;
        function Ht(t) {
          zt = t;
        }
        var Gt = function () {
            return "01".concat("2308242321000");
          },
          Vt = function (t, i) {
            return i.reduce(function (t, i) {
              return "".concat(t, "&s[]=").concat(Bt(i));
            }, "https://log.amp.dev/?v="
              .concat(Gt(), "&id=")
              .concat(encodeURIComponent(t)));
          },
          Ft = function () {
            return ""
              .concat(Tt, "/rtv/")
              .concat(Gt(), "/log-messages.simple.json");
          },
          Bt = function (t) {
            return encodeURIComponent(String(Z(t)));
          },
          qt = function (t) {
            return parseInt(wt(t).log, 10);
          },
          $t = (function () {
            function t(t, i) {
              var n = this,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "";
              (this.win = t),
                (this.rr = i),
                (this.nr = this.tr()),
                (this.er = r),
                (this.ir = null),
                (this.ur = vt(function () {
                  t.fetch(Ft())
                    .then(function (t) {
                      return t.json();
                    }, Lt)
                    .then(function (t) {
                      t && (n.ir = t);
                    });
                })),
                (this.ar = this.assert.bind(this));
            }
            var i = t.prototype;
            return (
              (i.tr = function () {
                var t,
                  i = this.win;
                return null !== (t = i.console) &&
                  void 0 !== t &&
                  t.log &&
                  0 != qt(i)
                  ? this.cr()
                  : 0;
              }),
              (i.cr = function (t) {
                return this.rr(qt(t), Dt().development);
              }),
              (i.lr = function (t, i, n) {
                var r, e, s;
                if (i > (null !== (r = zt) && void 0 !== r ? r : this.nr))
                  return !1;
                var u = this.win.console,
                  o =
                    null !==
                      (e = ((s = {}),
                      C(s, 1, u.error),
                      C(s, 3, u.info),
                      C(s, 2, u.warn),
                      s)[i]) && void 0 !== e
                      ? e
                      : u.log,
                  h = this.sr(n),
                  a = "[".concat(t, "]");
                return (
                  Y(h[0]) ? (h[0] = a + " " + h[0]) : h.unshift(a),
                  o.apply(u, h),
                  !0
                );
              }),
              (i.fine = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.lr(t, 4, n);
              }),
              (i.info = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.lr(t, 3, n);
              }),
              (i.warn = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.lr(t, 2, n);
              }),
              (i.error = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                if (!this.lr(t, 1, n)) {
                  var e,
                    s,
                    u = this.createError.apply(this, n);
                  (u.name = t || u.name),
                    null === (e = (s = self).__AMP_REPORT_ERROR) ||
                      void 0 === e ||
                      e.call(s, u);
                }
              }),
              (i.expectedError = function (t) {
                for (
                  var i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    r = 1;
                  r < i;
                  r++
                )
                  n[r - 1] = arguments[r];
                var e, s;
                this.lr(t, 1, n) ||
                  null === (e = (s = self).__AMP_REPORT_ERROR) ||
                  void 0 === e ||
                  e.call(s, this.createExpectedError.apply(this, n));
              }),
              (i.createError = function (t) {
                return this.vr(l.apply(null, arguments));
              }),
              (i.createExpectedError = function (t) {
                return this.vr(m.apply(null, arguments));
              }),
              (i.vr = function (t) {
                return (
                  (t = f(t)),
                  this.er
                    ? t.message
                      ? -1 == t.message.indexOf(this.er) &&
                        (t.message += this.er)
                      : (t.message = this.er)
                    : tt(t.message) && (t.message = it(t.message)),
                  t
                );
              }),
              (i.sr = function (t) {
                return V(t[0]) ? this.hr(t[0]) : t;
              }),
              (i.hr = function (t) {
                var i,
                  n = t.shift();
                return (
                  Dt(this.win).development && this.ur(),
                  null !== (i = this.ir) && void 0 !== i && i[n]
                    ? [this.ir[n]].concat(t)
                    : ["More info at ".concat(Vt(n, t))]
                );
              }),
              (i.assert = function (t, i, n) {
                return V(i)
                  ? this.assert.apply(this, [t].concat(this.hr(i)))
                  : nt.apply(
                      null,
                      [this.er].concat(Array.prototype.slice.call(arguments))
                    );
              }),
              (i.assertElement = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, K(i), "Element expected", n);
                })(this.ar, t, i);
              }),
              (i.assertString = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, Y(i), "String expected", n);
                })(this.ar, t, i);
              }),
              (i.assertNumber = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, "number" == typeof i, "Number expected", n);
                })(this.ar, t, i);
              }),
              (i.assertArray = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, V(i), "Array expected", n);
                })(this.ar, t, i);
              }),
              (i.assertBoolean = function (t, i) {
                return (function (t, i, n) {
                  return rt(t, i, !!i === i, "Boolean expected", n);
                })(this.ar, t, i);
              }),
              t
            );
          })();
        self.__AMP_LOG = self.__AMP_LOG || {
          user: null,
          dev: null,
          userForEmbed: null,
        };
        var Wt = self.__AMP_LOG,
          Yt = null;
        function Kt(t, i) {
          if (!Yt) throw new Error("failed to call initLogConstructor");
          return new Yt(self, t, i);
        }
        function Jt(t) {
          return (
            Wt.user || (Wt.user = Xt(X)),
            (function (t, i) {
              return i && i.ownerDocument.defaultView != t;
            })(Wt.user.win, t)
              ? Wt.userForEmbed || (Wt.userForEmbed = Xt(Q))
              : Wt.user
          );
        }
        function Xt(t) {
          return Kt(function (t, i) {
            return i || t >= 1 ? 4 : 2;
          }, t);
        }
        function Qt() {
          return (
            Wt.dev ||
            (Wt.dev = Kt(function (t) {
              return t >= 3 ? 4 : t >= 2 ? 3 : 0;
            }))
          );
        }
        function Zt(t, i, n, r, e, s, u, o, h, a, c) {
          return t;
        }
        function ti(t, i, n, r, e, s, u, o, h, a, c) {
          return Jt().assert(t, i, n, r, e, s, u, o, h, a, c);
        }
        var ii = ["GET", "POST"];
        function ni(t, i) {
          var n = new XMLHttpRequest();
          if (!("withCredentials" in n))
            throw Qt().createExpectedError("CORS is not supported");
          return n.open(t, i, !0), n;
        }
        var ri = (function () {
          function t(t) {
            (this._t = t),
              (this.status = this._t.status),
              (this.statusText = this._t.statusText),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.headers = new si(t)),
              (this.bodyUsed = !1),
              (this.body = null),
              (this.url = t.responseURL);
          }
          var i = t.prototype;
          return (
            (i.clone = function () {
              return et(!this.bodyUsed), new t(this._t);
            }),
            (i.kt = function () {
              return (
                et(!this.bodyUsed),
                (this.bodyUsed = !0),
                Promise.resolve(this._t.responseText)
              );
            }),
            (i.text = function () {
              return this.kt();
            }),
            (i.json = function () {
              return this.kt().then(at);
            }),
            (i.arrayBuffer = function () {
              return this.kt().then(ct);
            }),
            t
          );
        })();
        function ei(t) {
          return void 0 === t
            ? "GET"
            : ((t = t.toUpperCase()), et(ii.includes(t)), t);
        }
        var si = (function () {
            function t(t) {
              this._t = t;
            }
            var i = t.prototype;
            return (
              (i.get = function (t) {
                return this._t.getResponseHeader(t);
              }),
              (i.has = function (t) {
                return null != this._t.getResponseHeader(t);
              }),
              t
            );
          })(),
          ui = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = A(),
                e = D(
                  {
                    status: 200,
                    statusText: "OK",
                    responseText: t ? String(t) : "",
                    getResponseHeader: function (t) {
                      var i = String(t).toLowerCase();
                      return x(r, i) ? r[i] : null;
                    },
                  },
                  n
                );
              if (
                ((e.status =
                  void 0 === n.status ? 200 : parseInt(n.status, 10)),
                V(n.headers))
              )
                n.headers.forEach(function (t) {
                  var i = t[0],
                    n = t[1];
                  r[String(i).toLowerCase()] = String(n);
                });
              else if (w(n.headers))
                for (var s in n.headers)
                  r[String(s).toLowerCase()] = String(n.headers[s]);
              return (
                n.statusText && (e.statusText = String(n.statusText)),
                i.call(this, e)
              );
            }
            return n;
          })(ri);
        function oi(t) {
          return (t.ownerDocument || t).defaultView;
        }
        var hi,
          ai =
            /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
        function ci(t, i, n, r, e) {
          return (
            e ||
            (i
              ? "�"
              : r
              ? t.slice(0, -1) +
                "\\" +
                t.slice(-1).charCodeAt(0).toString(16) +
                " "
              : "\\" + t)
          );
        }
        function fi(t) {
          return void 0 !== hi
            ? hi
            : (hi = (function (t) {
                try {
                  var i = t.ownerDocument,
                    n = i.createElement("div"),
                    r = i.createElement("div");
                  return n.appendChild(r), n.querySelector(":scope div") === r;
                } catch (t) {
                  return !1;
                }
              })(t));
        }
        function li(t, i) {
          return t.replace(/^|,/g, "$&".concat(i, " "));
        }
        function vi(t) {
          return String(t).replace(ai, ci);
        }
        function di(t) {
          et(/^[\w-]+$/.test(t));
        }
        function mi(t, i) {
          var n = t.classList,
            r = "i-amphtml-scoped";
          n.add(r);
          var e = li(i, ".".concat(r)),
            s = t.querySelectorAll(e);
          return n.remove(r), s;
        }
        function pi(t, i) {
          if (fi(t)) return t.querySelector(li(i, ":scope"));
          var n = mi(t, i)[0];
          return void 0 === n ? null : n;
        }
        function gi(t, i) {
          var n =
            t.matches ||
            t.webkitMatchesSelector ||
            t.mozMatchesSelector ||
            t.msMatchesSelector ||
            t.oMatchesSelector;
          return !!n && n.call(t, i);
        }
        function bi(t, i, n) {
          var r;
          for (r = t; r && r !== n; r = r.parentElement) if (i(r)) return r;
          return null;
        }
        function yi(t, i) {
          return t.closest
            ? t.closest(i)
            : bi(t, function (t) {
                return gi(t, i);
              });
        }
        function wi(t, i) {
          for (var n = t.lastElementChild; n; n = n.previousElementSibling)
            if (i(n)) return n;
          return null;
        }
        function Ai(t, i) {
          return di(i), pi(t, "> [".concat(i, "]"));
        }
        function xi(t) {
          return (
            Y((i = t)) ? (n = i) : K(i) && (n = i.tagName),
            !(!n || !n.toLowerCase().startsWith("i-")) ||
              (t.nodeType === Node.ELEMENT_NODE &&
                (st(t),
                t.hasAttribute("placeholder") ||
                  t.hasAttribute("fallback") ||
                  t.hasAttribute("overflow")))
          );
          var i, n;
        }
        var Ei,
          Pi = { bubbles: !0, cancelable: !0 };
        function Oi(t, i, n) {
          if (i(t)) n();
          else {
            var r = oi(t);
            if (r.MutationObserver) {
              var e = new r.MutationObserver(function () {
                i(t) && (e.disconnect(), n());
              });
              e.observe(t, { childList: !0 });
            } else
              var s = r.setInterval(function () {
                i(t) && (r.clearInterval(s), n());
              }, 5);
          }
        }
        function Ii(t, i) {
          Oi(
            t.documentElement,
            function () {
              return !!t.body;
            },
            i
          );
        }
        function Ti(t) {
          return new Promise(function (i) {
            return Ii(t, i);
          });
        }
        function Mi(t) {
          var i;
          null === (i = t.parentElement) || void 0 === i || i.removeChild(t);
        }
        function Si(t, i) {
          t.insertBefore(i, t.firstChild);
        }
        function Ri(t) {
          var i = t.isConnected;
          if (void 0 !== i) return i;
          for (var n = t; (n = _i(n)).host; ) n = n.host;
          return n.nodeType === Node.DOCUMENT_NODE;
        }
        function _i(t) {
          if (Node.prototype.getRootNode) return t.getRootNode();
          var i, n;
          for (
            i = t;
            i.parentNode &&
            (!(n = i) ||
              ("I-AMPHTML-SHADOW-ROOT" != n.tagName &&
                (11 != n.nodeType ||
                  "[object ShadowRoot]" !==
                    Object.prototype.toString.call(n))));
            i = i.parentNode
          );
          return i;
        }
        function ki(t, i) {
          var n = t;
          do {
            if (n.nextSibling) return !0;
          } while ((n = n.parentNode) && n != i);
          return !1;
        }
        function Ci(t) {
          try {
            t.focus();
          } catch (t) {}
        }
        function Ni(t) {
          return t.parent && t.parent != t;
        }
        function Di(t, i, n, r) {
          var e = n || {};
          et(t.ownerDocument);
          var s = r || Pi,
            u = s.bubbles,
            o = s.cancelable,
            h = new MessageEvent(i, { data: e, bubbles: u, cancelable: o });
          t.dispatchEvent(h);
        }
        function ji(t, i) {
          return i !== t && t.contains(i);
        }
        function Ui(t) {
          return t.hasAttribute("i-amphtml-ssr");
        }
        function Li(t, i) {
          var n = t.head.querySelector("script[nonce]");
          if (n) {
            var r = n.nonce || n.getAttribute("nonce");
            i.setAttribute("nonce", null != r ? r : "");
          }
        }
        function zi(t, i, n, r) {
          return {
            left: t,
            top: i,
            width: n,
            height: r,
            bottom: i + r,
            right: t + n,
            x: t,
            y: i,
          };
        }
        function Hi(t, i, n) {
          return zi(
            t.left - t.width * i,
            t.top - t.height * n,
            t.width * (1 + 2 * i),
            t.height * (1 + 2 * n)
          );
        }
        function Gi(t, i, n) {
          return (0 == i && 0 == n) || (0 == t.width && 0 == t.height)
            ? t
            : zi(t.left + i, t.top + n, t.width, t.height);
        }
        function Vi() {
          return Ri(this) ? Ei.call(this) : zi(0, 0, 0, 0);
        }
        function Fi(t) {
          return (
            !t.IntersectionObserver ||
            !t.IntersectionObserverEntry ||
            !!t.IntersectionObserver._stub ||
            !(function (t) {
              try {
                return (
                  new t.IntersectionObserver(function () {}, {
                    root: t.document,
                  }),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })(t) ||
            (function (t) {
              return /apple/i.test(t.navigator.vendor);
            })(t)
          );
        }
        var Bi = (function () {
          function t(i, n) {
            (this.Nt = i),
              (this.Ct = D({ root: null, rootMargin: "0px 0px 0px 0px" }, n)),
              (this.jt = []),
              (this.Dt = null),
              t._upgraders.push(this.Ut.bind(this));
          }
          var n = t.prototype;
          return (
            (n.disconnect = function () {
              this.Dt ? this.Dt.disconnect() : (this.jt.length = 0);
            }),
            (n.takeRecords = function () {
              return this.Dt ? this.Dt.takeRecords() : [];
            }),
            (n.observe = function (t) {
              this.Dt
                ? this.Dt.observe(t)
                : -1 == this.jt.indexOf(t) && this.jt.push(t);
            }),
            (n.unobserve = function (t) {
              if (this.Dt) this.Dt.unobserve(t);
              else {
                var i = this.jt.indexOf(t);
                -1 != i && this.jt.splice(i, 1);
              }
            }),
            (n.Ut = function (t) {
              var i = new t(this.Nt, this.Ct);
              this.Dt = i;
              for (var n, r = o(this.jt, !0); !(n = r()).done; ) {
                var e = n.value;
                i.observe(e);
              }
              this.jt.length = 0;
            }),
            i(t, [
              {
                key: "root",
                get: function () {
                  return this.Dt ? this.Dt.root : this.Ct.root || null;
                },
              },
              {
                key: "rootMargin",
                get: function () {
                  return this.Dt ? this.Dt.rootMargin : this.Ct.rootMargin;
                },
              },
              {
                key: "thresholds",
                get: function () {
                  return this.Dt
                    ? this.Dt.thresholds
                    : [].concat(this.Ct.threshold || 0);
                },
              },
            ]),
            t
          );
        })();
        function qi(t) {
          return (t = Number(t)) ? (t > 0 ? 1 : -1) : t;
        }
        Bi._upgraders = [];
        var $i = Object.prototype.hasOwnProperty;
        function Wi(t, i) {
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var n = Object(t), r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            if (null != e) for (var s in e) $i.call(e, s) && (n[s] = e[s]);
          }
          return n;
        }
        function Yi(t) {
          return Object.keys(t).map(function (i) {
            return t[i];
          });
        }
        function Ki(t) {
          return !t.ResizeObserver || !!t.ResizeObserver._stub;
        }
        var Ji,
          Xi = (function () {
            function t(i) {
              (this.Nt = i),
                (this.jt = []),
                (this.Dt = null),
                t._upgraders.push(this.Ut.bind(this));
            }
            var i = t.prototype;
            return (
              (i.disconnect = function () {
                this.Dt ? this.Dt.disconnect() : (this.jt.length = 0);
              }),
              (i.observe = function (t) {
                this.Dt
                  ? this.Dt.observe(t)
                  : -1 == this.jt.indexOf(t) && this.jt.push(t);
              }),
              (i.unobserve = function (t) {
                if (this.Dt) this.Dt.unobserve(t);
                else {
                  var i = this.jt.indexOf(t);
                  -1 != i && this.jt.splice(i, 1);
                }
              }),
              (i.Ut = function (t) {
                var i = new t(this.Nt);
                this.Dt = i;
                for (var n, r = o(this.jt, !0); !(n = r()).done; ) {
                  var e = n.value;
                  i.observe(e);
                }
                this.jt.length = 0;
              }),
              t
            );
          })();
        function Qi(t, i) {
          var n = i > 0 ? 0 | i : 0;
          return this.substr(n, t.length) === t;
        }
        (Xi._upgraders = []),
          (Ji = self).fetch ||
            (Object.defineProperty(Ji, "fetch", {
              value: function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return new Promise(function (n, r) {
                  var e = ei(i.method || "GET"),
                    s = ni(e, t);
                  "include" == i.credentials && (s.withCredentials = !0),
                    ("document" !== i.responseType &&
                      "text" !== i.responseType) ||
                      (s.responseType = i.responseType),
                    i.headers &&
                      Object.keys(i.headers).forEach(function (t) {
                        s.setRequestHeader(t, i.headers[t]);
                      }),
                    (s.onreadystatechange = function () {
                      if (!(s.readyState < 2))
                        return s.status < 100 || s.status > 599
                          ? ((s.onreadystatechange = null),
                            void r(
                              Jt().createExpectedError(
                                "Unknown HTTP status ".concat(s.status)
                              )
                            ))
                          : void (4 == s.readyState && n(new ri(s)));
                    }),
                    (s.onerror = function () {
                      r(Jt().createExpectedError("Network failure"));
                    }),
                    (s.onabort = function () {
                      r(Jt().createExpectedError("Request aborted"));
                    }),
                    "POST" == e ? s.send(i.body) : s.send();
                });
              },
              writable: !0,
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Ji, "Response", {
              value: ui,
              writable: !0,
              enumerable: !1,
              configurable: !0,
            })),
          (function (t) {
            t.Math.sign ||
              t.Object.defineProperty(t.Math, "sign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: qi,
              });
          })(self),
          (function (t) {
            t.Object.assign ||
              t.Object.defineProperty(t.Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Wi,
              });
          })(self),
          (function (t) {
            t.Object.values ||
              t.Object.defineProperty(t.Object, "values", {
                configurable: !0,
                writable: !0,
                value: Yi,
              });
          })(self),
          (function (t) {
            t.Array.prototype.includes ||
              t.Object.defineProperty(t.Array.prototype, "includes", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: s,
              });
          })(self),
          (function (t) {
            var i = t.Map,
              n = new i();
            if (n.set(0, 0) !== n) {
              var r = n.set;
              t.Object.defineProperty(i.prototype, "set", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                  return r.apply(this, arguments), this;
                },
              });
            }
          })(self),
          (function (t) {
            var i = t.WeakMap,
              n = new i();
            if (n.set({}, 0) !== n) {
              var r = n.set;
              t.Object.defineProperty(i.prototype, "set", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                  return r.apply(this, arguments), this;
                },
              });
            }
          })(self),
          (function (t) {
            var i = t.Set,
              n = new i([1]);
            if (
              (n.size < 1 &&
                (t.Set = function (t) {
                  var n = new i();
                  if (t)
                    for (var r = G(t), e = 0; e < r.length; e++) n.add(r[e]);
                  return n;
                }),
              n.add(0) !== n)
            ) {
              var r = n.add;
              t.Object.defineProperty(i.prototype, "add", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function () {
                  return r.apply(this, arguments), this;
                },
              });
            }
          })(self),
          (function (t) {
            t.String.prototype.startsWith ||
              t.Object.defineProperty(t.String.prototype, "startsWith", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Qi,
              });
          })(self),
          self.document &&
            ((function (t) {
              var i = t.HTMLDocument || t.Document;
              i &&
                !i.prototype.contains &&
                t.Object.defineProperty(i.prototype, "contains", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: k,
                });
            })(self),
            (function (t) {
              (function (t) {
                if (!t.document) return !1;
                try {
                  return (
                    0 !==
                    t.document.createElement("div").getBoundingClientRect().top
                  );
                } catch (t) {
                  return !0;
                }
              })(t) &&
                ((Ei = Element.prototype.getBoundingClientRect),
                t.Object.defineProperty(
                  t.Element.prototype,
                  "getBoundingClientRect",
                  { value: Vi }
                ));
            })(self),
            (function (t, i) {
              var n = t.document,
                r = (function (t) {
                  var i = t.customElements;
                  return !!(i && i.define && i.get && i.whenDefined);
                })(t);
              if (
                !(
                  !n ||
                  (r &&
                    (function (t) {
                      return (
                        -1 === t.HTMLElement.toString().indexOf("[native code]")
                      );
                    })(t))
                )
              ) {
                var e = !0,
                  s = !1;
                if (i && r)
                  try {
                    var u = t.Reflect,
                      o = Object.create(i.prototype);
                    Function.call.call(i, o),
                      (s = !(null == u || !u.construct));
                  } catch (t) {
                    e = !1;
                  }
                s
                  ? (function (t) {
                      var i = t.HTMLElement,
                        n = t.Reflect;
                      function r() {
                        var t = this.constructor;
                        return n.construct(i, [], t);
                      }
                      R(i, r),
                        (t.HTMLElementOrig = t.HTMLElement),
                        (t.HTMLElement = r);
                    })(t)
                  : e &&
                    (function (t) {
                      var i = t.Element,
                        n = t.HTMLElement,
                        r = t.document,
                        e = r.createElement,
                        s = new S(t),
                        u = new M(t, s);
                      Object.defineProperty(t, "customElements", {
                        enumerable: !0,
                        configurable: !0,
                        value: u,
                      });
                      var o = i.prototype,
                        h = o.attachShadow,
                        a = o.createShadowRoot;
                      function c() {
                        var t = this.constructor,
                          i = s.current();
                        if (!i) {
                          var n = s.getByConstructor(t);
                          i = e.call(r, n.name);
                        }
                        return _(i, t.prototype), i;
                      }
                      h &&
                        ((o.attachShadow = function (t) {
                          var i = h.apply(this, arguments);
                          return s.observe(i), i;
                        }),
                        (o.attachShadow.toString = function () {
                          return h.toString();
                        })),
                        a &&
                          ((o.createShadowRoot = function () {
                            var t = a.apply(this, arguments);
                            return s.observe(t), t;
                          }),
                          (o.createShadowRoot.toString = function () {
                            return a.toString();
                          })),
                        R(n, c),
                        (t.HTMLElementOrig = t.HTMLElement),
                        (t.HTMLElement = c),
                        c.call ||
                          ((c.apply = t.Function.apply),
                          (c.bind = t.Function.bind),
                          (c.call = t.Function.call));
                    })(t);
              }
            })(
              self,
              (function () {
                return function () {};
              })()
            ),
            (function (t) {
              Fi(t) &&
                (function (t) {
                  if (!t.IntersectionObserver)
                    return (
                      (t.IntersectionObserver = Bi),
                      void (t.IntersectionObserver._stub = Bi)
                    );
                  var i = t.IntersectionObserver;
                  (t.IntersectionObserver = (function (t, i) {
                    return function (n, r) {
                      var e;
                      return 9 ===
                        (null == r || null === (e = r.root) || void 0 === e
                          ? void 0
                          : e.nodeType)
                        ? new i(n, r)
                        : new t(n, r);
                    };
                  })(t.IntersectionObserver, Bi)),
                    (t.IntersectionObserver._stub = Bi),
                    (t.IntersectionObserver._native = i);
                })(t),
                (function (t) {
                  t.IntersectionObserverEntry &&
                    !(
                      "isIntersecting" in t.IntersectionObserverEntry.prototype
                    ) &&
                    Object.defineProperty(
                      t.IntersectionObserverEntry.prototype,
                      "isIntersecting",
                      {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                          return this.intersectionRatio > 0;
                        },
                      }
                    );
                })(t);
            })(self),
            (function (t) {
              Ki(t) &&
                (function (t) {
                  t.ResizeObserver ||
                    ((t.ResizeObserver = Xi), (t.ResizeObserver._stub = Xi));
                })(t);
            })(self),
            (function (t) {
              t.AbortController ||
                (Object.defineProperty(t, "AbortController", {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: r,
                }),
                Object.defineProperty(t, "AbortSignal", {
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                  value: e,
                }));
            })(self));
        var Zi = "cls",
          tn = "clstu",
          nn = "cls-1",
          rn = "pc",
          en = "building",
          sn = "mounting",
          un = "loading",
          on = "complete",
          hn = "error";
        function an(t) {
          return t.readyState != un && "uninitialized" != t.readyState;
        }
        function cn(t) {
          return t.readyState == on;
        }
        function fn(t, i) {
          ln(t, an, i);
        }
        function ln(t, i, n) {
          var r = i(t);
          r
            ? n(t)
            : t.addEventListener("readystatechange", function e() {
                i(t) &&
                  (r || ((r = !0), n(t)),
                  t.removeEventListener("readystatechange", e));
              });
        }
        function vn(t) {
          return new Promise(function (i) {
            fn(t, i);
          });
        }
        function dn(t) {
          return new Promise(function (i) {
            ln(t, cn, i);
          });
        }
        var mn = ["amp-mustache"],
          pn = "latest",
          gn = /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org(\/.*)?$/;
        function bn(t) {
          if (!t) return null;
          var i = t.match(
              /^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)(?:\?ssr-css=[0|1])?$/i
            ),
            n = i ? i[2] : void 0,
            r = i ? i[3] : void 0;
          return n && r ? { extensionId: n, extensionVersion: r } : null;
        }
        function yn(t, i, n) {
          var r = t.document.createElement("script");
          (r.async = !0),
            An(i)
              ? (n = "")
              : r.setAttribute(
                  mn.indexOf(i) >= 0 ? "custom-template" : "custom-element",
                  i
                ),
            r.setAttribute("data-script", i),
            r.setAttribute("i-amphtml-inserted", ""),
            Li(t.document, r),
            r.setAttribute("crossorigin", "anonymous");
          var e = (function (t, i, n, r) {
              var e = Tt,
                s = Dt().rtvVersion,
                u = n ? "-" + n : "";
              return ""
                .concat(e, "/rtv/")
                .concat(s, "/v0/")
                .concat(i)
                .concat(u)
                .concat(".js");
            })(t.location, i, n),
            s = {
              createScriptURL: function (t) {
                return gn.test(t) || "fonts.googleapis.com" === new URL(t).host
                  ? t
                  : "";
              },
            };
          return (
            self.trustedTypes &&
              self.trustedTypes.createPolicy &&
              (s = self.trustedTypes.createPolicy(
                "extension-script#createExtensionScript",
                s
              )),
            (r.src = s.createScriptURL(e)),
            r
          );
        }
        function wn(t, i, n, r) {
          for (
            var e =
                !(arguments.length > 4 && void 0 !== arguments[4]) ||
                arguments[4],
              s =
                ":not([i-amphtml-loaded-new-version])" +
                (e ? "" : ":not([i-amphtml-inserted])"),
              u = t.document.head.querySelectorAll(
                'script[src*="/'.concat(i, '-"]').concat(s)
              ),
              o = [],
              h = 0;
            h < u.length;
            h++
          ) {
            var a = u[h],
              c = bn(a.src);
            if (c) {
              var f = c.extensionId,
                l = c.extensionVersion;
              f == i && (An(i) || l == n || (l == pn && r)) && o.push(a);
            }
          }
          return o;
        }
        function An(t) {
          return t.startsWith("_");
        }
        function xn(t, i, n, r) {
          Nn((t = Sn(t)), t, i, n), r && Cn(t, i);
        }
        function En(t, i, n, r) {
          var e = _n(t),
            s = kn(e);
          Nn(s, e, i, n), r && Cn(s, i);
        }
        function Pn(t, i) {
          return Cn((t = Sn(t)), i);
        }
        function On(t, i) {
          return Cn(kn(_n(t)), i);
        }
        function In(t, i) {
          var n = kn(_n(t));
          return Hn(n, i) ? Cn(n, i) : null;
        }
        function Tn(t, i) {
          return Dn(kn(t), i);
        }
        function Mn(t, i) {
          return jn(kn(t), i);
        }
        function Sn(t) {
          return t.__AMP_TOP || (t.__AMP_TOP = t);
        }
        function Rn(t, i) {
          var n = (t.ownerDocument || t).defaultView,
            r = i || Sn(n);
          if (n && n != r && Sn(n) == r)
            try {
              return n.frameElement;
            } catch (t) {}
          return null;
        }
        function _n(t) {
          return t.nodeType
            ? (function (t) {
                return Pn(t, "ampdoc");
              })(oi(t)).getAmpDoc(t)
            : t;
        }
        function kn(t) {
          var i = _n(t);
          return i.isSingleDoc() ? i.win : i;
        }
        function Cn(t, i) {
          Zt(Hn(t, i));
          var n = Un(t)[i];
          return (
            n.obj ||
              (Zt(n.ctor),
              Zt(n.context),
              (n.obj = new n.ctor(n.context)),
              Zt(n.obj),
              (n.context = null),
              n.resolve && n.resolve(n.obj)),
            n.obj
          );
        }
        function Nn(t, i, n, r, e, s) {
          var u = Un(t),
            o = u[n];
          o ||
            (o = u[n] =
              {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                sharedInstance: s || !1,
              }),
            (!e && o.ctor) ||
              ((o.ctor = r),
              (o.context = i),
              (o.sharedInstance = s || !1),
              o.resolve && Cn(t, n));
        }
        function Dn(t, i) {
          var n = jn(t, i);
          if (n) return n;
          var r,
            e,
            s,
            u,
            o = Un(t);
          return (
            (o[i] =
              ((e = (r = new a()).promise),
              (s = r.reject),
              (u = r.resolve),
              e.catch(function () {}),
              {
                obj: null,
                promise: e,
                resolve: u,
                reject: s,
                context: null,
                ctor: null,
              })),
            o[i].promise
          );
        }
        function jn(t, i) {
          var n = Un(t)[i];
          return n
            ? n.promise
              ? n.promise
              : (Cn(t, i), (n.promise = Promise.resolve(n.obj)))
            : null;
        }
        function Un(t) {
          var i = t.__AMP_SERVICES;
          return i || (i = t.__AMP_SERVICES = {}), i;
        }
        function Ln(t) {
          return "function" == typeof t.dispose;
        }
        function zn(t, i) {
          if (Ln(i))
            try {
              (function (t) {
                return Zt(Ln(t)), t;
              })(i).dispose();
            } catch (i) {
              Qt().error("SERVICE", "failed to dispose service", t, i);
            }
        }
        function Hn(t, i) {
          var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
          return !(!n || !n.ctor);
        }
        function Gn(t, i, n, r) {
          return Vn(t, i, n, r).then(function (t) {
            return (function (t, i, n) {
              return ti(
                t,
                "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",
                i,
                n,
                n,
                n
              );
            })(t, i, n);
          });
        }
        function Vn(t, i, n, r) {
          var e = Mn(t, i);
          if (e) return e;
          var s = _n(t);
          return s
            .whenExtensionsKnown()
            .then(function () {
              var t = s.getExtensionVersion(n);
              return t ? Pn(s.win, "extensions").waitForExtension(n, t) : null;
            })
            .then(function (n) {
              return n ? (r ? Mn(t, i) : Tn(t, i)) : null;
            });
        }
        var Fn,
          Bn = function (t) {
            return Vn(t, "access", "amp-access");
          },
          qn = function (t) {
            return Vn(t, "subscriptions", "amp-subscriptions");
          },
          $n = function (t) {
            return In(t, "action");
          },
          Wn = function (t) {
            return Gn(t, "activity", "amp-analytics");
          },
          Yn = function (t) {
            return _n(t);
          },
          Kn = function (t) {
            return Pn(t, "ampdoc");
          },
          Jn = function (t) {
            return Vn(t, "amp-analytics-instrumentation", "amp-analytics");
          },
          Xn = function (t) {
            return (function (t, i, n) {
              var r = In(t, i);
              return r ? Promise.resolve(r) : Vn(t, i, "amp-bind");
            })(t, "bind");
          },
          Qn = function (t) {
            return Tn(t, "cid");
          },
          Zn = function (t) {
            return Pn(t, "crypto");
          },
          tr = function (t) {
            return On(t, "documentInfo").get();
          },
          ir = function (t) {
            return Pn(t, "extensions");
          },
          nr = function (t) {
            return On(t, "history");
          },
          rr = function (t) {
            return In(t, "loadingIndicator");
          },
          er = function (t) {
            return On(t, "mutator");
          },
          sr = function (t) {
            return Pn(t, "performance");
          },
          ur = function (t) {
            return Pn(t, "platform");
          },
          or = function (t) {
            return Pn(t, "preconnect");
          },
          hr = function (t) {
            return On(t, "resources");
          },
          ar = function (t) {
            return Tn(t, "storage");
          },
          cr = function (t) {
            return (function (t, i) {
              return Cn(t, "timer");
            })(t);
          },
          fr = function (t) {
            return In(t, "url-replace");
          },
          lr = function (t) {
            return Vn(t, "geo", "amp-geo", !0);
          },
          vr = function (t) {
            return In(t, "url");
          },
          dr = function (t) {
            return On(t, "viewer");
          },
          mr = function (t) {
            return Pn(t, "vsync");
          },
          pr = function (t) {
            return On(t, "viewport");
          },
          gr = function (t) {
            return Pn(t, "xhr");
          },
          br = "prerender",
          yr = "preview",
          wr = "visible",
          Ar = "hidden",
          xr = "paused",
          Er = "inactive",
          Pr = (function () {
            function t() {
              this.tt = null;
            }
            var i = t.prototype;
            return (
              (i.add = function (t) {
                var i = this;
                return (
                  this.tt || (this.tt = []),
                  this.tt.push(t),
                  function () {
                    i.remove(t);
                  }
                );
              }),
              (i.remove = function (t) {
                this.tt && $(this.tt, t);
              }),
              (i.removeAll = function () {
                this.tt && (this.tt.length = 0);
              }),
              (i.fire = function (t) {
                if (this.tt)
                  for (var i, n = o(this.tt.slice(), !0); !(i = n()).done; )
                    (0, i.value)(t);
              }),
              (i.getHandlerCount = function () {
                var t, i;
                return null !==
                  (t =
                    null === (i = this.tt) || void 0 === i
                      ? void 0
                      : i.length) && void 0 !== t
                  ? t
                  : 0;
              }),
              t
            );
          })(),
          Or = (function () {
            function t() {
              (this._n = A()), (this.zt = null);
            }
            var i = t.prototype;
            return (
              (i.get = function (t) {
                var i = this._n[t];
                return null == i ? null : i;
              }),
              (i.whenSignal = function (t) {
                var i,
                  n = null === (i = this.zt) || void 0 === i ? void 0 : i[t];
                if (!n) {
                  var r = this._n[t];
                  (n =
                    null != r
                      ? {
                          promise:
                            "number" == typeof r
                              ? Promise.resolve(r)
                              : Promise.reject(r),
                        }
                      : new a()),
                    this.zt || (this.zt = A()),
                    (this.zt[t] = n);
                }
                return n.promise;
              }),
              (i.signal = function (t, i) {
                var n;
                if (null == this._n[t]) {
                  var r = null != i ? i : Date.now();
                  this._n[t] = r;
                  var e =
                    null === (n = this.zt) || void 0 === n ? void 0 : n[t];
                  null != e &&
                    e.resolve &&
                    (e.resolve(r), (e.resolve = void 0), (e.reject = void 0));
                }
              }),
              (i.rejectSignal = function (t, i) {
                var n;
                if (null == this._n[t]) {
                  this._n[t] = i;
                  var r =
                    null === (n = this.zt) || void 0 === n ? void 0 : n[t];
                  null != r &&
                    r.reject &&
                    (r.reject(i),
                    r.promise.catch(function () {}),
                    (r.resolve = void 0),
                    (r.reject = void 0));
                }
              }),
              (i.reset = function (t) {
                var i;
                this._n[t] && delete this._n[t];
                var n = null === (i = this.zt) || void 0 === i ? void 0 : i[t];
                n && !n.resolve && delete this.zt[t];
              }),
              t
            );
          })(),
          Ir = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
          Tr = {
            getPropertyPriority: function () {
              return "";
            },
            getPropertyValue: function () {
              return "";
            },
          };
        function Mr(t) {
          var i = t.replace(/[A-Z]/g, function (t) {
            return "-" + t.toLowerCase();
          });
          return Ir.some(function (t) {
            return i.startsWith(t + "-");
          })
            ? "-".concat(i)
            : i;
        }
        function Sr(t, i, n) {
          if (i.startsWith("--")) return i;
          Fn || (Fn = A());
          var r = Fn[i];
          if (!r || n) {
            if (((r = i), void 0 === t[i])) {
              var e = (function (t) {
                  return t.charAt(0).toUpperCase() + t.slice(1);
                })(i),
                s = (function (t, i) {
                  for (var n = 0; n < Ir.length; n++) {
                    var r = Ir[n] + i;
                    if (void 0 !== t[r]) return r;
                  }
                  return "";
                })(t, e);
              void 0 !== t[s] && (r = s);
            }
            n || (Fn[i] = r);
          }
          return r;
        }
        function Rr(t, i) {
          var n = t.style;
          for (var r in i)
            n.setProperty(Mr(Sr(n, r)), String(i[r]), "important");
        }
        function _r(t, i, n, r, e) {
          var s = Sr(t.style, i, e);
          if (s) {
            var u = r ? n + r : n;
            t.style.setProperty(Mr(s), u);
          }
        }
        function kr(t, i) {
          for (var n in i) _r(t, n, i[n]);
        }
        function Cr(t, i) {
          void 0 === i && (i = t.hasAttribute("hidden")),
            i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "");
        }
        function Nr(t) {
          return "".concat(t, "px");
        }
        function Dr(t, i) {
          return t.getComputedStyle(i) || Tr;
        }
        function jr(t) {
          var i = t[Sr(t, "visibilityState", !0)];
          if (i) return i;
          var n = Sr(t, "hidden", !0);
          return n in t && t[n] ? Ar : wr;
        }
        function Ur(t, i) {
          if (t.addEventListener) {
            var n = zr(t);
            n && t.addEventListener(n, i);
          }
        }
        function Lr(t, i) {
          if (t.removeEventListener) {
            var n = zr(t);
            n && t.removeEventListener(n, i);
          }
        }
        function zr(t) {
          var i = Sr(t, "hidden", !0),
            n = i.indexOf("Hidden");
          return -1 != n
            ? i.substring(0, n) + "Visibilitychange"
            : "visibilitychange";
        }
        var Hr = (function () {
            function t() {}
            return (
              (t.getTop = function (t) {
                return t.top;
              }),
              (t.getLocation = function (t) {
                return t.location;
              }),
              (t.getDocumentReferrer = function (t) {
                return t.document.referrer;
              }),
              (t.getHostname = function (t) {
                return t.location.hostname;
              }),
              (t.getUserAgent = function (t) {
                return t.navigator.userAgent;
              }),
              (t.getUserLanguage = function (t) {
                return t.navigator.userLanguage || t.navigator.language;
              }),
              (t.getDevicePixelRatio = function () {
                return self.devicePixelRatio || 1;
              }),
              (t.getSendBeacon = function (t) {
                if (t.navigator.sendBeacon)
                  return t.navigator.sendBeacon.bind(t.navigator);
              }),
              (t.getXMLHttpRequest = function (t) {
                return t.XMLHttpRequest;
              }),
              (t.getImage = function (t) {
                return t.Image;
              }),
              t
            );
          })(),
          Gr = "__AMP__",
          Vr = "-ampdoc-ext-known",
          Fr = "-ampdoc-first-visible",
          Br = "-ampdoc-next-visible",
          qr = "-ampdoc-first-previewed",
          $r = (function () {
            function t(t, i, n) {
              (this.win = t),
                (this.Lt = null),
                i &&
                  ((this.Lt = new Yr(t, { params: Xr(t, n) })),
                  (t.document.__AMPDOC = this.Lt));
            }
            var i = t.prototype;
            return (
              (i.isSingleDoc = function () {
                return !!this.Lt;
              }),
              (i.getSingleDoc = function () {
                return Zt(this.Lt);
              }),
              (i.Ht = function (t) {
                return t.everAttached && "function" == typeof t.getAmpDoc
                  ? t.getAmpDoc()
                  : null;
              }),
              (i.getAmpDocIfAvailable = function (t) {
                for (var i = t; i; ) {
                  var n = this.Ht(t);
                  if (n) return n;
                  var r = _i(i);
                  if (!r) break;
                  var e = r.__AMPDOC;
                  if (e) return e;
                  i = r.host ? r.host : Rn(r, this.win);
                }
                return null;
              }),
              (i.getAmpDoc = function (t) {
                var i = this.getAmpDocIfAvailable(t);
                if (!i) throw Qt().createError("No ampdoc found for", t);
                return i;
              }),
              (i.installShadowDoc = function (t, i, n) {
                Zt(!i.__AMPDOC);
                var r = new Kr(this.win, t, i, n);
                return (i.__AMPDOC = r), r;
              }),
              (i.installFieDoc = function (t, i, n) {
                var r = i.document;
                Zt(!r.__AMPDOC);
                var e = Zt(i.frameElement),
                  s = new Jr(i, t, this.getAmpDoc(e), n);
                return (r.__AMPDOC = s), s;
              }),
              t
            );
          })(),
          Wr = (function () {
            function t(t, i, n) {
              var r = this;
              (this.win = t),
                (this.Gt = A()),
                (this.Vt = i),
                (this.Ft = (n && n.signals) || new Or()),
                (this.Bt = (n && n.params) || A()),
                (this.qt = null),
                (this.$t = {});
              var e,
                s = this.Bt.visibilityState;
              Zt(
                !s ||
                  "prerender" === (e = s) ||
                  "preview" === e ||
                  "visible" === e ||
                  "hidden" === e ||
                  "paused" === e ||
                  "inactive" === e
              ),
                (this.Wt = (n && n.visibilityState) || s || null),
                (this.J = null),
                (this.Kt = new Pr()),
                (this.Yt = null),
                (this.Jt = []);
              var u = this.Xt.bind(this);
              this.Vt && this.Jt.push(this.Vt.onVisibilityChanged(u)),
                Ur(this.win.document, u),
                this.Jt.push(function () {
                  return Lr(r.win.document, u);
                }),
                this.Xt();
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                (function (t) {
                  var i = Un(t),
                    n = function (t) {
                      if (!Object.prototype.hasOwnProperty.call(i, t))
                        return "continue";
                      var n = i[t];
                      if (n.sharedInstance) return "continue";
                      n.obj
                        ? zn(t, n.obj)
                        : n.promise &&
                          n.promise.then(function (i) {
                            return zn(t, i);
                          });
                    };
                  for (var r in i) n(r);
                })(this),
                  this.Jt.forEach(function (t) {
                    return t();
                  });
              }),
              (i.isSingleDoc = function () {
                return Zt(null);
              }),
              (i.getParent = function () {
                return this.Vt;
              }),
              (i.signals = function () {
                return this.Ft;
              }),
              (i.getParam = function (t) {
                var i = this.Bt[t];
                return null == i ? null : i;
              }),
              (i.getMeta = function () {
                var t = this;
                return (
                  this.qt ||
                    ((this.qt = A()),
                    this.win.document.head
                      .querySelectorAll("meta[name]")
                      .forEach(function (i) {
                        var n = i.getAttribute("name"),
                          r = i.getAttribute("content");
                        n && null !== r && void 0 === t.qt[n] && (t.qt[n] = r);
                      })),
                  A(this.qt)
                );
              }),
              (i.getMetaByName = function (t) {
                if (!t) return null;
                var i = this.getMeta()[t];
                return void 0 !== i ? i : null;
              }),
              (i.setMetaByName = function (t, i) {
                Zt(null);
              }),
              (i.declaresExtension = function (t, i) {
                var n = this.$t[t];
                return !(!n || (i && n !== i));
              }),
              (i.declareExtension = function (t, i) {
                Zt(!this.$t[t] || this.$t[t] === i), (this.$t[t] = i);
              }),
              (i.getExtensionVersion = function (t) {
                return this.$t[t] || null;
              }),
              (i.setExtensionsKnown = function () {
                this.Ft.signal(Vr);
              }),
              (i.whenExtensionsKnown = function () {
                return this.Ft.whenSignal(Vr);
              }),
              (i.getRootNode = function () {
                return Zt(null);
              }),
              (i.getHeadNode = function () {}),
              (i.isBodyAvailable = function () {
                return Zt(!1);
              }),
              (i.getBody = function () {
                return Zt(null);
              }),
              (i.waitForBodyOpen = function () {
                return Zt(null);
              }),
              (i.isReady = function () {
                return Zt(null);
              }),
              (i.whenReady = function () {
                return Zt(null);
              }),
              (i.getUrl = function () {
                return Zt(null);
              }),
              (i.getElementById = function (t) {
                return this.getRootNode().getElementById(t);
              }),
              (i.contains = function (t) {
                return this.getRootNode().contains(t);
              }),
              (i.overrideVisibilityState = function (t) {
                this.Wt != t && ((this.Wt = t), this.Xt());
              }),
              (i.Xt = function () {
                for (
                  var t, i = jr(this.win.document), n = wr, r = this.Vt;
                  r;
                  r = r.getParent()
                )
                  if (r.getVisibilityState() != wr) {
                    n = r.getVisibilityState();
                    break;
                  }
                var e = this.Wt || wr;
                if (
                  ((t =
                    e == wr && n == wr && i == wr
                      ? wr
                      : i == Ar && e == xr
                      ? i
                      : e == xr || e == Er
                      ? e
                      : n == xr || n == Er
                      ? n
                      : e == yr || i == yr || n == yr
                      ? yr
                      : e == br || i == br || n == br
                      ? br
                      : Ar),
                  this.J != t)
                ) {
                  if (t == wr) {
                    var s,
                      u = this.win.performance,
                      o = Math.floor(
                        null !== (s = u.timeOrigin) && void 0 !== s
                          ? s
                          : u.timing.navigationStart
                      );
                    null != this.J && (o += Math.floor(u.now())),
                      (this.Yt = o),
                      this.Ft.signal(Fr, o),
                      this.Ft.signal(Br, o);
                  } else this.Ft.reset(Br);
                  t == yr && this.Ft.signal(qr), (this.J = t), this.Kt.fire();
                }
              }),
              (i.whenFirstPreviewedOrVisible = function () {
                return Promise.race([
                  this.whenFirstPreviewed(),
                  this.whenFirstVisible(),
                ]);
              }),
              (i.whenFirstPreviewed = function () {
                return this.Ft.whenSignal(qr).then(function () {});
              }),
              (i.whenFirstVisible = function () {
                return this.Ft.whenSignal(Fr).then(function () {});
              }),
              (i.whenNextVisible = function () {
                return this.Ft.whenSignal(Br).then(function () {});
              }),
              (i.getFirstVisibleTime = function () {
                return this.Ft.get(Fr);
              }),
              (i.getLastVisibleTime = function () {
                return this.Yt;
              }),
              (i.getVisibilityState = function () {
                return Zt(this.J);
              }),
              (i.isPreview = function () {
                return this.J == yr;
              }),
              (i.isVisible = function () {
                return this.J == wr;
              }),
              (i.hasBeenVisible = function () {
                return null != this.getLastVisibleTime();
              }),
              (i.onVisibilityChanged = function (t) {
                return this.Kt.add(t);
              }),
              (i.registerSingleton = function (t) {
                return !this.Gt[t] && ((this.Gt[t] = !0), !0);
              }),
              t
            );
          })(),
          Yr = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n) {
              var r;
              return (
                ((r = i.call(this, t, null, n)).Qt = r.win.document.body
                  ? Promise.resolve(r.win.document.body)
                  : Ti(r.win.document).then(function () {
                      return r.getBody();
                    })),
                (r.Zt = vn(r.win.document)),
                r
              );
            }
            var r = n.prototype;
            return (
              (r.isSingleDoc = function () {
                return !0;
              }),
              (r.getRootNode = function () {
                return this.win.document;
              }),
              (r.getUrl = function () {
                return Hr.getLocation(this.win).href;
              }),
              (r.getHeadNode = function () {
                return this.win.document.head;
              }),
              (r.isBodyAvailable = function () {
                return !!this.win.document.body;
              }),
              (r.getBody = function () {
                return this.win.document.body;
              }),
              (r.waitForBodyOpen = function () {
                return this.Qt;
              }),
              (r.isReady = function () {
                return an(this.win.document);
              }),
              (r.whenReady = function () {
                return this.Zt;
              }),
              n
            );
          })(Wr),
          Kr = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r, e) {
              var s;
              ((s = i.call(this, t, null, e)).ti = n),
                (s.ii = r),
                (s.ni = null);
              var u = new a();
              (s.Qt = u.promise), (s.ri = u.resolve), (s.ei = !1);
              var o = new a();
              return (s.Zt = o.promise), (s.si = o.resolve), s;
            }
            var r = n.prototype;
            return (
              (r.isSingleDoc = function () {
                return !1;
              }),
              (r.getRootNode = function () {
                return this.ii;
              }),
              (r.getUrl = function () {
                return this.ti;
              }),
              (r.getHeadNode = function () {
                return this.ii;
              }),
              (r.isBodyAvailable = function () {
                return !!this.ni;
              }),
              (r.getBody = function () {
                return this.ni;
              }),
              (r.setBody = function (t) {
                Zt(!this.ni), (this.ni = t), this.ri(t), (this.ri = void 0);
              }),
              (r.waitForBodyOpen = function () {
                return this.Qt;
              }),
              (r.isReady = function () {
                return this.ei;
              }),
              (r.setReady = function () {
                Zt(!this.ei), (this.ei = !0), this.si(), (this.si = void 0);
              }),
              (r.whenReady = function () {
                return this.Zt;
              }),
              (r.getMeta = function () {
                return A(this.qt);
              }),
              (r.setMetaByName = function (t, i) {
                Zt(t), this.qt || (this.qt = A()), (this.qt[t] = i);
              }),
              n
            );
          })(Wr),
          Jr = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r, e) {
              var s;
              ((s = i.call(this, t, r, e)).ti = n),
                (s.Qt = s.win.document.body
                  ? Promise.resolve(s.win.document.body)
                  : Ti(s.win.document).then(function () {
                      return s.getBody();
                    })),
                (s.ei = !1);
              var u = new a();
              return (s.Zt = u.promise), (s.si = u.resolve), s;
            }
            var r = n.prototype;
            return (
              (r.isSingleDoc = function () {
                return !1;
              }),
              (r.getRootNode = function () {
                return this.win.document;
              }),
              (r.getUrl = function () {
                return this.ti;
              }),
              (r.getHeadNode = function () {
                return this.win.document.head;
              }),
              (r.isBodyAvailable = function () {
                return !!this.win.document.body;
              }),
              (r.getBody = function () {
                return this.win.document.body;
              }),
              (r.waitForBodyOpen = function () {
                return this.Qt;
              }),
              (r.isReady = function () {
                return this.ei;
              }),
              (r.whenReady = function () {
                return this.Zt;
              }),
              (r.setReady = function () {
                Zt(!this.ei), (this.ei = !0), this.si(), (this.si = void 0);
              }),
              n
            );
          })(Wr);
        function Xr(t, i) {
          var n = A();
          return (
            i
              ? Object.assign(n, i)
              : (t.name &&
                  0 == t.name.indexOf(Gr) &&
                  Object.assign(n, yt(t.name.substring(Gr.length))),
                t.location &&
                  t.location.hash &&
                  Object.assign(n, yt(t.location.hash))),
            n
          );
        }
        function Qr(t) {
          if (!t.hasAttribute("src") && "srcset" in t == 0) {
            var i = t.getAttribute("srcset") || "",
              n = /\S+/.exec(i);
            if (null == n) return;
            var r = n[0];
            t.setAttribute("src", r);
          }
        }
        var Zr = "nodisplay",
          te = "fixed",
          ie = "fixed-height",
          ne = "responsive",
          re = "container",
          ee = "fill",
          se = "flex-item",
          ue = "fluid",
          oe = "intrinsic",
          he =
            /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
        function ae(t) {
          if (
            "nodisplay" === (i = t) ||
            "fixed" === i ||
            "fixed-height" === i ||
            "responsive" === i ||
            "container" === i ||
            "fill" === i ||
            "flex-item" === i ||
            "fluid" === i ||
            "intrinsic" === i
          )
            return t;
          var i;
        }
        function ce(t) {
          return "i-amphtml-layout-" + t;
        }
        function fe(t) {
          return (
            t == te ||
            t == ie ||
            t == ne ||
            t == ee ||
            t == se ||
            t == ue ||
            t == oe
          );
        }
        function le(t) {
          return "number" == typeof t
            ? t + "px"
            : t &&
              /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(
                t
              )
            ? /^\d+(\.\d+)?$/.test(t)
              ? t + "px"
              : t
            : void 0;
        }
        function ve(t) {
          !(function (t) {
            ht(
              /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(
                null != t ? t : ""
              ),
              "Invalid length value: %s",
              t
            );
          })(t);
          var i = /[a-z]+/i.exec(null != t ? t : "");
          return ht(i, "Failed to read units from %s", t), i[0];
        }
        function de(t) {
          var i = parseFloat(t);
          return J(i) ? i : void 0;
        }
        function me(t, i) {
          t.classList.add("i-amphtml-fill-content"),
            i && t.classList.add("i-amphtml-replaced-content");
        }
        function pe(t, i, n, r) {
          for (var e, s = o(F(t), !0); !(e = s()).done; ) {
            var u = e.value,
              h = i.getAttribute(u);
            null !== h ? n.setAttribute(u, h) : r && n.removeAttribute(u);
          }
        }
        var ge,
          be = "amp:attached",
          ye = "amp:load-start",
          we = "amp:load-end",
          Ae = "ready-upgrade",
          xe = "upgraded",
          Ee = "built",
          Pe = "mounted",
          Oe = "load-start",
          Ie = "render-start",
          Te = "load-end",
          Me = "unload",
          Se = (function () {
            function t(t, i) {
              (this.t = t), (this.Nt = i), (this.oi = {}), (this.ui = null);
            }
            var i = t.prototype;
            return (
              (i.start = function () {
                (this.ui = this.oi), (this.oi = {});
              }),
              (i.resolveMatchQuery = function (t) {
                return "1" === this.hi(t, Re, "1");
              }),
              (i.resolveListQuery = function (t) {
                return this.hi(t, _e, "");
              }),
              (i.complete = function () {
                for (var t in this.ui)
                  t in this.oi || ke(this.ui[t], this.Nt, !1);
                this.ui = null;
              }),
              (i.dispose = function () {
                for (var t in this.oi) ke(this.oi[t], this.Nt, !1);
                this.oi = {};
              }),
              (i.hi = function (t, i, n) {
                if (!t.trim()) return n;
                var r = this.oi[t];
                return (
                  r || (et(this.ui), (r = this.ui[t])),
                  r || ke((r = i(this.t, t)), this.Nt, !0),
                  (this.oi[t] = r),
                  (function (t) {
                    for (var i = 0; i < t.length; i++) {
                      var n = t[i],
                        r = n.query,
                        e = n.value;
                      if (!r || r.matches) return e;
                    }
                    return "";
                  })(r)
                );
              }),
              t
            );
          })();
        function Re(t, i) {
          return [
            { query: t.matchMedia(i), value: "1" },
            { query: null, value: "" },
          ];
        }
        function _e(t, i) {
          return i
            .split(",")
            .map(function (i) {
              if (0 != (i = i.replace(/\s+/g, " ").trim()).length) {
                var n, r, e;
                if (")" == i.charAt(i.length - 1)) {
                  var s = 1;
                  for (e = i.length - 2; e >= 0; e--) {
                    var u = i.charAt(e);
                    if (("(" == u ? s-- : ")" == u && s++, 0 == s)) break;
                  }
                  var o = e - 1;
                  if (e > 0)
                    for (e--; e >= 0; e--) {
                      var h = i.charAt(e);
                      if (
                        !(
                          "%" == h ||
                          "-" == h ||
                          "_" == h ||
                          (h >= "a" && h <= "z") ||
                          (h >= "A" && h <= "Z") ||
                          (h >= "0" && h <= "9")
                        )
                      )
                        break;
                    }
                  if (e >= o) return null;
                } else
                  for (e = i.length - 2; e >= 0; e--) {
                    var a = i.charAt(e);
                    if (
                      !(
                        "%" == a ||
                        "." == a ||
                        (a >= "a" && a <= "z") ||
                        (a >= "A" && a <= "Z") ||
                        (a >= "0" && a <= "9")
                      )
                    )
                      break;
                  }
                return (
                  e >= 0
                    ? ((n = i.substring(0, e + 1).trim()),
                      (r = i.substring(e + 1).trim()))
                    : ((r = i), (n = void 0)),
                  r ? { query: n ? t.matchMedia(n) : null, value: r } : null
                );
              }
            })
            .filter(Boolean);
        }
        function ke(t, i, n) {
          for (var r = 0; r < t.length; r++) {
            var e = t[r].query;
            e &&
              (void 0 !== e.onchange
                ? (e.onchange = n ? i : null)
                : n
                ? e.addListener(i)
                : e.removeListener(i));
          }
        }
        function Ce(t) {
          var i = t.ownerDocument || t;
          return (
            (ge && ge.ownerDocument === i) || (ge = i.createElement("div")), Ne
          );
        }
        function Ne(t) {
          return (function (t, i) {
            if (
              (et(1 === i.length),
              et(Array.isArray(i) || x(i, "raw")),
              self.trustedTypes && self.trustedTypes.createPolicy)
            ) {
              var n = self.trustedTypes.createPolicy(
                "static-template#createNode",
                {
                  createHTML: function (t) {
                    return i[0];
                  },
                }
              );
              t.innerHTML = n.createHTML("ignored");
            } else t.innerHTML = i[0];
            var r = t.firstElementChild;
            return et(r), et(!r.nextElementSibling), t.removeChild(r), r;
          })(ge, t);
        }
        var De = [
            '<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>',
          ],
          je = {
            "AMP-PIXEL": { width: "0px", height: "0px" },
            "AMP-ANALYTICS": { width: "1px", height: "1px" },
            "AMP-AUDIO": null,
            "AMP-SOCIAL-SHARE": { width: "60px", height: "44px" },
          };
        function Ue(t) {
          var i = t.getAttribute("layout"),
            n = t.getAttribute("width"),
            r = t.getAttribute("height"),
            e = t.getAttribute("sizes"),
            s = t.getAttribute("heights"),
            u = i ? ae(i) : null;
          ht(void 0 !== u, 'Invalid "layout" value: %s, %s', i, t);
          var o = n && "auto" != n ? le(n) : n;
          ht(void 0 !== o, 'Invalid "width" value: %s, %s', n, t);
          var h,
            a,
            c,
            f,
            l = r && "fluid" != r ? le(r) : r;
          if (
            (ht(void 0 !== l, 'Invalid "height" value: %s, %s', r, t),
            (u && u != te && u != ie) ||
              (o && l) ||
              ((f = (f = t.tagName).toUpperCase()), void 0 === je[f]))
          )
            (h = o), (a = l);
          else {
            var v = (function (t) {
              var i = t.tagName.toUpperCase();
              if ((et(void 0 !== je[i]), !je[i])) {
                var n = t.ownerDocument,
                  r = i.replace(/^AMP\-/, ""),
                  e = n.createElement(r);
                (e.controls = !0),
                  kr(e, { position: "absolute", visibility: "hidden" }),
                  n.body.appendChild(e),
                  (je[i] = {
                    width: (e.offsetWidth || 1) + "px",
                    height: (e.offsetHeight || 1) + "px",
                  }),
                  n.body.removeChild(e);
              }
              return je[i];
            })(t);
            (h = o || u == ie ? o : v.width), (a = l || v.height);
          }
          return (
            ((c =
              u ||
              (h || a
                ? "fluid" == a
                  ? ue
                  : !a || (h && "auto" != h)
                  ? a && h && (e || s)
                    ? ne
                    : te
                  : ie
                : re)) != te &&
              c != ie &&
              c != ne &&
              c != oe) ||
              ht(a, 'The "height" attribute is missing: %s', t),
            c == ie &&
              ht(
                !h || "auto" == h,
                'The "width" attribute must be missing or "auto": %s',
                t
              ),
            (c != te && c != ne && c != oe) ||
              ht(
                h && "auto" != h,
                'The "width" attribute must be present and not "auto": %s',
                t
              ),
            c == ne || c == oe
              ? ht(
                  ve(h) == ve(a),
                  'Length units should be the same for "width" and "height": %s, %s, %s',
                  n,
                  r,
                  t
                )
              : ht(null === s, '"heights" attribute must be missing: %s', t),
            { layout: c, width: h, height: a }
          );
        }
        var Le,
          ze = "EXPERIMENTS",
          He = "amp-experiment-toggles",
          Ge = "__AMP__EXPERIMENT_TOGGLES";
        function Ve(t, i) {
          return !!Be(t)[i];
        }
        function Fe(t, i, n, r) {
          var e = Ve(t, i),
            s = null != n ? n : !e;
          if (s != e && ((Be(t)[i] = s), !r)) {
            var u = qe(t);
            (u[i] = s),
              (function (t, i) {
                var n = [];
                for (var r in i) n.push((!1 === i[r] ? "-" : "") + r);
                try {
                  var e;
                  null === (e = t.localStorage) ||
                    void 0 === e ||
                    e.setItem(He, n.join(","));
                } catch (t) {
                  Jt().error(ze, "Failed to save experiments to localStorage.");
                }
              })(t, u),
              Jt().warn(
                ze,
                '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental',
                i,
                s ? "enabled" : "disabled",
                t.location.hostname
              );
          }
          return s;
        }
        function Be(t) {
          var i, n, r, e, s;
          if (t[Ge]) return t[Ge];
          t[Ge] = A();
          var u = t[Ge];
          et(u);
          var h = D(
            D({}, null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}),
            null !== (n = t.AMP_EXP) && void 0 !== n
              ? n
              : at(
                  (null === (r = t.__AMP_EXP) || void 0 === r
                    ? void 0
                    : r.textContent) || "{}"
                )
          );
          for (var a in h) {
            var c = h[a];
            "number" == typeof c &&
              c >= 0 &&
              c <= 1 &&
              (u[a] = Math.random() < c);
          }
          var f =
            null === (e = t.AMP_CONFIG) || void 0 === e
              ? void 0
              : e["allow-doc-opt-in"];
          if (V(f) && f.length) {
            var l = t.document.head.querySelector(
              'meta[name="amp-experiments-opt-in"]'
            );
            if (l)
              for (
                var v,
                  d,
                  m = o(
                    (null === (v = l.getAttribute("content")) || void 0 === v
                      ? void 0
                      : v.split(",")) || [],
                    !0
                  );
                !(d = m()).done;

              ) {
                var p = d.value;
                f.includes(p) && (u[p] = !0);
              }
          }
          Object.assign(u, qe(t));
          var g =
            null === (s = t.AMP_CONFIG) || void 0 === s
              ? void 0
              : s["allow-url-opt-in"];
          if (V(g) && g.length)
            for (
              var b,
                y = yt(t.location.originalHash || t.location.hash),
                w = o(g, !0);
              !(b = w()).done;

            ) {
              var x = b.value,
                E = y["e-".concat(x)];
              "1" == E && (u[x] = !0), "0" == E && (u[x] = !1);
            }
          return u;
        }
        function qe(t) {
          var i,
            n = "";
          try {
            var r;
            "localStorage" in t &&
              (n =
                null !== (r = t.localStorage.getItem(He)) && void 0 !== r
                  ? r
                  : "");
          } catch (t) {
            Qt().warn(ze, "Failed to retrieve experiments from localStorage.");
          }
          for (
            var e,
              s =
                (null === (i = n) || void 0 === i
                  ? void 0
                  : i.split(/\s*,\s*/g)) || [],
              u = A(),
              h = o(s, !0);
            !(e = h()).done;

          ) {
            var a = e.value;
            a && ("-" == a[0] ? (u[a.substr(1)] = !1) : (u[a] = !0));
          }
          return u;
        }
        function $e(t, i, n, r) {
          var e = t,
            s = n,
            u = function (t) {
              try {
                return s(t);
              } catch (t) {
                var i, n;
                throw (
                  (null === (i = (n = self).__AMP_REPORT_ERROR) ||
                    void 0 === i ||
                    i.call(n, t),
                  t)
                );
              }
            },
            o = (function () {
              if (void 0 !== Le) return Le;
              Le = !1;
              try {
                var t = {
                  get capture() {
                    return (Le = !0), !1;
                  },
                };
                self.addEventListener("test-options", null, t),
                  self.removeEventListener("test-options", null, t);
              } catch (t) {}
              return Le;
            })(),
            h = !(null == r || !r.capture);
          return (
            e.addEventListener(i, u, o ? r : h),
            function () {
              null == e || e.removeEventListener(i, u, o ? r : h),
                (s = null),
                (e = null),
                (u = null);
            }
          );
        }
        var We = "Failed to load:";
        function Ye(t, i, n, r) {
          var e = { detail: n };
          if ((Object.assign(e, r), "function" == typeof t.CustomEvent))
            return new t.CustomEvent(i, e);
          var s = t.document.createEvent("CustomEvent");
          return s.initCustomEvent(i, !!e.bubbles, !!e.cancelable, n), s;
        }
        function Ke(t, i, n, r) {
          return $e(t, i, n, r);
        }
        function Je(t) {
          return t.data;
        }
        function Xe(t, i, n, r) {
          var e = n,
            s = $e(
              t,
              i,
              function (t) {
                try {
                  e(t);
                } finally {
                  (e = null), s();
                }
              },
              r
            );
          return s;
        }
        function Qe(t) {
          var i, n;
          if (
            (function (t) {
              return !!(
                t.complete ||
                "complete" == t.readyState ||
                (Ze(t) && t.readyState > 0) ||
                (t.document && "complete" == t.document.readyState)
              );
            })(t)
          )
            return Promise.resolve(t);
          var r = Ze(t);
          return r && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc
            ? Promise.reject(t)
            : new Promise(function (e, s) {
                if (
                  ((i = r
                    ? Xe(t, "loadedmetadata", e, { capture: !0 })
                    : Xe(t, "load", e)),
                  t.tagName)
                ) {
                  var u = t;
                  if (
                    r &&
                    !t.hasAttribute("src") &&
                    !(u = wi(t, function (t) {
                      return "SOURCE" === t.tagName;
                    }))
                  )
                    return s(new Error("Media has no source."));
                  n = Xe(u, "error", s);
                }
              }).then(
                function () {
                  return n && n(), t;
                },
                function () {
                  i && i(),
                    (function (t) {
                      Ze(t) &&
                        (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                      var i = t;
                      throw (
                        (i && i.src && (i = i.src), Jt().createError(We, i))
                      );
                    })(t);
                }
              );
        }
        function Ze(t) {
          return "AUDIO" === t.tagName || "VIDEO" === t.tagName;
        }
        var ts = {
          "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
          variant: "amp-experiment",
        };
        function is(t) {
          var i = t.document;
          return (
            Zt(i.body),
            Object.keys(ts).filter(function (t) {
              return i.querySelector(ts[t]);
            })
          );
        }
        function ns(t, i, n, r, e) {
          var s = t.getHeadNode(),
            u = (function (t, i, n, r) {
              var e = t.__AMP_CSS_SM;
              e || (e = t.__AMP_CSS_SM = A());
              var s = !n && r && "amp-custom" != r && "amp-keyframes" != r,
                u = n ? "amp-runtime" : s ? "amp-extension=".concat(r) : null;
              if (u) {
                var o = rs(t, e, u);
                if (o)
                  return (
                    "STYLE" == o.tagName &&
                      o.textContent !== i &&
                      (o.textContent = i),
                    o
                  );
              }
              var h = (t.ownerDocument || t).createElement("style");
              h.textContent = i;
              var a = null;
              return (
                n
                  ? h.setAttribute("amp-runtime", "")
                  : s
                  ? (h.setAttribute("amp-extension", r || ""),
                    (a = rs(t, e, "amp-runtime")))
                  : (r && h.setAttribute(r, ""), (a = t.lastChild)),
                (function (t, i) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                  if (n) {
                    var r = n.nextSibling;
                    t.insertBefore(i, r);
                  } else Si(t, i);
                })(t, h, a),
                u && (e[u] = h),
                h
              );
            })(
              s,
              (function (t, i) {
                var n = t.__AMP_CSS_TR;
                return n ? n(i) : i;
              })(s, i),
              r || !1,
              e || null
            );
          if (n) {
            var o = t.getRootNode();
            if (os(o, u)) return n(u), u;
            var h = setInterval(function () {
              os(o, u) && (clearInterval(h), n(u));
            }, 4);
          }
          return u;
        }
        function rs(t, i, n) {
          if (i[n]) return i[n];
          var r = t.querySelector(
            "style[".concat(n, "], link[").concat(n, "]")
          );
          return r ? ((i[n] = r), r) : null;
        }
        var es = !1;
        function ss(t) {
          Zt(t.defaultView), es || ((es = !0), us(t));
        }
        function us(t) {
          kr(t.body, { opacity: 1, visibility: "visible", animation: "none" });
        }
        function os(t, i) {
          for (var n = t.styleSheets, r = 0; r < n.length; r++)
            if (n[r].ownerNode == i) return !0;
          return !1;
        }
        var hs,
          as,
          cs = (function () {
            function t(t) {
              (this.dr = t), (this.pr = 0), (this.mr = 0), (this.yr = A());
            }
            var i = t.prototype;
            return (
              (i.has = function (t) {
                return !!this.yr[t];
              }),
              (i.get = function (t) {
                var i = this.yr[t];
                if (i) return (i.access = ++this.mr), i.payload;
              }),
              (i.put = function (t, i) {
                this.has(t) || this.pr++,
                  (this.yr[t] = { payload: i, access: this.mr }),
                  this.wr();
              }),
              (i.wr = function () {
                if (!(this.pr <= this.dr)) {
                  var t,
                    i = this.yr,
                    n = this.mr + 1;
                  for (var r in i) {
                    var e = i[r].access;
                    e < n && ((n = e), (t = r));
                  }
                  void 0 !== t && (delete i[t], this.pr--);
                }
              }),
              t
            );
          })(),
          fs = new Set(["c", "v", "a", "ad"]),
          ls = "__amp_source_origin",
          vs = function (t) {
            return "string" == typeof t ? ds(t) : t;
          };
        function ds(t, i) {
          return (
            hs ||
              ((hs = self.document.createElement("a")),
              (as =
                self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new cs(100)))),
            ms(hs, t, i ? null : as)
          );
        }
        function ms(t, i, n) {
          if (n && n.has(i)) return n.get(i);
          (t.href = i), t.protocol || (t.href = t.href);
          var r,
            e = {
              href: t.href,
              protocol: t.protocol,
              host: t.host,
              hostname: t.hostname,
              port: "0" == t.port ? "" : t.port,
              pathname: t.pathname,
              search: t.search,
              hash: t.hash,
              origin: null,
            };
          "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname),
            (("http:" == e.protocol && 80 == e.port) ||
              ("https:" == e.protocol && 443 == e.port)) &&
              ((e.port = ""), (e.host = e.hostname)),
            (r =
              t.origin && "null" != t.origin
                ? t.origin
                : "data:" != e.protocol && e.host
                ? e.protocol + "//" + e.host
                : e.href),
            (e.origin = r);
          var s = e;
          return n && n.put(i, s), s;
        }
        function ps(t, i, n) {
          if (!i) return t;
          var r = t.split("#", 2),
            e = r[0].split("?", 2);
          return (
            e[0] +
            (e[1]
              ? n
                ? "?".concat(i, "&").concat(e[1])
                : "?".concat(e[1], "&").concat(i)
              : "?".concat(i)) +
            (r[1] ? "#".concat(r[1]) : "")
          );
        }
        function gs(t, i) {
          return ""
            .concat(encodeURIComponent(t), "=")
            .concat(encodeURIComponent(i));
        }
        function bs(t, i) {
          return ps(t, ys(i));
        }
        function ys(t) {
          var i = [];
          for (var n in t) {
            var r = t[n];
            if (null != r) {
              r = F(r);
              for (var e = 0; e < r.length; e++) i.push(gs(n, r[e]));
            }
          }
          return i.join("&");
        }
        function ws(t) {
          return (
            "https:" == (t = vs(t)).protocol ||
            "localhost" == t.hostname ||
            "127.0.0.1" == t.hostname ||
            W(t.hostname, ".localhost")
          );
        }
        function As(t, i) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "source";
          return (
            ti(null != t, "%s %s must be available", i, n),
            ti(
              ws(t) || /^\/\//.test(t),
              '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
              i,
              n,
              t
            ),
            t
          );
        }
        function xs(t) {
          var i = t.indexOf("#");
          return -1 == i ? t : t.substring(0, i);
        }
        function Es(t) {
          return xt.test(vs(t).origin);
        }
        function Ps(t) {
          return !(t && pt.includes(vs(t).protocol));
        }
        function Os(t) {
          var i = ds(t),
            n = i.hash;
          return i.origin + i.pathname + Is(i.search) + n;
        }
        function Is(t) {
          return (function (t, i) {
            if (!t || "?" == t) return "";
            var n = new RegExp(
                "[?&]".concat("(amp_(js[^&=]*|gsa|r|kit)|usqp)", "\\b[^&]*"),
                "g"
              ),
              r = t.replace(n, "").replace(/^[?&]/, "");
            return r ? "?" + r : "";
          })(t);
        }
        function Ts(t) {
          if (!Es((t = vs(t)))) return t.href;
          var i = t.pathname.split("/"),
            n = i[1];
          ti(fs.has(n), "Unknown path prefix in url %s", t.href);
          var r = i[2],
            e =
              "s" == r
                ? "https://" + decodeURIComponent(i[3])
                : "http://" + decodeURIComponent(r);
          return (
            ti(e.indexOf(".") > 0, "Expected a . in origin %s", e),
            i.splice(1, "s" == r ? 3 : 2),
            e + i.join("/") + Is(t.search) + (t.hash || "")
          );
        }
        function Ms(t) {
          return ds(Ts(t)).origin;
        }
        function Ss(t, i) {
          return (
            (i = vs(i)),
            "function" == typeof URL
              ? new URL(t, i.href).toString()
              : (function (t, i) {
                  i = vs(i);
                  var n = ds((t = t.replace(/\\/g, "/")));
                  return t.toLowerCase().startsWith(n.protocol)
                    ? n.href
                    : t.startsWith("//")
                    ? i.protocol + t
                    : t.startsWith("/")
                    ? i.origin + t
                    : i.origin + i.pathname.replace(/\/[^/]*$/, "/") + t;
                })(t, i)
          );
        }
        function Rs(t, i) {
          return (
            _s(i),
            (function (t, i, n, r) {
              return ps(t, gs("__amp_source_origin", n), void 0);
            })(i, 0, Ms(t.location.href))
          );
        }
        function _s(t) {
          var i = yt(ds(t).search);
          ti(!(ls in i), "Source origin is not allowed in %s", t);
        }
        var ks = "CANCELLED",
          Cs = "BLOCK_BY_CONSENT",
          Ns = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = Ns;
        var Ds = function (t) {
          return ((i = 0),
          (n = function () {
            var t = Math.pow(1.5, i++);
            return (
              1e3 *
              (t +
                (function (t, i) {
                  var n = t * (i = i || 0.3) * Math.random();
                  return Math.random() > 0.5 && (n *= -1), n;
                })(t))
            );
          }),
          (Ds = function (t) {
            return setTimeout(t, n());
          }))(t);
          var i, n;
        };
        function js(t, i) {
          try {
            if (t)
              if (void 0 !== t.message) t = f(t);
              else {
                var n = t;
                (t = new Error(
                  (function (t) {
                    try {
                      return JSON.stringify(t);
                    } catch (i) {
                      return String(t);
                    }
                  })(n)
                )).origError = n;
              }
            else t = new Error("Unknown error");
            if (t.reported) return t;
            if (((t.reported = !0), t.messageArray)) {
              var r = q(t.messageArray, function (t) {
                return null == t ? void 0 : t.tagName;
              });
              r > -1 && (t.associatedElement = t.messageArray[r]);
            }
            var e = i || t.associatedElement;
            if (
              (e &&
                e.classList &&
                (e.classList.add("i-amphtml-error"),
                Dt().development &&
                  (e.classList.add("i-amphtml-element-error"),
                  e.setAttribute("error-message", t.message))),
              self.console && (tt(t.message) || !t.expected))
            ) {
              var s = console.error || console.log;
              t.messageArray
                ? s.apply(console, t.messageArray)
                : e
                ? s.call(console, t.message, e)
                : s.call(console, t.message);
            }
            e &&
              e.dispatchCustomEventForTesting &&
              e.dispatchCustomEventForTesting("amp:error", t.message),
              zs.call(self, void 0, void 0, void 0, void 0, t);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
          return t;
        }
        function Us() {
          return new Error(ks);
        }
        function Ls(t) {
          return (
            !!t &&
            ("string" == typeof t
              ? t.startsWith(Cs)
              : "string" == typeof t.message && t.message.startsWith(Cs))
          );
        }
        function zs(t, i, n, r, e) {
          var s = this;
          if (
            (!this || !this.document || (e && e.expected) || ss(this.document),
            !Dt().development)
          ) {
            var u = !1;
            try {
              u = (function (t) {
                if (!t.document) return !1;
                for (
                  var i = t.document.querySelectorAll("script[src]"), n = 0;
                  n < i.length;
                  n++
                )
                  if (!Es(i[n].src.toLowerCase())) return !0;
                return !1;
              })(self);
            } catch (t) {}
            if (!(u && Math.random() > 0.01)) {
              var o = (function (t, i, n, r, e, s) {
                t = (function (t, i) {
                  return (
                    i && (t = i.message ? i.message : String(i)),
                    t || (t = "Unknown error"),
                    t
                  );
                })(t, e);
                var u,
                  o,
                  h = !(!e || !e.expected);
                if (!/_reported_/.test(t) && t != ks) {
                  var a = !(self && self.window),
                    c = Math.random();
                  if (
                    !(
                      ((function (t) {
                        return -1 != t.indexOf(We);
                      })(t) ||
                        "Script error." == t ||
                        a) &&
                      ((h = !0), c > 0.001)
                    )
                  ) {
                    var f = tt(t);
                    if (!(f && c > 0.1)) {
                      var l = Object.create(null);
                      (l.v = Dt().rtvVersion),
                        (l.noAmp = s ? "1" : "0"),
                        (l.m = t.replace(X, "")),
                        (l.a = f ? "1" : "0"),
                        (l.ex = h ? "1" : "0"),
                        (l.dw = a ? "1" : "0");
                      var v = "1p";
                      if (
                        (self.context && self.context.location
                          ? ((l["3p"] = "1"), (v = "3p"))
                          : Dt().runtime && (v = Dt().runtime),
                        (l.rt = v),
                        "inabox" === v && (l.adid = Dt().a4aId),
                        (l.ca =
                          null !== (o = self.AMP_CONFIG) &&
                          void 0 !== o &&
                          o.canary
                            ? "1"
                            : "0"),
                        (l.bt =
                          (null === (u = self.AMP_CONFIG) || void 0 === u
                            ? void 0
                            : u.type) || "unknown"),
                        self.location.ancestorOrigins &&
                          self.location.ancestorOrigins[0] &&
                          (l.or = self.location.ancestorOrigins[0]),
                        self.viewerState && (l.vs = self.viewerState),
                        self.parent && self.parent != self && (l.iem = "1"),
                        self.AMP && self.AMP.viewer)
                      ) {
                        var d = self.AMP.viewer.getResolvedViewerUrl(),
                          m = self.AMP.viewer.maybeGetMessagingOrigin();
                        d && (l.rvu = d), m && (l.mso = m);
                      }
                      var p,
                        g,
                        b,
                        y = [],
                        w = self[Ge] || null;
                      for (var A in w) {
                        var x = w[A];
                        y.push("".concat(A, "=").concat(x ? "1" : "0"));
                      }
                      return (
                        (l.exps = y.join(",")),
                        e
                          ? ((l.el =
                              (null === (p = e.associatedElement) ||
                              void 0 === p
                                ? void 0
                                : p.tagName) || "u"),
                            e.args && (l.args = JSON.stringify(e.args)),
                            f || e.ignoreStack || !e.stack || (l.s = e.stack),
                            e.message && (e.message += " _reported_"))
                          : ((l.f = i || ""), (l.l = n || ""), (l.c = r || "")),
                        (l.r = self.document ? self.document.referrer : ""),
                        (l.ae = Ns.join(",")),
                        (l.fr =
                          self.location.originalHash || self.location.hash),
                        "production" === l.bt && (l.pt = "1"),
                        (b = t),
                        (g = Ns).length >= 25 && g.splice(0, g.length - 25 + 1),
                        g.push(b),
                        l
                      );
                    }
                  }
                }
              })(t, i, n, r, e, u);
              o &&
                Ds(function () {
                  try {
                    return (function (t, i) {
                      return i.pt && Math.random() < 0.9
                        ? h()
                        : (function (t, i) {
                            var n = Kn(t);
                            if (!n.isSingleDoc()) return Promise.resolve(!1);
                            var r = n.getSingleDoc();
                            if (
                              !r
                                .getRootNode()
                                .documentElement.hasAttribute(
                                  "report-errors-to-viewer"
                                )
                            )
                              return Promise.resolve(!1);
                            var e = dr(r);
                            return e.hasCapability("errorReporter")
                              ? e.isTrustedViewer().then(function (t) {
                                  return (
                                    !!t &&
                                    (e.sendMessage("error", {
                                      m: (n = i).m,
                                      a: n.a,
                                      s: n.s,
                                      el: n.el,
                                      ex: n.ex,
                                      v: n.v,
                                      pt: n.pt,
                                    }),
                                    !0)
                                  );
                                  var n;
                                })
                              : Promise.resolve(!1);
                          })(t, i).then(function (t) {
                            if (!t) {
                              var n = new XMLHttpRequest();
                              n.open("POST", Math.random() < 0.1 ? Rt : St, !0),
                                n.send(JSON.stringify(i));
                            }
                          });
                    })(s, o).catch(function () {});
                  } catch (t) {}
                });
            }
          }
        }
        var Hs = "Resource",
          Gs = (function () {
            function t(t, i, n) {
              (i.__AMP__RESOURCE = this),
                (this.ai = t),
                (this.element = i),
                (this.debugid = i.tagName.toLowerCase() + "#" + t),
                (this.hostWin = i.ownerDocument.defaultView),
                (this.ci = n),
                (this.fi = i.hasAttribute("placeholder")),
                (this.li = !1),
                (this.vi = void 0),
                (this.di = i.isBuilt() ? 1 : 0),
                0 == this.di && i.isBuilding() && this.build(),
                (this.mi = -1),
                (this.pi = 0),
                (this.bi = null),
                (this.gi = null),
                (this.yi = !1),
                (this.wi = zi(-1e4, -1e4, 0, 0)),
                (this.Ai = null),
                (this.xi = !1),
                (this.Ei = null),
                (this.Oi = null),
                (this.Ti = void 0);
              var r = new a();
              (this.Pi = r.promise), (this.Ii = r.resolve), (this.Si = !1);
            }
            (t.forElement = function (i) {
              return Zt(t.forElementOptional(i));
            }),
              (t.forElementOptional = function (t) {
                return t.__AMP__RESOURCE;
              }),
              (t.setOwner = function (i, n) {
                Zt(n.contains(i)),
                  t.forElementOptional(i) &&
                    t.forElementOptional(i).updateOwner(n),
                  (i.__AMP__OWNER = n);
                for (
                  var r = i.getElementsByClassName("i-amphtml-element"), e = 0;
                  e < r.length;
                  e++
                ) {
                  var s = r[e];
                  t.forElementOptional(s) &&
                    t.forElementOptional(s).updateOwner(void 0);
                }
              });
            var i = t.prototype;
            return (
              (i.getId = function () {
                return this.ai;
              }),
              (i.updateOwner = function (t) {
                this.vi = t;
              }),
              (i.getOwner = function () {
                if (void 0 === this.vi) {
                  for (var t = this.element; t; t = t.parentElement)
                    if (t.__AMP__OWNER) {
                      this.vi = t.__AMP__OWNER;
                      break;
                    }
                  void 0 === this.vi && (this.vi = null);
                }
                return this.vi;
              }),
              (i.hasOwner = function () {
                return !!this.getOwner();
              }),
              (i.getLayoutPriority = function () {
                return -1 != this.mi
                  ? this.mi
                  : this.element.getLayoutPriority();
              }),
              (i.updateLayoutPriority = function (t) {
                this.mi = t;
              }),
              (i.getState = function () {
                return this.di;
              }),
              (i.isBuilt = function () {
                return this.element.isBuilt();
              }),
              (i.isBuilding = function () {
                return this.li;
              }),
              (i.whenBuilt = function () {
                return this.element.signals().whenSignal("res-built");
              }),
              (i.build = function () {
                var t = this;
                return this.li || !this.element.isUpgraded()
                  ? null
                  : ((this.li = !0),
                    this.element.buildInternal().then(
                      function () {
                        (t.li = !1),
                          (t.di = 1),
                          t.element.signals().signal("res-built");
                      },
                      function (i) {
                        throw (
                          (t.maybeReportErrorOnBuildFailure(i),
                          (t.li = !1),
                          t.element.signals().rejectSignal("res-built", i),
                          i)
                        );
                      }
                    ));
              }),
              (i.maybeReportErrorOnBuildFailure = function (t) {
                Ls(t) || Qt().error(Hs, "failed to build:", this.debugid, t);
              }),
              (i.changeSize = function (t, i, n) {
                this.element.applySize(t, i, n), this.requestMeasure();
              }),
              (i.overflowCallback = function (t, i, n, r) {
                t && (this.Ti = { height: i, width: n, margins: r }),
                  this.element.overflowCallback(t, i, n, r);
              }),
              (i.resetPendingChangeSize = function () {
                this.Ti = void 0;
              }),
              (i.getPendingChangeSize = function () {
                return this.Ti;
              }),
              (i.getUpgradeDelayMs = function () {
                return this.element.getUpgradeDelayMs();
              }),
              (i.measure = function () {
                if (
                  !(
                    this.fi &&
                    this.element.parentElement &&
                    this.element.parentElement.tagName.startsWith("AMP-")
                  ) ||
                  "__AMP__RESOURCE" in this.element.parentElement
                )
                  if (
                    this.element.ownerDocument &&
                    this.element.ownerDocument.defaultView
                  ) {
                    this.xi = !1;
                    var t = this.wi;
                    this.Mi();
                    var i,
                      n,
                      r = this.wi,
                      e =
                        ((n = r),
                        !((i = t).width == n.width && i.height === n.height));
                    (1 == this.di || t.top != r.top || e) &&
                      this.element.isUpgraded() &&
                      (1 == this.di
                        ? (this.di = 2)
                        : (4 != this.di && 5 != this.di) ||
                          !this.element.isRelayoutNeeded() ||
                          (this.di = 2)),
                      this.hasBeenMeasured() || (this.Ai = r),
                      this.element.updateLayoutBox(r, e);
                  } else this.di = 1;
              }),
              (i.ensureMeasured = function () {
                var t = this;
                return this.hasBeenMeasured()
                  ? h()
                  : mr(this.hostWin).measure(function () {
                      return t.measure();
                    });
              }),
              (i.Mi = function () {
                var t = pr(this.element);
                this.wi = t.getLayoutRect(this.element);
                var i = !1;
                if (t.supportsPositionFixed() && this.isDisplayed())
                  for (
                    var n = this.ci.getAmpdoc().win,
                      r = n.document.body,
                      e = this.element;
                    e && e != r;
                    e = e.offsetParent
                  ) {
                    if (e.isAlwaysFixed && e.isAlwaysFixed()) {
                      i = !0;
                      break;
                    }
                    if (t.isDeclaredFixed(e) && "fixed" == Dr(n, e).position) {
                      i = !0;
                      break;
                    }
                  }
                (this.yi = i),
                  i &&
                    (this.wi = Gi(
                      this.wi,
                      -t.getScrollLeft(),
                      -t.getScrollTop()
                    ));
              }),
              (i.completeCollapse = function () {
                Cr(this.element, !1),
                  (this.wi = zi(this.wi.left, this.wi.top, 0, 0)),
                  (this.yi = !1),
                  this.element.updateLayoutBox(this.getLayoutBox());
                var t = this.getOwner();
                t && t.collapsedCallback(this.element);
              }),
              (i.completeExpand = function () {
                Cr(this.element, !0), this.requestMeasure();
              }),
              (i.isMeasureRequested = function () {
                return this.xi;
              }),
              (i.hasBeenMeasured = function () {
                return !!this.Ai;
              }),
              (i.requestMeasure = function () {
                this.xi = !0;
              }),
              (i.getLayoutSize = function () {
                return (
                  (i = (t = this.wi).height), { width: t.width, height: i }
                );
                var t, i;
              }),
              (i.getLayoutBox = function () {
                if (!this.yi) return this.wi;
                var t = pr(this.element);
                return Gi(this.wi, t.getScrollLeft(), t.getScrollTop());
              }),
              (i.getInitialLayoutBox = function () {
                return this.Ai || this.wi;
              }),
              (i.isDisplayed = function () {
                if (
                  !this.element.ownerDocument ||
                  !this.element.ownerDocument.defaultView
                )
                  return !1;
                var t = this.element.getLayout() == ue,
                  i = this.getLayoutBox(),
                  n = i.height > 0 && i.width > 0;
                return t || n;
              }),
              (i.isFixed = function () {
                return this.yi;
              }),
              (i.overlaps = function (t) {
                return (
                  (n = t),
                  (i = this.getLayoutBox()).top <= n.bottom &&
                    n.top <= i.bottom &&
                    i.left <= n.right &&
                    n.left <= i.right
                );
                var i, n;
              }),
              (i.prerenderAllowed = function () {
                return this.element.prerenderAllowed();
              }),
              (i.previewAllowed = function () {
                return this.element.previewAllowed();
              }),
              (i.isBuildRenderBlocking = function () {
                return this.element.isBuildRenderBlocking();
              }),
              (i.whenWithinViewport = function (t) {
                if ((Zt(!1 !== t), !this.isLayoutPending() || !0 === t))
                  return h();
                var i = t,
                  n = String(i);
                return this.Ei && this.Ei[n]
                  ? this.Ei[n].promise
                  : this.isWithinViewportRatio(i)
                  ? h()
                  : ((this.Ei = this.Ei || {}),
                    (this.Ei[n] = new a()),
                    this.Ei[n].promise);
              }),
              (i.Ri = function () {
                if (this.Ei) {
                  var t = this.getDistanceViewportRatio();
                  for (var i in this.Ei)
                    this.isWithinViewportRatio(parseFloat(i), t) &&
                      (this.Ei[i].resolve(), delete this.Ei[i]);
                }
              }),
              (i.getDistanceViewportRatio = function () {
                var t = pr(this.element).getRect(),
                  i = this.getLayoutBox(),
                  n = this.ci.getScrollDirection(),
                  r = 1,
                  e = 0;
                if (t.right < i.left || t.left > i.right)
                  return { distance: !1 };
                if (t.bottom < i.top)
                  (e = i.top - t.bottom), -1 == n && (r = 2);
                else {
                  if (!(t.top > i.bottom)) return { distance: !0 };
                  (e = t.top - i.bottom), 1 == n && (r = 2);
                }
                return {
                  distance: e,
                  scrollPenalty: r,
                  viewportHeight: t.height,
                };
              }),
              (i.isWithinViewportRatio = function (t, i) {
                if ("boolean" == typeof t) return t;
                var n = i || this.getDistanceViewportRatio(),
                  r = n.distance,
                  e = n.scrollPenalty,
                  s = n.viewportHeight;
                return "boolean" == typeof r ? r : r < (s * t) / e;
              }),
              (i.renderOutsideViewport = function () {
                return (
                  this.Ri(),
                  this.hasOwner() ||
                    this.isWithinViewportRatio(
                      this.element.renderOutsideViewport()
                    )
                );
              }),
              (i.idleRenderOutsideViewport = function () {
                return this.isWithinViewportRatio(
                  this.element.idleRenderOutsideViewport()
                );
              }),
              (i.layoutScheduled = function (t) {
                (this.di = 3), (this.element.layoutScheduleTime = t);
              }),
              (i.layoutCanceled = function () {
                this.di = this.hasBeenMeasured() ? 2 : 1;
              }),
              (i.startLayout = function () {
                var t = this;
                if (this.Oi) return this.Oi;
                if (4 == this.di) return h();
                if (5 == this.di) return Promise.reject(this.gi);
                if ((Zt(0 != this.di), Zt(this.isDisplayed()), 3 != this.di)) {
                  var i = Qt().createExpectedError(
                    "startLayout called but not LAYOUT_SCHEDULED",
                    "currently: ",
                    this.di
                  );
                  return js(i, this.element), Promise.reject(i);
                }
                if (this.pi > 0 && !this.element.isRelayoutNeeded())
                  return (
                    Qt().fine(
                      Hs,
                      "layout canceled since it wasn't requested:",
                      this.debugid,
                      this.di
                    ),
                    (this.di = 4),
                    h()
                  );
                Qt().fine(Hs, "start layout:", this.debugid, "count:", this.pi),
                  this.pi++,
                  (this.di = 3),
                  (this.bi = new AbortController());
                var n = this.bi.signal,
                  r = new Promise(function (i, r) {
                    mr(t.hostWin).mutate(function () {
                      var e;
                      try {
                        e = t.element.layoutCallback(n);
                      } catch (t) {
                        r(t);
                      }
                      Promise.resolve(e).then(i, r);
                    }),
                      (n.onabort = function () {
                        return r(Us());
                      });
                  }).then(
                    function () {
                      return t._i(!0, n);
                    },
                    function (i) {
                      return t._i(!1, n, i);
                    }
                  );
                return (this.Oi = r);
              }),
              (i._i = function (t, i, n) {
                if (((this.bi = null), i.aborted)) {
                  var r = Qt().createError("layoutComplete race");
                  throw (
                    ((r.associatedElement = this.element),
                    Qt().expectedError(Hs, r),
                    Us())
                  );
                }
                if (
                  (this.Ii && (this.Ii(), (this.Ii = null)),
                  (this.Oi = null),
                  (this.di = t ? 4 : 5),
                  (this.gi = n),
                  !t)
                )
                  return (
                    Qt().fine(Hs, "loading failed:", this.debugid, n),
                    Promise.reject(n)
                  );
                Qt().fine(Hs, "layout complete:", this.debugid);
              }),
              (i.isLayoutPending = function () {
                return 4 != this.di && 5 != this.di;
              }),
              (i.loadedOnce = function () {
                return this.element.R1() ? this.element.whenLoaded() : this.Pi;
              }),
              (i.isInViewport = function () {
                return this.Si && this.Ri(), this.Si;
              }),
              (i.setInViewport = function (t) {
                this.Si = t;
              }),
              (i.unlayout = function () {
                0 != this.di &&
                  1 != this.di &&
                  2 != this.di &&
                  (this.bi && (this.bi.abort(), (this.bi = null)),
                  this.setInViewport(!1),
                  this.element.unlayoutCallback() &&
                    (this.element.togglePlaceholder(!0),
                    (this.di = 1),
                    (this.pi = 0),
                    (this.Oi = null)));
              }),
              (i.getTaskId = function (t) {
                return this.debugid + "#" + t;
              }),
              (i.pause = function () {
                this.element.pause();
              }),
              (i.pauseOnRemove = function () {
                this.element.pause();
              }),
              (i.resume = function () {
                this.element.resume();
              }),
              (i.unload = function () {
                this.element.unmount();
              }),
              (i.disconnect = function () {
                delete this.element.__AMP__RESOURCE,
                  this.element.disconnect(!0);
              }),
              t
            );
          })(),
          Vs = "ready-scan",
          Fs = "scheduler",
          Bs = "250% 31.25%",
          qs = (function () {
            function t(t) {
              var i = this;
              this.ki = t;
              var n = t.win;
              (this.Ni = new n.IntersectionObserver(
                function (t) {
                  return i.Ci(t);
                },
                { root: Ni(n) ? n.document : null, rootMargin: Bs }
              )),
                (this.ji = new Map()),
                (this.Di = new Map()),
                (this.Ui = []),
                (this.zi = !1),
                t.whenReady().then(function () {
                  return i.Li();
                }),
                (this.Hi = t.onVisibilityChanged(function () {
                  return i.Gi();
                }));
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                this.Ni.disconnect(),
                  this.Di.clear(),
                  this.Hi && (this.Hi(), (this.Hi = null));
              }),
              (i.scheduleAsap = function (t) {
                this.Di.set(t, { asap: !0, isIntersecting: !1 }), this.Vi(t);
              }),
              (i.schedule = function (t) {
                this.Di.has(t) ||
                  (t.deferredMount()
                    ? (this.Di.set(t, { asap: !1, isIntersecting: !1 }),
                      this.Ni.observe(t),
                      this.ji.size > 0 &&
                        this.ji.forEach(function (i, n) {
                          ji(n, t) && i.observe(t);
                        }))
                    : this.Di.set(t, { asap: !1, isIntersecting: !0 }),
                  this.Vi(t));
              }),
              (i.unschedule = function (t) {
                this.Di.has(t) &&
                  (this.Di.delete(t),
                  this.Ni.unobserve(t),
                  this.ji.size > 0 &&
                    this.ji.forEach(function (i) {
                      i.unobserve(t);
                    }),
                  this.Ui && ($(this.Ui, t), this.Li()));
              }),
              (i.setContainer = function (t, i) {
                var n = this;
                if (!this.ji.has(t)) {
                  var r = new this.ki.win.IntersectionObserver(
                    function (t) {
                      return n.Ci(t);
                    },
                    { root: i || t, rootMargin: Bs }
                  );
                  this.ji.set(t, r),
                    this.Di.forEach(function (i, n) {
                      !i.asap && ji(t, n) && r.observe(n);
                    });
                }
              }),
              (i.removeContainer = function (t) {
                var i = this.ji.get(t);
                i && (i.disconnect(), this.ji.delete(t));
              }),
              (i.Fi = function () {
                var t = this;
                this.ki.isReady() &&
                  !this.zi &&
                  ((this.zi = !0),
                  this.ki.win.setTimeout(function () {
                    t.ki.signals().signal(Vs);
                  }, 50));
              }),
              (i.Gi = function () {
                var t = this,
                  i = this.ki.getVisibilityState();
                (i != wr && i != Ar && i != br && i != yr) ||
                  this.Di.forEach(function (i, n) {
                    return t.Bi(n);
                  });
              }),
              (i.Vi = function (t) {
                var i = this.Ui;
                i ? (i.includes(t) || i.push(t), this.Li()) : this.Bi(t);
              }),
              (i.Li = function () {
                var t = this.ki.isReady(),
                  i = this.Ui;
                if (i)
                  for (var n = 0; n < i.length; n++) {
                    var r = i[n];
                    (t || ki(r, this.ki.getRootNode())) &&
                      (i.splice(n--, 1), this.Bi(r));
                  }
                t && ((this.Ui = null), this.Fi());
              }),
              (i.Ci = function (t) {
                for (var i = 0; i < t.length; i++) {
                  var n = t[i],
                    r = n.isIntersecting,
                    e = n.target,
                    s = this.Di.get(e);
                  if (s) {
                    var u = r || s.isIntersecting;
                    u !== s.isIntersecting &&
                      this.Di.set(e, { asap: s.asap, isIntersecting: u }),
                      u && this.Bi(e);
                  }
                }
              }),
              (i.Bi = function (t) {
                var i = this.Ui,
                  n = !(i && i.includes(t)),
                  r = this.Di.get(t) || { asap: !1, isIntersecting: !1 },
                  e = r.asap,
                  s = r.isIntersecting,
                  u = this.ki.getVisibilityState();
                if (
                  n &&
                  (e || s) &&
                  (u == wr ||
                    u == Ar ||
                    (u == br && t.prerenderAllowed()) ||
                    (u == yr && t.previewAllowed()))
                ) {
                  this.unschedule(t);
                  var o = this.ki.win;
                  (e || t.getBuildPriority() <= 0
                    ? o.setTimeout
                    : o.requestIdleCallback || o.setTimeout)(function () {
                    return t.mountInternal();
                  });
                }
              }),
              t
            );
          })();
        function $s(t) {
          return En(t, Fs, qs), On(t, Fs);
        }
        var Ws = (function () {
            function t() {
              this.qi = [];
            }
            var n = t.prototype;
            return (
              (n.peek = function () {
                var t = this.length;
                return t ? this.qi[t - 1].item : null;
              }),
              (n.enqueue = function (t, i) {
                if (isNaN(i)) throw new Error("Priority must not be NaN.");
                var n = this.$i(i);
                this.qi.splice(n, 0, { item: t, priority: i });
              }),
              (n.$i = function (t) {
                for (
                  var i = -1, n = 0, r = this.length;
                  n <= r && (i = Math.floor((n + r) / 2)) !== this.length;

                )
                  if (this.qi[i].priority < t) n = i + 1;
                  else {
                    if (!(i > 0 && this.qi[i - 1].priority >= t)) break;
                    r = i - 1;
                  }
                return i;
              }),
              (n.forEach = function (t) {
                for (var i = this.length; i--; ) t(this.qi[i].item);
              }),
              (n.dequeue = function () {
                var t = this.qi.pop();
                return t ? t.item : null;
              }),
              i(t, [
                {
                  key: "length",
                  get: function () {
                    return this.qi.length;
                  },
                },
              ]),
              t
            );
          })(),
          Ys = "CHUNK",
          Ks = /nochunking=1/.test(self.location.hash),
          Js = h();
        function Xs(t) {
          return En(t, "chunk", ru), On(t, "chunk");
        }
        function Qs(t, i, n) {
          if (Ks) Js.then(i);
          else {
            var r = Xs(t.documentElement || t);
            r.runForStartup(i),
              n &&
                r.runForStartup(function () {
                  r.Wi = !0;
                });
          }
        }
        function Zs(t, i, n) {
          Ks ? Js.then(i) : Xs(t).run(i, n);
        }
        var tu = "not_run",
          iu = (function () {
            function t(t) {
              (this.state = tu), (this.Ki = t);
            }
            var i = t.prototype;
            return (
              (i.Yi = function (t) {
                if ("run" != this.state) {
                  this.state = "run";
                  try {
                    this.Ki(t);
                  } catch (t) {
                    throw (this.Ji(t), t);
                  }
                }
              }),
              (i.Xi = function () {
                return this.Ki.displayName || this.Ki.name;
              }),
              (i.Ji = function (t) {}),
              (i.Qi = function () {
                return !1;
              }),
              (i.Zi = function () {
                return !1;
              }),
              t
            );
          })(),
          nu = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r) {
              var e;
              return ((e = i.call(this, t)).Vn = r), e;
            }
            var r = n.prototype;
            return (
              (r.Ji = function (t) {
                ss(self.document);
              }),
              (r.Qi = function () {
                return this.Yn();
              }),
              (r.Zi = function () {
                return this.Vn.Xn;
              }),
              (r.Yn = function () {
                return this.Vn.ampdoc.isVisible();
              }),
              n
            );
          })(iu),
          ru = (function () {
            function t(t) {
              var i,
                n = this;
              (this.ampdoc = t),
                (this.t = t.win),
                (this.Qn = new Ws()),
                (this.br = this.gr.bind(this)),
                (this.Ar = 0),
                (this.Er = !(
                  !this.t.navigator.scheduling ||
                  !this.t.navigator.scheduling.isInputPending
                )),
                (this.Or = !1),
                (this.Wi = this.t.document.documentElement.hasAttribute(
                  "i-amphtml-no-boilerplate"
                )),
                this.t.addEventListener("message", function (t) {
                  "amp-macro-task" == Je(t) && n.gr(null);
                }),
                (this.Xn = !1),
                ((i = t), Tn(i, "viewer")).then(function () {
                  n.Xn = !0;
                }),
                t.onVisibilityChanged(function () {
                  t.isVisible() && n.Tr();
                });
            }
            var i = t.prototype;
            return (
              (i.run = function (t, i) {
                var n = new iu(t);
                this.Pr(n, i);
              }),
              (i.runForStartup = function (t) {
                var i = new nu(t, this.t, this);
                this.Pr(i, Number.POSITIVE_INFINITY);
              }),
              (i.Pr = function (t, i) {
                this.Qn.enqueue(t, i), this.Tr();
              }),
              (i.Ir = function (t) {
                for (var i = this.Qn.peek(); i && i.state !== tu; )
                  this.Qn.dequeue(), (i = this.Qn.peek());
                return i && t && this.Qn.dequeue(), i;
              }),
              (i.gr = function (t) {
                var i,
                  n = this,
                  r = this.Ir(!0);
                if (!r) return (this.Or = !1), (this.Ar = 0), !1;
                try {
                  (i = Date.now()), r.Yi(t);
                } finally {
                  Js.then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then()
                    .then(function () {
                      (n.Or = !1),
                        (n.Ar += Date.now() - i),
                        Qt().fine(
                          Ys,
                          r.Xi(),
                          "Chunk duration",
                          Date.now() - i,
                          n.Ar
                        ),
                        n.Tr();
                    });
                }
                return !0;
              }),
              (i.Sr = function (t) {
                var i = this;
                if (
                  this.Wi &&
                  (this.Er
                    ? this.t.navigator.scheduling.isInputPending()
                    : this.Ar > 5)
                )
                  return (this.Ar = 0), void this.Mr();
                Js.then(function () {
                  i.br(t);
                });
              }),
              (i.Tr = function () {
                if (!this.Or) {
                  var t = this.Ir();
                  if (t)
                    return t.Qi()
                      ? ((this.Or = !0), void this.Sr(null))
                      : void (t.Zi() && this.t.requestIdleCallback
                          ? (function (t, i, n, r) {
                              var e = Date.now();
                              t.requestIdleCallback(
                                function i(s) {
                                  if (s.timeRemaining() < 15) {
                                    var u = n - (Date.now() - e);
                                    u <= 0 || s.didTimeout
                                      ? (Qt().fine(
                                          Ys,
                                          "Timed out",
                                          n,
                                          s.didTimeout
                                        ),
                                        r(s))
                                      : (Qt().fine(
                                          Ys,
                                          "Rescheduling with",
                                          u,
                                          s.timeRemaining()
                                        ),
                                        t.requestIdleCallback(i, {
                                          timeout: u,
                                        }));
                                  } else
                                    Qt().fine(
                                      Ys,
                                      "Running idle callback with ",
                                      15
                                    ),
                                      r(s);
                                },
                                { timeout: n }
                              );
                            })(this.t, 0, 2e3, this.br)
                          : this.Mr());
                }
              }),
              (i.Mr = function () {
                this.t.postMessage("amp-macro-task", "*");
              }),
              t
            );
          })(),
          eu = "activate",
          su = (function () {
            function t(t) {
              (this.element = t),
                (this.win = oi(t)),
                (this.actionMap_ = null),
                (this.defaultActionAlias_ = null);
            }
            (t.R1 = function () {
              return !1;
            }),
              (t.deferredMount = function (t) {
                return !0;
              }),
              (t.prerenderAllowed = function (t) {
                return !1;
              }),
              (t.previewAllowed = function (t) {
                return this.prerenderAllowed(t);
              }),
              (t.usesLoading = function (t) {
                return !1;
              }),
              (t.createLoaderLogoCallback = function (t) {
                return {};
              }),
              (t.getBuildPriority = function (t) {
                return 0;
              }),
              (t.getPreconnects = function (t) {
                return null;
              }),
              (t.requiresShadowDom = function () {
                return !1;
              });
            var i = t.prototype;
            return (
              (i.signals = function () {
                return this.element.signals();
              }),
              (i.getDefaultActionAlias = function () {
                return this.defaultActionAlias_;
              }),
              (i.getLayoutPriority = function () {
                return 0;
              }),
              (i.updateLayoutPriority = function (t) {
                this.element
                  .getResources()
                  .updateLayoutPriority(this.element, t);
              }),
              (i.getLayout = function () {
                return this.element.getLayout();
              }),
              (i.getLayoutBox = function () {
                return this.element.getLayoutBox();
              }),
              (i.getLayoutSize = function () {
                return this.element.getLayoutSize();
              }),
              (i.getAmpDoc = function () {
                return this.element.getAmpDoc();
              }),
              (i.getVsync = function () {
                return mr(this.win);
              }),
              (i.getConsentPolicy = function () {
                var t = null;
                return (
                  this.element.hasAttribute("data-block-on-consent") &&
                    (t =
                      this.element.getAttribute("data-block-on-consent") ||
                      "default"),
                  t
                );
              }),
              (i.isLayoutSupported = function (t) {
                return t == Zr;
              }),
              (i.isAlwaysFixed = function () {
                return !1;
              }),
              (i.upgradeCallback = function () {
                return null;
              }),
              (i.buildCallback = function () {}),
              (i.preconnectCallback = function (t) {}),
              (i.attachedCallback = function () {}),
              (i.detachedCallback = function () {}),
              (i.setAsContainer = function (t) {
                this.element.setAsContainerInternal(t);
              }),
              (i.removeAsContainer = function () {
                this.element.removeAsContainerInternal();
              }),
              (i.isBuildRenderBlocking = function () {
                return !1;
              }),
              (i.createPlaceholderCallback = function () {
                return null;
              }),
              (i.renderOutsideViewport = function () {
                return "inabox" == Dt(this.win).runtime || 3;
              }),
              (i.idleRenderOutsideViewport = function () {
                return !1;
              }),
              (i.ensureLoaded = function () {}),
              (i.setReadyState = function (t, i) {
                this.element.setReadyStateInternal(t, i);
              }),
              (i.mountCallback = function (t) {}),
              (i.unmountCallback = function () {}),
              (i.isRelayoutNeeded = function () {
                return !1;
              }),
              (i.layoutCallback = function () {
                return h();
              }),
              (i.firstLayoutCompleted = function () {
                this.togglePlaceholder(!1);
              }),
              (i.pauseCallback = function () {}),
              (i.resumeCallback = function () {}),
              (i.unlayoutCallback = function () {
                return !1;
              }),
              (i.unlayoutOnPause = function () {
                return !1;
              }),
              (i.reconstructWhenReparented = function () {
                return !0;
              }),
              (i.loadPromise = function (t) {
                return Qe(t);
              }),
              (i.registerAction = function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 2;
                uu(this), (this.actionMap_[t] = { handler: i, minTrust: n });
              }),
              (i.registerDefaultAction = function (t) {
                var i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : eu,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 2;
                Zt(!this.defaultActionAlias_),
                  this.registerAction(i, t, n),
                  (this.defaultActionAlias_ = i);
              }),
              (i.executeAction = function (t, i) {
                var n = t.method;
                n === eu && (n = this.defaultActionAlias_ || n), uu(this);
                var r = this.actionMap_[n],
                  e = this.element.tagName;
                ti(r, "Method not found: ".concat(n, " in ").concat(e));
                var s = r.handler,
                  u = r.minTrust;
                if (t.satisfiesTrust(u)) return s(t);
              }),
              (i.forwardEvents = function (t, i) {
                var n = this,
                  r = (V(t) ? t : [t]).map(function (t) {
                    return Ke(i, t, function (i) {
                      Di(n.element, t, Je(i) || {});
                    });
                  });
                return function () {
                  return r.forEach(function (t) {
                    return t();
                  });
                };
              }),
              (i.getPlaceholder = function () {
                return this.element.getPlaceholder();
              }),
              (i.togglePlaceholder = function (t) {
                this.element.togglePlaceholder(t);
              }),
              (i.getFallback = function () {
                return this.element.getFallback();
              }),
              (i.toggleFallback = function (t) {
                this.element.toggleFallback(t);
              }),
              (i.toggleLoading = function (t) {
                var i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                this.element.toggleLoading(t, i);
              }),
              (i.getOverflowElement = function () {
                return this.element.getOverflowElement();
              }),
              (i.renderStarted = function () {
                this.element.renderStarted();
              }),
              (i.getViewport = function () {
                return pr(this.getAmpDoc());
              }),
              (i.getIntersectionElementLayoutBox = function () {
                return this.getLayoutBox();
              }),
              (i.collapse = function () {
                er(this.getAmpDoc()).collapseElement(this.element);
              }),
              (i.attemptCollapse = function () {
                return er(this.getAmpDoc()).attemptCollapse(this.element);
              }),
              (i.forceChangeHeight = function (t) {
                er(this.getAmpDoc()).forceChangeSize(this.element, t, void 0);
              }),
              (i.attemptChangeHeight = function (t) {
                return er(this.getAmpDoc()).requestChangeSize(
                  this.element,
                  t,
                  void 0
                );
              }),
              (i.attemptChangeSize = function (t, i, n) {
                return er(this.getAmpDoc()).requestChangeSize(
                  this.element,
                  t,
                  i,
                  void 0,
                  n
                );
              }),
              (i.measureElement = function (t) {
                return er(this.getAmpDoc()).measureElement(t);
              }),
              (i.mutateElement = function (t, i) {
                return this.measureMutateElement(null, t, i);
              }),
              (i.measureMutateElement = function (t, i, n) {
                return er(this.getAmpDoc()).measureMutateElement(
                  n || this.element,
                  t,
                  i
                );
              }),
              (i.mutateElementSkipRemeasure = function (t) {
                return er(this.getAmpDoc()).mutateElement(this.element, t, !0);
              }),
              (i.collapsedCallback = function (t) {}),
              (i.expand = function () {
                er(this.getAmpDoc()).expandElement(this.element);
              }),
              (i.mutatedAttributesCallback = function (t) {}),
              (i.onLayoutMeasure = function () {}),
              (i.user = function () {
                return Jt(this.element);
              }),
              (i.getApi = function () {
                return this;
              }),
              t
            );
          })();
        function uu(t) {
          t.actionMap_ || (t.actionMap_ = t.win.Object.create(null));
        }
        var ou,
          hu = (function (t) {
            U(n, t);
            var i = H(n);
            function n() {
              return i.apply(this, arguments);
            }
            return n;
          })(su),
          au = Date.now(),
          cu = { bubbles: !1 },
          fu = function () {
            return !0;
          },
          lu = [],
          vu = new Set();
        function du(t, n) {
          var r = (function (t, n) {
              if (t.__AMP_BASE_CE_CLASS) return t.__AMP_BASE_CE_CLASS;
              var r = (function (r) {
                U(s, r);
                var e = H(s);
                function s() {
                  var t;
                  return (t = e.call(this)).createdCallback(), t;
                }
                var u = s.prototype;
                return (
                  (u.createdCallback = function () {
                    (this.Rr = !1),
                      (this._r = !1),
                      (this.kr = null),
                      (this.Nr = !1),
                      (this.Cr = null),
                      (this.jr = null),
                      (this.Dr = "upgrading"),
                      (this.everAttached = !1),
                      (this.ki = null),
                      (this.ci = null),
                      (this.Ur = Zr),
                      (this.pi = 0),
                      (this.zr = !1),
                      (this.warnOnMissingOverflow = !0),
                      (this.sizerElement = void 0),
                      (this.Lr = void 0),
                      (this.layoutScheduleTime = void 0);
                    var i = this,
                      n =
                        t.__AMP_EXTENDED_ELEMENTS &&
                        t.__AMP_EXTENDED_ELEMENTS[this.localName];
                    (this.Hr = n === hu ? null : n || null),
                      this.Hr || lu.push(this),
                      (this.Gr = null),
                      (this.Vr = 1),
                      (this.Fr = 0),
                      (this.Br = void 0),
                      (this.qr = void 0),
                      (this.Ft = new Or()),
                      this.Hr && this.Ft.signal(Ae);
                    var r = (function (t, i) {
                      return Hn((t = Sn(t)), i) ? Cn(t, i) : null;
                    })(t, "performance");
                    (this.$r = r && r.isPerformanceTrackingOn()),
                      (this.Wr = null),
                      i.__AMP_UPG_RES &&
                        (i.__AMP_UPG_RES(i),
                        delete i.__AMP_UPG_RES,
                        delete i.__AMP_UPG_PRM);
                  }),
                  (u.signals = function () {
                    return this.Ft;
                  }),
                  (u.getAmpDoc = function () {
                    return Zt(this.ki), this.ki;
                  }),
                  (u.getResources = function () {
                    return Zt(this.ci), this.ci;
                  }),
                  (u.isUpgraded = function () {
                    return 2 == this.Vr;
                  }),
                  (u.whenUpgraded = function () {
                    return this.Ft.whenSignal(xe);
                  }),
                  (u.upgrade = function (t) {
                    this.qr ||
                      (1 == this.Vr &&
                        ((this.Hr = t),
                        this.Ft.signal(Ae),
                        this.everAttached && this.Kr()));
                  }),
                  (u.markUnresolved = function () {
                    this.Hr ||
                      this.classList.add(
                        "amp-unresolved",
                        "i-amphtml-unresolved"
                      );
                  }),
                  (u.getUpgradeDelayMs = function () {
                    return this.Fr;
                  }),
                  (u.Yr = function (i, n) {
                    (this.Gr = i),
                      (this.Fr = t.Date.now() - n),
                      (this.Vr = 2),
                      this.setReadyStateInternal(en),
                      this.classList.remove(
                        "amp-unresolved",
                        "i-amphtml-unresolved"
                      ),
                      this.Jr(),
                      this.dispatchCustomEventForTesting(be),
                      this.R1() || this.getResources().upgraded(this),
                      this.Ft.signal(xe);
                  }),
                  (u.Jr = function () {
                    this.Ur != Zr &&
                      this.Gr &&
                      !this.Gr.isLayoutSupported(this.Ur) &&
                      (ti(
                        this.getAttribute("layout"),
                        "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."
                      ),
                      ti(!1, "Layout not supported: ".concat(this.Ur)));
                  }),
                  (u.getBuildPriority = function () {
                    return this.Hr ? this.Hr.getBuildPriority(this) : 3;
                  }),
                  (u.getLayoutPriority = function () {
                    return this.Gr ? this.Gr.getLayoutPriority() : 3;
                  }),
                  (u.getDefaultActionAlias = function () {
                    return (
                      Zt(this.isUpgraded()), this.Gr.getDefaultActionAlias()
                    );
                  }),
                  (u.isBuilding = function () {
                    return !!this.kr;
                  }),
                  (u.isBuilt = function () {
                    return this.Rr;
                  }),
                  (u.whenBuilt = function () {
                    return this.Ft.whenSignal(Ee);
                  }),
                  (u.buildInternal = function () {
                    var t = this;
                    if ((pu(this), Zt(this.Hr), this.kr)) return this.kr;
                    this.setReadyStateInternal(en);
                    var i = this.Xr();
                    this.Qr();
                    var n = i
                      .then(function () {
                        var i,
                          n = t.Zr(),
                          r = n ? null : t.te();
                        if (n || r)
                          return ((i = t),
                          Vn(i, "consentPolicyManager", "amp-consent"))
                            .then(function (t) {
                              return (
                                !t ||
                                (n
                                  ? t.whenPolicyUnblock(n)
                                  : t.whenPurposesUnblock(r))
                              );
                            })
                            .then(function (t) {
                              if (!t) throw new Error(Cs);
                            });
                      })
                      .then(function () {
                        return Zt(t.Gr).buildCallback();
                      });
                    return (this.kr = n.then(
                      function () {
                        if (
                          ((t.Rr = !0),
                          t.classList.add("i-amphtml-built"),
                          t.classList.remove(
                            "i-amphtml-notbuilt",
                            "amp-notbuilt"
                          ),
                          t.Ft.signal(Ee),
                          t.R1()
                            ? t.setReadyStateInternal(t.Dr != en ? t.Dr : sn)
                            : (t.setReadyStateInternal(un), t.preconnect(!1)),
                          t._r && t.an(),
                          t.Br && cr(oi(t)).delay(t.ie.bind(t), 1),
                          !t.getPlaceholder())
                        ) {
                          var i = t.createPlaceholder();
                          i && t.appendChild(i);
                        }
                      },
                      function (i) {
                        throw (
                          (t.Ft.rejectSignal(Ee, i),
                          t.R1() && t.setReadyStateInternal(hn, i),
                          Ls(i) || js(i, t),
                          i)
                        );
                      }
                    ));
                  }),
                  (u.build = function () {
                    var t = this;
                    return this.kr
                      ? this.kr
                      : this.Ft.whenSignal(Ae).then(function () {
                          return (
                            t.R1() && $s(t.getAmpDoc()).scheduleAsap(t),
                            t.whenBuilt()
                          );
                        });
                  }),
                  (u.mountInternal = function () {
                    var t = this;
                    if (this.Cr) return this.Cr;
                    this.jr = this.jr || new AbortController();
                    var i = this.jr.signal;
                    return (this.Cr = this.buildInternal()
                      .then(function () {
                        if ((Zt(t.R1()), !i.aborted)) {
                          t.setReadyStateInternal(
                            t.Dr != sn ? t.Dr : t.Hr.usesLoading(t) ? un : sn
                          ),
                            (t.Nr = !0);
                          var n = t.Gr.mountCallback(i);
                          return !!n && n.then(fu);
                        }
                      })
                      .then(function (n) {
                        if (((t.jr = null), i.aborted)) throw Us();
                        t.Ft.signal(Pe),
                          (t.Hr.usesLoading(t) && !n) ||
                            t.setReadyStateInternal(on);
                      })
                      .catch(function (i) {
                        var n;
                        throw (
                          ((t.jr = null),
                          (n = i) &&
                          ("string" == typeof n
                            ? n.startsWith(ks)
                            : "string" == typeof n.message &&
                              n.message.startsWith(ks))
                            ? (t.Cr = null)
                            : (t.Ft.rejectSignal(Pe, i),
                              t.setReadyStateInternal(hn, i)),
                          i)
                        );
                      }));
                  }),
                  (u.mount = function () {
                    var t = this;
                    if (this.Cr) return this.Cr;
                    this.jr = this.jr || new AbortController();
                    var i = this.jr.signal;
                    return this.Ft.whenSignal(Ae).then(function () {
                      if (!t.R1()) return t.whenBuilt();
                      if (i.aborted) throw Us();
                      return $s(t.getAmpDoc()).scheduleAsap(t), t.whenMounted();
                    });
                  }),
                  (u.unmount = function () {
                    this._r && this.pause(),
                      this.R1()
                        ? (this.jr && (this.jr.abort(), (this.jr = null)),
                          $s(this.getAmpDoc()).unschedule(this),
                          this.Nr && this.Gr.unmountCallback(),
                          (this.Nr = !1),
                          (this.Cr = null),
                          this.ne(),
                          this._r && this.Kr(!0))
                        : this.re();
                  }),
                  (u.whenMounted = function () {
                    return this.Ft.whenSignal(Pe);
                  }),
                  (u.whenLoaded = function () {
                    return this.Ft.whenSignal(Te);
                  }),
                  (u.ensureLoaded = function (t) {
                    var i = this;
                    return this.mount().then(function () {
                      if (i.R1())
                        return (
                          i.Hr.usesLoading(i) && i.Gr.ensureLoaded(),
                          i.whenLoaded()
                        );
                      var n = i.ee();
                      return n.whenBuilt().then(function () {
                        if (
                          4 != n.getState() &&
                          ((3 != n.getState() || n.isMeasureRequested()) &&
                            n.measure(),
                          n.isDisplayed())
                        )
                          return (
                            i
                              .getResources()
                              .scheduleLayoutOrPreload(n, !0, t, !0),
                            i.whenLoaded()
                          );
                      });
                    });
                  }),
                  (u.setAsContainerInternal = function (t) {
                    $s(this.getAmpDoc()).setContainer(this, t);
                  }),
                  (u.removeAsContainerInternal = function () {
                    $s(this.getAmpDoc()).removeContainer(this);
                  }),
                  (u.setReadyStateInternal = function (t, i) {
                    if (t !== this.Dr && ((this.Dr = t), this.R1()))
                      switch (t) {
                        case un:
                          return (
                            this.Ft.signal(Oe),
                            this.Ft.reset(Me),
                            this.Ft.reset(Te),
                            this.classList.add("i-amphtml-layout"),
                            this.toggleLoading(!0),
                            void this.dispatchCustomEventForTesting(ye)
                          );
                        case on:
                          return (
                            this.Ft.signal(Oe),
                            this.Ft.signal(Te),
                            this.Ft.reset(Me),
                            this.classList.add("i-amphtml-layout"),
                            this.toggleLoading(!1),
                            Di(this, "load", null, cu),
                            void this.dispatchCustomEventForTesting(we)
                          );
                        case hn:
                          return (
                            this.Ft.rejectSignal(Te, i),
                            this.toggleLoading(!1),
                            void Di(this, "error", i, cu)
                          );
                      }
                  }),
                  (u.preconnect = function (t) {
                    var i = this;
                    Zt(this.isUpgraded()),
                      t
                        ? this.Gr.preconnectCallback(t)
                        : Qs(this.getAmpDoc(), function () {
                            i.ownerDocument &&
                              i.ownerDocument.defaultView &&
                              i.Gr.preconnectCallback(t);
                          });
                  }),
                  (u.R1 = function () {
                    return !!this.Hr && this.Hr.R1();
                  }),
                  (u.deferredMount = function () {
                    return !!this.Hr && this.Hr.deferredMount(this);
                  }),
                  (u.isAlwaysFixed = function () {
                    return !!this.Gr && this.Gr.isAlwaysFixed();
                  }),
                  (u.updateLayoutBox = function (t) {
                    var i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    this.isBuilt() && this.onMeasure(i);
                  }),
                  (u.onMeasure = function () {
                    Zt(this.isBuilt());
                    try {
                      this.Gr.onLayoutMeasure();
                    } catch (t) {
                      js(t, this);
                    }
                  }),
                  (u.Qr = function () {
                    var t;
                    return (
                      void 0 !== this.sizerElement ||
                        (this.Ur !== ne && this.Ur !== oe) ||
                        ((this.sizerElement =
                          this.querySelector("i-amphtml-sizer")),
                        null === (t = this.sizerElement) ||
                          void 0 === t ||
                          t.setAttribute("slot", "i-amphtml-svc")),
                      this.sizerElement || null
                    );
                  }),
                  (u.se = function (t) {
                    if (this.Ur !== ne)
                      if (this.Ur !== oe);
                      else {
                        var i = t.querySelector(".i-amphtml-intrinsic-sizer");
                        if (!i) return;
                        i.setAttribute("src", "");
                      }
                    else _r(t, "paddingTop", "0");
                  }),
                  (u.oe = function () {
                    var t = this,
                      i =
                        this.hasAttribute("media") ||
                        (this.hasAttribute("sizes") &&
                          !this.hasAttribute("disable-inline-width")) ||
                        this.hasAttribute("heights"),
                      n = !!this.Wr,
                      r = this.ownerDocument.defaultView;
                    i != n &&
                      r &&
                      (i
                        ? ((this.Wr = new Se(r, function () {
                            return t.ue();
                          })),
                          this.ue())
                        : this.he());
                  }),
                  (u.he = function () {
                    this.Wr && (this.Wr.dispose(), (this.Wr = null));
                  }),
                  (u.ue = function () {
                    var t = this.Wr;
                    if (t) {
                      t.start();
                      var i = this.getAttribute("media") || null,
                        n = !i || t.resolveMatchQuery(i);
                      this.classList.toggle(
                        "i-amphtml-hidden-by-media-query",
                        !n
                      );
                      var r = this.hasAttribute("disable-inline-width")
                        ? null
                        : this.getAttribute("sizes");
                      r && _r(this, "width", t.resolveListQuery(r));
                      var e =
                        this.Ur === ne ? this.getAttribute("heights") : null;
                      if (e) {
                        var s = this.Qr();
                        s && _r(s, "paddingTop", t.resolveListQuery(e));
                      }
                      t.complete(), this.ee().requestMeasure();
                    }
                  }),
                  (u.applySize = function (t, i, n) {
                    var r = this.Qr();
                    r &&
                      ((this.sizerElement = null),
                      this.se(r),
                      this.ae(function () {
                        r && Mi(r);
                      })),
                      void 0 !== t && _r(this, "height", t, "px"),
                      void 0 !== i && _r(this, "width", i, "px"),
                      n &&
                        (null != n.top && _r(this, "marginTop", n.top, "px"),
                        null != n.right &&
                          _r(this, "marginRight", n.right, "px"),
                        null != n.bottom &&
                          _r(this, "marginBottom", n.bottom, "px"),
                        null != n.left && _r(this, "marginLeft", n.left, "px")),
                      this.ce() && this.fe(),
                      Di(this, "amp:size-changed");
                  }),
                  (u.connectedCallback = function () {
                    if (
                      ((function () {
                        if (void 0 === ou) {
                          var t = self.document.createElement("template");
                          ou = "content" in t;
                        }
                        return ou;
                      })() ||
                        void 0 !== this.qr ||
                        (this.qr = !!yi(this, "template")),
                      !this.qr && !this._r && Ri(this))
                    ) {
                      if (
                        ((this._r = !0),
                        this.everAttached ||
                          this.classList.add(
                            "i-amphtml-element",
                            "i-amphtml-notbuilt",
                            "amp-notbuilt"
                          ),
                        !this.ki)
                      ) {
                        var t = oi(this),
                          i = Kn(t).getAmpDoc(this);
                        (this.ki = i), n(i, this, this.Hr);
                      }
                      if (
                        (this.ci || (this.ci = hr(this.ki)),
                        this.getResources().add(this),
                        this.everAttached)
                      ) {
                        var r = this.reconstructWhenReparented();
                        r && this.ne(),
                          this.isUpgraded() &&
                            (r &&
                              !this.R1() &&
                              this.getResources().upgraded(this),
                            this.an(),
                            this.dispatchCustomEventForTesting(be)),
                          this.Hr && this.R1() && this.Kr();
                      } else {
                        this.everAttached = !0;
                        try {
                          (this.Ur = (function (t) {
                            var i = t.getAttribute("i-amphtml-layout");
                            if (i) {
                              var n,
                                r = ae(i);
                              return (
                                et(r),
                                (r != ne && r != oe) || !t.firstElementChild
                                  ? r == Zr && Cr(t, !1)
                                  : ((t.sizerElement =
                                      t.querySelector("i-amphtml-sizer") ||
                                      void 0),
                                    null === (n = t.sizerElement) ||
                                      void 0 === n ||
                                      n.setAttribute("slot", "i-amphtml-svc")),
                                r
                              );
                            }
                            var e = Ue(t),
                              s = e.height,
                              u = e.layout,
                              o = e.width;
                            if (
                              (t.classList.add(ce(u)),
                              fe(u) &&
                                t.classList.add(
                                  "i-amphtml-layout-size-defined"
                                ),
                              u == Zr)
                            )
                              Cr(t, !1);
                            else if (u == te)
                              kr(t, { width: ut(o), height: ut(s) });
                            else if (u == ie) _r(t, "height", ut(s));
                            else if (u == ne) {
                              var h =
                                t.ownerDocument.createElement(
                                  "i-amphtml-sizer"
                                );
                              h.setAttribute("slot", "i-amphtml-svc");
                              var a = de(s),
                                c = de(o);
                              ot(a),
                                ot(c),
                                kr(h, { paddingTop: (a / c) * 100 + "%" }),
                                t.insertBefore(h, t.firstChild),
                                (t.sizerElement = h);
                            } else if (u == oe) {
                              var f = Ce(t)(De),
                                l = f.firstElementChild;
                              st(l),
                                l.setAttribute(
                                  "src",
                                  'data:image/svg+xml;charset=utf-8,<svg height="'
                                    .concat(s, '" width="')
                                    .concat(
                                      o,
                                      '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>'
                                    )
                                ),
                                t.insertBefore(f, t.firstChild),
                                (t.sizerElement = f);
                            } else
                              u == ee ||
                                u == re ||
                                (u == se
                                  ? (o && _r(t, "width", o),
                                    s && _r(t, "height", s))
                                  : u == ue &&
                                    (t.classList.add(
                                      "i-amphtml-layout-awaiting-size"
                                    ),
                                    o && _r(t, "width", o),
                                    _r(t, "height", 0)));
                            return t.setAttribute("i-amphtml-layout", u), u;
                          })(this)),
                            this.oe();
                        } catch (t) {
                          js(t, this);
                        }
                        this.Hr
                          ? this.Kr()
                          : (vu.has("*") ||
                              vu.has(this.tagName.toLowerCase())) &&
                            this.markUnresolved(),
                          this.isUpgraded() ||
                            this.dispatchCustomEventForTesting("amp:stubbed");
                      }
                      this.toggleLoading(!0);
                    }
                  }),
                  (u.ce = function () {
                    return this.classList.contains(
                      "i-amphtml-layout-awaiting-size"
                    );
                  }),
                  (u.fe = function () {
                    this.classList.remove("i-amphtml-layout-awaiting-size");
                  }),
                  (u.Kr = function (t) {
                    if (this.R1()) {
                      if (!this.Cr)
                        if (
                          ($s(this.getAmpDoc()).schedule(this),
                          this.classList.remove(
                            "amp-unresolved",
                            "i-amphtml-unresolved"
                          ),
                          this.kr)
                        )
                          this.setReadyStateInternal(
                            this.Hr && this.Hr.usesLoading(this) ? un : sn
                          );
                        else if ((this.setReadyStateInternal(en), !t)) {
                          var i = this.Hr.getPreconnects(this);
                          if (i && i.length > 0) {
                            var n = this.getAmpDoc();
                            Qs(n, function () {
                              var t = n.win;
                              if (t) {
                                var r = or(t);
                                i.forEach(function (t) {
                                  return r.url(n, t, !1);
                                });
                              }
                            });
                          }
                        }
                    } else this.le();
                  }),
                  (u.le = function () {
                    var i = this;
                    if (!this.qr && 1 == this.Vr) {
                      var n = new (Zt(this.Hr))(this);
                      this.Vr = 4;
                      var r = t.Date.now(),
                        e = n.upgradeCallback();
                      if (e) {
                        if ("function" == typeof e.then)
                          return e
                            .then(function (t) {
                              i.Yr(t || n, r);
                            })
                            .catch(function (t) {
                              (i.Vr = 3), d(t);
                            });
                        this.Yr(e, r);
                      } else this.Yr(n, r);
                    }
                  }),
                  (u.disconnectedCallback = function () {
                    this.disconnect(!1);
                  }),
                  (u.an = function () {
                    this.Rr && this.Gr.attachedCallback();
                  }),
                  (u.disconnect = function (t) {
                    !this.qr &&
                      this._r &&
                      ((!t && Ri(this)) ||
                        (t && this.classList.remove("i-amphtml-element"),
                        (this._r = !1),
                        this.getResources().remove(this),
                        this.Gr && this.Gr.detachedCallback(),
                        this.R1() && this.unmount(),
                        this.toggleLoading(!1),
                        this.he()));
                  }),
                  (u.dispatchCustomEventForTesting = function (t, i) {}),
                  (u.prerenderAllowed = function () {
                    return (
                      !this.hasAttribute("noprerender") &&
                      !!this.Hr &&
                      this.Hr.prerenderAllowed(this)
                    );
                  }),
                  (u.previewAllowed = function () {
                    return !!this.Hr && this.Hr.previewAllowed(this);
                  }),
                  (u.isBuildRenderBlocking = function () {
                    return !!this.Gr && this.Gr.isBuildRenderBlocking();
                  }),
                  (u.createPlaceholder = function () {
                    return this.Gr ? this.Gr.createPlaceholderCallback() : null;
                  }),
                  (u.createLoaderLogo = function () {
                    return this.Hr
                      ? this.Hr.createLoaderLogoCallback(this)
                      : {};
                  }),
                  (u.renderOutsideViewport = function () {
                    return !!this.Gr && this.Gr.renderOutsideViewport();
                  }),
                  (u.idleRenderOutsideViewport = function () {
                    return !!this.Gr && this.Gr.idleRenderOutsideViewport();
                  }),
                  (u.getLayoutBox = function () {
                    return this.ee().getLayoutBox();
                  }),
                  (u.getLayoutSize = function () {
                    return this.ee().getLayoutSize();
                  }),
                  (u.getOwner = function () {
                    return this.ee().getOwner();
                  }),
                  (u.getIntersectionChangeEntry = function () {
                    var t = this.Gr
                        ? this.Gr.getIntersectionElementLayoutBox()
                        : this.getLayoutBox(),
                      i = this.getOwner(),
                      n = pr(this.getAmpDoc()).getRect();
                    return (function (t, i, n) {
                      var r,
                        e,
                        s,
                        u,
                        o =
                          (function (t) {
                            for (
                              var i = -1 / 0,
                                n = 1 / 0,
                                r = -1 / 0,
                                e = 1 / 0,
                                s = 0;
                              s < arguments.length;
                              s++
                            ) {
                              var u = arguments[s];
                              if (
                                u &&
                                ((i = Math.max(i, u.left)),
                                (n = Math.min(n, u.left + u.width)),
                                (r = Math.max(r, u.top)),
                                (e = Math.min(e, u.top + u.height)),
                                n < i || e < r)
                              )
                                return null;
                            }
                            return n == 1 / 0 ? null : zi(i, r, n - i, e - r);
                          })(t, i, n) || zi(0, 0, 0, 0);
                      return (function (t, i, n, r) {
                        var e = t,
                          s = i;
                        return (
                          i &&
                            ((n = Gi(n, -i.left, -i.top)),
                            (e = Gi(e, -i.left, -i.top)),
                            (s = Gi(s, -i.left, -i.top))),
                          {
                            time:
                              "undefined" != typeof performance &&
                              performance.now
                                ? performance.now()
                                : Date.now() - au,
                            rootBounds: s,
                            boundingClientRect: e,
                            intersectionRect: n,
                            intersectionRatio: r,
                          }
                        );
                      })(
                        t,
                        n,
                        o,
                        ((e = t),
                        (s = (r = o).width * r.height),
                        0 == (u = e.width * e.height) ? 0 : s / u)
                      );
                    })(t, i && i.getLayoutBox(), n);
                  }),
                  (u.ee = function () {
                    return this.getResources().getResourceForElement(this);
                  }),
                  (u.getResourceId = function () {
                    return this.ee().getId();
                  }),
                  (u.isRelayoutNeeded = function () {
                    return !!this.Gr && this.Gr.isRelayoutNeeded();
                  }),
                  (u.getImpl = function () {
                    var t = this;
                    return (
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      !arguments[0]
                        ? this.Xr()
                        : this.build()
                    ).then(function () {
                      return t.Gr;
                    });
                  }),
                  (u.Xr = function () {
                    var t = this;
                    return this.Ft.whenSignal(Ae).then(function () {
                      return t.le(), t.whenUpgraded();
                    });
                  }),
                  (u.getApi = function () {
                    return this.getImpl().then(function (t) {
                      return t.getApi();
                    });
                  }),
                  (u.getLayout = function () {
                    return this.Ur;
                  }),
                  (u.layoutCallback = function (t) {
                    var i = this;
                    if ((pu(this), Zt(this.isBuilt()), t.aborted))
                      return Promise.reject(Us());
                    this.dispatchCustomEventForTesting(ye);
                    var n = 0 == this.pi;
                    this.Ft.reset(Me),
                      n && this.Ft.signal(Oe),
                      this.toggleLoading(!0);
                    var r = c(function () {
                      return i.Gr.layoutCallback();
                    });
                    return (
                      this.preconnect(!0),
                      this.classList.add("i-amphtml-layout"),
                      r.then(
                        function () {
                          if (t.aborted) throw Us();
                          n && i.Ft.signal(Te),
                            i.setReadyStateInternal(on),
                            i.pi++,
                            i.toggleLoading(!1),
                            i.zr ||
                              (i.Gr.firstLayoutCompleted(),
                              (i.zr = !0),
                              i.dispatchCustomEventForTesting(we));
                        },
                        function (r) {
                          if (t.aborted) throw Us();
                          throw (
                            (n && i.Ft.rejectSignal(Te, r),
                            i.setReadyStateInternal(hn, r),
                            i.pi++,
                            i.toggleLoading(!1),
                            r)
                          );
                        }
                      )
                    );
                  }),
                  (u.pause = function () {
                    this.isBuilt() &&
                      (this.Gr.pauseCallback(),
                      !this.R1() && this.Gr.unlayoutOnPause() && this.re());
                  }),
                  (u.resume = function () {
                    this.isBuilt() && this.Gr.resumeCallback();
                  }),
                  (u.unlayoutCallback = function () {
                    if ((pu(this), !this.isBuilt())) return !1;
                    this.Ft.signal(Me);
                    var t = this.Gr.unlayoutCallback();
                    return (
                      t && this.ne(),
                      this.dispatchCustomEventForTesting("amp:unload"),
                      t
                    );
                  }),
                  (u.re = function () {
                    this.ee().unlayout(),
                      this._r && this.ci && this.ci.schedulePass();
                  }),
                  (u.ne = function () {
                    (this.pi = 0),
                      (this.zr = !1),
                      this.Ft.reset(Pe),
                      this.Ft.reset(Ie),
                      this.Ft.reset(Oe),
                      this.Ft.reset(Te),
                      this.Ft.reset("ini-load");
                  }),
                  (u.reconstructWhenReparented = function () {
                    return !!this.Gr && this.Gr.reconstructWhenReparented();
                  }),
                  (u.collapse = function () {
                    this.Gr && this.Gr.collapse();
                  }),
                  (u.collapsedCallback = function (t) {
                    this.Gr && this.Gr.collapsedCallback(t);
                  }),
                  (u.expand = function () {
                    this.Gr && this.Gr.expand();
                  }),
                  (u.mutatedAttributesCallback = function (t) {
                    this.Gr
                      ? this.Gr.mutatedAttributesCallback(t)
                      : this.R1() && $s(this).scheduleAsap(this);
                  }),
                  (u.enqueAction = function (t) {
                    pu(this),
                      this.isBuilt()
                        ? this.ve(t, !1)
                        : (void 0 === this.Br && (this.Br = []),
                          Zt(this.Br).push(t),
                          this.build());
                  }),
                  (u.ie = function () {
                    var t = this;
                    if (this.Br) {
                      var i = Zt(this.Br);
                      (this.Br = null),
                        i.forEach(function (i) {
                          t.ve(i, !0);
                        });
                    }
                  }),
                  (u.ve = function (t, i) {
                    try {
                      this.Gr.executeAction(t, i);
                    } catch (i) {
                      d(
                        "Action execution failed:",
                        i,
                        t.node.tagName,
                        t.method
                      );
                    }
                  }),
                  (u.Zr = function () {
                    var t,
                      i,
                      n = this.getAttribute("data-block-on-consent");
                    if (null === n) {
                      if (
                        !(i = (t = this)
                          .getAmpDoc()
                          .getMetaByName("amp-consent-blocking")) ||
                        !(i = i.toUpperCase().replace(/\s+/g, ""))
                          .split(",")
                          .includes(t.tagName)
                      )
                        return null;
                      (n = "default"),
                        this.setAttribute("data-block-on-consent", n);
                    }
                    return "" == n || "default" == n
                      ? Zt(this.Gr).getConsentPolicy()
                      : n;
                  }),
                  (u.te = function () {
                    var t,
                      i =
                        this.getAttribute("data-block-on-consent-purposes") ||
                        null;
                    return null == i ||
                      null === (t = i.replace(/\s+/g, "")) ||
                      void 0 === t
                      ? void 0
                      : t.split(",");
                  }),
                  (u.getPlaceholder = function () {
                    return wi(this, function (t) {
                      return t.hasAttribute("placeholder") && !mu(t);
                    });
                  }),
                  (u.togglePlaceholder = function (t) {
                    if ((pu(this), t)) {
                      var i = this.getPlaceholder();
                      i && i.classList.remove("amp-hidden");
                    } else
                      for (
                        var n =
                            (this,
                            (e = void 0),
                            void 0,
                            di("placeholder"),
                            (e = this),
                            (s = "> [".concat("placeholder", "]")),
                            fi(e)
                              ? e.querySelectorAll(li(s, ":scope"))
                              : mi(e, s)),
                          r = 0;
                        r < n.length;
                        r++
                      )
                        mu(n[r]) || n[r].classList.add("amp-hidden");
                    var e, s;
                  }),
                  (u.getFallback = function () {
                    return Ai(this, "fallback");
                  }),
                  (u.toggleFallback = function (t) {
                    pu(this);
                    var i,
                      n = this.ee().getState();
                    if (
                      (this.R1() || !t || (0 != n && 1 != n && 2 != n)) &&
                      (this.classList.toggle("amp-notsupported", t), 1 == t)
                    ) {
                      var r = this.getFallback();
                      r &&
                        ((i = this.getAmpDoc()),
                        On(i, "owners")).scheduleLayout(this, r);
                    }
                  }),
                  (u.renderStarted = function () {
                    this.Ft.signal(Ie),
                      this.togglePlaceholder(!1),
                      this.toggleLoading(!1);
                  }),
                  (u.de = function (t) {
                    var i,
                      n,
                      r = this.pi > 0 || this.Ft.get(Ie);
                    return !(
                      this.Ur == Zr ||
                      this.hasAttribute("noloading") ||
                      (r && !t) ||
                      (this,
                      (n = this.tagName.toUpperCase()),
                      "AMP-AD" !== (i = n) &&
                        "AMP-ANIM" !== i &&
                        "AMP-EMBED" !== i &&
                        "AMP-FACEBOOK" !== i &&
                        "AMP-FACEBOOK-COMMENTS" !== i &&
                        "AMP-FACEBOOK-PAGE" !== i &&
                        "AMP-GOOGLE-DOCUMENT-EMBED" !== i &&
                        "AMP-IFRAME" !== i &&
                        "AMP-IMG" !== i &&
                        "AMP-INSTAGRAM" !== i &&
                        "AMP-LIST" !== i &&
                        "AMP-PINTEREST" !== i &&
                        "AMP-PLAYBUZZ" !== i &&
                        "AMP-RENDER" !== i &&
                        "AMP-TIKTOK" !== i &&
                        "AMP-TWITTER" !== i &&
                        !(function (t) {
                          return "AMP-VIDEO" != t && he.test(t);
                        })(n)) ||
                      xi(this)
                    );
                  }),
                  (u.toggleLoading = function (t) {
                    var i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (this.ownerDocument && this.ownerDocument.defaultView) {
                      var n = rr(this.getAmpDoc());
                      n &&
                        ((t = t && this.de(i))
                          ? n.track(this)
                          : n.untrack(this));
                    }
                  }),
                  (u.getOverflowElement = function () {
                    return (
                      void 0 === this.Lr &&
                        ((this.Lr = Ai(this, "overflow")),
                        this.Lr &&
                          (this.Lr.hasAttribute("tabindex") ||
                            this.Lr.setAttribute("tabindex", "0"),
                          this.Lr.hasAttribute("role") ||
                            this.Lr.setAttribute("role", "button"))),
                      this.Lr
                    );
                  }),
                  (u.overflowCallback = function (t, i, n) {
                    var r = this;
                    this.getOverflowElement(),
                      this.Lr
                        ? (this.Lr.classList.toggle("amp-visible", t),
                          (this.Lr.onclick = t
                            ? function () {
                                var t = er(r.getAmpDoc());
                                t.forceChangeSize(r, i, n),
                                  t.mutateElement(r, function () {
                                    r.overflowCallback(!1, i, n);
                                  });
                              }
                            : null))
                        : t &&
                          this.warnOnMissingOverflow &&
                          Jt().warn(
                            "CustomElement",
                            "Cannot resize element and overflow is not available",
                            this
                          );
                  }),
                  (u.ae = function (t, i) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    this.ki
                      ? er(this.getAmpDoc()).mutateElement(i || this, t, n)
                      : t();
                  }),
                  i(s, [
                    {
                      key: "readyState",
                      get: function () {
                        return this.Dr;
                      },
                    },
                  ]),
                  s
                );
              })(t.HTMLElement);
              return (t.__AMP_BASE_CE_CLASS = r), t.__AMP_BASE_CE_CLASS;
            })(t, n),
            e = (function (t) {
              U(n, t);
              var i = H(n);
              function n() {
                return i.apply(this, arguments);
              }
              return (
                (n.prototype.adoptedCallback = function () {
                  Object.getPrototypeOf(this) !== s &&
                    Object.setPrototypeOf(this, s);
                }),
                n
              );
            })(r),
            s = e.prototype;
          return e;
        }
        function mu(t) {
          return "placeholder" in t;
        }
        function pu(t) {
          Zt(!t.qr);
        }
        function gu(t) {
          vu.add(t || "*");
          for (var i, n = o(lu, !0); !(i = n()).done; ) {
            var r = i.value;
            (null != t && r.tagName.toLowerCase() !== t) || r.markUnresolved();
          }
        }
        var bu = new WeakMap();
        function yu(t) {
          return (
            t.__AMP_EXTENDED_ELEMENTS || (t.__AMP_EXTENDED_ELEMENTS = {}),
            t.__AMP_EXTENDED_ELEMENTS
          );
        }
        function wu(t, i, n) {
          var r = yu(t);
          if (r[i]) {
            if (r[i] != n) {
              ti(
                r[i] == hu,
                "%s is already registered. The script tag for %s is likely included twice in the page.",
                i,
                i
              ),
                (r[i] = n);
              for (var e = 0; e < lu.length; e++) {
                var s = lu[e];
                s.tagName.toLowerCase() == i &&
                  s.ownerDocument.defaultView == t &&
                  (Au(s, n), lu.splice(e--, 1));
              }
            }
          } else Ou(t, i, n);
        }
        function Au(t, i) {
          try {
            t.upgrade(i);
          } catch (i) {
            js(i, t);
          }
        }
        function xu(t) {
          (function (t) {
            if (!t) return [];
            for (
              var i = t.querySelectorAll(
                  "script[custom-element],script[custom-template]"
                ),
                n = [],
                r = 0;
              r < i.length;
              r++
            ) {
              var e = i[r],
                s =
                  e.getAttribute("custom-element") ||
                  e.getAttribute("custom-template"),
                u = bn(e.src);
              s &&
                u &&
                n.push({
                  script: e,
                  extensionId: s,
                  extensionVersion: u.extensionVersion,
                });
            }
            return n;
          })(t.getHeadNode()).forEach(function (i) {
            var n = i.extensionId,
              r = i.extensionVersion,
              e = i.script;
            t.declareExtension(n, r),
              e.addEventListener("error", function () {
                return gu(n);
              }),
              Eu(t.win, n);
          }),
            t.isBodyAvailable() && t.setExtensionsKnown();
        }
        function Eu(t, i) {
          yu(t)[i] || Ou(t, i, hu);
        }
        function Pu(t, i, n) {
          Ou(i, n, yu(t)[n] || hu);
        }
        function Ou(t, i, n) {
          yu(t)[i] = n;
          var r = du(t, Iu);
          t.customElements.define(i, r);
        }
        function Iu(t, i, n) {
          bu.has(t) || (bu.set(t, !0), xu(t));
          var r = i.localName;
          n ||
            t.declaresExtension(r) ||
            ir(t.win).installExtensionForDoc(t, r, "0.1");
        }
        var Tu = "amp-img",
          Mu = [
            "alt",
            "aria-describedby",
            "aria-label",
            "aria-labelledby",
            "crossorigin",
            "referrerpolicy",
            "title",
            "importance",
            "sizes",
            "srcset",
            "src",
          ],
          Su = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return (
                ((n = i.call(this, t)).me = !0),
                (n.pe = null),
                (n.be = null),
                (n.ge = null),
                (n.ye = 0),
                n
              );
            }
            (n.R1 = function () {
              return !1;
            }),
              (n.prerenderAllowed = function () {
                return !0;
              }),
              (n.usesLoading = function () {
                return !0;
              }),
              (n.getPreconnects = function (t) {
                var i = t.getAttribute("src");
                if (i) return [i];
                var n = t.getAttribute("srcset");
                if (n) {
                  var r = /\S+/.exec(n);
                  if (r) return [r[0]];
                }
                return null;
              });
            var r = n.prototype;
            return (
              (r.mutatedAttributesCallback = function (t) {
                if (this.pe) {
                  var i = Mu.filter(function (i) {
                    return void 0 !== t[i];
                  });
                  t.src &&
                    !t.srcset &&
                    this.element.hasAttribute("srcset") &&
                    (this.element.removeAttribute("srcset"),
                    i.push("srcset"),
                    this.user().warn(
                      Tu,
                      "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.",
                      this.element
                    )),
                    pe(i, this.element, this.pe, !0),
                    this.propagateDataset(this.pe),
                    Qr(this.pe),
                    n.R1() && !this.pe.complete && this.setReadyState(un);
                }
              }),
              (r.preconnectCallback = function (t) {
                var i = this.element.getAttribute("src");
                if (i) or(this.win).url(this.getAmpDoc(), i, t);
                else {
                  var n = this.element.getAttribute("srcset");
                  if (!n) return;
                  var r = /\S+/.exec(n);
                  r && or(this.win).url(this.getAmpDoc(), r[0], t);
                }
              }),
              (r.isLayoutSupported = function (t) {
                return fe(t);
              }),
              (r.we = function () {
                if (this.pe) return this.pe;
                this.me = !this.element.hasAttribute("fallback");
                var t,
                  i,
                  n = Ui(this.element);
                return (
                  n && (this.pe = pi(this.element, "> img:not([placeholder])")),
                  (this.pe = this.pe || new Image()),
                  this.pe.setAttribute("decoding", "async"),
                  this.element.id &&
                    this.pe.setAttribute("amp-img-id", this.element.id),
                  "img" == this.element.getAttribute("role") &&
                    (this.element.removeAttribute("role"),
                    this.user().error(
                      Tu,
                      "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."
                    )),
                  this.Ae(!0),
                  pe(Mu, this.element, this.pe),
                  this.propagateDataset(this.pe),
                  Qr(this.pe),
                  me(this.pe, !0),
                  (t = this.element),
                  (i = this.pe),
                  t.hasAttribute("object-fit") &&
                    _r(i, "object-fit", t.getAttribute("object-fit")),
                  t.hasAttribute("object-position") &&
                    _r(i, "object-position", t.getAttribute("object-position")),
                  n || this.element.appendChild(this.pe),
                  this.pe
                );
              }),
              (r.Ae = function (t) {
                var i = this;
                if (
                  this.pe &&
                  !this.element.hasAttribute("i-amphtml-ssr") &&
                  !this.element.hasAttribute("sizes") &&
                  !this.pe.hasAttribute("sizes")
                ) {
                  var n = this.element.getAttribute("srcset");
                  if (n && !/[0-9]+x(?:,|$)/.test(n)) {
                    var r = this.element.getLayoutSize().width;
                    if (this.xe(r)) {
                      var e = this.getViewport().getWidth(),
                        s = "(max-width: ".concat(e, "px) ").concat(r, "px, "),
                        u = r + "px";
                      if (this.getLayout() !== te) {
                        var o = Math.round((100 * r) / e);
                        u = Math.max(o, 100) + "vw";
                      }
                      var h = s + u;
                      t
                        ? this.pe.setAttribute("sizes", h)
                        : this.mutateElement(function () {
                            i.pe.setAttribute("sizes", h);
                          }),
                        (this.ye = r);
                    }
                  }
                }
              }),
              (r.xe = function (t) {
                return !this.pe.hasAttribute("sizes") || t > this.ye;
              }),
              (r.reconstructWhenReparented = function () {
                return !1;
              }),
              (r.mountCallback = function () {
                var t = this,
                  i = !!this.pe,
                  n = this.we();
                i ||
                  (Ke(n, "load", function () {
                    t.setReadyState(on), t.firstLayoutCompleted(), t.Ee();
                  }),
                  Ke(n, "error", function (i) {
                    t.setReadyState(hn, i), t.Oe();
                  })),
                  n.complete
                    ? (this.setReadyState(on),
                      this.firstLayoutCompleted(),
                      this.Ee())
                    : this.setReadyState(un);
              }),
              (r.unmountCallback = function () {
                var t = this.pe;
                t &&
                  !t.complete &&
                  ((t.src =
                    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="),
                  Mi(t),
                  (this.pe = null));
              }),
              (r.ensureLoaded = function () {
                this.pe.loading = "eager";
              }),
              (r.layoutCallback = function () {
                var t = this;
                this.we();
                var i = this.pe;
                return (
                  (this.be = Ke(i, "load", function () {
                    return t.Ee();
                  })),
                  (this.ge = Ke(i, "error", function () {
                    return t.Oe();
                  })),
                  this.element.getLayoutSize().width <= 0
                    ? h()
                    : this.loadPromise(i)
                );
              }),
              (r.unlayoutCallback = function () {
                if (!n.R1()) {
                  this.ge && (this.ge(), (this.ge = null)),
                    this.be && (this.be(), (this.be = null));
                  var t = this.pe;
                  return (
                    t &&
                      !t.complete &&
                      ((t.src =
                        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="),
                      Mi(t),
                      (this.pe = null)),
                    !0
                  );
                }
              }),
              (r.firstLayoutCompleted = function () {
                var t = this.getPlaceholder();
                t && t.classList.contains("i-amphtml-blurry-placeholder")
                  ? Rr(t, { opacity: 0 })
                  : this.togglePlaceholder(!1);
              }),
              (r.Ee = function () {
                !this.me &&
                  this.pe.classList.contains("i-amphtml-ghost") &&
                  (this.pe.classList.remove("i-amphtml-ghost"),
                  this.toggleFallback(!1));
              }),
              (r.Oe = function () {
                this.me &&
                  (this.pe.classList.add("i-amphtml-ghost"),
                  this.toggleFallback(!0),
                  this.togglePlaceholder(!1),
                  (this.me = !1));
              }),
              (r.propagateDataset = function (t) {
                for (var i in t.dataset)
                  i in this.element.dataset || delete t.dataset[i];
                for (var n in this.element.dataset)
                  (n.startsWith("ampBind") && "ampBind" !== n) ||
                    (t.dataset[n] !== this.element.dataset[n] &&
                      (t.dataset[n] = this.element.dataset[n]));
              }),
              n
            );
          })(su),
          Ru = (function (t) {
            U(n, t);
            var i = H(n);
            function n() {
              return i.apply(this, arguments);
            }
            n.prerenderAllowed = function () {
              return !0;
            };
            var r = n.prototype;
            return (
              (r.isLayoutSupported = function (t) {
                return t == re || fe(t);
              }),
              (r.buildCallback = function () {
                !(function (t) {
                  if (!Ui(t)) {
                    var i = (function (t) {
                      var i;
                      return (
                        ae(
                          null !== (i = t.getAttribute("layout")) &&
                            void 0 !== i
                            ? i
                            : ""
                        ) || Ue(t).layout
                      );
                    })(t);
                    if (i != re) {
                      var n = t.ownerDocument.createElement("div");
                      me(n),
                        (function (t) {
                          return (function (t, i) {
                            for (
                              var n = [], r = t.firstChild;
                              r;
                              r = r.nextSibling
                            )
                              !xi(r) && n.push(r);
                            return n;
                          })(t);
                        })(t).forEach(function (t) {
                          n.appendChild(t);
                        }),
                        t.appendChild(n);
                    }
                  }
                })(this.element);
              }),
              n
            );
          })(su);
        function _u(t) {
          var i;
          return null === (i = t.featurePolicy) || void 0 === i
            ? void 0
            : i.allowedFeatures().includes("attribution-reporting");
        }
        function ku(t, i) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            e = Hr.getImage(t),
            s = new e();
          n && (s.referrerPolicy = "no-referrer");
          var u = 0;
          if (null != r)
            if (_u(t.document)) {
              var o = Cu(t, (u = 6));
              (r = o(r)), (s.attributionSrc = r);
            } else u = 5;
          var h = Cu(t, u);
          return (i = h(i)), (s.src = i), s;
        }
        function Cu(t, i) {
          var n = {
              ATTRIBUTION_REPORTING_STATUS: function () {
                return i;
              },
            },
            r = fr(t.document),
            e = { ATTRIBUTION_REPORTING_STATUS: !0 };
          return function (t) {
            return r.expandUrlSync(t, n, e);
          };
        }
        var Nu = "amp-pixel",
          Du = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return ((n = i.call(this, t)).Te = null), n;
            }
            var r = n.prototype;
            return (
              (r.isLayoutSupported = function (t) {
                return !0;
              }),
              (r.buildCallback = function () {
                this.element.setAttribute("aria-hidden", "true"),
                  (this.Pe = this.element.getAttribute("referrerpolicy")),
                  this.Pe &&
                    ti(
                      "no-referrer" == this.Pe,
                      ""
                        .concat(Nu, ': invalid "referrerpolicy" value "')
                        .concat(this.Pe, '".') +
                        ' Only "no-referrer" is supported'
                    ),
                  this.element.hasAttribute("i-amphtml-ssr") &&
                  this.element.querySelector("img")
                    ? Qt().info(Nu, "inabox img already present")
                    : this.getAmpDoc()
                        .whenFirstVisible()
                        .then(this.Ie.bind(this));
              }),
              (r.Ie = function () {
                var t = this;
                if (this.Te) return Qt().error(Nu, "duplicate pixel"), this.Te;
                this.Te = cr(this.win)
                  .promise(1)
                  .then(function () {
                    var i = t.element.getAttribute("src");
                    if (i)
                      return fr(t.element)
                        .expandUrlAsync(t.Se(i))
                        .then(function (i) {
                          if (t.win) {
                            var n = (function (t, i, n, r) {
                              return (
                                n &&
                                  "no-referrer" !== n &&
                                  Jt().error(
                                    "pixel",
                                    "Unsupported referrerPolicy: %s",
                                    n
                                  ),
                                "no-referrer" === n
                                  ? (function (t, i, n) {
                                      if ("referrerPolicy" in Image.prototype)
                                        return ku(t, i, !0, n);
                                      var r,
                                        e =
                                          ((r = {
                                            src: "about:blank",
                                            style: "display:none",
                                          }),
                                          (function (t, i) {
                                            for (var n in i)
                                              t.setAttribute(n, i[n]);
                                            return t;
                                          })(
                                            t.document.createElement("iframe"),
                                            r
                                          ));
                                      return (
                                        (e.onload = function () {
                                          ku(e.contentWindow, i);
                                        }),
                                        t.document.body.appendChild(e),
                                        e
                                      );
                                    })(t, i, r)
                                  : ku(t, i, !1, r)
                              );
                            })(
                              t.win,
                              i,
                              t.Pe,
                              t.element.getAttribute("attributionsrc")
                            );
                            return Qt().info(Nu, "pixel triggered: ", i), n;
                          }
                        });
                  });
              }),
              (r.Se = function (t) {
                return (
                  ti(
                    /^(https\:\/\/|\/\/)/i.test(t),
                    'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' +
                      t
                  ),
                  t
                );
              }),
              n
            );
          })(su),
          ju = (function () {
            function t(t, i, n) {
              var r = this;
              (this.Me = cr(t)),
                (this.Re = i),
                (this._e = n || 0),
                (this.ke = -1),
                (this.Ne = 0),
                (this.Ce = !1),
                (this.je = function () {
                  r.De();
                });
            }
            var i = t.prototype;
            return (
              (i.isPending = function () {
                return -1 != this.ke;
              }),
              (i.schedule = function (t) {
                var i = t || this._e;
                this.Ce && i < 10 && (i = 10);
                var n = Date.now() + i;
                return (
                  (!this.isPending() || n - this.Ne < -10) &&
                  (this.cancel(),
                  (this.Ne = n),
                  (this.ke = this.Me.delay(this.je, i)),
                  !0)
                );
              }),
              (i.De = function () {
                (this.ke = -1),
                  (this.Ne = 0),
                  (this.Ce = !0),
                  this.Re(),
                  (this.Ce = !1);
              }),
              (i.cancel = function () {
                this.isPending() && (this.Me.cancel(this.ke), (this.ke = -1));
              }),
              t
            );
          })();
        function Uu(t, i) {
          var n = i.documentElement;
          return t.some(function (t) {
            return n.hasAttribute(t);
          });
        }
        function Lu(t) {
          return Uu(["⚡4email", "amp4email"], t);
        }
        function zu(t) {
          return Uu(["⚡", "amp"], t);
        }
        var Hu = "Action",
          Gu = "__AMP_ACTION_MAP__" + Math.random(),
          Vu = "__AMP_ACTION_QUEUE__",
          Fu = "__AMP_ACTION_HANDLER__",
          Bu = { form: ["submit", "clear"] },
          qu = [
            { tagOrTarget: "AMP", method: "setState" },
            { tagOrTarget: "*", method: "focus" },
            { tagOrTarget: "*", method: "hide" },
            { tagOrTarget: "*", method: "show" },
            { tagOrTarget: "*", method: "toggleClass" },
            { tagOrTarget: "*", method: "toggleChecked" },
            { tagOrTarget: "*", method: "toggleVisibility" },
          ],
          $u = {
            button: !0,
            checkbox: !0,
            link: !0,
            listbox: !0,
            menuitem: !0,
            menuitemcheckbox: !0,
            menuitemradio: !0,
            option: !0,
            radio: !0,
            scrollbar: !0,
            slider: !0,
            spinbutton: !0,
            switch: !0,
            tab: !0,
            treeitem: !0,
          },
          Wu = (function () {
            function t(t, i, n, r, e, s, u) {
              var o =
                  arguments.length > 7 && void 0 !== arguments[7]
                    ? arguments[7]
                    : "?",
                h =
                  arguments.length > 8 && void 0 !== arguments[8]
                    ? arguments[8]
                    : null,
                a =
                  arguments.length > 9 && void 0 !== arguments[9]
                    ? arguments[9]
                    : Math.random();
              (this.node = t),
                (this.method = i),
                (this.args = n),
                (this.source = r),
                (this.caller = e),
                (this.event = s),
                (this.trust = u),
                (this.actionEventType = o),
                (this.tagOrTarget = h || t.tagName),
                (this.sequenceId = a);
            }
            return (
              (t.prototype.satisfiesTrust = function (t) {
                if (!J(this.trust))
                  return (
                    Qt().error(
                      Hu,
                      "Invalid trust for '"
                        .concat(this.method, "': ")
                        .concat(this.trust)
                    ),
                    !1
                  );
                if (this.trust < t) {
                  var i = (function (t) {
                    switch (t) {
                      case 1:
                        return "low";
                      case 3:
                        return "high";
                      default:
                        return et(2 === t), "default";
                    }
                  })(this.trust);
                  return (
                    Jt().error(
                      Hu,
                      '"'
                        .concat(this.actionEventType, '" event with "')
                        .concat(i, '" trust is not allowed to ') +
                        'invoke "'
                          .concat(this.tagOrTarget.toLowerCase(), ".")
                          .concat(this.method, '".')
                    ),
                    !1
                  );
                }
                return !0;
              }),
              t
            );
          })(),
          Yu = (function () {
            function t(t, i) {
              (this.ampdoc = t),
                (this.Ue = i || t.getRootNode()),
                (this.ze = this.ampdoc.isSingleDoc() && Lu(this.Ue)),
                (this.Le = this.ze ? qu : null),
                (this.He = A()),
                (this.Ge = A()),
                this.addEvent("tap"),
                this.addEvent("submit"),
                this.addEvent("change"),
                this.addEvent("input-debounced"),
                this.addEvent("input-throttled"),
                this.addEvent("valid"),
                this.addEvent("invalid");
            }
            var i = t.prototype;
            return (
              (i.addEvent = function (t) {
                var i = this;
                if ("tap" == t)
                  this.Ue.addEventListener("click", function (n) {
                    if (!n.defaultPrevented) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    }
                  }),
                    this.Ue.addEventListener("keydown", function (n) {
                      var r = n.key,
                        e = n.target;
                      if ("Enter" == r || " " == r) {
                        var s = e.getAttribute("role"),
                          u = s && x($u, s.toLowerCase());
                        !n.defaultPrevented &&
                          u &&
                          i.trigger(e, t, n, 3) &&
                          n.preventDefault();
                      }
                    });
                else if ("submit" == t)
                  this.Ue.addEventListener(t, function (n) {
                    var r = n.target;
                    i.trigger(r, t, n, 3);
                  });
                else if ("change" == t)
                  this.Ue.addEventListener(t, function (n) {
                    var r = n.target;
                    i.Ve(n), i.trigger(r, t, n, 3);
                  });
                else if ("input-debounced" == t) {
                  var n = mt(
                    this.ampdoc.win,
                    function (n) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    },
                    300
                  );
                  this.Ue.addEventListener("input", function (t) {
                    var r = new Ju(t);
                    i.Ve(r), n(r);
                  });
                } else if ("input-throttled" == t) {
                  var r = dt(
                    this.ampdoc.win,
                    function (n) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    },
                    100
                  );
                  this.Ue.addEventListener("input", function (t) {
                    var n = new Ju(t);
                    i.Ve(n), r(n);
                  });
                } else
                  ("valid" != t && "invalid" != t) ||
                    this.Ue.addEventListener(t, function (n) {
                      var r = n.target;
                      i.trigger(r, t, n, 3);
                    });
              }),
              (i.addGlobalTarget = function (t, i) {
                this.He[t] = i;
              }),
              (i.addGlobalMethodHandler = function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 2;
                this.Ge[t] = { handler: i, minTrust: n };
              }),
              (i.trigger = function (t, i, n, r, e) {
                return this.Fe(t, i, n, r, e);
              }),
              (i.execute = function (t, i, n, r, e, s, u) {
                var o = new Wu(t, i, n, r, e, s, u);
                this.Be(o);
              }),
              (i.installActionHandler = function (t, i) {
                if (
                  (Zt(
                    Ku(t.getAttribute("id") || "") ||
                      t.tagName.toLowerCase() in Bu
                  ),
                  t[Fu])
                )
                  Qt().error(
                    Hu,
                    "Action handler already installed for ".concat(t)
                  );
                else {
                  t[Fu] = i;
                  var n = t[Vu];
                  V(n) &&
                    cr(oi(t)).delay(function () {
                      n.forEach(function (t) {
                        try {
                          i(t);
                        } catch (i) {
                          Qt().error(Hu, "Action execution failed:", t, i);
                        }
                      }),
                        (t[Vu].length = 0);
                    }, 1);
                }
              }),
              (i.hasAction = function (t, i, n) {
                return !!this.qe(t, i, n);
              }),
              (i.hasResolvableAction = function (t, i, n) {
                var r = this,
                  e = this.qe(t, i, n);
                return (
                  !!e &&
                  e.actionInfos.some(function (t) {
                    var i = t.target;
                    return !!r.$e(i);
                  })
                );
              }),
              (i.hasResolvableActionForTarget = function (t, i, n, r) {
                var e = this,
                  s = this.qe(t, i, r);
                return (
                  !!s &&
                  s.actionInfos.some(function (t) {
                    var i = t.target;
                    return e.$e(i) == n;
                  })
                );
              }),
              (i.$e = function (t) {
                return this.He[t] ? this.Ue : this.Ue.getElementById(t);
              }),
              (i.setAllowlist = function (t) {
                Zt(
                  t.every(function (t) {
                    return t.tagOrTarget && t.method;
                  })
                ),
                  (this.Le = t);
              }),
              (i.addToAllowlist = function (t, i, n) {
                var r = this;
                (n && n.includes("email") !== this.ze) ||
                  (this.Le || (this.Le = []),
                  V(i) || (i = [i]),
                  i.forEach(function (i) {
                    r.Le.some(function (n) {
                      return n.tagOrTarget == t && n.method == i;
                    }) || r.Le.push({ tagOrTarget: t, method: i });
                  }));
              }),
              (i.Fe = function (t, i, n, r, e) {
                var s = this,
                  u = this.qe(t, i);
                if (!u) return !1;
                var h = Math.random(),
                  a = null;
                return (
                  u.actionInfos.forEach(function (c) {
                    var f = c.args,
                      l = c.method,
                      v = c.str,
                      d = c.target,
                      m = (function (t, i, n) {
                        if (!t) return t;
                        var r = n || {};
                        if (i) {
                          var e = (function (t) {
                            return t.detail;
                          })(i);
                          e && (r.event = e);
                        }
                        var s = A();
                        return (
                          Object.keys(t).forEach(function (i) {
                            var n = t[i];
                            if ("object" == p(n) && n.expression) {
                              var e = n.expression,
                                u = (function (t, i) {
                                  if ("." == i) return t;
                                  for (
                                    var n, r = t, e = o(i.split("."), !0);
                                    !(n = e()).done;

                                  ) {
                                    var s = n.value;
                                    if (
                                      !(
                                        s &&
                                        r &&
                                        void 0 !== r[s] &&
                                        "object" == p(r) &&
                                        x(r, s)
                                      )
                                    ) {
                                      r = void 0;
                                      break;
                                    }
                                    r = r[s];
                                  }
                                  return r;
                                })(r, e);
                              n = void 0 === u ? null : u;
                            }
                            r[n] ? (s[i] = r[n]) : (s[i] = n);
                          }),
                          s
                        );
                      })(f, n, e),
                      g = function () {
                        var e = s.$e(d);
                        if (e) {
                          var o = new Wu(
                            e,
                            l,
                            m,
                            t,
                            u.node,
                            n,
                            r,
                            i,
                            e.tagName || d,
                            h
                          );
                          return s.Be(o);
                        }
                        s.We(
                          'Target "'
                            .concat(d, '" not found for action [')
                            .concat(v, "].")
                        );
                      };
                    a = a ? a.then(g) : g();
                  }),
                  u.actionInfos.length >= 1
                );
              }),
              (i.We = function (t, i) {
                if (i) {
                  var n = Jt().createError("[".concat(Hu, "] ").concat(t));
                  throw (js(n, i), n);
                }
                Jt().error(Hu, t);
              }),
              (i.Be = function (t) {
                var i = t.method,
                  n = t.tagOrTarget;
                if (
                  this.Le &&
                  !(function (t, i) {
                    var n = t.method,
                      r = t.node,
                      e = t.tagOrTarget;
                    n === eu &&
                      "function" == typeof r.getDefaultActionAlias &&
                      (n = r.getDefaultActionAlias());
                    var s = n.toLowerCase(),
                      u = e.toLowerCase();
                    return i.some(function (t) {
                      return (
                        (t.tagOrTarget.toLowerCase() === u ||
                          "*" === t.tagOrTarget) &&
                        t.method.toLowerCase() === s
                      );
                    });
                  })(t, this.Le)
                )
                  return (
                    this.We(
                      '"'
                        .concat(n, ".")
                        .concat(i, '" is not allowlisted ')
                        .concat(JSON.stringify(this.Le), ".")
                    ),
                    null
                  );
                var r = this.He[n];
                if (r) return r(t);
                var e = t.node,
                  s = this.Ge[i];
                if (s && t.satisfiesTrust(s.minTrust)) return s.handler(t);
                var u = e.tagName.toLowerCase();
                if (Ku(u))
                  return (
                    e.enqueAction
                      ? e.enqueAction(t)
                      : this.We(
                          'Unrecognized AMP element "'.concat(u, '".'),
                          e
                        ),
                    null
                  );
                var o = Bu[u];
                if (
                  Ku(e.getAttribute("id") || "") ||
                  (o && o.indexOf(i) > -1)
                ) {
                  var h = e[Fu];
                  return (
                    h ? h(t) : ((e[Vu] = e[Vu] || []), e[Vu].push(t)), null
                  );
                }
                return (
                  this.We(
                    "Target ("
                      .concat(n, ") doesn't support \"")
                      .concat(i, '" action.'),
                    t.caller
                  ),
                  null
                );
              }),
              (i.qe = function (t, i, n) {
                for (var r, e = t; e; ) {
                  if (n && e == n) return null;
                  var s = this.Ke(e, i);
                  if (s && !(r = e).disabled && !gi(r, ":disabled"))
                    return { node: e, actionInfos: Zt(s) };
                  e = e.parentElement;
                }
                return null;
              }),
              (i.Ke = function (t, i) {
                var n = this.Ye(t, i);
                return (n && n[i]) || null;
              }),
              (i.Ye = function (t, i) {
                var n = t[Gu];
                if (void 0 === n)
                  if (((n = null), t.hasAttribute("on")))
                    (n = Qu(t.getAttribute("on"), t)), (t[Gu] = n);
                  else if (t.hasAttribute("execute")) {
                    var r = t.getAttribute("execute");
                    (n = Qu("".concat(i, ":").concat(r), t)), (t[Gu] = n);
                  }
                return n;
              }),
              (i.setActions = function (t, i) {
                t.setAttribute("on", i), delete t[Gu];
              }),
              (i.Ve = function (t) {
                var i = A(),
                  n = t.target;
                if (
                  (void 0 !== n.value && (i.value = n.value),
                  "INPUT" == n.tagName && (i.valueAsNumber = Number(n.value)),
                  void 0 !== n.checked && (i.checked = n.checked),
                  (void 0 === n.min && void 0 === n.max) ||
                    ((i.min = n.min), (i.max = n.max)),
                  n.files &&
                    (i.files = G(n.files).map(function (t) {
                      return { name: t.name, size: t.size, type: t.type };
                    })),
                  Object.keys(i).length > 0)
                )
                  try {
                    t.detail = i;
                  } catch (t) {}
              }),
              t
            );
          })();
        function Ku(t) {
          return "amp-" === t.substring(0, 4);
        }
        var Ju = function (t) {
          (this.detail = null),
            (function (t, i) {
              var n = i || A();
              for (var r in t) {
                var e = t[r];
                n[r] = "function" == typeof e ? Xu : t[r];
              }
            })(t, this);
        };
        function Xu() {
          Zt(null);
        }
        function Qu(t, i) {
          var n,
            r,
            e = to.bind(null, t, i),
            s = io.bind(null, t, i),
            u = null,
            o = new eo(t);
          do {
            if (
              (n = o.next()).type == no.EOF ||
              (n.type == no.SEPARATOR && ";" == n.value)
            );
            else if (n.type == no.LITERAL || n.type == no.ID) {
              var h = n.value;
              s(o.next(), [no.SEPARATOR], ":");
              var a = [];
              do {
                var c = s(o.next(), [no.LITERAL, no.ID]).value,
                  f = eu,
                  l = null;
                (r = o.peek()).type == no.SEPARATOR &&
                  "." == r.value &&
                  (o.next(),
                  (f = s(o.next(), [no.LITERAL, no.ID]).value || f),
                  (r = o.peek()).type == no.SEPARATOR &&
                    "(" == r.value &&
                    (o.next(), (l = Zu(o, s, e)))),
                  a.push({ event: h, target: c, method: f, args: l, str: t }),
                  (r = o.peek());
              } while (r.type == no.SEPARATOR && "," == r.value && o.next());
              u || (u = A()), (u[h] = a);
            } else e(!1, "; unexpected token [".concat(n.value || "", "]"));
          } while (n.type != no.EOF);
          return u;
        }
        function Zu(t, i, n) {
          var r,
            e,
            s = t.peek(),
            u = null;
          if (s.type == no.OBJECT) {
            u = A();
            var o = t.next().value;
            (u.__AMP_OBJECT_STRING__ = o), i(t.next(), [no.SEPARATOR], ")");
          } else
            do {
              var h = (r = t.next()),
                a = h.type,
                c = h.value;
              if (a != no.SEPARATOR || ("," != c && ")" != c))
                if (a == no.LITERAL || a == no.ID) {
                  i(t.next(), [no.SEPARATOR], "=");
                  var f = [(r = i(t.next(!0), [no.LITERAL, no.ID]))];
                  if (r.type == no.ID)
                    for (
                      s = t.peek();
                      s.type == no.SEPARATOR && "." == s.value;
                      s = t.peek()
                    )
                      t.next(), (r = i(t.next(!1), [no.ID])), f.push(r);
                  var l =
                    0 == (e = f).length
                      ? null
                      : 1 == e.length
                      ? e[0].value
                      : {
                          expression: e
                            .map(function (t) {
                              return t.value;
                            })
                            .join("."),
                        };
                  u || (u = A()),
                    (u[c] = l),
                    n(
                      (s = t.peek()).type == no.SEPARATOR &&
                        ("," == s.value || ")" == s.value),
                      "Expected either [,] or [)]"
                    );
                } else n(!1, "; unexpected token [".concat(r.value || "", "]"));
            } while (r.type != no.SEPARATOR || ")" != r.value);
          return u;
        }
        function to(t, i, n, r) {
          return ti(
            n,
            "Invalid action definition in %s: [%s] %s",
            i,
            t,
            r || ""
          );
        }
        function io(t, i, n, r, e) {
          return (
            void 0 !== e
              ? to(
                  t,
                  i,
                  r.includes(n.type) && n.value == e,
                  "; expected [".concat(e, "]")
                )
              : to(t, i, r.includes(n.type)),
            n
          );
        }
        var no = {
            INVALID: 0,
            EOF: 1,
            SEPARATOR: 2,
            LITERAL: 3,
            ID: 4,
            OBJECT: 5,
          },
          ro = " \t\n\r\f\v \u2028\u2029",
          eo = (function () {
            function t(t) {
              (this.Je = t), (this.Xe = -1);
            }
            var i = t.prototype;
            return (
              (i.next = function (t) {
                var i = this.Qe(t || !1);
                return (this.Xe = i.index), i;
              }),
              (i.peek = function (t) {
                return this.Qe(t || !1);
              }),
              (i.Qe = function (t) {
                var i = this.Xe + 1;
                if (i >= this.Je.length)
                  return { type: no.EOF, index: this.Xe };
                var n = this.Je.charAt(i);
                if (-1 != ro.indexOf(n)) {
                  for (
                    i++;
                    i < this.Je.length && -1 != ro.indexOf(this.Je.charAt(i));
                    i++
                  );
                  if (i >= this.Je.length) return { type: no.EOF, index: i };
                  n = this.Je.charAt(i);
                }
                if (
                  t &&
                  (so(n) ||
                    ("." == n && i + 1 < this.Je.length && so(this.Je[i + 1])))
                ) {
                  for (var r = "." == n, e = i + 1; e < this.Je.length; e++) {
                    var s = this.Je.charAt(e);
                    if ("." != s) {
                      if (!so(s)) break;
                    } else r = !0;
                  }
                  var u = this.Je.substring(i, e),
                    o = r ? parseFloat(u) : parseInt(u, 10);
                  return (i = e - 1), { type: no.LITERAL, value: o, index: i };
                }
                if (-1 != ";:.()=,|!".indexOf(n))
                  return { type: no.SEPARATOR, value: n, index: i };
                if (-1 != "\"'".indexOf(n)) {
                  for (var h = -1, a = i + 1; a < this.Je.length; a++)
                    if (this.Je.charAt(a) == n) {
                      h = a;
                      break;
                    }
                  if (-1 == h) return { type: no.INVALID, index: i };
                  var c = this.Je.substring(i + 1, h);
                  return (i = h), { type: no.LITERAL, value: c, index: i };
                }
                if ("{" == n) {
                  for (var f = 1, l = -1, v = i + 1; v < this.Je.length; v++) {
                    var d = this.Je[v];
                    if (("{" == d ? f++ : "}" == d && f--, f <= 0)) {
                      l = v;
                      break;
                    }
                  }
                  if (-1 == l) return { type: no.INVALID, index: i };
                  var m = this.Je.substring(i, l + 1);
                  return (i = l), { type: no.OBJECT, value: m, index: i };
                }
                for (
                  var p = i + 1;
                  p < this.Je.length &&
                  -1 ==
                    " \t\n\r\f\v \u2028\u2029;:.()=,|!\"'{}".indexOf(
                      this.Je.charAt(p)
                    );
                  p++
                );
                var g = this.Je.substring(i, p);
                if (((i = p - 1), t && ("true" == g || "false" == g))) {
                  var b = "true" == g;
                  return { type: no.LITERAL, value: b, index: i };
                }
                return so(g.charAt(0))
                  ? { type: no.LITERAL, value: g, index: i }
                  : { type: no.ID, value: g, index: i };
              }),
              t
            );
          })();
        function so(t) {
          return t >= "0" && t <= "9";
        }
        function uo(t) {
          return !!t && "function" == typeof t.getFormData;
        }
        var oo = ["GET", "POST"],
          ho = [V, w];
        function ao(t, i) {
          var n = D({}, i);
          if (uo(i.body)) {
            var r = i.body;
            (n.headers["Content-Type"] = "multipart/form-data;charset=utf-8"),
              (n.body = (function (t) {
                for (var i = [], n = t.next(); !n.done; n = t.next())
                  i.push(n.value);
                return i;
              })(r.entries()));
          }
          return { input: t, init: n };
        }
        function co(t, i, n, r) {
          if (!i) return h();
          var e = r.prerenderSafe ? h() : i.whenFirstVisible(),
            s = dr(i),
            u = Es(n),
            o = s.hasCapability("xhrInterceptor"),
            a = r.bypassInterceptorForDev && !1;
          return u || !o || a
            ? e
            : i
                .getRootNode()
                .documentElement.hasAttribute("allow-xhr-interception")
            ? e
                .then(function () {
                  return s.isTrustedViewer();
                })
                .then(function (i) {
                  if (i || Ve(t, "untrusted-xhr-interception")) {
                    var e = { originalRequest: ao(n, r) };
                    return s
                      .sendMessageAwaitResponse("xhr", e)
                      .then(function (t) {
                        return (function (t, i) {
                          if (
                            (ht(w(t), "Object expected: %s", t),
                            "document" != i)
                          )
                            return new Response(t.body, t.init);
                          var n = A(),
                            r = {
                              status: 200,
                              statusText: "OK",
                              getResponseHeader: function (t) {
                                return n[String(t).toLowerCase()] || null;
                              },
                            };
                          if (t.init) {
                            var e = t.init;
                            V(e.headers) &&
                              e.headers.forEach(function (t) {
                                var i = t[0],
                                  r = t[1];
                                n[String(i).toLowerCase()] = String(r);
                              }),
                              e.status && (r.status = parseInt(e.status, 10)),
                              e.statusText &&
                                (r.statusText = String(e.statusText));
                          }
                          return new Response(t.body ? String(t.body) : "", r);
                        })(t, r.responseType);
                      });
                  }
                })
            : e;
        }
        function fo(t, i, n) {
          return (
            et("string" == typeof i), !1 !== n.ampCors && (i = Rs(t, i)), i
          );
        }
        function lo(t, i) {
          var n,
            r = t || {},
            e = r.credentials;
          return (
            et(void 0 === e || "include" == e || "omit" == e),
            (r.method =
              void 0 === (n = r.method)
                ? "GET"
                : ((n = n.toUpperCase()), et(oo.includes(n)), n)),
            (r.headers = r.headers || {}),
            i && (r.headers.Accept = i),
            et(null !== r.body),
            r
          );
        }
        function vo(t, i, n) {
          n = n || {};
          var r = (function (t) {
            return t.origin || ds(t.location.href).origin;
          })(t);
          return (
            r == ds(i).origin &&
              ((n.headers = n.headers || {}),
              (n.headers["AMP-Same-Origin"] = "true")),
            n
          );
        }
        function mo(t) {
          return new Promise(function (i) {
            if (t.ok) return i(t);
            var n = t.status,
              r = Jt().createError("HTTP error ".concat(n));
            throw (
              ((r.retriable = (function (t) {
                return 415 == t || (t >= 500 && t < 600);
              })(n)),
              (r.response = t),
              r)
            );
          });
        }
        var po = (function () {
            function t(t) {
              this.win = t;
              var i = Kn(t);
              this.Ze = i.isSingleDoc() ? i.getSingleDoc() : null;
            }
            var i = t.prototype;
            return (
              (i.ts = function (t, i) {
                var n = arguments,
                  r = this;
                return co(this.win, this.Ze, t, i).then(function (t) {
                  if (t) return t;
                  if (uo(i.body)) {
                    var e = i.body;
                    i.body = e.getFormData();
                  }
                  return r.win.fetch.apply(null, n);
                });
              }),
              (i.ns = function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (
                  (t = fo(this.win, t, i)),
                  (i = vo(this.win, t, i)),
                  this.ts(t, i).then(
                    function (t) {
                      return t;
                    },
                    function (i) {
                      var n = ds(t).origin;
                      throw Jt().createExpectedError(
                        "XHR",
                        "Failed fetching (".concat(n, "/...):"),
                        i && i.message
                      );
                    }
                  )
                );
              }),
              (i.fetchJson = function (t, i) {
                return this.fetch(
                  t,
                  (function (t) {
                    var i = lo(t, "application/json");
                    if ("POST" == i.method && !uo(i.body)) {
                      et(
                        ho.some(function (t) {
                          return t(i.body);
                        })
                      ),
                        (i.headers["Content-Type"] =
                          i.headers["Content-Type"] ||
                          "text/plain;charset=utf-8");
                      var n = i.headers["Content-Type"];
                      i.body =
                        "application/x-www-form-urlencoded" === n
                          ? ys(i.body)
                          : JSON.stringify(i.body);
                    }
                    return i;
                  })(i)
                );
              }),
              (i.fetchText = function (t, i) {
                return this.fetch(t, lo(i, "text/plain"));
              }),
              (i.xssiJson = function (t, i) {
                return i
                  ? t.text().then(function (t) {
                      return t.startsWith(i)
                        ? at(t.slice(i.length))
                        : (Jt().warn(
                            "XHR",
                            'Failed to strip missing prefix "'.concat(
                              i,
                              '" in fetch response.'
                            )
                          ),
                          at(t));
                    })
                  : t.json();
              }),
              (i.fetch = function (t, i) {
                var n = lo(i);
                return this.ns(t, n).then(function (t) {
                  return mo(t);
                });
              }),
              (i.sendSignal = function (t, i) {
                return this.ns(t, i).then(function (t) {
                  return mo(t);
                });
              }),
              (i.getCorsUrl = function (t, i) {
                return Rs(t, i);
              }),
              t
            );
          })(),
          go = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return ((n = i.call(this, t)).rs = A()), n;
            }
            var r = n.prototype;
            return (
              (r.fetch = function (i, n) {
                var r = this,
                  e = (n && n.headers && n.headers.Accept) || "",
                  s = !n || !n.method || "GET" === n.method,
                  u = this.es(i, e),
                  o = !!this.rs[u];
                if (s && o)
                  return this.rs[u].then(function (t) {
                    return t.clone();
                  });
                var h = t.prototype.fetch.call(this, i, n);
                return (
                  s &&
                    (this.rs[u] = h.then(
                      function (t) {
                        return delete r.rs[u], t.clone();
                      },
                      function (t) {
                        throw (delete r.rs[u], t);
                      }
                    )),
                  h
                );
              }),
              (r.es = function (t, i) {
                return xs(Ss(t, Ms(this.win.location))) + i;
              }),
              n
            );
          })(po),
          bo = { "+": "-", "/": "_", "=": "." };
        function yo(t) {
          var i = (function (t) {
            for (var i = new Array(t.length), n = 0; n < t.length; n++)
              i[n] = String.fromCharCode(t[n]);
            return i.join("");
          })(t);
          return btoa(i).replace(/[+/=]/g, function (t) {
            return bo[t];
          });
        }
        var wo = "AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc",
          Ao = "CacheCidApi",
          xo = (function () {
            function t(t) {
              (this.ki = t),
                (this.ss = dr(this.ki)),
                (this.os = null),
                (this.Me = cr(this.ki.win));
            }
            var i = t.prototype;
            return (
              (i.isSupported = function () {
                return this.ss.isCctEmbedded() && this.ss.isProxyOrigin();
              }),
              (i.getScopedCid = function (t) {
                var i = this;
                return this.ss.isCctEmbedded()
                  ? (this.os ||
                      (this.os = this.us(
                        "https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"
                      )),
                    this.os.then(function (n) {
                      return n ? i.hs(n, t) : null;
                    }))
                  : Promise.resolve(null);
              }),
              (i.us = function (t) {
                var i = this,
                  n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = { publisherOrigin: Ms(this.ki.win.location) },
                  e = "fetchCidTimeout";
                return this.Me.timeoutPromise(
                  3e4,
                  gr(this.ki.win).fetchJson(t, {
                    method: "POST",
                    ampCors: !1,
                    credentials: "include",
                    mode: "cors",
                    body: r,
                  }),
                  e
                )
                  .then(function (t) {
                    return t.json().then(function (t) {
                      if (t.optOut) return null;
                      var r = t.publisherClientId;
                      if (!r && n && t.alternateUrl) {
                        var e = "".concat(t.alternateUrl, "?key=").concat(wo);
                        return i.us(e, !1);
                      }
                      return r;
                    });
                  })
                  .catch(function (t) {
                    return (
                      t && t.response
                        ? t.response.json().then(function (t) {
                            Qt().error(Ao, JSON.stringify(t));
                          })
                        : t && t.message == e
                        ? Qt().expectedError(Ao, t)
                        : Qt().error(Ao, t),
                      null
                    );
                  });
              }),
              (i.hs = function (t, i) {
                var n = t + ";" + i;
                return Zn(this.ki.win)
                  .sha384Base64(n)
                  .then(function (t) {
                    return "amp-" + t;
                  });
              }),
              t
            );
          })(),
          Eo = "-test-amp-cookie-tmp";
        function Po(t, i) {
          var n = (function (t) {
            try {
              return t.document.cookie;
            } catch (t) {
              return "";
            }
          })(t);
          if (!n) return null;
          for (var r = n.split(";"), e = 0; e < r.length; e++) {
            var s = r[e].trim(),
              u = s.indexOf("=");
            if (-1 != u && bt(s.substring(0, u).trim()) == i) {
              var o = s.substring(u + 1).trim();
              return bt(o, o);
            }
          }
          return null;
        }
        function Oo(t, i, n, r) {
          var e =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          Mo(t, e, i);
          var s = void 0;
          e.domain ? (s = e.domain) : e.highestAvailableDomain && (s = Io(t)),
            To(t, i, n, r, s, e.sameSite, e.secure);
        }
        function Io(t) {
          var i =
            t.document.head &&
            t.document.head.querySelector("meta[name='amp-cookie-scope']");
          if (i) {
            var n = i.getAttribute("content") || "",
              r = Ms(t.location.href);
            return W(r, "." + n) ? n : r.split("://")[1];
          }
          if (!Es(t.location.href))
            for (
              var e = t.location.hostname.split("."),
                s = e[e.length - 1],
                u = (function (t) {
                  for (var i = Eo; Po(t, i); ) i = Eo + 0;
                  return i;
                })(t),
                o = e.length - 2;
              o >= 0;
              o--
            )
              if (
                ((s = e[o] + "." + s),
                To(t, u, "delete", Date.now() + 1e3, s),
                "delete" == Po(t, u))
              )
                return To(t, u, "delete", Date.now() - 1e3, s), s;
          return null;
        }
        function To(t, i, n, r, e, s, u) {
          "ampproject.org" == e && ((n = "delete"), (r = 0));
          var o =
            encodeURIComponent(i) +
            "=" +
            encodeURIComponent(n) +
            "; path=/" +
            (e ? "; domain=" + e : "") +
            "; expires=" +
            new Date(r).toUTCString() +
            (function (t, i) {
              return i ? "; SameSite=".concat(i) : "";
            })(0, s) +
            (u ? "; Secure" : "");
          try {
            t.document.cookie = o;
          } catch (t) {}
        }
        function Mo(t, i, n) {
          if (i.allowOnProxyOrigin)
            ti(
              !i.highestAvailableDomain,
              "Could not support highestAvailable Domain on proxy origin, specify domain explicitly"
            );
          else {
            ti(
              !Es(t.location.href),
              "Should never attempt to set cookie on proxy origin: ".concat(n)
            );
            var r = ds(t.location.href).hostname.toLowerCase(),
              e = ds(Tt).hostname.toLowerCase();
            ti(
              !(r == e || W(r, "." + e)),
              "Should never attempt to set cookie on proxy origin. (in depth check): " +
                n
            );
          }
        }
        var So = "GoogleCidApi",
          Ro = "AMP_TOKEN",
          _o = "$RETRIEVING",
          ko = "$OPT_OUT",
          Co = "$NOT_FOUND",
          No = 3e4,
          Do = 31536e6,
          jo = (function () {
            function t(t) {
              (this.t = t.win), (this.Me = cr(this.t)), (this.cs = {});
              var i = tr(t).canonicalUrl;
              this.fs = i ? ds(i).origin : null;
            }
            var i = t.prototype;
            return (
              (i.getScopedCid = function (t, i) {
                var n,
                  r = this;
                return this.cs[i]
                  ? this.cs[i]
                  : (this.cs[i] = this.Me.poll(200, function () {
                      return (n = Po(r.t, Ro)) !== _o;
                    }).then(function () {
                      if (n === ko) return ko;
                      if ((n !== Co || !r.ls()) && r.vs(n)) return null;
                      (n && !r.vs(n)) || r.ds(_o, No);
                      var e =
                        "https://ampcid.google.com/v1/publisher:getClientId?key=" +
                        t;
                      return r
                        .us(e, i, n)
                        .then(function (e) {
                          var s = r.R(e);
                          if (!s && e.alternateUrl) {
                            var u = ""
                              .concat(e.alternateUrl, "?key=")
                              .concat(t);
                            return r.us(u, i, n).then(r.R.bind(r));
                          }
                          return s;
                        })
                        .catch(function (t) {
                          return (
                            r.ds("$ERROR", No),
                            t && t.response
                              ? t.response.json().then(function (t) {
                                  Qt().error(So, JSON.stringify(t));
                                })
                              : Qt().error(So, t),
                            null
                          );
                        });
                    }));
              }),
              (i.us = function (t, i, n) {
                var r = { originScope: i, canonicalOrigin: this.fs };
                return (
                  n && (r.securityToken = n),
                  this.Me.timeoutPromise(
                    No,
                    gr(this.t)
                      .fetchJson(t, {
                        method: "POST",
                        ampCors: !1,
                        credentials: "include",
                        mode: "cors",
                        body: r,
                      })
                      .then(function (t) {
                        return t.json();
                      })
                  )
                );
              }),
              (i.R = function (t) {
                return t.optOut
                  ? (this.ds(ko, Do), ko)
                  : t.clientId
                  ? (this.ds(t.securityToken, Do), t.clientId)
                  : (t.alternateUrl || this.ds(Co, 36e5), null);
              }),
              (i.ds = function (t, i) {
                t &&
                  Oo(this.t, Ro, t, this.ps(i), { highestAvailableDomain: !0 });
              }),
              (i.ps = function (t) {
                return this.t.Date.now() + t;
              }),
              (i.ls = function () {
                return Es(Hr.getDocumentReferrer(this.t));
              }),
              (i.vs = function (t) {
                return t && "$" === t[0];
              }),
              t
            );
          })(),
          Uo = (function () {
            function t(t) {
              (this.ki = t), (this.ss = dr(this.ki));
              var i = tr(this.ki).canonicalUrl;
              this.fs = i ? ds(i).origin : null;
            }
            var i = t.prototype;
            return (
              (i.isSupported = function () {
                return this.ss.hasCapability("cid")
                  ? this.ss.isTrustedViewer()
                  : Promise.resolve(!1);
              }),
              (i.getScopedCid = function (t, i) {
                var n = {
                  scope: i,
                  clientIdApi: !!t,
                  canonicalOrigin: this.fs,
                };
                return (
                  t && (n.apiKey = t),
                  this.ss.sendMessageAwaitResponse("cid", n)
                );
              }),
              t
            );
          })(),
          Lo = 31536e6,
          zo = /^[a-zA-Z0-9-_.]+$/,
          Ho = "amp-cid-optout",
          Go = "amp-google-client-id-api",
          Vo = { googleanalytics: "AMP_ECID_GOOGLE" },
          Fo = { googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM" },
          Bo = (function () {
            function t(t) {
              (this.ampdoc = t),
                (this.bs = null),
                (this.gs = Object.create(null)),
                (this.ys = new xo(t)),
                (this.ws = new Uo(t)),
                (this.As = new jo(t)),
                (this.xs = null);
            }
            var i = t.prototype;
            return (
              (i.get = function (t, i, n) {
                var r = this;
                return (
                  ti(
                    zo.test(t.scope) && zo.test(t.cookieName),
                    "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s",
                    t.scope
                  ),
                  i
                    .then(function () {
                      return r.ampdoc.whenFirstVisible();
                    })
                    .then(function () {
                      return (
                        (t = r.ampdoc),
                        ar(t)
                          .then(function (t) {
                            return t.get(Ho).then(function (t) {
                              return !!t;
                            });
                          })
                          .catch(function () {
                            return !1;
                          })
                      );
                      var t;
                    })
                    .then(function (e) {
                      if (e) return "";
                      var s = r.Es(t, n || i);
                      return cr(r.ampdoc.win)
                        .timeoutPromise(
                          1e4,
                          s,
                          'Getting cid for "'.concat(t.scope, '" timed out')
                        )
                        .catch(function (t) {
                          d(t);
                        });
                    })
                );
              }),
              (i.optOut = function () {
                return (
                  (t = this.ampdoc),
                  dr(t).sendMessage("cidOptOut", {}),
                  ar(t).then(function (t) {
                    return t.set(Ho, !0);
                  })
                );
                var t;
              }),
              (i.Es = function (t, i) {
                var n = this,
                  r = t.scope,
                  e = ds(this.ampdoc.win.location.href);
                if (!Es(e)) {
                  var s = this.Os(r);
                  return s
                    ? this.As.getScopedCid(s, r).then(function (e) {
                        if (e == ko) return null;
                        if (e) {
                          var s = t.cookieName || r;
                          return qo(n.ampdoc.win, s, e), e;
                        }
                        return Yo(n, t, i);
                      })
                    : Yo(this, t, i);
                }
                return this.ws.isSupported().then(function (t) {
                  if (t) {
                    var s = n.Os(r);
                    return n.ws.getScopedCid(s, r);
                  }
                  return n.ys.isSupported() && n.Os(r)
                    ? n.ys.getScopedCid(r).then(function (t) {
                        return t || n.Ts(i, r, e);
                      })
                    : n.Ts(i, r, e);
                });
              }),
              (i.Ts = function (t, i, n) {
                var r = this;
                return (function (t, i) {
                  if (t.bs) return t.bs;
                  var n = t.ampdoc.win;
                  return (t.bs = (function (t) {
                    var i,
                      n = t.win;
                    try {
                      i = n.localStorage.getItem("amp-cid");
                    } catch (t) {}
                    var r = Promise.resolve(i);
                    return (
                      !i && Ni(n) && (r = Ko(t)),
                      r.then(function (t) {
                        if (!t) return null;
                        var i = at(t);
                        return { time: i.time, cid: i.cid };
                      })
                    );
                  })(t.ampdoc).then(function (r) {
                    var e,
                      s,
                      u,
                      o = !1;
                    return (
                      !r || ((s = r.time), (u = Date.now()), s + Lo < u)
                        ? ((e = Zn(n).sha384Base64(Xo(n))), (o = !0))
                        : ((e = Promise.resolve(r.cid)),
                          r.time + 864e5 < Date.now() && (o = !0)),
                      o &&
                        e.then(function (n) {
                          !(function (t, i, n) {
                            var r = t.win;
                            Ni(r)
                              ? Ko(t, Jo(n))
                              : i.then(function () {
                                  try {
                                    r.localStorage.setItem("amp-cid", Jo(n));
                                  } catch (t) {}
                                });
                          })(t.ampdoc, i, n);
                        }),
                      e
                    );
                  }));
                })(this, t).then(function (t) {
                  return Zn(r.ampdoc.win).sha384Base64(
                    t +
                      (function (t) {
                        return (
                          ti(Es(t), "Expected proxy origin %s", t.origin), Ms(t)
                        );
                      })(n) +
                      i
                  );
                });
              }),
              (i.Os = function (t) {
                return this.xs || (this.xs = this.Ps()), this.xs[t];
              }),
              (i.Ps = function () {
                var t = {},
                  i = this.ampdoc.getMetaByName(Go);
                return (
                  i &&
                    i.split(",").forEach(function (i) {
                      if ((i = i.trim()).indexOf("=") > 0) {
                        var n = i.split("="),
                          r = n[0].trim();
                        t[r] = n[1].trim();
                      } else {
                        var e = i,
                          s = Vo[e];
                        s
                          ? (t[s] = Fo[e])
                          : Jt().warn(
                              "CID",
                              "Unsupported client for Google CID API: ".concat(
                                e,
                                "."
                              ) +
                                'Please remove or correct meta[name="'.concat(
                                  Go,
                                  '"]'
                                )
                            );
                      }
                    }),
                  t
                );
              }),
              t
            );
          })();
        function qo(t, i, n) {
          Oo(t, i, n, Date.now() + Lo, { highestAvailableDomain: !0 });
        }
        function $o(t, i, n) {
          ar(t).then(function (t) {
            if (!t.isViewerStorage()) {
              var r = Wo(i);
              t.setNonBoolean(r, n);
            }
          });
        }
        function Wo(t) {
          return "amp-cid:" + t;
        }
        function Yo(t, i, n) {
          var r = t.ampdoc,
            e = r.win,
            s = i.disableBackup,
            u = i.scope,
            o = i.cookieName || u;
          return (function (t, i) {
            var n = t.ampdoc,
              r = n.win,
              e = i.disableBackup,
              s = i.scope,
              u = i.cookieName || s,
              o = Po(r, u);
            return o
              ? Promise.resolve(o)
              : e
              ? Promise.resolve(null)
              : ar(n)
                  .then(function (t) {
                    var i = Wo(u);
                    return t.get(i, Lo);
                  })
                  .then(function (t) {
                    return t && "string" == typeof t ? t : null;
                  });
          })(t, i).then(function (h) {
            if (!h && !i.createCookieIfNotPresent) return Promise.resolve(null);
            if (h)
              return (
                /^amp-/.test(h) && (qo(e, o, h), s || $o(r, o, h)),
                Promise.resolve(h)
              );
            if (t.gs[u]) return t.gs[u];
            var a = Qo(e).then(function (t) {
              return "amp-" + t;
            });
            return (
              Promise.all([a, n]).then(function (t) {
                var i = t[0];
                Po(e, o) || (qo(e, o, i), s || $o(r, o, i));
              }),
              (t.gs[u] = a)
            );
          });
        }
        function Ko(t, i) {
          var n = dr(t);
          return n.isTrustedViewer().then(function (t) {
            if (t)
              return (
                Qt().expectedError("CID", "Viewer does not provide cap=cid"),
                n.sendMessageAwaitResponse("cid", i).then(function (t) {
                  return t &&
                    !(function (t, i) {
                      try {
                        return at(t);
                      } catch (t) {
                        return null;
                      }
                    })(t)
                    ? (Qt().expectedError("CID", "invalid cid format"),
                      JSON.stringify({ time: Date.now(), cid: t }))
                    : t;
                })
              );
          });
        }
        function Jo(t) {
          return JSON.stringify({ time: Date.now(), cid: t });
        }
        function Xo(t) {
          return (
            lt(t, 16) ||
            String(
              t.location.href +
                Date.now() +
                t.Math.random() +
                t.screen.width +
                t.screen.height
            )
          );
        }
        function Qo(t) {
          var i = Xo(t);
          if ("string" == typeof i) return Zn(t).sha384Base64(i);
          var n = i;
          return c(function () {
            return yo(n).replace(/\.+$/, "");
          });
        }
        var Zo = "Crypto",
          th = (function () {
            function t(t) {
              this.t = t;
              var i = null,
                n = !1;
              t.crypto &&
                (t.crypto.subtle
                  ? (i = t.crypto.subtle)
                  : t.crypto.webkitSubtle &&
                    ((i = t.crypto.webkitSubtle), (n = !0))),
                (this.pkcsAlgo = {
                  name: "RSASSA-PKCS1-v1_5",
                  hash: { name: "SHA-256" },
                }),
                (this.subtle = i),
                (this.Is = n),
                (this.Ss = null);
            }
            var i = t.prototype;
            return (
              (i.sha384 = function (t) {
                var i = this;
                if (
                  ("string" == typeof t && (t = ft(t)), !this.subtle || this.Ss)
                )
                  return (this.Ss || this.Ms()).then(function (i) {
                    return i(t);
                  });
                try {
                  return this.subtle.digest({ name: "SHA-384" }, t).then(
                    function (t) {
                      return new Uint8Array(t);
                    },
                    function (n) {
                      return (
                        n.message &&
                          n.message.indexOf("secure origin") < 0 &&
                          Jt().error(
                            Zo,
                            "SubtleCrypto failed, fallback to closure lib.",
                            n
                          ),
                        i.Ms().then(function () {
                          return i.sha384(t);
                        })
                      );
                    }
                  );
                } catch (n) {
                  return (
                    Qt().error(
                      Zo,
                      "SubtleCrypto failed, fallback to closure lib.",
                      n
                    ),
                    this.Ms().then(function () {
                      return i.sha384(t);
                    })
                  );
                }
              }),
              (i.sha384Base64 = function (t) {
                return this.sha384(t).then(function (t) {
                  return yo(t);
                });
              }),
              (i.uniform = function (t) {
                return this.sha384(t).then(function (t) {
                  for (var i = 0, n = 2; n >= 0; n--) i = (i + t[n]) / 256;
                  return i;
                });
              }),
              (i.Ms = function () {
                var t = this;
                return this.Ss
                  ? this.Ss
                  : (this.Ss = ir(this.t)
                      .preloadExtension("amp-crypto-polyfill")
                      .then(function () {
                        return Pn(t.t, "crypto-polyfill");
                      }));
              }),
              (i.isPkcsAvailable = function () {
                return Boolean(this.subtle) && !1 !== this.t.isSecureContext;
              }),
              (i.importPkcsKey = function (t) {
                Zt(this.isPkcsAvailable());
                var i = this.Is ? ct(JSON.stringify(t)) : t;
                return this.subtle.importKey("jwk", i, this.pkcsAlgo, !0, [
                  "verify",
                ]);
              }),
              (i.verifyPkcs = function (t, i, n) {
                return (
                  Zt(this.isPkcsAvailable()),
                  this.subtle.verify(this.pkcsAlgo, t, i, n)
                );
              }),
              t
            );
          })(),
          ih = ["prefetch", "preload", "preconnect", "dns-prefetch"],
          nh = (function () {
            function t(t) {
              (this.ki = t), (this.Rs = null), (this._s = null);
            }
            return (
              (t.prototype.get = function () {
                if (this.Rs) return this.Rs;
                var t = this.ki,
                  i = Ts(t.getUrl()),
                  n = t.getRootNode(),
                  r = n && n.AMP && n.AMP.canonicalUrl;
                if (!r) {
                  var e = n.querySelector("link[rel=canonical]");
                  r = e ? ds(e.href).href : i;
                }
                var s,
                  u = (function (t) {
                    return String(Math.floor(1e4 * t.Math.random()));
                  })(t.win),
                  o = (function (t) {
                    var i = A();
                    if (t.head)
                      for (
                        var n = t.head.querySelectorAll("link[rel]"),
                          r = function (t) {
                            var r = n[t],
                              e = r.href,
                              s = r.getAttribute("rel");
                            if (!s || !e) return "continue";
                            s.split(/\s+/).forEach(function (t) {
                              if (-1 == ih.indexOf(t)) {
                                var n = i[t];
                                n
                                  ? (V(n) || (n = i[t] = [n]), n.push(e))
                                  : (i[t] = e);
                              }
                            });
                          },
                          e = 0;
                        e < n.length;
                        e++
                      )
                        r(e);
                    return i;
                  })(t.win.document),
                  h = (s = t.win.document.head.querySelector(
                    'meta[name="viewport"]'
                  ))
                    ? s.getAttribute("content")
                    : null,
                  a = (function (t) {
                    if (
                      !t.isSingleDoc() ||
                      "a" !=
                        ((i = t.win.location.href),
                        Es((i = vs(i))) ? i.pathname.split("/", 2)[1] : null)
                    )
                      return null;
                    var i,
                      n = yt(ds(t.win.location.href).search).amp_r;
                    return void 0 === n ? null : yt(n);
                  })(t);
                return (this.Rs = {
                  get sourceUrl() {
                    return Ts(t.getUrl());
                  },
                  canonicalUrl: r,
                  pageViewId: u,
                  get pageViewId64() {
                    return this._s || (this._s = Qo(t.win)), this._s;
                  },
                  linkRels: o,
                  viewport: h,
                  replaceParams: a,
                });
              }),
              t
            );
          })(),
          rh = { attributes: !0, attributeFilter: ["hidden"], subtree: !0 },
          eh = (function () {
            function t(t) {
              this.Ue = t.getRootNode();
              var i = this.Ue.ownerDocument || this.Ue;
              (this.t = Zt(i.defaultView)), (this.Et = null), (this.ks = null);
            }
            var i = t.prototype;
            return (
              (i.add = function (t) {
                var i = this;
                this.Ns();
                var n = this.ks.add(t);
                return function () {
                  n(), 0 === i.ks.getHandlerCount() && i.dispose();
                };
              }),
              (i.Ns = function () {
                var t = this;
                if (!this.Et) {
                  this.ks = new Pr();
                  var i = new this.t.MutationObserver(function (i) {
                    i && t.ks.fire(i);
                  });
                  (this.Et = i), i.observe(this.Ue, rh);
                }
              }),
              (i.dispose = function () {
                this.Et &&
                  (this.Et.disconnect(),
                  this.ks.removeAll(),
                  (this.Et = null),
                  (this.ks = null));
              }),
              t
            );
          })();
        function sh(t) {
          try {
            return t.state;
          } catch (t) {
            return null;
          }
        }
        var uh = "History",
          oh = "AMP.History",
          hh = (function () {
            function t(t, i) {
              (this.ki = t),
                (this.Me = cr(t.win)),
                (this.Cs = i),
                (this.js = 0),
                (this.Ds = []),
                (this.qi = []),
                this.Cs.setOnStateUpdated(this.Us.bind(this));
            }
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.Cs.cleanup();
              }),
              (i.push = function (t, i) {
                var n = this;
                return this.zs(function () {
                  return n.Cs.push(i).then(function (i) {
                    return n.Us(i), t && (n.Ds[i.stackIndex] = t), i.stackIndex;
                  });
                }, "push");
              }),
              (i.pop = function (t) {
                var i = this;
                return this.zs(function () {
                  return i.Cs.pop(t).then(function (t) {
                    i.Us(t);
                  });
                }, "pop");
              }),
              (i.replace = function (t) {
                var i = this;
                return this.zs(function () {
                  return i.Cs.replace(t);
                }, "replace");
              }),
              (i.get = function () {
                var t = this;
                return this.zs(function () {
                  return t.Cs.get();
                }, "get");
              }),
              (i.goBack = function (t) {
                var i = this;
                return this.zs(function () {
                  return i.js <= 0 && !t
                    ? h()
                    : i.Cs.pop(i.js).then(function (t) {
                        i.Us(t);
                      });
                }, "goBack");
              }),
              (i.replaceStateForTarget = function (t) {
                var i = this;
                Zt("#" == t[0]);
                var n = this.ki.win.location.hash;
                return this.push(function () {
                  i.ki.win.location.replace(n || "#");
                }).then(function () {
                  i.Cs.replaceStateForTarget(t);
                });
              }),
              (i.getFragment = function () {
                return this.Cs.getFragment();
              }),
              (i.updateFragment = function (t) {
                return (
                  "#" == t[0] && (t = t.substr(1)), this.Cs.updateFragment(t)
                );
              }),
              (i.Us = function (t) {
                (this.js = t.stackIndex), this.Ls(t);
              }),
              (i.Ls = function (t) {
                var i = this;
                if (!(this.js >= this.Ds.length - 1)) {
                  for (var n = [], r = this.Ds.length - 1; r > this.js; r--)
                    this.Ds[r] && (n.push(this.Ds[r]), (this.Ds[r] = void 0));
                  if ((this.Ds.splice(this.js + 1), n.length > 0))
                    for (
                      var e = function (r) {
                          i.Me.delay(function () {
                            return n[r](t);
                          }, 1);
                        },
                        s = 0;
                      s < n.length;
                      s++
                    )
                      e(s);
                }
              }),
              (i.zs = function (t, i) {
                var n = new a(),
                  r = n.promise,
                  e = n.reject,
                  s = n.resolve,
                  u = new Error("history trace for " + i + ": ");
                return (
                  this.qi.push({
                    callback: t,
                    resolve: s,
                    reject: e,
                    trace: u,
                  }),
                  1 == this.qi.length && this.Hs(),
                  r
                );
              }),
              (i.Hs = function () {
                var t = this;
                if (0 != this.qi.length) {
                  var i,
                    n = this.qi[0];
                  try {
                    i = n.callback();
                  } catch (t) {
                    i = Promise.reject(t);
                  }
                  i.then(
                    function (t) {
                      n.resolve(t);
                    },
                    function (t) {
                      Qt().error(uh, "failed to execute a task:", t),
                        n.trace &&
                          ((n.trace.message += t), Qt().error(uh, n.trace)),
                        n.reject(t);
                    }
                  ).then(function () {
                    t.qi.splice(0, 1), t.Hs();
                  });
                }
              }),
              t
            );
          })(),
          ah = (function () {
            function t(t) {
              var i = this;
              (this.win = t), (this.Me = cr(t));
              var n = this.win.history;
              this.Gs = n.length - 1;
              var r,
                e,
                s = sh(n);
              s && void 0 !== s[oh] && (this.Gs = Math.min(s[oh], this.Gs)),
                (this.js = this.Gs),
                this.Vs,
                (this.Us = null),
                (this.Fs = "state" in n),
                (this.Bs = this.qs(this.js)),
                n.pushState && n.replaceState
                  ? ((this.$s = n.originalPushState || n.pushState.bind(n)),
                    (this.Ws =
                      n.originalReplaceState || n.replaceState.bind(n)),
                    (r = function (t, n, r) {
                      i.Bs = t;
                      try {
                        i.$s(t, n, r || null);
                      } catch (t) {
                        Qt().error(uh, "pushState failed: " + t.message);
                      }
                    }),
                    (e = function (t, n, r) {
                      i.Bs = t;
                      try {
                        void 0 !== r ? i.Ws(t, n, r) : i.Ws(t, n);
                      } catch (t) {
                        Qt().error(uh, "replaceState failed: " + t.message);
                      }
                    }),
                    n.originalPushState || (n.originalPushState = this.$s),
                    n.originalReplaceState ||
                      (n.originalReplaceState = this.Ws))
                  : ((r = function (t, n, r) {
                      i.Bs = t;
                    }),
                    (e = function (t, n, r) {
                      i.Bs = t;
                    })),
                (this.Ks = r),
                (this.Ys = e);
              try {
                this.Ys(this.qs(this.js, !0));
              } catch (t) {
                Qt().error(uh, "Initial replaceState failed: " + t.message);
              }
              (n.pushState = this.Js.bind(this)),
                (n.replaceState = this.Xs.bind(this)),
                (this.Qs = function (t) {
                  var n = t.state;
                  Qt().fine(
                    uh,
                    "popstate event: " +
                      i.win.history.length +
                      ", " +
                      JSON.stringify(n)
                  ),
                    i.Zs();
                }),
                this.win.addEventListener("popstate", this.Qs);
            }
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.$s && (this.win.history.pushState = this.$s),
                  this.Ws && (this.win.history.replaceState = this.Ws),
                  this.win.removeEventListener("popstate", this.Qs);
              }),
              (i.qs = function (t, i) {
                var n = A(i ? this.io() : void 0);
                return (n[oh] = t), n;
              }),
              (i.setOnStateUpdated = function (t) {
                this.Us = t;
              }),
              (i.push = function (t) {
                var i = this;
                return this.no(function () {
                  var n = i.ro(i.io(), t || {});
                  return (
                    i.Js(n, void 0, n.fragment ? "#" + n.fragment : void 0),
                    c(function () {
                      return i.ro(n, { stackIndex: i.js });
                    })
                  );
                });
              }),
              (i.pop = function (t) {
                var i = this;
                return (
                  (t = Math.max(t, this.Gs)),
                  this.no(function () {
                    return i.eo(i.js - t + 1);
                  }).then(function (t) {
                    return i.ro(i.io(), { stackIndex: t });
                  })
                );
              }),
              (i.replace = function () {
                var t = this,
                  i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return this.no(function () {
                  var n = t.ro(t.io(), i || {}),
                    r = (n.url || "").replace(/#.*/, ""),
                    e = n.fragment ? "#" + n.fragment : "";
                  return (
                    t.Xs(n, n.title, r || e ? r + e : void 0),
                    c(function () {
                      return t.ro(n, { stackIndex: t.js });
                    })
                  );
                });
              }),
              (i.get = function () {
                var t = this;
                return c(function () {
                  return t.ro(t.io(), { stackIndex: t.js });
                });
              }),
              (i.backTo = function (t) {
                var i = this;
                return (
                  (t = Math.max(t, this.Gs)),
                  this.no(function () {
                    return i.eo(i.js - t);
                  })
                );
              }),
              (i.Zs = function () {
                var t = this.io();
                Qt().fine(
                  uh,
                  "history event: " +
                    this.win.history.length +
                    ", " +
                    JSON.stringify(t)
                );
                var i = t ? t[oh] : void 0,
                  n = this.js,
                  r = this.Vs;
                (this.Vs = void 0),
                  n > this.win.history.length - 2 &&
                    ((n = this.win.history.length - 2),
                    this.so(this.ro(t, { stackIndex: n }))),
                  null == i
                    ? (n += 1)
                    : (n =
                        i < this.win.history.length
                          ? i
                          : this.win.history.length - 1),
                  t || (t = {}),
                  (t[oh] = n),
                  this.Ys(t, void 0, void 0),
                  n != this.js && this.so(this.ro(t, { stackIndex: n })),
                  n < this.Gs && (this.Gs = n),
                  r && r.resolve();
              }),
              (i.io = function () {
                return this.Fs ? sh(this.win.history) : this.Bs;
              }),
              (i.oo = function () {
                Zt(!this.Vs);
              }),
              (i.no = function (t) {
                return this.Vs ? this.Vs.promise.then(t, t) : t();
              }),
              (i.uo = function () {
                this.oo();
                var t = new a(),
                  i = t.reject,
                  n = t.resolve,
                  r = this.Me.timeoutPromise(500, t.promise);
                return (this.Vs = { promise: r, resolve: n, reject: i }), r;
              }),
              (i.eo = function (t) {
                var i = this;
                if ((this.oo(), t <= 0)) return Promise.resolve(this.js);
                this.Bs = this.qs(this.js - t);
                var n = this.uo();
                return (
                  this.win.history.go(-t),
                  n.then(function () {
                    return Promise.resolve(i.js);
                  })
                );
              }),
              (i.Js = function (t, i, n) {
                this.oo(), t || (t = {});
                var r = this.js + 1;
                (t[oh] = r),
                  this.Ks(t, i, n),
                  r != this.win.history.length - 1 &&
                    ((r = this.win.history.length - 1),
                    (t[oh] = r),
                    this.Ys(t));
                var e = this.ro(t, { stackIndex: r });
                this.so(e);
              }),
              (i.replaceStateForTarget = function (t) {
                var i = this;
                Zt("#" == t[0]),
                  this.no(function () {
                    i.win.removeEventListener("popstate", i.Qs);
                    try {
                      i.win.location.replace(t);
                    } finally {
                      i.win.addEventListener("popstate", i.Qs);
                    }
                    return i.Xs(), h();
                  });
              }),
              (i.Xs = function (t, i, n) {
                this.oo(), t || (t = {});
                var r = Math.min(this.js, this.win.history.length - 1);
                (t[oh] = r), this.Ys(t, i, n);
                var e = this.ro(t, { stackIndex: r });
                this.so(e);
              }),
              (i.so = function (t) {
                this.oo(),
                  (t.stackIndex = Math.min(
                    t.stackIndex,
                    this.win.history.length - 1
                  )),
                  this.js != t.stackIndex &&
                    (Qt().fine(
                      uh,
                      "stack index changed: " + this.js + " -> " + t.stackIndex
                    ),
                    (this.js = t.stackIndex),
                    this.Us && this.Us(t));
              }),
              (i.getFragment = function () {
                var t = this.win.location.hash;
                return (t = t.substr(1)), Promise.resolve(t);
              }),
              (i.updateFragment = function (t) {
                return this.replace({ fragment: t });
              }),
              (i.ro = function (t, i) {
                var n = D(D({}, (t && t.data) || {}), i.data || {});
                return D(D(D({}, t || {}), i), {}, { data: n });
              }),
              t
            );
          })(),
          ch = (function () {
            function t(t, i) {
              var n = this;
              (this.win = t),
                (this.ss = i),
                (this.js = 0),
                (this.Us = null),
                (this.ho = this.ss.onMessage("historyPopped", function (t) {
                  return n.ao(t);
                }));
            }
            var i = t.prototype;
            return (
              (i.replaceStateForTarget = function (t) {
                Zt("#" == t[0]), this.win.location.replace(t);
              }),
              (i.cleanup = function () {
                this.ho();
              }),
              (i.setOnStateUpdated = function (t) {
                this.Us = t;
              }),
              (i.co = function (t, i, n) {
                return this.fo(t)
                  ? t
                  : (Qt().warn(uh, 'Ignored unexpected "%s" data:', n, t), i);
              }),
              (i.fo = function (t) {
                return !!t && void 0 !== t.stackIndex;
              }),
              (i.push = function (t) {
                var i = this,
                  n = D({ stackIndex: this.js + 1 }, t || {}),
                  r = "pushHistory";
                return this.ss
                  .sendMessageAwaitResponse(r, n)
                  .then(function (t) {
                    var e = n,
                      s = i.co(t, e, r);
                    return i.so(s), s;
                  });
              }),
              (i.pop = function (t) {
                var i = this;
                if (t > this.js) return this.get();
                var n = { stackIndex: this.js },
                  r = "popHistory";
                return this.ss
                  .sendMessageAwaitResponse(r, n)
                  .then(function (t) {
                    var n = { stackIndex: i.js - 1 },
                      e = i.co(t, n, r);
                    return i.so(e), e;
                  });
              }),
              (i.replace = function (t) {
                var i = this;
                if (t && t.url) {
                  if (!this.ss.hasCapability("fullReplaceHistory")) {
                    var n = { stackIndex: this.js };
                    return Promise.resolve(n);
                  }
                  var r = t.url.replace(/#.*/, "");
                  t.url = r;
                }
                var e = D({ stackIndex: this.js }, t || {}),
                  s = "replaceHistory";
                return this.ss
                  .sendMessageAwaitResponse(s, e, !0)
                  .then(function (t) {
                    var n = e,
                      r = i.co(t, n, s);
                    return i.so(r), r;
                  });
              }),
              (i.get = function () {
                return Promise.resolve({
                  data: void 0,
                  fragment: "",
                  stackIndex: this.js,
                  title: "",
                });
              }),
              (i.ao = function (t) {
                void 0 !== t.newStackIndex && (t.stackIndex = t.newStackIndex),
                  this.fo(t)
                    ? this.so(t)
                    : Qt().warn(
                        uh,
                        'Ignored unexpected "historyPopped" data:',
                        t
                      );
              }),
              (i.so = function (t) {
                var i = t.stackIndex;
                this.js != i &&
                  (Qt().fine(
                    uh,
                    "stackIndex: ".concat(this.js, " -> ").concat(i)
                  ),
                  (this.js = i),
                  this.Us && this.Us(t));
              }),
              (i.getFragment = function () {
                return this.ss.hasCapability("fragment")
                  ? this.ss
                      .sendMessageAwaitResponse("getFragment", void 0, !0)
                      .then(function (t) {
                        if (!t) return "";
                        var i = t;
                        return "#" == i[0] && (i = i.substr(1)), i;
                      })
                  : Promise.resolve("");
              }),
              (i.updateFragment = function (t) {
                return this.ss.hasCapability("fragment")
                  ? this.ss.sendMessageAwaitResponse(
                      "replaceHistory",
                      { fragment: t },
                      !0
                    )
                  : h();
              }),
              t
            );
          })();
        function fh(t) {
          var i,
            n = dr(t);
          return (
            n.isOvertakeHistory() || t.win.__AMP_TEST_IFRAME
              ? (i = new ch(t.win, n))
              : (xn(t.win, "global-history-binding", ah),
                (i = Pn(t.win, "global-history-binding"))),
            new hh(t, i)
          );
        }
        function lh(t, i) {
          return ir(t.win)
            .installExtensionForDoc(t, "amp-loader")
            .then(function () {
              return (function (t) {
                return Gn(t, "loader", "amp-loader");
              })(i);
            });
        }
        var vh = [
            '<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>',
          ],
          dh = (function () {
            function t(t) {
              this.ki = t;
              var i = t.win,
                n = this.lo.bind(this);
              (this.vo = (function (t, i) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = n.needsRootBounds,
                  e = n.rootMargin,
                  s = n.threshold,
                  u = Ni(i) && (r || e) ? i.document : void 0;
                return new i.IntersectionObserver(t, {
                  threshold: s,
                  root: u,
                  rootMargin: e,
                });
              })(function (t) {
                return t.forEach(n);
              }, i)),
                (this.do = new WeakMap());
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                this.vo.disconnect();
              }),
              (i.track = function (t) {
                this.vo.observe(t);
              }),
              (i.untrack = function (t) {
                this.vo.unobserve(t), this.mo(t);
              }),
              (i.lo = function (t) {
                var i = t.boundingClientRect,
                  n = t.isIntersecting,
                  r = t.target,
                  e = i.height,
                  s = i.width,
                  u = r,
                  o = n && s > 20 && e > 20,
                  h = this.do.get(u);
                o !== ((h && h.shown) || !1) &&
                  (o && !h && ((h = this.po(u, s, e)), this.do.set(u, h)),
                  h &&
                    ((h.shown = o),
                    h.container.classList.toggle("amp-hidden", !o),
                    h.loader.classList.toggle("amp-active", o)));
              }),
              (i.po = function (t, i, n) {
                var r = Date.now(),
                  e = (function (t, i, n, r) {
                    var e =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : t.win.Date.now(),
                      s = i.ownerDocument.createElement("div");
                    return (
                      lh(t, i).then(function (u) {
                        var o = t.win.Date.now() - e;
                        u.initializeLoader(i, s, o, n, r);
                      }),
                      s
                    );
                  })(this.ki, t, i, n, r),
                  s = Ce(this.ki.win.document)(vh);
                return (
                  s.appendChild(e),
                  t.appendChild(s),
                  { shown: !1, loader: e, container: s }
                );
              }),
              (i.mo = function (t) {
                var i = this.do.get(t);
                i && (this.do.delete(t), Mi(i.container));
              }),
              t
            );
          })(),
          mh = (function () {
            function t(t, i) {
              var n = this;
              (this.win = t),
                (this.bo = i),
                (this.yo = []),
                (this.wo = new Pr()),
                (this.Ao = function (t) {
                  K(t.target) && n.xo(t.target);
                }),
                (this.Eo = function (i) {
                  cr(t).delay(function () {
                    n.win.document.activeElement &&
                      n.xo(n.win.document.activeElement);
                  }, 500);
                }),
                this.win.document.addEventListener("focus", this.Ao, !0),
                this.win.addEventListener("blur", this.Eo);
            }
            var i = t.prototype;
            return (
              (i.mo = function () {
                this.win.document.removeEventListener("focus", this.Ao, !0),
                  this.win.removeEventListener("blur", this.Eo);
              }),
              (i.onFocus = function (t) {
                return this.wo.add(t);
              }),
              (i.xo = function (t) {
                var i = Date.now();
                0 == this.yo.length || this.yo[this.yo.length - 1].el != t
                  ? this.yo.push({ el: t, time: i })
                  : (this.yo[this.yo.length - 1].time = i),
                  this.purgeBefore(i - this.bo),
                  this.wo.fire(t);
              }),
              (i.getLast = function () {
                return 0 == this.yo.length
                  ? null
                  : this.yo[this.yo.length - 1].el;
              }),
              (i.purgeBefore = function (t) {
                for (var i = this.yo.length - 1, n = 0; n < this.yo.length; n++)
                  if (this.yo[n].time >= t) {
                    i = n - 1;
                    break;
                  }
                -1 != i && this.yo.splice(0, i + 1);
              }),
              (i.hasDescendantsOf = function (t) {
                this.win.document.activeElement &&
                  this.xo(this.win.document.activeElement);
                for (var i = 0; i < this.yo.length; i++)
                  if (t.contains(this.yo[i].el)) return !0;
                return !1;
              }),
              t
            );
          })(),
          ph = 70,
          gh = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.ci = hr(t)),
                (this.Oo = pr(this.ampdoc)),
                (this.To = mr(this.win)),
                (this.Po = new mh(this.win, 6e4)),
                this.Po.onFocus(function (t) {
                  i.Io(t);
                });
            }
            var i = t.prototype;
            return (
              (i.forceChangeSize = function (t, i, n, r, e) {
                this.So(Gs.forElement(t), i, n, e, void 0, !0, r);
              }),
              (i.requestChangeSize = function (t, i, n, r, e) {
                var s = this;
                return new Promise(function (u, o) {
                  s.So(Gs.forElement(t), i, n, r, e, !1, function (t) {
                    t ? u() : o(new Error("changeSize attempt denied"));
                  });
                });
              }),
              (i.expandElement = function (t) {
                Gs.forElement(t).completeExpand(), this.ci.schedulePass(ph);
              }),
              (i.attemptCollapse = function (t) {
                var i = this;
                return new Promise(function (n, r) {
                  i.So(
                    Gs.forElement(t),
                    0,
                    0,
                    void 0,
                    void 0,
                    !1,
                    function (i) {
                      i
                        ? (Gs.forElement(t).completeCollapse(), n())
                        : r(
                            Qt().createExpectedError("collapse attempt denied")
                          );
                    }
                  );
                });
              }),
              (i.collapseElement = function (t) {
                var i = this.Oo.getLayoutRect(t);
                0 != i.width &&
                  0 != i.height &&
                  (Ve(this.win, "dirty-collapse-element")
                    ? this.dirtyElement(t)
                    : this.ci.setRelayoutTop(i.top)),
                  Gs.forElement(t).completeCollapse(),
                  this.ci.schedulePass(ph);
              }),
              (i.measureElement = function (t) {
                return this.To.measurePromise(t);
              }),
              (i.mutateElement = function (t, i, n) {
                return this.Mo(t, null, i, n);
              }),
              (i.measureMutateElement = function (t, i, n) {
                return this.Mo(t, i, n);
              }),
              (i.Ro = function (t) {
                var i = Dr(this.win, t.element);
                return {
                  top: parseInt(i.marginTop, 10) || 0,
                  right: parseInt(i.marginRight, 10) || 0,
                  bottom: parseInt(i.marginBottom, 10) || 0,
                  left: parseInt(i.marginLeft, 10) || 0,
                };
              }),
              (i.Mo = function (t, i, n) {
                var r = this,
                  e =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  s = function () {
                    var i = r.Oo.getLayoutRect(t);
                    return 0 != i.width && 0 != i.height ? i.top : -1;
                  },
                  u = -1;
                return this.To.runPromise({
                  measure: function () {
                    i && i(), e || (u = s());
                  },
                  mutate: function () {
                    if ((n(), !e)) {
                      t.classList.contains("i-amphtml-element") &&
                        Gs.forElement(t).requestMeasure();
                      for (
                        var i = t.getElementsByClassName("i-amphtml-element"),
                          o = 0;
                        o < i.length;
                        o++
                      )
                        Gs.forElement(i[o]).requestMeasure();
                      r.ci.schedulePass(ph),
                        -1 != u && r.ci.setRelayoutTop(u),
                        r.To.measure(function () {
                          var t = s();
                          -1 != t &&
                            t != u &&
                            (r.ci.setRelayoutTop(t), r.ci.schedulePass(ph)),
                            r.ci.maybeHeightChanged();
                        });
                    }
                  },
                });
              }),
              (i.dirtyElement = function (t) {
                var i = !1;
                if (t.classList.contains("i-amphtml-element")) {
                  var n = Gs.forElement(t);
                  this.ci.setRelayoutTop(n.getLayoutBox().top);
                } else i = !0;
                this.ci.schedulePass(ph, i);
              }),
              (i.Io = function (t) {
                var i = bi(t, function (t) {
                  return !!Gs.forElementOptional(t);
                });
                if (i) {
                  var n = Gs.forElement(i),
                    r = n.getPendingChangeSize();
                  void 0 !== r &&
                    this.So(n, r.height, r.width, r.margins, void 0, !0);
                }
              }),
              (i.So = function (t, i, n, r, e, s, u) {
                var o = this;
                t.hasBeenMeasured() && !r
                  ? this._o(t, i, n, void 0, e, s, u)
                  : this.To.measure(function () {
                      t.hasBeenMeasured() || t.measure();
                      var h = r
                        ? { newMargins: r, currentMargins: o.Ro(t) }
                        : void 0;
                      o._o(t, i, n, h, e, s, u);
                    });
              }),
              (i._o = function (t, i, n, r, e, s, u) {
                t.resetPendingChangeSize();
                var o,
                  h,
                  a = t.getLayoutSize();
                if (
                  !(
                    (void 0 !== i && i != a.height) ||
                    (void 0 !== n && n != a.width) ||
                    (void 0 !== r &&
                      ((o = r.currentMargins),
                      (h = r.newMargins),
                      (void 0 !== h.top && h.top != o.top) ||
                        (void 0 !== h.right && h.right != o.right) ||
                        (void 0 !== h.bottom && h.bottom != o.bottom) ||
                        (void 0 !== h.left && h.left != o.left)))
                  )
                )
                  return (
                    void 0 === i &&
                      void 0 === n &&
                      void 0 === r &&
                      Qt().error(
                        "Mutator",
                        "attempting to change size with undefined dimensions",
                        t.debugid
                      ),
                    void (u && u(!0))
                  );
                this.ci.updateOrEnqueueMutateTask(t, {
                  resource: t,
                  newHeight: i,
                  newWidth: n,
                  marginChange: r,
                  event: e,
                  force: s,
                  callback: u,
                }),
                  this.ci.schedulePassVsync();
              }),
              t
            );
          })(),
          bh = null,
          yh = ["gclid", "gclsrc"],
          wh = [/^t.co$/];
        function Ah() {
          return ti(bh, "E#19457 trackImpressionPromise");
        }
        function xh(t, i, n, r) {
          var e, s, u;
          try {
            e = t.open(i, n, r);
          } catch (t) {
            Qt().error("DOM", "Failed to open url on target: ", n, t);
          }
          return (
            !e &&
              "_top" != n &&
              ("number" != typeof u && (u = 0),
              u + "noopener".length > (s = r || "").length ||
                -1 === s.indexOf("noopener", u)) &&
              (e = t.open(i, "_top")),
            e
          );
        }
        var Eh = "navigation",
          Ph = "click",
          Oh = "contextmenu",
          Ih = ["_top", "_blank"],
          Th = "data-a4a-orig-href",
          Mh = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.ko = t.getRootNode()),
                (this.Oo = pr(this.ampdoc)),
                (this.ss = dr(this.ampdoc)),
                (this.yo = nr(this.ampdoc)),
                (this.No = ur(this.ampdoc.win)),
                (this.Co = this.No.isIos() && this.No.isSafari()),
                (this.jo = Ni(this.ampdoc.win) && this.ss.isOvertakeHistory()),
                (this.Do =
                  this.ko != this.ampdoc.getRootNode() ||
                  !!this.ampdoc.getParent()),
                (this.Uo = "inabox" == Dt(this.ampdoc.win).runtime),
                (this.zo =
                  this.ko.nodeType == Node.DOCUMENT_NODE
                    ? this.ko.documentElement
                    : this.ko),
                (this.Lo = this.Ho.bind(this)),
                this.ko.addEventListener(Ph, this.Lo),
                this.ko.addEventListener(Oh, this.Lo),
                (this.Go = !1),
                (function (t) {
                  return t.whenReady().then(function () {
                    return !!t
                      .getBody()
                      .querySelector("amp-analytics[type=googleanalytics]");
                  });
                })(this.ampdoc).then(function (t) {
                  i.Go = t;
                }),
                (this.Vo = !1),
                (this.Fo = !1),
                Promise.all([
                  this.ss.isTrustedViewer(),
                  this.ss.getViewerOrigin(),
                ]).then(function (t) {
                  var n;
                  (i.Vo = t[0]), (i.Fo = ((n = t[1]), Mt.test(vs(n).origin)));
                }),
                (this.Bo = null),
                (this.qo = new Ws()),
                (this.$o = new Ws());
            }
            t.installAnchorClickInterceptor = function (t, i) {
              i.document.documentElement.addEventListener(
                "click",
                Sh.bind(null, t),
                !0
              );
            };
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.Lo &&
                  (this.ko.removeEventListener(Ph, this.Lo),
                  this.ko.removeEventListener(Oh, this.Lo));
              }),
              (i.openWindow = function (t, i, n, r) {
                var e = "";
                (!this.No.isIos() && this.No.isChrome()) ||
                  r ||
                  (e += "noopener");
                var s = xh(t, i, n, e);
                s && !r && (s.opener = null);
              }),
              (i.navigateTo = function (t, i, n) {
                var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  e = r.opener,
                  s = void 0 !== e && e,
                  u = r.target,
                  o = void 0 === u ? "_top" : u;
                i = this.Wo(i);
                var h = vr(this.zo);
                if (h.isProtocolValid(i)) {
                  ti(Ih.includes(o), "Target '".concat(o, "' not supported."));
                  var a = h.getSourceUrl(t.location);
                  (i = h.resolveRelativeUrl(i, a)),
                    "_blank" != o
                      ? (n &&
                          (this.Bo || (this.Bo = this.Ko()),
                          this.Bo.includes(n) &&
                            this.navigateToAmpUrl(i, n))) ||
                        (t.top.location.href = i)
                      : this.openWindow(t, i, o, s);
                } else
                  Jt().error(Eh, "Cannot navigate to invalid protocol: " + i);
              }),
              (i.navigateToAmpUrl = function (t, i) {
                return (
                  !!this.ss.hasCapability("a2a") &&
                  (this.ss.sendMessage("a2aNavigate", {
                    url: t,
                    requestedBy: i,
                  }),
                  !0)
                );
              }),
              (i.Ko = function () {
                var t = this.ko.querySelector(
                  'meta[name="amp-to-amp-navigation"]'
                );
                return t && t.hasAttribute("content")
                  ? t
                      .getAttribute("content")
                      .split(",")
                      .map(function (t) {
                        return t.trim();
                      })
                  : [];
              }),
              (i.Ho = function (t) {
                if (!t.defaultPrevented) {
                  var i = yi(t.__AMP_CUSTOM_LINKER_TARGET__ || t.target, "A");
                  i &&
                    i.href &&
                    (t.type == Ph
                      ? this.Yo(i, t)
                      : t.type == Oh && this.Jo(i, t));
                }
              }),
              (i.Yo = function (t, i) {
                this.Xo(t);
                var n = this.Qo(t.href);
                if (!this.Zo(i, t, n) && !this.tu(i, t, n)) {
                  var r = this.iu();
                  Rh(n) != Rh(r) && (this.nu(t, i), (n = this.Qo(t.href))),
                    this.ru(i, t, n, r);
                }
              }),
              (i.Jo = function (t, i) {
                this.Xo(t), this.nu(t, i);
              }),
              (i.nu = function (t, i) {
                this.qo.forEach(function (n) {
                  n(t, i);
                });
              }),
              (i.Wo = function (t) {
                return (
                  this.$o.forEach(function (i) {
                    t = i(t);
                  }),
                  t
                );
              }),
              (i.Xo = function (t) {
                var i = null;
                this.Go &&
                  !this.Do &&
                  (i = (function (t, i) {
                    for (
                      var n = yt(ds(Hr.getLocation(t).href).search),
                        r = [],
                        e = 0;
                      e < yh.length;
                      e++
                    ) {
                      var s = yh[e];
                      void 0 !== n[s] && r.push(s);
                    }
                    var u = i.getAttribute("data-amp-addparams"),
                      o = i.href;
                    u && (o = bs(o, yt(u)));
                    for (
                      var h = yt(ds(o).search), a = r.length - 1;
                      a >= 0;
                      a--
                    )
                      void 0 !== h[r[a]] && r.splice(a, 1);
                    return (function (t) {
                      for (var i = "", n = 0; n < t.length; n++) {
                        var r = t[n];
                        i +=
                          0 == n
                            ? "".concat(r, "=QUERY_PARAM(").concat(r, ")")
                            : "&".concat(r, "=QUERY_PARAM(").concat(r, ")");
                      }
                      return i;
                    })(r);
                  })(this.ampdoc.win, t)),
                  fr(t).maybeExpandLink(t, i);
              }),
              (i.tu = function (t, i, n) {
                if (!this.jo) return !1;
                var r = oi(i),
                  e = i.href,
                  s = n.protocol;
                if ("ftp:" == s)
                  return xh(r, e, "_blank"), t.preventDefault(), !0;
                var u = /^(https?|mailto):$/.test(s);
                return !(
                  !this.Co ||
                  u ||
                  (xh(r, e, "_top"), t.preventDefault(), 0)
                );
              }),
              (i.Zo = function (t, i, n) {
                return !(
                  !i.hasAttribute("rel") ||
                  !i
                    .getAttribute("rel")
                    .split(" ")
                    .map(function (t) {
                      return t.trim();
                    })
                    .includes("amphtml") ||
                  !this.navigateToAmpUrl(n.href, "<a rel=amphtml>") ||
                  (t.preventDefault(), 0)
                );
              }),
              (i.ru = function (t, i, n, r) {
                var e = Rh(n),
                  s = Rh(r);
                if (n.hash && e == s) this.eu(t, n, r);
                else {
                  var u = (i.getAttribute("target") || "").toLowerCase();
                  (this.Do || this.Uo) &&
                    "_top" != u &&
                    "_blank" != u &&
                    ((u = "_blank"), i.setAttribute("target", u));
                  var o = this.ampdoc.win,
                    h = ur(o),
                    a = dr(i);
                  r.search &&
                    h.isSafari() &&
                    h.getMajorVersion() >= 13 &&
                    a.isProxyOrigin() &&
                    a.isEmbedded() &&
                    this.su(o, r, u),
                    this.viewerInterceptsNavigation(e, "intercept_click") &&
                      t.preventDefault();
                }
              }),
              (i.su = function (t, i, n) {
                Qt().info(
                  Eh,
                  "Removing iframe query string before navigation:",
                  i.search
                );
                var r = i.href,
                  e = "".concat(i.origin).concat(i.pathname).concat(i.hash);
                t.history.replaceState(null, "", e);
                var s = function () {
                  var i = t.location.href;
                  i == e
                    ? (Qt().info(
                        Eh,
                        "Restored iframe URL with query string:",
                        r
                      ),
                      t.history.replaceState(null, "", r))
                    : Qt().error(Eh, "Unexpected iframe URL change:", i, e);
                };
                "_blank" === n
                  ? t.setTimeout(s, 0)
                  : t.addEventListener("pageshow", function i(n) {
                      n.persisted &&
                        (s(), t.removeEventListener("pageshow", i));
                    });
              }),
              (i.eu = function (t, i, n) {
                var r = this;
                if ((t.preventDefault(), !this.Do)) {
                  var e = i.hash.slice(1),
                    s = null;
                  if (e) {
                    var u = vi(e);
                    s =
                      this.ko.getElementById(e) ||
                      this.ko.querySelector('a[name="'.concat(u, '"]'));
                  }
                  i.hash != n.hash
                    ? this.yo.replaceStateForTarget(i.hash).then(function () {
                        r.ou(s, e);
                      })
                    : this.ou(s, e);
                }
              }),
              (i.registerAnchorMutator = function (t, i) {
                this.qo.enqueue(t, i);
              }),
              (i.registerNavigateToMutator = function (t, i) {
                this.$o.enqueue(t, i);
              }),
              (i.ou = function (t, i) {
                var n = this;
                t
                  ? (this.Oo.scrollIntoView(t),
                    cr(this.ampdoc.win).delay(function () {
                      return n.Oo.scrollIntoView(t);
                    }, 1))
                  : Qt().warn(
                      Eh,
                      "failed to find element with id="
                        .concat(i, " or a[name=")
                        .concat(i, "]")
                    );
              }),
              (i.Qo = function (t) {
                return vr(this.zo).parse(t);
              }),
              (i.iu = function () {
                return this.Qo("");
              }),
              (i.viewerInterceptsNavigation = function (t, i) {
                var n = this.ss.hasCapability("interceptNavigation"),
                  r =
                    this.ampdoc.isSingleDoc() &&
                    this.ampdoc
                      .getRootNode()
                      .documentElement.hasAttribute(
                        "allow-navigation-interception"
                      );
                return !(
                  !n ||
                  !r ||
                  (!this.Vo && !this.Fo) ||
                  (this.ss.sendMessage("navigateTo", {
                    url: t,
                    requestedBy: i,
                  }),
                  0)
                );
              }),
              t
            );
          })();
        function Sh(t, i) {
          var n = yi(i.target, "A");
          if (n && n.href) {
            var r = n.getAttribute(Th) || n.getAttribute("href");
            if (r) {
              var e = {
                  CLICK_X: function () {
                    return i.pageX;
                  },
                  CLICK_Y: function () {
                    return i.pageY;
                  },
                },
                s = fr(n).expandUrlSync(r, e, { CLICK_X: !0, CLICK_Y: !0 });
              s != r &&
                (n.getAttribute(Th) || n.setAttribute(Th, r),
                n.setAttribute("href", s));
            }
          }
        }
        function Rh(t) {
          return "".concat(t.origin).concat(t.pathname).concat(t.search);
        }
        function _h(t) {
          return V(t) ? t : [t];
        }
        var kh = (function () {
            function t(t) {
              this.ci = hr(t);
            }
            var i = t.prototype;
            return (
              (i.setOwner = function (t, i) {
                Gs.setOwner(t, i);
              }),
              (i.schedulePreload = function (t, i) {
                this.uu(this.ci.getResourceForElement(t), !1, _h(i));
              }),
              (i.scheduleLayout = function (t, i) {
                this.uu(this.ci.getResourceForElement(t), !0, _h(i));
              }),
              (i.schedulePause = function (t, i) {
                var n = this.ci.getResourceForElement(t);
                (i = _h(i)),
                  this.hu(n, i, function (t) {
                    t.pause();
                  });
              }),
              (i.scheduleResume = function (t, i) {
                var n = this.ci.getResourceForElement(t);
                (i = _h(i)),
                  this.hu(n, i, function (t) {
                    t.resume();
                  });
              }),
              (i.scheduleUnlayout = function (t, i) {
                var n = this.ci.getResourceForElement(t);
                (i = _h(i)),
                  this.hu(n, i, function (t) {
                    t.unlayout();
                  });
              }),
              (i.requireLayout = function (t, i) {
                var n = [];
                return (
                  this.au(t, function (t) {
                    n.push(t.element.ensureLoaded());
                  }),
                  Promise.all(n)
                );
              }),
              (i.hu = function (t, i, n) {
                for (var r, e = o(i, !0); !(r = e()).done; ) {
                  var s = r.value;
                  Zt(t.element.contains(s)), this.au(s, n);
                }
              }),
              (i.au = function (t, i) {
                if (t.classList.contains("i-amphtml-element")) {
                  i(this.ci.getResourceForElement(t));
                  var n = t.getPlaceholder();
                  n && this.au(n, i);
                } else
                  for (
                    var r = t.getElementsByClassName("i-amphtml-element"),
                      e = [],
                      s = 0;
                    s < r.length;
                    s++
                  ) {
                    for (var u = r[s], o = !1, h = 0; h < e.length; h++)
                      if (e[h].contains(u)) {
                        o = !0;
                        break;
                      }
                    o || (e.push(u), i(this.ci.getResourceForElement(u)));
                  }
              }),
              (i.uu = function (t, i, n) {
                this.hu(t, n, function (i) {
                  i.element.ensureLoaded(t.getLayoutPriority());
                });
              }),
              t
            );
          })(),
          Ch = (function () {
            function t(t) {
              (this.cu = t.navigator), (this.t = t);
            }
            var i = t.prototype;
            return (
              (i.isAndroid = function () {
                return /Android/i.test(this.cu.userAgent);
              }),
              (i.isIos = function () {
                return /iPhone|iPad|iPod/i.test(this.cu.userAgent);
              }),
              (i.isSafari = function () {
                return (
                  /Safari/i.test(this.cu.userAgent) &&
                  !this.isChrome() &&
                  !this.isEdge() &&
                  !this.isFirefox() &&
                  !this.isOpera()
                );
              }),
              (i.isChrome = function () {
                return (
                  /Chrome|CriOS/i.test(this.cu.userAgent) &&
                  !this.isEdge() &&
                  !this.isOpera()
                );
              }),
              (i.isFirefox = function () {
                return (
                  /Firefox|FxiOS/i.test(this.cu.userAgent) && !this.isEdge()
                );
              }),
              (i.isOpera = function () {
                return /OPR\/|Opera|OPiOS/i.test(this.cu.userAgent);
              }),
              (i.isEdge = function () {
                return /Edge/i.test(this.cu.userAgent);
              }),
              (i.isWebKit = function () {
                return /WebKit/i.test(this.cu.userAgent) && !this.isEdge();
              }),
              (i.isWindows = function () {
                return /Windows/i.test(this.cu.userAgent);
              }),
              (i.isStandalone = function () {
                return (
                  (this.isIos() && this.cu.standalone) ||
                  (this.isChrome() &&
                    this.t.matchMedia("(display-mode: standalone)").matches)
                );
              }),
              (i.isBot = function () {
                return /bot/i.test(this.cu.userAgent);
              }),
              (i.getMajorVersion = function () {
                return this.isSafari()
                  ? this.isIos()
                    ? this.getIosMajorVersion() || 0
                    : this.fu(/\sVersion\/(\d+)/, 1)
                  : this.isChrome()
                  ? this.fu(/(Chrome|CriOS)\/(\d+)/, 2)
                  : this.isFirefox()
                  ? this.fu(/(Firefox|FxiOS)\/(\d+)/, 2)
                  : this.isOpera()
                  ? this.fu(/(OPR|Opera|OPiOS)\/(\d+)/, 2)
                  : this.isEdge()
                  ? this.fu(/Edge\/(\d+)/, 1)
                  : 0;
              }),
              (i.fu = function (t, i) {
                if (!this.cu.userAgent) return 0;
                var n = this.cu.userAgent.match(t);
                return !n || i >= n.length ? 0 : parseInt(n[i], 10);
              }),
              (i.getIosVersionString = function () {
                var t, i, n;
                return (
                  (this.isIos() &&
                    (null === (t = this.cu.userAgent) ||
                    void 0 === t ||
                    null ===
                      (i = t.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/)) ||
                    void 0 === i ||
                    null === (n = i[1]) ||
                    void 0 === n
                      ? void 0
                      : n.replace(/_/g, "."))) ||
                  ""
                );
              }),
              (i.getIosMajorVersion = function () {
                var t = this.getIosVersionString();
                return "" == t ? null : Number(t.split(".")[0]);
              }),
              t
            );
          })();
        function Nh(t) {
          xn(t, "platform", Ch);
        }
        var Dh = (function () {
            function t(t) {
              (this.di = t), (this.lu = A());
            }
            var i = t.prototype;
            return (
              (i.addTransition = function (t, i, n) {
                var r = this.vu(t, i);
                et(!this.lu[r]), (this.lu[r] = n);
              }),
              (i.setState = function (t) {
                var i = this.di;
                this.di = t;
                var n = this.vu(i, t),
                  r = this.lu[n];
                null == r || r();
              }),
              (i.vu = function (t, i) {
                return "".concat(t, "|").concat(i);
              }),
              t
            );
          })(),
          jh = (function () {
            function t() {
              (this.Qn = []), (this.du = {}), (this.mu = 0), (this.pu = 0);
            }
            var i = t.prototype;
            return (
              (i.getSize = function () {
                return this.Qn.length;
              }),
              (i.getLastEnqueueTime = function () {
                return this.mu;
              }),
              (i.getLastDequeueTime = function () {
                return this.pu;
              }),
              (i.getTaskById = function (t) {
                return this.du[t] || null;
              }),
              (i.enqueue = function (t) {
                Zt(!this.du[t.id]),
                  this.Qn.push(t),
                  (this.du[t.id] = t),
                  (this.mu = Date.now());
              }),
              (i.dequeue = function (t) {
                var i = this.du[t.id];
                return (
                  !!this.removeAtIndex(t, this.Qn.indexOf(i)) &&
                  ((this.pu = Date.now()), !0)
                );
              }),
              (i.peek = function (t) {
                for (var i = 1e6, n = null, r = 0; r < this.Qn.length; r++) {
                  var e = this.Qn[r],
                    s = t(e);
                  s < i && ((i = s), (n = e));
                }
                return n;
              }),
              (i.forEach = function (t) {
                this.Qn.forEach(t);
              }),
              (i.removeAtIndex = function (t, i) {
                var n = this.du[t.id];
                return !(
                  !n ||
                  this.Qn[i] != n ||
                  (this.Qn.splice(i, 1), delete this.du[t.id], 0)
                );
              }),
              (i.purge = function (t) {
                for (var i = this.Qn.length; i--; )
                  t(this.Qn[i]) && this.removeAtIndex(this.Qn[i], i);
              }),
              t
            );
          })(),
          Uh = "Resources",
          Lh = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.ss = dr(t)),
                (this.bu = this.ss.isRuntimeOn()),
                (this.gu = !1),
                (this.yu = 0),
                (this.ci = []),
                (this.wu = 0),
                (this.Au = 0),
                (this.xu = 0),
                (this.Eu = this.ampdoc.isVisible()),
                (this.Ou = !1),
                (this.Tu = !0),
                (this.Pu = !1),
                (this.Iu = -1),
                (this.Su = !0),
                (this.Mu = -1),
                (this.Ru = 0),
                (this._u = 0),
                (this.De = new ju(this.win, function () {
                  return i.doPass();
                })),
                (this.ku = new ju(this.win, function () {
                  (i.Su = !0), i.schedulePass();
                })),
                (this.Nu = new jh()),
                (this.qi = new jh()),
                (this.Cu = this.ju.bind(this)),
                (this.Du = []),
                (this.Uu = []),
                (this.zu = !1),
                (this.Oo = pr(this.ampdoc)),
                (this.To = mr(this.win)),
                (this.Po = new mh(this.win, 6e4)),
                (this.Lu = !1),
                (this.Hu = 0),
                (this.Gu = !1),
                (this.Vu = []),
                (this.Fu = []),
                (this.Bu = new a()),
                (this.qu = new Dh(this.ampdoc.getVisibilityState())),
                this.Oo.onChanged(function (t) {
                  (i.Ru = i.win.Date.now()),
                    (i._u = t.velocity),
                    t.relayoutAll && ((i.Su = !0), (i.Gu = !0)),
                    i.schedulePass();
                }),
                this.Oo.onScroll(function () {
                  i.Ru = i.win.Date.now();
                }),
                this.ampdoc.onVisibilityChanged(function () {
                  -1 == i.Iu &&
                    i.ampdoc.isVisible() &&
                    (i.Iu = i.win.Date.now()),
                    i.schedulePass();
                }),
                this.ss.onRuntimeState(function (t) {
                  Qt().fine(Uh, "Runtime state:", t),
                    (i.bu = t),
                    i.schedulePass(1);
                }),
                Qs(this.ampdoc, function () {
                  i.$u(i.qu), i.schedulePass(0);
                }),
                this.Wu(),
                (this.Ku = dt(
                  this.win,
                  function (t) {
                    return i.Yu(t);
                  },
                  250
                )),
                Ke(this.win.document, "scroll", this.Ku, {
                  capture: !0,
                  passive: !0,
                });
            }
            var i = t.prototype;
            return (
              (i.Wu = function () {
                var t = this;
                this.ampdoc.whenReady().then(function () {
                  (t.Ou = !0),
                    t.Ju(),
                    (t.Uu = null),
                    (function (t) {
                      return Pn(t, "input");
                    })(t.win).setupInputModeClasses(t.ampdoc);
                  var i = function () {
                    return t.ku.schedule();
                  };
                  i(),
                    Promise.race([Qe(t.win), cr(t.win).promise(3100)]).then(i),
                    t.win.document.fonts &&
                      "loaded" != t.win.document.fonts.status &&
                      t.win.document.fonts.ready.then(i);
                });
              }),
              (i.get = function () {
                return this.ci.slice(0);
              }),
              (i.getAmpdoc = function () {
                return this.ampdoc;
              }),
              (i.getResourceForElement = function (t) {
                return Gs.forElement(t);
              }),
              (i.getResourceForElementOptional = function (t) {
                return Gs.forElementOptional(t);
              }),
              (i.getScrollDirection = function () {
                return Math.sign(this._u) || 1;
              }),
              (i.add = function (t) {
                this.wu++, 1 == this.wu && this.Oo.ensureReadyForElements();
                var i = Gs.forElementOptional(t);
                i && 0 != i.getState() && !t.reconstructWhenReparented()
                  ? (i.requestMeasure(),
                    Qt().fine(Uh, "resource reused:", i.debugid))
                  : ((i = new Gs(++this.yu, t, this)),
                    Qt().fine(Uh, "resource added:", i.debugid)),
                  this.ci.push(i),
                  this.ku.schedule(1e3);
              }),
              (i.Xu = function () {
                return (
                  this.Au < 20 ||
                  this.ampdoc.getVisibilityState() == yr ||
                  this.ampdoc.hasBeenVisible()
                );
              }),
              (i.Qu = function (t) {
                var i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = this.bu || this.gu;
                if (r) {
                  var e = this.ampdoc.getVisibilityState(),
                    s = e == br && !t.prerenderAllowed(),
                    u = e == yr && !t.previewAllowed();
                  s ||
                    u ||
                    (this.Ou
                      ? this.Zu(t, n)
                      : t.isBuilt() ||
                        t.isBuilding() ||
                        (i && this.Uu.includes(t)) ||
                        (this.Uu.push(t), this.Ju()));
                }
              }),
              (i.Ju = function () {
                if (!this.zu)
                  try {
                    (this.zu = !0), this.th();
                  } finally {
                    this.zu = !1;
                  }
              }),
              (i.th = function () {
                for (var t = 0; t < this.Uu.length; t++) {
                  var i = this.Uu[t];
                  (this.Ou || ki(i.element, this.ampdoc.getRootNode())) &&
                    (this.Uu.splice(t--, 1), this.Zu(i));
                }
              }),
              (i.Zu = function (t) {
                var i = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                if (!n && !this.Xu() && !t.isBuildRenderBlocking()) return null;
                var r = t.build();
                return r
                  ? (Qt().fine(Uh, "build resource:", t.debugid),
                    this.Au++,
                    this.xu++,
                    r.then(
                      function () {
                        return i.schedulePass();
                      },
                      function (n) {
                        if ((i.ih(t), !Ls(n))) throw n;
                      }
                    ))
                  : null;
              }),
              (i.remove = function (t) {
                var i = Gs.forElementOptional(t);
                i && this.ih(i);
              }),
              (i.ih = function (t) {
                var i = this.ci.indexOf(t);
                -1 != i && this.ci.splice(i, 1),
                  t.isBuilt() && t.pauseOnRemove(),
                  3 === t.getState() && t.layoutCanceled(),
                  this.nh(t, !0),
                  Qt().fine(Uh, "resource removed:", t.debugid);
              }),
              (i.upgraded = function (t) {
                var i = Gs.forElement(t);
                this.Qu(i), Qt().fine(Uh, "resource upgraded:", i.debugid);
              }),
              (i.updateLayoutPriority = function (t, i) {
                var n = Gs.forElement(t);
                n.updateLayoutPriority(i),
                  this.qi.forEach(function (t) {
                    t.resource == n && (t.priority = i);
                  }),
                  this.schedulePass();
              }),
              (i.schedulePass = function (t) {
                return this.De.schedule(t);
              }),
              (i.updateOrEnqueueMutateTask = function (t, i) {
                for (var n = null, r = 0; r < this.Du.length; r++)
                  if (this.Du[r].resource == t) {
                    n = this.Du[r];
                    break;
                  }
                n
                  ? ((n.newHeight = i.newHeight),
                    (n.newWidth = i.newWidth),
                    (n.marginChange = i.marginChange),
                    (n.event = i.event),
                    (n.force = i.force || n.force),
                    (n.callback = i.callback))
                  : this.Du.push(i);
              }),
              (i.schedulePassVsync = function () {
                var t = this;
                this.Lu ||
                  ((this.Lu = !0),
                  this.To.mutate(function () {
                    return t.doPass();
                  }));
              }),
              (i.ampInitComplete = function () {
                (this.Pu = !0),
                  Qt().fine(Uh, "ampInitComplete"),
                  this.schedulePass();
              }),
              (i.setRelayoutTop = function (t) {
                -1 == this.Mu
                  ? (this.Mu = t)
                  : (this.Mu = Math.min(t, this.Mu));
              }),
              (i.maybeHeightChanged = function () {
                this.Gu = !0;
              }),
              (i.onNextPass = function (t) {
                this.Vu.push(t);
              }),
              (i.doPass = function () {
                var t = this;
                if (this.bu) {
                  if (
                    ((this.Eu = this.ampdoc.isVisible()),
                    (this.xu = 0),
                    this.Ou && this.Tu && this.Pu)
                  ) {
                    var i;
                    this.Tu = !1;
                    var n = this.win.document,
                      r = tr(this.ampdoc);
                    this.ss.sendMessage(
                      "documentLoaded",
                      {
                        title: n.title,
                        sourceUrl: Ts(this.ampdoc.getUrl()),
                        isStory:
                          "AMP-STORY" ===
                          (null === (i = n.body.firstElementChild) ||
                          void 0 === i
                            ? void 0
                            : i.tagName),
                        serverLayout:
                          n.documentElement.hasAttribute("i-amphtml-element"),
                        linkRels: r.linkRels,
                        metaTags: { viewport: r.viewport },
                        viewport: r.viewport,
                      },
                      !0
                    ),
                      (this.Hu = this.Oo.getContentHeight()),
                      this.ss.sendMessage(
                        "documentHeight",
                        { height: this.Hu },
                        !0
                      ),
                      Qt().fine(Uh, "document height on load: %s", this.Hu);
                  }
                  !this.Tu &&
                    this.rh &&
                    this.ci.every(function (t) {
                      return t.getState() != Gs.NOT_BUILT || t.element.R1();
                    }) &&
                    ((this.rh = !1), (this.Gu = !0));
                  var e = this.Oo.getSize();
                  Qt().fine(
                    Uh,
                    "PASS: visible=",
                    this.Eu,
                    ", relayoutAll=",
                    this.Su,
                    ", relayoutTop=",
                    this.Mu,
                    ", viewportSize=",
                    e.width,
                    e.height
                  ),
                    this.De.cancel(),
                    (this.Lu = !1),
                    this.qu.setState(this.ampdoc.getVisibilityState()),
                    this.eh(),
                    this.Gu &&
                      ((this.Gu = !1),
                      this.To.measure(function () {
                        var i = t.Oo.getContentHeight();
                        i != t.Hu &&
                          (t.ss.sendMessage(
                            "documentHeight",
                            { height: i },
                            !0
                          ),
                          (t.Hu = i),
                          Qt().fine(Uh, "document height changed: %s", t.Hu),
                          t.Oo.contentHeightChanged());
                      }));
                  for (var s = 0; s < this.Vu.length; s++) (0, this.Vu[s])();
                  this.Vu.length = 0;
                } else Qt().fine(Uh, "runtime is off");
              }),
              (i.eh = function () {
                this.Ou &&
                  this.Pu &&
                  !this.ampdoc.signals().get(Vs) &&
                  (this.ampdoc.signals().signal(Vs),
                  Qt().fine(Uh, "signal: ready-scan"));
              }),
              (i.sh = function () {
                return this.Du.length > 0;
              }),
              (i.oh = function () {
                var t = this,
                  i = this.win.Date.now(),
                  n = this.Oo.getRect(),
                  r = n.height / 10,
                  e = n.height / 10,
                  s =
                    (Math.abs(this._u) < 0.01 && i - this.Ru > 500) ||
                    i - this.Ru > 1e3;
                if (this.Du.length > 0) {
                  Qt().fine(Uh, "change size requests:", this.Du.length);
                  var u = this.Du;
                  this.Du = [];
                  for (
                    var o = -1,
                      h = [],
                      a = 0,
                      c = function (i) {
                        var c = u[i],
                          f = c,
                          l = f.event,
                          v = f.resource,
                          d = v.getLayoutBox(),
                          m = 0,
                          p = 0,
                          g = 0,
                          b = 0,
                          y = d.bottom,
                          w = d.top,
                          A = void 0;
                        if (c.marginChange) {
                          A = c.marginChange.newMargins;
                          var x = c.marginChange.currentMargins;
                          null != A.top && (m = A.top - x.top),
                            null != A.bottom && (p = A.bottom - x.bottom),
                            null != A.left && (g = A.left - x.left),
                            null != A.right && (b = A.right - x.right),
                            m && (w = d.top - x.top),
                            p && (y = d.bottom + x.bottom);
                        }
                        var E = c.newHeight - d.height,
                          P = c.newWidth - d.width,
                          O = !1;
                        if (
                          0 == E &&
                          0 == m &&
                          0 == p &&
                          0 == P &&
                          0 == g &&
                          0 == b
                        );
                        else if (c.force || !t.Eu) O = !0;
                        else if (
                          t.Po.hasDescendantsOf(v.element) ||
                          (l &&
                            l.userActivation &&
                            l.userActivation.hasBeenActive)
                        )
                          O = !0;
                        else if (
                          w >= n.bottom - e ||
                          (0 == m && d.bottom + Math.min(E, 0) >= n.bottom - e)
                        )
                          O = !0;
                        else {
                          if (n.top > 1 && y <= n.top + r)
                            return (
                              (E < 0 && n.top + a < -E) ||
                                (s ? ((a += E), h.push(c)) : t.Du.push(c)),
                              "continue"
                            );
                          t.uh(v, d)
                            ? (O = !0)
                            : E < 0 ||
                              m < 0 ||
                              p < 0 ||
                              (c.newHeight == d.height
                                ? t.To.run(
                                    {
                                      measure: function (t) {
                                        t.resize = !1;
                                        var i = v.element.parentElement;
                                        if (i) {
                                          for (
                                            var n =
                                                (i.getLayoutSize &&
                                                  i.getLayoutSize().width) ||
                                                i.offsetWidth,
                                              r = P,
                                              e = 0;
                                            e < i.childElementCount;
                                            e++
                                          )
                                            if (
                                              (r += i.children[e].offsetWidth) >
                                              n
                                            )
                                              return;
                                          t.resize = !0;
                                        }
                                      },
                                      mutate: function (t) {
                                        t.resize &&
                                          c.resource.changeSize(
                                            c.newHeight,
                                            c.newWidth,
                                            A
                                          ),
                                          c.resource.overflowCallback(
                                            !t.resize,
                                            c.newHeight,
                                            c.newWidth,
                                            A
                                          );
                                      },
                                    },
                                    {}
                                  )
                                : c.resource.overflowCallback(
                                    !0,
                                    c.newHeight,
                                    c.newWidth,
                                    A
                                  ));
                        }
                        O &&
                          (d.top >= 0 &&
                            (o = -1 == o ? d.top : Math.min(o, d.top)),
                          c.resource.changeSize(c.newHeight, c.newWidth, A),
                          c.resource.overflowCallback(
                            !1,
                            c.newHeight,
                            c.newWidth,
                            A
                          ),
                          (t.Gu = !0)),
                          c.callback && c.callback(O);
                      },
                      f = 0;
                    f < u.length;
                    f++
                  )
                    c(f);
                  -1 != o && this.setRelayoutTop(o),
                    h.length > 0 &&
                      this.To.run(
                        {
                          measure: function (i) {
                            (i.scrollHeight = t.Oo.getScrollHeight()),
                              (i.scrollTop = t.Oo.getScrollTop());
                          },
                          mutate: function (i) {
                            var n = -1;
                            h.forEach(function (t) {
                              var i = t.resource.getLayoutBox();
                              (n = -1 == n ? i.top : Math.min(n, i.top)),
                                t.resource.changeSize(
                                  t.newHeight,
                                  t.newWidth,
                                  t.marginChange
                                    ? t.marginChange.newMargins
                                    : void 0
                                ),
                                t.callback && t.callback(!0);
                            }),
                              -1 != n && t.setRelayoutTop(n);
                            var r = t.Oo.getScrollHeight();
                            r != i.scrollHeight &&
                              t.Oo.setScrollTop(
                                i.scrollTop + (r - i.scrollHeight)
                              ),
                              (t.Gu = !0);
                          },
                        },
                        {}
                      );
                }
              }),
              (i.uh = function (t, i, n) {
                var r = this.Oo.getContentHeight(),
                  e = Math.max(0.85 * r, r - 1e3),
                  s = i || t.getLayoutBox(),
                  u = n || t.getInitialLayoutBox();
                return s.bottom >= e || u.bottom >= e;
              }),
              (i.hh = function (t) {
                var i = t.isDisplayed();
                return t.measure(), !(i && !t.isDisplayed());
              }),
              (i.ah = function (t) {
                var i = this;
                t.length &&
                  this.To.mutate(function () {
                    t.forEach(function (t) {
                      t.unload(), i.nh(t);
                    }),
                      Qt().fine(Uh, "unload:", t);
                  });
              }),
              (i.fh = function () {
                var t = this.win.Date.now(),
                  i = this.Fu,
                  n = this.Su,
                  r = this.Mu;
                (this.Su = !1), (this.Mu = -1);
                for (var e, s = 0, u = 0, o = 0; o < this.ci.length; o++) {
                  var h = this.ci[o];
                  0 != h.getState() ||
                    h.isBuilding() ||
                    h.element.R1() ||
                    this.Qu(h, !0),
                    (!n && h.hasBeenMeasured() && 1 != h.getState()) || s++,
                    h.isMeasureRequested() && u++;
                }
                if (s > 0 || u > 0 || n || -1 != r || i.length > 0)
                  for (var a = 0; a < this.ci.length; a++) {
                    var c = this.ci[a];
                    if (
                      !(
                        (c.hasOwner() && !c.isMeasureRequested()) ||
                        c.element.R1()
                      )
                    ) {
                      var f =
                        n ||
                        1 == c.getState() ||
                        !c.hasBeenMeasured() ||
                        c.isMeasureRequested() ||
                        (-1 != r && c.getLayoutBox().bottom >= r);
                      if (!f)
                        for (var l = 0; l < i.length; l++)
                          if (i[l].contains(c.element)) {
                            f = !0;
                            break;
                          }
                      f && (this.hh(c) || (e || (e = []), e.push(c)));
                    }
                  }
                (i.length = 0), e && this.ah(e);
                var v,
                  d = this.Oo.getRect();
                v = this.Eu ? Hi(d, 0.25, 2) : d;
                for (
                  var m = this.Eu ? Hi(d, 0.25, 0.25) : d, p = 0;
                  p < this.ci.length;
                  p++
                ) {
                  var g = this.ci[p];
                  if (0 != g.getState() && !g.hasOwner() && !g.element.R1()) {
                    var b = this.Eu && g.isDisplayed() && g.overlaps(m);
                    g.setInViewport(b);
                  }
                }
                if (v)
                  for (var y = 0; y < this.ci.length; y++) {
                    var w = this.ci[y];
                    w.isBuilt() ||
                      w.isBuilding() ||
                      w.hasOwner() ||
                      w.element.R1() ||
                      !w.hasBeenMeasured() ||
                      !w.isDisplayed() ||
                      !w.overlaps(v) ||
                      this.Qu(w, !0, !0),
                      2 != w.getState() ||
                        w.hasOwner() ||
                        (w.isDisplayed() &&
                          w.overlaps(v) &&
                          this.scheduleLayoutOrPreload(w, !0));
                  }
                if (this.Eu && this.lh(t)) {
                  for (var A = 0, x = 0; x < this.ci.length && A < 4; x++) {
                    var E = this.ci[x];
                    2 == E.getState() &&
                      !E.hasOwner() &&
                      !E.element.R1() &&
                      E.isDisplayed() &&
                      E.idleRenderOutsideViewport() &&
                      (Qt().fine(
                        Uh,
                        "idleRenderOutsideViewport layout:",
                        E.debugid
                      ),
                      this.scheduleLayoutOrPreload(E, !1),
                      A++);
                  }
                  for (var P = 0; P < this.ci.length && A < 4; P++) {
                    var O = this.ci[P];
                    2 != O.getState() ||
                      O.hasOwner() ||
                      O.element.R1() ||
                      !O.isDisplayed() ||
                      (Qt().fine(Uh, "idle layout:", O.debugid),
                      this.scheduleLayoutOrPreload(O, !1),
                      A++);
                  }
                }
              }),
              (i.lh = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Date.now(),
                  i = this.Nu.getLastDequeueTime();
                return (
                  0 == this.Nu.getSize() &&
                  0 == this.qi.getSize() &&
                  t > i + 5e3 &&
                  i > 0
                );
              }),
              (i.dh = function () {
                for (
                  var t = this.win.Date.now(),
                    i = -1,
                    n = this.qi.peek(this.Cu);
                  n &&
                  ((i = this.mh(n)),
                  Qt().fine(
                    Uh,
                    "peek from queue:",
                    n.id,
                    "sched at",
                    n.scheduleTime,
                    "score",
                    this.Cu(n),
                    "timeout",
                    i
                  ),
                  !(i > 16));

                ) {
                  this.qi.dequeue(n);
                  var r = this.Nu.getTaskById(n.id);
                  if (r) {
                    var e = this.ph.bind(this, n);
                    r.promise.then(e, e);
                  } else {
                    var s = n.resource;
                    s.measure(),
                      this.bh(s, n.forceOutsideViewport)
                        ? ((n.promise = n.callback()),
                          (n.startTime = t),
                          Qt().fine(Uh, "exec:", n.id, "at", n.startTime),
                          this.Nu.enqueue(n),
                          n.promise
                            .then(
                              this.gh.bind(this, n, !0),
                              this.gh.bind(this, n, !1)
                            )
                            .catch(js))
                        : (Qt().fine(Uh, "cancelled", n.id),
                          s.layoutCanceled());
                  }
                  (n = this.qi.peek(this.Cu)), (i = -1);
                }
                if (
                  (Qt().fine(
                    Uh,
                    "queue size:",
                    this.qi.getSize(),
                    "exec size:",
                    this.Nu.getSize()
                  ),
                  i >= 0)
                )
                  return i;
                var u = 2 * (t - this.Nu.getLastDequeueTime());
                return Math.max(Math.min(3e4, u), 5e3);
              }),
              (i.ju = function (t) {
                var i = this.Oo.getRect(),
                  n = t.resource.getLayoutBox(),
                  r = Math.floor((n.top - i.top) / i.height);
                return (
                  Math.sign(r) != this.getScrollDirection() && (r *= 2),
                  (r = Math.abs(r)),
                  10 * t.priority + r
                );
              }),
              (i.mh = function (t) {
                var i = this.win.Date.now();
                if (0 == this.Nu.getSize()) {
                  if (-1 === this.Iu) return 0;
                  var n = 1e3 * t.priority;
                  return Math.max(n - (i - this.Iu), 0);
                }
                var r = 0;
                return (
                  this.Nu.forEach(function (n) {
                    var e = Math.max(1e3 * (t.priority - n.priority), 0);
                    r = Math.max(r, e - (i - n.startTime));
                  }),
                  r
                );
              }),
              (i.ph = function (t) {
                this.qi.getTaskById(t.id) || this.qi.enqueue(t);
              }),
              (i.gh = function (t, i, n) {
                if ((this.Nu.dequeue(t), this.schedulePass(1e3), !i))
                  return (
                    Qt().info(Uh, "task failed:", t.id, t.resource.debugid, n),
                    Promise.reject(n)
                  );
              }),
              (i.bh = function (t, i) {
                if (0 == t.getState() || !t.isDisplayed()) return !1;
                var n = this.ampdoc.getVisibilityState(),
                  r = n == br && t.prerenderAllowed(),
                  e = n == yr && t.previewAllowed();
                return (
                  !!(this.Eu || r || e) &&
                  !!(
                    i ||
                    t.isInViewport() ||
                    t.renderOutsideViewport() ||
                    t.idleRenderOutsideViewport()
                  )
                );
              }),
              (i.scheduleLayoutOrPreload = function (t, i, n, r) {
                if (!t.element.R1()) {
                  var e = 0 != t.getState(),
                    s = t.isDisplayed();
                  (e && s) || Zt(!1);
                  var u = r || !1;
                  this.bh(t, u) &&
                    (i
                      ? this.Tr(t, "L", 0, n || 0, u, t.startLayout.bind(t))
                      : this.Tr(t, "P", 2, n || 0, u, t.startLayout.bind(t)));
                }
              }),
              (i.Tr = function (t, i, n, r, e, s) {
                var u = t.getTaskId(i),
                  o = {
                    id: u,
                    resource: t,
                    priority: Math.max(t.getLayoutPriority(), r) + n,
                    forceOutsideViewport: e,
                    callback: s,
                    scheduleTime: this.win.Date.now(),
                    startTime: 0,
                    promise: null,
                  };
                Qt().fine(Uh, "schedule:", o.id, "at", o.scheduleTime);
                var h = this.qi.getTaskById(u);
                (!h || o.priority < h.priority) &&
                  (h && this.qi.dequeue(h),
                  this.qi.enqueue(o),
                  this.schedulePass(this.mh(o))),
                  o.resource.layoutScheduled(o.scheduleTime);
              }),
              (i.whenFirstPass = function () {
                return this.Bu.promise;
              }),
              (i.$u = function (t) {
                var i = this,
                  n = Ar,
                  r = Er,
                  e = xr,
                  s = br,
                  u = yr,
                  o = wr,
                  h = function () {
                    var t = i.Oo.getSize();
                    if (t.height > 0 && t.width > 0) {
                      i.sh() && i.oh(), i.fh();
                      var n = i.dh();
                      i.sh() && (n = Math.min(n, 500)),
                        i.Eu
                          ? i.schedulePass(n)
                            ? Qt().fine(Uh, "next pass:", n)
                            : Qt().fine(Uh, "pass already scheduled")
                          : Qt().fine(
                              Uh,
                              "document is not visible: no scheduling"
                            ),
                        i.Bu.resolve();
                    }
                  },
                  a = function () {},
                  c = function () {
                    i.ci.forEach(function (t) {
                      return t.pause();
                    });
                  },
                  f = function () {
                    i.ci.forEach(function (t) {
                      t.unload(), i.nh(t);
                    }),
                      i.yh();
                  },
                  l = function () {
                    i.ci.forEach(function (t) {
                      return t.resume();
                    }),
                      h();
                  };
                t.addTransition(s, s, h),
                  t.addTransition(s, u, h),
                  t.addTransition(s, o, h),
                  t.addTransition(s, n, h),
                  t.addTransition(s, r, h),
                  t.addTransition(s, e, h),
                  t.addTransition(u, u, h),
                  t.addTransition(u, o, h),
                  t.addTransition(u, n, h),
                  t.addTransition(u, r, h),
                  t.addTransition(u, e, h),
                  t.addTransition(o, o, h),
                  t.addTransition(o, n, h),
                  t.addTransition(o, r, f),
                  t.addTransition(o, e, c),
                  t.addTransition(n, o, h),
                  t.addTransition(n, n, h),
                  t.addTransition(n, r, f),
                  t.addTransition(n, e, c),
                  t.addTransition(r, o, l),
                  t.addTransition(r, n, l),
                  t.addTransition(r, r, a),
                  t.addTransition(r, e, h),
                  t.addTransition(e, o, l),
                  t.addTransition(e, n, h),
                  t.addTransition(e, r, f),
                  t.addTransition(e, e, a);
              }),
              (i.yh = function () {
                try {
                  this.win.getSelection().removeAllRanges();
                } catch (t) {}
              }),
              (i.nh = function (t, i) {
                if (
                  ((1 != t.getState() && 2 != t.getState()) ||
                    (this.qi.purge(function (i) {
                      return i.resource == t;
                    }),
                    this.Nu.purge(function (i) {
                      return i.resource == t;
                    }),
                    B(this.Du, function (i) {
                      return i.resource === t;
                    })),
                  0 == t.getState() && i && this.Uu)
                ) {
                  var n = this.Uu.indexOf(t);
                  -1 != n && this.Uu.splice(n, 1);
                }
              }),
              (i.Yu = function (t) {
                var i = t.target;
                if (
                  i.nodeType === Node.ELEMENT_NODE &&
                  i !== this.Oo.getScrollingElement()
                ) {
                  var n = i;
                  this.Fu.includes(n) ||
                    (this.Fu.push(n), this.schedulePass(70));
                }
              }),
              t
            );
          })();
        function zh(t) {
          return t.queryCommandSupported("copy");
        }
        function Hh(t) {
          return t.hasAttribute("hidden");
        }
        var Gh = "STANDARD-ACTIONS",
          Vh = /^i-amphtml-/,
          Fh = (function () {
            function t(t) {
              this.ampdoc = t;
              var i = t.getHeadNode();
              (this.wh = er(t)), (this.Oo = pr(t)), this.Ah($n(i)), this.xh();
            }
            var i = t.prototype;
            return (
              (i.Ah = function (t) {
                t.addGlobalTarget("AMP", this.Eh.bind(this)),
                  t.addGlobalMethodHandler("hide", this.Oh.bind(this)),
                  t.addGlobalMethodHandler("show", this.Th.bind(this)),
                  t.addGlobalMethodHandler(
                    "toggleVisibility",
                    this.Ph.bind(this)
                  ),
                  t.addGlobalMethodHandler("scrollTo", this.Ih.bind(this)),
                  t.addGlobalMethodHandler("focus", this.Sh.bind(this)),
                  t.addGlobalMethodHandler("toggleClass", this.Mh.bind(this)),
                  t.addGlobalMethodHandler("copy", this.Rh.bind(this)),
                  t.addGlobalMethodHandler("toggleChecked", this._h.bind(this));
              }),
              (i.xh = function () {
                this.kh() &&
                  this.ampdoc.waitForBodyOpen().then(function (t) {
                    var i =
                      t.getAttribute("data-prefers-dark-mode-class") ||
                      "amp-dark-mode";
                    t.classList.add(i);
                  });
              }),
              (i.kh = function () {
                var t, i;
                try {
                  var n = this.ampdoc.win.localStorage.getItem("amp-dark-mode");
                  if (n) return "yes" === n;
                } catch (t) {}
                return null === (t = (i = this.ampdoc.win).matchMedia) ||
                  void 0 === t
                  ? void 0
                  : t.call(i, "(prefers-color-scheme: dark)").matches;
              }),
              (i.Eh = function (t) {
                if (!t.satisfiesTrust(2)) return null;
                var i = t.args,
                  n = t.method,
                  r = t.node,
                  e = oi(r);
                switch (n) {
                  case "pushState":
                  case "setState":
                    var s =
                      r.nodeType === Node.DOCUMENT_NODE ? r.documentElement : r;
                    return Xn(s).then(function (i) {
                      return ti(i, "AMP-BIND is not installed."), i.invoke(t);
                    });
                  case "navigateTo":
                    return this.Nh(t);
                  case "closeOrNavigateTo":
                    return this.Ch(t);
                  case "scrollTo":
                    return (
                      ti(i.id, "AMP.scrollTo must provide element ID"),
                      (t.node = _n(r).getElementById(i.id)),
                      this.Ih(t)
                    );
                  case "goBack":
                    return (
                      nr(this.ampdoc).goBack(!(!i || !0 !== i.navigate)), null
                    );
                  case "print":
                    return e.print(), null;
                  case "copy":
                    return this.Rh(t);
                  case "optoutOfCid":
                    return Qn(this.ampdoc)
                      .then(function (t) {
                        return t.optOut();
                      })
                      .catch(function (t) {
                        Qt().error(Gh, "Failed to opt out of CID", t);
                      });
                  case "toggleTheme":
                    return this.jh(), null;
                }
                throw Jt().createError("Unknown AMP action ", n);
              }),
              (i.Rh = function (t) {
                var i,
                  n = t.args,
                  r = oi(t.node),
                  e = "copy-error";
                if ("AMP" === t.tagOrTarget) i = n.text.trim();
                else {
                  var s,
                    u = st(t.node);
                  i = (
                    null !== (s = u.value) && void 0 !== s ? s : u.textContent
                  ).trim();
                }
                var o,
                  h,
                  a,
                  c = function (t, i, n) {
                    var e = { data: { type: i } },
                      s = Ye(r, "".concat(t), e);
                    $n(n.caller).trigger(n.caller, t, s, 3);
                  };
                (null !== (h = (o = r.document).defaultView) &&
                  void 0 !== h &&
                  null !== (a = h.navigator) &&
                  void 0 !== a &&
                  a.clipboard) ||
                zh(o)
                  ? (function (t, i, n, r) {
                      var e;
                      null !== (e = t.navigator) && void 0 !== e && e.clipboard
                        ? t.navigator.clipboard.writeText(i).then(n, r)
                        : zh(t.document) &&
                          (function (t, i) {
                            var n,
                              r = !1,
                              e = t.document,
                              s = e.createElement("textarea");
                            kr(s, {
                              position: "fixed",
                              top: 0,
                              left: 0,
                              width: "50px",
                              height: "50px",
                              padding: 0,
                              border: "none",
                              outline: "none",
                              background: "transparent",
                            }),
                              (s.value = i),
                              (s.readOnly = !0),
                              (s.contentEditable = "true"),
                              e.body.appendChild(s),
                              null === (n = t.getSelection()) ||
                                void 0 === n ||
                                n.removeAllRanges(),
                              s.focus(),
                              s.setSelectionRange(0, i.length);
                            try {
                              r = e.execCommand("copy");
                            } catch (t) {}
                            return Mi(s), r;
                          })(t, i)
                        ? n()
                        : r();
                    })(
                      r,
                      i,
                      function () {
                        c("copy-success", "success", t);
                      },
                      function () {
                        c(e, "error", t);
                      }
                    )
                  : c(e, "unsupported", t);
              }),
              (i.Nh = function (t) {
                var i = this,
                  n = t.args,
                  r = t.caller,
                  e = t.method,
                  s = oi(t.node),
                  u = h();
                return (
                  r.tagName.startsWith("AMP-") &&
                    (u = r.getImpl().then(function (t) {
                      "function" == typeof t.throwIfCannotNavigate &&
                        t.throwIfCannotNavigate();
                    })),
                  u.then(
                    function () {
                      var t;
                      ((t = i.ampdoc), On(t, "navigation")).navigateTo(
                        s,
                        n.url,
                        "AMP.".concat(e),
                        { target: n.target, opener: n.opener }
                      );
                    },
                    function (t) {
                      Jt().error(Gh, t);
                    }
                  )
                );
              }),
              (i.jh = function () {
                var t = this;
                this.ampdoc.waitForBodyOpen().then(function (i) {
                  try {
                    var n =
                      i.getAttribute("data-prefers-dark-mode-class") ||
                      "amp-dark-mode";
                    t.kh()
                      ? (i.classList.remove(n),
                        t.ampdoc.win.localStorage.setItem(
                          "amp-dark-mode",
                          "no"
                        ))
                      : (i.classList.add(n),
                        t.ampdoc.win.localStorage.setItem(
                          "amp-dark-mode",
                          "yes"
                        ));
                  } catch (t) {}
                });
              }),
              (i.Ch = function (t) {
                var i = oi(t.node),
                  n = i.parent != i,
                  r = !1;
                return (
                  i.opener &&
                    this.ampdoc.isSingleDoc() &&
                    !n &&
                    (i.close(), (r = i.closed)),
                  r ? h() : this.Nh(t)
                );
              }),
              (i.Ih = function (t) {
                var i = t.node,
                  n = t.args,
                  r = n && n.position,
                  e = n && n.duration;
                return (
                  r && !["top", "bottom", "center"].includes(r) && (r = void 0),
                  J(e) || (e = void 0),
                  this.Oo.animateScrollIntoView(i, r, e)
                );
              }),
              (i.Sh = function (t) {
                return Ci(t.node), null;
              }),
              (i.Oh = function (t) {
                var i = t.node;
                if (i.classList.contains("i-amphtml-element")) {
                  var n = i;
                  this.wh.mutateElement(
                    n,
                    function () {
                      return n.collapse();
                    },
                    !0
                  );
                } else
                  this.wh.mutateElement(i, function () {
                    return Cr(i, !1);
                  });
                return null;
              }),
              (i.Th = function (t) {
                var i = this,
                  n = t.node,
                  r = oi(n);
                if (n.classList.contains(ce(Zr)))
                  return (
                    Jt().warn(
                      Gh,
                      "Elements with layout=nodisplay cannot be dynamically shown.",
                      n
                    ),
                    null
                  );
                this.wh.measureElement(function () {
                  "none" != Dr(r, n).display ||
                    Hh(n) ||
                    Jt().warn(
                      Gh,
                      'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.',
                      n
                    );
                });
                var e,
                  s = (e = n).hasAttribute("autofocus")
                    ? e
                    : e.querySelector("[autofocus]");
                return (
                  s && ur(r).isIos()
                    ? (this.Dh(n, s), this.wh.mutateElement(n, function () {}))
                    : this.wh.mutateElement(n, function () {
                        i.Dh(n, s);
                      }),
                  null
                );
              }),
              (i.Dh = function (t, i) {
                t.classList.contains("i-amphtml-element")
                  ? t.expand()
                  : Cr(t, !0),
                  i && Ci(i);
              }),
              (i.Ph = function (t) {
                return Hh(t.node) ? this.Th(t) : this.Oh(t);
              }),
              (i.Mh = function (t) {
                var i = t.node,
                  n = t.args,
                  r = Jt().assertString(
                    n.class,
                    "Argument 'class' must be a string."
                  );
                return (
                  Vh.test(r) ||
                    this.wh.mutateElement(i, function () {
                      if (void 0 !== n.force) {
                        var t = Jt().assertBoolean(
                          n.force,
                          "Optional argument 'force' must be a boolean."
                        );
                        i.classList.toggle(r, t);
                      } else i.classList.toggle(r);
                    }),
                  null
                );
              }),
              (i._h = function (t) {
                var i = t.node,
                  n = t.args;
                return (
                  this.wh.mutateElement(i, function () {
                    if (void 0 !== (null == n ? void 0 : n.force)) {
                      var t = Jt().assertBoolean(
                        n.force,
                        "Optional argument 'force' must be a boolean."
                      );
                      i.checked = t;
                    } else !0 === i.checked ? (i.checked = !1) : (i.checked = !0);
                  }),
                  null
                );
              }),
              t
            );
          })(),
          Bh = "Storage",
          qh = (function () {
            function t(t, i, n) {
              (this.ampdoc = t),
                (this.ss = i),
                (this.Cs = n),
                (this.Uh = n instanceof Yh),
                (this.i = Ms(this.ampdoc.win.location)),
                (this.zh = null);
            }
            var i = t.prototype;
            return (
              (i.Lh = function () {
                return this.Hh(), this;
              }),
              (i.get = function (t, i) {
                return this.Gh().then(function (n) {
                  return n.get(t, i);
                });
              }),
              (i.set = function (t, i, n) {
                return Zt("boolean" == typeof i), this.setNonBoolean(t, i, n);
              }),
              (i.setNonBoolean = function (t, i, n) {
                return this.Vh(function (r) {
                  return r.set(t, i, n);
                });
              }),
              (i.remove = function (t) {
                return this.Vh(function (i) {
                  return i.remove(t);
                });
              }),
              (i.isViewerStorage = function () {
                return this.Uh;
              }),
              (i.Gh = function () {
                return (
                  this.zh ||
                    (this.zh = this.Cs.loadBlob(this.i)
                      .then(function (t) {
                        return t ? at(atob(t)) : {};
                      })
                      .catch(function (t) {
                        return (
                          Qt().expectedError(Bh, "Failed to load store: ", t),
                          {}
                        );
                      })
                      .then(function (t) {
                        return new $h(t);
                      })),
                  this.zh
                );
              }),
              (i.Vh = function (t) {
                var i = this;
                return this.Gh()
                  .then(function (n) {
                    t(n);
                    var r = btoa(JSON.stringify(n.obj));
                    return i.Cs.saveBlob(i.i, r);
                  })
                  .then(this.Fh.bind(this));
              }),
              (i.Hh = function () {
                var t = this;
                this.ss.onBroadcast(function (i) {
                  "amp-storage-reset" == i.type &&
                    i.origin == t.i &&
                    (Qt().fine(Bh, "Received reset message"), (t.zh = null));
                });
              }),
              (i.Fh = function () {
                Qt().fine(Bh, "Broadcasted reset message"),
                  this.ss.broadcast({
                    type: "amp-storage-reset",
                    origin: this.i,
                  });
              }),
              t
            );
          })(),
          $h = (function () {
            function t(t, i) {
              (this.obj = E(t)),
                (this.Bh = i || 8),
                (this.qh = this.obj.vv || Object.create(null)),
                this.obj.vv || (this.obj.vv = this.qh);
            }
            var i = t.prototype;
            return (
              (i.get = function (t, i) {
                var n = this.qh[t],
                  r = n ? n.t : void 0,
                  e = !i || null == r || r + i > Date.now();
                return n && e ? n.v : void 0;
              }),
              (i.set = function (t, i, n) {
                if (
                  (Zt("__proto__" != t && "prototype" != t),
                  void 0 !== this.qh[t])
                ) {
                  var r = this.qh[t],
                    e = Date.now();
                  n && (e = r.t), (r.v = i), (r.t = e);
                } else this.qh[t] = { v: i, t: Date.now() };
                var s = Object.keys(this.qh);
                if (s.length > this.Bh) {
                  for (var u = 1 / 0, o = null, h = 0; h < s.length; h++) {
                    var a = this.qh[s[h]];
                    a.t < u && ((o = s[h]), (u = a.t));
                  }
                  o && delete this.qh[o];
                }
              }),
              (i.remove = function (t) {
                delete this.qh[t];
              }),
              t
            );
          })(),
          Wh = (function () {
            function t(t) {
              if (((this.win = t), (this.$h = this.Wh()), !this.$h)) {
                var i = new Error("localStorage not supported.");
                Qt().expectedError(Bh, i);
              }
            }
            var i = t.prototype;
            return (
              (i.Wh = function () {
                try {
                  return (
                    "localStorage" in this.win &&
                    (this.win.localStorage.getItem("test"), !0)
                  );
                } catch (t) {
                  return !1;
                }
              }),
              (i.Kh = function (t) {
                return "amp-store:".concat(t);
              }),
              (i.loadBlob = function (t) {
                var i = this;
                return new Promise(function (n) {
                  i.$h ? n(i.win.localStorage.getItem(i.Kh(t))) : n(null);
                });
              }),
              (i.saveBlob = function (t, i) {
                var n = this;
                return new Promise(function (r) {
                  n.$h ? (n.win.localStorage.setItem(n.Kh(t), i), r()) : r();
                });
              }),
              t
            );
          })(),
          Yh = (function () {
            function t(t) {
              this.ss = t;
            }
            var i = t.prototype;
            return (
              (i.loadBlob = function (t) {
                return this.ss
                  .sendMessageAwaitResponse("loadStore", { origin: t })
                  .then(function (t) {
                    return t.blob;
                  });
              }),
              (i.saveBlob = function (t, i) {
                return this.ss
                  .sendMessageAwaitResponse("saveStore", { origin: t, blob: i })
                  .catch(function (t) {
                    throw Qt().createExpectedError(
                      Bh,
                      "Failed to save store: ",
                      t
                    );
                  });
              }),
              t
            );
          })(),
          Kh = "__AMP_IMPL_",
          Jh = function () {},
          Xh = (function () {
            function t(t) {
              (this.ki = t), (this.Yh = {}), (this.Jh = {});
            }
            var i = t.prototype;
            return (
              (i.whenReady = function (t) {
                return this.Xh(t).then(Jh);
              }),
              (i.setHtmlForTemplate = function (t, i) {
                var n = this;
                return this.Xh(t).then(function (t) {
                  return n.Qh(t, i);
                });
              }),
              (i.renderTemplate = function (t, i) {
                var n = this;
                return this.Xh(t).then(function (t) {
                  return n.Zh(t, i);
                });
              }),
              (i.renderTemplateAsString = function (t, i) {
                return this.Xh(t).then(function (t) {
                  return t.renderAsString(i);
                });
              }),
              (i.getTemplateRenderer = function (t) {
                return this.Xh(t).then(function (t) {
                  return {
                    renderAsString: function (i) {
                      return t.renderAsString(i);
                    },
                  };
                });
              }),
              (i.renderTemplateArray = function (t, i) {
                var n = this;
                return 0 == i.length
                  ? Promise.resolve([])
                  : this.Xh(t).then(function (t) {
                      return i.map(function (i) {
                        return n.Zh(t, i);
                      });
                    });
              }),
              (i.findAndRenderTemplate = function (t, i, n) {
                return this.renderTemplate(this.findTemplate(t, n), i);
              }),
              (i.findAndSetHtmlForTemplate = function (t, i, n) {
                return this.setHtmlForTemplate(this.findTemplate(t, n), i);
              }),
              (i.findAndRenderTemplateArray = function (t, i, n) {
                return this.renderTemplateArray(this.findTemplate(t, n), i);
              }),
              (i.hasTemplate = function (t, i) {
                return !!this.maybeFindTemplate(t, i);
              }),
              (i.findTemplate = function (t, i) {
                var n = this.maybeFindTemplate(t, i);
                ti(n, "Template not found for %s", t);
                var r = n.tagName;
                return (
                  ti(
                    "TEMPLATE" == r ||
                      ("SCRIPT" == r &&
                        "text/plain" === n.getAttribute("type")),
                    'Template must be defined in a <template> or <script type="text/plain"> tag'
                  ),
                  n
                );
              }),
              (i.maybeFindTemplate = function (t, i) {
                var n = t.getAttribute("template");
                return n
                  ? _i(t).getElementById(n)
                  : i
                  ? pi(t, i)
                  : t.querySelector(
                      'template[type], script[type="text/plain"]'
                    );
              }),
              (i.Xh = function (t) {
                var i = this,
                  n = t[Kh];
                if (n) return Promise.resolve(n);
                var r = "",
                  e = t.tagName;
                "TEMPLATE" == e
                  ? (r = t.getAttribute("type"))
                  : "SCRIPT" == e && (r = t.getAttribute("template")),
                  ti(r, "Type must be specified: %s", t);
                var s = t.__AMP_WAIT_;
                return (
                  s ||
                  ((s = this.ta(t, r).then(function (n) {
                    var r = n,
                      e = (t[Kh] = new r(t, i.ki.win));
                    return delete t.__AMP_WAIT_, e;
                  })),
                  (t.__AMP_WAIT_ = s),
                  s)
                );
              }),
              (i.ta = function (t, i) {
                if (this.Yh[i]) return this.Yh[i];
                var n = new a(),
                  r = n.promise,
                  e = n.resolve;
                return (this.Yh[i] = r), (this.Jh[i] = e), r;
              }),
              (i.ia = function (t, i) {
                if (this.Yh[t]) {
                  var n = this.Jh[t];
                  ti(n, "Duplicate template type: %s", t),
                    delete this.Jh[t],
                    n(i);
                } else this.Yh[t] = Promise.resolve(i);
              }),
              (i.Zh = function (t, i) {
                return t.render(i);
              }),
              (i.Qh = function (t, i) {
                return t.setHtml(i);
              }),
              t
            );
          })(),
          Qh = (function () {
            function t(t) {
              (this.win = t),
                (this.na = this.win.Promise.resolve()),
                (this.ra = 0),
                (this.ea = {}),
                (this.sa = Date.now());
            }
            var i = t.prototype;
            return (
              (i.timeSinceStart = function () {
                return Date.now() - this.sa;
              }),
              (i.delay = function (t, i) {
                var n = this;
                if (!i) {
                  var r = "p" + this.ra++;
                  return (
                    this.na
                      .then(function () {
                        n.ea[r] ? delete n.ea[r] : t();
                      })
                      .catch(js),
                    r
                  );
                }
                return this.win.setTimeout(function () {
                  try {
                    t();
                  } catch (t) {
                    throw (js(t), t);
                  }
                }, i);
              }),
              (i.cancel = function (t) {
                "string" != typeof t
                  ? this.win.clearTimeout(t)
                  : (this.ea[t] = !0);
              }),
              (i.promise = function (t) {
                var i = this;
                return new this.win.Promise(function (n) {
                  if (-1 == i.delay(n, t))
                    throw new Error("Failed to schedule timer.");
                });
              }),
              (i.timeoutPromise = function (t, i, n) {
                var r,
                  e = this,
                  s = new this.win.Promise(function (i, s) {
                    if (
                      -1 ==
                      (r = e.delay(function () {
                        s(Jt().createError(n || "timeout"));
                      }, t))
                    )
                      throw new Error("Failed to schedule timer.");
                  });
                if (!i) return s;
                var u = function () {
                  e.cancel(r);
                };
                return i.then(u, u), this.win.Promise.race([s, i]);
              }),
              (i.poll = function (t, i) {
                var n = this;
                return new this.win.Promise(function (r) {
                  var e = n.win.setInterval(function () {
                    i() && (n.win.clearInterval(e), r());
                  }, t);
                });
              }),
              t
            );
          })();
        function Zh(t) {
          xn(t, "timer", Qh);
        }
        var ta = (function () {
            function t(t) {
              var i = t.getRootNode(),
                n = i.ownerDocument || i;
              (this.oa = n.createElement("a")), (this.yr = new cs(100));
            }
            var i = t.prototype;
            return (
              (i.parse = function (t, i) {
                return ms(this.oa, t, i ? null : this.yr);
              }),
              (i.ua = function (t) {
                return "string" != typeof t ? t : this.parse(t);
              }),
              (i.isProtocolValid = function (t) {
                return Ps(t);
              }),
              (i.getSourceOrigin = function (t) {
                return Ms(this.ua(t));
              }),
              (i.getSourceUrl = function (t) {
                return Ts(this.ua(t));
              }),
              (i.resolveRelativeUrl = function (t, i) {
                return Ss(t, this.ua(i));
              }),
              (i.assertHttpsUrl = function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "source";
                return As(t, i, n);
              }),
              (i.assertAbsoluteHttpOrHttpsUrl = function (t) {
                return (function (t) {
                  return (
                    ti(
                      /^https?\:/i.test(t),
                      'URL must start with "http://" or "https://". Invalid value: %s',
                      t
                    ),
                    ds(t).href
                  );
                })(t);
              }),
              (i.isProxyOrigin = function (t) {
                return Es(this.ua(t));
              }),
              (i.isSecure = function (t) {
                return ws(this.ua(t));
              }),
              (i.getWinOrigin = function (t) {
                return t.origin || this.ua(t.location.href).origin;
              }),
              (i.getCdnUrlOnOrigin = function (t) {
                if (Es(t)) return t;
                var i = this.ua(t),
                  n = i.hash,
                  r = i.host,
                  e = i.pathname,
                  s = i.search,
                  u = encodeURIComponent(r);
                return ""
                  .concat(Tt, "/c/")
                  .concat(u)
                  .concat(e)
                  .concat(s)
                  .concat(n);
              }),
              t
            );
          })(),
          ia = "Expander",
          na = (function () {
            function t(t, i, n, r, e, s) {
              (this.ha = t),
                (this.aa = i),
                (this.ca = n),
                (this.fa = r),
                (this.Le = e),
                (this.la = !s);
            }
            var i = t.prototype;
            return (
              (i.expand = function (t) {
                if (!t.length) return this.fa ? t : Promise.resolve(t);
                var i = this.ha.getExpr(this.aa, this.Le),
                  n = this.va(t, i);
                return n.length
                  ? this.da(t, n)
                  : this.fa
                  ? t
                  : Promise.resolve(t);
              }),
              (i.getMacroNames = function (t) {
                var i = this.ha.getExpr(this.aa, this.Le);
                return t.match(i) || [];
              }),
              (i.va = function (t, i) {
                var n = [];
                return (
                  t.replace(i, function (t, i, r) {
                    var e = t.length,
                      s = { start: r, stop: e + r - 1, name: i, length: e };
                    n.push(s);
                  }),
                  n
                );
              }),
              (i.da = function (t, i) {
                var n = this,
                  r = [],
                  e = 0,
                  s = 0,
                  u = i[s],
                  o = 0,
                  h = !1;
                return (function a(c) {
                  for (
                    var f, l = "", v = [], m = [];
                    e < t.length && s <= i.length;

                  ) {
                    var p,
                      g = l.trim();
                    if (u && e === u.start)
                      g &&
                        v.push(
                          o
                            ? (f = l).trimStart
                              ? f.trimStart()
                              : (f + "_").trim().slice(0, -1)
                            : l
                        ),
                        (p =
                          n.aa && x(n.aa, u.name)
                            ? {
                                name: u.name,
                                prioritized: n.aa[u.name],
                                encode: c,
                              }
                            : D(
                                D({}, n.ha.get(u.name)),
                                {},
                                { name: u.name, encode: c }
                              )),
                        (e = u.stop + 1),
                        (u = i[++s]),
                        "(" === t[e]
                          ? (e++, o++, r.push(p), v.push(a(!1)))
                          : v.push(n.ma(p)),
                        (l = "");
                    else if ("`" === t[e])
                      h
                        ? ((h = !1), l.length && v.push(l))
                        : ((h = !0), g && v.push(g)),
                        (l = ""),
                        e++;
                    else if (o && "," === t[e] && !h)
                      g && v.push(g),
                        m.push(v),
                        (v = []),
                        "," === t[e + 1] && (m.push([""]), e++),
                        (l = ""),
                        e++;
                    else {
                      if (o && ")" === t[e] && !h) {
                        e++, o--;
                        var b = r.pop();
                        return g && v.push(g), m.push(v), n.ma(b, m);
                      }
                      (l += t[e]), e++;
                    }
                    e === t.length && l.length && v.push(l);
                  }
                  return n.fa
                    ? v.join("")
                    : Promise.all(v)
                        .then(function (t) {
                          return t.join("");
                        })
                        .catch(function (t) {
                          return d(t), "";
                        });
                })(this.la);
              }),
              (i.ma = function (t, i) {
                var n,
                  r = t.encode,
                  e = t.name;
                if (
                  (null != t.prioritized
                    ? (n = t.prioritized)
                    : this.fa && null != t.sync
                    ? (n = t.sync)
                    : this.fa
                    ? (Jt().error(
                        ia,
                        "ignoring async replacement key: ",
                        t.name
                      ),
                      (n = ""))
                    : (n = t.async || t.sync),
                  this.fa)
                ) {
                  var s = this.pa(n, e, i);
                  return r ? encodeURIComponent(s) : s;
                }
                return this.ba(n, e, i).then(function (t) {
                  return r ? encodeURIComponent(t) : t;
                });
              }),
              (i.ba = function (t, i, n) {
                var r,
                  e = this;
                try {
                  if ("function" == typeof t) {
                    var s = t;
                    r = n
                      ? this.ga(n).then(function (t) {
                          return s.apply(null, t);
                        })
                      : c(s);
                  } else r = Promise.resolve(t);
                  return r
                    .then(function (t) {
                      return e.ya(i, t, n), null == t ? "" : t;
                    })
                    .catch(function (t) {
                      return d(t), e.ya(i, "", n), Promise.resolve("");
                    });
                } catch (t) {
                  return d(t), this.ya(i, "", n), Promise.resolve("");
                }
              }),
              (i.ga = function (t) {
                return Promise.all(
                  t.map(function (t) {
                    return Promise.all(t).then(function (t) {
                      return t.join("");
                    });
                  })
                );
              }),
              (i.pa = function (t, i, n) {
                try {
                  var r,
                    e = t;
                  return (
                    "function" == typeof t && (e = t.apply(null, this.wa(n))),
                    e && "function" == typeof e.then
                      ? (Jt().error(ia, "ignoring async macro resolution"),
                        (r = ""))
                      : "string" == typeof e ||
                        "number" == typeof e ||
                        "boolean" == typeof e
                      ? (this.ya(i, e, n), (r = e.toString()))
                      : (this.ya(i, "", n), (r = "")),
                    r
                  );
                } catch (t) {
                  return d(t), this.ya(i, "", n), "";
                }
              }),
              (i.wa = function (t) {
                return t
                  ? t.map(function (t) {
                      return t.join("");
                    })
                  : t;
              }),
              (i.ya = function (t, i, n) {
                if (this.ca) {
                  var r = "";
                  if (n) {
                    var e = n
                      .filter(function (t) {
                        return "" !== t;
                      })
                      .join(",");
                    r = "(".concat(e, ")");
                  }
                  this.ca["".concat(t).concat(r)] = i || "";
                }
              }),
              t
            );
          })(),
          ra = {
            navigationStart: 1,
            redirectStart: 1,
            redirectEnd: 1,
            fetchStart: 1,
            domainLookupStart: 1,
            domainLookupEnd: 1,
            connectStart: 1,
            secureConnectionStart: 1,
            connectEnd: 1,
            requestStart: 1,
            responseStart: 1,
            responseEnd: 1,
            domLoading: 2,
            domInteractive: 2,
            domContentLoaded: 2,
            domComplete: 2,
            loadEventStart: 3,
            loadEventEnd: 4,
          };
        function ea(t, i, n) {
          var r,
            e = ra[i] || 3,
            s = n ? ra[n] || 3 : e,
            u = Math.max(e, s);
          if (1 === u) r = h();
          else if (2 === u) r = dn(t.document);
          else if (3 === u) r = Qe(t);
          else if (4 === u) {
            var o = cr(t);
            r = Qe(t).then(function () {
              return o.promise(1);
            });
          }
          return (
            Zt(r),
            r.then(function () {
              return sa(t, i, n);
            })
          );
        }
        function sa(t, i, n) {
          var r = t.performance && t.performance.timing;
          if (r && 0 != r.navigationStart) {
            var e = void 0 === n ? r[i] : r[n] - r[i];
            return !J(e) || e < 0 ? void 0 : e;
          }
        }
        function ua(t, i) {
          var n = t.performance && t.performance.navigation;
          if (n && void 0 !== n[i]) return n[i];
        }
        var oa = "UrlReplacements";
        function ha(t) {
          return function () {
            return new Date()[t]();
          };
        }
        function aa(t, i) {
          return function () {
            return t[i];
          };
        }
        function ca(t, i) {
          return i
            ? (ti(
                "ISOCountry" === i,
                "The value passed to AMP_GEO() is not valid name:" + i
              ),
              (t && t[i]) || "unknown")
            : (null == t ? void 0 : t.matchedISOCountryGroups.join(",")) ||
                "unknown";
        }
        var fa = (function (t) {
            U(n, t);
            var i = H(n);
            function n(t) {
              var n;
              return ((n = i.call(this, t)).Aa = null), (n.xa = {}), n;
            }
            var r = n.prototype;
            return (
              (r.Ea = function (t, i, n) {
                var r = this;
                return this.setBoth(
                  t,
                  function () {
                    return sa(r.ampdoc.win, i, n);
                  },
                  function () {
                    return ea(r.ampdoc.win, i, n);
                  }
                );
              }),
              (r.initialize = function () {
                var t = this,
                  i = this.ampdoc.win,
                  n = this.ampdoc.getHeadNode(),
                  r = pr(this.ampdoc);
                lr(this.ampdoc).then(function (i) {
                  t.Aa = i;
                }),
                  this.set("RANDOM", function () {
                    return Math.random();
                  });
                var e = Object.create(null);
                this.set("COUNTER", function (t) {
                  return (e[t] = 1 + (0 | e[t]));
                }),
                  this.set("CANONICAL_URL", function () {
                    return t.Oa().canonicalUrl;
                  }),
                  this.set("CANONICAL_HOST", function () {
                    return ds(t.Oa().canonicalUrl).host;
                  }),
                  this.set("CANONICAL_HOSTNAME", function () {
                    return ds(t.Oa().canonicalUrl).hostname;
                  }),
                  this.set("CANONICAL_PATH", function () {
                    return ds(t.Oa().canonicalUrl).pathname;
                  }),
                  this.setAsync("DOCUMENT_REFERRER", function () {
                    return dr(t.ampdoc).getReferrerUrl();
                  }),
                  this.setAsync("EXTERNAL_REFERRER", function () {
                    return dr(t.ampdoc)
                      .getReferrerUrl()
                      .then(function (t) {
                        return t
                          ? ds(Ts(t)).hostname === Hr.getHostname(i)
                            ? null
                            : t
                          : null;
                      });
                  }),
                  this.set("TITLE", function () {
                    var t = i.document;
                    return t.originalTitle || t.title;
                  }),
                  this.set("AMPDOC_URL", function () {
                    return xs(t.Ta(i.location.href));
                  }),
                  this.set("AMPDOC_HOST", function () {
                    var t = ds(i.location.href);
                    return t && t.host;
                  }),
                  this.set("AMPDOC_HOSTNAME", function () {
                    var t = ds(i.location.href);
                    return t && t.hostname;
                  });
                var s = function () {
                  var i = t.Oa();
                  return xs(t.Ta(i.sourceUrl));
                };
                this.setBoth(
                  "SOURCE_URL",
                  function () {
                    return s();
                  },
                  function () {
                    return Ah().then(function () {
                      return s();
                    });
                  }
                ),
                  this.set("SOURCE_HOST", function () {
                    return ds(t.Oa().sourceUrl).host;
                  }),
                  this.set("SOURCE_HOSTNAME", function () {
                    return ds(t.Oa().sourceUrl).hostname;
                  }),
                  this.set("SOURCE_PATH", function () {
                    return ds(t.Oa().sourceUrl).pathname;
                  }),
                  this.set("PAGE_VIEW_ID", function () {
                    return t.Oa().pageViewId;
                  }),
                  this.setAsync("PAGE_VIEW_ID_64", function () {
                    return t.Oa().pageViewId64;
                  }),
                  this.setBoth(
                    "QUERY_PARAM",
                    function (i) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "";
                      return t.Pa(i, n);
                    },
                    function (i) {
                      var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "";
                      return Ah().then(function () {
                        return t.Pa(i, n);
                      });
                    }
                  ),
                  this.set("FRAGMENT_PARAM", function (i) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                    return t.Ia(i, n);
                  });
                var u = null;
                this.setBoth(
                  "CLIENT_ID",
                  function (t) {
                    return u ? u[t] : null;
                  },
                  function (i, r, e, s) {
                    ti(
                      i,
                      "The first argument to CLIENT_ID, the fallback Cookie name, is required"
                    );
                    var o = h();
                    return (
                      r &&
                        (o = (function (t) {
                          return Gn(
                            t,
                            "userNotificationManager",
                            "amp-user-notification"
                          );
                        })(n).then(function (t) {
                          return t.get(r);
                        })),
                      Qn(t.ampdoc)
                        .then(function (t) {
                          return (
                            (s = "true" == s),
                            t.get(
                              {
                                scope: i,
                                createCookieIfNotPresent: !0,
                                cookieName: e || void 0,
                                disableBackup: s,
                              },
                              o
                            )
                          );
                        })
                        .then(function (t) {
                          return (
                            u || (u = Object.create(null)),
                            t &&
                              "_ga" == (e || i) &&
                              ("string" == typeof t
                                ? (t = t.replace(/^(GA1|1)\.[\d-]+\./, ""))
                                : Qt().error(
                                    oa,
                                    "non-string cid, what is it?",
                                    Object.keys(t)
                                  )),
                            (u[i] = t),
                            t
                          );
                        })
                    );
                  }
                ),
                  this.setAsync("VARIANT", function (i) {
                    return t.Sa(function (t) {
                      var n = t[i];
                      return (
                        ti(
                          void 0 !== n,
                          "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" +
                            i
                        ),
                        null === n ? "none" : n
                      );
                    }, "VARIANT");
                  }),
                  this.setAsync("VARIANTS", function () {
                    return t.Sa(function (t) {
                      var i = [];
                      for (var n in t) {
                        var r = t[n];
                        i.push(n + "." + (r || "none"));
                      }
                      return i.join("!");
                    }, "VARIANTS");
                  }),
                  this.setBoth(
                    "AMP_GEO",
                    function (i) {
                      return ca(t.Aa, i);
                    },
                    function (i) {
                      return t.Ma(function (t) {
                        return ca(t, i);
                      }, "AMP_GEO");
                    }
                  ),
                  this.set("TIMESTAMP", ha("getTime")),
                  this.set("TIMESTAMP_ISO", ha("toISOString")),
                  this.set("TIMEZONE", ha("getTimezoneOffset")),
                  this.set("SCROLL_HEIGHT", function () {
                    return r.getScrollHeight();
                  }),
                  this.set("SCROLL_WIDTH", function () {
                    return r.getScrollWidth();
                  }),
                  this.set("VIEWPORT_HEIGHT", function () {
                    return r.getHeight();
                  }),
                  this.set("VIEWPORT_WIDTH", function () {
                    return r.getWidth();
                  });
                var o = i.screen;
                this.set("SCREEN_WIDTH", aa(o, "width")),
                  this.set("SCREEN_HEIGHT", aa(o, "height")),
                  this.set("AVAILABLE_SCREEN_HEIGHT", aa(o, "availHeight")),
                  this.set("AVAILABLE_SCREEN_WIDTH", aa(o, "availWidth")),
                  this.set("SCREEN_COLOR_DEPTH", aa(o, "colorDepth")),
                  this.set("DOCUMENT_CHARSET", function () {
                    var t = i.document;
                    return t.characterSet || t.charset;
                  }),
                  this.set("BROWSER_LANGUAGE", function () {
                    var t = i.navigator;
                    return (
                      t.language ||
                      t.userLanguage ||
                      t.browserLanguage ||
                      ""
                    ).toLowerCase();
                  }),
                  this.set("USER_AGENT", function () {
                    return i.navigator.userAgent;
                  }),
                  this.setBoth(
                    "UACH",
                    function (i) {
                      var n;
                      return null !== (n = t.xa[i]) && void 0 !== n ? n : "";
                    },
                    function (n) {
                      return t.Ra(n, i);
                    }
                  ),
                  this.Ea(
                    "PAGE_LOAD_TIME",
                    "navigationStart",
                    "loadEventStart"
                  ),
                  this.Ea(
                    "DOMAIN_LOOKUP_TIME",
                    "domainLookupStart",
                    "domainLookupEnd"
                  ),
                  this.Ea("TCP_CONNECT_TIME", "connectStart", "connectEnd"),
                  this.Ea(
                    "SERVER_RESPONSE_TIME",
                    "requestStart",
                    "responseStart"
                  ),
                  this.Ea("PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd"),
                  this.Ea("REDIRECT_TIME", "navigationStart", "fetchStart"),
                  this.Ea(
                    "DOM_INTERACTIVE_TIME",
                    "navigationStart",
                    "domInteractive"
                  ),
                  this.Ea(
                    "CONTENT_LOAD_TIME",
                    "navigationStart",
                    "domContentLoadedEventStart"
                  ),
                  this.setAsync("ACCESS_READER_ID", function () {
                    return t._a(function (t) {
                      return t.getAccessReaderId();
                    }, "ACCESS_READER_ID");
                  }),
                  this.setAsync("AUTHDATA", function (i) {
                    return (
                      ti(
                        i,
                        "The first argument to AUTHDATA, the field, is required"
                      ),
                      t._a(function (t) {
                        return t.getAuthdataField(i);
                      }, "AUTHDATA")
                    );
                  }),
                  this.setAsync("VIEWER", function () {
                    return dr(t.ampdoc)
                      .getViewerOrigin()
                      .then(function (t) {
                        return null == t ? "" : t;
                      });
                  }),
                  this.setAsync("TOTAL_ENGAGED_TIME", function () {
                    return Wn(n).then(function (t) {
                      return t.getTotalEngagedTime();
                    });
                  }),
                  this.setAsync("INCREMENTAL_ENGAGED_TIME", function (t, i) {
                    return Wn(n).then(function (n) {
                      return n.getIncrementalEngagedTime(t, "false" !== i);
                    });
                  }),
                  this.set("NAV_TIMING", function (t, n) {
                    return (
                      ti(
                        t,
                        "The first argument to NAV_TIMING, the start attribute name, is required"
                      ),
                      sa(i, t, n)
                    );
                  }),
                  this.setAsync("NAV_TIMING", function (t, n) {
                    return (
                      ti(
                        t,
                        "The first argument to NAV_TIMING, the start attribute name, is required"
                      ),
                      ea(i, t, n)
                    );
                  }),
                  this.set("NAV_TYPE", function () {
                    return ua(i, "type");
                  }),
                  this.set("NAV_REDIRECT_COUNT", function () {
                    return ua(i, "redirectCount");
                  }),
                  this.set("AMP_VERSION", function () {
                    return "2308242321000";
                  }),
                  this.set("BACKGROUND_STATE", function () {
                    return t.ampdoc.isVisible() ? "0" : "1";
                  }),
                  this.setAsync("VIDEO_STATE", function (i, n) {
                    return ((r = t.ampdoc),
                    On(r, "video-manager")).getVideoStateProperty(i, n);
                    var r;
                  }),
                  this.setAsync("AMP_STATE", function (i) {
                    var n = t.ampdoc.getRootNode(),
                      r = n.documentElement || n;
                    return Xn(r).then(function (t) {
                      return (t && t.getStateValue(i)) || "";
                    });
                  });
              }),
              (r.Ta = function (t) {
                var i = this.Oa().replaceParams;
                return i
                  ? (function (t, i) {
                      for (
                        var n = yt(ds(t).search),
                          r = {},
                          e = Object.keys(i),
                          s = 0;
                        s < e.length;
                        s++
                      )
                        x(n, e[s]) || (r[e[s]] = i[e[s]]);
                      return bs(t, r);
                    })(Os(t), i)
                  : t;
              }),
              (r.Oa = function () {
                return tr(this.ampdoc);
              }),
              (r._a = function (t, i) {
                var n = this.ampdoc.getHeadNode();
                return Promise.all([Bn(n), qn(n)]).then(function (n) {
                  var r = n[0],
                    e = n[1],
                    s = r || e;
                  return s
                    ? r && e
                      ? t(e) || t(r)
                      : t(s)
                    : (Jt().error(
                        oa,
                        "Access or subsciptions service is not installed to access: ",
                        i
                      ),
                      null);
                });
              }),
              (r.Pa = function (t, i) {
                ti(
                  t,
                  "The first argument to QUERY_PARAM, the query string param is required"
                );
                var n = yt(ds(Os(this.ampdoc.win.location.href)).search),
                  r = this.Oa().replaceParams;
                return void 0 !== n[t] ? n[t] : r && void 0 !== r[t] ? r[t] : i;
              }),
              (r.Ia = function (t, i) {
                ti(
                  t,
                  "The first argument to FRAGMENT_PARAM, the fragment string param is required"
                ),
                  ti("string" == typeof t, "param should be a string");
                var n = wt(this.ampdoc.win);
                return void 0 === n[t] ? i : n[t];
              }),
              (r.Sa = function (t, i) {
                return ((n = this.ampdoc.getHeadNode()),
                Vn(n, "variant", "amp-experiment", !0))
                  .then(function (t) {
                    return (
                      ti(
                        t,
                        "To use variable %s, amp-experiment should be configured",
                        i
                      ),
                      t.getVariants()
                    );
                  })
                  .then(function (i) {
                    return t(i);
                  });
                var n;
              }),
              (r.Ma = function (t, i) {
                var n = this;
                return null !== this.Aa
                  ? t(this.Aa)
                  : lr(this.ampdoc.getHeadNode()).then(function (r) {
                      return (
                        ti(
                          r,
                          "To use variable %s, amp-geo should be configured",
                          i
                        ),
                        (n.Aa = r),
                        t(r)
                      );
                    });
              }),
              (r.Ra = function (t, i) {
                var n,
                  r,
                  e,
                  s = this;
                return t in this.xa
                  ? Promise.resolve(this.xa[t])
                  : (null === (n = i.navigator) ||
                    void 0 === n ||
                    null === (r = n.userAgentData) ||
                    void 0 === r ||
                    null === (e = r.getHighEntropyValues([t])) ||
                    void 0 === e
                      ? void 0
                      : e.then(function (i) {
                          var n =
                            "object" !== p(i[t]) ? i[t] : JSON.stringify(i[t]);
                          return (s.xa[t] = n), n;
                        })) || Promise.resolve("");
              }),
              n
            );
          })(
            (function () {
              function t(t) {
                (this.ampdoc = t),
                  (this.ka = Object.create(null)),
                  (this.Na = !1),
                  this.Ca();
              }
              var i = t.prototype;
              return (
                (i.we = function () {
                  this.initialize(), (this.Na = !0);
                }),
                (i.initialize = function () {}),
                (i.get = function (t) {
                  return this.Na || this.we(), this.ka[t];
                }),
                (i.set = function (t, i) {
                  return (
                    Zt(-1 == t.indexOf("RETURN")),
                    (this.ka[t] = this.ka[t] || {
                      sync: void 0,
                      async: void 0,
                    }),
                    (this.ka[t].sync = i),
                    this
                  );
                }),
                (i.setAsync = function (t, i) {
                  return (
                    Zt(-1 == t.indexOf("RETURN")),
                    (this.ka[t] = this.ka[t] || {
                      sync: void 0,
                      async: void 0,
                    }),
                    (this.ka[t].async = i),
                    this
                  );
                }),
                (i.setBoth = function (t, i, n) {
                  return this.set(t, i).setAsync(t, n);
                }),
                (i.getExpr = function (t, i) {
                  this.Na || this.we();
                  var n = D(D({}, this.ka), t);
                  return this.ja(Object.keys(n), i);
                }),
                (i.ja = function (t, i) {
                  var n = this;
                  if (
                    (this.Ca() &&
                      (t = t.filter(function (t) {
                        return n.Ca().includes(t);
                      })),
                    i &&
                      (t = t.filter(function (t) {
                        return i[t];
                      })),
                    0 === t.length)
                  )
                    return /_^/g;
                  t.sort(function (t, i) {
                    return i.length - t.length;
                  });
                  var r = t
                    .map(function (t) {
                      return "$" === t[0] ? "\\" + t : t;
                    })
                    .join("|");
                  return new RegExp("\\$?(" + r + ")", "g");
                }),
                (i.Ca = function () {
                  return this.Da
                    ? this.Da
                    : this.ampdoc.isSingleDoc() && Lu(this.ampdoc.getRootNode())
                    ? ((this.Da = [""]), this.Da)
                    : void 0;
                }),
                t
              );
            })()
          ),
          la = (function () {
            function t(t, i) {
              (this.ampdoc = t), (this.ha = i);
            }
            var i = t.prototype;
            return (
              (i.expandStringSync = function (t, i, n) {
                return new na(this.ha, i, void 0, !0, n, !0).expand(t);
              }),
              (i.expandStringAsync = function (t, i, n) {
                return new na(this.ha, i, void 0, void 0, n, !0).expand(t);
              }),
              (i.expandUrlSync = function (t, i, n) {
                return this.Ua(t, new na(this.ha, i, void 0, !0, n).expand(t));
              }),
              (i.expandUrlAsync = function (t, i, n, r) {
                var e = this;
                return new na(this.ha, i, void 0, void 0, n, r)
                  .expand(t)
                  .then(function (i) {
                    return e.Ua(t, i);
                  });
              }),
              (i.expandInputValueAsync = function (t) {
                return this.za(t, !1);
              }),
              (i.expandInputValueSync = function (t) {
                return this.za(t, !0);
              }),
              (i.za = function (t, i) {
                Zt(
                  "INPUT" == t.tagName &&
                    "hidden" == (t.getAttribute("type") || "").toLowerCase()
                );
                var n = this.La(t);
                if (!n) return i ? t.value : Promise.resolve(t.value);
                void 0 === t["amp-original-value"] &&
                  (t["amp-original-value"] = t.value);
                var r = new na(this.ha, void 0, void 0, i, n).expand(
                  t["amp-original-value"] || t.value
                );
                return i
                  ? (t.value = r)
                  : r.then(function (i) {
                      return (t.value = i), i;
                    });
              }),
              (i.La = function (t, i) {
                var n = t.getAttribute("data-amp-replace");
                if (n) {
                  var r = {};
                  return (
                    n
                      .trim()
                      .split(/\s+/)
                      .forEach(function (t) {
                        !i || x(i, t)
                          ? (r[t] = !0)
                          : Jt().warn(
                              "URL",
                              "Ignoring unsupported replacement",
                              t
                            );
                      }),
                    r
                  );
                }
              }),
              (i.mn = function (t) {
                var i = tr(this.ampdoc);
                if (
                  t.origin == ds(i.canonicalUrl).origin ||
                  t.origin == ds(i.sourceUrl).origin
                )
                  return !0;
                var n = this.ampdoc.getMetaByName(
                  "amp-link-variable-allowed-origin"
                );
                if (n)
                  for (var r = n.trim().split(/\s+/), e = 0; e < r.length; e++)
                    if (t.origin == ds(r[e]).origin) return !0;
                return !1;
              }),
              (i.maybeExpandLink = function (t, i) {
                Zt("A" == t.tagName);
                var n = t,
                  r = n.getAttribute("data-amp-addparams") || "",
                  e = this.La(n, {
                    CLIENT_ID: !0,
                    QUERY_PARAM: !0,
                    PAGE_VIEW_ID: !0,
                    PAGE_VIEW_ID_64: !0,
                    NAV_TIMING: !0,
                  });
                if (e || r || i) {
                  var s = n["amp-original-href"] || n.getAttribute("href"),
                    u = ds(s);
                  null == n["amp-original-href"] &&
                    (n["amp-original-href"] = s);
                  var o = this.mn(u);
                  return (
                    r && (s = bs(s, yt((r = o ? this.Ha(r, e) : r)))),
                    o
                      ? (i &&
                          ((e && e.QUERY_PARAM) ||
                            (i = this.expandUrlSync(i, void 0, {
                              QUERY_PARAM: !0,
                            })),
                          (s = bs(s, yt(i)))),
                        (s = this.Ha(s, e)),
                        (n.href = s))
                      : (e &&
                          Jt().warn(
                            "URL",
                            "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.",
                            s
                          ),
                        (n.href = s))
                  );
                }
              }),
              (i.Ha = function (t, i) {
                return i ? this.expandUrlSync(t, void 0, i) : t;
              }),
              (i.collectVars = function (t, i) {
                var n = Object.create(null);
                return new na(this.ha, i, n).expand(t).then(function () {
                  return n;
                });
              }),
              (i.collectDisallowedVarsSync = function (t) {
                var i = t.getAttribute("src"),
                  n = new na(this.ha).getMacroNames(i),
                  r = this.La(t);
                return r
                  ? n.filter(function (t) {
                      return !r[t];
                    })
                  : n;
              }),
              (i.Ua = function (t, i) {
                return ds(i, !0).protocol != ds(t, !0).protocol
                  ? (Jt().error(oa, "Illegal replacement of the protocol: ", t),
                    t)
                  : (ti(
                      Ps(i),
                      "The replacement url has invalid protocol: %s",
                      i
                    ),
                    i);
              }),
              (i.getVariableSource = function () {
                return this.ha;
              }),
              t
            );
          })(),
          va = "Viewer",
          da = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i,
          ma = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.jo = Ni(this.win)),
                (this.bu = !0),
                (this.Ga = !1),
                (this.Va = A()),
                (this.Fa = A()),
                (this.Ba = new Pr()),
                (this.qa = new Pr()),
                (this.$a = null),
                (this.Wa = null),
                (this.Ka = []),
                (this.Ya = A()),
                (this.Ja = A()),
                t.isSingleDoc() &&
                  Object.assign(this.Ja, yt(this.win.location.hash)),
                (this.bu = !parseInt(t.getParam("off"), 10)),
                Qt().fine(va, "- runtimeOn:", this.bu),
                (this.Ga = !(!parseInt(t.getParam("history"), 10) && !this.Ga)),
                Qt().fine(va, "- history:", this.Ga),
                Qt().fine(
                  va,
                  "- visibilityState:",
                  this.ampdoc.getVisibilityState()
                ),
                (this.Xa = null),
                (this.Qa = Es(ds(this.ampdoc.win.location.href)));
              var n = new a();
              (this.Za = n.resolve),
                (this.tc = this.ic(n.promise)),
                (this.Vo = null),
                (this.nc = null);
              var r = t.getParam("referrer");
              if (
                ((this.rc =
                  this.isEmbedded() && null != r && !1 !== this.ec()
                    ? r
                    : this.win.document.referrer),
                (this.sc = new Promise(function (n) {
                  i.isEmbedded() && null != t.getParam("referrer")
                    ? i.isTrustedViewer().then(function (r) {
                        r
                          ? n(t.getParam("referrer"))
                          : (n(i.win.document.referrer),
                            i.rc != i.win.document.referrer &&
                              (Qt().expectedError(
                                va,
                                "Untrusted viewer referrer override: " +
                                  i.rc +
                                  " at " +
                                  i.Wa
                              ),
                              (i.rc = i.win.document.referrer)));
                      })
                    : n(i.win.document.referrer);
                })),
                (this.oc = xs(this.win.location.href || "")),
                (this.uc = new Promise(function (n) {
                  var r = t.getParam("viewerUrl");
                  i.isEmbedded() && r
                    ? i.isTrustedViewer().then(function (t) {
                        t
                          ? (i.oc = Zt(r))
                          : Qt().expectedError(
                              va,
                              "Untrusted viewer url override: " +
                                r +
                                " at " +
                                i.Wa
                            ),
                          n(i.oc);
                      })
                    : n(i.oc);
                })),
                this.Ja.click)
              ) {
                var e = xs(this.win.location.href);
                e != this.win.location.href &&
                  this.win.history.replaceState &&
                  (this.win.location.originalHash ||
                    (this.win.location.originalHash = this.win.location.hash),
                  this.win.history.replaceState({}, "", e),
                  delete this.Ja.click,
                  Qt().fine(va, "replace fragment:" + this.win.location.href));
              }
              this.ampdoc.whenFirstVisible().then(function () {
                i.maybeUpdateFragmentForCct();
              }),
                this.ampdoc.isSingleDoc() && this.hc();
            }
            var i = t.prototype;
            return (
              (i.ic = function (t) {
                if (
                  !(
                    (this.jo &&
                      !this.win.__AMP_TEST_IFRAME &&
                      (this.ampdoc.getParam("origin") ||
                        this.ampdoc.getParam("visibilityState") ||
                        -1 != this.win.location.search.indexOf("amp_js_v"))) ||
                    this.isWebviewEmbedded() ||
                    this.isCctEmbedded()
                  ) &&
                  this.ampdoc.isSingleDoc()
                )
                  return null;
                var i = "initMessagingChannel timeout";
                return cr(this.win)
                  .timeoutPromise(2e4, t, i)
                  .catch(function (t) {
                    var n = pa(t);
                    throw (
                      (n &&
                        W(n.message, i) &&
                        (n = Qt().createExpectedError(n)),
                      js(n),
                      n)
                    );
                  });
              }),
              (i.getAmpDoc = function () {
                return this.ampdoc;
              }),
              (i.getParam = function (t) {
                return this.ampdoc.getParam(t);
              }),
              (i.hasCapability = function (t) {
                var i = this.ampdoc.getParam("cap");
                return !!i && -1 != i.split(",").indexOf(t);
              }),
              (i.isEmbedded = function () {
                return !!this.tc;
              }),
              (i.isWebviewEmbedded = function () {
                return !this.jo && "1" == this.ampdoc.getParam("webview");
              }),
              (i.isCctEmbedded = function () {
                if (null != this.Xa) return this.Xa;
                if (((this.Xa = !1), !this.jo)) {
                  var t = yt(this.win.location.search);
                  this.Xa =
                    "1" === t.amp_gsa && (t.amp_js_v || "").startsWith("a");
                }
                return this.Xa;
              }),
              (i.isProxyOrigin = function () {
                return this.Qa;
              }),
              (i.maybeUpdateFragmentForCct = function () {
                if (this.isCctEmbedded() && this.win.history.replaceState) {
                  var t = Ms(this.win.location.href),
                    i = tr(this.ampdoc).canonicalUrl,
                    n = Ms(i);
                  this.ac(t, n) &&
                    ((this.Ja.ampshare = i),
                    this.win.history.replaceState({}, "", "#" + ys(this.Ja)));
                }
              }),
              (i.ac = function (t, i) {
                var n = function (t) {
                  return t.split(".").length > 2 ? t.replace(da, "$1") : t;
                };
                return n(t) == n(i);
              }),
              (i.isRuntimeOn = function () {
                return this.bu;
              }),
              (i.toggleRuntime = function () {
                (this.bu = !this.bu),
                  Qt().fine(va, "Runtime state:", this.bu),
                  this.Ba.fire(this.bu);
              }),
              (i.onRuntimeState = function (t) {
                return this.Ba.add(t);
              }),
              (i.isOvertakeHistory = function () {
                return this.Ga;
              }),
              (i.getVisibilityState = function () {
                return this.ampdoc.getVisibilityState();
              }),
              (i.isVisible = function () {
                return this.ampdoc.isVisible();
              }),
              (i.hasBeenVisible = function () {
                return this.ampdoc.hasBeenVisible();
              }),
              (i.whenFirstVisible = function () {
                return this.ampdoc.whenFirstVisible();
              }),
              (i.whenNextVisible = function () {
                return this.ampdoc.whenNextVisible();
              }),
              (i.getFirstVisibleTime = function () {
                return this.ampdoc.getFirstVisibleTime();
              }),
              (i.getLastVisibleTime = function () {
                return this.ampdoc.getLastVisibleTime();
              }),
              (i.onVisibilityChanged = function (t) {
                return this.ampdoc.onVisibilityChanged(t);
              }),
              (i.cc = function (t) {
                var i;
                t &&
                  (Zt(
                    "prerender" === (i = t) ||
                      "preview" === i ||
                      "visible" === i ||
                      "hidden" === i ||
                      "paused" === i ||
                      "inactive" === i
                  ),
                  t === Ar &&
                    (t = null != this.ampdoc.getLastVisibleTime() ? Er : br),
                  this.ampdoc.overrideVisibilityState(t),
                  Qt().fine(
                    va,
                    "visibilitychange event:",
                    this.ampdoc.getVisibilityState()
                  ));
              }),
              (i.getResolvedViewerUrl = function () {
                return this.oc;
              }),
              (i.getViewerUrl = function () {
                return this.uc;
              }),
              (i.maybeGetMessagingOrigin = function () {
                return this.Wa;
              }),
              (i.getUnconfirmedReferrerUrl = function () {
                return this.rc;
              }),
              (i.getReferrerUrl = function () {
                return this.sc;
              }),
              (i.isTrustedViewer = function () {
                var t = this;
                if (!this.Vo) {
                  var i = this.ec();
                  this.Vo =
                    void 0 !== i
                      ? Promise.resolve(i)
                      : this.tc.then(function (i) {
                          return !!i && t.fc(i);
                        });
                }
                return this.Vo;
              }),
              (i.ec = function () {
                return (
                  !!this.isEmbedded() &&
                  (!this.win.location.ancestorOrigins ||
                  this.isWebviewEmbedded() ||
                  this.isCctEmbedded()
                    ? void 0
                    : this.win.location.ancestorOrigins.length > 0 &&
                      this.fc(this.win.location.ancestorOrigins[0]))
                );
              }),
              (i.getViewerOrigin = function () {
                var t;
                return (
                  this.nc ||
                    (this.isEmbedded()
                      ? this.win.location.ancestorOrigins &&
                        this.win.location.ancestorOrigins.length > 0 &&
                        (t = this.win.location.ancestorOrigins[0])
                      : (t = ""),
                    (this.nc =
                      void 0 !== t
                        ? Promise.resolve(t)
                        : cr(this.win)
                            .timeoutPromise(1e3, this.tc)
                            .catch(function () {
                              return "";
                            }))),
                  this.nc
                );
              }),
              (i.fc = function (t) {
                var i = ds(t),
                  n = i.protocol;
                return (
                  "x-thread:" == n ||
                  ("https:" == n &&
                    kt.some(function (t) {
                      return t.test(i.hostname);
                    }))
                );
              }),
              (i.onMessage = function (t, i) {
                var n = this.Va[t];
                n || ((n = new Pr()), (this.Va[t] = n));
                var r = n.add(i);
                return (
                  this.Ya[t] &&
                    (this.Ya[t].forEach(function (t) {
                      n.fire(t.data), t.deferred.resolve();
                    }),
                    (this.Ya[t] = [])),
                  r
                );
              }),
              (i.onMessageRespond = function (t, i) {
                var n = this;
                return (
                  (this.Fa[t] = i),
                  this.Ya[t] &&
                    (this.Ya[t].forEach(function (t) {
                      t.deferred.resolve(i(t.data));
                    }),
                    (this.Ya[t] = [])),
                  function () {
                    n.Fa[t] === i && delete n.Fa[t];
                  }
                );
              }),
              (i.receiveMessage = function (t, i, n) {
                if ("visibilitychange" == t) return this.cc(i.state), h();
                if ("broadcast" == t) return this.qa.fire(i), h();
                var r = this.Va[t],
                  e = this.Fa[t];
                if (!r && !e) {
                  if (
                    ((this.Ya[t] = this.Ya[t] || []), this.Ya[t].length >= 50)
                  )
                    return;
                  var s = new a();
                  return this.Ya[t].push({ data: i, deferred: s }), s.promise;
                }
                return r && r.fire(i), e ? e(i) : r ? h() : void 0;
              }),
              (i.setMessageDeliverer = function (t, i) {
                var n = this;
                if (this.$a)
                  throw new Error(
                    "message channel can only be initialized once"
                  );
                if (null == i)
                  throw new Error("message channel must have an origin");
                if (
                  (Qt().fine(
                    va,
                    "message channel established with origin: ",
                    i
                  ),
                  (this.$a = t),
                  (this.Wa = i),
                  this.Za(i),
                  this.Ka.length > 0)
                ) {
                  var r = this.Ka.slice(0);
                  (this.Ka = []),
                    r.forEach(function (t) {
                      var i = n.$a(t.eventType, t.data, t.awaitResponse);
                      t.awaitResponse && t.responseResolver(i);
                    });
                }
              }),
              (i.maybeGetMessageDeliverer = function () {
                return this.$a;
              }),
              (i.sendMessage = function (t, i) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                this.st(t, i, n, !1);
              }),
              (i.sendMessageAwaitResponse = function (t, i) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return this.st(t, i, n, !0);
              }),
              (i.st = function (t, i, n, r) {
                var e = this;
                if (this.$a)
                  return c(function () {
                    return e.$a(t, i, r);
                  });
                if (!this.tc) return r ? Promise.reject(pa()) : h();
                if (!n)
                  return this.tc.then(function () {
                    return e.$a(t, i, r);
                  });
                var s,
                  u = q(this.Ka, function (i) {
                    return i.eventType == t;
                  });
                if (-1 != u)
                  ((s = this.Ka.splice(u, 1)[0]).data = i),
                    (s.awaitResponse = s.awaitResponse || r);
                else {
                  var o = new a(),
                    f = o.promise,
                    l = o.resolve;
                  s = {
                    eventType: t,
                    data: i,
                    awaitResponse: r,
                    responsePromise: f,
                    responseResolver: l,
                  };
                }
                return this.Ka.push(s), s.responsePromise;
              }),
              (i.broadcast = function (t) {
                return this.tc
                  ? this.st("broadcast", t, !1, !1).then(
                      function () {
                        return !0;
                      },
                      function () {
                        return !1;
                      }
                    )
                  : Promise.resolve(!1);
              }),
              (i.onBroadcast = function (t) {
                return this.qa.add(t);
              }),
              (i.whenMessagingReady = function () {
                return this.tc;
              }),
              (i.replaceUrl = function (t) {
                if (
                  t &&
                  this.ampdoc.isSingleDoc() &&
                  this.win.history.replaceState
                )
                  try {
                    var i = ds(this.win.location.href),
                      n = ds(xs(t) + this.win.location.hash);
                    i.origin == n.origin &&
                      Ms(i) == Ms(n) &&
                      (this.win.history.replaceState({}, "", n.href),
                      (this.win.location.originalHref = i.href),
                      Qt().fine(va, "replace url:" + n.href));
                  } catch (t) {
                    Qt().error(va, "replaceUrl failed", t);
                  }
              }),
              (i.hc = function () {
                var t = this;
                if (this.ampdoc.getVisibilityState() != wr) {
                  var i = [],
                    n = function () {
                      return i.forEach(function (t) {
                        return t();
                      });
                    },
                    r = function () {
                      t.cc(wr),
                        n(),
                        Qt().expectedError(
                          va,
                          "Received user action in non-visible doc"
                        );
                    },
                    e = { capture: !0, passive: !0 };
                  i.push(
                    Ke(this.win, "keydown", r, e),
                    Ke(this.win, "touchstart", r, e),
                    Ke(this.win, "mousedown", r, e)
                  ),
                    this.whenFirstVisible().then(n);
                }
              }),
              t
            );
          })();
        function pa(t) {
          var i;
          return (
            t instanceof Error
              ? (((t = f(t)).message = "No messaging channel: " + t.message),
                (i = t))
              : (i = new Error("No messaging channel: " + t)),
            (i.message = it(i.message)),
            i
          );
        }
        function ga(t, i) {
          return function (n) {
            return t + (i - t) * n;
          };
        }
        function ba(t, i, n) {
          return et(i <= n), Math.min(Math.max(t, i), n);
        }
        var ya = (function () {
            function t() {}
            return (
              (t.solveYValueFromXValue = function (i, n, r, e, s, u, o, h, a) {
                return t.lc(t.vc(i, n, e, u, h), r, s, o, a);
              }),
              (t.vc = function (i, n, r, e, s) {
                var u = 1e-6,
                  o = (i - n) / (s - n);
                if (o <= 0) return 0;
                if (o >= 1) return 1;
                for (var h = 0, a = 1, c = 0, f = 0; f < 8; f++) {
                  c = t.dc(o, n, r, e, s);
                  var l = (t.dc(o + u, n, r, e, s) - c) / u;
                  if (Math.abs(c - i) < u) return o;
                  if (Math.abs(l) < u) break;
                  c < i ? (h = o) : (a = o), (o -= (c - i) / l);
                }
                for (var v = 0; Math.abs(c - i) > u && v < 8; v++)
                  c < i
                    ? ((h = o), (o = (o + a) / 2))
                    : ((a = o), (o = (o + h) / 2)),
                    (c = t.dc(o, n, r, e, s));
                return o;
              }),
              (t.dc = function (i, n, r, e, s) {
                if (0 == i) return n;
                if (1 == i) return s;
                var u = t.mc(n, r, i),
                  o = t.mc(r, e, i),
                  h = t.mc(e, s, i);
                return (u = t.mc(u, o, i)), (o = t.mc(o, h, i)), t.mc(u, o, i);
              }),
              (t.lc = function (i, n, r, e, s) {
                if (0 == i) return n;
                if (1 == i) return s;
                var u = t.mc(n, r, i),
                  o = t.mc(r, e, i),
                  h = t.mc(e, s, i);
                return (u = t.mc(u, o, i)), (o = t.mc(o, h, i)), t.mc(u, o, i);
              }),
              (t.mc = function (t, i, n) {
                return t + n * (i - t);
              }),
              t
            );
          })(),
          wa = {
            LINEAR: function (t) {
              return t;
            },
            EASE: function (t) {
              return ya.solveYValueFromXValue(
                t,
                0,
                0,
                0.25,
                0.1,
                0.25,
                1,
                1,
                1
              );
            },
            EASE_IN: function (t) {
              return ya.solveYValueFromXValue(t, 0, 0, 0.42, 0, 1, 1, 1, 1);
            },
            EASE_OUT: function (t) {
              return ya.solveYValueFromXValue(t, 0, 0, 0, 0, 0.58, 1, 1, 1);
            },
            EASE_IN_OUT: function (t) {
              return ya.solveYValueFromXValue(t, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
            },
          },
          Aa = {
            linear: wa.LINEAR,
            ease: wa.EASE,
            "ease-in": wa.EASE_IN,
            "ease-out": wa.EASE_OUT,
            "ease-in-out": wa.EASE_IN_OUT,
          };
        function xa(t) {
          if (!t) return null;
          if (Y(t)) {
            if (-1 != t.indexOf("cubic-bezier")) {
              var i = t.match(/cubic-bezier\((.+)\)/);
              if (i) {
                var n = i[1].split(",").map(parseFloat);
                if (4 == n.length) {
                  for (var r = 0; r < 4; r++) if (isNaN(n[r])) return null;
                  return (
                    (e = n[0]),
                    (s = n[1]),
                    (u = n[2]),
                    (o = n[3]),
                    function (t) {
                      return ya.solveYValueFromXValue(
                        t,
                        0,
                        0,
                        e,
                        s,
                        u,
                        o,
                        1,
                        1
                      );
                    }
                  );
                }
              }
              return null;
            }
            return Aa[t];
          }
          var e, s, u, o;
          return t;
        }
        var Ea = "Animation",
          Pa = function () {},
          Oa = (function () {
            function t(t, i) {
              (this.bc = t),
                (this.To = i || mr(self)),
                (this.gc = null),
                (this.yc = []);
            }
            t.animate = function (i, n, r, e) {
              return new t(i).setCurve(e).add(0, n, 1).start(r);
            };
            var i = t.prototype;
            return (
              (i.setCurve = function (t) {
                return t && (this.gc = xa(t)), this;
              }),
              (i.add = function (t, i, n, r) {
                return (
                  this.yc.push({
                    delay: t,
                    func: i,
                    duration: n,
                    curve: xa(r),
                  }),
                  this
                );
              }),
              (i.start = function (t) {
                return new Ia(this.To, this.bc, this.yc, this.gc, t);
              }),
              t
            );
          })(),
          Ia = (function () {
            function t(t, i, n, r, e) {
              (this.To = t), (this.bc = i), (this.yc = []);
              for (var s = 0; s < n.length; s++) {
                var u = n[s];
                this.yc.push({
                  delay: u.delay,
                  func: u.func,
                  duration: u.duration,
                  curve: u.curve || r,
                  started: !1,
                  completed: !1,
                });
              }
              (this.wc = e),
                (this.sa = Date.now()),
                (this.Ce = !0),
                (this.di = {});
              var o = new a();
              (this.Ac = o.promise),
                (this.hi = o.resolve),
                (this.xc = o.reject),
                (this.Ec = this.To.createAnimTask(this.bc, {
                  mutate: this.Oc.bind(this),
                })),
                this.To.canAnimate(this.bc)
                  ? this.Ec(this.di)
                  : (Qt().warn(Ea, "cannot animate"), this.Tc(!1, 0));
            }
            var i = t.prototype;
            return (
              (i.then = function (t, i) {
                return t || i ? this.Ac.then(t, i) : this.Ac;
              }),
              (i.thenAlways = function (t) {
                var i = t || Pa;
                return this.then(i, i);
              }),
              (i.halt = function (t) {
                this.Tc(!1, t || 0);
              }),
              (i.Tc = function (t, i) {
                if (this.Ce) {
                  if (((this.Ce = !1), 0 != i)) {
                    this.yc.length > 1 &&
                      this.yc.sort(function (t, i) {
                        return t.delay + t.duration - (i.delay + i.duration);
                      });
                    try {
                      if (i > 0)
                        for (var n = 0; n < this.yc.length; n++)
                          this.yc[n].func(1, !0);
                      else
                        for (var r = this.yc.length - 1; r >= 0; r--)
                          this.yc[r].func(0, !1);
                    } catch (i) {
                      Qt().error(Ea, "completion failed: " + i, i), (t = !1);
                    }
                  }
                  t ? this.hi() : this.xc();
                }
              }),
              (i.Oc = function (t) {
                if (this.Ce) {
                  for (
                    var i = Date.now(),
                      n = Math.min((i - this.sa) / this.wc, 1),
                      r = 0;
                    r < this.yc.length;
                    r++
                  ) {
                    var e = this.yc[r];
                    !e.started && n >= e.delay && (e.started = !0);
                  }
                  for (var s = 0; s < this.yc.length; s++) {
                    var u = this.yc[s];
                    u.started && !u.completed && this.Pc(u, n);
                  }
                  1 == n
                    ? this.Tc(!0, 0)
                    : this.To.canAnimate(this.bc)
                    ? this.Ec(this.di)
                    : (Qt().warn(Ea, "cancel animation"), this.Tc(!1, 0));
                }
              }),
              (i.Pc = function (t, i) {
                var n, r;
                if (t.duration > 0) {
                  if (
                    ((r = n = Math.min((i - t.delay) / t.duration, 1)),
                    t.curve && 1 != r)
                  )
                    try {
                      r = t.curve(n);
                    } catch (t) {
                      return (
                        Qt().error(Ea, "step curve failed: " + t, t),
                        void this.Tc(!1, 0)
                      );
                    }
                } else (n = 1), (r = 1);
                1 == n && (t.completed = !0);
                try {
                  t.func(r, t.completed);
                } catch (t) {
                  return (
                    Qt().error(Ea, "step mutate failed: " + t, t),
                    void this.Tc(!1, 0)
                  );
                }
              }),
              t
            );
          })();
        function Ta(t, i) {
          for (var n, r = i.lastElementChild; r; r = r.previousElementSibling)
            if (r.getBoundingClientRect().height > 0) {
              var e = Dr(t, r);
              if ("static" == e.position || "relative" == e.position) {
                n = e;
                break;
              }
            }
          return n ? parseInt(n.marginBottom, 10) : 0;
        }
        var Ma = (function () {
            function t(t) {
              var i = this;
              (this.win = t), (this.To = mr(t));
              var n = this.win.document,
                r = n.documentElement,
                e = r.className;
              r.classList.add("i-amphtml-ios-embed");
              var s = n.createElement("html");
              (this.Ic = s),
                (s.id = "i-amphtml-wrapper"),
                (s.className = e),
                (this.Sc = new Pr()),
                (this.Mc = new Pr()),
                (this.Rc = this._c.bind(this)),
                (this.kc = function () {
                  return i.Mc.fire();
                }),
                (this.Nc = 0),
                (this.Cc = !1),
                Ii(n, this.jc.bind(this)),
                vn(n).then(function () {
                  r.classList.add("i-amphtml-ios-overscroll");
                }),
                Qt().fine("Viewport", "initialized ios-embed-wrapper viewport");
            }
            var i = t.prototype;
            return (
              (i.ensureReadyForElements = function () {
                this.jc();
              }),
              (i.jc = function () {
                if (!this.Cc) {
                  this.Cc = !0;
                  var t = this.win.document,
                    i = t.body;
                  t.documentElement.appendChild(this.Ic),
                    this.Ic.appendChild(i),
                    Object.defineProperty(t, "body", {
                      get: function () {
                        return i;
                      },
                    }),
                    this._c();
                }
              }),
              (i.connect = function () {
                this.win.addEventListener("resize", this.kc),
                  this.Ic.addEventListener("scroll", this.Rc);
              }),
              (i.disconnect = function () {
                this.win.removeEventListener("resize", this.kc),
                  this.Ic.removeEventListener("scroll", this.Rc);
              }),
              (i.getBorderTop = function () {
                return 1;
              }),
              (i.requiresFixedLayerTransfer = function () {
                return (
                  !Ve(this.win, "ios-fixed-no-transfer") ||
                  parseFloat(ur(this.win).getIosVersionString()) < 12.2
                );
              }),
              (i.overrideGlobalScrollTo = function () {
                return !0;
              }),
              (i.supportsPositionFixed = function () {
                return !0;
              }),
              (i.onScroll = function (t) {
                this.Sc.add(t);
              }),
              (i.onResize = function (t) {
                this.Mc.add(t);
              }),
              (i.updatePaddingTop = function (t) {
                (this.Nc = t), Rr(this.Ic, { "padding-top": Nr(t) });
              }),
              (i.hideViewerHeader = function (t, i) {
                t || this.updatePaddingTop(0);
              }),
              (i.showViewerHeader = function (t, i) {
                t || this.updatePaddingTop(i);
              }),
              (i.disableScroll = function () {
                this.Ic.classList.add("i-amphtml-scroll-disabled");
              }),
              (i.resetScroll = function () {
                this.Ic.classList.remove("i-amphtml-scroll-disabled");
              }),
              (i.updateLightboxMode = function (t) {
                return h();
              }),
              (i.getSize = function () {
                return {
                  width: this.win.innerWidth,
                  height: this.win.innerHeight,
                };
              }),
              (i.getScrollTop = function () {
                return this.Ic.scrollTop;
              }),
              (i.getScrollLeft = function () {
                return 0;
              }),
              (i.getScrollWidth = function () {
                return this.Ic.scrollWidth;
              }),
              (i.getScrollHeight = function () {
                return this.Ic.scrollHeight;
              }),
              (i.getContentHeight = function () {
                var t = this.win.document.body,
                  i = t.getBoundingClientRect().height,
                  n = Ta(this.win, t),
                  r = Dr(this.win, t);
                return (
                  parseInt(r.marginTop, 10) +
                  this.Nc +
                  i +
                  n +
                  parseInt(r.marginBottom, 10)
                );
              }),
              (i.contentHeightChanged = function () {}),
              (i.getLayoutRect = function (t, i, n) {
                var r = t.getBoundingClientRect(),
                  e = null != n ? n : this.getScrollTop(),
                  s = null != i ? i : this.getScrollLeft();
                return zi(
                  Math.round(r.left + s),
                  Math.round(r.top + e),
                  Math.round(r.width),
                  Math.round(r.height)
                );
              }),
              (i.getRootClientRectAsync = function () {
                return Promise.resolve(null);
              }),
              (i.setScrollTop = function (t) {
                this.Ic.scrollTop = t || 1;
              }),
              (i._c = function (t) {
                0 == this.Ic.scrollTop &&
                  ((this.Ic.scrollTop = 1), t && t.preventDefault()),
                  t && this.Sc.fire();
              }),
              (i.getScrollingElement = function () {
                return this.Ic;
              }),
              (i.getScrollingElementScrollsLikeViewport = function () {
                return !1;
              }),
              t
            );
          })(),
          Sa = (function () {
            function t(t) {
              var i = this;
              (this.ampdoc = t),
                (this.win = t.win),
                (this.No = ur(this.win)),
                (this.Sc = new Pr()),
                (this.Mc = new Pr()),
                (this.Rc = this.Dc.bind(this)),
                (this.kc = function () {
                  return i.Mc.fire();
                }),
                Qt().fine("Viewport", "initialized natural viewport");
            }
            var i = t.prototype;
            return (
              (i.Dc = function () {
                this.Sc.fire();
              }),
              (i.connect = function () {
                this.win.addEventListener("scroll", this.Rc),
                  this.win.addEventListener("resize", this.kc);
              }),
              (i.disconnect = function () {
                this.win.removeEventListener("scroll", this.Rc),
                  this.win.removeEventListener("resize", this.kc);
              }),
              (i.ensureReadyForElements = function () {}),
              (i.getBorderTop = function () {
                return 0;
              }),
              (i.requiresFixedLayerTransfer = function () {
                return !1;
              }),
              (i.overrideGlobalScrollTo = function () {
                return !1;
              }),
              (i.supportsPositionFixed = function () {
                return !0;
              }),
              (i.onScroll = function (t) {
                this.Sc.add(t);
              }),
              (i.onResize = function (t) {
                this.Mc.add(t);
              }),
              (i.updatePaddingTop = function (t) {
                Rr(this.win.document.documentElement, { "padding-top": Nr(t) });
              }),
              (i.hideViewerHeader = function (t, i) {
                t || this.updatePaddingTop(0);
              }),
              (i.showViewerHeader = function (t, i) {
                t || this.updatePaddingTop(i);
              }),
              (i.disableScroll = function () {
                this.win.document.documentElement.classList.add(
                  "i-amphtml-scroll-disabled"
                );
              }),
              (i.resetScroll = function () {
                this.win.document.documentElement.classList.remove(
                  "i-amphtml-scroll-disabled"
                );
              }),
              (i.updateLightboxMode = function (t) {
                return h();
              }),
              (i.getSize = function () {
                var t = this.win.innerWidth,
                  i = this.win.innerHeight;
                if (t && i) return { width: t, height: i };
                var n = this.win.document.documentElement;
                return { width: n.clientWidth, height: n.clientHeight };
              }),
              (i.getScrollTop = function () {
                var t =
                    this.getScrollingElement().scrollTop ||
                    this.win.pageYOffset,
                  i = this.ampdoc.getRootNode().host;
                return i ? t - i.offsetTop : t;
              }),
              (i.getScrollLeft = function () {
                return 0;
              }),
              (i.getScrollWidth = function () {
                return this.getScrollingElement().scrollWidth;
              }),
              (i.getScrollHeight = function () {
                return this.getScrollingElement().scrollHeight;
              }),
              (i.getContentHeight = function () {
                var t = this.getScrollingElement(),
                  i = t.getBoundingClientRect(),
                  n = i.top + this.getScrollTop(),
                  r = ur(this.win).isSafari() ? Ta(this.win, t) : 0,
                  e = Dr(this.win, t);
                return (
                  n +
                  parseInt(e.marginTop, 10) +
                  i.height +
                  r +
                  parseInt(e.marginBottom, 10)
                );
              }),
              (i.contentHeightChanged = function () {}),
              (i.getLayoutRect = function (t, i, n) {
                var r = t.getBoundingClientRect(),
                  e = null != n ? n : this.getScrollTop(),
                  s = null != i ? i : this.getScrollLeft();
                return zi(
                  Math.round(r.left + s),
                  Math.round(r.top + e),
                  Math.round(r.width),
                  Math.round(r.height)
                );
              }),
              (i.getRootClientRectAsync = function () {
                return Promise.resolve(null);
              }),
              (i.setScrollTop = function (t) {
                this.getScrollingElement().scrollTop = t;
              }),
              (i.getScrollingElement = function () {
                var t = this.win.document;
                return t.scrollingElement
                  ? t.scrollingElement
                  : t.body && this.No.isWebKit()
                  ? t.body
                  : t.documentElement;
              }),
              (i.getScrollingElementScrollsLikeViewport = function () {
                return !0;
              }),
              t
            );
          })(),
          Ra = "Viewport";
        function _a(t, i, n) {
          return (function (t, i, n) {
            var r = parseInt(Dr(t, i)[n], 10);
            return isNaN(r) ? 0 : r;
          })(t, i === t.document.body ? t.document.documentElement : i, n);
        }
        function ka(t, i) {
          return _a(t, i, "scrollPaddingTop");
        }
        var Ca = (function () {
          function t(t, i, n) {
            var r = this,
              e = t.win;
            (this.ampdoc = t),
              (this.Uc = this.ampdoc.win.document),
              (this.Cs = i),
              (this.ss = n),
              (this.zc = null),
              (this.pr = null),
              (this.Lc = null),
              (this.Hc = !1),
              (this.Gc = null),
              (this.Nc = Number(n.getParam("paddingTop") || 0)),
              (this.Vc = 0),
              (this.Me = cr(e)),
              (this.To = mr(e)),
              (this.Fc = !1),
              (this.kn = null),
              (this.Bc = 0),
              (this.qc = new Pr()),
              (this.Sc = new Pr()),
              (this.Mc = new Pr()),
              (this.$c = void 0),
              (this.Wc = void 0),
              (this.Kc = null),
              this.ss.onMessage("viewport", this.Yc.bind(this)),
              this.ss.onMessage("scroll", this.Jc.bind(this)),
              this.ss.onMessage("disableScroll", this.Xc.bind(this)),
              this.ss.isEmbedded() && this.Cs.updatePaddingTop(this.Nc),
              this.Cs.onScroll(this.Qc.bind(this)),
              this.Cs.onResize(this.Zc.bind(this)),
              this.onScroll(this.tf.bind(this)),
              (this.Eu = !1),
              this.ampdoc.onVisibilityChanged(this.if.bind(this)),
              this.if();
            var s = this.Uc.documentElement;
            if (
              (t.isSingleDoc() && s.classList.add("i-amphtml-singledoc"),
              n.isEmbedded()
                ? s.classList.add("i-amphtml-embedded")
                : s.classList.add("i-amphtml-standalone"),
              Ni(e) && s.classList.add("i-amphtml-iframed"),
              "1" === n.getParam("webview") &&
                s.classList.add("i-amphtml-webview"),
              Ni(e) &&
                "scrollRestoration" in e.history &&
                (e.history.scrollRestoration = "manual"),
              this.Cs.overrideGlobalScrollTo())
            )
              try {
                Object.defineProperty(e, "scrollTo", {
                  value: function (t, i) {
                    return r.setScrollTop(i);
                  },
                }),
                  ["pageYOffset", "scrollY"].forEach(function (t) {
                    Object.defineProperty(e, t, {
                      get: function () {
                        return r.getScrollTop();
                      },
                    });
                  });
              } catch (t) {}
            ur(e).isIos() &&
              Ni(e) &&
              this.ampdoc.isSingleDoc() &&
              this.ampdoc.whenReady().then(function () {
                e.scrollTo(-0.1, 0);
              });
          }
          var i = t.prototype;
          return (
            (i.dispose = function () {
              this.Cs.disconnect();
            }),
            (i.ensureReadyForElements = function () {
              this.Cs.ensureReadyForElements();
            }),
            (i.if = function () {
              var t = this.ampdoc.isVisible();
              t != this.Eu &&
                ((this.Eu = t),
                t
                  ? (this.Cs.connect(),
                    this.pr && this.Zc(),
                    this.Lc && ((this.Lc = null), this.getScrollTop()))
                  : this.Cs.disconnect());
            }),
            (i.getPaddingTop = function () {
              return this.Nc;
            }),
            (i.getScrollTop = function () {
              return (
                null == this.Lc && (this.Lc = this.Cs.getScrollTop()), this.Lc
              );
            }),
            (i.getScrollLeft = function () {
              return (
                null == this.Gc && (this.Gc = this.Cs.getScrollLeft()), this.Gc
              );
            }),
            (i.setScrollTop = function (t) {
              (this.Lc = null), this.Cs.setScrollTop(t);
            }),
            (i.updatePaddingBottom = function (t) {
              this.ampdoc.waitForBodyOpen().then(function (i) {
                _r(i, "borderBottom", "".concat(t, "px solid transparent"));
              });
            }),
            (i.getSize = function () {
              if (this.pr) return this.pr;
              if (
                ((this.pr = this.Cs.getSize()),
                0 == this.pr.width || 0 == this.pr.height)
              ) {
                var t = this.ampdoc.getVisibilityState();
                (t != br && t != wr) ||
                  (Math.random() < 0.01 &&
                    Qt().error(Ra, "viewport has zero dimensions"));
              }
              return this.pr;
            }),
            (i.getHeight = function () {
              return this.getSize().height;
            }),
            (i.getWidth = function () {
              return this.getSize().width;
            }),
            (i.getScrollWidth = function () {
              return this.Cs.getScrollWidth();
            }),
            (i.getScrollHeight = function () {
              return this.Cs.getScrollHeight();
            }),
            (i.getContentHeight = function () {
              return this.Cs.getContentHeight();
            }),
            (i.contentHeightChanged = function () {
              this.Cs.contentHeightChanged();
            }),
            (i.getRect = function () {
              if (null == this.zc) {
                var t = this.getScrollTop(),
                  i = this.getScrollLeft(),
                  n = this.getSize();
                this.zc = zi(i, t, n.width, n.height);
              }
              return this.zc;
            }),
            (i.getLayoutRect = function (t) {
              var i = this.getScrollLeft(),
                n = this.getScrollTop(),
                r = Rn(t, this.ampdoc.win);
              if (r) {
                var e = this.Cs.getLayoutRect(t, 0, 0),
                  s = this.Cs.getLayoutRect(r, i, n);
                return zi(
                  Math.round(e.left + s.left),
                  Math.round(e.top + s.top),
                  Math.round(e.width),
                  Math.round(e.height)
                );
              }
              return this.Cs.getLayoutRect(t, i, n);
            }),
            (i.getClientRectAsync = function (t) {
              var i = this.To.measurePromise(function () {
                  return t.getBoundingClientRect();
                }),
                n = this.Cs.getRootClientRectAsync(),
                r = Rn(t, this.ampdoc.win);
              return (
                r &&
                  (n = this.To.measurePromise(function () {
                    return r.getBoundingClientRect();
                  })),
                Promise.all([i, n]).then(function (t) {
                  var i,
                    n = t[0],
                    r = t[1];
                  return r
                    ? Gi(n, r.left, r.top)
                    : ((i = n),
                      zi(
                        Number(i.left),
                        Number(i.top),
                        Number(i.width),
                        Number(i.height)
                      ));
                })
              );
            }),
            (i.supportsPositionFixed = function () {
              return this.Cs.supportsPositionFixed();
            }),
            (i.isDeclaredFixed = function (t) {
              return !!this.Kc && this.Kc.isDeclaredFixed(t);
            }),
            (i.scrollIntoView = function (t) {
              var i = this;
              return this.nf(t).then(function (n) {
                return i.rf(t, n);
              });
            }),
            (i.rf = function (t, i) {
              var n = this,
                r = this.Cs.getLayoutRect(t).top,
                e = ka(this.ampdoc.win, i);
              c(function () {
                return Math.max(0, r - n.Nc - e);
              }).then(function (t) {
                return n.ef(i, t);
              });
            }),
            (i.animateScrollIntoView = function (t) {
              var i = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "top",
                r = arguments.length > 2 ? arguments[2] : void 0,
                e = arguments.length > 3 ? arguments[3] : void 0;
              return (
                Zt(!e || void 0 !== r),
                this.nf(t).then(function (s) {
                  return i.animateScrollWithinParent(t, s, n, r, e);
                })
              );
            }),
            (i.animateScrollWithinParent = function (t, i, n, r, e) {
              var s = this;
              Zt(!e || void 0 !== r);
              var u = this.Cs.getLayoutRect(t),
                o = (this.sf(i) ? this.getSize() : this.getLayoutRect(i))
                  .height,
                h = this.ampdoc.win,
                a = ka(h, i),
                c = (function (t, i) {
                  return _a(t, i, "scrollPaddingBottom");
                })(h, i),
                f = -a;
              return (
                "bottom" === n
                  ? (f = -o + c + u.height)
                  : "center" === n && (f = -(o - a - c) / 2 + u.height / 2),
                this.uf(i).then(function (t) {
                  var n = u.top - s.Nc + f,
                    o = Math.max(0, n);
                  if (o != t) return s.hf(i, t, o, r, e);
                })
              );
            }),
            (i.hf = function (t, i, n, r) {
              var e = this,
                s =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : "ease-in",
                u = void 0 !== r ? r : Na(i, n),
                o = ga(i, n);
              return Oa.animate(
                t,
                function (i) {
                  e.ef(t, o(i));
                },
                u,
                s
              ).thenAlways(function () {
                e.ef(t, n);
              });
            }),
            (i.nf = function (t) {
              var i = this;
              return this.To.measurePromise(function () {
                return (
                  yi(t, ".i-amphtml-scrollable") || i.Cs.getScrollingElement()
                );
              });
            }),
            (i.ef = function (t, i) {
              this.sf(t)
                ? this.Cs.setScrollTop(i)
                : this.To.mutate(function () {
                    t.scrollTop = i;
                  });
            }),
            (i.uf = function (t) {
              var i = this;
              return this.sf(t)
                ? c(function () {
                    return i.getScrollTop();
                  })
                : this.To.measurePromise(function () {
                    return t.scrollTop;
                  });
            }),
            (i.sf = function (t) {
              return t == this.Cs.getScrollingElement();
            }),
            (i.getScrollingElement = function () {
              return this.kn
                ? this.kn
                : (this.kn = this.Cs.getScrollingElement());
            }),
            (i.onChanged = function (t) {
              return this.qc.add(t);
            }),
            (i.onScroll = function (t) {
              return this.Sc.add(t);
            }),
            (i.onResize = function (t) {
              return this.Mc.add(t);
            }),
            (i.enterLightboxMode = function (t, i) {
              return (
                this.ss.sendMessage("requestFullOverlay", {}, !0),
                this.enterOverlayMode(),
                this.Kc && this.Kc.enterLightbox(t, i),
                t && this.maybeEnterFieLightboxMode(t),
                this.Cs.updateLightboxMode(!0)
              );
            }),
            (i.leaveLightboxMode = function (t) {
              return (
                this.ss.sendMessage("cancelFullOverlay", {}, !0),
                this.Kc && this.Kc.leaveLightbox(),
                this.leaveOverlayMode(),
                t && this.maybeLeaveFieLightboxMode(t),
                this.Cs.updateLightboxMode(!1)
              );
            }),
            (i.isLightboxExperimentOn = function () {
              return Ve(this.ampdoc.win, "amp-lightbox-a4a-proto");
            }),
            (i.maybeEnterFieLightboxMode = function (t) {
              var i = this.af(t);
              i &&
                (Zt(this.isLightboxExperimentOn()), i.enterFullOverlayMode());
            }),
            (i.maybeLeaveFieLightboxMode = function (t) {
              var i = this.af(t);
              i && Zt(i).leaveFullOverlayMode();
            }),
            (i.af = function (t) {
              var i = Rn(t, this.ampdoc.win);
              return i && i.__AMP_EMBED__;
            }),
            (i.enterOverlayMode = function () {
              this.disableTouchZoom(), this.disableScroll();
            }),
            (i.leaveOverlayMode = function () {
              this.resetScroll(), this.restoreOriginalTouchZoom();
            }),
            (i.disableScroll = function () {
              var t,
                i = this,
                n = this.ampdoc.win,
                r = n.document.documentElement;
              this.To.measure(function () {
                var e = Dr(n, r).marginRight,
                  s = (function (t) {
                    var i = t.document.documentElement;
                    return t.innerWidth - i.clientWidth;
                  })(i.ampdoc.win);
                t = parseInt(e, 10) + s;
              }),
                this.To.mutate(function () {
                  _r(r, "margin-right", t, "px"), i.Cs.disableScroll();
                });
            }),
            (i.resetScroll = function () {
              var t = this,
                i = this.ampdoc.win.document.documentElement;
              this.To.mutate(function () {
                _r(i, "margin-right", ""), t.Cs.resetScroll();
              });
            }),
            (i.resetTouchZoom = function () {
              var t = this,
                i = this.ampdoc.win.innerHeight,
                n = this.Uc.documentElement.clientHeight;
              (i && n && i === n) ||
                (this.disableTouchZoom() &&
                  this.Me.delay(function () {
                    t.restoreOriginalTouchZoom();
                  }, 50));
            }),
            (i.disableTouchZoom = function () {
              var t = this.cf();
              if (!t) return !1;
              var i = (function (t, i) {
                var n = (function (t) {
                    var i = Object.create(null);
                    if (!t) return i;
                    for (var n = t.split(/,|;/), r = 0; r < n.length; r++) {
                      var e = n[r].split("="),
                        s = e[0].trim(),
                        u = e[1];
                      (u = (u || "").trim()), s && (i[s] = u);
                    }
                    return i;
                  })(t),
                  r = !1;
                for (var e in i)
                  n[e] !== i[e] &&
                    ((r = !0), void 0 !== i[e] ? (n[e] = i[e]) : delete n[e]);
                return r
                  ? (function (t) {
                      var i = "";
                      for (var n in t)
                        i.length > 0 && (i += ","),
                          t[n] ? (i += n + "=" + t[n]) : (i += n);
                      return i;
                    })(n)
                  : t;
              })(t.content, { "maximum-scale": "1", "user-scalable": "no" });
              return this.ff(i);
            }),
            (i.restoreOriginalTouchZoom = function () {
              return void 0 !== this.Wc && this.ff(this.Wc);
            }),
            (i.updateFixedLayer = function () {
              return this.Kc ? this.Kc.update() : h();
            }),
            (i.addToFixedLayer = function (t, i) {
              return this.Kc ? this.Kc.addElement(t, i) : h();
            }),
            (i.removeFromFixedLayer = function (t) {
              this.Kc && this.Kc.removeElement(t);
            }),
            (i.createFixedLayer = function (t) {
              var i = this;
              (this.Kc = new t(
                this.ampdoc,
                this.To,
                this.Cs.getBorderTop(),
                this.Nc,
                this.Cs.requiresFixedLayerTransfer()
              )),
                this.ampdoc.whenReady().then(function () {
                  return i.Kc.setup();
                });
            }),
            (i.ff = function (t) {
              var i = this.cf();
              return !(
                !i ||
                i.content == t ||
                (Qt().fine(Ra, "changed viewport meta to:", t),
                (i.content = t),
                0)
              );
            }),
            (i.cf = function () {
              return Ni(this.ampdoc.win)
                ? null
                : (void 0 === this.$c &&
                    ((this.$c = this.Uc.querySelector("meta[name=viewport]")),
                    this.$c && (this.Wc = this.$c.content)),
                  this.$c);
            }),
            (i.Jc = function (t) {
              var i = t.scrollTop;
              this.setScrollTop(i);
            }),
            (i.Yc = function (t) {
              var i = this,
                n = t.paddingTop,
                r = t.duration || 0,
                e = t.curve,
                s = t.transient;
              if (
                null != n &&
                n != this.Nc &&
                ((this.Vc = this.Nc), (this.Nc = n), this.Kc)
              ) {
                var u = this.Kc.animateFixedElements(this.Nc, this.Vc, r, e, s);
                n < this.Vc
                  ? this.Cs.hideViewerHeader(s, this.Vc)
                  : u.then(function () {
                      i.Cs.showViewerHeader(s, n);
                    });
              }
            }),
            (i.Xc = function (t) {
              t ? this.disableScroll() : this.resetScroll();
            }),
            (i.lf = function (t, i) {
              var n = this.getSize(),
                r = this.getScrollTop(),
                e = this.getScrollLeft();
              Qt().fine(
                Ra,
                "changed event:",
                "relayoutAll=",
                t,
                "top=",
                r,
                "left=",
                e,
                "bottom=",
                r + n.height,
                "velocity=",
                i
              ),
                this.qc.fire({
                  relayoutAll: t,
                  top: r,
                  left: e,
                  width: n.width,
                  height: n.height,
                  velocity: i,
                });
            }),
            (i.Qc = function () {
              var t = this;
              (this.zc = null), this.Bc++, (this.Gc = this.Cs.getScrollLeft());
              var i = this.Cs.getScrollTop();
              if (!(i < 0)) {
                if (((this.Lc = i), !this.Fc)) {
                  this.Fc = !0;
                  var n = Date.now();
                  this.Me.delay(function () {
                    t.To.measure(function () {
                      t.Ku(n, i);
                    });
                  }, 36);
                }
                this.Sc.fire();
              }
            }),
            (i.Ku = function (t, i) {
              var n = this;
              this.Lc = this.Cs.getScrollTop();
              var r = this.Lc,
                e = Date.now(),
                s = 0;
              e != t && (s = (r - i) / (e - t)),
                Qt().fine(Ra, "scroll: scrollTop=" + r + "; velocity=" + s),
                Math.abs(s) < 0.03
                  ? (this.lf(!1, s), (this.Fc = !1))
                  : this.Me.delay(function () {
                      return n.To.measure(n.Ku.bind(n, e, r));
                    }, 20);
            }),
            (i.tf = function () {
              var t = this;
              this.Hc ||
                ((this.Hc = !0),
                this.To.measure(function () {
                  (t.Hc = !1),
                    t.ss.sendMessage(
                      "scroll",
                      { scrollTop: t.getScrollTop() },
                      !0
                    );
                }));
            }),
            (i.Zc = function () {
              var t = this;
              this.zc = null;
              var i = this.pr;
              this.pr = null;
              var n = this.getSize();
              this.updateFixedLayer().then(function () {
                var r = !i || i.width != n.width;
                t.lf(r, 0),
                  (r || i.height != n.height) &&
                    t.Mc.fire({
                      relayoutAll: r,
                      width: n.width,
                      height: n.height,
                    });
              });
            }),
            t
          );
        })();
        function Na(t, i) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 500;
          return Math.floor(ba(0.65 * Math.abs(t - i), 0, n));
        }
        function Da(t) {
          var i,
            n = dr(t),
            r = t.win;
          return (
            (i =
              t.isSingleDoc() &&
              (function (t, i) {
                return ur(t).isIos() &&
                  Ni(t) &&
                  i.isEmbedded() &&
                  !i.hasCapability("iframeScroll")
                  ? ja.NATURAL_IOS_EMBED
                  : ja.NATURAL;
              })(r, n) == ja.NATURAL_IOS_EMBED
                ? new Ma(r)
                : new Sa(t)),
            new Ca(t, i, n)
          );
        }
        var ja = { NATURAL: "natural", NATURAL_IOS_EMBED: "natural-ios-embed" },
          Ua = (function () {
            function t(t) {
              (this.win = t),
                (this.vf = Kn(this.win)),
                (this.df = this.mf()),
                (this.Qn = []),
                (this.pf = []),
                (this.do = []),
                (this.bf = []),
                (this.ke = !1),
                (this.gf = null),
                (this.yf = null),
                (this.wf = this.Af.bind(this)),
                (this.xf = new ju(this.win, this.wf, 16)),
                (this.Ef = new ju(this.win, this.wf, 40)),
                (this.Of = this.Tf.bind(this)),
                this.vf.isSingleDoc()
                  ? this.vf.getSingleDoc().onVisibilityChanged(this.Of)
                  : Ur(this.win.document, this.Of);
            }
            var i = t.prototype;
            return (
              (i.dispose = function () {
                Lr(this.win.document, this.Of);
              }),
              (i.Tf = function () {
                this.ke && this.Pf();
              }),
              (i.run = function (t, i) {
                this.Qn.push(t), this.do.push(i || void 0), this.Tr();
              }),
              (i.runPromise = function (t, i) {
                if ((this.run(t, i), this.gf)) return this.gf;
                var n = new a();
                return (this.yf = n.resolve), (this.gf = n.promise);
              }),
              (i.createTask = function (t) {
                var i = this;
                return function (n) {
                  i.run(t, n);
                };
              }),
              (i.mutate = function (t) {
                this.run({ measure: void 0, mutate: t });
              }),
              (i.mutatePromise = function (t) {
                return this.runPromise({ measure: void 0, mutate: t });
              }),
              (i.measure = function (t) {
                this.run({ measure: t, mutate: void 0 });
              }),
              (i.measurePromise = function (t) {
                var i = this;
                return new Promise(function (n) {
                  i.measure(function () {
                    n(t());
                  });
                });
              }),
              (i.canAnimate = function (t) {
                return this.If(Zt(t));
              }),
              (i.If = function (t) {
                if (jr(this.win.document) != wr) return !1;
                if (this.vf.isSingleDoc())
                  return this.vf.getSingleDoc().isVisible();
                if (t) {
                  var i = this.vf.getAmpDocIfAvailable(t);
                  return !i || i.isVisible();
                }
                return !0;
              }),
              (i.runAnim = function (t, i, n) {
                return this.If(t)
                  ? (this.run(i, n), !0)
                  : (Qt().warn(
                      "VSYNC",
                      "Did not schedule a vsync request, because document was invisible"
                    ),
                    !1);
              }),
              (i.createAnimTask = function (t, i) {
                var n = this;
                return function (r) {
                  return n.runAnim(t, i, r);
                };
              }),
              (i.runAnimMutateSeries = function (t, i, n) {
                var r = this;
                return this.If(t)
                  ? new Promise(function (e, s) {
                      var u = Date.now(),
                        o = 0,
                        h = r.createAnimTask(t, {
                          mutate: function (t) {
                            var r = Date.now() - u;
                            i(r, r - o, t)
                              ? n && r > n
                                ? s(new Error("timeout"))
                                : ((o = r), h(t))
                              : e();
                          },
                        });
                      h({});
                    })
                  : Promise.reject(Us());
              }),
              (i.Tr = function () {
                this.ke || ((this.ke = !0), this.Pf());
              }),
              (i.Pf = function () {
                this.If()
                  ? (this.df(this.wf), this.Ef.schedule())
                  : this.xf.schedule();
              }),
              (i.Af = function () {
                this.Ef.cancel(), (this.ke = !1);
                var t = this.yf,
                  i = this.do,
                  n = this.Qn;
                (this.yf = null),
                  (this.gf = null),
                  (this.Qn = this.pf),
                  (this.do = this.bf);
                for (var r = 0; r < n.length; r++)
                  n[r].measure &&
                    (La(n[r].measure, i[r]) || (n[r].mutate = void 0));
                for (var e = 0; e < n.length; e++)
                  n[e].mutate && La(n[e].mutate, i[e]);
                (this.pf = n),
                  (this.bf = i),
                  (this.pf.length = 0),
                  (this.bf.length = 0),
                  t && t();
              }),
              (i.mf = function () {
                var t = this,
                  i =
                    this.win.requestAnimationFrame ||
                    this.win.webkitRequestAnimationFrame;
                if (i) return i.bind(this.win);
                var n = 0;
                return function (i) {
                  var r = Date.now(),
                    e = Math.max(0, 16 - (r - n));
                  (n = r + e), t.win.setTimeout(i, e);
                };
              }),
              t
            );
          })();
        function La(t, i) {
          Zt(t);
          try {
            void 0 !== t(i) &&
              Qt().error(
                "VSYNC",
                "callback returned a value but vsync cannot propogate it: %s",
                t.toString()
              );
          } catch (t) {
            return d(t), !1;
          }
          return !0;
        }
        function za(t) {
          if (!t.defaultPrevented) {
            var i = t.target;
            if (i && "FORM" == i.tagName) {
              (i.classList.contains("i-amphtml-form")
                ? !i.hasAttribute("amp-novalidate")
                : !i.hasAttribute("novalidate")) &&
                i.checkValidity &&
                !i.checkValidity() &&
                t.preventDefault();
              for (var n = i.elements, r = 0; r < n.length; r++)
                ti(
                  !n[r].name || n[r].name != ls,
                  "Illegal input name, %s found: %s",
                  ls,
                  n[r]
                );
              var e = i.getAttribute("action"),
                s = i.getAttribute("action-xhr"),
                u = (i.getAttribute("method") || "GET").toUpperCase();
              s &&
                (As(s, i, "action-xhr"),
                ti(!Es(s), "form action-xhr should not be on AMP CDN: %s", i),
                _s(s)),
                e &&
                  (As(e, i, "action"),
                  ti(!Es(e), "form action should not be on AMP CDN: %s", i),
                  _s(e)),
                "GET" == u
                  ? ti(
                      s || e,
                      "form action-xhr or action attribute is required for method=GET: %s",
                      i
                    )
                  : "POST" == u &&
                    (e &&
                      Jt().error(
                        "form",
                        "action attribute is invalid for method=POST: %s",
                        i
                      ),
                    s ||
                      (t.preventDefault(),
                      ti(
                        !1,
                        "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s",
                        i
                      )));
              var o = i.getAttribute("target");
              o
                ? ti(
                    "_blank" == o || "_top" == o,
                    "form target=%s is invalid can only be _blank or _top: %s",
                    o,
                    i
                  )
                : i.setAttribute("target", "_top"),
                s &&
                  (t.preventDefault(),
                  t.stopImmediatePropagation(),
                  $n(i).execute(i, "submit", null, i, i, t, 3));
            }
          }
        }
        var Ha = "Input",
          Ga = (function () {
            function t(t) {
              (this.win = t),
                (this.Sf = this.Mf.bind(this)),
                (this.Rf = this._f.bind(this)),
                (this.kf = null),
                (this.Nf = null),
                (this.Cf = null),
                (this.jf =
                  "ontouchstart" in t ||
                  (void 0 !== t.navigator.maxTouchPoints &&
                    t.navigator.maxTouchPoints > 0) ||
                  void 0 !== t.DocumentTouch),
                Qt().fine(Ha, "touch detected:", this.jf),
                (this.Df = !1),
                this.win.document.addEventListener("keydown", this.Sf),
                this.win.document.addEventListener("mousedown", this.Rf),
                (this.Uf = !0),
                (this.zf = 0),
                (this.Lf = new Pr()),
                (this.Hf = new Pr()),
                (this.Gf = new Pr()),
                this.jf &&
                  ((this.Uf = !this.jf),
                  (this.kf = this.Vf.bind(this)),
                  Xe(t.document, "mousemove", this.kf));
            }
            var i = t.prototype;
            return (
              (i.setupInputModeClasses = function (t) {
                var i = this;
                this.onTouchDetected(function (n) {
                  i.Ff(t, "amp-mode-touch", n);
                }, !0),
                  this.onMouseDetected(function (n) {
                    i.Ff(t, "amp-mode-mouse", n);
                  }, !0),
                  this.onKeyboardStateChanged(function (n) {
                    i.Ff(t, "amp-mode-keyboard-active", n);
                  }, !0);
              }),
              (i.isTouchDetected = function () {
                return this.jf;
              }),
              (i.onTouchDetected = function (t, i) {
                return i && t(this.isTouchDetected()), this.Lf.add(t);
              }),
              (i.isMouseDetected = function () {
                return this.Uf;
              }),
              (i.onMouseDetected = function (t, i) {
                return i && t(this.isMouseDetected()), this.Hf.add(t);
              }),
              (i.isKeyboardActive = function () {
                return this.Df;
              }),
              (i.onKeyboardStateChanged = function (t, i) {
                return i && t(this.isKeyboardActive()), this.Gf.add(t);
              }),
              (i.Ff = function (t, i, n) {
                var r = this;
                t.waitForBodyOpen().then(function (t) {
                  mr(r.win).mutate(function () {
                    t.classList.toggle(i, n);
                  });
                });
              }),
              (i.Mf = function (t) {
                if (!this.Df && !t.defaultPrevented) {
                  var i = t.target;
                  (i &&
                    ("INPUT" == i.tagName ||
                      "TEXTAREA" == i.tagName ||
                      "SELECT" == i.tagName ||
                      "OPTION" == i.tagName ||
                      i.hasAttribute("contenteditable"))) ||
                    ((this.Df = !0),
                    this.Gf.fire(!0),
                    Qt().fine(Ha, "keyboard activated"));
                }
              }),
              (i._f = function () {
                this.Df &&
                  ((this.Df = !1),
                  this.Gf.fire(!1),
                  Qt().fine(Ha, "keyboard deactivated"));
              }),
              (i.Vf = function (t) {
                var i = this;
                if (
                  !t.sourceCapabilities ||
                  !t.sourceCapabilities.firesTouchEvents
                ) {
                  var n;
                  this.Cf ||
                    ((this.Cf = this.Bf.bind(this)),
                    (this.Nf = this.qf.bind(this)));
                  var r = (function (t, i, n, r) {
                    var e,
                      s = new Promise(function (i) {
                        e = Xe(t, "click", i, void 0);
                      });
                    return s.then(e, e), r && r(e), s;
                  })(this.win.document, 0, 0, function (t) {
                    n = t;
                  });
                  return cr(this.win)
                    .timeoutPromise(300, r)
                    .then(this.Nf, function () {
                      n && n(), i.Cf();
                    });
                }
                this.qf();
              }),
              (i.Bf = function () {
                (this.Uf = !0),
                  this.Hf.fire(!0),
                  Qt().fine(Ha, "mouse detected");
              }),
              (i.qf = function () {
                this.zf++,
                  this.zf <= 3
                    ? Xe(this.win.document, "mousemove", this.kf)
                    : Qt().fine(Ha, "mouse detection failed");
              }),
              t
            );
          })(),
          Va = ["<link rel=preload referrerpolicy=origin>"],
          Fa = 18e4,
          Ba = null,
          qa = (function () {
            function t(t) {
              (this.$f = t.document),
                (this.Wf = t.document.head),
                (this.Kf = {}),
                (this.Yf = {}),
                (this.No = ur(t)),
                (this.Kf[ds(t.location.href).origin] = !0),
                (this.Jf = (function (t) {
                  if (!Ba) {
                    var i = t.document.createElement("link"),
                      n = i.relList;
                    if (((i.as = "invalid-value"), !n || !n.supports))
                      return {};
                    Ba = {
                      preconnect: n.supports("preconnect"),
                      preload: n.supports("preload"),
                      onlyValidAs: "invalid-value" != i.as,
                    };
                  }
                  return Ba;
                })(t)),
                (this.Me = cr(t));
            }
            var i = t.prototype;
            return (
              (i.url = function (t, i, n) {
                var r = this;
                t.whenFirstVisible().then(function () {
                  r.ti(t, i, n);
                });
              }),
              (i.ti = function (t, i, n) {
                if (this.Xf(i)) {
                  var r = ds(i).origin,
                    e = Date.now(),
                    s = this.Kf[r];
                  if (s && e < s) n && (this.Kf[r] = e + Fa);
                  else {
                    var u,
                      o = n ? Fa : 1e4;
                    (this.Kf[r] = e + o),
                      this.Jf.preconnect ||
                        ((u = this.$f.createElement("link")).setAttribute(
                          "rel",
                          "dns-prefetch"
                        ),
                        u.setAttribute("href", r),
                        this.Wf.appendChild(u));
                    var h = this.$f.createElement("link");
                    h.setAttribute("rel", "preconnect"),
                      h.setAttribute("href", r),
                      h.setAttribute("referrerpolicy", "origin"),
                      this.Wf.appendChild(h),
                      this.Me.delay(function () {
                        u && u.parentNode && u.parentNode.removeChild(u),
                          h.parentNode && h.parentNode.removeChild(h);
                      }, 1e4),
                      this.Qf(t, r);
                  }
                }
              }),
              (i.preload = function (t, i, n) {
                var r = this;
                this.Xf(i) &&
                  (this.Yf[i] ||
                    ((this.Yf[i] = !0),
                    this.url(t, i, !0),
                    this.Jf.preload &&
                      (("document" == n && this.No.isSafari()) ||
                        t.whenFirstVisible().then(function () {
                          r.Zf(i);
                        }))));
              }),
              (i.Zf = function (t) {
                var i = Ce(this.$f)(Va);
                i.setAttribute("href", t),
                  this.Jf.onlyValidAs ? (i.as = "fetch") : (i.as = ""),
                  this.Wf.appendChild(i);
              }),
              (i.Xf = function (t) {
                return !(!t.startsWith("https:") && !t.startsWith("http:"));
              }),
              (i.Qf = function (t, i) {
                if (
                  !this.Jf.preconnect &&
                  (this.No.isSafari() || this.No.isIos())
                ) {
                  var n = Date.now();
                  this.Kf[i] = n + Fa;
                  var r =
                      i +
                      "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" +
                      (n - (n % Fa)),
                    e = new XMLHttpRequest();
                  e.open("HEAD", r, !0), (e.withCredentials = !0), e.send();
                }
              }),
              t
            );
          })();
        function $a(t) {
          var i;
          !(function (t) {
            xn(t, "crypto", th);
          })(t),
            xn(t, "batched-xhr", go),
            Nh(t),
            Zh(t),
            Zh((i = t)),
            xn(i, "vsync", Ua),
            (function (t) {
              xn(t, "xhr", po);
            })(t),
            (function (t) {
              xn(t, "input", Ga);
            })(t),
            (function (t) {
              xn(t, "preconnect", qa);
            })(t);
        }
        function Wa(t) {
          Zt(!t.getParent()),
            (function (t, i) {
              (function (t) {
                En(t, "url", ta, !0);
              })(t),
                (function (t) {
                  En(t, "templates", Xh);
                })(t),
                En(t, "documentInfo", nh),
                (function (t) {
                  En(t, "cid", Bo);
                })(t),
                (function (t) {
                  En(t, "viewer", ma, !0);
                })(t),
                (function (t) {
                  En(t, "viewport", Da, !0);
                })(t),
                (function (t) {
                  En(t, "hidden-observer", eh);
                })(t),
                (function (t) {
                  En(t, "history", fh);
                })(t),
                (function (t) {
                  En(t, "resources", Lh);
                })(t),
                (function (t) {
                  En(t, "owners", kh);
                })(t),
                (function (t) {
                  En(t, "mutator", gh);
                })(t),
                (function (t) {
                  En(t, "url-replace", function (t) {
                    return new la(t, new fa(t));
                  });
                })(t),
                (function (t) {
                  En(t, "action", Yu, !0);
                })(t),
                (function (t) {
                  En(t, "standard-actions", Fh, !0);
                })(t),
                (function (t) {
                  En(
                    t,
                    "storage",
                    function () {
                      var i = dr(t),
                        n = parseInt(i.getParam("storage"), 10)
                          ? new Yh(i)
                          : new Wh(t.win);
                      return new qh(t, i, n).Lh();
                    },
                    !0
                  );
                })(t),
                (function (t) {
                  En(t, Eh, Mh, !0);
                })(t),
                (function (t) {
                  t.whenExtensionsKnown().then(function () {
                    t.declaresExtension("amp-form") &&
                      t.getRootNode().addEventListener("submit", za, !0);
                  });
                })(t),
                En(t, "loadingIndicator", dh);
            })(t);
        }
        function Ya(t) {
          return t.waitForBodyOpen().then(function () {
            var i,
              n,
              r = t.getBody(),
              e =
                ((i = r),
                (n = function () {
                  return !!r.firstElementChild;
                }),
                new Promise(function (t) {
                  Oi(i, n, t);
                }));
            return cr(t.win)
              .timeoutPromise(2e3, e)
              .then(
                function () {
                  return "AMP-STORY" === r.firstElementChild.tagName;
                },
                function () {
                  return !1;
                }
              );
          });
        }
        var Ka = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
        function Ja(t) {
          if (null == t) return 0;
          var i = (function (t) {
              for (var i = t; null != (t = t.parentNode); )
                t.nodeName.startsWith("AMP-") && (i = t);
              return i;
            })(t),
            n = i.nodeName;
          return "IMG" === n || "AMP-IMG" === n
            ? 1
            : "VIDEO" === n || "AMP-VIDEO" === n
            ? 2
            : "AMP-CAROUSEL" === n
            ? 8
            : "AMP-BASE-CAROUSEL" === n
            ? 16
            : "AMP-AD" === n
            ? 4
            : !n.startsWith("AMP-") && i.textContent
            ? 32
            : 0;
        }
        var Xa = (function () {
          function t(t) {
            var i = this;
            (this.win = t),
              (this.ed = yo(lt(t, 16))),
              (this.sd = []),
              (this.od =
                t.performance.timeOrigin ||
                t.performance.timing.navigationStart),
              (this.ki = null),
              (this.ss = null),
              (this.ci = null),
              (this.ud = null),
              (this.ad = !1),
              (this.hd = !1),
              (this.fd = A()),
              (this.ld = void 0),
              (this.pd = new Or()),
              (this.dd = 0),
              (this.md = []),
              (this.vd = 0);
            var n =
              (this.win.PerformanceObserver &&
                this.win.PerformanceObserver.supportedEntryTypes) ||
              [];
            if (
              (n.includes("paint") ||
                this.pd.rejectSignal(
                  "fcp",
                  Qt().createExpectedError(
                    "First Contentful Paint not supported"
                  )
                ),
              (this.gd = n.includes("layout-shift")),
              !this.gd)
            ) {
              var r = Qt().createExpectedError(
                "Cumulative Layout Shift not supported"
              );
              this.pd.rejectSignal(Zi, r), this.pd.rejectSignal(nn, r);
            }
            (this.bd = n.includes("first-input")),
              this.bd ||
                this.pd.rejectSignal(
                  "fid",
                  Qt().createExpectedError("First Input Delay not supported")
                ),
              (this.yd = n.includes("largest-contentful-paint")),
              this.yd ||
                this.pd.rejectSignal(
                  "lcp",
                  Qt().createExpectedError(
                    "Largest Contentful Paint not supported"
                  )
                ),
              (this.wd = n.includes("navigation")),
              (this.Id = this.Id.bind(this)),
              this.addEnabledExperiment("rtv-" + Dt(this.win).rtvVersion),
              vn(t.document).then(function () {
                i.tick("dr"), i.flush();
              }),
              dn(t.document).then(function () {
                return i.Sd();
              }),
              this.jd(),
              (this.xd = !1),
              (this.Ad = mt(
                t,
                function () {
                  i.kd();
                },
                6e3
              ));
          }
          var i = t.prototype;
          return (
            (i.coreServicesAvailable = function () {
              var t = this,
                i = this.win.document.documentElement;
              (this.ki = Yn(i)),
                (this.ss = dr(i)),
                (this.ci = hr(i)),
                (this.ud = tr(this.ki)),
                (this.hd =
                  this.ss.isEmbedded() && "1" === this.ss.getParam("csi")),
                this.ki.onVisibilityChanged(this.flush.bind(this)),
                this.Ed();
              var n = this.ss.whenMessagingReady();
              return (
                this.ki.whenFirstVisible().then(function () {
                  t.tick("ofv"), t.flush();
                }),
                (this.yd || this.gd) && this.ki.onVisibilityChanged(this.Id),
                n
                  ? n
                      .then(function () {
                        t.tickDelta("msr", t.win.performance.now()),
                          t.tick("timeOrigin", void 0, t.od);
                        var i = t.ki.getMetaByName("amp-usqp");
                        return (
                          i &&
                            i.split(",").forEach(function (i) {
                              t.addEnabledExperiment("ssr-" + i);
                            }),
                          t.Od()
                        );
                      })
                      .then(function () {
                        (t.ad = !0), t._d(), t.flush();
                      })
                  : h()
              );
            }),
            (i.Od = function () {
              var t = this;
              return Ya(Kn(this.win).getSingleDoc()).then(function (i) {
                i && t.addEnabledExperiment("story");
              });
            }),
            (i.Sd = function () {
              this.tick("ol"), this.flush();
            }),
            (i.jd = function () {
              var t = this;
              if ("inabox" !== Dt(this.win).runtime) {
                var i = !1,
                  n = !1,
                  r = !1,
                  e = !1,
                  s = function (s) {
                    if ("first-paint" != s.name || i)
                      if ("first-contentful-paint" != s.name || n)
                        if ("first-input" !== s.entryType || r)
                          "layout-shift" === s.entryType
                            ? s.hadRecentInput || (t.Pd(s), (t.vd += s.value))
                            : "largest-contentful-paint" === s.entryType
                            ? t.Td(s)
                            : "navigation" != s.entryType ||
                              e ||
                              ([
                                "domComplete",
                                "domContentLoadedEventEnd",
                                "domContentLoadedEventStart",
                                "domInteractive",
                                "loadEventEnd",
                                "loadEventStart",
                                "requestStart",
                                "responseStart",
                              ].forEach(function (i) {
                                return t.tick(i, s[i]);
                              }),
                              (e = !0));
                        else {
                          var u = s.processingStart - s.startTime;
                          t.tickDelta("fid", u), (r = !0);
                        }
                      else {
                        var o = s.startTime + s.duration;
                        t.tickDelta("fcp", o),
                          t.tickSinceVisible("fcpv", o),
                          (n = !0);
                      }
                    else t.tickDelta("fp", s.startTime + s.duration), (i = !0);
                  },
                  u = [];
                this.win.PerformancePaintTiming &&
                  (this.win.performance.getEntriesByType("paint").forEach(s),
                  u.push("paint")),
                  this.bd && this.Rd(s, { type: "first-input", buffered: !0 }),
                  this.gd && this.Rd(s, { type: "layout-shift", buffered: !0 }),
                  this.yd &&
                    this.Rd(s, {
                      type: "largest-contentful-paint",
                      buffered: !0,
                    }),
                  this.wd && this.Rd(s, { type: "navigation", buffered: !0 }),
                  u.length > 0 && this.Rd(s, { entryTypes: u });
              }
            }),
            (i.Rd = function (t, i) {
              var n = this;
              try {
                new this.win.PerformanceObserver(function (i) {
                  i.getEntries().forEach(t), n.flush();
                }).observe(i);
              } catch (t) {
                Qt().warn("Performance", t);
              }
            }),
            (i.Md = function () {
              var t = this.ki.getVisibilityState();
              return t === Er || t === Ar;
            }),
            (i.Id = function () {
              this.Md() && (this.Cd(), this.kd());
            }),
            (i.Nd = function () {
              if (!this.xd) {
                this.xd = !0;
                var t = this.win,
                  i = parseInt(
                    Dr(t, t.document.body).getPropertyValue(
                      "--google-font-exp"
                    ),
                    10
                  );
                i >= 0 &&
                  this.addEnabledExperiment("google-font-exp=".concat(i));
              }
            }),
            (i.Cd = function () {
              this.gd && (this.Nd(), this.zd());
            }),
            (i.Pd = function (t) {
              if (this.ki && !this.Md()) {
                var i = this.md;
                if (i.length > 0) {
                  var n = i[0],
                    r = i[i.length - 1];
                  if (
                    t.startTime - r.startTime < 1e3 &&
                    t.startTime - n.startTime < 5e3
                  )
                    return void i.push(t);
                  this.kd();
                }
                i.push(t), this.Ad();
              }
            }),
            (i.kd = function () {
              for (
                var t,
                  i = this.md,
                  n = this.pd.get(Zi),
                  r = 0,
                  e = 0,
                  s = o(i, !0);
                !(t = s()).done;

              ) {
                var u = t.value;
                if (u.sources)
                  for (var h, a = o(u.sources, !0); !(h = a()).done; )
                    r |= Ja(h.value.node);
                e += u.value;
              }
              (i.length = 0),
                this.Nd(),
                (null == n || e > n) &&
                  (this.pd.reset(Zi),
                  this.pd.reset(tn),
                  this.tickDelta(Zi, e),
                  this.tickDelta(tn, r),
                  this.flush());
            }),
            (i.zd = function () {
              0 === this.dd
                ? (this.tickDelta(nn, this.vd), this.flush(), (this.dd = 1))
                : 1 === this.dd &&
                  (this.tickDelta("cls-2", this.vd),
                  this.flush(),
                  (this.dd = 2));
            }),
            (i.Td = function (t) {
              var i = t.element,
                n = t.startTime,
                r = Ja(i);
              this.tickDelta("lcpt", r),
                this.tickDelta("lcp", n),
                this.tickSinceVisible("lcpv", n),
                this.flush();
            }),
            (i.Ed = function () {
              var t = this,
                i = !this.ki.hasBeenVisible(),
                n = -1;
              this.ki.whenFirstVisible().then(function () {
                (n = t.win.performance.now()), t.mark("visible");
              }),
                this.Dd().then(function () {
                  if (i) {
                    var r = n > -1 ? t.win.performance.now() - n : 0;
                    t.ki.whenFirstVisible().then(function () {
                      t.tickDelta(rn, r);
                    }),
                      t.Ld(r),
                      t.mark(rn);
                  } else t.tick(rn), t.Ld(t.win.performance.now() - n);
                  t.flush();
                });
            }),
            (i.Dd = function () {
              var t = this;
              return this.ci.whenFirstPass().then(function () {
                var i,
                  n = t.win.document.documentElement,
                  r = pr(n).getSize();
                return (
                  zi(0, 0, r.width, r.height),
                  (i = n),
                  t.win,
                  (function (t, i) {
                    var n = Yn(t);
                    return n
                      .signals()
                      .whenSignal(Vs)
                      .then(function () {
                        var t = hr(n)
                          .get()
                          .filter(function (t) {
                            return !(
                              !t.prerenderAllowed() ||
                              Ka.includes(t.element.tagName)
                            );
                          })
                          .map(function (t) {
                            return t.element;
                          });
                        return 0 === t.length
                          ? Promise.resolve([])
                          : new Promise(function (i) {
                              for (
                                var r = n.win,
                                  e = new r.IntersectionObserver(
                                    function (t) {
                                      e.disconnect();
                                      for (
                                        var n = [], r = 0;
                                        r < t.length;
                                        r++
                                      ) {
                                        var s = t[r],
                                          u = s.isIntersecting,
                                          o = s.target;
                                        u && n.push(o);
                                      }
                                      i(n);
                                    },
                                    {
                                      root: Ni(r) ? r.document : null,
                                      threshold: 0.01,
                                    }
                                  ),
                                  s = 0;
                                s < Math.min(t.length, 100);
                                s++
                              )
                                e.observe(t[s]);
                            }).then(function (t) {
                              return Promise.all(
                                t.map(function (t) {
                                  return t.whenLoaded();
                                })
                              );
                            });
                      });
                  })(i)
                );
              });
            }),
            (i.tick = function (t, i, n) {
              Zt(null == i || null == n);
              var r,
                e = { label: t };
              null != i
                ? (e.delta = r = Math.max(i, 0))
                : null != n
                ? (e.value = n)
                : (this.mark(t),
                  (r = this.win.performance.now()),
                  (e.value = this.od + r)),
                this.win.dispatchEvent(
                  Ye(this.win, "perf", { label: t, delta: r })
                ),
                this.ad && this.hd
                  ? this.ss.sendMessage("tick", e)
                  : this.Ud(e),
                this.pd.signal(t, r);
            }),
            (i.mark = function (t) {
              var i, n;
              null === (i = (n = this.win.performance).mark) ||
                void 0 === i ||
                i.call(n, t);
            }),
            (i.tickDelta = function (t, i) {
              this.tick(t, i);
            }),
            (i.tickSinceVisible = function (t, i) {
              var n,
                r,
                e = null == i ? this.win.performance.now() : i,
                s = this.od + e,
                u =
                  null !== (n = this.ss) && void 0 !== n && n.isEmbedded()
                    ? null === (r = this.ki) || void 0 === r
                      ? void 0
                      : r.getFirstVisibleTime()
                    : this.od,
                o = u ? Math.max(s - u, 0) : 0;
              this.tickDelta(t, o);
            }),
            (i.flush = function () {
              this.ad &&
                this.hd &&
                (null == this.ld && (this.ld = Object.keys(this.fd).join(",")),
                this.ss.sendMessage(
                  "sendCsi",
                  {
                    ampexp: this.ld,
                    canonicalUrl: this.ud.canonicalUrl,
                    eventid: this.ed,
                  },
                  !0
                ));
            }),
            (i.addEnabledExperiment = function (t) {
              (this.fd[t] = !0), (this.ld = void 0);
            }),
            (i.Ud = function (t) {
              this.sd.length >= 50 && this.sd.shift(), this.sd.push(t);
            }),
            (i._d = function () {
              var t = this;
              this.ss &&
                (this.hd
                  ? (this.sd.forEach(function (i) {
                      t.ss.sendMessage("tick", i);
                    }),
                    (this.sd.length = 0))
                  : (this.sd.length = 0));
            }),
            (i.Ld = function (t) {
              this.ss &&
                this.ss.sendMessage("prerenderComplete", { value: t }, !0);
            }),
            (i.isPerformanceTrackingOn = function () {
              return this.hd;
            }),
            (i.getMetric = function (t) {
              return this.pd.whenSignal(t);
            }),
            t
          );
        })();
        function Qa(t) {
          var i = t.document;
          if (i.fonts && i.fonts.values)
            for (var n, r = i.fonts.values(); (n = r.next()); ) {
              var e = n.value;
              if (!e) return;
              "loading" == e.status &&
                "display" in e &&
                "auto" == e.display &&
                (e.display = "swap");
            }
        }
        var Za = (function () {
            function t(t, i) {
              (this.ql = t),
                (this.Oo = i),
                (this.Lv = !1),
                (this.Hv = 0),
                (this.Fv = this.zp.bind(this)),
                (this.Bv = this.qp.bind(this)),
                (this.$v = this._p.bind(this)),
                (this.Yv = this.Jv.bind(this)),
                this.ql.addEventListener("touchstart", this.Fv, !0);
            }
            var i = t.prototype;
            return (
              (i.cleanup = function () {
                this.Xv(),
                  this.ql.removeEventListener("touchstart", this.Fv, !0);
              }),
              (i.zp = function (t) {
                this.Lv ||
                  !t.touches ||
                  1 != t.touches.length ||
                  this.Oo.getScrollTop() > 0 ||
                  this.Qv(t.touches[0].clientY);
              }),
              (i.Qv = function (t) {
                (this.Lv = !0),
                  (this.Hv = t),
                  this.ql.addEventListener("touchmove", this.Bv, !0),
                  this.ql.addEventListener("touchend", this.$v, !0),
                  this.ql.addEventListener("touchcancel", this.Yv, !0);
              }),
              (i.Xv = function () {
                (this.Lv = !1),
                  (this.Hv = 0),
                  this.ql.removeEventListener("touchmove", this.Bv, !0),
                  this.ql.removeEventListener("touchend", this.$v, !0),
                  this.ql.removeEventListener("touchcancel", this.Yv, !0);
              }),
              (i.qp = function (t) {
                if (this.Lv) {
                  var i = t.touches[0].clientY - this.Hv;
                  i > 0 && t.preventDefault(), 0 != i && this.Xv();
                }
              }),
              (i._p = function (t) {
                this.Xv();
              }),
              (i.Jv = function (t) {
                this.Xv();
              }),
              t
            );
          })(),
          tc = ["amp-ad", "amp-embed", "amp-video"],
          ic = "extensions",
          nc = "0.1",
          rc = "latest",
          ec = "__AMP_EXT_LDR",
          sc = (function () {
            function t(t) {
              (this.win = t),
                (this.vf = Kn(t)),
                (this.tl = {}),
                (this.il = null),
                (this.nl = null),
                (this.rl = null);
            }
            var i = t.prototype;
            return (
              (i.registerExtension = function (t, i, n, r, e) {
                var s,
                  u = n ? this.tl[hc(t, rc)] : null,
                  o = this.sl(
                    t,
                    i,
                    null === (s = null == u ? void 0 : u.auto) ||
                      void 0 === s ||
                      s
                  );
                if (((o.latest = n), !o.loaded)) {
                  n && (this.tl[hc(t, rc)] = o);
                  try {
                    var h, a;
                    (this.il = t),
                      (this.nl = i),
                      (this.rl = n),
                      r(e, e._),
                      (o.loaded = !0),
                      null === (h = o.resolve) ||
                        void 0 === h ||
                        h.call(o, o.extension),
                      null == u ||
                        null === (a = u.resolve) ||
                        void 0 === a ||
                        a.call(u, o.extension);
                  } catch (t) {
                    var c, f;
                    throw (
                      ((o.error = t),
                      null === (c = o.reject) || void 0 === c || c.call(o, t),
                      null == u ||
                        null === (f = u.reject) ||
                        void 0 === f ||
                        f.call(u, t),
                      t)
                    );
                  } finally {
                    (this.il = null), (this.nl = null), (this.rl = null);
                  }
                }
              }),
              (i.waitForExtension = function (t, i) {
                var n = this.ol(this.sl(t, i));
                return cr(this.win)
                  .timeoutPromise(16e3, n)
                  .catch(function (i) {
                    if (!i.message.includes("timeout")) throw i;
                    return (
                      Jt().error(
                        ic,
                        "Waited over 16s to load extension ".concat(t, ".")
                      ),
                      n
                    );
                  });
              }),
              (i.preloadExtension = function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : nc;
                "amp-embed" == t && (t = "amp-ad");
                var n = this.sl(t, i);
                return this.ul(t, i, n), this.ol(n);
              }),
              (i.installExtensionForDoc = function (t, i) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : nc,
                  e = t.getRootNode(),
                  s = e[ec];
                return (
                  s || (s = e[ec] = A()),
                  s[i]
                    ? s[i]
                    : (t.declareExtension(i, r),
                      Eu(t.win, i),
                      (s[i] = this.preloadExtension(i, r).then(function () {
                        return n.installExtensionInDoc(t, i, r);
                      })))
                );
              }),
              (i.reloadExtension = function (t, i, n) {
                var r = wn(this.win, t, i, n, !1),
                  e = this.tl[hc(t, i)];
                return (
                  e && (Zt(!e.loaded && !e.error), (e.scriptPresent = !1)),
                  r.forEach(function (i) {
                    return i.setAttribute("i-amphtml-loaded-new-version", t);
                  }),
                  this.preloadExtension(t, i)
                );
              }),
              (i.importUnwrapped = function (t, i) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : nc,
                  e =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3],
                  s = wn(t, i, r, e),
                  u = s.length > 0 ? s[0] : null;
                return (
                  u
                    ? (n = u.__AMP_SCR_LOADED)
                    : ((n = (u = yn(this.win, i, r)).__AMP_SCR_LOADED =
                        new Promise(function (t, i) {
                          (u.onload = t), (u.onerror = i);
                        })),
                      t.document.head.appendChild(u)),
                  n
                );
              }),
              (i.loadElementClass = function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : nc;
                return this.preloadExtension(t, i).then(function (i) {
                  return Zt(i.elements[t]).implementationClass;
                });
              }),
              (i.addElement = function (t, i, n) {
                var r = this;
                (this.hl(t).extension.elements[t] = {
                  implementationClass: i,
                  css: n,
                }),
                  this.addDocFactory(function (e) {
                    r.al(e, t, i, n);
                  });
              }),
              (i.addTemplate = function (t, i) {
                this.addDocFactory(function (n) {
                  !(function (t, i, n) {
                    On(t, "templates").ia(i, n);
                  })(n, t, i);
                });
              }),
              (i.al = function (t, i, n, r) {
                var e = this;
                r
                  ? ns(
                      t,
                      r,
                      function () {
                        e.cl(t.win, i, n);
                      },
                      !1,
                      i
                    )
                  : this.cl(t.win, i, n);
              }),
              (i.cl = function (t, i, n) {
                (function (t, i, n) {
                  var r = (function (t, i) {
                    if (
                      i.requiresShadowDom() &&
                      !t.Element.prototype.attachShadow
                    )
                      return ir(t).importUnwrapped(
                        t,
                        "amp-shadow-dom-polyfill"
                      );
                  })(t, n);
                  r
                    ? r.then(function () {
                        return wu(t, i, n);
                      })
                    : wu(t, i, n);
                })(t, i, n),
                  xn(t, i, oc);
              }),
              (i.addService = function (t, i) {
                this.hl(t).extension.services.push({
                  serviceName: t,
                  serviceClass: i,
                }),
                  this.addDocFactory(function (n) {
                    En(n, t, i, !0);
                  });
              }),
              (i.addDocFactory = function (t, i) {
                var n = this.hl(i);
                if (
                  (n.docFactories.push(t), this.il && this.vf.isSingleDoc())
                ) {
                  var r = this.vf.getAmpDoc(this.win.document),
                    e = this.il,
                    s = this.nl,
                    u = this.rl || !1;
                  (r.declaresExtension(e, s) ||
                    (u && r.declaresExtension(e, rc)) ||
                    n.auto) &&
                    t(r);
                }
              }),
              (i.preinstallEmbed = function (t, i) {
                var n = this.win,
                  r = t.win;
                !(function (t, i) {
                  Pu(t, i, "amp-img"), Pu(t, i, "amp-pixel");
                })(n, r),
                  uc(r),
                  i.forEach(function (i) {
                    var n = i.extensionId,
                      e = i.extensionVersion;
                    t.declareExtension(n, e), tc.includes(n) || Eu(r, n);
                  });
              }),
              (i.installExtensionsInDoc = function (t, i) {
                var n = this;
                return Promise.all(
                  i.map(function (i) {
                    var r = i.extensionId,
                      e = i.extensionVersion;
                    return n.installExtensionInDoc(t, r, e);
                  })
                );
              }),
              (i.installExtensionInDoc = function (t, i) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : nc;
                return (
                  t.declareExtension(i, r),
                  this.ol(this.sl(i, r)).then(function () {
                    n.sl(i, r).docFactories.forEach(function (n) {
                      try {
                        n(t);
                      } catch (t) {
                        d("Doc factory failed: ", t, i);
                      }
                    });
                  })
                );
              }),
              (i.sl = function (t, i, n) {
                var r = hc(t, i),
                  e = this.tl[r];
                return (
                  e ||
                    ((e = {
                      version: i,
                      latest: i == rc,
                      extension: { elements: {}, services: [] },
                      auto: n || !1,
                      docFactories: [],
                      promise: void 0,
                      resolve: void 0,
                      reject: void 0,
                      loaded: void 0,
                      error: void 0,
                      scriptPresent: void 0,
                    }),
                    (this.tl[r] = e)),
                  e
                );
              }),
              (i.hl = function (t) {
                return (
                  this.il || Qt().error(ic, "unknown extension for ", t),
                  this.sl(this.il || "_UNKNOWN_", this.nl || "")
                );
              }),
              (i.ol = function (t) {
                if (!t.promise)
                  if (t.loaded) t.promise = Promise.resolve(t.extension);
                  else if (t.error) t.promise = Promise.reject(t.error);
                  else {
                    var i = new a();
                    (t.promise = i.promise),
                      (t.resolve = i.resolve),
                      (t.reject = i.reject);
                  }
                return t.promise;
              }),
              (i.ul = function (t, i, n) {
                if (this.fl(t, i, n)) {
                  var r = yn(this.win, t, i);
                  this.win.document.head.appendChild(r), (n.scriptPresent = !0);
                }
              }),
              (i.fl = function (t, i, n) {
                if (n.loaded || n.error) return !1;
                if (void 0 === n.scriptPresent) {
                  var r = wn(this.win, t, i, n.latest);
                  n.scriptPresent = r.length > 0;
                }
                return !n.scriptPresent;
              }),
              t
            );
          })();
        function uc(t) {
          tc.forEach(function (i) {
            Eu(t, i);
          });
        }
        function oc() {
          return {};
        }
        function hc(t, i) {
          return "".concat(t, ":").concat(i);
        }
        var ac,
          cc = "-shadowcsshost",
          fc = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",
          lc =
            (new RegExp("(" + cc + fc, "gim"),
            new RegExp("(-shadowcsscontext" + fc, "gim"),
            new RegExp(cc, "gim"),
            new RegExp("-shadowcsscontext", "gim"),
            "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#000!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom],amp-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/"),
          vc =
            "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}amp-story{visibility:hidden!important}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/";
        (Yt = $t),
          Qt(),
          Jt(),
          (ac = function (t, i, n) {
            js(i, n),
              i &&
                t &&
                tt(i.message) &&
                !(i.message.indexOf(Q) >= 0) &&
                (function (t, i) {
                  if (Kn(i).isSingleDoc()) {
                    var n = { errorName: t.name, errorMessage: t.message };
                    !(function (t, i) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        r =
                          !(arguments.length > 3 && void 0 !== arguments[3]) ||
                          arguments[3];
                      Jn(t).then(function (e) {
                        e && e.triggerEventForTarget(t, i, n, r);
                      });
                    })(
                      (function (t) {
                        var i = Kn(t).getSingleDoc().getRootNode();
                        return i.documentElement || i.body || i;
                      })(i),
                      "user-error",
                      n,
                      !1
                    );
                  }
                })(i, t);
          }.bind(null, self)),
          (self.__AMP_REPORT_ERROR = ac);
        var dc,
          mc = "runtime";
        function pc(t, i) {
          if (t.__AMP_TAG) return h();
          t.__AMP_TAG = !0;
          var n = t.AMP || [];
          xn(t, "extensions", sc);
          var r = ir(t);
          $a(t),
            uc(t),
            (t.AMP = { win: t, _: t.AMP ? t.AMP._ : void 0 }),
            (t.AMP.config = {
              urls: {
                thirdParty: Pt,
                thirdPartyFrameHost: Ot,
                thirdPartyFrameRegex: It,
                cdn: Tt,
                cdnProxyRegex: xt,
                localhostRegex: Mt,
                errorReporting: St,
                betaErrorReporting: Rt,
                localDev: _t,
                trustedViewerHosts: kt,
                geoApi: Ct,
              },
            }),
            (t.AMP.addGlobalConsentListener = function () {}),
            (t.AMP.addGranularConsentListener = function () {}),
            (t.AMP.BaseElement = su),
            (t.AMP.registerElement = r.addElement.bind(r)),
            (t.AMP.registerTemplate = r.addTemplate.bind(r)),
            (t.AMP.registerServiceForDoc = r.addService.bind(r)),
            (t.AMP.isExperimentOn = Ve.bind(null, t)),
            (t.AMP.toggleExperiment = Fe.bind(null, t)),
            (t.AMP.setLogLevel = Ht.bind(null)),
            (t.AMP.setTickFunction = function (t, i) {});
          var e = i(t, r);
          function s(i) {
            !(function (t, i, n) {
              "function" == typeof i || "high" == i.p
                ? h().then(n)
                : ((n.displayName = i.n), Qs(t.document, n));
            })(t, i, function () {
              e.then(function () {
                "function" == typeof i
                  ? i(t.AMP, t.AMP._l)
                  : r.registerExtension(i.n, i.ev, i.l, i.f, t.AMP);
              });
            });
          }
          for (var u = 0; u < n.length; u++) {
            var o = n[u];
            if (gc(t, o)) n.splice(u--, 1);
            else if ("function" == typeof o || "high" == o.p) {
              try {
                s(o);
              } catch (t) {
                Qt().error(mc, "Extension failed: ", t, o.n);
              }
              n.splice(u--, 1);
            }
          }
          !(function (t, i) {
            t.document.body &&
            !(function (t) {
              return is(t).length > 0;
            })(t)
              ? cr(t).delay(i, 1)
              : i();
          })(t, function () {
            t.AMP.push = function (i) {
              gc(t, i) || s(i);
            };
            for (var i = 0; i < n.length; i++) {
              var r = n[i];
              if (!gc(t, r))
                try {
                  s(r);
                } catch (t) {
                  Qt().error(mc, "Extension failed: ", t, r.n);
                }
            }
            n.length = 0;
          }),
            t.AMP.push || (t.AMP.push = n.push.bind(n)),
            ur(t).isIos() &&
              _r(t.document.documentElement, "cursor", "pointer");
          var a = ir(t);
          return (
            Ki(t) && a.preloadExtension("amp-resize-observer-polyfill"),
            Fi(t) && a.preloadExtension("amp-intersection-observer-polyfill"),
            e
          );
        }
        function gc(t, i) {
          return (
            "function" != typeof i &&
            (!!i.m ||
              ("2308242321000" != i.v &&
                (ir(t).reloadExtension(i.n, i.ev, i.l), !0)))
          );
        }
        function bc(t, i) {
          Qs(self.document, function () {
            $a(self),
              Wa(t),
              i.coreServicesAvailable(),
              (function (t) {
                var i = new a(),
                  n = i.promise,
                  r = i.resolve;
                bh = cr(t)
                  .timeoutPromise(8e3, n, "TrackImpressionPromise timeout")
                  .catch(function (t) {
                    Qt().warn("IMPRESSION", t);
                  });
                var e = dr(t.document.documentElement),
                  s = e.isTrustedViewer(),
                  u = e.getReferrerUrl().then(function (t) {
                    return (function (t) {
                      var i = ds(t);
                      return (
                        "https:" == i.protocol &&
                        wh.some(function (t) {
                          return t.test(i.hostname);
                        })
                      );
                    })(t);
                  });
                Promise.all([s, u]).then(function (i) {
                  var n = i[0],
                    e = i[1];
                  if (n || e || Ve(t, "alp")) {
                    var s = (function (t) {
                        var i = dr(t.document.documentElement);
                        return i.getParam("replaceUrl")
                          ? i.hasCapability("replaceUrl")
                            ? i
                                .sendMessageAwaitResponse(
                                  "getReplaceUrl",
                                  void 0
                                )
                                .then(
                                  function (t) {
                                    t && "object" == p(t)
                                      ? i.replaceUrl(t.replaceUrl || null)
                                      : Qt().warn(
                                          "IMPRESSION",
                                          "get invalid replaceUrl response"
                                        );
                                  },
                                  function (t) {
                                    Qt().warn(
                                      "IMPRESSION",
                                      "Error request replaceUrl from viewer",
                                      t
                                    );
                                  }
                                )
                            : (i.replaceUrl(i.getParam("replaceUrl") || null),
                              h())
                          : h();
                      })(t),
                      u = (function (t) {
                        var i = Yn(t.document.documentElement),
                          n = dr(i).getParam("click");
                        return n
                          ? 0 != n.indexOf("https://")
                            ? (Jt().warn(
                                "IMPRESSION",
                                "click fragment param should start with https://. Found ",
                                n
                              ),
                              h())
                            : (Hr.getLocation(t).hash &&
                                (Hr.getLocation(t).hash = ""),
                              i
                                .whenFirstVisible()
                                .then(function () {
                                  return (function (t, i) {
                                    return gr(t)
                                      .fetchJson(i, { credentials: "include" })
                                      .then(function (t) {
                                        return 204 == t.status
                                          ? null
                                          : t.json();
                                      });
                                  })(t, n);
                                })
                                .then(function (i) {
                                  !(function (t, i) {
                                    if (i) {
                                      var n = i.location,
                                        r = i.tracking_url || n;
                                      if (
                                        (r && !Es(r) && (new Image().src = r),
                                        n)
                                      ) {
                                        if (!t.history.replaceState) return;
                                        var e = dr(t.document.documentElement),
                                          s = bs(
                                            Hr.getLocation(t).href,
                                            yt(ds(n).search)
                                          );
                                        t.history.replaceState(null, "", s),
                                          e.maybeUpdateFragmentForCct();
                                      }
                                    }
                                  })(t, i);
                                })
                                .catch(function (t) {
                                  Jt().warn(
                                    "IMPRESSION",
                                    "Error on request clickUrl: ",
                                    t
                                  );
                                }))
                          : h();
                      })(t);
                    Promise.all([s, u]).then(
                      function () {
                        r();
                      },
                      function () {}
                    );
                  } else r();
                });
              })(self);
          }),
            Qs(self.document, function () {
              pc(self, function (t) {
                return (
                  (function (t) {
                    var i = t.document.documentElement,
                      n = Kn(t).getSingleDoc();
                    t.AMP.ampdoc = n;
                    var r = dr(i);
                    (t.AMP.viewer = r),
                      Dt().development &&
                        ((t.AMP.toggleRuntime = r.toggleRuntime.bind(r)),
                        (t.AMP.resources = hr(i)));
                    var e = pr(i);
                    (t.AMP.viewport = {}),
                      (t.AMP.viewport.getScrollLeft = e.getScrollLeft.bind(e)),
                      (t.AMP.viewport.getScrollWidth =
                        e.getScrollWidth.bind(e)),
                      (t.AMP.viewport.getWidth = e.getWidth.bind(e));
                  })(t),
                  ((i = t).AMP.installAmpdocServices = Wa.bind(null)),
                  (i.AMP.combinedCss = lc + vc),
                  Ti(t.document).then(function () {
                    xu(t.AMP.ampdoc);
                  })
                );
                var i;
              });
            }),
            Qs(self.document, function () {
              !(function (t) {
                !(function (t) {
                  Ou(t, Tu, Su);
                })(t),
                  (function (t) {
                    Ou(t, Nu, Du);
                  })(t),
                  (function (t) {
                    Ou(t, "amp-layout", Ru);
                  })(t);
              })(self);
            }),
            Qs(self.document, function () {
              xu(t),
                dn(self.document).then(function () {
                  return gu();
                });
            }),
            Qs(
              self.document,
              function () {
                (function (t) {
                  var i = t.document.documentElement;
                  "0" == dr(i).getParam("p2r") &&
                    ur(t).isChrome() &&
                    new Za(t.document, pr(i));
                })(self),
                  (function (t) {
                    var i = t.win;
                    zu(i.document) &&
                      t.isSingleDoc() &&
                      !i.document.documentElement.hasAttribute(
                        "data-amp-auto-lightbox-disable"
                      ) &&
                      Zs(
                        t,
                        function () {
                          Ya(t).then(function (n) {
                            n ||
                              ir(i).installExtensionForDoc(
                                t,
                                "amp-auto-lightbox"
                              );
                          });
                        },
                        10
                      );
                  })(t),
                  (function (t) {
                    var i = t.win;
                    zu(i.document) &&
                      ur(t.win).isStandalone() &&
                      Zs(
                        t,
                        function () {
                          ir(i)
                            .installExtensionForDoc(t, "amp-standalone")
                            .then(function () {
                              return Gn(
                                t.getBody(),
                                "standalone",
                                "amp-standalone"
                              );
                            })
                            .then(function (t) {
                              return t.initialize();
                            });
                        },
                        10
                      );
                  })(t),
                  (function (t) {
                    var i = t.location.href;
                    if (!i.startsWith("about:")) {
                      var n = !1,
                        r = wt(t);
                      Ut(t, r) && (n = "0" !== r.validate),
                        n &&
                          (function (t, i) {
                            var n = t.createElement("script");
                            if (
                              self.trustedTypes &&
                              self.trustedTypes.createPolicy
                            ) {
                              var r = self.trustedTypes.createPolicy(
                                "validator-integration#loadScript",
                                {
                                  createScriptURL: function (t) {
                                    return "https://cdn.ampproject.org/v0/validator_wasm.js" ===
                                      t
                                      ? t
                                      : "";
                                  },
                                }
                              );
                              n.src = r.createScriptURL(i);
                            } else n.src = i;
                            Li(t, n);
                            var e = Qe(n).then(
                              function () {
                                t.head.removeChild(n);
                              },
                              function () {}
                            );
                            return t.head.appendChild(n), e;
                          })(
                            t.document,
                            "".concat(Tt, "/v0/validator_wasm.js")
                          ).then(function () {
                            amp.validator.validateUrlAndLog(i, t.document);
                          });
                    }
                  })(self),
                  (function (t) {
                    Zt(t.defaultView);
                    var i = t.defaultView;
                    Ti(t)
                      .then(function () {
                        return (function (t) {
                          var i = is(t).map(function (i) {
                            var n = (function (t, i) {
                              return Dn(t, i);
                            })(t, i).then(function (t) {
                              return t &&
                                (function (t) {
                                  return "function" == typeof t.whenReady;
                                })(t)
                                ? t.whenReady().then(function () {
                                    return t;
                                  })
                                : t;
                            });
                            return cr(t).timeoutPromise(
                              3e3,
                              n,
                              "Render timeout waiting for service ".concat(
                                i,
                                " to be ready."
                              )
                            );
                          });
                          return Promise.all(i);
                        })(i);
                      })
                      .catch(function (t) {
                        return d(t), [];
                      })
                      .then(function (n) {
                        (es = !0),
                          t.body.getBoundingClientRect(),
                          us(t),
                          _n(t).signals().signal(Ie),
                          n.length > 0 &&
                            hr(t.documentElement).schedulePass(1, !0);
                        try {
                          var r = sr(i);
                          r.tick("mbv"), r.flush();
                        } catch (t) {}
                      });
                  })(self.document),
                  (function (t) {
                    dn(t).then(function () {
                      var i = t.defaultView;
                      if (i) {
                        var n = or(i),
                          r = tr(t.documentElement),
                          e = Yn(t);
                        n.url(e, r.sourceUrl), n.url(e, r.canonicalUrl);
                      }
                    });
                  })(self.document);
              },
              !0
            ),
            Qs(self.document, function () {
              i.tick("e_is"), hr(t).ampInitComplete(), i.flush();
            });
        }
        self.location && (self.location.originalHash = self.location.hash);
        try {
          !(function (t) {
            (t.onerror = zs),
              t.addEventListener("unhandledrejection", function (t) {
                !t.reason ||
                (t.reason.message !== ks &&
                  t.reason.message !== Cs &&
                  "AbortError" !== t.reason.message)
                  ? js(t.reason || new Error("rejected promise " + t))
                  : t.preventDefault();
              });
          })(self),
            (function (t, i, n) {
              xn(t, "ampdoc", function () {
                return new $r(t, !0, void 0);
              });
            })(self),
            (dc = Kn(self));
        } catch (t) {
          throw (ss(self.document), t);
        }
        Qs(self.document, function () {
          var t = dc.getAmpDoc(self.document);
          Nh(self), xn(self, "performance", Xa);
          var i = sr(self);
          (function (t) {
            fn(t.document, function () {
              return (function (t) {
                var i = 1500,
                  n = t.performance;
                n &&
                  n.timing &&
                  n.timing.navigationStart &&
                  (i = Date.now() - n.timing.navigationStart);
                var r = Math.max(1, 2100 - i);
                t.setTimeout(function () {
                  Qa(t);
                  var i = t.document.styleSheets;
                  if (i) {
                    for (
                      var n = t.document.querySelectorAll(
                          'link[rel~="stylesheet"]:not([href^="https://translate.googleapis.com/translate_static/css/"]):not([href^="'.concat(
                            vi(Tt),
                            '"])'
                          )
                        ),
                        e = [],
                        s = 0;
                      s < n.length;
                      s++
                    ) {
                      for (var u = n[s], o = !1, h = 0; h < i.length; h++)
                        if (i[h].ownerNode == u) {
                          o = !0;
                          break;
                        }
                      o || e.push(u);
                    }
                    for (
                      var a = function (i) {
                          var n = e[i],
                            s = n.media || "all";
                          (n.media = "print"),
                            (n.onload = function () {
                              (n.media = s), Qa(t);
                            }),
                            n.setAttribute("i-amphtml-timeout", r),
                            n.parentNode.insertBefore(n, n.nextSibling);
                        },
                        c = 0;
                      c < e.length;
                      c++
                    )
                      a(c);
                  }
                }, r);
              })(t);
            });
          })(self),
            i.tick("is"),
            ns(
              t,
              lc + vc,
              function () {
                return bc(t, i);
              },
              !0,
              "amp-runtime"
            );
        }),
          self.console &&
            (console.info || console.log).call(
              console,
              "Powered by AMP ⚡ HTML – Version ".concat("2308242321000"),
              self.location.href
            ),
          self.document.documentElement.setAttribute(
            "amp-version",
            "2308242321000"
          );
      })();
} catch (t) {
  throw (
    (setTimeout(function () {
      var t = document.body.style;
      (t.opacity = 1),
        (t.visibility = "visible"),
        (t.animation = "none"),
        (t.WebkitAnimation = "none;");
    }, 1e3),
    t)
  );
}
//# sourceMappingURL=v0.js.map
