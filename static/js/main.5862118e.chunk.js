(this["webpackJsonpreactjs-shopping-cart"]=this["webpackJsonpreactjs-shopping-cart"]||[]).push([[0],{1554:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c.n(n),s=c(34),r=c.n(s),o=(c(41),c(4)),i=c(5),d=(c(42),c(43),Object(n.createContext)()),u=(c(44),c(8)),l=c(1),j=function(t){var e=t.cartObj,c=t.removeFromCart;return Object(l.jsxs)("div",{className:"cart-card",children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return c(e)},children:Object(l.jsx)(u.a,{})})}),Object(l.jsx)("img",{src:e.smallImage,className:"w-36 h-30"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:e.productName}),Object(l.jsxs)("p",{children:["Quantity: ",e.count]})]}),Object(l.jsx)("p",{children:e.productPrice})]})},b="ADD_CART_ITEM",m="REMOVE_CART_ITEM",p="UPDATE_CART_ITEM_COUNT",O=function(t){var e=t.closeCart,c=t.show?"modal display-block":"modal display-none",a=Object(n.useContext)(d),s=a.cartItem,r=a.dispatch,i=Object(n.useState)(0),b=Object(o.a)(i,2),p=b[0],O=b[1],f=Object(n.useState)(0),h=Object(o.a)(f,2),x=h[0],g=h[1];Object(n.useEffect)((function(){!function(){var t=0,e=0;s.map((function(c){t+=c.count*parseFloat(c.productPrice),e+=c.count})),O(t),g(e)}()}),[s]);var v=function(t){t.isAddedtoCart=!1,t.count=0,r({type:m,payload:t})};return Object(l.jsxs)("div",{className:c,children:[Object(l.jsx)("div",{className:"absolute right-2/4 top-4",children:Object(l.jsx)("button",{onClick:function(){return e()},children:Object(l.jsx)(u.a,{})})}),Object(l.jsxs)("h1",{className:"text-lg font-bold",children:["Cart ",x]}),Object(l.jsx)("div",{className:"cart-container",children:s.length>0?Object(l.jsx)("div",{children:s.map((function(t){return Object(l.jsx)(j,{cartObj:t,removeFromCart:v},t.id)}))}):Object(l.jsx)("p",{className:"p-10 text-red-500 decoration-clone",children:"Your cart is empty"})}),Object(l.jsxs)("div",{className:"checkout-container",children:[Object(l.jsx)("h2",{children:"Total"})," ",Object(l.jsx)("p",{children:p}),Object(l.jsx)("button",{className:"checkout-btn btn-green",children:"Checkout"})]})]})},f=c(12),h=c.n(f),x=c(35),g=(c(47),function(t){var e=t.product,c=t.addToCart,a=t.removeFromCart,s=t.incrementItem,r=t.decrementItem,d=Object(n.useState)([]),u=Object(o.a)(d,2),j=u[0],b=u[1];return Object(n.useEffect)((function(){b(e)}),[e]),Object(l.jsxs)("div",{className:"shadow flex flex-col items-center p-3",children:[Object(l.jsx)("img",{src:j.smallImage,className:"w-64 h-48"}),Object(l.jsx)("p",{className:"font-medium capitalize",children:j.productName}),Object(l.jsxs)("p",{children:["$",j.productPrice]}),j.isAddedtoCart?Object(l.jsxs)("div",{className:"flex grid-cols-2 gap-2 grid w-4/5",children:[Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsxs)("button",{onClick:function(){return r(j)},disabled:j.count<=1,className:"disabled:opacity-50 disabled:cursor-text focus:outline-none",children:[Object(l.jsx)(i.b,{className:"w-5 h-5"})," "]}),Object(l.jsx)("span",{className:"mx-2",children:j.count}),j.count>=1?Object(l.jsx)("button",{onClick:function(){return s(j)},className:"focus:outline-none",children:Object(l.jsx)(i.c,{className:"w-5 h-5"})}):null]}),Object(l.jsx)("button",{onClick:function(){return a(j)},className:"btn btn-red",children:Object(l.jsx)(i.d,{})})]}):Object(l.jsx)("button",{onClick:function(){return c(j)},className:"btn btn-green",children:"Add to Cart"})]})}),v=c(36),C=c.n(v),N=c(9),y=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),c=e[0],a=e[1],s=Object(n.useContext)(d),r=s.cartItem,i=s.dispatch,u=function(){var t=Object(x.a)(h.a.mark((function t(){var e,c,n,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("https://api.pexels.com/v1/search?query=toys&per_page=8&page=1",{headers:{Authorization:"563492ad6f917000010000018f3e254bdba740aab8247cce67fb3648"}});case 2:e=t.sent,c=e.data,n=c.photos,s=n.map((function(t){return{smallImage:t.src.medium,tinyImage:t.src.tiny,productName:N.random.word(),productPrice:N.commerce.price(),count:0,id:N.datatype.uuid()}})),a(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]),Object(n.useEffect)((function(){console.log("cart updated",r,c)}),[r]);var j=function(t){t.isAddedtoCart=!0,t.count=1,i({type:b,payload:t})},O=function(t){t.isAddedtoCart=!1,t.count=0,i({type:m,payload:t})},f=function(t){t.isAddedtoCart=!0,t.count>0&&(t.count=t.count+1);c.findIndex((function(e){return e.id===t.id}));i({type:p,payload:t})},v=function(t){t.isAddedtoCart=!0,t.count>0&&(t.count=t.count-1);c.findIndex((function(e){return e.id===t.id}));i({type:p,payload:t})};return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 px-4",children:c.map((function(t){return Object(l.jsx)(g,{product:t,addToCart:j,removeFromCart:O,incrementItem:f,decrementItem:v},t.id)}))})})},w=c(10),I=function(t,e){switch(e.type){case b:return[].concat(Object(w.a)(t),[e.payload]);case m:return t.filter((function(t){return t.id!==e.payload.id}));case p:var c=t.findIndex((function(t){return t.id===e.payload.id})),n=[].concat(Object(w.a)(t.slice(0,c)),[Object.assign({},t[c],e.payload)],Object(w.a)(t.slice(c+1)));return console.log("updatedState",n),n;default:return t}};var k=function(){var t=Object(n.useReducer)(I,[]),e=Object(o.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)({show:!1}),r=Object(o.a)(s,2),u=r[0],j=r[1],b=Object(n.useState)(0),m=Object(o.a)(b,2),p=m[0],f=m[1];return Object(n.useEffect)((function(){!function(){var t=0;c.map((function(e){t+=e.count})),f(t)}()}),[c]),Object(l.jsxs)(d.Provider,{value:{cartItem:c,dispatch:a},children:[Object(l.jsxs)("header",{className:"p-2 mb-4 border-b-2",children:[Object(l.jsx)("h1",{className:"text-lg font-bold",children:"Toy shop"}),Object(l.jsxs)("button",{className:"right-4 top-3 absolute focus:outline-none",onClick:function(){j({show:!0})},children:[Object(l.jsx)(i.a,{className:"w-5 h-5"}),Object(l.jsx)("span",{className:"cart-badge",children:p})]})]}),Object(l.jsx)(y,{}),Object(l.jsx)(O,{closeCart:function(){j({show:!1})},show:u.show})]})},T=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,1555)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),T()},41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},47:function(t,e,c){}},[[1554,1,2]]]);
//# sourceMappingURL=main.5862118e.chunk.js.map