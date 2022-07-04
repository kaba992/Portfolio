!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).luge = t());
})(this, function () {
  "use strict";
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = function (e) {
          return e && e.Math == Math && e;
      },
      r =
          t("object" == typeof globalThis && globalThis) ||
          t("object" == typeof window && window) ||
          t("object" == typeof self && self) ||
          t("object" == typeof e && e) ||
          (function () {
              return this;
          })() ||
          Function("return this")(),
      s = {},
      i = function (e) {
          try {
              return !!e();
          } catch (e) {
              return !0;
          }
      },
      n = !i(function () {
          return (
              7 !=
              Object.defineProperty({}, 1, {
                  get: function () {
                      return 7;
                  },
              })[1]
          );
      }),
      o = !i(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
      }),
      a = o,
      l = Function.prototype.call,
      c = a
          ? l.bind(l)
          : function () {
                return l.apply(l, arguments);
            },
      d = {},
      u = {}.propertyIsEnumerable,
      h = Object.getOwnPropertyDescriptor,
      p = h && !u.call({ 1: 2 }, 1);
  d.f = p
      ? function (e) {
            var t = h(this, e);
            return !!t && t.enumerable;
        }
      : u;
  var g,
      m,
      f = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      },
      b = o,
      y = Function.prototype,
      v = y.bind,
      w = y.call,
      E = b && v.bind(w, w),
      S = b
          ? function (e) {
                return e && E(e);
            }
          : function (e) {
                return (
                    e &&
                    function () {
                        return w.apply(e, arguments);
                    }
                );
            },
      T = S,
      x = T({}.toString),
      A = T("".slice),
      P = function (e) {
          return A(x(e), 8, -1);
      },
      k = S,
      O = i,
      M = P,
      B = r.Object,
      I = k("".split),
      C = O(function () {
          return !B("z").propertyIsEnumerable(0);
      })
          ? function (e) {
                return "String" == M(e) ? I(e, "") : B(e);
            }
          : B,
      L = r.TypeError,
      F = function (e) {
          if (null == e) throw L("Can't call method on " + e);
          return e;
      },
      R = C,
      _ = F,
      j = function (e) {
          return R(_(e));
      },
      N = function (e) {
          return "function" == typeof e;
      },
      H = N,
      q = function (e) {
          return "object" == typeof e ? null !== e : H(e);
      },
      z = r,
      D = N,
      U = function (e) {
          return D(e) ? e : void 0;
      },
      K = function (e, t) {
          return arguments.length < 2 ? U(z[e]) : z[e] && z[e][t];
      },
      V = S({}.isPrototypeOf),
      W = r,
      G = K("navigator", "userAgent") || "",
      Y = W.process,
      X = W.Deno,
      Q = (Y && Y.versions) || (X && X.version),
      $ = Q && Q.v8;
  $ && (m = (g = $.split("."))[0] > 0 && g[0] < 4 ? 1 : +(g[0] + g[1])), !m && G && (!(g = G.match(/Edge\/(\d+)/)) || g[1] >= 74) && (g = G.match(/Chrome\/(\d+)/)) && (m = +g[1]);
  var Z = m,
      J = i,
      ee =
          !!Object.getOwnPropertySymbols &&
          !J(function () {
              var e = Symbol();
              return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && Z && Z < 41);
          }),
      te = ee && !Symbol.sham && "symbol" == typeof Symbol.iterator,
      re = K,
      se = N,
      ie = V,
      ne = te,
      oe = r.Object,
      ae = ne
          ? function (e) {
                return "symbol" == typeof e;
            }
          : function (e) {
                var t = re("Symbol");
                return se(t) && ie(t.prototype, oe(e));
            },
      le = r.String,
      ce = function (e) {
          try {
              return le(e);
          } catch (e) {
              return "Object";
          }
      },
      de = N,
      ue = ce,
      he = r.TypeError,
      pe = function (e) {
          if (de(e)) return e;
          throw he(ue(e) + " is not a function");
      },
      ge = pe,
      me = function (e, t) {
          var r = e[t];
          return null == r ? void 0 : ge(r);
      },
      fe = c,
      be = N,
      ye = q,
      ve = r.TypeError,
      we = { exports: {} },
      Ee = r,
      Se = Object.defineProperty,
      Te = function (e, t) {
          try {
              Se(Ee, e, { value: t, configurable: !0, writable: !0 });
          } catch (r) {
              Ee[e] = t;
          }
          return t;
      },
      xe = Te,
      Ae = "__core-js_shared__",
      Pe = r[Ae] || xe(Ae, {}),
      ke = Pe;
  (we.exports = function (e, t) {
      return ke[e] || (ke[e] = void 0 !== t ? t : {});
  })("versions", []).push({ version: "3.21.1", mode: "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE", source: "https://github.com/zloirock/core-js" });
  var Oe = F,
      Me = r.Object,
      Be = function (e) {
          return Me(Oe(e));
      },
      Ie = Be,
      Ce = S({}.hasOwnProperty),
      Le =
          Object.hasOwn ||
          function (e, t) {
              return Ce(Ie(e), t);
          },
      Fe = S,
      Re = 0,
      _e = Math.random(),
      je = Fe((1).toString),
      Ne = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + je(++Re + _e, 36);
      },
      He = r,
      qe = we.exports,
      ze = Le,
      De = Ne,
      Ue = ee,
      Ke = te,
      Ve = qe("wks"),
      We = He.Symbol,
      Ge = We && We.for,
      Ye = Ke ? We : (We && We.withoutSetter) || De,
      Xe = function (e) {
          if (!ze(Ve, e) || (!Ue && "string" != typeof Ve[e])) {
              var t = "Symbol." + e;
              Ue && ze(We, e) ? (Ve[e] = We[e]) : (Ve[e] = Ke && Ge ? Ge(t) : Ye(t));
          }
          return Ve[e];
      },
      Qe = c,
      $e = q,
      Ze = ae,
      Je = me,
      et = function (e, t) {
          var r, s;
          if ("string" === t && be((r = e.toString)) && !ye((s = fe(r, e)))) return s;
          if (be((r = e.valueOf)) && !ye((s = fe(r, e)))) return s;
          if ("string" !== t && be((r = e.toString)) && !ye((s = fe(r, e)))) return s;
          throw ve("Can't convert object to primitive value");
      },
      tt = Xe,
      rt = r.TypeError,
      st = tt("toPrimitive"),
      it = function (e, t) {
          if (!$e(e) || Ze(e)) return e;
          var r,
              s = Je(e, st);
          if (s) {
              if ((void 0 === t && (t = "default"), (r = Qe(s, e, t)), !$e(r) || Ze(r))) return r;
              throw rt("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), et(e, t);
      },
      nt = ae,
      ot = function (e) {
          var t = it(e, "string");
          return nt(t) ? t : t + "";
      },
      at = q,
      lt = r.document,
      ct = at(lt) && at(lt.createElement),
      dt = function (e) {
          return ct ? lt.createElement(e) : {};
      },
      ut = dt,
      ht =
          !n &&
          !i(function () {
              return (
                  7 !=
                  Object.defineProperty(ut("div"), "a", {
                      get: function () {
                          return 7;
                      },
                  }).a
              );
          }),
      pt = n,
      gt = c,
      mt = d,
      ft = f,
      bt = j,
      yt = ot,
      vt = Le,
      wt = ht,
      Et = Object.getOwnPropertyDescriptor;
  s.f = pt
      ? Et
      : function (e, t) {
            if (((e = bt(e)), (t = yt(t)), wt))
                try {
                    return Et(e, t);
                } catch (e) {}
            if (vt(e, t)) return ft(!gt(mt.f, e, t), e[t]);
        };
  var St = {},
      Tt =
          n &&
          i(function () {
              return 42 != Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype;
          }),
      xt = r,
      At = q,
      Pt = xt.String,
      kt = xt.TypeError,
      Ot = function (e) {
          if (At(e)) return e;
          throw kt(Pt(e) + " is not an object");
      },
      Mt = n,
      Bt = ht,
      It = Tt,
      Ct = Ot,
      Lt = ot,
      Ft = r.TypeError,
      Rt = Object.defineProperty,
      _t = Object.getOwnPropertyDescriptor,
      jt = "enumerable",
      Nt = "configurable",
      Ht = "writable";
  St.f = Mt
      ? It
          ? function (e, t, r) {
                if ((Ct(e), (t = Lt(t)), Ct(r), "function" == typeof e && "prototype" === t && "value" in r && Ht in r && !r.writable)) {
                    var s = _t(e, t);
                    s && s.writable && ((e[t] = r.value), (r = { configurable: Nt in r ? r.configurable : s.configurable, enumerable: jt in r ? r.enumerable : s.enumerable, writable: !1 }));
                }
                return Rt(e, t, r);
            }
          : Rt
      : function (e, t, r) {
            if ((Ct(e), (t = Lt(t)), Ct(r), Bt))
                try {
                    return Rt(e, t, r);
                } catch (e) {}
            if ("get" in r || "set" in r) throw Ft("Accessors not supported");
            return "value" in r && (e[t] = r.value), e;
        };
  var qt = St,
      zt = f,
      Dt = n
          ? function (e, t, r) {
                return qt.f(e, t, zt(1, r));
            }
          : function (e, t, r) {
                return (e[t] = r), e;
            },
      Ut = { exports: {} },
      Kt = N,
      Vt = Pe,
      Wt = S(Function.toString);
  Kt(Vt.inspectSource) ||
      (Vt.inspectSource = function (e) {
          return Wt(e);
      });
  var Gt,
      Yt,
      Xt,
      Qt = Vt.inspectSource,
      $t = N,
      Zt = Qt,
      Jt = r.WeakMap,
      er = $t(Jt) && /native code/.test(Zt(Jt)),
      tr = we.exports,
      rr = Ne,
      sr = tr("keys"),
      ir = function (e) {
          return sr[e] || (sr[e] = rr(e));
      },
      nr = {},
      or = er,
      ar = r,
      lr = S,
      cr = q,
      dr = Dt,
      ur = Le,
      hr = Pe,
      pr = ir,
      gr = nr,
      mr = "Object already initialized",
      fr = ar.TypeError,
      br = ar.WeakMap;
  if (or || hr.state) {
      var yr = hr.state || (hr.state = new br()),
          vr = lr(yr.get),
          wr = lr(yr.has),
          Er = lr(yr.set);
      (Gt = function (e, t) {
          if (wr(yr, e)) throw new fr(mr);
          return (t.facade = e), Er(yr, e, t), t;
      }),
          (Yt = function (e) {
              return vr(yr, e) || {};
          }),
          (Xt = function (e) {
              return wr(yr, e);
          });
  } else {
      var Sr = pr("state");
      (gr[Sr] = !0),
          (Gt = function (e, t) {
              if (ur(e, Sr)) throw new fr(mr);
              return (t.facade = e), dr(e, Sr, t), t;
          }),
          (Yt = function (e) {
              return ur(e, Sr) ? e[Sr] : {};
          }),
          (Xt = function (e) {
              return ur(e, Sr);
          });
  }
  var Tr = {
          set: Gt,
          get: Yt,
          has: Xt,
          enforce: function (e) {
              return Xt(e) ? Yt(e) : Gt(e, {});
          },
          getterFor: function (e) {
              return function (t) {
                  var r;
                  if (!cr(t) || (r = Yt(t)).type !== e) throw fr("Incompatible receiver, " + e + " required");
                  return r;
              };
          },
      },
      xr = n,
      Ar = Le,
      Pr = Function.prototype,
      kr = xr && Object.getOwnPropertyDescriptor,
      Or = Ar(Pr, "name"),
      Mr = Or && "something" === function () {}.name,
      Br = Or && (!xr || (xr && kr(Pr, "name").configurable)),
      Ir = r,
      Cr = N,
      Lr = Le,
      Fr = Dt,
      Rr = Te,
      _r = Qt,
      jr = { EXISTS: Or, PROPER: Mr, CONFIGURABLE: Br }.CONFIGURABLE,
      Nr = Tr.get,
      Hr = Tr.enforce,
      qr = String(String).split("String");
  (Ut.exports = function (e, t, r, s) {
      var i,
          n = !!s && !!s.unsafe,
          o = !!s && !!s.enumerable,
          a = !!s && !!s.noTargetGet,
          l = s && void 0 !== s.name ? s.name : t;
      Cr(r) &&
          ("Symbol(" === String(l).slice(0, 7) && (l = "[" + String(l).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!Lr(r, "name") || (jr && r.name !== l)) && Fr(r, "name", l),
          (i = Hr(r)).source || (i.source = qr.join("string" == typeof l ? l : ""))),
          e !== Ir ? (n ? !a && e[t] && (o = !0) : delete e[t], o ? (e[t] = r) : Fr(e, t, r)) : o ? (e[t] = r) : Rr(t, r);
  })(Function.prototype, "toString", function () {
      return (Cr(this) && Nr(this).source) || _r(this);
  });
  var zr = {},
      Dr = Math.ceil,
      Ur = Math.floor,
      Kr = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : (t > 0 ? Ur : Dr)(t);
      },
      Vr = Kr,
      Wr = Math.max,
      Gr = Math.min,
      Yr = Kr,
      Xr = Math.min,
      Qr = function (e) {
          return e > 0 ? Xr(Yr(e), 9007199254740991) : 0;
      },
      $r = function (e) {
          return Qr(e.length);
      },
      Zr = j,
      Jr = function (e, t) {
          var r = Vr(e);
          return r < 0 ? Wr(r + t, 0) : Gr(r, t);
      },
      es = $r,
      ts = function (e) {
          return function (t, r, s) {
              var i,
                  n = Zr(t),
                  o = es(n),
                  a = Jr(s, o);
              if (e && r != r) {
                  for (; o > a; ) if ((i = n[a++]) != i) return !0;
              } else for (; o > a; a++) if ((e || a in n) && n[a] === r) return e || a || 0;
              return !e && -1;
          };
      },
      rs = { includes: ts(!0), indexOf: ts(!1) },
      ss = Le,
      is = j,
      ns = rs.indexOf,
      os = nr,
      as = S([].push),
      ls = function (e, t) {
          var r,
              s = is(e),
              i = 0,
              n = [];
          for (r in s) !ss(os, r) && ss(s, r) && as(n, r);
          for (; t.length > i; ) ss(s, (r = t[i++])) && (~ns(n, r) || as(n, r));
          return n;
      },
      cs = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      ds = ls,
      us = cs.concat("length", "prototype");
  zr.f =
      Object.getOwnPropertyNames ||
      function (e) {
          return ds(e, us);
      };
  var hs = {};
  hs.f = Object.getOwnPropertySymbols;
  var ps = K,
      gs = zr,
      ms = hs,
      fs = Ot,
      bs = S([].concat),
      ys =
          ps("Reflect", "ownKeys") ||
          function (e) {
              var t = gs.f(fs(e)),
                  r = ms.f;
              return r ? bs(t, r(e)) : t;
          },
      vs = Le,
      ws = ys,
      Es = s,
      Ss = St,
      Ts = i,
      xs = N,
      As = /#|\.prototype\./,
      Ps = function (e, t) {
          var r = Os[ks(e)];
          return r == Bs || (r != Ms && (xs(t) ? Ts(t) : !!t));
      },
      ks = (Ps.normalize = function (e) {
          return String(e).replace(As, ".").toLowerCase();
      }),
      Os = (Ps.data = {}),
      Ms = (Ps.NATIVE = "N"),
      Bs = (Ps.POLYFILL = "P"),
      Is = Ps,
      Cs = r,
      Ls = s.f,
      Fs = Dt,
      Rs = Ut.exports,
      _s = Te,
      js = function (e, t, r) {
          for (var s = ws(t), i = Ss.f, n = Es.f, o = 0; o < s.length; o++) {
              var a = s[o];
              vs(e, a) || (r && vs(r, a)) || i(e, a, n(t, a));
          }
      },
      Ns = Is,
      Hs = function (e, t) {
          var r,
              s,
              i,
              n,
              o,
              a = e.target,
              l = e.global,
              c = e.stat;
          if ((r = l ? Cs : c ? Cs[a] || _s(a, {}) : (Cs[a] || {}).prototype))
              for (s in t) {
                  if (((n = t[s]), (i = e.noTargetGet ? (o = Ls(r, s)) && o.value : r[s]), !Ns(l ? s : a + (c ? "." : "#") + s, e.forced) && void 0 !== i)) {
                      if (typeof n == typeof i) continue;
                      js(n, i);
                  }
                  (e.sham || (i && i.sham)) && Fs(n, "sham", !0), Rs(r, s, n, e);
              }
      },
      qs = c,
      zs = pe,
      Ds = Ot,
      Us = K,
      Ks = me,
      Vs = r.TypeError,
      Ws = function (e) {
          var t = 0 == e,
              r = 1 == e,
              s = 2 == e,
              i = 3 == e;
          return function (e, n, o) {
              Ds(e);
              var a = Us("Promise"),
                  l = zs(e.next),
                  c = 0,
                  d = void 0 !== n;
              return (
                  (!d && t) || zs(n),
                  new a(function (u, h) {
                      var p = function (t, r) {
                              try {
                                  var s = Ks(e, "return");
                                  if (s)
                                      return a.resolve(qs(s, e)).then(
                                          function () {
                                              t(r);
                                          },
                                          function (e) {
                                              h(e);
                                          }
                                      );
                              } catch (e) {
                                  return h(e);
                              }
                              t(r);
                          },
                          g = function (e) {
                              p(h, e);
                          },
                          m = function () {
                              try {
                                  if (t && c > 9007199254740991 && d) throw Vs("The allowed number of iterations has been exceeded");
                                  a.resolve(Ds(qs(l, e))).then(function (e) {
                                      try {
                                          if (Ds(e).done) t ? ((o.length = c), u(o)) : u(!i && (s || void 0));
                                          else {
                                              var l = e.value;
                                              d
                                                  ? a.resolve(t ? n(l, c) : n(l)).then(function (e) {
                                                        r ? m() : s ? (e ? m() : p(u, !1)) : t ? ((o[c++] = e), m()) : e ? p(u, i || l) : m();
                                                    }, g)
                                                  : ((o[c++] = l), m());
                                          }
                                      } catch (e) {
                                          g(e);
                                      }
                                  }, g);
                              } catch (e) {
                                  g(e);
                              }
                          };
                      m();
                  })
              );
          };
      },
      Gs = { toArray: Ws(0), forEach: Ws(1), every: Ws(2), some: Ws(3), find: Ws(4) },
      Ys = Gs.forEach;
  Hs(
      { target: "AsyncIterator", proto: !0, real: !0, forced: !0 },
      {
          forEach: function (e) {
              return Ys(this, e);
          },
      }
  );
  var Xs = V,
      Qs = r.TypeError,
      $s = {},
      Zs = ls,
      Js = cs,
      ei =
          Object.keys ||
          function (e) {
              return Zs(e, Js);
          },
      ti = n,
      ri = Tt,
      si = St,
      ii = Ot,
      ni = j,
      oi = ei;
  $s.f =
      ti && !ri
          ? Object.defineProperties
          : function (e, t) {
                ii(e);
                for (var r, s = ni(t), i = oi(t), n = i.length, o = 0; n > o; ) si.f(e, (r = i[o++]), s[r]);
                return e;
            };
  var ai,
      li = K("document", "documentElement"),
      ci = Ot,
      di = $s,
      ui = cs,
      hi = nr,
      pi = li,
      gi = dt,
      mi = ir("IE_PROTO"),
      fi = function () {},
      bi = function (e) {
          return "<script>" + e + "</" + "script>";
      },
      yi = function (e) {
          e.write(bi("")), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
      },
      vi = function () {
          try {
              ai = new ActiveXObject("htmlfile");
          } catch (e) {}
          var e, t;
          vi =
              "undefined" != typeof document
                  ? document.domain && ai
                      ? yi(ai)
                      : (((t = gi("iframe")).style.display = "none"), pi.appendChild(t), (t.src = String("javascript:")), (e = t.contentWindow.document).open(), e.write(bi("document.F=Object")), e.close(), e.F)
                  : yi(ai);
          for (var r = ui.length; r--; ) delete vi.prototype[ui[r]];
          return vi();
      };
  hi[mi] = !0;
  var wi,
      Ei,
      Si,
      Ti =
          Object.create ||
          function (e, t) {
              var r;
              return null !== e ? ((fi.prototype = ci(e)), (r = new fi()), (fi.prototype = null), (r[mi] = e)) : (r = vi()), void 0 === t ? r : di.f(r, t);
          },
      xi = !i(function () {
          function e() {}
          return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
      }),
      Ai = r,
      Pi = Le,
      ki = N,
      Oi = Be,
      Mi = xi,
      Bi = ir("IE_PROTO"),
      Ii = Ai.Object,
      Ci = Ii.prototype,
      Li = Mi
          ? Ii.getPrototypeOf
          : function (e) {
                var t = Oi(e);
                if (Pi(t, Bi)) return t[Bi];
                var r = t.constructor;
                return ki(r) && t instanceof r ? r.prototype : t instanceof Ii ? Ci : null;
            },
      Fi = i,
      Ri = N,
      _i = Li,
      ji = Ut.exports,
      Ni = Xe("iterator"),
      Hi = !1;
  [].keys && ("next" in (Si = [].keys()) ? (Ei = _i(_i(Si))) !== Object.prototype && (wi = Ei) : (Hi = !0)),
      (null == wi ||
          Fi(function () {
              var e = {};
              return wi[Ni].call(e) !== e;
          })) &&
          (wi = {}),
      Ri(wi[Ni]) ||
          ji(wi, Ni, function () {
              return this;
          });
  var qi = { IteratorPrototype: wi, BUGGY_SAFARI_ITERATORS: Hi },
      zi = Hs,
      Di = r,
      Ui = function (e, t) {
          if (Xs(t, e)) return e;
          throw Qs("Incorrect invocation");
      },
      Ki = N,
      Vi = Dt,
      Wi = i,
      Gi = Le,
      Yi = qi.IteratorPrototype,
      Xi = Xe("toStringTag"),
      Qi = Di.Iterator,
      $i =
          !Ki(Qi) ||
          Qi.prototype !== Yi ||
          !Wi(function () {
              Qi({});
          }),
      Zi = function () {
          Ui(this, Yi);
      };
  Gi(Yi, Xi) || Vi(Yi, Xi, "Iterator"), (!$i && Gi(Yi, "constructor") && Yi.constructor !== Object) || Vi(Yi, "constructor", Zi), (Zi.prototype = Yi), zi({ global: !0, forced: $i }, { Iterator: Zi });
  var Ji = pe,
      en = o,
      tn = S(S.bind),
      rn = {},
      sn = rn,
      nn = Xe("iterator"),
      on = Array.prototype,
      an = {};
  an[Xe("toStringTag")] = "z";
  var ln = r,
      cn = "[object z]" === String(an),
      dn = N,
      un = P,
      hn = Xe("toStringTag"),
      pn = ln.Object,
      gn =
          "Arguments" ==
          un(
              (function () {
                  return arguments;
              })()
          ),
      mn = cn
          ? un
          : function (e) {
                var t, r, s;
                return void 0 === e
                    ? "Undefined"
                    : null === e
                    ? "Null"
                    : "string" ==
                      typeof (r = (function (e, t) {
                          try {
                              return e[t];
                          } catch (e) {}
                      })((t = pn(e)), hn))
                    ? r
                    : gn
                    ? un(t)
                    : "Object" == (s = un(t)) && dn(t.callee)
                    ? "Arguments"
                    : s;
            },
      fn = me,
      bn = rn,
      yn = Xe("iterator"),
      vn = function (e) {
          if (null != e) return fn(e, yn) || fn(e, "@@iterator") || bn[mn(e)];
      },
      wn = c,
      En = pe,
      Sn = Ot,
      Tn = ce,
      xn = vn,
      An = r.TypeError,
      Pn = c,
      kn = Ot,
      On = me,
      Mn = function (e, t, r) {
          var s, i;
          kn(e);
          try {
              if (!(s = On(e, "return"))) {
                  if ("throw" === t) throw r;
                  return r;
              }
              s = Pn(s, e);
          } catch (e) {
              (i = !0), (s = e);
          }
          if ("throw" === t) throw r;
          if (i) throw s;
          return kn(s), r;
      },
      Bn = function (e, t) {
          return (
              Ji(e),
              void 0 === t
                  ? e
                  : en
                  ? tn(e, t)
                  : function () {
                        return e.apply(t, arguments);
                    }
          );
      },
      In = c,
      Cn = Ot,
      Ln = ce,
      Fn = function (e) {
          return void 0 !== e && (sn.Array === e || on[nn] === e);
      },
      Rn = $r,
      _n = V,
      jn = function (e, t) {
          var r = arguments.length < 2 ? xn(e) : t;
          if (En(r)) return Sn(wn(r, e));
          throw An(Tn(e) + " is not iterable");
      },
      Nn = vn,
      Hn = Mn,
      qn = r.TypeError,
      zn = function (e, t) {
          (this.stopped = e), (this.result = t);
      },
      Dn = zn.prototype,
      Un = function (e, t, r) {
          var s,
              i,
              n,
              o,
              a,
              l,
              c,
              d = r && r.that,
              u = !(!r || !r.AS_ENTRIES),
              h = !(!r || !r.IS_ITERATOR),
              p = !(!r || !r.INTERRUPTED),
              g = Bn(t, d),
              m = function (e) {
                  return s && Hn(s, "normal", e), new zn(!0, e);
              },
              f = function (e) {
                  return u ? (Cn(e), p ? g(e[0], e[1], m) : g(e[0], e[1])) : p ? g(e, m) : g(e);
              };
          if (h) s = e;
          else {
              if (!(i = Nn(e))) throw qn(Ln(e) + " is not iterable");
              if (Fn(i)) {
                  for (n = 0, o = Rn(e); o > n; n++) if ((a = f(e[n])) && _n(Dn, a)) return a;
                  return new zn(!1);
              }
              s = jn(e, i);
          }
          for (l = s.next; !(c = In(l, s)).done; ) {
              try {
                  a = f(c.value);
              } catch (e) {
                  Hn(s, "throw", e);
              }
              if ("object" == typeof a && a && _n(Dn, a)) return a;
          }
          return new zn(!1);
      },
      Kn = Un,
      Vn = Ot;
  Hs(
      { target: "Iterator", proto: !0, real: !0, forced: !0 },
      {
          forEach: function (e) {
              Kn(Vn(this), e, { IS_ITERATOR: !0 });
          },
      }
  );
  var Wn = new (class {
      constructor() {
          this.events = [];
      }
      on(e, t, r) {
          let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          (this.events[e] || (this.events[e] = [])).push({ cb: t, context: r, once: s });
      }
      once(e, t, r) {
          this.on(e, t, r, !0);
      }
      emit(e) {
          const t = this,
              r = [].slice.call(arguments, 1);
          this.events[e] &&
              this.events[e].forEach((s, i) => {
                  s.cb.apply(s.context, r), s.once && delete t.events[e][i];
              });
      }
      off(e, t) {
          const r = this;
          this.events[e] &&
              this.events[e].forEach((s, i) => {
                  s.cb === t && delete r.events[e][i];
              });
      }
  })();
  class Gn {
      static isArray(e) {
          return e && "object" == typeof e && Array.isArray(e);
      }
      static isObject(e) {
          return e && "object" == typeof e && !Array.isArray(e);
      }
      static isString(e) {
          return e && "string" == typeof e;
      }
      static mergeDeep(e, t) {
          const r = Object.assign({}, e);
          return (
              Gn.isObject(e) &&
                  Gn.isObject(t) &&
                  Object.keys(t).forEach((s) => {
                      Gn.isObject(t[s]) ? (s in e ? (Gn.isObject(e[s]) && Gn.isObject(t[s]) ? (r[s] = Gn.mergeDeep(e[s], t[s])) : (r[s] = t[s])) : Object.assign(r, { [s]: t[s] })) : Object.assign(r, { [s]: t[s] });
                  }),
              r
          );
      }
      static toCamelCase(e) {
          return Gn.isString(e) ? e.replace(/(?:^\w|[A-Z]|\b\w)/g, (e, t) => (0 === t ? e.toLowerCase() : e.toUpperCase())).replace(/\W+/g, "") : e;
      }
      static toUpperCamelCase(e) {
          return Gn.isString(e) ? (e = Gn.toCamelCase(e)).charAt(0).toUpperCase() + e.slice(1) : e;
      }
      static isInPage(e) {
          return e !== document.body && document.body.contains(e);
      }
  }
  var Yn = new (class {
      constructor() {
          (this.eventsName = ["siteInit", "pageInit", "siteLoad", "pageLoad", "siteIn", "pageIn", "reveal", "pageFetch", "pageOut", "pageCreate", "pageKill", "siteReload"]),
              (this.events = {}),
              this.eventsName.forEach((e) => {
                  this.events[e] = { callbacks: [], done: 0 };
              }),
              (this.cycles = {
                  load: { events: ["siteInit", "pageInit", ["siteLoad", "pageLoad"], "siteIn", "pageIn", "reveal"] },
                  reload: { events: ["pageOut", "siteReload"] },
                  transition: { events: [["pageFetch", "pageOut"], "pageCreate", "pageKill", "pageInit", "pageLoad", "pageIn", "reveal"] },
                  refresh: { events: ["pageKill", "pageInit", "pageLoad", "pageIn", "reveal"] },
              }),
              (this.debug = !1);
      }
      cycle(e) {
          if (this.cycles[e]) {
              (this.cycles[e].current = 0), this.debug && console.log("Start cycle: " + e);
              for (const e in this.events) this.events[e].done = 0;
              this.proceed(e);
          }
      }
      proceed(e) {
          const t = this.cycles[e].events,
              r = this.cycles[e].current;
          if (r < t.length) {
              const s = t[r];
              Array.isArray(s)
                  ? s.forEach((t) => {
                        this.do(e, t);
                    })
                  : this.do(e, s);
          } else this.debug && console.log(e + " cycle ended");
      }
      next(e) {
          const t = this,
              r = this.cycles[e].events,
              s = this.cycles[e].current;
          if (s < r.length) {
              const i = r[s];
              let n = !0,
                  o = [];
              (o = "string" == typeof i ? Array(i) : i),
                  o.length > 1 &&
                      o.forEach((e) => {
                          (0 === t.events[e].done || t.events[e].done < t.events[e].callbacks.length) && (n = !1);
                      }),
                  n && (this.cycles[e].current++, requestAnimationFrame(this.proceed.bind(this, e)));
          }
      }
      add(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
              s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.events[e] && this.events[e].callbacks.push({ callback: t, position: r, cycle: s });
      }
      remove(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const s = this;
          this.events[e] &&
              this.events[e].callbacks.forEach((i, n) => {
                  i.callback === t && i.cycle === r && delete s.events[e].callbacks[n];
              });
      }
      do(e, t) {
          if (((this.events[t].done = 0), this.events[t].callbacks.length > 0)) {
              this.debug && console.log("Do event: " + t + " (" + e + " cycle)"), Wn.emit(Gn.toCamelCase("before-" + t));
              this.events[t].callbacks
                  .sort((e, t) => e.position - t.position)
                  .forEach((r) => {
                      null === r.cycle || r.cycle === e ? r.callback(() => this.done(e, t)) : this.done(e, t);
                  });
          } else this.done(e, t);
      }
      done(e, t) {
          this.events[t].done++,
              this.debug && console.log("Done event: " + t + " " + this.events[t].done + "/" + this.events[t].callbacks.length + " (" + e + " cycle)"),
              Wn.emit(Gn.toCamelCase("after-" + t)),
              this.events[t].done >= this.events[t].callbacks.length && this.next(e, t);
      }
      enableDebug() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.debug = e;
      }
  })();
  const Xn = {
          "Amazon Silk": "amazon_silk",
          "Android Browser": "android",
          Bada: "bada",
          BlackBerry: "blackberry",
          Chrome: "chrome",
          Chromium: "chromium",
          Electron: "electron",
          Epiphany: "epiphany",
          Firefox: "firefox",
          Focus: "focus",
          Generic: "generic",
          "Google Search": "google_search",
          Googlebot: "googlebot",
          "Internet Explorer": "ie",
          "K-Meleon": "k_meleon",
          Maxthon: "maxthon",
          "Microsoft Edge": "edge",
          "MZ Browser": "mz",
          "NAVER Whale Browser": "naver",
          Opera: "opera",
          "Opera Coast": "opera_coast",
          PhantomJS: "phantomjs",
          Puffin: "puffin",
          QupZilla: "qupzilla",
          QQ: "qq",
          QQLite: "qqlite",
          Safari: "safari",
          Sailfish: "sailfish",
          "Samsung Internet for Android": "samsung_internet",
          SeaMonkey: "seamonkey",
          Sleipnir: "sleipnir",
          Swing: "swing",
          Tizen: "tizen",
          "UC Browser": "uc",
          Vivaldi: "vivaldi",
          "WebOS Browser": "webos",
          WeChat: "wechat",
          "Yandex Browser": "yandex",
          Roku: "roku",
      },
      Qn = {
          amazon_silk: "Amazon Silk",
          android: "Android Browser",
          bada: "Bada",
          blackberry: "BlackBerry",
          chrome: "Chrome",
          chromium: "Chromium",
          electron: "Electron",
          epiphany: "Epiphany",
          firefox: "Firefox",
          focus: "Focus",
          generic: "Generic",
          googlebot: "Googlebot",
          google_search: "Google Search",
          ie: "Internet Explorer",
          k_meleon: "K-Meleon",
          maxthon: "Maxthon",
          edge: "Microsoft Edge",
          mz: "MZ Browser",
          naver: "NAVER Whale Browser",
          opera: "Opera",
          opera_coast: "Opera Coast",
          phantomjs: "PhantomJS",
          puffin: "Puffin",
          qupzilla: "QupZilla",
          qq: "QQ Browser",
          qqlite: "QQ Browser Lite",
          safari: "Safari",
          sailfish: "Sailfish",
          samsung_internet: "Samsung Internet for Android",
          seamonkey: "SeaMonkey",
          sleipnir: "Sleipnir",
          swing: "Swing",
          tizen: "Tizen",
          uc: "UC Browser",
          vivaldi: "Vivaldi",
          webos: "WebOS Browser",
          wechat: "WeChat",
          yandex: "Yandex Browser",
      },
      $n = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" },
      Zn = {
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MacOS: "macOS",
          iOS: "iOS",
          Android: "Android",
          WebOS: "WebOS",
          BlackBerry: "BlackBerry",
          Bada: "Bada",
          Tizen: "Tizen",
          Linux: "Linux",
          ChromeOS: "Chrome OS",
          PlayStation4: "PlayStation 4",
          Roku: "Roku",
      },
      Jn = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
  class eo {
      static getFirstMatch(e, t) {
          const r = t.match(e);
          return (r && r.length > 0 && r[1]) || "";
      }
      static getSecondMatch(e, t) {
          const r = t.match(e);
          return (r && r.length > 1 && r[2]) || "";
      }
      static matchAndReturnConst(e, t, r) {
          if (e.test(t)) return r;
      }
      static getWindowsVersionName(e) {
          switch (e) {
              case "NT":
                  return "NT";
              case "XP":
                  return "XP";
              case "NT 5.0":
                  return "2000";
              case "NT 5.1":
                  return "XP";
              case "NT 5.2":
                  return "2003";
              case "NT 6.0":
                  return "Vista";
              case "NT 6.1":
                  return "7";
              case "NT 6.2":
                  return "8";
              case "NT 6.3":
                  return "8.1";
              case "NT 10.0":
                  return "10";
              default:
                  return;
          }
      }
      static getMacOSVersionName(e) {
          const t = e
              .split(".")
              .splice(0, 2)
              .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), 10 === t[0]))
              switch (t[1]) {
                  case 5:
                      return "Leopard";
                  case 6:
                      return "Snow Leopard";
                  case 7:
                      return "Lion";
                  case 8:
                      return "Mountain Lion";
                  case 9:
                      return "Mavericks";
                  case 10:
                      return "Yosemite";
                  case 11:
                      return "El Capitan";
                  case 12:
                      return "Sierra";
                  case 13:
                      return "High Sierra";
                  case 14:
                      return "Mojave";
                  case 15:
                      return "Catalina";
                  default:
                      return;
              }
      }
      static getAndroidVersionName(e) {
          const t = e
              .split(".")
              .splice(0, 2)
              .map((e) => parseInt(e, 10) || 0);
          if ((t.push(0), !(1 === t[0] && t[1] < 5)))
              return 1 === t[0] && t[1] < 6
                  ? "Cupcake"
                  : 1 === t[0] && t[1] >= 6
                  ? "Donut"
                  : 2 === t[0] && t[1] < 2
                  ? "Eclair"
                  : 2 === t[0] && 2 === t[1]
                  ? "Froyo"
                  : 2 === t[0] && t[1] > 2
                  ? "Gingerbread"
                  : 3 === t[0]
                  ? "Honeycomb"
                  : 4 === t[0] && t[1] < 1
                  ? "Ice Cream Sandwich"
                  : 4 === t[0] && t[1] < 4
                  ? "Jelly Bean"
                  : 4 === t[0] && t[1] >= 4
                  ? "KitKat"
                  : 5 === t[0]
                  ? "Lollipop"
                  : 6 === t[0]
                  ? "Marshmallow"
                  : 7 === t[0]
                  ? "Nougat"
                  : 8 === t[0]
                  ? "Oreo"
                  : 9 === t[0]
                  ? "Pie"
                  : void 0;
      }
      static getVersionPrecision(e) {
          return e.split(".").length;
      }
      static compareVersions(e, t, r = !1) {
          const s = eo.getVersionPrecision(e),
              i = eo.getVersionPrecision(t);
          let n = Math.max(s, i),
              o = 0;
          const a = eo.map([e, t], (e) => {
              const t = n - eo.getVersionPrecision(e),
                  r = e + new Array(t + 1).join(".0");
              return eo.map(r.split("."), (e) => new Array(20 - e.length).join("0") + e).reverse();
          });
          for (r && (o = n - Math.min(s, i)), n -= 1; n >= o; ) {
              if (a[0][n] > a[1][n]) return 1;
              if (a[0][n] === a[1][n]) {
                  if (n === o) return 0;
                  n -= 1;
              } else if (a[0][n] < a[1][n]) return -1;
          }
      }
      static map(e, t) {
          const r = [];
          let s;
          if (Array.prototype.map) return Array.prototype.map.call(e, t);
          for (s = 0; s < e.length; s += 1) r.push(t(e[s]));
          return r;
      }
      static find(e, t) {
          let r, s;
          if (Array.prototype.find) return Array.prototype.find.call(e, t);
          for (r = 0, s = e.length; r < s; r += 1) {
              const s = e[r];
              if (t(s, r)) return s;
          }
      }
      static assign(e, ...t) {
          const r = e;
          let s, i;
          if (Object.assign) return Object.assign(e, ...t);
          for (s = 0, i = t.length; s < i; s += 1) {
              const e = t[s];
              if ("object" == typeof e && null !== e) {
                  Object.keys(e).forEach((t) => {
                      r[t] = e[t];
                  });
              }
          }
          return e;
      }
      static getBrowserAlias(e) {
          return Xn[e];
      }
      static getBrowserTypeByAlias(e) {
          return Qn[e] || "";
      }
  }
  const to = /version\/(\d+(\.?_?\d+)+)/i,
      ro = [
          {
              test: [/googlebot/i],
              describe(e) {
                  const t = { name: "Googlebot" },
                      r = eo.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/opera/i],
              describe(e) {
                  const t = { name: "Opera" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/opr\/|opios/i],
              describe(e) {
                  const t = { name: "Opera" },
                      r = eo.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/SamsungBrowser/i],
              describe(e) {
                  const t = { name: "Samsung Internet for Android" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/Whale/i],
              describe(e) {
                  const t = { name: "NAVER Whale Browser" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/MZBrowser/i],
              describe(e) {
                  const t = { name: "MZ Browser" },
                      r = eo.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/focus/i],
              describe(e) {
                  const t = { name: "Focus" },
                      r = eo.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/swing/i],
              describe(e) {
                  const t = { name: "Swing" },
                      r = eo.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/coast/i],
              describe(e) {
                  const t = { name: "Opera Coast" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/opt\/\d+(?:.?_?\d+)+/i],
              describe(e) {
                  const t = { name: "Opera Touch" },
                      r = eo.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/yabrowser/i],
              describe(e) {
                  const t = { name: "Yandex Browser" },
                      r = eo.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/ucbrowser/i],
              describe(e) {
                  const t = { name: "UC Browser" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/Maxthon|mxios/i],
              describe(e) {
                  const t = { name: "Maxthon" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/epiphany/i],
              describe(e) {
                  const t = { name: "Epiphany" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/puffin/i],
              describe(e) {
                  const t = { name: "Puffin" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/sleipnir/i],
              describe(e) {
                  const t = { name: "Sleipnir" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/k-meleon/i],
              describe(e) {
                  const t = { name: "K-Meleon" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/micromessenger/i],
              describe(e) {
                  const t = { name: "WeChat" },
                      r = eo.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/qqbrowser/i],
              describe(e) {
                  const t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" },
                      r = eo.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/msie|trident/i],
              describe(e) {
                  const t = { name: "Internet Explorer" },
                      r = eo.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/\sedg\//i],
              describe(e) {
                  const t = { name: "Microsoft Edge" },
                      r = eo.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/edg([ea]|ios)/i],
              describe(e) {
                  const t = { name: "Microsoft Edge" },
                      r = eo.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/vivaldi/i],
              describe(e) {
                  const t = { name: "Vivaldi" },
                      r = eo.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/seamonkey/i],
              describe(e) {
                  const t = { name: "SeaMonkey" },
                      r = eo.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/sailfish/i],
              describe(e) {
                  const t = { name: "Sailfish" },
                      r = eo.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/silk/i],
              describe(e) {
                  const t = { name: "Amazon Silk" },
                      r = eo.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/phantom/i],
              describe(e) {
                  const t = { name: "PhantomJS" },
                      r = eo.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/slimerjs/i],
              describe(e) {
                  const t = { name: "SlimerJS" },
                      r = eo.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe(e) {
                  const t = { name: "BlackBerry" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/(web|hpw)[o0]s/i],
              describe(e) {
                  const t = { name: "WebOS Browser" },
                      r = eo.getFirstMatch(to, e) || eo.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/bada/i],
              describe(e) {
                  const t = { name: "Bada" },
                      r = eo.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/tizen/i],
              describe(e) {
                  const t = { name: "Tizen" },
                      r = eo.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/qupzilla/i],
              describe(e) {
                  const t = { name: "QupZilla" },
                      r = eo.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/firefox|iceweasel|fxios/i],
              describe(e) {
                  const t = { name: "Firefox" },
                      r = eo.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/electron/i],
              describe(e) {
                  const t = { name: "Electron" },
                      r = eo.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/MiuiBrowser/i],
              describe(e) {
                  const t = { name: "Miui" },
                      r = eo.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/chromium/i],
              describe(e) {
                  const t = { name: "Chromium" },
                      r = eo.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/chrome|crios|crmo/i],
              describe(e) {
                  const t = { name: "Chrome" },
                      r = eo.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/GSA/i],
              describe(e) {
                  const t = { name: "Google Search" },
                      r = eo.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test(e) {
                  const t = !e.test(/like android/i),
                      r = e.test(/android/i);
                  return t && r;
              },
              describe(e) {
                  const t = { name: "Android Browser" },
                      r = eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/playstation 4/i],
              describe(e) {
                  const t = { name: "PlayStation 4" },
                      r = eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/safari|applewebkit/i],
              describe(e) {
                  const t = { name: "Safari" },
                      r = eo.getFirstMatch(to, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/.*/i],
              describe(e) {
                  const t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                  return { name: eo.getFirstMatch(t, e), version: eo.getSecondMatch(t, e) };
              },
          },
      ];
  var so = [
          {
              test: [/Roku\/DVP/],
              describe(e) {
                  const t = eo.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                  return { name: Zn.Roku, version: t };
              },
          },
          {
              test: [/windows phone/i],
              describe(e) {
                  const t = eo.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                  return { name: Zn.WindowsPhone, version: t };
              },
          },
          {
              test: [/windows /i],
              describe(e) {
                  const t = eo.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                      r = eo.getWindowsVersionName(t);
                  return { name: Zn.Windows, version: t, versionName: r };
              },
          },
          {
              test: [/Macintosh(.*?) FxiOS(.*?)\//],
              describe(e) {
                  const t = { name: Zn.iOS },
                      r = eo.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: [/macintosh/i],
              describe(e) {
                  const t = eo.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                      r = eo.getMacOSVersionName(t),
                      s = { name: Zn.MacOS, version: t };
                  return r && (s.versionName = r), s;
              },
          },
          {
              test: [/(ipod|iphone|ipad)/i],
              describe(e) {
                  const t = eo.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                  return { name: Zn.iOS, version: t };
              },
          },
          {
              test(e) {
                  const t = !e.test(/like android/i),
                      r = e.test(/android/i);
                  return t && r;
              },
              describe(e) {
                  const t = eo.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                      r = eo.getAndroidVersionName(t),
                      s = { name: Zn.Android, version: t };
                  return r && (s.versionName = r), s;
              },
          },
          {
              test: [/(web|hpw)[o0]s/i],
              describe(e) {
                  const t = eo.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                      r = { name: Zn.WebOS };
                  return t && t.length && (r.version = t), r;
              },
          },
          {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe(e) {
                  const t = eo.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || eo.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || eo.getFirstMatch(/\bbb(\d+)/i, e);
                  return { name: Zn.BlackBerry, version: t };
              },
          },
          {
              test: [/bada/i],
              describe(e) {
                  const t = eo.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                  return { name: Zn.Bada, version: t };
              },
          },
          {
              test: [/tizen/i],
              describe(e) {
                  const t = eo.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                  return { name: Zn.Tizen, version: t };
              },
          },
          { test: [/linux/i], describe: () => ({ name: Zn.Linux }) },
          { test: [/CrOS/], describe: () => ({ name: Zn.ChromeOS }) },
          {
              test: [/PlayStation 4/],
              describe(e) {
                  const t = eo.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                  return { name: Zn.PlayStation4, version: t };
              },
          },
      ],
      io = [
          { test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) },
          {
              test: [/huawei/i],
              describe(e) {
                  const t = eo.getFirstMatch(/(can-l01)/i, e) && "Nova",
                      r = { type: $n.mobile, vendor: "Huawei" };
                  return t && (r.model = t), r;
              },
          },
          { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: $n.tablet, vendor: "Nexus" }) },
          { test: [/ipad/i], describe: () => ({ type: $n.tablet, vendor: "Apple", model: "iPad" }) },
          { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: $n.tablet, vendor: "Apple", model: "iPad" }) },
          { test: [/kftt build/i], describe: () => ({ type: $n.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) },
          { test: [/silk/i], describe: () => ({ type: $n.tablet, vendor: "Amazon" }) },
          { test: [/tablet(?! pc)/i], describe: () => ({ type: $n.tablet }) },
          {
              test(e) {
                  const t = e.test(/ipod|iphone/i),
                      r = e.test(/like (ipod|iphone)/i);
                  return t && !r;
              },
              describe(e) {
                  const t = eo.getFirstMatch(/(ipod|iphone)/i, e);
                  return { type: $n.mobile, vendor: "Apple", model: t };
              },
          },
          { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: $n.mobile, vendor: "Nexus" }) },
          { test: [/[^-]mobi/i], describe: () => ({ type: $n.mobile }) },
          { test: (e) => "blackberry" === e.getBrowserName(!0), describe: () => ({ type: $n.mobile, vendor: "BlackBerry" }) },
          { test: (e) => "bada" === e.getBrowserName(!0), describe: () => ({ type: $n.mobile }) },
          { test: (e) => "windows phone" === e.getBrowserName(), describe: () => ({ type: $n.mobile, vendor: "Microsoft" }) },
          {
              test(e) {
                  const t = Number(String(e.getOSVersion()).split(".")[0]);
                  return "android" === e.getOSName(!0) && t >= 3;
              },
              describe: () => ({ type: $n.tablet }),
          },
          { test: (e) => "android" === e.getOSName(!0), describe: () => ({ type: $n.mobile }) },
          { test: (e) => "macos" === e.getOSName(!0), describe: () => ({ type: $n.desktop, vendor: "Apple" }) },
          { test: (e) => "windows" === e.getOSName(!0), describe: () => ({ type: $n.desktop }) },
          { test: (e) => "linux" === e.getOSName(!0), describe: () => ({ type: $n.desktop }) },
          { test: (e) => "playstation 4" === e.getOSName(!0), describe: () => ({ type: $n.tv }) },
          { test: (e) => "roku" === e.getOSName(!0), describe: () => ({ type: $n.tv }) },
      ],
      no = [
          {
              test: (e) => "microsoft edge" === e.getBrowserName(!0),
              describe(e) {
                  if (/\sedg\//i.test(e)) return { name: Jn.Blink };
                  const t = eo.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                  return { name: Jn.EdgeHTML, version: t };
              },
          },
          {
              test: [/trident/i],
              describe(e) {
                  const t = { name: Jn.Trident },
                      r = eo.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test: (e) => e.test(/presto/i),
              describe(e) {
                  const t = { name: Jn.Presto },
                      r = eo.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          {
              test(e) {
                  const t = e.test(/gecko/i),
                      r = e.test(/like gecko/i);
                  return t && !r;
              },
              describe(e) {
                  const t = { name: Jn.Gecko },
                      r = eo.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
          { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Jn.Blink }) },
          {
              test: [/(apple)?webkit/i],
              describe(e) {
                  const t = { name: Jn.WebKit },
                      r = eo.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                  return r && (t.version = r), t;
              },
          },
      ];
  class oo {
      constructor(e, t = !1) {
          if (null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
          (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
      }
      getUA() {
          return this._ua;
      }
      test(e) {
          return e.test(this._ua);
      }
      parseBrowser() {
          this.parsedResult.browser = {};
          const e = eo.find(ro, (e) => {
              if ("function" == typeof e.test) return e.test(this);
              if (e.test instanceof Array) return e.test.some((e) => this.test(e));
              throw new Error("Browser's test function is not valid");
          });
          return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
      }
      getBrowser() {
          return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
      }
      getBrowserName(e) {
          return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
      }
      getBrowserVersion() {
          return this.getBrowser().version;
      }
      getOS() {
          return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
      }
      parseOS() {
          this.parsedResult.os = {};
          const e = eo.find(so, (e) => {
              if ("function" == typeof e.test) return e.test(this);
              if (e.test instanceof Array) return e.test.some((e) => this.test(e));
              throw new Error("Browser's test function is not valid");
          });
          return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
      }
      getOSName(e) {
          const { name: t } = this.getOS();
          return e ? String(t).toLowerCase() || "" : t || "";
      }
      getOSVersion() {
          return this.getOS().version;
      }
      getPlatform() {
          return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
      }
      getPlatformType(e = !1) {
          const { type: t } = this.getPlatform();
          return e ? String(t).toLowerCase() || "" : t || "";
      }
      parsePlatform() {
          this.parsedResult.platform = {};
          const e = eo.find(io, (e) => {
              if ("function" == typeof e.test) return e.test(this);
              if (e.test instanceof Array) return e.test.some((e) => this.test(e));
              throw new Error("Browser's test function is not valid");
          });
          return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
      }
      getEngine() {
          return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
      }
      getEngineName(e) {
          return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
      }
      parseEngine() {
          this.parsedResult.engine = {};
          const e = eo.find(no, (e) => {
              if ("function" == typeof e.test) return e.test(this);
              if (e.test instanceof Array) return e.test.some((e) => this.test(e));
              throw new Error("Browser's test function is not valid");
          });
          return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
      }
      parse() {
          return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
      }
      getResult() {
          return eo.assign({}, this.parsedResult);
      }
      satisfies(e) {
          const t = {};
          let r = 0;
          const s = {};
          let i = 0;
          if (
              (Object.keys(e).forEach((n) => {
                  const o = e[n];
                  "string" == typeof o ? ((s[n] = o), (i += 1)) : "object" == typeof o && ((t[n] = o), (r += 1));
              }),
              r > 0)
          ) {
              const e = Object.keys(t),
                  r = eo.find(e, (e) => this.isOS(e));
              if (r) {
                  const e = this.satisfies(t[r]);
                  if (void 0 !== e) return e;
              }
              const s = eo.find(e, (e) => this.isPlatform(e));
              if (s) {
                  const e = this.satisfies(t[s]);
                  if (void 0 !== e) return e;
              }
          }
          if (i > 0) {
              const e = Object.keys(s),
                  t = eo.find(e, (e) => this.isBrowser(e, !0));
              if (void 0 !== t) return this.compareVersion(s[t]);
          }
      }
      isBrowser(e, t = !1) {
          const r = this.getBrowserName().toLowerCase();
          let s = e.toLowerCase();
          const i = eo.getBrowserTypeByAlias(s);
          return t && i && (s = i.toLowerCase()), s === r;
      }
      compareVersion(e) {
          let t = [0],
              r = e,
              s = !1;
          const i = this.getBrowserVersion();
          if ("string" == typeof i)
              return (
                  ">" === e[0] || "<" === e[0]
                      ? ((r = e.substr(1)), "=" === e[1] ? ((s = !0), (r = e.substr(2))) : (t = []), ">" === e[0] ? t.push(1) : t.push(-1))
                      : "=" === e[0]
                      ? (r = e.substr(1))
                      : "~" === e[0] && ((s = !0), (r = e.substr(1))),
                  t.indexOf(eo.compareVersions(i, r, s)) > -1
              );
      }
      isOS(e) {
          return this.getOSName(!0) === String(e).toLowerCase();
      }
      isPlatform(e) {
          return this.getPlatformType(!0) === String(e).toLowerCase();
      }
      isEngine(e) {
          return this.getEngineName(!0) === String(e).toLowerCase();
      }
      is(e, t = !1) {
          return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
      }
      some(e = []) {
          return e.some((e) => this.is(e));
      }
  }
  /*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   */ var ao = new (class {
      constructor() {
          (this.settings = {
              cursor: { disabled: ["tablet", "mobile"], inertia: 1, trailLength: 10 },
              intersection: { threshold: 0.3 },
              lottie: { renderer: "svg", subFrame: !0 },
              mouse: { inertia: 0.1 },
              parallax: { inertia: 0.1 },
              preloader: { duration: 0 },
              reveal: { stagger: 0.1, threshold: 0.15 },
              scroll: { inertia: 0.1 },
              smooth: { disabled: ["tablet", "mobile", { safari: "<=12" }], inertia: 0.1 },
              sticky: { disabled: ["tablet", "mobile"] },
              ticker: { external: !1 },
              transition: { reload: !1 },
          }),
              (this.timeouts = { resizeThrottle: null, scrollEnd: null }),
              (this.windowWidth = 1),
              (this.windowHeight = 1),
              (this.clientWidth = 1),
              (window.scrollTop = window.scrollY),
              (window.unifiedScrollTop = window.scrollTop),
              (window.maxScrollTop = 1),
              (window.scrollProgress = 0),
              (this.previousScrollTop = window.scrollY),
              (this.isScrolling = !1),
              (window.mouseX = -1),
              (window.mouseY = -1),
              (window.mouseLastScrollTop = 0),
              (window.browser = class {
                  static getParser(e, t = !1) {
                      if ("string" != typeof e) throw new Error("UserAgent should be a string");
                      return new oo(e, t);
                  }
                  static parse(e) {
                      return new oo(e).getResult();
                  }
                  static get BROWSER_MAP() {
                      return Qn;
                  }
                  static get ENGINE_MAP() {
                      return Jn;
                  }
                  static get OS_MAP() {
                      return Zn;
                  }
                  static get PLATFORMS_MAP() {
                      return $n;
                  }
              }.getParser(window.navigator.userAgent)),
              document.documentElement.classList.add("is-" + window.browser.getPlatformType()),
              (window.browser.is("mobile") || window.browser.is("tablet")) && document.documentElement.classList.add("is-handheld"),
              window.browser.is("Safari") && (document.documentElement.classList.add("is-safari"), document.documentElement.classList.add("is-safari-" + window.browser.getBrowserVersion())),
              Yn.add("siteInit", this.siteInit.bind(this), 999),
              this.bindEvents();
      }
      setSettings(e) {
          this.settings = Gn.mergeDeep(this.settings, e);
      }
      siteInit(e) {
          this.setCSSProperties(), this.scrollHandler(), e();
      }
      bindEvents() {
          window.addEventListener("mousemove", this.mouseHandler.bind(this), { passive: !0 }),
              window.addEventListener("resize", this.resizeThrottle.bind(this)),
              window.addEventListener("scroll", this.scrollHandler.bind(this), { passive: !0 });
      }
      mouseHandler(e) {
          const t = e.pageX,
              r = e.pageY - window.scrollTop;
          (window.mouseX = t), (window.mouseY = r), Wn.emit("mouseMove", e);
      }
      resizeThrottle() {
          clearTimeout(this.timeouts.resizeThrottle), (this.timeouts.resizeThrottle = setTimeout(this.resizeHandler.bind(this), 200));
      }
      resizeHandler() {
          this.setCSSProperties(), Wn.emit("resize");
      }
      setCSSProperties() {
          const e = window.innerWidth;
          this.windowWidth !== e && ((this.windowWidth = e), (this.clientWidth = document.body.clientWidth));
          const t = window.innerHeight;
          this.windowHeight !== t && ((this.windowHeight = t), (this.clientHeight = document.body.clientHeight)),
              requestAnimationFrame(() => {
                  document.documentElement.style.setProperty("--vw", 0.01 * this.windowWidth + "px"),
                      document.documentElement.style.setProperty("--cw", 0.01 * this.clientWidth + "px"),
                      document.documentElement.style.setProperty("--vh", 0.01 * this.windowHeight + "px"),
                      document.documentElement.style.setProperty("--ch", 0.01 * this.clientHeight + "px");
              });
      }
      scrollHandler() {
          (window.scrollTop = window.scrollY),
              this.isScrolling || this.scrollStart(),
              clearTimeout(this.timeouts.scrollEnd),
              (this.timeouts.scrollEnd = setTimeout(this.scrollEnd.bind(this), 200)),
              (this.previousScrollTop = window.scrollTop),
              (window.scrollProgress = window.scrollTop / window.maxScrollTop),
              window.hasSmoothScroll || ((window.unifiedScrollTop = window.scrollTop), Wn.emit("scroll"));
      }
      scrollStart() {
          (this.isScrolling = !0), document.documentElement.classList.add("is-scrolling"), Wn.emit("scrollStart");
      }
      scrollEnd() {
          (this.isScrolling = !1), document.documentElement.classList.remove("is-scrolling"), Wn.emit("scrollEnd");
      }
  })();
  var lo = new (class {
          constructor() {
              (this.elements = []), Yn.add("siteInit", this.init.bind(this), 20);
          }
          init(e) {
              this.createObserver(), e();
          }
          createObserver() {
              this.observer = new IntersectionObserver(this.intersectionCallback.bind(this), { threshold: [ao.settings.intersection.threshold] });
          }
          intersectionCallback(e) {
              e.forEach((e) => {
                  const t = e.target;
                  let r = "in";
                  e.isIntersecting || (r = e.boundingClientRect.y <= 0 ? "above" : "under"),
                      t.luge.viewport.position !== r &&
                          ((t.luge.viewport.position = r),
                          t.dispatchEvent(new CustomEvent("viewportintersect")),
                          "in" === r ? t.dispatchEvent(new CustomEvent("viewportin")) : (t.dispatchEvent(new CustomEvent("viewportout")), t.dispatchEvent(new CustomEvent("viewport" + r))));
              });
          }
          add(e) {
              this.observer.observe(e);
              const t = { viewport: { position: "out" } };
              (e.luge || (e.luge = {})) && (e.luge = Gn.mergeDeep(e.luge, t));
          }
          remove(e) {
              this.observer.unobserve(e);
          }
      })(),
      co = Hs,
      uo = Math.min,
      ho = Math.max;
  co(
      { target: "Math", stat: !0, forced: !0 },
      {
          clamp: function (e, t, r) {
              return uo(r, ho(t, e));
          },
      }
  );
  var po = new (class {
      constructor() {
          (this.callbacks = []), (this.onceCallbacks = []), ao.settings.ticker.external || ((this.fps = 60), (this.fpsInterval = 1e3 / this.fps), (this.lastTickTime = null), requestAnimationFrame(this.tick.bind(this)));
      }
      add(e, t) {
          let r = !1;
          this.callbacks.forEach((s) => {
              s.cb === e && s.context === t && (r = !0);
          }),
              r || this.callbacks.push({ cb: e, context: t });
      }
      remove(e, t) {
          const r = this;
          this.callbacks.forEach((s, i) => {
              s.cb === e && s.context === t && delete r.callbacks[i];
          });
      }
      nextTick(e, t) {
          this.onceCallbacks.push({ cb: e, context: t });
      }
      tick(e) {
          const t = this,
              r = e - this.lastTickTime;
          r > this.fpsInterval &&
              (this.callbacks.forEach((t) => {
                  t.cb.apply(t.context, [e]);
              }),
              this.onceCallbacks.forEach((r, s) => {
                  r.cb.apply(r.context, [e]), delete t.onceCallbacks[s];
              }),
              (this.lastTickTime = e - (r % this.fpsInterval))),
              ao.settings.ticker.external || requestAnimationFrame(this.tick.bind(this));
      }
  })();
  var go = new (class {
      constructor() {
          (this.elements = []), (this.elementsToBound = []), Yn.add("pageKill", this.pageKill.bind(this)), Yn.add("pageInit", this.init.bind(this), 20), po.add(this.tick, this), this.bindEvents();
      }
      bindEvents() {
          Wn.on("mouseMove", this.mouseHandler, this), Wn.on("resize", this.resizeHandler, this), Wn.on("update", this.updateHandler, this);
      }
      pageKill(e) {
          (this.elements = []), (this.elementsToBound = []), e();
      }
      init(e) {
          this.getBoundingThrottle(), e();
      }
      resizeHandler() {
          this.getBoundingThrottle();
      }
      updateHandler() {
          po.nextTick(() => {
              this.getBoundingThrottle();
          }, this);
      }
      mouseHandler() {
          const e = this;
          this.elements.forEach((t) => {
              e.setElementPosition(t);
          }),
              (window.mouseLastScrollTop = window.scrollTop);
      }
      getBoundingThrottle() {
          this.elements.forEach((e) => {
              this.elementsToBound.includes(e) || this.elementsToBound.push(e);
          }),
              po.nextTick(this.getBounding.bind(this));
      }
      getBounding() {
          this.elementsToBound.forEach((e) => {
              this.setElementBounding(e), this.setElementPosition(e);
          }),
              (this.elementsToBound = []);
      }
      setElementBounding(e) {
          const t = e.getAttribute("style");
          e.setAttribute("style", "");
          const r = e.getBoundingClientRect(),
              s = { anchor: { x: r.left, y: r.top + window.unifiedScrollTop }, width: e.offsetWidth, height: e.offsetHeight };
          (e.luge || (e.luge = {})) && (e.luge = Gn.mergeDeep(e.luge, s)), e.setAttribute("style", t);
      }
      setElementPosition(e) {
          if (e.luge && e.luge.anchor) {
              const t = { x: window.mouseX - e.luge.anchor.x, y: window.mouseY - e.luge.anchor.y + window.unifiedScrollTop };
              (t.progressX = Math.clamp(t.x / e.luge.width, 0, 1)), (t.progressY = Math.clamp(t.y / e.luge.height, 0, 1)), (e.luge.mouse = Gn.mergeDeep(e.luge.mouse, t));
          }
      }
      add(e) {
          this.elements.includes(e) || (this.elementsToBound.includes(e) || this.elementsToBound.push(e), this.elements.push(e));
      }
      remove(e) {
          this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1), this.elementsToBound.includes(e) && this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1);
      }
      tick() {
          const e = this;
          0 !== window.scrollTop - window.mouseLastScrollTop &&
              this.elements.forEach((t) => {
                  e.setElementPosition(t);
              });
      }
  })();
  var mo = new (class {
          constructor() {
              (this.elements = []), (this.elementsToBound = []), (this.elementsToCheck = []), this.setMaxScrollTop(), Yn.add("pageKill", this.pageKill.bind(this)), Yn.add("pageInit", this.init.bind(this), 20), this.bindEvents();
          }
          bindEvents() {
              Wn.on("resize", this.resizeHandler, this), Wn.on("scroll", this.scrollHandler, this), Wn.on("update", this.updateHandler, this);
          }
          pageKill(e) {
              (this.elements = []), (this.elementsToBound = []), (this.elementsToCheck = []), e();
          }
          init(e) {
              this.getBoundingThrottle(), this.checkElementsThrottle(), e();
          }
          resizeHandler() {
              this.getBoundingThrottle(), this.checkElementsThrottle();
          }
          scrollHandler() {
              this.checkElementsThrottle();
          }
          updateHandler() {
              po.nextTick(() => {
                  this.getBoundingThrottle(), this.checkElementsThrottle();
              }, this);
          }
          setMaxScrollTop() {
              window.maxScrollTop =
                  Math.max(
                      document.body ? document.body.scrollHeight : 0,
                      document.body ? document.body.offsetHeight : 0,
                      document.documentElement.clientHeight,
                      document.documentElement.scrollHeight,
                      document.documentElement.offsetHeight
                  ) - window.innerHeight;
          }
          getBoundingThrottle() {
              this.setMaxScrollTop(),
                  this.elements.forEach((e) => {
                      this.elementsToBound.includes(e) || ((e.scrollProgress = 0), this.elementsToBound.push(e));
                  }),
                  po.nextTick(this.getBounding.bind(this));
          }
          getBounding() {
              this.elementsToBound.forEach((e) => {
                  this.setElementBounding(e);
              }),
                  (this.elementsToBound = []);
          }
          setElementBounding(e) {
              const t = e.getAttribute("style");
              e.setAttribute("style", "");
              const r = e.getBoundingClientRect();
              (e.scrollStart = r.top + window.unifiedScrollTop - window.innerHeight),
                  (e.scrollEnd = e.scrollStart + e.clientHeight + window.innerHeight),
                  (e.scrollEnd = Math.min(e.scrollEnd, window.maxScrollTop)),
                  (e.scrollMiddle = e.scrollStart + (e.scrollEnd - e.scrollStart) / 2),
                  e.setAttribute("style", t);
          }
          checkElementsThrottle() {
              this.elements.forEach((e) => {
                  this.elementsToCheck.includes(e) || this.elementsToCheck.push(e);
              }),
                  po.nextTick(this.checkElements.bind(this));
          }
          checkElements() {
              this.elementsToCheck.forEach((e) => {
                  this.checkElement(e);
              }),
                  (this.elementsToCheck = []);
          }
          checkElement(e) {
              const t = window.unifiedScrollTop;
              let r = "",
                  s = Math.min(Math.max((t - e.scrollStart) / (e.scrollEnd - e.scrollStart), 0), 1);
              isNaN(s) && (s = 0),
                  (r = s <= 0 ? "under" : s >= 1 && e.scrollEnd < window.maxScrollTop ? "above" : "in"),
                  (e.scrollProgress = s),
                  e.viewportPosition !== r
                      ? ((e.viewportPosition = r),
                        e.dispatchEvent(new CustomEvent("viewportintersect")),
                        e.dispatchEvent(new CustomEvent("viewport" + r)),
                        "in" !== r && e.dispatchEvent(new CustomEvent("viewportout")),
                        e.dispatchEvent(new CustomEvent("scrollprogress")))
                      : s > 0 && s < 1 && e.dispatchEvent(new CustomEvent("scrollprogress"));
          }
          add(e) {
              this.elements.includes(e) || ((e.scrollProgress = 0), this.elementsToBound.includes(e) || (this.elementsToBound.push(e), this.elementsToCheck.push(e)), this.elements.push(e));
          }
          remove(e) {
              this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1),
                  this.elementsToBound.includes(e) && this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1),
                  this.elementsToCheck.includes(e) && this.elementsToCheck.splice(this.elementsToCheck.indexOf(e), 1);
          }
      })(),
      fo = Hs,
      bo = r,
      yo = c,
      vo = pe,
      wo = Ot,
      Eo = K("Promise"),
      So = bo.TypeError;
  fo(
      { target: "AsyncIterator", proto: !0, real: !0, forced: !0 },
      {
          reduce: function (e) {
              var t = wo(this),
                  r = vo(t.next),
                  s = arguments.length < 2,
                  i = s ? void 0 : arguments[1];
              return (
                  vo(e),
                  new Eo(function (n, o) {
                      var a = function () {
                          try {
                              Eo.resolve(wo(yo(r, t))).then(function (t) {
                                  try {
                                      if (wo(t).done) s ? o(So("Reduce of empty iterator with no initial value")) : n(i);
                                      else {
                                          var r = t.value;
                                          s
                                              ? ((s = !1), (i = r), a())
                                              : Eo.resolve(e(i, r)).then(function (e) {
                                                    (i = e), a();
                                                }, o);
                                      }
                                  } catch (e) {
                                      o(e);
                                  }
                              }, o);
                          } catch (e) {
                              o(e);
                          }
                      };
                      a();
                  })
              );
          },
      }
  );
  var To = Hs,
      xo = Un,
      Ao = pe,
      Po = Ot,
      ko = r.TypeError;
  To(
      { target: "Iterator", proto: !0, real: !0, forced: !0 },
      {
          reduce: function (e) {
              Po(this), Ao(e);
              var t = arguments.length < 2,
                  r = t ? void 0 : arguments[1];
              if (
                  (xo(
                      this,
                      function (s) {
                          t ? ((t = !1), (r = s)) : (r = e(r, s));
                      },
                      { IS_ITERATOR: !0 }
                  ),
                  t)
              )
                  throw ko("Reduce of empty iterator with no initial value");
              return r;
          },
      }
  );
  var Oo = Gs.some;
  Hs(
      { target: "AsyncIterator", proto: !0, real: !0, forced: !0 },
      {
          some: function (e) {
              return Oo(this, e);
          },
      }
  );
  var Mo = Un,
      Bo = pe,
      Io = Ot;
  Hs(
      { target: "Iterator", proto: !0, real: !0, forced: !0 },
      {
          some: function (e) {
              return (
                  Io(this),
                  Bo(e),
                  Mo(
                      this,
                      function (t, r) {
                          if (e(t)) return r();
                      },
                      { IS_ITERATOR: !0, INTERRUPTED: !0 }
                  ).stopped
              );
          },
      }
  );
  class Co {
      constructor(e) {
          (this.pluginSlug = e), Yn.add("siteInit", this.beforeInit.bind(this), 5);
      }
      beforeInit(e) {
          (this.isDisabled = this.disabled()), this.isDisabled ? document.documentElement.classList.add("lg-" + this.pluginSlug + "-disabled") : this.init(), e();
      }
      init() {
          this.setAttributes();
      }
      disabled() {
          let e = !1;
          return (
              void 0 !== ao.settings[this.pluginSlug] && void 0 !== ao.settings[this.pluginSlug].disabled && (e = ao.settings[this.pluginSlug].disabled),
              Gn.isString(e)
                  ? (e = window.browser.is(e, !0))
                  : Gn.isArray(e)
                  ? (e = e.some((e) => (Gn.isString(e) ? window.browser.is(e, !0) : !!Gn.isObject(e) && window.browser.satisfies(e))))
                  : Gn.isObject(e) && (e = window.browser.satisfies(e)),
              e
          );
      }
      setAttributes() {
          this.pluginAttributes = {};
      }
      getAttributes(e) {
          const t = this.pluginAttributes,
              r = {};
          for (const s in t) {
              const i = t[s];
              let n = "lg-" + this.pluginSlug;
              "root" !== s && (n += "-" + s), (n = Gn.toCamelCase(n));
              const o = e.dataset[n];
              let a, l, c;
              "object" == typeof i ? ((a = i[0]), (c = i[1])) : (a = i), (l = void 0 === o && void 0 !== c ? a(c) : (void 0 !== o || a !== Boolean) && (void 0 !== o ? (a === Boolean ? "false" !== o : a(o)) : void 0)), (r[s] = l);
          }
          return (e.luge || (e.luge = {})) && (e.luge[this.pluginSlug] = r), r;
      }
  }
  new (class extends Co {
      constructor() {
          super("cursor"), (this.cursors = []), (this.pointers = []), (this.trails = []), (this.hoverTags = ["a", "button", "input"]);
      }
      init() {
          super.init(), Yn.add("pageInit", this.pageInit.bind(this)), po.add(this.tick, this), this.bindEvents();
      }
      setAttributes() {
          this.pluginAttributes = { root: String, inertia: [Number, ao.settings.cursor.inertia], length: [Number, ao.settings.cursor.trailLength], hide: Boolean };
      }
      bindEvents() {
          document.documentElement.addEventListener("mouseenter", this.hoverHandler.bind(this), { capture: !0, passive: !0 }),
              document.documentElement.addEventListener("mouseleave", this.hoverHandler.bind(this), { capture: !0, passive: !0 });
      }
      pageInit(e) {
          const t = this,
              r = document.querySelectorAll("[data-lg-cursor]:not(.lg-cursor)");
          r.length > 0 &&
              r.forEach((e) => {
                  const r = this.getAttributes(e);
                  r.hide && document.documentElement.classList.add("lg-cursor-hide");
                  e.querySelectorAll("[data-lg-cursor-pointer").forEach((e) => {
                      (e.luge = { cursor: { position: { x: 0, y: 0 }, smoothPosition: { x: 0, y: 0 } } }),
                          e.hasAttribute("data-lg-cursor-inertia") ? (e.luge.cursor.inertia = Number(e.getAttribute("data-lg-cursor-inertia"))) : (e.luge.cursor.inertia = r.inertia),
                          e.classList.add("lg-cursor-pointer"),
                          t.pointers.push(e);
                  });
                  e.querySelectorAll("[data-lg-cursor-trail").forEach((e) => {
                      const s = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                          i = document.createElementNS("http://www.w3.org/2000/svg", "path");
                      s.appendChild(i),
                          e.appendChild(s),
                          (e.luge = { cursor: { position: { x: 0, y: 0 }, smoothPosition: { x: 0, y: 0 }, points: [], path: i } }),
                          e.hasAttribute("data-lg-cursor-inertia") ? (e.luge.cursor.inertia = Number(e.getAttribute("data-lg-cursor-inertia"))) : (e.luge.cursor.inertia = r.inertia),
                          e.hasAttribute("data-lg-cursor-length") ? (e.luge.cursor.length = Number(e.getAttribute("data-lg-cursor-length"))) : (e.luge.cursor.length = r.length),
                          e.classList.add("lg-cursor-trail"),
                          t.trails.push(e);
                  }),
                      e.classList.add("lg-cursor"),
                      this.cursors.push(e);
              }),
              e();
      }
      hoverHandler(e) {
          const t = e.target,
              r = t.tagName.toLowerCase(),
              s = t.getAttribute("data-lg-hover");
          let i = null;
          (this.hoverTags.includes(r) || null !== s) && (i = "mouseenter" === e.type),
              null !== i &&
                  this.cursors.forEach((e) => {
                      e.classList.toggle("lg-cursor--hover", i), null !== s && "" !== s && e.classList.toggle("lg-cursor--hover--" + s, i);
                  });
      }
      tick(e) {
          this.pointers.forEach((e) => {
              const t = e.luge.cursor.position,
                  r = e.luge.cursor.smoothPosition;
              (t.x = window.mouseX), (t.y = window.mouseY), (r.x += (t.x - r.x) * e.luge.cursor.inertia), (r.y += (t.y - r.y) * e.luge.cursor.inertia), (e.style.transform = "translate3d(" + r.x + "px, " + r.y + "px, 0)");
          }),
              this.trails.forEach((e) => {
                  const t = e.luge.cursor.position,
                      r = e.luge.cursor.smoothPosition;
                  if (((t.x = window.mouseX), (t.y = window.mouseY), -1 !== window.mouseX)) {
                      (r.x += (t.x - r.x) * e.luge.cursor.inertia), (r.y += (t.y - r.y) * e.luge.cursor.inertia);
                      const s = e.luge.cursor.points,
                          i = { x: r.x, y: r.y };
                      s.push(i), s.length > e.luge.cursor.length && s.shift();
                      let n = "",
                          o = 0;
                      const a = (e, t) => {
                              const r = t.x - e.x,
                                  s = t.y - e.y;
                              return { length: Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2)), angle: Math.atan2(s, r) };
                          },
                          l = (e, t, r, s) => {
                              const i = a(t || e, r || e);
                              o += i.length;
                              const n = i.angle + (s ? Math.PI : 0),
                                  l = 0.2 * i.length;
                              return [e.x + Math.cos(n) * l, e.y + Math.sin(n) * l];
                          };
                      (n = ((e, t) => `${e.reduce((e, r, s, i) => (0 === s ? `M ${r.x},${r.y}` : `${e} ${t(r, s, i)}`), "")}`)(s, (e, t, r) => {
                          const [s, i] = l(r[t - 1], r[t - 2], e),
                              [n, o] = l(e, r[t - 1], r[t + 1], !0);
                          return `C ${s},${i} ${n},${o} ${e.x},${e.y}`;
                      })),
                          e.luge.cursor.path.setAttribute("d", n),
                          e.style.setProperty("--length", o);
                  }
              });
      }
  })();
  new (class extends Co {
      constructor() {
          super("intersection"), (this.listeners = { onViewportIntersect: this.onViewportIntersect.bind(this) });
      }
      init() {
          super.init(), (this.elements = []), Yn.add("pageInit", this.pageInit.bind(this)), Yn.add("pageKill", this.pageKill.bind(this)), this.bindEvents();
      }
      setAttributes() {
          this.pluginAttributes = { root: String, class: String };
      }
      bindEvents() {
          Wn.on("update", this.updateHandler, this);
      }
      updateHandler() {
          this.addElements();
      }
      pageInit(e) {
          this.addElements(), e();
      }
      addElements() {
          const e = document.querySelectorAll("[data-lg-intersection]"),
              t = this;
          e.forEach((e) => {
              t.addElement(e);
          });
      }
      addElement(e) {
          this.elements.includes(e) || (this.getAttributes(e), lo.add(e), e.addEventListener("viewportintersect", this.listeners.onViewportIntersect), this.elements.push(e));
      }
      removeElement(e) {
          this.elements.includes(e) && (lo.remove(e), e.removeEventListener("viewportintersect", this.listeners.onViewportIntersect), this.elements.splice(this.elements.indexOf(e), 1));
      }
      pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
              t.removeElement(e);
          }),
              e();
      }
      onViewportIntersect(e) {
          const t = e.target,
              r = t.luge.viewport.position,
              s = !!t.luge.intersection.class && t.luge.intersection.class.split(" ");
          t.classList.remove("is-in", "is-out", "is-out-top", "is-out-bottom"),
              "in" === r
                  ? (t.classList.add("is-in"), s && document.documentElement.classList.add(...s))
                  : (s && document.documentElement.classList.remove(...s), "above" === r ? t.classList.add("is-out", "is-out-top") : t.classList.add("is-out", "is-out-bottom"));
      }
  })();
  new (class extends Co {
      constructor() {
          super("lottie"), (this.elements = []), (this.doneLoad = null), (this.onViewportIntersect = this.onViewportIntersect.bind(this)), (this.onScrollProgress = this.onScrollProgress.bind(this));
      }
      init() {
          super.init(),
              "object" == typeof lottie && (Yn.add("pageInit", this.pageInit.bind(this)), Yn.add("pageLoad", this.pageLoad.bind(this)), Yn.add("pageKill", this.pageKill.bind(this)), Yn.add("reveal", this.reveal.bind(this))),
              this.bindEvents();
      }
      setAttributes() {
          this.pluginAttributes = {
              root: String,
              autoplay: Boolean,
              scroll: Boolean,
              loop: Boolean,
              loopFrame: [Number, 0],
              reverse: Boolean,
              required: Boolean,
              force: Boolean,
              renderer: [String, ao.settings.lottie.renderer],
              subframe: [Boolean, ao.settings.lottie.subFrame],
          };
      }
      bindEvents() {
          Wn.on("update", this.updateHandler, this);
      }
      updateHandler() {
          this.addElements(), this.reveal(() => {});
      }
      pageLoad(e) {
          let t = !1;
          this.elements.length > 0 &&
              this.elements.forEach((e) => {
                  e.luge.lottie.required && !e.player.isLoaded && (t = !0);
              }),
              t ? (this.doneLoad = e) : e();
      }
      pageInit(e) {
          this.addElements(), e();
      }
      addElements() {
          const e = this;
          (this.elements = document.querySelectorAll("[data-lg-lottie]")),
              (this.toAutoplay = []),
              (this.toLoad = 0),
              (this.requireds = 0),
              this.elements.forEach((t) => {
                  t.player || (mo.add(t), e.initPlayer(t), t.addEventListener("revealin", e.play), t.addEventListener("viewportintersect", e.onViewportIntersect));
              });
      }
      pageKill(e) {
          const t = this;
          let r = [];
          const s = document.querySelector("[data-lg-page] + [data-lg-page]");
          (r = s ? s.querySelectorAll("[data-lg-lottie]") : this.elements),
              r.forEach((e) => {
                  e.removeEventListener("revealin", t.play),
                      e.removeEventListener("viewportintersect", t.onViewportIntersect),
                      e.hasAttribute("data-lg-lottie-scroll") && e.removeEventListener("scrollprogress", t.onScrollProgress),
                      e.player && (e.player.destroy(), delete e.player);
              }),
              e();
      }
      reveal(e) {
          this.toAutoplay.forEach((e) => {
              "in" === e.viewportPosition && e.play();
          }),
              e();
      }
      onViewportIntersect(e) {
          const t = e.target;
          t.luge.lottie.force ||
              ("in" === t.viewportPosition
                  ? t.player.isPaused && (t.player.scrollPaused || t.hasAttribute("data-lg-lottie-autoplay")) && ((t.player.scrollPaused = !1), t.play())
                  : t.player.isPaused || ((t.player.scrollPaused = !0), t.pause()));
      }
      initPlayer(e) {
          const t = this;
          this.toLoad++;
          const r = this.getAttributes(e);
          (e.player = lottie.loadAnimation({ container: e, renderer: r.renderer, loop: r.loop && !r.reverse, autoplay: !1, path: r.root })),
              void 0 !== r.subframe && e.player.setSubframe(r.subframe),
              e.classList.add("lg-lottie"),
              this.setPlayerStateClasses(e, !1),
              r.autoplay && this.toAutoplay.push(e),
              r.required && this.requireds++,
              r.scroll
                  ? e.addEventListener("scrollprogress", this.onScrollProgress)
                  : r.loop &&
                    e.player.addEventListener("enterFrame", function () {
                        if (e.player.totalFrames > 0) {
                            const s = Math.round(e.player.currentFrame);
                            1 === e.player.playDirection
                                ? s === e.player.totalFrames - 1 &&
                                  (e.player.pause(),
                                  r.reverse
                                      ? po.nextTick(() => {
                                            e.player.setDirection(-1), e.player.goToAndPlay(e.player.totalFrames, !0), t.setPlayerStateClasses(e, "backward");
                                        }, this)
                                      : po.nextTick(() => {
                                            e.player.goToAndPlay(r.loopFrame, !0);
                                        }, this))
                                : s === r.loopFrame &&
                                  (e.player.pause(),
                                  po.nextTick(() => {
                                      e.player.setDirection(1), e.player.goToAndPlay(r.loopFrame, !0), t.setPlayerStateClasses(e, "forward");
                                  }, this));
                        }
                    }),
              (e.play = this.play.bind(this, e)),
              (e.pause = this.pause.bind(this, e)),
              (e.stop = this.stop.bind(this, e)),
              e.player.addEventListener(
                  "DOMLoaded",
                  () => {
                      e.classList.add("is-loaded"), t.playerLoaded(r.required);
                  },
                  { once: !0 }
              );
      }
      setPlayerStateClasses(e, t) {
          e.classList.remove("is-playing", "is-playing-forward", "is-playing-backward", "is-paused"),
              t ? (e.classList.add("is-playing"), "backward" === t ? e.classList.add("is-playing-backward") : e.classList.add("is-playing-forward")) : e.classList.add("is-paused");
      }
      playerLoaded() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.toLoad--,
              e && this.requireds--,
              0 === this.requireds && "function" == typeof this.doneLoad && (this.doneLoad(), (this.doneLoad = null)),
              0 === this.toLoad &&
                  po.nextTick(() => {
                      Wn.emit("resize");
                  });
      }
      play(e) {
          e && e.player && (e.player.play(), this.setPlayerStateClasses(e, "forward"));
      }
      pause(e) {
          e && e.player && (e.player.pause(), this.setPlayerStateClasses(e, !1));
      }
      stop(e) {
          e && e.player && (e.player.stop(), this.setPlayerStateClasses(e, !1));
      }
      onScrollProgress(e) {
          const t = e.target;
          t.player.goToAndStop(t.player.totalFrames * t.scrollProgress, !0);
      }
  })();
  new (class extends Co {
      constructor() {
          super("mouse"), (this.elements = []), (this.mouse = { x: window.mouseX, y: window.mouseY }), (window.mouseSpeed = 0);
      }
      init() {
          super.init(), Yn.add("pageInit", this.pageInit.bind(this)), Yn.add("pageKill", this.pageKill.bind(this)), po.add(this.tick, this), this.getMouseMovement(), this.bindEvents();
      }
      setAttributes() {
          this.pluginAttributes = { root: String, inertia: [String, ao.settings.mouse.inertia] };
      }
      getAttributes(e) {
          const t = super.getAttributes(e);
          if (t.inertia) {
              const e = t.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);
              (t.inertia = e ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random() : Number(t.inertia)), (t.inertia = Math.max(Math.min(t.inertia, 0.99), 0));
          }
          return t;
      }
      bindEvents() {
          Wn.on("update", this.updateHandler, this);
      }
      updateHandler() {
          this.addElements();
      }
      pageInit(e) {
          this.addElements(), e();
      }
      addElements() {
          const e = document.querySelectorAll("[data-lg-mouse]"),
              t = this;
          e.forEach((e) => {
              t.addElement(e);
          });
      }
      addElement(e) {
          this.elements.includes(e) || (this.getAttributes(e), go.add(e), (e.luge.mouse.smoothX = 0), (e.luge.mouse.smoothY = 0), (e.luge.mouse.smoothProgressX = 0), (e.luge.mouse.smoothProgressY = 0), this.elements.push(e));
      }
      removeElement(e) {
          this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1);
      }
      pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
              t.removeElement(e);
          }),
              e();
      }
      getMouseMovement() {
          const e = this.mouse.x - window.mouseX,
              t = this.mouse.y - window.mouseY,
              r = Math.hypot(e, t);
          if (((window.mouseSpeed += 0.5 * (r - window.mouseSpeed)), window.mouseSpeed < 0.001 && (window.mouseSpeed = 0), r > 1)) {
              const r = Math.atan2(t, e) * (180 / Math.PI) + 180;
              (window.mouseAngle = r), (window.mouseDirection = r >= 45 && r < 135 ? "down" : r >= 135 && r < 225 ? "left" : r >= 225 && r < 315 ? "up" : "right");
          }
          (this.mouse = { x: window.mouseX, y: window.mouseY }), setTimeout(this.getMouseMovement.bind(this), 20);
      }
      tick() {
          this.elements.forEach((e) => {
              const t = e.luge.mouse;
              if (t.x)
                  if (t.inertia) {
                      (t.smoothX += (t.x - t.smoothX) * t.inertia),
                          (t.smoothY += (t.y - t.smoothY) * t.inertia),
                          (t.smoothProgressX += (t.progressX - t.smoothProgressX) * t.inertia),
                          (t.smoothProgressY += (t.progressY - t.smoothProgressY) * t.inertia),
                          e.style.setProperty("--mouse-x", t.smoothX),
                          e.style.setProperty("--mouse-y", t.smoothY),
                          e.style.setProperty("--mouse-progress-x", t.smoothProgressX),
                          e.style.setProperty("--mouse-progress-y", t.smoothProgressY);
                      const r = Math.round(1e3 * (t.x - t.smoothX)) / 1e3,
                          s = Math.round(1e3 * (t.y - t.smoothY)) / 1e3;
                      e.style.setProperty("--abs-diff-x", Math.abs(r)), e.style.setProperty("--diff-x", r), e.style.setProperty("--abs-diff-y", Math.abs(s)), e.style.setProperty("--diff-y", s);
                  } else e.style.setProperty("--mouse-x", t.x), e.style.setProperty("--mouse-y", t.y), e.style.setProperty("--mouse-progress-x", t.progressX), e.style.setProperty("--mouse-progress-y", t.progressY);
          });
      }
  })();
  new (class extends Co {
      constructor() {
          super("parallax"), (this.elements = []), (this.onScrollProgress = this.onScrollProgress.bind(this));
      }
      init() {
          super.init(), Yn.add("pageInit", this.pageInit.bind(this)), Yn.add("pageKill", this.pageKill.bind(this)), po.add(this.tick, this), this.bindEvents();
      }
      setAttributes() {
          this.pluginAttributes = { root: String, disable: String, amplitude: [String, 1], anchor: String, inertia: [String, ao.settings.parallax.inertia] };
      }
      getAttributes(e) {
          const t = super.getAttributes(e);
          if (t.amplitude) {
              const e = t.amplitude.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);
              t.amplitude = e ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random() : Number(t.amplitude);
          }
          return t;
      }
      bindEvents() {
          Wn.on("update", this.updateHandler, this);
      }
      updateHandler() {
          this.addElements();
      }
      pageInit(e) {
          this.addElements(), e();
      }
      pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
              t.removeElement(e);
          }),
              e();
      }
      addElements() {
          document.querySelectorAll("[data-lg-parallax]").forEach((e) => {
              const t = this.getAttributes(e).disable;
              let r = !0;
              t &&
                  (("desktop" === t && window.browser.is("desktop")) || ("handheld" === t && !window.browser.is("desktop")) || ("mobile" === t && window.browser.is("mobile")) || ("tablet" === t && window.browser.is("tablet"))) &&
                  (r = !1),
                  r && this.addElement(e);
          });
      }
      addElement(e) {
          this.elements.includes(e) ||
              (mo.add(e),
              e.addEventListener("scrollprogress", this.onScrollProgress),
              "child" === e.luge.parallax.root && ((e.style.overflow = "hidden"), (e.luge.parallax.child = e.firstElementChild)),
              (e.luge.parallax.movement = 0),
              (e.luge.parallax.smoothMovement = 0),
              this.elements.push(e),
              this.moveElement(e));
      }
      removeElement(e) {
          e.removeEventListener("scrollprogress", this.onScrollProgress), this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1);
      }
      onScrollProgress(e) {
          this.moveElement(e.target);
      }
      moveElement(e) {
          let t = 1 - 2 * e.scrollProgress;
          "bottom" === e.luge.parallax.anchor ? (t += 1) : "top" === e.luge.parallax.anchor && (t -= 1),
              "child" === e.luge.parallax.root ? (e.luge.parallax.movement = 5 * e.luge.parallax.amplitude * t) : (e.luge.parallax.movement = (e.clientHeight * t * e.luge.parallax.amplitude) / 2);
      }
      tick() {
          this.elements.forEach((e) => {
              (e.luge.parallax.smoothMovement += (e.luge.parallax.movement - e.luge.parallax.smoothMovement) * e.luge.parallax.inertia),
                  "child" === e.luge.parallax.root && e.luge.parallax.child
                      ? (e.luge.parallax.child.style.transform = "translate3d(0, " + e.luge.parallax.smoothMovement + "%, 0) scale(1." + String(Math.abs(e.luge.parallax.amplitude)).replace(".", "") + ")")
                      : (e.style.transform = "translate3d(0, " + e.luge.parallax.smoothMovement + "px, 0)");
          });
      }
  })();
  var Lo = new (class extends Co {
      constructor() {
          super("preloader"), (this.intro = !1), (this.playerIn = !1), (this.startTime = Date.now()), (this.doneLoad = null);
      }
      init() {
          super.init(),
              (this.el = document.querySelector("[data-lg-preloader]")),
              this.el && ((this.attributes = this.getAttributes(this.el)), this.el.classList.add("lg-preloader", "lg-preloader--" + this.attributes.root), this.initLottie(), Yn.add("siteIn", this.siteIn.bind(this))),
              Yn.add("pageLoad", this.pageLoad.bind(this));
      }
      setAttributes() {
          this.pluginAttributes = { root: [String, ""], duration: [Number, ao.settings.preloader.duration], in: String, reverse: Boolean };
      }
      pageLoad(e) {
          this.attributes && "lottie" === this.attributes.root && "object" == typeof lottie ? (this.doneLoad = e) : e();
      }
      siteIn(e) {
          const t = (Date.now() - this.startTime) / 1e3,
              r = this.attributes.duration - t;
          if (r <= 0) {
              const t = this.clear.bind(this, e);
              if (this.playerIn) this.playerIn.play(), this.playerIn.addEventListener("complete", t, { once: !0 });
              else if ("function" == typeof this.intro) this.intro(e, this.remove.bind(this));
              else {
                  const e = window.getComputedStyle(this.el).getPropertyValue("transition-duration");
                  "" !== e && "0s" !== e ? (this.el.addEventListener("transitionend", t, { once: !0 }), this.el.classList.add("is-hidden")) : t();
              }
          } else setTimeout(this.siteIn.bind(this, e), 1e3 * r);
      }
      clear(e) {
          this.playerIn && this.playerIn.destroy(), this.remove(), e();
      }
      remove(e) {
          this.el.parentNode.removeChild(this.el), (this.el = null);
      }
      add(e) {
          this.intro = e;
      }
      initLottie() {
          const e = this;
          if ("lottie" === this.attributes.root && "object" == typeof lottie) {
              const t = this.attributes.in;
              let r = !1;
              t && ((r = lottie.loadAnimation({ container: this.el, renderer: "svg", loop: !1, autoplay: !1, path: t, rendererSettings: { preserveAspectRatio: "none" } })), this.attributes.reverse && r.setDirection(-1)),
                  r.addEventListener(
                      "DOMLoaded",
                      () => {
                          e.attributes.reverse && r.goToAndStop(r.totalFrames - 1, !0), e.el.setAttribute("style", ""), "function" == typeof e.doneLoad && (e.doneLoad(), (e.doneLoad = null));
                      },
                      { once: !0 }
                  ),
                  (this.playerIn = r);
          }
      }
  })();
  var Fo = new (class extends Co {
      constructor() {
          super("reveal"), (this.elements = []), (this.toRevealIn = []), (this.toRevealOut = []), (this.reveals = { in: {}, out: {} }), (this.canReveal = !1), (this.onScrollProgress = this.onScrollProgress.bind(this));
      }
      init() {
          super.init(), Yn.add("pageInit", this.pageInit.bind(this), 11), Yn.add("pageKill", this.pageKill.bind(this)), Yn.add("reveal", this.reveal.bind(this)), this.bindEvents();
      }
      setAttributes() {
          super.setAttributes(), (this.pluginAttributes = { root: String, stagger: String, multiple: Boolean, delay: [Number, 0] });
      }
      getAttributes(e) {
          const t = super.getAttributes(e);
          return void 0 !== t.stagger && "" === t.stagger ? (t.stagger = ao.settings.reveal.stagger) : void 0 === t.stagger && (t.stagger = !1), t;
      }
      bindEvents() {
          Wn.on("resize", this.resizeHandler, this), Wn.on("scroll", this.scrollHandler, this), Wn.on("update", this.updateHandler, this);
      }
      pageInit(e) {
          this.addElements(), e();
      }
      addElements() {
          const e = document.querySelectorAll("[data-lg-reveal]:not([data-lg-reveal-manual])"),
              t = this;
          e.forEach((e) => {
              t.addElement(e);
          });
      }
      addElement(e) {
          if (!this.elements.includes(e)) {
              const t = this.getAttributes(e);
              if (!t.stagger && null !== e.closest("[data-lg-reveal-stagger]")) return;
              mo.add(e), e.addEventListener("scrollprogress", this.onScrollProgress);
              const r = t.root;
              (e.luge.reveal.name = Gn.toCamelCase(r)),
                  (e.luge.reveal.delay = 1e3 * t.delay),
                  t.stagger
                      ? Array.from(e.children).forEach((e) => {
                            const t = e.dataset.lgReveal;
                            (e.style.transition = "none"),
                                po.nextTick(() => {
                                    e.style.transition = "";
                                }),
                                e.classList.add("lg-reveal", "is-out"),
                                (t || r) && e.classList.add("lg-reveal--" + (null != t ? t : r)),
                                (e.dataset.lgRevealChild = ""),
                                (e.luge || (e.luge = {})) && (e.luge.reveal = { isRevealed: !1 });
                        })
                      : ((e.style.transition = "none"),
                        po.nextTick(() => {
                            e.style.transition = "";
                        }),
                        e.classList.add("lg-reveal", "is-out"),
                        r && e.classList.add("lg-reveal--" + r)),
                  this.elements.push(e);
          }
      }
      removeElement(e) {
          e.removeEventListener("scrollprogress", this.onScrollProgress), this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1);
      }
      pageKill(e) {
          const t = this;
          (this.canReveal = !1),
              this.elements.forEach((e) => {
                  t.removeElement(e);
              }),
              e();
      }
      onScrollProgress(e) {
          const t = e.target,
              r = ao.settings.reveal.threshold;
          t.scrollProgress >= r && t.scrollProgress <= 1 - r && !t.luge.reveal.isRevealed
              ? (this.toRevealOut.includes(t) && this.toRevealOut.splice(this.toRevealOut.indexOf(t), 1), this.toRevealIn.includes(t) || this.toRevealIn.push(t))
              : (t.scrollProgress < r || t.scrollProgress > 1 - r) &&
                t.luge.reveal.isRevealed &&
                (this.toRevealIn.includes(t) && this.toRevealIn.splice(this.toRevealIn.indexOf(t), 1), this.toRevealOut.includes(t) || this.toRevealOut.push(t));
      }
      reveal(e) {
          (this.canReveal = !0),
              this.elements.forEach((e) => {
                  e.scrollStart < 0 && (this.toRevealIn.includes(e) || this.toRevealIn.push(e));
              }),
              this.revealElements(),
              e();
      }
      resizeHandler() {
          this.revealElements();
      }
      scrollHandler() {
          this.revealElements();
      }
      updateHandler() {
          this.addElements(), this.revealElements();
      }
      revealElements() {
          const e = this;
          if (this.canReveal) {
              let t = 0;
              this.toRevealIn.forEach((r) => {
                  const s = Gn.toCamelCase(r.luge.reveal.root);
                  (t += r.luge.reveal.delay),
                      setTimeout(function () {
                          e.revealCallback(r, s, "in"),
                              r.luge.reveal.stagger
                                  ? Array.from(r.children).forEach((t, i) => {
                                        const n = Gn.toCamelCase(t.dataset.lgReveal);
                                        setTimeout(() => {
                                            (n || s) && e.revealCallback(t, null != n ? n : s, "in"), e.setRevealClasses(t, "is-in");
                                        }, i * r.luge.reveal.stagger * 1e3);
                                    })
                                  : e.setRevealClasses(r, "is-in");
                      }, t),
                      (t += 1e3 * ao.settings.reveal.stagger),
                      r.luge.reveal.multiple || e.removeElement(r);
              }),
                  this.toRevealOut.forEach((t) => {
                      const r = Gn.toCamelCase(t.luge.reveal.root);
                      void 0 !== t.luge.reveal.isRevealed && e.revealCallback(t, r, "out");
                      let s = "";
                      (s = t.scrollProgress > 0.5 ? "is-out is-out-top" : "is-out is-out-bottom"),
                          t.luge.reveal.stagger
                              ? Array.from(t.children).forEach((i, n) => {
                                    const o = Gn.toCamelCase(i.dataset.lgReveal);
                                    setTimeout(() => {
                                        (o || r) && e.revealCallback(i, null != o ? o : r, "out"), e.setRevealClasses(i, s);
                                    }, n * t.luge.reveal.stagger * 1e3);
                                })
                              : e.setRevealClasses(t, s);
                  }),
                  (this.toRevealIn = []),
                  (this.toRevealOut = []);
          }
      }
      setRevealClasses(e, t) {
          (t = t.split(" ")),
              e.classList.remove("is-in", "is-out", "is-out-top", "is-out-bottom"),
              t.forEach((t) => {
                  e.classList.add(t);
              });
      }
      revealCallback(e, t, r) {
          e.dispatchEvent(new CustomEvent("reveal" + r)), (e.luge.reveal.isRevealed = "in" === r), "function" == typeof this.reveals[r][t] ? this.reveals[r][t](e) : "function" == typeof e["onreveal" + r] && e["onreveal" + r]();
      }
      add(e, t, r) {
          this.reveals[e] && ((t = Gn.toCamelCase(t)), this.reveals[e][t] ? console.log("Reveal animation named " + t + " already exists.") : (this.reveals[e][t] = r));
      }
  })();
  new (class extends Co {
      constructor() {
          super("scroll"),
              (this.elements = []),
              (this.allowedProperties = ["opacity", "background-x", "background-y"]),
              (this.transformProperties = ["x", "y", "z", "translate3d", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ"]),
              (this.presets = { "background-x": { "background-x": ["0%", "100%"] }, "background-y": { "background-y": ["0%", "100%"] } }),
              (this.onScrollProgress = this.onScrollProgress.bind(this));
      }
      init() {
          super.init(), Yn.add("pageInit", this.pageInit.bind(this)), Yn.add("pageKill", this.pageKill.bind(this)), po.add(this.tick, this), this.bindEvents();
      }
      setAttributes() {
          this.pluginAttributes = { root: String, yoyo: Boolean, inertia: [String, ao.settings.scroll.inertia], animate: String };
      }
      getAttributes(e) {
          const t = super.getAttributes(e);
          if (t.inertia) {
              const e = t.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);
              (t.inertia = e ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random() : Number(t.inertia)), (t.inertia = Math.max(Math.min(t.inertia, 0.99), 0));
          }
          return t;
      }
      bindEvents() {
          Wn.on("update", this.updateHandler, this);
      }
      updateHandler() {
          this.addElements();
      }
      pageInit(e) {
          this.addElements(), e();
      }
      addElements() {
          const e = document.querySelectorAll("[data-lg-scroll]"),
              t = this;
          e.forEach((e) => {
              t.addElement(e);
          });
      }
      addElement(e) {
          if (!this.elements.includes(e)) {
              const t = this.getAttributes(e);
              mo.add(e), e.addEventListener("scrollprogress", this.onScrollProgress);
              const r = {};
              (r.smoothProgress = void 0 !== e.scrollProgress ? e.scrollProgress : 0), (r.yoyo = t.yoyo), (r.inertia = t.inertia);
              let s = !1;
              if ((void 0 !== t.animate ? (s = JSON.parse(t.animate.replace(/'/g, '"'))) : this.presets[t.root] && (s = this.presets[t.root]), s)) {
                  const e = {};
                  for (const t in s)
                      if (this.allowedProperties.includes(t) || this.transformProperties.includes(t)) {
                          const r = s[t];
                          let i = String(r[0]),
                              n = String(r[1]),
                              o = i.match(/\d+([a-zA-Z%]+)/m);
                          o ? (o = o[1]) : 0 === t.indexOf("rotate") && (o = "deg"), (i = Number(i.replace(o, ""))), (n = Number(n.replace(o, "")));
                          let a = t;
                          "background-x" === t ? (a = "background-position-x") : "background-y" === t && (a = "background-position-y"), (e[a] = { from: i, to: n, current: i, unit: o });
                      }
                  r.properties = e;
              }
              (e.luge.scroll.animation = r), this.elements.push(e);
          }
      }
      removeElement(e) {
          e.removeEventListener("scrollprogress", this.onScrollProgress), this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1);
      }
      pageKill(e) {
          const t = this;
          this.elements.forEach((e) => {
              t.removeElement(e);
          }),
              e();
      }
      onScrollProgress(e) {
          e.target.luge.scroll.animation.atDest = !1;
      }
      tick() {
          for (const e of this.elements) {
              if (e.luge.scroll.animation.atDest) continue;
              let t = e.scrollProgress;
              if ((e.luge.scroll.yoyo && (t = 1 - Math.abs(1 - 2 * t)), (e.luge.scroll.animation.smoothProgress += (t - e.luge.scroll.animation.smoothProgress) * (1 - e.luge.scroll.inertia)), e.luge.scroll.animation.properties)) {
                  const t = {};
                  for (const [r, s] of Object.entries(e.luge.scroll.animation.properties))
                      (s.current = s.from + (s.to - s.from) * e.luge.scroll.animation.smoothProgress),
                          ["x", "y", "z"].includes(r) ? (t.translate3d || (t.translate3d = {})) && (t.translate3d[r] = s.current + s.unit) : (t[r] = s.current + s.unit);
                  const r = [];
                  for (const [e, s] of Object.entries(t))
                      if (this.transformProperties.includes(e)) {
                          if ("object" == typeof s)
                              if ("translate3d" === e) {
                                  const e = Object.assign({ x: 0, y: 0, z: 0 }, s);
                                  s.string = e.x + ", " + e.y + ", " + e.z;
                              } else s.string = Object.values(s).join(", ");
                          r.push(e + "(" + ("object" != typeof s ? s : s.string) + ")");
                      }
                  const s = {},
                      i = [];
                  r.length > 0 && ((s.transform = r.join(" ")), i.push("transform"));
                  for (const [e, r] of Object.entries(t)) this.transformProperties.includes(e) || ((s[e] = r), i.push(e));
                  for (const [t, r] of Object.entries(s)) e.style.setProperty(t, r);
                  e.style.setProperty("will-change", i.join(", "));
              } else {
                  const t = Math.round(1e3 * (e.scrollProgress - e.luge.scroll.animation.smoothProgress)) / 1e3;
                  e.style.setProperty("--progress", e.luge.scroll.animation.smoothProgress), e.style.setProperty("--abs-diff", Math.abs(t)), e.style.setProperty("--diff", t);
              }
              Math.abs(t - e.luge.scroll.animation.smoothProgress) < 1e-4 && (e.luge.scroll.animation.atDest = !0);
          }
      }
  })();
  var Ro,
      _o,
      jo = o,
      No = Function.prototype,
      Ho = No.apply,
      qo = No.call,
      zo =
          ("object" == typeof Reflect && Reflect.apply) ||
          (jo
              ? qo.bind(Ho)
              : function () {
                    return qo.apply(Ho, arguments);
                }),
      Do = Ut.exports,
      Uo = function (e, t, r) {
          for (var s in t) Do(e, s, t[s], r);
          return e;
      },
      Ko = r,
      Vo = Pe,
      Wo = N,
      Go = Li,
      Yo = Ut.exports,
      Xo = Xe("asyncIterator"),
      Qo = Ko.AsyncIterator,
      $o = Vo.AsyncIteratorPrototype;
  if ($o) Ro = $o;
  else if (Wo(Qo)) Ro = Qo.prototype;
  else if (Vo.USE_FUNCTION_CONSTRUCTOR || Ko.USE_FUNCTION_CONSTRUCTOR)
      try {
          (_o = Go(Go(Go(Function("return async function*(){}()")())))), Go(_o) === Object.prototype && (Ro = _o);
      } catch (e) {}
  Ro || (Ro = {}),
      Wo(Ro[Xo]) ||
          Yo(Ro, Xo, function () {
              return this;
          });
  var Zo = c,
      Jo = pe,
      ea = Ot,
      ta = Ti,
      ra = Dt,
      sa = Uo,
      ia = Xe,
      na = Tr,
      oa = me,
      aa = Ro,
      la = K("Promise"),
      ca = "AsyncIteratorProxy",
      da = na.set,
      ua = na.getterFor(ca),
      ha = ia("toStringTag"),
      pa = Hs,
      ga = zo,
      ma = pe,
      fa = Ot,
      ba = (function (e, t) {
          var r = function (e) {
              (e.type = ca), (e.next = Jo(e.iterator.next)), (e.done = !1), (e.ignoreArgument = !t), da(this, e);
          };
          return (
              (r.prototype = sa(ta(aa), {
                  next: function (r) {
                      var s = this,
                          i = !!arguments.length;
                      return new la(function (n) {
                          var o = ua(s),
                              a = i ? [o.ignoreArgument ? void 0 : r] : t ? [] : [void 0];
                          (o.ignoreArgument = !1), n(o.done ? { done: !0, value: void 0 } : ea(Zo(e, o, la, a)));
                      });
                  },
                  return: function (e) {
                      var t = this;
                      return new la(function (r, s) {
                          var i = ua(t),
                              n = i.iterator;
                          i.done = !0;
                          var o = oa(n, "return");
                          if (void 0 === o) return r({ done: !0, value: e });
                          la.resolve(Zo(o, n, e)).then(function (t) {
                              ea(t), r({ done: !0, value: e });
                          }, s);
                      });
                  },
                  throw: function (e) {
                      var t = this;
                      return new la(function (r, s) {
                          var i = ua(t),
                              n = i.iterator;
                          i.done = !0;
                          var o = oa(n, "throw");
                          if (void 0 === o) return s(e);
                          r(Zo(o, n, e));
                      });
                  },
              })),
              t || ra(r.prototype, ha, "Generator"),
              r
          );
      })(function (e, t) {
          var r = this,
              s = r.mapper;
          return e.resolve(fa(ga(r.next, r.iterator, t))).then(function (t) {
              return fa(t).done
                  ? ((r.done = !0), { done: !0, value: void 0 })
                  : e.resolve(s(t.value)).then(function (e) {
                        return { done: !1, value: e };
                    });
          });
      });
  pa(
      { target: "AsyncIterator", proto: !0, real: !0, forced: !0 },
      {
          map: function (e) {
              return new ba({ iterator: fa(this), mapper: ma(e) });
          },
      }
  );
  var ya = c,
      va = pe,
      wa = Ot,
      Ea = Ti,
      Sa = Dt,
      Ta = Uo,
      xa = Xe,
      Aa = Tr,
      Pa = me,
      ka = qi.IteratorPrototype,
      Oa = "IteratorProxy",
      Ma = Aa.set,
      Ba = Aa.getterFor(Oa),
      Ia = xa("toStringTag"),
      Ca = Ot,
      La = Mn,
      Fa = Hs,
      Ra = zo,
      _a = pe,
      ja = Ot,
      Na = function (e, t, r, s) {
          try {
              return s ? t(Ca(r)[0], r[1]) : t(r);
          } catch (t) {
              La(e, "throw", t);
          }
      },
      Ha = (function (e, t) {
          var r = function (e) {
              (e.type = Oa), (e.next = va(e.iterator.next)), (e.done = !1), (e.ignoreArg = !t), Ma(this, e);
          };
          return (
              (r.prototype = Ta(Ea(ka), {
                  next: function (r) {
                      var s = Ba(this),
                          i = arguments.length ? [s.ignoreArg ? void 0 : r] : t ? [] : [void 0];
                      s.ignoreArg = !1;
                      var n = s.done ? void 0 : ya(e, s, i);
                      return { done: s.done, value: n };
                  },
                  return: function (e) {
                      var t = Ba(this),
                          r = t.iterator;
                      t.done = !0;
                      var s = Pa(r, "return");
                      return { done: !0, value: s ? wa(ya(s, r, e)).value : e };
                  },
                  throw: function (e) {
                      var t = Ba(this),
                          r = t.iterator;
                      t.done = !0;
                      var s = Pa(r, "throw");
                      if (s) return ya(s, r, e);
                      throw e;
                  },
              })),
              t || Sa(r.prototype, Ia, "Generator"),
              r
          );
      })(function (e) {
          var t = this.iterator,
              r = ja(Ra(this.next, t, e));
          if (!(this.done = !!r.done)) return Na(t, this.mapper, r.value);
      });
  Fa(
      { target: "Iterator", proto: !0, real: !0, forced: !0 },
      {
          map: function (e) {
              return new Ha({ iterator: ja(this), mapper: _a(e) });
          },
      }
  );
  new (class extends Co {
      constructor() {
          super("smooth"), (this.containers = null), (window.hasSmoothScroll = !1), (window.smoothScrollTop = 0), (window.smoothScrollProgress = 0), (this.listeners = { hashChange: this.hashChange.bind(this) });
      }
      init() {
          super.init(), Yn.add("pageInit", this.pageInit.bind(this)), Yn.add("pageKill", this.pageKill.bind(this)), this.bindEvents();
      }
      bindEvents() {
          window.addEventListener("hashchange", this.hashChange), Wn.on("resize", this.resizeHandler, this), Wn.on("update", this.updateHandler, this);
      }
      pageInit(e) {
          const t = document.querySelectorAll("[data-lg-smooth]");
          t.length > 0
              ? ((window.smoothScrollTop = window.scrollTop),
                (window.unifiedScrollTop = window.smoothScrollTop),
                (window.hasSmoothScroll = !0),
                document.documentElement.classList.add("has-smooth-scroll"),
                (this.containers = Array.from(t).map((e) => ({ el: e, bounding: e.getBoundingClientRect() }))),
                po.add(this.tick, this))
              : ((window.smoothScrollTop = 0),
                (window.unifiedScrollTop = window.scrollTop),
                (window.hasSmoothScroll = !1),
                document.documentElement.classList.remove("has-smooth-scroll"),
                (this.containers = null),
                po.remove(this.tick, this)),
              this.resizeHandler(),
              e();
      }
      pageKill(e) {
          (this.containers = null), e();
      }
      resizeHandler() {
          this.setBounding();
      }
      updateHandler() {
          this.setBounding();
      }
      hashChange() {
          const e = window.location.hash;
          if (e) {
              const t = document.querySelector(e);
              if (t) {
                  const e = t.getBoundingClientRect().top + window.unifiedScrollTop;
                  window.scroll({ top: e, left: 0, behavior: "instant" });
              }
          }
      }
      setBounding() {
          this.containers &&
              (this.containers.forEach(function (e) {
                  e.el.removeAttribute("style");
              }),
              this.containers.forEach(function (e) {
                  const t = e.el.parentNode;
                  (e.bounding = e.el.getBoundingClientRect()),
                      (t.style.height = e.bounding.bottom + window.scrollTop + "px"),
                      (e.el.style.position = "fixed"),
                      (e.el.style.transform = "translate3d(0, -" + window.smoothScrollTop + "px, 0)"),
                      (e.el.style.left = 0),
                      (e.el.style.width = "100%"),
                      (e.el.style.willChange = "transform");
              }));
      }
      tick() {
          if (window.smoothScrollTop !== window.scrollTop) {
              window.smoothScrollTop = Math.max(window.smoothScrollTop + (window.scrollTop - window.smoothScrollTop) * ao.settings.smooth.inertia, 0);
              const e = window.smoothScrollTop - window.scrollTop;
              e > -0.1 && e < 0.1 && (window.smoothScrollTop = window.scrollTop),
                  this.containers &&
                      this.containers.forEach(function (e) {
                          e.el.style.transform = "translate3d(0, -" + window.smoothScrollTop + "px, 0)";
                      }),
                  window.hasSmoothScroll && ((window.unifiedScrollTop = window.smoothScrollTop), (window.smoothScrollProgress = window.smoothScrollTop / window.maxScrollTop), Wn.emit("scroll"));
          }
      }
  })();
  new (class extends Co {
      constructor() {
          super("sticky"), (this.elements = []);
      }
      init() {
          super.init(), Yn.add("pageInit", this.pageInit.bind(this)), Yn.add("pageKill", this.pageKill.bind(this)), this.bindEvents();
      }
      setAttributes() {
          this.pluginAttributes = { root: String };
      }
      bindEvents() {
          Wn.on("resize", this.resizeHandler, this), Wn.on("scroll", this.scrollHandler, this), Wn.on("update", this.updateHandler, this);
      }
      pageInit(e) {
          this.addElements(), this.resizeHandler(), e();
      }
      addElements() {
          const e = document.querySelectorAll("[data-lg-sticky]");
          e.length > 0 &&
              e.forEach((e) => {
                  const t = this.getAttributes(e);
                  this.elements.push({ el: e, position: t.root });
              });
      }
      pageKill(e) {
          (this.elements = []), e();
      }
      resizeHandler() {
          this.setBounding(), this.checkElements();
      }
      scrollHandler() {
          this.checkElements();
      }
      updateHandler() {
          this.addElements(), this.resizeHandler();
      }
      setBounding() {
          if (this.elements) {
              const e = window.unifiedScrollTop;
              this.elements.forEach(function (t) {
                  (t.el.style.top = ""), (t.el.style.transform = "");
                  const r = t.el.getBoundingClientRect();
                  if ("bottom" === t.position) {
                      let s = Math.ceil(window.innerHeight - (r.bottom + e)) + 1;
                      (s = Math.max(s, 0)), (t.el.style.top = s + "px"), (t.start = r.bottom + s + e - window.innerHeight), (t.maxGap = t.el.parentNode.offsetHeight - t.el.offsetHeight - s);
                  } else "top" === t.position ? ((t.start = r.top + e), (t.maxGap = t.el.parentNode.offsetHeight - t.el.offsetHeight)) : ((t.start = r.top + e - (window.innerHeight - t.el.offsetHeight) / 2), (t.maxGap = t.el.parentNode.offsetHeight - t.el.offsetHeight));
              });
          }
      }
      checkElements() {
          if (this.elements) {
              const e = window.unifiedScrollTop;
              this.elements.forEach(function (t) {
                  if (e >= t.start) {
                      const r = Math.min(e - t.start, t.maxGap);
                      (t.el.style.transform = "translate3d(0, " + r + "px, 0)"), r === t.maxGap ? t.el.setAttribute("data-lg-sticky-state", "is-fixed is-fixed--bottom") : t.el.setAttribute("data-lg-sticky-state", "is-moving");
                  } else e < t.start && ((t.el.style.transform = "translate3d(0, 0, 0)"), t.el.setAttribute("data-lg-sticky-state", "is-fixed is-fixed--top"));
              });
          }
      }
  })();
  var qa = ("undefined" != typeof globalThis && globalThis) || ("undefined" != typeof self && self) || (void 0 !== qa && qa),
      za = "URLSearchParams" in qa,
      Da = "Symbol" in qa && "iterator" in Symbol,
      Ua =
          "FileReader" in qa &&
          "Blob" in qa &&
          (function () {
              try {
                  return new Blob(), !0;
              } catch (e) {
                  return !1;
              }
          })(),
      Ka = "FormData" in qa,
      Va = "ArrayBuffer" in qa;
  if (Va)
      var Wa = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
          Ga =
              ArrayBuffer.isView ||
              function (e) {
                  return e && Wa.indexOf(Object.prototype.toString.call(e)) > -1;
              };
  function Ya(e) {
      if (("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)) throw new TypeError('Invalid character in header field name: "' + e + '"');
      return e.toLowerCase();
  }
  function Xa(e) {
      return "string" != typeof e && (e = String(e)), e;
  }
  function Qa(e) {
      var t = {
          next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
          },
      };
      return (
          Da &&
              (t[Symbol.iterator] = function () {
                  return t;
              }),
          t
      );
  }
  function $a(e) {
      (this.map = {}),
          e instanceof $a
              ? e.forEach(function (e, t) {
                    this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                }, this);
  }
  function Za(e) {
      if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
      e.bodyUsed = !0;
  }
  function Ja(e) {
      return new Promise(function (t, r) {
          (e.onload = function () {
              t(e.result);
          }),
              (e.onerror = function () {
                  r(e.error);
              });
      });
  }
  function el(e) {
      var t = new FileReader(),
          r = Ja(t);
      return t.readAsArrayBuffer(e), r;
  }
  function tl(e) {
      if (e.slice) return e.slice(0);
      var t = new Uint8Array(e.byteLength);
      return t.set(new Uint8Array(e)), t.buffer;
  }
  function rl() {
      return (
          (this.bodyUsed = !1),
          (this._initBody = function (e) {
              var t;
              (this.bodyUsed = this.bodyUsed),
                  (this._bodyInit = e),
                  e
                      ? "string" == typeof e
                          ? (this._bodyText = e)
                          : Ua && Blob.prototype.isPrototypeOf(e)
                          ? (this._bodyBlob = e)
                          : Ka && FormData.prototype.isPrototypeOf(e)
                          ? (this._bodyFormData = e)
                          : za && URLSearchParams.prototype.isPrototypeOf(e)
                          ? (this._bodyText = e.toString())
                          : Va && Ua && (t = e) && DataView.prototype.isPrototypeOf(t)
                          ? ((this._bodyArrayBuffer = tl(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                          : Va && (ArrayBuffer.prototype.isPrototypeOf(e) || Ga(e))
                          ? (this._bodyArrayBuffer = tl(e))
                          : (this._bodyText = e = Object.prototype.toString.call(e))
                      : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                      ("string" == typeof e
                          ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                          : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set("content-type", this._bodyBlob.type)
                          : za && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }),
          Ua &&
              ((this.blob = function () {
                  var e = Za(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                  if (this._bodyArrayBuffer) {
                      var e = Za(this);
                      return (
                          e ||
                          (ArrayBuffer.isView(this._bodyArrayBuffer)
                              ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength))
                              : Promise.resolve(this._bodyArrayBuffer))
                      );
                  }
                  return this.blob().then(el);
              })),
          (this.text = function () {
              var e,
                  t,
                  r,
                  s = Za(this);
              if (s) return s;
              if (this._bodyBlob) return (e = this._bodyBlob), (t = new FileReader()), (r = Ja(t)), t.readAsText(e), r;
              if (this._bodyArrayBuffer)
                  return Promise.resolve(
                      (function (e) {
                          for (var t = new Uint8Array(e), r = new Array(t.length), s = 0; s < t.length; s++) r[s] = String.fromCharCode(t[s]);
                          return r.join("");
                      })(this._bodyArrayBuffer)
                  );
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
          }),
          Ka &&
              (this.formData = function () {
                  return this.text().then(nl);
              }),
          (this.json = function () {
              return this.text().then(JSON.parse);
          }),
          this
      );
  }
  ($a.prototype.append = function (e, t) {
      (e = Ya(e)), (t = Xa(t));
      var r = this.map[e];
      this.map[e] = r ? r + ", " + t : t;
  }),
      ($a.prototype.delete = function (e) {
          delete this.map[Ya(e)];
      }),
      ($a.prototype.get = function (e) {
          return (e = Ya(e)), this.has(e) ? this.map[e] : null;
      }),
      ($a.prototype.has = function (e) {
          return this.map.hasOwnProperty(Ya(e));
      }),
      ($a.prototype.set = function (e, t) {
          this.map[Ya(e)] = Xa(t);
      }),
      ($a.prototype.forEach = function (e, t) {
          for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
      }),
      ($a.prototype.keys = function () {
          var e = [];
          return (
              this.forEach(function (t, r) {
                  e.push(r);
              }),
              Qa(e)
          );
      }),
      ($a.prototype.values = function () {
          var e = [];
          return (
              this.forEach(function (t) {
                  e.push(t);
              }),
              Qa(e)
          );
      }),
      ($a.prototype.entries = function () {
          var e = [];
          return (
              this.forEach(function (t, r) {
                  e.push([r, t]);
              }),
              Qa(e)
          );
      }),
      Da && ($a.prototype[Symbol.iterator] = $a.prototype.entries);
  var sl = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  function il(e, t) {
      if (!(this instanceof il)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      var r,
          s,
          i = (t = t || {}).body;
      if (e instanceof il) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new $a(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              i || null == e._bodyInit || ((i = e._bodyInit), (e.bodyUsed = !0));
      } else this.url = String(e);
      if (
          ((this.credentials = t.credentials || this.credentials || "same-origin"),
          (!t.headers && this.headers) || (this.headers = new $a(t.headers)),
          (this.method = ((r = t.method || this.method || "GET"), (s = r.toUpperCase()), sl.indexOf(s) > -1 ? s : r)),
          (this.mode = t.mode || this.mode || null),
          (this.signal = t.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && i)
      )
          throw new TypeError("Body not allowed for GET or HEAD requests");
      if ((this._initBody(i), !(("GET" !== this.method && "HEAD" !== this.method) || ("no-store" !== t.cache && "no-cache" !== t.cache)))) {
          var n = /([?&])_=[^&]*/;
          if (n.test(this.url)) this.url = this.url.replace(n, "$1_=" + new Date().getTime());
          else {
              this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
      }
  }
  function nl(e) {
      var t = new FormData();
      return (
          e
              .trim()
              .split("&")
              .forEach(function (e) {
                  if (e) {
                      var r = e.split("="),
                          s = r.shift().replace(/\+/g, " "),
                          i = r.join("=").replace(/\+/g, " ");
                      t.append(decodeURIComponent(s), decodeURIComponent(i));
                  }
              }),
          t
      );
  }
  function ol(e, t) {
      if (!(this instanceof ol)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      t || (t = {}),
          (this.type = "default"),
          (this.status = void 0 === t.status ? 200 : t.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = void 0 === t.statusText ? "" : "" + t.statusText),
          (this.headers = new $a(t.headers)),
          (this.url = t.url || ""),
          this._initBody(e);
  }
  (il.prototype.clone = function () {
      return new il(this, { body: this._bodyInit });
  }),
      rl.call(il.prototype),
      rl.call(ol.prototype),
      (ol.prototype.clone = function () {
          return new ol(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new $a(this.headers), url: this.url });
      }),
      (ol.error = function () {
          var e = new ol(null, { status: 0, statusText: "" });
          return (e.type = "error"), e;
      });
  var al = [301, 302, 303, 307, 308];
  ol.redirect = function (e, t) {
      if (-1 === al.indexOf(t)) throw new RangeError("Invalid status code");
      return new ol(null, { status: t, headers: { location: e } });
  };
  var ll = qa.DOMException;
  try {
      new ll();
  } catch (e) {
      ((ll = function (e, t) {
          (this.message = e), (this.name = t);
          var r = Error(e);
          this.stack = r.stack;
      }).prototype = Object.create(Error.prototype)),
          (ll.prototype.constructor = ll);
  }
  function cl(e, t) {
      return new Promise(function (r, s) {
          var i = new il(e, t);
          if (i.signal && i.signal.aborted) return s(new ll("Aborted", "AbortError"));
          var n = new XMLHttpRequest();
          function o() {
              n.abort();
          }
          (n.onload = function () {
              var e,
                  t,
                  s = {
                      status: n.status,
                      statusText: n.statusText,
                      headers:
                          ((e = n.getAllResponseHeaders() || ""),
                          (t = new $a()),
                          e
                              .replace(/\r?\n[\t ]+/g, " ")
                              .split("\r")
                              .map(function (e) {
                                  return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                              })
                              .forEach(function (e) {
                                  var r = e.split(":"),
                                      s = r.shift().trim();
                                  if (s) {
                                      var i = r.join(":").trim();
                                      t.append(s, i);
                                  }
                              }),
                          t),
                  };
              s.url = "responseURL" in n ? n.responseURL : s.headers.get("X-Request-URL");
              var i = "response" in n ? n.response : n.responseText;
              setTimeout(function () {
                  r(new ol(i, s));
              }, 0);
          }),
              (n.onerror = function () {
                  setTimeout(function () {
                      s(new TypeError("Network request failed"));
                  }, 0);
              }),
              (n.ontimeout = function () {
                  setTimeout(function () {
                      s(new TypeError("Network request failed"));
                  }, 0);
              }),
              (n.onabort = function () {
                  setTimeout(function () {
                      s(new ll("Aborted", "AbortError"));
                  }, 0);
              }),
              n.open(
                  i.method,
                  (function (e) {
                      try {
                          return "" === e && qa.location.href ? qa.location.href : e;
                      } catch (t) {
                          return e;
                      }
                  })(i.url),
                  !0
              ),
              "include" === i.credentials ? (n.withCredentials = !0) : "omit" === i.credentials && (n.withCredentials = !1),
              "responseType" in n && (Ua ? (n.responseType = "blob") : Va && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (n.responseType = "arraybuffer")),
              !t || "object" != typeof t.headers || t.headers instanceof $a
                  ? i.headers.forEach(function (e, t) {
                        n.setRequestHeader(t, e);
                    })
                  : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                        n.setRequestHeader(e, Xa(t.headers[e]));
                    }),
              i.signal &&
                  (i.signal.addEventListener("abort", o),
                  (n.onreadystatechange = function () {
                      4 === n.readyState && i.signal.removeEventListener("abort", o);
                  })),
              n.send(void 0 === i._bodyInit ? null : i._bodyInit);
      });
  }
  (cl.polyfill = !0), qa.fetch || ((qa.fetch = cl), (qa.Headers = $a), (qa.Request = il), (qa.Response = ol));
  var dl = new (class extends Co {
      constructor() {
          super("transition"),
              (this.url = window.location.href),
              (this.pathname = window.location.pathname),
              (this.pageFetched = null),
              (this.currentPage = null),
              (this.reload = ao.settings.transition.reload),
              (this.prevScrollTop = 0),
              (this.newScrollTop = 0),
              (this.transitions = { in: {}, out: {} }),
              (this.listeners = { linkHandler: this.linkHandler.bind(this) });
      }
      init() {
          (this.currentPage = document.querySelector("[data-lg-page]")),
              this.currentPage && (this.reload = !!this.currentPage.hasAttribute("data-lg-reload") || ao.settings.transition.reload),
              this.initLoader(),
              this.reload || window.addEventListener("popstate", this.historyStateChanged.bind(this)),
              Yn.add("pageInit", this.pageInit.bind(this)),
              Yn.add("pageFetch", this.pageFetch.bind(this)),
              Yn.add("pageOut", this.pageOut.bind(this)),
              Yn.add("pageIn", this.pageIn.bind(this), 10, "transition"),
              Yn.add("pageCreate", this.pageCreate.bind(this)),
              Yn.add("pageKill", this.pageKill.bind(this), 999, "transition");
      }
      bindLinksEvent() {
          document.querySelector("[data-lg-page]") &&
              document.querySelectorAll("a").forEach((e) => {
                  e.addEventListener("click", this.listeners.linkHandler);
              });
      }
      unbindLinksEvent() {
          document.querySelectorAll("a").forEach((e) => {
              e.removeEventListener("click", this.listeners.linkHandler);
          });
      }
      linkHandler(e) {
          const t = e.currentTarget,
              r = t.getAttribute("href");
          if (
              r &&
              0 !== r.indexOf("#") &&
              0 !== r.indexOf("tel") &&
              0 !== r.indexOf("mailto") &&
              !t.closest("#wpadminbar") &&
              "disabled" !== t.getAttribute("data-lg-transition") &&
              "_blank" !== t.getAttribute("target") &&
              (0 === r.indexOf(window.location.origin) || 0 === r.indexOf("/") || -1 === r.indexOf("/"))
          ) {
              if ((e.preventDefault(), window.location.href === r)) return;
              this.navigateTo(r), history.pushState(null, null, this.url);
          }
      }
      navigateTo(e) {
          if (((this.url = e), this.reload)) {
              const t = document.createElement("link");
              (t.rel = "prefetch"),
                  (t.href = e),
                  document.head.appendChild(t),
                  Yn.add("siteReload", (t) => {
                      window.location = e;
                  }),
                  Yn.cycle("reload");
          } else Yn.cycle("transition");
      }
      pageInit(e) {
          this.bindLinksEvent(), e();
      }
      initLoader() {
          const e = document.querySelector("[data-lg-loader]");
          if (
              (e &&
                  ((e.style.transition = "none"),
                  e.classList.add("lg-loader", "lg-loader--" + e.getAttribute("data-lg-loader")),
                  po.nextTick(() => {
                      e.style.transition = "";
                  })),
              e && "lottie" === e.getAttribute("data-lg-loader") && "object" == typeof lottie)
          ) {
              const t = e.getAttribute("data-lg-loader-out");
              let r = !1,
                  s = e.getAttribute("data-lg-loader-in"),
                  i = !1;
              t && (r = lottie.loadAnimation({ container: e, renderer: "svg", loop: !1, autoplay: !1, path: t, rendererSettings: { preserveAspectRatio: "none" } })),
                  "reverse" === s && (s = t),
                  s && ((i = lottie.loadAnimation({ container: e, renderer: "svg", loop: !1, autoplay: !1, path: s, rendererSettings: { preserveAspectRatio: "none" } })), s === t && i.setDirection(-1)),
                  (e.playerOut = r),
                  (e.playerIn = i);
          }
      }
      pageFetch(e) {
          const t = this;
          this.url &&
              fetch(this.url, { credentials: "include" })
                  .then(function (e) {
                      return e.text();
                  })
                  .then(function (r) {
                      (t.pageFetched = r), e();
                  });
      }
      pageCreate(e) {
          const t = new DOMParser().parseFromString(this.pageFetched, "text/html"),
              r = t.querySelector("[data-lg-page]");
          if (r) {
              {
                  this.currentPage.insertAdjacentElement("beforebegin", r),
                      (r.style.opacity = 0),
                      (this.currentPage.style.opacity = 0),
                      (this.currentPage.style.position = "absolute"),
                      (this.currentPage.style.top = 0),
                      (this.currentPage.style.left = "-999em"),
                      (this.currentPage.style.width = "100%"),
                      (document.querySelector("body").className = t.querySelector("body").className),
                      document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach((e) => {
                          e.parentNode.removeChild(e);
                      }),
                      t.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach((e) => {
                          document.querySelector("head title").insertAdjacentElement("afterend", e);
                      });
                  const e = document.querySelector("head title"),
                      s = t.querySelector("head title");
                  e && s && (e.innerText = s.innerText);
              }
              window.scroll({ top: this.newScrollTop, left: 0, behavior: "instant" }),
                  (window.scrollTop = 0),
                  (window.smoothScrollTop = 0),
                  (window.unifiedScrollTop = 0),
                  (this.prevScrollTop = 0),
                  (this.newScrollTop = 0),
                  Wn.emit("pageTransition", t),
                  e();
          } else window.location = this.url;
      }
      pageKill(e) {
          const t = this.currentPage;
          t.parentNode.removeChild(t), (this.currentPage = document.querySelector("[data-lg-page]")), (this.reload = !!this.currentPage.hasAttribute("data-lg-reload") || ao.settings.transition.reload), e();
      }
      pageOut(e) {
          const t = this,
              r = document.querySelector("[data-lg-page]");
          if (r) {
              const s = Gn.toCamelCase(r.getAttribute("data-lg-page"));
              let i = !1;
              if (
                  ("function" == typeof this.transitions.out[s]
                      ? (i = this.transitions.out[s])
                      : "function" == typeof r.onpageout
                      ? (i = r.onpageout)
                      : "function" == typeof this.transitions.out.default && (i = this.transitions.out.default),
                  i)
              )
                  i(r, e);
              else {
                  const r = document.querySelector("[data-lg-loader]");
                  if (r) {
                      if (r.playerOut)
                          r.playerOut.stop(),
                              (r.playerOut.renderer.svgElement.style.opacity = 1),
                              r.playerOut.play(),
                              r.playerOut.addEventListener(
                                  "complete",
                                  () => {
                                      t.reload || (r.playerOut.renderer.svgElement.style.opacity = ""), e();
                                  },
                                  { once: !0 }
                              );
                      else {
                          const t = window.getComputedStyle(document.querySelector("[data-lg-loader]")).getPropertyValue("transition-duration");
                          "" !== t && "0s" !== t ? r.addEventListener("transitionend", e, { once: !0 }) : e();
                      }
                      r.classList.add("is-visible");
                  } else e();
              }
          } else e();
          this.unbindLinksEvent.bind(this);
      }
      pageIn(e) {
          const t = document.querySelector("[data-lg-page]");
          if (t) {
              const r = Gn.toCamelCase(t.getAttribute("data-lg-page"));
              let s = !1;
              if (
                  ((t.style.opacity = ""),
                  "function" == typeof this.transitions.in[r] ? (s = this.transitions.in[r]) : "function" == typeof t.onpagein ? (s = t.onpagein) : "function" == typeof this.transitions.in.default && (s = this.transitions.in.default),
                  s)
              )
                  s(t, e);
              else {
                  const t = document.querySelector("[data-lg-loader]");
                  if (t && t.classList.contains("is-visible"))
                      if (t.playerIn)
                          t.playerIn.stop(),
                              (t.playerIn.renderer.svgElement.style.opacity = 1),
                              "reverse" === t.getAttribute("data-lg-loader-in") ? t.playerIn.goToAndPlay(t.playerIn.totalFrames, !0) : t.playerIn.play(),
                              t.playerIn.addEventListener(
                                  "complete",
                                  () => {
                                      (t.playerIn.renderer.svgElement.style.opacity = ""), t.classList.remove("is-visible"), e();
                                  },
                                  { once: !0 }
                              );
                      else {
                          const r = window.getComputedStyle(document.querySelector("[data-lg-loader]")).getPropertyValue("transition-duration");
                          "" !== r && "0s" !== r ? t.addEventListener("transitionend", e, { once: !0 }) : e(), t.classList.remove("is-visible");
                      }
                  else e();
              }
          } else e();
      }
      historyStateChanged() {
          let e = "";
          (e = 0 === this.url.indexOf(window.location.origin) ? new URL(this.url) : new URL(window.location.origin + this.url)),
              e.pathname !== window.location.pathname &&
                  ((this.prevScrollTop = window.scrollY),
                  po.nextTick(() => {
                      (this.newScrollTop = window.scrollY), window.scroll({ top: this.prevScrollTop, left: 0, behavior: "instant" });
                  }),
                  this.navigateTo(window.location.href));
      }
      add(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
              r = arguments.length > 2 ? arguments[2] : void 0;
          this.transitions[e] && ((t = Gn.toCamelCase(t)), this.transitions[e][t] ? console.log("Transition animation for " + t + " page already exists.") : (this.transitions[e][t] = r));
      }
  })();
  const ul = {
      cursor: {},
      emitter: { emit: Wn.emit.bind(Wn), off: Wn.off.bind(Wn), on: Wn.on.bind(Wn), once: Wn.once.bind(Wn) },
      viewportobserver: { add: lo.add.bind(lo), remove: lo.remove.bind(lo) },
      lifecycle: { add: Yn.add.bind(Yn), refresh: Yn.cycle.bind(Yn, "refresh"), remove: Yn.remove.bind(Yn), debug: Yn.enableDebug.bind(Yn) },
      mouseobserver: { add: go.add.bind(go), remove: go.remove.bind(go) },
      preloader: { add: Lo.add.bind(Lo) },
      reveal: { add: Fo.add.bind(Fo) },
      scrollobserver: { add: mo.add.bind(mo), remove: mo.remove.bind(mo) },
      ticker: { add: po.add.bind(po), nextTick: po.nextTick.bind(po), remove: po.remove.bind(po), tick: po.tick.bind(po) },
      transition: { add: dl.add.bind(dl) },
      settings: ao.setSettings.bind(ao),
  };
  (window.luge = ul),
      "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", Yn.cycle.bind(Yn, "load"), { once: !0 })
          : po.nextTick(() => {
                Yn.cycle("load");
            }, null);
  const hl = "background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; ";
  return (
      console.log(
          "%c powered by %cluge%c / 0.6.7-beta %c > https://luge.cool ",
          hl,
          "background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; font-weight: bold; ",
          hl,
          "color: black; font: 400 1em monospace; padding: 0.5em 0; "
      ),
      ul
  );
});
