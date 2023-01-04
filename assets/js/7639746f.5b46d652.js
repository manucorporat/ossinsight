"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2374,486],{68971:(e,t,n)=>{n.d(t,{P:()=>a});var r=n(67294);function a(){const e=function(){const e=(0,r.useRef)(!1);return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}();return(0,r.useCallback)((t=>function(){e.current&&t.apply(this,arguments)}),[])}},4882:(e,t,n)=>{n.d(t,{P:()=>i,c:()=>s});var r=n(67294),a=n(68971),o=n(8100),l=n(71406),c=n(26432);function i(e){const[t,n]=(0,r.useState)(e),[a,o]=(0,r.useState)(!1),[l,i]=(0,r.useState)(),s=(0,c.Z)((function(e,t){void 0===t&&(t=!1),t&&n(void 0),o(!0),i(void 0),e.then(n,i).finally((()=>{o(!1)}))})),u=(0,c.Z)((()=>{n(void 0),o(!1),i(l)}));return{data:t,loading:a,error:l,setAsyncData:s,clearState:u}}function s(e,t,n){void 0===n&&(n=!1);const i=(0,l.E)(),s=(0,a.P)(),[u,d]=(0,r.useState)(!1),[m,p]=(0,r.useState)(),[h,g]=(0,r.useState)(),f=(0,r.useRef)(e),E=(0,r.useRef)(t),y=(0,r.useRef)(!1);(0,r.useEffect)((()=>{f.current=e,E.current=t,d(!1),p(void 0),g(void 0),y.current=!1}),[t,(0,o.wE)([e])]);const v=(0,c.Z)((()=>{!n||i.validated?y.current||(d(!0),g(void 0),p(void 0),y.current=!0,E.current(f.current).then(s(g)).catch(s(p)).finally(s((()=>{d(!1),y.current=!1})))):i.login()})),b=(0,c.Z)((()=>{g(void 0),d(!1),p(void 0)})),w=(0,c.Z)((e=>{g(e),d(!1),p(void 0)}));return{data:h,loading:u,error:m,run:v,clear:b,setData:w}}},2108:(e,t,n)=>{n.d(t,{ON:()=>l,Rc:()=>c,ZP:()=>o,io:()=>i});var r=n(67294),a=n(61802);const o="undefined"==typeof window?function(e,t){let{defaultValue:n}=t;return(0,r.useState)(n)}:function(e,t,n){let{defaultValue:o,deserialize:l,serialize:c}=t;void 0===n&&(n=!1);const i=(0,r.useMemo)((()=>{const t=new URLSearchParams(location.search).get(e);return(0,a.nf)(t)?l(t):o}),[]),[s,u]=(0,r.useState)(i),d=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{if(d.current)return void(d.current=!1);const t=c(s),r=new URLSearchParams(location.search);if((0,a.Rw)(t)){if(!r.has(e))return;r.delete(e)}else{if(r.get(e)===t)return;r.set(e,t)}const o=r.toString(),l=o?`?${o}`:"",i=location.hash?`${location.hash}`:"",u=location.pathname+l+i;n?window.history.pushState(null,"",u):window.history.replaceState(null,"",u)}),[s]),(0,r.useEffect)((()=>{const t=()=>{d.current=!0;const t=new URLSearchParams(location.search).get(e);(0,a.nf)(t)?u(l(t)):u(o)};return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)}),[]),[s,u]};function l(e){return{defaultValue:e,serialize:e=>e,deserialize:e=>e}}function c(e){return{defaultValue:e,serialize:e=>(0,a.GC)(e)?e:void 0,deserialize:e=>(0,a.GC)(e)?e:void 0}}function i(e){return void 0===e&&(e="true"),{defaultValue:()=>!1,serialize:t=>(0,a.N6)(t)?e:void 0,deserialize:t=>Boolean(t===e)}}},21228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ut});var r=n(88242),a=n(67294),o=n(80562),l=n(75345),c=n(85214),i=n(58402),s=n(9144),u=n(81719),d=n(26432),m=n(61802),p=n(4534),h=n(13142),g=n(44797),f=n(71406),E=n(95537),y=n(63871),v=n(89022);function b(e){const[t,n]=(0,a.useState)(e),r=(0,a.useRef)(t);return(0,a.useEffect)((()=>{r.current=t}),[t]),[t,n,r]}function w(e){let{value:t,onChange:n,onAction:r,onClear:l,disableInput:u=!1,disableAction:h=!1,disableClear:w=!1,clearState:k}=e;const[N,P,L]=b(x.normal),[R,F]=(0,a.useState)(-1),[A,I]=(0,a.useState)(-1),[z,T]=(0,a.useState)(""),[B,q]=(0,a.useState)(""),W=(0,a.useRef)(null),{validating:$,validated:D}=(0,f.E)(),Q=(0,d.Z)((e=>{n(e.target.value)})),M=(0,a.useCallback)((e=>{if(T(e.key),I(e.target.selectionStart??-1),L.current!==x.normal)switch(e.key){case"ArrowDown":case"ArrowUp":case"Tab":case"Enter":e.preventDefault()}else"Enter"===e.key&&(null==r||r())}),[r]),U=(0,d.Z)((()=>{P(x.normal),F(-1),I(-1),q(""),T("")}));(0,a.useEffect)((()=>{switch(N){case x.normal:break;case x.user:case x.repo:{const e=t.substring(R,A+1);if(/^[a-z\d]$/.test(z))q(e);else{switch(z){case"ArrowUp":return G((e=>(e-1+j.length)%j.length)),void T("a");case"ArrowDown":return G((e=>(e+1)%j.length)),void T("a");case"Tab":case"Enter":return O(),void U()}"Backspace"===z&&e.includes(N)?q(e):U()}}}}),[N,z,t,R,A]);const V=(0,p.Z)(B,{wait:200,trailing:!0,leading:!1}),{data:j}=Z(N,V),[H,G]=(0,a.useState)(0),O=(0,a.useCallback)((()=>{(0,m.Rw)(j[H])||N===x.repo&&n(`${t.substring(0,R)}${j[H].fullName} ${t.substring(A+1)}`)}),[t,N,H,j,R,A]);return(0,a.useEffect)((()=>{H>=j.length&&G(j.length-1)}),[j]),a.createElement(a.Fragment,null,a.createElement(S,{fullWidth:!0,disabled:$&&!D||u,ref:W,value:t,onChange:Q,onKeyDown:M,onBlur:U,placeholder:"Type any question here, or choose one below",endAdornment:a.createElement(s.Z,{direction:"row",gap:1},!h&&a.createElement(o.Z,{color:"primary",onClick:r,disabled:h},a.createElement(y.Z,null)),a.createElement(o.Z,{color:"stop"===k?"error":"default",onClick:l,disabled:w},"stop"===k?a.createElement(v.Z,null):a.createElement(E.Z,null)))}),a.createElement(i.Z,{open:N!==x.normal,anchorEl:W.current},a.createElement(C,null,a.createElement(c.Z,null,j.map(((e,t)=>N===x.repo?(0,g.Ph)({},e,H===t):(0,g.Ro)({},e,H===t)))))))}const Z=function(e,t){return(0,h.h)(e===x.repo?"repo":"user",e===x.normal?"":t)};var x;!function(e){e.normal="^",e.repo="/",e.user="@"}(x||(x={}));const S=(0,u.ZP)(l.ZP)`
  background-color: #3c3c3c;
  color: white;
  border-radius: 6px;
  font-size: 20px;
  padding: 14px;
  line-height: 1;
