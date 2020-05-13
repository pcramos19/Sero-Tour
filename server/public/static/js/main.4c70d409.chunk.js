(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{107:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=(a(89),a(29)),i=a(34),s=a(2),u=a(3),m=a(5),p=a(6),d=a(7),h=(a(90),a(12)),f=a(11),g=a.n(f),E=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then((function(e){return e.data}))},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://ironserotonin.herokuapp.com/api","/auth"),withCredentials:!0})},v=(a(107),a(8)),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then((function(e){a.setState({username:"",password:""}),a.props.getUser(e.user)})).catch((function(e){a.setState({username:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.state={username:"",password:""},a.service=new E,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login-box"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"form"},r.a.createElement("img",{src:"../../../logo_trans.png",alt:""}),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("input",{type:"text",name:"name",placeholder:"Nombre",value:this.state.name,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("input",{type:"text",name:"surname",placeholder:"Apellidos",value:this.state.surname,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",value:this.state.password,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("h5",null,this.state.error?"El usuario ya existe":""),r.a.createElement("input",{type:"submit",value:"Sign up"})),r.a.createElement("p",null,"\xbfYa tienes una cuenta? ",r.a.createElement(v.b,{to:"/login"},"Inicia sesi\xf3n")))))}}]),t}(n.Component),y=(a(112),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then((function(e){a.setState({username:t,password:n,error:!1},(function(){a.props.getUser(a.state)})),a.props.getUser(e)})).catch((function(e){a.setState({username:t,password:n,error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.state={username:"",password:""},a.service=new E,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login-box"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"form"},r.a.createElement("img",{src:"../../../logo_trans.png",alt:""}),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"Usuario",value:this.state.username,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",value:this.state.password,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("h5",null,this.state.error?"Usuario o contrase\xf1a incorrecta":""),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"\xbfA\xfan no tienes cuenta? ",r.a.createElement(v.b,{to:"/signup"},"Reg\xedstrate")))))}}]),t}(n.Component)),O=(a(113),a(114),a(26)),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){a.props.logout()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.userInSession?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("div",{className:"log-name"},r.a.createElement(v.b,{to:"/home"},r.a.createElement("img",{src:"../../../logo_trans.png",alt:"Sero Tour"}))),r.a.createElement(O.a,null,r.a.createElement(O.a.Toggle,{variant:"none"},r.a.createElement("img",{src:this.props.userInSession.img,alt:this.props.userInSession.username})),r.a.createElement(O.a.Menu,null,r.a.createElement(O.a.Item,{href:"#/action-1"},r.a.createElement(v.b,{className:"pedro",to:"/profile"}," ",this.props.userInSession.name)),r.a.createElement(O.a.Item,{href:"#/action-2"},r.a.createElement(v.b,{className:"pedro",to:"/fav"}," Favoritos")),r.a.createElement(O.a.Item,{href:"#/action-2"},r.a.createElement(v.b,{className:"pedro",to:"/tour-created"}," Mis Tours")),r.a.createElement(O.a.Item,{href:"#/action-2"},r.a.createElement(v.b,{className:"pedro"}," Configuraci\xf3n")),r.a.createElement(O.a.Divider,null),r.a.createElement(O.a.Item,{href:"#/action-3"},r.a.createElement(v.b,{className:"pedro log",to:"",onClick:this.handleLogout},"Cerrar sesi\xf3n"))))):r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-style"},r.a.createElement("img",{src:"../../../logo.jpg",alt:"Serotonin"})))}}]),t}(n.Component),C=(a(116),a(31)),S=a.n(C),k=a(40),N=a.n(k),w=a(39),I=a.n(w);var U=function(e){return e.tours.map((function(e,t){return r.a.createElement("div",{className:"results-wrapper",key:t},r.a.createElement(v.b,{to:"/tour/".concat(e._id)},r.a.createElement("img",{src:e.img,alt:e.title})),r.a.createElement("div",{className:"results-wrapper-text"},r.a.createElement("div",null,r.a.createElement(v.b,{className:"pedro",to:"/tour/".concat(e._id)},r.a.createElement("h1",{key:t},e.title))),r.a.createElement("div",{className:"rating"},r.a.createElement(S.a,null),r.a.createElement(S.a,null),r.a.createElement(S.a,null),r.a.createElement(I.a,null),r.a.createElement(N.a,null))))}))},x=(a(118),a(41)),_=a.n(x),A=a(70),F=a.n(A);a(138);var D=function(){return r.a.createElement("div",{className:"gmarker"},r.a.createElement(F.a,null))},L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={center:{lat:40.4167754,lng:-3.7037901999999576},tours:[],zoom:15},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_updateAllTasks",value:function(){var e=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/toursMini")).then((function(t){t=t.data,e.setState(Object(c.a)({},e.state,{tours:t}))}))}},{key:"componentDidMount",value:function(){this._updateAllTasks()}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%",width:"100%"}},r.a.createElement(_.a,{bootstrapURLKeys:{key:"AIzaSyCm0meO5cjbh70YvG6BIQVh5GqRHXHG7Uw"},defaultCenter:this.state.center,defaultZoom:this.state.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){e.map,e.maps}},this.state.tours.map((function(e){return r.a.createElement(D,{lat:e.location.lat,lng:e.location.lng,text:"My Marker"})}))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={tours:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_updateAllTasks",value:function(){var e=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/toursMini")).then((function(t){t=t.data,e.setState(Object(c.a)({},e.state,{tours:t}))}))}},{key:"componentDidMount",value:function(){this._updateAllTasks()}},{key:"render",value:function(){var e=this.state.tours;return r.a.createElement("div",{className:"mapa"},r.a.createElement(L,e))}}]),t}(n.Component),M=(a(139),a(73)),R=a.n(M),q=a(32),P=a.n(q),G=a(178),z=a(72),B=a.n(z),W=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{url:this.props.Url,quote:"".concat(this.props.Titulo," - ").concat(this.props.Resumen)},r.a.createElement(B.a,{round:!0,size:22})))}}]),t}(n.Component),H=a(175);a(176),Object(H.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));var V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={tour:null,comments:null,open:!1,fav:!1,urlPost:"ironserotonin.herokuapp.com",titlePost:"Detalle Tour",resumenPost:"Este es el detalle"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_updateTour",value:function(){var e=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/tour/").concat(this.props.tourId)).then((function(t){e.setState({tour:t.data})}))}},{key:"switchFav",value:function(){this.setState({fav:!this.state.fav})}},{key:"switchMenu",value:function(){this.setState({open:!this.state.open})}},{key:"componentDidMount",value:function(){this._updateTour()}},{key:"_comments",value:function(){console.log("entra"),this.state.tour.comments.map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.description))}))}},{key:"render",value:function(){var e=this;if(this.state.tour){var t=this.state.tour,a=t.title,n=t.img,l=t._id,o=t.languages,c=t.duration,i=t.description,s=t.comments;return r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"detail-description"},r.a.createElement("h1",null,a),r.a.createElement("img",{src:n,alt:a}),r.a.createElement("div",{className:"detail-start"},r.a.createElement("div",null,r.a.createElement(v.b,{className:"pedro",to:"/start-tour/".concat(l)},r.a.createElement("button",null,"Iniciar Tour"))),r.a.createElement("div",{className:"icon-detail"},r.a.createElement("div",{onClick:function(){return e.switchFav()}},this.state.fav?r.a.createElement(P.a,null):r.a.createElement(R.a,null)),r.a.createElement(W,{Url:this.state.urlPost,Titulo:this.state.titlePost,Resumen:this.state.resumenPost}))),r.a.createElement("div",{className:"into-detail"},r.a.createElement("h3",null,"Idioma: ",o),r.a.createElement("div",{className:"h3"},r.a.createElement(S.a,null),r.a.createElement(S.a,null),r.a.createElement(S.a,null),r.a.createElement(I.a,null),r.a.createElement(N.a,null)),r.a.createElement("h3",null,"Duraci\xf3n: ",c," min")),r.a.createElement("p",null,r.a.createElement("strong",null,"Descripci\xf3n")),r.a.createElement("p",null,i)),r.a.createElement("div",{className:"comments"},r.a.createElement("p",null,r.a.createElement("strong",{onClick:function(){return e.switchMenu()}},this.state.open?"Ocultar Comentarios":"Mostrar Comentarios")),this.state.open&&r.a.createElement("div",null,s.map((function(e){return r.a.createElement("div",{className:"comments-unique"},r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.description))})))))}return r.a.createElement("cirularProgress",null)}}]),t}(n.Component),Y=(a(143),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={title:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateForm",value:function(e){var t=e.target,a=t.title,n=t.value;console.log(n),this.props.searchBar(n),this.setState(Object(h.a)({},a,n))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"box"},r.a.createElement("div",{className:"container-1"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement("input",{type:"search",id:"search",value:this.state.title,title:"title",onChange:function(t){return e.updateForm(t)},placeholder:"Search..."})))}}]),t}(n.Component)),J=(a(144),a(177)),K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){a.props.logout()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"border"},r.a.createElement("img",{src:this.props.userInSession.img,alt:this.props.userInSession.name}),r.a.createElement("h1",null,this.props.userInSession.name),r.a.createElement("p",null,"Email: ",this.props.userInSession.email),r.a.createElement("p",null,"Usuario: @",this.props.userInSession.username),r.a.createElement("p",null,"Descripci\xf3n:"),r.a.createElement("p",null,this.props.userInSession.description)),r.a.createElement("div",{className:"configuration"},r.a.createElement("h4",null,"Cuenta"),r.a.createElement(v.b,{to:"/edit-profile"},r.a.createElement("p",null,"Editar perfil")),r.a.createElement(v.b,{to:"",onClick:this.handleLogout},r.a.createElement("h5",null,"Cerrar sesi\xf3n"))),r.a.createElement("div",{className:"configuration"},r.a.createElement("h4",null,"Preferencias de usuario"),r.a.createElement("div",{className:"checkbox"},r.a.createElement("p",null,"Vista previa elementos multimedia"),r.a.createElement(J.a,{color:"primary"})),r.a.createElement("div",{className:"checkbox"},r.a.createElement("p",null,"Usar altavoz"),r.a.createElement(J.a,{color:"primary"})),r.a.createElement("div",{className:"checkbox"},r.a.createElement("p",null,"Efectos de sonido"),r.a.createElement(J.a,{color:"primary"})),r.a.createElement("div",{className:"checkbox"},r.a.createElement("p",null,"Activar notificaciones"),r.a.createElement(J.a,{color:"primary"}))))}}]),t}(n.Component),Q=(a(145),a(33)),X=a.n(Q),Z=function e(){var t=this;Object(s.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e).then((function(e){return e.data}))},this.service=g.a.create({baseURL:"".concat("https://ironserotonin.herokuapp.com/api"),withCredentials:!0})},$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.img,n=a.state.name,r=a.state.username,l=a.state.email,o=a.state.description;g.a.post("".concat("https://ironserotonin.herokuapp.com/api","/edit-profile/").concat(a.props.userInSession._id),{img:t,name:n,username:r,email:l,description:o}).then((function(){a.setState({img:"",name:"",username:"",email:"",description:""},(function(){a.props.updateUser(),a.props.history.push("/profile")}))})).catch((function(e){a.setState({error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.handleFileUpload=function(e){var t=new FormData;t.append("img",e.target.files[0]),a.filesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.secure_url),a.setState({img:e.secure_url})})).catch((function(e){return console.log(e)}))},a.filesServices=new Z,a.state={img:"",name:"",username:"",email:"",description:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"form-edit",onSubmit:this.handleFormSubmit},r.a.createElement(X.a,null),r.a.createElement("input",{type:"file",placeholder:this.props.userInSession.img,id:"name",name:"img",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("label",null,"Nombre:"),r.a.createElement("input",{type:"text",placeholder:this.props.userInSession.name,id:"name",name:"name",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",null,"Usuario:"),r.a.createElement("input",{type:"text",placeholder:this.props.userInSession.username,id:"name",name:"username",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",placeholder:this.props.userInSession.email,id:"name",name:"email",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",null,"Descripci\xf3n:"),r.a.createElement("textarea",{type:"email",placeholder:this.props.userInSession.description,id:"name",name:"description",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("input",{type:"submit",value:"Guardar cambios"}))}}]),t}(n.Component),ee=a(74),te=a.n(ee),ae=a(75),ne=a.n(ae),re=a(76),le=a.n(re);a(146);function oe(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(v.b,{className:"pedro",to:"/home"},r.a.createElement(te.a,null)),r.a.createElement(v.b,{className:"pedro",to:"/mapa"},r.a.createElement(ne.a,null)),r.a.createElement(v.b,{className:"pedro",to:"/fav"},r.a.createElement(P.a,null)),r.a.createElement(v.b,{className:"pedro",to:"/new-tour"},r.a.createElement(le.a,null)))}a(147);var ce=a(77),ie=a.n(ce),se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={center:{lat:40.4167754,lng:-3.7037901999999576},tours:null,zoom:15},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.route?(console.log(this.props.route),r.a.createElement("div",{style:{height:"100%",width:"100%"}},r.a.createElement(_.a,{bootstrapURLKeys:{key:"AIzaSyCm0meO5cjbh70YvG6BIQVh5GqRHXHG7Uw"},defaultCenter:this.props.location,defaultZoom:this.state.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){e.map,e.maps}},this.props.route.map((function(e){return r.a.createElement("div",{className:"gmarker",lat:e.location.lat,lng:e.location.lng,text:"My Marker"},e.number)}))))):r.a.createElement("h1",null,"Cargando...")}}]),t}(n.Component),ue=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={tour:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_updateTour",value:function(){var e=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/tour/").concat(this.props.tourId)).then((function(t){e.setState({tour:t.data})}))}},{key:"componentDidMount",value:function(){this._updateTour()}},{key:"render",value:function(){if(this.state.tour){var e=this.state.tour,t=e.route,a=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mapa-start"},r.a.createElement(se,{route:t,location:a})),r.a.createElement("div",{className:"container-start"},r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",{className:"start",key:t},r.a.createElement("div",{className:"into-start"},r.a.createElement("div",{className:"into-start-text"},r.a.createElement("h1",null,t+1),r.a.createElement(v.b,{className:"pedro",to:{pathname:"/route/detail",state:{stage:e}}},"        ",r.a.createElement("h1",null,e.name))),r.a.createElement("div",null,r.a.createElement(ie.a,null))))})))))}return r.a.createElement("p",null,"Cargando...")}}]),t}(n.Component),me=a(24),pe=(a(148),a(78)),de=a.n(pe),he=a(79),fe=a.n(he),ge=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={stage:null,play:!0},a.url="https://res.cloudinary.com/dtdnbdupy/video/upload/v1584034050/folder-name/5052_cfhayy.mp3",a.audio=new Audio(a.url),a.togglePlay=a.togglePlay.bind(Object(me.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({stage:this.props.location.state.stage})}},{key:"togglePlay",value:function(){this.setState({play:!this.state.play}),console.log(this.audio),this.state.play?this.audio.play():this.audio.pause()}},{key:"render",value:function(){if(this.state.stage){var e=this.state.stage,t=e.image,a=e.name,n=e.description;return r.a.createElement("div",{className:"stage"},r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("div",{className:"audio-stage"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.togglePlay},this.state.play?r.a.createElement(de.a,null):r.a.createElement(fe.a,null))),r.a.createElement("div",null,r.a.createElement("h1",null,a))),r.a.createElement("p",null,n)))}return r.a.createElement("p",null,"Cargando...")}}]),t}(n.Component),Ee=(a(149),a(43)),ve=a.n(Ee),be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){a.setState({location:e})},a.handleSelect=function(e){Object(Ee.geocodeByAddress)(e).then((function(e){return Object(Ee.getLatLng)(e[0])})).then((function(e){return a.setState({location:{lat:e.lat,lng:e.lng}},(function(){return a.props.selectLocation(a.state)}))})).catch((function(e){return console.error("Error",e)}))},a.state={location:{lat:"",lng:""}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ve.a,{value:this.state.location,onChange:this.handleChange,onSelect:this.handleSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"text",name:"location"},t({placeholder:"Busca la direcci\xf3n",className:"location-search-input"}))),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Cargando..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"rgb(234, 242, 255)",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))}))))}))}}]),t}(r.a.Component),ye=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state._id,n=a.state.img,r=a.state.title,l=a.state.location,o=a.state.audio,c=a.state.languages,i=a.state.duration,s=a.state.description,u=a.props.userInSession._id;g.a.post("".concat("https://ironserotonin.herokuapp.com/api","/new-tour"),{_id:t,img:n,title:r,location:l,audio:o,languages:c,duration:i,description:s,owner:u}).then((function(){console.log(a.state),a.setState({_id:"",img:"",title:"",location:{lat:null,lng:null},audio:"",languages:"",duration:"",description:"",owner:"".concat(a.props.userInSession._id)},(function(){a.props.update(),a.props.history.push("/home")}))})).catch((function(e){a.setState({error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.handleFileUpload=function(e){var t=new FormData;t.append("img",e.target.files[0]),a.filesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.secure_url),a.setState(Object(c.a)({},a.state,{img:e.secure_url}))})).catch((function(e){return console.log(e)}))},a.updateStateWithLocation=function(e){a.setState({location:{lat:e.location.lat,lng:e.location.lng}})},a.filesServices=new Z,a.state={_id:"",img:"",title:"",location:{lat:null,lng:null},audio:"",languages:"",duration:"",description:"",owner:"".concat(a.props.userInSession._id),newRoute:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"switchRoute",value:function(){this.setState({newRoute:!this.state.newRoute})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"form-edit",onSubmit:this.handleFormSubmit},r.a.createElement(X.a,null),r.a.createElement("input",{type:"file",placeholder:"",id:"img",name:"img",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("label",null,"T\xedtulo"),r.a.createElement("input",{type:"text",placeholder:"",id:"title",name:"title",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Ubicaci\xf3n"),r.a.createElement(be,{selectLocation:function(t){return e.updateStateWithLocation(t)}}),r.a.createElement("label",null,"Idioma"),r.a.createElement("input",{type:"text",placeholder:"",id:"languages",name:"languages",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Duraci\xf3n"),r.a.createElement("input",{type:"number",placeholder:"",id:"duration",name:"duration",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Descripci\xf3n"),r.a.createElement("textarea",{type:"text",placeholder:"",id:"description",name:"description",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("p",{onClick:function(){return e.switchRoute()}},(this.state.newRoute,"A\xf1adir Etapa")),this.state.newRoute&&r.a.createElement("div",null,r.a.createElement("label",null,"Imagen"),r.a.createElement("input",{type:"file",placeholder:"",id:"img",name:"img",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("label",null,"Audio"),r.a.createElement("input",{type:"file",placeholder:"",id:"audio",name:"audio",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("label",null,"Nombre"),r.a.createElement("input",{type:"text",placeholder:"",id:"title",name:"name",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Descripci\xf3n"),r.a.createElement("textarea",{type:"text",placeholder:"",id:"description",name:"description",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Crear Tour"}))}}]),t}(n.Component),Oe=(a(154),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a.addActivityToFav=function(){g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/").concat(a.props.userInSession._id,"/fav/add"),{fav:a.state.specificActivity._id}).then((function(){return a.setState({activityIsFav:!0})})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_updateUser",value:function(){var e=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/profile/").concat(this.props.userInSession._id)).then((function(t){e.setState({user:t.data})}))}},{key:"componentDidMount",value:function(){this._updateUser()}},{key:"render",value:function(){if(console.log(this.props.userInSession),this.state.user){var e=this.state.user,t=e.img,a=e.name,n=e.email,l=e.fav;return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"border"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("h1",null,a),r.a.createElement("p",null,"Email: ",n)),r.a.createElement("div",{className:"fav"},r.a.createElement("p",null,r.a.createElement("strong",null,"Favoritos")),l.map((function(e){return console.log(e),r.a.createElement("div",{className:"fav-wrapper"},r.a.createElement(v.b,{to:"/tour/".concat(e._id)},r.a.createElement("img",{src:e.img,alt:e.title})),r.a.createElement("div",{className:"fav-wrapper-text"},r.a.createElement("div",null,r.a.createElement(v.b,{className:"pedro",to:"/tour/".concat(e._id)},r.a.createElement("h1",null,e.title))),r.a.createElement("div",{className:"rating"},r.a.createElement(P.a,null))))}))))}return r.a.createElement("p",null,"Cargando...")}}]),t}(n.Component)),je=(a(155),a(81)),Ce=a.n(je),Se=a(80),ke=a.n(Se),Ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_updateUser",value:function(){var e=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/profile/").concat(this.props.userInSession._id)).then((function(t){e.setState({user:t.data})}))}},{key:"deleteTask",value:function(e){var t=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/delete-tour/").concat(e)).then((function(e){t._updateUser(),t.props.update()}))}},{key:"componentDidMount",value:function(){this._updateUser()}},{key:"render",value:function(){var e=this;if(console.log(this.props.userInSession),this.state.user){var t=this.state.user,a=t.img,n=t.name,l=t.email,o=t.toursCreated;return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"border"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("h1",null,n),r.a.createElement("p",null,"Email: ",l)),r.a.createElement("div",{className:"fav"},r.a.createElement("p",null,r.a.createElement("strong",null,"Mis Tours")),o.map((function(t){return console.log(t),r.a.createElement("div",{className:"fav-wrapper"},r.a.createElement(v.b,{to:"/tour/".concat(t._id)},r.a.createElement("img",{src:t.img,alt:t.title})),r.a.createElement("div",{className:"fav-wrapper-text"},r.a.createElement("div",null,r.a.createElement(v.b,{className:"pedro",to:"/tour/".concat(t._id)},r.a.createElement("h1",null,t.title))),r.a.createElement("div",{className:"rating"},r.a.createElement(v.b,{className:"pedro",to:"/edit-tour/".concat(t._id)},r.a.createElement("button",null,r.a.createElement(ke.a,null))),r.a.createElement("button",{onClick:function(){return e.deleteTask(t._id)}},r.a.createElement(Ce.a,null)))))}))))}return r.a.createElement("p",null,"Cargando...")}}]),t}(n.Component),we=(a(156),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.img,n=a.state.audio,r=a.state.title,l=a.state.description,o=a.state.languages,c=a.state.duration,i=a.state.location;g.a.post("".concat("https://ironserotonin.herokuapp.com/api","/edit-tour/").concat(a.props.tourId),{img:t,title:r,audio:n,languages:o,description:l,duration:c,location:i}).then((function(){a.setState({img:"",audio:"",title:"",description:"",languages:"",duration:"",location:""},(function(){a.props.update(),a.props.history.push("/tour-created")}))})).catch((function(e){a.setState({error:!0})}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.handleFileUpload=function(e){var t=new FormData;t.append("img",e.target.files[0]),a.filesServices.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.secure_url),a.setState({img:e.secure_url})})).catch((function(e){return console.log(e)}))},a.filesServices=new Z,a.state={img:"",audio:"",title:"",description:"",languages:"",duration:"",location:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"form-edit",onSubmit:this.handleFormSubmit},r.a.createElement(X.a,null),r.a.createElement("input",{type:"file",placeholder:"",id:"name",name:"img",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("label",null,"Audio:"),r.a.createElement("input",{type:"file",placeholder:"",id:"name",name:"audio",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("label",null,"T\xedtulo:"),r.a.createElement("input",{type:"text",placeholder:"",id:"name",name:"title",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",null,"Idioma:"),r.a.createElement("input",{type:"text",placeholder:"",id:"name",name:"languages",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",null,"Duraci\xf3n:"),r.a.createElement("input",{type:"number",placeholder:"",id:"name",name:"duration",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",null,"Descripci\xf3n:"),r.a.createElement("textarea",{type:"email",placeholder:"",id:"name",name:"description",onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("input",{type:"submit",value:"Guardar cambios"}))}}]),t}(n.Component)),Ie=a(30),Ue=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).update=function(e){g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/tours")).then((function(e){e=e.data,a.setState({tours:e})}))},a.updateAllUser=function(e){g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/users")).then((function(e){e=e.data,a.setState({users:e})}))},a.getUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then((function(){a.setState({loggedInUser:null})}))},a.searchBar=function(e){var t,n=Object(i.a)(a.state.toursOriginal);console.log(e),t=n.filter((function(t){var a=t.title.toLowerCase();console.log(a);var n=e.toLowerCase();return a.includes(n)})),console.log(t),a.setState({tours:t})},a.state={loggedInUser:null,tours:[],toursOriginal:[],users:[],resultsId:[]},a.service=new E,a.fetchUser(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_updateAllTours",value:function(){var e=this;g.a.get("".concat("https://ironserotonin.herokuapp.com/api","/tours")).then((function(t){t=t.data,e.setState(Object(c.a)({},e.state,{tours:t,toursOriginal:t}))}))}},{key:"componentDidMount",value:function(){this._updateAllTours(),this.updateAllUser()}},{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement(j,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(Ie.d,null,r.a.createElement(Ie.b,{exact:!0,path:"/login"},r.a.createElement(Ie.a,{to:"/home"})),r.a.createElement(Ie.b,{exact:!0,path:"/home",render:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement(Y,{searchBar:function(t){return e.searchBar(t)}}),r.a.createElement("div",{className:"main-container"},r.a.createElement(U,{userInSession:e.state.loggedInUser,tours:e.state.tours})))}}),r.a.createElement(Ie.b,{exact:!0,path:"/mapa",render:function(e){return r.a.createElement(T,{tourId:e.match.params.id})}}),r.a.createElement(Ie.b,{exact:!0,path:"/tour/:id",render:function(e){return r.a.createElement(V,{tourId:e.match.params.id})}}),r.a.createElement(Ie.b,{exact:!0,path:"/start-tour/:id",render:function(e){return r.a.createElement(ue,{tourId:e.match.params.id})}}),r.a.createElement(Ie.b,{exact:!0,path:"/route/detail",render:function(e){return r.a.createElement(ge,Object.assign({tourId:e.match.params.id},e))}}),r.a.createElement(Ie.b,{exact:!0,path:"/fav",render:function(){return r.a.createElement(Oe,{userInSession:e.state.loggedInUser})}}),r.a.createElement(Ie.b,{exact:!0,path:"/tour-created",render:function(){return r.a.createElement(Ne,{userInSession:e.state.loggedInUser,update:e.update})}}),r.a.createElement(Ie.b,{exact:!0,path:"/edit-tour/:id",render:function(t){return r.a.createElement(we,Object.assign({tourId:t.match.params.id,update:e.update},t))}}),r.a.createElement(Ie.b,{exact:!0,path:"/new-tour",render:function(t){return r.a.createElement(ye,Object.assign({userInSession:e.state.loggedInUser,update:e.update},t))}}),r.a.createElement(Ie.b,{exact:!0,path:"/profile",render:function(){return r.a.createElement(K,{userInSession:e.state.loggedInUser,logout:e.logout})}}),r.a.createElement(Ie.b,{exact:!0,path:"/edit-profile",render:function(t){return r.a.createElement($,Object.assign({userInSession:e.state.loggedInUser,updateUser:e.updateAllUser},t))}}))),r.a.createElement(oe,null)):r.a.createElement("div",{className:"App"},r.a.createElement(Ie.a,{to:"/login"}),r.a.createElement(Ie.d,null,r.a.createElement(Ie.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(b,{getUser:e.getUser})}}),r.a.createElement(Ie.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(y,{getUser:e.getUser})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v.a,null,r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a(157)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.4c70d409.chunk.js.map