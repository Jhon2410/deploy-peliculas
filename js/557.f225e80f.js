"use strict";
(self["webpackChunktienda"] = self["webpackChunktienda"] || []).push([[557],{

/***/ 5557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ add)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/administracion/panel/movies/add.vue?vue&type=template&id=01aa75e7

const _hoisted_1 = {
  class: "q-pa-md"
};
const _hoisted_2 = {
  class: "q-ma-md q-gutter-sm text-dark"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-white"
}, "Nombre", -1);

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-white"
}, "Descripción", -1);

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-white"
}, "Duraccion de la pelicula", -1);

const _hoisted_6 = {
  class: "row items-center justify-end"
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-white"
}, "Categorias", -1);

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-white"
}, "Portada de la pelicula", -1);

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-white q-my-sm"
}, " seleciona una url de un video en youtube para trailer de la pelicula ", -1);

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-white q-my-sm"
}, " seleciona una fecha de estreno la pelicula ", -1);

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, " El ultimo paso para crear la pelicula. por favor verifique que todos los campos esten correctos. ", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_editor = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-editor");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_time = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-time");

  const _component_q_popup_proxy = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-popup-proxy");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");

  const _component_q_step = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-step");

  const _component_q_file = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-file");

  const _component_q_date = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-date");

  const _component_q_stepper_navigation = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-stepper-navigation");

  const _component_q_stepper = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-stepper");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
    modelValue: $setup.step,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => $setup.step = $event),
    ref: "stepper",
    dark: "",
    class: "bg-grey-10",
    "active-color": "deep-orange",
    "done-color": "positive",
    animated: ""
  }, {
    navigation: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_stepper_navigation, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [$setup.step === 3 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        key: 0,
        color: "positive",
        onClick: _cache[8] || (_cache[8] = $event => $options.enviar()),
        label: "Finish",
        class: "q-ml-sm"
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $setup.step < 3 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        key: 1,
        onClick: _cache[9] || (_cache[9] = $event => _ctx.$refs.stepper.next()),
        color: "deep-orange",
        label: $setup.step === 3 ? 'Finish' : 'Continue'
      }, null, 8, ["label"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $setup.step > 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        key: 2,
        flat: "",
        color: "deep-orange",
        onClick: _cache[10] || (_cache[10] = $event => _ctx.$refs.stepper.previous()),
        label: "Back",
        class: "q-ml-sm"
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    })]),
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_step, {
      name: 1,
      title: "datos sobre la pelicula",
      icon: "settings",
      done: $setup.step > 1
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [_hoisted_3, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        filled: "",
        modelValue: $setup.nombreMovie,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.nombreMovie = $event),
        class: "bg-white",
        label: "Nombre de la pelicula",
        dense: $setup.dense
      }, null, 8, ["modelValue", "dense"]), _hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_editor, {
        modelValue: $setup.qeditor,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.qeditor = $event),
        dense: $setup.$q.screen.lt.md,
        toolbar: [[{
          label: $setup.$q.lang.editor.align,
          icon: $setup.$q.iconSet.editor.align,
          fixedLabel: true,
          list: 'only-icons',
          options: ['left', 'center', 'right', 'justify']
        }, {
          label: $setup.$q.lang.editor.align,
          icon: $setup.$q.iconSet.editor.align,
          fixedLabel: true,
          options: ['left', 'center', 'right', 'justify']
        }], ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'], ['token', 'hr', 'link', 'custom_btn'], ['print', 'fullscreen'], [{
          label: $setup.$q.lang.editor.formatting,
          icon: $setup.$q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
        }, {
          label: $setup.$q.lang.editor.fontSize,
          icon: $setup.$q.iconSet.editor.fontSize,
          fixedLabel: true,
          fixedIcon: true,
          list: 'no-icons',
          options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
        }, {
          label: $setup.$q.lang.editor.defaultFont,
          icon: $setup.$q.iconSet.editor.font,
          fixedIcon: true,
          list: 'no-icons',
          options: ['default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana']
        }, 'removeFormat'], ['quote', 'unordered', 'ordered', 'outdent', 'indent'], ['undo', 'redo'], ['viewsource']],
        fonts: {
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana'
        }
      }, null, 8, ["modelValue", "dense", "toolbar"]), _hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        filled: "",
        modelValue: $setup.timeWithSeconds,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.timeWithSeconds = $event),
        class: "bg-white text-center col-6 q-ma-sm",
        mask: "fulltime",
        rules: ['fulltime'],
        style: {
          "width": "250px",
          "margin": "auto"
        }
      }, {
        append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "access_time",
          class: "cursor-pointer"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_popup_proxy, {
            cover: "",
            "transition-show": "scale",
            "transition-hide": "scale"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_time, {
              modelValue: $setup.timeWithSeconds,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.timeWithSeconds = $event),
              "with-seconds": "",
              format24h: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                label: "Close",
                color: "primary",
                flat: ""
              }, null, 512), [[_directive_close_popup]])])]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"]), _hoisted_7, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
        filled: "",
        modelValue: $setup.categorias,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.categorias = $event),
        multiple: "",
        class: "bg-white",
        options: $setup.options,
        counter: "",
        hint: "categorias",
        style: {
          "width": "250px",
          "margin": "auto"
        }
      }, null, 8, ["modelValue", "options"])])]),
      _: 1
    }, 8, ["done"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_step, {
      name: 2,
      title: "imagenes y trailers",
      caption: "Optional",
      icon: "create_new_folder",
      done: $setup.step > 2
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_8, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_file, {
        class: "bg-white q-ma-auto",
        modelValue: $setup.filesImages,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.filesImages = $event),
        filled: "",
        label: "solo imagenes",
        multiple: "",
        accept: ".jpg, image/*",
        onRejected: $setup.onRejected
      }, null, 8, ["modelValue", "onRejected"]), _hoisted_9, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        outlined: "",
        class: "bg-white q-mt-sm",
        modelValue: $setup.trailerMovie,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.trailerMovie = $event),
        label: "youtube video url"
      }, null, 8, ["modelValue"])]),
      _: 1
    }, 8, ["done"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_step, {
      name: 3,
      title: "fecha de estreno",
      class: "text-center q-ma-auto",
      icon: "add_comment"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_10, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_date, {
        modelValue: $setup.estrenoMovie,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $setup.estrenoMovie = $event),
        dark: "",
        bordered: ""
      }, null, 8, ["modelValue"]), _hoisted_11]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])]);
}
;// CONCATENATED MODULE: ./src/pages/administracion/panel/movies/add.vue?vue&type=template&id=01aa75e7

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(52);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/administracion/panel/movies/add.vue?vue&type=script&lang=js



