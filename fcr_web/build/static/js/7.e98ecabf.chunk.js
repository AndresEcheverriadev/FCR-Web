(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(1),l=t(5),c=t(12),s=t(8),i=t(71),m=t(62),u=t(60),d=t(46);var g=function(e){const[a,t]=Object(n.useState)({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""});function o(e){return t(a=>({...a,...e}))}return r.a.createElement(u.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(u.a.Header,{closeButton:!0},r.a.createElement(u.a.Title,{id:"contained-modal-title-vcenter"},"Agregar al obituario")),r.a.createElement(u.a.Body,null,r.a.createElement("form",{onSubmit:async function(e){e.preventDefault();const n={...a};await d.a.addObituario(n.date,n.nombre,n.segundoNombre,n.paterno,n.materno,n.lugarVelatorio,n.lugarResponso,n.fechaResponso,n.lugarCementerio),t({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),window.location.reload(!1)},id:"formAdd",className:"formContainer"},r.a.createElement("h5",null,"Datos del fallecido"),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"date"},"Fecha del fallecimiento:"),r.a.createElement("input",{type:"date",id:"date",value:a.date,onChange:e=>o({date:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"nombreDeceso"},"Nombre del fallecido:"),r.a.createElement("input",{type:"text",id:"nombreDeceso",value:a.nombre,onChange:e=>o({nombre:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"segundoNombreDeceso"},"Segundo Nombre del fallecido:"),r.a.createElement("input",{type:"text",id:"segundoNombreDeceso",value:a.segundoNombre,onChange:e=>o({segundoNombre:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"paternoDeceso"},"Apellido paterno:"),r.a.createElement("input",{type:"text",id:"paternoDeceso",value:a.paterno,onChange:e=>o({paterno:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"maternoDeceso"},"Apellido materno:"),r.a.createElement("input",{type:"text",id:"maternoDeceso",value:a.materno,onChange:e=>o({materno:e.target.value})})),r.a.createElement("h5",null,"Datos del funeral"),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"lugarVelatorio"},"lugar velatorio:"),r.a.createElement("input",{type:"text",id:"lugarVelatorio",value:a.lugarVelatorio,onChange:e=>o({lugarVelatorio:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"lugarResponso"},"lugar responso:"),r.a.createElement("input",{type:"text",id:"lugarResponso",value:a.lugarResponso,onChange:e=>o({lugarResponso:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"fechaResponso"},"fecha responso:"),r.a.createElement("input",{type:"date",id:"fechaResponso",value:a.fechaResponso,onChange:e=>o({fechaResponso:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"lugarCementerio"},"lugar cementerio:"),r.a.createElement("input",{list:"cementerios",type:"text",id:"lugarCementerio",value:a.lugarCementerio,onChange:e=>o({lugarCementerio:e.target.value})}),r.a.createElement("datalist",{id:"cementerios"},r.a.createElement("option",{value:"Cementerio Parque Angol"},"Cementerio Parque Angol"),r.a.createElement("option",{value:"Cementerio Parroquial Angol"},"Cementerio Parroquial Angol"),r.a.createElement("option",{value:"Cementerio municipal Angol"},"Cementerio Municipal Angol"))))),r.a.createElement(u.a.Footer,null,r.a.createElement(m.a,{onClick:e.onHide},"Cerrar"),r.a.createElement(m.a,{type:"submit",form:"formAdd",className:"btn btn-primary btnAgregar"},"Agregar")))};var p=function(e){Object(n.useEffect)(()=>{t(e.data)},[e.data]);const[a,t]=Object(n.useState)({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),o=()=>{t({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),e.onHide()};return r.a.createElement(u.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",keyboard:!1}),r.a.createElement(u.a.Header,{closeButton:!0,onClick:()=>o()},r.a.createElement(u.a.Title,{id:"contained-modal-title-vcenter"},"Editar datos personales")),r.a.createElement(u.a.Body,null,r.a.createElement("form",{onSubmit:e=>(async function(e){e.preventDefault();const t=a.id,n={date:a.date,nombre:a.nombre,segundoNombre:a.segundoNombre,paterno:a.paterno,materno:a.materno};await d.a.updateData(t,n),window.location.reload(!1)})(e),className:"formContainer",id:"formActualizarPersonales"},r.a.createElement("hr",null),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"date"},"Fecha del fallecimiento:"),r.a.createElement("input",{type:"date",name:"date",value:a.date,onChange:e=>t({...a,date:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"nombreDeceso"},"Nombre del fallecido:"),r.a.createElement("input",{type:"text",name:"nombreDeceso",value:a.nombre,onChange:e=>t({...a,nombre:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"segundoNombreDeceso"},"Segundo Nombre del fallecido:"),r.a.createElement("input",{type:"text",name:"segundoNombreDeceso",value:a.segundoNombre,onChange:e=>t({...a,segundoNombre:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"paternoDeceso"},"Apellido paterno:"),r.a.createElement("input",{type:"text",name:"paternoDeceso",value:a.paterno,onChange:e=>t({...a,paterno:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"maternoDeceso"},"Apellido materno:"),r.a.createElement("input",{type:"text",name:"maternoDeceso",value:a.materno,onChange:e=>t({...a,materno:e.target.value})})))),r.a.createElement(u.a.Footer,null,r.a.createElement(m.a,{onClick:()=>o()},"Cerrar"),r.a.createElement(m.a,{type:"submit",form:"formActualizarPersonales",className:"btn btn-primary btnAgregar"},"Actualizar")))};var E=function(e){Object(n.useEffect)(()=>{t(e.data)},[e.data]);const[a,t]=Object(n.useState)({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),o=()=>{t({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),e.onHide()};return r.a.createElement(u.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",keyboard:!1}),r.a.createElement(u.a.Header,{closeButton:!0,onClick:()=>o()},r.a.createElement(u.a.Title,{id:"contained-modal-title-vcenter"},"Editar datos de funeral")),r.a.createElement(u.a.Body,null,r.a.createElement("form",{onSubmit:e=>(async function(e){e.preventDefault();const t=a.id,n={lugarVelatorio:a.lugarVelatorio,lugarResponso:a.lugarResponso,fechaResponso:a.fechaResponso,lugarCementerio:a.lugarCementerio};await d.a.updateFuneral(t,n),window.location.reload(!1)})(e),className:"formContainer",id:"formActualizarFuneral"},r.a.createElement("hr",null),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"lugarVelatorio"},"Lugar Velatorio:"),r.a.createElement("input",{name:"lugarVelatorio",type:"text",value:a.lugarVelatorio,onChange:e=>t({...a,lugarVelatorio:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"lugarResponso"},"Lugar Responso:"),r.a.createElement("input",{name:"lugarResponso",type:"text",value:a.lugarResponso,onChange:e=>t({...a,lugarResponso:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"fechaResponso"},"Fecha Responso:"),r.a.createElement("input",{name:"fechaResponso",type:"date",value:a.fechaResponso,onChange:e=>t({...a,fechaResponso:e.target.value})})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("label",{htmlFor:"lugarCementerio"},"Lugar Cementerio:"),r.a.createElement("input",{type:"text",name:"lugarCementerio",value:a.lugarCementerio,onChange:e=>t({...a,lugarCementerio:e.target.value})})))),r.a.createElement(u.a.Footer,null,r.a.createElement(m.a,{onClick:()=>o()},"Cerrar"),r.a.createElement(m.a,{type:"submit",form:"formActualizarFuneral",className:"btn btn-primary btnAgregar"},"Actualizar")))},b=t(85);t(86);var h=function(e){let{url:a,id:t}=e;return r.a.createElement("div",{className:"qrModuleContainer"},r.a.createElement("div",{className:"qrContainer"},r.a.createElement(b.a,{className:"qrCanva",renderAs:"canvas",id:"qr-gen".concat(t),size:400,value:a,level:"H",includeMargin:!0,imageSettings:{width:200,height:200}})),r.a.createElement("button",{className:"qrDownload",onClick:()=>(e=>{const a=document.getElementById("qr-gen".concat(e)).toDataURL("image/png").replace("image/png","image/octet-stream");let t=document.createElement("a");t.href=a,t.download="".concat(e,".png"),document.body.appendChild(t),t.click(),document.body.removeChild(t)})(t)},"Descargar QR"))},w=t(45);t(87);a.default=function(){const[e,a]=Object(n.useState)([]),t=Object(o.m)();Object(n.useEffect)(()=>{!async function(){const e=await d.a.getAllRecords();a(e.data)}()},[e.length]);const[m,u]=Object(n.useState)(!1),[b,v]=Object(n.useState)(!1),[C,y]=Object(n.useState)(!1),[R,f]=Object(n.useState)({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),[N,A]=Object(n.useState)({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),[D,_]=Object(n.useState)({data:""}),F=e=>{const a={data:e.target.files[0]};_(a)},S=r.a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,null,r.a.createElement(s.a,null,r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("title",null,"Servicios Funerarios Cristo Rey Angol-Manager"),r.a.createElement("link",{rel:"canonical",href:"https://www.cristoreyangol.cl/"}))),r.a.createElement("div",{className:"mnanagerPageMainWrapper"},r.a.createElement("header",{className:"managerHeaderContainer"},r.a.createElement(c.a,null)),r.a.createElement(g,{show:m,onHide:()=>u(!1)}),r.a.createElement(p,{show:b,onHide:()=>v(!1),data:R}),r.a.createElement(E,{show:C,onHide:()=>y(!1),data:N}),r.a.createElement("main",{className:"managerPageMainContainer"},r.a.createElement("h1",null,"Manager de Obituario"),r.a.createElement("button",{type:"submit",className:"btnLogoutObituario",onClick:()=>(async()=>{await w.a.logout(),t("/login")})()},"Salir"),r.a.createElement("div",{className:"addObituarioContainer"},r.a.createElement("button",{className:"btnAddObituario","data-bs-toggle":"modal","data-bs-target":"#modalAgregarObituario",onClick:()=>u(!0)},"Agregar al obituario",S)),r.a.createElement("div",{className:"managerCardsContainer"},e.map(e=>r.a.createElement("div",{className:"managerDecesoCard",key:e._id},r.a.createElement(l.b,{to:"/obituario/".concat(e._id),className:"managerDecesoPersona"},r.a.createElement("div",{className:"managerDecesoImagen"},r.a.createElement("img",{src:e.img,alt:""})),r.a.createElement("h5",{className:"managerDecesoNombres"},e.nombre," ",e.segundoNombre," ",e.paterno," ",e.materno),r.a.createElement("p",{className:"managerDecesoFecha"},e.date),r.a.createElement("div",{className:"decesoDataWrapper"},r.a.createElement("p",{className:"managerDecesoFechaResponso"},"fecha responso:",e.fechaResponso),r.a.createElement("p",{className:"managerDecesoLugarCementerio"},"lugar cementerio:",e.lugarCementerio),r.a.createElement("p",{className:"managerDecesoLugarResponso"},"lugar responso:",e.lugarResponso),r.a.createElement("p",{className:"managerLugarVelatorio"},"lugar velatorio:",e.lugarVelatorio))),r.a.createElement("div",{className:"controlsWrapper"},r.a.createElement("div",{className:"managerDecesoControls"},r.a.createElement("button",{className:"btnCtrlObituario",onClick:a=>(function(e,a,t,n,r,o,l){e.preventDefault(),f({id:a,date:t,nombre:n,segundoNombre:r,paterno:o,materno:l}),v(!0)})(a,e._id,e.date,e.nombre,e.segundoNombre,e.paterno,e.materno)},"Editar datos personales"),r.a.createElement("button",{className:"btnCtrlObituario","data-bs-toggle":"modal","data-bs-target":"#modalActualizarFuneral",onClick:a=>(async function(e,a,t,n,r,o){e.preventDefault(),A({id:a,lugarVelatorio:t,lugarResponso:n,fechaResponso:r,lugarCementerio:o}),y(!0)})(a,e._id,e.lugarVelatorio,e.lugarResponso,e.fechaResponso,e.lugarCementerio)},"Editar datos funeral")),r.a.createElement("form",{className:"formImg",id:"formImg",onSubmit:a=>(async function(e,a){a.preventDefault();let t=new FormData;t.append("imgDeceso",D.data),await d.a.addImage(e,t)&&(_({data:""}),window.location.reload(!1))})(e._id,a),encType:"multipart/form-data"},r.a.createElement("input",{type:"file",name:"imgDeceso",id:"imgDeceso",accept:"image/*",filename:D.data,onChange:F}),r.a.createElement("button",{type:"submit",className:"btnCtrlObituario"},"Agregar imagen")),r.a.createElement(i.a,{className:"accordion",id:"accordionExample"},r.a.createElement(i.a.Item,{eventKey:"0",className:"accordion-item"},r.a.createElement(i.a.Header,{className:"accordion-header",id:"headingOne"},"Eliminar"),r.a.createElement(i.a.Body,{className:"accordion-body"},r.a.createElement("button",{id:"btnDelete".concat(e._id),className:"btnDeleteObituario",onClick:()=>(async function(e){await d.a.removeRecord(e),window.location.reload(!1)})(e._id)},"Eliminar del obituario")))),r.a.createElement(h,{url:"https://www.cristoreyangol.cl/obituario/".concat(e._id),id:e._id}))))))))}},42:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n={getItem:async e=>{const a=sessionStorage.getItem(e);return JSON.parse(a)},setItem:async(e,a)=>{sessionStorage.setItem(e,JSON.stringify(a))},removeItem:async e=>sessionStorage.removeItem(e),clearAll:async()=>sessionStorage.clear()}},44:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(113),r=t(45),o=t(42);const l={get:async e=>{const a=o.a.getItem("token");try{return await n.a.get(e,{headers:{Authorization:a}})}catch(t){if(401===t.response.status&&"Request no autorizado"===t.response.statusText)return r.a.logout(),void window.location.replace("/");console.error(t)}},post:async(e,a)=>{const t=o.a.getItem("token");try{return await n.a.post(e,a,{headers:{Authorization:t}})}catch(l){if(401===l.response.status&&"Unauthorized"===l.response.statusText)return r.a.logout(),void window.location.replace("/");console.error(l)}},postImage:async(e,a)=>{const t=o.a.getItem("token");try{return await n.a.post(e,a,{headers:{"Content-Type":"multipart/form-data",Authorization:t}})}catch(l){if(401===l.response.status&&"Unauthorized"===l.response.statusText)return r.a.logout(),void window.location.replace("/");console.error(l)}},remove:async e=>{const a=o.a.getItem("token");try{return await n.a.delete(e,{headers:{Authorization:a}})}catch(t){if(401===t.response.status&&"Request no autorizado"===t.response.statusText)return r.a.logout(),void window.location.replace("/");console.error(t)}}}},45:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(42),r=t(44);const o={login:async e=>{try{const{data:t}=await r.a.post("https://www.cristoreyangol.cl:8080/user/auth",{password:e});return 200===t.status&&t.data?(n.a.setItem("token",t.data),{success:!0,user:t.data.user}):{success:!1}}catch(a){return{success:!1}}},register:async e=>{let{userName:a,password:t}=e;try{const{data:e}=await r.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GTM_ID:"G-80E5Y9MEL8",REACT_APP_SERVER_URL_ADD:"https://www.cristoreyangol.cl:8080/createRecord/add",REACT_APP_SERVER_URL_ADDIMAGE:"https://www.cristoreyangol.cl:8080/createRecord/addImage",REACT_APP_SERVER_URL_DELETE:"https://www.cristoreyangol.cl:8080/createRecord",REACT_APP_SERVER_URL_LOGIN:"https://www.cristoreyangol.cl:8080/user/auth",REACT_APP_SERVER_URL_MESAGGES:"https://www.cristoreyangol.cl:8080/record/updateMensajes",REACT_APP_SERVER_URL_RECORD:"https://www.cristoreyangol.cl:8080/record",REACT_APP_SERVER_URL_UPDATE_FUNERAL:"https://www.cristoreyangol.cl:8080/createRecord/updateFuneral",REACT_APP_SERVER_URL_UPDATE_PERSONALES:"https://www.cristoreyangol.cl:8080/createRecord/updatePersonales"}).REACT_APP_API_REGISTER_URL,{userName:a,password:t});return{success:200===e.status}}catch(n){return{success:!1}}},checkToken:async()=>{try{return await n.a.getItem("token")?{success:!0,user:!0}:{success:!1}}catch(e){return{success:!1}}},logout:async()=>{try{return await n.a.removeItem("token")?{success:!0}:{success:!1}}catch(e){return{success:!1}}}}},46:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(44);const r={getAllRecords:async()=>{try{const{data:a}=await n.a.get("https://www.cristoreyangol.cl:8080/record");return{success:!0,data:a.data}}catch(e){return{success:!1}}},getFilteredRecord:async e=>{try{const{data:t}=await n.a.get("".concat("https://www.cristoreyangol.cl:8080/record","/").concat(e));return{success:!0,data:t.data}}catch(a){return{success:!1}}},addMesagge:async(e,a)=>{try{const{data:r}=await n.a.post("".concat("https://www.cristoreyangol.cl:8080/record/updateMensajes","/").concat(e),a);return{success:!0,data:r.data}}catch(t){return{success:!1}}},addObituario:async(e,a,t,r,o,l,c,s,i)=>{try{const{data:u}=await n.a.post("https://www.cristoreyangol.cl:8080/createRecord/add",{date:e,nombre:a,segundoNombre:t,paterno:r,materno:o,lugarVelatorio:l,lugarResponso:c,fechaResponso:s,lugarCementerio:i});return{success:!0,data:u.data}}catch(m){return{success:!1}}},addImage:async(e,a)=>{try{const{data:r}=await n.a.postImage("".concat("https://www.cristoreyangol.cl:8080/createRecord/addImage","/").concat(e),a);return{success:!0,data:r.data}}catch(t){return{success:!1}}},updateData:async(e,a)=>{try{const{data:r}=await n.a.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updatePersonales","/").concat(e),{update:a});return{success:!0,data:r.data}}catch(t){return{success:!1}}},updateFuneral:async(e,a)=>{try{const{data:r}=await n.a.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updateFuneral","/").concat(e),{update:a});return{success:!0,data:r.data}}catch(t){return{success:!1}}},removeRecord:async e=>{try{const{data:t}=await n.a.remove("".concat("https://www.cristoreyangol.cl:8080/createRecord","/delete/").concat(e));return{success:!0,data:t.data}}catch(a){return{success:!1}}}}},86:function(e,a,t){},87:function(e,a,t){}}]);
//# sourceMappingURL=7.e98ecabf.chunk.js.map