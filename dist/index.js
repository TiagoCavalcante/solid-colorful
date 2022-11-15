var o=require("solid-js");function r(){return r=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},r.apply(this,arguments)}function e(o){var r=o;return function(o){r&&r(o)}}var n,t=function(o,r,e){return void 0===r&&(r=0),void 0===e&&(e=1),o>e?e:o<r?r:o},a=function(o){return"touches"in o},l=function(n){var t=o.splitProps(n,["onMove","onKey"]),l=t[0],s=t[1],u=(e(l.onMove),e(l.onKey)),i=o.createMemo(function(){var o=function(o){!function(o){!a(o)&&o.preventDefault()}(o),a(o),e(!1)},r=function(){return e(!1)};function e(e){var n=self,t=e?n.addEventListener:n.removeEventListener;t("mousemove",o),t("mouseup",r)}return{handleMoveStart:function(o){},handleKeyDown:function(o){var r=o.which||o.keyCode;r<37||r>40||(o.preventDefault(),u({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},toggleDocumentEvents:e}});return o.createEffect(function(){return i().toggleDocumentEvents()}),h("div",r({},s,{onTouchStart:i().handleMoveStart,onMouseDown:i().handleMoveStart,class:"solid-colorful__interactive",ref:null,onKeyDown:i().handleKeyDown,tabIndex:0,role:"slider"}))},s=function(o){return o.filter(Boolean).join(" ")},u=function(o){var r,e=s(["solid-colorful__pointer",o.class]);return h("div",{class:e,style:{top:100*(null!=(r=o.top)?r:.5)+"%",left:100*o.left+"%"}},h("div",{class:"solid-colorful__pointer-fill",style:{"background-color":o.color}}))},i=function(o,r,e){return void 0===r&&(r=0),void 0===e&&(e=Math.pow(10,r)),Math.round(e*o)/e},c={grad:.9,turn:360,rad:360/(2*Math.PI)},f=function(o){return"#"===o[0]&&(o=o.substr(1)),o.length<6?{r:parseInt(o[0]+o[0],16),g:parseInt(o[1]+o[1],16),b:parseInt(o[2]+o[2],16),a:1}:{r:parseInt(o.substr(0,2),16),g:parseInt(o.substr(2,2),16),b:parseInt(o.substr(4,2),16),a:1}},d=function(o,r){return void 0===r&&(r="deg"),Number(o)*(c[r]||1)},v=function(o){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(o);return r?g({h:d(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},p=v,g=function(o){var r=o.s*(o.l<50?o.l:100-o.l)/100;return{h:o.h,s:r>0?2*r/(o.l+r)*100:0,v:o.l+r,a:o.a}},b=function(o){var r=(200-o.s)*o.v/100;return{h:i(o.h),s:i(r>0&&r<200?o.s*o.v/100/(r<=100?r:200-r)*100:0),l:i(r/2),a:i(o.a,2)}},_=function(o){var r=b(o);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},m=function(o){var r=b(o);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},x=function(o){var r=o.h/360*6,e=o.s/100,n=o.v/100,t=Math.floor(r),a=n*(1-e),l=n*(1-(r-t)*e),s=n*(1-(1-r+t)*e),u=t%6;return{r:i(255*[n,l,a,a,s,n][u]),g:i(255*[s,n,n,l,a,a][u]),b:i(255*[a,a,s,n,n,l][u]),a:i(o.a,2)}},C=function(o){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(o);return r?P({h:d(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},H=C,M=function(o){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(o);return r?y({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},k=M,w=function(o){var r=o.toString(16);return r.length<2?"0"+r:r},y=function(o){var r=Math.max(o.r,o.g,o.b),e=r-Math.min(o.r,o.g,o.b),n=e?r===o.r?(o.g-o.b)/e:r===o.g?2+(o.b-o.r)/e:4+(o.r-o.g)/e:0;return{h:i(60*(n<0?n+6:n)),s:i(r?e/r*100:0),v:i(r/255*100),a:o.a}},P=function(o){return{h:i(o.h),s:i(o.s),v:i(o.v),a:i(o.a,2)}},q=function(o){var r=s(["solid-colorful__hue",o.class]);return h("div",{class:r},h(l,{onMove:function(r){o.onChange({h:360*r.left})},onKey:function(r){o.onChange({h:t(o.hue+360*r.left,0,360)})},"aria-label":"Hue","aria-valuetext":i(o.hue)},h(u,{class:"solid-colorful__hue-pointer",left:o.hue/360,color:_({h:o.hue,s:100,v:100,a:1})})))},S=function(o){return h("div",{class:"solid-colorful__saturation",style:{"background-color":_({h:o.hsva.h,s:100,v:100,a:1})}},h(l,{onMove:function(r){o.onChange({s:100*r.left,v:100-100*r.top})},onKey:function(r){o.onChange({s:t(o.hsva.s+100*r.left,0,100),v:t(o.hsva.v-100*r.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+i(o.hsva.s)+"%, Brightness "+i(o.hsva.v)+"%"},h(u,{class:"solid-colorful__saturation-pointer",top:1-o.hsva.v/100,left:o.hsva.s/100,color:_(o.hsva)})))},N=function(o,r){if(o===r)return!0;for(var e in o)if(o[e]!==r[e])return!1;return!0},E=function(o,r){return o.replace(/\s/g,"")===r.replace(/\s/g,"")};function I(r,n,t){var a=e(t),l=o.createSignal(r.toHsva(n)),s=l[0],u=l[1],i={color:n,hsva:s()};return o.createEffect(function(){if(!r.equal(n,i.color)){var o=r.toHsva(n);i={hsva:o,color:n},u(o)}}),o.createEffect(function(){var o;N(s(),i.hsva)||r.equal(o=r.fromHsva(s()),i.color)||(i={hsva:s(),color:o},a(o))}),[s,function(o){u(function(r){return Object.assign({},r,o)})}]}var D=function(){return n||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},j=new Map,K=function(r){o.createEffect(function(){var o=r?r.ownerDocument:document;if(void 0!==o&&!j.has(o)){var e=o.createElement("style");e.innerHTML='.solid-colorful{cursor:default;display:flex;flex-direction:column;height:200px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:200px}.solid-colorful__saturation{background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0));border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.solid-colorful__alpha-gradient,.solid-colorful__pointer-fill{border-radius:inherit;bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.solid-colorful__alpha-gradient,.solid-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.solid-colorful__alpha,.solid-colorful__hue{height:24px;position:relative}.solid-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.solid-colorful__last-control{border-radius:0 0 8px 8px}.solid-colorful__interactive{border-radius:inherit;bottom:0;left:0;outline:none;position:absolute;right:0;top:0;touch-action:none}.solid-colorful__pointer{background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);box-sizing:border-box;height:28px;position:absolute;transform:translate(-50%,-50%);width:28px;z-index:1}.solid-colorful__interactive:focus .solid-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.solid-colorful__alpha,.solid-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.solid-colorful__saturation-pointer{z-index:3}.solid-colorful__hue-pointer{z-index:2}',j.set(o,e);var n=D();n&&e.setAttribute("nonce",n),o.head.appendChild(e)}})},z=function(e){var n,t=o.splitProps(e,["class","colorModel","color","onChange"]),a=t[0],l=t[1],u=o.createSignal(),i=u[1];K((0,u[0])());var c=I(a.colorModel,null!=(n=a.color)?n:e.colorModel.defaultColor,a.onChange),f=c[0],d=c[1],v=s(["solid-colorful",a.class]);return h("div",r({},l,{ref:i,class:v}),h(S,{hsva:f(),onChange:d}),h(q,{hue:f().h,onChange:d,class:"solid-colorful__last-control"}))},O={defaultColor:"000",toHsva:function(o){return y(f(o))},fromHsva:function(o){return r=x(o),"#"+w(r.r)+w(r.g)+w(r.b);var r},equal:function(o,r){return o.toLowerCase()===r.toLowerCase()||N(f(o),f(r))}},B=function(o){var r={backgroundImage:"linear-gradient(90deg, "+m(Object.assign({},o.hsva,{a:0}))+", "+m(Object.assign({},o.hsva,{a:1}))+")"},e=s(["solid-colorful__alpha",o.class]);return h("div",{class:e},h("div",{class:"solid-colorful__alpha-gradient",style:r}),h(l,{onMove:function(r){o.onChange({a:r.left})},onKey:function(r){o.onChange({a:t(o.hsva.a+r.left)})},"aria-label":"Alpha","aria-valuetext":i(100*o.hsva.a)+"%"},h(u,{class:"solid-colorful__alpha-pointer",left:o.hsva.a,color:m(o.hsva)})))},L=function(e){var n,t=o.splitProps(e,["class","colorModel","color","onChange"]),a=t[0],l=t[1],u=o.createSignal(),i=u[1];K((0,u[0])());var c=I(a.colorModel,null!=(n=a.color)?n:a.colorModel.defaultColor,a.onChange),f=c[0],d=c[1],v=s(["solid-colorful",a.class]);return h("div",r({},l,{ref:i,class:v}),h(S,{hsva:f(),onChange:d}),h(q,{hue:f().h,onChange:d}),h(B,{hsva:f(),onChange:d,class:"solid-colorful__last-control"}))},A={defaultColor:{h:0,s:0,l:0,a:1},toHsva:g,fromHsva:b,equal:N},R={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:v,fromHsva:m,equal:E},F={defaultColor:{h:0,s:0,l:0},toHsva:function(o){return g({h:o.h,s:o.s,l:o.l,a:1})},fromHsva:function(o){return{h:(r=b(o)).h,s:r.s,l:r.l};var r},equal:N},T={defaultColor:"hsl(0, 0%, 0%)",toHsva:p,fromHsva:_,equal:E},$={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(o){return o},fromHsva:P,equal:N},G={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:C,fromHsva:function(o){var r=P(o);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:E},J={defaultColor:{h:0,s:0,v:0},toHsva:function(o){return{h:o.h,s:o.s,v:o.v,a:1}},fromHsva:function(o){var r=P(o);return{h:r.h,s:r.s,v:r.v}},equal:N},Q={defaultColor:"hsv(0, 0%, 0%)",toHsva:H,fromHsva:function(o){var r=P(o);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:E},U={defaultColor:{r:0,g:0,b:0,a:1},toHsva:y,fromHsva:x,equal:N},V={defaultColor:"rgba(0, 0, 0, 1)",toHsva:M,fromHsva:function(o){var r=x(o);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:E},W={defaultColor:{r:0,g:0,b:0},toHsva:function(o){return y({r:o.r,g:o.g,b:o.b,a:1})},fromHsva:function(o){return{r:(r=x(o)).r,g:r.g,b:r.b};var r},equal:N},X={defaultColor:"rgb(0, 0, 0)",toHsva:k,fromHsva:function(o){var r=x(o);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:E},Y=/^#?([0-9A-F]{3,8})$/i,Z=function(n){var t=o.splitProps(n,["color","escape","format","onBlur","onChange","process","validate"]),a=t[0],l=t[1],s=o.createSignal(a.escape(a.color||"")),u=s[0],i=s[1],c=e(a.onChange),f=e(a.onBlur);return o.createEffect(function(){i(a.escape(a.color||""))}),h("input",r({},l,{value:a.format?a.format(u()):u(),spellcheck:"false",onChange:function(o){var r=a.escape(o.target.value);i(r),a.validate(r)&&c(a.process?a.process(r):r)},onBlur:function(o){a.validate(o.target.value)||i(a.escape(a.color||"")),f(o)}}))},oo=function(o){return"#"+o};exports.HexColorInput=function(e){var n=o.splitProps(e,["alpha","prefixed"]),t=n[0];return h(Z,r({},n[1],{escape:function(o){return o.replace(/([^0-9A-F]+)/gi,"").substring(0,t.alpha?8:6)},format:t.prefixed?oo:void 0,process:oo,validate:function(o){return function(o,r){var e=Y.exec(o),n=e?e[1].length:0;return 3===n||6===n||!!r&&4===n||!!r&&8===n}(o,t.alpha)}}))},exports.HexColorPicker=function(o){return h(z,r({},o,{colorModel:O}))},exports.HslColorPicker=function(o){return h(z,r({},o,{colorModel:F}))},exports.HslStringColorPicker=function(o){return h(z,r({},o,{colorModel:T}))},exports.HslaColorPicker=function(o){return h(L,r({},o,{colorModel:A}))},exports.HslaStringColorPicker=function(o){return h(L,r({},o,{colorModel:R}))},exports.HsvColorPicker=function(o){return h(z,r({},o,{colorModel:J}))},exports.HsvStringColorPicker=function(o){return h(z,r({},o,{colorModel:Q}))},exports.HsvaColorPicker=function(o){return h(L,r({},o,{colorModel:$}))},exports.HsvaStringColorPicker=function(o){return h(L,r({},o,{colorModel:G}))},exports.RgbColorPicker=function(o){return h(z,r({},o,{colorModel:W}))},exports.RgbStringColorPicker=function(o){return h(z,r({},o,{colorModel:X}))},exports.RgbaColorPicker=function(o){return h(L,r({},o,{colorModel:U}))},exports.RgbaStringColorPicker=function(o){return h(L,r({},o,{colorModel:V}))},exports.setNonce=function(o){n=o};
//# sourceMappingURL=index.js.map
