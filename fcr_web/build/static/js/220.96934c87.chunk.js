"use strict";(self.webpackChunkfcr_web=self.webpackChunkfcr_web||[]).push([[220],{8058:function(t,e,r){r.d(e,{e:function(){return l}});var n=r(4165),a=r(5861),s=r(2764),c=r(1930),u=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){var a,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.l.post("http://localhost:8080/user/auth",{mail:e,password:r});case 3:if(a=t.sent,200!==(u=a.data).status||!u.data){t.next=8;break}return s.n.setItem("token",u.data),t.abrupt("return",{success:!0,user:u.data.user});case 8:return t.abrupt("return",{success:!1});case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a,s,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.userName,a=e.password,t.prev=1,t.next=4,c.l.post({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GTM_ID:"G-80E5Y9MEL8",REACT_APP_PASSOBITUARIO:"c#9o9te4JLCnm5?A",REACT_APP_SERVER_URL_ADD:"http://localhost:8080/createRecord/add",REACT_APP_SERVER_URL_ADDIMAGE:"http://localhost:8080/createRecord/addImage",REACT_APP_SERVER_URL_DELETE:"http://localhost:8080/createRecord",REACT_APP_SERVER_URL_LOGIN:"http://localhost:8080/user/auth",REACT_APP_SERVER_URL_MESAGGES:"http://localhost:8080/record/updateMensajes",REACT_APP_SERVER_URL_RECORD:"http://localhost:8080/record",REACT_APP_SERVER_URL_UPDATE_FUNERAL:"http://localhost:8080/createRecord/updateFuneral",REACT_APP_SERVER_URL_UPDATE_PERSONALES:"http://localhost:8080/createRecord/updatePersonales"}.REACT_APP_API_REGISTER_URL,{userName:r,password:a});case 4:return s=t.sent,u=s.data,t.abrupt("return",{success:200===u.status});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{success:!1});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.n.getItem("token");case 3:if(t.sent){t.next=6;break}return t.abrupt("return",{success:!1});case 6:return t.abrupt("return",{success:!0,user:!0});case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(alert("logout"),t.prev=1,s.n.removeItem("token")){t.next=5;break}return t.abrupt("return",{success:!1});case 5:return t.abrupt("return",{success:!0});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),l={login:u,register:o,checkToken:p,logout:i}},1930:function(t,e,r){r.d(e,{l:function(){return d}});var n=r(4165),a=r(5861),s=r(1243),c=r(8058),u=r(2764),o=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.n.getItem("token"),t.prev=1,t.next=4,s.Z.get(e,{headers:{Authorization:r}});case 4:return a=t.sent,t.abrupt("return",a);case 8:if(t.prev=8,t.t0=t.catch(1),401!==t.t0.response.status||"Request no autorizado"!==t.t0.response.statusText){t.next=14;break}return c.e.logout(),window.location.replace("/"),t.abrupt("return");case 14:console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){var a,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=u.n.getItem("token"),t.prev=1,t.next=4,s.Z.post(e,r,{headers:{Authorization:a}});case 4:return o=t.sent,t.abrupt("return",o);case 8:if(t.prev=8,t.t0=t.catch(1),401!==t.t0.response.status||"Unauthorized"!==t.t0.response.statusText){t.next=14;break}return c.e.logout(),window.location.replace("/"),t.abrupt("return");case 14:console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){var a,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=u.n.getItem("token"),t.prev=1,t.next=4,s.Z.post(e,r,{headers:{"Content-Type":"multipart/form-data",Authorization:a}});case 4:return o=t.sent,t.abrupt("return",o);case 8:if(t.prev=8,t.t0=t.catch(1),401!==t.t0.response.status||"Unauthorized"!==t.t0.response.statusText){t.next=14;break}return c.e.logout(),window.location.replace("/"),t.abrupt("return");case 14:console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.n.getItem("token"),t.prev=1,t.next=4,s.Z.delete(e,{headers:{Authorization:r}});case 4:return a=t.sent,t.abrupt("return",a);case 8:if(t.prev=8,t.t0=t.catch(1),401!==t.t0.response.status||"Request no autorizado"!==t.t0.response.statusText){t.next=14;break}return c.e.logout(),window.location.replace("/"),t.abrupt("return");case 14:console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),d={get:o,post:p,postImage:i,remove:l}},2764:function(t,e,r){r.d(e,{n:function(){return n}});var n={getItem:function(t){var e=sessionStorage.getItem(t);return JSON.parse(e)},setItem:function(t,e){sessionStorage.setItem(t,JSON.stringify(e))},removeItem:function(t){return sessionStorage.removeItem(t)},clearAll:function(){return sessionStorage.clear()}}},8269:function(t,e,r){r.d(e,{$:function(){return f}});var n=r(4165),a=r(5861),s=r(1930),c=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.get("http://localhost:8080/record");case 3:return e=t.sent,r=e.data,t.abrupt("return",{success:!0,data:r.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.get("".concat("http://localhost:8080/record","/").concat(e));case 3:return r=t.sent,a=r.data,t.abrupt("return",{success:!0,data:a.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){var a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.post("".concat("http://localhost:8080/record/updateMensajes","/").concat(e),r);case 3:return a=t.sent,c=a.data,t.abrupt("return",{success:!0,data:c.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r,a,c,u,o,p,i,l){var d,h;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.post("http://localhost:8080/createRecord/add",{date:e,nombre:r,segundoNombre:a,paterno:c,materno:u,lugarVelatorio:o,lugarResponso:p,fechaResponso:i,lugarCementerio:l});case 3:return d=t.sent,h=d.data,t.abrupt("return",{success:!0,data:h.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r,n,a,s,c,u,o,p){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){var a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.postImage("".concat("http://localhost:8080/createRecord/addImage","/").concat(e),r);case 3:return a=t.sent,c=a.data,t.abrupt("return",{success:!0,data:c.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){var a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.post("".concat("http://localhost:8080/createRecord/updatePersonales","/").concat(e),{update:r});case 3:return a=t.sent,c=a.data,t.abrupt("return",{success:!0,data:c.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){var a,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.post("".concat("http://localhost:8080/createRecord/updateFuneral","/").concat(e),{update:r});case 3:return a=t.sent,c=a.data,t.abrupt("return",{success:!0,data:c.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.l.remove("".concat("http://localhost:8080/createRecord","/delete/").concat(e));case 3:return r=t.sent,a=r.data,t.abrupt("return",{success:!0,data:a.data});case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",{success:!1});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f={getAllRecords:c,getFilteredRecord:u,addMesagge:o,addObituario:p,addImage:i,updateData:l,updateFuneral:d,removeRecord:h}},3220:function(t,e,r){r.r(e);var n=r(4165),a=r(5861),s=r(885),c=r(2791),u=r(1087),o=r(8269),p=r(184);e.default=function(){var t=(0,c.useState)([]),e=(0,s.Z)(t,2),r=e[0],i=e[1];(0,c.useEffect)((function(){function t(){return(t=(0,a.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.$.getAllRecords();case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r]);var l=(0,p.jsx)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus-lg",viewBox:"0 0 16 16",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})});return(0,p.jsx)(p.Fragment,{children:null===r||void 0===r?void 0:r.map((function(t){return(0,p.jsxs)("div",{className:"decesoCard",children:[(0,p.jsxs)(u.OL,{to:"/obituario/".concat(t._id),className:"decesoPersona",children:[(0,p.jsx)("div",{className:"decesoImagen",children:(0,p.jsx)("img",{src:t.img,alt:""})}),(0,p.jsxs)("h5",{className:"decesoNombre",children:[t.nombre," ",t.paterno]})]}),(0,p.jsxs)("div",{className:"decesoDate",children:[l,(0,p.jsx)("p",{className:"decesoFecha",children:t.date})]})]},t._id)}))})}}}]);
//# sourceMappingURL=220.96934c87.chunk.js.map