"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[292],{8058:function(e,t,r){r.d(t,{e:function(){return p}});var n=r(4165),a=r(5861),s=r(2764),o=r(1930),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.l.post("https://www.cristoreyangol.cl:8080/user/auth",{mail:t,password:r});case 3:if(a=e.sent,200!==(c=a.data).status||!c.data){e.next=8;break}return s.n.setItem("token",c.data),e.abrupt("return",{success:!0,user:c.data.user});case 8:return e.abrupt("return",{success:!1});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.userName,a=t.password,e.prev=1,e.next=4,o.l.post({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GTM_ID:"G-80E5Y9MEL8",REACT_APP_PASSOBITUARIO:"c#9o9te4JLCnm5?A",REACT_APP_SERVER_URL_ADD:"https://www.cristoreyangol.cl:8080/createRecord/add",REACT_APP_SERVER_URL_ADDIMAGE:"https://www.cristoreyangol.cl:8080/createRecord/addImage",REACT_APP_SERVER_URL_DELETE:"https://www.cristoreyangol.cl:8080/createRecord",REACT_APP_SERVER_URL_LOGIN:"https://www.cristoreyangol.cl:8080/user/auth",REACT_APP_SERVER_URL_MESAGGES:"https://www.cristoreyangol.cl:8080/record/updateMensajes",REACT_APP_SERVER_URL_RECORD:"https://www.cristoreyangol.cl:8080/record",REACT_APP_SERVER_URL_UPDATE_FUNERAL:"https://www.cristoreyangol.cl:8080/createRecord/updateFuneral",REACT_APP_SERVER_URL_UPDATE_PERSONALES:"https://www.cristoreyangol.cl:8080/createRecord/updatePersonales"}.REACT_APP_API_REGISTER_URL,{userName:r,password:a});case 4:return s=e.sent,c=s.data,e.abrupt("return",{success:200===c.status});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.n.getItem("token");case 3:if(e.sent){e.next=6;break}return e.abrupt("return",{success:!1});case 6:return e.abrupt("return",{success:!0,user:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(alert("logout"),e.prev=1,s.n.removeItem("token")){e.next=5;break}return e.abrupt("return",{success:!1});case 5:return e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),p={login:c,register:u,checkToken:i,logout:l}},1930:function(e,t,r){r.d(t,{l:function(){return d}});var n=r(4165),a=r(5861),s=r(1243),o=r(8058),c=r(2764),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.n.getItem("token"),e.prev=1,e.next=4,s.Z.get(t,{headers:{Authorization:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Request no autorizado"!==e.t0.response.statusText){e.next=14;break}return o.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.n.getItem("token"),e.prev=1,e.next=4,s.Z.post(t,r,{headers:{Authorization:a}});case 4:return u=e.sent,e.abrupt("return",u);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Unauthorized"!==e.t0.response.statusText){e.next=14;break}return o.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.n.getItem("token"),e.prev=1,e.next=4,s.Z.post(t,r,{headers:{"Content-Type":"multipart/form-data",Authorization:a}});case 4:return u=e.sent,e.abrupt("return",u);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Unauthorized"!==e.t0.response.statusText){e.next=14;break}return o.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.n.getItem("token"),e.prev=1,e.next=4,s.Z.delete(t,{headers:{Authorization:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Request no autorizado"!==e.t0.response.statusText){e.next=14;break}return o.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d={get:u,post:i,postImage:l,remove:p}},2764:function(e,t,r){r.d(t,{n:function(){return n}});var n={getItem:function(e){var t=sessionStorage.getItem(e);return JSON.parse(t)},setItem:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},removeItem:function(e){return sessionStorage.removeItem(e)},clearAll:function(){return sessionStorage.clear()}}},8269:function(e,t,r){r.d(t,{$:function(){return m}});var n=r(4165),a=r(5861),s=r(1930),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.get("https://www.cristoreyangol.cl:8080/record");case 3:return t=e.sent,r=t.data,e.abrupt("return",{success:!0,data:r.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.get("".concat("https://www.cristoreyangol.cl:8080/record","/").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",{success:!0,data:a.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("".concat("https://www.cristoreyangol.cl:8080/record/updateMensajes","/").concat(t),r);case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,o,c,u,i,l,p){var d,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("https://www.cristoreyangol.cl:8080/createRecord/add",{date:t,nombre:r,segundoNombre:a,paterno:o,materno:c,lugarVelatorio:u,lugarResponso:i,fechaResponso:l,lugarCementerio:p});case 3:return d=e.sent,h=d.data,e.abrupt("return",{success:!0,data:h.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r,n,a,s,o,c,u,i){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.postImage("".concat("https://www.cristoreyangol.cl:8080/createRecord/addImage","/").concat(t),r);case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updatePersonales","/").concat(t),{update:r});case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updateFuneral","/").concat(t),{update:r});case 3:return a=e.sent,o=a.data,e.abrupt("return",{success:!0,data:o.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.remove("".concat("https://www.cristoreyangol.cl:8080/createRecord","/delete/").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",{success:!0,data:a.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),m={getAllRecords:o,getFilteredRecord:c,addMesagge:u,addObituario:i,addImage:l,updateData:p,updateFuneral:d,removeRecord:h}},3292:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(1413),a=r(4165),s=r(5861),o=r(885),c=r(2791),u=r(7689),i=r(6907),l=r(1699),p=r(8269),d=r(528),h=r(184);var m=function(){var e,t=(0,c.useState)({}),r=(0,o.Z)(t,2),m=r[0],v=r[1],f=(0,u.UO)(),g=(0,c.useState)({mesagge:"",author:""}),w=(0,o.Z)(g,2),x=w[0],b=w[1],j=document.getElementById("inputMesagge"),y=document.getElementById("inputAuthor");(0,c.useEffect)((function(){function e(){return(e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.$.getFilteredRecord(f.personId);case 2:t=e.sent,v(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]);var R=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d.g.event("Interacciones","enviar_mensajeObituario","mensajeObituario"),!(r={author:x.author,mesagge:x.mesagge}).author||!r.mesagge){e.next=12;break}return e.next=5,p.$.addMesagge(t,r);case 5:x.author="",x.mesagge="",y.value="",j.value="",window.location.reload(!1),e.next=13;break;case 12:alert("Debe escribir su nombre y un mensaje");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=(0,h.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})});return(0,c.useEffect)((function(){d.g.pageView("/obituario/".concat(f),"Obituario_persona")})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.B6,{children:(0,h.jsxs)(i.ql,{children:[(0,h.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),(0,h.jsx)("meta",{charset:"utf-8"}),(0,h.jsx)("meta",{"http-equiv":"Content-Type",content:"text/html;"}),(0,h.jsxs)("title",{children:["Obituario ","".concat(null===m||void 0===m?void 0:m.nombre)," ","".concat(null===m||void 0===m?void 0:m.paterno,"-Funeraria Cristo Rey Angol")]}),(0,h.jsx)("meta",{"http-equiv":"title",content:"Obituario de ".concat(null===m||void 0===m?void 0:m.nombre," ").concat(null===m||void 0===m?void 0:m.paterno,"-Funeraria Cristo Rey Angol")}),(0,h.jsx)("meta",{name:"title",content:"Obituario de ".concat(null===m||void 0===m?void 0:m.nombre," ").concat(null===m||void 0===m?void 0:m.paterno,"-Funeraria Cristo Rey Angol")}),(0,h.jsx)("meta",{name:"description",content:"Comparte este homenaje con quienes desean honrar la memoria de ".concat(null===m||void 0===m?void 0:m.nombre," ").concat(null===m||void 0===m?void 0:m.paterno)}),(0,h.jsx)("meta",{name:"author",content:"Funeraria Cristo Rey Angol - ".concat((new Date).getFullYear())}),(0,h.jsx)("meta",{name:"copyright",content:"Funeraria Cristo Rey Angol - ".concat((new Date).getFullYear())}),(0,h.jsx)("meta",{property:"og:title",content:"Obituario de ".concat(null===m||void 0===m?void 0:m.nombre," ").concat(null===m||void 0===m?void 0:m.paterno)}),(0,h.jsx)("meta",{property:"og:type",content:"article"}),(0,h.jsx)("meta",{property:"og:url",content:"https://www.cristoreyangol.cl/".concat(f)}),(0,h.jsx)("meta",{property:"og:site_name",content:"Funeraria_Cristo_Rey_Angol"}),(0,h.jsx)("meta",{property:"og:image",content:"https://www.cristoreyangol.cl/assets/obituarioImages/urlPreview.png"}),(0,h.jsx)("meta",{property:"og:image:secure_url",content:"https://www.cristoreyangol.cl/assets/obituarioImages/urlPreview.png"}),(0,h.jsx)("meta",{property:"og:image:type",content:"image/jpeg"}),(0,h.jsx)("meta",{property:"og:image:width",content:"600"}),(0,h.jsx)("meta",{property:"og:image:height",content:"400"}),(0,h.jsx)("meta",{property:"og:image:alt",content:"Obituario servicios funerarios Cristo Rey"}),(0,h.jsx)("meta",{property:"og:description",content:"Comparte este homenaje con quienes desean honrar la memoria de ".concat(null===m||void 0===m?void 0:m.nombre," ").concat(null===m||void 0===m?void 0:m.paterno)}),(0,h.jsx)("meta",{property:"og:locale",content:"es_LA"}),(0,h.jsx)("link",{rel:"canonical",href:"https://www.cristoreyangol.cl"})]})}),(0,h.jsxs)("div",{className:"personPageMainWrapper",children:[(0,h.jsx)("header",{className:"headerContainer",children:(0,h.jsx)(l.Z,{})}),(0,h.jsxs)("div",{className:"personCardContainer",children:[(0,h.jsxs)("div",{className:"personDataWrapper",children:[(0,h.jsxs)("div",{className:"personDataContainer",children:[(0,h.jsx)("div",{className:"personImageContainer",children:(0,h.jsx)("img",{src:m.img,alt:""})}),(0,h.jsxs)("h5",{children:[m.nombre," ",m.segundoNombre]}),(0,h.jsxs)("h5",{children:[m.paterno," ",m.materno]}),(0,h.jsxs)("div",{className:"decesoDate",children:[Z,(0,h.jsx)("p",{className:"decesoFecha",children:m.date})]})]}),(0,h.jsxs)("div",{className:"funeralDataContainer",children:[(0,h.jsxs)("div",{className:"funeralInfo",children:[(0,h.jsxs)("div",{className:"infoResponso",children:[(0,h.jsx)("p",{children:"Responso F\xfanebre:"}),(0,h.jsx)("p",{className:"infoResponsoData",children:m.fechaResponso}),(0,h.jsx)("p",{className:"infoResponsoData",children:m.lugarResponso})]}),(0,h.jsxs)("div",{className:"infoCementerio",children:[(0,h.jsx)("p",{children:"Lugar de Velatorio:"}),(0,h.jsx)("p",{className:"infoCementerioData",children:m.lugarVelatorio}),(0,h.jsx)("p",{children:"Lugar de Cementerio:"}),(0,h.jsx)("p",{className:"infoCementerioData",children:m.lugarCementerio})]})]}),(0,h.jsxs)("div",{className:"shareInfoContainer",children:[(0,h.jsx)("p",{children:"Compartir"}),(0,h.jsxs)("div",{className:"shareInfoIcons",children:[(0,h.jsx)("a",{href:"https://wa.me/?text=https://www.cristoreyangol.cl/obituario/".concat(null===m||void 0===m?void 0:m._id,"                                            \n                  En este link acomp\xe1\xf1anos a honrar la memoria de ").concat(null===m||void 0===m?void 0:m.nombre," ").concat(null===m||void 0===m?void 0:m.paterno,".                                                 \n                  Servicios Funerarios Cristo Rey.\n                  "),children:(0,h.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-whatsapp",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})})}),(0,h.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://www.cristoreyangol.cl/obituario/".concat(null===m||void 0===m?void 0:m._id),children:(0,h.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-facebook",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})})]})]})]})]}),(0,h.jsx)("div",{className:"personMensajesContainer",children:null===(e=m.mesaggesWall)||void 0===e?void 0:e.map((function(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"mensajeCard",children:[(0,h.jsx)("p",{className:"mensajeText",children:e.mesagge}),(0,h.jsx)("p",{className:"mensajeAuthor",children:e.author})]},m.mesaggesWall.id),(0,h.jsx)("div",{className:"messaggeSeparator",children:(0,h.jsxs)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-bookmark-plus",viewBox:"0 0 16 16",children:[(0,h.jsx)("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"}),(0,h.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"})]})})]})}))})]},m._id),(0,h.jsxs)("div",{className:"newMesaggeContainer",children:[(0,h.jsxs)("div",{className:"form-floating",children:[(0,h.jsx)("textarea",{className:"form-control textName",id:"inputAuthor",placeholder:"Su nombre",onChange:function(e){return b((function(t){return(0,n.Z)((0,n.Z)({},t),{},{author:e.target.value})}))}}),(0,h.jsx)("label",{htmlFor:"floatingTextarea",className:"textareaLabel",children:"Su nombre"})]}),(0,h.jsxs)("div",{className:"form-floating",children:[(0,h.jsx)("textarea",{className:"form-control textArea",id:"inputMesagge",placeholder:"Su mensaje",onChange:function(e){return b((function(t){return(0,n.Z)((0,n.Z)({},t),{},{mesagge:e.target.value})}))}}),(0,h.jsx)("label",{htmlFor:"floatingTextarea2",className:"textareaLabel",children:"Escriba su mensaje"})]}),(0,h.jsxs)("button",{className:"btnSubmitMesagge",onClick:function(){return R(m._id)},children:[(0,h.jsx)("p",{children:"Enviar mensaje"}),(0,h.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-justify-left",viewBox:"0 0 16 16",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"})})]})]})]})]})}},4942:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(9142);function a(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1413:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(4942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=292.9272998b.chunk.js.map