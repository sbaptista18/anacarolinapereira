webpackJsonp([30],{Gq66:function(t,a){},Np6n:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("zwcc"),i=e.n(s),l=e("0w89"),n=e.n(l),o=e("pj8R"),c=e.n(o),r=e("mtWM"),d=e.n(r),v={data:function(){return{phone:i.a,email:n.a,location:c.a,tlf1:"",tlf2:"",email1:"",email2:"",address:"",horario:"",api_code:""}},methods:{openContactForm:function(){var t=document.querySelector("#contact-form-2");document.querySelector("#menu");t.style.transition="1s",t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="all",$("#contact-form-2 .page").css("pointer-events","all"),document.documentElement.style.overflow="hidden",$(".menu-wrapper-mobile .menu-items").removeClass("open"),$(".menu-wrapper-mobile .btn-menu").removeClass("open"),$(".menu-wrapper-mobile .close-menu").removeClass("open"),$("#contact-form-2 .p0 .text").animate({left:0,opacity:1},500)},FadeIn:function(){var t=$(".movement, .cover"),a=$(".movement-delayed"),e=$(".lateral, .lateralR"),s=$("#svg");!function(t){t.fn.visible=function(a,e){void 0===e&&(e=0);var s=t(this),i=t(window),l=i.scrollTop(),n=l+i.height(),o=s.offset().top+e,c=o+s.height()-e;return(!0===a?o:c)<=n&&(!0===a?c:o)>=l}}(jQuery);var i=$(window),l=!0;t.each(function(t,a){(a=$(a)).visible(!0)&&a.addClass("placed")}),s.each(function(t,a){(a=$(a)).visible(!0)&&(l&&a.append("<img src='assets/img/elemento_animated.svg' alt=''></img>"),l=!1)}),e.each(function(t,a){(a=$(a)).visible(!0,100)&&a.addClass("placed")}),a.each(function(t,a){(a=$(a)).visible(!0,800)&&a.addClass("placed")}),i.scroll(function(i){t.each(function(t,a){(a=$(a)).visible(!0)&&a.addClass("placed")}),e.each(function(t,a){(a=$(a)).visible(!0,100)&&a.addClass("placed")}),a.each(function(t,a){(a=$(a)).visible(!0,800)&&a.addClass("placed")}),s.each(function(t,a){(a=$(a)).visible(!0)&&(l&&a.append("<img src='assets/img/elemento_animated.svg' alt=''></img>"),l=!1)})})}},mounted:function(){Array.prototype.map;var t=this;d.a.get("https://beta.anacarolinapereira.pt/db-api/getContactosHomepage.php").then(function(a){var e=a.data;t.tlf1="+351 "+e[0].tlf_1.slice(0,3)+" "+e[0].tlf_1.slice(3,6)+" "+e[0].tlf_1.slice(6,9),""==e[0].tlf_2?$("#tlf2").css("display","none"):($("#tlf2").css("display","inline-block"),t.tlf2=" ou "+e[0].tlf_2),t.email1=e[0].email_1,""==e[0].email_2?$("#email2").css("display","none"):($("#email2").css("display","inline-block"),t.email2=e[0].email_2),t.address=e[0].address,t.horario=e[0].horario,t.api_code=e[0].google_maps_code}).then(function(){t.FadeIn()})}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contacto-wrapper movement"},[e("div",{attrs:{id:"contacto"}},[e("div",{staticClass:"left"},[e("div",{staticClass:"title main"},[t._v("Onde Estamos")]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"copy"},[e("div",{staticClass:"topic"},[e("div",{staticClass:"txt bold"},[t._v("Horário de Atendimento")]),t._v(" "),e("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.horario)}})]),t._v(" "),e("div",{staticClass:"topic conts"},[e("div",{staticClass:"txt bold"},[t._v("Contactos")]),t._v(" "),e("div",[e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.phone,alt:""}})]),t._v(" "),e("div",{staticClass:"txt"},[e("span",{attrs:{id:"tlf1"}},[t._v(t._s(t.tlf1))]),t._v(" "),e("span",{attrs:{id:"tlf2"}},[t._v(t._s(t.tlf2))])])]),t._v(" "),e("div",[e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.email,alt:""}})]),t._v(" "),e("div",{staticClass:"txt"},[e("a",{staticStyle:{color:"#95989a"},attrs:{href:"mailto:"+t.email1}},[t._v(t._s(t.email1))]),t._v(" "),e("a",{staticStyle:{color:"#95989a"},attrs:{href:"mailto:"+t.email2}},[t._v(t._s(t.email2))])])])]),t._v(" "),e("div",{staticClass:"topic"},[e("div",{staticClass:"txt bold"},[t._v("Morada")]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.location,alt:""}})]),t._v(" "),e("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.address)}})])])])]),t._v(" "),e("div",{staticClass:"right",domProps:{innerHTML:t._s(t.api_code)}})])])},staticRenderFns:[]};var p=e("VU/8")(v,m,!1,function(t){e("Gq66")},"data-v-2735a3f0",null);a.default=p.exports}});
//# sourceMappingURL=30.1dcaf58c3db78cfe4081.js.map