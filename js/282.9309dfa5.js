"use strict";
(self["webpackChunktienda"] = self["webpackChunktienda"] || []).push([[282],{

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

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/administracion/login.vue?vue&type=template&id=24d8de3e&scoped=true



const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-24d8de3e"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "login bg-dark"
};
const _hoisted_2 = {
  class: "q-pa-md bg-white text-black shadow-up-16 rounded-borders",
  style: {
    "width": "400px"
  }
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h6", {
  class: "text-uppercase text-center"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-person-circle",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
  d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
}), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("path", {
  "fill-rule": "evenodd",
  d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
})]), /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" login ")], -1));

const _hoisted_4 = {
  class: "text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_toggle = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toggle");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
    onSubmit: $setup.onSubmit,
    onReset: $setup.onReset,
    class: "q-gutter-md"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      filled: "",
      modelValue: $setup.name,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.name = $event),
      modelModifiers: {
        trim: true
      },
      label: "Your username *",
      title: "please, put your username to log in",
      "lazy-rules": "",
      rules: [val => val && val.length > 0 || 'Please type something']
    }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      filled: "",
      type: "password",
      modelValue: $setup.pass,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.pass = $event),
      modelModifiers: {
        trim: true
      },
      label: "Your password *",
      "lazy-rules": "",
      rules: [val => val !== null && val !== '' || 'Please put your password ']
    }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toggle, {
      modelValue: $setup.accept,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.accept = $event),
      label: "I accept the license and terms"
    }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      label: "Login",
      type: "submit",
      color: "primary"
    })]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      onClick: _cache[3] || (_cache[3] = $event => _ctx.$router.replace(`/register`)),
      flat: "",
      rounded: "",
      color: "primary",
      label: "no tengo una cuenta"
    })]),
    _: 1
  }, 8, ["onSubmit", "onReset"])])]);
}
;// CONCATENATED MODULE: ./src/pages/administracion/login.vue?vue&type=template&id=24d8de3e&scoped=true

// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(52);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./src/auth/index.js
var auth = __webpack_require__(7641);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/administracion/login.vue?vue&type=script&lang=js
;



/* harmony default export */ const loginvue_type_script_lang_js = ({
  setup() {
    const $q = (0,use_quasar/* default */.Z)();
    const name = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const pass = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const accept = (0,reactivity_esm_bundler/* ref */.iH)(false);
    return {
      name,
      pass,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first"
          });
        } else {
          (async () => {
            const res = await axios_default().post("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/users/", {
              username: name.value,
              password: pass.value,
              rol: "c",
              randid: localStorage.getItem("randid")
            });

            if (res.data.estado === 1) {
              localStorage.setItem("token", res.data.token);
              window.location.href = "#/administracion/panel";
              $q.notify({
                color: "green-4",
                textColor: "white",
                icon: "done",
                message: res.data.msg
              });
            } else {
              $q.notify({
                color: "red-5",
                textColor: "white",
                icon: "warning",
                message: res.data.msg
              });
            }
          })();
        }
      },

      onReset() {
        name.value = null;
        pass.value = null;
        accept.value = false;
      }

    };
  },

  beforeCreate: async function () {
    (0,auth/* default */.Z)(this.$route.fullPath);
  },

  renderTriggered({
    key,
    target,
    type
  }) {
    console.log({
      key,
      target,
      type
    });
  }

});
;// CONCATENATED MODULE: ./src/pages/administracion/login.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__(4689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__(8886);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/administracion/login.vue




;
loginvue_type_script_lang_js.render = render
loginvue_type_script_lang_js.__scopeId = "data-v-24d8de3e"

/* harmony default export */ const login = (loginvue_type_script_lang_js);
;




runtime_auto_import_default()(loginvue_type_script_lang_js, 'components', {QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QToggle: QToggle/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=282.9309dfa5.js.map