(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},163:function(e,t,n){},167:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(28),s=n.n(c),o=(n(134),n(135),n(8)),i=(n(136),n(22)),l=n(10),u=n(281),j=n(282),d=n(120),p=function(){return Object(a.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(d.a,{className:"text-center py-3",children:"Copyright \xa9 Note Keeper"})})})})},b=n(287),h=n(289),O=n(286),f=n(124),x=n(285),g=n(7),m=n(11),v=n.n(m),y=n(24),S="USER_LOGIN_REQUEST",E="USER_LOGIN_SUCCESS",C="USER_LOGIN_FAIL",I="USER_LOGOUT",w="USER_REGISTER_REQUEST",N="USER_REGISTER_SUCCESS",L="USER_REGISTER_FAIL",T="USER_UPDATE_REQUEST",_="USER_UPDATE_SUCCESS",U="USER_UPDATE_FAIL",P=n(27),k=n.n(P);var R=function(e){var t=e.setSearch,n=Object(g.b)(),c=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){}),[c]),Object(a.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(b.a.Brand,{href:"/",children:"Note Keeper"}),Object(a.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsx)(h.a,{className:"m-auto",children:c&&Object(a.jsx)(O.a,{inline:!0,children:Object(a.jsx)(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(a.jsx)(h.a,{children:c?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h.a.Link,{href:"/mynotes",children:"My Notes"}),Object(a.jsxs)(x.a,{title:"".concat(c.name),id:"collasible-nav-dropdown",children:[Object(a.jsx)(x.a.Item,{href:"/profile",children:"My Profile"}),Object(a.jsx)(x.a.Divider,{}),Object(a.jsx)(x.a.Item,{onClick:function(){n(function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:I});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})]}):Object(a.jsx)(h.a.Link,{href:"/login",children:"Login"})})]})]})})},A=n(126);n(163);var D=function(e){var t=e.history,n=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"intro-text",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"title",children:"Welcome to Note Keeper"}),Object(a.jsx)("p",{className:"subtitle",children:"One Safe place for all your notes."})]}),Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)(i.b,{to:"/login",children:Object(a.jsx)(A.a,{size:"lg",className:"landingbutton",children:"Login"})}),Object(a.jsx)(i.b,{to:"/register",children:Object(a.jsx)(A.a,{variant:"outline-primary",size:"lg",className:"landingbutton",children:"Signup"})})]})]})})})})},G=n(288),F=n(291),B=n(284);n(167);var z=function(e){var t=e.children,n=e.title;return Object(a.jsx)("div",{className:"mainback",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"page",children:[n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"heading",children:n}),Object(a.jsx)("hr",{})]}),t]})})})})},H=n(45),Q=n.n(H),J="NOTES_LIST_REQUEST",K="NOTES_LIST_SUCCESS",q="NOTES_LIST_FAIL",M="NOTES_CREATE_REQUEST",W="NOTES_CREATE_SUCCESS",V="NOTES_CREATE_FAIL",X="NOTES_UPDATE_REQUEST",Y="NOTES_UPDATE_SUCCESS",Z="NOTES_UPDATE_FAIL",$="NOTES_DELETE_REQUEST",ee="NOTES_DELETE_SUCCESS",te="NOTES_DELETE_FAIL",ne=function(e){return function(){var t=Object(y.a)(v.a.mark((function t(n,a){var r,c,s,o,i,l;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:$}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,k.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:ee,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:te,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},ae=n(283);var re=function(e){var t=e.size,n=void 0===t?100:t;return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(a.jsx)(ae.a,{style:{width:n,height:n},animation:"border"})})},ce=n(290),se=function(e){var t=e.variant,n=void 0===t?"info":t,r=e.children;return Object(a.jsx)(ce.a,{variant:n,style:{fontSize:20},children:Object(a.jsx)("strong",{children:r})})};var oe=function(e){var t=e.history,n=e.search,c=Object(g.b)(),s=Object(g.c)((function(e){return e.noteList})),o=s.loading,l=s.error,u=s.notes,j=Object(g.c)((function(e){return e.userLogin})).userInfo,d=Object(g.c)((function(e){return e.noteDelete})),p=d.loading,b=d.error,h=d.success,O=Object(g.c)((function(e){return e.noteCreate})).success,f=Object(g.c)((function(e){return e.noteUpdate})).success;return Object(r.useEffect)((function(){c(function(){var e=Object(y.a)(v.a.mark((function e(t,n){var a,r,c,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:J}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,k.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:K,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:q,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),j||t.push("/")}),[c,t,j,h,O,f]),Object(a.jsxs)(z,{title:"Welcome Back ".concat(j&&j.name,".."),children:[console.log(u),Object(a.jsx)(i.b,{to:"/createnote",children:Object(a.jsx)(A.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create new Note"})}),l&&Object(a.jsx)(se,{variant:"danger",children:l}),b&&Object(a.jsx)(se,{variant:"danger",children:b}),o&&Object(a.jsx)(re,{}),p&&Object(a.jsx)(re,{}),u&&u.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(a.jsx)(G.a,{children:Object(a.jsxs)(F.a,{style:{margin:10},children:[Object(a.jsxs)(F.a.Header,{style:{display:"flex"},children:[Object(a.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(a.jsx)(G.a.Toggle,{as:F.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(A.a,{href:"/note/".concat(e._id),children:"Edit"}),Object(a.jsx)(A.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&c(ne(t)));var t},children:"Delete"})]})]}),Object(a.jsx)(G.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(F.a.Body,{children:[Object(a.jsx)("h4",{children:Object(a.jsxs)(B.a,{variant:"success",children:["Category - ",e.category]})}),Object(a.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(a.jsx)(Q.a,{children:e.content}),Object(a.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(a.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})};var ie=function(e){var t=e.match,n=e.history,c=Object(r.useState)(),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(),j=Object(o.a)(u,2),d=j[0],p=j[1],b=Object(r.useState)(),h=Object(o.a)(b,2),f=h[0],x=h[1],m=Object(r.useState)(""),S=Object(o.a)(m,2),E=S[0],C=S[1],I=Object(g.b)(),w=Object(g.c)((function(e){return e.noteUpdate})),N=w.loading,L=w.error,T=Object(g.c)((function(e){return e.noteDelete})),_=T.loading,U=T.error;return Object(r.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,l(a.title),p(a.content),x(a.category),C(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,E]),Object(a.jsx)(z,{title:"Edit Note",children:Object(a.jsxs)(F.a,{children:[Object(a.jsx)(F.a.Header,{children:"Edit your Note"}),Object(a.jsx)(F.a.Body,{children:Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),I(function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c,s){var o,i,l,u,j,d;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:X}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,k.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:Y,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:Z,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,i,d,f)),i&&d&&f&&(l(""),x(""),p(""),n.push("/mynotes"))},children:[_&&Object(a.jsx)(re,{}),L&&Object(a.jsx)(se,{variant:"danger",children:L}),U&&Object(a.jsx)(se,{variant:"danger",children:U}),Object(a.jsxs)(O.a.Group,{controlId:"title",children:[Object(a.jsx)(O.a.Label,{children:"Title"}),Object(a.jsx)(O.a.Control,{type:"title",placeholder:"Enter the title",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Content"}),Object(a.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:d,onChange:function(e){return p(e.target.value)}})]}),d&&Object(a.jsxs)(F.a,{children:[Object(a.jsx)(F.a.Header,{children:"Note Preview"}),Object(a.jsx)(F.a.Body,{children:Object(a.jsx)(Q.a,{children:d})})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Category"}),Object(a.jsx)(O.a.Control,{type:"content",placeholder:"Enter the Category",value:f,onChange:function(e){return x(e.target.value)}})]}),N&&Object(a.jsx)(re,{size:50}),Object(a.jsx)(A.a,{variant:"primary",type:"submit",children:"Update Note"}),Object(a.jsx)(A.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&I(ne(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(a.jsxs)(F.a.Footer,{className:"text-muted",children:["Updated on - ",E.substring(0,10)]})]})})};n(273);var le=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],l=c[1],u=Object(r.useState)(""),p=Object(o.a)(u,2),b=p[0],h=p[1],f=Object(g.b)(),x=Object(g.c)((function(e){return e.userLogin})),m=x.loading,I=x.error,w=x.userInfo;return Object(r.useEffect)((function(){w&&t.push("/mynotes")}),[t,w]),Object(a.jsx)(z,{title:"LOGIN",children:Object(a.jsxs)("div",{className:"loginContainer",children:[I&&Object(a.jsx)(se,{variant:"danger",children:I}),m&&Object(a.jsx)(re,{}),Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var n=Object(y.a)(v.a.mark((function n(a){var r,c,s;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:S}),r={headers:{"Content-type":"application/json"}},n.next=5,k.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:E,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:C,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(s,b))},children:[Object(a.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(O.a.Label,{children:"Email address"}),Object(a.jsx)(O.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",value:b,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(a.jsx)(A.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(a.jsx)(j.a,{className:"py-3",children:Object(a.jsxs)(d.a,{children:["New Customer ? ",Object(a.jsx)(i.b,{to:"/register",children:"Register Here"})]})})]})})};n(274);var ue=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],l=c[1],u=Object(r.useState)(""),p=Object(o.a)(u,2),b=p[0],h=p[1],f=Object(r.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),x=Object(o.a)(f,2),m=x[0],S=x[1],C=Object(r.useState)(""),I=Object(o.a)(C,2),T=I[0],_=I[1],U=Object(r.useState)(""),P=Object(o.a)(U,2),R=P[0],D=P[1],G=Object(r.useState)(null),F=Object(o.a)(G,2),B=F[0],H=F[1],Q=Object(r.useState)(null),J=Object(o.a)(Q,2),K=J[0],q=J[1],M=Object(g.b)(),W=Object(g.c)((function(e){return e.userRegister})),V=W.loading,X=W.error,Y=W.userInfo;return Object(r.useEffect)((function(){Y&&t.push("/")}),[t,Y]),Object(a.jsx)(z,{title:"REGISTER",children:Object(a.jsxs)("div",{className:"loginContainer",children:[X&&Object(a.jsx)(se,{variant:"danger",children:X}),B&&Object(a.jsx)(se,{variant:"danger",children:B}),V&&Object(a.jsx)(re,{}),Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),T!==R?H("Passwords do not match"):M(function(e,t,n,a){return function(){var r=Object(y.a)(v.a.mark((function r(c){var s,o,i;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:w}),s={headers:{"Content-type":"application/json"}},r.next=5,k.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:N,payload:i}),c({type:E,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:L,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(b,s,T,m))},children:[Object(a.jsxs)(O.a.Group,{controlId:"name",children:[Object(a.jsx)(O.a.Label,{children:"Name"}),Object(a.jsx)(O.a.Control,{type:"name",value:b,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(O.a.Label,{children:"Email address"}),Object(a.jsx)(O.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",value:T,placeholder:"Password",onChange:function(e){return _(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(O.a.Label,{children:"Confirm Password"}),Object(a.jsx)(O.a.Control,{type:"password",value:R,placeholder:"Confirm Password",onChange:function(e){return D(e.target.value)}})]}),K&&Object(a.jsx)(se,{variant:"danger",children:K}),Object(a.jsxs)(O.a.Group,{controlId:"pic",children:[Object(a.jsx)(O.a.Label,{children:"Profile Picture"}),Object(a.jsx)(O.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return q("Please Select an Image");if(q(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return q("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){S(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(a.jsx)(A.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(a.jsx)(j.a,{className:"py-3",children:Object(a.jsxs)(d.a,{children:["Have an Account ? ",Object(a.jsx)(i.b,{to:"/login",children:"Login"})]})})]})})};var je=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(o.a)(l,2),j=u[0],d=u[1],p=Object(r.useState)(""),b=Object(o.a)(p,2),h=b[0],f=b[1],x=Object(g.b)(),m=Object(g.c)((function(e){return e.noteCreate})),S=m.loading,E=m.error,C=m.note;console.log(C);var I=function(){i(""),f(""),d("")};return Object(r.useEffect)((function(){}),[]),Object(a.jsx)(z,{title:"Create a Note",children:Object(a.jsxs)(F.a,{children:[Object(a.jsx)(F.a.Header,{children:"Create a new Note"}),Object(a.jsx)(F.a.Body,{children:Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),x(function(e,t,n){return function(){var a=Object(y.a)(v.a.mark((function a(r,c){var s,o,i,l,u,j;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:M}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,k.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:W,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:V,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(s,j,h)),s&&j&&h&&(I(),t.push("/mynotes"))},children:[E&&Object(a.jsx)(se,{variant:"danger",children:E}),Object(a.jsxs)(O.a.Group,{controlId:"title",children:[Object(a.jsx)(O.a.Label,{children:"Title"}),Object(a.jsx)(O.a.Control,{type:"title",value:s,placeholder:"Enter the title",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Content"}),Object(a.jsx)(O.a.Control,{as:"textarea",value:j,placeholder:"Enter the content",rows:4,onChange:function(e){return d(e.target.value)}})]}),j&&Object(a.jsxs)(F.a,{children:[Object(a.jsx)(F.a.Header,{children:"Note Preview"}),Object(a.jsx)(F.a.Body,{children:Object(a.jsx)(Q.a,{children:j})})]}),Object(a.jsxs)(O.a.Group,{controlId:"content",children:[Object(a.jsx)(O.a.Label,{children:"Category"}),Object(a.jsx)(O.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return f(e.target.value)}})]}),S&&Object(a.jsx)(re,{size:50}),Object(a.jsx)(A.a,{type:"submit",variant:"primary",children:"Create Note"}),Object(a.jsx)(A.a,{className:"mx-2",onClick:I,variant:"danger",children:"Reset Feilds"})]})}),Object(a.jsxs)(F.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})},de=(n(275),function(e){e.location;var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(o.a)(l,2),p=u[0],b=u[1],h=Object(r.useState)(),f=Object(o.a)(h,2),x=f[0],m=f[1],S=Object(r.useState)(""),C=Object(o.a)(S,2),I=C[0],w=C[1],N=Object(r.useState)(""),L=Object(o.a)(N,2),P=L[0],R=L[1],D=Object(r.useState)(),G=Object(o.a)(D,2),F=G[0],B=G[1],H=Object(g.b)(),Q=Object(g.c)((function(e){return e.userLogin})).userInfo,J=Object(g.c)((function(e){return e.userUpdate})),K=J.loading,q=J.error,M=J.success;Object(r.useEffect)((function(){Q?(i(Q.name),b(Q.email),m(Q.pic)):t.push("/")}),[t,Q]);return Object(a.jsx)(z,{title:"EDIT PROFILE",children:Object(a.jsx)("div",{children:Object(a.jsxs)(j.a,{className:"profileContainer",children:[Object(a.jsx)(d.a,{md:6,children:Object(a.jsxs)(O.a,{onSubmit:function(e){var t;e.preventDefault(),H((t={name:s,email:p,password:I,pic:x},function(){var e=Object(y.a)(v.a.mark((function e(n,a){var r,c,s,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:T}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,k.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:_,payload:i}),n({type:E,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:U,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[K&&Object(a.jsx)(re,{}),M&&Object(a.jsx)(se,{variant:"success",children:"Updated Successfully"}),q&&Object(a.jsx)(se,{variant:"danger",children:q}),Object(a.jsxs)(O.a.Group,{controlId:"name",children:[Object(a.jsx)(O.a.Label,{children:"Name"}),Object(a.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email Address"}),Object(a.jsx)(O.a.Control,{type:"email",placeholder:"Enter Email",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"password",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:I,onChange:function(e){return w(e.target.value)}})]}),Object(a.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(O.a.Label,{children:"Confirm Password"}),Object(a.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",value:P,onChange:function(e){return R(e.target.value)}})]})," ",F&&Object(a.jsx)(se,{variant:"danger",children:F}),Object(a.jsxs)(O.a.Group,{controlId:"pic",children:[Object(a.jsx)(O.a.Label,{children:"Change Profile Picture"}),Object(a.jsx)(O.a.File,{onChange:function(e){return function(e){if(B(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return B("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){m(e.url.toString()),console.log(x)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(a.jsx)(A.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(a.jsx)(d.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(a.jsx)("img",{src:x,alt:s,className:"profilePic"})})]})})})});var pe=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(R,{setSearch:function(e){return c(e)}}),Object(a.jsxs)("main",{className:"App",children:[Object(a.jsx)(l.a,{path:"/",component:D,exact:!0}),Object(a.jsx)(l.a,{path:"/login",component:le}),Object(a.jsx)(l.a,{path:"/register",component:ue}),Object(a.jsx)(l.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(a.jsx)(oe,{search:n,history:t})}}),Object(a.jsx)(l.a,{path:"/note/:id",component:ie}),Object(a.jsx)(l.a,{path:"/createnote",component:je}),";",Object(a.jsx)(l.a,{path:"/profile",component:de})]}),Object(a.jsx)(p,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,292)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},he=n(39),Oe=n(127),fe=n(128),xe=Object(he.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return{loading:!0};case K:return{loading:!1,notes:t.payload};case q:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case E:return{loading:!1,userInfo:t.payload};case C:return{loading:!1,error:t.payload};case I:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case N:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case W:return{loading:!1,success:!0};case V:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return{loading:!0};case ee:return{loading:!1,success:!0};case te:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case Y:return{loading:!1,success:!0};case Z:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case _:return{loading:!1,userInfo:t.payload,success:!0};case U:return{loading:!1,error:t.payload,success:!1};default:return e}}}),ge={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},me=[Oe.a],ve=Object(he.createStore)(xe,ge,Object(fe.composeWithDevTools)(he.applyMiddleware.apply(void 0,me)));s.a.render(Object(a.jsx)(g.a,{store:ve,children:Object(a.jsx)(pe,{})}),document.getElementById("root")),be()}},[[276,1,2]]]);
//# sourceMappingURL=main.89cb5d07.chunk.js.map