(this.webpackJsonppixelart=this.webpackJsonppixelart||[]).push([[0],{132:function(e,t,c){},155:function(e,t,c){},156:function(e,t,c){},320:function(e,t,c){},321:function(e,t,c){},325:function(e,t,c){},326:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),a=c(118),s=c.n(a),i=(c(132),c(10)),o=c(3),l=c(6),j=c(72),h=c(48),b=c(119),d=c(69),u=c.n(d),f=function(){function e(){Object(h.a)(this,e)}return Object(b.a)(e,null,[{key:"get",value:function(e,t,c,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};u.a.get(e,this.getRequestConfig(n)).then((function(e){try{t(e),c(e)}catch(n){r(n)}})).catch((function(e){r(e)})).then((function(){}))}},{key:"post",value:function(e,t,c,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=this.getRequestConfig(n);u.a.post(e,a||s.data,s).then((function(e){try{t(e),c(e)}catch(n){r(n)}})).catch((function(e){r(e)})).then((function(){}))}},{key:"getRequestConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL},c={};t.headers=c;var r=Object.assign(t,e);return r}}]),e}(),O=c(120),x=c(125),p=c(126),m=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(e){var r;return Object(h.a)(this,c),(r=t.call(this,e)).name="ValidationError",r}return c}(Object(p.a)(Error)),g=c(14);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var w=n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),k=n.createElement("path",{d:"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z"});function N(e,t){var c=e.title,r=e.titleId,a=y(e,["title","titleId"]);return n.createElement("svg",v({viewBox:"0 0 24 24",fill:"whitesmoke",width:"16px",height:"16px",ref:t,"aria-labelledby":r},a),c?n.createElement("title",{id:r},c):null,w,k)}var C=n.forwardRef(N);c.p;function S(e){var t=e.image,c=e.i,n=(e.state,128),a="art-grid",s=n,i=n;return t.width>148&&(a+=" grid-w2",s=2*s+8),t.height>148&&(a+=" grid-h2",i=2*i+8),Object(r.jsx)("div",{className:a,children:Object(r.jsxs)(g.b,{to:{pathname:"/detail/".concat(t.pjId)},children:[t.width<=64&&t.height<=64?t.width<=n/3&&t.height<=n/3?Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:"helper"}),Object(r.jsx)("img",{src:t.url,alt:t.title,id:c,width:3*t.width,height:3*t.height})]}):Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:"helper"}),Object(r.jsx)("img",{src:t.url,alt:t.title,id:c,width:2*t.width,height:2*t.height})]}):Object(r.jsx)("img",{src:t.url,alt:t.title,id:c,className:"fit",width:s,height:i}),Object(r.jsx)("div",{className:"overlay"}),Object(r.jsxs)("div",{className:"color-count",children:[t.colorCount," Colors"]}),Object(r.jsx)("div",{className:"launch",children:Object(r.jsx)(C,{})}),Object(r.jsxs)("div",{className:"preview",children:[t.title,Object(r.jsx)("br",{}),"by ",t.author]})]})},c)}function E(e){var t=e.register,c=e.watch;switch(e.filter){case"Keyword":return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:"tooltip",children:[Object(r.jsx)("span",{className:"tooltiptext",children:"Searches in title and tags"}),"Keyword:"]}),Object(r.jsx)("input",{id:"keyword",name:"keyword",ref:t()})]});case"Author":return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:"tooltip",children:[Object(r.jsx)("span",{className:"tooltiptext",children:"Name or part of name"}),"Author:\u2005"]}),Object(r.jsx)("input",{id:"author",name:"author",ref:t()})]});case"Color count":return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:"tooltip",children:[Object(r.jsx)("span",{className:"tooltiptext",children:"Colors are counted on frame 1 of animations"}),"Color count:\u2005"]}),"Minimum:\u2005",Object(r.jsx)("input",{name:"colorMin",size:"2",ref:t()}),"\u2005Maximum:\u2005",Object(r.jsx)("input",{name:"colorMax",size:"2",ref:t()})]});case"Size":return Object(r.jsxs)(r.Fragment,{children:["Size:\u2005",Object(r.jsxs)("select",{name:"sizeType",ref:t(),children:[Object(r.jsx)("option",{value:"min",children:"Minimum"}),Object(r.jsx)("option",{value:"max",children:"Maximum"}),Object(r.jsx)("option",{value:"equal",children:"Equals"})]}),"\u2005Width: \u2005",Object(r.jsx)("input",{name:"width",size:"2",ref:t()}),"\u2005Height: \u2005",Object(r.jsx)("input",{name:"height",size:"2",ref:t()})]});case"Date":return Object(r.jsxs)(r.Fragment,{children:["Date after\u2005",Object(r.jsx)("input",{type:"date",name:"afterDate",ref:t()}),"\u2005Date before\u2005",Object(r.jsx)("input",{type:"date",name:"beforeDate",ref:t()})]});case"Transparency":return Object(r.jsxs)(r.Fragment,{children:["Transparency:",Object(r.jsxs)("span",{className:"onoff",children:[Object(r.jsx)("input",{type:"checkbox",name:"transparency",id:"transparency",ref:t()}),Object(r.jsx)("label",{htmlFor:"transparency"})]})]});case"Tolerance":return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:"tooltip",children:[Object(r.jsx)("span",{className:"tooltiptext",children:"Tolerance influences how accurate the colors of your query match the colors in the search result. 0 means exact match only, 20 means your r/g/b values +/- 20 for each of those values. Default is between 7 and 25 depending on the amount of colors in the query."}),"Color tolerance:\u2005"]}),Object(r.jsx)("input",{name:"tolerance",className:"tolerance",type:"range",min:0,max:40,step:1,ref:t()}),Object(r.jsxs)("span",{id:"range-value",children:["\u2005",c("tolerance")]})]});default:return Object(r.jsx)("p",{children:"NOTHING  I GUESS"})}}c(155),c(156);var A=c(122);c(320);function P(e){var t=e.state,c=e.setState,a=Object(n.useState)(),s=Object(o.a)(a,2),l=s[0],j=s[1],h=Object(n.useState)({x:0,y:0}),b=Object(o.a)(h,2),d=b[0],u=b[1],f=Object(n.useState)(!1),O=Object(o.a)(f,2),x=O[0],p=O[1],m=Object(n.useRef)(null),g=Object(n.useRef)([]),v=Object(n.useRef)(null);Object(n.useEffect)((function(){function e(e){m.current&&!m.current.contains(e.target)&&v.current&&!v.current.contains(e.target)&&(p(!1),j(void 0))}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[m]),Object(n.useEffect)((function(){if("undefined"!==typeof l&&null!==g.current[l]){p(!0);var e=g.current[l].getBoundingClientRect();u({x:e.x,y:e.y})}}),[l]);var y=function(){return t.colorPalette.length?t.colorPalette.map((function(e,t){return Object(r.jsx)("div",{className:"swatch",style:{backgroundColor:e,boxShadow:t===l?"0px 0px 0px 2px rgba(255,255,255,1) inset":"0px 0px 0px 2px rgba(0, 0, 0, 0) inset"},onClick:function(){return j(t)},ref:function(e){return g.current[t]=e},children:Object(r.jsx)("div",{className:"color",children:Object(r.jsx)("div",{className:"remove-color",onClick:function(){return function(e){p(!1),j(void 0),c((function(t){return Object(i.a)(Object(i.a)({},t),{},{colorPalette:t.colorPalette.filter((function(t){return t!==e}))})}))}(e)}})})},t)})):null};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{ref:v,id:"palette",className:"color-search-container",children:[Object(r.jsx)(y,{}),Object(r.jsx)("button",{className:"button-large",onClick:function(){var e=t.colorPalette;e.push("#000000"),c((function(t){return Object(i.a)(Object(i.a)({},t),{},{colorPalette:e})})),j(t.colorPalette.length-1),p(!0)}})]}),x?Object(r.jsx)("div",{ref:m,style:{position:"absolute",display:"inline-block",left:d.x,top:d.y+40,zIndex:99},children:Object(r.jsx)(A.ChromePicker,{color:t.colorPalette[l],onChange:function(e){var r=t.colorPalette;r[l]=e.hex,c((function(e){return Object(i.a)(Object(i.a)({},e),{},{colorPalette:r})}))},disableAlpha:!0})}):null]})}var z=c(123);function I(e){var t=e.state,c=e.setState,a=Object(n.useState)([]),s=Object(o.a)(a,2),h=s[0],b=s[1],d=Object(n.useState)(!1),u=Object(o.a)(d,2),O=u[0],x=u[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),y=v[0],w=v[1],k=Object(n.useState)(1),N=Object(o.a)(k,2),C=N[0],A=N[1],I=Object(n.useState)([]),T=Object(o.a)(I,2),R=T[0],M=T[1],F=Object(j.b)({defaultValues:t.filters}),D=F.register,_=F.watch,H=F.handleSubmit,L=F.control,B=Object(j.a)({control:L,name:"filters"}),U=B.fields,V=B.append,W=B.remove;Object(n.useEffect)((function(){if(t.filters&&Object.keys(t.filters)&&0==!Object.keys(t.filters).length)for(var e in t.filters)K(q(e))}),[]),Object(n.useEffect)((function(){!0===O&&J()}),[t]);var q=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},K=function(e){M([].concat(Object(l.a)(R),[e])),V({filter:e})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"top-bar",children:[Object(r.jsxs)("div",{id:"header",children:[Object(r.jsx)("p",{children:"Pixel Art by Color"}),Object(r.jsx)(g.b,{className:"no-decoration",to:{pathname:"/about"},children:Object(r.jsx)("p",{children:"About"})})]}),Object(r.jsx)("p",{children:"Add a color or filter to get started"}),Object(r.jsx)("h3",{children:"Color"}),Object(r.jsx)(P,{state:t,setState:c}),Object(r.jsxs)("p",{children:[Object(r.jsx)("h3",{children:"Add filter"}),Object(r.jsxs)("select",{onChange:function(e){return K(e.target.value)},children:[Object(r.jsx)("option",{value:"empty",children:"+"}),["Keyword","Author","Color count","Size","Date","Transparency","Tolerance"].map((function(e){return!R.includes(e)&&Object(r.jsx)("option",{value:e,children:e},e)}))]})]}),Object(r.jsxs)("form",{children:[Object(r.jsx)("div",{children:U.map((function(e,t){return Object(r.jsxs)("div",{className:"filter-box",children:[Object(r.jsx)(E,{register:D,watch:_,filter:e.filter}),"\u2005",Object(r.jsx)("button",{type:"button",onClick:function(){return function(e,t){M(R.filter((function(t){return t!==e}))),W(t)}(e.filter,t)},children:"X"})]},e.id)}))}),t.colorPalette.length<1&&R.length<1?null:Object(r.jsx)("button",{id:"search-button",type:"submit",onClick:H((function(e){A(1),w(!0),b([]),x(!0),c((function(t){return Object(i.a)(Object(i.a)({},t),{},{filters:e})}))})),children:"Search"})]})]}),Object(r.jsx)(G,{})]});function G(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{style:{color:"#eeeeee",margin:"20px"},children:[Object(r.jsxs)("span",{className:"tooltip",children:[Object(r.jsx)("span",{className:"tooltiptext",children:"Sorted by date, newest to oldest."}),"Results"]}),Object(r.jsxs)("span",{className:"float-right",children:[50==h.length?h.length.toString()+"+":h.length," entries found"]})]}),Object(r.jsxs)(z.a,{className:"grid-container",dataLength:h.length,next:J,hasMore:y,loader:Object(r.jsx)("p",{children:"Loading more images"}),children:[h.map((function(e,n){return Object(r.jsx)(S,{image:e,state:t,setState:c},n)})),50===h.length?Object(r.jsx)("button",{onClick:function(){return J()},children:"Load more"}):null]})]})}function J(){f.get("/api",(function(e){}),(function(e){e.data.length>0?(x(!1),b(h.concat(e.data)),A(C+1)):w(!1)}),(function(){throw new m("Failed")}),{headers:{colorarray:t.colorPalette,keyword:t.filters.keyword,author:t.filters.author,colormin:t.filters.colorMin,colormax:t.filters.colorMax,sizetype:t.filters.sizeType,height:t.filters.height,width:t.filters.width,beforeDate:t.filters.beforeDate,afterDate:t.filters.afterDate,transparency:t.filters.transparency,tolerance:t.filters.tolerance,page:C}})}}var T=c(18),R=(c(321),c(124)),M=c(5);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var _=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),H=n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"});function L(e,t){var c=e.title,r=e.titleId,a=D(e,["title","titleId"]);return n.createElement("svg",F({viewBox:"0 0 24 24",fill:"black",width:"36px",height:"36px",ref:t,"aria-labelledby":r},a),c?n.createElement("title",{id:r},c):null,_,H)}var B=n.forwardRef(L);c.p;function U(e){var t=e.state,c=e.setState,a=Object(n.useState)([]),s=Object(o.a)(a,2),j=s[0],h=s[1],b=Object(n.useState)(),d=Object(o.a)(b,2),u=d[0],O=d[1],x=Object(n.useState)([]),p=Object(o.a)(x,2),v=p[0],y=p[1],w=Object(n.useState)(!0),k=Object(o.a)(w,2),N=k[0],E=k[1],A=Object(n.useState)(!0),P=Object(o.a)(A,2),z=P[0],I=P[1],F=Object(n.useState)(),D=Object(o.a)(F,2),_=D[0],H=D[1],L=Object(n.useState)({}),U=Object(o.a)(L,2),V=U[0],W=U[1],q=Object(n.useState)(),K=Object(o.a)(q,2),G=K[0],J=K[1],X=Object(M.f)().id;function $(){return N?Object(r.jsx)("h3",{children:"Loading..."}):Object(r.jsx)(re,{})}function Q(e,t){v.includes(e)?y(v.filter((function(t){return t!==e}))):y([].concat(Object(l.a)(v),[e])),W(t),H("")}function Y(e){0===v.length&&(W(e),H(""))}function Z(){return[].concat(u.colors).sort((function(e,t){return e.dbBrightness>t.dbBrightness?1:-1})).map((function(e,t){return Object(r.jsx)("div",{id:t,className:v.includes(e.hex)?"color-tile select":"color-tile deselect",style:{backgroundColor:e.hex},onClick:function(){return Q(e.hex,e)},onMouseEnter:function(){return Y(e)},children:Object(r.jsx)("div",{className:"hover-visible"})},t)}))}function ee(){return u.colors.map((function(e,t){return Object(r.jsx)("div",{id:t,className:"palette-bar-item",style:{backgroundColor:e.hex,width:e.percent+"%"},onClick:function(){return Q(e.hex,e)},onMouseEnter:function(){return Y(e)}},t)}))}function te(){return Object(r.jsxs)("div",{className:"color-swatch",children:[Object(r.jsx)("div",{className:"color-example",style:{backgroundColor:V.hex}}),Object(r.jsx)(R.CopyToClipboard,{text:V.hex.toUpperCase(),onCopy:function(){return V.hex.toUpperCase(),void H(" copied!")},children:Object(r.jsxs)("p",{children:["HEX: ",V.hex.toUpperCase()," ",_]})}),Object(r.jsxs)("p",{children:["R: ",V.rgb[0]," G: ",V.rgb[1]," B: ",V.rgb[2]]}),Object(r.jsxs)("p",{children:["Percentage used: ",Math.round(100*V.percent)/100,"%"]})]})}function ce(){return u.tags.length>0?Object(r.jsxs)("p",{children:["Tags:\u2004",u.tags.map((function(e,t){return Object(r.jsxs)(g.b,{to:"/",onClick:function(){return function(e){c((function(t){return{colorPalette:[],filters:{keyword:e}}}))}(e)},children:[e,t!==u.tags.length-1&&", "]},t)}))]}):Object(r.jsx)("p",{children:"No tags."})}function re(){var e,t=[],n=Object(T.a)(u.tags.entries());try{for(n.s();!(e=n.n()).done;){var a=Object(o.a)(e.value,2),s=a[0],l=a[1];t.push(Object(r.jsx)("span",{children:l},s))}}catch(j){n.e(j)}finally{n.f()}return Object(r.jsxs)("div",{className:"detail-view",children:[Object(r.jsxs)("div",{className:"detail-top-bar",children:[Object(r.jsx)("div",{className:"return-bar",children:Object(r.jsxs)(g.b,{to:{pathname:"/"},className:"vertical-center",children:[Object(r.jsx)(B,{}),"return"]})}),Object(r.jsx)("div",{className:"pj-bar",children:Object(r.jsxs)("a",{href:"http://pixeljoint.com/pixelart/"+u.pjId+".htm",children:["Open on pixeljoint.com ",Object(r.jsx)(C,{fill:"black"})]})})]}),Object(r.jsxs)("div",{className:"detail-container",children:[Object(r.jsxs)("div",{className:"image-large",children:[Object(r.jsxs)("div",{className:"zoom-detail",children:["zoom",Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"button",onClick:function(){return function(e){var t=document.getElementById(e),c=t.clientWidth;if(c===t.naturalWidth)return!1;J(c/2+"px")}(u.pjId)},children:"-"}),Object(r.jsx)("button",{type:"button",onClick:function(){return function(e){var t=document.getElementById(e).clientWidth;J(2*t+"px")}(u.pjId)},children:"+"})]}),Object(r.jsx)("img",{className:"detail-img",src:u.url,alt:u.title,id:u.pjId,width:G})]}),Object(r.jsxs)("div",{className:"image-metadata",children:[Object(r.jsxs)("div",{className:"meta-text",children:[Object(r.jsx)("h2",{children:u.title}),Object(r.jsxs)("h3",{children:["Created by  ",Object(r.jsx)(g.b,{to:"/",onClick:function(){return e=u.author,void c((function(t){return{colorPalette:[],filters:{author:e}}}));var e},children:u.author})]}),Object(r.jsx)("p",{children:u.desc}),Object(r.jsx)(ce,{}),Object(r.jsxs)("p",{className:"tooltip",children:[u.trans?Object(r.jsxs)("span",{className:"tooltiptext",children:[u.colorCount-1,"+ transparency"]}):Object(r.jsx)(r.Fragment,{}),"Number of colors: ",u.colorCount,Object(r.jsx)("br",{})]}),Object(r.jsxs)("p",{children:["Dimensions: ",u.width," x ",u.height,"px"]})]}),Object(r.jsxs)("div",{className:"palette-bar",children:["Sorted by percentage used: ",Object(r.jsx)("br",{}),Object(r.jsx)(ee,{}),Object(r.jsx)("br",{}),"Sorted by brightness:"]}),Object(r.jsxs)("div",{className:"color-flex",children:[Object(r.jsx)("div",{className:"color-wrapper",children:Object(r.jsx)(Z,{})}),0!==Object.keys(V).length?Object(r.jsx)(te,{}):Object(r.jsx)(r.Fragment,{})]}),v.length?Object(r.jsx)(g.b,{to:{pathname:"/"},children:Object(r.jsx)("button",{onClick:function(){v.length&&c((function(e){return Object(i.a)(Object(i.a)({},e),{},{colorPalette:v})}))},children:"Search with selected colors"})}):null,Object(r.jsxs)("span",{className:"select-all",children:[Object(r.jsx)("button",{onClick:function(){return function(){for(var e=[],t=0;t<u.colors.length;t++)e.push(u.colors[t].hex);y(e)}()},children:"select all"}),Object(r.jsx)("button",{onClick:function(){y([])},children:"deselect all"})]})]})]}),Object(r.jsx)("div",{className:"related-art",style:{backgroundColor:"#3A3A3C"},children:Object(r.jsx)(ne,{})})]})}function ne(){var e="";return!0===z&&(e="Loading artworks with similar palettes"),!1===z&&(e="Artworks with similar palettes"),0===j.length&&!1===z&&(e="No artworks with similar palettes found..."),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{style:{color:"#eeeeee",margin:"20px"},children:"Results"===e?Object(r.jsxs)("span",{className:"tooltip",children:[Object(r.jsx)("span",{className:"tooltiptext",children:"Sorted by date, newest to oldest."}),"Results"]}):e}),!1===z&&Object(r.jsx)("div",{className:"grid-container",children:j.map((function(e,n){return Object(r.jsx)(S,{image:e,state:t,setState:c},n)}))})]})}return Object(n.useEffect)((function(){E(!0),I(!0),function(e){function t(e){}function c(e){O(e.data),E(!1)}function r(){throw new m("Failed")}f.get("/api/".concat(e),t,c,r)}(X)}),[X]),Object(n.useEffect)((function(){if(!1===N){var e=u.colors.slice(0,4);(function(e){function t(e){}function c(e){if(e.data.length>0){var t=e.data;for(var c in t)t[c].pjId===u.pjId&&t.splice(c,1);h(t),I(!1)}}function r(){throw new m("Failed")}f.get("/api/".concat(X,"/relatingworks"),t,c,r,{headers:{colorarray:e}})})(e=JSON.stringify(e))}}),[N]),Object(r.jsx)($,{})}c(325);function V(){return Object(r.jsxs)("div",{className:"detail-view",children:[Object(r.jsx)("div",{className:"detail-top-bar",children:Object(r.jsx)("div",{className:"return-bar",children:Object(r.jsxs)(g.b,{to:{pathname:"/"},className:"vertical-center",children:[Object(r.jsx)(B,{}),"return"]})})}),Object(r.jsxs)("div",{className:"about-body",children:[Object(r.jsx)("h1",{children:"About"}),Object(r.jsx)("p",{children:"In the pixel art color browsing app you can find works from pixeljoint.com, but only works that were published before October 14th 2020."}),Object(r.jsx)("p",{children:"If the artwork is an animation, color count and palette are analysed on the first frame. "}),Object(r.jsxs)("p",{children:["This site was created by ",Object(r.jsx)("a",{href:"http://pixeljoint.com/p/9092.htm",children:"Hapiel"})," and ",Object(r.jsx)("a",{href:"https://nl.linkedin.com/in/marinus-van-den-oever-0aa46117a",children:"Marinus"})," as a research project in HCI, you can read the paper about it here."]}),Object(r.jsxs)("p",{children:["The ",Object(r.jsx)("a",{href:"https://github.com/hapiel/pa_color_browser/",children:"source code for this website"})," and the ",Object(r.jsx)("a",{href:"https://github.com/hapiel/pa_color_db",children:"source code for building the database"})," are both on github."]}),Object(r.jsx)("h1",{children:"Database statistics"}),Object(r.jsx)("p",{children:"The database holds 88620 works, which we've analyzed with our script. Although the intended use of the database is to search individual works using color search, we also plotted some charts of the data."}),Object(r.jsx)("iframe",{style:{background:"#3A3A3C",border:"0"},width:"100%",height:"480",src:"https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=d0f81586-c3ef-4b81-9576-188c11ea9b14&theme=dark"}),Object(r.jsx)("iframe",{style:{background:"#3A3A3C",border:"0"},width:"100%",height:"480",src:"https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=9a2b5109-471a-4632-985f-3c42fee2c115&theme=dark"}),Object(r.jsx)("iframe",{style:{background:"#3A3A3C",border:"0"},width:"100%",height:"480",src:"https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=8b24e4d7-06b1-479c-9b2e-73b73b80b369&theme=dark"}),Object(r.jsx)("iframe",{style:{background:"#3A3A3C",border:"0"},width:"100%",height:"480",src:"https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=0a07834b-a5b5-45e9-9f4c-ec326a2d7115&theme=dark"}),Object(r.jsx)("iframe",{style:{background:"#3A3A3C",border:"0"},width:"100%",height:"480",src:"https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=72bd9f30-a1c5-4371-b9d2-4bfb1cabf0c9&theme=dark"}),Object(r.jsx)("iframe",{style:{background:"#3A3A3C",border:"0"},width:"100%",height:"480",src:"https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=ff838c60-c23a-4406-8643-4aeb322802b2&theme=dark"}),Object(r.jsx)("iframe",{style:{background:"#3A3A3C",border:"0"},width:"100%",height:"480",src:"https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=3e716ce9-de3e-479b-b208-21b0d1b2722a&theme=dark"})]})]})}var W=function(){var e=Object(n.useState)({colorPalette:[],filters:{}}),t=Object(o.a)(e,2),c=t[0],a=t[1];return localStorage.noFirstVisit||(a((function(e){return Object(i.a)(Object(i.a)({},e),{},{colorPalette:["#"+((1<<24)*Math.random()|0).toString(16)]})})),localStorage.noFirstVisit="1"),Object(r.jsx)(g.a,{children:Object(r.jsxs)(M.c,{children:[Object(r.jsx)(M.a,{path:"/",exact:!0,children:Object(r.jsx)(I,{state:c,setState:a})}),Object(r.jsx)(M.a,{path:"/detail/:id",render:function(e){return Object(r.jsx)(U,{state:c,setState:a},e.match.params.id)}}),Object(r.jsx)(M.a,{path:"/about",exact:!0,children:Object(r.jsx)(V,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(r.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[326,1,2]]]);
//# sourceMappingURL=main.c0a0cae0.chunk.js.map