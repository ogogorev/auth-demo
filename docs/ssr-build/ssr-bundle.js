module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="QfWi")}({GFNa:function(t,n,e){},HteQ:function(t,n){t.exports=require("preact")},QfWi:function(t,n,e){"use strict";e.r(n);e("GFNa");var r,o,i,u=e("HteQ"),c=0,a=[],_=u.options.__b,s=u.options.__r,l=u.options.diffed,f=u.options.__c,p=u.options.unmount;function d(t,n){u.options.__h&&u.options.__h(o,t,c||n),c=0;var e=o.__H||(o.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function h(t){return c=1,function(t,n,e){var i=d(r++,2);return i.t=t,i.__c||(i.__=[e?e(n):j(void 0,n),function(t){var n=i.t(i.__[0],t);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}(j,t)}function v(t,n){var e=d(r++,7);return g(e.__H,n)&&(e.__=t(),e.__H=n,e.__h=t),e.__}function b(){a.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(m),t.__H.__h.forEach(y),t.__H.__h=[]}catch(n){t.__H.__h=[],u.options.__e(n,t.__v)}})),a=[]}u.options.__b=function(t){o=null,_&&_(t)},u.options.__r=function(t){s&&s(t),r=0;var n=(o=t.__c).__H;n&&(n.__h.forEach(m),n.__h.forEach(y),n.__h=[])},u.options.diffed=function(t){l&&l(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==a.push(n)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),O&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);O&&(n=requestAnimationFrame(e))})(b)),o=void 0},u.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(m),t.__h=t.__h.filter((function(t){return!t.__||y(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],u.options.__e(e,t.__v)}})),f&&f(t,n)},u.options.unmount=function(t){p&&p(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(m)}catch(t){u.options.__e(t,n.__v)}};var O="function"==typeof requestAnimationFrame;function m(t){var n=o;"function"==typeof t.__c&&t.__c(),o=n}function y(t){var n=o;t.__c=t.__(),o=n}function g(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function j(t,n){return"function"==typeof n?n(t):n}var w=e("qnmJ"),E=e.n(w),R=function(t){var n=t.isDisplayed,e=t.msg;return Object(u.h)("div",{role:"alert"},n&&Object(u.h)("p",{class:E.a.text},e))},D=0;var N={WRONG_CREDENTIALS:"WRONG_CREDENTIALS",CONNECTION_ERROR:"CONNECTION_ERROR"};function P(t){var n=h(!1),e=n[0],r=n[1],o=h(null),i=o[0],u=o[1];return[e,i,function(n){return new Promise((function(e,o){r(!0),u(null);var i=function(){try{return r(!1),e()}catch(t){return o(t)}},c=function(t){try{return u(t.message),i()}catch(t){return o(t)}};try{return Promise.resolve(function(t){t.login;var n=t.password;return D++,new Promise((function(t,e){setTimeout((function(){D>1?"qwerty"===n?(D=0,t()):e(new Error(N.WRONG_CREDENTIALS)):e(new Error(N.CONNECTION_ERROR))}),1500)}))}(n)).then((function(n){try{return t&&t(),i()}catch(t){return c(t)}}),c)}catch(t){c(t)}}))}]}var L,x=e("uBts"),C=e.n(x),H={display:"flex",justifyContent:"center"},T=function(t){var n=t.width,e=t.height,r=t.color;return Object(u.h)("div",{style:H},Object(u.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 20",width:n,height:e},Object(u.h)("path",{fill:"none",stroke:r,"stroke-width":"6","stroke-linecap":"round"},Object(u.h)("animate",{id:"line",attributeName:"d",dur:"1350ms",repeatCount:"indefinite",values:"M 10,10 L 10,10; M 10,10 L 35,10; M 65,10 L 90,10; M 90,10 L 90,10; M 90,10 L 90,10; M 65,10 L 90,10; M 10,10 L 35,10; M 10,10 L 10,10; M 10,10 L 10,10;",keyTimes:"0; 0.05; 0.25; 0.3; 0.5; 0.55; 0.75; 0.8; 1"}))))};function M(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?M(Object(e),!0).forEach((function(n){I(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function I(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var q="EMAIL_INCORRECT",A="LOGIN_REQUIRED",F="PASSWORD_REQUIRED",G=((L={})[N.WRONG_CREDENTIALS]="Your login and/or password do not match. Maybe you should try 'qwerty' ;)",L[N.CONNECTION_ERROR]="Our server is currently unavailable. Please try again later.",L[q]="Please enter a correct email address, e.g. username@example.com",L[A]="Login is required.",L[F]="Password is required.",L),B=/^(?!.*\.\.)[\w.-]+@[\w-.]+[\w]{2}$/;function Q(t){var n=h({value:t,isValid:!0,isDirty:!1}),e=n[0],r=n[1];return[e,function(t){r((function(n){return S(S({},n),t)}))}]}var W=function(t){var n,e,i,a=t.onLogin,_=P((function(){return a()})),s=_[0],l=_[1],f=_[2],p=Q(""),h=p[0],b=p[1],O=Q(""),m=O[0],y=O[1],j=(i=null,c=5,v((function(){return{current:i}}),[]));console.log("render");var w,E,D,N=function(t){var n,e,r=null;return(t=null!=(n=t)?n:h.value)||(r=A),r||(e=t,B.test(e))||(r=q),b({isValid:!r,error:{error:r}}),!r},L=function(t){var n,e=null;return(t=null!=(n=t)?n:m.value)||(e=F),y({isValid:!e,error:{error:e}}),!e},x=function(t){b({value:t}),N(t)},H=function(t){y({value:t}),L(t)},M=function(){return N()&L()},S=function(){b({isDirty:!1}),y({isDirty:!1})},I=function(){return j.current.classList.add(C.a.animated)},W=function(){return j.current.classList.remove(C.a.animated)};return w=function(){l?I():W()},E=[l],D=d(r++,3),!u.options.__s&&g(D.__H,E)&&(D.__=w,D.__H=E,o.__H.__h.push(D)),Object(u.h)("form",{class:C.a.form,onSubmit:function(t){t.preventDefault(),W(),setTimeout((function(){if(M()){var t={login:h.value,password:m.value};S(),f(t)}else I()}),0)}},Object(u.h)("div",{class:C.a.inputBox},Object(u.h)("label",{htmlFor:"login"},"Login"),Object(u.h)("input",{id:"login",type:"text",placeholder:"Email address",value:h.value,onChange:function(t){x(t.target.value)},onFocus:function(){return b({isDirty:!0})},"aria-invalid":!h.isValid}),Object(u.h)(R,{isDisplayed:h.error,msg:G[null==(n=h.error)?void 0:n.error]})),Object(u.h)("div",{class:C.a.inputBox},Object(u.h)("label",{htmlFor:"password"},"Password"),Object(u.h)("input",{id:"password",type:"password",placeholder:"Password",value:m.value,onChange:function(t){H(t.target.value)},onFocus:function(){return y({isDirty:!0})},"aria-invalid":!m.isValid}),Object(u.h)(R,{isDisplayed:m.error,msg:G[null==(e=m.error)?void 0:e.error]})),Object(u.h)(R,{isDisplayed:!(h.isDirty||m.isDirty)&&l,msg:G[l]}),Object(u.h)("div",{role:"alert"},s&&Object(u.h)("span",{class:"hidden"},"Sending request")),Object(u.h)("button",{ref:j,type:"submit",class:"button",disabled:s},s?Object(u.h)(T,{width:100,height:18,color:"white"}):"LOGIN"))},k=function(){var t=h(!1),n=t[0],e=t[1];return Object(u.h)("div",{id:"app",class:"container"},!n&&Object(u.h)(W,{onLogin:function(){return e(!0)}}),n&&Object(u.h)("div",null,Object(u.h)("p",null,"You have successfully logged in :)"),Object(u.h)("button",{class:"button",onClick:function(){return e(!1)}},"Try again")))};n.default=k},qnmJ:function(t,n,e){t.exports={text:"text__3yll8"}},uBts:function(t,n,e){t.exports={form:"form__1mHMC",inputBox:"inputBox__yj3cK",animated:"animated__QDDln",bouncing:"bouncing__3Degz"}}});
//# sourceMappingURL=ssr-bundle.js.map