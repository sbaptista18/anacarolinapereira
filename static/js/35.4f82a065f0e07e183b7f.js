webpackJsonp([35],{hEhU:function(t,e){},tUN6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("eNWK");var i=a("mtWM"),s=a.n(i),n={data:function(){return{especialidades:[{id:1,title:"",code:"",content:"",url:"",icon:""}]}},methods:{FadeIn:function(){var t=$(".movement, .cover"),e=$(".movement-delayed"),a=$(".lateral, .lateralR"),i=$("#svg");!function(t){t.fn.visible=function(e,a){void 0===a&&(a=0);var i=t(this),s=t(window),n=s.scrollTop(),c=n+s.height(),l=i.offset().top+a,d=l+i.height()-a;return(!0===e?l:d)<=c&&(!0===e?d:l)>=n}}(jQuery);var s=$(window),n=!0;t.each(function(t,e){(e=$(e)).visible(!0)&&e.addClass("placed")}),i.each(function(t,e){(e=$(e)).visible(!0)&&(n&&e.append("<img src='assets/img/elemento_animated.svg' alt=''></img>"),n=!1)}),a.each(function(t,e){(e=$(e)).visible(!0,100)&&e.addClass("placed")}),e.each(function(t,e){(e=$(e)).visible(!0,800)&&e.addClass("placed")}),s.scroll(function(s){t.each(function(t,e){(e=$(e)).visible(!0)&&e.addClass("placed")}),a.each(function(t,e){(e=$(e)).visible(!0,100)&&e.addClass("placed")}),e.each(function(t,e){(e=$(e)).visible(!0,800)&&e.addClass("placed")}),i.each(function(t,e){(e=$(e)).visible(!0)&&(n&&e.append("<img src='assets/img/elemento_animated.svg' alt=''></img>"),n=!1)})})}},mounted:function(){var t=Array.prototype.map,e=this;s.a.get("https://beta.anacarolinapereira.pt/db-api/getEspecialidadesHomepage.php").then(function(a){var i=a.data,s=[];t.call(i,function(t){var e=t.img_src.split("uploads");s.push({id:t.id,title:t.title,content:t.text,url:t.link,icon:"uploads"+e[1]})}),e.$data.especialidades=s}).then(function(){e.FadeIn()})}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"especialidades-wrapper"},[a("div",{attrs:{id:"especialidades"}},[t._m(0),t._v(" "),a("div",{staticClass:"especialidades"},t._l(t.especialidades,function(e){return a("div",{key:e.id,staticClass:"especialidade movement"},[a("div",{staticClass:"icon",style:{"background-image":"url("+e.icon+")"}}),t._v(" "),a("h3",{staticClass:"txt-big"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"copy",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),a("router-link",{attrs:{to:e.url}},[a("div",{staticClass:"cta"},[a("div",{staticClass:"text"},[t._v("saiba mais")]),t._v(" "),a("div",{staticClass:"arrow-cont"},[a("i",{staticClass:"arrow right"})])])])],1)}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-wrapper movement"},[e("h1",{staticClass:"title main"},[this._v("As Nossas Especialidades")]),this._v(" "),e("div",{staticClass:"line"})])}]};var l=a("VU/8")(n,c,!1,function(t){a("hEhU")},"data-v-328ab5a4",null);e.default=l.exports}});
//# sourceMappingURL=35.4f82a065f0e07e183b7f.js.map