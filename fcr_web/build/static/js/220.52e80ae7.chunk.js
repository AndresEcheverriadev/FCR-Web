"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[220],{8058:function(e,t,r){r.d(t,{e:function(){return l}});var n=r(4165),a=r(5861),s=r(2764),c=r(1930),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.l.post("https://www.cristoreyangol.cl:8080/user/auth",{mail:t,password:r});case 3:if(a=e.sent,200!==(u=a.data).status||!u.data){e.next=8;break}return s.n.setItem("token",u.data),e.abrupt("return",{success:!0,user:u.data.user});case 8:return e.abrupt("return",{success:!1});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.userName,a=t.password,e.prev=1,e.next=4,c.l.post({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GTM_ID:"G-80E5Y9MEL8",REACT_APP_PASSOBITUARIO:"c#9o9te4JLCnm5?A",REACT_APP_SERVER_URL_ADD:"https://www.cristoreyangol.cl:8080/createRecord/add",REACT_APP_SERVER_URL_ADDIMAGE:"https://www.cristoreyangol.cl:8080/createRecord/addImage",REACT_APP_SERVER_URL_DELETE:"https://www.cristoreyangol.cl:8080/createRecord",REACT_APP_SERVER_URL_LOGIN:"https://www.cristoreyangol.cl:8080/user/auth",REACT_APP_SERVER_URL_MESAGGES:"https://www.cristoreyangol.cl:8080/record/updateMensajes",REACT_APP_SERVER_URL_RECORD:"https://www.cristoreyangol.cl:8080/record",REACT_APP_SERVER_URL_UPDATE_FUNERAL:"https://www.cristoreyangol.cl:8080/createRecord/updateFuneral",REACT_APP_SERVER_URL_UPDATE_PERSONALES:"https://www.cristoreyangol.cl:8080/createRecord/updatePersonales"}.REACT_APP_API_REGISTER_URL,{userName:r,password:a});case 4:return s=e.sent,u=s.data,e.abrupt("return",{success:200===u.status});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.n.getItem("token");case 3:if(e.sent){e.next=6;break}return e.abrupt("return",{success:!1});case 6:return e.abrupt("return",{success:!0,user:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(alert("logout"),e.prev=1,s.n.removeItem("token")){e.next=5;break}return e.abrupt("return",{success:!1});case 5:return e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),l={login:u,register:o,checkToken:p,logout:i}},1930:function(e,t,r){r.d(t,{l:function(){return d}});var n=r(4165),a=r(5861),s=r(1243),c=r(8058),u=r(2764),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.n.getItem("token"),e.prev=1,e.next=4,s.Z.get(t,{headers:{Authorization:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Request no autorizado"!==e.t0.response.statusText){e.next=14;break}return c.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.n.getItem("token"),e.prev=1,e.next=4,s.Z.post(t,r,{headers:{Authorization:a}});case 4:return o=e.sent,e.abrupt("return",o);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Unauthorized"!==e.t0.response.statusText){e.next=14;break}return c.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.n.getItem("token"),e.prev=1,e.next=4,s.Z.post(t,r,{headers:{"Content-Type":"multipart/form-data",Authorization:a}});case 4:return o=e.sent,e.abrupt("return",o);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Unauthorized"!==e.t0.response.statusText){e.next=14;break}return c.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.n.getItem("token"),e.prev=1,e.next=4,s.Z.delete(t,{headers:{Authorization:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status||"Request no autorizado"!==e.t0.response.statusText){e.next=14;break}return c.e.logout(),window.location.replace("/"),e.abrupt("return");case 14:console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d={get:o,post:p,postImage:i,remove:l}},2764:function(e,t,r){r.d(t,{n:function(){return n}});var n={getItem:function(e){var t=sessionStorage.getItem(e);return JSON.parse(t)},setItem:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},removeItem:function(e){return sessionStorage.removeItem(e)},clearAll:function(){return sessionStorage.clear()}}},8269:function(e,t,r){r.d(t,{$:function(){return v}});var n=r(4165),a=r(5861),s=r(1930),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.get("https://www.cristoreyangol.cl:8080/record");case 3:return t=e.sent,r=t.data,e.abrupt("return",{success:!0,data:r.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.get("".concat("https://www.cristoreyangol.cl:8080/record","/").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",{success:!0,data:a.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("".concat("https://www.cristoreyangol.cl:8080/record/updateMensajes","/").concat(t),r);case 3:return a=e.sent,c=a.data,e.abrupt("return",{success:!0,data:c.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,c,u,o,p,i,l){var d,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("https://www.cristoreyangol.cl:8080/createRecord/add",{date:t,nombre:r,segundoNombre:a,paterno:c,materno:u,lugarVelatorio:o,lugarResponso:p,fechaResponso:i,lugarCementerio:l});case 3:return d=e.sent,f=d.data,e.abrupt("return",{success:!0,data:f.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r,n,a,s,c,u,o,p){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.postImage("".concat("https://www.cristoreyangol.cl:8080/createRecord/addImage","/").concat(t),r);case 3:return a=e.sent,c=a.data,e.abrupt("return",{success:!0,data:c.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updatePersonales","/").concat(t),{update:r});case 3:return a=e.sent,c=a.data,e.abrupt("return",{success:!0,data:c.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.post("".concat("https://www.cristoreyangol.cl:8080/createRecord/updateFuneral","/").concat(t),{update:r});case 3:return a=e.sent,c=a.data,e.abrupt("return",{success:!0,data:c.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.l.remove("".concat("https://www.cristoreyangol.cl:8080/createRecord","/delete/").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",{success:!0,data:a.data});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v={getAllRecords:c,getFilteredRecord:u,addMesagge:o,addObituario:p,addImage:i,updateData:l,updateFuneral:d,removeRecord:f}},3220:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),s=r(885),c=r(2791),u=r(1087),o=r(8269),p=r(184);t.default=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),r=t[0],i=t[1];(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.$.getAllRecords();case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var l=(0,p.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})});return(0,p.jsx)(p.Fragment,{children:null===r||void 0===r?void 0:r.map((function(e){return(0,p.jsxs)("div",{className:"decesoCard",children:[(0,p.jsxs)(u.OL,{to:"/obituario/".concat(e._id),className:"decesoPersona",children:[(0,p.jsx)("div",{className:"decesoImagen",children:(0,p.jsx)("img",{src:e.img,alt:""})}),(0,p.jsxs)("h5",{className:"decesoNombre",children:[e.nombre," ",e.paterno]})]}),(0,p.jsxs)("div",{className:"decesoDate",children:[l,(0,p.jsx)("p",{className:"decesoFecha",children:e.date})]})]},e._id)}))})}}}]);
//# sourceMappingURL=220.52e80ae7.chunk.js.map