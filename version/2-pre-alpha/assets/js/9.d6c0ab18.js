(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{350:function(t,e,n){"use strict";n.r(e);n(313),n(169),n(66),n(326),n(311),n(43),n(309),n(171);var a,o=n(327),r=(n(95),n(56)),i=n(328),s=n.n(i),c={data:function(){return{selected:void 0,options:[]}},created:(a=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("https://api.github.com/repos/bcgov/NotifyBC/git/trees/gh-pages");case 3:return e=t.sent,n=e.data.tree.find((function(t){return"version"===t.path.toLowerCase()})),t.next=7,s.a.get(n.url);case 7:e=t.sent,this.options=e.data.tree.map((function(t){return{value:t.path,text:t.path}})),this.options.sort((function(t,e){for(var n=t.text.split("."),a=e.text.split("."),r=0;r<n.length&&r<a.length;Object(o.a)("i"),r++){var i=parseInt(n[r]),s=parseInt(a[r]);if(i!==s)return i>s;if(n[r]!==a[r])return n[r]>a[r]}return t.text>e.text})),this.options.unshift({value:"main",text:"main"}),(a=window.location.pathname.toLowerCase()).startsWith("/notifybc/version/")?(r=a.indexOf("/",18),this.selected=a.substring(18,r)):this.selected="main",t.next=17;break;case 15:t.prev=15,t.t0=t.catch(0);case 17:case"end":return t.stop()}}),t,this,[[0,15]])}))),function(){return a.apply(this,arguments)}),methods:{onChange:function(t){var e="main"===this.selected?"":"/version/".concat(this.selected),n=window.location.pathname.toLowerCase(),a=9,o=n.indexOf("/version/");o>=0&&(a=o+9);var r=n.indexOf("/",a);window.location.pathname=window.location.pathname.substring(0,9)+e+window.location.pathname.substring(r)}}},u=n(42),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.options&&t.options.length>0?n("span",{staticClass:"nav-item"},[t._v("\n  Version:\n  "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?n:n[0]},t.onChange]}},t._l(t.options,(function(e){return n("option",{domProps:{value:e.value}},[t._v("\n      "+t._s(e.text)+"\n    ")])})),0)]):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);