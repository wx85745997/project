webpackJsonp([6],{10:function(t,e,i){i(12);var n=i(0)(i(13),i(11),null,null);t.exports=n.exports},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},12:function(t,e){},128:function(t,e,i){var n=i(0)(i(265),i(172),null,null);t.exports=n.exports},13:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(17),o=i.n(n);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return o()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},139:function(t,e){},172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("x-header",[t._v(t._s(t.title))])],1)},staticRenderFns:[]}},174:function(t,e){},241:function(t,e,i){"use strict";var n=i(174),o=(i.n(n),i(10)),s=i.n(o);e.a={data:function(){return{mobile:"139"}},props:{title:{type:String,default:"this is top"}},created:function(){},methods:{},components:{XHeader:s.a}}},247:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=i(139),n=(i.n(e),i(128)),o=i.n(n);new t({el:"#body",data:{title:"this is index",str:"3213"},created:function(){window.location.href="./list.html"},components:{Top:o.a}})}.call(e,i(2))},265:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(241);e.default=n.a}},[247]);
//# sourceMappingURL=index.c53c7e03f3b474db6246.js.map