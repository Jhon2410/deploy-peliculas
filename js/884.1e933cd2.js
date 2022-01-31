"use strict";
(self["webpackChunktienda"] = self["webpackChunktienda"] || []).push([[884],{

/***/ 7641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = "https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/";

const auth = async (path = "", $store) => {
  if (localStorage.getItem("token")) {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(baseUrl + "users/", {
      headers: {
        token: localStorage.getItem("token")
      }
    });

    if (!localStorage.getItem("usuario")) {
      localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
    }

    if (res.data.estado === 0) {
      localStorage.removeItem("token");
      window.location.reload();
    }

    if (res.data.usuario.rol === "c") {
      path === "/login" || path === "/register" || path == "/" || path == "/panel" ? window.location.href = "#/administracion/panel" : null;
    } else {
      path === "/login" || path === "/register" || path == "/" || path == "/administracion/panel" ? window.location.href = "#/panel" : null;
    }
  } else {
    path == "/login" || path == "/register" || path == "/" ? null : window.location.href = "#/login";
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ 1884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ adminLayout)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/adminLayout.vue?vue&type=template&id=65590bd6&scoped=true



const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-65590bd6"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "material-icons"
}, " theaters ", -1));

const _hoisted_2 = {
  class: "q-ml-sm"
};
const _hoisted_3 = {
  class: "busqueda fixed bg-white overflow-auto z-max col-11 q-mx-auto col-sm-4",
  style: {
    "top": "70px",
    "max-height": "200px"
  }
};
const _hoisted_4 = ["onClick"];

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("elige una categoria");

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Create New");

const _hoisted_7 = {
  class: "q-gutter-sm row items-center no-wrap"
};

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("categorias");

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 2 ");

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Notifications");

const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1));

const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Account");

const _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" modo admin ");

const _hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" cerrar session ");

const _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" administrar ");

const _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("usuarios");

const _hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("categorias");

const _hoisted_18 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("peliculas");

const _hoisted_19 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" categorias ");

const _hoisted_20 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" @jhon anderson 2022 ");

const _hoisted_21 = {
  class: "fit q-pt-xl q-px-sm column"
};

const _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "GPL__side-btn__label"
}, "novedades", -1));

