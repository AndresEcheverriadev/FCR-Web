"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[605],{261:function(e,r,t){t.d(r,{$:function(){return A}});var n=t(4165),a=t(5861),o=t(1243),s=function(e){var r=sessionStorage.getItem(e);return JSON.parse(r)},c=function(e,r){sessionStorage.setItem(e,JSON.stringify(r))},u=function(e){return sessionStorage.removeItem(e)},i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:return e.sent&&p(),e.next=7,x.post({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GTM_ID:"G-80E5Y9MEL8",REACT_APP_JWT_SECRET_KEY:"SOTEd7ApeG58xt9",REACT_APP_PASSOBITUARIO:"c#9o9te4JLCnm5?A",REACT_APP_SERVER_URL_ADD:"https://www.cristoreyangol.cl:8080/createRecord/add",REACT_APP_SERVER_URL_ADDIMAGE:"https://www.cristoreyangol.cl:8080/createRecord/addImage",REACT_APP_SERVER_URL_DELETE:"https://www.cristoreyangol.cl:8080/createRecord",REACT_APP_SERVER_URL_MESAGGES:"https://www.cristoreyangol.cl:8080/record/updateMensajes",REACT_APP_SERVER_URL_RECORD:"https://www.cristoreyangol.cl:8080/record",REACT_APP_SERVER_URL_UPDATE_FUNERAL:"https://www.cristoreyangol.cl:8080/createRecord/updateFuneral",REACT_APP_SERVER_URL_UPDATE_PERSONALES:"https://www.cristoreyangol.cl:8080/createRecord/updatePersonales"}.REACT_APP_LOGIN_USER_URL,{userName:r,password:t});case 7:if(a=e.sent,200!==(o=a.data).status||!o.data.token){e.next=12;break}return c("token",o.data.token),e.abrupt("return",{success:!0,user:o.data.user});case 12:return e.abrupt("return",{success:!1});case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(r,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.userName,a=r.password,e.prev=1,e.next=4,x.post({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GTM_ID:"G-80E5Y9MEL8",REACT_APP_JWT_SECRET_KEY:"SOTEd7ApeG58xt9",REACT_APP_PASSOBITUARIO:"c#9o9te4JLCnm5?A",REACT_APP_SERVER_URL_ADD:"https://www.cristoreyangol.cl:8080/createRecord/add",REACT_APP_SERVER_URL_ADDIMAGE:"https://www.cristoreyangol.cl:8080/createRecord/addImage",REACT_APP_SERVER_URL_DELETE:"https://www.cristoreyangol.cl:8080/createRecord",REACT_APP_SERVER_URL_MESAGGES:"https://www.cristoreyangol.cl:8080/record/updateMensajes",REACT_APP_SERVER_URL_RECORD:"https://www.cristoreyangol.cl:8080/record",REACT_APP_SERVER_URL_UPDATE_FUNERAL:"https://www.cristoreyangol.cl:8080/createRecord/updateFuneral",REACT_APP_SERVER_URL_UPDATE_PERSONALES:"https://www.cristoreyangol.cl:8080/createRecord/updatePersonales"}.REACT_APP_API_REGISTER_URL,{userName:t,password:a});case 4:return o=e.sent,s=o.data,e.abrupt("return",{success:200===s.status});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("token");case 3:if(e.sent){e.next=6;break}return e.abrupt("return",{success:!1});case 6:return e.abrupt("return",{success:!0,user:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u("token")){e.next=4;break}return e.abrupt("return",{success:!1});case 4:return e.abrupt("return",{success:!0});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m={login:i,register:l,loginToken:d,logout:p},h=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s("token"),e.prev=1,e.next=4,o.Z.get(r,{headers:{Authorization:t}});case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Request no autorizado"!==e.t0.response.statusText){e.next=14;break}return m.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s("token"),e.prev=1,e.next=4,o.Z.post(r,t,{headers:{Authorization:a}});case 4:return c=e.sent,e.abrupt("return",c);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Unauthorized"!==e.t0.response.statusText){e.next=14;break}return m.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s("token"),e.prev=1,e.next=4,o.Z.post(r,t,{headers:{"Content-Type":"multipart/form-data",Authorization:a}});case 4:return c=e.sent,e.abrupt("return",c);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Unauthorized"!==e.t0.response.statusText){e.next=14;break}return m.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r,t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s("token"),e.prev=1,e.next=4,o.Z.delete(r,{headers:{Authorization:t}});case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Request no autorizado"!==e.t0.response.statusText){e.next=14;break}return m.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),x={get:h,post:g,postImage:f,remove:v},b=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("https://www.cristoreyangol.cl:8080/record");case 3:return r=e.sent,t=r.data,e.abrupt("return",{success:!0,data:t.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("".concat("https://www.cristoreyangol.cl:8080/record","/").concat(r));case 3:return t=e.sent,a=t.data,e.abrupt("return",{success:!0,data:a.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("".concat("https://www.cristoreyangol.cl:8080/record/updateMensajes","/").concat(r),t);case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,t){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t,a,o,s,c,u,i,l){var d,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("https://www.cristoreyangol.cl:8080/createRecord/add",{date:r,nombre:t,segundoNombre:a,paterno:o,materno:s,lugarVelatorio:c,lugarResponso:u,fechaResponso:i,lugarCementerio:l});case 3:return d=e.sent,p=d.data,e.abrupt("return",{success:!0,data:p.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,t,n,a,o,s,c,u,i){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.postImage("".concat("https://www.cristoreyangol.cl:8080/createRecord/addImage","/").concat(r),t);case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,t){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updatePersonales","/").concat(r),{update:t});case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,t){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updateFuneral","/").concat(r),{update:t});case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,t){return e.apply(this,arguments)}}(),_=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.remove("".concat("https://www.cristoreyangol.cl:8080/createRecord","/delete/").concat(r));case 3:return t=e.sent,a=t.data,e.abrupt("return",{success:!0,data:a.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),A={getAllRecords:b,getFilteredRecord:R,addMesagge:w,addObituario:C,addImage:Z,updateData:j,updateFuneral:E,removeRecord:_}},3605:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var n=t(4165),a=t(5861),o=t(885),s=t(2791),c=t(1087),u=t(5579),i=t(1699),l=t(6907),d=t(8956),p=t(1413),m=t(6157),h=t(2701),g=t(261),f=t(184);var v=function(e){var r=(0,s.useState)({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),t=(0,o.Z)(r,2),c=t[0],u=t[1];function i(e){return u((function(r){return(0,p.Z)((0,p.Z)({},r),e)}))}function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t=(0,p.Z)({},c),e.next=4,g.$.addObituario(t.date,t.nombre,t.segundoNombre,t.paterno,t.materno,t.lugarVelatorio,t.lugarResponso,t.fechaResponso,t.lugarCementerio);case 4:e.sent,u({date:"",nombre:"",segundoNombre:"",paterno:"",materno:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,f.jsxs)(h.Z,(0,p.Z)((0,p.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,f.jsx)(h.Z.Header,{closeButton:!0,children:(0,f.jsx)(h.Z.Title,{id:"contained-modal-title-vcenter",children:"Agregar al obituario"})}),(0,f.jsx)(h.Z.Body,{children:(0,f.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},id:"formAdd",className:"formContainer",children:[(0,f.jsx)("h5",{children:"Datos del fallecido"}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"date",children:"Fecha del fallecimiento:"}),(0,f.jsx)("input",{type:"date",id:"date",value:c.date,onChange:function(e){return i({date:e.target.value})}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"nombreDeceso",children:"Nombre del fallecido:"}),(0,f.jsx)("input",{type:"text",id:"nombreDeceso",value:c.nombre,onChange:function(e){return i({nombre:e.target.value})}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"segundoNombreDeceso",children:"Segundo Nombre del fallecido:"}),(0,f.jsx)("input",{type:"text",id:"segundoNombreDeceso",value:c.segundoNombre,onChange:function(e){return i({segundoNombre:e.target.value})}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"paternoDeceso",children:"Apellido paterno:"}),(0,f.jsx)("input",{type:"text",id:"paternoDeceso",value:c.paterno,onChange:function(e){return i({paterno:e.target.value})}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"maternoDeceso",children:"Apellido materno:"}),(0,f.jsx)("input",{type:"text",id:"maternoDeceso",value:c.materno,onChange:function(e){return i({materno:e.target.value})}})]}),(0,f.jsx)("h5",{children:"Datos del funeral"}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"lugarVelatorio",children:"lugar velatorio:"}),(0,f.jsx)("input",{type:"text",id:"lugarVelatorio",value:c.lugarVelatorio,onChange:function(e){return i({lugarVelatorio:e.target.value})}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"lugarResponso",children:"lugar responso:"}),(0,f.jsx)("input",{type:"text",id:"lugarResponso",value:c.lugarResponso,onChange:function(e){return i({lugarResponso:e.target.value})}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"fechaResponso",children:"fecha responso:"}),(0,f.jsx)("input",{type:"date",id:"fechaResponso",value:c.fechaResponso,onChange:function(e){return i({fechaResponso:e.target.value})}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"lugarCementerio",children:"lugar cementerio:"}),(0,f.jsx)("input",{list:"cementerios",type:"text",id:"lugarCementerio",value:c.lugarCementerio,onChange:function(e){return i({lugarCementerio:e.target.value})}}),(0,f.jsxs)("datalist",{id:"cementerios",children:[(0,f.jsx)("option",{value:"Cementerio Parque Angol",children:"Cementerio Parque Angol"}),(0,f.jsx)("option",{value:"Cementerio Parroquial Angol",children:"Cementerio Parroquial Angol"}),(0,f.jsx)("option",{value:"Cementerio municipal Angol",children:"Cementerio Municipal Angol"})]})]})]})}),(0,f.jsxs)(h.Z.Footer,{children:[(0,f.jsx)(m.Z,{onClick:e.onHide,children:"Cerrar"}),(0,f.jsx)(m.Z,{type:"submit",form:"formAdd",className:"btn btn-primary btnAgregar",children:"Agregar"})]})]}))};var x=function(e){(0,s.useEffect)((function(){u(e.data)}),[e.data]);var r=(0,s.useState)({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),t=(0,o.Z)(r,2),c=t[0],u=t[1],i=function(){u({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),e.onHide()};function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t=c.id,a={date:c.date,nombre:c.nombre,segundoNombre:c.segundoNombre,paterno:c.paterno,materno:c.materno},e.next=5,g.$.updateData(t,a);case 5:e.sent,window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,f.jsxs)(h.Z,(0,p.Z)((0,p.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",keyboard:!1,children:[(0,f.jsx)(h.Z.Header,{closeButton:!0,onClick:function(){return i()},children:(0,f.jsx)(h.Z.Title,{id:"contained-modal-title-vcenter",children:"Editar datos personales"})}),(0,f.jsx)(h.Z.Body,{children:(0,f.jsxs)("form",{onSubmit:function(e){return function(e){return l.apply(this,arguments)}(e)},className:"formContainer",id:"formActualizarPersonales",children:[(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"date",children:"Fecha del fallecimiento:"}),(0,f.jsx)("input",{type:"date",name:"date",value:c.date,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{date:e.target.value}))}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"nombreDeceso",children:"Nombre del fallecido:"}),(0,f.jsx)("input",{type:"text",name:"nombreDeceso",value:c.nombre,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{nombre:e.target.value}))}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"segundoNombreDeceso",children:"Segundo Nombre del fallecido:"}),(0,f.jsx)("input",{type:"text",name:"segundoNombreDeceso",value:c.segundoNombre,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{segundoNombre:e.target.value}))}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"paternoDeceso",children:"Apellido paterno:"}),(0,f.jsx)("input",{type:"text",name:"paternoDeceso",value:c.paterno,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{paterno:e.target.value}))}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"maternoDeceso",children:"Apellido materno:"}),(0,f.jsx)("input",{type:"text",name:"maternoDeceso",value:c.materno,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{materno:e.target.value}))}})]})]})}),(0,f.jsxs)(h.Z.Footer,{children:[(0,f.jsx)(m.Z,{onClick:function(){return i()},children:"Cerrar"}),(0,f.jsx)(m.Z,{type:"submit",form:"formActualizarPersonales",className:"btn btn-primary btnAgregar",children:"Actualizar"})]})]}))};var b=function(e){(0,s.useEffect)((function(){u(e.data)}),[e.data]);var r=(0,s.useState)({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),t=(0,o.Z)(r,2),c=t[0],u=t[1],i=function(){u({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),e.onHide()};function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t=c.id,a={lugarVelatorio:c.lugarVelatorio,lugarResponso:c.lugarResponso,fechaResponso:c.fechaResponso,lugarCementerio:c.lugarCementerio},e.next=5,g.$.updateFuneral(t,a);case 5:e.sent,window.location.reload(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,f.jsxs)(h.Z,(0,p.Z)((0,p.Z)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",keyboard:!1,children:[(0,f.jsx)(h.Z.Header,{closeButton:!0,onClick:function(){return i()},children:(0,f.jsx)(h.Z.Title,{id:"contained-modal-title-vcenter",children:"Editar datos de funeral"})}),(0,f.jsx)(h.Z.Body,{children:(0,f.jsxs)("form",{onSubmit:function(e){return function(e){return l.apply(this,arguments)}(e)},className:"formContainer",id:"formActualizarFuneral",children:[(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"lugarVelatorio",children:"Lugar Velatorio:"}),(0,f.jsx)("input",{name:"lugarVelatorio",type:"text",value:c.lugarVelatorio,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{lugarVelatorio:e.target.value}))}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"lugarResponso",children:"Lugar Responso:"}),(0,f.jsx)("input",{name:"lugarResponso",type:"text",value:c.lugarResponso,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{lugarResponso:e.target.value}))}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"fechaResponso",children:"Fecha Responso:"}),(0,f.jsx)("input",{name:"fechaResponso",type:"date",value:c.fechaResponso,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{fechaResponso:e.target.value}))}})]}),(0,f.jsxs)("div",{className:"inputContainer",children:[(0,f.jsx)("label",{htmlFor:"lugarCementerio",children:"Lugar Cementerio:"}),(0,f.jsx)("input",{type:"text",name:"lugarCementerio",value:c.lugarCementerio,onChange:function(e){return u((0,p.Z)((0,p.Z)({},c),{},{lugarCementerio:e.target.value}))}})]})]})}),(0,f.jsxs)(h.Z.Footer,{children:[(0,f.jsx)(m.Z,{onClick:function(){return i()},children:"Cerrar"}),(0,f.jsx)(m.Z,{type:"submit",form:"formActualizarFuneral",className:"btn btn-primary btnAgregar",children:"Actualizar"})]})]}))},R=t(4853);var w=function(e){var r=e.url,t=e.id;return(0,f.jsxs)("div",{className:"qrModuleContainer",children:[(0,f.jsx)("div",{className:"qrContainer",children:(0,f.jsx)(R.ZP,{className:"qrCanva",renderAs:"canvas",id:"qr-gen".concat(t),size:400,value:r,level:"H",includeMargin:!0,imageSettings:{width:200,height:200}})}),(0,f.jsx)("button",{className:"qrDownload",onClick:function(){return function(e){var r=document.getElementById("qr-gen".concat(e)).toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=r,t.download="".concat(e,".png"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}(t)},children:"Descargar QR"})]})};var C=function(){var e=(0,s.useState)([]),r=(0,o.Z)(e,2),t=r[0],p=r[1];(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.$.getAllRecords();case 2:r=e.sent,p(r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.length]);var m=(0,s.useState)(!1),h=(0,o.Z)(m,2),R=h[0],C=h[1],Z=(0,s.useState)(!1),j=(0,o.Z)(Z,2),E=j[0],_=j[1],A=(0,s.useState)(!1),y=(0,o.Z)(A,2),N=y[0],S=y[1],P=(0,s.useState)({id:"",date:"",nombre:"",segundoNombre:"",paterno:"",materno:""}),D=(0,o.Z)(P,2),T=D[0],k=D[1],F=(0,s.useState)({id:"",lugarVelatorio:"",lugarResponso:"",fechaResponso:"",lugarCementerio:""}),L=(0,o.Z)(F,2),O=L[0],V=L[1];function U(){return(U=(0,a.Z)((0,n.Z)().mark((function e(r,t,a,o,s,c){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),V({id:t,lugarVelatorio:a,lugarResponso:o,fechaResponso:s,lugarCementerio:c}),S(!0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=(0,s.useState)({data:""}),z=(0,o.Z)(I,2),M=z[0],H=z[1];function B(){return(B=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("imgDeceso",M.data),e.next=5,g.$.addImage(r,a);case 5:e.sent&&(H({data:""}),window.location.reload(!1));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(e){var r={data:e.target.files[0]};H(r)};function q(){return(q=(0,a.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.$.removeRecord(r);case 2:e.sent,window.location.reload(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=(0,f.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:(0,f.jsx)("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})}),K=(0,s.useContext)(u.O).logOut;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(l.B6,{children:[(0,f.jsx)(l.ql,{children:(0,f.jsx)("meta",{name:"robots",content:"noindex, nofollow"})}),(0,f.jsx)("title",{children:"Servicios Funerarios Cristo Rey Angol"})]}),(0,f.jsxs)("div",{className:"mnanagerPageMainWrapper",children:[(0,f.jsx)("header",{className:"managerHeaderContainer",children:(0,f.jsx)(i.Z,{})}),(0,f.jsx)(v,{show:R,onHide:function(){return C(!1)}}),(0,f.jsx)(x,{show:E,onHide:function(){return _(!1)},data:T}),(0,f.jsx)(b,{show:N,onHide:function(){return S(!1)},data:O}),(0,f.jsxs)("main",{className:"managerPageMainContainer",children:[(0,f.jsx)("h1",{children:"Manager de Obituario"}),(0,f.jsx)("button",{type:"submit",className:"btnLogoutObituario",onClick:function(){return K()},children:"Salir"}),(0,f.jsx)("div",{className:"addObituarioContainer",children:(0,f.jsxs)("button",{className:"btnAddObituario","data-bs-toggle":"modal","data-bs-target":"#modalAgregarObituario",onClick:function(){return C(!0)},children:["Agregar al obituario",W]})}),(0,f.jsx)("div",{className:"managerCardsContainer",children:t.map((function(e){return(0,f.jsxs)("div",{className:"managerDecesoCard",children:[(0,f.jsxs)(c.OL,{to:"/obituario/".concat(e._id),className:"managerDecesoPersona",children:[(0,f.jsx)("div",{className:"managerDecesoImagen",children:(0,f.jsx)("img",{src:e.img,alt:""})}),(0,f.jsxs)("h5",{className:"managerDecesoNombres",children:[e.nombre," ",e.segundoNombre," ",e.paterno," ",e.materno]}),(0,f.jsx)("p",{className:"managerDecesoFecha",children:e.date}),(0,f.jsxs)("div",{className:"decesoDataWrapper",children:[(0,f.jsxs)("p",{className:"managerDecesoFechaResponso",children:["fecha responso:",e.fechaResponso]}),(0,f.jsxs)("p",{className:"managerDecesoLugarCementerio",children:["lugar cementerio:",e.lugarCementerio]}),(0,f.jsxs)("p",{className:"managerDecesoLugarResponso",children:["lugar responso:",e.lugarResponso]}),(0,f.jsxs)("p",{className:"managerLugarVelatorio",children:["lugar velatorio:",e.lugarVelatorio]})]})]}),(0,f.jsxs)("div",{className:"controlsWrapper",children:[(0,f.jsxs)("div",{className:"managerDecesoControls",children:[(0,f.jsx)("button",{className:"btnCtrlObituario",onClick:function(r){return function(e,r,t,n,a,o,s){e.preventDefault(),k({id:r,date:t,nombre:n,segundoNombre:a,paterno:o,materno:s}),_(!0)}(r,e._id,e.date,e.nombre,e.segundoNombre,e.paterno,e.materno)},children:"Editar datos personales"}),(0,f.jsx)("button",{className:"btnCtrlObituario","data-bs-toggle":"modal","data-bs-target":"#modalActualizarFuneral",onClick:function(r){return function(e,r,t,n,a,o){return U.apply(this,arguments)}(r,e._id,e.lugarVelatorio,e.lugarResponso,e.fechaResponso,e.lugarCementerio)},children:"Editar datos funeral"})]}),(0,f.jsxs)("form",{className:"formImg",id:"formImg",onSubmit:function(r){return function(e,r){return B.apply(this,arguments)}(e._id,r)},encType:"multipart/form-data",children:[(0,f.jsx)("input",{type:"file",name:"imgDeceso",id:"imgDeceso",accept:"image/*",filename:M.data,onChange:G}),(0,f.jsx)("button",{type:"submit",className:"btnCtrlObituario",children:"Agregar imagen"})]}),(0,f.jsx)(d.Z,{className:"accordion",id:"accordionExample",children:(0,f.jsxs)(d.Z.Item,{eventKey:"0",className:"accordion-item",children:[(0,f.jsx)(d.Z.Header,{className:"accordion-header",id:"headingOne",children:"Eliminar"}),(0,f.jsx)(d.Z.Body,{className:"accordion-body",children:(0,f.jsx)("button",{id:"btnDelete".concat(e._id),className:"btnDeleteObituario",onClick:function(){return function(e){return q.apply(this,arguments)}(e._id)},children:"Eliminar del obituario"})})]})}),(0,f.jsx)(w,{url:"https://www.cristoreyangol.cl/obituario/".concat(e._id),id:e._id})]})]},e._id)}))})]})]})]})}}}]);
//# sourceMappingURL=605.4a80d680.chunk.js.map