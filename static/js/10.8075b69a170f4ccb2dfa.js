webpackJsonp([10],{"T9I/":function(t,a){},"noE/":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("0eVU"),s=e.n(i),r=e("plIN"),n=e.n(r),c=e("mtWM"),o=e.n(c),d={data:function(){return{cadeira:s.a,candeeiro:n.a,text:""}},mounted:function(){Array.prototype.map;var t=this;o.a.get("https://beta.anacarolinapereira.pt/db-api/getServicos.php").then(function(a){var e=a.data.split("||"),i=JSON.parse(e[1]);t.text=i[0].text})}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"apresentacao-wrapper movement"},[a("div",[a("div",{staticClass:"imgs"},[a("img",{staticClass:"candeeiro",attrs:{src:this.candeeiro,alt:""}}),this._v(" "),a("img",{staticClass:"cadeira",attrs:{src:this.cadeira,alt:""}})]),this._v(" "),a("div",{attrs:{id:"apresentacao"}},[a("div",{staticClass:"copy",domProps:{innerHTML:this._s(this.text)}}),this._v(" "),a("div",{staticClass:"line"})])])])},staticRenderFns:[]};var l=e("VU/8")(d,p,!1,function(t){e("T9I/")},"data-v-de6cbf9c",null);a.default=l.exports},plIN:function(t,a,e){t.exports=e.p+"static/img/candeeiro.e043983.svg"}});
//# sourceMappingURL=10.8075b69a170f4ccb2dfa.js.map