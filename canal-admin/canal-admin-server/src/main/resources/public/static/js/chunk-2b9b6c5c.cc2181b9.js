(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2b9b6c5c"], {
    "11e9": function (t, e, n) {
        var a = n("52a7"), r = n("4630"), i = n("6821"), o = n("6a99"), c = n("69a8"), u = n("c69a"),
            s = Object.getOwnPropertyDescriptor;
        e.f = n("9e1e") ? s : function (t, e) {
            if (t = i(t), e = o(e, !0), u) try {
                return s(t, e)
            } catch (n) {
            }
            if (c(t, e)) return r(!a.f.call(t, e), t[e])
        }
    }, "1c98": function (t, e, n) {
        "use strict";
        n.r(e);
        var a = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "app-container"}, [n("div", {staticClass: "filter-container"}, [n("el-input", {
                staticClass: "filter-item",
                staticStyle: {width: "200px"},
                attrs: {placeholder: "Instance 名称"},
                model: {
                    value: t.listQuery.name, callback: function (e) {
                        t.$set(t.listQuery, "name", e)
                    }, expression: "listQuery.name"
                }
            }), t._v(" "), n("el-select", {
                staticClass: "filter-item",
                attrs: {placeholder: "所属集群/主机"},
                model: {
                    value: t.listQuery.clusterServerId, callback: function (e) {
                        t.$set(t.listQuery, "clusterServerId", e)
                    }, expression: "listQuery.clusterServerId"
                }
            }, [n("el-option", {
                key: "",
                attrs: {label: "所属集群/主机", value: ""}
            }), t._v(" "), t._l(t.options, function (e) {
                return n("el-option-group", {key: e.label, attrs: {label: e.label}}, t._l(e.options, function (t) {
                    return n("el-option", {key: t.value, attrs: {label: t.label, value: t.value}})
                }), 1)
            })], 2), t._v(" "), n("el-button", {
                staticClass: "filter-item",
                attrs: {type: "primary", icon: "el-icon-search", plain: ""},
                on: {
                    click: function (e) {
                        return t.queryData()
                    }
                }
            }, [t._v("查询")]), t._v("\n      \n    "), n("el-button", {
                staticClass: "filter-item",
                attrs: {type: "primary"},
                on: {
                    click: function (e) {
                        return t.handleCreate()
                    }
                }
            }, [t._v("新建 Instance")]), t._v(" "), n("el-button", {
                staticClass: "filter-item",
                attrs: {type: "info"},
                on: {
                    click: function (e) {
                        return t.fetchData()
                    }
                }
            }, [t._v("刷新列表")])], 1), t._v(" "), n("el-table", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.listLoading,
                    expression: "listLoading"
                }],
                attrs: {
                    data: t.list,
                    "element-loading-text": "Loading",
                    border: "",
                    fit: "",
                    "highlight-current-row": ""
                }
            }, [n("el-table-column", {
                attrs: {label: "Instance 名称", "min-width": "200", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [t._v("\n        " + t._s(e.row.name) + "\n      ")]
                    }
                }])
            }), t._v(" "), n("el-table-column", {
                attrs: {label: "所属集群", "min-width": "200", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [null !== e.row.canalCluster ? n("span", [t._v("\n          " + t._s(e.row.canalCluster.name) + "\n        ")]) : n("span", [t._v("-")])]
                    }
                }])
            }), t._v(" "), n("el-table-column", {
                attrs: {label: "所属主机", "min-width": "200", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [null !== e.row.nodeServer ? n("span", [t._v("\n          " + t._s(e.row.nodeServer.name) + "\n        ")]) : n("span", [t._v("-")])]
                    }
                }])
            }), t._v(" "), n("el-table-column", {
                attrs: {
                    "class-name": "status-col",
                    label: "状态",
                    "min-width": "150",
                    align: "center"
                }, scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [n("el-tag", {attrs: {type: t._f("statusFilter")(e.row.runningStatus)}}, [t._v(t._s(t._f("statusLabel")(e.row.runningStatus)))])]
                    }
                }])
            }), t._v(" "), n("el-table-column", {
                attrs: {label: "修改时间", "min-width": "200", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [t._v("\n        " + t._s(e.row.modifiedTime) + "\n      ")]
                    }
                }])
            }), t._v(" "), n("el-table-column", {
                attrs: {
                    align: "center",
                    prop: "created_at",
                    label: "操作",
                    "min-width": "150"
                }, scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [n("el-dropdown", {attrs: {trigger: "click"}}, [n("el-button", {
                            attrs: {
                                type: "primary",
                                size: "mini"
                            }
                        }, [t._v("\n            操作"), n("i", {staticClass: "el-icon-arrow-down el-icon--right"})]), t._v(" "), n("el-dropdown-menu", {
                            attrs: {slot: "dropdown"},
                            slot: "dropdown"
                        }, [n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleUpdate(e.row)
                                }
                            }
                        }, [t._v("修改")]), t._v(" "), n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleDelete(e.row)
                                }
                            }
                        }, [t._v("删除")]), t._v(" "), n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleStart(e.row)
                                }
                            }
                        }, [t._v("启动")]), t._v(" "), n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleStop(e.row)
                                }
                            }
                        }, [t._v("停止")]), t._v(" "), n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleLog(e.row)
                                }
                            }
                        }, [t._v("日志")])], 1)], 1)]
                    }
                }])
            })], 1), t._v(" "), n("pagination", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.count > 0,
                    expression: "count>0"
                }],
                attrs: {total: t.count, page: t.listQuery.page, limit: t.listQuery.size},
                on: {
                    "update:page": function (e) {
                        return t.$set(t.listQuery, "page", e)
                    }, "update:limit": function (e) {
                        return t.$set(t.listQuery, "size", e)
                    }, pagination: function (e) {
                        return t.fetchData()
                    }
                }
            })], 1)
        }, r = [], i = (n("7f7f"), n("f546")), o = n("333d"), c = n("d631"), u = {
            components: {Pagination: o["a"]}, filters: {
                statusFilter: function (t) {
                    var e = {1: "success", 0: "gray"};
                    return e[t]
                }, statusLabel: function (t) {
                    var e = {1: "启动", 0: "停止"};
                    return e[t]
                }
            }, data: function () {
                return {
                    list: null,
                    listLoading: !0,
                    dialogFormVisible: !1,
                    nodeServices: [],
                    count: 0,
                    options: [],
                    listQuery: {name: "", clusterServerId: "", page: 1, size: 20},
                    currentId: null,
                    rules: {id: [{required: !0, message: "请选择运行Server", trigger: "change"}]}
                }
            }, created: function () {
                var t = this;
                Object(c["d"])().then(function (e) {
                    t.options = e.data
                }), this.fetchData()
            }, methods: {
                queryData: function () {
                    this.listQuery.page = 1, this.fetchData()
                }, fetchData: function () {
                    var t = this;
                    this.listLoading = !0, Object(i["e"])(this.listQuery).then(function (e) {
                        t.list = e.data.items, t.count = e.data.count
                    }).finally(function () {
                        t.listLoading = !1
                    })
                }, handleCreate: function () {
                    this.$router.push("/canalServer/canalInstance/add")
                }, handleUpdate: function (t) {
                    this.$router.push("/canalServer/canalInstance/modify?id=" + t.id)
                }, handleDelete: function (t) {
                    var e = this;
                    this.$confirm("删除Instance配置会导致停止", "确定删除Instance信息", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        Object(i["c"])(t.id).then(function (t) {
                            "success" === t.data ? (e.fetchData(), e.$message({
                                message: "删除Instance信息成功",
                                type: "success"
                            })) : e.$message({message: "删除Instance信息失败", type: "error"})
                        })
                    })
                }, handleStart: function (t) {
                    var e = this;
                    this.$confirm("启动Instance: " + t.name, "确定启动Instance服务", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        Object(i["h"])(t.id, "start").then(function (t) {
                            t.data ? (e.fetchData(), e.$message({
                                message: "启动成功, 稍后请刷新列表查看状态",
                                type: "success"
                            })) : e.$message({message: "启动Instance出现异常", type: "error"})
                        })
                    })
                }, handleStop: function (t) {
                    var e = this;
                    this.$confirm("停止Instance: " + t.name, "确定停止Instance服务", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        Object(i["h"])(t.id, "stop").then(function (t) {
                            t.data ? (e.fetchData(), e.$message({
                                message: "停止成功, 稍后请刷新列表查看状态",
                                type: "success"
                            })) : e.$message({message: "停止Instance出现异常", type: "error"})
                        })
                    })
                }, handleLog: function (t) {
                    null !== t.nodeId ? this.$router.push("canalInstance/log?id=" + t.id + "&nodeId=" + t.nodeServer.id) : this.$message({
                        message: "当前Instance不是启动状态，无法查看日志",
                        type: "warning"
                    })
                }
            }
        }, s = u, l = n("2877"), d = Object(l["a"])(s, a, r, !1, null, null, null);
        e["default"] = d.exports
    }, "333d": function (t, e, n) {
        "use strict";
        var a = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "pagination-container",
                class: {hidden: t.hidden}
            }, [n("el-pagination", t._b({
                attrs: {
                    background: t.background,
                    "current-page": t.currentPage,
                    "page-size": t.pageSize,
                    layout: t.layout,
                    "page-sizes": t.pageSizes,
                    total: t.total
                }, on: {
                    "update:currentPage": function (e) {
                        t.currentPage = e
                    }, "update:current-page": function (e) {
                        t.currentPage = e
                    }, "update:pageSize": function (e) {
                        t.pageSize = e
                    }, "update:page-size": function (e) {
                        t.pageSize = e
                    }, "size-change": t.handleSizeChange, "current-change": t.handleCurrentChange
                }
            }, "el-pagination", t.$attrs, !1))], 1)
        }, r = [];
        n("c5f6");
        Math.easeInOutQuad = function (t, e, n, a) {
            return t /= a / 2, t < 1 ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e)
        };
        var i = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
                window.setTimeout(t, 1e3 / 60)
            }
        }();

        function o(t) {
            document.documentElement.scrollTop = t, document.body.parentNode.scrollTop = t, document.body.scrollTop = t
        }

        function c() {
            return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
        }

        function u(t, e, n) {
            var a = c(), r = t - a, u = 20, s = 0;
            e = "undefined" === typeof e ? 500 : e;
            var l = function t() {
                s += u;
                var c = Math.easeInOutQuad(s, a, r, e);
                o(c), s < e ? i(t) : n && "function" === typeof n && n()
            };
            l()
        }

        var s = {
            name: "Pagination",
            props: {
                total: {required: !0, type: Number},
                page: {type: Number, default: 1},
                limit: {type: Number, default: 20},
                pageSizes: {
                    type: Array, default: function () {
                        return [10, 20, 30, 50]
                    }
                },
                layout: {type: String, default: "total, sizes, prev, pager, next, jumper"},
                background: {type: Boolean, default: !0},
                autoScroll: {type: Boolean, default: !0},
                hidden: {type: Boolean, default: !1}
            },
            computed: {
                currentPage: {
                    get: function () {
                        return this.page
                    }, set: function (t) {
                        this.$emit("update:page", t)
                    }
                }, pageSize: {
                    get: function () {
                        return this.limit
                    }, set: function (t) {
                        this.$emit("update:limit", t)
                    }
                }
            },
            methods: {
                handleSizeChange: function (t) {
                    this.$emit("pagination", {page: this.currentPage, limit: t}), this.autoScroll && u(0, 800)
                }, handleCurrentChange: function (t) {
                    this.$emit("pagination", {page: t, limit: this.pageSize}), this.autoScroll && u(0, 800)
                }
            }
        }, l = s, d = (n("dfcf"), n("2877")), f = Object(d["a"])(l, a, r, !1, null, "38ef71f0", null);
        e["a"] = f.exports
    }, "5dbc": function (t, e, n) {
        var a = n("d3f4"), r = n("8b97").set;
        t.exports = function (t, e, n) {
            var i, o = e.constructor;
            return o !== n && "function" == typeof o && (i = o.prototype) !== n.prototype && a(i) && r && r(t, i), t
        }
    }, "690d": function (t, e, n) {
    }, "8b97": function (t, e, n) {
        var a = n("d3f4"), r = n("cb7c"), i = function (t, e) {
            if (r(t), !a(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, a) {
                try {
                    a = n("9b43")(Function.call, n("11e9").f(Object.prototype, "__proto__").set, 2), a(t, []), e = !(t instanceof Array)
                } catch (r) {
                    e = !0
                }
                return function (t, n) {
                    return i(t, n), e ? t.__proto__ = n : a(t, n), t
                }
            }({}, !1) : void 0), check: i
        }
    }, 9093: function (t, e, n) {
        var a = n("ce10"), r = n("e11e").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return a(t, r)
        }
    }, aa77: function (t, e, n) {
        var a = n("5ca1"), r = n("be13"), i = n("79e5"), o = n("fdef"), c = "[" + o + "]", u = "​",
            s = RegExp("^" + c + c + "*"), l = RegExp(c + c + "*$"), d = function (t, e, n) {
                var r = {}, c = i(function () {
                    return !!o[t]() || u[t]() != u
                }), s = r[t] = c ? e(f) : o[t];
                n && (r[n] = s), a(a.P + a.F * c, "String", r)
            }, f = d.trim = function (t, e) {
                return t = String(r(t)), 1 & e && (t = t.replace(s, "")), 2 & e && (t = t.replace(l, "")), t
            };
        t.exports = d
    }, c5f6: function (t, e, n) {
        "use strict";
        var a = n("7726"), r = n("69a8"), i = n("2d95"), o = n("5dbc"), c = n("6a99"), u = n("79e5"), s = n("9093").f,
            l = n("11e9").f, d = n("86cc").f, f = n("aa77").trim, p = "Number", m = a[p], h = m, g = m.prototype,
            v = i(n("2aeb")(g)) == p, b = "trim" in String.prototype, y = function (t) {
                var e = c(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    e = b ? e.trim() : f(e, 3);
                    var n, a, r, i = e.charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (n = e.charCodeAt(2), 88 === n || 120 === n) return NaN
                    } else if (48 === i) {
                        switch (e.charCodeAt(1)) {
                            case 66:
                            case 98:
                                a = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                a = 8, r = 55;
                                break;
                            default:
                                return +e
                        }
                        for (var o, u = e.slice(2), s = 0, l = u.length; s < l; s++) if (o = u.charCodeAt(s), o < 48 || o > r) return NaN;
                        return parseInt(u, a)
                    }
                }
                return +e
            };
        if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
            m = function (t) {
                var e = arguments.length < 1 ? 0 : t, n = this;
                return n instanceof m && (v ? u(function () {
                    g.valueOf.call(n)
                }) : i(n) != p) ? o(new h(y(e)), n, m) : y(e)
            };
            for (var _, w = n("9e1e") ? s(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; w.length > S; S++) r(h, _ = w[S]) && !r(m, _) && d(m, _, l(h, _));
            m.prototype = g, g.constructor = m, n("2aba")(a, p, m)
        }
    }, d631: function (t, e, n) {
        "use strict";
        n.d(e, "c", function () {
            return r
        }), n.d(e, "a", function () {
            return i
        }), n.d(e, "e", function () {
            return o
        }), n.d(e, "b", function () {
            return c
        }), n.d(e, "d", function () {
            return u
        });
        var a = n("b775");

        function r(t) {
            return Object(a["a"])({url: "/canal/clusters", method: "get", params: t})
        }

        function i(t) {
            return Object(a["a"])({url: "/canal/cluster", method: "post", data: t})
        }

        function o(t) {
            return Object(a["a"])({url: "/canal/cluster", method: "put", data: t})
        }

        function c(t) {
            return Object(a["a"])({url: "/canal/cluster/" + t, method: "delete"})
        }

        function u() {
            return Object(a["a"])({url: "/canal/clustersAndServers", method: "get"})
        }
    }, dfcf: function (t, e, n) {
        "use strict";
        var a = n("690d"), r = n.n(a);
        r.a
    }, f546: function (t, e, n) {
        "use strict";
        n.d(e, "e", function () {
            return r
        }), n.d(e, "b", function () {
            return i
        }), n.d(e, "k", function () {
            return o
        }), n.d(e, "a", function () {
            return c
        }), n.d(e, "c", function () {
            return u
        }), n.d(e, "i", function () {
            return s
        }), n.d(e, "j", function () {
            return l
        }), n.d(e, "g", function () {
            return d
        }), n.d(e, "h", function () {
            return f
        }), n.d(e, "d", function () {
            return p
        }), n.d(e, "f", function () {
            return m
        });
        var a = n("b775");

        function r(t) {
            return Object(a["a"])({url: "/canal/instances", method: "get", params: t})
        }

        function i(t) {
            return Object(a["a"])({url: "/canal/instance/" + t, method: "get"})
        }

        function o(t) {
            return Object(a["a"])({url: "/canal/instance", method: "put", data: t})
        }

        function c(t) {
            return Object(a["a"])({url: "/canal/instance", method: "post", data: t})
        }

        function u(t) {
            return Object(a["a"])({url: "/canal/instance/" + t, method: "delete"})
        }

        function s(t, e) {
            return Object(a["a"])({url: "/canal/instance/start/" + t + "/" + e, method: "put"})
        }

        function l(t, e) {
            return Object(a["a"])({url: "/canal/instance/stop/" + t + "/" + e, method: "put"})
        }

        function d(t, e) {
            return Object(a["a"])({url: "/canal/instance/log/" + t + "/" + e, method: "get"})
        }

        function f(t, e) {
            return Object(a["a"])({url: "/canal/instance/status/" + t + "?option=" + e, method: "put"})
        }

        function p(t) {
            return Object(a["a"])({url: "/canal/active/instances/" + t, method: "get"})
        }

        function m() {
            return Object(a["a"])({url: "/canal/instance/template", method: "get"})
        }
    }, fdef: function (t, e) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }
}]);