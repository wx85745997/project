webpackJsonp([2],[,,,,function(t,e,i){i(34);var n=i(0)(i(47),i(26),null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(49),i(21),null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(50),i(29),null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(51),i(24),null,null);t.exports=n.exports},function(t,e,i){i(35);var n=i(0)(i(48),i(27),null,null);t.exports=n.exports},function(t,e,i){i(36);var n=i(0)(i(43),i(28),null,null);t.exports=n.exports},function(t,e,i){i(12);var n=i(0)(i(13),i(11),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(17),s=i.n(n);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return s()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},,,,,function(t,e,i){var n=i(0)(i(44),i(22),null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(45),i(25),null,null);t.exports=n.exports},function(t,e,i){i(33);var n=i(0)(i(46),i(23),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1===t.stepindex?i("flow",[i("flow-state",{attrs:{state:"1",title:"选择报名项目","is-done":""}}),t._v(" "),i("flow-line",{attrs:{tip:"进行中"}}),t._v(" "),i("flow-state",{attrs:{state:"2",title:"阅读并同意参赛声明"}}),t._v(" "),i("flow-line"),t._v(" "),i("flow-state",{attrs:{state:"3",title:"填写／选择报名信息"}}),t._v(" "),i("flow-line"),t._v(" "),i("flow-state",{attrs:{state:"4",title:"报名成功"}})],1):t._e(),t._v(" "),2===t.stepindex?i("flow",[i("flow-state",{attrs:{state:"1",title:"选择报名项目","is-done":""}}),t._v(" "),i("flow-line",{attrs:{"is-done":""}}),t._v(" "),i("flow-state",{attrs:{state:"2",title:"阅读并同意参赛声明","is-done":""}}),t._v(" "),i("flow-line",{attrs:{tip:"进行中"}}),t._v(" "),i("flow-state",{attrs:{state:"3",title:"填写／选择报名信息"}}),t._v(" "),i("flow-line"),t._v(" "),i("flow-state",{attrs:{state:"4",title:"报名成功"}})],1):t._e(),t._v(" "),3===t.stepindex?i("flow",[i("flow-state",{attrs:{state:"1",title:"选择报名项目","is-done":""}}),t._v(" "),i("flow-line",{attrs:{"is-done":""}}),t._v(" "),i("flow-state",{attrs:{state:"2",title:"阅读并同意参赛声明","is-done":""}}),t._v(" "),i("flow-line",{attrs:{"is-done":""}}),t._v(" "),i("flow-state",{attrs:{state:"3",title:"填写／选择报名信息","is-done":""}}),t._v(" "),i("flow-line",{attrs:{tip:"进行中"}}),t._v(" "),i("flow-state",{attrs:{state:"4",title:"报名成功"}})],1):t._e(),t._v(" "),4===t.stepindex?i("flow",[i("flow-state",{attrs:{state:"1",title:"选择报名项目","is-done":""}}),t._v(" "),i("flow-line",{attrs:{"is-done":""}}),t._v(" "),i("flow-state",{attrs:{state:"2",title:"阅读并同意参赛声明","is-done":""}}),t._v(" "),i("flow-line",{attrs:{tip:"进行中"}}),t._v(" "),i("flow-state",{attrs:{state:"3",title:"填写／选择报名信息","is-done":""}}),t._v(" "),i("flow-line"),t._v(" "),i("flow-state",{attrs:{state:"4",title:"报名成功","is-done":""}})],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-wepay-flow__line",class:t.classes,style:t.styles},[i("div",{staticClass:"weui-wepay-flow__process",style:{width:t.getWidth(this.processSpan)}}),t._v(" "),t.tip?i("div",{class:"weui-wepay-flow__info-"+t.finalTipDirection,style:{left:t.getWidth(this.processSpan)}},[t._v(t._s(t.tip))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-wepay-flow",class:{"weui-wepay-flow_vertical":"vertical"===t.orientation}},[i("div",{staticClass:"weui-wepay-flow__bd"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("x-header",[i("span",[t._v("logo")]),t._v(" "),i("svg",{staticClass:"vux-x-icon vux-x-icon-navicon",staticStyle:{fill:"#fff",position:"relative",top:"-8px",left:"-3px"},attrs:{slot:"overwrite-left",type:"navicon",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"},slot:"overwrite-left"},[i("path",{attrs:{d:"M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"}})]),t._v(" "),i("svg",{staticClass:"vux-x-icon vux-x-icon-person",staticStyle:{fill:"#fff",position:"relative",top:"-8px",right:"-3px"},attrs:{slot:"right",type:"person",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"},slot:"right"},[i("path",{attrs:{d:"M448 448s0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9-63.2-23.2-59.3-11.9-59.3-54.6 0-27.7 14.1-11.6 23.1-64.2 3.5-20.7 6.3-6.9 13.9-40.1 4-17.4-2.7-18.7-1.9-27 .8-8.3 1.6-15.7 3.1-32.7 1.8-21-17.7-76.3-87.6-76.3-69.9 0-89.4 55.3-87.5 76.4 1.5 16.9 2.3 24.4 3.1 32.7.8 8.3-5.9 9.6-1.9 27 7.6 33.1 10.4 19.3 13.9 40.1 9 52.6 23.1 36.5 23.1 64.2 0 42.8 3.9 31.5-59.3 54.6-64.2 23.5-79.4 38-81.1 48.9C64 421.6 64 448 64 448h384z"}})])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-wepay-flow__li",class:{"weui-wepay-flow__li_done":t.isDone}},[i("div",{staticClass:"weui-wepay-flow__state"},[t._v(t._s(t.state))]),t._v(" "),i("p",{class:"weui-wepay-flow__title-"+t.titlePosition},[t._t("title",[t._v(t._s(t.title))])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foot-warp"},[i("p",[t._v("主办单位：中国田径协会、江苏体育局、无锡市人民政府")]),t._v(" "),i("p",[t._v("承办单位：江苏省体育竞赛管理中心、无锡市体育局、汇跑®赛事")]),t._v(" "),i("p",[t._v("联系方式：400-99-42195转1（仅收取市话通话费）")]),t._v(" "),i("p",[t._v("客服邮箱：kefu@huipao.com")])])}]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,i){"use strict";var n=i(30),s=(i.n(n),i(20)),r=i.n(s),a=i(19),l=i.n(a),o=i(18),u=i.n(o);e.a={data:function(){return{lists:["选择报名项目","阅读并同意参赛声明","填写／选择报名信息","报名成功"]}},props:{stepindex:Number},created:function(){},methods:{},components:{Flow:r.a,FlowState:l.a,FlowLine:u.a}}},function(t,e,i){"use strict";var n=i(31);i.n(n);e.a={data:function(){return{}},created:function(){this.fix()},methods:{fix:function(){var t=window.innerHeight;window.onresize=function(){var e=window.innerHeight;document.querySelector(".foot-warp").style.display=t>e?"none":"block",t=e}}},components:{}}},function(t,e,i){"use strict";var n=i(32),s=(i.n(n),i(10)),r=i.n(s);e.a={data:function(){return{}},created:function(){},methods:{},components:{XHeader:r.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=i.n(n),r=i(15),a=i(68),l=i(14),o=i.n(l),u=i(78);e.default={name:"cell",components:{InlineDesc:s.a},props:i.i(a.a)(),created:function(){},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return o()({width:i.i(u.a)(this,"labelWidth"),textAlign:i.i(u.a)(this,"labelAlign"),marginRight:i.i(u.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===i.i(u.a)(this,"justify")}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&i.i(r.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flow-line",props:{tip:String,tipDirection:String,isDone:Boolean,lineSpan:[Number,String],processSpan:[Number,String]},methods:{getWidth:function(t){return"number"==typeof t?t+"%":t}},computed:{finalTipDirection:function(){return void 0===this.tipDirection?"vertical"===this.$parent.orientation?"left":"top":this.tipDirection},styles:function(){if(this.lineSpan){var t=this.$parent.orientation,e={flex:"none","-webkit-box-flex":"0"};return"vertical"===t&&(e.width="3px"),this.lineSpan&&("vertical"===t?e.height=this.getWidth(this.lineSpan):e.width=this.getWidth(this.lineSpan)),e}},classes:function(){return this.isDone?"weui-wepay-flow__line_done":!this.isDone&&this.tip?"weui-wepay-flow__line_ing":void 0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flow-state",props:{state:[String,Number],title:String,isDone:Boolean},computed:{titlePosition:function(){return"vertical"===this.$parent.orientation?"right":"bottom"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flow",props:{orientation:{type:String,default:"horizontal"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(14),s=i.n(n);e.default={name:"group",methods:{cleanStyle:s.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(40);e.default=n.a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(41);e.default=n.a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(42);e.default=n.a},function(t,e,i){i(62);var n=i(0)(i(67),i(60),null,null);t.exports=n.exports},function(t,e,i){i(63);var n=i(0)(i(66),i(61),null,null);t.exports=n.exports},,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:[t.className,t.isMsg?"weui-icon_msg":""]})},staticRenderFns:[]}},function(t,e){},function(t,e){},,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(15);e.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object]},methods:{onClick:function(){!this.disabled&&i.i(n.a)(this.link,this.$router)}},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},,function(t,e,i){i(83);var n=i(0)(i(98),i(81),null,null);t.exports=n.exports},,,,,,,,,,function(t,e,i){i(82);var n=i(0)(i(99),i(80),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":t.showWarn}},[i("div",{staticClass:"weui-cell__hd"},[t.hasRestrictedLabel?i("div",{style:t.labelStyles},[t._t("restricted-label")],2):t._e(),t._v(" "),t._t("label",[t.title?i("label",{staticClass:"weui-label",class:t.labelClass,style:{width:t.labelWidth||t.$parent.labelWidth||t.labelWidthComputed,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight},attrs:{for:"vux-x-input-"+t.uuid},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:t.placeholderAlign?"vux-x-input-placeholder-"+t.placeholderAlign:""},[t.type&&"text"!==t.type?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"text",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),"number"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"number",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"email",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"password"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"password",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"tel",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.equalWith&&t.showClear&&t.currentValue&&!t.readonly&&!t.disabled,expression:"!equalWith && showClear && currentValue && !readonly && !disabled"}],attrs:{type:"clear"},nativeOn:{click:function(e){t.clear(e)}}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.showWarn,expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:t.valid?"":t.firstError},nativeOn:{click:function(e){t.onClickErrorIcon(e)}}}),t._v(" "),!t.novalidate&&t.hasLengthEqual&&t.dirty&&t.equalWith&&!t.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"},nativeOn:{click:function(e){t.onClickErrorIcon(e)}}}):t._e(),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.novalidate&&t.equalWith&&t.equalWith===t.currentValue&&t.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"success"===t.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"error"===t.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),t._v(" "),t._t("right")],2),t._v(" "),i("toast",{attrs:{type:"text",width:"auto",time:600},model:{value:t.showErrorToast,callback:function(e){t.showErrorToast=e},expression:"showErrorToast"}},[t._v(t._s(t.firstError))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]}},function(t,e){},function(t,e){},,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(124);e.default={name:"toast",mixins:[n.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(76),s=i.n(n),r=i(100),a=i(53),l=i.n(a),o=i(69),u=i.n(o),c=i(8),d=i.n(c),h=i(118),p=i.n(h),f=i(119),v=i.n(f),_=i(126),m=i(102),w=i.n(m),y={email:{fn:p.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return v()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e.default={name:"x-input",created:function(){var t=this;this.currentValue=void 0===this.value||null===this.value?"":this.mask?this.maskValue(this.value):this.value,this.required&&!this.currentValue&&(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=i.i(_.a)(function(){t.$emit("on-change",t.currentValue)},this.debounce))},beforeMount:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel()},mixins:[r.a],components:{Icon:l.a,InlineDesc:d.a,Toast:u.a},props:{title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String,labelWidth:String,mask:String,shouldToastError:{type:Boolean,default:!0}},computed:{labelStyles:function(){return{width:this.labelWidthComputed||this.$parent.labelWidth||this.labelWidthComputed,textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidthComputed:function(){var t=this.title.replace(/[^x00-xff]/g,"00").length/2+1;if(t<10)return t+"em"},hasErrors:function(){return s()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}},showWarn:function(){return!this.novalidate&&!this.equalWith&&!this.valid&&this.firstError&&(this.touched||this.forceShowError)}},methods:{onClickErrorIcon:function(){this.shouldToastError&&this.firstError&&(this.showErrorToast=!0),this.$emit("on-click-error-icon",this.firstError)},maskValue:function(t){return this.mask?w.a.toPattern(t,this.mask):t},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=t,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.focus()},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},focusHandler:function(t){this.$emit("on-focus",this.currentValue,t)},onBlur:function(t){this.setTouched(),this.validate(),this.$emit("on-blur",this.currentValue,t)},onKeyUp:function(t){"Enter"===t.key&&(t.target.blur(),this.$emit("on-enter",this.currentValue,t))},getError:function(){var t=s()(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var t=y[this.isType];if(t){var e=this.currentValue;if("china-mobile"===this.isType&&"999 9999 9999"===this.mask&&(e=this.currentValue.replace(/\s+/g,"")),this.valid=t.fn(e),!this.valid)return this.forceShowError=!0,this.errors.format=t.msg+"格式不对哦~",void this.getError();delete this.errors.format}}if("function"==typeof this.isType){var i=this.isType(this.currentValue);if(this.valid=i.valid,!this.valid)return this.errors.format=i.msg,this.forceShowError=!0,void(this.firstError||this.getError());delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void(this.firstError||this.getError());delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))}},data:function(){return{hasRestrictedLabel:this.$isServer,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:"",showErrorToast:!1}},watch:{mask:function(t){t&&this.currentValue&&(this.currentValue=this.maskValue(this.currentValue))},valid:function(){this.getError()},value:function(t){this.currentValue=t},equalWith:function(t){t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(t){!this.equalWith&&t&&this.validateEqual(),t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate(),this.$emit("input",this.maskValue(t)),this._debounce?this._debounce():this.$emit("on-change",t)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,,,,,function(t,e,i){"use strict";(function(t){var n=i(113),s=i(145),r=i.n(s),a=i(146),l=i.n(a);t.use(n.a),e.a=new n.a({routes:[{path:"",redirect:"/identity"},{path:"/identity",name:"Identity",component:r.a},{path:"/number",name:"Number",component:l.a}]})}).call(e,i(2))},,,function(t,e,i){var n=i(0)(i(266),i(161),null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(267),i(164),null,null);t.exports=n.exports},,,function(t,e,i){i(189);var n=i(0)(i(256),i(171),null,null);t.exports=n.exports},,,,,function(t,e,i){i(185);var n=i(0)(i(264),i(163),null,null);t.exports=n.exports},,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"groupWarp"},[i("group",[i("cell",{attrs:{"is-link":"",title:"我是中国大陆公民"},nativeOn:{click:function(e){t.setIdentity("大陆")}}}),t._v(" "),i("cell",{attrs:{"is-link":"",title:"我是香港、澳門居民"},nativeOn:{click:function(e){t.setIdentity("香港")}}}),t._v(" "),i("cell",{attrs:{"is-link":"",title:"我是台灣公民"},nativeOn:{click:function(e){t.setIdentity("台湾")}}}),t._v(" "),i("cell",{attrs:{"is-link":"",title:"Foreign competitors channel"},nativeOn:{click:function(e){t.setIdentity("外国")}}})],1)],1)},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-selector weui-cell",class:{"weui-cell_select":!t.readonly,"weui-cell_select-after":t.title}},[t.title?i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label",class:t.labelClass,style:t.cleanStyle({width:t.$parent.labelWidth,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight}),attrs:{for:"vux-selector-"+t.uuid}},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.readonly?i("div",{staticClass:"weui-cell__ft vux-selector-readonly"},[t._v("\n    "+t._s(t._f("findByKey")(t.value,t.processOptions))+"\n  ")]):i("div",{staticClass:"weui-cell__bd"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-select",staticStyle:{color:"red"},style:t.cleanStyle({direction:t.direction,color:t.color}),attrs:{id:"vux-selector-"+t.uuid,name:t.name},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentValue=e.target.multiple?i:i[0]}}},[t.showPlaceholder?i("option",{domProps:{value:null===t.value?"null":"",selected:t.isEmptyValue(t.value)&&!!t.placeholder}},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),t.fixIos?i("option",{attrs:{disabled:""}}):t._e(),t._v(" "),t._l(t.processOptions,function(e){return i("option",{domProps:{value:e.key}},[t._v(t._s(e.value))])})],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"numberWapper"},["大陆"===t.identity?i("div",[i("group",[i("x-input",{attrs:{placeholder:"请输入您的二代身份证号码"},model:{value:t.IDNumber,callback:function(e){t.IDNumber=e},expression:"IDNumber"}})],1),t._v(" "),i("div",{staticClass:"button-wrapper"},[i("x-button",{attrs:{type:"primary",disabled:!t.IDNumber},nativeOn:{click:function(e){t.next()}}},[t._v("下一步")])],1)],1):t._e(),t._v(" "),"香港"===t.identity?i("div",[i("group",[i("x-input",{attrs:{placeholder:"請輸入您的香港/澳門居住證號"},model:{value:t.IDNumber,callback:function(e){t.IDNumber=e},expression:"IDNumber"}})],1),t._v(" "),i("div",{staticClass:"button-wrapper"},[i("x-button",{attrs:{type:"primary",disabled:!t.IDNumber},nativeOn:{click:function(e){t.next()}}},[t._v("下壹步")])],1)],1):t._e(),t._v(" "),"台湾"===t.identity?i("div",[i("group",[i("x-input",{attrs:{placeholder:"請輸入您的臺灣居住證號"},model:{value:t.IDNumber,callback:function(e){t.IDNumber=e},expression:"IDNumber"}})],1),t._v(" "),i("div",{staticClass:"button-wrapper"},[i("x-button",{attrs:{type:"primary",disabled:!t.IDNumber},nativeOn:{click:function(e){t.next()}}},[t._v("下壹步\n      ")])],1)],1):t._e(),t._v(" "),"外国"===t.identity?i("div",[i("group",[i("x-input",{attrs:{placeholder:"Please enter your passport number"},model:{value:t.IDNumber,callback:function(e){t.IDNumber=e},expression:"IDNumber"}}),t._v(" "),i("selector",{attrs:{title:"国籍",options:t.countries}})],1),t._v(" "),i("div",{staticClass:"button-wrapper"},[i("x-button",{attrs:{type:"primary",disabled:!t.IDNumber},nativeOn:{click:function(e){t.next()}}},[t._v("Next step")])],1)],1):t._e()])},staticRenderFns:[]}},,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"vux-divider"},[t._t("default")],2)},staticRenderFns:[]}},,,,function(t,e){},function(t,e){},,,,,,,,,function(t,e){},,,,function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=i(136),n=(i.n(e),i(7)),s=i.n(n),r=i(5),a=i.n(r),l=i(6),o=i.n(l),u=i(142);i(127).attach(document.body),new t({el:"#body",data:{title:"this is index",str:"3213"},created:function(){this.setIdentity()},methods:{setIdentity:function(){},pushrouter:function(t){this.$router.push({path:t})}},router:u.a,components:{Myheader:s.a,Myflow:a.a,Myfooter:o.a}})}.call(e,i(2))},function(t,e,i){"use strict";var n=i(175),s=(i.n(n),i(4)),r=i.n(s),a=i(9),l=i.n(a);e.a={data:function(){return{mobile:"139"}},created:function(){},methods:{setIdentity:function(t){window.localStorage.setItem("identity",t),this.$emit("pushrouter","number")}},components:{Cell:l.a,Group:r.a}}},function(t,e,i){"use strict";var n=i(176),s=(i.n(n),i(4)),r=i.n(s),a=i(79),l=i.n(a),o=i(149),u=i.n(o),c=i(52),d=i.n(c),h=i(154),p=i.n(h);e.a={data:function(){return{identity:window.localStorage.getItem("identity"),IDNumber:"",countries:["中国","韩国","日本","美国"]}},created:function(){},methods:{next:function(){window.location.href="./form.html"}},components:{Group:r.a,XInput:l.a,Divider:u.a,XButton:d.a,Selector:p.a}}},,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"divider"}},,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(101),s=i.n(n),r=i(125),a=i(14),l=i.n(a),o=function(t,e){var i=s()(e,function(e){return e.key===t});return i?i.value:t};e.default={name:"selector",mixins:[r.a],created:function(){void 0!==this.value&&(this.currentValue=this.value)},beforeMount:function(){this.isIOS=/iPad|iPhone|iPod/.test(window.navigator.userAgent)},computed:{fixIos:function(){return!this.placeholder&&this.isEmptyValue(this.value)&&this.isIOS&&this.title},color:function(){return this.showPlaceholder?"#A9A9A9":""},processOptions:function(){return this.options.length&&{}.hasOwnProperty.call(this.options[0],"key")?this.options:this.options.map(function(t){return{key:t,value:t}})},showPlaceholder:function(){return!(!this.isEmptyValue(this.value)||!this.placeholder)},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{isEmptyValue:function(t){return void 0===t||""===t||null===t},cleanStyle:l.a},filters:{findByKey:o},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},props:{title:String,direction:String,options:{type:Array,required:!0},name:String,placeholder:String,readonly:Boolean,value:[Boolean,String,Number,Object]},data:function(){return{currentValue:"",isIOS:!1}}}},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(243);e.default=n.a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(244);e.default=n.a}],[242]);
//# sourceMappingURL=certificate.4314ca62bdba2c02f944.js.map