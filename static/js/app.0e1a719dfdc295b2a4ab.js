webpackJsonp([2,0],[function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}var r=n(1),d=o(r),i=n(59),u=o(i),s=n(17),l=o(s),c=n(18),f=o(c),m=n(16);a(m);new d.default({router:l.default,store:f.default,el:"#app",render:function(t){return t(u.default)}})},,,,,,,,,,,,,function(t,e,n){var a,o;n(57),a=n(20);var r=n(66);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-97a60d88",t.exports=a},function(t,e,n){var a,o;n(56),a=n(21);var r=n(65);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-554145a4",t.exports=a},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(1),r=a(o);r.default.directive("mdl",{inserted:function(){r.default.nextTick(function(){componentHandler.upgradeDom()})}})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(58),r=a(o),d=n(52),i=a(d),u=n(15),s=a(u);e.default={styles:i.default,mdlJs:r.default,directives:s.default}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=a(o),d=n(67),i=a(d),u=n(60),s=a(u),l=n(61),c=a(l),f={template:"<div>Dummy</div>"},m=new i.default({mode:"history",base:"/vue-mdl-starter/",routes:[{path:"/",component:s.default,meta:{title:"Home Page"}},{path:"dummy",component:f},{path:"*",component:c.default}]});r.default.use(i.default),e.default=m},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=a(o),d=n(2),i=a(d);r.default.use(i.default);var u=!1;e.default=new i.default.Store({modules:{},strict:u})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=a(o),d=n(2);e.default={components:{},computed:(0,r.default)({},(0,d.mapGetters)([])),methods:(0,r.default)({},(0,d.mapActions)([]))}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=a(o),d=n(2);e.default={props:{title:String},components:{},data:function(){return{internalTitle:this.title}},computed:(0,r.default)({},(0,d.mapGetters)([]),{headerTitle:function(){return this.internalTitle||this.$route.meta.title||""}}),methods:{}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=a(o),d=n(2),i=n(14),u=a(i),s=n(13),l=a(s);e.default={components:{CompactHeader:u.default,CompactFooter:l.default},data:function(){return{}},computed:(0,r.default)({},(0,d.mapGetters)([])),methods:{}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),r=a(o),d=n(13),i=a(d);e.default={components:{CompactHeader:r.default,CompactFooter:i.default},data:function(){return{}},computed:{},methods:{}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){var a,o;n(54),a=n(19);var r=n(63);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-39cdad0b",t.exports=a},function(t,e,n){var a,o;n(53),a=n(22);var r=n(62);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-0143deab",t.exports=a},function(t,e,n){var a,o;n(55),a=n(23);var r=n(64);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-400392bb",t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{directives:[{name:"mdl",rawName:"v-mdl"}],attrs:{id:"home-view"}},[e("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button"},[e("compact-header")," ",t._m(0)," ",e("compact-footer")])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("main",{staticClass:"mdl-layout__content"},[e("div",{staticClass:"page-content mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--12-col"},[e("h3",["\n            This is the root page\n          "])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{directives:[{name:"mdl",rawName:"v-mdl"}],attrs:{id:"app"}},[e("router-view")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"not-found-view"}},[e("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button"},[e("compact-header",{attrs:{title:"Page Not Found"}})," ",e("main",{staticClass:"mdl-layout__content"},[e("div",{staticClass:"page-content mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--12-col"},[e("h3",["\n            Nothing here\n          "])," ",e("router-link",{attrs:{to:"/"}},["Back home"])])])])," ",e("compact-footer")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("header",{directives:[{name:"mdl",rawName:"v-mdl"}],staticClass:"mdl-layout__header",attrs:{id:"header"}},[e("div",{staticClass:"mdl-layout__header-row"},[e("span",{staticClass:"mdl-layout-title"},[e("span",["\n        "+t._s(t.headerTitle)+"\n      "])])," ",e("div",{staticClass:"mdl-layout-spacer"})," ",e("nav",{staticClass:"mdl-navigation"},[e("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/",exact:""}},["Home"])," ",e("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/missing",exact:""}},["404 Page"])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("footer",{directives:[{name:"mdl",rawName:"v-mdl"}],staticClass:"mdl-mini-footer mini-footer--compact"},[t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"mdl-mini-footer__left-section"},[e("div",{staticClass:"mdl-logo material-icons"},["home"])," ",e("ul",{staticClass:"mdl-mini-footer__link-list"},[e("li",[e("a",{attrs:{href:"#"}},["my site"])])])])}]}}]);
//# sourceMappingURL=app.0e1a719dfdc295b2a4ab.js.map