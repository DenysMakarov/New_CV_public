window.location='https://master.d1xdcmpb2443ws.amplifyapp.com'
//
// !function (e) {
//     var t = {};
//
//     function n(o) {
//         if (t[o]) return t[o].exports;
//         var i = t[o] = {i: o, l: !1, exports: {}};
//         return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
//     }
//
//     n.m = e, n.c = t, n.d = function (e, t, o) {
//         n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
//     }, n.r = function (e) {
//         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
//     }, n.t = function (e, t) {
//         if (1 & t && (e = n(e)), 8 & t) return e;
//         if (4 & t && "object" == typeof e && e && e.__esModule) return e;
//         var o = Object.create(null);
//         if (n.r(o), Object.defineProperty(o, "default", {
//             enumerable: !0,
//             value: e
//         }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function (t) {
//             return e[t]
//         }.bind(null, i));
//         return o
//     }, n.n = function (e) {
//         var t = e && e.__esModule ? function () {
//             return e.default
//         } : function () {
//             return e
//         };
//         return n.d(t, "a", t), t
//     }, n.o = function (e, t) {
//         return Object.prototype.hasOwnProperty.call(e, t)
//     }, n.p = "", n(n.s = 0)
// }([function (e, t, n) {
//     "use strict";
//     n.r(t);
//     n(1), n(2)
// }, function (e, t) {
//     for (var n, o, i, a, s, r, c, l, d, u, m, f, y, v, _ = Array.from(document.getElementsByClassName("nav_head")), p = Array.from(document.getElementsByClassName("head_p")), b = Array.from(document.getElementsByClassName("section_box")), h = document.getElementById("header_nav_box"), g = 0, k = 0; k < _.length; k++) _[k].setAttribute("data-number_btn", k), b[k].setAttribute("data-number_section", k), _[k].style.animationDelay = k / 15 + "s", p[k].style.animationDelay = k / 10 + .5 + "s";
//
//     function E(e) {
//         var t = Array.from(document.getElementsByClassName("card")), n = 1.1;
//         0 === e ? t.map((function (e) {
//             e.style.transitionDelay = n + "s", n -= .1, e.classList.add("activeCards"), e.style.bottom = "-15px", e.addEventListener("mouseover", (function () {
//                 e.style.transitionDelay = "0s", e.style.bottom = "15px"
//             })), e.addEventListener("mouseout", (function () {
//                 e.style.transitionDelay = "0s", e.style.bottom = "-15px"
//             }))
//         })) : 0 !== e && t.map((function (e) {
//             e.style.transitionDelay = "0s", e.classList.remove("activeCards"), e.classList.add("deactiveCards"), e.style.bottom = "170px"
//         }))
//     }
//
//     function x() {
//         var e = document.getElementById("box_third_ipad"), t = document.getElementById("box_third_iphone");
//         e.addEventListener("mouseover", (function () {
//             e.style.transitionDelay = "0s", e.style.bottom = "-1%"
//         })), e.addEventListener("mouseout", (function () {
//             e.style.transitionDelay = "0s", e.style.bottom = "-7%"
//         })), t.addEventListener("mouseover", (function () {
//             t.style.transitionDelay = "0s", t.style.bottom = "-1%"
//         })), t.addEventListener("mouseout", (function () {
//             t.style.transitionDelay = "0s", t.style.bottom = "-7%"
//         })), 2 == g ? (e.classList.add("box_third_ipad_active"), t.classList.add("box_third_iphone_active")) : (e.classList.remove("box_third_ipad_active"), t.classList.remove("box_third_iphone_active"))
//     }
//
//     function L() {
//         var e = document.getElementById("box_fourth_ipad"), t = document.getElementById("box_fourth_iphone");
//         e.addEventListener("mouseover", (function () {
//             e.style.transitionDelay = "0s", e.style.bottom = "-1%"
//         })), e.addEventListener("mouseout", (function () {
//             e.style.transitionDelay = "0s", e.style.bottom = "-7%"
//         })), t.addEventListener("mouseover", (function () {
//             t.style.transitionDelay = "0s", t.style.bottom = "-1%"
//         })), t.addEventListener("mouseout", (function () {
//             t.style.transitionDelay = "0s", t.style.bottom = "-7%"
//         })), 3 == g ? (e.classList.add("box_fourth_ipad_active"), t.classList.add("box_fourth_iphone_active")) : (e.classList.remove("box_fourth_ipad_active"), t.classList.remove("box_fourth_iphone_active"))
//     }
//
//     function B() {
//         for (var e = 0; e < _.length; e++) _[e].classList.remove("activeEl"), b[e].classList.remove("section_active"), _[g].classList.add("activeEl"), b[g].classList.add("section_active")
//     }
//
//     setTimeout((function () {
//         b[0].classList.add("section_active")
//     }), 300), setTimeout((function () {
//         _[0].classList.add("activeEl")
//     }), 1e3), n = Array.from(document.getElementsByClassName("icon_item")), o = document.getElementById("footer_text_inform"), n.map((function (e) {
//         e.addEventListener("mouseover", (function (e) {
//             console.log(e.target.dataset.info), o.innerText = e.target.dataset.info, o.style.opacity = "0", o.style.animationName = "none", setTimeout((function () {
//                 o.style.animationName = "footer_block_mouseover_animation"
//             }), 0)
//         }))
//     })), E(g), x(), L(), i = Array.from(document.getElementsByClassName("git")), a = 0, i.map((function (e) {
//         e.style.marginTop = a + "px", a += 85
//     })), _.map((function (e) {
//         e.addEventListener("mouseover", (function () {
//             g = +e.dataset.number_btn, B(), E(g), x(), L()
//         }))
//     })), h.onwheel = function (e) {
//         var t = e.deltaY;
//         t > 0 ? g += 1 : g = g, t < 0 ? g -= 1 : g = g, g = -1 == (g = g >= _.length ? 0 : g) ? _.length - 1 : g, B(), E(g), x(), L()
//     }, s = document.getElementById("linkOfGame"), r = document.getElementById("linkOfSlider"), c = document.getElementById("linkOfSneakers"), l = document.getElementById("linkOfRestaurant"), d = document.getElementById("linkOfReact"), u = document.getElementById("link_title_game"), m = document.getElementById("link_title_slider"), f = document.getElementById("link_title_store"), y = document.getElementById("link_title_restaurant"), v = document.getElementById("link_title_react"), [s, r, c, l, d, document.getElementById("gitGame"), document.getElementById("gitSlider"), document.getElementById("gitSneakers"), document.getElementById("gitRestaurant"), document.getElementById("gitReact"), u, v, y, f, m].map((function (e) {
//         e.addEventListener("click", (function () {
//             switch (e.id) {
//                 case"linkOfGame":
//                 case"link_title_game":
//                     document.location = "https://DenysMakarov.github.io/New_CV_Game/dist/index.html";
//                     break;
//                 case"linkOfSlider":
//                 case"link_title_slider":
//                     document.location = "https://DenysMakarov.github.io/New_CV_slider/dist/index.html";
//                     break;
//                 case"linkOfSneakers":
//                 case"link_title_store":
//                     document.location = "https://DenysMakarov.github.io/New_CV_SneakersShop/dist/index.html";
//                     break;
//                 case"linkOfRestaurant":
//                 case"link_title_restaurant":
//                     document.location = "https://DenysMakarov.github.io/New_CV_restaurant/dist/";
//                     break;
//                 case"linkOfReact":
//                 case"link_title_react":
//                     document.location = "https://DenysMakarov.github.io/New_CV_React/dist/#/";
//                     break;
//                 case"gitGame":
//                     document.location = "https://github.com/1985MakarovDenis1985/New_CV_Game";
//                     break;
//                 case"gitSlider":
//                     document.location = "https://github.com/DenysMakarov/New_CV_slider";
//                     break;
//                 case"gitSneakers":
//                     document.location = "https://github.com/DenysMakarov/New_CV_SneakersShop";
//                     break;
//                 case"gitRestaurant":
//                     document.location = "https://github.com/DenysMakarov/New_CV_restaurant";
//                     break;
//                 case"gitReact":
//                     document.location = "https://github.com/DenysMakarov/CV_FrontEnd_WRC"
//             }
//         }))
//     }))
// }, function (e, t, n) {
//     var o = n(3), i = n(4);
//     "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
//     var a = {insert: "head", singleton: !1};
//     o(i, a);
//     e.exports = i.locals || {}
// }, function (e, t, n) {
//     "use strict";
//     var o, i = function () {
//         return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o
//     }, a = function () {
//         var e = {};
//         return function (t) {
//             if (void 0 === e[t]) {
//                 var n = document.querySelector(t);
//                 if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
//                     n = n.contentDocument.head
//                 } catch (e) {
//                     n = null
//                 }
//                 e[t] = n
//             }
//             return e[t]
//         }
//     }(), s = [];
//
//     function r(e) {
//         for (var t = -1, n = 0; n < s.length; n++) if (s[n].identifier === e) {
//             t = n;
//             break
//         }
//         return t
//     }
//
//     function c(e, t) {
//         for (var n = {}, o = [], i = 0; i < e.length; i++) {
//             var a = e[i], c = t.base ? a[0] + t.base : a[0], l = n[c] || 0, d = "".concat(c, " ").concat(l);
//             n[c] = l + 1;
//             var u = r(d), m = {css: a[1], media: a[2], sourceMap: a[3]};
//             -1 !== u ? (s[u].references++, s[u].updater(m)) : s.push({
//                 identifier: d,
//                 updater: _(m, t),
//                 references: 1
//             }), o.push(d)
//         }
//         return o
//     }
//
//     function l(e) {
//         var t = document.createElement("style"), o = e.attributes || {};
//         if (void 0 === o.nonce) {
//             var i = n.nc;
//             i && (o.nonce = i)
//         }
//         if (Object.keys(o).forEach((function (e) {
//             t.setAttribute(e, o[e])
//         })), "function" == typeof e.insert) e.insert(t); else {
//             var s = a(e.insert || "head");
//             if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
//             s.appendChild(t)
//         }
//         return t
//     }
//
//     var d, u = (d = [], function (e, t) {
//         return d[e] = t, d.filter(Boolean).join("\n")
//     });
//
//     function m(e, t, n, o) {
//         var i = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
//         if (e.styleSheet) e.styleSheet.cssText = u(t, i); else {
//             var a = document.createTextNode(i), s = e.childNodes;
//             s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(a, s[t]) : e.appendChild(a)
//         }
//     }
//
//     function f(e, t, n) {
//         var o = n.css, i = n.media, a = n.sourceMap;
//         if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = o; else {
//             for (; e.firstChild;) e.removeChild(e.firstChild);
//             e.appendChild(document.createTextNode(o))
//         }
//     }
//
//     var y = null, v = 0;
//
//     function _(e, t) {
//         var n, o, i;
//         if (t.singleton) {
//             var a = v++;
//             n = y || (y = l(t)), o = m.bind(null, n, a, !1), i = m.bind(null, n, a, !0)
//         } else n = l(t), o = f.bind(null, n, t), i = function () {
//             !function (e) {
//                 if (null === e.parentNode) return !1;
//                 e.parentNode.removeChild(e)
//             }(n)
//         };
//         return o(e), function (t) {
//             if (t) {
//                 if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
//                 o(e = t)
//             } else i()
//         }
//     }
//
//     e.exports = function (e, t) {
//         (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
//         var n = c(e = e || [], t);
//         return function (e) {
//             if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
//                 for (var o = 0; o < n.length; o++) {
//                     var i = r(n[o]);
//                     s[i].references--
//                 }
//                 for (var a = c(e, t), l = 0; l < n.length; l++) {
//                     var d = r(n[l]);
//                     0 === s[d].references && (s[d].updater(), s.splice(d, 1))
//                 }
//                 n = a
//             }
//         }
//     }
// }, function (e, t, n) {
// }]);