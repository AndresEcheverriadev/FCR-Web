"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[220],{3220:function(e,s,a){a.r(s);var t=a(4165),c=a(5861),n=a(885),r=a(2791),o=a(1087),i=a(184);s.default=function(){var e=(0,r.useState)([]),s=(0,n.Z)(e,2),a=s[0],l=s[1];(0,r.useEffect)((function(){function e(){return e=(0,c.Z)((0,t.Z)().mark((function e(){var s,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.cristoreyangol.cl:8080/record"),{method:"GET",headers:{accept:"application/json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,l(a.data);case 7:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.length]);var d=(0,i.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})});return(0,i.jsx)(i.Fragment,{children:a.map((function(e){return(0,i.jsxs)("div",{className:"decesoCard",children:[(0,i.jsxs)(o.OL,{to:"/obituario/".concat(e.nombre.toString().replaceAll(" ","").toLowerCase(),"/").concat(e.paterno.toString().replaceAll(" ","").toLowerCase(),"/").concat(e._id),className:"decesoPersona",children:[(0,i.jsx)("div",{className:"decesoImagen",children:(0,i.jsx)("img",{src:e.img,alt:""})}),(0,i.jsxs)("h5",{className:"decesoNombre",children:[e.nombre," ",e.paterno]})]}),(0,i.jsxs)("div",{className:"decesoDate",children:[d,(0,i.jsx)("p",{className:"decesoFecha",children:e.date})]})]},e._id)}))})}}}]);
//# sourceMappingURL=220.f8d02f22.chunk.js.map