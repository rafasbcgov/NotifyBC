(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{415:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sms"}},[t._v("#")]),t._v(" SMS")]),t._v(" "),e("p",[e("em",[t._v("NotifyBC")]),t._v(" depends on underlying SMS service providers to deliver SMS messages. The supported service providers are")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://twilio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twilio"),e("OutboundLink")],1),t._v(" (default)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.swiftsmsgateway.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swift"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Only one service provider can be chosen per installation. To change service provider, add following "),e("em",[t._v("smsServiceProvider")]),t._v(" config object to file "),e("em",[t._v("/server/config.local.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  smsServiceProvider"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swift'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The rest configs are service provider specific. You should have an account with the chosen service provider before proceeding.")]),t._v(" "),e("h2",{attrs:{id:"twilio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#twilio"}},[t._v("#")]),t._v(" Twilio")]),t._v(" "),e("p",[t._v("Add "),e("em",[t._v("sms.twilio")]),t._v(" config object to file "),e("em",[t._v("/server/config.local.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sms"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    twilio"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      accountSid"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<AccountSid>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      authToken"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<AuthToken>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fromNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<FromNumber>'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Obtain "),e("em",[t._v("<AccountSid>")]),t._v(", "),e("em",[t._v("<AuthToken>")]),t._v(" and "),e("em",[t._v("<FromNumber>")]),t._v(" from your Twilio account.")]),t._v(" "),e("h2",{attrs:{id:"swift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),e("p",[t._v("Add "),e("em",[t._v("sms.swift")]),t._v(" config object to file "),e("em",[t._v("/server/config.local.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sms"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    swift"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      accountKey"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<accountKey>'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Obtain "),e("em",[t._v("<accountKey>")]),t._v(" from your Swift account.")]),t._v(" "),e("h3",{attrs:{id:"unsubscription-by-replying-a-keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unsubscription-by-replying-a-keyword"}},[t._v("#")]),t._v(" Unsubscription by replying a keyword")]),t._v(" "),e("p",[t._v("With Swift short code, sms user can unsubscribe by replying to a sms message with a keyword. The keyword must be pre-registered with Swift.")]),t._v(" "),e("p",[t._v("To enable this feature,")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Generate a random string, hereafter referred to as "),e("em",[t._v("<randomly-generated-string>")])])]),t._v(" "),e("li",[e("p",[t._v("Add it to "),e("em",[t._v("sms.swift.notifyBCSwiftKey")]),t._v(" in file "),e("em",[t._v("/server/config.local.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   sms"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     swift"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n       notifyBCSwiftKey"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<randomly-generated-string>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Go to Swift web admin console, click "),e("em",[t._v("Number Management")]),t._v(" tab")])]),t._v(" "),e("li",[e("p",[t._v("Click "),e("em",[t._v("Launch")]),t._v(" button next to "),e("em",[t._v("Manage Short Code Keywords")])])]),t._v(" "),e("li",[e("p",[t._v("Click "),e("em",[t._v("Features")]),t._v(" button next to the registered keyword(s). A keyword may have multiple entries. In such case do this for each entry.")])]),t._v(" "),e("li",[e("p",[t._v("Click "),e("em",[t._v("Redirect To Webpage")]),t._v(" tab in the popup window")])]),t._v(" "),e("li",[e("p",[t._v("Enter following information in the tab")]),t._v(" "),e("ul",[e("li",[t._v("set "),e("em",[t._v("URL")]),t._v(" to "),e("em",[t._v("<NotifyBCHttpHost>/api/subscriptions/swift")]),t._v(", where "),e("em",[t._v("<NotifyBCHttpHost>")]),t._v(" is NotifyBC HTTP host name and should be the same as "),e("RouterLink",{attrs:{to:"/docs/config-httpHost/"}},[t._v("HTTP Host")]),t._v(" config")],1),t._v(" "),e("li",[t._v("set "),e("em",[t._v("Method")]),t._v(" to "),e("em",[t._v("POST")])]),t._v(" "),e("li",[t._v("set "),e("em",[t._v("Custom Parameter 1 Name")]),t._v(" to "),e("em",[t._v("notifyBCSwiftKey")])]),t._v(" "),e("li",[t._v("set "),e("em",[t._v("Custom Parameter 1 Value")]),t._v(" to "),e("em",[t._v("<randomly-generated-string>")])])])]),t._v(" "),e("li",[e("p",[t._v("Click "),e("em",[t._v("Save Changes")]),t._v(" button and then "),e("em",[t._v("Done")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);