`,C=(0,u.ZP)("div")`
  background-color: #3c3c3c;
  border-radius: 6px;
`;var k=n(36336),N=n(79072),P=n(29630),L=n(61225),R=n(62097),F=n(87462),A=n(4882),I=n(84191);let z;async function T(e){return await I.po.get(`/explorer/questions/${e}`)}async function B(e){return await I.po.post(`/explorer/questions/${e}/chart`,void 0)}!function(e){e.New="new",e.Waiting="waiting",e.Running="running",e.Success="success",e.Error="error",e.Cancel="cancel"}(z||(z={}));var q=n(36782),W=n(74065),$=n(47028),D=n(29618),Q=n(19604),M=n(70754),U=n(70983),V=n(96812),j=n(6571),H=n(47135);function G(e){let{status:t,title:n,defaultExpanded:r,extra:o,error:l,errorWithChildren:c=!1,children:i}=e;return a.createElement(O,{className:(0,m.Rw)(l)?t:"error",expanded:!0===r||void 0,defaultExpanded:r},a.createElement(D.Z,{expandIcon:(0,m.X0)(r)&&a.createElement(j.Z,null),disabled:"loading"===t},a.createElement(_,null,"loading"===t?a.createElement(M.Z,{size:16}):"success"===t?a.createElement(U.Z,{color:"success",fontSize:"inherit"}):a.createElement(V.Z,{color:"disabled",fontSize:"inherit"}),a.createElement(X,null,n),(0,m.N6)(o)?a.createElement(a.Fragment,null,a.createElement(K,null),a.createElement(Y,null,o)):void 0)),a.createElement($.Z,null,c?(0,m.Rw)(l)?i:a.createElement(a.Fragment,null,a.createElement(Q.Z,{severity:"error",sx:{mb:1}},(0,H.e$)(l)),i):(0,m.Rw)(l)?i:a.createElement(Q.Z,{severity:"error"},(0,H.e$)(l))))}const O=(0,u.ZP)(W.Z)`
  border-radius: 6px;
  border: 1px solid;
  border-image-source: linear-gradient(116.45deg, rgba(89, 95, 236, 0.5) 0%, rgba(200, 182, 252, 0.1) 96.73%);
  background: rgb(36, 35, 43);
  padding: 12px;
  margin-top: 24px;
  transform: translateY(20px);
  opacity: 0;
  transition: all .5s ease;

  &:before {
    display: none;
  }

  &.loading {
    transform: initial;
    opacity: 0.4;
  }

  &.success {
    transform: initial;
    opacity: 1;
  }

  &.error {
    transform: initial;
    opacity: 1;
  }
