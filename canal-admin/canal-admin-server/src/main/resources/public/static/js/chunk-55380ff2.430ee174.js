(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-55380ff2"], {
    d631: function (t, e, n) {
        "use strict";
        n.d(e, "c", function () {
            return i
        }), n.d(e, "a", function () {
            return r
        }), n.d(e, "e", function () {
            return l
        }), n.d(e, "b", function () {
            return s
        }), n.d(e, "d", function () {
            return o
        });
        var a = n("b775");

        function i(t) {
            return Object(a["a"])({url: "/canal/clusters", method: "get", params: t})
        }

        function r(t) {
            return Object(a["a"])({url: "/canal/cluster", method: "post", data: t})
        }

        function l(t) {
            return Object(a["a"])({url: "/canal/cluster", method: "put", data: t})
        }

        function s(t) {
            return Object(a["a"])({url: "/canal/cluster/" + t, method: "delete"})
        }

        function o() {
            return Object(a["a"])({url: "/canal/clustersAndServers", method: "get"})
        }
    }, e509: function (t, e, n) {
        "use strict";
        n.r(e);
        var a = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "app-container"}, [n("div", {staticClass: "filter-container"}, [n("el-button", {
                staticClass: "filter-item",
                attrs: {type: "primary"},
                on: {
                    click: function (e) {
                        return t.handleCreate()
                    }
                }
            }, [t._v("新建集群")])], 1), t._v(" "), n("el-table", {
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
                attrs: {label: "集群名称", "min-width": "200", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [t._v("\n        " + t._s(e.row.name) + "\n      ")]
                    }
                }])
            }), t._v(" "), n("el-table-column", {
                attrs: {label: "ZK地址", "min-width": "300", align: "center"},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        return [n("span", [t._v(t._s(e.row.zkHosts))])]
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
                                    return t.handleConfig(e.row)
                                }
                            }
                        }, [t._v("主配置")]), t._v(" "), n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleUpdate(e.row)
                                }
                            }
                        }, [t._v("修改集群")]), t._v(" "), n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleDelete(e.row)
                                }
                            }
                        }, [t._v("删除集群")]), t._v(" "), n("el-dropdown-item", {
                            nativeOn: {
                                click: function (n) {
                                    return t.handleView(e.row)
                                }
                            }
                        }, [t._v("查看Server")])], 1)], 1)]
                    }
                }])
            })], 1), t._v(" "), n("el-dialog", {
                attrs: {
                    visible: t.dialogFormVisible,
                    title: t.textMap[t.dialogStatus],
                    width: "600px"
                }, on: {
                    "update:visible": function (e) {
                        t.dialogFormVisible = e
                    }
                }
            }, [n("el-form", {
                ref: "dataForm",
                staticStyle: {width: "400px", "margin-left": "30px"},
                attrs: {rules: t.rules, model: t.canalCluster, "label-position": "left", "label-width": "120px"}
            }, [n("el-form-item", {
                attrs: {
                    label: "集群名称",
                    prop: "name"
                }
            }, [n("el-input", {
                model: {
                    value: t.canalCluster.name, callback: function (e) {
                        t.$set(t.canalCluster, "name", e)
                    }, expression: "canalCluster.name"
                }
            })], 1), t._v(" "), n("el-form-item", {
                attrs: {
                    label: "ZK地址",
                    prop: "zkHosts"
                }
            }, [n("el-input", {
                model: {
                    value: t.canalCluster.zkHosts, callback: function (e) {
                        t.$set(t.canalCluster, "zkHosts", e)
                    }, expression: "canalCluster.zkHosts"
                }
            })], 1)], 1), t._v(" "), n("div", {
                staticClass: "dialog-footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [n("el-button", {
                on: {
                    click: function (e) {
                        t.dialogFormVisible = !1
                    }
                }
            }, [t._v("取消")]), t._v(" "), n("el-button", {
                attrs: {type: "primary"}, on: {
                    click: function (e) {
                        return t.dataOperation()
                    }
                }
            }, [t._v("确定")])], 1)], 1)], 1)
        }, i = [], r = n("d631"), l = {
            filters: {
                statusFilter: function (t) {
                    var e = {1: "success", 0: "gray", "-1": "danger"};
                    return e[t]
                }, statusLabel: function (t) {
                    var e = {1: "启动", 0: "停止", "-1": "断开"};
                    return e[t]
                }
            }, data: function () {
                return {
                    list: null,
                    listLoading: !0,
                    listQuery: {name: "", ip: ""},
                    dialogFormVisible: !1,
                    textMap: {create: "新建集群信息", update: "修改集群信息"},
                    canalCluster: {id: null, name: null, zkHosts: null},
                    rules: {
                        name: [{required: !0, message: "集群名称不能为空", trigger: "change"}],
                        zkHosts: [{required: !0, message: "zk地址不能为空", trigger: "change"}]
                    },
                    dialogStatus: "create"
                }
            }, created: function () {
                this.fetchData()
            }, methods: {
                fetchData: function () {
                    var t = this;
                    this.listLoading = !0, Object(r["c"])(this.listQuery).then(function (e) {
                        t.list = e.data
                    }).finally(function () {
                        t.listLoading = !1
                    })
                }, resetModel: function () {
                    this.canalCluster = {id: null, name: null, zkHosts: null}
                }, handleCreate: function () {
                    var t = this;
                    this.resetModel(), this.dialogStatus = "create", this.dialogFormVisible = !0, this.$nextTick(function () {
                        t.$refs["dataForm"].clearValidate()
                    })
                }, dataOperation: function () {
                    var t = this;
                    this.$refs["dataForm"].validate(function (e) {
                        e && ("create" === t.dialogStatus && Object(r["a"])(t.canalCluster).then(function (e) {
                            t.operationRes(e)
                        }), "update" === t.dialogStatus && Object(r["e"])(t.canalCluster).then(function (e) {
                            t.operationRes(e)
                        }))
                    })
                }, operationRes: function (t) {
                    "success" === t.data ? (this.fetchData(), this.dialogFormVisible = !1, this.$message({
                        message: this.textMap[this.dialogStatus] + "成功",
                        type: "success"
                    })) : this.$message({message: this.textMap[this.dialogStatus] + "失败", type: "error"})
                }, handleView: function (t) {
                    this.$router.push("/canalServer/nodeServers?clusterId=" + t.id)
                }, handleConfig: function (t) {
                    this.$router.push("/canalServer/nodeServer/config?clusterId=" + t.id)
                }, handleUpdate: function (t) {
                    var e = this;
                    this.resetModel(), this.canalCluster = Object.assign({}, t), this.dialogStatus = "update", this.dialogFormVisible = !0, this.$nextTick(function () {
                        e.$refs["dataForm"].clearValidate()
                    })
                }, handleDelete: function (t) {
                    var e = this;
                    this.$confirm("删除集群信息会导致服务停止", "确定删除集群信息", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(function () {
                        Object(r["b"])(t.id).then(function (t) {
                            "success" === t.data ? (e.fetchData(), e.$message({
                                message: "删除集群信息成功",
                                type: "success"
                            })) : e.$message({message: "删除集群信息失败", type: "error"})
                        })
                    })
                }
            }
        }, s = l, o = n("2877"), c = Object(o["a"])(s, a, i, !1, null, null, null);
        e["default"] = c.exports
    }
}]);