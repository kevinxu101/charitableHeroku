"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Benefactor_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_css_datatable_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/css/datatable.css */ "./public/css/datatable.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    benefactor: Object,
    programDonations: Object,
    charities: Array,
    canDownload: Boolean
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;

    var download = function download() {
      nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: route('benefactor.report.redirect'),
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'report.pdf');
        document.body.appendChild(link);
        link.click();
        nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.visit(route('benefactor.dashboard.index'), {}, {
          only: ['canDownload']
        });
      });
    };

    var __returned__ = {
      props: props,
      download: download,
      axios: (axios__WEBPACK_IMPORTED_MODULE_1___default()),
      NProgress: (nprogress__WEBPACK_IMPORTED_MODULE_2___default()),
      Inertia: _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=template&id=24932117":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=template&id=24932117 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mt-4"
};
var _hoisted_2 = {
  "class": "d-sm-flex align-items-center justify-content-between mb-4"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "h3 mb-0 text-gray-800"
}, "Dashboard", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "d-block"
};
var _hoisted_5 = ["disabled"];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-download fa-sm text-white-50"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Generate Report ");

var _hoisted_8 = [_hoisted_6, _hoisted_7];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "form-text text-muted"
}, "You can only download every 5 minutes.", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col-xl-3 col-md-6 mb-4"
};
var _hoisted_12 = {
  "class": "card x x-left-primary shadow h-100 py-2"
};
var _hoisted_13 = {
  "class": "card-body"
};
var _hoisted_14 = {
  "class": "row no-gutters align-items-center"
};
var _hoisted_15 = {
  "class": "col mr-2"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-xs font-weight-bold text-primary text-uppercase mb-1"
}, " Total Donation ", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "h5 mb-0 font-weight-bold text-gray-800"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fa-2x text-gray-300"
}, "₱")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "col-xl-3 col-md-6 mb-4"
};
var _hoisted_20 = {
  "class": "card border-left-success shadow h-100 py-2"
};
var _hoisted_21 = {
  "class": "card-body"
};
var _hoisted_22 = {
  "class": "row no-gutters align-items-center"
};
var _hoisted_23 = {
  "class": "col mr-2"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-xs font-weight-bold text-success text-uppercase mb-1"
}, " # Charities donated ", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "h5 mb-0 font-weight-bold text-gray-800"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-dollar-sign fa-2x text-gray-300"
})], -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "col-xl-3 col-md-6 mb-4"
};
var _hoisted_28 = {
  "class": "card border-left-info shadow h-100 py-2"
};
var _hoisted_29 = {
  "class": "card-body"
};
var _hoisted_30 = {
  "class": "row no-gutters align-items-center"
};
var _hoisted_31 = {
  "class": "col mr-2"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-xs font-weight-bold text-info text-uppercase mb-1"
}, " Following Charity ", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "row no-gutters align-items-center"
};
var _hoisted_34 = {
  "class": "col-auto"
};
var _hoisted_35 = {
  "class": "h5 mb-0 mr-3 font-weight-bold text-gray-800"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-hand-holding-heart fa-2x text-gray-300"
})], -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "col-xl-3 col-md-6 mb-4"
};
var _hoisted_38 = {
  "class": "card border-left-warning shadow h-100 py-2"
};
var _hoisted_39 = {
  "class": "card-body"
};
var _hoisted_40 = {
  "class": "row no-gutters align-items-center"
};
var _hoisted_41 = {
  "class": "col mr-2"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-xs font-weight-bold text-warning text-uppercase mb-1"
}, " # times donated ", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "h5 mb-0 font-weight-bold text-gray-800"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-hand-heart fa-2x text-gray-300"
})], -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_49 = {
  "class": "container mt-n10"
};
var _hoisted_50 = {
  "class": "row"
};
var _hoisted_51 = {
  "class": "col"
};
var _hoisted_52 = {
  "class": "card mb-4"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header h4"
}, "Your Donations History", -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "card-body"
};
var _hoisted_55 = {
  "class": "dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dataTable-top"
}, null, -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "dataTable-container"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  style: {
    "width": "100%"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "10%"
  },
  "class": "text-center"
}, " # "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "20%"
  },
  "class": "text-center"
}, " Program Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "20%"
  },
  "class": "text-center"
}, " Amount "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "30%"
  },
  "class": "text-center"
}, " Donated At ")])], -1
/* HOISTED */
);

