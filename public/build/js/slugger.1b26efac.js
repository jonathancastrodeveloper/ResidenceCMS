(self.webpackChunk=self.webpackChunk||[]).push([[871],{2854:(t,r,e)=>{e(4916),e(5306),e(9600),$(document).ready((function(){"use strict";$("#name input").keyup((function(){var t=function(t){for(var r=[],e={а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"zh",з:"z",и:"i",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"h",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ы:"y",э:"e",ю:"iu",я:"ya",ь:"",ъ:""},n=0;n<t.length;++n)r.push(e[t[n]]||void 0===e[t[n].toLowerCase()]&&t[n]||e[t[n].toLowerCase()].replace(/^(.)/,(function(t){return t.toUpperCase()})));return r.join("")}($("#name input").val());$("#slug input").val(t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"-").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-/,"").replace(/-$/,""))}))}))},1530:(t,r,e)=>{"use strict";var n=e(8710).charAt;t.exports=function(t,r,e){return r+(e?n(t,r).length:1)}},9670:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,r,e)=>{var n=e(5656),o=e(7466),a=e(1400),i=function(t){return function(r,e,i){var c,u=n(r),s=o(u.length),l=a(i,s);if(t&&e!=e){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},9341:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},4326:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},9920:(t,r,e)=>{var n=e(6656),o=e(3887),a=e(1236),i=e(3070);t.exports=function(t,r){for(var e=o(r),c=i.f,u=a.f,s=0;s<e.length;s++){var l=e[s];n(t,l)||c(t,l,u(r,l))}}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),a=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,a(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,a=e(7854),i=e(8113),c=a.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]<4?1:n[0]+n[1]:i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,a=e(8880),i=e(1320),c=e(3505),u=e(9920),s=e(4705);t.exports=function(t,r){var e,l,f,p,v,g=t.target,h=t.global,x=t.stat;if(e=h?n:x?n[g]||c(g,{}):(n[g]||{}).prototype)for(l in r){if(p=r[l],f=t.noTargetGet?(v=o(e,l))&&v.value:e[l],!s(h?l:g+(x?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&a(p,"sham",!0),i(e,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,r,e)=>{"use strict";e(4916);var n=e(1320),o=e(2261),a=e(7293),i=e(5112),c=e(8880),u=i("species"),s=RegExp.prototype,l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),p=i("replace"),v=!!/./[p]&&""===/./[p]("a","$0"),g=!a((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,r,e,p){var h=i(t),x=!a((function(){var r={};return r[h]=function(){return 7},7!=""[t](r)})),y=x&&!a((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[u]=function(){return e},e.flags="",e[h]=/./[h]),e.exec=function(){return r=!0,null},e[h](""),!r}));if(!x||!y||"replace"===t&&(!l||!f||v)||"split"===t&&!g){var d=/./[h],b=e(h,""[t],(function(t,r,e,n,a){var i=r.exec;return i===o||i===s.exec?x&&!a?{done:!0,value:d.call(r,e,n)}:{done:!0,value:t.call(e,r,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),E=b[0],m=b[1];n(String.prototype,t,E),n(s,h,2==r?function(t,r){return m.call(t,this,r)}:function(t){return m.call(t,this)})}p&&c(s[h],"sham",!0)}},5005:(t,r,e)=>{var n=e(857),o=e(7854),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?a(n[t])||a(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},647:(t,r,e)=>{var n=e(7908),o=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,e,u,s,l){var f=e+t.length,p=u.length,v=c;return void 0!==s&&(s=n(s),v=i),a.call(l,v,(function(n,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(f);case"<":i=s[a.slice(1,-1)];break;default:var c=+a;if(0===c)return n;if(c>p){var l=o(c/10);return 0===l?n:l<=p?void 0===u[l-1]?a.charAt(1):u[l-1]+a.charAt(1):n}i=u[c-1]}return void 0===i?"":i}))}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:(t,r,e)=>{var n=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,r){return o.call(n(t),r)}},3501:t=>{t.exports={}},4664:(t,r,e)=>{var n=e(9781),o=e(7293),a=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(7293),o=e(4326),a="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},2788:(t,r,e)=>{var n=e(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,r,e)=>{var n,o,a,i=e(8536),c=e(7854),u=e(111),s=e(8880),l=e(6656),f=e(5465),p=e(6200),v=e(3501),g="Object already initialized",h=c.WeakMap;if(i||f.state){var x=f.state||(f.state=new h),y=x.get,d=x.has,b=x.set;n=function(t,r){if(d.call(x,t))throw new TypeError(g);return r.facade=t,b.call(x,t,r),r},o=function(t){return y.call(x,t)||{}},a=function(t){return d.call(x,t)}}else{var E=p("state");v[E]=!0,n=function(t,r){if(l(t,E))throw new TypeError(g);return r.facade=t,s(t,E,r),r},o=function(t){return l(t,E)?t[E]:{}},a=function(t){return l(t,E)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!u(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},4705:(t,r,e)=>{var n=e(7293),o=/#|\.prototype\./,a=function(t,r){var e=c[i(t)];return e==s||e!=u&&("function"==typeof r?n(r):!!r)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(2788),a=n.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},3070:(t,r,e)=>{var n=e(9781),o=e(4664),a=e(9670),i=e(7593),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(a(t),r=i(r,!0),a(e),o)try{return c(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(5296),a=e(9114),i=e(5656),c=e(7593),u=e(6656),s=e(4664),l=Object.getOwnPropertyDescriptor;r.f=n?l:function(t,r){if(t=i(t),r=c(r,!0),s)try{return l(t,r)}catch(t){}if(u(t,r))return a(!o.f.call(t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},6324:(t,r,e)=>{var n=e(6656),o=e(5656),a=e(1318).indexOf,i=e(3501);t.exports=function(t,r){var e,c=o(t),u=0,s=[];for(e in c)!n(i,e)&&n(c,e)&&s.push(e);for(;r.length>u;)n(c,e=r[u++])&&(~a(s,e)||s.push(e));return s}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},3887:(t,r,e)=>{var n=e(5005),o=e(8006),a=e(5181),i=e(9670);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(i(t)),e=a.f;return e?r.concat(e(t)):r}},857:(t,r,e)=>{var n=e(7854);t.exports=n},1320:(t,r,e)=>{var n=e(7854),o=e(8880),a=e(6656),i=e(3505),c=e(2788),u=e(9909),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,r,e,c){var u,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof r||a(e,"name")||o(e,"name",r),(u=l(e)).source||(u.source=f.join("string"==typeof r?r:""))),t!==n?(s?!v&&t[r]&&(p=!0):delete t[r],p?t[r]=e:o(t,r,e)):p?t[r]=e:i(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},7651:(t,r,e)=>{var n=e(4326),o=e(2261);t.exports=function(t,r){var e=t.exec;if("function"==typeof e){var a=e.call(t,r);if("object"!=typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,r)}},2261:(t,r,e)=>{"use strict";var n,o,a=e(7066),i=e(2999),c=e(2309),u=RegExp.prototype.exec,s=c("native-string-replace",String.prototype.replace),l=u,f=(n=/a/,o=/b*/g,u.call(n,"a"),u.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),p=i.UNSUPPORTED_Y||i.BROKEN_CARET,v=void 0!==/()??/.exec("")[1];(f||v||p)&&(l=function(t){var r,e,n,o,i=this,c=p&&i.sticky,l=a.call(i),g=i.source,h=0,x=t;return c&&(-1===(l=l.replace("y","")).indexOf("g")&&(l+="g"),x=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(g="(?: "+g+")",x=" "+x,h++),e=new RegExp("^(?:"+g+")",l)),v&&(e=new RegExp("^"+g+"$(?!\\s)",l)),f&&(r=i.lastIndex),n=u.call(c?e:i,x),c?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:f&&n&&(i.lastIndex=i.global?n.index+n[0].length:r),v&&n&&n.length>1&&s.call(n[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=l},7066:(t,r,e)=>{"use strict";var n=e(9670);t.exports=function(){var t=n(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},2999:(t,r,e)=>{"use strict";var n=e(7293);function o(t,r){return RegExp(t,r)}r.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),r.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,r,e)=>{var n=e(7854),o=e(8880);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.14.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:(t,r,e)=>{var n=e(9958),o=e(4488),a=function(t){return function(r,e){var a,i,c=String(o(r)),u=n(e),s=c.length;return u<0||u>=s?t?"":void 0:(a=c.charCodeAt(u))<55296||a>56319||u+1===s||(i=c.charCodeAt(u+1))<56320||i>57343?t?c.charAt(u):a:t?c.slice(u,u+2):i-56320+(a-55296<<10)+65536}};t.exports={codeAt:a(!1),charAt:a(!0)}},1400:(t,r,e)=>{var n=e(9958),o=Math.max,a=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):a(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},7466:(t,r,e)=>{var n=e(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488);t.exports=function(t){return Object(n(t))}},7593:(t,r,e)=>{var n=e(111);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,r,e)=>{var n=e(7854),o=e(2309),a=e(6656),i=e(9711),c=e(133),u=e(3307),s=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||i;t.exports=function(t){return a(s,t)&&(c||"string"==typeof s[t])||(c&&a(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},9600:(t,r,e)=>{"use strict";var n=e(2109),o=e(8361),a=e(5656),i=e(9341),c=[].join,u=o!=Object,s=i("join",",");n({target:"Array",proto:!0,forced:u||!s},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},4916:(t,r,e)=>{"use strict";var n=e(2109),o=e(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},5306:(t,r,e)=>{"use strict";var n=e(7007),o=e(9670),a=e(7466),i=e(9958),c=e(4488),u=e(1530),s=e(647),l=e(7651),f=Math.max,p=Math.min;n("replace",2,(function(t,r,e,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(e,n){var o=c(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,o,n):r.call(String(o),e,n)},function(t,n){if(!v&&g||"string"==typeof n&&-1===n.indexOf(h)){var c=e(r,t,this,n);if(c.done)return c.value}var x=o(t),y=String(this),d="function"==typeof n;d||(n=String(n));var b=x.global;if(b){var E=x.unicode;x.lastIndex=0}for(var m=[];;){var S=l(x,y);if(null===S)break;if(m.push(S),!b)break;""===String(S[0])&&(x.lastIndex=u(y,a(x.lastIndex),E))}for(var w,O="",j=0,P=0;P<m.length;P++){S=m[P];for(var T=String(S[0]),I=f(p(i(S.index),y.length),0),R=[],A=1;A<S.length;A++)R.push(void 0===(w=S[A])?w:String(w));var _=S.groups;if(d){var C=[T].concat(R,I,y);void 0!==_&&C.push(_);var $=String(n.apply(void 0,C))}else $=s(T,y,I,R,_,n);I>=j&&(O+=y.slice(j,I)+$,j=I+T.length)}return O+y.slice(j)}]}))}},t=>{"use strict";var r;r=2854,t(t.s=r)}]);