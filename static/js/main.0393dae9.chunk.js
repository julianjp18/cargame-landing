(this["webpackJsonpcargame-landing"]=this["webpackJsonpcargame-landing"]||[]).push([[0],{128:function(e,n,t){},198:function(e,n,t){},199:function(e,n,t){},200:function(e,n,t){},204:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t(29),i=t.n(c),s=(t(128),t(94),t(95),t(8)),o=t(9),l="#37517e",d="#ffffff",u="#ffffff",j="#47b2e4",b=t(62),p=t(27),x=t(24),m=t(210),f=t(213),h=t(214),O=t(119),g=t(215),v=t(216),y=function(){return Object(a.jsxs)(m.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){console.log("Received values of form: ",e)},children:[Object(a.jsx)(m.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(a.jsx)(f.a,{prefix:Object(a.jsx)(g.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(a.jsx)(m.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(a.jsx)(f.a,{prefix:Object(a.jsx)(v.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(a.jsxs)(m.a.Item,{children:[Object(a.jsx)(m.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(a.jsx)(h.a,{children:"Remember me"})}),Object(a.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password"})]}),Object(a.jsxs)(m.a.Item,{children:[Object(a.jsx)(O.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),"Or ",Object(a.jsx)("a",{href:"",children:"register now!"})]})]})},w=t(212),C=t(208),E=t(209),N=w.a.Option,A={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},k={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},I=function(){var e=m.a.useForm(),n=Object(b.a)(e,1)[0],t=Object(a.jsx)(m.a.Item,{name:"prefix",noStyle:!0,children:Object(a.jsx)(w.a,{style:{width:70},children:Object(a.jsx)(N,{value:"86",children:"+57"})})}),c=Object(r.useState)([]),i=Object(b.a)(c,2),s=i[0];i[1],s.map((function(e){return{label:e,value:e}}));return Object(a.jsxs)(m.a,Object(p.a)(Object(p.a)({},A),{},{form:n,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0,children:[Object(a.jsx)(m.a.Item,{name:"name",label:"Nombre completo",rules:[{required:!0}],children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(m.a.Item,{name:"email",label:"Correo electr\xf3nico",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(m.a.Item,{name:"password",label:"Contrase\xf1a",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(a.jsx)(f.a.Password,{})}),Object(a.jsx)(m.a.Item,{name:"confirm",label:"Confirmar contrase\xf1a",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var n=e.getFieldValue;return{validator:function(e,t){return t&&n("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}],children:Object(a.jsx)(f.a.Password,{})}),Object(a.jsx)(m.a.Item,{name:"identification",label:"C\xe9dula de ciudadan\xeda",rules:[{required:!0}],children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(m.a.Item,{name:"phone",label:"Celular",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(a.jsx)(f.a,{addonBefore:t,style:{width:"100%"}})}),Object(a.jsx)(m.a.Item,{label:"Captcha",extra:"Por favor confirmanos que eres un humano.",children:Object(a.jsxs)(C.a,{gutter:8,children:[Object(a.jsx)(E.a,{span:12,children:Object(a.jsx)(m.a.Item,{name:"captcha",noStyle:!0,rules:[{required:!0,message:"Please input the captcha you got!"}],children:Object(a.jsx)(f.a,{})})}),Object(a.jsx)(E.a,{span:12,children:Object(a.jsx)(O.a,{children:"Obtener captcha"})})]})}),Object(a.jsx)(m.a.Item,Object(p.a)(Object(p.a)({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,n){return n?Promise.resolve():Promise.reject("Should accept agreement")}}]},k),{},{children:Object(a.jsxs)(h.a,{children:["Estoy de acuerdo con los ",Object(a.jsx)("a",{href:"",children:"t\xe9rminos y condiciones"})]})})),Object(a.jsx)(m.a.Item,Object(p.a)(Object(p.a)({},k),{},{children:Object(a.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Registrarse"})}))]}))};function P(){var e=Object(s.a)(['\n  font-family: "Jost", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 10px 28px 11px 28px;\n  border-radius: 50px;\n  transition: 0.5s;\n  margin: 10px 0 0 0;\n  color: ',";\n  background: ",";\n"]);return P=function(){return e},e}function S(){var e=Object(s.a)(["\n  max-width: 100%;\n  margin-top: 60px;\n"]);return S=function(){return e},e}function R(){var e=Object(s.a)(["\n  width: 50%;\n  margin: 30px 0;\n"]);return R=function(){return e},e}function T(){var e=Object(s.a)(['\n  font-family: "Jost", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 10px 28px 11px 28px;\n  border-radius: 50px;\n  transition: 0.5s;\n  margin: 10px 0 0 0;\n  color: ',";\n  background: ",";\n"]);return T=function(){return e},e}function q(){var e=Object(s.a)(["\n  margin: 0 0 10px 0;\n  font-size: 43px;\n  font-weight: 700;\n  line-height: 56px;\n  color: ",";\n"]);return q=function(){return e},e}function z(){var e=Object(s.a)(["\n"]);return z=function(){return e},e}function M(){var e=Object(s.a)(["\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 50px;\n  font-size: 24px;\n"]);return M=function(){return e},e}function L(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n  align-items: stretch;\n  align-content: stretch;\n"]);return L=function(){return e},e}function F(){var e=Object(s.a)(["\n  min-height: 80vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: stretch;\n  align-content: stretch;\n"]);return F=function(){return e},e}var D=o.a.div(F(),l),J=o.a.div(L()),U=o.a.p(M()),G=o.a.div(z()),B=o.a.h1(q(),u),V=o.a.div(T(),u,j),$=o.a.div(R()),X=o.a.img(S()),_=o.a.div(P(),u,j),Q=function(){return Object(a.jsxs)(D,{children:[Object(a.jsxs)($,{children:[Object(a.jsx)(B,{children:"Una soluci\xf3n colaborativa para Colombia"}),Object(a.jsx)(U,{children:"Somos una plataforma digital que b\xfasca acercar las regiones m\xe1s apartadas con las ciudades principales. Conectamos a transportadores con usuarios generadores de carga."}),Object(a.jsxs)(J,{children:[Object(a.jsx)(V,{children:"Registrarse"}),Object(a.jsx)(_,{children:"Ver video"})]})]}),Object(a.jsx)(G,{children:Object(a.jsx)(X,{src:"images/Asset_6.png",alt:"phone"})})]})},H=[{name:"linkedin",url:"linkedin",icon:"linkedin"},{name:"facebook",url:"facebook",icon:"facebook"},{name:"twitter",url:"twitter",icon:"twitter"},{name:"instagram",url:"instagram",icon:"instagram"}];function K(){var e=Object(s.a)(["\n  width: 15%;\n  margin: 15px auto;\n"]);return K=function(){return e},e}function Y(){var e=Object(s.a)(['\n  font-family: "Open Sans", sans-serif;\n  font-size: 17px;\n  color: ',";\n  margin: 0 60px;\n"]);return Y=function(){return e},e}function W(){var e=Object(s.a)(["\n  width: 15%;\n  margin: 15px auto;\n"]);return W=function(){return e},e}function Z(){var e=Object(s.a)(['\n  font-family: "Open Sans", sans-serif;\n  font-size: 17px;\n  color: ',";\n  margin: 0 60px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(s.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  text-transform: uppercase;\n  position: relative;\n  color: ",";\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  padding: 60px 0;\n  background-color: ","\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  text-transform: uppercase;\n  position: relative;\n  color: ",";\n"]);return te=function(){return e},e}function ae(){var e=Object(s.a)(["\n  padding: 60px 0;\n"]);return ae=function(){return e},e}var re=o.a.div(ae()),ce=o.a.h2(te(),l),ie=o.a.div(ne(),l),se=o.a.h2(ee(),u),oe=o.a.p(Z(),u),le=o.a.hr(W()),de=o.a.p(Y(),"#444444"),ue=o.a.hr(K()),je=function(e){var n=e.title,t=e.description;return e.isSecond?Object(a.jsxs)(ie,{children:[Object(a.jsx)(se,{children:n}),Object(a.jsx)(le,{}),Object(a.jsx)(oe,{children:t})]}):Object(a.jsxs)(re,{children:[Object(a.jsx)(ce,{children:n}),Object(a.jsx)(ue,{}),Object(a.jsx)(de,{children:t})]})};function be(){var e=Object(s.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: 700;\n"]);return be=function(){return e},e}function pe(){var e=Object(s.a)(["\n  color: black;\n"]);return pe=function(){return e},e}function xe(){var e=Object(s.a)(["\n  \n"]);return xe=function(){return e},e}function me(){var e=Object(s.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n"]);return me=function(){return e},e}function fe(){var e=Object(s.a)(["\n  color: ",";\n"]);return fe=function(){return e},e}function he(){var e=Object(s.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: stretch;\n  align-content: stretch;\n  border: 1px solid #f2f2f2;\n  border-radius: 5px;\n  box-shadow: -1px 4px 19px -3px rgba(0,0,0,0.75);\n  margin: 20px 40px 0px 40px;\n  padding: 20px 30px;\n  min-height: 200px;\n"]);return he=function(){return e},e}var Oe=o.a.div(he(),u),ge=o.a.div(fe(),d),ve=o.a.img(me()),ye=o.a.div(xe()),we=o.a.p(pe()),Ce=o.a.i(be()),Ee=function(e){var n=e.name,t=e.charge,r=e.image,c=e.description,i=e.socialMediaList;return Object(a.jsxs)(Oe,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(ve,{src:"images/".concat(r,".png"),alt:"image"})}),Object(a.jsxs)(ge,{children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)(we,{children:t}),Object(a.jsx)(we,{children:Object(a.jsx)(Ce,{children:'"'.concat(c,'"')})})]}),Object(a.jsx)(ye,{children:i&&i.map((function(e){return Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:"fa fab-".concat(e.icon)})})}))})]})};function Ne(){var e=Object(s.a)(["\n  background-color: ",";\n  margin-top: 30px;\n"]);return Ne=function(){return e},e}var Ae=o.a.div(Ne(),u),ke=function(){return Object(a.jsxs)("div",{id:"team",children:[Object(a.jsx)(je,{title:"EQUIPO DE TRABAJO",description:"Cargame es una experiencia \xfanica para nuestros clientes",isSecond:!0}),Object(a.jsx)(Ae,{children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)(E.a,{xs:24,md:12,children:Object(a.jsx)(Ee,{name:"Diego Hern\xe1ndez",charge:"CEO",image:"Diego",description:"C\xc1RGAME LLEGA LEJOS POR TI",socialMediaList:H})}),Object(a.jsx)(E.a,{xs:24,md:12,children:Object(a.jsx)(Ee,{name:"Lina Velez",image:"Lina",charge:"JEFE ADMINISTRATIVA",description:"C\xc1RGAME TECNIFICADA PARA BRINDARTE LA MEJOR EXPERIENCIA",socialMediaList:H})}),Object(a.jsx)(E.a,{xs:24,md:12,children:Object(a.jsx)(Ee,{name:"Juan Perez",image:"Juan",charge:"JEFE DE MERCADEO",description:"EN C\xc1RGAME LA GENTE TRABAJA PARA LA GENTE Y NOSOTROS PARA ELLOS",socialMediaList:H})}),Object(a.jsx)(E.a,{xs:24,md:12,children:Object(a.jsx)(Ee,{name:"Julian Mateos",image:"Julian",charge:"JEFE DE SOPORTE",description:"C\xc1RGAME, PARA QUE TU NECESIDAD SEA NUESTRA PREOCUPACI\xd3N",socialMediaList:H})})]})})]})},Ie=t(211);t(198);function Pe(){var e=Object(s.a)(["\n"]);return Pe=function(){return e},e}var Se=Ie.a.TabPane,Re=o.a.div(Pe()),Te=function(){return Object(a.jsxs)(Re,{id:"business-plan",children:[Object(a.jsx)(je,{title:"PLAN DE NEGOCIO",description:"C\xe1rgame dentro de sus pol\xedticas de responsabilidad social, cre\xf3 dos m\xe9todos que potencializan la generaci\xf3n de ingresos a usuarios que deseen vincularse y ser parte de la estrategia de mercadeo de la compa\xf1\xeda, dichos usuarios ser\xe1n denominados \xabEmbajadores de C\xe1rgame\xbb, ya que ser\xe1n voceros e influenciadores de la marca.",isSecond:!0}),Object(a.jsxs)(C.a,{className:"business-plan-tabs-container",children:[Object(a.jsx)(E.a,{xs:24,md:12,children:Object(a.jsxs)(Ie.a,{className:"tabs-container",defaultActiveKey:"1",children:[Object(a.jsxs)(Se,{tab:"Plan Referidos",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"C\xe1rgame"})," dentro de sus objetivos, llegar\xe1 inicialmente a los 3 Departamentos:",Object(a.jsx)("b",{children:" Meta, Casanare y Boyac\xe1"}),", hasta extenderse y llegar a la Capital Bogot\xe1 y el resto del Pa\xeds."]}),Object(a.jsx)("p",{children:"En cada ciudad se conformar\xe1 un n\xfacleo de Embajadores (15) de diferentes sectores de la econom\xeda. Cada embajador tendr\xe1 como objetivo referir la aplicaci\xf3n, para que mayor n\xfamero de personas la descarguen y hagan uso de sus servicios."}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"C\xe1rgame"})," como reconocimiento, otorgar\xe1 el ",Object(a.jsx)("b",{children:"1%"})," de cada servicio facturado por cada uno de los referidos que haya inscrito bajo su c\xf3digo de referencia. El pago de este porcentaje ser\xe1 vitalicio y se realizar\xe1 mensualmente en una cuenta bancaria suministrada previamente."]})]},"1"),Object(a.jsx)(Se,{tab:"Plan Mil",children:Object(a.jsxs)("p",{children:["Adicional al plan referidos, C\xe1rgame ha dise\xf1ado el ",Object(a.jsx)("b",{children:"plan 1000 Usuarios"}),", con el prop\xf3sito de incentivar a los miembros de la plataforma a ganar dinero mientras hablan con sus conocidos, el cual est\xe1 dirigido solo a los usuarios referidos y tienen las siguientes metas y bonificaciones."]})},"2")]})}),Object(a.jsx)(E.a,{xs:24,md:12,children:Object(a.jsx)("img",{src:"images/why-us.png",alt:"why us"})})]})]})};function qe(){var e=Object(s.a)(["\n  color: ",";\n"]);return qe=function(){return e},e}function ze(){var e=Object(s.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: 700;\n"]);return ze=function(){return e},e}function Me(){var e=Object(s.a)(["\n  color: black;\n"]);return Me=function(){return e},e}function Le(){var e=Object(s.a)(["\n  \n"]);return Le=function(){return e},e}function Fe(){var e=Object(s.a)(["\n  font-size: 30px;\n  color: ",";\n"]);return Fe=function(){return e},e}function De(){var e=Object(s.a)(["\n  color: ",";\n"]);return De=function(){return e},e}function Je(){var e=Object(s.a)(["\n  background-color: ",";\n  border: 1px solid #f2f2f2;\n  border-radius: 5px;\n  margin: 20px 40px 50px 40px;\n  padding: 20px 30px;\n  box-shadow: -1px 4px 19px -3px rgb(0 0 0 / 75%);\n  min-height: 349px;\n"]);return Je=function(){return e},e}var Ue=o.a.div(Je(),u),Ge=o.a.div(De(),d),Be=o.a.div(Fe(),l),Ve=(o.a.div(Le()),o.a.p(Me())),$e=o.a.i(ze()),Xe=o.a.h2(qe(),l),_e=function(e){var n=e.title,t=e.iconName,r=e.description;return Object(a.jsxs)(Ue,{children:[Object(a.jsx)(Be,{children:Object(a.jsx)("i",{class:"fas ".concat(t)})}),Object(a.jsxs)(Ge,{children:[Object(a.jsx)(Xe,{children:n}),Object(a.jsx)(Ve,{children:Object(a.jsx)($e,{children:"".concat(r)})})]})]})};function Qe(){var e=Object(s.a)(["\n"]);return Qe=function(){return e},e}var He=o.a.div(Qe()),Ke=function(){return Object(a.jsxs)(He,{id:"services",children:[Object(a.jsx)(je,{title:"SERVICIOS",description:"Aprovechamos los espacios vacios de los transportadores para que las personas se puedan transportar y/o env\xedar su carga o encomiendas.",isSecond:!0}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(E.a,{xs:24,md:6,children:Object(a.jsx)(_e,{title:"Viajes compartidos",iconName:"fa-paper-plane",description:"Cuando viajes en tu veh\xedculo, aprovecha\r al 100% tu carro, a la vez que optimizas\r los costos de transporte. Un viajero\r podr\xeda tener un espacio libre en ba\xfal de\r tu veh\xedculo, as\xed como una o dos sillas\r disponibles para compartir su viaje."})}),Object(a.jsx)(E.a,{xs:24,md:6,children:Object(a.jsx)(_e,{title:"Documentos y paquetes",iconName:"fa-file-alt",description:"Puedes ganar dinero extra mientras\r viajas en bus, avi\xf3n o barco, lleva\r documentos o una encomienda\r peque\xf1a.\r Para viajeros en avi\xf3n \xfanicamente\r documentos (inicialmente)."})}),Object(a.jsx)(E.a,{xs:24,md:6,children:Object(a.jsx)(_e,{title:"Carga y trasteos",iconName:"fa-truck-loading",description:"Aprovecha ese espacio vac\xedo que queda\r en tu cami\xf3n a la hora de llevar un flete.\r Este servicio tambi\xe9n te ayuda a\r encontrar carga con m\xe1s facilidad y\r rapidez cuando tu cami\xf3n quede\r totalmente vac\xedo."})}),Object(a.jsx)(E.a,{xs:24,md:6,children:Object(a.jsx)(_e,{title:"Servicio de gr\xfaa para carro o moto",iconName:"fa-truck",description:"Si lo llegas a necesitar, \xa1relajate!\r C\xc1RGAME te ayuda a solicitar servicio de\r grua, de una manera f\xe1cil, r\xe1pida y\r eficiente."})})]})]})};function Ye(){var e=Object(s.a)(["\n"]);return Ye=function(){return e},e}function We(){var e=Object(s.a)(["\n"]);return We=function(){return e},e}o.a.div(We()),o.a.div(Ye());var Ze={labelCol:{span:8},wrapperCol:{span:16}},en={required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},nn=function(){return Object(a.jsxs)(m.a,Object(p.a)(Object(p.a)({className:"form-content"},Ze),{},{name:"nest-messages",onFinish:function(e){console.log(e)},validateMessages:en,children:[Object(a.jsx)(m.a.Item,{name:["user","name"],label:"Nombre completo",rules:[{required:!0}],children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(m.a.Item,{name:["user","email"],label:"Correo electr\xf3nico",rules:[{type:"email"}],children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(m.a.Item,{name:["user","title"],label:"Asunto",rules:[{required:!0}],children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(m.a.Item,{name:["user","message"],label:"Mensaje",children:Object(a.jsx)(f.a.TextArea,{rows:6})}),Object(a.jsx)(m.a.Item,{wrapperCol:Object(p.a)({},Ze.wrapperCol),children:Object(a.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Enviar"})})]}))};t(199);function tn(){var e=Object(s.a)(["\n  text-align: end;\n"]);return tn=function(){return e},e}function an(){var e=Object(s.a)(["\n  text-align: start;\n  border: 1px solid #f2f2f2;\n  border-radius: 5px;\n  box-shadow: -1px 4px 19px -3px rgba(0,0,0,0.75);\n  min-height: 500px;\n  margin-bottom: 20px;\n  padding-top: 50px;\n"]);return an=function(){return e},e}function rn(){var e=Object(s.a)(["\n  \n"]);return rn=function(){return e},e}var cn=o.a.div(rn()),sn=o.a.div(an()),on=o.a.i(tn()),ln=function(){return Object(a.jsxs)(cn,{id:"contact-us",children:[Object(a.jsx)(je,{title:"CONT\xc1CTANOS",description:"Mantente en contacto."}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(E.a,{className:"info-col",xs:24,md:8,children:Object(a.jsxs)(sn,{children:[Object(a.jsxs)(C.a,{children:[Object(a.jsx)(E.a,{className:"i-content-col",xs:6,children:Object(a.jsx)(on,{className:"fas fa-map-marker-alt"})}),Object(a.jsxs)(E.a,{className:"descrip-content-col",xs:18,children:[Object(a.jsx)("h3",{children:"Sede principal:"}),Object(a.jsx)("p",{children:"Villavicencio, Colombia"})]})]}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(E.a,{className:"i-content-col",xs:6,children:Object(a.jsx)(on,{className:"far fa-envelope-open"})}),Object(a.jsxs)(E.a,{className:"descrip-content-col",xs:18,children:[Object(a.jsx)("h3",{children:"Correo electr\xf3nico:"}),Object(a.jsx)("p",{children:"contacto@cargame.com"})]})]}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(E.a,{className:"i-content-col",xs:6,children:Object(a.jsx)(on,{className:"fas fa-phone"})}),Object(a.jsxs)(E.a,{className:"descrip-content-col",xs:18,children:[Object(a.jsx)("h3",{children:"T\xe9lefono:"}),Object(a.jsx)("p",{children:"+ 57 3202342345"})]})]})]})}),Object(a.jsx)(E.a,{className:"form-container",xs:24,md:16,children:Object(a.jsx)(sn,{children:Object(a.jsx)(nn,{})})})]})]})};t(200);function dn(){var e=Object(s.a)(["\n"]);return dn=function(){return e},e}var un=o.a.div(dn()),jn=function(){return Object(a.jsxs)(un,{id:"us",children:[Object(a.jsx)(je,{title:"ACERCA DE NOSOTROS",description:"Somos una plataforma digital que b\xfasca acercar las regiones m\xe1s apartadas con las ciudades principales. Conectamos a transportadores con usuarios generadores de carga."}),Object(a.jsx)(C.a,{children:Object(a.jsx)(E.a,{xs:24,children:Object(a.jsx)("img",{className:"img",src:"images/asset_7.png",alt:"logo"})})})]})};var bn=function(){return Object(a.jsxs)("div",{className:"main-landing",children:[Object(a.jsx)(Q,{}),Object(a.jsx)(jn,{id:"us"}),Object(a.jsx)(Te,{id:"business-plan"}),Object(a.jsx)(Ke,{id:"services"}),Object(a.jsx)(ke,{id:"team"}),Object(a.jsx)(ln,{id:"contact-us"})]})},pn=[{path:"/",key:"Inicio",exact:!0,component:bn,show:!0,auth:!1,landing:!0},{path:"/us",key:"Nosotros",exact:!0,component:bn,show:!0,auth:!1,landing:!0},{path:"/business-plan",key:"Planes",exact:!0,component:bn,show:!0,auth:!1,landing:!0},{path:"/team",key:"Equipo",exact:!0,component:bn,show:!0,auth:!1,landing:!0},{path:"/contact-us",key:"Cont\xe1ctanos",exact:!0,component:bn,show:!0,auth:!1,landing:!0},{path:"/log-in",key:"Iniciar sesi\xf3n",exact:!0,component:y,show:!0,auth:!1,landing:!1},{path:"/sign-up",key:"Registrarse",exact:!0,component:I,show:!0,auth:!1,landing:!1}];function xn(e){return Object(a.jsx)(x.a,{path:e.path,exact:e.exact,render:function(n){return Object(a.jsx)(e.component,Object(p.a)(Object(p.a)({},n),{},{routes:e.routes}))}})}function mn(e){var n=e.routes;return Object(a.jsxs)(x.c,{children:[n.map((function(e,n){return Object(a.jsx)(xn,Object(p.a)({},e),e.key)})),Object(a.jsx)(x.a,{component:function(){return Object(a.jsx)("h1",{children:"\xa1UPS! Sitio web no encontrado."})}})]})}var fn=t(49);function hn(){var e=Object(s.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  li {\n    padding: 10px;\n    \n    button {\n      border: 0;\n    }\n  }\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #0D2538;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    z-index: 100;\n\n    li {\n      color: #fff;\n    }\n  }\n"]);return hn=function(){return e},e}var On=o.a.ul(hn(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),gn=function(e,n){var t=function(e,n){return e.landing?Object(a.jsx)("li",{className:"menu-item",children:Object(a.jsx)(O.a,{onClick:function(){return function(e){console.log(e);var n=document.getElementById(e).offsetTop;window.scrollTo({top:n-100,behavior:"smooth"})}(e.path.split("/")[1])},children:e.key})},e.path):e.show&&!e.auth&&Object(a.jsx)("li",{className:"menu-item",children:Object(a.jsx)(O.a,{type:"button",children:Object(a.jsx)(fn.b,{to:e.path,children:e.key})})},e.path)};return e.map((function(e){return e.routes,t(e)}))},vn=function(e){var n=e.open,t=Object(x.f)();return Object(a.jsx)(On,{open:n,children:gn(pn,t)})};function yn(){var e=Object(s.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 101;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return yn=function(){return e},e}var wn=o.a.div(yn(),(function(e){return e.open?"#ccc":"#333"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),Cn=function(){var e=Object(r.useState)(!1),n=Object(b.a)(e,2),t=n[0],c=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(wn,{open:t,onClick:function(){return c(!t)},children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]}),Object(a.jsx)(vn,{open:t})]})};function En(){var e=Object(s.a)(["\n  width: 100%;\n  height: 55px;\n  border-bottom: 2px solid #f1f1f1;\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  .logo {\n    padding: 15px 0;\n  }\n\n  @media (max-width: 768px) {\n    position: fixed;\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    background-color: ",";\n    z-index: 99;\n  }\n"]);return En=function(){return e},e}var Nn=o.a.nav(En(),u),An=function(){return Object(a.jsxs)(Nn,{children:[Object(a.jsx)("div",{className:"logo",children:"CARGAME"}),Object(a.jsx)(Cn,{})]})};function kn(){var e=Object(s.a)(["\n  color: ",";\n"]);return kn=function(){return e},e}function In(){var e=Object(s.a)(["\n  height: 20vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: stretch;\n  align-content: stretch;\n"]);return In=function(){return e},e}var Pn=o.a.div(In(),l),Sn=o.a.p(kn(),d),Rn=function(){return Object(a.jsx)(Pn,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(Sn,{children:["\xa9 Copyright ",Object(a.jsx)("b",{children:"Cargame"})," Todos los derechos reservados."]})})})},Tn=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(An,{}),Object(a.jsx)("div",{children:Object(a.jsx)(mn,{routes:pn})}),Object(a.jsx)(Rn,{})]})},qn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,217)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(a.jsx)(fn.a,{children:Object(a.jsx)(Tn,{})}),document.getElementById("root")),qn()},94:function(e,n,t){}},[[204,1,2]]]);
//# sourceMappingURL=main.0393dae9.chunk.js.map