"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[197],{57197:function(e,t,n){n.d(t,{Z:function(){return Be}});var r=n(70885),o=n(87462),i=n(63366),a=n(72791);n(52007);function s(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){return e instanceof s(e).Element||e instanceof Element}function c(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function p(e){return"undefined"!==typeof ShadowRoot&&(e instanceof s(e).ShadowRoot||e instanceof ShadowRoot)}var u=Math.round;function l(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(c(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=n.width/a||1),i>0&&(o=n.height/i||1)}return{width:u(n.width/r),height:u(n.height/o),top:u(n.top/o),right:u(n.right/r),bottom:u(n.bottom/o),left:u(n.left/r),x:u(n.left/r),y:u(n.top/o)}}function d(e){var t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function v(e){return l(h(e)).left+d(e).scrollLeft}function g(e){return s(e).getComputedStyle(e)}function y(e){var t=g(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function b(e,t,n){void 0===n&&(n=!1);var r=c(t),o=c(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),i=h(t),a=l(e,o),f={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(r||!r&&!n)&&(("body"!==m(t)||y(i))&&(f=function(e){return e!==s(e)&&c(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:d(e);var t}(t)),c(t)?((p=l(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=v(i))),{x:a.left+f.scrollLeft-p.x,y:a.top+f.scrollTop-p.y,width:a.width,height:a.height}}function w(e){var t=l(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function x(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||h(e)}function O(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:c(e)&&y(e)?e:O(x(e))}function E(e,t){var n;void 0===t&&(t=[]);var r=O(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=s(r),a=o?[i].concat(i.visualViewport||[],y(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(E(x(a)))}function j(e){return["table","td","th"].indexOf(m(e))>=0}function k(e){return c(e)&&"fixed"!==g(e).position?e.offsetParent:null}function D(e){for(var t=s(e),n=k(e);n&&j(n)&&"static"===g(n).position;)n=k(n);return n&&("html"===m(n)||"body"===m(n)&&"static"===g(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&c(e)&&"fixed"===g(e).position)return null;for(var n=x(e);c(n)&&["html","body"].indexOf(m(n))<0;){var r=g(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var P="top",R="bottom",M="right",L="left",W="auto",B=[P,R,M,L],T="start",A="end",H="viewport",Z="popper",S=B.reduce((function(e,t){return e.concat([t+"-"+T,t+"-"+A])}),[]),C=[].concat(B,[W]).reduce((function(e,t){return e.concat([t,t+"-"+T,t+"-"+A])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function N(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var I={placement:"bottom",modifiers:[],strategy:"absolute"};function U(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function V(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?I:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},I,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:f(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var u=function(e){var t=q(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),f=function(){};a.push(s||f)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(U(t,n)){o.rects={reference:b(t,D(n),"fixed"===o.options.strategy),popper:w(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,p=void 0===f?{}:f,u=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:u,instance:c})||o)}else o.reset=!1,r=-1}}},update:N((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!U(e,t))return c;function p(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var z={passive:!0};var F={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,c=s(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,z)})),f&&c.addEventListener("resize",n.update,z),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),f&&c.removeEventListener("resize",n.update,z)}},data:{}};function X(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?X(o):null,a=o?Y(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case P:t={x:s,y:n.y-r.height};break;case R:t={x:s,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:f};break;case L:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?G(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case T:t[c]=t[c]-(n[p]/2-r[p]/2);break;case A:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var K={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=J({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Q=Math.max,$=Math.min,ee=Math.round,te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ne(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,f=e.position,c=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,l=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:ee(ee(t*r)/r)||0,y:ee(ee(n*r)/r)||0}}(a):"function"===typeof u?u(a):a,d=l.x,m=void 0===d?0:d,v=l.y,y=void 0===v?0:v,b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=L,O=P,E=window;if(p){var j=D(n),k="clientHeight",W="clientWidth";j===s(n)&&"static"!==g(j=h(n)).position&&"absolute"===f&&(k="scrollHeight",W="scrollWidth"),j=j,o!==P&&(o!==L&&o!==M||i!==A)||(O=R,y-=j[k]-r.height,y*=c?1:-1),o!==L&&(o!==P&&o!==R||i!==A)||(x=M,m-=j[W]-r.width,m*=c?1:-1)}var B,T=Object.assign({position:f},p&&te);return c?Object.assign({},T,((B={})[O]=w?"0":"",B[x]=b?"0":"",B.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+y+"px)":"translate3d("+m+"px, "+y+"px, 0)",B)):Object.assign({},T,((t={})[O]=w?y+"px":"",t[x]=b?m+"px":"",t.transform="",t))}var re={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=C.reduce((function(e,n){return e[n]=function(e,t,n){var r=X(e),o=[L,P].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[L,M].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},oe={left:"right",right:"left",bottom:"top",top:"bottom"};function ie(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var ae={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return ae[e]}))}function fe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e,t){return t===H?ce(function(e){var t=s(e),n=h(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:a+v(e),y:f}}(e)):c(t)?function(e){var t=l(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ce(function(e){var t,n=h(e),r=d(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=Q(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Q(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+v(e),f=-r.scrollTop;return"rtl"===g(o||n).direction&&(s+=Q(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(h(e)))}function ue(e,t,n){var r="clippingParents"===t?function(e){var t=E(x(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&c(e)?D(e):e;return f(n)?t.filter((function(e){return f(e)&&fe(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=pe(e,n);return t.top=Q(r.top,t.top),t.right=$(r.right,t.right),t.bottom=$(r.bottom,t.bottom),t.left=Q(r.left,t.left),t}),pe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function le(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function de(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function me(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?H:s,p=n.elementContext,u=void 0===p?Z:p,d=n.altBoundary,m=void 0!==d&&d,v=n.padding,g=void 0===v?0:v,y=le("number"!==typeof g?g:de(g,B)),b=u===Z?"reference":Z,w=e.rects.popper,x=e.elements[m?b:u],O=ue(f(x)?x:x.contextElement||h(e.elements.popper),a,c),E=l(e.elements.reference),j=J({reference:E,element:w,strategy:"absolute",placement:o}),k=ce(Object.assign({},w,j)),D=u===Z?k:E,L={top:O.top-D.top+y.top,bottom:D.bottom-O.bottom+y.bottom,left:O.left-D.left+y.left,right:D.right-O.right+y.right},W=e.modifiersData.offset;if(u===Z&&W){var T=W[o];Object.keys(L).forEach((function(e){var t=[M,R].indexOf(e)>=0?1:-1,n=[P,R].indexOf(e)>=0?"y":"x";L[e]+=T[n]*t}))}return L}function he(e,t,n){return Q(e,$(t,n))}var ve={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=me(t,{boundary:f,rootBoundary:c,padding:u,altBoundary:p}),g=X(t.placement),y=Y(t.placement),b=!y,x=G(g),O="x"===x?"y":"x",E=t.modifiersData.popperOffsets,j=t.rects.reference,k=t.rects.popper,W="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,B={x:0,y:0};if(E){if(i||s){var A="y"===x?P:L,H="y"===x?R:M,Z="y"===x?"height":"width",S=E[x],C=E[x]+v[A],_=E[x]-v[H],q=d?-k[Z]/2:0,N=y===T?j[Z]:k[Z],I=y===T?-k[Z]:-j[Z],U=t.elements.arrow,V=d&&U?w(U):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},F=z[A],J=z[H],K=he(0,j[Z],V[Z]),ee=b?j[Z]/2-q-K-F-W:N-K-F-W,te=b?-j[Z]/2+q+K+J+W:I+K+J+W,ne=t.elements.arrow&&D(t.elements.arrow),re=ne?"y"===x?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,ie=E[x]+ee-oe-re,ae=E[x]+te-oe;if(i){var se=he(d?$(C,ie):C,S,d?Q(_,ae):_);E[x]=se,B[x]=se-S}if(s){var fe="x"===x?P:L,ce="x"===x?R:M,pe=E[O],ue=pe+v[fe],le=pe-v[ce],de=he(d?$(ue,ie):ue,pe,d?Q(le,ae):le);E[O]=de,B[O]=de-pe}}t.modifiersData[r]=B}},requiresIfExists:["offset"]};var ge={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=X(n.placement),f=G(s),c=[L,M].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return le("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:de(e,B))}(o.padding,n),u=w(i),l="y"===f?P:L,d="y"===f?R:M,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=D(i),g=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=p[l],x=g-u[c]-p[d],O=g/2-u[c]/2+y,E=he(b,O,x),j=f;n.modifiersData[r]=((t={})[j]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&fe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[P,M,R,L].some((function(t){return e[t]>=0}))}var we=V({defaultModifiers:[F,K,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:X(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ne(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ne(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];c(o)&&m(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});c(r)&&m(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},re,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=X(v),y=f||(g===v||!m?[ie(v)]:function(e){if(X(e)===W)return[];var t=ie(e);return[se(e),t,se(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(X(n)===W?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?C:f,p=Y(r),u=p?s?S:S.filter((function(e){return Y(e)===p})):B,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=me(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[X(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,j=b[0],k=0;k<b.length;k++){var D=b[k],A=X(D),H=Y(D)===T,Z=[P,R].indexOf(A)>=0,_=Z?"width":"height",q=me(t,{placement:D,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),N=Z?H?M:L:H?R:P;w[_]>x[_]&&(N=ie(N));var I=ie(N),U=[];if(i&&U.push(q[A]<=0),s&&U.push(q[N]<=0,q[I]<=0),U.every((function(e){return e}))){j=D,E=!1;break}O.set(D,U)}if(E)for(var V=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},z=m?3:1;z>0;z--){if("break"===V(z))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ve,ge,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),f=ye(a,r),c=ye(s,o,i),p=be(f),u=be(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),xe=n(69120),Oe=n(79657),Ee=n(98301),je=n(42071),ke=n(40162),De=n(80184),Pe=["anchorEl","children","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],Re=["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Me(e){return"function"===typeof e?e():e}var Le={},We=a.forwardRef((function(e,t){var n=e.anchorEl,s=e.children,f=e.disablePortal,c=e.modifiers,p=e.open,u=e.placement,l=e.popperOptions,d=e.popperRef,m=e.TransitionProps,h=(0,i.Z)(e,Pe),v=a.useRef(null),g=(0,je.Z)(v,t),y=a.useRef(null),b=(0,je.Z)(y,d),w=a.useRef(b);(0,ke.Z)((function(){w.current=b}),[b]),a.useImperativeHandle(d,(function(){return y.current}),[]);var x=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(u,(0,xe.Z)()),O=a.useState(x),E=(0,r.Z)(O,2),j=E[0],k=E[1];a.useEffect((function(){y.current&&y.current.forceUpdate()})),(0,ke.Z)((function(){if(n&&p){Me(n);var e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;k(t.placement)}}];null!=c&&(e=e.concat(c)),l&&null!=l.modifiers&&(e=e.concat(l.modifiers));var t=we(Me(n),v.current,(0,o.Z)({placement:x},l,{modifiers:e}));return w.current(t),function(){t.destroy(),w.current(null)}}}),[n,f,c,p,l,x]);var D={placement:j};return null!==m&&(D.TransitionProps=m),(0,De.jsx)("div",(0,o.Z)({ref:g,role:"tooltip"},h,{children:"function"===typeof s?s(D):s}))})),Be=a.forwardRef((function(e,t){var n=e.anchorEl,s=e.children,f=e.container,c=e.disablePortal,p=void 0!==c&&c,u=e.keepMounted,l=void 0!==u&&u,d=e.modifiers,m=e.open,h=e.placement,v=void 0===h?"bottom":h,g=e.popperOptions,y=void 0===g?Le:g,b=e.popperRef,w=e.style,x=e.transition,O=void 0!==x&&x,E=(0,i.Z)(e,Re),j=a.useState(!0),k=(0,r.Z)(j,2),D=k[0],P=k[1];if(!l&&!m&&(!O||D))return null;var R=f||(n?(0,Ee.Z)(Me(n)).body:void 0);return(0,De.jsx)(Oe.Z,{disablePortal:p,container:R,children:(0,De.jsx)(We,(0,o.Z)({anchorEl:n,disablePortal:p,modifiers:d,ref:t,open:O?!D:m,placement:v,popperOptions:y,popperRef:b},E,{style:(0,o.Z)({position:"fixed",top:0,left:0,display:m||!l||O?null:"none"},w),TransitionProps:O?{in:m,onEnter:function(){P(!1)},onExited:function(){P(!0)}}:null,children:s}))})}))}}]);
//# sourceMappingURL=197.004116d6.chunk.js.map