`,_=(0,u.ZP)("h2")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
`,Y=(0,u.ZP)("span")`
  color: #d7d7d7;
  font-weight: normal;
`,X=(0,u.ZP)("span")`
  margin-left: 8px;
`,K=(0,u.ZP)("span")`
  flex: 1;
`;var J=n(14850),ee=n(60338),te=n(68023),ne=n(33989),re=n(31281),ae=n(8690),oe=n(27240),le=n(76395),ce=n(82739);function ie(e){let{chartName:t,title:n,x:r,y:o,data:l}=e;const c=(0,a.useMemo)((()=>{const e=/date|time|year|month/.test(r);return{dataset:{id:"raw",source:l},backgroundColor:"rgb(36, 35, 43)",grid:{top:64,left:8,right:8,bottom:8},tooltip:{trigger:"axis"},legend:{left:8,top:8},series:{type:"line",datasetId:"raw",name:o,encode:{x:r,y:o},itemStyle:{opacity:0}},title:{text:n},xAxis:{type:e?"time":"category"},yAxis:{type:"value"}}}),[t,n,r,o]);return a.createElement(ee.ZP,{height:400,option:c})}(0,te.D)([ne.N,re.N,ae.N,oe.N,le.N,ce.N]);var se=n(38180);function ue(e){let{chartName:t,title:n,x:r,y:o,data:l}=e;const c=(0,a.useMemo)((()=>{const e=/date|time|year|month/.test(r);return{dataset:{id:"raw",source:l},backgroundColor:"rgb(36, 35, 43)",grid:{top:64,left:8,right:8,bottom:8},tooltip:{},legend:{left:8,top:8},series:{type:"bar",name:o,datasetId:"raw",encode:{x:r,y:o}},title:{text:n},xAxis:{type:e?"time":"category"},yAxis:{type:"value"}}}),[t,n,r,o]);return a.createElement(ee.ZP,{height:400,option:c})}function de(e){let{chartName:t,title:n,value:r,label:o,data:l}=e;const c=(0,a.useMemo)((()=>({dataset:{id:"raw",source:l},grid:{top:64,left:8,right:8,bottom:8},tooltip:{},legend:{left:8,top:8},series:{type:"pie",name:o,datasetId:"raw",encode:{itemName:o,value:r}},title:{text:n}})),[t,n,r,o]);return a.createElement(ee.ZP,{height:400,option:c})}(0,te.D)([se.N,re.N,ae.N,oe.N,le.N]),(0,te.D)([ne.N,re.N,ae.N,oe.N,le.N]);var me=n(44731),pe=n(81284),he=n(19594),ge=n(95309),fe=n(61702);function Ee(e){let{chartName:t,title:n,id:r,data:o}=e;return a.createElement(c.Z,null,o.map(((e,t)=>a.createElement(pe.ZP,{key:t},a.createElement(ge.Z,{component:"a",href:`https://github.com/${e[r]}`,target:"_blank"},a.createElement(he.Z,null,a.createElement(me.Z,{src:`https://github.com/${e[r]}.png`})),a.createElement(fe.Z,null,e[r]))))))}function ye(e){let{chartName:t,title:n,repo_name:r,data:o}=e;return a.createElement(c.Z,null,o.map(((e,t)=>a.createElement(pe.ZP,{key:t},a.createElement(ge.Z,{component:"a",href:`https://github.com/${e[r]}`,target:"_blank"},a.createElement(he.Z,null,a.createElement(me.Z,{src:`https://github.com/${e[r].split("/")[0]}.png`})),a.createElement(fe.Z,null,e[r]))))))}function ve(e){let{title:t,data:n,fields:r}=e;const o=(0,a.useMemo)((()=>(0,m.nf)(r)?r:n.length>0?Object.keys(n[0]).map((e=>({name:e}))):[{name:""}]),[n,r]);return a.createElement(be,null,a.createElement(we,{className:"clearTable"},a.createElement("thead",null,(0,m.GC)(t)&&a.createElement("tr",null,a.createElement("th",{colSpan:o.length,align:"center"},t)),a.createElement("tr",null,o.map((e=>{let{name:t}=e;return a.createElement("th",{key:t},t)})))),a.createElement("tbody",null,n.map(((e,t)=>a.createElement("tr",{key:t},o.map((t=>{let{name:n}=t;return a.createElement("td",{key:n},e[n])}))))))))}const be=(0,u.ZP)("div")`
  overflow: scroll;
`,we=(0,u.ZP)("table")`
  font-size: 12px;
  display: table;
  min-width: 100%;
`;var Ze=n(49837);function xe(e){let{chartName:t,title:n,value:r,data:o}=e;return a.createElement(c.Z,null,o.map(((e,t)=>a.createElement(pe.ZP,{key:t},a.createElement(Ze.Z,{sx:{p:4}},a.createElement(fe.Z,{primary:n,secondary:`${e[r]}`}))))))}function Se(e){switch(e.chartName){case"LineChart":return a.createElement(ie,e);case"BarChart":return a.createElement(ue,e);case"PieChart":return a.createElement(de,e);case"PersonalCard":return a.createElement(Ee,e);case"RepoCard":return a.createElement(ye,e);case"Table":return a.createElement(ve,e);case"NumberCard":return a.createElement(xe,e);case"MapChart":return a.createElement(a.Fragment,null,"Map chart not implemented");default:return a.createElement(a.Fragment,null,`Unknown chart type '${e.chartName}'`)}}var Ce=n(54225),ke=n(44373),Ne=n(87054),Pe=n(85390),Le=n(7449),Re=n(45670),Fe=n(55050),Ae=n(91693),Ie=n(96942),ze=n(36804),Te=n(88784);function Be(e){let{children:t}=e;return a.createElement(Te.Z,{title:t},a.createElement(o.Z,null,a.createElement(ze.Z,{fontSize:"inherit"})))}const qe=new Set([z.New,z.Waiting,z.Running]);function We(e){const{validating:t,userInfo:n,login:r}=(0,f.E)(),{data:o,loading:l,error:c,setAsyncData:i,clearState:s}=(0,A.P)(),u=(0,a.useRef)(),p=(0,d.Z)((e=>{t||n?(s(),i(async function(e){return await I.po.post("/explorer/questions/",{question:e},{withCredentials:!0})}(e))):r()})),h=(0,d.Z)((e=>{u.current!==e&&(u.current=e,i(T(e).then((e=>e))))}));(0,a.useEffect)((()=>{(0,m.nf)(e)&&(0,m.Rw)(o)&&!l&&h(e)}),[]),(0,a.useEffect)((()=>{(0,m.Rw)(e)&&s()}),[e]),(0,a.useEffect)((()=>{if((0,m.nf)(o)&&!l)switch(o.status){case z.New:case z.Waiting:case z.Running:{const e=setTimeout((()=>{i(T(o.id))}),1500);return()=>{clearTimeout(e)}}case z.Success:case z.Error:case z.Cancel:}}),[o,l]);const g=!(0,m.Rw)(o)&&qe.has(o.status),E=(null==o?void 0:o.status)===z.Cancel?new Error("Execution was canceled"):null==o?void 0:o.error;return{run:p,load:h,question:o,loading:l,resultPending:g,sqlError:c,resultError:E,clear:s}}const $e=(0,a.forwardRef)((function(e,t){var n,r;let{questionId:o,onLoading:l,onResultLoading:c,onChartLoading:i,onQuestionChange:s}=e;const{question:u,run:d,load:p,clear:h,loading:g,resultPending:f,sqlError:E,resultError:y}=We(o);(0,a.useEffect)((()=>{null==l||l(g)}),[g,l]),(0,a.useEffect)((()=>{(0,Le.h)(t,{run:d,load:p,clear(){h(),R()}})}),[]),(0,a.useEffect)((()=>{(0,m.nf)(u)&&(null==s||s(u))}),[u,s]);const v=(0,a.useMemo)((()=>{return(0,m.nf)(u)?(0,q.WU)(u.querySQL):(t=E,(0,H.IZ)(t)&&(0,m.nf)(t.response)&&(0,m.nf)(t.response.data)&&"string"==typeof t.response.data.message&&"string"==typeof t.response.data.querySQL?(0,q.WU)((null==(e=E.response)?void 0:e.data.querySQL)??"",{language:"mysql"}):void 0);var e,t}),[u,E]),b=(0,a.useMemo)((()=>!(0,m.Rw)(u)&&(!g&&f)),[u,g,f]);(0,a.useEffect)((()=>{null==c||c(b)}),[b,c]);const w=(0,a.useMemo)((()=>(0,m.Rw)(u)?g?"loading":"pending":"success"),[g,u]),Z=(0,a.useMemo)((()=>(0,m.Rw)(u)?g?"Generating SQL...":(0,m.Rw)(E)?"":"Failed to generate SQL":"Show SQL"),[u,g,E]),x=null==u||null==(n=u.result)?void 0:n.rows;(0,a.useEffect)((()=>{R()}),[u]);const{data:S,setData:C,loading:k,error:N,run:L,clear:R}=(0,A.c)(null==u?void 0:u.id,B);(0,a.useEffect)((()=>{null==i||i(k)}),[k,i]),(0,a.useEffect)((()=>{(0,m.nf)(u)&&((0,m.nf)(u.chart)?C(u.chart):(0,m.nf)(u.result)&&L())}),[null==u?void 0:u.result]);const F=(0,a.useMemo)((()=>{if(!(0,m.nf)(u))return"Pending...";switch(u.status){case z.New:return"Pending...";case z.Waiting:return"Waiting execution...";case z.Running:return"Running SQL...";case z.Success:return k?"Visualizing...":a.createElement(a.Fragment,null,`${(null==(e=u.result)?void 0:e.rows.length)??"NaN"} rows in ${u.spent??"NaN"} seconds`,function(e){if((0,m.nf)(e)&&!(0,m.yD)(e.engines))return a.createElement(a.Fragment,null,", Running on",a.createElement(Qe,null,e.engines.map(De).join(", ")),a.createElement(Be,null,a.createElement(P.Z,{variant:"body1"},a.createElement("b",null,"tikv"),": row-store engine",a.createElement("br",null),a.createElement("b",null,"tiflash"),": column-store engine"),a.createElement(ke.Z,{orientation:"horizontal",sx:{my:1.5},light:!0}),a.createElement(P.Z,{variant:"body2"},"Intelligent query processing in ",a.createElement("a",null,"TiDB optimizer"),".")));return null}(u));var e;case z.Error:return"Failed to execute SQL";case z.Cancel:return"Execution canceled";default:return"Unknown state"}}),[u,k]),I=(0,a.useMemo)((()=>(0,m.Rw)(u)?"pending":f||k?"loading":"success"),[u,g,f||k]);return console.log("status",I),a.createElement(a.Fragment,null,a.createElement(G,{status:w,title:Z,error:E,errorWithChildren:!0},(0,m.N6)(v)&&a.createElement(J.Z,{language:"sql"},v)),a.createElement(G,{status:I,title:F,extra:a.createElement(Ce.Z,null,"Play with your own data"),error:y,defaultExpanded:!0},a.createElement(Me,{chartData:S,chartError:N,result:x,fields:null==u||null==(r=u.result)?void 0:r.fields})))}));function De(e){switch(e){case"tiflash":return"column-store";case"tikv":return"row-store";default:return e}}const Qe=(0,u.ZP)("span")`
  color: #5667FF;
  border: 1px solid #5667FF80;
  border-radius: 2px;
  padding: 4px 8px;
  margin: 0 4px;
`;function Me(e){let{chartData:t,chartError:n,fields:r,result:o}=e;const[l,c]=(0,a.useState)("visualization");(0,a.useEffect)((()=>{c("visualization")}),[t]);const i=(e,t)=>{(0,m.GC)(t)&&c(t)};return(0,a.useMemo)((()=>{const e=function(e){return void 0===e&&(e=!1),a.createElement(Q.Z,{severity:"warning",sx:e?{mb:2}:void 0},"Unable to generate chart: ",(0,H.e$)(n))};if((0,m.Rw)(o))return(0,m.nf)(n)?e():null;const c=()=>a.createElement(ve,{chartName:"Table",title:"",data:o,fields:r});if((0,m.Rw)(t))return(0,m.nf)(n)?a.createElement(a.Fragment,null,e(!0),c()):null;const s=()=>a.createElement(Se,(0,F.Z)({},t,{data:o,fields:r}));return(0,m.nf)(n)?a.createElement(a.Fragment,null,e(!0),c()):"Table"===t.chartName?s():a.createElement(Ve,null,a.createElement(Ue,{className:"chart-controls"},a.createElement(Pe.Z,{size:"small",value:l,onChange:i,exclusive:!0,color:"primary"},a.createElement(Ne.Z,{value:"visualization"},a.createElement(Ae.Z,null)),a.createElement(Ne.Z,{value:"raw"},a.createElement(Ie.Z,null)))),a.createElement(Re.ZP,{value:l},a.createElement(je,{value:"visualization"},s()),a.createElement(je,{value:"raw"},c())))}),[l,t,n,o,r])}const Ue=(0,u.ZP)("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
  transition: opacity .2s ease;
`,Ve=(0,u.ZP)("div")`
  position: relative;
  &:hover > .chart-controls {
    opacity: 1;
  }
`,je=(0,u.ZP)(Fe.Z)`
  padding: 0;
`;var He=n(61953),Ge=n(50522);const Oe={hotTopics:{title:"\ud83d\udd25 Hot topics",color:"#E78F34"},programmingLanguage:{title:"\ud83d\udc7e Programming Language",color:"#8253F6"},trends:{title:"\ud83d\ude80 OSS trends",color:"#E78F34"},contributors:{title:"\ud83e\uddd1\u200d\ud83d\udcbb Contributors",color:"#C9B4FF"},stars:{title:"\ud83c\udf1f Stars",color:"#519AEB"},similarProjects:{title:"\ud83d\udd0d Similar projects",color:"#34A352"},location:{title:"\ud83c\udf0d Location",color:"#FFD7AD"},company:{title:"\ud83c\udfe2 Company",color:"#BCDAFF"}},_e=[{type:Oe.hotTopics,content:"Popular repos related to ChatGPT"},{type:Oe.hotTopics,content:"The most watched Web3 projects"},{type:Oe.programmingLanguage,content:"Top python projects 2022"},{type:Oe.programmingLanguage,content:"What is the distribution of primary language used in repositories"},{type:Oe.trends,content:"The closed PR monthly history of GitHub"},{type:Oe.trends,content:"The star history of GitHub all the time"},{type:Oe.contributors,content:"Contributor list of @pingcap/tidb"},{type:Oe.stars,content:"Star history of @carbon-language/carbon-lang"},{type:Oe.similarProjects,content:"Projects similar to @facebook/react"},{type:Oe.trends,content:"Top trending HCL repositories of the past month"},{type:Oe.location,content:"The most watched projects by India developers"},{type:Oe.location,content:"Where are @kubernetes/kubernetes contributors come from"},{type:Oe.company,content:"What projects Microsoft developers like to contribute to"}];function Ye(e){let{onSelect:t,disabled:n=!1,dense:r=!1}=e;return r?a.createElement(c.Z,{dense:!0},_e.map(((e,r)=>a.createElement(pe.ZP,{key:r},a.createElement(ge.Z,{disabled:n,onClick:()=>t(e.content)},a.createElement(fe.Z,null,e.content)))))):a.createElement(He.Z,{px:{xs:0,sm:2}},a.createElement(N.ZP,{container:!0},_e.map(((e,r)=>a.createElement(N.ZP,{item:!0,xs:12,sm:6,lg:4,xl:3,key:r,display:"flex",alignItems:"stretch",justifyContent:"stretch",p:1},a.createElement(Ze.Z,{sx:{p:2,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",textAlign:"left",width:"100%"},component:Ge.Z,disabled:n,onClick:()=>t(e.content)},a.createElement(Xe,{color:e.type.color},e.type.title),a.createElement("div",null,e.content)))))))}const Xe=(0,u.ZP)("div")`
  color: ${e=>{let{color:t}=e;return t}};
  background-color: ${e=>{let{color:t}=e;return`${t}40`}};
  border: 1px solid ${e=>{let{color:t}=e;return t}};
  border-radius: 6px;
  padding: 2px 6px;
  margin-bottom: 8px;
  width: max-content;
`;function Ke(){return a.createElement(a.Fragment,null,a.createElement(P.Z,{variant:"h2",textAlign:"center"},"FAQ"),a.createElement(Je,null,"How do I use this tool?"),a.createElement(et,null,"You can start with selecting a popular query from the query wall or directly input a short text query statement to the search box. OpenAI will translate your question into Structured Query Language (SQL), and we will use the generated SQL to query in the database and return the results."),a.createElement(Je,null,"Why the answer do not turn out to my intended?"),a.createElement(et,null,"We use the text completion provided by OpenAI to translate the text into Structured Query Language (SQL), and the final output depends on the accuracy of the generated SQL. If the final query result does not meet your expectation, please shorten your input statement and using more concise and clear short words for AI recognition."),a.createElement(Je,null,'Why is the output show "No Results Found"?'),a.createElement(et,null,"Unfortunately, we do not have any useful GitHub insights for you. Usually, there are three situations that cause the answer not to be found:",a.createElement("ol",null,a.createElement("li",null,"AI cannot recognize your text and cannot generate SQLs"),a.createElement("li",null,"AI misunderstand your text and generate wrong/bad SQLs"),a.createElement("li",null,'Data restrictions. We currently use repositories that have had active events in the past year as our demo source(approximately 1.2 billion rows of data). So if you want to ask a question about "dormant" repositories and developers, we will not be able to pass on more useful information.')),a.createElement("br",null),"The potential solution for 1,2 is describe your question with short, specific and normal words, then try again."))}const Je=(0,u.ZP)("h3")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`,et=(0,u.ZP)("div")`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #929292;
  margin-bottom: 48px;
`;var tt,nt,rt;function at(){return at=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},at.apply(this,arguments)}const ot=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",at({width:43,height:24,viewBox:"0 0 43 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,tt||(tt=a.createElement("rect",{x:.25,y:.25,width:42.5,height:23.5,rx:11.75,stroke:"url(#a)",strokeWidth:.5})),nt||(nt=a.createElement("path",{d:"M10.057 16V7.273h3.051c.608 0 1.11.105 1.504.315.395.207.69.487.882.84.194.349.29.737.29 1.163 0 .375-.067.685-.2.929-.13.244-.304.437-.52.58a2.364 2.364 0 0 1-.695.315v.085c.267.017.536.11.806.281.27.17.495.415.677.733.182.318.273.708.273 1.168 0 .437-.1.83-.298 1.18-.2.35-.513.627-.942.831-.429.205-.987.307-1.675.307h-3.153Zm1.057-.938h2.096c.69 0 1.18-.133 1.47-.4.293-.27.44-.597.44-.98 0-.296-.076-.568-.226-.818a1.635 1.635 0 0 0-.644-.606c-.278-.153-.608-.23-.989-.23h-2.147v3.034Zm0-3.954h1.96c.318 0 .605-.063.86-.188.26-.124.464-.3.614-.528.154-.227.23-.494.23-.801 0-.384-.133-.709-.4-.976-.267-.27-.69-.405-1.27-.405h-1.994v2.898Zm9.355 5.028c-.63 0-1.174-.139-1.632-.417a2.803 2.803 0 0 1-1.052-1.176c-.244-.506-.367-1.094-.367-1.765 0-.67.123-1.261.367-1.772.247-.514.59-.915 1.031-1.202.443-.29.96-.435 1.551-.435.341 0 .678.057 1.01.17.332.114.635.3.908.555.273.253.49.588.652 1.005.162.418.243.932.243 1.543v.426h-5.046v-.87h4.023c0-.369-.074-.698-.222-.988a1.67 1.67 0 0 0-.622-.686 1.742 1.742 0 0 0-.946-.251c-.4 0-.747.1-1.04.298-.29.196-.512.452-.669.767a2.253 2.253 0 0 0-.234 1.014v.58c0 .494.085.913.256 1.257.173.34.413.6.72.78a2.11 2.11 0 0 0 1.07.264c.264 0 .502-.037.715-.11.216-.077.402-.191.559-.342.156-.153.277-.344.362-.57l.971.272c-.102.33-.274.62-.515.87-.242.246-.54.44-.895.579a3.318 3.318 0 0 1-1.198.204Zm7.087-6.681v.852h-3.392v-.852h3.392Zm-2.403-1.569h1.005v6.239c0 .284.042.497.124.64a.64.64 0 0 0 .324.28c.133.046.274.069.422.069.11 0 .201-.006.272-.017l.17-.034.205.903a2.046 2.046 0 0 1-.285.077 2.102 2.102 0 0 1-.465.042c-.284 0-.562-.06-.835-.183a1.66 1.66 0 0 1-.673-.558c-.176-.25-.264-.566-.264-.946V7.886Zm5.842 8.267c-.415 0-.791-.078-1.13-.234a1.938 1.938 0 0 1-.805-.686c-.198-.301-.298-.665-.298-1.091 0-.375.074-.679.222-.912.147-.236.345-.42.592-.554.247-.133.52-.233.818-.298.301-.068.604-.122.908-.162.398-.051.72-.09.967-.115.25-.029.432-.075.546-.14.116-.066.174-.18.174-.342v-.034c0-.42-.115-.747-.345-.98-.227-.233-.572-.35-1.035-.35-.48 0-.857.106-1.13.316-.272.21-.464.435-.575.673l-.954-.34c.17-.398.397-.708.681-.93.287-.224.6-.38.938-.468.34-.091.676-.137 1.006-.137.21 0 .451.026.724.077.276.048.541.15.797.303.258.153.473.384.643.694.17.31.256.725.256 1.245V16h-1.006v-.886h-.05a1.77 1.77 0 0 1-.342.456c-.159.162-.37.3-.635.413-.264.114-.586.17-.967.17Zm.153-.903c.398 0 .733-.078 1.006-.234a1.595 1.595 0 0 0 .835-1.385v-.92c-.042.05-.136.097-.28.14-.143.04-.308.075-.495.106a22.444 22.444 0 0 1-.963.128 3.84 3.84 0 0 0-.733.166 1.263 1.263 0 0 0-.546.337c-.136.148-.204.35-.204.605 0 .35.129.614.387.793.262.176.593.264.993.264Z",fill:"url(#b)"})),rt||(rt=a.createElement("defs",null,a.createElement("linearGradient",{id:"a",x1:0,y1:24,x2:45.606,y2:24,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5667FF"}),a.createElement("stop",{offset:1,stopColor:"#A168FF"})),a.createElement("linearGradient",{id:"b",x1:9,y1:17,x2:37.636,y2:17,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#5667FF"}),a.createElement("stop",{offset:1,stopColor:"#A168FF"})))))};var lt=n(39731),ct=n(20486);const it=e=>`Force rendered ${e} times`;var st=n(2108);function ut(){const[e,t]=(0,st.ZP)("id",(0,st.Rc)(),!0),[n,o,l]=b(""),[c,i,s]=b(null),u=(0,a.useRef)({loading:!1,resultLoading:!1,chartLoading:!1}),p=function(){const[e,t]=(0,a.useState)(0);return(0,a.useDebugValue)(e,it),(0,d.Z)((()=>{t((e=>e+1))}))}(),[h]=(0,lt.h9)("explore-data"),g=u.current.resultLoading||u.current.loading||u.current.chartLoading;(0,a.useEffect)((()=>{(0,m.Rw)(e)?o(""):null==c||c.load(e)}),[e]);const f=(0,d.Z)((e=>{t(e.id),o(e.title)})),E=(0,d.Z)((e=>{var t,n;null==(t=s.current)||t.clear(),null==(n=s.current)||n.run(e),o(e)})),y=(0,d.Z)((()=>{u.current.resultLoading||u.current.loading||u.current.chartLoading||null==c||c.run(l.current)})),v=(0,d.Z)((()=>{t(void 0),o("")})),Z=(0,d.Z)((e=>{u.current.loading!==e&&(u.current.loading=e,p())})),x=(0,d.Z)((e=>{u.current.resultLoading!==e&&(u.current.resultLoading=e,p())})),S=(0,d.Z)((e=>{u.current.chartLoading!==e&&(u.current.chartLoading=e,p())})),C=(0,m.X0)(n)&&!(0,m.Rw)(n)&&(0,m.Rw)(e),F=(0,R.Z)(),A=(0,L.Z)(F.breakpoints.down("sm"));return h?a.createElement(r.Z,null,a.createElement(k.Z,{maxWidth:"xl",sx:{pt:8}},a.createElement(P.Z,{variant:"h1",textAlign:"center"},"Data Explorer",a.createElement(dt,null)),a.createElement(P.Z,{variant:"body2",textAlign:"center",mt:1,mb:2,color:"#7C7C7C"},"Analyze 5+ billion GitHub data from natural language, no prerequisite knowledge of SQL or plotting libraries necessary."),a.createElement(w,{value:n,onChange:o,onAction:y,disableInput:g,disableClear:""===n,disableAction:g,onClear:v,clearState:g?"stop":void 0})),a.createElement(k.Z,{maxWidth:"xl",sx:{pb:8,display:C?"none":void 0}},a.createElement(N.ZP,{container:!0},a.createElement(N.ZP,{item:!0,xs:12,md:9,lg:8},a.createElement($e,{ref:i,onLoading:Z,onResultLoading:x,onChartLoading:S,questionId:e,onQuestionChange:f})),a.createElement(N.ZP,{item:!0,xs:0,md:3,lg:4,sx:e=>({[e.breakpoints.down("sm")]:{display:"none"}})},a.createElement(P.Z,{variant:"h5",mx:4,my:2},"\ud83d\udd25 Try other questions"),a.createElement(Ye,{onSelect:E,dense:!0,disabled:g})))),C&&a.createElement(k.Z,{maxWidth:"xl",sx:{py:4}},a.createElement(Ye,{onSelect:E,dense:A})),a.createElement(k.Z,{maxWidth:"lg",sx:{pb:8}},a.createElement(Ke,null))):a.createElement(ct.default,null)}const dt=(0,u.ZP)(ot)`
  margin-left: 8px;
`},8106:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86010),o=n(95999);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function c(e){let{code:t,className:n}=e;const[c,i]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),u=(0,r.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),i(!0),s.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),r.createElement("button",{type:"button","aria-label":c?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,l.copyButton,c&&l.copyButtonCopied),onClick:u},r.createElement("span",{className:l.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:l.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:l.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(87462),a=n(63016),o=n(67294),l=n(61802),c=n(61953);function i(e){let{children:t,header:n,dark:i,sideWidth:s,Side:u,footer:d=!0,...m}=e;return(0,o.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),o.createElement(a.Z,(0,r.Z)({},m,{customFooter:d,header:n,sideWidth:s,side:s&&(0,l.nf)(u)?o.createElement(c.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},o.createElement(c.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},o.createElement(u,null))):void 0}),o.createElement("div",{hidden:!0,style:{height:72}}),o.createElement("div",{style:{paddingLeft:s,paddingRight:s}},o.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(95999),o=n(1944),l=n(63016),c=n(16550),i=n(29630),s=n(70754);function u(){const e=(0,c.k6)(),[t,n]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{var t,r;let{pathname:a,search:o,hash:l}=window.location;o=null==(t=o)?void 0:t.replace(/^\?/,""),l=null==(r=l)?void 0:r.replace(/^#/,"");const[c,...i]=a.split("/");if("analyze"===c){if(i.length>=1&&i.length<=2)return void e.replace({pathname:a,search:o,hash:l});if(0===i.length)return void e.replace({pathname:"/analyze/pingcap/tidb",search:o,hash:l})}n(!0)}),[]),r.createElement(r.Fragment,null,r.createElement(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})?void 0:"Loading...",description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",image:"/img/screenshots/homepage.png"}),r.createElement(l.Z,null,t?r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement(i.Z,{variant:"body1",fontSize:24},"Loading... \xa0",r.createElement(s.Z,{sx:{display:"inline-block"},size:24})))))))}},7449:(e,t,n)=>{function r(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}n.d(t,{h:()=>r})}}]);