var _hoisted_59 = {
  "class": "text-center"
};
var _hoisted_60 = {
  key: 0
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "dataTables-empty",
  colspan: "4",
  width: "1300"
}, " No results ", -1
/* HOISTED */
);

var _hoisted_62 = [_hoisted_61];
var _hoisted_63 = {
  "class": "dataTable-bottom mt-3"
};
var _hoisted_64 = {
  "class": "dataTable-info"
};
var _hoisted_65 = {
  "class": "dataTable-pagination"
};
var _hoisted_66 = {
  "class": "dataTable-pagination-list"
};
var _hoisted_67 = {
  "class": "col"
};
var _hoisted_68 = {
  "class": "card mb-4"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header h4"
}, "Charities You have donated", -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "card-body"
};
var _hoisted_71 = {
  "class": "dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dataTable-top"
}, null, -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "dataTable-container"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  style: {
    "width": "100%"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "10%"
  },
  "class": "text-center"
}, " # "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "20%"
  },
  "class": "text-center"
}, " Charity Name ")])], -1
/* HOISTED */
);

var _hoisted_75 = {
  "class": "text-center"
};
var _hoisted_76 = {
  key: 0
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "dataTables-empty",
  colspan: "3",
  width: "1300"
}, " No results match your search query ", -1
/* HOISTED */
);

var _hoisted_78 = [_hoisted_77];
var _hoisted_79 = {
  "class": "dataTable-bottom mt-3"
};
var _hoisted_80 = {
  "class": "dataTable-info"
};
var _hoisted_81 = {
  "class": "dataTable-pagination"
};
var _hoisted_82 = {
  "class": "dataTable-pagination-list"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Dashboard"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "d-block btn btn-sm btn-primary shadow-sm mx-auto",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.download && $setup.download.apply($setup, arguments);
    }),
    disabled: !$props.canDownload
  }, _hoisted_8, 8
  /* PROPS */
  , _hoisted_5), _hoisted_9])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.benefactor.total_donation), 1
  /* TEXT */
  )]), _hoisted_18])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.benefactor.total_charities_donated), 1
  /* TEXT */
  )]), _hoisted_26])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.benefactor.total_charities_followed), 1
  /* TEXT */
  )])])]), _hoisted_36])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pending Requests Card Example "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.benefactor.total_number_donations), 1
  /* TEXT */
  )]), _hoisted_44])])])])]), _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card, {
    id: "datatablesSimple",
    "class": "dataTable-table"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.programDonations.data, function (donation, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.programDonations.from + index), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(donation.name), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(donation.amount), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(donation.pivot.donated_at_formatted), 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      )), $props.programDonations.data.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_60, _hoisted_62)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.programDonations.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.programDonations.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.programDonations.total) + " entries ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_66, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.programDonations.links, function (link, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([link.active ? 'active' : '', link.url ? 'pager' : ''])
    }, [link.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(link.url ? 'Link' : 'span'), {
      key: 0,
      href: link.url,
      innerHTML: link.label,
      only: ['programDonations']
    }, null, 8
    /* PROPS */
    , ["href", "innerHTML"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_card, {
    id: "datatablesSimple",
    "class": "dataTable-table"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.charities.data, function (charity, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.charities.from + index), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(charity.name), 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      )), $props.charities.data.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_76, _hoisted_78)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, " Showing " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.charities.from) + " to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.charities.to) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.charities.total) + " entries ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_82, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.charities.links, function (link, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([link.active ? 'active' : '', link.url ? 'pager' : ''])
    }, [link.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(link.url ? 'Link' : 'span'), {
      key: 0,
      href: link.url,
      innerHTML: link.label,
      only: ['charities']
    }, null, 8
    /* PROPS */
    , ["href", "innerHTML"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])])])])])])], 64
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

/***/ "./resources/js/Pages/Benefactor/Dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Benefactor/Dashboard.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_24932117__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=24932117 */ "./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=template&id=24932117");
/* harmony import */ var _Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_newcharti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_newcharti_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_24932117__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Benefactor/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=template&id=24932117":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=template&id=24932117 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_24932117__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_24932117__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=24932117 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Benefactor/Dashboard.vue?vue&type=template&id=24932117");


/***/ })

}]);