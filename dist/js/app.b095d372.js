(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e14":function(t,e,n){"use strict";var r=n("f075"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("h1",{staticClass:"mt-5 mb-5 text-muted"},[t._v("Mesure de la qualité de l'air")]),n("hr",{staticClass:"mb-5"}),n("div",{staticClass:"row"},t._l(t.cities,(function(e){return n("div",{key:e.index,staticClass:"col-sm-4"},[n("City",{attrs:{city:e},on:{deleteCity:t.deleteCityAction}})],1)})),0),n("CityForm",{on:{cityAddEvent:t.addCityAction}}),t.showAlert?n("Alert",{attrs:{type:t.typeAlert,message:t.messageAlert}}):t._e()],1)])},a=[],o=(n("c740"),n("a434"),n("b0c0"),n("96cf"),n("1da1")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{class:t.color,attrs:{title:t.city.name,"img-src":t.city.image}},[t.loading?t._e():n("b-card-text",[n("h5",{staticClass:"font-weight-light text-white"},[t._v(" Qualité de l'air : "+t._s(t.city.iqa))])]),n("b-button",{attrs:{variant:"dark"},on:{click:t.deleteCityAction}},[t._v("Supprimer")]),t.loading?n("b-spinner",{attrs:{variant:"primary",label:"Spinning"}}):t._e()],1)],1)},s=[],l=(n("99af"),{token:"f69d2755c697393f91766e6eeca24b541a754160"}),u=n("bc3a"),d=n.n(u),p="http://api.waqi.info/feed",f={getAirQuality:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(p,"/").concat(t,"/?token=").concat(l.token),e.next=4,d.a.get(n);case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:e.prev=8,e.t0=e["catch"](0),alert("error !");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},y={props:{city:{type:Object,default:null}},data:function(){return{color:"",loading:!1}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,f.getAirQuality(t.city.name);case 3:n=e.sent,t.loading=!1,t.city.iqa=n.aqi,t.city.iqa<30&&(t.color="Pollution-Faible"),t.city.iqa>=30&&t.city.iqa<=50&&(t.color="Pollution-Moyenne"),t.city.iqa>50&&(t.color="Pollution-Forte");case 9:case"end":return e.stop()}}),e)})))()},methods:{deleteCityAction:function(){this.$emit("deleteCity",this.city)}}},m=y,v=(n("a93a"),n("2877")),g=Object(v["a"])(m,c,s,!1,null,"3735452c",null),h=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row for-group ajouterVille"},[n("div",{staticClass:"col-sm-2"},[t._v(" Ajouter une ville ")]),n("div",{staticClass:"col-sm-3 mb-5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCity,expression:"newCity"}],staticClass:"form-control",attrs:{type:"text",id:"cityField"},domProps:{value:t.newCity},on:{input:function(e){e.target.composing||(t.newCity=e.target.value)}}})]),n("div",{staticClass:"col-sm-2"},[n("b-button",{attrs:{variant:"success"},on:{click:t.addCityAction}},[t._v("Ajouter")])],1)])},w=[],C={data:function(){return{newCity:null}},methods:{addCityAction:function(){this.newCity&&(console.log("ajouter",this.newCity),this.$emit("cityAddEvent",this.newCity))}}},A=C,_=(n("0e14"),Object(v["a"])(A,b,w,!1,null,"c273e048",null)),j=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{attrs:{variant:t.type,show:""}},[t._v(t._s(t._f("capitalize")(t.message)))])],1)},O=[],k=(n("fb6a"),n("d3b7"),n("25f0"),{props:{type:{type:String,default:""},message:{type:String,default:""}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}}}),q=k,P=Object(v["a"])(q,x,O,!1,null,"38541816",null),S=P.exports,$={name:"App",components:{City:h,CityForm:j,Alert:S},data:function(){return{cities:[{name:"Lyon",iqa:null,image:"images/lyon.jpg"},{name:"Paris",iqa:null,image:"images/paris2.jpg"},{name:"Brest",iqa:null,image:"images/brest.jpg"}],typeAlert:"",messageAlert:"",showAlert:!1}},methods:{addCityAction:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,f.getAirQuality(t);case 2:r=n.sent,console.log(r),"Unknown station"!==r?(e.cities.push({name:t,iqa:null}),e.typeAlert="success",e.messageAlert="ville ajoutée avec succès",e.showAlert=!0):(e.typeAlert="warning",e.messageAlert="ville non disponible",e.showAlert=!0);case 5:case"end":return n.stop()}}),n)})))()},deleteCityAction:function(t){var e=this.cities.findIndex((function(e){return e.name===t.name}));this.cities.splice(e,1)}}},E=$,M=Object(v["a"])(E,i,a,!1,null,null,null),R=M.exports,F=n("5f5b"),Q=n("b1e0");n("f9e3"),n("2dd8"),n("de82");r["default"].use(F["a"]),r["default"].use(Q["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(R)}}).$mount("#app")},a93a:function(t,e,n){"use strict";var r=n("d80c"),i=n.n(r);i.a},d80c:function(t,e,n){},de82:function(t,e,n){},f075:function(t,e,n){}});
//# sourceMappingURL=app.b095d372.js.map