const _hoisted_23 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 3 w ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_menu = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-menu");

  const _component_q_tooltip = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tooltip");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_spinner_radio = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner-radio");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-scroll-area");

  const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_sticky = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-sticky");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr fff",
    class: "bg-grey-1"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      elevated: "",
      class: "bg-dark text-white",
      "height-hint": "64"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "GPL__toolbar",
        style: {
          "height": "64px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          dense: "",
          round: "",
          onClick: $setup.toggleLeftDrawer,
          "aria-label": "Menu",
          icon: "menu",
          class: "q-mx-md"
        }, null, 8, ["onClick"]), _ctx.$q.screen.gt.sm ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_toolbar_title, {
          key: 0,
          shrink: "",
          class: "row items-center no-wrap",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.$router.replace(`/login`))
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)($setup.username) + " admin", 1)]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          standout: "",
          modelValue: $setup.ph,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.ph = $event),
          placeholder: "Click here to search something",
          class: "GPL__toolbar-input bg-white",
          onKeyup: _cache[3] || (_cache[3] = $event => $options.filtrar())
        }, {
          append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [$setup.ph === '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 0,
            name: "search"
          })) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 1,
            name: "clear",
            class: "cursor-pointer",
            onClick: _cache[1] || (_cache[1] = $event => {
              $setup.ph = '';
              $setup.busqueda_datos = [];
            })
          }))]),
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.busqueda_datos.slice(0, 10), (resultados, index) => {
            return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
              key: index,
              class: "item-hover overflow-hidden"
            }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
              class: "item-texto",
              onClick: $event => _ctx.$router.replace(`/pelicula/${resultados.id_pelicula}`)
            }, (0,shared_esm_bundler/* toDisplayString */.zw)(resultados.titulo), 9, _hoisted_4)]);
          }), 128))])]),
          _: 1
        }, 8, ["modelValue"]), _ctx.$q.screen.gt.xs ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          key: 1,
          flat: "",
          dense: "",
          "no-wrap": "",
          color: "primary",
          icon: "menu_open",
          "no-caps": "",
          label: "filtrar categoria",
          class: "q-ml-sm q-px-md"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_menu, {
            anchor: "top end",
            self: "top end"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
              class: "text-grey-8",
              style: {
                "min-width": "100px"
              }
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
                "aria-hidden": "true"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                  class: "text-uppercase text-grey-7",
                  style: {
                    "font-size": "0.7rem"
                  }
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
                  _: 1
                })]),
                _: 1
              }), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.links1, (categoria, index) => {
                return (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  key: index,
                  clickable: "",
                  "aria-hidden": "true",
                  onClick: $event => $options.SelectedC(index)
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                    avatar: ""
                  }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                      name: "category"
                    })]),
                    _: 1
                  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(categoria.nombre_categoria), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1032, ["onClick"])), [[_directive_close_popup]]);
              }), 128))]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$q.screen.gt.xs ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          key: 2,
          flat: "",
          dense: "",
          "no-wrap": "",
          color: "primary",
          icon: "add",
          "no-caps": "",
          label: "Create",
          class: "q-ml-sm q-px-md"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_menu, {
            anchor: "top end",
            self: "top end"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
              class: "text-grey-8",
              style: {
                "min-width": "100px"
              }
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
                "aria-hidden": "true"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                  class: "text-uppercase text-grey-7",
                  style: {
                    "font-size": "0.7rem"
                  }
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_6]),
                  _: 1
                })]),
                _: 1
              }), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.createMenu, menu => {
                return (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  key: menu.text,
                  clickable: "",
                  "aria-hidden": "true",
                  onClick: $event => menu.url != `` ? _ctx.$router.replace(menu.url) : null
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                    avatar: "",
                    disable: menu.url != ``
                  }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                      name: menu.icon
                    }, null, 8, ["name"])]),
                    _: 2
                  }, 1032, ["disable"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(menu.text), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1032, ["onClick"])), [[_directive_close_popup]]);
              }), 128))]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          round: "",
          dense: "",
          flat: "",
          color: "text-grey-7",
          icon: "apps"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_8]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          round: "",
          dense: "",
          flat: "",
          color: "grey-8",
          icon: "notifications"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
            color: "red",
            "text-color": "white",
            floating: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_9]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_10]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          round: "",
          flat: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
            size: "26px"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_11]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_12]),
            _: 1
          })]),
          _: 1
        })])]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      modelValue: $setup.leftDrawerOpen,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.leftDrawerOpen = $event),
      bordered: "",
      class: "bg-dark text-white",
      behavior: "mobile",
      onClick: _cache[7] || (_cache[7] = $event => $setup.leftDrawerOpen = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
        class: "fit"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
          class: "GPL__toolbar"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
            class: "row items-center text-white"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_13]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "negative",
          onClick: _cache[4] || (_cache[4] = $event => $options.salir())
        }, {
          loading: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_spinner_radio)]),
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_14]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
          class: "q-my-md"
        }), _hoisted_15, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
          padding: "",
          class: "text-white"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            clickable: "",
            disable: "",
            class: "GPL__drawer-item"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "movie_filter"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                class: "text-white"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_16]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            disable: "",
            class: "GPL__drawer-item"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "movie_filter"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                class: "text-white"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_17]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            clickable: "",
            class: "GPL__drawer-item",
            onClick: _cache[5] || (_cache[5] = $event => _ctx.$router.replace(`/administracion/panel/movie/create`))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "movie_filter"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                class: "text-white"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_18]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
          class: "q-my-md"
        }), _hoisted_19, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
          padding: "",
          class: "text-white"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.links1, link => {
            return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
              key: link.id_categoria,
              clickable: "",
              onClick: $event => link.id_categoria == 1 ? _ctx.$router.replace(`/administracion/panel/`) : _ctx.$router.replace(`/administracion/panel/categoria/${link.id_categoria}`),
              class: "GPL__drawer-item"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                  name: "movie_filter"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                  class: "text-white"
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(link.nombre_categoria), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1032, ["onClick"]);
          }), 128)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
            class: "q-my-md"
          }), _hoisted_20]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, {
      class: "GPL__page-container"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view), _ctx.$q.screen.gt.sm ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page_sticky, {
        key: 0,
        expand: "",
        position: "left"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_21, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          round: "",
          flat: "",
          color: "white",
          stack: "",
          "no-caps": "",
          size: "26px",
          class: "GPL__side-btn",
          onClick: _cache[8] || (_cache[8] = $event => _ctx.$router.replace(`/administracion/panel/categoria/noveda`))
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "22px",
            name: "assistant"
          }), _hoisted_22, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
            floating: "",
            color: "red",
            "text-color": "white",
            style: {
              "top": "8px",
              "right": "16px"
            }
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_23]),
            _: 1
          })]),
          _: 1
        })])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/adminLayout.vue?vue&type=template&id=65590bd6&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/auth/index.js
