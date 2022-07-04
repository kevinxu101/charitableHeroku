"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Charity_Logs_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charity/Logs.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charity/Logs.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_css_datatable_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/css/datatable.css */ "./public/css/datatable.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    logs: Object,
    filters: Object,
    errors: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var from = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.from);
    var to = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.to);
    var entries = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.entries);
    var sort = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.sort);
    var defaultURL = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return Object.keys(route().params).length === 0;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(entries, function (value) {
      var routeIsEmpty = Object.keys(route().params).length === 0;
      var routeHaveAtleastOneAndIsEntries = route().params['entries'] && Object.keys(route().params).length === 1;

      if (routeIsEmpty || routeHaveAtleastOneAndIsEntries) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route('charity.logs.index'), {
          entries: value
        }, {
          preserveState: true,
          replace: true
        });
        return;
      }

      if (route().params['entries'] && route().params['page'] || route().params['page']) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route('charity.logs.index'), {
          entries: value
        }, {
          preserveState: true,
          replace: true
        });
        return;
      }

      if (route().params['order'] && route().params['sort']) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route('charity.logs.index'), {
          sort: sort.value,
          order: 'timestamp',
          entries: value
        }, {
          preserveState: true,
          replace: true
        });
        return;
      }

      if (route().params['from'] && route().params['to'] || route().params['from']) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route('charity.logs.index'), {
          from: from.value,
          to: to.value,
          entries: value
        }, {
          preserveState: true,
          replace: true
        });
        return;
      }
    });
    var __returned__ = {
      props: props,
      from: from,
      to: to,
      entries: entries,
      sort: sort,
      defaultURL: defaultURL,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_1__.watch,
      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,
      Inertia: _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charity/Logs.vue?vue&type=template&id=5bbcff0f":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charity/Logs.vue?vue&type=template&id=5bbcff0f ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header class=\"page-header page-header-dark bg-gradient-primary-to-secondary pb-10\"><div class=\"container-xl px-4\"><div class=\"page-header-content pt-4\"><div class=\"row align-items-center justify-content-between\"><div class=\"col-auto mt-4\"><h1 class=\"page-header-title\"><div class=\"page-header-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-filter\"><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon></svg></div> Your Logs </h1></div></div></div></div></header>", 1);

var _hoisted_2 = {
  "class": "container-xl px-4 mt-n10"
};
var _hoisted_3 = {
  "class": "card mb-4"
};
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns"
};
var _hoisted_6 = {
  "class": "dataTable-top"
};
var _hoisted_7 = {
  "class": "dataTable-dropdown"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"10\" selected>10</option><option value=\"20\">20</option><option value=\"50\">50</option><option value=\"70\">70</option><option value=\"100\">100</option>", 5);

var _hoisted_13 = [_hoisted_8];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" entries per page ");

var _hoisted_15 = {
  "class": "dataTable-search row mt-2"
};
var _hoisted_16 = {
  "class": "col-auto"
};
var _hoisted_17 = {
  "class": "input-group"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text",
  id: "inputGroup-sizing-default"
}, "From", -1
/* HOISTED */
);

var _hoisted_19 = ["textContent"];
var _hoisted_20 = {
  "class": "col-auto"
};
var _hoisted_21 = {
  "class": "input-group"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text",
  id: "inputGroup-sizing-default"
}, "To", -1
/* HOISTED */
);

var _hoisted_23 = ["textContent"];
var _hoisted_24 = {
  "class": "col-auto"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fad fa-search"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Show all ");

var _hoisted_27 = {
  "class": "dataTable-container"
};
var _hoisted_28 = {
  style: {
    "width": "100%"
  }
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "10%"
  },
  "class": "text-center"
}, " # ", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "60%"
  },
  "class": "text-center"
}, " Activity ", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Timestamp ");

var _hoisted_32 = {
  "class": "text-center"
};
var _hoisted_33 = {
  key: 0
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "dataTables-empty",
  colspan: "3",
  width: "1300"
}, " No results match your search query ", -1
/* HOISTED */
);

