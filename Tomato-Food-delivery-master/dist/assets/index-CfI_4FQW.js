function wI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var EI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kv={exports:{}},wu={},Nv={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),TI=Symbol.for("react.portal"),II=Symbol.for("react.fragment"),AI=Symbol.for("react.strict_mode"),SI=Symbol.for("react.profiler"),CI=Symbol.for("react.provider"),RI=Symbol.for("react.context"),PI=Symbol.for("react.forward_ref"),kI=Symbol.for("react.suspense"),NI=Symbol.for("react.memo"),xI=Symbol.for("react.lazy"),Im=Symbol.iterator;function OI(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Dv={};function fs(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||xv}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bv(){}bv.prototype=fs.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=Dv,this.updater=n||xv}var Ld=bd.prototype=new bv;Ld.constructor=bd;Ov(Ld,fs.prototype);Ld.isPureReactComponent=!0;var Am=Array.isArray,Lv=Object.prototype.hasOwnProperty,Vd={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lv.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zo,type:t,key:s,ref:o,props:i,_owner:Vd.current}}function DI(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function bI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sm=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bI(""+t.key):e.toString(36)}function nl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case TI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ac(o,0):r,Am(i)?(n="",t!=null&&(n=t.replace(Sm,"$&/")+"/"),nl(i,e,n,"",function(c){return c})):i!=null&&(Md(i)&&(i=DI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Am(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ac(s,a);o+=nl(s,e,n,u,i)}else if(u=OI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ac(s,a++),o+=nl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Da(t,e,n){if(t==null)return t;var r=[],i=0;return nl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},rl={transition:null},VI={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:rl,ReactCurrentOwner:Vd};function Fv(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=fs;se.Fragment=II;se.Profiler=SI;se.PureComponent=bd;se.StrictMode=AI;se.Suspense=kI;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VI;se.act=Fv;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ov({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Lv.call(e,u)&&!Vv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Zo,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:RI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CI,_context:t},t.Consumer=t};se.createElement=Mv;se.createFactory=function(t){var e=Mv.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:PI,render:t}};se.isValidElement=Md;se.lazy=function(t){return{$$typeof:xI,_payload:{_status:-1,_result:t},_init:LI}};se.memo=function(t,e){return{$$typeof:NI,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};se.unstable_act=Fv;se.useCallback=function(t,e){return yt.current.useCallback(t,e)};se.useContext=function(t){return yt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};se.useEffect=function(t,e){return yt.current.useEffect(t,e)};se.useId=function(){return yt.current.useId()};se.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return yt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};se.useRef=function(t){return yt.current.useRef(t)};se.useState=function(t){return yt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return yt.current.useTransition()};se.version="18.3.1";Nv.exports=se;var B=Nv.exports;const sr=Pv(B),MI=wI({__proto__:null,default:sr},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FI=B,jI=Symbol.for("react.element"),UI=Symbol.for("react.fragment"),zI=Object.prototype.hasOwnProperty,BI=FI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$I={key:!0,ref:!0,__self:!0,__source:!0};function jv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zI.call(e,r)&&!$I.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jI,type:t,key:s,ref:o,props:i,_owner:BI.current}}wu.Fragment=UI;wu.jsx=jv;wu.jsxs=jv;kv.exports=wu;var D=kv.exports,dh={},Uv={exports:{}},Dt={},zv={exports:{}},Bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,$){var U=W.length;W.push($);e:for(;0<U;){var J=U-1>>>1,q=W[J];if(0<i(q,$))W[J]=$,W[U]=q,U=J;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var $=W[0],U=W.pop();if(U!==$){W[0]=U;e:for(var J=0,q=W.length,fe=q>>>1;J<fe;){var V=2*(J+1)-1,Lt=W[V],Q=V+1,oe=W[Q];if(0>i(Lt,U))Q<q&&0>i(oe,Lt)?(W[J]=oe,W[Q]=U,J=Q):(W[J]=Lt,W[V]=U,J=V);else if(Q<q&&0>i(oe,U))W[J]=oe,W[Q]=U,J=Q;else break e}}return $}function i(W,$){var U=W.sortIndex-$.sortIndex;return U!==0?U:W.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,g=!1,v=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=W)r(c),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(c)}}function x(W){if(S=!1,I(W),!v)if(n(u)!==null)v=!0,ie(b);else{var $=n(c);$!==null&&Fe(x,$.startTime-W)}}function b(W,$){v=!1,S&&(S=!1,E(y),y=-1),g=!0;var U=m;try{for(I($),f=n(u);f!==null&&(!(f.expirationTime>$)||W&&!P());){var J=f.callback;if(typeof J=="function"){f.callback=null,m=f.priorityLevel;var q=J(f.expirationTime<=$);$=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(u)&&r(u),I($)}else r(u);f=n(u)}if(f!==null)var fe=!0;else{var V=n(c);V!==null&&Fe(x,V.startTime-$),fe=!1}return fe}finally{f=null,m=U,g=!1}}var M=!1,T=null,y=-1,A=5,C=-1;function P(){return!(t.unstable_now()-C<A)}function N(){if(T!==null){var W=t.unstable_now();C=W;var $=!0;try{$=T(!0,W)}finally{$?R():(M=!1,T=null)}}else M=!1}var R;if(typeof w=="function")R=function(){w(N)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ce=re.port2;re.port1.onmessage=N,R=function(){ce.postMessage(null)}}else R=function(){k(N,0)};function ie(W){T=W,M||(M=!0,R())}function Fe(W,$){y=k(function(){W(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ie(b))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var U=m;m=$;try{return W()}finally{m=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,$){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var U=m;m=W;try{return $()}finally{m=U}},t.unstable_scheduleCallback=function(W,$,U){var J=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?J+U:J):U=J,W){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=U+q,W={id:h++,callback:$,priorityLevel:W,startTime:U,expirationTime:q,sortIndex:-1},U>J?(W.sortIndex=U,e(c,W),n(u)===null&&W===n(c)&&(S?(E(y),y=-1):S=!0,Fe(x,U-J))):(W.sortIndex=q,e(u,W),v||g||(v=!0,ie(b))),W},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(W){var $=m;return function(){var U=m;m=$;try{return W.apply(this,arguments)}finally{m=U}}}})(Bv);zv.exports=Bv;var HI=zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WI=B,Ot=HI;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $v=new Set,Ao={};function ai(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(Ao[t]=e,t=0;t<e.length;t++)$v.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,qI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},Rm={};function KI(t){return fh.call(Rm,t)?!0:fh.call(Cm,t)?!1:qI.test(t)?Rm[t]=!0:(Cm[t]=!0,!1)}function GI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QI(t,e,n,r){if(e===null||typeof e>"u"||GI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fd=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fd,jd);tt[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fd,jd);tt[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fd,jd);tt[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ud(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QI(e,n,i,r)&&(n=null),r||i===null?KI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=WI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),Hv=Symbol.for("react.provider"),Wv=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),gh=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),qv=Symbol.for("react.offscreen"),Pm=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Sc;function Js(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Cc=!1;function Rc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function YI(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function yh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case ki:return"Portal";case ph:return"Profiler";case zd:return"StrictMode";case mh:return"Suspense";case gh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wv:return(t.displayName||"Context")+".Consumer";case Hv:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:yh(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return yh(t(e))}catch{}}return null}function JI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yh(e);case 8:return e===zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XI(t){var e=Kv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=XI(t))}function Gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vh(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qv(t,e){e=e.checked,e!=null&&Ud(t,"checked",e,!1)}function _h(t,e){Qv(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function Bi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Xs(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function Yv(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,Xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZI=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){ZI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function Zv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function e_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eA=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(t,e){if(e){if(eA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sh=null;function Hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ch=null,$i=null,Hi=null;function Dm(t){if(t=na(t)){if(typeof Ch!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Su(e),Ch(t.stateNode,t.type,e))}}function t_(t){$i?Hi?Hi.push(t):Hi=[t]:$i=t}function n_(){if($i){var t=$i,e=Hi;if(Hi=$i=null,Dm(t),e)for(t=0;t<e.length;t++)Dm(e[t])}}function r_(t,e){return t(e)}function i_(){}var Pc=!1;function s_(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return r_(t,e,n)}finally{Pc=!1,($i!==null||Hi!==null)&&(i_(),n_())}}function Co(t,e){var n=t.stateNode;if(n===null)return null;var r=Su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Rh=!1;if(On)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Rh=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Rh=!1}function tA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var lo=!1,Cl=null,Rl=!1,Ph=null,nA={onError:function(t){lo=!0,Cl=t}};function rA(t,e,n,r,i,s,o,a,u){lo=!1,Cl=null,tA.apply(nA,arguments)}function iA(t,e,n,r,i,s,o,a,u){if(rA.apply(this,arguments),lo){if(lo){var c=Cl;lo=!1,Cl=null}else throw Error(z(198));Rl||(Rl=!0,Ph=c)}}function li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bm(t){if(li(t)!==t)throw Error(z(188))}function sA(t){var e=t.alternate;if(!e){if(e=li(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bm(i),t;if(s===r)return bm(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function a_(t){return t=sA(t),t!==null?l_(t):null}function l_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l_(t);if(e!==null)return e;t=t.sibling}return null}var u_=Ot.unstable_scheduleCallback,Lm=Ot.unstable_cancelCallback,oA=Ot.unstable_shouldYield,aA=Ot.unstable_requestPaint,De=Ot.unstable_now,lA=Ot.unstable_getCurrentPriorityLevel,Wd=Ot.unstable_ImmediatePriority,c_=Ot.unstable_UserBlockingPriority,Pl=Ot.unstable_NormalPriority,uA=Ot.unstable_LowPriority,h_=Ot.unstable_IdlePriority,Eu=null,hn=null;function cA(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:fA,hA=Math.log,dA=Math.LN2;function fA(t){return t>>>=0,t===0?32:31-(hA(t)/dA|0)|0}var Ma=64,Fa=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zs(a):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function pA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=pA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d_(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function gA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function f_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p_,Kd,m_,g_,y_,Nh=!1,ja=[],or=null,ar=null,lr=null,Ro=new Map,Po=new Map,Qn=[],yA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=na(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vA(t,e,n,r,i){switch(e){case"focusin":return or=Ws(or,t,e,n,r,i),!0;case"dragenter":return ar=Ws(ar,t,e,n,r,i),!0;case"mouseover":return lr=Ws(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,Ws(Ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,Ws(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function v_(t){var e=$r(t.target);if(e!==null){var n=li(e);if(n!==null){if(e=n.tag,e===13){if(e=o_(n),e!==null){t.blockedOn=e,y_(t.priority,function(){m_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sh=r,n.target.dispatchEvent(r),Sh=null}else return e=na(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mm(t,e,n){il(t)&&n.delete(e)}function _A(){Nh=!1,or!==null&&il(or)&&(or=null),ar!==null&&il(ar)&&(ar=null),lr!==null&&il(lr)&&(lr=null),Ro.forEach(Mm),Po.forEach(Mm)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Nh||(Nh=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,_A)))}function ko(t){function e(i){return qs(i,t)}if(0<ja.length){qs(ja[0],t);for(var n=1;n<ja.length;n++){var r=ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&qs(or,t),ar!==null&&qs(ar,t),lr!==null&&qs(lr,t),Ro.forEach(e),Po.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)v_(n),n.blockedOn===null&&Qn.shift()}var Wi=Un.ReactCurrentBatchConfig,Nl=!0;function wA(t,e,n,r){var i=ye,s=Wi.transition;Wi.transition=null;try{ye=1,Gd(t,e,n,r)}finally{ye=i,Wi.transition=s}}function EA(t,e,n,r){var i=ye,s=Wi.transition;Wi.transition=null;try{ye=4,Gd(t,e,n,r)}finally{ye=i,Wi.transition=s}}function Gd(t,e,n,r){if(Nl){var i=xh(t,e,n,r);if(i===null)jc(t,e,r,xl,n),Vm(t,r);else if(vA(i,t,e,n,r))r.stopPropagation();else if(Vm(t,r),e&4&&-1<yA.indexOf(t)){for(;i!==null;){var s=na(i);if(s!==null&&p_(s),s=xh(t,e,n,r),s===null&&jc(t,e,r,xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jc(t,e,r,null,n)}}var xl=null;function xh(t,e,n,r){if(xl=null,t=Hd(r),t=$r(t),t!==null)if(e=li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function __(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lA()){case Wd:return 1;case c_:return 4;case Pl:case uA:return 16;case h_:return 536870912;default:return 16}default:return 16}}var tr=null,Qd=null,sl=null;function w_(){if(sl)return sl;var t,e=Qd,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return sl=i.slice(t,1<r?1-r:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function Fm(){return!1}function bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:Fm,this.isPropagationStopped=Fm,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=bt(ps),ta=Re({},ps,{view:0,detail:0}),TA=bt(ta),Nc,xc,Ks,Tu=Re({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(Nc=t.screenX-Ks.screenX,xc=t.screenY-Ks.screenY):xc=Nc=0,Ks=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),jm=bt(Tu),IA=Re({},Tu,{dataTransfer:0}),AA=bt(IA),SA=Re({},ta,{relatedTarget:0}),Oc=bt(SA),CA=Re({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),RA=bt(CA),PA=Re({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kA=bt(PA),NA=Re({},ps,{data:0}),Um=bt(NA),xA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DA[t])?!!e[t]:!1}function Jd(){return bA}var LA=Re({},ta,{key:function(t){if(t.key){var e=xA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VA=bt(LA),MA=Re({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=bt(MA),FA=Re({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),jA=bt(FA),UA=Re({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),zA=bt(UA),BA=Re({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$A=bt(BA),HA=[9,13,27,32],Xd=On&&"CompositionEvent"in window,uo=null;On&&"documentMode"in document&&(uo=document.documentMode);var WA=On&&"TextEvent"in window&&!uo,E_=On&&(!Xd||uo&&8<uo&&11>=uo),Bm=" ",$m=!1;function T_(t,e){switch(t){case"keyup":return HA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function qA(t,e){switch(t){case"compositionend":return I_(e);case"keypress":return e.which!==32?null:($m=!0,Bm);case"textInput":return t=e.data,t===Bm&&$m?null:t;default:return null}}function KA(t,e){if(xi)return t==="compositionend"||!Xd&&T_(t,e)?(t=w_(),sl=Qd=tr=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E_&&e.locale!=="ko"?null:e.data;default:return null}}var GA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GA[t.type]:e==="textarea"}function A_(t,e,n,r){t_(r),e=Ol(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var co=null,No=null;function QA(t){L_(t,0)}function Iu(t){var e=bi(t);if(Gv(e))return t}function YA(t,e){if(t==="change")return e}var S_=!1;if(On){var Dc;if(On){var bc="oninput"in document;if(!bc){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),bc=typeof Wm.oninput=="function"}Dc=bc}else Dc=!1;S_=Dc&&(!document.documentMode||9<document.documentMode)}function qm(){co&&(co.detachEvent("onpropertychange",C_),No=co=null)}function C_(t){if(t.propertyName==="value"&&Iu(No)){var e=[];A_(e,No,t,Hd(t)),s_(QA,e)}}function JA(t,e,n){t==="focusin"?(qm(),co=e,No=n,co.attachEvent("onpropertychange",C_)):t==="focusout"&&qm()}function XA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(No)}function ZA(t,e){if(t==="click")return Iu(e)}function eS(t,e){if(t==="input"||t==="change")return Iu(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:tS;function xo(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fh.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Km(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P_(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function Zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=P_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R_(n.ownerDocument.documentElement,n)){if(r!==null&&Zd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gm(n,s);var o=Gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rS=On&&"documentMode"in document&&11>=document.documentMode,Oi=null,Oh=null,ho=null,Dh=!1;function Qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dh||Oi==null||Oi!==Sl(r)||(r=Oi,"selectionStart"in r&&Zd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&xo(ho,r)||(ho=r,r=Ol(Oh,"onSelect"),0<r.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},Lc={},k_={};On&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Au(t){if(Lc[t])return Lc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return Lc[t]=e[n];return t}var N_=Au("animationend"),x_=Au("animationiteration"),O_=Au("animationstart"),D_=Au("transitionend"),b_=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){b_.set(t,e),ai(e,[t])}for(var Vc=0;Vc<Ym.length;Vc++){var Mc=Ym[Vc],iS=Mc.toLowerCase(),sS=Mc[0].toUpperCase()+Mc.slice(1);kr(iS,"on"+sS)}kr(N_,"onAnimationEnd");kr(x_,"onAnimationIteration");kr(O_,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(D_,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Jm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iA(r,e,void 0,t),t.currentTarget=null}function L_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Jm(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Jm(i,a,c),s=u}}}if(Rl)throw t=Ph,Rl=!1,Ph=null,t}function Ee(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var r=t+"__bubble";n.has(r)||(V_(e,t,2,!1),n.add(r))}function Fc(t,e,n){var r=0;e&&(r|=4),V_(n,t,r,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Ba]){t[Ba]=!0,$v.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,Fc("selectionchange",!1,e))}}function V_(t,e,n,r){switch(__(e)){case 1:var i=wA;break;case 4:i=EA;break;default:i=Gd}n=i.bind(null,e,n,t),i=void 0,!Rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s_(function(){var c=s,h=Hd(n),f=[];e:{var m=b_.get(t);if(m!==void 0){var g=Yd,v=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":g=VA;break;case"focusin":v="focus",g=Oc;break;case"focusout":v="blur",g=Oc;break;case"beforeblur":case"afterblur":g=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=AA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jA;break;case N_:case x_:case O_:g=RA;break;case D_:g=zA;break;case"scroll":g=TA;break;case"wheel":g=$A;break;case"copy":case"cut":case"paste":g=kA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zm}var S=(e&4)!==0,k=!S&&t==="scroll",E=S?m!==null?m+"Capture":null:m;S=[];for(var w=c,I;w!==null;){I=w;var x=I.stateNode;if(I.tag===5&&x!==null&&(I=x,E!==null&&(x=Co(w,E),x!=null&&S.push(Do(w,x,I)))),k)break;w=w.return}0<S.length&&(m=new g(m,v,null,n,h),f.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Sh&&(v=n.relatedTarget||n.fromElement)&&($r(v)||v[Dn]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?$r(v):null,v!==null&&(k=li(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(S=jm,x="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(S=zm,x="onPointerLeave",E="onPointerEnter",w="pointer"),k=g==null?m:bi(g),I=v==null?m:bi(v),m=new S(x,w+"leave",g,n,h),m.target=k,m.relatedTarget=I,x=null,$r(h)===c&&(S=new S(E,w+"enter",v,n,h),S.target=I,S.relatedTarget=k,x=S),k=x,g&&v)t:{for(S=g,E=v,w=0,I=S;I;I=Ai(I))w++;for(I=0,x=E;x;x=Ai(x))I++;for(;0<w-I;)S=Ai(S),w--;for(;0<I-w;)E=Ai(E),I--;for(;w--;){if(S===E||E!==null&&S===E.alternate)break t;S=Ai(S),E=Ai(E)}S=null}else S=null;g!==null&&Xm(f,m,g,S,!1),v!==null&&k!==null&&Xm(f,k,v,S,!0)}}e:{if(m=c?bi(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var b=YA;else if(Hm(m))if(S_)b=eS;else{b=XA;var M=JA}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=ZA);if(b&&(b=b(t,c))){A_(f,b,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&wh(m,"number",m.value)}switch(M=c?bi(c):window,t){case"focusin":(Hm(M)||M.contentEditable==="true")&&(Oi=M,Oh=c,ho=null);break;case"focusout":ho=Oh=Oi=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,Qm(f,n,h);break;case"selectionchange":if(rS)break;case"keydown":case"keyup":Qm(f,n,h)}var T;if(Xd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else xi?T_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(E_&&n.locale!=="ko"&&(xi||y!=="onCompositionStart"?y==="onCompositionEnd"&&xi&&(T=w_()):(tr=h,Qd="value"in tr?tr.value:tr.textContent,xi=!0)),M=Ol(c,y),0<M.length&&(y=new Um(y,t,null,n,h),f.push({event:y,listeners:M}),T?y.data=T:(T=I_(n),T!==null&&(y.data=T)))),(T=WA?qA(t,n):KA(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(h=new Um("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}L_(f,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Co(t,n),s!=null&&r.unshift(Do(t,s,i)),s=Co(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Co(n,s),u!=null&&o.unshift(Do(n,u,a))):i||(u=Co(n,s),u!=null&&o.push(Do(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Zm(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function $a(t,e,n){if(e=Zm(e),Zm(t)!==e&&n)throw Error(z(425))}function Dl(){}var bh=null,Lh=null;function Vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mh=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(t){return eg.resolve(null).then(t).catch(hS)}:Mh;function hS(t){setTimeout(function(){throw t})}function Uc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ko(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),cn="__reactFiber$"+ms,bo="__reactProps$"+ms,Dn="__reactContainer$"+ms,Fh="__reactEvents$"+ms,dS="__reactListeners$"+ms,fS="__reactHandles$"+ms;function $r(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tg(t);t!==null;){if(n=t[cn])return n;t=tg(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[cn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Su(t){return t[bo]||null}var jh=[],Li=-1;function Nr(t){return{current:t}}function Ie(t){0>Li||(t.current=jh[Li],jh[Li]=null,Li--)}function _e(t,e){Li++,jh[Li]=t.current,t.current=e}var Er={},dt=Nr(Er),Tt=Nr(!1),Jr=Er;function Zi(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function bl(){Ie(Tt),Ie(dt)}function ng(t,e,n){if(dt.current!==Er)throw Error(z(168));_e(dt,e),_e(Tt,n)}function M_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,JI(t)||"Unknown",i));return Re({},n,r)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Jr=dt.current,_e(dt,t),_e(Tt,Tt.current),!0}function rg(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=M_(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,Ie(Tt),Ie(dt),_e(dt,t)):Ie(Tt),_e(Tt,n)}var An=null,Cu=!1,zc=!1;function F_(t){An===null?An=[t]:An.push(t)}function pS(t){Cu=!0,F_(t)}function xr(){if(!zc&&An!==null){zc=!0;var t=0,e=ye;try{var n=An;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,Cu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),u_(Wd,xr),i}finally{ye=e,zc=!1}}return null}var Vi=[],Mi=0,Vl=null,Ml=0,Vt=[],Mt=0,Xr=null,Sn=1,Cn="";function Ur(t,e){Vi[Mi++]=Ml,Vi[Mi++]=Vl,Vl=t,Ml=e}function j_(t,e,n){Vt[Mt++]=Sn,Vt[Mt++]=Cn,Vt[Mt++]=Xr,Xr=t;var r=Sn;t=Cn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Jt(e)+i|n<<i|r,Cn=s+t}else Sn=1<<s|n<<i|r,Cn=t}function ef(t){t.return!==null&&(Ur(t,1),j_(t,1,0))}function tf(t){for(;t===Vl;)Vl=Vi[--Mi],Vi[Mi]=null,Ml=Vi[--Mi],Vi[Mi]=null;for(;t===Xr;)Xr=Vt[--Mt],Vt[Mt]=null,Cn=Vt[--Mt],Vt[Mt]=null,Sn=Vt[--Mt],Vt[Mt]=null}var kt=null,Pt=null,Ae=!1,Gt=null;function U_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Pt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Sn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Pt=null,!0):!1;default:return!1}}function Uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zh(t){if(Ae){var e=Pt;if(e){var n=e;if(!ig(t,e)){if(Uh(t))throw Error(z(418));e=ur(n.nextSibling);var r=kt;e&&ig(t,e)?U_(r,n):(t.flags=t.flags&-4097|2,Ae=!1,kt=t)}}else{if(Uh(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ae=!1,kt=t}}}function sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Ha(t){if(t!==kt)return!1;if(!Ae)return sg(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vh(t.type,t.memoizedProps)),e&&(e=Pt)){if(Uh(t))throw z_(),Error(z(418));for(;e;)U_(t,e),e=ur(e.nextSibling)}if(sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=kt?ur(t.stateNode.nextSibling):null;return!0}function z_(){for(var t=Pt;t;)t=ur(t.nextSibling)}function es(){Pt=kt=null,Ae=!1}function nf(t){Gt===null?Gt=[t]:Gt.push(t)}var mS=Un.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function og(t){var e=t._init;return e(t._payload)}function B_(t){function e(E,w){if(t){var I=E.deletions;I===null?(E.deletions=[w],E.flags|=16):I.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=fr(E,w),E.index=0,E.sibling=null,E}function s(E,w,I){return E.index=I,t?(I=E.alternate,I!==null?(I=I.index,I<w?(E.flags|=2,w):I):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,I,x){return w===null||w.tag!==6?(w=Gc(I,E.mode,x),w.return=E,w):(w=i(w,I),w.return=E,w)}function u(E,w,I,x){var b=I.type;return b===Ni?h(E,w,I.props.children,x,I.key):w!==null&&(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&og(b)===w.type)?(x=i(w,I.props),x.ref=Gs(E,w,I),x.return=E,x):(x=fl(I.type,I.key,I.props,null,E.mode,x),x.ref=Gs(E,w,I),x.return=E,x)}function c(E,w,I,x){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=Qc(I,E.mode,x),w.return=E,w):(w=i(w,I.children||[]),w.return=E,w)}function h(E,w,I,x,b){return w===null||w.tag!==7?(w=Qr(I,E.mode,x,b),w.return=E,w):(w=i(w,I),w.return=E,w)}function f(E,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Gc(""+w,E.mode,I),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ba:return I=fl(w.type,w.key,w.props,null,E.mode,I),I.ref=Gs(E,null,w),I.return=E,I;case ki:return w=Qc(w,E.mode,I),w.return=E,w;case Kn:var x=w._init;return f(E,x(w._payload),I)}if(Xs(w)||$s(w))return w=Qr(w,E.mode,I,null),w.return=E,w;Wa(E,w)}return null}function m(E,w,I,x){var b=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return b!==null?null:a(E,w,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ba:return I.key===b?u(E,w,I,x):null;case ki:return I.key===b?c(E,w,I,x):null;case Kn:return b=I._init,m(E,w,b(I._payload),x)}if(Xs(I)||$s(I))return b!==null?null:h(E,w,I,x,null);Wa(E,I)}return null}function g(E,w,I,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return E=E.get(I)||null,a(w,E,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ba:return E=E.get(x.key===null?I:x.key)||null,u(w,E,x,b);case ki:return E=E.get(x.key===null?I:x.key)||null,c(w,E,x,b);case Kn:var M=x._init;return g(E,w,I,M(x._payload),b)}if(Xs(x)||$s(x))return E=E.get(I)||null,h(w,E,x,b,null);Wa(w,x)}return null}function v(E,w,I,x){for(var b=null,M=null,T=w,y=w=0,A=null;T!==null&&y<I.length;y++){T.index>y?(A=T,T=null):A=T.sibling;var C=m(E,T,I[y],x);if(C===null){T===null&&(T=A);break}t&&T&&C.alternate===null&&e(E,T),w=s(C,w,y),M===null?b=C:M.sibling=C,M=C,T=A}if(y===I.length)return n(E,T),Ae&&Ur(E,y),b;if(T===null){for(;y<I.length;y++)T=f(E,I[y],x),T!==null&&(w=s(T,w,y),M===null?b=T:M.sibling=T,M=T);return Ae&&Ur(E,y),b}for(T=r(E,T);y<I.length;y++)A=g(T,E,y,I[y],x),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?y:A.key),w=s(A,w,y),M===null?b=A:M.sibling=A,M=A);return t&&T.forEach(function(P){return e(E,P)}),Ae&&Ur(E,y),b}function S(E,w,I,x){var b=$s(I);if(typeof b!="function")throw Error(z(150));if(I=b.call(I),I==null)throw Error(z(151));for(var M=b=null,T=w,y=w=0,A=null,C=I.next();T!==null&&!C.done;y++,C=I.next()){T.index>y?(A=T,T=null):A=T.sibling;var P=m(E,T,C.value,x);if(P===null){T===null&&(T=A);break}t&&T&&P.alternate===null&&e(E,T),w=s(P,w,y),M===null?b=P:M.sibling=P,M=P,T=A}if(C.done)return n(E,T),Ae&&Ur(E,y),b;if(T===null){for(;!C.done;y++,C=I.next())C=f(E,C.value,x),C!==null&&(w=s(C,w,y),M===null?b=C:M.sibling=C,M=C);return Ae&&Ur(E,y),b}for(T=r(E,T);!C.done;y++,C=I.next())C=g(T,E,y,C.value,x),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?y:C.key),w=s(C,w,y),M===null?b=C:M.sibling=C,M=C);return t&&T.forEach(function(N){return e(E,N)}),Ae&&Ur(E,y),b}function k(E,w,I,x){if(typeof I=="object"&&I!==null&&I.type===Ni&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ba:e:{for(var b=I.key,M=w;M!==null;){if(M.key===b){if(b=I.type,b===Ni){if(M.tag===7){n(E,M.sibling),w=i(M,I.props.children),w.return=E,E=w;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&og(b)===M.type){n(E,M.sibling),w=i(M,I.props),w.ref=Gs(E,M,I),w.return=E,E=w;break e}n(E,M);break}else e(E,M);M=M.sibling}I.type===Ni?(w=Qr(I.props.children,E.mode,x,I.key),w.return=E,E=w):(x=fl(I.type,I.key,I.props,null,E.mode,x),x.ref=Gs(E,w,I),x.return=E,E=x)}return o(E);case ki:e:{for(M=I.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(E,w.sibling),w=i(w,I.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Qc(I,E.mode,x),w.return=E,E=w}return o(E);case Kn:return M=I._init,k(E,w,M(I._payload),x)}if(Xs(I))return v(E,w,I,x);if($s(I))return S(E,w,I,x);Wa(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,I),w.return=E,E=w):(n(E,w),w=Gc(I,E.mode,x),w.return=E,E=w),o(E)):n(E,w)}return k}var ts=B_(!0),$_=B_(!1),Fl=Nr(null),jl=null,Fi=null,rf=null;function sf(){rf=Fi=jl=null}function of(t){var e=Fl.current;Ie(Fl),t._currentValue=e}function Bh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){jl=t,rf=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(rf!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(jl===null)throw Error(z(308));Fi=t,jl.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Hr=null;function af(t){Hr===null?Hr=[t]:Hr.push(t)}function H_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,af(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,af(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}function ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,g=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(m=e,g=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){f=v.call(g,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,m=typeof v=="function"?v.call(g,f,m):v,m==null)break e;f=Re({},f,m);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,u=f):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=f}}function lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ra={},dn=Nr(ra),Lo=Nr(ra),Vo=Nr(ra);function Wr(t){if(t===ra)throw Error(z(174));return t}function uf(t,e){switch(_e(Vo,e),_e(Lo,t),_e(dn,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Th(e,t)}Ie(dn),_e(dn,e)}function ns(){Ie(dn),Ie(Lo),Ie(Vo)}function q_(t){Wr(Vo.current);var e=Wr(dn.current),n=Th(e,t.type);e!==n&&(_e(Lo,t),_e(dn,n))}function cf(t){Lo.current===t&&(Ie(dn),Ie(Lo))}var Se=Nr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function hf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var ll=Un.ReactCurrentDispatcher,$c=Un.ReactCurrentBatchConfig,Zr=0,Ce=null,je=null,Ke=null,Bl=!1,fo=!1,Mo=0,gS=0;function ot(){throw Error(z(321))}function df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function ff(t,e,n,r,i,s){if(Zr=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?wS:ES,t=n(r,i),fo){s=0;do{if(fo=!1,Mo=0,25<=s)throw Error(z(301));s+=1,Ke=je=null,e.updateQueue=null,ll.current=TS,t=n(r,i)}while(fo)}if(ll.current=$l,e=je!==null&&je.next!==null,Zr=0,Ke=je=Ce=null,Bl=!1,e)throw Error(z(300));return t}function pf(){var t=Mo!==0;return Mo=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ce.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function $t(){if(je===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ke===null?Ce.memoizedState:Ke.next;if(e!==null)Ke=e,je=t;else{if(t===null)throw Error(z(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ke===null?Ce.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Fo(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=$t(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Zr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ce.lanes|=h,ei|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Zt(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wc(t){var e=$t(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K_(){}function G_(t,e){var n=Ce,r=$t(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,mf(J_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,jo(9,Y_.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(z(349));Zr&30||Q_(n,e,i)}return i}function Q_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y_(t,e,n,r){e.value=n,e.getSnapshot=r,X_(e)&&Z_(t)}function J_(t,e,n){return n(function(){X_(e)&&Z_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function Z_(t){var e=bn(t,1);e!==null&&Xt(e,t,1,-1)}function ug(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=_S.bind(null,Ce,t),[e.memoizedState,t]}function jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ew(){return $t().memoizedState}function ul(t,e,n,r){var i=ln();Ce.flags|=t,i.memoizedState=jo(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&df(r,o.deps)){i.memoizedState=jo(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=jo(1|e,n,s,r)}function cg(t,e){return ul(8390656,8,t,e)}function mf(t,e){return Ru(2048,8,t,e)}function tw(t,e){return Ru(4,2,t,e)}function nw(t,e){return Ru(4,4,t,e)}function rw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iw(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,rw.bind(null,e,t),n)}function gf(){}function sw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&df(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ow(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&df(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aw(t,e,n){return Zr&21?(Zt(n,e)||(n=d_(),Ce.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function yS(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=$c.transition;$c.transition={};try{t(!1),e()}finally{ye=n,$c.transition=r}}function lw(){return $t().memoizedState}function vS(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uw(t))cw(e,n);else if(n=H_(t,e,n,r),n!==null){var i=gt();Xt(n,t,r,i),hw(n,e,r)}}function _S(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uw(t))cw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Zt(a,o)){var u=e.interleaved;u===null?(i.next=i,af(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=H_(t,e,i,r),n!==null&&(i=gt(),Xt(n,t,r,i),hw(n,e,r))}}function uw(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function cw(t,e){fo=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}var $l={readContext:Bt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},wS={readContext:Bt,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,rw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vS.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:ug,useDebugValue:gf,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=ug(!1),e=t[0];return t=yS.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=ln();if(Ae){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ge===null)throw Error(z(349));Zr&30||Q_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cg(J_.bind(null,r,s,t),[t]),r.flags|=2048,jo(9,Y_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Ge.identifierPrefix;if(Ae){var n=Cn,r=Sn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ES={readContext:Bt,useCallback:sw,useContext:Bt,useEffect:mf,useImperativeHandle:iw,useInsertionEffect:tw,useLayoutEffect:nw,useMemo:ow,useReducer:Hc,useRef:ew,useState:function(){return Hc(Fo)},useDebugValue:gf,useDeferredValue:function(t){var e=$t();return aw(e,je.memoizedState,t)},useTransition:function(){var t=Hc(Fo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:G_,useId:lw,unstable_isNewReconciler:!1},TS={readContext:Bt,useCallback:sw,useContext:Bt,useEffect:mf,useImperativeHandle:iw,useInsertionEffect:tw,useLayoutEffect:nw,useMemo:ow,useReducer:Wc,useRef:ew,useState:function(){return Wc(Fo)},useDebugValue:gf,useDeferredValue:function(t){var e=$t();return je===null?e.memoizedState=t:aw(e,je.memoizedState,t)},useTransition:function(){var t=Wc(Fo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:G_,useId:lw,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=dr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Xt(e,t,i,r),al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=dr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Xt(e,t,i,r),al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=dr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(Xt(e,t,r,n),al(e,t,r))}};function hg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function dw(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=It(e)?Jr:dt.current,r=e.contextTypes,s=(r=r!=null)?Zi(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Hh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},lf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=It(e)?Jr:dt.current,i.context=Zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pu.enqueueReplaceState(i,i.state,null),Ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e){try{var n="",r=e;do n+=YI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IS=typeof WeakMap=="function"?WeakMap:Map;function fw(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wl||(Wl=!0,td=r),Wh(t,e)},n}function pw(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wh(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var AS=Un.ReactCurrentOwner,Et=!1;function mt(t,e,n,r){e.child=t===null?$_(e,null,n,r):ts(e,t.child,n,r)}function gg(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=ff(t,e,n,r,s,i),n=pf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Ae&&n&&ef(e),e.flags|=1,mt(t,e,r,i),e.child)}function yg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mw(t,e,s,r,i)):(t=fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return qh(t,e,n,r,i)}function gw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Ui,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Ui,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Ui,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Ui,Rt),Rt|=r;return mt(t,e,i,n),e.child}function yw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qh(t,e,n,r,i){var s=It(n)?Jr:dt.current;return s=Zi(e,s),qi(e,i),n=ff(t,e,n,r,s,i),r=pf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Ae&&r&&ef(e),e.flags|=1,mt(t,e,n,i),e.child)}function vg(t,e,n,r,i){if(It(n)){var s=!0;Ll(e)}else s=!1;if(qi(e,i),e.stateNode===null)cl(t,e),dw(e,n,r),Hh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=It(n)?Jr:dt.current,c=Zi(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&dg(e,o,r,c),Gn=!1;var m=e.memoizedState;o.state=m,Ul(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Tt.current||Gn?(typeof h=="function"&&($h(e,n,h,r),u=e.memoizedState),(a=Gn||hg(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qt(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=It(n)?Jr:dt.current,u=Zi(e,u));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&dg(e,o,r,u),Gn=!1,m=e.memoizedState,o.state=m,Ul(e,r,o,i);var v=e.memoizedState;a!==f||m!==v||Tt.current||Gn?(typeof g=="function"&&($h(e,n,g,r),v=e.memoizedState),(c=Gn||hg(e,n,c,r,m,v,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Kh(t,e,n,r,s,i)}function Kh(t,e,n,r,i,s){yw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rg(e,n,!1),Ln(t,e,s);r=e.stateNode,AS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ts(e,t.child,null,s),e.child=ts(e,null,a,s)):mt(t,e,a,s),e.memoizedState=r.state,i&&rg(e,n,!0),e.child}function vw(t){var e=t.stateNode;e.pendingContext?ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ng(t,e.context,!1),uf(t,e.containerInfo)}function _g(t,e,n,r,i){return es(),nf(i),e.flags|=256,mt(t,e,n,r),e.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function _w(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Se,i&1),t===null)return zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qh(n),e.memoizedState=Gh,t):yf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return SS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gh,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yf(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,r){return r!==null&&nf(r),ts(e,t.child,null,n),t=yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qc(Error(z(422))),qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ts(e,t.child,null,o),e.child.memoizedState=Qh(o),e.memoizedState=Gh,s);if(!(e.mode&1))return qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=qc(s,r,void 0),qa(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Xt(r,t,i,-1))}return If(),r=qc(Error(z(421))),qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=ur(i.nextSibling),kt=e,Ae=!0,Gt=null,t!==null&&(Vt[Mt++]=Sn,Vt[Mt++]=Cn,Vt[Mt++]=Xr,Sn=t.id,Cn=t.overflow,Xr=e),e=yf(e,r.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bh(t.return,e,n)}function Kc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ww(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CS(t,e,n){switch(e.tag){case 3:vw(e),es();break;case 5:q_(e);break;case 1:It(e.type)&&Ll(e);break;case 4:uf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Fl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?_w(t,e,n):(_e(Se,Se.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);_e(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ww(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,gw(t,e,n)}return Ln(t,e,n)}var Ew,Yh,Tw,Iw;Ew=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yh=function(){};Tw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(dn.current);var s=null;switch(n){case"input":i=vh(t,i),r=vh(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Eh(t,i),r=Eh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dl)}Ih(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ee("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Iw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qs(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RS(t,e,n){var r=e.pendingProps;switch(tf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return It(e.type)&&bl(),at(e),null;case 3:return r=e.stateNode,ns(),Ie(Tt),Ie(dt),hf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(id(Gt),Gt=null))),Yh(t,e),at(e),null;case 5:cf(e);var i=Wr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Tw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return at(e),null}if(t=Wr(dn.current),Ha(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[bo]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)Ee(eo[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":km(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":xm(r,s),Ee("invalid",r)}Ih(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$a(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$a(r.textContent,a,t),i=["children",""+a]):Ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":La(r),Nm(r,s,!0);break;case"textarea":La(r),Om(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Dl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[bo]=r,Ew(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ah(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)Ee(eo[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":km(t,r),i=vh(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":xm(t,r),i=Eh(t,r),Ee("invalid",t);break;default:i=r}Ih(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?e_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&So(t,u):typeof u=="number"&&So(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&Ud(t,s,u,o))}switch(n){case"input":La(t),Nm(t,r,!1);break;case"textarea":La(t),Om(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)Iw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Wr(Vo.current),Wr(dn.current),Ha(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:$a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return at(e),null;case 13:if(Ie(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Pt!==null&&e.mode&1&&!(e.flags&128))z_(),es(),e.flags|=98560,s=!1;else if(s=Ha(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[cn]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else Gt!==null&&(id(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Ue===0&&(Ue=3):If())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return ns(),Yh(t,e),t===null&&Oo(e.stateNode.containerInfo),at(e),null;case 10:return of(e.type._context),at(e),null;case 17:return It(e.type)&&bl(),at(e),null;case 19:if(Ie(Se),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qs(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zl(t),o!==null){for(e.flags|=128,Qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>is&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=zl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return at(e),null}else 2*De()-s.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Se.current,_e(Se,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function PS(t,e){switch(tf(e),e.tag){case 1:return It(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),Ie(Tt),Ie(dt),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cf(e),null;case 13:if(Ie(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Se),null;case 4:return ns(),null;case 10:return of(e.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var Ka=!1,ct=!1,kS=typeof WeakSet=="function"?WeakSet:Set,G=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Jh(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Eg=!1;function NS(t,e){if(bh=Nl,t=P_(),Zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},Nl=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,k=v.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?S:qt(e.type,S),k);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){Ne(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return v=Eg,Eg=!1,v}function po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jh(e,n,s)}i=i.next}while(i!==r)}}function ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Aw(t){var e=t.alternate;e!==null&&(t.alternate=null,Aw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[bo],delete e[Fh],delete e[dS],delete e[fS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sw(t){return t.tag===5||t.tag===3||t.tag===4}function Tg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(r!==4&&(t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var Je=null,Kt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)Cw(t,e,n),n=n.sibling}function Cw(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Eu,n)}catch{}switch(n.tag){case 5:ct||ji(n,e);case 6:var r=Je,i=Kt;Je=null,Wn(t,e,n),Je=r,Kt=i,Je!==null&&(Kt?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Kt?(t=Je,n=n.stateNode,t.nodeType===8?Uc(t.parentNode,n):t.nodeType===1&&Uc(t,n),ko(t)):Uc(Je,n.stateNode));break;case 4:r=Je,i=Kt,Je=n.stateNode.containerInfo,Kt=!0,Wn(t,e,n),Je=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!ct&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,Wn(t,e,n),ct=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kS),e.forEach(function(r){var i=jS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,Kt=!1;break e;case 3:Je=a.stateNode.containerInfo,Kt=!0;break e;case 4:Je=a.stateNode.containerInfo,Kt=!0;break e}a=a.return}if(Je===null)throw Error(z(160));Cw(s,o,i),Je=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rw(e,t),e=e.sibling}function Rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),an(t),r&4){try{po(3,t,t.return),ku(3,t)}catch(S){Ne(t,t.return,S)}try{po(5,t,t.return)}catch(S){Ne(t,t.return,S)}}break;case 1:Wt(e,t),an(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Wt(e,t),an(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{So(i,"")}catch(S){Ne(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qv(i,s),Ah(a,o);var c=Ah(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?e_(i,f):h==="dangerouslySetInnerHTML"?Xv(i,f):h==="children"?So(i,f):Ud(i,h,f,c)}switch(a){case"input":_h(i,s);break;case"textarea":Yv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Bi(i,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?Bi(i,!!s.multiple,s.defaultValue,!0):Bi(i,!!s.multiple,s.multiple?[]:"",!1))}i[bo]=s}catch(S){Ne(t,t.return,S)}}break;case 6:if(Wt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Ne(t,t.return,S)}}break;case 3:if(Wt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(S){Ne(t,t.return,S)}break;case 4:Wt(e,t),an(t);break;case 13:Wt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wf=De())),r&4&&Ig(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||h,Wt(e,t),ct=c):Wt(e,t),an(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(f=G=h;G!==null;){switch(m=G,g=m.child,m.tag){case 0:case 11:case 14:case 15:po(4,m,m.return);break;case 1:ji(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Ne(r,n,S)}}break;case 5:ji(m,m.return);break;case 22:if(m.memoizedState!==null){Sg(f);continue}}g!==null?(g.return=m,G=g):Sg(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Zv("display",o))}catch(S){Ne(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Ne(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wt(e,t),an(t),r&4&&Ig(t);break;case 21:break;default:Wt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sw(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var s=Tg(t);ed(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Tg(t);Zh(t,a,o);break;default:throw Error(z(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xS(t,e,n){G=t,Pw(t)}function Pw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ka;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ct;a=Ka;var c=ct;if(Ka=o,(ct=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Cg(i):u!==null?(u.return=o,G=u):Cg(i);for(;s!==null;)G=s,Pw(s),s=s.sibling;G=i,Ka=a,ct=c}Ag(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Ag(t)}}function Ag(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ct||e.flags&512&&Xh(e)}catch(m){Ne(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Sg(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Cg(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ku(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{Xh(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{Xh(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var OS=Math.ceil,Hl=Un.ReactCurrentDispatcher,vf=Un.ReactCurrentOwner,Ut=Un.ReactCurrentBatchConfig,de=0,Ge=null,Ve=null,et=0,Rt=0,Ui=Nr(0),Ue=0,Uo=null,ei=0,Nu=0,_f=0,mo=null,wt=null,wf=0,is=1/0,In=null,Wl=!1,td=null,hr=null,Ga=!1,nr=null,ql=0,go=0,nd=null,hl=-1,dl=0;function gt(){return de&6?De():hl!==-1?hl:hl=De()}function dr(t){return t.mode&1?de&2&&et!==0?et&-et:mS.transition!==null?(dl===0&&(dl=d_()),dl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:__(t.type)),t):1}function Xt(t,e,n,r){if(50<go)throw go=0,nd=null,Error(z(185));ea(t,n,r),(!(de&2)||t!==Ge)&&(t===Ge&&(!(de&2)&&(Nu|=n),Ue===4&&Yn(t,et)),At(t,r),n===1&&de===0&&!(e.mode&1)&&(is=De()+500,Cu&&xr()))}function At(t,e){var n=t.callbackNode;mA(t,e);var r=kl(t,t===Ge?et:0);if(r===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?pS(Rg.bind(null,t)):F_(Rg.bind(null,t)),cS(function(){!(de&6)&&xr()}),n=null;else{switch(f_(r)){case 1:n=Wd;break;case 4:n=c_;break;case 16:n=Pl;break;case 536870912:n=h_;break;default:n=Pl}n=Vw(n,kw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kw(t,e){if(hl=-1,dl=0,de&6)throw Error(z(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=kl(t,t===Ge?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kl(t,r);else{e=r;var i=de;de|=2;var s=xw();(Ge!==t||et!==e)&&(In=null,is=De()+500,Gr(t,e));do try{LS();break}catch(a){Nw(t,a)}while(!0);sf(),Hl.current=s,de=i,Ve!==null?e=0:(Ge=null,et=0,e=Ue)}if(e!==0){if(e===2&&(i=kh(t),i!==0&&(r=i,e=rd(t,i))),e===1)throw n=Uo,Gr(t,0),Yn(t,r),At(t,De()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!DS(i)&&(e=Kl(t,r),e===2&&(s=kh(t),s!==0&&(r=s,e=rd(t,s))),e===1))throw n=Uo,Gr(t,0),Yn(t,r),At(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:zr(t,wt,In);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=wf+500-De(),10<e)){if(kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mh(zr.bind(null,t,wt,In),e);break}zr(t,wt,In);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OS(r/1960))-r,10<r){t.timeoutHandle=Mh(zr.bind(null,t,wt,In),r);break}zr(t,wt,In);break;case 5:zr(t,wt,In);break;default:throw Error(z(329))}}}return At(t,De()),t.callbackNode===n?kw.bind(null,t):null}function rd(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=wt,wt=n,e!==null&&id(e)),t}function id(t){wt===null?wt=t:wt.push.apply(wt,t)}function DS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~_f,e&=~Nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Rg(t){if(de&6)throw Error(z(327));Ki();var e=kl(t,0);if(!(e&1))return At(t,De()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var r=kh(t);r!==0&&(e=r,n=rd(t,r))}if(n===1)throw n=Uo,Gr(t,0),Yn(t,e),At(t,De()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,wt,In),At(t,De()),null}function Ef(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(is=De()+500,Cu&&xr())}}function ti(t){nr!==null&&nr.tag===0&&!(de&6)&&Ki();var e=de;de|=1;var n=Ut.transition,r=ye;try{if(Ut.transition=null,ye=1,t)return t()}finally{ye=r,Ut.transition=n,de=e,!(de&6)&&xr()}}function Tf(){Rt=Ui.current,Ie(Ui)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(tf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:ns(),Ie(Tt),Ie(dt),hf();break;case 5:cf(r);break;case 4:ns();break;case 13:Ie(Se);break;case 19:Ie(Se);break;case 10:of(r.type._context);break;case 22:case 23:Tf()}n=n.return}if(Ge=t,Ve=t=fr(t.current,null),et=Rt=e,Ue=0,Uo=null,_f=Nu=ei=0,wt=mo=null,Hr!==null){for(e=0;e<Hr.length;e++)if(n=Hr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hr=null}return t}function Nw(t,e){do{var n=Ve;try{if(sf(),ll.current=$l,Bl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bl=!1}if(Zr=0,Ke=je=Ce=null,fo=!1,Mo=0,vf.current=null,n===null||n.return===null){Ue=1,Uo=e,Ve=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=pg(o);if(g!==null){g.flags&=-257,mg(g,o,a,s,e),g.mode&1&&fg(s,c,e),e=g,u=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(u),e.updateQueue=S}else v.add(u);break e}else{if(!(e&1)){fg(s,c,e),If();break e}u=Error(z(426))}}else if(Ae&&a.mode&1){var k=pg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),mg(k,o,a,s,e),nf(rs(u,a));break e}}s=u=rs(u,a),Ue!==4&&(Ue=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=fw(s,u,e);ag(s,E);break e;case 1:a=u;var w=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(hr===null||!hr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=pw(s,a,e);ag(s,x);break e}}s=s.return}while(s!==null)}Dw(n)}catch(b){e=b,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function xw(){var t=Hl.current;return Hl.current=$l,t===null?$l:t}function If(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ge===null||!(ei&268435455)&&!(Nu&268435455)||Yn(Ge,et)}function Kl(t,e){var n=de;de|=2;var r=xw();(Ge!==t||et!==e)&&(In=null,Gr(t,e));do try{bS();break}catch(i){Nw(t,i)}while(!0);if(sf(),de=n,Hl.current=r,Ve!==null)throw Error(z(261));return Ge=null,et=0,Ue}function bS(){for(;Ve!==null;)Ow(Ve)}function LS(){for(;Ve!==null&&!oA();)Ow(Ve)}function Ow(t){var e=Lw(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Dw(t):Ve=e,vf.current=null}function Dw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PS(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Ve=null;return}}else if(n=RS(n,e,Rt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Ue===0&&(Ue=5)}function zr(t,e,n){var r=ye,i=Ut.transition;try{Ut.transition=null,ye=1,VS(t,e,n,r)}finally{Ut.transition=i,ye=r}return null}function VS(t,e,n,r){do Ki();while(nr!==null);if(de&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gA(t,s),t===Ge&&(Ve=Ge=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,Vw(Pl,function(){return Ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=ye;ye=1;var a=de;de|=4,vf.current=null,NS(t,n),Rw(n,t),nS(Lh),Nl=!!bh,Lh=bh=null,t.current=n,xS(n),aA(),de=a,ye=o,Ut.transition=s}else t.current=n;if(Ga&&(Ga=!1,nr=t,ql=i),s=t.pendingLanes,s===0&&(hr=null),cA(n.stateNode),At(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,t=td,td=null,t;return ql&1&&t.tag!==0&&Ki(),s=t.pendingLanes,s&1?t===nd?go++:(go=0,nd=t):go=0,xr(),null}function Ki(){if(nr!==null){var t=f_(ql),e=Ut.transition,n=ye;try{if(Ut.transition=null,ye=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,ql=0,de&6)throw Error(z(331));var i=de;for(de|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:po(8,h,s)}var f=h.child;if(f!==null)f.return=h,G=f;else for(;G!==null;){h=G;var m=h.sibling,g=h.return;if(Aw(h),h===c){G=null;break}if(m!==null){m.return=g,G=m;break}G=g}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,G=E;break e}G=s.return}}var w=t.current;for(G=w;G!==null;){o=G;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,G=I;else e:for(o=w;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ku(9,a)}}catch(b){Ne(a,a.return,b)}if(a===o){G=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,G=x;break e}G=a.return}}if(de=i,xr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Eu,t)}catch{}r=!0}return r}finally{ye=n,Ut.transition=e}}return!1}function Pg(t,e,n){e=rs(n,e),e=fw(t,e,1),t=cr(t,e,1),e=gt(),t!==null&&(ea(t,1,e),At(t,e))}function Ne(t,e,n){if(t.tag===3)Pg(t,t,n);else for(;e!==null;){if(e.tag===3){Pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=rs(n,t),t=pw(e,t,1),e=cr(e,t,1),t=gt(),e!==null&&(ea(e,1,t),At(e,t));break}}e=e.return}}function MS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(et&n)===n&&(Ue===4||Ue===3&&(et&130023424)===et&&500>De()-wf?Gr(t,0):_f|=n),At(t,e)}function bw(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=gt();t=bn(t,e),t!==null&&(ea(t,e,n),At(t,n))}function FS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bw(t,n)}function jS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),bw(t,n)}var Lw;Lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,CS(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Ae&&e.flags&1048576&&j_(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cl(t,e),t=e.pendingProps;var i=Zi(e,dt.current);qi(e,n),i=ff(null,e,r,t,i,n);var s=pf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Ll(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lf(e),i.updater=Pu,e.stateNode=i,i._reactInternals=e,Hh(e,r,t,n),e=Kh(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&ef(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zS(r),t=qt(r,t),i){case 0:e=qh(null,e,r,t,n);break e;case 1:e=vg(null,e,r,t,n);break e;case 11:e=gg(null,e,r,t,n);break e;case 14:e=yg(null,e,r,qt(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),qh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),vg(t,e,r,i,n);case 3:e:{if(vw(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,W_(t,e),Ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=rs(Error(z(423)),e),e=_g(t,e,r,n,i);break e}else if(r!==i){i=rs(Error(z(424)),e),e=_g(t,e,r,n,i);break e}else for(Pt=ur(e.stateNode.containerInfo.firstChild),kt=e,Ae=!0,Gt=null,n=$_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),r===i){e=Ln(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return q_(e),t===null&&zh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vh(r,i)?o=null:s!==null&&Vh(r,s)&&(e.flags|=32),yw(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&zh(e),null;case 13:return _w(t,e,n);case 4:return uf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ts(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),gg(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Fl,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!Tt.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=Bt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),yg(t,e,r,i,n);case 15:return mw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),cl(t,e),e.tag=1,It(r)?(t=!0,Ll(e)):t=!1,qi(e,n),dw(e,r,i),Hh(e,r,i,n),Kh(null,e,r,!0,t,n);case 19:return ww(t,e,n);case 22:return gw(t,e,n)}throw Error(z(156,e.tag))};function Vw(t,e){return u_(t,e)}function US(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new US(t,e,n,r)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zS(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===$d)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return Qr(n.children,i,s,e);case zd:o=8,i|=8;break;case ph:return t=jt(12,n,e,i|2),t.elementType=ph,t.lanes=s,t;case mh:return t=jt(13,n,e,i),t.elementType=mh,t.lanes=s,t;case gh:return t=jt(19,n,e,i),t.elementType=gh,t.lanes=s,t;case qv:return xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hv:o=10;break e;case Wv:o=9;break e;case Bd:o=11;break e;case $d:o=14;break e;case Kn:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function xu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=qv,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sf(t,e,n,r,i,s,o,a,u){return t=new BS(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lf(s),t}function $S(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Mw(t){if(!t)return Er;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(It(n))return M_(t,n,e)}return e}function Fw(t,e,n,r,i,s,o,a,u){return t=Sf(n,r,!0,t,i,s,o,a,u),t.context=Mw(null),n=t.current,r=gt(),i=dr(n),s=Nn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,ea(t,i,r),At(t,r),t}function Ou(t,e,n,r){var i=e.current,s=gt(),o=dr(i);return n=Mw(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(Xt(t,i,o,s),al(t,i,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function HS(){return null}var jw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rf(t){this._internalRoot=t}Du.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Ou(t,e,null,null)};Du.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){Ou(null,t,null,null)}),e[Dn]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=g_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&v_(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function WS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gl(o);s.call(c)}}var o=Fw(e,r,t,0,null,!1,!1,"",Ng);return t._reactRootContainer=o,t[Dn]=o.current,Oo(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Gl(u);a.call(c)}}var u=Sf(t,0,!1,null,null,!1,!1,"",Ng);return t._reactRootContainer=u,t[Dn]=u.current,Oo(t.nodeType===8?t.parentNode:t),ti(function(){Ou(e,u,n,r)}),u}function Lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Gl(o);a.call(u)}}Ou(e,o,t,i)}else o=WS(n,e,t,i,r);return Gl(o)}p_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(qd(e,n|1),At(e,De()),!(de&6)&&(is=De()+500,xr()))}break;case 13:ti(function(){var r=bn(t,1);if(r!==null){var i=gt();Xt(r,t,1,i)}}),Cf(t,1)}};Kd=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=gt();Xt(e,t,134217728,n)}Cf(t,134217728)}};m_=function(t){if(t.tag===13){var e=dr(t),n=bn(t,e);if(n!==null){var r=gt();Xt(n,t,e,r)}Cf(t,e)}};g_=function(){return ye};y_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Ch=function(t,e,n){switch(e){case"input":if(_h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Su(r);if(!i)throw Error(z(90));Gv(r),_h(r,i)}}}break;case"textarea":Yv(t,n);break;case"select":e=n.value,e!=null&&Bi(t,!!n.multiple,e,!1)}};r_=Ef;i_=ti;var qS={usingClientEntryPoint:!1,Events:[na,bi,Su,t_,n_,Ef]},Ys={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||HS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Eu=Qa.inject(KS),hn=Qa}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(z(200));return $S(t,e,null,n)};Dt.createRoot=function(t,e){if(!Pf(t))throw Error(z(299));var n=!1,r="",i=jw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sf(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Rf(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=a_(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return ti(t)};Dt.hydrate=function(t,e,n){if(!bu(e))throw Error(z(200));return Lu(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fw(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,Oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Du(e)};Dt.render=function(t,e,n){if(!bu(e))throw Error(z(200));return Lu(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!bu(t))throw Error(z(40));return t._reactRootContainer?(ti(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Dt.unstable_batchedUpdates=Ef;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bu(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Lu(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function Uw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uw)}catch(t){console.error(t)}}Uw(),Uv.exports=Dt;var GS=Uv.exports,xg=GS;dh.createRoot=xg.createRoot,dh.hydrateRoot=xg.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const Og="popstate";function QS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return sd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ql(i)}return JS(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YS(){return Math.random().toString(36).substr(2,8)}function Dg(t,e){return{usr:t.state,key:t.key,idx:e}}function sd(t,e,n,r){return n===void 0&&(n=null),zo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?gs(e):e,{state:n,key:e&&e.key||r||YS()})}function Ql(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function gs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function JS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=rr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(zo({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=rr.Pop;let k=h(),E=k==null?null:k-c;c=k,u&&u({action:a,location:S.location,delta:E})}function m(k,E){a=rr.Push;let w=sd(S.location,k,E);c=h()+1;let I=Dg(w,c),x=S.createHref(w);try{o.pushState(I,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(x)}s&&u&&u({action:a,location:S.location,delta:1})}function g(k,E){a=rr.Replace;let w=sd(S.location,k,E);c=h();let I=Dg(w,c),x=S.createHref(w);o.replaceState(I,"",x),s&&u&&u({action:a,location:S.location,delta:0})}function v(k){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof k=="string"?k:Ql(k);return w=w.replace(/ $/,"%20"),be(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let S={get action(){return a},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Og,f),u=k,()=>{i.removeEventListener(Og,f),u=null}},createHref(k){return e(i,k)},createURL:v,encodeLocation(k){let E=v(k);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:g,go(k){return o.go(k)}};return S}var bg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(bg||(bg={}));function XS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?gs(e):e,i=kf(r.pathname||"/",n);if(i==null)return null;let s=Bw(t);ZS(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=hC(i);o=lC(s[a],u)}return o}function Bw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Bw(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:oC(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of $w(s.path))i(s,o,u)}),e}function $w(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$w(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function ZS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:aC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eC=/^:[\w-]+$/,tC=3,nC=2,rC=1,iC=10,sC=-2,Lg=t=>t==="*";function oC(t,e){let n=t.split("/"),r=n.length;return n.some(Lg)&&(r+=sC),e&&(r+=nC),n.filter(i=>!Lg(i)).reduce((i,s)=>i+(eC.test(s)?tC:s===""?rC:iC),r)}function aC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=uC({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;s.push({params:r,pathname:pr([i,h.pathname]),pathnameBase:mC(pr([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=pr([i,h.pathnameBase]))}return s}function uC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:g}=h;if(m==="*"){let S=a[f]||"";o=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function cC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function hC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function dC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?gs(t):t;return{pathname:n?n.startsWith("/")?n:fC(n,e):e,search:gC(r),hash:yC(i)}}function fC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Nf(t,e){let n=pC(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=gs(t):(i=zo({},t),be(!i.pathname||!i.pathname.includes("?"),Yc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Yc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Yc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=dC(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),mC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Hw=["post","put","patch","delete"];new Set(Hw);const _C=["get",...Hw];new Set(_C);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}const Of=B.createContext(null),wC=B.createContext(null),Or=B.createContext(null),Vu=B.createContext(null),Dr=B.createContext({outlet:null,matches:[],isDataRoute:!1}),Ww=B.createContext(null);function EC(t,e){let{relative:n}=e===void 0?{}:e;ys()||be(!1);let{basename:r,navigator:i}=B.useContext(Or),{hash:s,pathname:o,search:a}=Kw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:pr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function ys(){return B.useContext(Vu)!=null}function ia(){return ys()||be(!1),B.useContext(Vu).location}function qw(t){B.useContext(Or).static||B.useLayoutEffect(t)}function Df(){let{isDataRoute:t}=B.useContext(Dr);return t?bC():TC()}function TC(){ys()||be(!1);let t=B.useContext(Of),{basename:e,future:n,navigator:r}=B.useContext(Or),{matches:i}=B.useContext(Dr),{pathname:s}=ia(),o=JSON.stringify(Nf(i,n.v7_relativeSplatPath)),a=B.useRef(!1);return qw(()=>{a.current=!0}),B.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=xf(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:pr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function Kw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=B.useContext(Or),{matches:i}=B.useContext(Dr),{pathname:s}=ia(),o=JSON.stringify(Nf(i,r.v7_relativeSplatPath));return B.useMemo(()=>xf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function IC(t,e){return AC(t,e)}function AC(t,e,n,r){ys()||be(!1);let{navigator:i}=B.useContext(Or),{matches:s}=B.useContext(Dr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ia(),h;if(e){var f;let k=typeof e=="string"?gs(e):e;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||be(!1),h=k}else h=c;let m=h.pathname||"/",g=m;if(u!=="/"){let k=u.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=XS(t,{pathname:g}),S=kC(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:pr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:pr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&S?B.createElement(Vu.Provider,{value:{location:Bo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:rr.Pop}},S):S}function SC(){let t=DC(),e=vC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),n?B.createElement("pre",{style:i},n):null,null)}const CC=B.createElement(SC,null);class RC extends B.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?B.createElement(Dr.Provider,{value:this.props.routeContext},B.createElement(Ww.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PC(t){let{routeContext:e,match:n,children:r}=t,i=B.useContext(Of);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),B.createElement(Dr.Provider,{value:e},r)}function kC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));h>=0||be(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:g}=n,v=f.route.loader&&m[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let g,v=!1,S=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,S=f.route.errorElement||CC,u&&(c<0&&m===0?(LC("route-fallback"),v=!0,k=null):c===m&&(v=!0,k=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),w=()=>{let I;return g?I=S:v?I=k:f.route.Component?I=B.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=h,B.createElement(PC,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?B.createElement(RC,{location:n.location,revalidation:n.revalidation,component:S,error:g,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var Gw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Gw||{}),Qw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qw||{});function NC(t){let e=B.useContext(Of);return e||be(!1),e}function xC(t){let e=B.useContext(wC);return e||be(!1),e}function OC(t){let e=B.useContext(Dr);return e||be(!1),e}function Yw(t){let e=OC(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function DC(){var t;let e=B.useContext(Ww),n=xC(),r=Yw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bC(){let{router:t}=NC(Gw.UseNavigateStable),e=Yw(Qw.UseNavigateStable),n=B.useRef(!1);return qw(()=>{n.current=!0}),B.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bo({fromRouteId:e},s)))},[t,e])}const Vg={};function LC(t,e,n){Vg[t]||(Vg[t]=!0)}function VC(t){let{to:e,replace:n,state:r,relative:i}=t;ys()||be(!1);let{future:s,static:o}=B.useContext(Or),{matches:a}=B.useContext(Dr),{pathname:u}=ia(),c=Df(),h=xf(e,Nf(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return B.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function pl(t){be(!1)}function MC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1,future:a}=t;ys()&&be(!1);let u=e.replace(/^\/*/,"/"),c=B.useMemo(()=>({basename:u,navigator:s,static:o,future:Bo({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=gs(r));let{pathname:h="/",search:f="",hash:m="",state:g=null,key:v="default"}=r,S=B.useMemo(()=>{let k=kf(h,u);return k==null?null:{location:{pathname:k,search:f,hash:m,state:g,key:v},navigationType:i}},[u,h,f,m,g,v,i]);return S==null?null:B.createElement(Or.Provider,{value:c},B.createElement(Vu.Provider,{children:n,value:S}))}function FC(t){let{children:e,location:n}=t;return IC(od(e),n)}new Promise(()=>{});function od(t,e){e===void 0&&(e=[]);let n=[];return B.Children.forEach(t,(r,i)=>{if(!B.isValidElement(r))return;let s=[...e,i];if(r.type===B.Fragment){n.push.apply(n,od(r.props.children,s));return}r.type!==pl&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=od(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ad(){return ad=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ad.apply(this,arguments)}function jC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zC(t,e){return t.button===0&&(!e||e==="_self")&&!UC(t)}const BC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$C="6";try{window.__reactRouterVersion=$C}catch{}const HC="startTransition",Mg=MI[HC];function WC(t){let{basename:e,children:n,future:r,window:i}=t,s=B.useRef();s.current==null&&(s.current=QS({window:i,v5Compat:!0}));let o=s.current,[a,u]=B.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=B.useCallback(f=>{c&&Mg?Mg(()=>u(f)):u(f)},[u,c]);return B.useLayoutEffect(()=>o.listen(h),[o,h]),B.createElement(MC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const qC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jc=B.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,unstable_viewTransition:f}=e,m=jC(e,BC),{basename:g}=B.useContext(Or),v,S=!1;if(typeof c=="string"&&KC.test(c)&&(v=c,qC))try{let I=new URL(window.location.href),x=c.startsWith("//")?new URL(I.protocol+c):new URL(c),b=kf(x.pathname,g);x.origin===I.origin&&b!=null?c=b+x.search+x.hash:S=!0}catch{}let k=EC(c,{relative:i}),E=GC(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:f});function w(I){r&&r(I),I.defaultPrevented||E(I)}return B.createElement("a",ad({},m,{href:v||k,onClick:S||s?r:w,ref:n,target:u}))});var Fg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fg||(Fg={}));var jg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jg||(jg={}));function GC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Df(),c=ia(),h=Kw(t,{relative:o});return B.useCallback(f=>{if(zC(f,n)){f.preventDefault();let m=r!==void 0?r:Ql(c)===Ql(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}const QC="/assets/logo-D6FCrHI9.png",YC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAH0AgMAAAAYnQtAAAAADFBMVEX////fYSLm5ubbPQAI+EJeAAALIklEQVR42u3dzYriShQH8NDZDELwFQZm0/S+lk2/xA21CfgKIWuhG5q7DPMKghvJU4RZDe7zHmHAXV+86phETVXlS2Odv0fupSe0afwR83GqzjnlOI7zlCTJYvfzZfcTcpOFLGQhC1nIQhaykIUsZCELh2/u/l/t/j3Z/fzY/cTbZCELWcjCRxbur/b76z2scDHd7l/pBFW4mG78/es9d0CFR6Dvz1JM4UcB3B1FTOGbX71yRKGbnQhniMJX3z87iHDCs0O4P4iDhDYGdeeH8HAmYkXAi+xCOEMT/vQvXymYUNSEIZbwOasJ37GEru8rvqZIwleFMIcSZgphgCRUfUl9iST0VEI/BRIKpTAHEmZKYYAjVJ6GuxMRXuj/ghF6GuEfmLknoREGKBHwKntYoUQRLn3dKwURxg8sDEGEQiucwwsDDOG3TCuULKQhdH3fcDFlIQWhZxCGLCQhFDcQ2hUfmoQBRAQML1xlBqF8YSELLRAu/YcW+msWstACYcxCcGHEQhaiCq2KD4VRGAJEwCxkIQtZyEIWspCFLGShDUKPheTnnh49AuaxNhbymDcLeXaNhTzL/QBCzqdhof3CCEIY30BIJ/uSc4RZyLn6LOSaGRY+TO0afv0hfg0pfh0wfi03fj2+NroIYYS6S83v3kIi3VskfAeeAF4Ycp8oQkL8Xl/OBr1fm/JrGkIJf8D3TVT0vpTw/UvnYMIYvgdtTQjXRzj20XtBXwpnEwf8SpPDrfckamdhAtZ1PqudhdhCxPUtzoTvKZ7w8/Qc3KYOrPB9v1RQ7rx84Anj8kntsA0rlM9X+svWCgPgVcnEgwgjXOFx9omF9IVrXOFx8ul6QkvHvCXwisceC0GEAbBQPIgwBBZmLAQRpkSE+yeLjvu6PiXhYaCll1A6BISL6fYwWOY4PVbSoSBcFasyb1GFbplS8dVp3+KGb71w8V81CZ/fV3ijkG96Nv/XOb80ut6nupXwLO0n75wjbL9wWpuHBxMuNvWJ+E65+mvbhT8VyRRQwpVQJMR0EcoXy4XLTJHU1KVmxnphrEpMQxKuhCq5sEvtWpDYLVxmqkWZkYSxMsm3izC0XKjKtpdplypZy4XqWt4QSKiuOJ932Te1W+hpusvcS+iM1L1Dttq3eKRxbI6AdTWSafvOH0SFIYxwqS8CbfsNDxKrhboi0BmMUOiLsdsKI5rCNgP15RiGzUJ9Q7IcRLg0NLZoe5VaExUGIMJ4uHD3gEdTKNveaSwXGnrKpSwsb/g2C03dK8P7CK8dHxqEUcu++uFVo9ZrC00t5ZqFGXFhACH0hgjdjpMc1gkbi0QeRSgdq4ViiNCjLmzshIQvLDNNbBZmLGwWhoSFYasnPhbeV2hegiNs9cSXsvCuc0+uecEm85+qcmksjoAHCWMWkhceb/h2C81LwwUsPFxwcYXFDZ+FdIXFDZ+F1IXSwRV6LCQvLMYwWHjfuSfzQqLm3vhFLs0H4QjYKCwzTVhIVlhmmrCQuHAX4VMWGteKiVlIYczbuKJRmWlCWhjCC4NGYURcONPvW5U4Wy40zgGb1qFEEYbafasSZ9rC4A7CK+cmmsMnfzbR7Vvl0tgdATcJ/T+6fT0qwmWDMIAXyu+afatME+LCwxw2aWHDLf/vXL5eGAIIdUcpoyJMRNOJiC9Mlfu65rOURs1MdSKCCwODUHsvoVG7Vp2Iin09OsLGi+nuRAQX7k5Exb7C/ExHow44K0/EcYVX74uhm2CTouyQodj3+Ehz1WZOt+r8oUv8kmWXurVi3wxAGCyKr2mkFaYkhLr6vKg8Q4P6vsUNn4ZQc6lZlw8D0iEu1HbgWerbKBajNDSEri5LYZWdRFDn+3qkhPpOWELbKNJrGGsk0M3s0Pop1jaKFPSF8mx2MSQu/Ffbc+/kRFQJQ8rHMD8b868tvJmRF8qLGtpUKUwJC4OLWvbwfF/XJyX8pmzued5xIRhR6Fy/J7tibfTJxUjcRUe2MpeGRASsGqmZ18ap1mf7xtSF8ldtnCpSCIOEiLA+njivRnE2J4+m1b6CllDUR9eq33rKVpjUhXNVV8W0LoyICGvDibNU9dv8ZN8q04SSMNgWwFx5hIO6cE1EuCyeWraHz/2eq69D8qSNYpVpQkkYJc7bft3p/WyS8l5yaDK4cAgK45POgPtf6J545rtNZ7rdfhXCfQEwOaHqzaJqwedsd7dHuU09WkLR0DfvJII6XozeN21qaOkIywhqvu1UJWzb7Jqhb15xIkp/HOHV48NMPRJzuaJT984ntkTArt/UVS6GFy57diCyReg1dpXTzYPjCJNX2kLR3HPts1+/OkJC9deUjDBr0XNNeb/4ZwUkjCkfw+pmYXjzJ7zwIyN8LfVadSQThJ9pBggDGkKhyydpFkokYda5wtSauafiZmF+8w9tszP7I+B2Qo+wsLhZmN8stK1PUISa8InE/KHXppuVtvXgGl4YERCKNr2ePHih0HdZsl+Yten1pBXKFyrC0PzmjLDQ9QcJ/TUVYWp8s6FPbWS90Gsj9OgLpdNXaH/dk2gjFCMLrxoftuqiYxBK2yPgau4QXGjuMWMsUFxbLiwTTWCFcZseM8ZCYXxhZLmwTMN4bGFMWFjdLHoLAxbeV7hs9U0Tjy1sOIfvLYxb3dMoCosXrHC6TwXeVgNtE8uEQyOxxfRvdug2LW6H37tWRbXosXTHCNiZFlUw78VQ4gJL6G7KT/d1BeF+ltQy4UmOmmw3mkRM6Gadx8uICV+7j+rSEioOIZjwtcfcAy1hhi6c9pkDJCUU6ELlh42QhD99dKHolTFCSKgevLZP2D/0cjt2zjf1WDod9LYnAvZuILQrxhcd1wagJ8zQhW7X1Q/ICT3dOAS6sLH3IZ3RRN0nzYcIrRrV133bQhThp/ZDwgubxrzJzK5pP6hcJxhzwKJvPgWAMMIQGvJ+Gj7l6LkYfUOvrPMqJJedP7qsQnOHCNj1H1jYNEOW9Vgr6Q5C75GFTWMtgoZQ3ERoU5636LxWDrVM9tsIbapGyPoLXfrCoLfQoqog1+8vpFH3dBuhTbVrbvc1q4jVHw4SehRqSL2bCG9TB9wv9IobBj2Nf2qpv83YUxUUN0yR9YueU3ShdFCEujGewCahGCSM4YWf2udZKsKo35xHCiQk0CdqoNCzv9fXQKFrf7+2gUJlePEbSqjYf/YMJVRkpoYrKKHia7oGE9YyxGcvtxL2C73MwrD5T33W97n2slPDIuDBwtXm4nafogkvs+DnDpzQ2VwcQjzh2UH8cgCFpwdx9kRMmLb6U9PynijzBFLovB2J8msCKjwSZ19PiX1C7xrCp4/DilD5UwIrPD5VvQALR9ocfd6ChfRn10be7Bd6LYfMPY27eQthkAAIjW3lWEhfGCEIjUNR+MI1hDBmIbLwBhV29xAuH1kYJBBCww0RRNi/7glAuLZM2Df08kau7Bm/84c3clXI+MIf8MLnbNyqkDv0pxHj1kxYJFzDCGN44XLcioI7CDXPbUECI9Q81URAwtjv1euLkHCpCQ5xhMoTMUiAhMoTMYISxurQyTbhgNBLMcU2syAgTK7YdX4zVq723YS1GFH+BhMuL6+mwTOYcHV5Nf2zAhNedqGdTeCEi/NrTZjACc8zfWdrQOHZQcxfAIVJlSTqv08SROHirfyOpgmkcOVs/x7FWe6gCp237c63zR1coeNs9z5k4WT334e9QnviVAsjYBaykIUsZCELWchCFrKQhSy8xtwTjU0WspCFLGQhC1nIQhaykIUs5LknjoBZyEIWspCFLGQhC1nIQhby3BNHwCxkIc7m/8IySokQXyp3AAAAAElFTkSuQmCC",ld="/assets/food_2-CHbZBAk0.png",JC="/assets/jobs-BJ8WjN3z.jpg",XC="/assets/new4-y6iEwrJh.png",ZC="/assets/audi-DZ-qrjYl.png",eR="/assets/taste_1-CwHisgzK.png",tR="/assets/namer10-BvMtw5sa.png",nR="/assets/food_4-BSZk38NE.png",rR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgBnZS7TgJREIb3Av3a2bFcQiyh0w4IJFjJI+ATiE8gVFpiaaWWVkJlDIRLJR3YaUJgS0voNNz8/8MegpsFFic52dlzZr6dMzszumJLJpO5CIfDP4PB4EvZQxKJhBGJRK6j0ehnv98faTYstlgsylhN6l5h2WzW9Pv9XaiFyWRyxT0BrNVqPTzKWAahNPQCm81mTdibWBb00gpIqdfrl3g8EkrDbVDeQsLw2oMeb7Va1h8gZTqdFmhAw01QOz0SVoFPErCRPFedDkyyrutdVVXF19cdUqlUXtO0e+Goqg9I1bnTX3Nu0BnRJZkXvMZ8Pt8z99PpdEHCIEU3mGuEa5GaiLQpIyVcwpDv0ia/jUAJRYQsC0MYq2oBkd1u89G2HQJWlDAK0nCg7BBdcY+M1f8CNYfFH3LDba5QKDRGN3U8A+1SIeyYPwY/4hQ5ezJNc4wrZ2kSDAat4XD4vhMoqx/qkV39yUaj8cEzADqITlwA4Bz0NiK1NgJdWikpq18KAG0JZTowTF6dw0QAWf3z+fwN6qGybKUTwFynjg0NMiVMAaZMlVNGnmuylaAbrH5nK7kJcprHo+LWoho2z5RlaZRZ/btgUvBhdsqq71kZAsiqR2Rxe9p4Fn6Yt2G+CUXNinkocrjvlJZiWdZ3IBCoIiAD5XX3X85W+QXZyj6p6rhLawAAAABJRU5ErkJggg==",iR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD2AAAA9gBbkdjNQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAqGSURBVHic7Z15rF1VFYe/H1OBlpYiQyeCUgEHMIahTFJrgiEYoaiISkHRBAEDToRBUJRUiEAIGIlDKAo4BeIAVAmBiFAokZYawBJFRJDSVjpIKbZQSln+sc6jN8++O55z1j73ni/ZeU17e/fv7LXeOvvss/daMjP6GUnjgRnAnsBkYFLWhv4MsCxrSxv+vAS438xWlyy5VNSPDiBpL2Bm1qYD23T5VZuAB4DbgNvN7NlcBCZE3ziApAnAGcAJwHsL6uYx3Bl+aGb/LqiPUqm8A0gaA5wHnAuMLqnbdcA1wJVm9nJJfRZCZR1A0rbA54FLgN2DZKwEZuMRYWOQhp6opANIOg64GtgnWkvGP4HzzOw30UI6ZatoAZ0gZzZwB+kYH2Bv4NeSrpBUrTGtSgTI7vU/xSd5KTMXmFWVuUElHEDSW/Hf+gNilbTNYuB4M3smWkgrkg9Xko4EFlId4wPsDyzItCdN0hFA0r7Aw8DO0Vq6ZA1wmJk9GS1kJJKNAJLG4WG/qsYH1z43W45OkiQdQNLWwC3AftFacmAf4FZJ3S5HF0qSDgBcCRwTLSJHjsZXDpMjuTmApFOBm6N1FMTpZjYnWkQjSTmApLHA08Cu0VoKYg0w1cz+Ey1kiNRuAefTv8YHnxReFC2ikWQigKRJwFPAjtFaCmYDsJ+Z/StaCKQVAS6l/40PMAr4drSIIZKIAJLeBTwObB2tpSQMONDMHo0WkkoE+BqDY3wAARdHi4AEIkC2sWMlMC5USPmsB3Y1s1ciRaQQAWYweMYHn+8cHS0iBQeYGS0gkPBrT+EWsASYEioijhXARDN7I0pAaASQdBCDa3zwzayHRwqIvgV8KLj/FAgdg2gHmBrcfwqEjkG0A0wO7j8FQscg2gEmtf5I3xM6BtEOUEeAQXUASTsymAtAw9le0i5RnUdGgDr8byZsLCIdoKyTvFUgbCwiHWB5YN+pETYWYUvBkoTvjtk2REA6GDAq6nh5WAQw97w6CsDKyNwC0Y+By4L7T4HQMagdIJ6BdoClwf2nQOgYRDvAQ8H9p0DoGIRuCMlOAK9kcJ8ENgETzGxVlIDQCGBmLwH3RWoI5qFI40P8LQA88eKgEn7tKewJnILn5R1E3m5mT0cKCI8AZvY8sChaRwBPRBsfEnCAjOujBQSQxDWH3wIAsvQpi+mPlDDt8AzwDjN7LVpIEhHAzF7HzwcOChenYHxIJAIMIWk+cES0joJZBBxiiQx8EhGggfOjBZTA+akYHxJzADObD1Qu43YH3Glm90aLaCSpWwCApLcAC/AM3P3Ec3joXxEtpJGkIgBAVqTpeKAS2bbbZB2ePDop40OCDgBgZk8As4CwU7M5YsApZvZYtJAtkaQDAJjZXBJJo9IjXzez8DX/kUhuDjAcSTcBn47W0SU3m9lnokU0I9kI0MBpwGXRIrrgclx70iQfAYaQ9AngJ8AO0Vpa8CrwOTP7ZbSQdqiMA8CbGUVuI92sIsuBmWa2MFpIu1ThFvAmZrYIOAR4MFrLFvgT/pxfGeNDxRwAICvZOh34JF6vL5pngVOAI8yscrucK3ULGE6WZPIs4BuUn2V8NZ7z9/upvNnrhko7wBBZnYELgLOBsQV3txa4DrjCzNYW3Ffh9IUDDCFpO+ADbC4dn9e5++XA7Vm7t8q/8cPpKwdoJDt9fDBeafRoYE9gD1rPe97AEzguAf6AP3UsSOkVbp70rQNsiawa2QQ8Mkxmc4RYlrWlwAvZDqWBYKAcoOb/SfYxUNLWkkanWm+vXSRtl0WeJEnGASRtI+lQSRdIuhN4EfgvsFHS45JmpTyQQ0jaStJHJc2T9CqeBWWNpLskXSjpsJScOjJFzLb4JG0G8H7gSGBMi//2KHCGmS0oVl13ZEvVPwIOavHRdcB8/FzkfcAjYVlCzKzUhpdOuwRfSLEu2ib8OXxs2dqbXNNOwHeB17u8ptX4Yta40rWXOEi7ALPx4ondDNLwthQ4MQHjnwg8n9M1vQh8C9i5bxwA2A34Dr7HL49BGt4WA18AxpRo9DHAmVnfRVzTS9kvyy6VdQC8GMLV+P2uiEEa3tYC3wPeWeA17YeH+pdKvKbLgfFFXVMhk0BJRwG34osuESwGHhhq5ieQO0bSZOAo4H3ZzwPwkm9l8xzwMTN7JO8vzt0BJH0R/81P5lEHf2W7AHgBWDWsgb9JbGx74PsO3la20CZsAM62vKuP5xgedwR+RjmhcZDb9Xhm0XRuAZL2Bn4LvKfnL6tph0fwW8JzvX5RzyuBko7NBNXGL4+DgUWSei882WPYPxlfmIkOi4PaXqfHtZCubwGSpgH3A9t39QU1ebEemG6+YbZjunKA7PFoITCxm05rcmcZviO547zDHc8BJO2Ab42qjZ8Ok4A7sjpMHdGRA2TbrG6k9duumvI5CLgps1H7dDjp+ybxE5+6NW+zO7JpB8Y/Ed8wGX2BdWvdTs71KUDSeOAf+CvdmvRZC0y1NhJRtzsHuIja+FViLL7BpCUtI4CkvYAngVG966opkdfwV+NNz0+2EwEuozZ+FdmONhJrNI0Akg7E1/kj3oHX9I4B05rtI2gVAa6iNn6VEXBl0w+MFAEk7YnvRKmpPlNshNwFzSJAvdTbP4x43qKZA/wZ36ZcU23uNrMnR/rHER3A/ITsIGTv7mdeAc5p9oGmk8BsA+JdeSqqKZWLzOzvzT7QzkLQFHyb9bgchdUUzwPADDNrmm+55UKQ+Z76L+elqqYU1gGfbWV8aPNdgJndCPyuR1E15XGhtVmSru0tYZIm4sezd+9BWE3x3AMcY20atu0dQWa2HPgwHl5q0uQvwMfbNT50uCXMPA3qSfh25Jq0WAIca16Qu2063hRqZnfiR6Nr0mENbvyOU9V2dTLIzG4ALu3m/9bkzgbgBPMyO53T48mgOcTvfxvk9gZwUk827NEBtgF+n8BADGr7Si/2a3tTaDMkjQb+iJ+nrymPa8zsq71+Sc+ng81sHXAs8FCv31XTNtcC5+byTb2GkIbbwfbAr4gPi/3cNgFfystmPc8BtuAEW+HpYaIHqh/beuAjedorlznAlpB0Dh6mkklFW3FWAseZ2cN5f3FhqWIlzQR+gecOqumep/BFnrZe7nRKobmCsyQSc6lfIHXLfLwM3eqiOig0RJsndT4A+HmR/fQhrwAX4hs6CjM+lJgtXNIHgR8AU0vpsLrcDZxlLY505UVpkzQzuwfYH099GpMaPW1WALPM7JiyjA9B9QIkvRvPq39k6Z2nhwE/Bs4zs9K34UcWjBBwOnAFXkNgEPkbXgBjXpSA8KJRkvbAbwuzGJxTyKvwdZKrLLgGYbgDDCFpNzwinInX+OtHFuLVTm4xsw3RYiAhBxgiKww1Ez/RMiNWTS5swFPnX2cJ1jpKzgEaySaLZwOnAqOD5XTKEvyxd46ZrYwWMxJJO8AQksYBpwGfwvPhpVSLoJGXgXnADcAdZrYpWE9LKuEAjWQbUA4HpmftUOLyFa8CHsSNPg94tApGb6RyDjCcrGL4NNwZjsLXFnYqqLulbDb2POCvVvEBrLwDDCebRO6Ll33ZFa9a1vhz+N9txF+3rmrx83nLoUBDavwP1u9sP7+1iZUAAAAASUVORK5CYII=",Yl={logo:QC,cross_icon:rR,user_icon:iR},sR=[{menu_name:"Puzzle1",menu_image:YC},{menu_name:"Puzzle2",menu_image:ld},{menu_name:"Puzzle3",menu_image:JC},{menu_name:"Puzzle4",menu_image:XC},{menu_name:"Puzzle5",menu_image:ZC}],Ug=[{_id:"1",name:"Puzzle1",image:eR,category:"Puzzle1"},{_id:"2",name:"Puzzle2",image:ld,category:"Puzzle2"},{_id:"3",name:"Puzzle3",image:ld,category:"Puzzle3"},{_id:"4",name:"Puzzle4",image:nR,category:"Puzzle4"},{_id:"5",name:"Puzzle5",image:tR,category:"Puzzle5"}],oR=()=>D.jsx("div",{className:"footer",children:D.jsxs("div",{className:"footer",id:"footer",children:[D.jsxs("div",{className:"footer-content",children:[D.jsx("div",{className:"footer-content-left",children:D.jsx("img",{src:Yl.logo,alt:"",className:"log2"})}),D.jsx("div",{className:"footer-content-right"}),D.jsxs("div",{className:"footer-content-center",children:[D.jsx("h2",{children:"GET IN TOUCH"}),D.jsxs("ul",{children:[D.jsx("li",{children:"+919947346852"}),D.jsx("li",{children:"arjunsreekumar101@gmail.com"})]})]})]}),D.jsx("hr",{}),D.jsx("p",{className:"footer-copyright",children:"Copyright 2025 © Dotslash "})]})}),vs=B.createContext(null),aR=t=>{const[e,n]=B.useState({}),[r,i]=B.useState(0),[s,o]=B.useState(!1),f={food_list:Ug,cartItems:e,setCartItems:n,addToCart:m=>{n(g=>({...g,[m]:(g[m]||0)+1}))},removeFromCart:m=>{n(g=>{if(g[m]>1)return{...g,[m]:g[m]-1};{const v={...g};return delete v[m],v}})},getTotalCartAmount:()=>{let m=0;for(const g in e)if(e[g]>0){let v=Ug.find(S=>S._id===g);m+=v.price*e[g]}return m},points:r,addPoints:m=>{i(g=>g+m)},isAuthenticated:s,setIsAuthenticated:o};return D.jsx(vs.Provider,{value:f,children:t.children})},lR=()=>{};var zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(m=64)),r.push(n[h],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new cR;const m=s<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hR=function(t){const e=Jw(t);return Xw.encodeByteArray(e,!0)},Jl=function(t){return hR(t).replace(/\./g,"")},Zw=function(t){try{return Xw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=()=>dR().__FIREBASE_DEFAULTS__,pR=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zw(t[1]);return e&&JSON.parse(e)},Mu=()=>{try{return lR()||fR()||pR()||mR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eE=t=>{var e,n;return(n=(e=Mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gR=t=>{const e=eE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tE=()=>{var t;return(t=Mu())===null||t===void 0?void 0:t.config},nE=t=>{var e;return(e=Mu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jl(JSON.stringify(n)),Jl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _R(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function wR(){var t;const e=(t=Mu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ER(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IR(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AR(){return!wR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iE(){try{return typeof indexedDB=="object"}catch{return!1}}function sE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function SR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CR,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rn(i,a,r)}}function RR(t,e){return t.replace(PR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PR=/\{\$([^}]+)}/g;function kR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bg(s)&&Bg(o)){if(!Tr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function no(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NR(t,e){const n=new xR(t,e);return n.subscribe.bind(n)}class xR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xc),i.error===void 0&&(i.error=Xc),i.complete===void 0&&(i.complete=Xc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=1e3,bR=2,LR=4*60*60*1e3,VR=.5;function $g(t,e=DR,n=bR){const r=e*Math.pow(n,t),i=Math.round(VR*r*(Math.random()-.5)*2);return Math.min(LR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jR(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FR(t){return t===Br?void 0:t}function jR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const zR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},BR=ae.INFO,$R={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},HR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$R[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=BR,this._logHandler=HR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const WR=(t,e)=>e.some(n=>t instanceof n);let Hg,Wg;function qR(){return Hg||(Hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KR(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,ud=new WeakMap,aE=new WeakMap,Zc=new WeakMap,bf=new WeakMap;function GR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oE.set(n,t)}).catch(()=>{}),bf.set(e,t),e}function QR(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YR(t){cd=t(cd)}function JR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eh(this),e,...n);return aE.set(r,e.sort?e.sort():[e]),mr(r)}:KR().includes(t)?function(...e){return t.apply(eh(this),e),mr(oE.get(this))}:function(...e){return mr(t.apply(eh(this),e))}}function XR(t){return typeof t=="function"?JR(t):(t instanceof IDBTransaction&&QR(t),WR(t,qR())?new Proxy(t,cd):t)}function mr(t){if(t instanceof IDBRequest)return GR(t);if(Zc.has(t))return Zc.get(t);const e=XR(t);return e!==t&&(Zc.set(t,e),bf.set(e,t)),e}const eh=t=>bf.get(t);function lE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ZR=["get","getKey","getAll","getAllKeys","count"],e1=["put","add","delete","clear"],th=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=e1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return th.set(e,s),s}YR(t=>({...t,get:(e,n,r)=>qg(e,n)||t.get(e,n,r),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Kg="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Fu("@firebase/app"),r1="@firebase/app-compat",i1="@firebase/analytics-compat",s1="@firebase/analytics",o1="@firebase/app-check-compat",a1="@firebase/app-check",l1="@firebase/auth",u1="@firebase/auth-compat",c1="@firebase/database",h1="@firebase/data-connect",d1="@firebase/database-compat",f1="@firebase/functions",p1="@firebase/functions-compat",m1="@firebase/installations",g1="@firebase/installations-compat",y1="@firebase/messaging",v1="@firebase/messaging-compat",_1="@firebase/performance",w1="@firebase/performance-compat",E1="@firebase/remote-config",T1="@firebase/remote-config-compat",I1="@firebase/storage",A1="@firebase/storage-compat",S1="@firebase/firestore",C1="@firebase/vertexai",R1="@firebase/firestore-compat",P1="firebase",k1="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",N1={[hd]:"fire-core",[r1]:"fire-core-compat",[s1]:"fire-analytics",[i1]:"fire-analytics-compat",[a1]:"fire-app-check",[o1]:"fire-app-check-compat",[l1]:"fire-auth",[u1]:"fire-auth-compat",[c1]:"fire-rtdb",[h1]:"fire-data-connect",[d1]:"fire-rtdb-compat",[f1]:"fire-fn",[p1]:"fire-fn-compat",[m1]:"fire-iid",[g1]:"fire-iid-compat",[y1]:"fire-fcm",[v1]:"fire-fcm-compat",[_1]:"fire-perf",[w1]:"fire-perf-compat",[E1]:"fire-rc",[T1]:"fire-rc-compat",[I1]:"fire-gcs",[A1]:"fire-gcs-compat",[S1]:"fire-fst",[R1]:"fire-fst-compat",[C1]:"fire-vertex","fire-js":"fire-js",[P1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map,x1=new Map,fd=new Map;function Gg(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(fd.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of Xl.values())Gg(n,t);for(const n of x1.values())Gg(n,t);return!0}function ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new ui("app","Firebase",O1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=k1;function uE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=tE()),!n)throw gr.create("no-options");const s=Xl.get(i);if(s){if(Tr(n,s.options)&&Tr(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new UR(i);for(const u of fd.values())o.addComponent(u);const a=new D1(n,r,o);return Xl.set(i,a),a}function Lf(t=dd){const e=Xl.get(t);if(!e&&t===dd&&tE())return uE();if(!e)throw gr.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let i=(r=N1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}yn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="firebase-heartbeat-database",L1=1,$o="firebase-heartbeat-store";let nh=null;function cE(){return nh||(nh=lE(b1,L1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),nh}async function V1(t){try{const n=(await cE()).transaction($o),r=await n.objectStore($o).get(hE(t));return await n.done,r}catch(e){if(e instanceof rn)Vn.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function Qg(t,e){try{const r=(await cE()).transaction($o,"readwrite");await r.objectStore($o).put(e,hE(t)),await r.done}catch(n){if(n instanceof rn)Vn.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=1024,F1=30;class j1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>F1){const o=B1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yg(),{heartbeatsToSend:r,unsentEntries:i}=U1(this._heartbeatsCache.heartbeats),s=Jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function Yg(){return new Date().toISOString().substring(0,10)}function U1(t,e=M1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iE()?sE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await V1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jg(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}function B1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){yn(new en("platform-logger",e=>new t1(e),"PRIVATE")),yn(new en("heartbeat",e=>new j1(e),"PRIVATE")),zt(hd,Kg,t),zt(hd,Kg,"esm2017"),zt("fire-js","")}$1("");function Vf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H1=dE,fE=new ui("auth","Firebase",dE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Fu("@firebase/auth");function W1(t,...e){Zl.logLevel<=ae.WARN&&Zl.warn(`Auth (${_s}): ${t}`,...e)}function ml(t,...e){Zl.logLevel<=ae.ERROR&&Zl.error(`Auth (${_s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Mf(t,...e)}function fn(t,...e){return Mf(t,...e)}function pE(t,e,n){const r=Object.assign(Object.assign({},H1()),{[e]:n});return new ui("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return pE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fE.create(t,...e)}function Z(t,e,...n){if(!t)throw Mf(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ml(e),new Error(e)}function Mn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function q1(){return Xg()==="http:"||Xg()==="https:"}function Xg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q1()||rE()||"connection"in navigator)?navigator.onLine:!0}function G1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=_R()||TR()}get(){return K1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new oa(3e4,6e4);function hi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function br(t,e,n,r,i={}){return gE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return ER()||(c.referrerPolicy="no-referrer"),mE.fetch()(yE(t,t.config.apiHost,n,a),c)})}async function gE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q1),e);try{const i=new X1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ya(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pE(t,h,c);tn(t,h)}}catch(i){if(i instanceof rn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function ju(t,e,n,r,i={}){const s=await br(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ff(t.config,i):`${t.config.apiScheme}://${i}`}function J1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Y1.get())})}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}function Zg(t){return t!==void 0&&t.enterprise!==void 0}class Z1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return J1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eP(t,e){return br(t,"GET","/v2/recaptchaConfig",hi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function vE(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nP(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=jf(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yo(rh(i.auth_time)),issuedAtTime:yo(rh(i.iat)),expirationTime:yo(rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function jf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zw(n);return i?JSON.parse(i):(ml("Failed to decode base64 JWT payload"),null)}catch(i){return ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ey(t){const e=jf(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&rP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yo(this.lastLoginAt),this.creationTime=yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ho(t,vE(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_E(s.providerUserInfo):[],a=oP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new md(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function sP(t){const e=nt(t);await eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _E(t){return t.map(e=>{var{providerId:n}=e,r=Vf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e){const n=await gE(t,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lP(t,e){return br(t,"POST","/v2/accounts:revokeToken",hi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=ey(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new md(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nP(this,e)}reload(){return sP(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await Ho(this,tP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:x,isAnonymous:b,providerData:M,stsTokenManager:T}=n;Z(I&&T,e,"internal-error");const y=Gi.fromJSON(this.name,T);Z(typeof I=="string",e,"internal-error"),qn(f,e.name),qn(m,e.name),Z(typeof x=="boolean",e,"internal-error"),Z(typeof b=="boolean",e,"internal-error"),qn(g,e.name),qn(v,e.name),qn(S,e.name),qn(k,e.name),qn(E,e.name),qn(w,e.name);const A=new Pn({uid:I,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:b,photoURL:v,phoneNumber:g,tenantId:S,stsTokenManager:y,createdAt:E,lastLoginAt:w});return M&&Array.isArray(M)&&(A.providerData=M.map(C=>Object.assign({},C))),k&&(A._redirectEventId=k),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gi;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await eu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_E(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Gi;a.updateFromIdToken(r);const u=new Pn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;function kn(t){Mn(t instanceof Function,"Expected a class definition");let e=ty.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ty.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wE.type="NONE";const ny=wE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t,e,n){return`firebase:${t}:${e}:${n}`}class Qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gl(this.userKey,i.apiKey,s),this.fullPersistenceKey=gl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qi(kn(ny),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(ny);const o=gl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Pn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Qi(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CE(e))return"Blackberry";if(RE(e))return"Webos";if(TE(e))return"Safari";if((e.includes("chrome/")||IE(e))&&!e.includes("edge/"))return"Chrome";if(SE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function EE(t=ft()){return/firefox\//i.test(t)}function TE(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function IE(t=ft()){return/crios\//i.test(t)}function AE(t=ft()){return/iemobile/i.test(t)}function SE(t=ft()){return/android/i.test(t)}function CE(t=ft()){return/blackberry/i.test(t)}function RE(t=ft()){return/webos/i.test(t)}function Uf(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uP(t=ft()){var e;return Uf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cP(){return IR()&&document.documentMode===10}function PE(t=ft()){return Uf(t)||SE(t)||RE(t)||CE(t)||/windows phone/i.test(t)||AE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e=[]){let n;switch(t){case"Browser":n=ry(ft());break;case"Worker":n=`${ry(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e={}){return br(t,"GET","/v2/passwordPolicy",hi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=6;class pP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new hP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vE(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(yr(this));const n=e?nt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dP(this),n=new pP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&W1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ws(t){return nt(t)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=NR(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gP(t){Uu=t}function NE(t){return Uu.loadJS(t)}function yP(){return Uu.recaptchaEnterpriseScript}function vP(){return Uu.gapiScript}function _P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wP{constructor(){this.enterprise=new EP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class EP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const TP="recaptcha-enterprise",xE="NO_RECAPTCHA";class IP{constructor(e){this.type=TP,this.auth=ws(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{eP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Z1(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Zg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Zg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=yP();u.length!==0&&(u+=a),NE(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sy(t,e,n,r=!1,i=!1){const s=new IP(t);let o;if(i)o=xE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function oy(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await sy(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){const n=ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tr(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function SP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CP(t,e,n){const r=ws(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=OE(e),{host:o,port:a}=RP(e),u=a===null?"":`:${a}`,c={url:`${s}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(Tr(c,r.config.emulator)&&Tr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,PP()}function OE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RP(t){const e=OE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ay(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ay(o)}}}function ay(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function kP(t,e){return br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e){return ju(t,"POST","/v1/accounts:signInWithPassword",hi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return ju(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}async function OP(t,e){return ju(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends zf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oy(e,n,"signInWithPassword",NP);case"emailLink":return xP(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oy(e,r,"signUpPassword",kP);case"emailLink":return OP(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return ju(t,"POST","/v1/accounts:signInWithIdp",hi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP="http://localhost";class ni extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:DP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LP(t){const e=to(no(t)).link,n=e?to(no(e)).deep_link_id:null,r=to(no(t)).deep_link_id;return(r?to(no(r)).link:null)||r||n||e||t}class Bf{constructor(e){var n,r,i,s,o,a;const u=to(no(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=bP((i=u.mode)!==null&&i!==void 0?i:null);Z(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=LP(e);try{return new Bf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bf.parseLink(n);return Z(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends DE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends aa{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends aa{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends aa{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=ly(r);return new ss({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ly(r);return new ss({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ly(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tu(e,n,r,i)}}function bE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(t,s,e,r):s})}async function VP(t,e,n=!1){const r=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(yr(r));const i="reauthenticate";try{const s=await Ho(t,bE(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=jf(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),ss._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(t,e,n=!1){if(Qt(t.app))return Promise.reject(yr(t));const r="signIn",i=await bE(t,r,e),s=await ss._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function FP(t,e){return LE(ws(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t){const e=ws(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function UP(t,e,n){return Qt(t.app)?Promise.reject(yr(t)):FP(nt(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jP(t),r})}function zP(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function BP(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function $P(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}const nu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=1e3,WP=10;class ME extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ME.type="LOCAL";const qP=ME;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FE.type="SESSION";const jE=FE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await KP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=$f("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function QP(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function YP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XP(){return UE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="firebaseLocalStorageDb",ZP=1,ru="firebaseLocalStorage",BE="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bu(t,e){return t.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function ek(){const t=indexedDB.deleteDatabase(zE);return new la(t).toPromise()}function gd(){const t=indexedDB.open(zE,ZP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ru,{keyPath:BE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await ek(),e(await gd()))})})}async function uy(t,e,n){const r=Bu(t,!0).put({[BE]:e,value:n});return new la(r).toPromise()}async function tk(t,e){const n=Bu(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function cy(t,e){const n=Bu(t,!0).delete(e);return new la(n).toPromise()}const nk=800,rk=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zu._getInstance(XP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YP(),!this.activeServiceWorker)return;this.sender=new GP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await uy(e,nu,"1"),await cy(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bu(i,!1).getAll();return new la(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const ik=$E;new oa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e){return e?kn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ok(t){return LE(t.auth,new Hf(t),t.bypassAuthState)}function ak(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),MP(n,new Hf(t),t.bypassAuthState)}async function lk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),VP(n,new Hf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ok;case"linkViaPopup":case"linkViaRedirect":return lk;case"reauthViaPopup":case"reauthViaRedirect":return ak;default:tn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=new oa(2e3,1e4);class zi extends HE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uk.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="pendingRedirect",yl=new Map;class hk extends HE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yl.get(this.auth._key());if(!e){try{const r=await dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yl.set(this.auth._key(),e)}return this.bypassAuthState||yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dk(t,e){const n=mk(e),r=pk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fk(t,e){yl.set(t._key(),e)}function pk(t){return kn(t._redirectPersistence)}function mk(t){return gl(ck,t.config.apiKey,t.name)}async function gk(t,e,n=!1){if(Qt(t.app))return Promise.reject(yr(t));const r=ws(t),i=sk(r,e),o=await new hk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=10*60*1e3;class vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_k(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yk&&this.cachedEventUids.clear(),this.cachedEventUids.has(hy(e))}saveEventToCache(e){this.cachedEventUids.add(hy(e)),this.lastProcessedEventTime=Date.now()}}function hy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _k(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e={}){return br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tk=/^https?/;async function Ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wk(t);for(const n of e)try{if(Ak(n))return}catch{}tn(t,"unauthorized-domain")}function Ak(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Tk.test(n))return!1;if(Ek.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new oa(3e4,6e4);function dy(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ck(t){return new Promise((e,n)=>{var r,i,s;function o(){dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dy(),n(fn(t,"network-request-failed"))},timeout:Sk.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const a=_P("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},NE(`${vP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw vl=null,e})}let vl=null;function Rk(t){return vl=vl||Ck(t),vl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new oa(5e3,15e3),kk="__/auth/iframe",Nk="emulator/auth/iframe",xk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dk(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ff(e,Nk):`https://${t.config.authDomain}/${kk}`,r={apiKey:e.apiKey,appName:t.name,v:_s},i=Ok.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sa(r).slice(1)}`}async function bk(t){const e=await Rk(t),n=pn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:Dk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=pn().setTimeout(()=>{s(o)},Pk.get());function u(){pn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vk=500,Mk=600,Fk="_blank",jk="http://localhost";class fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uk(t,e,n,r=Vk,i=Mk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Lk),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ft().toLowerCase();n&&(a=IE(c)?Fk:n),EE(c)&&(e=e||jk,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[g,v])=>`${m}${g}=${v},`,"");if(uP(c)&&a!=="_self")return zk(e||"",a),new fy(null);const f=window.open(e||"",a,h);Z(f,t,"popup-blocked");try{f.focus()}catch{}return new fy(f)}function zk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="__/auth/handler",$k="emulator/auth/handler",Hk=encodeURIComponent("fac");async function py(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_s,eventId:i};if(e instanceof DE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof aa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${Hk}=${encodeURIComponent(u)}`:"";return`${Wk(t)}?${sa(a).slice(1)}${c}`}function Wk({config:t}){return t.emulator?Ff(t,$k):`https://${t.authDomain}/${Bk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="webStorageSupport";class qk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jE,this._completeRedirectFn=gk,this._overrideRedirectResult=fk}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await py(e,n,r,pd(),i);return Uk(e,o,$f())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await py(e,n,r,pd(),i);return QP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bk(e),r=new vk(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ih];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PE()||TE()||Uf()}}const Kk=qk;var my="@firebase/auth",gy="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yk(t){yn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kE(t)},c=new mP(r,i,s,u);return SP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new en("auth-internal",e=>{const n=ws(e.getProvider("auth").getImmediate());return(r=>new Gk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(my,gy,Qk(t)),zt(my,gy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=5*60,Xk=nE("authIdTokenMaxAge")||Jk;let yy=null;const Zk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xk)return;const i=n==null?void 0:n.token;yy!==i&&(yy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eN(t=Lf()){const e=ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AP(t,{popupRedirectResolver:Kk,persistence:[ik,qP,jE]}),r=nE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Zk(s.toString());BP(n,o,()=>o(n.currentUser)),zP(n,a=>o(a))}}const i=eE("auth");return i&&CP(n,`http://${i}`),n}function tN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yk("Browser");var nN="firebase",rN="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(nN,rN,"app");const qE="@firebase/installations",Wf="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=1e4,GE=`w:${Wf}`,QE="FIS_v2",iN="https://firebaseinstallations.googleapis.com/v1",sN=60*60*1e3,oN="installations",aN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ri=new ui(oN,aN,lN);function YE(t){return t instanceof rn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE({projectId:t}){return`${iN}/projects/${t}/installations`}function XE(t){return{token:t.token,requestStatus:2,expiresIn:cN(t.expiresIn),creationTime:Date.now()}}async function ZE(t,e){const r=(await e.json()).error;return ri.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function e0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function uN(t,{refreshToken:e}){const n=e0(t);return n.append("Authorization",hN(e)),n}async function t0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cN(t){return Number(t.replace("s","000"))}function hN(t){return`${QE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=JE(t),i=e0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:QE,appId:t.appId,sdkVersion:GE},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await t0(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:XE(c.authToken)}}else throw await ZE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=/^[cdef][\w-]{21}$/,yd="";function mN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=gN(t);return pN.test(n)?n:yd}catch{return yd}}function gN(t){return fN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Map;function i0(t,e){const n=$u(t);s0(n,e),yN(n,e)}function s0(t,e){const n=r0.get(t);if(n)for(const r of n)r(e)}function yN(t,e){const n=vN();n&&n.postMessage({key:t,fid:e}),_N()}let qr=null;function vN(){return!qr&&"BroadcastChannel"in self&&(qr=new BroadcastChannel("[Firebase] FID Change"),qr.onmessage=t=>{s0(t.data.key,t.data.fid)}),qr}function _N(){r0.size===0&&qr&&(qr.close(),qr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="firebase-installations-database",EN=1,ii="firebase-installations-store";let sh=null;function qf(){return sh||(sh=lE(wN,EN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}})),sh}async function iu(t,e){const n=$u(t),i=(await qf()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&i0(t,e.fid),e}async function o0(t){const e=$u(t),r=(await qf()).transaction(ii,"readwrite");await r.objectStore(ii).delete(e),await r.done}async function Hu(t,e){const n=$u(t),i=(await qf()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&i0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(t){let e;const n=await Hu(t.appConfig,r=>{const i=TN(r),s=IN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===yd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function TN(t){const e=t||{fid:mN(),registrationStatus:0};return a0(e)}function IN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ri.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=AN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SN(t)}:{installationEntry:e}}async function AN(t,e){try{const n=await dN(t,e);return iu(t.appConfig,n)}catch(n){throw YE(n)&&n.customData.serverCode===409?await o0(t.appConfig):await iu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function SN(t){let e=await vy(t.appConfig);for(;e.registrationStatus===1;)await n0(100),e=await vy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Kf(t);return r||n}return e}function vy(t){return Hu(t,e=>{if(!e)throw ri.create("installation-not-found");return a0(e)})}function a0(t){return CN(t)?{fid:t.fid,registrationStatus:0}:t}function CN(t){return t.registrationStatus===1&&t.registrationTime+KE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN({appConfig:t,heartbeatServiceProvider:e},n){const r=PN(t,n),i=uN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:GE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await t0(()=>fetch(r,a));if(u.ok){const c=await u.json();return XE(c)}else throw await ZE("Generate Auth Token",u)}function PN(t,{fid:e}){return`${JE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(t,e=!1){let n;const r=await Hu(t.appConfig,s=>{if(!l0(s))throw ri.create("not-registered");const o=s.authToken;if(!e&&xN(o))return s;if(o.requestStatus===1)return n=kN(t,e),s;{if(!navigator.onLine)throw ri.create("app-offline");const a=DN(s);return n=NN(t,a),a}});return n?await n:r.authToken}async function kN(t,e){let n=await _y(t.appConfig);for(;n.authToken.requestStatus===1;)await n0(100),n=await _y(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gf(t,e):r}function _y(t){return Hu(t,e=>{if(!l0(e))throw ri.create("not-registered");const n=e.authToken;return bN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function NN(t,e){try{const n=await RN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await iu(t.appConfig,r),n}catch(n){if(YE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await o0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await iu(t.appConfig,r)}throw n}}function l0(t){return t!==void 0&&t.registrationStatus===2}function xN(t){return t.requestStatus===2&&!ON(t)}function ON(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+sN}function DN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function bN(t){return t.requestStatus===1&&t.requestTime+KE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Kf(e);return r?r.catch(console.error):Gf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e=!1){const n=t;return await MN(n),(await Gf(n,e)).token}async function MN(t){const{registrationPromise:e}=await Kf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){if(!t||!t.options)throw oh("App Configuration");if(!t.name)throw oh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw oh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function oh(t){return ri.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="installations",jN="installations-internal",UN=t=>{const e=t.getProvider("app").getImmediate(),n=FN(e),r=ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zN=t=>{const e=t.getProvider("app").getImmediate(),n=ci(e,u0).getImmediate();return{getId:()=>LN(n),getToken:i=>VN(n,i)}};function BN(){yn(new en(u0,UN,"PUBLIC")),yn(new en(jN,zN,"PRIVATE"))}BN();zt(qE,Wf);zt(qE,Wf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="analytics",$N="firebase_id",HN="origin",WN=60*1e3,qN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Fu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new ui("analytics","Analytics",KN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){if(!t.startsWith(Qf)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function c0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function QN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function YN(t,e){const n=QN("firebase-js-sdk-policy",{createScriptURL:GN}),r=document.createElement("script"),i=`${Qf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function JN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await c0(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){St.error(a)}t("config",i,s)}async function ZN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await c0(n);for(const u of o){const c=a.find(f=>f.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){St.error(s)}}function ex(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await ZN(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await XN(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){St.error(a)}}return i}function tx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ex(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function nx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=30,ix=1e3;class sx{constructor(e={},n=ix){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const h0=new sx;function ox(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ax(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ox(r)},s=qN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function lx(t,e=h0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hx;return setTimeout(async()=>{a.abort()},WN),d0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function d0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=h0){var s;const{appId:o,measurementId:a}=t;try{await ux(r,e)}catch(u){if(a)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await ax(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!cx(c)){if(i.deleteThrottleMetadata(o),a)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?$g(n,i.intervalMillis,rx):$g(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),St.debug(`Calling attemptFetch again in ${h} millis`),d0(t,f,r,i)}}function ux(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cx(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(){if(iE())try{await sE()}catch(t){return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function px(t,e,n,r,i,s,o){var a;const u=lx(t);u.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>St.error(g)),e.push(u);const c=fx().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([u,c]);nx(s)||YN(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[HN]="firebase",m.update=!0,f!=null&&(m[$N]=f),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.app=e}_delete(){return delete vo[this.app.options.appId],Promise.resolve()}}let vo={},wy=[];const Ey={};let ah="dataLayer",gx="gtag",Ty,f0,Iy=!1;function yx(){const t=[];if(rE()&&t.push("This is a browser extension environment."),SR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function vx(t,e,n){yx();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(vo[r]!=null)throw Nt.create("already-exists",{id:r});if(!Iy){JN(ah);const{wrappedGtag:s,gtagCore:o}=tx(vo,wy,Ey,ah,gx);f0=s,Ty=o,Iy=!0}return vo[r]=px(t,wy,Ey,e,Ty,ah,n),new mx(t)}function _x(t=Lf()){t=nt(t);const e=ci(t,su);return e.isInitialized()?e.getImmediate():wx(t)}function wx(t,e={}){const n=ci(t,su);if(n.isInitialized()){const i=n.getImmediate();if(Tr(e,n.getOptions()))return i;throw Nt.create("already-initialized")}return n.initialize({options:e})}function Ex(t,e,n,r){t=nt(t),dx(f0,vo[t.app.options.appId],e,n,r).catch(i=>St.error(i))}const Ay="@firebase/analytics",Sy="0.10.12";function Tx(){yn(new en(su,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return vx(r,i,n)},"PUBLIC")),yn(new en("analytics-internal",t,"PRIVATE")),zt(Ay,Sy),zt(Ay,Sy,"esm2017");function t(e){try{const n=e.getProvider(su).getImmediate();return{logEvent:(r,i,s)=>Ex(n,r,i,s)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}Tx();var Cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,p0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function A(){}A.prototype=y.prototype,T.D=y.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(C,P,N){for(var R=Array(arguments.length-2),re=2;re<arguments.length;re++)R[re-2]=arguments[re];return y.prototype[P].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,A){A||(A=0);var C=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)C[P]=y.charCodeAt(A++)|y.charCodeAt(A++)<<8|y.charCodeAt(A++)<<16|y.charCodeAt(A++)<<24;else for(P=0;16>P;++P)C[P]=y[A++]|y[A++]<<8|y[A++]<<16|y[A++]<<24;y=T.g[0],A=T.g[1],P=T.g[2];var N=T.g[3],R=y+(N^A&(P^N))+C[0]+3614090360&4294967295;y=A+(R<<7&4294967295|R>>>25),R=N+(P^y&(A^P))+C[1]+3905402710&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(A^N&(y^A))+C[2]+606105819&4294967295,P=N+(R<<17&4294967295|R>>>15),R=A+(y^P&(N^y))+C[3]+3250441966&4294967295,A=P+(R<<22&4294967295|R>>>10),R=y+(N^A&(P^N))+C[4]+4118548399&4294967295,y=A+(R<<7&4294967295|R>>>25),R=N+(P^y&(A^P))+C[5]+1200080426&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(A^N&(y^A))+C[6]+2821735955&4294967295,P=N+(R<<17&4294967295|R>>>15),R=A+(y^P&(N^y))+C[7]+4249261313&4294967295,A=P+(R<<22&4294967295|R>>>10),R=y+(N^A&(P^N))+C[8]+1770035416&4294967295,y=A+(R<<7&4294967295|R>>>25),R=N+(P^y&(A^P))+C[9]+2336552879&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(A^N&(y^A))+C[10]+4294925233&4294967295,P=N+(R<<17&4294967295|R>>>15),R=A+(y^P&(N^y))+C[11]+2304563134&4294967295,A=P+(R<<22&4294967295|R>>>10),R=y+(N^A&(P^N))+C[12]+1804603682&4294967295,y=A+(R<<7&4294967295|R>>>25),R=N+(P^y&(A^P))+C[13]+4254626195&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(A^N&(y^A))+C[14]+2792965006&4294967295,P=N+(R<<17&4294967295|R>>>15),R=A+(y^P&(N^y))+C[15]+1236535329&4294967295,A=P+(R<<22&4294967295|R>>>10),R=y+(P^N&(A^P))+C[1]+4129170786&4294967295,y=A+(R<<5&4294967295|R>>>27),R=N+(A^P&(y^A))+C[6]+3225465664&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^A&(N^y))+C[11]+643717713&4294967295,P=N+(R<<14&4294967295|R>>>18),R=A+(N^y&(P^N))+C[0]+3921069994&4294967295,A=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(A^P))+C[5]+3593408605&4294967295,y=A+(R<<5&4294967295|R>>>27),R=N+(A^P&(y^A))+C[10]+38016083&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^A&(N^y))+C[15]+3634488961&4294967295,P=N+(R<<14&4294967295|R>>>18),R=A+(N^y&(P^N))+C[4]+3889429448&4294967295,A=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(A^P))+C[9]+568446438&4294967295,y=A+(R<<5&4294967295|R>>>27),R=N+(A^P&(y^A))+C[14]+3275163606&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^A&(N^y))+C[3]+4107603335&4294967295,P=N+(R<<14&4294967295|R>>>18),R=A+(N^y&(P^N))+C[8]+1163531501&4294967295,A=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(A^P))+C[13]+2850285829&4294967295,y=A+(R<<5&4294967295|R>>>27),R=N+(A^P&(y^A))+C[2]+4243563512&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^A&(N^y))+C[7]+1735328473&4294967295,P=N+(R<<14&4294967295|R>>>18),R=A+(N^y&(P^N))+C[12]+2368359562&4294967295,A=P+(R<<20&4294967295|R>>>12),R=y+(A^P^N)+C[5]+4294588738&4294967295,y=A+(R<<4&4294967295|R>>>28),R=N+(y^A^P)+C[8]+2272392833&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^A)+C[11]+1839030562&4294967295,P=N+(R<<16&4294967295|R>>>16),R=A+(P^N^y)+C[14]+4259657740&4294967295,A=P+(R<<23&4294967295|R>>>9),R=y+(A^P^N)+C[1]+2763975236&4294967295,y=A+(R<<4&4294967295|R>>>28),R=N+(y^A^P)+C[4]+1272893353&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^A)+C[7]+4139469664&4294967295,P=N+(R<<16&4294967295|R>>>16),R=A+(P^N^y)+C[10]+3200236656&4294967295,A=P+(R<<23&4294967295|R>>>9),R=y+(A^P^N)+C[13]+681279174&4294967295,y=A+(R<<4&4294967295|R>>>28),R=N+(y^A^P)+C[0]+3936430074&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^A)+C[3]+3572445317&4294967295,P=N+(R<<16&4294967295|R>>>16),R=A+(P^N^y)+C[6]+76029189&4294967295,A=P+(R<<23&4294967295|R>>>9),R=y+(A^P^N)+C[9]+3654602809&4294967295,y=A+(R<<4&4294967295|R>>>28),R=N+(y^A^P)+C[12]+3873151461&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^A)+C[15]+530742520&4294967295,P=N+(R<<16&4294967295|R>>>16),R=A+(P^N^y)+C[2]+3299628645&4294967295,A=P+(R<<23&4294967295|R>>>9),R=y+(P^(A|~N))+C[0]+4096336452&4294967295,y=A+(R<<6&4294967295|R>>>26),R=N+(A^(y|~P))+C[7]+1126891415&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~A))+C[14]+2878612391&4294967295,P=N+(R<<15&4294967295|R>>>17),R=A+(N^(P|~y))+C[5]+4237533241&4294967295,A=P+(R<<21&4294967295|R>>>11),R=y+(P^(A|~N))+C[12]+1700485571&4294967295,y=A+(R<<6&4294967295|R>>>26),R=N+(A^(y|~P))+C[3]+2399980690&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~A))+C[10]+4293915773&4294967295,P=N+(R<<15&4294967295|R>>>17),R=A+(N^(P|~y))+C[1]+2240044497&4294967295,A=P+(R<<21&4294967295|R>>>11),R=y+(P^(A|~N))+C[8]+1873313359&4294967295,y=A+(R<<6&4294967295|R>>>26),R=N+(A^(y|~P))+C[15]+4264355552&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~A))+C[6]+2734768916&4294967295,P=N+(R<<15&4294967295|R>>>17),R=A+(N^(P|~y))+C[13]+1309151649&4294967295,A=P+(R<<21&4294967295|R>>>11),R=y+(P^(A|~N))+C[4]+4149444226&4294967295,y=A+(R<<6&4294967295|R>>>26),R=N+(A^(y|~P))+C[11]+3174756917&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~A))+C[2]+718787259&4294967295,P=N+(R<<15&4294967295|R>>>17),R=A+(N^(P|~y))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var A=y-this.blockSize,C=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=A;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(C[P++]=T.charCodeAt(N++),P==this.blockSize){i(this,C),P=0;break}}else for(;N<y;)if(C[P++]=T[N++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var A=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=A&255,A/=256;for(this.u(T),T=Array(16),y=A=0;4>y;++y)for(var C=0;32>C;C+=8)T[A++]=this.g[y]>>>C&255;return T};function s(T,y){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=y(T)}function o(T,y){this.h=y;for(var A=[],C=!0,P=T.length-1;0<=P;P--){var N=T[P]|0;C&&N==y||(A[P]=N,C=!1)}this.g=A}var a={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return k(c(-T));for(var y=[],A=1,C=0;T>=A;C++)y[C]=T/A|0,A*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return k(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(y,8)),C=f,P=0;P<T.length;P+=8){var N=Math.min(8,T.length-P),R=parseInt(T.substring(P,P+N),y);8>N?(N=c(Math.pow(y,N)),C=C.j(N).add(c(R))):(C=C.j(A),C=C.add(c(R)))}return C}var f=u(0),m=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(S(this))return-k(this).m();for(var T=0,y=1,A=0;A<this.g.length;A++){var C=this.i(A);T+=(0<=C?C:4294967296+C)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(v(this))return"0";if(S(this))return"-"+k(this).toString(T);for(var y=c(Math.pow(T,6)),A=this,C="";;){var P=x(A,y).g;A=E(A,P.j(y));var N=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=P,v(A))return N+C;for(;6>N.length;)N="0"+N;C=N+C}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function v(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function S(T){return T.h==-1}t.l=function(T){return T=E(this,T),S(T)?-1:v(T)?0:1};function k(T){for(var y=T.g.length,A=[],C=0;C<y;C++)A[C]=~T.g[C];return new o(A,~T.h).add(m)}t.abs=function(){return S(this)?k(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0,P=0;P<=y;P++){var N=C+(this.i(P)&65535)+(T.i(P)&65535),R=(N>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);C=R>>>16,N&=65535,R&=65535,A[P]=R<<16|N}return new o(A,A[A.length-1]&-2147483648?-1:0)};function E(T,y){return T.add(k(y))}t.j=function(T){if(v(this)||v(T))return f;if(S(this))return S(T)?k(this).j(k(T)):k(k(this).j(T));if(S(T))return k(this.j(k(T)));if(0>this.l(g)&&0>T.l(g))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,A=[],C=0;C<2*y;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<T.g.length;P++){var N=this.i(C)>>>16,R=this.i(C)&65535,re=T.i(P)>>>16,ce=T.i(P)&65535;A[2*C+2*P]+=R*ce,w(A,2*C+2*P),A[2*C+2*P+1]+=N*ce,w(A,2*C+2*P+1),A[2*C+2*P+1]+=R*re,w(A,2*C+2*P+1),A[2*C+2*P+2]+=N*re,w(A,2*C+2*P+2)}for(C=0;C<y;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=y;C<2*y;C++)A[C]=0;return new o(A,0)};function w(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function I(T,y){this.g=T,this.h=y}function x(T,y){if(v(y))throw Error("division by zero");if(v(T))return new I(f,f);if(S(T))return y=x(k(T),y),new I(k(y.g),k(y.h));if(S(y))return y=x(T,k(y)),new I(k(y.g),y.h);if(30<T.g.length){if(S(T)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var A=m,C=y;0>=C.l(T);)A=b(A),C=b(C);var P=M(A,1),N=M(C,1);for(C=M(C,2),A=M(A,2);!v(C);){var R=N.add(C);0>=R.l(T)&&(P=P.add(A),N=R),C=M(C,1),A=M(A,1)}return y=E(T,P.j(y)),new I(P,y)}for(P=f;0<=T.l(y);){for(A=Math.max(1,Math.floor(T.m()/y.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),N=c(A),R=N.j(y);S(R)||0<R.l(T);)A-=C,N=c(A),R=N.j(y);v(N)&&(N=m),P=P.add(N),T=E(T,R)}return new I(P,T)}t.A=function(T){return x(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)&T.i(C);return new o(A,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)|T.i(C);return new o(A,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)^T.i(C);return new o(A,this.h^T.h)};function b(T){for(var y=T.g.length+1,A=[],C=0;C<y;C++)A[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(A,T.h)}function M(T,y){var A=y>>5;y%=32;for(var C=T.g.length-A,P=[],N=0;N<C;N++)P[N]=0<y?T.i(N+A)>>>y|T.i(N+A+1)<<32-y:T.i(N+A);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,p0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,vr=o}).apply(typeof Cy<"u"?Cy:typeof self<"u"?self:typeof window<"u"?window:{});var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m0,ro,g0,_l,vd,y0,v0,_0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ja=="object"&&Ja];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var O=l[_];if(!(O in p))break e;p=p[O]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,_=!1,O={next:function(){if(!_&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),l.apply(d,O)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function v(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,O,L){for(var H=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)H[ve-2]=arguments[ve];return d.prototype[O].apply(_,H)}}function S(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function k(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const O=l.length||0,L=_.length||0;l.length=O+L;for(let H=0;H<L;H++)l[O+H]=_[H]}else l.push(_)}}class E{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var b=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function M(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function T(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,d){let p,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(p in _)l[p]=_[p];for(let L=0;L<A.length;L++)p=A[L],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function P(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function R(){var l=$;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class re{constructor(){this.h=this.g=null}add(d,p){const _=ce.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ce=new E(()=>new ie,l=>l.reset());class ie{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,W=!1,$=new re,U=()=>{const l=a.Promise.resolve(void 0);Fe=()=>{l.then(J)}};var J=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){N(p)}var d=ce;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}W=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var V=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Lt(l,d){if(fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(b){e:{try{x(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Q[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Lt.aa.h.call(this)}}v(Lt,fe);var Q={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),$e=0;function He(l,d,p,_,O){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=O,this.key=++$e,this.da=this.fa=!1}function ge(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Qe(l){this.src=l,this.g={},this.h=0}Qe.prototype.add=function(l,d,p,_,O){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var H=_n(l,d,_,O);return-1<H?(d=l[H],p||(d.fa=!1)):(d=new He(d,this.src,L,!!_,O),d.fa=p,l.push(d)),d};function sn(l,d){var p=d.type;if(p in l.g){var _=l.g[p],O=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(_,O,1),L&&(ge(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function _n(l,d,p,_){for(var O=0;O<l.length;++O){var L=l[O];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==_)return O}return-1}var wn="closure_lm_"+(1e6*Math.random()|0),gi={};function zn(l,d,p,_,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)zn(l,d[L],p,_,O);return null}return p=yi(p),l&&l[oe]?l.K(d,p,c(_)?!!_.capture:!1,O):oc(l,d,p,!1,_,O)}function oc(l,d,p,_,O,L){if(!d)throw Error("Invalid event type");var H=c(O)?!!O.capture:!!O,ve=Lr(l);if(ve||(l[wn]=ve=new Qe(l)),p=ve.add(d,p,_,H,L),p.proxy)return p;if(_=pa(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)V||(O=H),O===void 0&&(O=!1),l.addEventListener(d.toString(),_,O);else if(l.attachEvent)l.attachEvent(Ps(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function pa(){function l(p){return d.call(l.src,l.listener,p)}const d=ks;return l}function ma(l,d,p,_,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)ma(l,d[L],p,_,O);else _=c(_)?!!_.capture:!!_,p=yi(p),l&&l[oe]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=_n(L,p,_,O),-1<p&&(ge(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=Lr(l))&&(d=l.g[d.toString()],l=-1,d&&(l=_n(d,p,_,O)),(p=-1<l?d[l]:null)&&Rs(p))}function Rs(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[oe])sn(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(Ps(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=Lr(d))?(sn(p,l),p.h==0&&(p.src=null,d[wn]=null)):ge(l)}}}function Ps(l){return l in gi?gi[l]:gi[l]="on"+l}function ks(l,d){if(l.da)l=!0;else{d=new Lt(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&Rs(l),l=p.call(_,d)}return l}function Lr(l){return l=l[wn],l instanceof Qe?l:null}var Ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(l){return typeof l=="function"?l:(l[Ns]||(l[Ns]=function(d){return l.handleEvent(d)}),l[Ns])}function xe(){q.call(this),this.i=new Qe(this),this.M=this,this.F=null}v(xe,q),xe.prototype[oe]=!0,xe.prototype.removeEventListener=function(l,d,p,_){ma(this,l,d,p,_)};function We(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new fe(d,l);else if(d instanceof fe)d.target=d.target||l;else{var O=d;d=new fe(_,l),C(d,O)}if(O=!0,p)for(var L=p.length-1;0<=L;L--){var H=d.g=p[L];O=vi(H,_,!0,d)&&O}if(H=d.g=l,O=vi(H,_,!0,d)&&O,O=vi(H,_,!1,d)&&O,p)for(L=0;L<p.length;L++)H=d.g=p[L],O=vi(H,_,!1,d)&&O}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)ge(p[_]);delete l.g[d],l.h--}}this.F=null},xe.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},xe.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function vi(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var H=d[L];if(H&&!H.da&&H.capture==p){var ve=H.listener,Ye=H.ha||H.src;H.fa&&sn(l.i,H),O=ve.call(Ye,_)!==!1&&O}}return O&&!_.defaultPrevented}function ga(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function _i(l){l.g=ga(()=>{l.g=null,l.i&&(l.i=!1,_i(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ac extends q{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_i(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(l){q.call(this),this.h=l,this.g={}}v(on,q);var ya=[];function xp(l){M(l.g,function(d,p){this.g.hasOwnProperty(p)&&Rs(d)},l),l.g={}}on.prototype.N=function(){on.aa.N.call(this),xp(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lc=a.JSON.stringify,QT=a.JSON.parse,YT=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function uc(){}uc.prototype.h=null;function Op(l){return l.h||(l.h=l.i())}function Dp(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cc(){fe.call(this,"d")}v(cc,fe);function hc(){fe.call(this,"c")}v(hc,fe);var Vr={},bp=null;function va(){return bp=bp||new xe}Vr.La="serverreachability";function Lp(l){fe.call(this,Vr.La,l)}v(Lp,fe);function Os(l){const d=va();We(d,new Lp(d))}Vr.STAT_EVENT="statevent";function Vp(l,d){fe.call(this,Vr.STAT_EVENT,l),this.stat=d}v(Vp,fe);function pt(l){const d=va();We(d,new Vp(d,l))}Vr.Ma="timingevent";function Mp(l,d){fe.call(this,Vr.Ma,l),this.size=d}v(Mp,fe);function Ds(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function JT(l,d,p,_,O,L){l.info(function(){if(l.g)if(L)for(var H="",ve=L.split("&"),Ye=0;Ye<ve.length;Ye++){var pe=ve[Ye].split("=");if(1<pe.length){var it=pe[0];pe=pe[1];var st=it.split("_");H=2<=st.length&&st[1]=="type"?H+(it+"="+pe+"&"):H+(it+"=redacted&")}}else H=null;else H=L;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+d+`
`+p+`
`+H})}function XT(l,d,p,_,O,L,H){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+d+`
`+p+`
`+L+" "+H})}function wi(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+eI(l,p)+(_?" "+_:"")})}function ZT(l,d){l.info(function(){return"TIMEOUT: "+d})}bs.prototype.info=function(){};function eI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return lc(p)}catch{return d}}var _a={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dc;function wa(){}v(wa,uc),wa.prototype.g=function(){return new XMLHttpRequest},wa.prototype.i=function(){return{}},dc=new wa;function Bn(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jp}function jp(){this.i=null,this.g="",this.h=!1}var Up={},fc={};function pc(l,d,p){l.L=1,l.v=Aa(En(d)),l.m=p,l.P=!0,zp(l,null)}function zp(l,d){l.F=Date.now(),Ea(l),l.A=En(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),tm(p.i,"t",_),l.C=0,p=l.j.J,l.h=new jp,l.g=_m(l.j,p?d:null,!l.m),0<l.O&&(l.M=new ac(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(ya[0]=O.toString()),O=ya);for(var L=0;L<O.length;L++){var H=zn(p,O[L],_||d.handleEvent,!1,d.h||d);if(!H)break;d.g[H.key]=H}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Os(),JT(l.i,l.u,l.A,l.l,l.R,l.m)}Bn.prototype.ca=function(l){l=l.target;const d=this.M;d&&Tn(l)==3?d.j():this.Y(l)},Bn.prototype.Y=function(l){try{if(l==this.g)e:{const st=Tn(this.g);var d=this.g.Ba();const Ii=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||lm(this.g)))){this.J||st!=4||d==7||(d==8||0>=Ii?Os(3):Os(2)),mc(this);var p=this.g.Z();this.X=p;t:if(Bp(this)){var _=lm(this.g);l="";var O=_.length,L=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),Ls(this);var H="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(L&&d==O-1)});_.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=p==200,XT(this.i,this.u,this.A,this.l,this.R,st,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ye=this.g;if((ve=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ve)){var pe=ve;break t}}pe=null}if(p=pe)wi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gc(this,p);else{this.o=!1,this.s=3,pt(12),Mr(this),Ls(this);break e}}if(this.P){p=!0;let Ht;for(;!this.J&&this.C<H.length;)if(Ht=tI(this,H),Ht==fc){st==4&&(this.s=4,pt(14),p=!1),wi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Up){this.s=4,pt(15),wi(this.i,this.l,H,"[Invalid Chunk]"),p=!1;break}else wi(this.i,this.l,Ht,null),gc(this,Ht);if(Bp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||H.length!=0||this.h.h||(this.s=1,pt(16),p=!1),this.o=this.o&&p,!p)wi(this.i,this.l,H,"[Invalid Chunked Response]"),Mr(this),Ls(this);else if(0<H.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Tc(it),it.M=!0,pt(11))}}else wi(this.i,this.l,H,null),gc(this,H);st==4&&Mr(this),this.o&&!this.J&&(st==4?mm(this.j,this):(this.o=!1,Ea(this)))}else vI(this.g),p==400&&0<H.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Mr(this),Ls(this)}}}catch{}finally{}};function Bp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function tI(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?fc:(p=Number(d.substring(p,_)),isNaN(p)?Up:(_+=1,_+p>d.length?fc:(d=d.slice(_,_+p),l.C=_+p,d)))}Bn.prototype.cancel=function(){this.J=!0,Mr(this)};function Ea(l){l.S=Date.now()+l.I,$p(l,l.I)}function $p(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ds(m(l.ba,l),d)}function mc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Bn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ZT(this.i,this.A),this.L!=2&&(Os(),pt(17)),Mr(this),this.s=2,Ls(this)):$p(this,this.S-l)};function Ls(l){l.j.G==0||l.J||mm(l.j,l)}function Mr(l){mc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,xp(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function gc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||yc(p.h,l))){if(!l.K&&yc(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Na(p),Pa(p);else break e;Ec(p),pt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ds(m(p.Za,p),6e3));if(1>=qp(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else jr(p,11)}else if((l.K||p.g==l)&&Na(p),!w(d))for(O=p.Da.g.parse(d),d=0;d<O.length;d++){let pe=O[d];if(p.T=pe[0],pe=pe[1],p.G==2)if(pe[0]=="c"){p.K=pe[1],p.ia=pe[2];const it=pe[3];it!=null&&(p.la=it,p.j.info("VER="+p.la));const st=pe[4];st!=null&&(p.Aa=st,p.j.info("SVER="+p.Aa));const Ii=pe[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(_=1.5*Ii,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Ht=l.g;if(Ht){const Oa=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var L=_.h;L.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(vc(L,L.h),L.h=null))}if(_.D){const Ic=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Ic&&(_.ya=Ic,we(_.I,_.D,Ic))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var H=l;if(_.qa=vm(_,_.J?_.ia:null,_.W),H.K){Kp(_.h,H);var ve=H,Ye=_.L;Ye&&(ve.I=Ye),ve.B&&(mc(ve),Ea(ve)),_.g=H}else fm(_);0<p.i.length&&ka(p)}else pe[0]!="stop"&&pe[0]!="close"||jr(p,7);else p.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?jr(p,7):wc(p):pe[0]!="noop"&&p.l&&p.l.ta(pe),p.v=0)}}Os(4)}catch{}}var nI=class{constructor(l,d){this.g=l,this.map=d}};function Hp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function qp(l){return l.h?1:l.g?l.g.size:0}function yc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function vc(l,d){l.g?l.g.add(d):l.h=d}function Kp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Hp.prototype.cancel=function(){if(this.i=Gp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return S(l.i)}function rI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function iI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Qp(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=iI(l),_=rI(l),O=_.length,L=0;L<O;L++)d.call(void 0,_[L],p&&p[L],l)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),O=null;if(0<=_){var L=l[p].substring(0,_);O=l[p].substring(_+1)}else L=l[p];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Fr){this.h=l.h,Ta(this,l.j),this.o=l.o,this.g=l.g,Ia(this,l.s),this.l=l.l;var d=l.i,p=new Fs;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Jp(this,p),this.m=l.m}else l&&(d=String(l).match(Yp))?(this.h=!1,Ta(this,d[1]||"",!0),this.o=Vs(d[2]||""),this.g=Vs(d[3]||"",!0),Ia(this,d[4]),this.l=Vs(d[5]||"",!0),Jp(this,d[6]||"",!0),this.m=Vs(d[7]||"")):(this.h=!1,this.i=new Fs(null,this.h))}Fr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ms(d,Xp,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ms(d,Xp,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ms(p,p.charAt(0)=="/"?lI:aI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ms(p,cI)),l.join("")};function En(l){return new Fr(l)}function Ta(l,d,p){l.j=p?Vs(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Ia(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Jp(l,d,p){d instanceof Fs?(l.i=d,hI(l.i,l.h)):(p||(d=Ms(d,uI)),l.i=new Fs(d,l.h))}function we(l,d,p){l.i.set(d,p)}function Aa(l){return we(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Vs(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ms(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,oI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function oI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Xp=/[#\/\?@]/g,aI=/[#\?:]/g,lI=/[#\?]/g,uI=/[#\?@]/g,cI=/#/g;function Fs(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function $n(l){l.g||(l.g=new Map,l.h=0,l.i&&sI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Fs.prototype,t.add=function(l,d){$n(this),this.i=null,l=Ei(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Zp(l,d){$n(l),d=Ei(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function em(l,d){return $n(l),d=Ei(l,d),l.g.has(d)}t.forEach=function(l,d){$n(this),this.g.forEach(function(p,_){p.forEach(function(O){l.call(d,O,_,this)},this)},this)},t.na=function(){$n(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const O=l[_];for(let L=0;L<O.length;L++)p.push(d[_])}return p},t.V=function(l){$n(this);let d=[];if(typeof l=="string")em(this,l)&&(d=d.concat(this.g.get(Ei(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return $n(this),this.i=null,l=Ei(this,l),em(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function tm(l,d,p){Zp(l,d),0<p.length&&(l.i=null,l.g.set(Ei(l,d),S(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const L=encodeURIComponent(String(_)),H=this.V(_);for(_=0;_<H.length;_++){var O=L;H[_]!==""&&(O+="="+encodeURIComponent(String(H[_]))),l.push(O)}}return this.i=l.join("&")};function Ei(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function hI(l,d){d&&!l.j&&($n(l),l.i=null,l.g.forEach(function(p,_){var O=_.toLowerCase();_!=O&&(Zp(this,_),tm(this,O,p))},l)),l.j=d}function dI(l,d){const p=new bs;if(a.Image){const _=new Image;_.onload=g(Hn,p,"TestLoadImage: loaded",!0,d,_),_.onerror=g(Hn,p,"TestLoadImage: error",!1,d,_),_.onabort=g(Hn,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(Hn,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function fI(l,d){const p=new bs,_=new AbortController,O=setTimeout(()=>{_.abort(),Hn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(O),L.ok?Hn(p,"TestPingServer: ok",!0,d):Hn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Hn(p,"TestPingServer: error",!1,d)})}function Hn(l,d,p,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(p)}catch{}}function pI(){this.g=new YT}function mI(l,d,p){const _=p||"";try{Qp(l,function(O,L){let H=O;c(O)&&(H=lc(O)),d.push(_+L+"="+encodeURIComponent(H))})}catch(O){throw d.push(_+"type="+encodeURIComponent("_badmap")),O}}function Sa(l){this.l=l.Ub||null,this.j=l.eb||!1}v(Sa,uc),Sa.prototype.g=function(){return new Ca(this.l,this.j)},Sa.prototype.i=function(l){return function(){return l}}({});function Ca(l,d){xe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Ca,xe),t=Ca.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Us(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nm(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function nm(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?js(this):Us(this),this.readyState==3&&nm(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,js(this))},t.Qa=function(l){this.g&&(this.response=l,js(this))},t.ga=function(){this.g&&js(this)};function js(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Us(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Us(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function rm(l){let d="";return M(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function _c(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=rm(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):we(l,d,p))}function ke(l){xe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(ke,xe);var gI=/^https?$/i,yI=["POST","PUT"];t=ke.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dc.g(),this.v=this.o?Op(this.o):Op(dc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){im(this,L);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)p.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(yI,d,void 0))||_||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,H]of p)this.g.setRequestHeader(L,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{am(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){im(this,L)}};function im(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,sm(l),Ra(l)}function sm(l){l.A||(l.A=!0,We(l,"complete"),We(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,We(this,"complete"),We(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?om(this):this.bb())},t.bb=function(){om(this)};function om(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Tn(l)!=4||l.Z()!=2)){if(l.u&&Tn(l)==4)ga(l.Ea,0,l);else if(We(l,"readystatechange"),Tn(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=H===0){var O=String(l.D).match(Yp)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!gI.test(O?O.toLowerCase():"")}p=_}if(p)We(l,"complete"),We(l,"success");else{l.m=6;try{var L=2<Tn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",sm(l)}}finally{Ra(l)}}}}function Ra(l,d){if(l.g){am(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||We(l,"ready");try{p.onreadystatechange=_}catch{}}}function am(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Tn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),QT(d)}};function lm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vI(l){const d={};l=(l.g&&2<=Tn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var p=P(l[_]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[O]||[];d[O]=L,L.push(p)}T(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function um(l){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zs("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zs("baseRetryDelayMs",5e3,l),this.cb=zs("retryDelaySeedMs",1e4,l),this.Wa=zs("forwardChannelMaxRetries",2,l),this.wa=zs("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Hp(l&&l.concurrentRequestLimit),this.Da=new pI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=um.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){pt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=vm(this,null,this.W),ka(this)};function wc(l){if(cm(l),l.G==3){var d=l.U++,p=En(l.I);if(we(p,"SID",l.K),we(p,"RID",d),we(p,"TYPE","terminate"),Bs(l,p),d=new Bn(l,l.j,d),d.L=2,d.v=Aa(En(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=_m(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ea(d)}ym(l)}function Pa(l){l.g&&(Tc(l),l.g.cancel(),l.g=null)}function cm(l){Pa(l),l.u&&(a.clearTimeout(l.u),l.u=null),Na(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ka(l){if(!Wp(l.h)&&!l.s){l.s=!0;var d=l.Ga;Fe||U(),W||(Fe(),W=!0),$.add(d,l),l.B=0}}function _I(l,d){return qp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ds(m(l.Ga,l,d),gm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Bn(this,this.j,l);let L=this.o;if(this.S&&(L?(L=y(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=dm(this,O,d),p=En(this.I),we(p,"RID",l),we(p,"CVER",22),this.D&&we(p,"X-HTTP-Session-Id",this.D),Bs(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(rm(L)))+"&"+d:this.m&&_c(p,this.m,L)),vc(this.h,O),this.Ua&&we(p,"TYPE","init"),this.P?(we(p,"$req",d),we(p,"SID","null"),O.T=!0,pc(O,p,null)):pc(O,p,d),this.G=2}}else this.G==3&&(l?hm(this,l):this.i.length==0||Wp(this.h)||hm(this))};function hm(l,d){var p;d?p=d.l:p=l.U++;const _=En(l.I);we(_,"SID",l.K),we(_,"RID",p),we(_,"AID",l.T),Bs(l,_),l.m&&l.o&&_c(_,l.m,l.o),p=new Bn(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=dm(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),vc(l.h,p),pc(p,_,d)}function Bs(l,d){l.H&&M(l.H,function(p,_){we(d,_,p)}),l.l&&Qp({},function(p,_){we(d,_,p)})}function dm(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let L=-1;for(;;){const H=["count="+p];L==-1?0<p?(L=O[0].g,H.push("ofs="+L)):L=0:H.push("ofs="+L);let ve=!0;for(let Ye=0;Ye<p;Ye++){let pe=O[Ye].g;const it=O[Ye].map;if(pe-=L,0>pe)L=Math.max(0,O[Ye].g-100),ve=!1;else try{mI(it,H,"req"+pe+"_")}catch{_&&_(it)}}if(ve){_=H.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function fm(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Fe||U(),W||(Fe(),W=!0),$.add(d,l),l.v=0}}function Ec(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ds(m(l.Fa,l),gm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,pm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ds(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Pa(this),pm(this))};function Tc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function pm(l){l.g=new Bn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=En(l.qa);we(d,"RID","rpc"),we(d,"SID",l.K),we(d,"AID",l.T),we(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&we(d,"TO",l.ja),we(d,"TYPE","xmlhttp"),Bs(l,d),l.m&&l.o&&_c(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Aa(En(d)),p.m=null,p.P=!0,zp(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Pa(this),Ec(this),pt(19))};function Na(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function mm(l,d){var p=null;if(l.g==d){Na(l),Tc(l),l.g=null;var _=2}else if(yc(l.h,d))p=d.D,Kp(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var O=l.B;_=va(),We(_,new Mp(_,p)),ka(l)}else fm(l);else if(O=d.s,O==3||O==0&&0<d.X||!(_==1&&_I(l,d)||_==2&&Ec(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),O){case 1:jr(l,5);break;case 4:jr(l,10);break;case 3:jr(l,6);break;default:jr(l,2)}}}function gm(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function jr(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const O=!_;_=new Fr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ta(_,"https"),Aa(_),O?dI(_.toString(),p):fI(_.toString(),p)}else pt(2);l.G=0,l.l&&l.l.sa(d),ym(l),cm(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function ym(l){if(l.G=0,l.ka=[],l.l){const d=Gp(l.h);(d.length!=0||l.i.length!=0)&&(k(l.ka,d),k(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function vm(l,d,p){var _=p instanceof Fr?En(p):new Fr(p);if(_.g!="")d&&(_.g=d+"."+_.g),Ia(_,_.s);else{var O=a.location;_=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new Fr(null);_&&Ta(L,_),d&&(L.g=d),O&&Ia(L,O),p&&(L.l=p),_=L}return p=l.D,d=l.ya,p&&d&&we(_,p,d),we(_,"VER",l.la),Bs(l,_),_}function _m(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new ke(new Sa({eb:p})):new ke(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wm(){}t=wm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xa(){}xa.prototype.g=function(l,d){return new Ct(l,d)};function Ct(l,d){xe.call(this),this.g=new um(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ti(this)}v(Ct,xe),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){wc(this.g)},Ct.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=lc(l),l=p);d.i.push(new nI(d.Ya++,l)),d.G==3&&ka(d)},Ct.prototype.N=function(){this.g.l=null,delete this.j,wc(this.g),delete this.g,Ct.aa.N.call(this)};function Em(l){cc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}v(Em,cc);function Tm(){hc.call(this),this.status=1}v(Tm,hc);function Ti(l){this.g=l}v(Ti,wm),Ti.prototype.ua=function(){We(this.g,"a")},Ti.prototype.ta=function(l){We(this.g,new Em(l))},Ti.prototype.sa=function(l){We(this.g,new Tm)},Ti.prototype.ra=function(){We(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,_0=function(){return new xa},v0=function(){return va()},y0=Vr,vd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_a.NO_ERROR=0,_a.TIMEOUT=8,_a.HTTP_ERROR=6,_l=_a,Fp.COMPLETE="complete",g0=Fp,Dp.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",xe.prototype.listen=xe.prototype.K,ro=Dp,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,m0=ke}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});const Ry="@firebase/firestore",Py="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Fu("@firebase/firestore");function Si(){return si.logLevel}function K(t,...e){if(si.logLevel<=ae.DEBUG){const n=e.map(Yf);si.debug(`Firestore (${Ts}): ${t}`,...n)}}function Fn(t,...e){if(si.logLevel<=ae.ERROR){const n=e.map(Yf);si.error(`Firestore (${Ts}): ${t}`,...n)}}function os(t,...e){if(si.logLevel<=ae.WARN){const n=e.map(Yf);si.warn(`Firestore (${Ts}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function me(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Ax{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sx{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new w0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ut(e)}}class Cx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Rx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Cx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ky{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Px{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Qt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ky(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new ky(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=kx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=-62135596800,xy=1e6;class ze{static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*xy);return new ze(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ny)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xy}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ny;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new ze(0,0))}static max(){return new te(new ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=un.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=un.isNumericId(e),i=un.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?un.extractNumericId(e).compare(un.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vr.fromString(e.substring(4,e.length-2))}}class Te extends un{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const Nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends un{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return Nx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oy}static keyField(){return new Ze([Oy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Te.fromString(e))}static fromName(e){return new X(Te.fromString(e).popFirst(5))}static empty(){return new X(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Te(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=-1;function xx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Ir(i,X.empty(),e)}function Ox(t){return new Ir(t.readTime,t.key,qo)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(te.min(),X.empty(),qo)}static max(){return new Ir(te.max(),X.empty(),qo)}}function Dx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==bx)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function As(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Wu.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=-1;function qu(t){return t==null}function ou(t){return t===0&&1/t==-1/0}function Mx(t){return typeof t=="number"&&Number.isInteger(t)&&!ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="";function Fx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dy(e)),e=jx(t.get(n),e);return Dy(e)}function jx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case T0:n+="";break;default:n+=s}}return n}function Dy(t){return t+T0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function I0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xa(this.root,e,this.comparator,!0)}}class Xa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new Be(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new A0("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Ux=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(me(!!t),typeof t=="string"){let e=0;const n=Ux.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="server_timestamp",C0="__type__",R0="__previous_value__",P0="__local_write_time__";function Xf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[C0])===null||n===void 0?void 0:n.stringValue)===S0}function Ku(t){const e=t.mapValue.fields[R0];return Xf(e)?Ku(e):e}function Ko(t){const e=Ar(t.mapValue.fields[P0].timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}const au="(default)";class Go{constructor(e,n){this.projectId=e,this.database=n||au}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database===au}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="__type__",Bx="__max__",Za={mapValue:{}},N0="__vector__",lu="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xf(t)?4:Hx(t)?9007199254740991:$x(t)?10:11:ee()}function vn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),a=Ar(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Sr(i.bytesValue).isEqual(Sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?ou(o)===ou(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(by(o)!==by(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!vn(o[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function Qo(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Vy(t.timestampValue,e.timestampValue);case 4:return Vy(Ko(t),Ko(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Sr(s),u=Sr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ue(a[c],u[c]);if(h!==0)return h}return ue(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ue(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return My(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},g=(a=f[lu])===null||a===void 0?void 0:a.arrayValue,v=(u=m[lu])===null||u===void 0?void 0:u.arrayValue,S=ue(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:My(g,v)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Za.mapValue&&o===Za.mapValue)return 0;if(s===Za.mapValue)return 1;if(o===Za.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=ue(u[f],h[f]);if(m!==0)return m;const g=ls(a[u[f]],c[h[f]]);if(g!==0)return g}return ue(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Ar(t),r=Ar(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function My(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function us(t){return _d(t)}function _d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=_d(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_d(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function wl(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ku(t);return e?16+wl(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+wl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return di(r.fields,(s,o)=>{i+=s.length+wl(o)}),i}(t.mapValue);default:throw ee()}}function Fy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wd(t){return!!t&&"integerValue"in t}function Zf(t){return!!t&&"arrayValue"in t}function jy(t){return!!t&&"nullValue"in t}function Uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function $x(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[k0])===null||n===void 0?void 0:n.stringValue)===N0}function _o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Bx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];El(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(_o(this.value))}}function x0(t){const e=[];return di(t.fields,(n,r)=>{const i=new Ze([n]);if(El(r)){const s=x0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,te.min(),te.min(),te.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,te.min(),te.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,te.min(),te.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.position=e,this.inclusive=n}}function zy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function By(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Wx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{}class Me extends O0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Kx(e,n,r):n==="array-contains"?new Yx(e,r):n==="in"?new Jx(e,r):n==="not-in"?new Xx(e,r):n==="array-contains-any"?new Zx(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Gx(e,r):new Qx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends O0{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new nn(e,n)}matches(e){return D0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function D0(t){return t.op==="and"}function b0(t){return qx(t)&&D0(t)}function qx(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Ed(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+us(t.value);if(b0(t))return t.filters.map(e=>Ed(e)).join(",");{const e=t.filters.map(n=>Ed(n)).join(",");return`${t.op}(${e})`}}function L0(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&vn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&L0(o,i.filters[a]),!0):!1}(t,e):void ee()}function V0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(V0).join(" ,")+"}"}(t):"Filter"}class Kx extends Me{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gx extends Me{constructor(e,n){super(e,"in",n),this.keys=M0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qx extends Me{constructor(e,n){super(e,"not-in",n),this.keys=M0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function M0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Yx extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zf(n)&&Qo(n.arrayValue,this.value)}}class Jx extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class Xx extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qo(this.value.arrayValue,n)}}class Zx extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function $y(t,e=null,n=[],r=[],i=null,s=null,o=null){return new eO(t,e,n,r,i,s,o)}function ep(t){const e=ne(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.le=n}return e.le}function tp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!L0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!By(t.startAt,e.startAt)&&By(t.endAt,e.endAt)}function Td(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function tO(t,e,n,r,i,s,o,a){return new ua(t,e,n,r,i,s,o,a)}function np(t){return new ua(t)}function Hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function F0(t){return t.collectionGroup!==null}function wo(t){const e=ne(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Be(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new cu(s,r))}),n.has(Ze.keyField().canonicalString())||e.he.push(new cu(Ze.keyField(),r))}return e.he}function mn(t){const e=ne(t);return e.Pe||(e.Pe=nO(e,wo(t))),e.Pe}function nO(t,e){if(t.limitType==="F")return $y(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cu(i.field,s)});const n=t.endAt?new uu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new uu(t.startAt.position,t.startAt.inclusive):null;return $y(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e){const n=t.filters.concat([e]);return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ad(t,e,n){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gu(t,e){return tp(mn(t),mn(e))&&t.limitType===e.limitType}function j0(t){return`${ep(mn(t))}|lt:${t.limitType}`}function Ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>V0(i)).join(", ")}]`),qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Qu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=zy(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,wo(r),i)||r.endAt&&!function(o,a,u){const c=zy(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,wo(r),i))}(t,e)}function rO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U0(t){return(e,n)=>{let r=!1;for(const i of wo(t)){const s=iO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iO(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ls(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return I0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Pe(X.comparator);function jn(){return sO}const z0=new Pe(X.comparator);function io(...t){let e=z0;for(const n of t)e=e.insert(n.key,n);return e}function B0(t){let e=z0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Eo()}function $0(){return Eo()}function Eo(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const oO=new Pe(X.comparator),aO=new Be(X.comparator);function le(...t){let e=aO;for(const n of t)e=e.add(n);return e}const lO=new Be(ue);function uO(){return lO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function H0(t){return{integerValue:""+t}}function cO(t,e){return Mx(e)?H0(e):rp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this._=void 0}}function hO(t,e,n){return t instanceof Yo?function(i,s){const o={fields:{[C0]:{stringValue:S0},[P0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xf(s)&&(s=Ku(s)),s&&(o.fields[R0]=s),{mapValue:o}}(n,e):t instanceof Jo?q0(t,e):t instanceof Xo?K0(t,e):function(i,s){const o=W0(i,s),a=Wy(o)+Wy(i.Ie);return wd(o)&&wd(i.Ie)?H0(a):rp(i.serializer,a)}(t,e)}function dO(t,e,n){return t instanceof Jo?q0(t,e):t instanceof Xo?K0(t,e):n}function W0(t,e){return t instanceof hu?function(r){return wd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Yo extends Yu{}class Jo extends Yu{constructor(e){super(),this.elements=e}}function q0(t,e){const n=G0(e);for(const r of t.elements)n.some(i=>vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Yu{constructor(e){super(),this.elements=e}}function K0(t,e){let n=G0(e);for(const r of t.elements)n=n.filter(i=>!vn(i,r));return{arrayValue:{values:n}}}class hu extends Yu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Wy(t){return Oe(t.integerValue||t.doubleValue)}function G0(t){return Zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n){this.field=e,this.transform=n}}function pO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Jo&&i instanceof Jo||r instanceof Xo&&i instanceof Xo?as(r.elements,i.elements,vn):r instanceof hu&&i instanceof hu?vn(r.Ie,i.Ie):r instanceof Yo&&i instanceof Yo}(t.transform,e.transform)}class mO{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ju{}function Q0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new J0(t.key,xn.none()):new ca(t.key,t.data,xn.none());{const n=t.data,r=Ft.empty();let i=new Be(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pi(t.key,r,new Yt(i.toArray()),xn.none())}}function gO(t,e,n){t instanceof ca?function(i,s,o){const a=i.value.clone(),u=Ky(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof pi?function(i,s,o){if(!Tl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ky(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Y0(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n,r){return t instanceof ca?function(s,o,a,u){if(!Tl(s.precondition,o))return a;const c=s.value.clone(),h=Gy(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof pi?function(s,o,a,u){if(!Tl(s.precondition,o))return a;const c=Gy(s.fieldTransforms,u,o),h=o.data;return h.setAll(Y0(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Tl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function yO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=W0(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function qy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&as(r,i,(s,o)=>pO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends Ju{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pi extends Ju{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Y0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ky(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,dO(o,a,n[i]))}return r}function Gy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hO(s,o,e))}return r}class J0 extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vO extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Q0(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>qy(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>qy(n,r))}}class ip{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return oO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ip(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,he;function TO(t){switch(t){case j.OK:return ee();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ee()}}function X0(t){if(t===void 0)return Fn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Le.OK:return j.OK;case Le.CANCELLED:return j.CANCELLED;case Le.UNKNOWN:return j.UNKNOWN;case Le.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Le.INTERNAL:return j.INTERNAL;case Le.UNAVAILABLE:return j.UNAVAILABLE;case Le.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Le.NOT_FOUND:return j.NOT_FOUND;case Le.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Le.ABORTED:return j.ABORTED;case Le.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Le.DATA_LOSS:return j.DATA_LOSS;default:return ee()}}(he=Le||(Le={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=new vr([4294967295,4294967295],0);function Qy(t){const e=IO().encode(t),n=new p0;return n.update(e),new Uint8Array(n.digest())}function Yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vr([n,r],0),new vr([i,s],0)]}class sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(r<0)throw new so(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=vr.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(vr.fromNumber(r)));return i.compare(AO)===1&&(i=new vr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Qy(e),[r,i]=Yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=Qy(e),[r,i]=Yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xu(te.min(),i,new Pe(ue),jn(),le())}}class ha{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class Z0{constructor(e,n){this.targetId=e,this.ge=n}}class eT{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Jy{constructor(){this.pe=0,this.ye=Xy(),this.we=rt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=le(),n=le(),r=le();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new ha(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=Xy()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,me(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class SO{constructor(e){this.ke=e,this.qe=new Map,this.Qe=jn(),this.$e=el(),this.Ke=el(),this.Ue=new Pe(ue)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(Td(s))if(r===0){const o=new X(s.path);this.ze(n,o,ht.newNoDocument(o,te.min()))}else me(r===1);else{const o=this.et(n);if(o!==r){const a=this.tt(e),u=a?this.nt(a,e,o):1;if(u!==0){this.Ye(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,c)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Sr(r).toUint8Array()}catch(u){if(u instanceof A0)return os("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new sp(o,i,s)}catch(u){return os(u instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ee===0?null:a}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Td(a.target)){const u=new X(a.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,ht.newNoDocument(u,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=le();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xe(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new Xu(e,n,this.Ue,this.Qe,r);return this.Qe=jn(),this.$e=el(),this.Ke=el(),this.Ue=new Pe(ue),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Jy,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new Be(ue),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Be(ue),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Jy),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function el(){return new Pe(X.comparator)}function Xy(){return new Pe(X.comparator)}const CO={asc:"ASCENDING",desc:"DESCENDING"},RO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PO={and:"AND",or:"OR"};class kO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sd(t,e){return t.useProto3Json||qu(e)?e:{value:e}}function du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NO(t,e){return du(t,e.toTimestamp())}function gn(t){return me(!!t),te.fromTimestamp(function(n){const r=Ar(n);return new ze(r.seconds,r.nanos)}(t))}function op(t,e){return Cd(t,e).canonicalString()}function Cd(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nT(t){const e=Te.fromString(t);return me(aT(e)),e}function Rd(t,e){return op(t.databaseId,e.path)}function lh(t,e){const n=nT(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(iT(n))}function rT(t,e){return op(t.databaseId,e)}function xO(t){const e=nT(t);return e.length===4?Te.emptyPath():iT(e)}function Pd(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iT(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zy(t,e,n){return{name:Rd(t,e),fields:n.value.mapValue.fields}}function OO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(me(h===void 0||typeof h=="string"),rt.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),rt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:X0(c.code);return new Y(h,c.message||"")}(o);n=new eT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lh(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):te.min(),a=new Ft({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Il(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lh(t,r.document),s=r.readTime?gn(r.readTime):te.min(),o=ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Il([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lh(t,r.document),s=r.removedTargetIds||[];n=new Il([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new EO(i,s),a=r.targetId;n=new Z0(a,o)}}return n}function DO(t,e){let n;if(e instanceof ca)n={update:Zy(t,e.key,e.value)};else if(e instanceof J0)n={delete:Rd(t,e.key)};else if(e instanceof pi)n={update:Zy(t,e.key,e.data),updateMask:BO(e.fieldMask)};else{if(!(e instanceof vO))return ee();n={verify:Rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hu)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:NO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function bO(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(te.min())&&(o=gn(s)),new mO(o,i.transformResults||[])}(n,e))):[]}function LO(t,e){return{documents:[rT(t,e.path)]}}function VO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rT(t,i);const s=function(c){if(c.length!==0)return oT(nn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Ri(m.field),direction:jO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Sd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ht:n,parent:i}}function MO(t){let e=xO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=sT(f);return m instanceof nn&&b0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(v){return new cu(Pi(v.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,qu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,g=f.values||[];return new uu(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,g=f.values||[];return new uu(g,m)}(n.endAt)),tO(e,i,o,s,a,"F",u,c)}function FO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pi(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pi(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>sT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function jO(t){return CO[t]}function UO(t){return RO[t]}function zO(t){return PO[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Pi(t){return Ze.fromServerFormat(t.fieldPath)}function oT(t){return t instanceof Me?function(n){if(n.op==="=="){if(Uy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(jy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(jy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:UO(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>oT(i));return r.length===1?r[0]:{compositeFilter:{op:zO(n.op),filters:r}}}(t):ee()}function BO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,i,s=te.min(),o=te.min(),a=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.Tt=e}}function HO(t){const e=MO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(){this.Tn=new qO}addToCollectionParentIndex(e,n){return this.Tn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Ir.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class qO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lT=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(lT,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new cs(0)}static Un(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="LruGarbageCollector",KO=1048576;function nv([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class GO{constructor(e){this.Hn=e,this.buffer=new Be(nv),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){K(tv,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){As(n)?K(tv,"Ignoring IndexedDB error during garbage collection: ",n):await Is(n)}await this.er(3e5)})}}class YO{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Wu.ae);const r=new GO(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(ev)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ev):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Si()<=ae.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function JO(t,e){return new YO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&To(r.mutation,i,Yt.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=io();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jn();const o=Eo(),a=function(){return Eo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof pi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),To(h.mutation,c,h.mutation.getFieldMask(),ze.now())):o.set(c.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new ZO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Eo();let i=new Pe((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Yt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||le()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=$0();h.forEach(m=>{if(!s.has(m)){const g=Q0(n.get(m),r.get(m));g!==null&&f.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Kr());let a=qo,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(h=>({batchId:a,changes:B0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,m){return new ua(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ht.newInvalidDocument(h)))});let a=io();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&To(h.mutation,c,Yt.empty(),ze.now()),Qu(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return F.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:HO(i.bundledQuery),readTime:gn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.overlays=new Pe(X.comparator),this.Rr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Kr(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wO(n,r));let s=this.Rr.get(n);s===void 0&&(s=le(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.Vr=new Be(qe.mr),this.gr=new Be(qe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new qe(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new X(new Te([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new X(new Te([])),r=new qe(n,e),i=new qe(n,e+1);let s=le();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return X.comparator(e.key,n.key)||ue(e.Cr,n.Cr)}static pr(e,n){return ue(e.Cr,n.Cr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Be(qe.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _O(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Mr=this.Mr.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Jf:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const a=this.Or(o.Cr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(ue);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],a=>{r=r.add(a.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new qe(new X(s),0);let a=new Be(ue);return this.Mr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Cr)),!0)},o),F.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new qe(n,0),i=this.Mr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.kr=e,this.docs=function(){return new Pe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jn();const o=n.path,a=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Dx(Ox(h),r)<=0||(i.has(h.key)||Qu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}qr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new o2(this)}getSize(e){return F.resolve(this.size)}}class o2 extends XO{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.persistence=e,this.Qr=new fi(n=>ep(n),tp),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.$r=0,this.Kr=new ap,this.targetCount=0,this.Ur=cs.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),F.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.zn(n),F.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Wu(0),this.zr=!1,this.zr=!0,this.jr=new r2,this.referenceDelegate=e(this),this.Hr=new a2(this),this.indexManager=new WO,this.remoteDocumentCache=function(i){return new s2(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new $O(n),this.Yr=new t2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new n2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new i2(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new l2(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class l2 extends Lx{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.ti=new ap,this.ni=null}static ri(e){return new lp(e)}get ii(){if(this.ni)return this.ni;throw ee()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),F.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const i=X.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return F.or([()=>F.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class fu{constructor(e,n){this.persistence=e,this.oi=new fi(r=>Fx(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=JO(this,n)}static ri(e,n){return new fu(e,n)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return F.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(a=>{a||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wl(e.data.value)),n}ar(e,n,r){return F.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new up(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return AR()?8:Vx(ft())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new u2;return this._s(e,n,o).next(a=>{if(s.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(Si()<=ae.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(Si()<=ae.DEBUG&&K("QueryEngine","Query:",Ci(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Si()<=ae.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):F.resolve())}rs(e,n){if(Hy(n))return F.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ad(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.cs(n,a);return this.ls(n,c,o,u.readTime)?this.rs(e,Ad(n,null,"F")):this.hs(e,c,n,u)}))})))}ss(e,n,r,i){return Hy(n)||i.isEqual(te.min())?F.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?F.resolve(null):(Si()<=ae.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ci(n)),this.hs(e,o,n,xx(i,qo)).next(a=>a))})}cs(e,n){let r=new Be(U0(e));return n.forEach((i,s)=>{Qu(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return Si()<=ae.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ci(n)),this.ns.getDocumentsMatchingQuery(e,n,Ir.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="LocalStore",h2=3e8;class d2{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new Pe(ue),this.Is=new fi(s=>ep(s),tp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function f2(t,e,n,r){return new d2(t,e,n,r)}async function cT(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=le();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Rs:c,removedBatchIds:o,addedBatchIds:a}))})})}function p2(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let g=F.resolve();return m.forEach(v=>{g=g.next(()=>h.getEntry(u,v)).next(S=>{const k=c.docVersions.get(v);me(k!==null),S.version.compareTo(k)<0&&(f.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),h.addEntry(S)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hT(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function m2(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Hr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(s,h.addedDocuments,f)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(rt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(S,k,E){return S.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=h2?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,g,h)&&a.push(n.Hr.updateTargetData(s,g))});let u=jn(),c=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(g2(s,o,e.documentUpdates).next(h=>{u=h.Vs,c=h.fs})),!r.isEqual(te.min())){const h=n.Hr.getLastRemoteSnapshotVersion(s).next(f=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ts=i,s))}function g2(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):K(cp,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Vs:o,fs:i}})}function y2(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Jf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function v2(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function kd(t,e,n){const r=ne(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!As(o))throw o;K(cp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function rv(t,e,n){const r=ne(t);let i=te.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),m=f.Is.get(h);return m!==void 0?F.resolve(f.Ts.get(m)):f.Hr.getTargetData(c,h)}(r,o,mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:le())).next(a=>(_2(r,rO(e),a),{documents:a,gs:s})))}function _2(t,e,n){let r=t.Es.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class iv{constructor(){this.activeTargetIds=uO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w2{constructor(){this.ho=new iv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new iv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="ConnectivityMonitor";class ov{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){K(sv,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){K(sv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl=null;function Nd(){return tl===null?tl=function(){return 268435456+Math.round(2147483648*Math.random())}():tl++,"0x"+tl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="RestConnection",T2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class I2{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===au?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,n,r,i,s){const o=Nd(),a=this.So(e,n.toUriEncodedString());K(uh,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,a,u,r).then(c=>(K(uh,`Received RPC '${e}' ${o}: `,c),c),c=>{throw os(uh,`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Co(e,n,r,i,s,o){return this.bo(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}So(e,n){const r=T2[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class S2 extends I2{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Nd();return new Promise((o,a)=>{const u=new m0;u.setWithCredentials(!0),u.listenOnce(g0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _l.NO_ERROR:const h=u.getResponseJson();K(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case _l.TIMEOUT:K(lt,`RPC '${e}' ${s} timed out`),a(new Y(j.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const f=u.getStatus();if(K(lt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const v=function(k){const E=k.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(E)>=0?E:j.UNKNOWN}(g.status);a(new Y(v,g.message))}else a(new Y(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Y(j.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{K(lt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Wo(e,n,r){const i=Nd(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_0(),a=v0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");K(lt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,g=!1;const v=new A2({Fo:k=>{g?K(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(K(lt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),K(lt,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Mo:()=>f.close()}),S=(k,E,w)=>{k.listen(E,I=>{try{w(I)}catch(x){setTimeout(()=>{throw x},0)}})};return S(f,ro.EventType.OPEN,()=>{g||(K(lt,`RPC '${e}' stream ${i} transport opened.`),v.Qo())}),S(f,ro.EventType.CLOSE,()=>{g||(g=!0,K(lt,`RPC '${e}' stream ${i} transport closed`),v.Ko())}),S(f,ro.EventType.ERROR,k=>{g||(g=!0,os(lt,`RPC '${e}' stream ${i} transport errored:`,k),v.Ko(new Y(j.UNAVAILABLE,"The operation could not be completed")))}),S(f,ro.EventType.MESSAGE,k=>{var E;if(!g){const w=k.data[0];me(!!w);const I=w,x=(I==null?void 0:I.error)||((E=I[0])===null||E===void 0?void 0:E.error);if(x){K(lt,`RPC '${e}' stream ${i} received error:`,x);const b=x.status;let M=function(A){const C=Le[A];if(C!==void 0)return X0(C)}(b),T=x.message;M===void 0&&(M=j.INTERNAL,T="Unknown error status: "+b+" with message "+x.message),g=!0,v.Ko(new Y(M,T)),f.close()}else K(lt,`RPC '${e}' stream ${i} received:`,w),v.Uo(w)}}),S(a,y0.STAT_EVENT,k=>{k.stat===vd.PROXY?K(lt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===vd.NOPROXY&&K(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.$o()},0),v}}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){return new kO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="PersistentStream";class fT{constructor(e,n,r,i,s,o,a,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new dT(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new Y(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return K(av,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(K(av,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C2 extends fT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=OO(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?gn(o.readTime):te.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Td(u)?{documents:LO(s,u)}:{query:VO(s,u).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tT(s,o.resumeToken);const c=Sd(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=du(s,o.snapshotVersion.toTimestamp());const c=Sd(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=FO(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.I_(n)}}class R2 extends fT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=bO(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Pd(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DO(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{}class k2 extends P2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.bo(e,Cd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(j.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,Cd(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(j.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class N2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Fn(n),this.N_=!1):K("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="RemoteStore";class x2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{mi(this)&&(K(oi,"Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.W_.add(4),await da(c),c.j_.set("Unknown"),c.W_.delete(4),await ec(c)}(this))})}),this.j_=new N2(r,i)}}async function ec(t){if(mi(t))for(const e of t.G_)await e(!0)}async function da(t){for(const e of t.G_)await e(!1)}function pT(t,e){const n=ne(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),pp(n)?fp(n):Ss(n).c_()&&dp(n,e))}function hp(t,e){const n=ne(t),r=Ss(n);n.U_.delete(e),r.c_()&&mT(n,e),n.U_.size===0&&(r.c_()?r.P_():mi(n)&&n.j_.set("Unknown"))}function dp(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).y_(e)}function mT(t,e){t.H_.Ne(e),Ss(t).w_(e)}function fp(t){t.H_=new SO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.j_.B_()}function pp(t){return mi(t)&&!Ss(t).u_()&&t.U_.size>0}function mi(t){return ne(t).W_.size===0}function gT(t){t.H_=void 0}async function O2(t){t.j_.set("Online")}async function D2(t){t.U_.forEach((e,n)=>{dp(t,e)})}async function b2(t,e){gT(t),pp(t)?(t.j_.q_(e),fp(t)):t.j_.set("Unknown")}async function L2(t,e,n){if(t.j_.set("Online"),e instanceof eT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.U_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.U_.delete(a),i.H_.removeTarget(a))}(t,e)}catch(r){K(oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pu(t,r)}else if(e instanceof Il?t.H_.We(e):e instanceof Z0?t.H_.Ze(e):t.H_.je(e),!n.isEqual(te.min()))try{const r=await hT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.H_.ot(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.U_.get(c);h&&s.U_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.U_.get(u);if(!h)return;s.U_.set(u,h.withResumeToken(rt.EMPTY_BYTE_STRING,h.snapshotVersion)),mT(s,u);const f=new ir(h.target,u,c,h.sequenceNumber);dp(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K(oi,"Failed to raise snapshot:",r),await pu(t,r)}}async function pu(t,e,n){if(!As(e))throw e;t.W_.add(1),await da(t),t.j_.set("Offline"),n||(n=()=>hT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(oi,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await ec(t)})}function yT(t,e){return e().catch(n=>pu(t,n,e))}async function tc(t){const e=ne(t),n=Rr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Jf;for(;V2(e);)try{const i=await y2(e.localStore,r);if(i===null){e.K_.length===0&&n.P_();break}r=i.batchId,M2(e,i)}catch(i){await pu(e,i)}vT(e)&&_T(e)}function V2(t){return mi(t)&&t.K_.length<10}function M2(t,e){t.K_.push(e);const n=Rr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function vT(t){return mi(t)&&!Rr(t).u_()&&t.K_.length>0}function _T(t){Rr(t).start()}async function F2(t){Rr(t).C_()}async function j2(t){const e=Rr(t);for(const n of t.K_)e.S_(n.mutations)}async function U2(t,e,n){const r=t.K_.shift(),i=ip.from(r,e,n);await yT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tc(t)}async function z2(t,e){e&&Rr(t).b_&&await async function(r,i){if(function(o){return TO(o)&&o!==j.ABORTED}(i.code)){const s=r.K_.shift();Rr(r).h_(),await yT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await tc(r)}}(t,e),vT(t)&&_T(t)}async function lv(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K(oi,"RemoteStore received new credentials");const r=mi(n);n.W_.add(3),await da(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await ec(n)}async function B2(t,e){const n=ne(t);e?(n.W_.delete(2),await ec(n)):e||(n.W_.add(2),await da(n),n.j_.set("Unknown"))}function Ss(t){return t.J_||(t.J_=function(n,r,i){const s=ne(n);return s.M_(),new C2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:O2.bind(null,t),No:D2.bind(null,t),Lo:b2.bind(null,t),p_:L2.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),pp(t)?fp(t):t.j_.set("Unknown")):(await t.J_.stop(),gT(t))})),t.J_}function Rr(t){return t.Y_||(t.Y_=function(n,r,i){const s=ne(n);return s.M_(),new R2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:F2.bind(null,t),Lo:z2.bind(null,t),D_:j2.bind(null,t),v_:U2.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await tc(t)):(await t.Y_.stop(),t.K_.length>0&&(K(oi,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new mp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gp(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),As(t))return new Y(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static emptySet(e){return new Ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=io(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.Z_=new Pe(X.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ee():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hs(e,n,Ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class H2{constructor(){this.queries=cv(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=cv(),s.forEach((o,a)=>{for(const u of a.ta)u.onError(r)})})(this,new Y(j.ABORTED,"Firestore shutting down"))}}function cv(){return new fi(t=>j0(t),Gu)}async function W2(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new $2,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=gp(o,`Initialization of query '${Ci(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&yp(n)}async function q2(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function K2(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ta)a.oa(i)&&(r=!0);o.ea=i}}r&&yp(n)}function G2(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function yp(t){t.ia.forEach(e=>{e.next()})}var xd,hv;(hv=xd||(xd={}))._a="default",hv.Cache="cache";class Q2{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==xd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.key=e}}class ET{constructor(e){this.key=e}}class Y2{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=le(),this.mutatedKeys=le(),this.ya=U0(e),this.wa=new Ji(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new uv,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),g=Qu(this.query,f)?f:null,v=!!m&&this.mutatedKeys.has(m.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;m&&g?m.data.isEqual(g.data)?v!==S&&(r.track({type:3,doc:g}),k=!0):this.va(m,g)||(r.track({type:2,doc:g}),k=!0,(u&&this.ya(g,u)>0||c&&this.ya(g,c)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),k=!0):m&&!g&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(a=!0)),k&&(g?(o=o.add(g),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{wa:o,Da:r,ls:a,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(g,v){const S=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return S(g)-S(v)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(r),i=i!=null&&i;const a=n&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,c=u!==this.ga;return this.ga=u,o.length!==0||c?{snapshot:new hs(this.query,e.wa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new uv,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=le(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new ET(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new wT(r))}),n}Oa(e){this.fa=e.gs,this.pa=le();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return hs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const vp="SyncEngine";class J2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class X2{constructor(e){this.key=e,this.Ba=!1}}class Z2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new fi(a=>j0(a),Gu),this.qa=new Map,this.Qa=new Set,this.$a=new Pe(X.comparator),this.Ka=new Map,this.Ua=new ap,this.Wa={},this.Ga=new Map,this.za=cs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function eD(t,e,n=!0){const r=RT(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await TT(r,e,n,!0),i}async function tD(t,e){const n=RT(t);await TT(n,e,!0,!1)}async function TT(t,e,n,r){const i=await v2(t.localStore,mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await nD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pT(t.remoteStore,i),a}async function nD(t,e,n,r,i){t.Ha=(f,m,g)=>async function(S,k,E,w){let I=k.view.Sa(E);I.ls&&(I=await rv(S.localStore,k.query,!1).then(({documents:T})=>k.view.Sa(T,I)));const x=w&&w.targetChanges.get(k.targetId),b=w&&w.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(I,S.isPrimaryClient,x,b);return fv(S,k.targetId,M.Ma),M.snapshot}(t,f,m,g);const s=await rv(t.localStore,e,!0),o=new Y2(e,s.gs),a=o.Sa(s.documents),u=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);fv(t,n,c.Ma);const h=new J2(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),c.snapshot}async function rD(t,e,n){const r=ne(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!Gu(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hp(r.remoteStore,i.targetId),Od(r,i.targetId)}).catch(Is)):(Od(r,i.targetId),await kd(r.localStore,i.targetId,!0))}async function iD(t,e){const n=ne(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hp(n.remoteStore,r.targetId))}async function sD(t,e,n){const r=dD(t);try{const i=await function(o,a){const u=ne(o),c=ze.now(),h=a.reduce((g,v)=>g.add(v.key),le());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=jn(),S=le();return u.ds.getEntries(g,h).next(k=>{v=k,v.forEach((E,w)=>{w.isValidDocument()||(S=S.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,v)).next(k=>{f=k;const E=[];for(const w of a){const I=yO(w,f.get(w.key).overlayedDocument);I!=null&&E.push(new pi(w.key,I,x0(I.value.mapValue),xn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,E,a)}).next(k=>{m=k;const E=k.applyToLocalDocumentSet(f,S);return u.documentOverlayCache.saveOverlays(g,k.batchId,E)})}).then(()=>({batchId:m.batchId,changes:B0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Wa[o.currentUser.toKey()];c||(c=new Pe(ue)),c=c.insert(a,u),o.Wa[o.currentUser.toKey()]=c}(r,i.batchId,n),await fa(r,i.changes),await tc(r.remoteStore)}catch(i){const s=gp(i,"Failed to persist write");n.reject(s)}}async function IT(t,e){const n=ne(t);try{const r=await m2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ka.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?me(o.Ba):i.removedDocuments.size>0&&(me(o.Ba),o.Ba=!1))}),await fa(n,r,e)}catch(r){await Is(r)}}function dv(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const a=o.view.sa(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.ta)m.sa(a)&&(c=!0)}),c&&yp(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oD(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new Pe(X.comparator);o=o.insert(s,ht.newNoDocument(s,te.min()));const a=le().add(s),u=new Xu(te.min(),new Map,new Pe(ue),o,a);await IT(r,u),r.$a=r.$a.remove(s),r.Ka.delete(e),_p(r)}else await kd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(Is)}async function aD(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await p2(n.localStore,e);ST(n,r,null),AT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await Is(i)}}async function lD(t,e,n){const r=ne(t);try{const i=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(me(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);ST(r,e,n),AT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await Is(i)}}function AT(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function ST(t,e,n){const r=ne(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||CT(t,r)})}function CT(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(hp(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),_p(t))}function fv(t,e,n){for(const r of n)r instanceof wT?(t.Ua.addReference(r.key,e),uD(t,r)):r instanceof ET?(K(vp,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||CT(t,r.key)):ee()}function uD(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(K(vp,"New document in limbo: "+n),t.Qa.add(r),_p(t))}function _p(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new X(Te.fromString(e)),r=t.za.next();t.Ka.set(r,new X2(n)),t.$a=t.$a.insert(n,r),pT(t.remoteStore,new ir(mn(np(n.path)),r,"TargetPurposeLimboResolution",Wu.ae))}}async function fa(t,e,n){const r=ne(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((a,u)=>{o.push(r.Ha(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=up.Yi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.Hi,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>F.forEach(m.Ji,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!As(f))throw f;K(cp,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const g=h.Ts.get(m),v=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(v);h.Ts=h.Ts.insert(m,S)}}}(r.localStore,s))}async function cD(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K(vp,"User change. New user:",e.toKey());const r=await cT(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(a=>{a.forEach(u=>{u.reject(new Y(j.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.Rs)}}function hD(t,e){const n=ne(t),r=n.Ka.get(e);if(r&&r.Ba)return le().add(r.key);{let i=le();const s=n.qa.get(e);if(!s)return i;for(const o of s){const a=n.ka.get(o);i=i.unionWith(a.view.ba)}return i}}function RT(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oD.bind(null,e),e.La.p_=K2.bind(null,e.eventManager),e.La.Ja=G2.bind(null,e.eventManager),e}function dD(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lD.bind(null,e),e}class mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zu(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return f2(this.persistence,new c2,e.initialUser,this.serializer)}Xa(e){return new uT(lp.ri,this.serializer)}Za(e){return new w2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mu.provider={build:()=>new mu};class fD extends mu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){me(this.persistence.referenceDelegate instanceof fu);const r=this.persistence.referenceDelegate.garbageCollector;return new QO(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new uT(r=>fu.ri(r,n),this.serializer)}}class Dd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cD.bind(null,this.syncEngine),await B2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new H2}()}createDatastore(e){const n=Zu(e.databaseInfo.databaseId),r=function(s){return new S2(s)}(e.databaseInfo);return function(s,o,a,u){return new k2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new x2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>dv(this.syncEngine,n,0),function(){return ov.D()?new ov:new E2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new Z2(i,s,o,a,u,c);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);K(oi,"RemoteStore shutting down."),s.W_.add(5),await da(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dd.provider={build:()=>new Dd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="FirestoreClient";class mD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=E0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(Pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),K(Pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gD(t);K(Pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>lv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>lv(e.remoteStore,i)),t._onlineComponents=e}async function gD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(Pr,"Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new mu)}}else K(Pr,"Using default OfflineComponentProvider"),await hh(t,new fD(void 0));return t._offlineComponents}async function PT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(Pr,"Using user provided OnlineComponentProvider"),await pv(t,t._uninitializedComponentsProvider._online)):(K(Pr,"Using default OnlineComponentProvider"),await pv(t,new Dd))),t._onlineComponents}function yD(t){return PT(t).then(e=>e.syncEngine)}async function mv(t){const e=await PT(t),n=e.eventManager;return n.onListen=eD.bind(null,e.syncEngine),n.onUnlisten=rD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=tD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iD.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e,n){if(!n)throw new Y(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vD(t,e,n,r){if(e===!0&&r===!0)throw new Y(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yv(t){if(!X.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vv(t){if(X.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Io(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new Y(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="firestore.googleapis.com",_v=!0;class wv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xT,this.ssl=_v}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:_v;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KO)throw new Y(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ix;switch(r.type){case"firstParty":return new Rx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gv.get(n);r&&(K("ComponentProvider","Removing Datastore"),gv.delete(n),r.terminate())}(this),Promise.resolve()}}function _D(t,e,n,r={}){var i;const s=(t=Io(t,rc))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;s.host!==xT&&s.host!==a&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:r});if(!Tr(u,o)&&(t._setSettings(u),r.mockUserToken)){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=ut.MOCK_USER;else{c=vR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Y(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ut(f)}t._authCredentials=new Ax(new w0(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cs(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class _r extends Cs{constructor(e,n,r){super(e,n,np(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new X(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function OT(t,e,...n){if(t=nt(t),NT("collection","path",e),t instanceof rc){const r=Te.fromString(e,...n);return vv(r),new _r(t,null,r)}{if(!(t instanceof xt||t instanceof _r))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return vv(r),new _r(t.firestore,null,r)}}function wD(t,e,...n){if(t=nt(t),arguments.length===1&&(e=E0.newId()),NT("doc","path",e),t instanceof rc){const r=Te.fromString(e,...n);return yv(r),new xt(t,null,new X(r))}{if(!(t instanceof xt||t instanceof _r))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return yv(r),new xt(t.firestore,t instanceof _r?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="AsyncQueue";class Tv{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new dT(this,"async_queue_retry"),this.bu=()=>{const r=ch();r&&K(Ev,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Yr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!As(e))throw e;K(Ev,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=mp.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&ee()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function Iv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class gu extends rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tv(e),this._firestoreClient=void 0,await e}}}function ED(t,e){const n=typeof t=="object"?t:Lf(),r=typeof t=="string"?t:au,i=ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gR("firestore");s&&_D(i,...s)}return i}function DT(t){if(t._terminated)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||TD(t),t._firestoreClient}function TD(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new zx(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,kT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new mD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(rt.fromBase64String(e))}catch(n){throw new Y(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=/^__.*__$/;class AD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}function bT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Ap{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ap(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return yu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(bT(this.Lu)&&ID.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class SD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zu(e)}ju(e,n,r,i=!1){return new Ap({Lu:e,methodName:n,zu:r,path:Ze.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LT(t){const e=t._freezeSettings(),n=Zu(t._databaseId);return new SD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CD(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);FT("Data must be an object, but it was:",o,r);const a=VT(r,o);let u,c;if(s.merge)u=new Yt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=PD(e,f,n);if(!o.contains(m))throw new Y(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ND(h,m)||h.push(m)}u=new Yt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new AD(new Ft(a),u,c)}class Sp extends Ep{_toFieldTransform(e){return new fO(e.path,new Yo)}isEqual(e){return e instanceof Sp}}function RD(t,e,n,r=!1){return Cp(n,t.ju(r?4:3,e))}function Cp(t,e){if(MT(t=nt(t)))return FT("Unsupported field value:",e,t),VT(t,e);if(t instanceof Ep)return function(r,i){if(!bT(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Cp(a,i.Uu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:du(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:du(i.serializer,s)}}if(r instanceof Tp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:tT(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:op(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ip)return function(o,a){return{mapValue:{fields:{[k0]:{stringValue:N0},[lu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Wu("VectorValues must only contain numeric values.");return rp(a.serializer,c)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${nc(r)}`)}(t,e)}function VT(t,e){const n={};return I0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=Cp(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function MT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Tp||t instanceof ds||t instanceof xt||t instanceof Ep||t instanceof Ip)}function FT(t,e,n){if(!MT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=nc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function PD(t,e,n){if((e=nt(e))instanceof wp)return e._internalPath;if(typeof e=="string")return jT(t,e);throw yu("Field path arguments must be of type string or ",t,!1,void 0,n)}const kD=new RegExp("[~\\*/\\[\\]]");function jT(t,e,n){if(e.search(kD)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wp(...e.split("."))._internalPath}catch{throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Y(j.INVALID_ARGUMENT,a+t+u)}function ND(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xD extends UT{data(){return super.data()}}function Rp(t,e){return typeof e=="string"?jT(t,e):e instanceof wp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pp{}class DD extends Pp{}function bD(t,e,...n){let r=[];e instanceof Pp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof kp).length,a=s.filter(u=>u instanceof ic).length;if(o>1||o>0&&a>0)throw new Y(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ic extends DD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ic(e,n,r)}_apply(e){const n=this._parse(e);return zT(e._query,n),new Cs(e.firestore,e.converter,Id(e._query,n))}_parse(e){const n=LT(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Sv(f,h);const v=[];for(const S of f)v.push(Av(u,s,S));m={arrayValue:{values:v}}}else m=Av(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Sv(f,h),m=RD(a,o,f,h==="in"||h==="not-in");return Me.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LD(t,e,n){const r=e,i=Rp("where",t);return ic._create(i,r,n)}class kp extends Pp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)zT(o,u),o=Id(o,u)}(e._query,n),new Cs(e.firestore,e.converter,Id(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Av(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new Y(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!F0(e)&&n.indexOf("/")!==-1)throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!X.isDocumentKey(r))throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fy(t,new X(r))}if(n instanceof xt)return Fy(t,n._key);throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function Sv(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class VD{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[lu].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Oe(o.doubleValue));return new Ip(s)}convertGeoPoint(e){return new Tp(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ku(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);me(aT(r));const i=new Go(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BT extends UT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Al extends BT{data(e={}){return super.data(e)}}class FD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new oo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Al(i._firestore,i._userDataWriter,a.doc.key,a.doc,new oo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:jD(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class $T extends VD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function UD(t,e){const n=Io(t.firestore,gu),r=wD(t),i=MD(t.converter,e);return BD(n,[CD(LT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function zD(t,...e){var n,r,i;t=nt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Iv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Iv(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof xt)c=Io(t.firestore,gu),h=np(t._key.path),u={next:f=>{e[o]&&e[o]($D(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Io(t,Cs);c=Io(f.firestore,gu),h=f._query;const m=new $T(c);u={next:g=>{e[o]&&e[o](new FD(c,m,f,g))},error:e[o+1],complete:e[o+2]},OD(t._query)}return function(m,g,v,S){const k=new pD(S),E=new Q2(g,k,v);return m.asyncQueue.enqueueAndForget(async()=>W2(await mv(m),E)),()=>{k.su(),m.asyncQueue.enqueueAndForget(async()=>q2(await mv(m),E))}}(DT(c),h,a,u)}function BD(t,e){return function(r,i){const s=new Yr;return r.asyncQueue.enqueueAndForget(async()=>sD(await yD(r),i,s)),s.promise}(DT(t),e)}function $D(t,e,n){const r=n.docs.get(e._key),i=new $T(t);return new BT(t,i,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}function HD(){return new Sp("serverTimestamp")}(function(e,n=!0){(function(i){Ts=i})(_s),yn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new gu(new Sx(r.getProvider("auth-internal")),new Px(o,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zt(Ry,Py,e),zt(Ry,Py,"esm2017")})();const WD={apiKey:"AIzaSyCc7qErbbQe_eM9hXtSIY9jogGzv-Es9bM",authDomain:"treasurehunt2000.firebaseapp.com",projectId:"treasurehunt2000",storageBucket:"treasurehunt2000.firebasestorage.app",messagingSenderId:"652802067810",appId:"1:472071776506:web:a9b4fa983af1ab90514143",measurementId:"G-MLGXLB5EXX"},Np=uE(WD);_x(Np);const sc=eN(Np),HT=ED(Np),qD=({setShowLogin:t})=>{const[e,n]=B.useState(""),[r,i]=B.useState(""),{setIsAuthenticated:s}=B.useContext(vs),o=B.useCallback(async a=>{a.preventDefault();try{await UP(sc,e.trim(),r.trim()),console.log("Login successful!"),s(!0),t(!1)}catch(u){alert("Invalid credentials or error logging in!"),console.error("Firebase Auth Error:",u)}},[e,r,s,t]);return D.jsx("div",{className:"login-popup",children:D.jsxs("form",{className:"login-popup-container",onSubmit:o,children:[D.jsxs("div",{className:"login-popup-title",children:[D.jsx("h2",{children:"Login"}),D.jsx("img",{onClick:()=>t(!1),src:Yl.cross_icon,alt:"Close"})]}),D.jsxs("div",{className:"login-popup-inputs",children:[D.jsx("input",{type:"email",placeholder:"Your email",value:e,onChange:a=>n(a.target.value),required:!0}),D.jsx("input",{type:"password",placeholder:"Your password",value:r,onChange:a=>i(a.target.value),required:!0})]}),D.jsx("button",{type:"submit",disabled:!e.trim()||!r.trim(),children:"Login"})]})})},KD=({setShowLogin:t})=>{const[e,n]=B.useState("home"),{cartItems:r,isAuthenticated:i}=B.useContext(vs),[s,o]=B.useState(0),[a,u]=B.useState(null);B.useEffect(()=>{(async()=>{const f=sc.currentUser;f&&u(f.email)})()},[i]),B.useEffect(()=>{if(!a)return;const h=bD(OT(HT,"user_puzzle_answers"),LD("userEmail","==",a)),f=zD(h,m=>{let g=0;m.forEach(v=>{g+=v.data().points||0}),o(g)});return()=>f()},[a]);const c=()=>Object.values(r).reduce((h,f)=>h+f,0);return D.jsxs("div",{className:"navbar",children:[D.jsx(Jc,{to:"/",children:D.jsx("img",{src:Yl.logo,alt:"Logo",className:"log"})}),D.jsxs("ul",{className:"navbar-menu",children:[D.jsx(Jc,{to:"/",onClick:()=>n("home"),className:e==="home"?"active":"",children:"Home"}),D.jsx("a",{href:"#clues",onClick:()=>n("menu"),className:e==="menu"?"active":"",children:"Clues"}),D.jsx("a",{href:"#socials",onClick:()=>n("mobile-app"),className:e==="mobile-app"?"active":"",children:"Socials"}),D.jsx("a",{href:"#footer",onClick:()=>n("contact-us"),className:e==="contact-us"?"active":"",children:"Contact Us"})]}),D.jsxs("div",{className:"navbar-right",children:[i?D.jsx("img",{src:Yl.user_icon,alt:"User",className:"user-icon"}):D.jsx("button",{onClick:()=>t(!0),children:"Login"}),D.jsx("div",{className:"points-display",children:D.jsxs("span",{children:["Total Points: ",s]})}),D.jsxs(Jc,{to:"/cart",className:"cart-text",children:["TotalCorrectAnswers(",c(),")"]})]})]})},GD=()=>{const{cartItems:t,removeFromCart:e,food_list:n,getTotalCartAmount:r,points:i}=B.useContext(vs),s=Df();return D.jsxs("div",{className:"cart",children:[D.jsxs("div",{className:"cart-items",children:[D.jsxs("div",{className:"cart-item-title",children:[D.jsx("p",{children:"Items"}),D.jsx("p",{children:"Title"}),D.jsx("p",{children:"Price"}),D.jsx("p",{children:"Quantity"}),D.jsx("p",{children:"Total"}),D.jsx("p",{children:"Remove"})]}),D.jsx("hr",{}),D.jsx("br",{}),n.map(o=>t[o._id]>0?D.jsxs("div",{className:"cart-items-item",children:[D.jsx("img",{src:o.image,alt:o.name}),D.jsx("p",{children:o.name}),D.jsxs("p",{children:["$",o.price]}),D.jsx("p",{children:t[o._id]}),D.jsxs("p",{children:["$",o.price*t[o._id]]}),D.jsx("p",{className:"cross",onClick:()=>e(o._id),children:"x"})]},o._id):null)]}),D.jsx("hr",{}),D.jsx("div",{className:"card-bottom",children:D.jsxs("div",{className:"cart-total",children:[D.jsxs("h2",{children:["Total points earned: ",i]}),D.jsxs("div",{className:"cart-total-details",children:[D.jsx("p",{children:"Subtotal"}),D.jsxs("p",{children:["$",r()]})]}),D.jsx("button",{onClick:()=>s("/order"),children:"Submit"})]})})]})};var WT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cv=sr.createContext&&sr.createContext(WT),QD=["attr","size","title"];function YD(t,e){if(t==null)return{};var n=JD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function JD(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vu.apply(this,arguments)}function Rv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function _u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rv(Object(n),!0).forEach(function(r){XD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function XD(t,e,n){return e=ZD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ZD(t){var e=eb(t,"string");return typeof e=="symbol"?e:e+""}function eb(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qT(t){return t&&t.map((e,n)=>sr.createElement(e.tag,_u({key:n},e.attr),qT(e.child)))}function KT(t){return e=>sr.createElement(tb,vu({attr:_u({},t.attr)},e),qT(t.child))}function tb(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=YD(t,QD),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),sr.createElement("svg",vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:_u(_u({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&sr.createElement("title",null,s),t.children)};return Cv!==void 0?sr.createElement(Cv.Consumer,null,n=>e(n)):e(WT)}function nb(t){return KT({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function rb(t){return KT({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}const ib=()=>D.jsxs("div",{className:"socials",id:"socials",children:[D.jsx("p",{children:"Follow us on our socials"}),D.jsxs("div",{className:"social-icons",children:[D.jsx("a",{href:"https://www.instagram.com/dotslash.cet/",target:"_blank",rel:"noopener noreferrer",children:D.jsx(nb,{className:"social-img"})}),D.jsx("a",{href:"https://www.linkedin.com/company/dotslash-cse-cet/about/",target:"_blank",rel:"noopener noreferrer",children:D.jsx(rb,{className:"social-img"})})]})]}),sb=({category:t,setCategory:e})=>D.jsxs("div",{className:"clues",id:"clues",children:[D.jsx("h1",{children:"Choose Your Puzzle"}),D.jsx("div",{className:"clues-list",children:sR.map((n,r)=>{const i=t===n.menu_name;return D.jsxs("div",{className:`clues-list-item ${i?"active":""}`,onClick:()=>e(i?"All":n.menu_name),"aria-label":`Select ${n.menu_name}`,children:[D.jsx("img",{className:i?"active":"",src:n.menu_image,alt:n.menu_name}),D.jsx("p",{children:n.menu_name})]},r)})}),D.jsx("hr",{})]}),ob=({id:t,name:e,price:n,description:r,image:i})=>D.jsxs("div",{className:"food-item",children:[D.jsx("div",{className:"food-item-img-container",children:D.jsx("img",{className:"food-item-image",src:i,alt:""})}),D.jsx("div",{className:"food-item-info",children:D.jsx("p",{className:"food-item-desc",children:r})})]}),ab=({category:t})=>{const{food_list:e,addToCart:n}=B.useContext(vs),r={Puzzle1:["(3points)","You are and always will be a _________"],Puzzle2:["(3points)","https://www.hongkiat.com/blog/creative-404-error-pages/","Ninjas are _______ ?"],Puzzle3:["(4points)","LinkedIn based question"],Puzzle4:["(5points)","Like all good lovers, they start with the head.","_________"],Puzzle5:["(5points)","A city must be untangled to be understood","I will be there before and after you I am ________"]},i={Puzzle1:{answer:"winner",points:3},Puzzle2:{answer:"anonymous",points:3},Puzzle3:{answer:"linkedin",points:4},Puzzle4:{answer:"lemons",points:5},Puzzle5:{answer:"tardigrade",points:5}},[s,o]=B.useState({}),[a,u]=B.useState({}),[c,h]=B.useState({}),f=(v,S)=>{o({...s,[S]:v.target.value})},m=async(v,S)=>{const k=sc.currentUser,E=k?k.email:"anonymous@example.com";try{await UD(OT(HT,"user_puzzle_answers"),{puzzleNumber:v,points:S,userEmail:E,timestamp:HD()}),console.log("Data saved to Firestore!")}catch(w){console.error("Error saving to Firestore:",w)}},g=async v=>{var k;if(c[v])return;h(E=>({...E,[v]:!0})),setTimeout(()=>{h(E=>({...E,[v]:!1}))},5e3);const S=((k=s[v])==null?void 0:k.trim().toLowerCase())===i[v].answer;S&&(n(v,i[v].points),await m(v,i[v].points)),u({...a,[v]:S})};return D.jsx("div",{className:"food-display",id:"food-display",children:D.jsx("div",{className:"food-display-list",children:e.map((v,S)=>{var k;return t==="All"||t===v.category?D.jsxs("div",{className:"food-item-container",children:[D.jsx(ob,{id:v._id,name:v.name,description:v.description,price:v.price,image:v.image}),D.jsx("div",{className:"food-questions",children:(k=r[v.name])==null?void 0:k.map((E,w)=>D.jsx("p",{children:E},w))}),i[v.name]&&D.jsxs("div",{className:"answer-input",children:[D.jsx("input",{type:"text",value:s[v.name]||"",onChange:E=>f(E,v.name),placeholder:"Enter your answer",disabled:a[v.name]}),D.jsx("button",{onClick:()=>g(v.name),className:"check-answer-btn",disabled:a[v.name]||c[v.name],children:c[v.name]?"Wait 5s...":"Check Answer"}),a[v.name]!==void 0&&D.jsx("span",{className:`result ${a[v.name]?"correct":"incorrect"}`,children:a[v.name]?"✅ Correct":"❌ Incorrect"})]})]},S):null})})})};var GT={exports:{}};(function(t,e){(function(n,r){t.exports=r(B)})(typeof self<"u"?self:EI,n=>(()=>{var r={7403:(a,u,c)=>{c.d(u,{default:()=>W});var h=c(4087),f=c.n(h);const m=function($){return new RegExp(/<[a-z][\s\S]*>/i).test($)},g=function($,U){return Math.floor(Math.random()*(U-$+1))+$};var v="TYPE_CHARACTER",S="REMOVE_CHARACTER",k="REMOVE_ALL",E="REMOVE_LAST_VISIBLE_NODE",w="PAUSE_FOR",I="CALL_FUNCTION",x="ADD_HTML_TAG_ELEMENT",b="CHANGE_DELETE_SPEED",M="CHANGE_DELAY",T="CHANGE_CURSOR",y="PASTE_STRING",A="HTML_TAG";function C($){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},C($)}function P($,U){var J=Object.keys($);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols($);U&&(q=q.filter(function(fe){return Object.getOwnPropertyDescriptor($,fe).enumerable})),J.push.apply(J,q)}return J}function N($){for(var U=1;U<arguments.length;U++){var J=arguments[U]!=null?arguments[U]:{};U%2?P(Object(J),!0).forEach(function(q){ie($,q,J[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(J)):P(Object(J)).forEach(function(q){Object.defineProperty($,q,Object.getOwnPropertyDescriptor(J,q))})}return $}function R($){return function(U){if(Array.isArray(U))return re(U)}($)||function(U){if(typeof Symbol<"u"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}($)||function(U,J){if(U){if(typeof U=="string")return re(U,J);var q=Object.prototype.toString.call(U).slice(8,-1);return q==="Object"&&U.constructor&&(q=U.constructor.name),q==="Map"||q==="Set"?Array.from(U):q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)?re(U,J):void 0}}($)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function re($,U){(U==null||U>$.length)&&(U=$.length);for(var J=0,q=new Array(U);J<U;J++)q[J]=$[J];return q}function ce($,U){for(var J=0;J<U.length;J++){var q=U[J];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty($,Fe(q.key),q)}}function ie($,U,J){return(U=Fe(U))in $?Object.defineProperty($,U,{value:J,enumerable:!0,configurable:!0,writable:!0}):$[U]=J,$}function Fe($){var U=function(J,q){if(C(J)!=="object"||J===null)return J;var fe=J[Symbol.toPrimitive];if(fe!==void 0){var V=fe.call(J,"string");if(C(V)!=="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(J)}($);return C(U)==="symbol"?U:String(U)}const W=function(){function $(q,fe){var V=this;if(function(Q,oe){if(!(Q instanceof oe))throw new TypeError("Cannot call a class as a function")}(this,$),ie(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),ie(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),ie(this,"setupWrapperElement",function(){V.state.elements.container&&(V.state.elements.wrapper.className=V.options.wrapperClassName,V.state.elements.cursor.className=V.options.cursorClassName,V.state.elements.cursor.innerHTML=V.options.cursor,V.state.elements.container.innerHTML="",V.state.elements.container.appendChild(V.state.elements.wrapper),V.state.elements.container.appendChild(V.state.elements.cursor))}),ie(this,"start",function(){return V.state.eventLoopPaused=!1,V.runEventLoop(),V}),ie(this,"pause",function(){return V.state.eventLoopPaused=!0,V}),ie(this,"stop",function(){return V.state.eventLoop&&((0,h.cancel)(V.state.eventLoop),V.state.eventLoop=null),V}),ie(this,"pauseFor",function(Q){return V.addEventToQueue(w,{ms:Q}),V}),ie(this,"typeOutAllStrings",function(){return typeof V.options.strings=="string"?(V.typeString(V.options.strings).pauseFor(V.options.pauseFor),V):(V.options.strings.forEach(function(Q){V.typeString(Q).pauseFor(V.options.pauseFor).deleteAll(V.options.deleteSpeed)}),V)}),ie(this,"typeString",function(Q){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(m(Q))return V.typeOutHTMLString(Q,oe);if(Q){var $e=(V.options||{}).stringSplitter,He=typeof $e=="function"?$e(Q):Q.split("");V.typeCharacters(He,oe)}return V}),ie(this,"pasteString",function(Q){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return m(Q)?V.typeOutHTMLString(Q,oe,!0):(Q&&V.addEventToQueue(y,{character:Q,node:oe}),V)}),ie(this,"typeOutHTMLString",function(Q){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,$e=arguments.length>2?arguments[2]:void 0,He=function(_n){var wn=document.createElement("div");return wn.innerHTML=_n,wn.childNodes}(Q);if(He.length>0)for(var ge=0;ge<He.length;ge++){var Qe=He[ge],sn=Qe.innerHTML;Qe&&Qe.nodeType!==3?(Qe.innerHTML="",V.addEventToQueue(x,{node:Qe,parentNode:oe}),$e?V.pasteString(sn,Qe):V.typeString(sn,Qe)):Qe.textContent&&($e?V.pasteString(Qe.textContent,oe):V.typeString(Qe.textContent,oe))}return V}),ie(this,"deleteAll",function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return V.addEventToQueue(k,{speed:Q}),V}),ie(this,"changeDeleteSpeed",function(Q){if(!Q)throw new Error("Must provide new delete speed");return V.addEventToQueue(b,{speed:Q}),V}),ie(this,"changeDelay",function(Q){if(!Q)throw new Error("Must provide new delay");return V.addEventToQueue(M,{delay:Q}),V}),ie(this,"changeCursor",function(Q){if(!Q)throw new Error("Must provide new cursor");return V.addEventToQueue(T,{cursor:Q}),V}),ie(this,"deleteChars",function(Q){if(!Q)throw new Error("Must provide amount of characters to delete");for(var oe=0;oe<Q;oe++)V.addEventToQueue(S);return V}),ie(this,"callFunction",function(Q,oe){if(!Q||typeof Q!="function")throw new Error("Callback must be a function");return V.addEventToQueue(I,{cb:Q,thisArg:oe}),V}),ie(this,"typeCharacters",function(Q){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q||!Array.isArray(Q))throw new Error("Characters must be an array");return Q.forEach(function($e){V.addEventToQueue(v,{character:$e,node:oe})}),V}),ie(this,"removeCharacters",function(Q){if(!Q||!Array.isArray(Q))throw new Error("Characters must be an array");return Q.forEach(function(){V.addEventToQueue(S)}),V}),ie(this,"addEventToQueue",function(Q,oe){var $e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return V.addEventToStateProperty(Q,oe,$e,"eventQueue")}),ie(this,"addReverseCalledEvent",function(Q,oe){var $e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return V.options.loop?V.addEventToStateProperty(Q,oe,$e,"reverseCalledEvents"):V}),ie(this,"addEventToStateProperty",function(Q,oe){var $e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],He=arguments.length>3?arguments[3]:void 0,ge={eventName:Q,eventArgs:oe||{}};return V.state[He]=$e?[ge].concat(R(V.state[He])):[].concat(R(V.state[He]),[ge]),V}),ie(this,"runEventLoop",function(){V.state.lastFrameTime||(V.state.lastFrameTime=Date.now());var Q=Date.now(),oe=Q-V.state.lastFrameTime;if(!V.state.eventQueue.length){if(!V.options.loop)return;V.state.eventQueue=R(V.state.calledEvents),V.state.calledEvents=[],V.options=N({},V.state.initialOptions)}if(V.state.eventLoop=f()(V.runEventLoop),!V.state.eventLoopPaused){if(V.state.pauseUntil){if(Q<V.state.pauseUntil)return;V.state.pauseUntil=null}var $e,He=R(V.state.eventQueue),ge=He.shift();if(!(oe<=($e=ge.eventName===E||ge.eventName===S?V.options.deleteSpeed==="natural"?g(40,80):V.options.deleteSpeed:V.options.delay==="natural"?g(120,160):V.options.delay))){var Qe=ge.eventName,sn=ge.eventArgs;switch(V.logInDevMode({currentEvent:ge,state:V.state,delay:$e}),Qe){case y:case v:var _n=sn.character,wn=sn.node,gi=document.createTextNode(_n),zn=gi;V.options.onCreateTextNode&&typeof V.options.onCreateTextNode=="function"&&(zn=V.options.onCreateTextNode(_n,gi)),zn&&(wn?wn.appendChild(zn):V.state.elements.wrapper.appendChild(zn)),V.state.visibleNodes=[].concat(R(V.state.visibleNodes),[{type:"TEXT_NODE",character:_n,node:zn}]);break;case S:He.unshift({eventName:E,eventArgs:{removingCharacterNode:!0}});break;case w:var oc=ge.eventArgs.ms;V.state.pauseUntil=Date.now()+parseInt(oc);break;case I:var pa=ge.eventArgs,ma=pa.cb,Rs=pa.thisArg;ma.call(Rs,{elements:V.state.elements});break;case x:var Ps=ge.eventArgs,ks=Ps.node,Lr=Ps.parentNode;Lr?Lr.appendChild(ks):V.state.elements.wrapper.appendChild(ks),V.state.visibleNodes=[].concat(R(V.state.visibleNodes),[{type:A,node:ks,parentNode:Lr||V.state.elements.wrapper}]);break;case k:var Ns=V.state.visibleNodes,yi=sn.speed,xe=[];yi&&xe.push({eventName:b,eventArgs:{speed:yi,temp:!0}});for(var We=0,vi=Ns.length;We<vi;We++)xe.push({eventName:E,eventArgs:{removingCharacterNode:!1}});yi&&xe.push({eventName:b,eventArgs:{speed:V.options.deleteSpeed,temp:!0}}),He.unshift.apply(He,xe);break;case E:var ga=ge.eventArgs.removingCharacterNode;if(V.state.visibleNodes.length){var _i=V.state.visibleNodes.pop(),ac=_i.type,on=_i.node,ya=_i.character;V.options.onRemoveNode&&typeof V.options.onRemoveNode=="function"&&V.options.onRemoveNode({node:on,character:ya}),on&&on.parentNode.removeChild(on),ac===A&&ga&&He.unshift({eventName:E,eventArgs:{}})}break;case b:V.options.deleteSpeed=ge.eventArgs.speed;break;case M:V.options.delay=ge.eventArgs.delay;break;case T:V.options.cursor=ge.eventArgs.cursor,V.state.elements.cursor.innerHTML=ge.eventArgs.cursor}V.options.loop&&(ge.eventName===E||ge.eventArgs&&ge.eventArgs.temp||(V.state.calledEvents=[].concat(R(V.state.calledEvents),[ge]))),V.state.eventQueue=He,V.state.lastFrameTime=Q}}}),q)if(typeof q=="string"){var Lt=document.querySelector(q);if(!Lt)throw new Error("Could not find container element");this.state.elements.container=Lt}else this.state.elements.container=q;fe&&(this.options=N(N({},this.options),fe)),this.state.initialOptions=N({},this.options),this.init()}var U,J;return U=$,(J=[{key:"init",value:function(){var q,fe;this.setupWrapperElement(),this.addEventToQueue(T,{cursor:this.options.cursor},!0),this.addEventToQueue(k,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(q=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(fe=document.createElement("style")).appendChild(document.createTextNode(q)),document.head.appendChild(fe),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(q){this.options.devMode&&console.log(q)}}])&&ce(U.prototype,J),Object.defineProperty(U,"prototype",{writable:!1}),$}()},8552:(a,u,c)=>{var h=c(852)(c(5639),"DataView");a.exports=h},1989:(a,u,c)=>{var h=c(1789),f=c(401),m=c(7667),g=c(1327),v=c(1866);function S(k){var E=-1,w=k==null?0:k.length;for(this.clear();++E<w;){var I=k[E];this.set(I[0],I[1])}}S.prototype.clear=h,S.prototype.delete=f,S.prototype.get=m,S.prototype.has=g,S.prototype.set=v,a.exports=S},8407:(a,u,c)=>{var h=c(7040),f=c(4125),m=c(2117),g=c(7518),v=c(4705);function S(k){var E=-1,w=k==null?0:k.length;for(this.clear();++E<w;){var I=k[E];this.set(I[0],I[1])}}S.prototype.clear=h,S.prototype.delete=f,S.prototype.get=m,S.prototype.has=g,S.prototype.set=v,a.exports=S},7071:(a,u,c)=>{var h=c(852)(c(5639),"Map");a.exports=h},3369:(a,u,c)=>{var h=c(4785),f=c(1285),m=c(6e3),g=c(9916),v=c(5265);function S(k){var E=-1,w=k==null?0:k.length;for(this.clear();++E<w;){var I=k[E];this.set(I[0],I[1])}}S.prototype.clear=h,S.prototype.delete=f,S.prototype.get=m,S.prototype.has=g,S.prototype.set=v,a.exports=S},3818:(a,u,c)=>{var h=c(852)(c(5639),"Promise");a.exports=h},8525:(a,u,c)=>{var h=c(852)(c(5639),"Set");a.exports=h},8668:(a,u,c)=>{var h=c(3369),f=c(619),m=c(2385);function g(v){var S=-1,k=v==null?0:v.length;for(this.__data__=new h;++S<k;)this.add(v[S])}g.prototype.add=g.prototype.push=f,g.prototype.has=m,a.exports=g},6384:(a,u,c)=>{var h=c(8407),f=c(7465),m=c(3779),g=c(7599),v=c(4758),S=c(4309);function k(E){var w=this.__data__=new h(E);this.size=w.size}k.prototype.clear=f,k.prototype.delete=m,k.prototype.get=g,k.prototype.has=v,k.prototype.set=S,a.exports=k},2705:(a,u,c)=>{var h=c(5639).Symbol;a.exports=h},1149:(a,u,c)=>{var h=c(5639).Uint8Array;a.exports=h},577:(a,u,c)=>{var h=c(852)(c(5639),"WeakMap");a.exports=h},4963:a=>{a.exports=function(u,c){for(var h=-1,f=u==null?0:u.length,m=0,g=[];++h<f;){var v=u[h];c(v,h,u)&&(g[m++]=v)}return g}},4636:(a,u,c)=>{var h=c(2545),f=c(5694),m=c(1469),g=c(4144),v=c(5776),S=c(6719),k=Object.prototype.hasOwnProperty;a.exports=function(E,w){var I=m(E),x=!I&&f(E),b=!I&&!x&&g(E),M=!I&&!x&&!b&&S(E),T=I||x||b||M,y=T?h(E.length,String):[],A=y.length;for(var C in E)!w&&!k.call(E,C)||T&&(C=="length"||b&&(C=="offset"||C=="parent")||M&&(C=="buffer"||C=="byteLength"||C=="byteOffset")||v(C,A))||y.push(C);return y}},2488:a=>{a.exports=function(u,c){for(var h=-1,f=c.length,m=u.length;++h<f;)u[m+h]=c[h];return u}},2908:a=>{a.exports=function(u,c){for(var h=-1,f=u==null?0:u.length;++h<f;)if(c(u[h],h,u))return!0;return!1}},8470:(a,u,c)=>{var h=c(7813);a.exports=function(f,m){for(var g=f.length;g--;)if(h(f[g][0],m))return g;return-1}},8866:(a,u,c)=>{var h=c(2488),f=c(1469);a.exports=function(m,g,v){var S=g(m);return f(m)?S:h(S,v(m))}},4239:(a,u,c)=>{var h=c(2705),f=c(9607),m=c(2333),g=h?h.toStringTag:void 0;a.exports=function(v){return v==null?v===void 0?"[object Undefined]":"[object Null]":g&&g in Object(v)?f(v):m(v)}},9454:(a,u,c)=>{var h=c(4239),f=c(7005);a.exports=function(m){return f(m)&&h(m)=="[object Arguments]"}},939:(a,u,c)=>{var h=c(2492),f=c(7005);a.exports=function m(g,v,S,k,E){return g===v||(g==null||v==null||!f(g)&&!f(v)?g!=g&&v!=v:h(g,v,S,k,m,E))}},2492:(a,u,c)=>{var h=c(6384),f=c(7114),m=c(8351),g=c(6096),v=c(4160),S=c(1469),k=c(4144),E=c(6719),w="[object Arguments]",I="[object Array]",x="[object Object]",b=Object.prototype.hasOwnProperty;a.exports=function(M,T,y,A,C,P){var N=S(M),R=S(T),re=N?I:v(M),ce=R?I:v(T),ie=(re=re==w?x:re)==x,Fe=(ce=ce==w?x:ce)==x,W=re==ce;if(W&&k(M)){if(!k(T))return!1;N=!0,ie=!1}if(W&&!ie)return P||(P=new h),N||E(M)?f(M,T,y,A,C,P):m(M,T,re,y,A,C,P);if(!(1&y)){var $=ie&&b.call(M,"__wrapped__"),U=Fe&&b.call(T,"__wrapped__");if($||U){var J=$?M.value():M,q=U?T.value():T;return P||(P=new h),C(J,q,y,A,P)}}return!!W&&(P||(P=new h),g(M,T,y,A,C,P))}},8458:(a,u,c)=>{var h=c(3560),f=c(5346),m=c(3218),g=c(346),v=/^\[object .+?Constructor\]$/,S=Function.prototype,k=Object.prototype,E=S.toString,w=k.hasOwnProperty,I=RegExp("^"+E.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!m(x)||f(x))&&(h(x)?I:v).test(g(x))}},8749:(a,u,c)=>{var h=c(4239),f=c(1780),m=c(7005),g={};g["[object Float32Array]"]=g["[object Float64Array]"]=g["[object Int8Array]"]=g["[object Int16Array]"]=g["[object Int32Array]"]=g["[object Uint8Array]"]=g["[object Uint8ClampedArray]"]=g["[object Uint16Array]"]=g["[object Uint32Array]"]=!0,g["[object Arguments]"]=g["[object Array]"]=g["[object ArrayBuffer]"]=g["[object Boolean]"]=g["[object DataView]"]=g["[object Date]"]=g["[object Error]"]=g["[object Function]"]=g["[object Map]"]=g["[object Number]"]=g["[object Object]"]=g["[object RegExp]"]=g["[object Set]"]=g["[object String]"]=g["[object WeakMap]"]=!1,a.exports=function(v){return m(v)&&f(v.length)&&!!g[h(v)]}},280:(a,u,c)=>{var h=c(5726),f=c(6916),m=Object.prototype.hasOwnProperty;a.exports=function(g){if(!h(g))return f(g);var v=[];for(var S in Object(g))m.call(g,S)&&S!="constructor"&&v.push(S);return v}},2545:a=>{a.exports=function(u,c){for(var h=-1,f=Array(u);++h<u;)f[h]=c(h);return f}},1717:a=>{a.exports=function(u){return function(c){return u(c)}}},4757:a=>{a.exports=function(u,c){return u.has(c)}},4429:(a,u,c)=>{var h=c(5639)["__core-js_shared__"];a.exports=h},7114:(a,u,c)=>{var h=c(8668),f=c(2908),m=c(4757);a.exports=function(g,v,S,k,E,w){var I=1&S,x=g.length,b=v.length;if(x!=b&&!(I&&b>x))return!1;var M=w.get(g),T=w.get(v);if(M&&T)return M==v&&T==g;var y=-1,A=!0,C=2&S?new h:void 0;for(w.set(g,v),w.set(v,g);++y<x;){var P=g[y],N=v[y];if(k)var R=I?k(N,P,y,v,g,w):k(P,N,y,g,v,w);if(R!==void 0){if(R)continue;A=!1;break}if(C){if(!f(v,function(re,ce){if(!m(C,ce)&&(P===re||E(P,re,S,k,w)))return C.push(ce)})){A=!1;break}}else if(P!==N&&!E(P,N,S,k,w)){A=!1;break}}return w.delete(g),w.delete(v),A}},8351:(a,u,c)=>{var h=c(2705),f=c(1149),m=c(7813),g=c(7114),v=c(8776),S=c(1814),k=h?h.prototype:void 0,E=k?k.valueOf:void 0;a.exports=function(w,I,x,b,M,T,y){switch(x){case"[object DataView]":if(w.byteLength!=I.byteLength||w.byteOffset!=I.byteOffset)return!1;w=w.buffer,I=I.buffer;case"[object ArrayBuffer]":return!(w.byteLength!=I.byteLength||!T(new f(w),new f(I)));case"[object Boolean]":case"[object Date]":case"[object Number]":return m(+w,+I);case"[object Error]":return w.name==I.name&&w.message==I.message;case"[object RegExp]":case"[object String]":return w==I+"";case"[object Map]":var A=v;case"[object Set]":var C=1&b;if(A||(A=S),w.size!=I.size&&!C)return!1;var P=y.get(w);if(P)return P==I;b|=2,y.set(w,I);var N=g(A(w),A(I),b,M,T,y);return y.delete(w),N;case"[object Symbol]":if(E)return E.call(w)==E.call(I)}return!1}},6096:(a,u,c)=>{var h=c(8234),f=Object.prototype.hasOwnProperty;a.exports=function(m,g,v,S,k,E){var w=1&v,I=h(m),x=I.length;if(x!=h(g).length&&!w)return!1;for(var b=x;b--;){var M=I[b];if(!(w?M in g:f.call(g,M)))return!1}var T=E.get(m),y=E.get(g);if(T&&y)return T==g&&y==m;var A=!0;E.set(m,g),E.set(g,m);for(var C=w;++b<x;){var P=m[M=I[b]],N=g[M];if(S)var R=w?S(N,P,M,g,m,E):S(P,N,M,m,g,E);if(!(R===void 0?P===N||k(P,N,v,S,E):R)){A=!1;break}C||(C=M=="constructor")}if(A&&!C){var re=m.constructor,ce=g.constructor;re==ce||!("constructor"in m)||!("constructor"in g)||typeof re=="function"&&re instanceof re&&typeof ce=="function"&&ce instanceof ce||(A=!1)}return E.delete(m),E.delete(g),A}},1957:(a,u,c)=>{var h=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g;a.exports=h},8234:(a,u,c)=>{var h=c(8866),f=c(9551),m=c(3674);a.exports=function(g){return h(g,m,f)}},5050:(a,u,c)=>{var h=c(7019);a.exports=function(f,m){var g=f.__data__;return h(m)?g[typeof m=="string"?"string":"hash"]:g.map}},852:(a,u,c)=>{var h=c(8458),f=c(7801);a.exports=function(m,g){var v=f(m,g);return h(v)?v:void 0}},9607:(a,u,c)=>{var h=c(2705),f=Object.prototype,m=f.hasOwnProperty,g=f.toString,v=h?h.toStringTag:void 0;a.exports=function(S){var k=m.call(S,v),E=S[v];try{S[v]=void 0;var w=!0}catch{}var I=g.call(S);return w&&(k?S[v]=E:delete S[v]),I}},9551:(a,u,c)=>{var h=c(4963),f=c(479),m=Object.prototype.propertyIsEnumerable,g=Object.getOwnPropertySymbols,v=g?function(S){return S==null?[]:(S=Object(S),h(g(S),function(k){return m.call(S,k)}))}:f;a.exports=v},4160:(a,u,c)=>{var h=c(8552),f=c(7071),m=c(3818),g=c(8525),v=c(577),S=c(4239),k=c(346),E="[object Map]",w="[object Promise]",I="[object Set]",x="[object WeakMap]",b="[object DataView]",M=k(h),T=k(f),y=k(m),A=k(g),C=k(v),P=S;(h&&P(new h(new ArrayBuffer(1)))!=b||f&&P(new f)!=E||m&&P(m.resolve())!=w||g&&P(new g)!=I||v&&P(new v)!=x)&&(P=function(N){var R=S(N),re=R=="[object Object]"?N.constructor:void 0,ce=re?k(re):"";if(ce)switch(ce){case M:return b;case T:return E;case y:return w;case A:return I;case C:return x}return R}),a.exports=P},7801:a=>{a.exports=function(u,c){return u==null?void 0:u[c]}},1789:(a,u,c)=>{var h=c(4536);a.exports=function(){this.__data__=h?h(null):{},this.size=0}},401:a=>{a.exports=function(u){var c=this.has(u)&&delete this.__data__[u];return this.size-=c?1:0,c}},7667:(a,u,c)=>{var h=c(4536),f=Object.prototype.hasOwnProperty;a.exports=function(m){var g=this.__data__;if(h){var v=g[m];return v==="__lodash_hash_undefined__"?void 0:v}return f.call(g,m)?g[m]:void 0}},1327:(a,u,c)=>{var h=c(4536),f=Object.prototype.hasOwnProperty;a.exports=function(m){var g=this.__data__;return h?g[m]!==void 0:f.call(g,m)}},1866:(a,u,c)=>{var h=c(4536);a.exports=function(f,m){var g=this.__data__;return this.size+=this.has(f)?0:1,g[f]=h&&m===void 0?"__lodash_hash_undefined__":m,this}},5776:a=>{var u=/^(?:0|[1-9]\d*)$/;a.exports=function(c,h){var f=typeof c;return!!(h=h??9007199254740991)&&(f=="number"||f!="symbol"&&u.test(c))&&c>-1&&c%1==0&&c<h}},7019:a=>{a.exports=function(u){var c=typeof u;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?u!=="__proto__":u===null}},5346:(a,u,c)=>{var h,f=c(4429),m=(h=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"";a.exports=function(g){return!!m&&m in g}},5726:a=>{var u=Object.prototype;a.exports=function(c){var h=c&&c.constructor;return c===(typeof h=="function"&&h.prototype||u)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,u,c)=>{var h=c(8470),f=Array.prototype.splice;a.exports=function(m){var g=this.__data__,v=h(g,m);return!(v<0||(v==g.length-1?g.pop():f.call(g,v,1),--this.size,0))}},2117:(a,u,c)=>{var h=c(8470);a.exports=function(f){var m=this.__data__,g=h(m,f);return g<0?void 0:m[g][1]}},7518:(a,u,c)=>{var h=c(8470);a.exports=function(f){return h(this.__data__,f)>-1}},4705:(a,u,c)=>{var h=c(8470);a.exports=function(f,m){var g=this.__data__,v=h(g,f);return v<0?(++this.size,g.push([f,m])):g[v][1]=m,this}},4785:(a,u,c)=>{var h=c(1989),f=c(8407),m=c(7071);a.exports=function(){this.size=0,this.__data__={hash:new h,map:new(m||f),string:new h}}},1285:(a,u,c)=>{var h=c(5050);a.exports=function(f){var m=h(this,f).delete(f);return this.size-=m?1:0,m}},6e3:(a,u,c)=>{var h=c(5050);a.exports=function(f){return h(this,f).get(f)}},9916:(a,u,c)=>{var h=c(5050);a.exports=function(f){return h(this,f).has(f)}},5265:(a,u,c)=>{var h=c(5050);a.exports=function(f,m){var g=h(this,f),v=g.size;return g.set(f,m),this.size+=g.size==v?0:1,this}},8776:a=>{a.exports=function(u){var c=-1,h=Array(u.size);return u.forEach(function(f,m){h[++c]=[m,f]}),h}},4536:(a,u,c)=>{var h=c(852)(Object,"create");a.exports=h},6916:(a,u,c)=>{var h=c(5569)(Object.keys,Object);a.exports=h},1167:(a,u,c)=>{a=c.nmd(a);var h=c(1957),f=u&&!u.nodeType&&u,m=f&&a&&!a.nodeType&&a,g=m&&m.exports===f&&h.process,v=function(){try{return m&&m.require&&m.require("util").types||g&&g.binding&&g.binding("util")}catch{}}();a.exports=v},2333:a=>{var u=Object.prototype.toString;a.exports=function(c){return u.call(c)}},5569:a=>{a.exports=function(u,c){return function(h){return u(c(h))}}},5639:(a,u,c)=>{var h=c(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,m=h||f||Function("return this")();a.exports=m},619:a=>{a.exports=function(u){return this.__data__.set(u,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(u){return this.__data__.has(u)}},1814:a=>{a.exports=function(u){var c=-1,h=Array(u.size);return u.forEach(function(f){h[++c]=f}),h}},7465:(a,u,c)=>{var h=c(8407);a.exports=function(){this.__data__=new h,this.size=0}},3779:a=>{a.exports=function(u){var c=this.__data__,h=c.delete(u);return this.size=c.size,h}},7599:a=>{a.exports=function(u){return this.__data__.get(u)}},4758:a=>{a.exports=function(u){return this.__data__.has(u)}},4309:(a,u,c)=>{var h=c(8407),f=c(7071),m=c(3369);a.exports=function(g,v){var S=this.__data__;if(S instanceof h){var k=S.__data__;if(!f||k.length<199)return k.push([g,v]),this.size=++S.size,this;S=this.__data__=new m(k)}return S.set(g,v),this.size=S.size,this}},346:a=>{var u=Function.prototype.toString;a.exports=function(c){if(c!=null){try{return u.call(c)}catch{}try{return c+""}catch{}}return""}},7813:a=>{a.exports=function(u,c){return u===c||u!=u&&c!=c}},5694:(a,u,c)=>{var h=c(9454),f=c(7005),m=Object.prototype,g=m.hasOwnProperty,v=m.propertyIsEnumerable,S=h(function(){return arguments}())?h:function(k){return f(k)&&g.call(k,"callee")&&!v.call(k,"callee")};a.exports=S},1469:a=>{var u=Array.isArray;a.exports=u},8612:(a,u,c)=>{var h=c(3560),f=c(1780);a.exports=function(m){return m!=null&&f(m.length)&&!h(m)}},4144:(a,u,c)=>{a=c.nmd(a);var h=c(5639),f=c(5062),m=u&&!u.nodeType&&u,g=m&&a&&!a.nodeType&&a,v=g&&g.exports===m?h.Buffer:void 0,S=(v?v.isBuffer:void 0)||f;a.exports=S},8446:(a,u,c)=>{var h=c(939);a.exports=function(f,m){return h(f,m)}},3560:(a,u,c)=>{var h=c(4239),f=c(3218);a.exports=function(m){if(!f(m))return!1;var g=h(m);return g=="[object Function]"||g=="[object GeneratorFunction]"||g=="[object AsyncFunction]"||g=="[object Proxy]"}},1780:a=>{a.exports=function(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=9007199254740991}},3218:a=>{a.exports=function(u){var c=typeof u;return u!=null&&(c=="object"||c=="function")}},7005:a=>{a.exports=function(u){return u!=null&&typeof u=="object"}},6719:(a,u,c)=>{var h=c(8749),f=c(1717),m=c(1167),g=m&&m.isTypedArray,v=g?f(g):h;a.exports=v},3674:(a,u,c)=>{var h=c(4636),f=c(280),m=c(8612);a.exports=function(g){return m(g)?h(g):f(g)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var u,c,h,f,m,g;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(u()-m)/1e6},c=process.hrtime,f=(u=function(){var v;return 1e9*(v=c())[0]+v[1]})(),g=1e9*process.uptime(),m=f-g):Date.now?(a.exports=function(){return Date.now()-h},h=Date.now()):(a.exports=function(){return new Date().getTime()-h},h=new Date().getTime())}).call(this)},4087:(a,u,c)=>{for(var h=c(75),f=typeof window>"u"?c.g:window,m=["moz","webkit"],g="AnimationFrame",v=f["request"+g],S=f["cancel"+g]||f["cancelRequest"+g],k=0;!v&&k<m.length;k++)v=f[m[k]+"Request"+g],S=f[m[k]+"Cancel"+g]||f[m[k]+"CancelRequest"+g];if(!v||!S){var E=0,w=0,I=[];v=function(x){if(I.length===0){var b=h(),M=Math.max(0,16.666666666666668-(b-E));E=M+b,setTimeout(function(){var T=I.slice(0);I.length=0;for(var y=0;y<T.length;y++)if(!T[y].cancelled)try{T[y].callback(E)}catch(A){setTimeout(function(){throw A},0)}},Math.round(M))}return I.push({handle:++w,callback:x,cancelled:!1}),w},S=function(x){for(var b=0;b<I.length;b++)I[b].handle===x&&(I[b].cancelled=!0)}}a.exports=function(x){return v.call(f,x)},a.exports.cancel=function(){S.apply(f,arguments)},a.exports.polyfill=function(x){x||(x=f),x.requestAnimationFrame=v,x.cancelAnimationFrame=S}},8156:a=>{a.exports=n}},i={};function s(a){var u=i[a];if(u!==void 0)return u.exports;var c=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}s.n=a=>{var u=a&&a.__esModule?()=>a.default:()=>a;return s.d(u,{a:u}),u},s.d=(a,u)=>{for(var c in u)s.o(u,c)&&!s.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:u[c]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),s.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var o={};return(()=>{s.d(o,{default:()=>I});var a=s(8156),u=s.n(a),c=s(7403),h=s(8446),f=s.n(h);function m(x){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},m(x)}function g(x,b){for(var M=0;M<b.length;M++){var T=b[M];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(x,E(T.key),T)}}function v(x,b){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(M,T){return M.__proto__=T,M},v(x,b)}function S(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function k(x){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},k(x)}function E(x){var b=function(M,T){if(m(M)!=="object"||M===null)return M;var y=M[Symbol.toPrimitive];if(y!==void 0){var A=y.call(M,"string");if(m(A)!=="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(M)}(x);return m(b)==="symbol"?b:String(b)}var w=function(x){(function(P,N){if(typeof N!="function"&&N!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(N&&N.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),N&&v(P,N)})(C,x);var b,M,T,y,A=(T=C,y=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var P,N=k(T);if(y){var R=k(this).constructor;P=Reflect.construct(N,arguments,R)}else P=N.apply(this,arguments);return function(re,ce){if(ce&&(m(ce)==="object"||typeof ce=="function"))return ce;if(ce!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(re)}(this,P)});function C(){var P,N,R,re;(function(W,$){if(!(W instanceof $))throw new TypeError("Cannot call a class as a function")})(this,C);for(var ce=arguments.length,ie=new Array(ce),Fe=0;Fe<ce;Fe++)ie[Fe]=arguments[Fe];return N=S(P=A.call.apply(A,[this].concat(ie))),re={instance:null},(R=E(R="state"))in N?Object.defineProperty(N,R,{value:re,enumerable:!0,configurable:!0,writable:!0}):N[R]=re,P}return b=C,(M=[{key:"componentDidMount",value:function(){var P=this,N=new c.default(this.typewriter,this.props.options);this.setState({instance:N},function(){var R=P.props.onInit;R&&R(N)})}},{key:"componentDidUpdate",value:function(P){f()(this.props.options,P.options)||this.setState({instance:new c.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var P=this,N=this.props.component;return u().createElement(N,{ref:function(R){return P.typewriter=R},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&g(b.prototype,M),Object.defineProperty(b,"prototype",{writable:!1}),C}(a.Component);w.defaultProps={component:"div"};const I=w})(),o.default})())})(GT);var lb=GT.exports;const ub=Pv(lb),cb="/assets/name-C5cAJUSf.png",hb=()=>D.jsx("div",{className:"header",children:D.jsxs("div",{className:"header-contents",children:[D.jsx("div",{className:"typing-text",children:D.jsx(ub,{options:{strings:["Dotslash Welcomes You to","CipherQuest 2025"],autoStart:!0,loop:!0,delay:50,deleteSpeed:30}})}),D.jsx("img",{src:cb,alt:"Name",className:"header-image"})]})}),db=()=>{const[t,e]=B.useState("All"),[n,r]=B.useState(null),[i,s]=B.useState(!0);return B.useEffect(()=>{const o=$P(sc,a=>{r(a),s(!1)});return()=>o()},[]),i?D.jsx("div",{children:"Loading..."}):n?D.jsxs("div",{className:"home",children:[D.jsx(hb,{}),D.jsx(sb,{category:t,setCategory:e}),D.jsx(ab,{category:t}),D.jsx(ib,{})]}):D.jsx(VC,{to:"/login",replace:!0})},fb=()=>{const{getTotalCartAmount:t}=B.useContext(vs);return D.jsxs("form",{action:"",className:"place-order",children:[D.jsxs("div",{className:"place-oredr-left",children:[D.jsx("p",{className:"title",children:"Delivery Information"}),D.jsxs("div",{className:"multi-field",children:[D.jsx("input",{type:"text",placeholder:"First Name"}),D.jsx("input",{type:"text",placeholder:"Last Name"})]}),D.jsx("input",{type:"emailt",placeholder:"Email address"}),D.jsx("input",{type:"text",placeholder:"street"}),D.jsxs("div",{className:"multi-field",children:[D.jsx("input",{type:"text",placeholder:"City"}),D.jsx("input",{type:"text",placeholder:"State"})]}),D.jsxs("div",{className:"multi-field",children:[D.jsx("input",{type:"text",placeholder:"Zip code"}),D.jsx("input",{type:"text",placeholder:"Country"})]}),D.jsx("input",{type:"text",placeholder:"Phone"})]}),D.jsx("div",{className:"palce-order-right",children:D.jsxs("div",{className:"cart-total",children:[D.jsx("h2",{children:"Cart totals"}),D.jsxs("div",{children:[D.jsxs("div",{className:"cart-total-details",children:[D.jsx("p",{children:"Subtotal"}),D.jsxs("p",{children:["$",t()]})]}),D.jsx("hr",{}),D.jsxs("div",{className:"cart-total-details",children:[D.jsx("p",{children:"Delivery Fee"}),D.jsxs("p",{children:["$",t()===0?0:2]})]}),D.jsx("hr",{}),D.jsxs("div",{className:"cart-total-details",children:[D.jsx("b",{children:"Total"}),D.jsxs("b",{children:["$",t()===0?0:t()+2]})]})]}),D.jsx("button",{onClick:()=>navigate("/order"),children:"Proceed To Payment"})]})})]})},pb=()=>{const[t,e]=B.useState(!1);return D.jsxs(D.Fragment,{children:[t?D.jsx(qD,{setShowLogin:e}):D.jsx(D.Fragment,{}),D.jsxs("div",{className:"app",children:[D.jsx(KD,{setShowLogin:e}),D.jsxs(FC,{children:[D.jsx(pl,{path:"/",element:D.jsx(db,{})}),D.jsx(pl,{path:"/cart",element:D.jsx(GD,{})}),D.jsx(pl,{path:"/order",element:D.jsx(fb,{})})]})]}),D.jsx(oR,{})]})};dh.createRoot(document.getElementById("root")).render(D.jsx(WC,{children:D.jsx(aR,{children:D.jsx(pb,{})})}));
