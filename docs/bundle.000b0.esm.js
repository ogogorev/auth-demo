!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({GFNa:function(){},QfWi:function(e,t,n){"use strict";function r(e,t){g.options.__h&&g.options.__h(y,e,b||t),b=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return b=1,function(e,t,n){var o=r(v++,2);return o.t=e,o.__c||(o.__=[n?n(t):s(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=y),o.__}(s,e)}function _(e,t){var n=r(v++,7);return c(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function i(){O.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(l),e.__H.__h.forEach(u),e.__H.__h=[]}catch(t){e.__H.__h=[],g.options.__e(t,e.__v)}})),O=[]}function l(e){var t=y;"function"==typeof e.__c&&e.__c(),y=t}function u(e){var t=y;e.__c=e.__(),y=t}function c(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function s(e,t){return"function"==typeof t?t(e):t}function a(e){const[t,n]=o(!1),[r,_]=o(null);return[t,r,async t=>{n(!0),_(null);try{await function({password:e}){return L++,new Promise((t,n)=>{setTimeout(()=>{L>1?"qwerty"===e?(L=0,t()):n(new Error(S.WRONG_CREDENTIALS)):n(new Error(S.CONNECTION_ERROR))},1500)})}(t),e&&e()}catch(e){_(e.message)}n(!1)}]}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){const[t,n]=o({value:e,isValid:!0,isDirty:!1});return[t,e=>{n(t=>p(p({},t),e))}]}n.r(t);n("GFNa");var v,y,m,g=n("hosL"),b=0,O=[],w=g.options.__b,k=g.options.__r,E=g.options.diffed,C=g.options.__c,j=g.options.unmount;g.options.__b=function(e){y=null,w&&w(e)},g.options.__r=function(e){k&&k(e),v=0;var t=(y=e.__c).__H;t&&(t.__h.forEach(l),t.__h.forEach(u),t.__h=[])},g.options.diffed=function(e){E&&E(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==O.push(t)&&m===g.options.requestAnimationFrame||((m=g.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),x&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);x&&(t=requestAnimationFrame(n))})(i)),y=void 0},g.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(l),e.__h=e.__h.filter((function(e){return!e.__||u(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],g.options.__e(n,e.__v)}})),C&&C(e,t)},g.options.unmount=function(e){j&&j(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(l)}catch(e){g.options.__e(e,t.__v)}};var x="function"==typeof requestAnimationFrame,D=n("qnmJ"),N=n.n(D);var P=({isDisplayed:e,msg:t})=>Object(g.h)("div",{role:"alert"},e&&Object(g.h)("p",{class:N.a.text},t));let L=0;const S={WRONG_CREDENTIALS:"WRONG_CREDENTIALS",CONNECTION_ERROR:"CONNECTION_ERROR"};var R=n("uBts"),T=n.n(R);const A={display:"flex",justifyContent:"center"},M=({width:e,height:t,color:n})=>Object(g.h)("div",{style:A},Object(g.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 20",width:e,height:t},Object(g.h)("path",{fill:"none",stroke:n,"stroke-width":"6","stroke-linecap":"round"},Object(g.h)("animate",{id:"line",attributeName:"d",dur:"1350ms",repeatCount:"indefinite",values:"M 10,10 L 10,10; M 10,10 L 35,10; M 65,10 L 90,10; M 90,10 L 90,10; M 90,10 L 90,10; M 65,10 L 90,10; M 10,10 L 35,10; M 10,10 L 10,10; M 10,10 L 10,10;",keyTimes:"0; 0.05; 0.25; 0.3; 0.5; 0.55; 0.75; 0.8; 1"})))),H="EMAIL_INCORRECT",I="LOGIN_REQUIRED",W="PASSWORD_REQUIRED",F={[S.WRONG_CREDENTIALS]:"Your login and/or password do not match.",[S.CONNECTION_ERROR]:"Our server is currently unavailable. Please try again later.",[H]:"Please enter a correct email address, e.g. username@example.com",[I]:"Login is required.",[W]:"Password is required."},U=/^(?!.*\.\.)[\w.-]+@[\w-.]+[\w]{2}$/;var q=({onLogin:e})=>{var t,n;const[o,i,l]=a(()=>e()),[u,s]=h(""),[f,p]=h(""),d=(m=null,b=5,_((function(){return{current:m}}),[]));var m;console.log("render");const O=e=>{var t;let n=null;return(e=null!=(t=e)?t:u.value)||(n=I),n||U.test(e)||(n=H),s({isValid:!n,error:{error:n}}),!n},w=e=>{var t;let n=null;return(e=null!=(t=e)?t:f.value)||(n=W),p({isValid:!n,error:{error:n}}),!n},k=e=>{s({value:e}),O(e)},E=e=>{p({value:e}),w(e)},C=()=>O()&w(),j=()=>{s({isDirty:!1}),p({isDirty:!1})},x=()=>d.current.classList.add(T.a.animated),D=()=>d.current.classList.remove(T.a.animated);var N,L,S;return N=()=>{i?x():D()},L=[i],S=r(v++,3),!g.options.__s&&c(S.__H,L)&&(S.__=N,S.__H=L,y.__H.__h.push(S)),Object(g.h)("form",{class:T.a.form,onSubmit:e=>{e.preventDefault(),D(),setTimeout(()=>{if(C()){const e={login:u.value,password:f.value};j(),l(e)}else x()},0)}},Object(g.h)("div",{class:T.a.inputBox},Object(g.h)("label",{htmlFor:"login"},"Login"),Object(g.h)("input",{id:"login",type:"text",placeholder:"Email address",value:u.value,onChange:e=>{k(e.target.value)},onFocus:()=>s({isDirty:!0}),"aria-invalid":!u.isValid}),Object(g.h)(P,{isDisplayed:u.error,msg:F[null==(t=u.error)?void 0:t.error]})),Object(g.h)("div",{class:T.a.inputBox},Object(g.h)("label",{htmlFor:"password"},"Password"),Object(g.h)("input",{id:"password",type:"password",placeholder:"Password",value:f.value,onChange:e=>{E(e.target.value)},onFocus:()=>p({isDirty:!0}),"aria-invalid":!f.isValid}),Object(g.h)(P,{isDisplayed:f.error,msg:F[null==(n=f.error)?void 0:n.error]})),Object(g.h)(P,{isDisplayed:!(u.isDirty||f.isDirty)&&i,msg:F[i]}),Object(g.h)("div",{role:"alert"},o&&Object(g.h)("span",{class:"hidden"},"Sending request")),Object(g.h)("button",{ref:d,type:"submit",class:"button",disabled:o},o?Object(g.h)(M,{width:100,height:18,color:"white"}):"LOGIN"))};t.default=()=>{const[e,t]=o(!1);return Object(g.h)("div",{id:"app",class:"container"},!e&&Object(g.h)(q,{onLogin:()=>t(!0)}),e&&Object(g.h)("div",null,Object(g.h)("p",null,"You have successfully logged in :)"),Object(g.h)("button",{class:"button",onClick:()=>t(!1)},"Try again")))}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n){var r,o,_,l=arguments,u={};for(_ in t)"key"==_?r=t[_]:"ref"==_?o=t[_]:u[_]=t[_];if(arguments.length>3)for(n=[n],_=3;_<arguments.length;_++)n.push(l[_]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===u[_]&&(u[_]=e.defaultProps[_]);return i(e,u,r,o,null)}function i(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++S.__v:o};return null!=S.vnode&&S.vnode(_),_}function l(){return{current:null}}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function a(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!p.__r++||M!==S.debounceRendering)&&((M=S.debounceRendering)||A)(p)}function p(){for(var e;p.__r=T.length;)e=T.sort((function(e,t){return e.__v.__b-t.__v.__b})),T=[],e.some((function(e){var t,n,o,_,i,l,u;e.__d&&(l=(i=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,_=w(u,i,o,t.__n,void 0!==u.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?s(i):l,i.__h),k(n,i),_!=l&&a(i)))}))}function d(e,t,n,r,_,l,c,a,f,p){var d,h,y,m,g,b,O,k=r&&r.__k||F,E=k.length;for(f==W&&(f=null!=c?c[0]:E?s(r,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(u,{children:m},null,null,null):null!=m.__e||null!=m.__c?i(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=k[d])||y&&m.key==y.key&&m.type===y.type)k[d]=void 0;else for(h=0;h<E;h++){if((y=k[h])&&m.key==y.key&&m.type===y.type){k[h]=void 0;break}y=null}g=w(e,m,y=y||W,_,l,c,a,f,p),(h=m.ref)&&y.ref!=h&&(O||(O=[]),y.ref&&O.push(y.ref,null,m),O.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),f=v(e,m,y,k,c,g,f),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&y.__e==f&&f.parentNode!=e&&(f=s(y))}if(n.__e=b,null!=c&&"function"!=typeof n.type)for(d=c.length;d--;)null!=c[d]&&o(c[d]);for(d=E;d--;)null!=k[d]&&j(k[d],k[d]);if(O)for(d=0;d<O.length;d++)C(O[d],O[++d],O[++d])}function h(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){h(e,t)})):t.push(e)),t}function v(e,t,n,r,o,_,i){var l,u,c;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(o==n||_!=i||null==_.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(_),l=null;else{for(u=i,c=0;(u=u.nextSibling)&&c<r.length;c+=2)if(u==_)break e;e.insertBefore(_,i),l=i}return void 0!==l?l:_.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||U.test(t)?n:n+"px"}function m(e,t,n,r,o){var _,i,l;if(o&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(_=t!==(t=t.replace(/Capture$/,"")),(i=t.toLowerCase())in e&&(t=i),t=t.slice(2),e.l||(e.l={}),e.l[t+_]=n,l=_?b:g,n?r||e.addEventListener(t,l,_):e.removeEventListener(t,l,_)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function g(e){this.l[e.type+!1](S.event?S.event(e):e)}function b(e){this.l[e.type+!0](S.event?S.event(e):e)}function O(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&O(o,t,n),t=v(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function w(e,t,n,o,_,i,l,s,a){var f,p,h,v,y,m,g,b,w,k,C,j=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(a=n.__h,s=t.__e=n.__e,t.__h=null,i=[s]),(f=S.__b)&&f(t);try{e:if("function"==typeof j){if(b=t.props,w=(f=j.contextType)&&o[f.__c],k=f?w?w.props.value:f.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in j&&j.prototype.render?t.__c=p=new j(b,k):(t.__c=p=new c(b,k),p.constructor=j,p.render=x),w&&w.sub(p),p.props=b,p.state||(p.state={}),p.context=k,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=j.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,j.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==j.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==j.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,k),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,k)||t.__v===n.__v){p.props=b,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&l.push(p),O(t,s,e);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,k),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=k,p.props=b,p.state=p.__s,(f=S.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),C=null!=f&&f.type==u&&null==f.key?f.props.children:f,d(e,Array.isArray(C)?C:[C],t,n,o,_,i,l,s,a),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=E(n.__e,t,n,o,_,i,l,a);(f=S.diffed)&&f(t)}catch(e){t.__v=null,(a||null!=i)&&(t.__e=s,t.__h=!!a,i[i.indexOf(s)]=null),S.__e(e,t,n)}return t.__e}function k(e,t){S.__c&&S.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){S.__e(e,t.__v)}}))}function E(e,t,n,r,o,_,i,l){var u,c,s,a,f,p=n.props,h=t.props;if(o="svg"===t.type||o,null!=_)for(u=0;u<_.length;u++)if(null!=(c=_[u])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,_[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),_=null,l=!1}if(null===t.type)p===h||l&&e.data===h||(e.data=h);else{if(null!=_&&(_=F.slice.call(e.childNodes)),s=(p=n.props||W).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!l){if(null!=_)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(a||s)&&(a&&(s&&a.__html==s.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}(function(e,t,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in t||m(e,_,null,n[_],r);for(_ in t)o&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||m(e,_,t[_],n[_],r)})(e,h,p,o,l),a?t.__k=[]:(u=t.props.children,d(e,Array.isArray(u)?u:[u],t,n,r,"foreignObject"!==t.type&&o,_,i,W,l)),l||("value"in h&&void 0!==(u=h.value)&&(u!==e.value||"progress"===t.type&&!u)&&m(e,"value",u,p.value,!1),"checked"in h&&void 0!==(u=h.checked)&&u!==e.checked&&m(e,"checked",u,p.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){S.__e(e,n)}}function j(e,t,n){var r,_,i;if(S.unmount&&S.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||C(r,null,t)),n||"function"==typeof e.type||(n=null!=(_=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){S.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],t,n);null!=_&&o(_)}function x(e,t,n){return this.constructor(e,n)}function D(e,t,n){var r,o,i;S.__&&S.__(e,t),o=(r=n===H)?null:n&&n.__k||t.__k,e=_(u,null,[e]),i=[],w(t,(r?t:n||t).__k=e,o||W,W,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?F.slice.call(t.childNodes):null,i,n||W,r),k(i,e)}function N(e,t){D(e,t,H)}function P(e,t,n){var o,_,l,u=arguments,c=r({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?_=t[l]:c[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(u[l]);return null!=n&&(c.children=n),i(e.type,c,o||e.key,_||e.ref,null)}function L(e,t){var n={__c:t="__cC"+I++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,r){return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return D})),n.d(t,"hydrate",(function(){return N})),n.d(t,"createElement",(function(){return _})),n.d(t,"h",(function(){return _})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return R})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return P})),n.d(t,"createContext",(function(){return L})),n.d(t,"toChildArray",(function(){return h})),n.d(t,"__u",(function(){return j})),n.d(t,"options",(function(){return S}));var S,R,T,A,M,H,I,W={},F=[],U=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;S={__e:function(e,t){for(var n,r,o,_=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return t.__h=_,n.__E=n}catch(t){e=t}throw e},__v:0},R=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=u,T=[],A="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,H=W,I=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:_,hydrate:i}=r,l=e=>e&&e.default?e.default:e,u=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=l(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const s={preRenderData:r},a=r.url?u(r.url):"",f=i&&a===u(location.pathname);e=(f?i:_)(o(t,{CLI_DATA:s}),document.body,e)})()}},qnmJ:function(e){e.exports={text:"text__3yll8"}},uBts:function(e){e.exports={form:"form__1mHMC",inputBox:"inputBox__yj3cK",animated:"animated__QDDln",bouncing:"bouncing__3Degz"}}});
//# sourceMappingURL=bundle.000b0.esm.js.map