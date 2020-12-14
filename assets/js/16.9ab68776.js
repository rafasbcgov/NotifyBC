(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{402:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"admin-ip-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-ip-list"}},[t._v("#")]),t._v(" Admin IP List")]),t._v(" "),e("p",[t._v("By "),e("RouterLink",{attrs:{to:"/docs/overview/#architecture"}},[t._v("design")]),t._v(", "),e("em",[t._v("NotifyBC")]),t._v(" classifies incoming requests into four types. For a request to be classified as super-admin, the request's source ip must be in admin ip list. By default, the list contains "),e("em",[t._v("localhost")]),t._v(" only as defined by "),e("em",[t._v("defaultAdminIps")]),t._v(" in "),e("em",[t._v("/server/config.json")])],1),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultAdminIps"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("to modify, create config object "),e("em",[t._v("adminIps")]),t._v(" with updated list in file "),e("em",[t._v("/server/config.local.js")]),t._v(" instead. For example, to add ip range "),e("em",[t._v("192.168.0.0/24")]),t._v(" to the list")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  adminIps"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.0.0/24'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("It should be noted that "),e("em",[t._v("NotifyBC")]),t._v(" may generate http requests sending to itself. These http requests are expected to be admin requests. If you have created an app cluster such as in OpenShift, you should add the cluster ip range to "),e("em",[t._v("adminIps")]),t._v(". In OpenShift, this ip range is a private ip range. In BCGov's OpenShift cluster, the ip range starts with octet 172.")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Define static array config in one file only")]),t._v(" "),e("p",[t._v("Due to a "),e("a",{attrs:{href:"https://github.com/strongloop/loopback-boot/issues/172"}},[t._v("bug")]),t._v(" in Loopback a config of array type such as "),e("i",[t._v("adminIps")]),t._v(" cannot be merged if defined in multiple files with different length. To mitigate, only define an array config in one file.\nIt is for this reason that the default admin ip list has to use a different name "),e("i",[t._v("defaultAdminIps")]),t._v(" as shown above.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);