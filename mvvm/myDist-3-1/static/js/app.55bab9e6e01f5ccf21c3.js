webpackJsonp([0],{"3VQz":function(e,t){},JYji:function(e,t){},L1z6:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"ull"},[n("router-link",{attrs:{tag:"li",to:{name:"MVVM2_1"}}},[e._v("MVVM-2.1")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:{name:"MVVM2_2"}}},[e._v("MVVM-2.2")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:{name:"MVVM2_3"}}},[e._v("MVVM-2.3")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:{name:"MVVM2_4"}}},[e._v("MVVM-2.4")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:{name:"MVVM3_1"}}},[e._v("MVVM-3.1")])],1)},staticRenderFns:[]};var s={name:"App",components:{vhead:n("VU/8")({data:function(){return{}}},i,!1,function(e){n("kRV0")},"data-v-bba0365e",null).exports},methods:{addd:function(){alert("xx");new Object;var e=document.getElementById("new");e.name=e.getElementsByTagName("td")[0].getElementsByTagName("input")[0].value,alert(e.name)}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("vhead"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var d=n("VU/8")(s,r,!1,function(e){n("L1z6")},null,null).exports,m=n("/ocq"),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mvvm2-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"sr",attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],staticClass:"sr",attrs:{type:"number",placeholder:"年龄"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.des,expression:"des"}],staticClass:"sr",attrs:{type:"text",placeholder:"简介"},domProps:{value:e.des},on:{input:function(t){t.target.composing||(e.des=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("span",[e._v("信息：")]),e._v(" "),n("button",{on:{click:e.del}},[e._v("移除信息")]),e._v(" "),n("br"),e._v(" "),n("span",[e._v("姓名：")]),n("span",[e._v(e._s(e.name))]),n("br"),e._v(" "),n("span",[e._v("年龄：")]),n("span",[e._v(e._s(e.age))]),n("br"),e._v(" "),n("span",[e._v("简介：")]),n("span",[e._v(e._s(e.des))]),n("br")])},staticRenderFns:[]};var o=n("VU/8")({data:function(){return{name:"",age:"",des:""}},methods:{del:function(){this.name="",this.age="",this.des=""}}},l,!1,function(e){n("h2c4")},"data-v-483f8a20",null).exports,c={data:function(){return{index:"6",show:!1,mvvm22:[{name:"张三",status:"合格",operating:"删除",index:"1"},{name:"李四",status:"不合格",operating:"删除",index:"2"},{name:"王五",status:"待审核",operating:"审核",index:"3"},{name:"赵六",status:"待审核",operating:"审核",index:"4"},{name:"孙七",status:"待审核",operating:"审核",index:"5"}],select:["合格","不合格","待审核"]}},methods:{add_1:function(){this.show=!0},add_2:function(){var e=new Object,t=document.getElementById("new_tr").getElementsByTagName("td")[0].getElementsByTagName("input")[0].value,n=document.getElementById("selected");e.name=t,e.status=n.innerHTML,"合格"==e.status||"不合格"==e.status?e.operating="删除":e.operating="审核",""!=e.name&&""!=e.status?(e.index=this.index,this.mvvm22.push(e),this.index++,this.show=!1):alert("姓名为空或审核状态没有选择")},more:function(){var e=document.getElementsByClassName("mvvm22_span")[0];"mvvm22_span right"==e.getAttribute("class")?e.setAttribute("class","mvvm22_span down"):e.setAttribute("class","mvvm22_span right");var t=document.getElementsByClassName("mvvm22_ul")[0];"112px"!=t.style.height?t.style.height="112px":t.style.height="26px"},mm22_select:function(e){var t=e.target;document.getElementById("selected").innerHTML=t.innerHTML},shordel:function(e){var t=e.target;if("删除"==t.innerHTML)for(var n=0;n<this.mvvm22.length;n++)this.mvvm22[n].index==t.id&&this.mvvm22.splice(n,1);else for(var a=0;a<this.mvvm22.length;a++)this.mvvm22[a].index==t.id&&(this.mvvm22[a].status="合格",this.mvvm22[a].operating="删除")}},watch:{}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mvvm22"},[n("button",{staticClass:"mvvm22_button",on:{click:e.add_1}},[e._v("添加")]),e._v(" "),n("table",{staticClass:"mvvm22_table"},[e._m(0),e._v(" "),n("tbody",[e._l(e.mvvm22,function(t){return n("tr",[n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.status))]),e._v(" "),n("td",[n("button",{staticClass:"mvvm22_button",attrs:{id:t.index},on:{click:e.shordel}},[e._v(e._s(t.operating))])])])}),e._v(" "),e.show?n("tr",{attrs:{id:"new_tr"}},[e._m(1),e._v(" "),n("td",[n("div",{staticClass:"mvvm22_select",on:{click:e.more}},[n("span",{staticClass:"mvvm22_span right"},[e._v("<")]),e._v(" "),n("ul",{staticClass:"mvvm22_ul"},[n("li",{attrs:{id:"selected"}}),e._v(" "),e._l(e.select,function(t){return n("li",{on:{click:e.mm22_select}},[e._v(e._s(t))])})],2)])]),e._v(" "),n("td",[n("button",{staticClass:"mvvm22_button",on:{click:e.add_2}},[e._v("添加")])])]):e._e()],2)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("td",[this._v("姓名")]),this._v(" "),t("td",[this._v("审核状态")]),this._v(" "),t("td",[this._v("操作")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("input",{attrs:{type:"text"}})])}]};var v=n("VU/8")(c,u,!1,function(e){n("XIYD")},"data-v-40ec7902",null).exports,_={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mvvm23",class:{red:this.isRed,bule:!this.isRed},on:{click:this.change_color}})},staticRenderFns:[]};var h=n("VU/8")({data:function(){return{isRed:!0}},methods:{change_color:function(){this.isRed=!this.isRed}}},_,!1,function(e){n("3VQz")},"data-v-25d05d90",null).exports,p={data:function(){return{val:"",far:""}},methods:{submit:function(){this.far=this.val,console.log(this.val),""==this.val&&(this.far="静静等待用户输入")}},watch:{far:function(){this.val=this.far}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mvvm24_1"},[n("span",[e._v("我是更高层父组件:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.far,expression:"far"}],staticClass:"one",attrs:{type:"text"},domProps:{value:e.far},on:{input:function(t){t.target.composing||(e.far=t.target.value)}}}),e._v(" "),n("div",{staticClass:"mvvm24_2"},[n("span",[e._v("我是父组件:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.far,expression:"far"}],staticClass:"one",attrs:{type:"text"},domProps:{value:e.far},on:{input:function(t){t.target.composing||(e.far=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"three",attrs:{type:"text"},domProps:{value:e.val},on:{input:function(t){t.target.composing||(e.val=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.submit}},[e._v("提交给父组件")])])])},staticRenderFns:[]};var g=n("VU/8")(p,f,!1,function(e){n("OGo/")},"data-v-bd87824c",null).exports;var V={data:function(){return{items:[]}},methods:{changeArrow:function(){var e=document.getElementsByClassName("arrow")[0],t=document.getElementsByClassName("theSelect")[0],n=document.getElementsByClassName("theRouter")[0],a=document.getElementsByClassName("select_1")[0];""!=e.style.transform?(e.style.transform="",t.style.height="0",n.style.height="0",a.style.height="0",t.style.boxShadow="0 0 0 0 #fff"):(e.style.transform="rotate(-90deg)",t.style.height="300px",n.style.height="100%",a.style.height="100%",t.style.boxShadow="0 0 5px 10px #ddd")}},mounted:function(){this.items=[{name:"指南",id:"1",children:[{name:"设计原则",id:"1",children:[{name:"一致",id:"1"},{name:"反馈",id:"2"},{name:"效率",id:"3"},{name:"可控",id:"4"}]},{name:"导航",id:"2",children:[{name:"侧向导航",id:"1"},{name:"顶部导航",id:"2"}]}]},{name:"资源",id:"2",children:[{name:"Axure Components",id:"1"},{name:"Sketch Templates",id:"2"},{name:"组件交互文档",id:"3"}]}]}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mm31"},[n("div",{staticClass:"selecter",on:{click:e.changeArrow}},[n("span",[e._v("请选择")]),e._v(" "),n("span",{staticClass:"arrow"},[e._v("<")])]),e._v(" "),n("div",{staticClass:"theSelect"},[n("div",{staticClass:"theRouter"},[n("router-view")],1),e._v(" "),n("div",{staticClass:"select_1"},[n("ul",e._l(e.items,function(t){return n("router-link",{attrs:{tag:"li",to:{name:"select_2_1",query:{id_1:t.id}}}},[e._v("\n                    "+e._s(t.name)),n("span",[e._v(">")])])}))])])])},staticRenderFns:[]};var y=n("VU/8")(V,x,!1,function(e){n("aK5r")},"data-v-751d674a",null).exports,M={data:function(){return{items:[],id_1:""}},mounted:function(){this.id_1=this.$route.query.id_1,this.items=[{name:"指南",id:"1",children:[{name:"设计原则",id:"1",children:[{name:"一致",id:"1"},{name:"反馈",id:"2"},{name:"效率",id:"3"},{name:"可控",id:"4"}]},{name:"导航",id:"2",children:[{name:"侧向导航",id:"1"},{name:"顶部导航",id:"2"}]}]},{name:"资源",id:"2",children:[{name:"Axure Components",id:"1"},{name:"Sketch Templates",id:"2"},{name:"组件交互文档",id:"3"}]}][this.id_1-1].children},watch:{$route:function(){this.id_1=this.$route.query.id_1,this.items=[{name:"指南",id:"1",children:[{name:"设计原则",id:"1",children:[{name:"一致",id:"1"},{name:"反馈",id:"2"},{name:"效率",id:"3"},{name:"可控",id:"4"}]},{name:"导航",id:"2",children:[{name:"侧向导航",id:"1"},{name:"顶部导航",id:"2"}]}]},{name:"资源",id:"2",children:[{name:"Axure Components",id:"1"},{name:"Sketch Templates",id:"2"},{name:"组件交互文档",id:"3"}]}][this.id_1-1].children}},methods:{show:function(){console.log(this.items[this.id_1].children)}}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select_2"},[n("div",{staticClass:"select_2_1"},[n("ul",e._l(e.items,function(t){return n("router-link",{attrs:{tag:"li",to:{name:"select_3",query:{id_1:e.id_1,id_2:t.id}}}},[e._v("\n                "+e._s(t.name)),n("span",[e._v(">")])])}))]),e._v(" "),n("div",{staticClass:"select_2_1"},[n("router-view")],1)])},staticRenderFns:[]};var w=n("VU/8")(M,C,!1,function(e){n("JYji")},null,null).exports,b={data:function(){return{items:[],id_1:"",id_2:""}},mounted:function(){this.id_1=this.$route.query.id_1,this.id_2=this.$route.query.id_2,this.items=[{name:"指南",id:"1",children:[{name:"设计原则",id:"1",children:[{name:"一致",id:"1"},{name:"反馈",id:"2"},{name:"效率",id:"3"},{name:"可控",id:"4"}]},{name:"导航",id:"2",children:[{name:"侧向导航",id:"1"},{name:"顶部导航",id:"2"}]}]},{name:"资源",id:"2",children:[{name:"Axure Components",id:"1"},{name:"Sketch Templates",id:"2"},{name:"组件交互文档",id:"3"}]}][this.id_1-1].children[this.id_2-1].children},watch:{$route:function(){this.id_1=this.$route.query.id_1,this.id_2=this.$route.query.id_2,this.items=[{name:"指南",id:"1",children:[{name:"设计原则",id:"1",children:[{name:"一致",id:"1"},{name:"反馈",id:"2"},{name:"效率",id:"3"},{name:"可控",id:"4"}]},{name:"导航",id:"2",children:[{name:"侧向导航",id:"1"},{name:"顶部导航",id:"2"}]}]},{name:"资源",id:"2",children:[{name:"Axure Components",id:"1"},{name:"Sketch Templates",id:"2"},{name:"组件交互文档",id:"3"}]}][this.id_1-1].children[this.id_2-1].children}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select_3"},[n("ul",e._l(e.items,function(t){return n("li",[e._v("\n            "+e._s(t.name)),n("span",[e._v(">")])])}))])},staticRenderFns:[]};var k=n("VU/8")(b,E,!1,function(e){n("yLSS")},null,null).exports;a.a.use(m.a);var $=new m.a({routes:[{path:"/",redirect:{path:"/MVVM3_1"}},{path:"/MVVM2_1",name:"MVVM2_1",component:o},{path:"/MVVM2_2",name:"MVVM2_2",component:v},{path:"/MVVM2_3",name:"MVVM2_3",component:h},{path:"/MVVM2_4",name:"MVVM2_4",component:g},{path:"/MVVM3_1",name:"MVVM3_1",component:y,children:[{path:"/select_2_1",name:"select_2_1",component:w,children:[{path:"/select_3",name:"select_3",component:k}]}]}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:$,components:{App:d},template:"<App/>"})},"OGo/":function(e,t){},XIYD:function(e,t){},aK5r:function(e,t){},h2c4:function(e,t){},kRV0:function(e,t){},yLSS:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.55bab9e6e01f5ccf21c3.js.map