var auth = __webpack_require__(7641);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(52);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/adminLayout.vue?vue&type=script&lang=js



/* harmony default export */ const adminLayoutvue_type_script_lang_js = ({
  name: "GooglePhotosLayout",

  setup() {
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const search = (0,reactivity_esm_bundler/* ref */.iH)("");
    const storage = (0,reactivity_esm_bundler/* ref */.iH)(0.26);
    const username = "as";

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      username,
      leftDrawerOpen,
      search,
      searchModel: "",
      busqueda_datos: [],
      busqueda: [],
      ph: (0,reactivity_esm_bundler/* ref */.iH)(""),
      storage,
      links1: [],
      categoriaSelected: "",
      categorias_peliculas: [],
      createMenu: [{
        icon: "movie",
        text: "Movie",
        url: "/administracion/panel/movie/create"
      }],
      toggleLeftDrawer
    };
  },

  beforeCreate: async function () {
    (0,auth/* default */.Z)(this.$route.fullPath, this.$store);
    const res = await axios_default().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/movies/categorias");
    const res2 = await axios_default().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/");
    const categorias_peliculas = await axios_default().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/movies/categorias/peliculas");
    this.categorias_peliculas = categorias_peliculas.data.categorias_peliculas;
    this.busqueda = res2.data.peliculas;
    this.links1 = res.data.categorias;

    if (localStorage.getItem("usuario")) {
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      this.username = usuario.username;
    }
  },
  methods: {
    salir: function () {
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      (0,auth/* default */.Z)(this.$route.fullPath);
    },
    filtrar: function () {
      if (this.ph == "") {
        this.busqueda_datos = [];
      } else {
        this.busqueda_datos = [];

        if (this.categoriaSelected != "" || this.categoriaSelected != 0) {
          let admitidas = this.categorias_peliculas.filter(c => c.categoriasid_categoria == this.categoriaSelected);
          const a = admitidas.map(a => {
            return this.busqueda.map(p => {
              if (a.peliculasid_pelicula == p.id_pelicula) {
                return p;
              }
            });
          })[0];

          if (a) {
            this.busqueda_datos = a.filter(b => b != undefined);
          } else {
            this.busqueda_datos = [];
          }
        } else {
          this.busqueda_datos = this.busqueda;
          this.busqueda_datos = this.busqueda_datos.filter(b => b.titulo.toLowerCase().includes(this.ph.toLowerCase()));
        }
      }
    },
    SelectedC: function (category) {
      this.categoriaSelected = category;
      console.log(category);
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/adminLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(9214);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__(4689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js
var QMenu = __webpack_require__(811);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__(8870);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(7704);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerRadio.js
var QSpinnerRadio = __webpack_require__(4590);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(2350);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page-sticky/QPageSticky.js + 1 modules
var QPageSticky = __webpack_require__(1007);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/adminLayout.vue




;

adminLayoutvue_type_script_lang_js.render = render
adminLayoutvue_type_script_lang_js.__scopeId = "data-v-65590bd6"

/* harmony default export */ const adminLayout = (adminLayoutvue_type_script_lang_js);
;






















runtime_auto_import_default()(adminLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSpace: QSpace/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QMenu: QMenu/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QTooltip: QTooltip/* default */.Z,QBadge: QBadge/* default */.Z,QAvatar: QAvatar/* default */.Z,QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QSpinnerRadio: QSpinnerRadio/* default */.Z,QSeparator: QSeparator/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPageSticky: QPageSticky/* default */.Z});runtime_auto_import_default()(adminLayoutvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=884.1e933cd2.js.map