var _hoisted_35 = [_hoisted_34];
var _hoisted_36 = {
  "class": "dataTable-bottom mt-3"
};
var _hoisted_37 = {
  "class": "dataTable-info"
};
var _hoisted_38 = {
  "class": "dataTable-pagination"
};
var _hoisted_39 = {
  "class": "dataTable-pagination-list"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "logs"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main page content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.entries = $event;
    }),
    "class": "dataTable-selector"
  }, _hoisted_13, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.entries]]), _hoisted_14])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "datetime-local",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.from = $event;
    }),
    "class": "form-control",
    "aria-label": "Sizing example input",
    "aria-describedby": "inputGroup-sizing-default"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.from]])]), $props.errors.from ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.errors.from),
    "class": "invalid-feedback text-center d-block",
    role: "alert"
  }, null, 8
  /* PROPS */
  , _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "datetime-local",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.to = $event;
    }),
    "class": "form-control",
    "aria-label": "Sizing example input",
    "aria-describedby": "inputGroup-sizing-default"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.to]])]), $props.errors.to ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.errors.to),
    "class": "invalid-feedback text-center d-block",
    role: "alert"
  }, null, 8
  /* PROPS */
  , _hoisted_23)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.$route('charity.logs.index'),
    method: "get",
    data: {
      from: $setup.from,
      to: $setup.to
    },
    "class": "btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_25];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "data"]), !$setup.defaultURL ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: _ctx.$route('charity.logs.index'),
    method: "get",
    "class": "ms-2 btn btn-light"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_26];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card, {
    id: "datatablesSimple",
    "class": "dataTable-table"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_28, [_hoisted_29, _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "width": "20%"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-center", $setup.sort == 'asc' ? 'asc' : 'desc'])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: _ctx.$route('charity.logs.index', {
          'order': 'timestamp',
          'sort': $setup.sort == 'asc' ? 'desc' : 'asc',
          from: $setup.from,
          to: $setup.to
        }),
        "class": "dataTable-sorter"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_31];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])], 2
      /* CLASS */
      )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.logs.data, function (log, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.logs.from + index), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(log.activity), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(log.created_at), 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      )), $props.logs.data.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_33, _hoisted_35)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.logs.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.logs.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.logs.total) + " entries ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_39, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.logs.links, function (link, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([link.active ? 'active' : '', link.url ? 'pager' : ''])
    }, [link.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(link.url ? 'Link' : 'span'), {
      key: 0,
      href: link.url,
      innerHTML: link.label
    }, null, 8
    /* PROPS */
    , ["href", "innerHTML"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./public/css/datatable.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./public/css/datatable.css ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n\r\n.btn-icon {\r\n  padding: 0;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  border-radius: 100%;\r\n  flex-shrink: 0;\r\n  height: calc((0.875rem * 1) + (0.875rem * 2) + (2px)) !important;\r\n  width: calc((0.875rem * 1) + (0.875rem * 2) + (2px)) !important;\r\n}\r\n.btn-icon .feather {\r\n  margin-top: 0 !important;\r\n}\r\n.btn-icon.btn-xl {\r\n  height: calc((1.125rem * 1) + (1.25rem * 2) + (2px)) !important;\r\n  width: calc((1.125rem * 1) + (1.25rem * 2) + (2px)) !important;\r\n  border-radius: 100%;\r\n}\r\n.btn-icon.btn-lg, .btn-group-lg > .btn-icon.btn {\r\n  height: calc((1rem * 1) + (1.125rem * 2) + (2px)) !important;\r\n  width: calc((1rem * 1) + (1.125rem * 2) + (2px)) !important;\r\n}\r\n.btn-icon.btn-sm, .btn-group-sm > .btn-icon.btn {\r\n  height: calc((0.75rem * 1) + (0.5rem * 2) + (2px)) !important;\r\n  width: calc((0.75rem * 1) + (0.5rem * 2) + (2px)) !important;\r\n}\r\n.btn-icon.btn-xs {\r\n  height: calc((0.7rem * 1) + (0.25rem * 2) + (2px)) !important;\r\n  width: calc((0.7rem * 1) + (0.25rem * 2) + (2px)) !important;\r\n  border-radius: 100%;\r\n}\r\n.btn-icon.btn-link {\r\n  text-decoration: none;\r\n}\r\n\r\n.bg-gradient-primary-to-secondary {\r\n    background-color: #0061f2 !important;\r\n    background-image: linear-gradient(\r\n        135deg,\r\n        #0061f2 0%,\r\n        rgba(105, 0, 199, 0.8) 100%\r\n    ) !important;\r\n}\r\n\r\n.me-2 {\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.btn-transparent-dark:hover {\r\n  color: rgba(33, 40, 50, 0.5);\r\n  background-color: rgba(33, 40, 50, 0.1);\r\n  border-color: transparent;\r\n}\r\n\r\n.pt-4 {\r\n  padding-top: 1.5rem !important;\r\n}\r\n\r\n.pb-10 {\r\n  padding-bottom: 6rem !important;\r\n}\r\n\r\n.table,\r\n.dataTable-table {\r\n    --bs-table-bg: transparent;\r\n    --bs-table-accent-bg: transparent;\r\n    --bs-table-striped-color: #69707a;\r\n    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\r\n    --bs-table-active-color: #69707a;\r\n    --bs-table-active-bg: rgba(0, 0, 0, 0.1);\r\n    --bs-table-hover-color: #69707a;\r\n    --bs-table-hover-bg: rgba(224, 229, 236, 0.25);\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    color: #69707a;\r\n    vertical-align: top;\r\n    border-color: #e0e5ec;\r\n}\r\n.table > :not(caption) > * > *,\r\n.dataTable-table > :not(caption) > * > * {\r\n    padding: 0.75rem 0.75rem;\r\n    background-color: var(--bs-table-bg);\r\n    border-bottom-width: 1px;\r\n    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);\r\n}\r\n.table > tbody,\r\n.dataTable-table > tbody {\r\n    vertical-align: inherit;\r\n}\r\n.table > thead,\r\n.dataTable-table > thead {\r\n    vertical-align: bottom;\r\n}\r\n.table > :not(:first-child),\r\n.dataTable-table > :not(:first-child) {\r\n    border-top: 2px solid currentColor;\r\n}\r\n\r\n.dataTable-table > :not(caption) > * {\r\n    border-width: 1px 0;\r\n}\r\n.dataTable-table > :not(caption) > * > * {\r\n    border-width: 0 1px;\r\n}\r\n\r\n.table-active {\r\n    --bs-table-accent-bg: var(--bs-table-active-bg);\r\n    color: var(--bs-table-active-color);\r\n}\r\n\r\n.dataTable-table > tbody > tr:hover > * {\r\n    --bs-table-accent-bg: var(--bs-table-hover-bg);\r\n    color: var(--bs-table-hover-color);\r\n}\r\n\r\n.dataTable-wrapper .dataTable-container {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.dataTable-input {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.875rem 1.125rem;\r\n    font-size: 0.875rem;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    color: #69707a;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #c5ccd6;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    border-radius: 0.35rem;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    .dataTable-input {\r\n        transition: none;\r\n    }\r\n}\r\n.dataTable-input:focus {\r\n    color: #69707a;\r\n    background-color: #fff;\r\n    border-color: transparent;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.25rem rgba(0, 97, 242, 0.25);\r\n}\r\n.dataTable-input::-webkit-date-and-time-value {\r\n    height: 1em;\r\n}\r\n.dataTable-input::-moz-placeholder {\r\n    color: #a7aeb8;\r\n    opacity: 1;\r\n}\r\n.dataTable-input:-ms-input-placeholder {\r\n    color: #a7aeb8;\r\n    opacity: 1;\r\n}\r\n.dataTable-input::placeholder {\r\n    color: #a7aeb8;\r\n    opacity: 1;\r\n}\r\n.dataTable-input:disabled {\r\n    background-color: #e0e5ec;\r\n    opacity: 1;\r\n}\r\n.dataTable-input::-webkit-file-upload-button {\r\n    padding: 0.875rem 1.125rem;\r\n    margin: -0.875rem -1.125rem;\r\n    -webkit-margin-end: 1.125rem;\r\n    margin-inline-end: 1.125rem;\r\n    color: #69707a;\r\n    background-color: #fff;\r\n    pointer-events: none;\r\n    border-color: inherit;\r\n    border-style: solid;\r\n    border-width: 0;\r\n    border-inline-end-width: 1px;\r\n    border-radius: 0;\r\n    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n.dataTable-input::file-selector-button {\r\n    padding: 0.875rem 1.125rem;\r\n    margin: -0.875rem -1.125rem;\r\n    -webkit-margin-end: 1.125rem;\r\n    margin-inline-end: 1.125rem;\r\n    color: #69707a;\r\n    background-color: #fff;\r\n    pointer-events: none;\r\n    border-color: inherit;\r\n    border-style: solid;\r\n    border-width: 0;\r\n    border-inline-end-width: 1px;\r\n    border-radius: 0;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    .dataTable-input::-webkit-file-upload-button {\r\n        -webkit-transition: none;\r\n        transition: none;\r\n    }\r\n    .dataTable-input::file-selector-button {\r\n        transition: none;\r\n    }\r\n}\r\n.dataTable-input:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\r\n    background-color: #f2f2f2;\r\n}\r\n.dataTable-input:hover:not(:disabled):not([readonly])::file-selector-button {\r\n    background-color: #f2f2f2;\r\n}\r\n.dataTable-input::-webkit-file-upload-button {\r\n    padding: 0.875rem 1.125rem;\r\n    margin: -0.875rem -1.125rem;\r\n    -webkit-margin-end: 1.125rem;\r\n    margin-inline-end: 1.125rem;\r\n    color: #69707a;\r\n    background-color: #fff;\r\n    pointer-events: none;\r\n    border-color: inherit;\r\n    border-style: solid;\r\n    border-width: 0;\r\n    border-inline-end-width: 1px;\r\n    border-radius: 0;\r\n    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    .dataTable-input::-webkit-file-upload-button {\r\n        -webkit-transition: none;\r\n        transition: none;\r\n    }\r\n}\r\n.dataTable-input:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n.dataTable-selector {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.875rem 3.375rem 0.875rem 1.125rem;\r\n    -moz-padding-start: calc(1.125rem - 3px);\r\n    font-size: 0.875rem;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    color: #69707a;\r\n    background-color: #fff;\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23363d47' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: right 1.125rem center;\r\n    background-size: 16px 12px;\r\n    border: 1px solid #c5ccd6;\r\n    border-radius: 0.35rem;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    .dataTable-selector {\r\n        transition: none;\r\n    }\r\n}\r\n.dataTable-selector:focus {\r\n    border-color: transparent;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.25rem rgba(0, 97, 242, 0.25);\r\n}\r\n.dataTable-selector:disabled {\r\n    background-color: #e0e5ec;\r\n}\r\n.dataTable-selector:-moz-focusring {\r\n    color: transparent;\r\n    text-shadow: 0 0 0 #69707a;\r\n}\r\n\r\n.dataTable-pagination ul {\r\n    display: flex;\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.dataTable-pagination a {\r\n    position: relative;\r\n    display: block;\r\n    color: #0061f2;\r\n    background-color: #fff;\r\n    border: 1px solid #d4dae3;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\r\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    .dataTable-pagination a {\r\n        transition: none;\r\n    }\r\n}\r\n.dataTable-pagination a:hover {\r\n    z-index: 2;\r\n    color: #004ec2;\r\n    text-decoration: none;\r\n    background-color: #e0e5ec;\r\n    border-color: #d4dae3;\r\n}\r\n.dataTable-pagination a:focus {\r\n    z-index: 3;\r\n    color: #004ec2;\r\n    background-color: #e0e5ec;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.25rem rgba(0, 97, 242, 0.25);\r\n}\r\n\r\n.dataTable-pagination li:not(:first-child) a {\r\n    margin-left: -1px;\r\n}\r\n.dataTable-pagination li.active a {\r\n    z-index: 3;\r\n    color: #fff;\r\n    background-color: #0061f2;\r\n    border-color: #0061f2;\r\n}\r\n\r\n.dataTable-pagination a {\r\n    padding: 0.375rem 0.75rem;\r\n}\r\n\r\n.dataTable-pagination li:first-child a {\r\n    border-top-left-radius: 0.35rem;\r\n    border-bottom-left-radius: 0.35rem;\r\n}\r\n.dataTable-pagination li:last-child a {\r\n    border-top-right-radius: 0.35rem;\r\n    border-bottom-right-radius: 0.35rem;\r\n}\r\n\r\n.mt-n10 {\r\n    margin-top: -6rem !important;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);\r\n}\r\n.card .card-header {\r\n    font-weight: 500;\r\n}\r\n.card:not([class*=\"bg-\"]) .card-header {\r\n    color: #0061f2;\r\n}\r\n.dropdown .dropdown-toggle.show .dropdown-arrow {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.feather {\r\n    height: 1rem;\r\n    width: 1rem;\r\n    vertical-align: top;\r\n}\r\n\r\n/* page */\r\n.page-header .page-header-content {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n}\r\n.page-header .page-header-content .page-header-title {\r\n    line-height: normal;\r\n    font-size: 2.25rem;\r\n    font-weight: 500;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n}\r\n.page-header .page-header-content .page-header-title .page-header-icon {\r\n    margin-right: 0.5rem;\r\n    display: inline-flex;\r\n}\r\n.page-header\r\n    .page-header-content\r\n    .page-header-title\r\n    .page-header-icon\r\n    .feather {\r\n    height: 1.75rem;\r\n    width: 1.75rem;\r\n}\r\n.page-header .page-header-content .page-header-subtitle {\r\n    font-size: 1.15rem;\r\n    margin-top: 0.25rem;\r\n}\r\n\r\n.page-header.page-header-dark {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n.page-header.page-header-dark .page-header-title {\r\n    color: #fff;\r\n}\r\n.page-header.page-header-dark .page-header-title .page-header-icon {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n.page-header.page-header-dark .page-header-subtitle {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n/* PAGER */\r\n.dataTable-pagination a:hover {\r\n    background-color: #e0e5ec;\r\n  }\r\n  \r\n  .dataTable-pagination .active a,\r\n  .dataTable-pagination .active a:focus,\r\n  .dataTable-pagination .active a:hover {\r\n    background-color: #0061f2;\r\n  }\r\n  \r\n  .dataTable-pagination .ellipsis a,\r\n  .dataTable-pagination .disabled a,\r\n  .dataTable-pagination .disabled a:focus,\r\n  .dataTable-pagination .disabled a:hover {\r\n    cursor: not-allowed;\r\n  }\r\n  \r\n  .dataTable-pagination .disabled a,\r\n  .dataTable-pagination .disabled a:focus,\r\n  .dataTable-pagination .disabled a:hover {\r\n    cursor: not-allowed;\r\n    opacity: 0.4;\r\n  }\r\n  \r\n  .dataTable-pagination .pager a {\r\n    font-weight: bold;\r\n  }\r\n  \r\n\r\n/*datatables*/\r\n.dataTable-wrapper .dataTable-container {\r\n    font-size: 0.875rem;\r\n     }\r\n  \r\n  .dataTable-wrapper.no-header .dataTable-container {\r\n    border-top: none;\r\n  }\r\n  \r\n  .dataTable-wrapper.no-footer .dataTable-container {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .dataTable-top {\r\n    padding: 0 0 1rem;\r\n  }\r\n  \r\n  .dataTable-bottom {\r\n    padding: 0;\r\n  }\r\n  \r\n  .dataTable-top > nav:first-child,\r\n  .dataTable-top > div:first-child,\r\n  .dataTable-bottom > nav:first-child,\r\n  .dataTable-bottom > div:first-child {\r\n    float: left;\r\n  }\r\n  \r\n  .dataTable-top > nav:last-child,\r\n  .dataTable-top > div:last-child,\r\n  .dataTable-bottom > nav:last-child,\r\n  .dataTable-bottom > div:last-child {\r\n    float: right;\r\n  }\r\n  \r\n  .dataTable-selector {\r\n    width: auto;\r\n    display: inline-block;\r\n    padding-left: 1.125rem;\r\n    padding-right: 2.125rem;\r\n    margin-right: 0.25rem;\r\n  }\r\n  \r\n  .dataTable-info {\r\n    margin: 7px 0;\r\n}\r\n  \r\n  /* TABLE */\r\n  .dataTable-table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  .dataTable-table > tbody > tr > td,\r\n  .dataTable-table > tbody > tr > th,\r\n  .dataTable-table > tfoot > tr > td,\r\n  .dataTable-table > tfoot > tr > th,\r\n  .dataTable-table > thead > tr > td,\r\n  .dataTable-table > thead > tr > th {\r\n    vertical-align: top;\r\n    padding: 0.75rem 0.75rem;\r\n  }\r\n  \r\n  .dataTable-table > thead > tr > th {\r\n    vertical-align: bottom;\r\n    text-align: left;\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .dataTable-table > tfoot > tr > th {\r\n    vertical-align: bottom;\r\n    text-align: left;\r\n  }\r\n  \r\n  .dataTable-table th {\r\n    vertical-align: bottom;\r\n    text-align: left;\r\n  }\r\n  \r\n  .dataTable-table th a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  .dataTable-sorter {\r\n    display: inline-block;\r\n    height: 100%;\r\n    position: relative;\r\n    width: 100%;\r\n  }\r\n  \r\n  .dataTable-sorter::before,\r\n  .dataTable-sorter::after {\r\n    content: \"\";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    right: 4px;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    opacity: 0.2;\r\n  }\r\n  \r\n  .dataTable-sorter::before {\r\n    border-top: 4px solid #000;\r\n    bottom: 0px;\r\n  }\r\n  \r\n  .dataTable-sorter::after {\r\n    border-bottom: 4px solid #000;\r\n    border-top: 4px solid transparent;\r\n    top: 0px;\r\n  }\r\n  \r\n  .asc .dataTable-sorter::after,\r\n  .desc .dataTable-sorter::before {\r\n    opacity: 0.6;\r\n  }\r\n  \r\n  .dataTables-empty {\r\n    text-align: center;\r\n  }\r\n  \r\n  .dataTable-top::after,\r\n  .dataTable-bottom::after {\r\n    clear: both;\r\n    content: \" \";\r\n    display: table;\r\n  }\r\n  \r\n  .btn-datatable {\r\n      height: 20px !important;\r\n    width: 20px !important;\r\n    font-size: 0.75rem;\r\n    border-radius: 0.35rem !important;\r\n  }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/css/datatable.css":
/*!**********************************!*\
  !*** ./public/css/datatable.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_datatable_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./datatable.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./public/css/datatable.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_datatable_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_datatable_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Charity/Logs.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Charity/Logs.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logs_vue_vue_type_template_id_5bbcff0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logs.vue?vue&type=template&id=5bbcff0f */ "./resources/js/Pages/Charity/Logs.vue?vue&type=template&id=5bbcff0f");
/* harmony import */ var _Logs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logs.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Charity/Logs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_newcharti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_newcharti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Logs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Logs_vue_vue_type_template_id_5bbcff0f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Charity/Logs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Charity/Logs.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Charity/Logs.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charity/Logs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Charity/Logs.vue?vue&type=template&id=5bbcff0f":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Charity/Logs.vue?vue&type=template&id=5bbcff0f ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logs_vue_vue_type_template_id_5bbcff0f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logs_vue_vue_type_template_id_5bbcff0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logs.vue?vue&type=template&id=5bbcff0f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Charity/Logs.vue?vue&type=template&id=5bbcff0f");


/***/ })

}]);