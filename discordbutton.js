! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 4)
}([function(t, e, n) {
    var o = n(5);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(2)(o, r);
    o.locals && (t.exports = o.locals)
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || "",
                        o = t[3];
                    if (!o) return n;
                    if (e && "function" == typeof btoa) {
                        var r = (i = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                            a = o.sources.map(function(t) {
                                return "/*# sourceURL=" + o.sourceRoot + t + " */"
                            });
                        return [n].concat(a).concat([r]).join("\n")
                    }
                    var i;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var o = {}, r = 0; r < this.length; r++) {
                var a = this[r][0];
                null != a && (o[a] = !0)
            }
            for (r = 0; r < t.length; r++) {
                var i = t[r];
                null != i[0] && o[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i))
            }
        }, e
    }
}, function(t, e, n) {
    var o, r, a = {},
        i = (o = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === r && (r = o.apply(this, arguments)), r
        }),
        s = function(t) {
            var e = {};
            return function(t, n) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var o = function(t, e) {
                        return e ? e.querySelector(t) : document.querySelector(t)
                    }.call(this, t, n);
                    if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
                        o = o.contentDocument.head
                    } catch (t) {
                        o = null
                    }
                    e[t] = o
                }
                return e[t]
            }
        }(),
        l = null,
        d = 0,
        c = [],
        f = n(6);

    function u(t, e) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n],
                r = a[o.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
                for (; i < o.parts.length; i++) r.parts.push(y(o.parts[i], e))
            } else {
                var s = [];
                for (i = 0; i < o.parts.length; i++) s.push(y(o.parts[i], e));
                a[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function p(t, e) {
        for (var n = [], o = {}, r = 0; r < t.length; r++) {
            var a = t[r],
                i = e.base ? a[0] + e.base : a[0],
                s = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            o[i] ? o[i].parts.push(s) : n.push(o[i] = {
                id: i,
                parts: [s]
            })
        }
        return n
    }

    function m(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = c[c.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), c.push(e);
        else if ("bottom" === t.insertAt) n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = s(t.insertAt.before, n);
            n.insertBefore(e, r)
        }
    }

    function h(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1)
    }

    function b(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var o = function() {
                0;
                return n.nc
            }();
            o && (t.attrs.nonce = o)
        }
        return v(e, t.attrs), m(t, e), e
    }

    function v(t, e) {
        Object.keys(e).forEach(function(n) {
            t.setAttribute(n, e[n])
        })
    }

    function y(t, e) {
        var n, o, r, a;
        if (e.transform && t.css) {
            if (!(a = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
            t.css = a
        }
        if (e.singleton) {
            var i = d++;
            n = l || (l = b(e)), o = x.bind(null, n, i, !1), r = x.bind(null, n, i, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), m(t, e), e
        }(e), o = function(t, e, n) {
            var o = n.css,
                r = n.sourceMap,
                a = void 0 === e.convertToAbsoluteUrls && r;
            (e.convertToAbsoluteUrls || a) && (o = f(o));
            r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var i = new Blob([o], {
                    type: "text/css"
                }),
                s = t.href;
            t.href = URL.createObjectURL(i), s && URL.revokeObjectURL(s)
        }.bind(null, n, e), r = function() {
            h(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = b(e), o = function(t, e) {
            var n = e.css,
                o = e.media;
            o && t.setAttribute("media", o);
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), r = function() {
            h(n)
        });
        return o(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    o(t = e)
                } else r()
            }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = i()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return u(n, e),
            function(t) {
                for (var o = [], r = 0; r < n.length; r++) {
                    var i = n[r];
                    (s = a[i.id]).refs--, o.push(s)
                }
                t && u(p(t, e), e);
                for (r = 0; r < o.length; r++) {
                    var s;
                    if (0 === (s = o[r]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete a[s.id]
                    }
                }
            }
    };
    var g, w = (g = [], function(t, e) {
        return g[t] = e, g.filter(Boolean).join("\n")
    });

    function x(t, e, n, o) {
        var r = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = w(e, r);
        else {
            var a = document.createTextNode(r),
                i = t.childNodes;
            i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(a, i[e]) : t.appendChild(a)
        }
    }
}, function(t, e) {
    t.exports = '<div class="nolt-modal">\n  <div class="nolt-overlay"></div>\n\n  <div class="nolt-loader-wrapper">\n    <div class="nolt-loader"></div>\n  </div>\n\n  <div class="nolt-dialog"></div>\n\n  <div class="nolt-close">\n    <div class="nolt-close-icon"></div>\n  </div>\n</div>\n'
}, function(t, e, n) {
    (() => {
        window.Nolt = {
                initialized: !1
            },
            function(t) {
                "loading" !== document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", () => {
                    "complete" === document.readyState && t()
                })
            }(async () => {
                if (!window.Nolt.initialized) {
                    window.Nolt.initialized = !0;
                    try {
                        (await Promise.resolve().then(n.bind(null, 9))).default(window)
                    } catch (t) {
                        console.error(`[nolt] ${t.message}`)
                    }
                }
            })
    })()
}, function(t, e, n) {
    (t.exports = n(1)(!1)).push([t.i, '.nolt-feedback-button{--shadow-color:rgba(0,0,0,0.25);display:inline-flex;background:#fd6a65;border-radius:4px;color:#fff;font:normal normal 500 13px/1.2 Helvetica Neue,Arial,sans-serif;padding:6px 10px;white-space:nowrap;outline:0;text-decoration:none;text-shadow:.05em 0 var(--shadow-color),0 .05em var(--shadow-color),-.05em 0 var(--shadow-color),0 -.05em var(--shadow-color)}.nolt-feedback-button:active,.nolt-feedback-button:focus,.nolt-feedback-button:hover{background:#fc4e49}.nolt-feedback-button:active{box-shadow:inset 0 3px 7px rgba(0,0,0,.1)}.nolt-feedback-button:before{content:" ";display:inline-block;position:relative;top:1px;margin-right:6px;background:transparent 0 0 no-repeat;background-image:url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDEydjEySDB6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuOCIgZD0iTTEyIDBoMTJ2MTJIMTJ6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNiIgZD0iTTEyIDEyaDEydjEySDEyeiIvPjwvZz48L3N2Zz4=);background-size:13px 13px;height:13px;width:13px}', ""])
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var r, a = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t : (r = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : o + a.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
        })
    }
}, function(t, e, n) {
    var o = n(8);
    "string" == typeof o && (o = [
        [t.i, o, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(2)(o, r);
    o.locals && (t.exports = o.locals)
}, function(t, e, n) {
    (t.exports = n(1)(!1)).push([t.i, 'body.nolt-modal-open{overflow:hidden}.nolt-modal{z-index:2147483647;position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;padding:32px;visibility:hidden}@media (max-width:690px){.nolt-modal{padding:0}}.nolt-modal-open .nolt-modal{visibility:visible}.nolt-overlay{position:absolute;top:0;bottom:0;left:0;right:0;cursor:pointer;background-color:rgba(50,50,50,.9);opacity:0;visibility:hidden;transition:opacity .25s}.nolt-modal-open .nolt-overlay{opacity:1;visibility:visible}.nolt-dialog{position:relative;border-radius:8px;width:100%;height:100%;max-width:690px;max-height:800px;overflow:hidden;opacity:0;-webkit-transform:translateY(2rem);transform:translateY(2rem);transition:opacity .25s ease,-webkit-transform .25s ease;transition:opacity .25s ease,transform .25s ease;transition:opacity .25s ease,transform .25s ease,-webkit-transform .25s ease}@media (max-width:690px){.nolt-dialog{top:16px;bottom:0;left:0;right:0;border-radius:0;max-height:calc(100% - 32px);max-width:100%}}.nolt-dialog iframe{background:#fff;position:absolute;top:0;bottom:0;left:0;right:0}.nolt-modal-frame-loaded .nolt-dialog{opacity:1;-webkit-transform:translate(0);transform:translate(0)}.nolt-loader-wrapper{position:absolute;top:0;bottom:0;left:0;right:0;z-index:0;display:flex;align-items:center;justify-content:center;pointer-events:none}.nolt-loader{width:6rem;height:2px;text-align:center;margin:0 auto;border-radius:2px;background-color:rgba(0,0,0,.4);box-shadow:0 0 1px 0 rgba(0,0,0,.2);position:relative;overflow:hidden;-webkit-transform:rotateY(90deg);transform:rotateY(90deg);transition:-webkit-transform .7s ease;transition:transform .7s ease;transition:transform .7s ease,-webkit-transform .7s ease;transition-delay:.25s}.nolt-loader:after{content:"";height:100%;width:5rem;position:absolute;-webkit-transform:translate(-7.5rem);transform:translate(-7.5rem);background-color:#f9f586;border-radius:2px;-webkit-animation:nolt-modal-loader .7s ease infinite;animation:nolt-modal-loader .7s ease infinite;-webkit-animation-delay:1.05s;animation-delay:1.05s}.nolt-modal-open .nolt-loader{-webkit-transform:rotateY(0);transform:rotateY(0)}@-webkit-keyframes nolt-modal-loader{0%,to{-webkit-transform:translate(-7.5rem);transform:translate(-7.5rem)}50%{-webkit-transform:translate(2.5rem);transform:translate(2.5rem)}}@keyframes nolt-modal-loader{0%,to{-webkit-transform:translate(-7.5rem);transform:translate(-7.5rem)}50%{-webkit-transform:translate(2.5rem);transform:translate(2.5rem)}}.nolt-close{position:fixed;right:32px;top:24px;opacity:.5;cursor:pointer;transition:opacity .1s ease;pointer-events:none;z-index:1}@media (max-width:850px){.nolt-close{right:4px;top:0;-webkit-transform:scale(.6);transform:scale(.6)}}@media (max-width:690px){.nolt-close{right:14px}}.nolt-close-icon{position:relative;width:32px;height:32px}.nolt-close-icon:after,.nolt-close-icon:before{position:absolute;left:15px;content:" ";height:33px;width:3px;background-color:#fff}.nolt-close-icon:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nolt-close-icon:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}', ""])
}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(0);
    var o = n(3),
        r = n.n(o);
    n(7);
    let a, i, s, l;

    function d({
        target: t,
        url: e,
        withSso: n
    } = {}) {
        ! function() {
            if (a = document.getElementsByTagName("body")[0], document.getElementsByClassName("nolt-modal").length) i = document.getElementsByClassName("nolt-modal")[0], s = document.getElementsByClassName("nolt-overlay")[0], l = document.getElementsByClassName("nolt-dialog")[0];
            else {
                const t = document.createElement("div");
                t.innerHTML = r.a, i = t.getElementsByClassName("nolt-modal")[0], s = t.getElementsByClassName("nolt-overlay")[0], l = t.getElementsByClassName("nolt-dialog")[0], a.appendChild(i), s.addEventListener("click", f, !0)
            }
        }(), t && t.addEventListener("click", t => {
            t.preventDefault(), c(e, n)
        })
    }

    function c(t, e) {
        a.classList.add("nolt-modal-open");
        const n = -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome"),
            o = localStorage.getItem("noltSsoSafariFix");
        if (e && n && !o) {
            const e = t.includes("?") ? "&" : "?",
                n = window.open(`${t}${e}isSafariFix=true`, "safariFixWindow", "width=10,height=10,dependent=1");
            n.document.body.style.background = "rgba(50,50,50,0.9)";
            const o = setInterval(() => {
                n.closed && (clearInterval(o), localStorage.setItem("noltSsoSafariFix", !0), u(t))
            }, 1e3)
        } else u(t)
    }

    function f() {
        a.classList.remove("nolt-modal-open"), a.classList.remove("nolt-modal-frame-loaded"), l.innerHTML = ""
    }

    function u(t) {
        const e = document.createElement("iframe");
        e.setAttribute("src", t), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.setAttribute("frameborder", "0"), l.innerHTML = "", l.appendChild(e), e.addEventListener("load", () => {
            a.classList.add("nolt-modal-frame-loaded")
        }, !0)
    }
    const p = {};

    function m(t) {
        return p[t] || p.DEFAULT
    }

    function h(t, e) {
        t || (p.DEFAULT = e), p[t] = e
    }

    function b(t) {
        return function(t) {
            try {
                return new URL(t), !0
            } catch (t) {
                return !1
            }
        }(t) && t.startsWith("http")
    }

    function v({
        name: t,
        url: e,
        keepOriginal: n
    }) {
        const o = m(t),
            r = e + (e.endsWith("/") ? "" : "/"),
            a = n ? r : `${r}widget`;
        return o ? `${r}sso/${o}?returnUrl=${a}` : a
    }
    const y = {
        identify({
            jwt: t,
            widgets: e
        }) {
            if (!t) throw new Error('[identify] "jwt" not provided');
            if (e && !Array.isArray(e)) throw new Error('[identify] "widgets" should be an array of strings');
            e ? e.forEach(e => h(e, t)) : h(null, t)
        },
        init({
            name: t,
            url: e,
            selector: n,
            type: o = "modal",
            target: r
        }) {
            if (!e) throw new Error('[init] "url" not provided');
            if (!r && !n) throw new Error('[init] "selector" not provided');
            if (!o) throw new Error('[init] "type" not provided');
            if (!b(e)) throw new Error('[init] "url" is not a valid board URL');
            const a = {
                target: r || document.querySelector(n),
                url: v({
                    name: t,
                    url: e,
                    keepOriginal: "plain" === o
                }),
                withSso: Boolean(m(t))
            };
            if (!a.target) throw new Error(`[init] Element not found: "${n}". Please check your selector.`);
            if ("plain" === o) return function({
                target: t,
                url: e
            }) {
                t.setAttribute("href", e)
            }(a);
            if ("modal" === o) return d(a);
            throw new Error(`Type "${o}" not supported`)
        },
        openModal({
            name: t,
            url: e
        }) {
            if (!e) throw new Error('[openModal] "url" not provided');
            if (!b(e)) throw new Error('[openModal] "url" is not a valid board URL');
            ! function({
                url: t
            }) {
                c(t)
            }({
                url: v({
                    name: t,
                    url: e
                })
            })
        }
    };

    function g(t) {
        const e = [...t];
        e.sort((t, e) => "identify" === t.method && "identify" === e.method ? 0 : "identify" === t.method ? -1 : "identify" === e.method ? 1 : 0), e.forEach(w)
    }

    function w(t) {
        try {
            const e = y[t.method];
            if (!e) throw new Error(`Method "${t.method}" not supported`);
            e(t.payload)
        } catch (t) {
            console.error(`[nolt] ${t.message}`)
        }
    }
    const x = ["", "true", "button", "modal"];

    function E(t) {
        const e = t.href;
        if (!e) throw new Error(`"data-nolt" found but "href" is missing: ${t.innerText}`);
        if (!b(e)) throw new Error(`href contains an invalid board URL: "${t.href}".` + ' Please provide your board URL in the following format: "https://your-board.nolt.io"')
    }

    function k(t) {
        d();
        const e = function(t, e, n) {
                let o;
                return (...r) => {
                    const a = this;
                    clearTimeout(o), o = setTimeout(() => {
                        o = null, n || t.apply(a, r)
                    }, e), n && !o && t.apply(a, r)
                }
            }(g, 50),
            n = (t.noltQueue || []).map(t => ({
                method: t[0],
                payload: t[1]
            })).concat(function(t) {
                const e = [];
                return t.document.querySelectorAll("a[data-nolt]").forEach(t => {
                    const e = t.dataset.nolt;
                    if (!x.includes(e)) throw new Error(`Invalid "data-nolt" value: "${e}"`)
                }), t.document.querySelectorAll("a[data-nolt=''], a[data-nolt='true']").forEach(t => {
                    E(t);
                    const n = {
                        type: "plain",
                        url: t.href,
                        target: t
                    };
                    e.push({
                        method: "init",
                        payload: n
                    })
                }), t.document.querySelectorAll("a[data-nolt='button']").forEach(t => {
                    E(t);
                    const n = {
                        type: "modal",
                        url: t.href,
                        target: t
                    };
                    t.classList.add("nolt-feedback-button"), e.push({
                        method: "init",
                        payload: n
                    })
                }), t.document.querySelectorAll("a[data-nolt='modal']").forEach(t => {
                    E(t);
                    const n = {
                        type: "modal",
                        url: t.href,
                        target: t
                    };
                    e.push({
                        method: "init",
                        payload: n
                    })
                }), e
            }(t));
        e(n), t.nolt = ((t, o) => {
            n.push({
                method: t,
                payload: o
            }), e(n)
        })
    }
    n.d(e, "default", function() {
        return k
    })
}]);