"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[150],{8150:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});var t=n(1413),r=n(4165),o=n(5861),s=n(885),i=n(2791),l=n(1087),c=n(5579),d=n(1699),u=n(6907),m=n(184);var p=function(){var e=(0,i.useContext)(c.O).logOut,a=(0,i.useState)([]),n=(0,s.Z)(a,2),p=n[0],h=n[1],g=(0,i.useState)(""),b=(0,s.Z)(g,2),x=(b[0],b[1]),f=(0,i.useState)({data:""}),j=(0,s.Z)(f,2),v=j[0],C=j[1],N=(0,i.useState)({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",mesaggesWall:[],lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),y=(0,s.Z)(N,2),w=y[0],Z=y[1],D=(0,i.useState)({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),A=(0,s.Z)(D,2),O=A[0],R=A[1],F=(0,i.useState)({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),S=(0,s.Z)(F,2),P=S[0],k=S[1];function V(e){return Z((function(a){return(0,t.Z)((0,t.Z)({},a),e)}))}function z(){return(z=(0,o.Z)((0,r.Z)().mark((function e(a){var n,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=sessionStorage.getItem("token"),o=(0,t.Z)({},w),e.next=5,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord/add"),{method:"POST",headers:{authorization:"".concat(n),"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){window.alert("".concat(e.response.status," ").concat(e.response.statusText))}));case 5:Z({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,o.Z)((0,r.Z)().mark((function e(a,n){var t,o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=sessionStorage.getItem("token"),(o=new FormData).append("imgDeceso",v.data),e.next=6,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord/addImage","/").concat(a),{method:"POST",headers:{authorization:"".concat(t)},body:o}).catch((function(e){window.alert(e)}));case 6:(s=e.sent)&&(x(s.statusText),C({data:""}),window.location.reload(!1));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){function e(){return e=(0,o.Z)((0,r.Z)().mark((function e(){var a,n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.cristoreyangol.cl:8080/record"));case 2:if((a=e.sent).ok){e.next=7;break}return n="An error occurred: ".concat(a.statusText),window.alert(n),e.abrupt("return");case 7:return e.next=9,a.json();case 9:t=e.sent,h(t.data);case 11:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p.length]);var M=function(e){var a={data:e.target.files[0]};C(a)};function T(){return(T=(0,o.Z)((0,r.Z)().mark((function e(a){var n,t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=sessionStorage.getItem("token"),t=O.id,o={id:O.id,date:O.date,nombre:O.nombre,segundoNombre:O.segundoNombre,paterno:O.paterno,materno:O.materno},e.next=6,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord/updatePersonales","/").concat(t),{method:"POST",headers:{authorization:"".concat(n),"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){window.alert(e)}));case 6:window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=(0,o.Z)((0,r.Z)().mark((function e(a){var n,t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=sessionStorage.getItem("token"),t=P.id,o={lugarVelatorio:P.lugarVelatorio,lugarResponso:P.lugarResponso,fechaResponso:P.fechaResponso,lugarCementerio:P.lugarCementerio},e.next=6,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord/updateFuneral","/").concat(t),{method:"POST",headers:{authorization:"".concat(n),"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){window.alert(e)}));case 6:window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=(0,o.Z)((0,r.Z)().mark((function e(a){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.getItem("token"),e.next=3,fetch("".concat("https://www.cristoreyangol.cl:8080/createRecord","/").concat(a),{method:"DELETE",headers:{authorization:"".concat(n),"Content-Type":"application/json"}}).catch((function(e){window.alert(e)}));case 3:window.location.reload(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=(0,m.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(u.B6,{children:[(0,m.jsx)(u.ql,{children:(0,m.jsx)("meta",{name:"robots",content:"noindex, nofollow"})}),(0,m.jsx)("title",{children:"Servicios Funerarios Cristo Rey Angol"})]}),(0,m.jsxs)("div",{className:"mnanagerPageMainWrapper",children:[(0,m.jsx)("header",{className:"managerHeaderContainer",children:(0,m.jsx)(d.Z,{})}),(0,m.jsx)("div",{className:"modal fade",id:"modalAgregarObituario",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,m.jsx)("div",{className:"modal-dialog",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h1",{className:"modal-title fs-5",id:"exampleModalLabel",children:"Agregar al obituario"}),(0,m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsxs)("form",{onSubmit:function(e){return z.apply(this,arguments)},id:"formAdd",className:"formContainer",children:[(0,m.jsx)("h5",{children:"Datos del fallecido"}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"date",children:"Fecha del fallecimiento:"}),(0,m.jsx)("input",{type:"date",name:"date",id:"date",value:w.date,onChange:function(e){return V({date:e.target.value})}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"nombreDeceso",children:"Nombre del fallecido:"}),(0,m.jsx)("input",{type:"text",name:"nombreDeceso",id:"nombreDeceso",value:w.nombre,onChange:function(e){return V({nombre:e.target.value})}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"segundoNombreDeceso",children:"Segundo Nombre del fallecido:"}),(0,m.jsx)("input",{type:"text",name:"segundoNombreDeceso",id:"segundoNombreDeceso",value:w.segundoNombre,onChange:function(e){return V({segundoNombre:e.target.value})}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"paternoDeceso",children:"Apellido paterno:"}),(0,m.jsx)("input",{type:"text",name:"paternoDeceso",id:"paternoDeceso",value:w.paterno,onChange:function(e){return V({paterno:e.target.value})}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"maternoDeceso",children:"Apellido materno:"}),(0,m.jsx)("input",{type:"text",name:"maternoDeceso",id:"maternoDeceso",value:w.materno,onChange:function(e){return V({materno:e.target.value})}})]}),(0,m.jsx)("h5",{children:"Datos del funeral"}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"lugarVelatorio",children:"lugar velatorio:"}),(0,m.jsx)("input",{type:"text",name:"lugarVelatorio",id:"lugarVelatorio",value:w.lugarVelatorio,onChange:function(e){return V({lugarVelatorio:e.target.value})}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"lugarResponso",children:"lugar responso:"}),(0,m.jsx)("input",{type:"text",name:"lugarResponso",id:"lugarResponso",value:w.lugarResponso,onChange:function(e){return V({lugarResponso:e.target.value})}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"fechaResponso",children:"fecha responso:"}),(0,m.jsx)("input",{type:"date",name:"fechaResponso",id:"fechaResponso",value:w.fechaResponso,onChange:function(e){return V({fechaResponso:e.target.value})}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"lugarCementerio",children:"lugar cementerio:"}),(0,m.jsx)("input",{list:"cementerios",type:"text",name:"lugarCementerio",id:"lugarCementerio",value:w.lugarCementerio,onChange:function(e){return V({lugarCementerio:e.target.value})}}),(0,m.jsxs)("datalist",{id:"cementerios",children:[(0,m.jsx)("option",{value:"Cementerio Parque Angol",children:"Cementerio Parque Angol"}),(0,m.jsx)("option",{value:"Cementerio Parroquial Angol",children:"Cementerio Parroquial Angol"}),(0,m.jsx)("option",{value:"Cementerio municipal Angol",children:"Cementerio Municipal Angol"})]})]})]})}),(0,m.jsxs)("div",{class:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cerrar"}),(0,m.jsx)("button",{type:"submit",form:"formAdd",className:"btn btn-primary btnAgregar",children:"Agregar"})]})]})})}),(0,m.jsx)("div",{className:"modal fade",id:"modalActualizarDatos",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,m.jsx)("div",{className:"modal-dialog",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h1",{className:"modal-title fs-5",id:"exampleModalLabel",children:"Editar datos personales"}),(0,m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsxs)("form",{onSubmit:function(e){return function(e){return T.apply(this,arguments)}(e)},className:"formContainer",id:"formActualizarPersonales",children:[(0,m.jsx)("hr",{}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"date",children:"Fecha del fallecimiento:"}),(0,m.jsx)("input",{type:"date",name:"date",value:O.date,onChange:function(e){return R((0,t.Z)((0,t.Z)({},O),{},{date:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"nombreDeceso",children:"Nombre del fallecido:"}),(0,m.jsx)("input",{type:"text",name:"nombreDeceso",value:O.nombre,onChange:function(e){return R((0,t.Z)((0,t.Z)({},O),{},{nombre:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"segundoNombreDeceso",children:"Segundo Nombre del fallecido:"}),(0,m.jsx)("input",{type:"text",name:"segundoNombreDeceso",value:O.segundoNombre,onChange:function(e){return R((0,t.Z)((0,t.Z)({},O),{},{segundoNombre:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"paternoDeceso",children:"Apellido paterno:"}),(0,m.jsx)("input",{type:"text",name:"paternoDeceso",value:O.paterno,onChange:function(e){return R((0,t.Z)((0,t.Z)({},O),{},{paterno:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"maternoDeceso",children:"Apellido materno:"}),(0,m.jsx)("input",{type:"text",name:"maternoDeceso",value:O.materno,onChange:function(e){return R((0,t.Z)((0,t.Z)({},O),{},{materno:e.target.value}))}})]})]})}),(0,m.jsxs)("div",{className:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cerrar"}),(0,m.jsx)("button",{type:"submit",form:"formActualizarPersonales",className:"btn btn-primary btnAgregar",children:"Actualizar"})]})]})})}),(0,m.jsx)("div",{className:"modal fade",id:"modalActualizarFuneral",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,m.jsx)("div",{className:"modal-dialog",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h1",{className:"modal-title fs-5",id:"exampleModalLabel",children:"Editor datos de funeral"}),(0,m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsxs)("form",{onSubmit:function(e){return function(e){return _.apply(this,arguments)}(e)},className:"formContainer",id:"formActualizarFuneral",children:[(0,m.jsx)("hr",{}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"lugarVelatorio",children:"lugar velatorio:"}),(0,m.jsx)("input",{type:"text",name:"lugarVelatorio",value:P.lugarVelatorio,onChange:function(e){return k((0,t.Z)((0,t.Z)({},P),{},{lugarVelatorio:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"lugarResponso",children:"lugar responso:"}),(0,m.jsx)("input",{type:"text",name:"lugarResponso",value:P.lugarResponso,onChange:function(e){return k((0,t.Z)((0,t.Z)({},P),{},{lugarResponso:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"fechaResponso",children:"fecha responso:"}),(0,m.jsx)("input",{type:"date",name:"fechaResponso",value:P.fechaResponso,onChange:function(e){return k((0,t.Z)((0,t.Z)({},P),{},{fechaResponso:e.target.value}))}})]}),(0,m.jsxs)("div",{className:"inputContainer",children:[(0,m.jsx)("label",{htmlFor:"lugarCementerio",children:"lugar cementerio:"}),(0,m.jsx)("input",{list:"cementerios",type:"text",name:"otrolugarCementerio",value:P.lugarCementerio,onChange:function(e){return k((0,t.Z)((0,t.Z)({},P),{},{lugarCementerio:e.target.value}))}}),(0,m.jsxs)("datalist",{id:"cementerios",children:[(0,m.jsx)("option",{value:"Cementerio Parque Angol",children:"Cementerio Parque Angol"}),(0,m.jsx)("option",{value:"Cementerio Parroquial Angol",children:"Cementerio Parroquial Angol"}),(0,m.jsx)("option",{value:"Cementerio municipal Angol",children:"Cementerio Municipal Angol"})]})]})]})}),(0,m.jsxs)("div",{className:"modal-footer",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cerrar"}),(0,m.jsx)("button",{type:"submit",form:"formActualizarFuneral",className:"btn btn-primary btnAgregar",children:"Actualizar"})]})]})})}),(0,m.jsxs)("main",{className:"managerPageMainContainer",children:[(0,m.jsx)("h1",{children:"Manager de Obituario"}),(0,m.jsx)("button",{type:"submit",className:"btnLogoutObituario",onClick:function(){return e()},children:"Salir"}),(0,m.jsx)("div",{className:"addObituarioContainer",children:(0,m.jsxs)("button",{className:"btnAddObituario","data-bs-toggle":"modal","data-bs-target":"#modalAgregarObituario",children:["Agregar al obituario",I]})}),(0,m.jsx)("div",{className:"managerCardsContainer",children:p.map((function(e){return(0,m.jsxs)("div",{className:"managerDecesoCard",children:[(0,m.jsxs)(l.OL,{to:"/obituario/".concat(e._id),className:"managerDecesoPersona",children:[(0,m.jsx)("div",{className:"managerDecesoImagen",children:(0,m.jsx)("img",{src:e.img,alt:""})}),(0,m.jsxs)("h5",{className:"managerDecesoNombre",children:[e.nombre," ",e.paterno]}),(0,m.jsx)("p",{className:"managerDecesoFecha",children:e.date})]}),(0,m.jsxs)("div",{className:"controlsWrapper",children:[(0,m.jsxs)("div",{className:"managerDecesoControls",children:[(0,m.jsx)("button",{className:"btnCtrlObituario","data-bs-toggle":"modal","data-bs-target":"#modalActualizarDatos",onClick:function(a){return function(e,a,n,t,r,o,s){e.preventDefault(),R({id:a,date:n,nombre:t,segundoNombre:r,paterno:o,materno:s})}(a,e._id,e.date,e.nombre,e.segundoNombre,e.paterno,e.materno)},children:"Editar datos personales"}),(0,m.jsx)("button",{className:"btnCtrlObituario","data-bs-toggle":"modal","data-bs-target":"#modalActualizarFuneral",onClick:function(a){return function(e,a,n,t,r,o){e.preventDefault(),k({id:a,lugarVelatorio:n,lugarResponso:t,fechaResponso:r,lugarCementerio:o})}(a,e._id,e.lugarVelatorio,e.lugarResponso,e.fechaResponso,e.lugarCementerio)},children:"Editar datos funeral"})]}),(0,m.jsxs)("form",{className:"formImg",id:"formImg",onSubmit:function(a){return function(e,a){return E.apply(this,arguments)}(e._id,a)},enctype:"multipart/form-data",children:[(0,m.jsx)("input",{type:"file",name:"imgDeceso",id:"imgDeceso",accept:"image/*",filename:v.data,onChange:M}),(0,m.jsx)("button",{type:"submit",class:"btnCtrlObituario",children:"Agregar imagen"})]}),(0,m.jsx)("div",{class:"accordion",id:"accordionExample",children:(0,m.jsxs)("div",{class:"accordion-item",children:[(0,m.jsx)("h2",{class:"accordion-header",id:"headingOne",children:(0,m.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse".concat(e._id),"aria-expanded":"true","aria-controls":"collapseOne",children:"Eliminar"})}),(0,m.jsx)("div",{id:"collapse".concat(e._id),class:"accordion-collapse collapse ","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:(0,m.jsx)("div",{class:"accordion-body",children:(0,m.jsx)("button",{id:"btnDelete".concat(e._id),className:"btnDeleteObituario",onClick:function(){return function(e){return q.apply(this,arguments)}(e._id)},children:"Eliminar del obituario"})})})]})})]})]},e._id)}))})]})]})]})}},4942:function(e,a,n){function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}n.d(a,{Z:function(){return t}})},1413:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(4942);function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){(0,t.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}}}]);
//# sourceMappingURL=150.43369273.chunk.js.map