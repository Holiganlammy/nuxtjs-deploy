(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{302:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(142).default)("f49e41aa",content,!0,{sourceMap:!1})},305:function(t,e,r){"use strict";r(302)},306:function(t,e,r){var o=r(141)((function(i){return i[1]}));o.push([t.i,".container[data-v-9e398d3e]{margin:0 auto;padding:1em;width:1220px}.photos[data-v-9e398d3e]{grid-gap:1em;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;text-align:center}.photo-item[data-v-9e398d3e]{height:256px;-o-object-fit:cover;object-fit:cover;width:100%}",""]),o.locals={},t.exports=o},313:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(49),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("/v2/list");case 3:return o=e.sent,e.abrupt("return",{photos:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=n,d=(r(305),r(57)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",[t._v(" Photos ")]),t._v(" "),e("div",{staticClass:"photos"},t._l(t.photos,(function(r){return e("nuxt-link",{key:r.id,attrs:{to:"/photos/".concat(r.id)}},[e("img",{staticClass:"photo-item",attrs:{src:r.download_url}}),t._v(" "),e("p",[t._v(t._s(r.id))]),t._v(" "),e("p",[t._v(t._s(r.author))])])})),1)])}),[],!1,null,"9e398d3e",null);e.default=component.exports}}]);