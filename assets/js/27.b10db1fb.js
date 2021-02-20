(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{424:function(e,t,s){"use strict";s.r(t);var n=s(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"notification-bounce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notification-bounce"}},[e._v("#")]),e._v(" Notification Bounce")]),e._v(" "),s("p",[e._v("Bounces, or Non-Delivery Reports (NDRs), are system-generated emails informing sender of failed delivery. "),s("em",[e._v("NotifyBC")]),e._v(" can be configured to receive bounces, record bounces, and automatically unsubscribe all subscriptions of a recipient if the number of recorded hard bounces against the recipient exceeds threshold. A deemed successful notification delivery deletes the bounce record.")]),e._v(" "),s("p",[e._v("Although "),s("em",[e._v("NotifyBC")]),e._v(" records all bounce emails, not all of them should count towards unsubscription threshold, but rather only the hard bounces - those which indicate permanent unrecoverable errors such as destination address no longer exists. In principle this can be distinguished using smtp response code. In practice, however, there are some challenges to make the distinction")]),e._v(" "),s("ul",[s("li",[e._v("the smtp response code is not fully standardized and may vary by recipient's smtp server so it's unreliable")]),e._v(" "),s("li",[e._v("there is no standard smtp header in bounce email to contain smtp response code. Often the response code is embedded in bounce email body.")]),e._v(" "),s("li",[e._v("the bounce email template varies by sender's smtp server")])]),e._v(" "),s("p",[e._v("To mitigate, "),s("em",[e._v("NotifyBC")]),e._v(" defines several customizable string pattern filters in terms of regular expression. Only bounce emails matched the filters count towards unsubscription threshold. It's a matter of trial-and-error to get the correct filter suitable to your smtp server.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("to improve hard bounce recognition")]),e._v(" "),s("p",[e._v("Send non-existing emails to several external email systems. Inspect the bounce messages for common string patterns. After gone live, review bounce records in web console from time to time to identify new bounce types and decide whether the bounce types qualify as hard bounce. To avoid false positives resulting in premature unsubscription, it is advisable to start with a high unsubscription threshold.")])]),e._v(" "),s("p",[e._v("Bounce handling involves four actions")]),e._v(" "),s("ul",[s("li",[e._v("during notification dispatching, envelop address is set to a "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Variable_envelope_return_path",target:"_blank",rel:"noopener noreferrer"}},[e._v("VERP"),s("OutboundLink")],1),e._v(" in the form "),s("em",[e._v("bn-{subscriptionId}-{unsubscriptionCode}@{inboundSmtpServerDomain}")]),e._v(" routed to "),s("em",[e._v("NotifyBC")]),e._v(" "),s("RouterLink",{attrs:{to:"/docs/config-inboundSmtpServer/"}},[e._v("inbound smtp server")]),e._v(".")],1),e._v(" "),s("li",[e._v("when a notification finished dispatching, the dispatching start and end time is recorded to all bounce records matching affects recipient addresses")]),e._v(" "),s("li",[e._v("when inbound smtp server receives a bounce message, it updates the bounce record by saving the message and incrementing the hard bounce count when the message matches the filter criteria. The filter criteria are regular expressions matched against bounce email subject and body, as well as regular expression to extract recipient's email address from bounce email body. It also unsubscribes the user from all subscriptions when the hard bounce count exceeds a predefined threshold.")]),e._v(" "),s("li",[e._v("A cron job runs periodically to delete bounce records if the latest notification is deemed delivered successfully.")])]),e._v(" "),s("p",[e._v("To setup bounce handling")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("set up "),s("RouterLink",{attrs:{to:"/docs/config-inboundSmtpServer/"}},[e._v("inbound smtp server")])],1)]),e._v(" "),s("li",[s("p",[e._v("verify config "),s("em",[e._v("notification.handleBounce")]),e._v(" is set to true or absent in "),s("em",[e._v("/src/config.local.js")])])]),e._v(" "),s("li",[s("p",[e._v("verify and adjust unsubscription threshold and bounce filter criteria if needed.\nFollowing is the default config in file "),s("em",[e._v("/src/config.ts")]),e._v(" compatible with "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc3464",target:"_blank",rel:"noopener noreferrer"}},[e._v("rfc 3464"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  inboundSmtpServer"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    bounce"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      unsubThreshold"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      subjectRegex"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      smtpStatusCodeRegex"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'5\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      failedRecipientRegex"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'(?:[a-z0-9!#$%&\\'*+/=?^_`{|}~-]+(?:\\\\.[a-z0-9!#$%&\\'*+/=?^_`{|}~-]+)*|\"(?:[\\\\x01-\\\\x08\\\\x0b\\\\x0c\\\\x0e-\\\\x1f\\\\x21\\\\x23-\\\\x5b\\\\x5d-\\\\x7f]|\\\\\\\\[\\\\x01-\\\\x09\\\\x0b\\\\x0c\\\\x0e-\\\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\\\x01-\\\\x08\\\\x0b\\\\x0c\\\\x0e-\\\\x1f\\\\x21-\\\\x5a\\\\x53-\\\\x7f]|\\\\\\\\[\\\\x01-\\\\x09\\\\x0b\\\\x0c\\\\x0e-\\\\x7f])+)\\\\])'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("where")]),e._v(" "),s("ul",[s("li",[s("p",[s("em",[e._v("unsubThreshold")]),e._v(" is the threshold of hard bounce count above which the user is unsubscribed from all subscriptions")])]),e._v(" "),s("li",[s("p",[s("em",[e._v("subjectRegex")]),e._v(" is the regular expression that bounce message subject must match in order to count towards the threshold. If "),s("em",[e._v("subjectRegex")]),e._v(" is set to empty string or "),s("em",[e._v("undefined")]),e._v(", then this filter is disabled.")])]),e._v(" "),s("li",[s("p",[s("em",[e._v("smtpStatusCodeRegex")]),e._v(" is the regular expression that smtp status code embedded in the message body must match in order to count towards the threshold. The default value matches all "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc3463",target:"_blank",rel:"noopener noreferrer"}},[e._v("rfc3463"),s("OutboundLink")],1),e._v(" class 5 status codes. For a multi-part bounce message, the body limits to the one of the following parts by content type in descending order")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("message/delivery-status")])]),e._v(" "),s("li",[e._v("html")]),e._v(" "),s("li",[e._v("plain text")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("failedRecipientRegex")]),e._v(" is the regular expression used to extract recipient's email address from bounce message body. This extracted recipient's email address is compared against the subscription record as a means of validation. If "),s("em",[e._v("failedRecipientRegex")]),e._v(" is set to empty string or "),s("em",[e._v("undefined")]),e._v(", then this validation method is skipped. The default RegEx is taken from a "),s("a",{attrs:{href:"https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression",target:"_blank",rel:"noopener noreferrer"}},[e._v("stackoverflow answer"),s("OutboundLink")],1),e._v(". For a multi-part bounce message, the body limits to the one of the following parts by content type in descending order")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("message/delivery-status")])]),e._v(" "),s("li",[e._v("html")]),e._v(" "),s("li",[e._v("plain text")])])])])]),e._v(" "),s("li",[s("p",[e._v("Change config of cron job "),s("RouterLink",{attrs:{to:"/docs/config-cronJobs/#delete-notification-bounces"}},[e._v("Delete Notification Bounces")]),e._v(" if needed")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);