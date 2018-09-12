/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-hovermq-pointermq-mq-setclasses !*/
!function(e,n,o){function t(e,n){return typeof e===n}function a(){var e,n,o,a,i,r,s;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],n=d[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(a=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)r=e[i],s=r.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),u.push((a?"":"no-")+s.join("-"))}}function i(e){var n=p.className,o=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),h?p.className.baseVal=n:p.className=n)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||(e=r(h?"svg":"body"),e.fake=!0),e}function l(e,o,t,a){var i,l,c,u,d="modernizr",f=r("div"),h=s();if(parseInt(t,10))for(;t--;)c=r("div"),c.id=a?a[t]:d+(t+1),f.appendChild(c);return i=r("style"),i.type="text/css",i.id="s"+d,(h.fake?h:f).appendChild(i),h.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=p.style.overflow,p.style.overflow="hidden",p.appendChild(h)),l=o(f,e),h.fake?(h.parentNode.removeChild(h),p.style.overflow=u,p.offsetHeight):f.parentNode.removeChild(f),!!l}function c(e,n){if("object"==typeof e)for(var o in e)m(e,o)&&c(o,e[o]);else{e=e.toLowerCase();var t=e.split("."),a=Modernizr[t[0]];if(2==t.length&&(a=a[t[1]]),"undefined"!=typeof a)return Modernizr;n="function"==typeof n?n():n,1==t.length?Modernizr[t[0]]=n:(!Modernizr[t[0]]||Modernizr[t[0]]instanceof Boolean||(Modernizr[t[0]]=new Boolean(Modernizr[t[0]])),Modernizr[t[0]][t[1]]=n),i([(n&&0!=n?"":"no-")+t.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var u=[],d=[],f={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){d.push({name:e,fn:n,options:o})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var p=n.documentElement,h="svg"===p.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=r("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n});var y=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var o=n(e);return o&&o.matches||!1}:function(n){var o=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){o="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),o}}();f.mq=y;var m;!function(){var e={}.hasOwnProperty;m=t(e,"undefined")||t(e.call,"undefined")?function(e,n){return n in e&&t(e.constructor.prototype[n],"undefined")}:function(n,o){return e.call(n,o)}}(),f._l={},f.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},f._trigger=function(e,n){if(this._l[e]){var o=this._l[e];setTimeout(function(){var e,t;for(e=0;e<o.length;e++)(t=o[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){f.addTest=c}),Modernizr.addTest("hovermq",y("(hover)")),Modernizr.addTest("pointermq",y("(pointer:coarse),(pointer:fine),(pointer:none)")),a(),i(u),delete f.addTest,delete f.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);