;
/* harmony default export */ const addvue_type_script_lang_js = ({
  setup() {
    return {
      $q: (0,use_quasar/* default */.Z)(),
      step: (0,reactivity_esm_bundler/* ref */.iH)(1),
      nombreMovie: (0,reactivity_esm_bundler/* ref */.iH)(""),
      trailerMovie: (0,reactivity_esm_bundler/* ref */.iH)(""),
      ph: (0,reactivity_esm_bundler/* ref */.iH)(""),
      dense: (0,reactivity_esm_bundler/* ref */.iH)(false),
      estrenoMovie: (0,reactivity_esm_bundler/* ref */.iH)(""),
      date: (0,reactivity_esm_bundler/* ref */.iH)("2019/02/01"),
      qeditor: (0,reactivity_esm_bundler/* ref */.iH)("Descripcion de la pelicula"),
      timeWithSeconds: (0,reactivity_esm_bundler/* ref */.iH)("00:00:00"),
      categorias: (0,reactivity_esm_bundler/* ref */.iH)(null),
      model2: (0,reactivity_esm_bundler/* ref */.iH)(null),
      filesImages: (0,reactivity_esm_bundler/* ref */.iH)(null),
      options: [],

      onRejected(rejectedEntries) {
        $q.notify({
          type: "negative",
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`
        });
      }

    };
  },

  methods: {
    enviar: async function () {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      const data = new FormData();
      data.append("caratula", this.filesImages[0]);
      data.append("titulo", this.nombreMovie);
      data.append("descripcion", this.qeditor);
      data.append("fecha_estreno", this.estrenoMovie);
      data.append("duracion", this.timeWithSeconds);
      data.append("categorias", this.categorias);
      data.append("trailer", this.trailerMovie);
      const res = await axios_default().post("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/movies/subir", data);
      console.log(res);

      if (res.data.estado != 1) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: res.data.msg
        });
      } else {
        this.$q.notify({
          color: "green-5",
          textColor: "white",
          icon: "positive",
          message: res.data.msg
        });
        this.$router.replace("/administracion/panel");
      }

      console.log(this.nombreMovie, this.trailerMovie, this.estrenoMovie, this.qeditor, this.filesImages[0], this.categorias, this.timeWithSeconds);
    }
  },
  beforeCreate: async function () {
    const res = await axios_default().get("https://app-7c7abf18-8298-4713-a5f3-1861e51324b6.cleverapps.io/movies/categorias");
    console.log(res.data.categorias);
    this.options = res.data.categorias.map(categoria => categoria.id_categoria + " " + categoria.nombre_categoria);
    console.log(this.options);
  }
});
;// CONCATENATED MODULE: ./src/pages/administracion/panel/movies/add.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__(3518);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js + 1 modules
var QStep = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 1 modules
var QInput = __webpack_require__(4689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 6 modules
var QEditor = __webpack_require__(9991);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__(3944);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__(5990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(7757);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/file/QFile.js + 1 modules
var QFile = __webpack_require__(4974);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__(5626);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepperNavigation.js
var QStepperNavigation = __webpack_require__(118);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/administracion/panel/movies/add.vue



addvue_type_script_lang_js.render = render

/* harmony default export */ const add = (addvue_type_script_lang_js);
;












runtime_auto_import_default()(addvue_type_script_lang_js, 'components', {QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QInput: QInput/* default */.Z,QEditor: QEditor/* default */.Z,QIcon: QIcon/* default */.Z,QPopupProxy: QPopupProxy/* default */.Z,QTime: QTime/* default */.Z,QBtn: QBtn/* default */.Z,QSelect: QSelect/* default */.Z,QFile: QFile/* default */.Z,QDate: QDate/* default */.Z,QStepperNavigation: QStepperNavigation/* default */.Z});runtime_auto_import_default()(addvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=557.f225e80f.js.map