/*! For license information please see 148.2960996a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[148],{4853:function(e,n,t){t.d(n,{ZP:function(){return Z}});var r=t(885),o=t(5671),a=t(3144),i=t(181);function s(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,i.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw a}}}}var l,u,c=t(2791),d=Object.defineProperty,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,m=function(e,n,t){return n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},g=function(e,n){for(var t in n||(n={}))h.call(n,t)&&m(e,t,n[t]);if(f){var r,o=s(f(n));try{for(o.s();!(r=o.n()).done;){t=r.value;v.call(n,t)&&m(e,t,n[t])}}catch(a){o.e(a)}finally{o.f()}}return e},y=function(e,n){var t={};for(var r in e)h.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&f){var o,a=s(f(e));try{for(a.s();!(o=a.n()).done;){r=o.value;n.indexOf(r)<0&&v.call(e,r)&&(t[r]=e[r])}}catch(i){a.e(i)}finally{a.f()}}return t};!function(e){var n=function(){function n(e,t,r,a){if((0,o.Z)(this,n),this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var i=[],s=0;s<this.size;s++)i.push(!1);for(var u=0;u<this.size;u++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(r);if(this.drawCodewords(c),-1==a)for(var d=1e9,f=0;f<8;f++){this.applyMask(f),this.drawFormatBits(f);var h=this.getPenaltyScore();h<d&&(a=f,d=h),this.applyMask(f)}l(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}return(0,a.Z)(n,[{key:"getModule",value:function(e,n){return 0<=e&&e<this.size&&0<=n&&n<this.size&&this.modules[n][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var n=this.getAlignmentPatternPositions(),t=n.length,r=0;r<t;r++)for(var o=0;o<t;o++)0==r&&0==o||0==r&&o==t-1||r==t-1&&0==o||this.drawAlignmentPattern(n[r],n[o]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var n=this.errorCorrectionLevel.formatBits<<3|e,t=n,r=0;r<10;r++)t=t<<1^1335*(t>>>9);var o=21522^(n<<10|t);l(o>>>15==0);for(var a=0;a<=5;a++)this.setFunctionModule(8,a,i(o,a));this.setFunctionModule(8,7,i(o,6)),this.setFunctionModule(8,8,i(o,7)),this.setFunctionModule(7,8,i(o,8));for(var s=9;s<15;s++)this.setFunctionModule(14-s,8,i(o,s));for(var u=0;u<8;u++)this.setFunctionModule(this.size-1-u,8,i(o,u));for(var c=8;c<15;c++)this.setFunctionModule(8,this.size-15+c,i(o,c));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,n=0;n<12;n++)e=e<<1^7973*(e>>>11);var t=this.version<<12|e;l(t>>>18==0);for(var r=0;r<18;r++){var o=i(t,r),a=this.size-11+r%3,s=Math.floor(r/3);this.setFunctionModule(a,s,o),this.setFunctionModule(s,a,o)}}}},{key:"drawFinderPattern",value:function(e,n){for(var t=-4;t<=4;t++)for(var r=-4;r<=4;r++){var o=Math.max(Math.abs(r),Math.abs(t)),a=e+r,i=n+t;0<=a&&a<this.size&&0<=i&&i<this.size&&this.setFunctionModule(a,i,2!=o&&4!=o)}}},{key:"drawAlignmentPattern",value:function(e,n){for(var t=-2;t<=2;t++)for(var r=-2;r<=2;r++)this.setFunctionModule(e+r,n+t,1!=Math.max(Math.abs(r),Math.abs(t)))}},{key:"setFunctionModule",value:function(e,n,t){this.modules[n][e]=t,this.isFunction[n][e]=!0}},{key:"addEccAndInterleave",value:function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var o=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],a=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),s=o-i%o,u=Math.floor(i/o),c=[],d=n.reedSolomonComputeDivisor(a),f=0,h=0;f<o;f++){var v=e.slice(h,h+u-a+(f<s?0:1));h+=v.length;var m=n.reedSolomonComputeRemainder(v,d);f<s&&v.push(0),c.push(v.concat(m))}for(var g=[],y=function(e){c.forEach((function(n,t){(e!=u-a||t>=s)&&g.push(n[e])}))},E=0;E<c[0].length;E++)y(E);return l(g.length==i),g}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){6==r&&(r=5);for(var o=0;o<this.size;o++)for(var a=0;a<2;a++){var s=r-a,u=0==(r+1&2)?this.size-1-o:o;!this.isFunction[u][s]&&t<8*e.length&&(this.modules[u][s]=i(e[t>>>3],7-(7&t)),t++)}}l(t==8*e.length)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var n=0;n<this.size;n++)for(var t=0;t<this.size;t++){var r=void 0;switch(e){case 0:r=(t+n)%2==0;break;case 1:r=n%2==0;break;case 2:r=t%3==0;break;case 3:r=(t+n)%3==0;break;case 4:r=(Math.floor(t/3)+Math.floor(n/2))%2==0;break;case 5:r=t*n%2+t*n%3==0;break;case 6:r=(t*n%2+t*n%3)%2==0;break;case 7:r=((t+n)%2+t*n%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[n][t]&&r&&(this.modules[n][t]=!this.modules[n][t])}}},{key:"getPenaltyScore",value:function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,o=0,a=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?5==++o?e+=n.PENALTY_N1:o>5&&e++:(this.finderPenaltyAddHistory(o,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][i],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,a)*n.PENALTY_N3}for(var u=0;u<this.size;u++){for(var c=!1,d=0,f=[0,0,0,0,0,0,0],h=0;h<this.size;h++)this.modules[h][u]==c?5==++d?e+=n.PENALTY_N1:d>5&&e++:(this.finderPenaltyAddHistory(d,f),c||(e+=this.finderPenaltyCountPatterns(f)*n.PENALTY_N3),c=this.modules[h][u],d=1);e+=this.finderPenaltyTerminateAndCount(c,d,f)*n.PENALTY_N3}for(var v=0;v<this.size-1;v++)for(var m=0;m<this.size-1;m++){var g=this.modules[v][m];g==this.modules[v][m+1]&&g==this.modules[v+1][m]&&g==this.modules[v+1][m+1]&&(e+=n.PENALTY_N2)}var y,E=0,p=s(this.modules);try{for(p.s();!(y=p.n()).done;){E=y.value.reduce((function(e,n){return e+(n?1:0)}),E)}}catch(C){p.e(C)}finally{p.f()}var b=this.size*this.size,w=Math.ceil(Math.abs(20*E-10*b)/b)-1;return l(0<=w&&w<=9),l(0<=(e+=w*n.PENALTY_N4)&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,n=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),t=[6],r=this.size-7;t.length<e;r-=n)t.splice(1,0,r);return t}},{key:"finderPenaltyCountPatterns",value:function(e){var n=e[1];l(n<=3*this.size);var t=n>0&&e[2]==n&&e[3]==3*n&&e[4]==n&&e[5]==n;return(t&&e[0]>=4*n&&e[6]>=n?1:0)+(t&&e[6]>=4*n&&e[0]>=n?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,n,t){return e&&(this.finderPenaltyAddHistory(n,t),n=0),n+=this.size,this.finderPenaltyAddHistory(n,t),this.finderPenaltyCountPatterns(t)}},{key:"finderPenaltyAddHistory",value:function(e,n){0==n[0]&&(e+=this.size),n.pop(),n.unshift(e)}}],[{key:"encodeText",value:function(t,r){var o=e.QrSegment.makeSegments(t);return n.encodeSegments(o,r)}},{key:"encodeBinary",value:function(t,r){var o=e.QrSegment.makeBytes(t);return n.encodeSegments([o],r)}},{key:"encodeSegments",value:function(e,t){var o,a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,f=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(n.MIN_VERSION<=i&&i<=c&&c<=n.MAX_VERSION)||d<-1||d>7)throw new RangeError("Invalid value");for(o=i;;o++){var h=8*n.getNumDataCodewords(o,t),v=u.getTotalBits(e,o);if(v<=h){a=v;break}if(o>=c)throw new RangeError("Data too long")}for(var m=0,g=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];m<g.length;m++){var y=g[m];f&&a<=8*n.getNumDataCodewords(o,y)&&(t=y)}var E,p=[],b=s(e);try{for(b.s();!(E=b.n()).done;){var w=E.value;r(w.mode.modeBits,4,p),r(w.numChars,w.mode.numCharCountBits(o),p);var C,N=s(w.getData());try{for(N.s();!(C=N.n()).done;){var R=C.value;p.push(R)}}catch(Z){N.e(Z)}finally{N.f()}}}catch(Z){b.e(Z)}finally{b.f()}l(p.length==a);var k=8*n.getNumDataCodewords(o,t);l(p.length<=k),r(0,Math.min(4,k-p.length),p),r(0,(8-p.length%8)%8,p),l(p.length%8==0);for(var M=236;p.length<k;M^=253)r(M,8,p);for(var x=[];8*x.length<p.length;)x.push(0);return p.forEach((function(e,n){return x[n>>>3]|=e<<7-(7&n)})),new n(o,t,x,d)}},{key:"getNumRawDataModules",value:function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return l(208<=t&&t<=29648),t}},{key:"getNumDataCodewords",value:function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var o=1,a=0;a<e;a++){for(var i=0;i<t.length;i++)t[i]=n.reedSolomonMultiply(t[i],o),i+1<t.length&&(t[i]^=t[i+1]);o=n.reedSolomonMultiply(o,2)}return t}},{key:"reedSolomonComputeRemainder",value:function(e,t){var r,o=t.map((function(e){return 0})),a=s(e);try{var i=function(){var e=r.value^o.shift();o.push(0),t.forEach((function(t,r){return o[r]^=n.reedSolomonMultiply(t,e)}))};for(a.s();!(r=a.n()).done;)i()}catch(l){a.e(l)}finally{a.f()}return o}},{key:"reedSolomonMultiply",value:function(e,n){if(e>>>8!=0||n>>>8!=0)throw new RangeError("Byte out of range");for(var t=0,r=7;r>=0;r--)t=t<<1^285*(t>>>7),t^=(n>>>r&1)*e;return l(t>>>8==0),t}}]),n}(),t=n;function r(e,n,t){if(n<0||n>31||e>>>n!=0)throw new RangeError("Value out of range");for(var r=n-1;r>=0;r--)t.push(e>>>r&1)}function i(e,n){return 0!=(e>>>n&1)}function l(e){if(!e)throw new Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;var u=function(){function e(n,t,r){if((0,o.Z)(this,e),this.mode=n,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return(0,a.Z)(e,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(n){var t,o=[],a=s(n);try{for(a.s();!(t=a.n()).done;){r(t.value,8,o)}}catch(i){a.e(i)}finally{a.f()}return new e(e.Mode.BYTE,n.length,o)}},{key:"makeNumeric",value:function(n){if(!e.isNumeric(n))throw new RangeError("String contains non-numeric characters");for(var t=[],o=0;o<n.length;){var a=Math.min(n.length-o,3);r(parseInt(n.substr(o,a),10),3*a+1,t),o+=a}return new e(e.Mode.NUMERIC,n.length,t)}},{key:"makeAlphanumeric",value:function(n){if(!e.isAlphanumeric(n))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t,o=[];for(t=0;t+2<=n.length;t+=2){var a=45*e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t));r(a+=e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t+1)),11,o)}return t<n.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t)),6,o),new e(e.Mode.ALPHANUMERIC,n.length,o)}},{key:"makeSegments",value:function(n){return""==n?[]:e.isNumeric(n)?[e.makeNumeric(n)]:e.isAlphanumeric(n)?[e.makeAlphanumeric(n)]:[e.makeBytes(e.toUtf8ByteArray(n))]}},{key:"makeEci",value:function(n){var t=[];if(n<0)throw new RangeError("ECI assignment value out of range");if(n<128)r(n,8,t);else if(n<16384)r(2,2,t),r(n,14,t);else{if(!(n<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,t),r(n,21,t)}return new e(e.Mode.ECI,0,t)}},{key:"isNumeric",value:function(n){return e.NUMERIC_REGEX.test(n)}},{key:"isAlphanumeric",value:function(n){return e.ALPHANUMERIC_REGEX.test(n)}},{key:"getTotalBits",value:function(e,n){var t,r=0,o=s(e);try{for(o.s();!(t=o.n()).done;){var a=t.value,i=a.mode.numCharCountBits(n);if(a.numChars>=1<<i)return 1/0;r+=4+i+a.bitData.length}}catch(l){o.e(l)}finally{o.f()}return r}},{key:"toUtf8ByteArray",value:function(e){e=encodeURI(e);for(var n=[],t=0;t<e.length;t++)"%"!=e.charAt(t)?n.push(e.charCodeAt(t)):(n.push(parseInt(e.substr(t+1,2),16)),t+=2);return n}}]),e}();u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=u}(l||(l={})),function(e){var n=(0,a.Z)((function e(n,t){(0,o.Z)(this,e),this.ordinal=n,this.formatBits=t})),t=n;t.LOW=new n(0,1),t.MEDIUM=new n(1,0),t.QUARTILE=new n(2,3),t.HIGH=new n(3,2),e.Ecc=t}((u=l||(l={})).QrCode||(u.QrCode={})),function(e){!function(e){var n=function(){function e(n,t){(0,o.Z)(this,e),this.modeBits=n,this.numBitsCharCount=t}return(0,a.Z)(e,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),e}(),t=n;t.NUMERIC=new n(1,[10,12,14]),t.ALPHANUMERIC=new n(2,[9,11,13]),t.BYTE=new n(4,[8,16,16]),t.KANJI=new n(8,[8,10,12]),t.ECI=new n(7,[0,0,0]),e.Mode=t}(e.QrSegment||(e.QrSegment={}))}(l||(l={}));var E=l,p={L:E.QrCode.Ecc.LOW,M:E.QrCode.Ecc.MEDIUM,Q:E.QrCode.Ecc.QUARTILE,H:E.QrCode.Ecc.HIGH},b="#FFFFFF",w="#000000";function C(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=[];return e.forEach((function(e,r){var o=null;e.forEach((function(a,i){if(!a&&null!==o)return t.push("M".concat(o+n," ").concat(r+n,"h").concat(i-o,"v1H").concat(o+n,"z")),void(o=null);if(i!==e.length-1)a&&null===o&&(o=i);else{if(!a)return;null===o?t.push("M".concat(i+n,",").concat(r+n," h1v1H").concat(i+n,"z")):t.push("M".concat(o+n,",").concat(r+n," h").concat(i+1-o,"v1H").concat(o+n,"z"))}}))})),t.join("")}function N(e,n){return e.slice().map((function(e,t){return t<n.y||t>=n.y+n.h?e:e.map((function(e,t){return(t<n.x||t>=n.x+n.w)&&e}))}))}function R(e,n,t,r){if(null==r)return null;var o=t?4:0,a=e.length+2*o,i=Math.floor(.1*n),s=a/n,l=(r.width||i)*s,u=(r.height||i)*s,c=null==r.x?e.length/2-l/2:r.x*s,d=null==r.y?e.length/2-u/2:r.y*s,f=null;if(r.excavate){var h=Math.floor(c),v=Math.floor(d);f={x:h,y:v,w:Math.ceil(l+c-h),h:Math.ceil(u+d-v)}}return{x:c,y:d,h:u,w:l,excavation:f}}var k=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function M(e){var n=e,t=n.value,o=n.size,a=void 0===o?128:o,i=n.level,s=void 0===i?"L":i,l=n.bgColor,u=void 0===l?b:l,d=n.fgColor,f=void 0===d?w:d,h=n.includeMargin,v=void 0!==h&&h,m=n.style,M=n.imageSettings,x=y(n,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),Z=null==M?void 0:M.src,A=(0,c.useRef)(null),O=(0,c.useRef)(null),P=(0,c.useState)(!1),S=(0,r.Z)(P,2),T=(S[0],S[1]);(0,c.useEffect)((function(){if(null!=A.current){var e=A.current,n=e.getContext("2d");if(!n)return;var r=E.QrCode.encodeText(t,p[s]).getModules(),o=v?4:0,i=r.length+2*o,l=R(r,a,v,M),c=O.current,d=null!=l&&null!==c&&c.complete&&0!==c.naturalHeight&&0!==c.naturalWidth;d&&null!=l.excavation&&(r=N(r,l.excavation));var h=window.devicePixelRatio||1;e.height=e.width=a*h;var m=a/i*h;n.scale(m,m),n.fillStyle=u,n.fillRect(0,0,i,i),n.fillStyle=f,k?n.fill(new Path2D(C(r,o))):r.forEach((function(e,t){e.forEach((function(e,r){e&&n.fillRect(r+o,t+o,1,1)}))})),d&&n.drawImage(c,l.x+o,l.y+o,l.w,l.h)}})),(0,c.useEffect)((function(){T(!1)}),[Z]);var F=g({height:a,width:a},m),I=null;return null!=Z&&(I=c.createElement("img",{src:Z,key:Z,style:{display:"none"},onLoad:function(){T(!0)},ref:O})),c.createElement(c.Fragment,null,c.createElement("canvas",g({style:F,height:a,width:a,ref:A},x)),I)}function x(e){var n=e,t=n.value,r=n.size,o=void 0===r?128:r,a=n.level,i=void 0===a?"L":a,s=n.bgColor,l=void 0===s?b:s,u=n.fgColor,d=void 0===u?w:u,f=n.includeMargin,h=void 0!==f&&f,v=n.imageSettings,m=y(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),k=E.QrCode.encodeText(t,p[i]).getModules(),M=h?4:0,x=k.length+2*M,Z=R(k,o,h,v),A=null;null!=v&&null!=Z&&(null!=Z.excavation&&(k=N(k,Z.excavation)),A=c.createElement("image",{xlinkHref:v.src,height:Z.h,width:Z.w,x:Z.x+M,y:Z.y+M,preserveAspectRatio:"none"}));var O=C(k,M);return c.createElement("svg",g({height:o,width:o,viewBox:"0 0 ".concat(x," ").concat(x)},m),c.createElement("path",{fill:l,d:"M0,0 h".concat(x,"v").concat(x,"H0z"),shapeRendering:"crispEdges"}),c.createElement("path",{fill:d,d:O,shapeRendering:"crispEdges"}),A)}var Z=function(e){var n=e,t=n.renderAs,r=y(n,["renderAs"]);return"svg"===t?c.createElement(x,g({},r)):c.createElement(M,g({},r))}},6157:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(1413),o=t(885),a=t(5987),i=t(1694),s=t.n(i),l=t(2791),u=t(184),c=["as","disabled"];function d(e){var n=e.tagName,t=e.disabled,r=e.href,o=e.target,a=e.rel,i=e.role,s=e.onClick,l=e.tabIndex,u=void 0===l?0:l,c=e.type;n||(n=null!=r||null!=o||null!=a?"a":"button");var d={tagName:n};if("button"===n)return[{type:c||"button",disabled:t},d];var f=function(e){(t||"a"===n&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==s||s(e)};return"a"===n&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:u,href:r,target:"a"===n?o:void 0,"aria-disabled":t||void 0,rel:"a"===n?a:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var f=l.forwardRef((function(e,n){var t=e.as,r=e.disabled,a=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,c),i=d(Object.assign({tagName:t,disabled:r},a)),s=(0,o.Z)(i,2),l=s[0],f=s[1].tagName;return(0,u.jsx)(f,Object.assign({},a,l,{ref:n}))}));f.displayName="Button";var h=t(162),v=["as","bsPrefix","variant","size","active","disabled","className"],m=l.forwardRef((function(e,n){var t=e.as,i=e.bsPrefix,l=e.variant,c=void 0===l?"primary":l,f=e.size,m=e.active,g=void 0!==m&&m,y=e.disabled,E=void 0!==y&&y,p=e.className,b=(0,a.Z)(e,v),w=(0,h.vE)(i,"btn"),C=d((0,r.Z)({tagName:t,disabled:E},b)),N=(0,o.Z)(C,2),R=N[0],k=N[1].tagName;return(0,u.jsx)(k,(0,r.Z)((0,r.Z)((0,r.Z)({},R),b),{},{ref:n,disabled:E,className:s()(p,w,g&&"active",c&&"".concat(w,"-").concat(c),f&&"".concat(w,"-").concat(f),b.href&&E&&"disabled")}))}));m.displayName="Button";var g=m},2701:function(e,n,t){t.d(n,{Z:function(){return Ue}});var r,o=t(885),a=t(5987),i=t(1413),s=t(1694),l=t.n(s),u=t(3070),c=t(7357),d=t(8376),f=t(6382);function h(e){if((!r&&0!==r||e)&&c.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var v=t(2791);var m=function(e){var n=(0,v.useRef)(e);return(0,v.useEffect)((function(){n.current=e}),[e]),n};function g(e){var n=m(e);return(0,v.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}var y=t(3201);function E(e){var n=function(e){var n=(0,v.useRef)(e);return n.current=e,n}(e);(0,v.useEffect)((function(){return function(){return n.current()}}),[])}var p=t(3690);function b(e){void 0===e&&(e=(0,d.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}function w(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var C=t(2899),N=t(4164);var R=t(2982),k=t(4942),M=t(5671),x=t(3144),Z=t(5427);var A,O=(A="modal-open","".concat("data-rr-ui-").concat(A)),P=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ownerDocument,r=n.handleContainerOverflow,o=void 0===r||r,a=n.isRTL,i=void 0!==a&&a;(0,M.Z)(this,e),this.handleContainerOverflow=o,this.isRTL=i,this.modals=[],this.ownerDocument=t}return(0,x.Z)(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=(0,k.Z)({overflow:r.style.overflow},t,r.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt((0,Z.Z)(r,t)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(O,""),(0,Z.Z)(r,n)}},{key:"reset",value:function(){var e=this;(0,R.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(O),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),S=P,T=(0,v.createContext)(c.Z?window:void 0);T.Provider;function F(){return(0,v.useContext)(T)}var I=function(e,n){return c.Z?null==e?(n||(0,d.Z)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null};var L="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,D="undefined"!==typeof document||L?v.useLayoutEffect:v.useEffect;var B=function(e){var n=e.children,t=e.in,r=e.onExited,o=e.mountOnEnter,a=e.unmountOnExit,i=(0,v.useRef)(null),s=(0,v.useRef)(t),l=g(r);(0,v.useEffect)((function(){t?s.current=!0:l(i.current)}),[t,l]);var u=(0,y.Z)(i,n.ref),c=(0,v.cloneElement)(n,{ref:u});return t?c:a||!s.current&&o?null:c},j=t(184);function _(e){var n=e.children,t=e.in,r=e.onExited,a=e.onEntered,i=e.transition,s=(0,v.useState)(!t),l=(0,o.Z)(s,2),u=l[0],c=l[1];t&&u&&c(!1);var d=function(e){var n=e.in,t=e.onTransition,r=(0,v.useRef)(null),o=(0,v.useRef)(!0),a=g(t);return D((function(){if(r.current){var e=!1;return a({in:n,element:r.current,initial:o.current,isStale:function(){return e}}),function(){e=!0}}}),[n,a]),D((function(){return o.current=!1,function(){o.current=!0}}),[]),r}({in:!!t,onTransition:function(e){Promise.resolve(i(e)).then((function(){e.isStale()||(e.in?null==a||a(e.element,e.initial):(c(!0),null==r||r(e.element)))}),(function(n){throw e.in||c(!0),n}))}}),f=(0,y.Z)(d,n.ref);return u&&!t?null:(0,v.cloneElement)(n,{ref:f})}function z(e,n,t){return e?(0,j.jsx)(e,Object.assign({},t)):n?(0,j.jsx)(_,Object.assign({},t,{transition:n})):(0,j.jsx)(B,Object.assign({},t))}var H,U=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function W(e){var n=F(),t=e||function(e){return H||(H=new S({ownerDocument:null==e?void 0:e.document})),H}(n),r=(0,v.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,v.useCallback)((function(e){r.current.dialog=e}),[]),setBackdropRef:(0,v.useCallback)((function(e){r.current.backdrop=e}),[])})}var V=(0,v.forwardRef)((function(e,n){var t=e.show,r=void 0!==t&&t,a=e.role,i=void 0===a?"dialog":a,s=e.className,l=e.style,u=e.children,d=e.backdrop,f=void 0===d||d,h=e.keyboard,m=void 0===h||h,y=e.onBackdropClick,p=e.onEscapeKeyDown,R=e.transition,k=e.runTransition,M=e.backdropTransition,x=e.runBackdropTransition,Z=e.autoFocus,A=void 0===Z||Z,O=e.enforceFocus,P=void 0===O||O,S=e.restoreFocus,T=void 0===S||S,L=e.restoreFocusOptions,D=e.renderDialog,B=e.renderBackdrop,_=void 0===B?function(e){return(0,j.jsx)("div",Object.assign({},e))}:B,H=e.manager,V=e.container,Q=e.onShow,K=e.onHide,Y=void 0===K?function(){}:K,X=e.onExit,G=e.onExited,$=e.onExiting,J=e.onEnter,q=e.onEntering,ee=e.onEntered,ne=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,U),te=F(),re=function(e,n){var t=F(),r=(0,v.useState)((function(){return I(e,null==t?void 0:t.document)})),a=(0,o.Z)(r,2),i=a[0],s=a[1];if(!i){var l=I(e);l&&s(l)}return(0,v.useEffect)((function(){n&&i&&n(i)}),[n,i]),(0,v.useEffect)((function(){var n=I(e);n!==i&&s(n)}),[e,i]),i}(V),oe=W(H),ae=function(){var e=(0,v.useRef)(!0),n=(0,v.useRef)((function(){return e.current}));return(0,v.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),n.current}(),ie=function(e){var n=(0,v.useRef)(null);return(0,v.useEffect)((function(){n.current=e})),n.current}(r),se=(0,v.useState)(!r),le=(0,o.Z)(se,2),ue=le[0],ce=le[1],de=(0,v.useRef)(null);(0,v.useImperativeHandle)(n,(function(){return oe}),[oe]),c.Z&&!ie&&r&&(de.current=b(null==te?void 0:te.document)),r&&ue&&ce(!1);var fe=g((function(){if(oe.add(),Ee.current=(0,C.Z)(document,"keydown",ge),ye.current=(0,C.Z)(document,"focus",(function(){return setTimeout(ve)}),!0),Q&&Q(),A){var e,n,t=b(null!=(e=null==(n=oe.dialog)?void 0:n.ownerDocument)?e:null==te?void 0:te.document);oe.dialog&&t&&!w(oe.dialog,t)&&(de.current=t,oe.dialog.focus())}})),he=g((function(){var e;(oe.remove(),null==Ee.current||Ee.current(),null==ye.current||ye.current(),T)&&(null==(e=de.current)||null==e.focus||e.focus(L),de.current=null)}));(0,v.useEffect)((function(){r&&re&&fe()}),[r,re,fe]),(0,v.useEffect)((function(){ue&&he()}),[ue,he]),E((function(){he()}));var ve=g((function(){if(P&&ae()&&oe.isTopModal()){var e=b(null==te?void 0:te.document);oe.dialog&&e&&!w(oe.dialog,e)&&oe.dialog.focus()}})),me=g((function(e){e.target===e.currentTarget&&(null==y||y(e),!0===f&&Y())})),ge=g((function(e){m&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&oe.isTopModal()&&(null==p||p(e),e.defaultPrevented||Y())})),ye=(0,v.useRef)(),Ee=(0,v.useRef)();if(!re)return null;var pe=Object.assign({role:i,ref:oe.setDialogRef,"aria-modal":"dialog"===i||void 0},ne,{style:l,className:s,tabIndex:-1}),be=D?D(pe):(0,j.jsx)("div",Object.assign({},pe,{children:v.cloneElement(u,{role:"document"})}));be=z(R,k,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:X,onExiting:$,onExited:function(){ce(!0),null==G||G.apply(void 0,arguments)},onEnter:J,onEntering:q,onEntered:ee,children:be});var we=null;return f&&(we=_({ref:oe.setBackdropRef,onClick:me}),we=z(M,x,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:we})),(0,j.jsx)(j.Fragment,{children:N.createPortal((0,j.jsxs)(j.Fragment,{children:[we,be]}),re)})}));V.displayName="Modal";var Q=Object.assign(V,{Manager:S}),K=t(1120);function Y(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,K.Z)(e)););return e}function X(){return X="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=Y(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},X.apply(this,arguments)}var G=t(136),$=t(516);var J=Function.prototype.bind.call(Function.prototype.call,[].slice);function q(e,n){return J(e.querySelectorAll(n))}function ee(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var ne,te=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",re=".sticky-top",oe=".navbar-toggler",ae=function(e){(0,G.Z)(t,e);var n=(0,$.Z)(t);function t(){return(0,M.Z)(this,t),n.apply(this,arguments)}return(0,x.Z)(t,[{key:"adjustAndStore",value:function(e,n,t){var r=n.style[e];n.dataset[e]=r,(0,Z.Z)(n,(0,k.Z)({},e,"".concat(parseFloat((0,Z.Z)(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],(0,Z.Z)(n,(0,k.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;X((0,K.Z)(t.prototype),"setContainerStyle",this).call(this,e);var r,o,a=this.getElement();if(o="modal-open",(r=a).classList?r.classList.add(o):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(r,o)||("string"===typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),e.scrollBarWidth){var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";q(a,te).forEach((function(t){return n.adjustAndStore(i,t,e.scrollBarWidth)})),q(a,re).forEach((function(t){return n.adjustAndStore(s,t,-e.scrollBarWidth)})),q(a,oe).forEach((function(t){return n.adjustAndStore(s,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;X((0,K.Z)(t.prototype),"removeContainerStyle",this).call(this,e);var r,o,a=this.getElement();o="modal-open",(r=a).classList?r.classList.remove(o):"string"===typeof r.className?r.className=ee(r.className,o):r.setAttribute("class",ee(r.className&&r.className.baseVal||"",o));var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";q(a,te).forEach((function(e){return n.restore(i,e)})),q(a,re).forEach((function(e){return n.restore(s,e)})),q(a,oe).forEach((function(e){return n.restore(s,e)}))}}]),t}(S);var ie,se=t(5090),le=t(1380),ue=t(7202),ce=t(4083),de=["className","children","transitionClasses","onEnter"],fe=(ie={},(0,k.Z)(ie,se.d0,"show"),(0,k.Z)(ie,se.cn,"show"),ie),he=v.forwardRef((function(e,n){var t=e.className,r=e.children,o=e.transitionClasses,s=void 0===o?{}:o,u=e.onEnter,c=(0,a.Z)(e,de),d=(0,i.Z)({in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},c),f=(0,v.useCallback)((function(e,n){(0,ue.Z)(e),null==u||u(e,n)}),[u]);return(0,j.jsx)(ce.Z,(0,i.Z)((0,i.Z)({ref:n,addEndListener:le.Z},d),{},{onEnter:f,childRef:r.ref,children:function(e,n){return v.cloneElement(r,(0,i.Z)((0,i.Z)({},n),{},{className:l()("fade",t,r.props.className,fe[e],s[e])}))}}))}));he.displayName="Fade";var ve=he,me=/-(.)/g;var ge=t(162),ye=["className","bsPrefix","as"],Ee=function(e){return e[0].toUpperCase()+(n=e,n.replace(me,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function pe(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,r=void 0===t?Ee(e):t,o=n.Component,s=n.defaultProps,u=v.forwardRef((function(n,t){var r=n.className,u=n.bsPrefix,c=n.as,d=void 0===c?o||"div":c,f=(0,a.Z)(n,ye),h=(0,i.Z)((0,i.Z)({},s),f),v=(0,ge.vE)(u,e);return(0,j.jsx)(d,(0,i.Z)({ref:t,className:l()(r,v)},h))}));return u.displayName=r,u}var be=pe("modal-body"),we=v.createContext({onHide:function(){}}),Ce=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],Ne=v.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=e.contentClassName,s=e.centered,u=e.size,c=e.fullscreen,d=e.children,f=e.scrollable,h=(0,a.Z)(e,Ce);t=(0,ge.vE)(t,"modal");var v="".concat(t,"-dialog"),m="string"===typeof c?"".concat(t,"-fullscreen-").concat(c):"".concat(t,"-fullscreen");return(0,j.jsx)("div",(0,i.Z)((0,i.Z)({},h),{},{ref:n,className:l()(v,r,u&&"".concat(t,"-").concat(u),s&&"".concat(v,"-centered"),f&&"".concat(v,"-scrollable"),c&&m),children:(0,j.jsx)("div",{className:l()("".concat(t,"-content"),o),children:d})}))}));Ne.displayName="ModalDialog";var Re=Ne,ke=pe("modal-footer"),Me=t(2007),xe=t.n(Me),Ze=["className","variant","aria-label"],Ae={"aria-label":xe().string,onClick:xe().func,variant:xe().oneOf(["white"])},Oe=v.forwardRef((function(e,n){var t=e.className,r=e.variant,o=e["aria-label"],s=void 0===o?"Close":o,u=(0,a.Z)(e,Ze);return(0,j.jsx)("button",(0,i.Z)({ref:n,type:"button",className:l()("btn-close",r&&"btn-close-".concat(r),t),"aria-label":s},u))}));Oe.displayName="CloseButton",Oe.propTypes=Ae;var Pe=Oe,Se=["closeLabel","closeVariant","closeButton","onHide","children"],Te=v.forwardRef((function(e,n){var t=e.closeLabel,r=void 0===t?"Close":t,o=e.closeVariant,s=e.closeButton,l=void 0!==s&&s,u=e.onHide,c=e.children,d=(0,a.Z)(e,Se),f=(0,v.useContext)(we),h=g((function(){null==f||f.onHide(),null==u||u()}));return(0,j.jsxs)("div",(0,i.Z)((0,i.Z)({ref:n},d),{},{children:[c,l&&(0,j.jsx)(Pe,{"aria-label":r,variant:o,onClick:h})]}))})),Fe=["bsPrefix","className","closeLabel","closeButton"],Ie=v.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,o=e.closeLabel,s=void 0===o?"Close":o,u=e.closeButton,c=void 0!==u&&u,d=(0,a.Z)(e,Fe);return t=(0,ge.vE)(t,"modal-header"),(0,j.jsx)(Te,(0,i.Z)((0,i.Z)({ref:n},d),{},{className:l()(r,t),closeLabel:s,closeButton:c}))}));Ie.displayName="ModalHeader";var Le,De=Ie,Be=pe("modal-title",{Component:(Le="h4",v.forwardRef((function(e,n){return(0,j.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{ref:n,className:l()(e.className,Le)}))})))}),je=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function _e(e){return(0,j.jsx)(ve,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function ze(e){return(0,j.jsx)(ve,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var He=v.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,s=e.style,m=e.dialogClassName,b=e.contentClassName,w=e.children,C=e.dialogAs,N=void 0===C?Re:C,R=e["aria-labelledby"],k=e["aria-describedby"],M=e["aria-label"],x=e.show,Z=void 0!==x&&x,A=e.animation,O=void 0===A||A,P=e.backdrop,S=void 0===P||P,T=e.keyboard,F=void 0===T||T,I=e.onEscapeKeyDown,L=e.onShow,D=e.onHide,B=e.container,_=e.autoFocus,z=void 0===_||_,H=e.enforceFocus,U=void 0===H||H,W=e.restoreFocus,V=void 0===W||W,K=e.restoreFocusOptions,Y=e.onEntered,X=e.onExit,G=e.onExiting,$=e.onEnter,J=e.onEntering,q=e.onExited,ee=e.backdropClassName,te=e.manager,re=(0,a.Z)(e,je),oe=(0,v.useState)({}),ie=(0,o.Z)(oe,2),se=ie[0],le=ie[1],ue=(0,v.useState)(!1),ce=(0,o.Z)(ue,2),de=ce[0],fe=ce[1],he=(0,v.useRef)(!1),ve=(0,v.useRef)(!1),me=(0,v.useRef)(null),ye=(0,v.useState)(null),Ee=(0,o.Z)(ye,2),pe=Ee[0],be=Ee[1],Ce=(0,y.Z)(n,be),Ne=g(D),ke=(0,ge.SC)();t=(0,ge.vE)(t,"modal");var Me=(0,v.useMemo)((function(){return{onHide:Ne}}),[Ne]);function xe(){return te||(e={isRTL:ke},ne||(ne=new ae(e)),ne);var e}function Ze(e){if(c.Z){var n=xe().getScrollbarWidth()>0,t=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;le({paddingRight:n&&!t?h():void 0,paddingLeft:!n&&t?h():void 0})}}var Ae=g((function(){pe&&Ze(pe.dialog)}));E((function(){(0,f.Z)(window,"resize",Ae),null==me.current||me.current()}));var Oe=function(){he.current=!0},Pe=function(e){he.current&&pe&&e.target===pe.dialog&&(ve.current=!0),he.current=!1},Se=function(){fe(!0),me.current=(0,p.Z)(pe.dialog,(function(){fe(!1)}))},Te=function(e){"static"!==S?ve.current||e.target!==e.currentTarget?ve.current=!1:null==D||D():function(e){e.target===e.currentTarget&&Se()}(e)},Fe=(0,v.useCallback)((function(e){return(0,j.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:l()("".concat(t,"-backdrop"),ee,!O&&"show")}))}),[O,ee,t]),Ie=(0,i.Z)((0,i.Z)({},s),se);Ie.display="block";return(0,j.jsx)(we.Provider,{value:Me,children:(0,j.jsx)(Q,{show:Z,ref:Ce,backdrop:S,container:B,keyboard:!0,autoFocus:z,enforceFocus:U,restoreFocus:V,restoreFocusOptions:K,onEscapeKeyDown:function(e){F?null==I||I(e):(e.preventDefault(),"static"===S&&Se())},onShow:L,onHide:D,onEnter:function(e,n){e&&Ze(e),null==$||$(e,n)},onEntering:function(e,n){null==J||J(e,n),(0,u.ZP)(window,"resize",Ae)},onEntered:Y,onExit:function(e){null==me.current||me.current(),null==X||X(e)},onExiting:G,onExited:function(e){e&&(e.style.display=""),null==q||q(e),(0,f.Z)(window,"resize",Ae)},manager:xe(),transition:O?_e:void 0,backdropTransition:O?ze:void 0,renderBackdrop:Fe,renderDialog:function(e){return(0,j.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Ie,className:l()(r,t,de&&"".concat(t,"-static"),!O&&"show"),onClick:S?Te:void 0,onMouseUp:Pe,"aria-label":M,"aria-labelledby":R,"aria-describedby":k,children:(0,j.jsx)(N,(0,i.Z)((0,i.Z)({},re),{},{onMouseDown:Oe,className:m,contentClassName:b,children:w}))}))}})})}));He.displayName="Modal";var Ue=Object.assign(He,{Body:be,Header:De,Title:Be,Footer:ke,Dialog:Re,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=148.2960996a.chunk.js.map