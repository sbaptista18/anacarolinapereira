webpackJsonp([16],{Np6n:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("UqHI"),i=s.n(e),l=s("wF+D"),n=s.n(l),o=s("TL5K"),c=s.n(o),r=s("mtWM"),m=s.n(r),d={data:function(){return{phone:i.a,email:n.a,location:c.a,tlf1:"",tlf2:"",email1:"",email2:"",address:"",api_code:""}},methods:{openContactForm:function(){var t=document.querySelector("#contact-form-2");document.querySelector("#menu");t.style.transition="1s",t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="all",$("#contact-form-2 .page").css("pointer-events","all"),document.documentElement.style.overflow="hidden",$(".menu-wrapper-mobile .menu-items").removeClass("open"),$(".menu-wrapper-mobile .btn-menu").removeClass("open"),$(".menu-wrapper-mobile .close-menu").removeClass("open"),$("#contact-form-2 .p0 .text").animate({left:0,opacity:1},500)}},mounted:function(){Array.prototype.map;var t=this;m.a.get("https://beta.anacarolinapereira.pt/db-api/getContactosHomepage.php").then(function(a){var s=a.data;t.tlf1=s[0].tlf_1,""==s[0].tlf_2?$("#tlf2").css("display","none"):($("#tlf2").css("display","inline-block"),t.tlf2=" ou "+s[0].tlf_2),t.email1=s[0].email_1,""==s[0].email_2?$("#email2").css("display","none"):($("#email2").css("display","inline-block"),t.email2=s[0].email_2),t.address=s[0].address,t.api_code=s[0].google_maps_code})}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"contacto-wrapper"},[s("div",{attrs:{id:"contacto"}},[s("div",{staticClass:"left lateral"},[s("div",{staticClass:"title main"},[t._v("Esperamos por si!")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"copy"},[s("div",{staticClass:"topic"},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:t.phone,alt:""}})]),t._v(" "),s("div",{staticClass:"txt"},[t._v("\n            Fale connosco através do\n            "),s("span",{attrs:{id:"tlf1"}},[t._v(t._s(t.tlf1))]),t._v(" "),s("span",{attrs:{id:"tlf2"}},[t._v(t._s(t.tlf2))])])]),t._v(" "),s("div",{staticClass:"topic"},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:t.email,alt:""}})]),t._v(" "),s("div",{staticClass:"txt"},[s("a",{staticStyle:{color:"#95989a"},attrs:{href:"mailto:"+t.email1}},[t._v(t._s(t.email1))]),t._v(" "),s("a",{staticStyle:{color:"#95989a"},attrs:{href:"mailto:"+t.email2}},[t._v(t._s(t.email2))])])]),t._v(" "),s("div",{staticClass:"topic"},[s("div",{staticClass:"icon"},[s("img",{attrs:{src:t.location,alt:""}})]),t._v(" "),s("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.address)}})])]),t._v(" "),s("div",{staticClass:"cta",on:{click:function(a){return t.openContactForm()}}},[t._m(0)])]),t._v(" "),s("div",{staticClass:"right lateralR",domProps:{innerHTML:t._s(t.api_code)}})])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn blue"},[a("div",{staticClass:"txt"},[this._v("contacte-nos")])])}]};var v=s("VU/8")(d,p,!1,function(t){s("cfXl")},"data-v-c3c52cb6",null);a.default=v.exports},cfXl:function(t,a){}});
//# sourceMappingURL=16.ff3bcdfeb349ca7d3370.js.map