(function(e){function t(t){for(var n,a,s=t[0],o=t[1],h=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(l.length)l.shift()();return c.push.apply(c,h||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],n=!0,s=1;s<i.length;s++){var o=i[s];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var u=o;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"086e":function(e){e.exports=JSON.parse('[{"code":1000,"day":"Sunny","night":"Clear","icon":113},{"code":1003,"day":"Partly cloudy","night":"Partly cloudy","icon":116},{"code":1006,"day":"Cloudy","night":"Cloudy","icon":119},{"code":1009,"day":"Overcast","night":"Overcast","icon":122},{"code":1030,"day":"Mist","night":"Mist","icon":143},{"code":1063,"day":"Patchy rain possible","night":"Patchy rain possible","icon":176},{"code":1066,"day":"Patchy snow possible","night":"Patchy snow possible","icon":179},{"code":1069,"day":"Patchy sleet possible","night":"Patchy sleet possible","icon":182},{"code":1072,"day":"Patchy freezing drizzle possible","night":"Patchy freezing drizzle possible","icon":185},{"code":1087,"day":"Thundery outbreaks possible","night":"Thundery outbreaks possible","icon":200},{"code":1114,"day":"Blowing snow","night":"Blowing snow","icon":227},{"code":1117,"day":"Blizzard","night":"Blizzard","icon":230},{"code":1135,"day":"Fog","night":"Fog","icon":248},{"code":1147,"day":"Freezing fog","night":"Freezing fog","icon":260},{"code":1150,"day":"Patchy light drizzle","night":"Patchy light drizzle","icon":263},{"code":1153,"day":"Light drizzle","night":"Light drizzle","icon":266},{"code":1168,"day":"Freezing drizzle","night":"Freezing drizzle","icon":281},{"code":1171,"day":"Heavy freezing drizzle","night":"Heavy freezing drizzle","icon":284},{"code":1180,"day":"Patchy light rain","night":"Patchy light rain","icon":293},{"code":1183,"day":"Light rain","night":"Light rain","icon":296},{"code":1186,"day":"Moderate rain at times","night":"Moderate rain at times","icon":299},{"code":1189,"day":"Moderate rain","night":"Moderate rain","icon":302},{"code":1192,"day":"Heavy rain at times","night":"Heavy rain at times","icon":305},{"code":1195,"day":"Heavy rain","night":"Heavy rain","icon":308},{"code":1198,"day":"Light freezing rain","night":"Light freezing rain","icon":311},{"code":1201,"day":"Moderate or heavy freezing rain","night":"Moderate or heavy freezing rain","icon":314},{"code":1204,"day":"Light sleet","night":"Light sleet","icon":317},{"code":1207,"day":"Moderate or heavy sleet","night":"Moderate or heavy sleet","icon":320},{"code":1210,"day":"Patchy light snow","night":"Patchy light snow","icon":323},{"code":1213,"day":"Light snow","night":"Light snow","icon":326},{"code":1216,"day":"Patchy moderate snow","night":"Patchy moderate snow","icon":329},{"code":1219,"day":"Moderate snow","night":"Moderate snow","icon":332},{"code":1222,"day":"Patchy heavy snow","night":"Patchy heavy snow","icon":335},{"code":1225,"day":"Heavy snow","night":"Heavy snow","icon":338},{"code":1237,"day":"Ice pellets","night":"Ice pellets","icon":350},{"code":1240,"day":"Light rain shower","night":"Light rain shower","icon":353},{"code":1243,"day":"Moderate or heavy rain shower","night":"Moderate or heavy rain shower","icon":356},{"code":1246,"day":"Torrential rain shower","night":"Torrential rain shower","icon":359},{"code":1249,"day":"Light sleet showers","night":"Light sleet showers","icon":362},{"code":1252,"day":"Moderate or heavy sleet showers","night":"Moderate or heavy sleet showers","icon":365},{"code":1255,"day":"Light snow showers","night":"Light snow showers","icon":368},{"code":1258,"day":"Moderate or heavy snow showers","night":"Moderate or heavy snow showers","icon":371},{"code":1261,"day":"Light showers of ice pellets","night":"Light showers of ice pellets","icon":374},{"code":1264,"day":"Moderate or heavy showers of ice pellets","night":"Moderate or heavy showers of ice pellets","icon":377},{"code":1273,"day":"Patchy light rain with thunder","night":"Patchy light rain with thunder","icon":386},{"code":1276,"day":"Moderate or heavy rain with thunder","night":"Moderate or heavy rain with thunder","icon":389},{"code":1279,"day":"Patchy light snow with thunder","night":"Patchy light snow with thunder","icon":392},{"code":1282,"day":"Moderate or heavy snow with thunder","night":"Moderate or heavy snow with thunder","icon":395}]')},3782:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23");function r(e,t,i,r,c,a){var s=Object(n["h"])("the-loader"),o=Object(n["h"])("the-header-vue"),h=Object(n["h"])("the-main-vue"),u=Object(n["h"])("the-footer-vue");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])(s,{weather:!!c.appWeather},null,8,["weather"]),Object(n["e"])(o,{weather:c.appWeather,units:c.currentUnits,"city-list":c.cityList,onToggleUnits:a.toggleUnits,onChangeCity:a.changeCity,onMyLocation:t[1]||(t[1]=function(e){return a.dataUpdate(!0)})},null,8,["weather","units","city-list","onToggleUnits","onChangeCity"]),Object(n["e"])(h,{weather:c.appWeather,units:c.currentUnits},null,8,["weather","units"]),Object(n["e"])(u,{weather:c.appWeather,units:c.currentUnits},null,8,["weather","units"])],64)}var c=i("1da1"),a=(i("96cf"),i("d3b7"),i("a15b"),i("d81d"),i("b64b"),i("159b"),i("b0c0"),i("7db0"),i("b680"),Object(n["e"])("div",{class:"loader"},null,-1));function s(e,t,i,r,c,s){return Object(n["f"])(),Object(n["c"])("div",{class:["wrap-loader",{hide:i.weather}]},[a],2)}var o={props:["weather"]};o.render=s;var h=o,u={key:0},d={class:"container"},l={class:"wrap-header"},y={class:"wrap-city-and-search"};function p(e,t,i,r,c,a){var s=Object(n["h"])("the-header-search-vue"),o=Object(n["h"])("the-header-city-vue"),h=Object(n["h"])("the-header-units-vue");return i.weather?(Object(n["f"])(),Object(n["c"])("header",u,[Object(n["e"])("div",d,[Object(n["e"])("div",l,[Object(n["e"])("div",y,[Object(n["e"])(s,{searchIsActive:c.searchIsActive,"city-list":i.cityList,city:a.city,onToggleSearch:a.toggleSearch,onChangeCity:a.changeCity},null,8,["searchIsActive","city-list","city","onToggleSearch","onChangeCity"]),Object(n["e"])(o,{city:a.city,searchIsActive:c.searchIsActive,onToggleSearch:a.toggleSearch,onMyLocation:t[1]||(t[1]=function(t){return e.$emit("my-location")})},null,8,["city","searchIsActive","onToggleSearch"])]),Object(n["e"])(h,{units:i.units,onToggleUnits:t[2]||(t[2]=function(t){return e.$emit("toggle-units")})},null,8,["units"])])])])):Object(n["d"])("",!0)}var g={class:"current-city"},b={class:"city-buttons"},f=Object(n["e"])("i",{class:"bi bi-search"},null,-1),w=Object(n["e"])("span",null,"Сменить город",-1),v=Object(n["e"])("i",{class:"bi bi-geo-alt"},null,-1),m=Object(n["e"])("span",null,"Мое местоположение",-1);function O(e,t,i,r,c,a){return Object(n["f"])(),Object(n["c"])("div",{class:["wrap-city",{hide:i.searchIsActive}]},[Object(n["e"])("div",g,Object(n["i"])(i.city),1),Object(n["e"])("div",b,[Object(n["e"])("button",{class:"btn city-buttons_btn",onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-search")})},[f,w]),Object(n["e"])("button",{class:"btn city-buttons_btn",onClick:t[2]||(t[2]=function(t){return e.$emit("my-location")})},[v,m])])],2)}var j={props:["city","searchIsActive"],emits:["toggle-search","my-location"]};j.render=O;var _=j,C={class:"city-search"},z=Object(n["e"])("button",{type:"submit",class:"city-search_btn"},"ОК",-1),M={key:0,class:"search-results"};function L(e,t,i,r,c,a){return Object(n["f"])(),Object(n["c"])("div",{class:["wrap-search",{show:i.searchIsActive}]},[Object(n["e"])("form",{onSubmit:t[4]||(t[4]=Object(n["m"])((function(){return a.submit&&a.submit.apply(a,arguments)}),["prevent"]))},[Object(n["e"])("div",C,[Object(n["k"])(Object(n["e"])("input",{type:"text",placeholder:"Введите город",class:"city-search_input","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.inputQuery=e}),onInput:t[2]||(t[2]=function(){return a.inputSearch&&a.inputSearch.apply(a,arguments)}),onKeyup:t[3]||(t[3]=Object(n["l"])((function(t){return e.$emit("toggle-search")}),["esc"]))},null,544),[[n["j"],c.inputQuery,void 0,{trim:!0}]]),z])],32),c.inputQuery.length&&c.resultsArr.length?(Object(n["f"])(),Object(n["c"])("div",M,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(c.resultsArr,(function(e,t){return Object(n["f"])(),Object(n["c"])("div",{class:"search-results_item",key:t,onClick:function(t){return c.inputQuery=e,c.resultsArr=[]}},Object(n["i"])(e),9,["onClick"])})),128))])):Object(n["d"])("",!0)],2)}i("4de4");var P={props:["searchIsActive","cityList","city"],emits:["toggle-search","change-city"],data:function(){return{inputQuery:this.city,resultsArr:[]}},methods:{inputSearch:function(){var e=this;this.resultsArr=this.cityList.filter((function(t){return-1!==t.toLowerCase().indexOf(e.inputQuery.toLowerCase())}))},submit:function(){this.$emit("toggle-search"),this.$emit("change-city",this.inputQuery)}}};P.render=L;var k=P,x={class:"wrap-units"},S={class:"units"};function T(e,t,i,r,c,a){return Object(n["f"])(),Object(n["c"])("div",x,[Object(n["e"])("div",S,[Object(n["e"])("button",{class:["btn units_btn",{active:"c"===i.units}],onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-units")})}," C ",2),Object(n["e"])("button",{class:["btn units_btn",{active:"f"===i.units}],onClick:t[2]||(t[2]=function(t){return e.$emit("toggle-units")})}," F ",2)])])}var A={props:["units"],emits:["toggle-units"]};A.render=T;var U=A,I={components:{TheHeaderUnitsVue:U,TheHeaderSearchVue:k,TheHeaderCityVue:_},emits:["toggle-units","change-city","my-location"],props:{weather:null,units:{type:String,required:!0,default:"c"},cityList:null},data:function(){return{searchIsActive:!1}},methods:{toggleSearch:function(){this.searchIsActive=!this.searchIsActive},changeCity:function(e){this.$emit("change-city",e)}},computed:{city:function(){return this.weather?this.weather.city:"Краснодар"}}};I.render=p;var D=I,W=(i("ac1f"),i("5319"),{key:0}),H={class:"container"},F={class:"weather"},R={class:"weaher-icon"},V={class:"weather-temp"},N=Object(n["e"])("span",null,"º",-1),$={class:"weather-about"};function E(e,t,i,r,c,a){return i.weather?(Object(n["f"])(),Object(n["c"])("main",W,[Object(n["e"])("div",H,[Object(n["e"])("div",F,[Object(n["e"])("div",R,[Object(n["e"])("img",{src:i.weather?i.weather.icon.replace("64x64","128x128"):"https://cdn.weatherapi.com/weather/128x128/day/113.png",alt:i.weather?i.weather.about:"Loading ..."},null,8,["src","alt"])]),Object(n["e"])("div",V,[Object(n["e"])("span",null,Object(n["i"])(a.temp),1),N])]),Object(n["e"])("div",$,Object(n["i"])(a.about),1)])])):Object(n["d"])("",!0)}var Q={props:{weather:null,units:{type:String,required:!0,default:"c"}},computed:{temp:function(){return this.weather?this.weather[this.units].temp.toFixed():20},about:function(){return this.weather?this.weather.about:"Загрузка ..."},weatherIcon:function(){var e=this;if(!this.weather)return'<i class="bi bi-brightness-high"></i>';var t,n=i("086e"),r=[{ids:[113],iconD:'<i class="bi bi-brightness-high"></i>',iconN:'<i class="bi bi-moon"></i>'},{ids:[116],iconD:'<i class="bi bi-cloud-sun"></i>',iconN:'<i class="bi bi-cloud-sun"></i>'},{ids:[119,122],iconD:'<i class="bi bi-cloud"></i>',iconN:'<i class="bi bi-cloud"></i>'}];return n.forEach((function(i){i.code===e.weather.wcode&&r.forEach((function(n){-1!==n.ids.indexOf(i.icon)&&(t=e.weather.isDay?n.iconD:n.iconN)}))})),t}}};Q.render=E;var q=Q,B={key:0},J={class:"container"},K={class:"wrap-statistic"},G={class:"statistic-list"},X={class:"statistic-item"},Y=Object(n["e"])("div",{class:"item-title"},"Ветер",-1),Z={class:"item-value"},ee={class:"statistic-item"},te=Object(n["e"])("div",{class:"item-title"},"Давление",-1),ie={class:"item-value"},ne={class:"statistic-item"},re=Object(n["e"])("div",{class:"item-title"},"Влажность",-1),ce={class:"item-value"},ae={class:"statistic-item"},se=Object(n["e"])("div",{class:"item-title"},"Вероятность дождя",-1),oe={class:"item-value"};function he(e,t,i,r,c,a){return i.weather?(Object(n["f"])(),Object(n["c"])("footer",B,[Object(n["e"])("div",J,[Object(n["e"])("div",K,[Object(n["e"])("ul",G,[Object(n["e"])("li",X,[Y,Object(n["e"])("div",Z,Object(n["i"])(a.windSpeed)+" м/c, "+Object(n["i"])(a.windDegree),1)]),Object(n["e"])("li",ee,[te,Object(n["e"])("div",ie,Object(n["i"])(a.pressure)+" "+Object(n["i"])("c"===i.units?"мм рт. ст.":"гПА"),1)]),Object(n["e"])("li",ne,[re,Object(n["e"])("div",ce,Object(n["i"])(a.humidity)+"%",1)]),Object(n["e"])("li",ae,[se,Object(n["e"])("div",oe,Object(n["i"])(a.chanceRain)+"%",1)])])])])])):Object(n["d"])("",!0)}var ue={props:["weather","units"],computed:{windSpeed:function(){return this.weather?this.weather.windSpeed:0},windDegree:function(){var e=["северный","северо-восточный","восточный","юго-восточный","южный","юго-западный","западный","северо-западный"];return this.weather?"".concat(e[this.weather.windDegree/45|0]):"северный"},pressure:function(){return this.weather?this.weather[this.units].pressure.toFixed():700},humidity:function(){return this.weather?this.weather.humidity.toFixed():0},chanceRain:function(){return this.weather?this.weather.chanceRain:0}}};ue.render=he;var de=ue,le={name:"App",components:{TheHeaderVue:D,TheMainVue:q,TheFooterVue:de,TheLoader:h},data:function(){return{INTERVAL_UPDATE:3e5,cityList:null,currentCity:null,currentUnits:"c",appWeather:null}},mounted:function(){var e=this;this.dataUpdate(),this.api_getCitys(),setInterval((function(){e.dataUpdate(),console.log("5 minutes have passed! Update weather ...")}),this.INTERVAL_UPDATE)},methods:{api_getCityName:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://csonelove.ru/api_weather.php");case 3:return t=e.sent,e.t0=JSON,e.next=7,t.json();case 7:if(e.t1=e.sent,i=e.t0.parse.call(e.t0,e.t1),t&&"success"===i.status){e.next=11;break}throw"Ошибка определения локации";case 11:return e.abrupt("return",i.city);case 14:e.prev=14,e.t2=e["catch"](0),console.error(e.t2);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},api_getWeather:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var i,n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,i={key:"312c13866c8d4744930141056212905",q:e.currentCity,days:1,aqi:"no",alerts:"no",lang:"ru"},n=Object.keys(i).map((function(e){return e+"="+i[e]})).join("&"),t.next=5,fetch("https://api.weatherapi.com/v1/forecast.json?"+n);case 5:return r=t.sent,t.next=8,r.json();case 8:if(c=t.sent,r&&c.location){t.next=13;break}throw e.currentCity="Краснодар",alert("Ошибка получения данные о погоде"),"Ошибка получения данные о погоде";case 13:return t.abrupt("return",c);case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},api_getCitys:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var i,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.hh.ru/areas");case 2:return i=t.sent,t.next=5,i.json();case 5:n=t.sent,r=[],n[0].areas.forEach((function(e){r.push(e.name),e.areas.length&&e.areas.forEach((function(e){return r.push(e.name)}))})),e.cityList=r;case 9:case"end":return t.stop()}}),t)})))()},setModelValues:function(e){if(!e)return!1;var t=e.current,i=e.forecast.forecastday[0],n=new Date(1e3*t.last_updated_epoch).getHours(),r=i.hour.find((function(e){return new Date(1e3*e.time_epoch).getHours()>n})),c=r.chance_of_rain;return this.appWeather={city:e.location.name,time:e.location.localtime,about:t.condition.text,wcode:t.condition.code,icon:t.condition.icon,humidity:t.humidity,windSpeed:(1e3*t.wind_kph/3600).toFixed(1),windDegree:t.wind_degree,windDir:t.wind_dir,precip:t.precip_mm,sunrise:i.astro.sunrise,sunset:i.astro.sunset,chanceRain:c,isDay:t.is_day,c:{feelslike:t.feelslike_c,temp:t.temp_c,pressure:3*t.pressure_mb/4},f:{feelslike:t.feelslike_f,temp:t.temp_f,pressure:t.pressure_mb}}},dataUpdate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!this.currentCity||t?this.api_getCityName().then((function(t){e.currentCity=t,e.api_getWeather().then((function(t){return e.appWeather=e.setModelValues(t)}))})):this.api_getWeather().then((function(t){return e.appWeather=e.setModelValues(t)}))},toggleUnits:function(){this.currentUnits="c"===this.currentUnits?"f":"c"},changeCity:function(e){this.currentCity=e,this.dataUpdate()},toggleThemeColor:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.querySelector("html");e&&(t.dataset.theme?t.removeAttribute("data-theme"):t.dataset.theme="dark"),this.appWeather&&!this.appWeather.isDay&&(t.dataset.theme||(t.dataset.theme="dark"))}},computed:{curreentTemp:function(){return this.appWeather?this.appWeather[this.currentUnits].temp:0}},watch:{appWeather:function(){this.toggleThemeColor()}}};le.render=r;var ye=le,pe=(i("ce52"),i("3782"),Object(n["b"])(ye));pe.mount("#app")},ce52:function(e,t,i){}});