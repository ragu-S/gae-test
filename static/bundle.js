!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-o)/1e6},r=e.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,e("_process"))},{_process:2}],2:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function s(){y&&h&&(y=!1,h.length?m=h.concat(m):v=-1,m.length&&u())}function u(){if(!y){var e=i(s);y=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,y=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var f,d,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var h,m=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||y||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],3:[function(e,t,n){(function(n){for(var r=e("performance-now"),o="undefined"==typeof window?n:window,i=["moz","webkit"],a="AnimationFrame",s=o["request"+a],u=o["cancel"+a]||o["cancelRequest"+a],c=0;!s&&c<i.length;c++)s=o[i[c]+"Request"+a],u=o[i[c]+"Cancel"+a]||o[i[c]+"CancelRequest"+a];if(!s||!u){var l=0,f=0,d=[],p=1e3/60;s=function(e){if(0===d.length){var t=r(),n=Math.max(0,p-(t-l));l=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}t.exports=function(e){return s.call(o,e)},t.exports.cancel=function(){u.apply(o,arguments)},t.exports.polyfill=function(){o.requestAnimationFrame=s,o.cancelAnimationFrame=u}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":1}],4:[function(e,t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 11c.511-6.158 5.685-11 12-11s11.489 4.842 12 11h-2.009c-.506-5.046-4.793-9-9.991-9s-9.485 3.954-9.991 9h-2.009zm21.991 2c-.506 5.046-4.793 9-9.991 9s-9.485-3.954-9.991-9h-2.009c.511 6.158 5.685 11 12 11s11.489-4.842 12-11h-2.009z"/>\n</svg>'},{}],5:[function(e,t,n){t.exports='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 288 272.5" enable-background="new 0 0 288 272.5" xml:space="preserve">\n<g opacity="0.3">\n\t<path fill="#FFFFFF" d="M154.6,272.5H16.2c-8.9,0-16.2-7.3-16.2-16.2V139.1c0-8.9,7.3-16.2,16.2-16.2h123.2v2H16.2c-7.8,0-14.2,6.4-14.2,14.2v117.2c0,7.8,6.4,14.2,14.2,14.2h138.4V272.5z"/>\n\t<path fill="#FFFFFF" d="M16.6,223.9h-2.4c-1.7,0-3.2-1.4-3.2-3.2v-46.1c0-1.7,1.4-3.2,3.2-3.2h2.4c1.7,0,3.2,1.4,3.2,3.2v46.1C19.7,222.5,18.3,223.9,16.6,223.9z M14.2,173.6c-0.6,0-1.2,0.5-1.2,1.2v46.1c0,0.6,0.5,1.2,1.2,1.2h2.4c0.6,0,1.2-0.5,1.2-1.2v-46.1c0-0.6-0.5-1.2-1.2-1.2H14.2z"/>\n</g>\n<g>\n\t<path fill="#FFFFFF" d="M277.2,272.5h-128c-6,0-10.8-4.9-10.8-10.8V10.8c0-6,4.9-10.8,10.8-10.8h128c6,0,10.8,4.9,10.8,10.8v250.9C288,267.7,283.2,272.5,277.2,272.5z M149.2,2c-4.9,0-8.8,4-8.8,8.8v250.9c0,4.9,4,8.8,8.8,8.8h128c4.9,0,8.8-4,8.8-8.8V10.8c0-4.9-4-8.8-8.8-8.8H149.2z"/>\n\t<path fill="#FFFFFF" d="M227,259.9h-27.6c-2.9,0-5.2-2.4-5.2-5.2V250c0-2.9,2.4-5.2,5.2-5.2H227c2.9,0,5.2,2.4,5.2,5.2v4.6C232.2,257.6,229.9,259.9,227,259.9z M199.4,246.8c-1.8,0-3.2,1.5-3.2,3.2v4.6c0,1.8,1.5,3.2,3.2,3.2H227c1.8,0,3.2-1.5,3.2-3.2V250c0-1.8-1.5-3.2-3.2-3.2H199.4z"/>\n\t<path fill="#FFFFFF" d="M236.2,19.7h-46.1c-1.7,0-3.2-1.4-3.2-3.2v-2.4c0-1.7,1.4-3.2,3.2-3.2h46.1c1.7,0,3.2,1.4,3.2,3.2v2.4C239.4,18.3,238,19.7,236.2,19.7z M190.2,13.1c-0.6,0-1.2,0.5-1.2,1.2v2.4c0,0.6,0.5,1.2,1.2,1.2h46.1c0.6,0,1.2-0.5,1.2-1.2v-2.4c0-0.6-0.5-1.2-1.2-1.2H190.2z"/>\n</g>\n<path fill="#FFFFFF" d="M50.8,84.8h-2c0-24.4,19.8-44.2,44.2-44.2v2C69.8,42.6,50.8,61.5,50.8,84.8z"/>\n<polygon fill="#FFFFFF" points="87.6,49.3 86.2,47.8 92.5,41.6 86.2,35.3 87.6,33.9 95.3,41.6 "/>\n</svg>'},{}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.setAssets=n.setProgress=n.setReady=void 0;var o=e("./keys"),i=r(o);n.setReady=function(e){return{type:i.default.SET_READY,ready:e}},n.setProgress=function(e){return{type:i.default.SET_PROGRESS,progress:e}},n.setAssets=function(e){return{type:i.default.SET_ASSETS,assets:e}}},{"./keys":7}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={SET_READY:"SET_READY",SET_PROGRESS:"SET_PROGRESS",SET_ASSETS:"SET_ASSETS"}},{}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),c=r(u),l=e("../LiquidLoadingBar/LiquidLoadingBar"),f=r(l),d={headerTexts:"Are you ready to dunk your oreo cookie anywhere around the world",headerBoldWords:["dunk","oreo cookie","anywhere","world"],footerTexts:"Grab a cookie and visit us on your smartphone!",footerBoldWords:[""]},p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n._liquidLoadingBar.startPreloading(),n._liquidLoadingBar.setProgress(0)},n}return a(t,e),s(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"LandingDesktop"},c.default.createElement("select",{className:"dropdownMenu"},c.default.createElement("option",null,"English"),c.default.createElement("option",null,"French")),c.default.createElement("h1",null,d.headerTexts),c.default.createElement(f.default,{ref:function(t){return e._liquidLoadingBar=t},width:window.innerWidth,height:80,loaderText:d.footerTexts,animateInfinitely:!0}))}}]),t}(c.default.Component);n.default=p},{"../LiquidLoadingBar/LiquidLoadingBar":9,react:"react"}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("react"),f=r(l),d=e("raf"),p=(r(d),function(){}),h=(u=s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._animationStopped=!1,n._startingX=0,n._height=n.props.height,n._maxPeakY=n.props.peakAmplitude,n._maxPeakX=Math.round(n.props.width+n.props.wavelength),n._xIncrement=3,n._yIncrement=-1,n._wavelength=n.props.wavelength,n._yCurveIncrement=-1.5,n._levelY=n.props.height,n._endingY=n.props.height,n._endingX=Math.round(n.props.width+n.props.wavelength),n._peakX=n.props.wavelength,n._peakY=n.props.peakAmplitude,n._ocillationModifier=1,n.componentDidMount=function(){n._context=n._canvas.getContext("2d"),n.props.animateInfinitely&&(n.setProgress(0),n.createWaveAnimation())},n.createWaveAnimation=function(){},n.startPreloading=function(){n.createWaveAnimation()},n.setProgress=function(e){var t=0;e>0?(n._ocillationModifier=2,n._levelY=n._endingY,n._endingY=n._height*(1-e),n._endingY<n._maxPeakY/2&&(n._endingY=Math.round(n._maxPeakY/2)),t=Math.round(100*e)):(n._endingY=n._maxPeakY,n._levelY=n._endingY,t=100,n.props.animateInfinitely||setTimeout(function(){n._animationStopped=!0,n.props.onComplete(),n.hide()},1200)),n.setState({progress:t})},n.hide=function(e){n.setState({hidden:!0})},n.show=function(e){n.setState({hidden:!1})},n.state={hidden:!0,progress:0},n}return a(t,e),c(t,[{key:"componentDidUnmount",value:function(){}},{key:"render",value:function(){var e=this;return f.default.createElement("div",{className:"LiquidLoadingBar"},f.default.createElement("p",null,this.props.loaderText?this.props.loaderText:"Loading... "+this.state.progress+"%"),f.default.createElement("canvas",{width:this.props.width,height:this.props.height,ref:function(t){return e._canvas=t}}))}}]),t}(f.default.Component),s.defaultProps={width:window.innerWidth,height:80,wavelength:30,peakAmplitude:40,waveHorizontalIncrement:2,waveVerticalIncrement:-1,onComplete:p,setProgress:p,loaderText:"",animateInfinitely:!1},u);n.default=h},{raf:3,react:"react"}],10:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),f=e("react-f1"),d=r(f),p=e("./states"),h=r(p),m=e("./transitions"),y=r(m),v=e("preloader"),w=r(v),g=e("react-svg-inline"),b=r(g),_=e("../../../raw-assets/svg/loader.svg"),O=r(_),x=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onProgress=n.onProgress.bind(n),n.setDone=n.setDone.bind(n),n.state={state:"out"},n}return s(t,e),u(t,[{key:"componentWillMount",value:function(){this.props.setAssets([].concat(o(this.props.assets)))}},{key:"componentDidMount",value:function(){Promise.all([this.setTimer(),this.setLoader()]).then(this.setDone)}},{key:"componentWillAppear",value:function(e){this.animateIn(e)}},{key:"componentWillEnter",value:function(e){this.animateIn(e)}},{key:"componentWillLeave",value:function(e){this.animateOut(e)}},{key:"animateIn",value:function(e){this.setState({state:"idle",onComplete:e})}},{key:"animateOut",value:function(e){this.setState({state:"out",onComplete:e})}},{key:"setTimer",value:function(){var e=this;return new Promise(function(t,n){setTimeout(function(){t()},e.props.minDisplayTime)})}},{key:"setLoader",value:function(){var e=this;return new Promise(function(t,n){e.loader=(0,w.default)(e.props.options),e.props.assets.forEach(function(t){return e.add(t)}),e.loader.on("progress",e.onProgress),e.loader.on("complete",function(){return e.onComplete(t)}),e.load()})}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.loader.add(e,t)}},{key:"get",value:function(e){return this.loader.get(e)}},{key:"load",value:function(){this.loader.load()}},{key:"stopLoad",value:function(){this.loader.stopLoad()}},{key:"onProgress",value:function(e){this.props.setProgress(e)}},{key:"onComplete",value:function(e){this.props.setProgress(1),e()}},{key:"setDone",value:function(){this.props.setReady(!0)}},{key:"render",value:function(){var e=Object.assign({},this.props.style);return l.default.createElement(d.default,{id:"preloader","data-f1":"container",style:e,go:this.state.state,onComplete:this.state.onComplete,states:(0,h.default)(this.props),transitions:(0,y.default)(this.props)},l.default.createElement("div",{className:"loader-icon"},l.default.createElement(b.default,{svg:O.default})))}}]),t}(l.default.Component);x.propTypes={assets:l.default.PropTypes.array.isRequired,setProgress:l.default.PropTypes.func,setReady:l.default.PropTypes.func.isRequired,setAssets:l.default.PropTypes.func,windowWidth:l.default.PropTypes.number,windowHeight:l.default.PropTypes.number,style:l.default.PropTypes.object,minDisplayTime:l.default.PropTypes.number,options:l.default.PropTypes.object},x.defaultProps={setProgress:function(e){return e},setAssets:function(e){return e},assets:[],style:{},minDisplayTime:1500,options:{xhrImages:!1,loadFullAudio:!1,loadFullVideo:!1,onProgress:function(e){return e},onComplete:function(e){return e}}},n.default=x},{"../../../raw-assets/svg/loader.svg":4,"./states":11,"./transitions":12,preloader:"preloader",react:"react","react-f1":"react-f1","react-svg-inline":"react-svg-inline"}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return{out:{container:{style:{opacity:0}}},idle:{container:{style:{opacity:1}}}}}},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return[{from:"out",to:"idle",bi:!0,animation:{duration:.8}}]}},{}],13:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("react"),f=r(l),d=e("react-svg-inline"),p=r(d),h=e("../../../raw-assets/svg/rotate.svg"),m=r(h),y=(u=s=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return e.width!==this.props.width}},{key:"render",value:function(){var e=this.props.width>this.props.height,t={visibility:e?"visible":"hidden"};return f.default.createElement("div",{id:"rotate",style:t},f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:"rotate-icon"},f.default.createElement(p.default,{svg:m.default})),f.default.createElement("p",null,"Please rotate your device",f.default.createElement("br",null),"into portrait mode.")))}}]),t}(f.default.Component),s.propTypes={},u);n.default=y},{"../../../raw-assets/svg/rotate.svg":5,react:"react","react-svg-inline":"react-svg-inline"}],14:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=document.createElement("div");e.id="container",document.body.appendChild(e),document.body.className=(0,d.default)(document.body.className,h.default.classes),(0,s.render)(i.default.createElement(l.Provider,{store:y.default},i.default.createElement(u.Router,{history:x},i.default.createElement(u.Route,{path:"/",component:w.default},i.default.createElement(u.IndexRoute,{component:b.default}),i.default.createElement(u.Route,{path:"landing2",component:O.default})))),e)};var o=e("react"),i=r(o),a=e("react-addons-perf"),s=(r(a),e("react-dom")),u=e("react-router"),c=e("react-router-redux"),l=e("react-redux"),f=e("classnames"),d=r(f),p=e("../util/detect"),h=r(p),m=e("../store"),y=r(m),v=e("../sections/App"),w=r(v),g=e("../sections/Landing/Landing"),b=r(g),_=e("../sections/MainScreen/MainScreen"),O=r(_),x=(0,c.syncHistoryWithStore)(u.browserHistory,y.default)},{"../sections/App":18,"../sections/Landing/Landing":19,"../sections/MainScreen/MainScreen":22,"../store":25,"../util/detect":26,classnames:"classnames",react:"react","react-addons-perf":"react-addons-perf","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],15:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}e("babel-polyfill");var o=e("./framework"),i=r(o),a=e("domready"),s=r(a);(0,s.default)(i.default)},{"./framework":14,"./util/stats":29,"babel-polyfill":"babel-polyfill",domready:"domready"}],16:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.assets=n.ready=n.progress=void 0;var o=e("../actions/keys"),i=r(o),a=(n.progress=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments[1];switch(t.type){case i.default.SET_PROGRESS:return t.progress;default:return e}},n.ready=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];switch(t.type){case i.default.SET_READY:return t.ready;default:return e}},[]);n.assets=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case i.default.SET_ASSETS:return t.assets;default:return e}}},{"../actions/keys":7}],17:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),c=r(u),l=e("../../components/Preloader/Preloader"),f=r(l),d=e("../../components/Rotate/Rotate"),p=r(d),h=e("react-transition-group-plus"),m=r(h),y=e("../../util/detect"),v=r(y),w=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onResize=n.onResize.bind(n),n.state={width:960,height:570},n}return a(t,e),s(t,[{key:"onResize",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.onResize),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"getContent",value:function(){return this.props.ready?c.default.cloneElement(this.props.children,{key:this.props.section,width:this.state.width,height:this.state.height}):c.default.createElement(f.default,{assets:this.props.assets,setProgress:this.props.onProgress,setReady:this.props.onReady,setAssets:this.props.onSetAssets,windowWidth:this.state.width,windowHeight:this.state.height})}},{key:"render",value:function(){return c.default.createElement("div",{id:"app"},c.default.createElement(m.default,{id:"content",component:"div",transitionMode:"out-in"},this.getContent()),v.default.isPhone?c.default.createElement(p.default,{width:this.state.width,height:this.state.height}):void 0)}}]),t}(c.default.Component);w.defaultProps={assets:[],progress:0,ready:!1},n.default=w},{"../../components/Preloader/Preloader":10,"../../components/Rotate/Rotate":13,"../../util/detect":26,react:"react","react-transition-group-plus":"react-transition-group-plus"}],18:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s,u,c=e("react"),l=(r(c),e("react-redux")),f=e("./App"),d=r(f),p=e("../../actions/app"),h=function(e,t){var n=t.location.pathname.split("/").filter(Boolean)[0]||"landing";return{progress:e.progress,ready:e.ready,assets:e.assets,section:n}},m=function(e){return{onProgress:function(t){return e((0,p.setProgress)(t))},onReady:function(t){return e((0,p.setReady)(t))},onSetAssets:function(t){return e((0,p.setAssets)(t))}}},y=(s=(0,l.connect)(h,m,void 0,{withRef:!0}),s(u=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="App",n}return a(t,e),t}(d.default))||u);n.default=y},{"../../actions/app":6,"./App":17,react:"react","react-redux":"react-redux"}],19:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),c=r(u),l=e("./states"),f=(r(l),e("./transitions")),d=(r(f),e("../../util/detect")),p=r(d),h=e("../../components/LandingDesktop/LandingDesktop"),m=r(h),y=e("react-router"),v=(p.default.isDesktop,m.default),w=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={state:"out"},n}return a(t,e),s(t,[{key:"componentWillEnter",value:function(e){this.setState({state:"idle",onComplete:e})}},{key:"componentWillLeave",value:function(e){this.setState({state:"out",onComplete:e})}},{key:"render",value:function(){var e={width:window.innerWidth,height:window.innerHeight};return c.default.createElement("div",{id:"Landing",style:e},c.default.createElement(y.Link,{to:"landing2"}," Link "),c.default.createElement(v,null))}}]),t}(c.default.Component);w.defaultProps={},n.default=w},{"../../components/LandingDesktop/LandingDesktop":8,"../../util/detect":26,"./states":20,"./transitions":21,react:"react","react-router":"react-router"}],20:[function(e,t,n){arguments[4][11][0].apply(n,arguments)},{dup:11}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return[{from:"out",to:"idle",bi:!0,animation:{duration:1}}]}},{}],22:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=e("react"),c=r(u),l=e("./states"),f=(r(l),e("./transitions")),d=(r(f),e("../../util/detect")),p=r(d),h=e("../../components/LandingDesktop/LandingDesktop"),m=r(h),y=(p.default.isDesktop,m.default),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={state:"out"},n}return a(t,e),s(t,[{key:"componentWillEnter",value:function(e){this.setState({state:"idle",onComplete:e})}},{key:"componentWillLeave",value:function(e){this.setState({state:"out",onComplete:e})}},{key:"render",value:function(){var e={width:window.innerWidth,height:window.innerHeight};return c.default.createElement("div",{id:"Landing",style:e},c.default.createElement("p",null,"Landing 2"),c.default.createElement(y,null))}}]),t}(c.default.Component);v.defaultProps={},n.default=v},{"../../components/LandingDesktop/LandingDesktop":8,"../../util/detect":26,"./states":23,"./transitions":24,react:"react"}],23:[function(e,t,n){arguments[4][11][0].apply(n,arguments)},{dup:11}],24:[function(e,t,n){arguments[4][21][0].apply(n,arguments)},{dup:21}],25:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=e("redux"),s=e("react-router-redux"),u=e("redux-thunk"),c=o(u),l=e("../reducers/app"),f=r(l),d=(0,a.combineReducers)(i({},f,{routing:s.routerReducer}));n.default=(0,a.createStore)(d,!1,(0,a.applyMiddleware)(c.default))},{"../reducers/app":16,"react-router-redux":"react-router-redux",redux:"redux","redux-thunk":"redux-thunk"}],26:[function(e,t,n){"use strict";var r=e("mobile-detect"),o=navigator.userAgent,i=new r(o),a=e("./util-os"),s=e("./util-browser"),u="production",c=function(){var e="desktop";return i.mobile()&&i.phone()?e="phone":i.mobile()&&i.tablet()&&(e="tablet"),e},l=function(){return navigator.vendor?navigator.vendor.toLowerCase():""},f=function(){var e="unknown",t=o.toLowerCase(),n=t.indexOf("msie")>=0,r=t.indexOf("trident/")>=0;return n||r?e="ie":t.indexOf("firefox")>=0?e="firefox":t.indexOf("safari")>=0&&l().indexOf("apple")>=0||u.indexOf("dev")>=0&&t.indexOf("iphone")>=0&&t.indexOf("chrome")<0?e="safari":t.indexOf("chrome")>=0&&l().indexOf("google")>=0&&(e="chrome"),e},d=function(){var e=window.devicePixelRatio;return"iOS"===a.os()&&window.innerWidth>=375&&window.devicePixelRatio<3&&(e=3),e},p=function(){var e="unknown";return i.phone()?e=i.phone():i.tablet()&&(e=i.tablet()),e.toLowerCase()},h=function(){var e=[c(),"x"+d(),f(),s.checkVersion(),a.os().replace(/\s/g,"_").toLocaleLowerCase()];return i.mobile()&&e.push(p()),e.filter(function(e){return!!e})};t.exports={device:c(),vendor:l(),os:a.os(),osVersion:a.osVersion(),browser:f(),browserVersion:s.checkVersion(),manufacturer:p(),devicePixelRatio:d(),classes:h(),isMobile:!!i.mobile(),isPhone:!!i.phone(),isTablet:!!i.tablet(),isDesktop:!i.phone()&&!i.tablet(),isChrome:f().indexOf("chrome")>=0&&l().indexOf("google")>=0,isIE:!!(o.toLowerCase().indexOf("msie")>=0||o.toLowerCase().indexOf("trident/")>=0),isEdge:o.toLowerCase().indexOf("edge")>=0,isFirefox:f().indexOf("firefox")>=0,isSafari:f().indexOf("safari")>=0&&l().indexOf("apple")>=0,md:i,get orientation(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0),n=e/t;return n<1?"portrait":"landscape"}}},{"./util-browser":27,"./util-os":28,"mobile-detect":"mobile-detect"}],27:[function(e,t,n){"use strict";var r=navigator.userAgent.toLowerCase(),o=navigator.appVersion.toLowerCase(),i=navigator.vendor?navigator.vendor.toLowerCase():"";t.exports.checkIE=function(){var e=r.indexOf("msie")>=0,t=r.indexOf("trident/")>=0;return!(!e&&!t)},t.exports.checkFirefox=function(){return r.indexOf("firefox")>=0},t.exports.checkSafari=function(){return r.indexOf("safari")>=0&&i.indexOf("apple")>=0},t.exports.checkChrome=function(){return r.indexOf("chrome")>=0&&i.indexOf("google")>=0},t.exports.checkWindows=function(){return o.indexOf("win")>=0},t.exports.checkMac=function(){return o.indexOf("mac os x")>=0},t.exports.checkVersion=function(){var e,t=r.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(t[1])?(e=/\brv[ :]+(\d+)/g.exec(r)||[],
e[1]||""):"Chrome"===t[1]&&(e=r.match(/\bOPR\/(\d+)/),null!=e)?e[1]:(t=t[2]?[t[1],t[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=r.match(/version\/(\d+)/i))&&t.splice(1,1,e[1]),t[1])}},{}],28:[function(e,t,n){"use strict";var r=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}],o=navigator.userAgent,i=function(){var e;for(var t in r){var n=r[t];if(n.r.test(o)){e=n.s;break}}return e}(),a=function(){var e="Unknown";switch(/Windows/.test(i)&&(e=i.replace(/^Windows /,""),i="Windows"),i){case"Mac OS X":e=/Mac OS X (10[\.\_\d]+)/.exec(o)[1];break;case"Android":e=/Android ([\.\_\d]+)/.exec(o)[1];break;case"iOS":e=/OS (\d+)_(\d+)_?(\d+)?/.exec(o),e=e[1]+"."+e[2]+"."+(0|e[3])}return e}();t.exports.os=function(){return i},t.exports.osVersion=function(){return a}},{}],29:[function(e,t,n){"use strict";var r=e("stats.js");t.exports=function(){var e=new r;e.domElement.style.cssText="position:fixed;right:0;bottom:100px;z-index:10000",document.body.appendChild(e.domElement);var t=function t(){e.update(),requestAnimationFrame(t)};requestAnimationFrame(t)}},{"stats.js":"stats.js"}]},{},[15]);