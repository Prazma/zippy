!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Network=e()}}(function(){return function e(t,r,n){function i(u,s){if(!r[u]){if(!t[u]){var a="function"==typeof require&&require;if(!s&&a)return a(u,!0);if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[u]={exports:{}};t[u][0].call(f.exports,function(e){var r=t[u][1][e];return i(r?r:e)},f,f.exports,e,t,r,n)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){var n=r[t];if(n){var i={};for(var o in n)i[o]=n[o];i.value=i.initializer.call(e),Object.defineProperty(e,t,i)}}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,u=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var s=0;s<o.length;s++){var a=o[s];if("function"!=typeof a)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof a);i=a(e,u,i)||i}if(void 0!==i.initializer){r[u]=i;continue}}Object.defineProperty(e,u,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}(),u=e("../utils/decorators"),s=function(){function e(){n(this,e),i(this,"_eventCallbacks",t)}var t={};return o(e,[{key:"on",value:function(e,t){var r=this;return e=Array.isArray(e)?e:[e],e.forEach(function(e){var n=r._eventCallbacks[e]=r._eventCallbacks[e]||[];~n.indexOf(t)||n.push(t)}),this}},{key:"off",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=Array.isArray(e)?e:[e],e.forEach(function(e){var n=t._eventCallbacks[e];if(!r&&n)delete t._eventCallbacks[e];else{var i=n?n.indexOf(r):-1;-1!=i&&n.splice(i,1)}}),this}},{key:"trigger",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];var i=this._eventCallbacks[e]||[],o=!0;return i.forEach(function(e){var t=e.apply(void 0,r);t=t!==!1?!0:!1,o=o&&t}),o}},{key:"_eventCallbacks",decorators:[u.enumerable(!1)],initializer:function(){return{}},enumerable:!0}],null,t),e}();r["default"]=s,t.exports=r["default"]},{"../utils/decorators":7}],2:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,r){var n=r[t];if(n){var i={};for(var o in n)i[o]=n[o];i.value=i.initializer.call(e),Object.defineProperty(e,t,i)}}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,u=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var s=0;s<o.length;s++){var a=o[s];if("function"!=typeof a)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof a);i=a(e,u,i)||i}if(void 0!==i.initializer){r[u]=i;continue}}Object.defineProperty(e,u,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}(),a=function(e,t,r){for(var n=!0;n;){var i=e,o=t,u=r;s=l=a=void 0,n=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var a=s.get;return void 0===a?void 0:a.call(u)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;e=l,t=o,r=u,n=!0}},l=e("./HttpModule"),f=n(l),c=e("../Timing"),d=n(c),h=e("../../utils/helpers"),p=e("../../utils/decorators"),g=function(e){function t(e){var n=this,o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i(this,t),e=~["upload","download"].indexOf(e)?e:"download",a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),u(this,"_loadingType",r),u(this,"_intendedEnd",r),u(this,"_isRestarting",r),u(this,"_lastLoadedValue",r),u(this,"_speedRecords",r),u(this,"_avgSpeed",r),u(this,"_requestID",r),u(this,"_progressID",r),u(this,"_started",r),u(this,"_firstProgress",r),u(this,"_deferredProgress",r),u(this,"_timingLabels",r),this._extendDefaultSettings({data:{size:"upload"==e?2097152:10485760,multiplier:2}}).settings(o),this._loadingType=e,this.on("xhr-upload-loadstart",function(){return d["default"].mark(n._timingLabels.start)}),this.on("xhr-readystatechange",function(e){n._started||e.readyState!=XMLHttpRequest.LOADING||(d["default"].mark(n._timingLabels.start),n._started=!0)});var s="upload"==e?"xhr-upload":"xhr";this.on(s+"-progress",function(e,t){return n._progress(t)}),this.on(s+"-timeout",function(){return n._timeout()}),this.on(s+"-loadend",function(){return n._end()})}var r={},r={};return o(t,e),s(t,[{key:"_loadingType",decorators:[p.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_intendedEnd",decorators:[p.enumerable(!1)],initializer:function(){return!1},enumerable:!0},{key:"_isRestarting",decorators:[p.enumerable(!1)],initializer:function(){return!1},enumerable:!0},{key:"_lastLoadedValue",decorators:[p.enumerable(!1)],initializer:function(){return null},enumerable:!0},{key:"_speedRecords",decorators:[p.enumerable(!1)],initializer:function(){return[]},enumerable:!0},{key:"_avgSpeed",decorators:[p.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_requestID",decorators:[p.enumerable(!1)],initializer:function(){return 0},enumerable:!0},{key:"_progressID",decorators:[p.enumerable(!1)],initializer:function(){return 0},enumerable:!0},{key:"_started",decorators:[p.enumerable(!1)],initializer:function(){return!1},enumerable:!0},{key:"_firstProgress",decorators:[p.enumerable(!1)],initializer:function(){return!0},enumerable:!0},{key:"_deferredProgress",decorators:[p.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_timingLabels",decorators:[p.enumerable(!1)],initializer:function(){return{start:null,progress:null,end:null,measure:null}},enumerable:!0}],null,r),s(t,[{key:"start",value:function(){var e=this._loadingType,t=this.settings().data,r=this._requestID++;this._intendedEnd=!1,this._lastLoadedValue=null,this._speedRecords=[],this._started=!1,this._firstProgress=!0,this._deferredProgress=h.defer(),this._isRestarting||this.trigger("start",t.size);var n=this._timingLabels;n.start=e+"-"+r+"-start",n.progress=e+"-"+r+"-progress",n.end=e+"-"+r+"-end",n.measure=e+"-"+r+"-measure";var i="upload"==e?new Blob([new ArrayBuffer(t.size)]):null,o="download"==e?"GET":"POST";return this._newRequest(o,{size:t.size})._sendRequest(i),this}},{key:"abort",value:function(){return this._intendedEnd=!0,this._abort()}},{key:"_progress",value:function(e){var t=this;if(this._firstProgress)return this._firstProgress=!1;this._deferredProgress.run();var r=this._timingLabels,n=this._progressID++,i=r.progress+"-"+n,o=e.loaded;d["default"].mark(i);var u,s=d["default"].measure(r.measure+"-avg-"+n,r.start,i),a=o/s*1e3;if(null===this._lastLoadedValue)u=a;else{var l=d["default"].measure(r.measure+"-instant-"+n,r.progress+"-"+(n-1),i);u=(o-this._lastLoadedValue)/l*1e3}return this._lastLoadedValue=o,this._deferredProgress=h.defer(function(){t._avgSpeed=a,t._speedRecords.push(u),t.trigger("progress",a,u)}),this}},{key:"_timeout",value:function(){return this._intendedEnd=!0,this}},{key:"_end",value:function(){if(this._intendedEnd)this._isRestarting=!1,this.trigger("end",this._avgSpeed,this._speedRecords);else{var e=this.settings().data,t=e.size*e.multiplier;this.settings({data:{size:t}}),this.trigger("restart",t),this._isRestarting=!0,this.start()}return this}}],null,r),t}(f["default"]);r["default"]=g,t.exports=r["default"]},{"../../utils/decorators":7,"../../utils/helpers":8,"../Timing":6,"./HttpModule":3}],3:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,r){var n=r[t];if(n){var i={};for(var o in n)i[o]=n[o];i.value=i.initializer.call(e),Object.defineProperty(e,t,i)}}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,u=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var s=0;s<o.length;s++){var a=o[s];if("function"!=typeof a)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof a);i=a(e,u,i)||i}if(void 0!==i.initializer){r[u]=i;continue}}Object.defineProperty(e,u,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}(),a=function(e,t,r){for(var n=!0;n;){var i=e,o=t,u=r;s=l=a=void 0,n=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var a=s.get;return void 0===a?void 0:a.call(u)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;e=l,t=o,r=u,n=!0}},l=e("../EventDispatcher"),f=n(l),c=e("../../utils/helpers"),d=e("../../utils/decorators"),h=function(e){function t(e){var n=this,o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),u(this,"_defaultSettings",r),u(this,"_settings",r),u(this,"_moduleName",r),u(this,"_xhr",r),u(this,"_lastURLToken",r),u(this,"_requesting",r),u(this,"_requestingOverridden",r),this._extendDefaultSettings({endpoint:"https://bitbucket.org/prazma/zippyserver/src/master/network.php",delay:8e3}),this.settings(o),this._moduleName=e,this.on(["xhr-loadstart","xhr-upload-loadstart"],function(){n._requestingOverridden||(n._requesting=!0)}),this.on(["xhr-loadend","xhr-upload-loadend"],function(){n._requestingOverridden||(n._requesting=!1)})}var r={},r={};return o(t,e),s(t,[{key:"_defaultSettings",decorators:[d.enumerable(!1)],initializer:function(){return null},enumerable:!0},{key:"_settings",decorators:[d.enumerable(!1)],initializer:function(){return null},enumerable:!0},{key:"_moduleName",decorators:[d.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_xhr",decorators:[d.enumerable(!1)],initializer:function(){return null},enumerable:!0},{key:"_lastURLToken",decorators:[d.enumerable(!1)],initializer:function(){return null},enumerable:!0},{key:"_requesting",decorators:[d.enumerable(!1)],initializer:function(){return!1},enumerable:!0},{key:"_requestingOverridden",decorators:[d.enumerable(!1)],initializer:function(){return!1},enumerable:!0}],null,r),s(t,[{key:"settings",value:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return c.isObject(e)?(this._settings=c.assignStrict(this._defaultSettings||{},this._settings||{},e),this):c.copy(this._settings||this._defaultSettings||{})}},{key:"isRequesting",value:function(){return this._requesting}},{key:"_extendDefaultSettings",value:function(e){return this._defaultSettings=c.assign(this._defaultSettings||{},e),this}},{key:"_newRequest",value:function(e,t){var r=this;if(!this.trigger("_newRequest")&&!this._requestingOverridden)return console.warn("To ensure accurate measures, you can only make one request at a time."),this;var n=this.settings(),i=new XMLHttpRequest,o=["GET","POST"];if(!~o.indexOf(e))return console.warn("The HTTP method must be GET or POST."),this;t=t||{};var u=(new Date).getTime();this._lastURLToken="network-"+u;var s=n.endpoint;s+=~s.indexOf("?")?"&":"?",s+="module="+this._moduleName,Object.keys(t).forEach(function(e){var r=encodeURIComponent(t[e]);s+="&"+e+"="+r}),s+="&"+this._lastURLToken,i.open(e,s),this._xhr&&this._xhr.readyState==XMLHttpRequest.OPENED&&this._xhr.abort(),this._xhr=i;var a=["loadstart","progress","abort","error","load","timeout","loadend","readystatechange"];a.forEach(function(e){i.addEventListener(e,function(){for(var t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];("progress"!=e||r._requesting)&&r.trigger.apply(r,["xhr-"+e,i].concat(n))}),"readystatechange"!=e&&i.upload.addEventListener(e,function(){for(var t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];r.trigger.apply(r,["xhr-upload-"+e,i].concat(n))})});var l=function(e){setTimeout(function(){e.readyState!=XMLHttpRequest.UNSENT&&e.readyState!=XMLHttpRequest.DONE&&(r.trigger("xhr-timeout"),r.trigger("xhr-upload-timeout"),e.abort())},n.delay)};return this.on("xhr-upload-loadstart",l).on("xhr-readystatechange",function(e){return function(t){e||t.readyState!=XMLHttpRequest.LOADING||(e=!0,l(t))}}(!1)),this}},{key:"_sendRequest",value:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this._xhr&&this._xhr.readyState==XMLHttpRequest.OPENED?this._xhr.send(e):console.warn("A request must have been created before sending any data."),this}},{key:"_abort",value:function(){return this._xhr&&this._xhr.abort(),this}},{key:"_getTimingEntry",value:function(e){return setTimeout(function(t){return function(){var r=performance.getEntriesByType("resource").filter(function(e){return~e.name.indexOf(t)});e(r.length?r[0]:null)}}(this._lastURLToken),0),this}},{key:"_setRequesting",value:function(e){return this._requestingOverridden=!0,this._requesting=e,this}}],null,r),t}(f["default"]);r["default"]=h,t.exports=r["default"]},{"../../utils/decorators":7,"../../utils/helpers":8,"../EventDispatcher":1}],4:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,r){var n=r[t];if(n){var i={};for(var o in n)i[o]=n[o];i.value=i.initializer.call(e),Object.defineProperty(e,t,i)}}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,u=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var s=0;s<o.length;s++){var a=o[s];if("function"!=typeof a)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof a);i=a(e,u,i)||i}if(void 0!==i.initializer){r[u]=i;continue}}Object.defineProperty(e,u,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}(),a=function(e,t,r){for(var n=!0;n;){var i=e,o=t,u=r;s=l=a=void 0,n=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var a=s.get;return void 0===a?void 0:a.call(u)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;e=l,t=o,r=u,n=!0}},l=e("./HttpModule"),f=n(l),c=e("../Timing"),d=n(c),h=e("../../utils/helpers"),p=e("../../utils/decorators"),g=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,"latency"),u(this,"_supportsResourceTiming",r),u(this,"_requestsLeft",r),u(this,"_attemptsLeft",r),u(this,"_latencies",r),u(this,"_requestID",r),u(this,"_timingLabels",r),this._extendDefaultSettings({measures:5,attempts:3}).settings(e),this._defineResourceTimingSupport()}var r={},r={};return o(t,e),s(t,[{key:"_supportsResourceTiming",decorators:[p.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_requestsLeft",decorators:[p.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_attemptsLeft",decorators:[p.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_latencies",decorators:[p.enumerable(!1)],initializer:function(){return void 0},enumerable:!0},{key:"_requestID",decorators:[p.enumerable(!1)],initializer:function(){return 0},enumerable:!0},{key:"_timingLabels",decorators:[p.enumerable(!1)],initializer:function(){return{start:null,end:null,measure:null}},enumerable:!0}],null,r),s(t,[{key:"settings",value:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return h.isObject(e)?a(Object.getPrototypeOf(t.prototype),"settings",this).call(this,h.assignStrict(e,{delay:0})):h.except(a(Object.getPrototypeOf(t.prototype),"settings",this).call(this),["delay"])}},{key:"start",value:function(){var e=this.settings(),t=e.measures,r=e.attempts;return this._requestsLeft=t,this._attemptsLeft=r*t,this._supportsResourceTiming||(this._requestsLeft++,this._attemptsLeft++),this._setRequesting(!0),this._latencies=[],this._nextRequest(),this}},{key:"_defineResourceTimingSupport",value:function(e){var t=this;"boolean"!=typeof e&&(e=d["default"].supportsResourceTiming),this._supportsResourceTiming=e,this.off(["xhr-load","xhr-loadstart","xhr-readystatechange"]),e?this.on("xhr-load",function(){return t._measure()}):(this.on("xhr-loadstart",function(){return d["default"].mark(t._timingLabels.start)}),this.on("xhr-readystatechange",function(e){return t._measure(e)}))}},{key:"_nextRequest",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],r=this._requestID++,n=t?this._requestsLeft:this._requestsLeft--;if(this._attemptsLeft--&&(n||t)){var i=this._timingLabels;i.start="latency-"+r+"-start",i.end="latency-"+r+"-end",i.measure="latency-"+r+"-measure",this._newRequest("GET")._sendRequest()}else this._setRequesting(!1),setTimeout(function(){return e._end()},0);return this}},{key:"_measure",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(t)if(this._requestsLeft<this.settings().measures){if(t.readyState==XMLHttpRequest.HEADERS_RECEIVED){var r=this._timingLabels;d["default"].mark(r.end);var n=d["default"].measure(r.measure,r.start,r.end);n&&this._latencies.push(n),this._abort(),this._nextRequest(!n)}}else this._nextRequest();else this._getTimingEntry(function(t){var r=t.secureConnectionStart?t.secureConnectionStart-t.connectStart:t.connectEnd-t.connectStart;r&&e._latencies.push(r),e._nextRequest(!r)});return this}},{key:"_end",value:function(){var e=this._latencies,t=e.reduce(function(e,t){return e+t},0)/(e.length||1);if(t=t||null,!e.length)return this._defineResourceTimingSupport(!1),this.start(),this;if(e.length<this.settings().measures){var r=this.settings(),n=r.measures,i=r.attempts;console.warn("\n                An insufficient number of measures have been processed, this could be due to your web server using\n                persistant connections or to your client settings (measures: "+n+", attempts: "+i+").\n            ")}return this.trigger("end",t,e),this}}],null,r),t}(f["default"]);r["default"]=g,t.exports=r["default"]},{"../../utils/decorators":7,"../../utils/helpers":8,"../Timing":6,"./HttpModule":3}],5:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t,r){var n=r[t];if(n){var i={};for(var o in n)i[o]=n[o];i.value=i.initializer.call(e),Object.defineProperty(e,t,i)}}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,u=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var s=0;s<o.length;s++){var a=o[s];if("function"!=typeof a)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof a);i=a(e,u,i)||i}if(void 0!==i.initializer){r[u]=i;continue}}Object.defineProperty(e,u,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}(),a=e("./EventDispatcher"),l=n(a),f=e("./Http/HttpModule"),c=n(f),d=e("./Http/LatencyModule"),h=n(d),p=e("./Http/BandwidthModule"),g=n(p),m=e("./Timing"),v=n(m),y=e("../utils/helpers"),_=e("../utils/decorators"),b=function(){function e(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),u(this,"_modules",t),u(this,"_modulesInitialized",t),u(this,"_pendingSettings",t),this._registerModule("latency",function(e){return new h["default"](e)})._registerModule("upload",function(e){return new g["default"]("upload",e)})._registerModule("download",function(e){return new g["default"]("download",e)}),this._initModules(this.settings(r))}var t={},t={};return s(e,[{key:"_modules",decorators:[_.enumerable(!1)],initializer:function(){return{}},enumerable:!0},{key:"_modulesInitialized",decorators:[_.enumerable(!1)],initializer:function(){return!1},enumerable:!0},{key:"_pendingSettings",decorators:[_.enumerable(!1)],initializer:function(){return{}},enumerable:!0}],[{key:"_exposeInternalClasses",decorators:[_.enumerable(!1)],value:function(){var e=y.getGlobalObject(),t={EventDispatcher:l["default"],HttpModule:c["default"],LatencyModule:h["default"],BandwidthModule:g["default"],Timing:v["default"]};return Object.keys(t).forEach(function(r){e[r]=t[r]}),this}},{key:"supportsResourceTiming",get:function(){return v["default"].supportsResourceTiming}}],t),s(e,[{key:"settings",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?null:arguments[0],r=Object.keys(this._modules);if(!y.isObject(t))return r.reduce(function(t,r){return y.assign(t,i({},r,e._modules[r].settings()))},{});var n=function(){var n=y.except(t,r),o=y.except(t,Object.keys(n));return t=r.reduce(function(e,t){return y.assign(e,i({},t,n))},{}),t=y.assign(t,o),e._modulesInitialized?Object.keys(e._modules).forEach(function(r){e._modules[r].settings(t[r])}):e._pendingSettings=t,{v:e}}();return"object"==typeof n?n.v:void 0}},{key:"isRequesting",value:function(){var e=!1;for(var t in this._modules)this._modules.hasOwnProperty(t)&&(e=e||this._modules[t].isRequesting());return e}},{key:"_registerModule",value:function(e,t){return this._modules[e]=t,this}},{key:"_initModules",value:function(){var e=this;return this._modulesInitialized||(Object.keys(this._modules).forEach(function(t){e._modules[t]=e._modules[t](e._pendingSettings[t]).on("_newRequest",function(){return!e.isRequesting()}),e[t]=e._modules[t]}),this._modulesInitialized=!0),this}}],null,t),e}();r["default"]=b,t.exports=r["default"]},{"../utils/decorators":7,"../utils/helpers":8,"./EventDispatcher":1,"./Http/BandwidthModule":2,"./Http/HttpModule":3,"./Http/LatencyModule":4,"./Timing":6}],6:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){var n=r[t];if(n){var i={};for(var o in n)i[o]=n[o];i.value=i.initializer.call(e),Object.defineProperty(e,t,i)}}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,u=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var s=0;s<o.length;s++){var a=o[s];if("function"!=typeof a)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof a);i=a(e,u,i)||i}if(void 0!==i.initializer){r[u]=i;continue}}Object.defineProperty(e,u,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}(),u=e("../utils/helpers"),s=e("../utils/decorators"),a=function(){function e(){n(this,e),i(this,"_support",t),i(this,"_marks",t),i(this,"_measures",t);var r=u.getGlobalObject();this._support={performance:!!r.performance,userTiming:r.performance&&performance.mark,resourceTiming:r.performance&&"function"==typeof performance.getEntriesByType&&performance.timing}}var t={},t={};return o(e,[{key:"supportsResourceTiming",get:function(){return Boolean(this._support.resourceTiming)}},{key:"_support",decorators:[s.enumerable(!1)],initializer:function(){return{}},enumerable:!0},{key:"_marks",decorators:[s.enumerable(!1)],initializer:function(){return{}},enumerable:!0},{key:"_measures",decorators:[s.enumerable(!1)],initializer:function(){return{}},enumerable:!0}],null,t),o(e,[{key:"mark",value:function(e){var t=this._support,r=this._marks;return t.userTiming&&performance.mark(e),r[e]=t.performance?performance.now():(new Date).getTime(),this}},{key:"measure",value:function(e,t,r){var n=this._support,i=this._marks,o=this._measures;if("undefined"==typeof o[e]){var u=i[r]-i[t];if(n.userTiming){performance.measure(e,t,r);var s=performance.getEntriesByName(e);o[e]=s.length?s[0].duration:u}else o[e]=u}return o[e]}}],null,t),e}();r["default"]=new a,t.exports=r["default"]},{"../utils/decorators":7,"../utils/helpers":8}],7:[function(e,t,r){"use strict";function n(e){return function(t,r,n){return n.enumerable=e,n}}Object.defineProperty(r,"__esModule",{value:!0}),r.enumerable=n},{}],8:[function(e,t,r){(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return"undefined"!=typeof self?self:"undefined"!=typeof e?e:new Function("return this")()}function i(e){return void 0!=e&&null!=e&&"object"==typeof e.valueOf()}function o(e){return JSON.parse(JSON.stringify(e))}function u(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];t=o(t);for(var r=arguments.length,n=Array(r>2?r-2:0),s=2;r>s;s++)n[s-2]=arguments[s];return n.forEach(function(r){Object.keys(r).forEach(function(n){if(!e||t.hasOwnProperty(n)){var o=r[n];t[n]=i(o)?u(e,t[n],o):o}})}),t}function s(){for(var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];return u.apply(void 0,[!1,e].concat(r))}function a(){for(var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];return u.apply(void 0,[!0,e].concat(r))}function l(e,t){var r=o(e);return t.forEach(function(e){return delete r[e]}),r}function f(){var e=arguments.length<=0||void 0===arguments[0]?function(){}:arguments[0];return new(function(){function r(){t(this,r),this.func=e}return c(r,[{key:"run",value:function(){this.func&&this.func(),delete this.func}}]),r}())}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r.getGlobalObject=n,r.isObject=i,r.copy=o,r.assign=s,r.assignStrict=a,r.except=l,r.defer=f}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[5])(5)});
//# sourceMappingURL=network.min.js.map
