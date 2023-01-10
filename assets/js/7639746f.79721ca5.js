"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2374,486],{6068:(e,t,n)=>{n.d(t,{vz:()=>r,A3:()=>Z,if:()=>x,uc:()=>c,y:()=>C});var a=n(67294),o=n(60338);function r(e){let{seriesName:t="Count",data:n,loading:r=!1,clear:l=!1,size:i,n:c,deps:s=[],categoryIndex:d,valueIndex:u,type:m="repo"}=e;i="lang"===m?48:i;const g=(0,a.useMemo)((()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:(l?0:8)+("owner"===m?24:0),top:l?0:16,bottom:l?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:n.map((e=>e[d])),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){switch(m){case"repo":default:return e;case"owner":case"lang":return`${e} {${e.replace(/[+-[\]]/g,"_")}|}`}},rich:(()=>{switch(m){case"owner":return n.reduce(((e,t)=>{var n;return e[String(t[d]).replace(/[-[\]]/g,"_")]={backgroundColor:{image:(n=`${t[d]}`,n.includes("[bot]")?"https://github.com/github.png":`https://github.com/${n}.png`)},width:24,height:24},e}),{});case"lang":return n.reduce(((e,t)=>(e[String(t[d]).replace(/\+/g,"_")]={backgroundColor:{image:`/img/lang/${t[d]}.png`},width:48,height:48},e)),{})}})()}},series:[{name:t,data:n.map((e=>e[u])),type:"bar",barWidth:l?i/2:i}]})),[n,...s,d,u,i,l]),h=(0,a.useMemo)((()=>r?400:Math.max(Math.min(c,n.length),5)*(i*(l?1:1.5))),[i,r,l]),p=(0,a.useMemo)((()=>({click:e=>{("repo"===m&&"name"in e||"owner"===m&&"name"in e)&&window.open(`https://github.com/${e.name}`)}})),[]);return a.createElement(o.ZP,{height:h,showLoading:r,option:g,notMerge:!1,lazyUpdate:!0,style:{marginBottom:16,borderRadius:"var(--ifm-global-radius)"},onEvents:p})}var l=n(55673),i=n(61802);function c(e){let{seriesName:t,loading:n,data:r,compareData:c,categoryIndex:s,valueIndex:d,deps:u=[]}=e;const m=function(e){return(0,a.useMemo)((()=>({type:"pie",radius:["35%","65%"],avoidLabelOverlap:!1,itemStyle:{borderColor:e?"#1e1e1f":"#ffffff",borderWidth:0},label:{show:!1,position:"center",formatter:"{b}: {d}%"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold",formatter:"{b}\n\n{c}"}},labelLine:{show:!1}})),[e])}((0,l.e)()),g=(0,a.useMemo)((()=>{const e=[],n={...m,name:t,data:r.map((e=>{const t=e[s];return{value:e[d],name:t}}))};if(e.push(n),(0,i.nf)(c)){n.center=["25%","55%"];const a={...m,name:t,center:["65%","55%"],data:c.map((e=>{const t=e[s];return{value:e[d],name:t}}))};e.push(a)}return e}),[m,r,c,...u,s,d]),h=(0,a.useMemo)((()=>({tooltip:Object.assign({trigger:"item"}),legend:{type:"scroll",orient:"vertical",right:"20px",top:20,bottom:20,x:"right",formatter:"{name}"},series:g,grid:{left:16,top:16,bottom:16,right:16,containLabel:!0}})),[g]);return a.createElement(o.ZP,{aspectRatio:16/9,showLoading:n,option:h,notMerge:!1,lazyUpdate:!0})}var s=n(91262),d=n(58316),u=n(53442),m=n(62097),g=n(61225),h=n(61953),p=n(55343),f=n(31538);const E=[];for(let A=-12;A<=13;A++)E.push(A);const y=["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"],b=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];function x(e){let{loading:t,data:n,xAxisColumnName:r,yAxisColumnName:l,valueColumnName:i,deps:c}=e;const x=(0,m.Z)(),v=(0,g.Z)(x.breakpoints.down("sm")),[w,S]=(0,a.useState)(0),Z=(0,a.useCallback)((e=>{S(e.target.value)}),[S]),{data:I,min:C,max:A}=(0,a.useMemo)((()=>{let e=Number.MAX_VALUE,t=Number.MIN_VALUE;const a=n.map((n=>{const a=Number(n[i]);return a>t&&(t=a),a<e&&(e=a),[(n[r]+w+24)%24,n[l],a]}));return{data:a,min:e,max:t}}),[n,w,v]),N=(0,a.useMemo)((()=>({tooltip:{show:!0},grid:v?{top:"0",bottom:"0",left:"0",right:"0",containLabel:!0}:{top:"0",bottom:"16%",left:"0",right:"0",containLabel:!0},xAxis:{type:"category",data:y,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold"},inverse:!1},yAxis:{type:"category",data:b,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold",rotate:0,fontSize:v?8:void 0},position:"top"},visualMap:{show:!v,min:C,max:A,orient:v?void 0:"horizontal",left:"center",bottom:0},series:{type:"heatmap",data:I,label:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}})),[I,v,...c]);return a.createElement(s.Z,null,(()=>a.createElement(h.Z,null,a.createElement(h.Z,{sx:{minWidth:120,mb:1}},a.createElement(p.Z,{size:"small"},a.createElement(d.Z,{id:"zone-select-label"},"Timezone (UTC)"),a.createElement(u.Z,{labelId:"zone-select-label",id:"zone-select",value:w,label:"Timezone (UTC)",onChange:Z,sx:{minWidth:120},variant:"standard"},E.map((e=>a.createElement(f.Z,{key:e,value:e},e>0?`+${e}`:e)))))),a.createElement(o.ZP,{aspectRatio:2.4,showLoading:t,option:N,notMerge:!1,lazyUpdate:!0}))))}var v=n(14850),w=n(34673),S=n(91655);function Z(e){let{sql:t,children:n}=e;return a.createElement(a.Fragment,null,a.createElement(w.Z,{summary:a.createElement("summary",null,"Click here to expand SQL")},(e=>{let t;return t=e?a.createElement(v.Z,{className:"language-sql"},e):a.createElement(h.Z,{sx:{pt:.5}},a.createElement(S.Z,{width:"80%"}),a.createElement(S.Z,{width:"50%"}),a.createElement(S.Z,{width:"70%"})),t})(t)),n)}var I=n(30454);function C(e){void 0===e&&(e=!0);const t="#E9EAEE",n="#2c2c2c",a="#3c3c3c",o=function(){return{axisLine:{lineStyle:{color:a}},axisTick:{lineStyle:{color:a}},axisLabel:{color:"#ccc"},splitLine:{lineStyle:{type:"dashed",color:"#2c2c2c",width:.5}},splitArea:{areaStyle:{color:t}},axisPointer:{label:{backgroundColor:n}},nameTextStyle:{fontStyle:"italic",color:"gray"}}},r=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],l={color:r,backgroundColor:"rgba(24, 25, 26)",tooltip:{backgroundColor:n,textStyle:{color:t},borderWidth:0,shadowBlur:8,shadowColor:"rgba(0, 0, 0, 0.618)",shadowOffsetX:0,shadowOffsetY:0,axisPointer:{lineStyle:{color:t},crossStyle:{color:t}},renderMode:"html"},grid:{containLabel:!0},legend:{textStyle:{color:t}},textStyle:{color:t},title:{left:"center",top:8,textStyle:{color:t,fontSize:14,align:"center"}},toolbox:{iconStyle:{borderColor:t}},dataZoom:{textStyle:{color:t}},timeline:{lineStyle:{color:t},itemStyle:{color:r[1]},label:{color:t},controlStyle:{color:t,borderColor:t}},timeAxis:o(),logAxis:o(),valueAxis:o(),categoryAxis:o(),line:{symbol:"circle"},graph:{color:r},gauge:{title:{textStyle:{color:t}}},candlestick:{itemStyle:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}},visualMap:{textStyle:{color:t}}};l.categoryAxis.splitLine.show=!1,(0,I.aW)("dark",l)}},74601:(e,t,n)=>{n.d(t,{O:()=>l,S:()=>r});var a=n(61802);let o;function r(e){o=e}function l(){if((0,a.Rw)(o))throw new Error("out of analyze chart context!");return o}},37031:(e,t,n)=>{n.d(t,{dC:()=>o,gx:()=>d,pW:()=>r,up:()=>c,wN:()=>l,yv:()=>i});var a=n(26667);const o="original",r="comparing";function l(e,t){return s(o,e,t)}function i(e,t){return s(r,e,t)}function c(e){return(0,a.XK)((t=>{let{datasetId:n,data:a}=t;return[s(n,a,e)]}))}function s(e,t,n){var a;const o=(null==t||null==(a=t.data)?void 0:a.data)??[];return{id:e,source:null!=n?n(o):o}}function d(e,t,n){return void 0===e&&(e=o),void 0===n&&(n=void 0),{id:e,source:t,dimensions:n}}},75559:(e,t,n)=>{n.d(t,{pW:()=>o.pW,n4:()=>C,Kb:()=>r,rs:()=>i,AH:()=>x,yv:()=>o.yv,vy:()=>M,gx:()=>o.gx,bh:()=>S,Sd:()=>c,BZ:()=>A,CI:()=>k,j3:()=>T,jv:()=>l,JJ:()=>v,wN:()=>o.wN,e5:()=>s,up:()=>o.up,BE:()=>I,TN:()=>L,wq:()=>G,P6:()=>a,E7:()=>b,Gn:()=>R,Mm:()=>P});var a={};n.r(a),n.d(a,{adjustAxis:()=>B,aggregate:()=>N.m_,debugPrintOption:()=>N.bR,min:()=>N.VV,simple:()=>N.lC,template:()=>N.XK});var o=n(37031);function r(e,t,n){return void 0===n&&(n={}),{name:String(t),datasetId:o.dC,...n,type:"bar",encode:{x:e,y:t,...n.encode}}}function l(e,t,n){return void 0===n&&(n={}),{name:String(t),datasetId:o.dC,showSymbol:!1,...n,type:"line",encode:{x:e,y:t,...n.encode}}}function i(e,t,n){return void 0===n&&(n={}),{datasetId:o.dC,...n,type:"boxplot",encode:{x:e,y:t,tooltip:t,...n.encode}}}function c(e,t,n,a){return void 0===a&&(a={}),{datasetId:o.dC,emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},...a,type:"heatmap",encode:{x:e,y:t,value:n,...a.encode}}}function s(e,t,n,a){void 0===a&&(a={});const o={coordinateSystem:"geo",encode:{lng:1,lat:2,value:3,tooltip:[0,3],itemId:0},symbolSize:e=>1+64*Math.sqrt(e[3]/n),...a};return[{type:"effectScatter",datasetId:`${e}_top_${t}`,...o},{type:"scatter",datasetId:`${e}_rest`,...o}]}var d=n(9996),u=n.n(d),m=n(31486),g=n.n(m),h=n(74601);function p(){const{isSmall:e}=(0,h.O)();return e}var f=n(30120),E=n(61802);function y(e,t){return t.includes(e)?e:void 0}function b(e,t){void 0===t&&(t={});const n=p();return u()(t,{id:e,type:"value",axisLabel:{formatter:e=>g()(e),margin:8},splitNumber:n?3:void 0,axisPointer:{label:{precision:0}},nameTextStyle:{opacity:n?0:1,align:y(t.position??"left",["left","right"])}})}function x(e,t){return void 0===t&&(t={}),u()(t,{id:e,type:"category",nameTextStyle:{align:y(t.position??"left",["left","right"])}})}function v(e,t){void 0===t&&(t={});const n=p();return u()(t,{id:e,type:"log",nameTextStyle:{opacity:n?0:1,align:y(t.position??"left",["left","right"])},splitNumber:n?3:void 0,axisLabel:{margin:8}})}const w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=e=>{const t=new Date(e);return`${w[t.getMonth()]} ${t.getFullYear()}`},Z=new Date;function I(e,t,n){return void 0===t&&(t={}),void 0===n&&(n="event_month"),u()(t,{id:e,type:"time",axisPointer:{label:{formatter:e=>{let{value:t}=e;return S(t)}}},min:(0,E.N6)(n)?!0===n?void 0:f.ou.fromISO(N.VV(n)).minus({month:1}).toJSDate():new Date(2011,0,1,0,0,0,0),max:f.ou.fromJSDate(new Date(Z.getFullYear(),Z.getMonth(),1,0,0,0,0)).plus({month:1}).toJSDate(),minInterval:24192e5})}function C(e,t){return void 0===t&&(t={}),{...t,show:!0,trigger:"axis",axisPointer:{...t.axisPointer,type:e}}}function A(e){return void 0===e&&(e={}),{renderMode:"html",...e,show:!0,trigger:"item"}}var N=n(26667);function L(e,t){void 0===t&&(t={});const{context:n,isSmall:a,comparingRepoName:o}=(0,h.O)();if(a)return;if((0,E.N6)(n.layout)||!o)return e?[{...t,text:e}]:[];const{layout:r,layoutTop:l,layoutSubGridHeight:i,layoutGap:c}=n;return"top-bottom"===r?(0,N.XK)(((e,t)=>{let{name:n}=e;return{text:n,textStyle:{fontWeight:"normal",color:"gray"},left:"center",top:l+(i+c)*t-24}})).concat(e?[{...t,text:e}]:[]):(0,N.XK)(((e,t)=>{let{name:n}=e;return{text:n,textStyle:{fontWeight:"normal",color:"gray"},left:25+50*t+"%",top:8}})).concat(e?{...t,text:e}:[])}function M(e){return void 0===e&&(e=void 0),p()?{show:!1}:{show:!0,left:8,right:8,realtime:!0,xAxisId:(0,N.XK)((e=>{let{id:t}=e;return t})),...e}}function P(){return{roam:!1,map:"world",silent:!0,zoom:1.7,top:"35%",projection:{project:e=>[e[0]/180*Math.PI,-Math.log(Math.tan((Math.PI/2+e[1]/180*Math.PI)/2))],unproject:e=>[180*e[0]/Math.PI,360/Math.PI*Math.atan(Math.exp(e[1]))-90]},itemStyle:{color:"#ccc",borderWidth:1,borderColor:"#ccc"}}}function T(e){return void 0===e&&(e={}),p()?{left:"center",padding:[0,32],top:0,type:"scroll",...e,orient:"horizontal"}:{left:8,top:8,...e,show:!0}}function R(e,t){return{show:!p(),min:0,max:t,orient:"horizontal",left:"center",bottom:8}}function F(e,t){void 0===t&&(t={});const n=p();return{top:n?32:64,bottom:n?8:48,left:n?0:8,right:n?0:8,...t,id:e}}function G(){const{context:e,height:t,isSmall:n,comparingRepoName:a}=(0,h.O)();if(a){const a=32,o=n?32:64,r=n?8:48,l=(t-o-r-a)/2,i=r+l+a,c=o+l+a;return e.layout="top-bottom",e.layoutTop=o,e.layoutSubGridHeight=l,e.layoutGap=a,[F("main",{top:o,bottom:i}),F("vs",{top:c,bottom:r})]}return F("main")}function k(){const{context:e,comparingRepoName:t}=(0,h.O)();return t?(e.layout="left-right",[F("main",{left:"8",right:"52%",top:"64",bottom:"48"}),F("vs",{left:"52%",right:"8",top:"64",bottom:"48"})]):F("main")}var D=n(51252);function B(e,t){if(0===e.length)return t.map((()=>({min:0,max:0})));const n=t.map((t=>function(e,t){if(0!==e.length)return e.reduce(((e,n)=>{const a=[...e];for(const o of t){const e=n[o];a[0]=Math.min(e,a[0]),a[1]=Math.max(e,a[1])}return a}),[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER])}(e,t))),a=n.reduce(((e,t)=>e||(0,E.nf)(t)&&t[1]>=0),!1),o=n.reduce(((e,t)=>e||(0,E.nf)(t)&&t[0]<=0),!1);if(!a||!o)return t.map((()=>({min:0,max:0})));let r=1/0;const l=[];for(const i of n)if((0,E.nf)(i)){const[e,t]=i;l.push(r);const n=Math.min(Math.abs(r-1));Math.max(t/-e-1)<n&&(r=t/-e)}else l.push(void 0);return n.map((e=>{if(e){const[t,n]=e;return{min:(0,D.r)(Math.min(t,-n/r)),max:(0,D.r)(Math.max(n,-t*r))}}return{min:0,max:0}}))}},26667:(e,t,n)=>{n.d(t,{VV:()=>s,XK:()=>l,bR:()=>d,lC:()=>i,m_:()=>c});var a=n(74601),o=n(37031),r=n(61802);function l(e){const{repoName:t,comparingRepoName:n,repoInfo:r,comparingRepoInfo:l,data:i,compareData:c,context:s}=(0,a.O)();let d=[];return d=d.concat(e({id:"main",datasetId:o.dC,repoInfo:r,data:i,name:t,context:s},0)),n&&(d=d.concat(e({id:"vs",datasetId:o.pW,repoInfo:l,data:c,name:n,context:s},1))),d}function i(e,t){const{comparingRepoName:n}=(0,a.O)();return n?t:e}function c(e){const{data:t,repoName:n,compareData:o,comparingRepoName:l}=(0,a.O)(),i=[],c=[];return(0,r.nf)(t)&&(i.push(t),c.push(n)),(0,r.nf)(o)&&(i.push(o),c.push(l)),e(i,c)}function s(e){const t=c((t=>t.flatMap((t=>{var n,a,o;return(null==(n=t.data)||null==(a=n.data)||null==(o=a[0])?void 0:o[e])??[]}))));return t.length>=2?t[0]<t[1]?t[0]:t[1]:1===t.length?t[0]:void 0}function d(){const{context:e}=(0,a.O)();e.DEBUG_PRINT_OPTION=!0}},51252:(e,t,n)=>{function a(e){if(0===e)return 0;const t=Math.sign(e),n=Math.abs(e);let a=1;for(;n>a;)a*=10;return a/=20,(Math.floor(n/a)+1)*a*t}n.d(t,{r:()=>a})},2108:(e,t,n)=>{n.d(t,{ON:()=>l,Rc:()=>i,ZP:()=>r,io:()=>c});var a=n(67294),o=n(61802);const r="undefined"==typeof window?function(e,t){let{defaultValue:n}=t;return[...(0,a.useState)(n)]}:function(e,t,n){let{defaultValue:r,deserialize:l,serialize:i}=t;void 0===n&&(n=!1);const c=(0,a.useMemo)((()=>{const t=new URLSearchParams(location.search).get(e);return(0,o.nf)(t)?l(t):r}),[]),[s,d]=(0,a.useState)(c),u=(0,a.useRef)(!0),m=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{u.current=!1}),[]),(0,a.useEffect)((()=>{if(m.current)return void(m.current=!1);const t=i(s),a=new URLSearchParams(location.search);if((0,o.Rw)(t)){if(!a.has(e))return;a.delete(e)}else{if(a.get(e)===t)return;a.set(e,t)}const r=a.toString(),l=r?`?${r}`:"",c=location.hash?`${location.hash}`:"",d=location.pathname+l+c;n?window.history.pushState(null,"",d):window.history.replaceState(null,"",d)}),[s]),(0,a.useEffect)((()=>{const t=()=>{m.current=!0;const t=new URLSearchParams(location.search).get(e);u.current=!0,(0,o.nf)(t)?d(l(t)):d(r),setTimeout((()=>{u.current=!1}),0)};return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)}),[]),[s,d]};function l(e){return{defaultValue:e,serialize:e=>e,deserialize:e=>e}}function i(e){return{defaultValue:e,serialize:e=>(0,o.GC)(e)?e:void 0,deserialize:e=>(0,o.GC)(e)?e:void 0}}function c(e){return void 0===e&&(e="true"),{defaultValue:()=>!1,serialize:t=>(0,o.N6)(t)?e:void 0,deserialize:t=>Boolean(t===e)}}},74446:(e,t,n)=>{n.d(t,{b:()=>i,$:()=>l});const a=JSON.parse('[{"code":"MQ","lat":14.60426,"long":-61.06697},{"code":"GH","lat":5.56454,"long":-0.22571},{"code":"HN","lat":14.97503281,"long":-86.26477051},{"code":"LB","lat":33.92541122,"long":35.89972687},{"code":"RW","lat":-1.94496,"long":30.06205},{"code":"FM","lat":6.91664,"long":158.14997},{"code":"MK","lat":41.60045624,"long":21.70089531},{"code":"TZ","lat":-6.18124,"long":35.74816},{"code":"MR","lat":20.25899506,"long":-10.3644371},{"code":"GN","lat":10.7226226,"long":-10.7083587},{"code":"BY","lat":53.89769,"long":27.54942},{"code":"IS","lat":64.92856598,"long":-18.96170044},{"code":"GF","lat":4.938,"long":-52.33505},{"code":"UZ","lat":41.31644,"long":69.29486},{"code":"GP","lat":15.99285,"long":-61.72753},{"code":"US","lat":38.89206,"long":-77.01991},{"code":"BG","lat":42.69649,"long":23.32601},{"code":"LK","lat":6.93197,"long":79.85775},{"code":"FR","lat":48.85689,"long":2.35085},{"code":"PS","lat":31.8261625,"long":35.2282841},{"code":"ML","lat":12.65225,"long":-7.9817},{"code":"WS","lat":-13.66897297,"long":-172.32202148},{"code":"FK","lat":-51.72731018,"long":-61.26863861},{"code":"LR","lat":6.31033,"long":-10.80674},{"code":"BW","lat":-22.18675232,"long":23.81494141},{"code":"TC","lat":21.44449997,"long":-71.14230347},{"code":"MM","lat":16.96751,"long":96.1631},{"code":"TJ","lat":38.57415,"long":68.78651},{"code":"MX","lat":19.43268,"long":-99.13421},{"code":"SE","lat":59.33279,"long":18.06449},{"code":"SA","lat":24.69497,"long":46.72413},{"code":"IN","lat":28.63243,"long":77.21879},{"code":"BV","lat":-54.4342041,"long":3.41025114},{"code":"TH","lat":13.75396,"long":100.50224},{"code":"EE","lat":59.44269,"long":24.7532},{"code":"HU","lat":47.49814,"long":19.04055},{"code":"GS","lat":-54.27415,"long":-36.51122},{"code":"TN","lat":36.80007,"long":10.18706},{"code":"AE","lat":24.48818,"long":54.35495},{"code":"VG","lat":18.4235363,"long":-64.62605286},{"code":"GI","lat":36.13584137,"long":-5.34924889},{"code":"NG","lat":9.06146,"long":7.50064},{"code":"GU","lat":13.42112923,"long":144.73971558},{"code":"MO","lat":22.19204,"long":113.55126},{"code":"BD","lat":23.93072701,"long":89.01164246},{"code":"TF","lat":-49.31373,"long":69.48754},{"code":"FO","lat":62.01017,"long":-6.77306},{"code":"MT","lat":35.93336487,"long":14.3810339},{"code":"PH","lat":14.58226,"long":120.9748},{"code":"XK","lat":42.66544,"long":21.16532},{"code":"KE","lat":-1.28579,"long":36.82003},{"code":"PN","lat":-24.37211418,"long":-128.31124878},{"code":"CA","lat":45.42042,"long":-75.69243},{"code":"LT","lat":55.33871841,"long":23.870924},{"code":"PF","lat":-17.53726,"long":-149.56603},{"code":"WF","lat":-13.29961205,"long":-176.17012024},{"code":"CR","lat":9.90958,"long":-84.05406},{"code":"TW","lat":25.03841,"long":121.5637},{"code":"SB","lat":-10.81599998,"long":166},{"code":"PY","lat":-25.3,"long":-57.63},{"code":"RS","lat":44.81507,"long":20.46048},{"code":"DJ","lat":11.60047,"long":43.15083},{"code":"ZW","lat":-19.00028038,"long":29.86876106},{"code":"AM","lat":40.17397,"long":44.50275},{"code":"UY","lat":-34.90556,"long":-56.18525},{"code":"SL","lat":8.61643982,"long":-13.19550037},{"code":"NF","lat":-29.0402,"long":167.95754},{"code":"OM","lat":20.56662178,"long":56.1579628},{"code":"CK","lat":-21.22330666,"long":-159.74055481},{"code":"RU","lat":55.75654,"long":37.61492},{"code":"AL","lat":41.11113358,"long":20.02745247},{"code":"TG","lat":8.51322651,"long":0.98009753},{"code":"KR","lat":37.55796,"long":127.50469},{"code":"AR","lat":-34.60903,"long":-58.37322},{"code":"VN","lat":21.02828,"long":105.85388},{"code":"BI","lat":-3.38227,"long":29.36358},{"code":"PW","lat":7.44190073,"long":134.54205322},{"code":"SM","lat":43.93813324,"long":12.46339321},{"code":"SK","lat":48.1464,"long":17.10688},{"code":"NP","lat":27.71202,"long":85.31295},{"code":"CM","lat":3.86177,"long":11.51875},{"code":"GD","lat":12.17886639,"long":-61.64693069},{"code":"AQ","lat":-80.46613,"long":21.34609},{"code":"KM","lat":-11.70379,"long":43.25519},{"code":"SR","lat":4.21692896,"long":-55.88921738},{"code":"UG","lat":0.31569,"long":32.57811},{"code":"ER","lat":15.39719963,"long":39.08718872},{"code":"BS","lat":25.04659,"long":-77.3766},{"code":"CL","lat":-33.44599,"long":-70.66706},{"code":"BZ","lat":17.22529221,"long":-88.66973877},{"code":"PG","lat":-9.46707,"long":147.19603},{"code":"NZ","lat":-46.16393,"long":169.87507},{"code":"GW","lat":12.11586285,"long":-14.74813652},{"code":"DZ","lat":28.21364594,"long":2.65472817},{"code":"LA","lat":17.96216,"long":102.61163},{"code":"CO","lat":4.60688,"long":-74.07184},{"code":"NU","lat":-19.03806496,"long":-169.83024597},{"code":"CX","lat":-10.49029064,"long":105.63275146},{"code":"VU","lat":-16.37668419,"long":167.5625},{"code":"VI","lat":17.75262451,"long":-64.73542023},{"code":"GG","lat":49.45633,"long":-2.57923},{"code":"NI","lat":12.13932,"long":-86.26096},{"code":"SX","lat":18.03039,"long":-63.04478},{"code":"ME","lat":42.43806,"long":19.26555},{"code":"BN","lat":4.88068,"long":114.92227},{"code":"GY","lat":6.8084,"long":-58.16138},{"code":"MA","lat":34.02199,"long":-6.83762},{"code":"BF","lat":12.37153,"long":-1.51992},{"code":"AO","lat":-8.81602,"long":13.23192},{"code":"TD","lat":15.36765289,"long":18.66758156},{"code":"AT","lat":47.06798,"long":15.48663},{"code":"TV","lat":-8.52047,"long":179.19958},{"code":"AX","lat":60.1785247,"long":19.9156105},{"code":"NC","lat":-21.31782341,"long":165.29858398},{"code":"JP","lat":35.68992615,"long":139.6917572},{"code":"BJ","lat":9.62411213,"long":2.33773875},{"code":"SO","lat":9.8333333,"long":49.1666667},{"code":"ET","lat":9.03314,"long":38.75008},{"code":"VC","lat":13.21725178,"long":-61.19344711},{"code":"BH","lat":26.23269,"long":50.57811},{"code":"ST","lat":0.27555528,"long":6.63162804},{"code":"ID","lat":-6.17476,"long":106.82707},{"code":"SY","lat":33.50198,"long":36.29805},{"code":"SN","lat":14.36251163,"long":-14.53164387},{"code":"MV","lat":4.18588495,"long":73.53071594},{"code":"DM","lat":15.39910603,"long":-61.33945847},{"code":"IE","lat":53.3441,"long":-6.26749},{"code":"MD","lat":47.0242,"long":28.83183},{"code":"BT","lat":27.45759,"long":89.62302},{"code":"KP","lat":39.02138,"long":125.75275},{"code":"AF","lat":34.52184,"long":69.18067},{"code":"BO","lat":-16.71305466,"long":-64.66664886},{"code":"SH","lat":-15.92763,"long":-5.71556},{"code":"SJ","lat":71.04893494,"long":-8.19574738},{"code":"AN","lat":12.18907833,"long":-68.25680542},{"code":"ZA","lat":-25.74602,"long":28.18712},{"code":"NL","lat":52.37317,"long":4.89066},{"code":"NR","lat":-0.5316065,"long":166.93640137},{"code":"RO","lat":44.43558,"long":26.10222},{"code":"KN","lat":17.2444725,"long":-62.64318466},{"code":"LV","lat":56.94625,"long":24.10425},{"code":"YT","lat":-12.79636002,"long":45.14227295},{"code":"CH","lat":46.948,"long":7.44813},{"code":"JO","lat":31.27576256,"long":36.82838821},{"code":"KH","lat":12.57042313,"long":104.81391144},{"code":"CF","lat":6.57412338,"long":20.48692322},{"code":"UA","lat":50.44773,"long":30.54272},{"code":"DK","lat":55.67576,"long":12.56902},{"code":"CN","lat":39.93084,"long":116.38634},{"code":"PE","lat":-12.05798,"long":-77.03713},{"code":"PA","lat":8.9673,"long":-79.5339},{"code":"AZ","lat":40.143105,"long":47.576927},{"code":"AS","lat":-14.30065,"long":-170.71812},{"code":"SI","lat":46.12023926,"long":14.82066441},{"code":"BQ","lat":12.14887,"long":-68.27369},{"code":"CC","lat":-12.1409,"long":96.82352},{"code":"SZ","lat":-26.32608,"long":31.14608},{"code":"JM","lat":18.14344406,"long":-77.34654999},{"code":"AU","lat":-35.28078,"long":149.1314},{"code":"SS","lat":4.84364,"long":31.60336},{"code":"GE","lat":41.69363,"long":44.80162},{"code":"BR","lat":-18.45639,"long":-44.67345},{"code":"AI","lat":18.1954947,"long":-63.0750234},{"code":"ES","lat":40.41669,"long":-3.70035},{"code":"GA","lat":-0.8999695,"long":11.6899699},{"code":"MY","lat":2.5490005,"long":102.96261597},{"code":"BL","lat":17.89502,"long":-62.84932},{"code":"KI","lat":-2.81631565,"long":-171.66738892},{"code":"SC","lat":-4.62354,"long":55.45249},{"code":"MG","lat":-18.90848,"long":47.53751},{"code":"CZ","lat":50.08781,"long":14.42046},{"code":"EC","lat":-0.21495,"long":-78.5132},{"code":"DO","lat":18.47202,"long":-69.90203},{"code":"NO","lat":59.91382,"long":10.73874},{"code":"BB","lat":13.1127,"long":-59.61357},{"code":"BM","lat":32.30266953,"long":-64.7516861},{"code":"CU","lat":23.12814,"long":-82.38972},{"code":"MW","lat":-13.99572,"long":33.75982},{"code":"CI","lat":6.82147,"long":-5.27985},{"code":"KZ","lat":51.1776,"long":71.433},{"code":"LY","lat":32.89222,"long":13.17308},{"code":"FJ","lat":-17.65816116,"long":178.14726257},{"code":"CD","lat":-4.32153,"long":15.31185},{"code":"PT","lat":38.70701,"long":-9.13564},{"code":"GM","lat":13.44026566,"long":-15.49088478},{"code":"JE","lat":49.22850418,"long":-2.12289286},{"code":"HM","lat":-53.08010864,"long":73.56218719},{"code":"GL","lat":74.34954834,"long":-41.08988953},{"code":"YE","lat":15.88838768,"long":47.48988724},{"code":"MP","lat":15.18883,"long":145.7535},{"code":"CV","lat":15.18300247,"long":-23.70345116},{"code":"GB","lat":51.50015,"long":-0.12624},{"code":"RE","lat":-21.14629936,"long":55.63124847},{"code":"TO","lat":-21.37624,"long":-174.93218},{"code":"AD","lat":42.50753,"long":1.52182},{"code":"HK","lat":22.28215,"long":114.15688},{"code":"TT","lat":10.65782,"long":-61.51671},{"code":"MF","lat":18.04222488,"long":-63.06623459},{"code":"SV","lat":13.67163658,"long":-88.8636322},{"code":"GR","lat":37.97534,"long":23.73615},{"code":"BA","lat":44.16825485,"long":17.78524971},{"code":"MN","lat":47.92287,"long":106.92327},{"code":"BE","lat":50.84554,"long":4.35571},{"code":"IT","lat":41.89056,"long":12.49427},{"code":"SD","lat":16.08578491,"long":30.0873909},{"code":"IO","lat":-7.26162,"long":72.37777},{"code":"MH","lat":7.12052,"long":171.36576},{"code":"GQ","lat":1.533126,"long":10.37258148},{"code":"HR","lat":45.81491,"long":15.97851},{"code":"LU","lat":49.77788162,"long":6.09474611},{"code":"MC","lat":43.73251,"long":7.41904},{"code":"IL","lat":31.78902,"long":35.20108},{"code":"QA","lat":25.41362572,"long":51.26026535},{"code":"TM","lat":39.2012825,"long":59.0822525},{"code":"SG","lat":1.28944,"long":103.84998},{"code":"AW","lat":12.50652313,"long":-69.96931458},{"code":"PR","lat":18.22452,"long":-66.47963},{"code":"CY","lat":35.17025,"long":33.3587},{"code":"ZM","lat":-13.45884514,"long":27.78809738},{"code":"EG","lat":26.75610352,"long":29.86229706},{"code":"LI","lat":47.14104,"long":9.52145},{"code":"VA","lat":41.90397,"long":12.45755},{"code":"NE","lat":11.96142101,"long":2.53115416},{"code":"PK","lat":33.72,"long":73.06},{"code":"KY","lat":19.30025,"long":-81.376},{"code":"LS","lat":-29.58175278,"long":28.24661255},{"code":"FI","lat":60.16981,"long":24.93813},{"code":"VE","lat":10.50278,"long":-66.91905},{"code":"DE","lat":52.52343,"long":13.41144},{"code":"AG","lat":17.09273911,"long":-61.81040955},{"code":"IM","lat":54.22814,"long":-4.53814},{"code":"NA","lat":-22.56522,"long":17.0843},{"code":"TL","lat":-8.80478668,"long":126.07902527},{"code":"LC","lat":14.01159,"long":-60.98823},{"code":"MU","lat":-20.22040939,"long":57.58937836},{"code":"GT","lat":14.64198,"long":-90.51324},{"code":"PM","lat":46.90594482,"long":-56.336586},{"code":"CW","lat":12.12161,"long":-68.94942},{"code":"TR","lat":39.89652,"long":32.86197},{"code":"KG","lat":42.88442,"long":74.57662},{"code":"IQ","lat":33.04458618,"long":43.77495575},{"code":"UM","lat":6.41093,"long":-162.46546},{"code":"TK","lat":-8.97920799,"long":-172.20170593},{"code":"MZ","lat":-25.97325,"long":32.57203},{"code":"HT","lat":18.54639,"long":-72.34279},{"code":"CG","lat":-4.2739,"long":15.28151},{"code":"MS","lat":16.70611,"long":-62.21337},{"code":"PL","lat":52.23498,"long":21.00849},{"code":"KW","lat":29.36857,"long":47.97283},{"code":"IR","lat":35.6864,"long":51.43286}]'),o=JSON.parse('{"AF":"Afghanistan","AX":"\xc5land Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia (Plurinational State of)","BQ":"Bonaire, Sint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo (Democratic Republic of the)","CK":"Cook Islands","CR":"Costa Rica","CI":"C\xf4te d\'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Cura\xe7ao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Holy See","HN":"Honduras","HK":"Hong Kong (China)","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran (Islamic Republic of)","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea (Democratic People\'s Republic of)","KR":"Korea (Republic of)","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao (China)","MK":"Macedonia (the former Yugoslav Republic of)","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia (Federated States of)","MD":"Moldova (Republic of)","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestina, State of","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"R\xe9union","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint Barth\xe9lemy","SH":"Saint Helena, Ascension and Tristan da Cunha","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin (French part)","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten (Dutch part)","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan, Province of China","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States of America","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela (Bolivarian Republic of)","VN":"Viet Nam","VG":"Virgin Islands (British)","VI":"Virgin Islands (U.S.)","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}'),r=a.reduce(((e,t)=>{let{code:n,long:a,lat:o}=t;return e[n]={long:a,lat:o},e}),{}),l=e=>o[e],i=e=>r[e]},87537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Bn});var a=n(88242),o=n(67294),r=n(39731),l=n(20486),i=n(84191);let c;!function(e){e.New="new",e.AnswerGenerating="answer_generating",e.SQLValidating="sql_validating",e.Waiting="waiting",e.Running="running",e.Success="success",e.Error="error",e.Cancel="cancel"}(c||(c={}));var s=n(22638),d=n(61802);async function u(e){return await new Promise((t=>setTimeout(t,e)))}var m=n(88100);let g;!function(e){e[e.NONE=0]="NONE",e[e.LOADING=1]="LOADING",e[e.LOAD_FAILED=2]="LOAD_FAILED",e[e.CREATING=3]="CREATING",e[e.CREATED=4]="CREATED",e[e.GENERATING_SQL=5]="GENERATING_SQL",e[e.VALIDATING_SQL=6]="VALIDATING_SQL",e[e.CREATE_FAILED=7]="CREATE_FAILED",e[e.GENERATE_SQL_FAILED=8]="GENERATE_SQL_FAILED",e[e.QUEUEING=9]="QUEUEING",e[e.EXECUTING=10]="EXECUTING",e[e.EXECUTE_FAILED=11]="EXECUTE_FAILED",e[e.VISUALIZE_FAILED=12]="VISUALIZE_FAILED",e[e.UNKNOWN_ERROR=13]="UNKNOWN_ERROR",e[e.READY=14]="READY"}(g||(g={}));const h=new Set([g.NONE,g.READY,g.UNKNOWN_ERROR,g.GENERATE_SQL_FAILED,g.VISUALIZE_FAILED,g.CREATE_FAILED,g.LOAD_FAILED,g.EXECUTE_FAILED]);function p(e,t){switch(e.status){case c.New:return g.CREATED;case c.AnswerGenerating:case c.SQLValidating:return g.GENERATING_SQL;case c.Waiting:return g.QUEUEING;case c.Running:return g.EXECUTING;case c.Success:return(0,d.nf)(e.chart)?g.READY:g.VISUALIZE_FAILED;case c.Error:return(0,d.nf)(e.error)?t(e.error):t("Empty error message"),(0,d.X0)(e.querySQL)?g.GENERATE_SQL_FAILED:(0,d.X0)(e.result)?g.EXECUTE_FAILED:(0,d.X0)(e.chart)?g.VISUALIZE_FAILED:g.UNKNOWN_ERROR;case c.Cancel:return(0,d.nf)(e.error)?t(e.error):t("Execution was cancelled"),g.EXECUTE_FAILED}}function f(e){let{pollInterval:t=2e3}=e;const[n,a]=(0,o.useState)(g.NONE),[r,l]=(0,o.useState)(),[c,h]=(0,o.useState)(!1),[f,E]=(0,o.useState)(),y=(0,o.useRef)(),{isLoading:b,user:x,getAccessTokenSilently:v,loginWithPopup:w}=(0,m.D3)(),S=(0,s.Z)((async function(e,t){if(y.current!==e||!c){y.current=e;try{t&&(E(void 0),l(void 0),a(g.LOADING)),h(!0);const n=await async function(e){return await i.po.get(`/explorer/questions/${e}`)}(e);y.current=n.id,a(p(n,E)),l(n)}catch(n){return a(g.LOAD_FAILED),E(n),await Promise.reject(n)}finally{h(!1)}}})),Z=(0,s.Z)((e=>{S(e,!0)})),I=(0,s.Z)((e=>{!async function(e){try{if(!b&&!x)return await w();E(void 0),l(void 0),h(!0),a(g.CREATING);const t=await v(),n=await async function(e,t){const{accessToken:n}=t;return await i.po.post("/explorer/questions/",{question:e},{withCredentials:!0,oToken:n})}(e,{accessToken:t});await u(600),y.current=n.id,a(p(n,E)),l(n)}catch(t){return a(g.CREATE_FAILED),E(t),await Promise.reject(t)}finally{h(!1)}}(e)})),C=(0,s.Z)((()=>{a(g.NONE),l(void 0),h(!1),E(void 0),y.current=void 0}));return(0,o.useEffect)((()=>{switch((0,d.z0)(t)&&t<1e3&&(t=1e3),n){case g.GENERATING_SQL:case g.EXECUTING:case g.QUEUEING:{const e=setTimeout((()=>{(0,d.GC)(y.current)&&S(y.current,!1)}),t);return()=>{clearTimeout(e)}}}}),[n,c,t]),{phase:n,question:r,loading:c,error:f,load:Z,create:I,reset:C}}const E=(0,o.createContext)({phase:g.NONE,question:void 0,loading:!1,error:void 0,load(){},create(){},reset(){}});function y(){return(0,o.useContext)(E)}E.displayName="QuestionManagementContext";var b=n(2108),x=n(61953),v=n(36336),w=n(81719),S=n(26432);const Z=(0,o.createContext)({handleSelect(){}});function I(){return o.createElement(C,null,o.createElement(N,null),o.createElement(L,null))}const C=(0,w.ZP)("div",{name:"Decorators-Container"})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 200vh;
  pointer-events: none;
  overflow: hidden;
`,A=(0,w.ZP)("div")`
  display: block;
  position: absolute;
  background-position: left top;
  background-repeat: no-repeat;
`,N=(0,w.ZP)(A)`
  background-image: url('/img/ellipse-2.svg');
  left: 41px;
  top: 81px;
  right: 0;
  width: 696px;
  height: 696px;
  background-size: 696px 696px;
  overflow: hidden;
`,L=(0,w.ZP)(A)`
  background-image: url('/img/ellipse-2.svg');
  top: 241px;
  right: 0;
  width: 961px;
  height: 1072px;
  background-size: 961px 1072px;
  overflow: hidden;
`;var M=n(98885),P=n(8410);const T=400;function R(e){let{children:t,header:n,side:a,footer:r,showFooter:l,showSide:i,showHeader:c}=e;const s=(0,o.useRef)(null),d=(0,o.useRef)(null),u=(0,o.useRef)(null),m=(0,P.Z)(s),g=(0,o.useMemo)((()=>(null==m?void 0:m.height)??0),[null==m?void 0:m.height]);return o.createElement(F,{maxWidth:"xl"},o.createElement(M.ZP,{nodeRef:s,in:c,timeout:T},(e=>o.createElement(o.Fragment,null,o.createElement(k,{ref:s,className:`Header-${e}`,height:g},n),o.createElement(G,{className:`Body-header-${e}`,headerHeight:g},o.createElement(M.ZP,{nodeRef:d,in:i,timeout:T},(e=>o.createElement(D,{ref:d,className:`Main-side-${e}`},t))),o.createElement(M.ZP,{nodeRef:u,in:i,timeout:T,unmountOnExit:!0},(e=>o.createElement(B,{ref:u,className:`Side-${e}`},a))))))),o.createElement($,null,l&&r))}const F=(0,w.ZP)(v.Z,{name:"Layout-Root"})`
  padding-top: 64px;

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    padding-top: 16px;
  }

  min-height: calc(100vh - 92px);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,G=(0,w.ZP)("div",{name:"Layout-Body",shouldForwardProp:e=>"headerHeight"!==e})`
  --explore-layout-side-width: ${250}px;

  ${e=>{let{theme:t}=e;return t.breakpoints.up("lg")}} {
    --explore-layout-side-width: ${275}px;
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("xl")}} {
    --explore-layout-side-width: ${300}px;
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
    padding-right: var(--explore-layout-side-width);
  }

  position: relative;
  margin: 0 auto;
  width: 100%;

  ${e=>{let{theme:t}=e;return t.breakpoints.up("xl")}} {
    max-width: ${e=>{let{theme:t}=e;return`calc(${t.breakpoints.values.lg}px + var(--explore-layout-side-width))`}};
  }

  transform: translate3d(0, -${e=>{let{headerHeight:t}=e;return t+32+40}}px, 0);
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("transform",{duration:T})}};

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    transform: translate3d(0, -${e=>{let{headerHeight:t}=e;return t+32-8}}px, 0);
  }

  ${O("Body-header",!0)} {
    opacity: 1;
    transform: initial;
  }
`,k=(0,w.ZP)("div",{name:"Layout-Header",shouldForwardProp:e=>"height"!==e})`
  opacity: 0.1;
  transform: translate3d(0, -${e=>{let{height:t}=e;return t+32+40}}px, 0);
  margin-bottom: ${32}px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["transform","opacity"],{duration:T})}};

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    transform: translate3d(0, -${e=>{let{height:t}=e;return t+32}}px, 0);
  }

  ${O("Header",!0)} {
    opacity: 1;
    transform: initial;
  }
`,D=(0,w.ZP)("div",{name:"Layout-Main"})`
  width: 100%;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["transform","opacity"],{duration:T})}};

  ${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
    transform: translateX(calc(var(--explore-layout-side-width) / 2));
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
    max-width: calc(100%);
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("xl")}} {
    max-width: ${e=>{let{theme:t}=e;return t.breakpoints.values.lg}}px;
  }

  ${O("Main-side",!0)} {
    transform: initial;
  }
`,B=(0,w.ZP)("div",{name:"Layout-Side"})`
  position: absolute;
  right: 0;
  top: 0;
  width: var(--explore-layout-side-width);
  height: 100%;
  opacity: 0;
  transform: translateX(calc(var(--explore-layout-side-width) / 2));
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["transform","opacity"],{duration:T})}};
  padding: 0 24px;
  box-sizing: border-box;

  ${O("Side",!0)} {
    display: block;
    transform: initial;
    opacity: 1;
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    display: none !important;
  }
`,$=(0,w.ZP)("div",{name:"Layout-Footer"})`
  position: relative;
  display: flex;
  align-self: stretch;
  flex: 1;
  min-height: 160px;
  align-items: center;
  justify-content: center;
`;function O(e,t){return t?`&.${e}-entering, &.${e}-entered`:`&.${e}-exiting, &.${e}-exited`}var U,z,_;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}const H=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",q({width:43,height:24,viewBox:"0 0 43 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,U||(U=o.createElement("rect",{x:.25,y:.25,width:42.5,height:23.5,rx:11.75,stroke:"url(#a)",strokeWidth:.5})),z||(z=o.createElement("path",{d:"M10.057 16V7.273h3.051c.608 0 1.11.105 1.504.315.395.207.69.487.882.84.194.349.29.737.29 1.163 0 .375-.067.685-.2.929-.13.244-.304.437-.52.58a2.364 2.364 0 0 1-.695.315v.085c.267.017.536.11.806.281.27.17.495.415.677.733.182.318.273.708.273 1.168 0 .437-.1.83-.298 1.18-.2.35-.513.627-.942.831-.429.205-.987.307-1.675.307h-3.153Zm1.057-.938h2.096c.69 0 1.18-.133 1.47-.4.293-.27.44-.597.44-.98 0-.296-.076-.568-.226-.818a1.635 1.635 0 0 0-.644-.606c-.278-.153-.608-.23-.989-.23h-2.147v3.034Zm0-3.954h1.96c.318 0 .605-.063.86-.188.26-.124.464-.3.614-.528.154-.227.23-.494.23-.801 0-.384-.133-.709-.4-.976-.267-.27-.69-.405-1.27-.405h-1.994v2.898Zm9.355 5.028c-.63 0-1.174-.139-1.632-.417a2.803 2.803 0 0 1-1.052-1.176c-.244-.506-.367-1.094-.367-1.765 0-.67.123-1.261.367-1.772.247-.514.59-.915 1.031-1.202.443-.29.96-.435 1.551-.435.341 0 .678.057 1.01.17.332.114.635.3.908.555.273.253.49.588.652 1.005.162.418.243.932.243 1.543v.426h-5.046v-.87h4.023c0-.369-.074-.698-.222-.988a1.67 1.67 0 0 0-.622-.686 1.742 1.742 0 0 0-.946-.251c-.4 0-.747.1-1.04.298-.29.196-.512.452-.669.767a2.253 2.253 0 0 0-.234 1.014v.58c0 .494.085.913.256 1.257.173.34.413.6.72.78a2.11 2.11 0 0 0 1.07.264c.264 0 .502-.037.715-.11.216-.077.402-.191.559-.342.156-.153.277-.344.362-.57l.971.272c-.102.33-.274.62-.515.87-.242.246-.54.44-.895.579a3.318 3.318 0 0 1-1.198.204Zm7.087-6.681v.852h-3.392v-.852h3.392Zm-2.403-1.569h1.005v6.239c0 .284.042.497.124.64a.64.64 0 0 0 .324.28c.133.046.274.069.422.069.11 0 .201-.006.272-.017l.17-.034.205.903a2.046 2.046 0 0 1-.285.077 2.102 2.102 0 0 1-.465.042c-.284 0-.562-.06-.835-.183a1.66 1.66 0 0 1-.673-.558c-.176-.25-.264-.566-.264-.946V7.886Zm5.842 8.267c-.415 0-.791-.078-1.13-.234a1.938 1.938 0 0 1-.805-.686c-.198-.301-.298-.665-.298-1.091 0-.375.074-.679.222-.912.147-.236.345-.42.592-.554.247-.133.52-.233.818-.298.301-.068.604-.122.908-.162.398-.051.72-.09.967-.115.25-.029.432-.075.546-.14.116-.066.174-.18.174-.342v-.034c0-.42-.115-.747-.345-.98-.227-.233-.572-.35-1.035-.35-.48 0-.857.106-1.13.316-.272.21-.464.435-.575.673l-.954-.34c.17-.398.397-.708.681-.93.287-.224.6-.38.938-.468.34-.091.676-.137 1.006-.137.21 0 .451.026.724.077.276.048.541.15.797.303.258.153.473.384.643.694.17.31.256.725.256 1.245V16h-1.006v-.886h-.05a1.77 1.77 0 0 1-.342.456c-.159.162-.37.3-.635.413-.264.114-.586.17-.967.17Zm.153-.903c.398 0 .733-.078 1.006-.234a1.595 1.595 0 0 0 .835-1.385v-.92c-.042.05-.136.097-.28.14-.143.04-.308.075-.495.106a22.444 22.444 0 0 1-.963.128 3.84 3.84 0 0 0-.733.166 1.263 1.263 0 0 0-.546.337c-.136.148-.204.35-.204.605 0 .35.129.614.387.793.262.176.593.264.993.264Z",fill:"url(#b)"})),_||(_=o.createElement("defs",null,o.createElement("linearGradient",{id:"a",x1:0,y1:24,x2:45.606,y2:24,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#5667FF"}),o.createElement("stop",{offset:1,stopColor:"#A168FF"})),o.createElement("linearGradient",{id:"b",x1:9,y1:17,x2:37.636,y2:17,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#5667FF"}),o.createElement("stop",{offset:1,stopColor:"#A168FF"})))))},W=(0,w.ZP)("b",{shouldForwardProp:e=>"color"!==e})`
  color: ${e=>{let{color:t}=e;return t}};
`,Q=o.createElement(o.Fragment,null,"Explore ",o.createElement(W,{color:"#9197D0"},"5 billion")," GitHub data with no SQL or plotting skills. Unleash your ",o.createElement(W,{color:"#5C6AE0"},"imagination")," and discover new ",o.createElement(W,{color:"#7D71C7"},"insights")," NOW!");function V(){return o.createElement(Y,null,o.createElement(X,null,o.createElement(J,null,"Data Explorer"),o.createElement(K,null)),o.createElement(j,null,Q))}const K=(0,w.ZP)(H)`
  margin-left: 8px;
`,Y=(0,w.ZP)("div",{shouldForwardProp:e=>"display"!==e})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`,X=(0,w.ZP)("h1")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,J=(0,w.ZP)("span")`
`,j=(0,w.ZP)("p")`
  color: #7C7C7C;
  margin: 0;
`;var ee=n(80562),te=n(75345),ne=n(9144),ae=n(95537),oe=n(63871),re=n(89022);function le(e){let{value:t,onChange:n,onAction:a,onClear:r,disableInput:l=!1,disableAction:i=!1,disableClear:c=!1,clearState:s}=e;const d=(0,o.useRef)(null),{isLoading:u,isAuthenticated:g}=(0,m.D3)(),h=(0,S.Z)((e=>{n(e.target.value)})),p=(0,S.Z)((e=>{"Enter"===e.key&&(i||null==a||a())}));return o.createElement(o.Fragment,null,o.createElement(ie,{fullWidth:!0,disabled:u&&!g||l,ref:d,value:t,onChange:h,onKeyDown:p,placeholder:"Type any question here, or choose one below",endAdornment:o.createElement(ne.Z,{direction:"row",gap:1},!i&&o.createElement(ce,{color:"inherit",onClick:a,disabled:i},o.createElement(oe.Z,null)),o.createElement(ce,{color:"stop"===s?"error":"inherit",onClick:r,disabled:c},"stop"===s?o.createElement(re.Z,null):o.createElement(ae.Z,null)))}))}const ie=(0,w.ZP)(te.ZP)`
  background-color: #eaeaea;
  color: #3c3c3c;
  border-radius: 6px;
  font-size: 20px;
  padding: 14px;
  line-height: 1;

  &.Mui-disabled {
    color: rgb(60, 60, 60, 0.7);
    
    & > input {
      -webkit-text-fill-color: unset;
    }
  }
`,ce=(0,w.ZP)(ee.Z)`
  &.Mui-disabled {
    color: rgb(60, 60, 60, 0.3);
  }
`;function se(e){const{marginTop:t,marginBottom:n}=getComputedStyle(e);return e.offsetHeight+parseFloat(t)+parseFloat(n)}function de(e){let{state:t,transitionDelay:n=0,transitionDuration:a=400,offset:r=120,direction:l="up",revert:i=!1,children:c}=e;const s=(0,o.useRef)(null),u=(0,o.useRef)(null),[m,g]=(0,o.useState)();(0,o.useEffect)((()=>{if(2!==c.length)throw new Error("SwitchLayout should have exactly two children");if((0,d.Rw)(c[0].key)||(0,d.Rw)(c[1].key))throw new Error("SwitchLayout's children must have keys")}),[]);const h=(0,S.Z)((()=>{(0,d.nf)(s.current)&&g(se(s.current))})),p=(0,S.Z)((()=>{(0,d.nf)(u.current)&&g(se(u.current))})),f=(0,S.Z)((()=>{g(void 0)})),E=(0,S.Z)((()=>{(0,d.nf)(u.current)&&g(se(u.current))})),y=(0,S.Z)((()=>{(0,d.nf)(s.current)&&g(se(s.current))})),b=(0,S.Z)((()=>{g(void 0)})),x=n+a;return o.createElement(ue,{offset:r,style:{height:m},duration:a,delay:n},o.createElement(M.ZP,{key:c[0].key,in:t===c[0].key,timeout:x,unmountOnExit:!0,onExit:h,onExiting:p,onExited:f},(e=>o.createElement(me,{ref:s,className:`SwitchItem-${l} SwitchItem-${e}`,duration:a,delay:n,offset:r},c[0]))),o.createElement(M.ZP,{key:c[1].key,in:t===c[1].key,timeout:x,unmountOnExit:!0,onExit:E,onExiting:y,onExited:b},(e=>o.createElement(me,{ref:u,className:`SwitchItem-${i?"up"===l?"down":"up":l} SwitchItem-${e}`,duration:a,delay:n,offset:r},c[1]))))}const ue=(0,w.ZP)("div",{name:"SwitchLayoutContainer",shouldForwardProp:e=>!["duration","delay","offset"].includes(String(e))})`
  position: relative;
  transition: ${e=>{let{theme:t,duration:n,delay:a}=e;return t.transitions.create("height",{duration:n,delay:a})}};
`,me=(0,w.ZP)("div",{name:"SwitchItem",shouldForwardProp:e=>!["offset","duration","delay"].includes(String(e))})`
  transition: ${e=>{let{theme:t,duration:n,delay:a}=e;return t.transitions.create(["opacity","transform"],{duration:n,delay:a})}};
  opacity: 0;
  padding: 0.1px;

  &.SwitchItem-exiting, &.SwitchItem-entering {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &.SwitchItem-enter, &.SwitchItem-exiting, &.SwitchItem-exited {
    opacity: 0;
  }

  &.SwitchItem-up {
    &.SwitchItem-enter {
      transform: translate3d(0, ${e=>{let{offset:t}=e;return t}}px, 0);
    }

    &.SwitchItem-exiting, &.SwitchItem-exited {
      transform: translate3d(0, -${e=>{let{offset:t}=e;return t}}px, 0);
    }
  }

  &.SwitchItem-down {
    &.SwitchItem-enter {
      transform: translate3d(0, -${e=>{let{offset:t}=e;return t}}px, 0);
    }

    &.SwitchItem-exiting, &.SwitchItem-exited {
      transform: translate3d(0, ${e=>{let{offset:t}=e;return t}}px, 0);
    }
  }

  &.SwitchItem-exit, &.SwitchItem-entering, &.SwitchItem-entered {
    opacity: 1;
    transform: initial;
  }
`;var ge=n(87462),he=n(36782),pe=n(74065),fe=n(47028),Ee=n(29618),ye=n(70754),be=n(70918),xe=n(70983),ve=n(96812),we=n(6571),Se=n(47135),Ze=n(19604),Ie=n(29630);function Ce(e,t){void 0===t&&(t={});const n=new URL(`https://github.com/${e}/issues/new`);return Object.entries(t).forEach((e=>{let[t,a]=e;n.searchParams.set(t,a)})),n.toString()}var Ae=n(54566),Ne=n(21039),Le=n(23147),Me=n(79072),Pe=n(91655),Te=n(50522),Re=n(39960);const Fe=(0,w.ZP)("div",{name:"Highlight-Background"})`
  position: relative;
  background: linear-gradient(116.45deg, #595FEC 0%, rgba(200, 182, 252, 0.2) 96.73%);
  padding: 1px;
  border-radius: 7px;
  width: 100%;
`,Ge=(0,w.ZP)(Te.Z,{name:"Highlight-Content"})`
  display: block;
  font-size: 14px;
  line-height: 1.25;
  background-color: rgba(44, 44, 44, 0.8);
  border-radius: 6px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("background-color")}};
  padding: 18px;
  text-align: left;
  width: 100%;
  height: 100%;
  vertical-align: top;

  &:hover {
    background-color: rgba(44, 44, 44, 0.5);
  }
`,ke=(0,w.ZP)(Fe,{name:"HighlightButton-Background"})`
  display: inline-block;
  border-radius: 17px;
  max-width: max-content;
  color: white !important;
  text-decoration: none !important;
`;(0,w.ZP)(Ge,{name:"HighlightButton-Content"})`
  display: flex;
  border-radius: 16px;
  align-items: center;
  padding: 8px;
  max-width: max-content;
`,ke.withComponent(Te.Z),ke.withComponent(Re.Z);function De(e){let{question:t,variant:n="card",disabled:a}=e;const{handleSelect:r}=(0,o.useContext)(Z),l=(0,S.Z)((()=>{"string"==typeof t&&r(t)}));switch(n){case"recommended-card":return o.createElement(Fe,null,o.createElement(Ge,{onClick:l,disabled:a},t),o.createElement($e,null,"\u2728"));case"card":return o.createElement(Ge,{onClick:l,disabled:a},t);default:return o.createElement(Be,{disableRipple:!0,disableTouchRipple:!0,onClick:l,disabled:a},t)}}const Be=(0,w.ZP)(Te.Z,{name:"QuestionCard-Link"})`
  display: block;
  text-align: left;
  padding: 8px 0;
  font-size: 14px;
  line-height: 1.5;
  color: #c1c1c1;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("color")}};

  &:hover {
    color: white;
  }
`,$e=(0,w.ZP)("span")`
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-size: 12px;
`;var Oe=n(8100);function Ue(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=n;return t}function ze(e,t){const{data:n,isValidating:a,mutate:r}=(0,Oe.ZP)([e,t,"data-explorer-recommend-question"],{fetcher:async(e,t)=>await async function(e,t){return await i.po.get("/explorer/questions/recommend",{params:{aiGenerated:e,n:t}})}(e,t),shouldRetryOnError:!1,revalidateIfStale:!1,revalidateOnReconnect:!1,revalidateOnFocus:!1});return{data:n,loading:a,reload:(0,o.useMemo)((()=>()=>{r(void 0,{revalidate:!0}).catch(console.error)}),[])}}function _e(e){let{variant:t,disabled:n,questions:a,n:r}=e;const l=0===a.length?(()=>{const e=e=>o.createElement(De,{key:e,variant:t,question:"text"===t?o.createElement(Pe.Z,{width:"230px"}):o.createElement(o.Fragment,null,o.createElement(Pe.Z,{width:"100%"}),o.createElement(Pe.Z,{width:"61%"})),disabled:!0});return"text"===t?Ue(r).map(e):Ue(r).map((t=>o.createElement(Me.ZP,{item:!0,xs:12,md:4,key:t,display:"flex",alignItems:"stretch",justifyContent:"stretch"},e(t))))})():(()=>{const e=(e,a)=>o.createElement(De,{key:a,variant:t,question:e.title,disabled:n});return"text"===t?a.map(e):a.map(((t,n)=>o.createElement(Me.ZP,{item:!0,xs:12,md:4,key:t.hash,display:"flex",alignItems:"stretch",justifyContent:"stretch"},e(t,n))))})();return"text"===t?o.createElement(x.Z,null,l):o.createElement(Me.ZP,{container:!0,spacing:2},l)}function qe(e){let{aiGenerated:t=!1,n:n,disabled:a=!1,title:r,variant:l}=e;const{data:i=[],reload:c,loading:s}=ze(t,n);return o.createElement(o.Fragment,null,(null==r?void 0:r(c,s))??null,o.createElement(_e,{n:n,questions:i,disabled:a,variant:l??(t?"recommended-card":"card")}))}function He(e){let{severity:t,sx:n,children:a,createIssueUrl:r=(()=>Ce("pingcap/ossinsight")),showSuggestions:l}=e;const i=(0,S.Z)((()=>{var e;null==(e=document.getElementById("data-explorer-faq"))||e.scrollIntoView({behavior:"smooth"})})),c=(0,S.Z)((()=>{window.open(r(),"_blank")}));return o.createElement(o.Fragment,null,o.createElement(We,{sx:n,variant:"outlined",severity:t},o.createElement(Ie.Z,{variant:"body1"},a),o.createElement(ne.Z,{direction:"row",spacing:2,mt:2},o.createElement(Ve,{onClick:i},o.createElement(Ne.Z,{fontSize:"inherit",sx:{mr:.5}}),o.createElement("span",null,"See faq")),o.createElement(Ve,{onClick:c},o.createElement(Le.Z,{fontSize:"inherit",sx:{mr:.5}}),o.createElement("span",null,"Feedback")))),l&&o.createElement(Qe,null,o.createElement(qe,{title:(e,t)=>o.createElement(x.Z,{component:"p",m:0,mt:2,height:"40px"},"How about try other questions? ",o.createElement(ee.Z,{onClick:e,disabled:t},o.createElement(Ae.Z,null))),n:5,variant:"text"})))}const We=(0,w.ZP)(Ze.Z)`
  background: #18191A;
  border-color: transparent;
`,Qe=(0,w.ZP)("div")`
  margin-top: 16px;
`,Ve=(0,w.ZP)("button")`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: #fff;
  opacity: 0.5;
  font-size: inherit;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  margin-left: 16px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("opacity")}};

  &:hover, &:focus {
    opacity: 0.7;
  }
  
  &:first-of-type {
    margin-left: 0;
  }
`;function Ke(e){void 0===e&&(e="");try{return(0,he.WU)(e,{language:"mysql"})}catch{return e}}function Ye(){const{question:e}=y(),t=(0,o.useMemo)((()=>()=>Ce("pingcap/ossinsight",{title:`Empty result from question ${(null==e?void 0:e.id)??""}`,labels:"area/data-explorer",body:`\nHi, The result of [question](https://ossinsight.io/explore/?id=${(null==e?void 0:e.id)??""}) is empty\nThe title is: **${(null==e?void 0:e.title)??""}**\n\nGenerated SQL is:\n\`\`\`mysql\n${Ke(null==e?void 0:e.querySQL)}\n\`\`\` \n      `})),[e]);return o.createElement(He,{severity:"info",createIssueUrl:t,showSuggestions:!0},"This question has no results.")}function Xe(e){let{severity:t,title:n,prompt:a,sx:r,error:l,showSuggestions:i}=e;const{question:c}=y();return o.createElement(He,{severity:t,sx:r,createIssueUrl:()=>Ce("pingcap/ossinsight",{title:`${n} for question ${(null==c?void 0:c.id)??""}`,body:`\n${a} [question](https://ossinsight.io/explore?id=${(null==c?void 0:c.id)??""})\n\n## Question title\n**${(null==c?void 0:c.title)??""}**\n\n## Error message\n${l}\n${(0,d.nf)(null==c?void 0:c.querySQL)?`\n## Generated SQL\n\`\`\`mysql\n${Ke(null==c?void 0:c.querySQL)}\n\`\`\`\n`:""}\n${(0,d.nf)(null==c?void 0:c.chart)?`\n## Chart info\n\`\`\`json\n${JSON.stringify(null==c?void 0:c.chart,void 0,2)}\n\`\`\`\n`:""}\n`,labels:"area/data-explorer,type/bug"}),showSuggestions:i&&!(0,Se.X_)(l,429)},n,": ",l)}function Je(e){let{status:t,title:n,defaultExpanded:a,extra:r,error:l,errorWithChildren:i=!1,children:c,errorPrompt:s,errorTitle:u}=e;const[m,g]=(0,o.useState)(!1);(0,o.useEffect)((()=>{switch(t){case"loading":g(!1);break;case"error":g(!0)}}),[t]);const h=!0===a,p=(0,S.Z)(((e,t)=>{h||g(t)}));return o.createElement(je,{className:"pending"===t?"pending":(0,d.Rw)(l)?t:"error",elevation:1},o.createElement(et,{expanded:!!h||m,defaultExpanded:a,elevation:0,onChange:p},o.createElement(tt,{alwaysOpen:h,expandIcon:(0,d.X0)(a)&&o.createElement(we.Z,null),disabled:"loading"===t},o.createElement(nt,null,"loading"===t?o.createElement(ye.Z,{size:16}):"success"===t&&(0,d.Rw)(l)?o.createElement(xe.Z,{color:"success",fontSize:"inherit"}):o.createElement(ve.Z,{color:"disabled",fontSize:"inherit"}),o.createElement(ot,null,n),(0,d.N6)(r)?o.createElement(o.Fragment,null,o.createElement(rt,null),o.createElement(at,null,"auto"===r?m?"Hide":"Show":r)):void 0)),o.createElement(fe.Z,null,i?(0,d.Rw)(l)?c:o.createElement(o.Fragment,null,o.createElement(Xe,{title:u,prompt:s,error:(0,Se.e$)(l),severity:"error",sx:{mb:1},showSuggestions:!0}),c):(0,d.Rw)(l)?c:o.createElement(Xe,{title:u,prompt:s,error:(0,Se.e$)(l),severity:"error",sx:{mb:1},showSuggestions:!0}))))}const je=(0,w.ZP)(be.Z)`
  background: linear-gradient(116.45deg, rgba(89, 95, 236, 0.5) 0%, rgba(200, 182, 252, 0.1) 96.73%);
  padding: 1px;
  border-radius: 6px;
  margin-top: 12px;

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

  &.pending {
    transform: translateY(20px);
    opacity: 0;
  }

`,et=(0,w.ZP)(pe.Z)`
  border: none;
  background: rgb(36, 35, 43);
  border-radius: 5px !important;
  padding: 4px 8px;
`,tt=(0,w.ZP)(Ee.Z,{shouldForwardProp:e=>"alwaysOpen"!==e})`
  .MuiAccordionSummary-content {
    margin-top: 4px;
    margin-bottom: 4px;
  }

  ${e=>{let{alwaysOpen:t}=e;return t?"cursor: default !important;":""}}
`,nt=(0,w.ZP)("h2")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
`,at=(0,w.ZP)("span")`
  color: #d7d7d7;
  font-weight: normal;
`,ot=(0,w.ZP)("span")`
  margin-left: 8px;
`,rt=(0,w.ZP)("span")`
  flex: 1;
`;var lt=n(14850),it=n(66284);function ct(e){return"number"==typeof e?e>=1970&&e<2100:ct(Number(e))}function st(e,t){return e.map((e=>{let n=e[t];return ct(n)&&(n=new Date(String(n))),{...e,[t]:n}}))}function dt(e,t){return(0,d.YN)(t,(e=>!(0,d.Rw)(e)&&(e instanceof Array?e.length>0&&(0,d.YN)(e,d.GC):(0,d.GC)(e))))?e.filter((e=>(0,d.YN)(t,(e=>t=>"string"==typeof t?(0,d.nf)(e[t]):(0,d.YN)(t,(t=>(0,d.nf)(e[t]))))(e)))):[]}var ut=n(60338),mt=n(68023),gt=n(33989),ht=n(31281),pt=n(8690),ft=n(27240),Et=n(76395);(0,mt.D)([gt.N,ht.N,pt.N,ft.N,Et.N]);var yt=n(44731),bt=n(85214),xt=n(81284),vt=n(19594),wt=n(95309),St=n(61702);function Zt(e){let{title:t,data:n,columns:a,fields:r}=e;const l=(0,o.useMemo)((()=>(0,d.uW)(a)?a.map((e=>({name:e}))):(0,d.nf)(r)?r:n.length>0?Object.keys(n[0]).map((e=>({name:e}))):[{name:""}]),[n,a,r]);return o.createElement(It,null,o.createElement(Ct,{className:"clearTable"},o.createElement("thead",null,(0,d.GC)(t)&&o.createElement("tr",null,o.createElement("th",{colSpan:l.length,align:"center"},t)),o.createElement("tr",null,l.map((e=>{let{name:t}=e;return o.createElement("th",{key:t},t)})))),o.createElement("tbody",null,n.map(((e,t)=>o.createElement("tr",{key:t},l.map((t=>{let{name:n}=t;return o.createElement("td",{key:n},e[n])}))))))))}const It=(0,w.ZP)("div")`
  overflow: scroll;
`,Ct=(0,w.ZP)("table")`
  font-size: 12px;
  display: table;
  min-width: 100%;
`;var At=n(49837),Nt=n(91359),Lt=n(45344);var Mt=n(74446),Pt=n(75559),Tt=n(40172);const Rt=(0,w.ZP)("div")`
  height: 100%;
`;function Ft(e){let{title:t}=e;const{question:n}=y(),a=(0,o.useMemo)((()=>()=>{var e,a,o,r;return Ce("pingcap/ossinsight",{title:`${t} in question ${(null==n?void 0:n.id)??""}`,labels:"area/data-explorer,type/bug",assignee:"Mini256",body:`\nHi, ${t} in [question](https://ossinsight.io/explore/?id=${(null==n?void 0:n.id)??""})\n      \n## Chart info:\n\`\`\`json\n${JSON.stringify(null==n?void 0:n.chart,void 0,2)}\n\`\`\`\n\n## Result info:\n\`\`\`json\n// Fields\n${JSON.stringify(null==n||null==(e=n.result)?void 0:e.fields,void 0,2)}\n\n// First result (Totally ${(null==n||null==(a=n.result)?void 0:a.rows.length)??0} rows)\n${JSON.stringify(null==n||null==(o=n.result)||null==(r=o.rows)?void 0:r[0],void 0,2)}\n\`\`\`\n      `})}),[n]);return o.createElement(He,{severity:"warning",sx:{mb:2},createIssueUrl:a},t)}(0,n(6068).y)();const Gt={LineChart:{Chart:function(e){let{chartName:t,title:n,x:a,y:r,data:l}=e;const i=(0,o.useMemo)((()=>{const e=/date|time|year|month/.test(a);l=e?st(l,a):l;const t=function(e){return"string"==typeof e?{type:"line",datasetId:"raw",name:e,encode:{x:a,y:e},itemStyle:{opacity:0}}:e.map(t)};return{dataset:{id:"raw",source:l},backgroundColor:"rgb(36, 35, 43)",grid:{top:64,left:8,right:8,bottom:8},tooltip:{trigger:"axis"},legend:{left:"center",top:28},series:t(r),title:{text:n},xAxis:{type:e?"time":"category"},yAxis:{type:"value"},animationDuration:2e3}}),[t,n,a,r,l]);return o.createElement(it.Z,{theme:"dark",style:{height:400},opts:{height:400},option:i})},requiredFields:["x","y"]},BarChart:{Chart:function(e){let{chartName:t,title:n,x:a,y:r,data:l}=e;const i=(0,o.useMemo)((()=>{const e=/date|time|year|month/.test(a);l=e?st(l,a):l;const t=function(e){return"string"==typeof e?{type:"bar",name:e,datasetId:"raw",encode:{x:a,y:e}}:e.map(t)};return{dataset:{id:"raw",source:l},backgroundColor:"rgb(36, 35, 43)",grid:{top:64,left:8,right:8,bottom:8},tooltip:{},legend:{left:"center",top:28},series:t(r),title:{text:n},xAxis:{type:e?"time":"category"},yAxis:{type:"value"},animationDuration:2e3}}),[t,n,a,r,l]);return o.createElement(it.Z,{theme:"dark",style:{height:400},opts:{height:400},option:i})},requiredFields:["x","y"]},PieChart:{Chart:function(e){let{chartName:t,title:n,value:a,label:r,data:l}=e;const i=(0,o.useMemo)((()=>({backgroundColor:"rgb(36, 35, 43)",dataset:{id:"raw",source:l},grid:{top:64,left:8,right:8,bottom:8},tooltip:{},legend:{left:8,top:8,height:"90%",type:"scroll",orient:"vertical"},series:{type:"pie",name:r,datasetId:"raw",encode:{itemName:r,value:a}},title:{text:n}})),[t,n,a,r,l]);return o.createElement(ut.ZP,{height:400,option:i})},requiredFields:["value","label"]},PersonalCard:{Chart:function(e){let{chartName:t,title:n,user_login:a,data:r}=e;return o.createElement(bt.Z,null,r.map(((e,t)=>o.createElement(xt.ZP,{key:t},o.createElement(wt.Z,{component:"a",href:`https://github.com/${e[a]}`,target:"_blank"},o.createElement(vt.Z,null,o.createElement(yt.Z,{src:`https://github.com/${e[a]}.png`})),o.createElement(St.Z,null,e[a]))))))},requiredFields:["user_login"]},RepoCard:{Chart:function(e){let{chartName:t,title:n,repo_name:a,data:r}=e;return o.createElement(bt.Z,null,r.map(((e,t)=>o.createElement(xt.ZP,{key:t},o.createElement(wt.Z,{component:"a",href:`https://github.com/${e[a]}`,target:"_blank"},o.createElement(vt.Z,null,o.createElement(yt.Z,{src:`https://github.com/${e[a].split("/")[0]}.png`})),o.createElement(St.Z,null,e[a]))))))},requiredFields:["repo_name"]},Table:{Chart:Zt,requiredFields:[]},NumberCard:{Chart:function(e){let{chartName:t,title:n,label:a,value:r,data:l}=e;if((0,d.N6)(a)){if(1===l.length&&(0,d.Rw)(l[0][a])){const e=l[0][r];return o.createElement(At.Z,null,o.createElement(Nt.Z,{sx:{textAlign:"center",fontSize:36}},o.createElement(Ie.Z,{sx:{opacity:.4},fontSize:22,mt:2,mb:0,color:"text.secondary",gutterBottom:!0,align:"center"},n),(0,d.z0)(e)?o.createElement(Lt.Z,{value:l[0][r],hasComma:!0,duration:800,size:36}):String(e)))}return o.createElement(o.Fragment,null,o.createElement(Ie.Z,{variant:"h4"},n),o.createElement(Me.ZP,{container:!0,spacing:1,mt:1},l.map(((e,t)=>o.createElement(Me.ZP,{key:t,item:!0,xs:12,sm:4,md:3,lg:2},o.createElement(At.Z,{sx:{p:2}},o.createElement(Ie.Z,{variant:"subtitle1"},e[a]),o.createElement(Ie.Z,{variant:"body2",color:"#7c7c7c"},e[r])))))))}return o.createElement(bt.Z,null,l.map(((e,t)=>o.createElement(xt.ZP,{key:t},o.createElement(At.Z,{sx:{p:4}},o.createElement(St.Z,{primary:n,secondary:`${e[r]}`}))))))},requiredFields:["value"],optionalFields:["label"]},MapChart:{Chart:function(e){let{chartName:t,title:n,country_code:a,value:r,data:l}=e;const[i,c]=(0,o.useState)(null),s=(0,o.useRef)(null),u=(0,o.useMemo)((()=>function(e,t,n){return e.map((e=>{const a=(0,Mt.$)(e[t]),{long:o,lat:r}=(0,Mt.b)(e[t])??{};return[a,o,r,e[n]]})).filter((e=>{let[t]=e;return(0,d.GC)(t)})).sort(((e,t)=>Math.sign(t[3]-e[3])))}(l,a,r)),[l,a,r]),m=(0,o.useMemo)((()=>{var e,t;const a=(null==(e=u[0])?void 0:e[3])??0;return{backgroundColor:"rgb(36, 35, 43)",geo:(0,Pt.Mm)(),dataset:[{id:"top1",source:u.slice(0,1)},{id:"rest",source:u.slice(1)}],title:{text:n},legend:{show:!0,left:8,top:24,orient:"vertical"},series:[{type:"effectScatter",datasetId:"top1",coordinateSystem:"geo",name:`Top 1 (${null==(t=u[0])?void 0:t[0]})`,encode:{lng:1,lat:2,value:3,itemId:0},symbolSize:e=>1+64*Math.sqrt(e[3]/a)},{type:"scatter",datasetId:"rest",coordinateSystem:"geo",name:"Rest",encode:{lng:1,lat:2,value:3,itemId:0},symbolSize:e=>1+64*Math.sqrt(e[3]/a)}],tooltip:{formatter:e=>`<b>${r}</b><br/>${e.marker} <b>${e.value[0]}</b> ${e.value[3]}`},animationDuration:2e3}}),[t,n,r,u]);return(0,o.useEffect)((()=>{if((0,d.Rw)(i))return;const e=new ResizeObserver((e=>{var t,n;let[a]=e;null==(t=s.current)||null==(n=t.getEchartsInstance())||n.resize({height:a.contentRect.height})}));return e.observe(i),()=>{e.disconnect()}}),[i]),o.createElement(Tt.ZP,{ratio:4/3,style:{maxWidth:600,margin:"auto"}},o.createElement(Rt,{ref:c},o.createElement(it.Z,{theme:"dark",opts:{height:(null==i?void 0:i.clientHeight)??"auto"},option:m,ref:s})))},requiredFields:["country_code","value"]}};function kt(e){const{config:t,fields:n}=(0,o.useMemo)((()=>{const t=Gt[e.chartName];return{config:t,fields:((null==t?void 0:t.requiredFields)??[]).map((t=>e[t]))}}),[(0,Oe.wE)(e)]),a=dt(e.data,n);let r,l;return(0,d.Rw)(t)&&(r=o.createElement(Ft,{title:`AI has generated an unknown chart type '${e.chartName}'`})),0===e.data.length?r=o.createElement(Ye,null):a.length>0?(0,d.nf)(t)&&(l=(0,o.createElement)(t.Chart,{...e,data:a})):r=o.createElement(Ft,{title:"AI has generated invalid chart info"}),o.createElement(o.Fragment,null,r,l)}var Dt=n(44373),Bt=n(78385),$t=n(87054),Ot=n(85390),Ut=n(45670),zt=n(55050),_t=n(91693),qt=n(96942),Ht=n(36804),Wt=n(88784);function Qt(e){let{children:t}=e;return o.createElement(Wt.Z,{title:t},o.createElement(ee.Z,null,o.createElement(Ht.Z,{fontSize:"inherit"})))}var Vt=n(1969),Kt=n(64232);function Yt(e){return o.createElement(Xt,(0,ge.Z)({target:"_blank"},e),"Share",o.createElement(Jt,null))}const Xt=(0,w.ZP)("a")`
  display: inline-flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity .2s ease;

  &, &:visited {
    color: white;
  }

  &:hover, &:focus {
    color: white;
    opacity: 1;
    text-decoration: none;
  }
`,Jt=(0,w.ZP)(Kt.Z)`
  margin-left: 4px;
  color: #1D9BF0;
`;function jt(e){let{align:t="left",sx:n}=e;return o.createElement(en,{align:t,sx:n},"Powered by ",o.createElement("a",{href:"https://www.pingcap.com/tidb-cloud/",target:"_blank",rel:"noreferrer"},"TiDB Cloud"))}const en=(0,w.ZP)("div",{shouldForwardProp:e=>"align"!==e})`
  text-align: ${e=>{let{align:t}=e;return t}};
  font-size: 16px;
  color: #C1C1C1;

  > a {
    color: #C1C1C1 !important;
    text-decoration: underline;
  }
`;function tn(e){var t,n;let{search:a}=e;const{question:r,error:l,phase:i}=y(),[c,s]=(0,o.useState)(null),u=(0,o.useMemo)((()=>{try{if((0,d.nf)(r))return(0,he.WU)(r.querySQL,{language:"mysql"});var e;if(function(e){return!!((0,Se.IZ)(e)&&(0,d.nf)(e.response)&&(0,d.nf)(e.response.data))&&"string"==typeof e.response.data.message&&"string"==typeof e.response.data.querySQL}(l))return(0,he.WU)((null==(e=l.response)?void 0:e.data.querySQL)??"",{language:"mysql"})}catch(t){return(null==r?void 0:r.querySQL)??""}}),[r,l]),m=(0,o.useMemo)((()=>{switch(i){case g.NONE:return"pending";case g.LOADING:case g.CREATING:case g.GENERATING_SQL:case g.VALIDATING_SQL:return"loading";case g.GENERATE_SQL_FAILED:case g.LOAD_FAILED:case g.CREATE_FAILED:return"error";default:return"success"}}),[i]),h=(0,o.useMemo)((()=>{switch(i){case g.NONE:return"";case g.LOADING:return"Loading question...";case g.CREATING:case g.GENERATING_SQL:case g.VALIDATING_SQL:return"Generating SQL...";case g.LOAD_FAILED:return"Question not found";case g.GENERATE_SQL_FAILED:case g.CREATE_FAILED:return"Failed to generate SQL";default:return"Generated SQL"}}),[i]),p=null==r||null==(t=r.result)?void 0:t.rows,f=(0,o.useMemo)((()=>{switch(i){case g.CREATED:case g.QUEUEING:case g.EXECUTING:return"loading";case g.EXECUTE_FAILED:case g.VISUALIZE_FAILED:case g.UNKNOWN_ERROR:return"error";case g.READY:return"success";default:return"pending"}}),[i]),E=(0,o.useMemo)((()=>{var e;switch(i){case g.CREATED:return"Pending...";case g.QUEUEING:return`Waiting execution in queue (currently in position ${(null==r?void 0:r.queuePreceding)??NaN})...`;case g.EXECUTING:return"Running SQL...";case g.EXECUTE_FAILED:return"Failed to execute SQL";case g.UNKNOWN_ERROR:return"Unknown error";case g.VISUALIZE_FAILED:case g.READY:return o.createElement(o.Fragment,null,`${(null==r||null==(e=r.result)?void 0:e.rows.length)??"NaN"} rows in ${(null==r?void 0:r.spent)??"NaN"} seconds`,function(e){if((0,d.nf)(e)&&!(0,d.yD)(e.engines))return o.createElement(o.Fragment,null,", Running on",o.createElement(an,null,e.engines.map(nn).join(", ")),o.createElement(Qt,null,o.createElement(Ie.Z,{variant:"body1"},o.createElement("b",null,"tikv"),": row storage engine",o.createElement("br",null),o.createElement("b",null,"tiflash"),": columnar storage engine"),o.createElement(Dt.Z,{orientation:"horizontal",sx:{my:1.5},light:!0}),o.createElement(Ie.Z,{variant:"body2"},"Intelligent query processing in ",o.createElement("a",null,"TiDB optimizer"),".")));return null}(r));default:return"pending"}}),[r,i]),b=(0,o.useMemo)((()=>{if((0,d.Rw)(r))return(0,Vt.PE)(location.href,{title:"OSSInsight Data Explorer",hashtags:["OpenSource","OpenAI","TiDBCloud"]});let e;return e="undefined"==typeof location?(0,d.GC)(r.id)?`https://ossinsight.io/explore?id=${r.id}`:"https://ossinsight.io/explore":(0,Vt.PE)(location.href,{title:`${a} | OSSInsight Data Explorer\n`,hashtags:["OpenSource","OpenAI","TiDBCloud"]}),e}),[r,a]),x=(0,o.useMemo)((()=>{if("error"===m)return l}),[m,l]),v=(0,o.useMemo)((()=>{if("error"===f)return l}),[f,l]),w=(0,o.useMemo)((()=>{if(i===g.VISUALIZE_FAILED)return l}),[i,l]);return o.createElement(o.Fragment,null,o.createElement(Je,{status:m,title:h,extra:"auto",error:x,errorWithChildren:!0,errorTitle:"Failed to generate SQL",errorPrompt:"Hi, it's failed to generate SQL for"},(0,d.N6)(u)&&o.createElement(lt.Z,{language:"sql"},u)),o.createElement(Je,{status:f,title:E,extra:o.createElement(ln,null,o.createElement("span",{ref:s}),o.createElement(Yt,{href:b})),error:v,defaultExpanded:!0,errorTitle:"Failed to execute question",errorPrompt:"Hi, it's failed to execute"},o.createElement(on,{chartData:(null==r?void 0:r.chart)??void 0,chartError:w,result:p,fields:null==r||null==(n=r.result)?void 0:n.fields,controlsContainer:c})),i===g.READY&&o.createElement(jt,{sx:{mt:2}}))}function nn(e){switch(e){case"tiflash":return"columnar storage";case"tikv":return"row storage";default:return e}}const an=(0,w.ZP)("span")`
  color: #5667FF;
  border: 1px solid #5667FF80;
  border-radius: 2px;
  padding: 4px 8px;
  margin: 0 4px;
`;function on(e){let{chartData:t,chartError:n,fields:a,result:r,controlsContainer:l}=e;const[i,c]=(0,o.useState)("visualization");(0,o.useEffect)((()=>{c("visualization")}),[t]);const s=(e,t)=>{(0,d.GC)(t)&&c(t)};return(0,o.useMemo)((()=>{const e=(0,Se.e$)(n),c=function(t,n){return void 0===t&&(t=!1),void 0===n&&(n=!1),o.createElement(Xe,{title:"Unable to generate chart",prompt:"Hi, it's failed to generate chart for",error:e,severity:"warning",sx:t?{mb:2}:void 0,showSuggestions:n})};if((0,d.Rw)(r))return(0,d.nf)(n)?c(!1,!0):null;const u=()=>o.createElement(Ie.Z,{variant:"body2",color:"#D1D1D1",mt:2},"\ud83e\udd14 Confused with this answer? Try to tiny your words and help the AI identify your question, for example, you can try to use \u2018@repo_name/user_name\u2019 to narrow down your query. If you have more questions about the accuracy of the answers, see FAQ here."),m=()=>o.createElement(o.Fragment,null,o.createElement(Zt,{chartName:"Table",title:"",data:r,fields:a}),u());if((0,d.Rw)(t))return(0,d.nf)(n)?o.createElement(o.Fragment,null,c(!0),m()):null;const g=()=>o.createElement(o.Fragment,null,o.createElement(kt,(0,ge.Z)({},t,{data:r,fields:a})),u());return(0,d.nf)(n)?o.createElement(o.Fragment,null,c(!0),m()):"Table"===t.chartName?g():o.createElement(o.Fragment,null,o.createElement(Bt.Z,{container:l},o.createElement(rn,{className:"chart-controls"},o.createElement(Ot.Z,{size:"small",value:i,onChange:s,exclusive:!0,color:"primary"},o.createElement($t.Z,{value:"visualization",size:"small",sx:{padding:"5px"}},o.createElement(_t.Z,{fontSize:"small"})),o.createElement($t.Z,{value:"raw",size:"small",sx:{padding:"5px"}},o.createElement(qt.Z,{fontSize:"small"}))))),o.createElement(Ut.ZP,{value:i},o.createElement(cn,{value:"visualization"},g()),o.createElement(cn,{value:"raw"},m())))}),[i,t,n,r,a])}const rn=(0,w.ZP)("div")`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0;
  transition: opacity .2s ease;
  margin-right: 12px;
  padding-right: 12px;
  border-right: 1px solid #3c3c3c;
`,ln=(0,w.ZP)("span")`
  display: inline-flex;
  align-items: center;
`,cn=(0,w.ZP)(zt.Z)`
  padding: 0;
`;function sn(e){let{title:t="\ud83d\udd25 Popular queries"}=e;return o.createElement(o.Fragment,null,o.createElement(qe,{title:()=>o.createElement(x.Z,{height:"40px"},t),n:6}))}var dn=n(41796),un=n(44044),mn=n(60641),gn=n(64421),hn=n(98948),pn=n(61225);function fn(e){let{startColor:t="#794BC5",stopColor:n="#3D44FF",steps:a,sx:r}=e;const l=(0,pn.Z)((e=>e.breakpoints.down("md"))),i=(0,o.useMemo)((()=>{const e=(0,dn.tB)("#794BC5").values,t=(0,dn.tB)("#3D44FF").values;return Ue(a.length+1).map((n=>function(e,t,n){let[a,o,r]=e,[l,i,c]=t;const s=1-n;return(0,dn.wy)({type:"rgb",values:[a*s+l*n,o*s+i*n,r*s+c*n]})}(e,t,n/a.length)))}),[t,n,a.length]);return o.createElement(o.Fragment,null,o.createElement("svg",{width:"0",height:"0"},o.createElement("defs",null,a.map(((e,t)=>o.createElement("linearGradient",{id:`explore-step-gradient-${t}`,key:t,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o.createElement("stop",{offset:"0%",style:{stopColor:i[t],stopOpacity:1}}),o.createElement("stop",{offset:"100%",style:{stopColor:i[t+1],stopOpacity:1}})))))),o.createElement(hn.Z,{sx:r,orientation:l?"vertical":"horizontal"},a.map(((e,t)=>o.createElement(un.Z,{key:e,completed:!1,active:!0},o.createElement(En,{fill:`explore-step-gradient-${t}`},e))))))}const En=(0,w.ZP)(gn.Z,{shouldForwardProp:e=>"fill"!==e})`
  .${mn.Z.root}.${mn.Z.active} {
    fill: url(#${e=>{let{fill:t}=e;return t}}); // ${e=>{let{color:t}=e;return t}};
  }
`;function yn(){return o.createElement(x.Z,{component:"section",id:"data-explorer-faq",pt:8},o.createElement(Ie.Z,{variant:"h2",textAlign:"center"},"FAQ"),bn.map(((e,t)=>{let{q:n,a:a}=e;return o.createElement(xn,{key:t},o.createElement(vn,null,n),o.createElement(wn,null,a))})),o.createElement(Ie.Z,{variant:"body1",textAlign:"center",color:"#929292",fontSize:16,mt:8},"Still have problems? please feel free to contact us ",Cn," ",An))}const bn=[{q:"How it works?",a:o.createElement(fn,{steps:["Input your question","Translate your question to SQL with OpenAI","Visualize and output your results"]})},{q:"How do I use this tool?",a:"You can start with selecting a popular query from the query wall or directly input a short text query statement to the search box. OpenAI will translate your question into Structured Query Language (SQL), and we will use the generated SQL to query in the database and return the results."},{q:"Why the answer do not turn out to my intended?",a:"We use the text completion provided by OpenAI to translate the text into Structured Query Language (SQL), and the final output depends on the accuracy of the generated SQL. If the final query result does not meet your expectation, please shorten your input statement and using more concise and clear short words for AI recognition."},{q:"Why is the output report an error or show 0 results?",a:o.createElement(o.Fragment,null,"Unfortunately, we do not have useful GitHub insights for you. Usually, there are two situations that cause the answer not to be found:",o.createElement("ol",null,o.createElement("li",null,"AI unrecognized/misunderstand your text and generated wrong/bad SQLs, the query mission failed."),o.createElement("li",null,"Data restrictions. All the data we use here on this website sources from\xa0",o.createElement("a",{href:"http://www.gharchive.org/",target:"_blank",rel:"noreferrer"},"GH Archive"),", a non-profit project that records and archives all GitHub events data since 2011. We can not offer you more insights if you are looking for answers about other topics.")),o.createElement("br",null),"The potential solution is phrase your question which is related GitHub with short, specific words , then try again. And we strongly recommend you use our query templates near the search box to start your exploring.")}],xn=(0,w.ZP)("div")`
  &:not(:first-of-type) {
    margin-top: 48px;
  }
`,vn=(0,w.ZP)("h3")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`,wn=(0,w.ZP)("div")`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #C1C1C1;
  margin: 0;
`,Sn=(0,w.ZP)("a")`
  display: inline-flex;
  vertical-align: text-bottom;
  width: 24px;
  height: 24px;
  text-decoration: none !important;
  align-items: center;
  justify-content: center;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["color","background-color"])}};
`,Zn=(0,w.ZP)(Sn)`
  color: #eaeaea !important;

  &:hover {
    color: white;
  }
`,In=(0,w.ZP)(Sn)`
  font-size: 18px;
  color: #1D9BF0 !important;
  border-radius: 50%;
  background-color: #eaeaea;

  &:hover {
    background-color: white;
  }
`,Cn=o.createElement(Zn,{href:"https://github.com/pingcap/ossinsight/issues",target:"_blank"},o.createElement(Le.Z,null)),An=o.createElement(In,{href:"https://twitter.com/OSSInsight",target:"_blank"},o.createElement(Kt.Z,{fontSize:"inherit"}));var Nn=n(27952),Ln=n(5299);function Mn(){return o.createElement(Tn,null,o.createElement(qe,{variant:"text",n:4,title:(e,t)=>o.createElement(Ie.Z,{variant:"h3",mb:0,fontSize:16},o.createElement(Pn,null),"Get inspired",o.createElement(ee.Z,{onClick:e,disabled:t},o.createElement(Ae.Z,{fontSize:"inherit"})))}),o.createElement(Dt.Z,{orientation:"horizontal",sx:{my:2}}),o.createElement(x.Z,null,o.createElement(Fn,{to:"/blog/chat2query-tutorials"},"Get hands-on with your data ",o.createElement(Ln.Z,{color:"inherit"})),o.createElement(Gn,null,"Get hands-on with your data Get hands-on with your data")))}function Pn(){return o.createElement(o.Fragment,null,Ue(3).map((e=>o.createElement(Rn,{key:e,color:"primary",fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}))))}const Tn=(0,w.ZP)("div")`
  position: sticky;
  top: 92px;
`,Rn=(0,w.ZP)(Nn.Z)`
  vertical-align: text-bottom;
  margin-left: -12px;

  &:first-of-type {
    margin-left: -6px;
  }
`,Fn=(0,w.ZP)(Re.Z)`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  background: linear-gradient(90deg, #BAC1FD 0%, #DAC4FF 106.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  &, &:hover, &:visited, &:active {
    color: #DAC4FF;
  }
`,Gn=(0,w.ZP)("p")`
  margin-top: 8px;
  font-size: 12px;
`;function kn(){var e;const{question:t,loading:n,load:a,error:r,phase:l,reset:i,create:c}=f({pollInterval:2e3}),[s,u]=(0,b.ZP)("id",(0,b.Rc)(),!0),[m,p]=(0,o.useState)(""),y=!h.has(l),w=y||(0,d.oM)(m),C=(0,d.Rw)(null==t?void 0:t.id)&&!n,A=((null==t||null==(e=t.result)?void 0:e.rows.length)??0)>0;(0,o.useEffect)((()=>{(0,d.nf)(t)&&p(t.title)}),[null==t?void 0:t.title]),(0,o.useEffect)((()=>{(0,d.nf)(s)?a(s):L()}),[s]),(0,o.useEffect)((()=>{(0,d.nf)(null==t?void 0:t.id)&&u(null==t?void 0:t.id)}),[n,null==t?void 0:t.id]);const N=(0,S.Z)((()=>{y||c(m)})),L=(0,S.Z)((()=>{i(),p(""),u(void 0)})),M=(0,S.Z)((e=>{p(e),c(e)}));return o.createElement(E.Provider,{value:{phase:l,question:t,loading:n,error:r,create:c,load:a,reset:i}},o.createElement(Z.Provider,{value:{handleSelect:M}},o.createElement(I,null),o.createElement(R,{showSide:!C&&l===g.READY&&A,showHeader:C,showFooter:C,header:o.createElement(V,null),side:o.createElement(Mn,null),footer:o.createElement(x.Z,{mt:2},o.createElement(jt,{align:"center"}),o.createElement(Dn,{to:"/blog/chat2query-tutorials",target:"_blank"},"\ud83e\uddd0 GitHub data is just the beginning. Uncover hidden insights in your OWN data!",o.createElement(Ln.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom",ml:.5}})))},o.createElement(le,{value:m,onChange:p,onAction:N,disableInput:y,disableClear:""===m,disableAction:w,onClear:L,clearState:y?"stop":void 0}),o.createElement(de,{state:C?"recommend":"execution",direction:C?"down":"up"},o.createElement(x.Z,{key:"execution",sx:{mt:1.5}},o.createElement(tn,{search:m})),o.createElement(x.Z,{key:"recommend",sx:{mt:4}},o.createElement(sn,null)))),o.createElement(v.Z,{maxWidth:"lg",sx:{pb:8}},o.createElement(yn,null))))}const Dn=(0,w.ZP)(Re.Z)`
  display: block;
  text-align: center;
  color: white !important;
  text-decoration: none !important;
  margin-top: 20px;
  font-size: 16px;
`;function Bn(){const[e]=(0,r.h9)("explore-data");return e?o.createElement(a.Z,{title:"Data Explorer: Open Source Explorer powered by TiDB Cloud",description:"The ultimate query tool for accessing and analyzing data on GitHub. Analyze 5+ billion GitHub data from natural language, no prerequisite knowledge of SQL or plotting libraries necessary.",keywords:"GitHub data,text to SQL,query tool,Data Explorer",image:"/img/data-thumbnail.png"},o.createElement(kn,null)):o.createElement(l.default,null)}},8106:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010),r=n(95999);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function i(e){let{code:t,className:n}=e;const[i,c]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),d=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),c(!0),s.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":i?(0,r.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,r.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,r.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,l.copyButton,i&&l.copyButtonCopied),onClick:d},a.createElement("span",{className:l.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:l.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:l.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),o=n(63016),r=n(67294),l=n(61802),i=n(61953);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:d,footer:u=!0,...m}=e;return(0,r.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),r.createElement(o.Z,(0,a.Z)({},m,{customFooter:u,header:n,sideWidth:s,side:s&&(0,l.nf)(d)?r.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},r.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},r.createElement(d,null))):void 0}),r.createElement("div",{hidden:!0,style:{height:72}}),r.createElement("div",{style:{paddingLeft:s,paddingRight:s}},r.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(67294),o=n(95999),r=n(1944),l=n(63016),i=n(16550),c=n(29630),s=n(70754);function d(){const e=(0,i.k6)(),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{var t,a;let{pathname:o,search:r,hash:l}=window.location;r=null==(t=r)?void 0:t.replace(/^\?/,""),l=null==(a=l)?void 0:a.replace(/^#/,"");const[i,...c]=o.split("/");if("analyze"===i){if(c.length>=1&&c.length<=2)return void e.replace({pathname:o,search:r,hash:l});if(0===c.length)return void e.replace({pathname:"/analyze/pingcap/tidb",search:r,hash:l})}n(!0)}),[]),a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})?void 0:"Loading...",description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",image:"/img/screenshots/homepage.png"}),a.createElement(l.Z,{disableAuth:!0},t?a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(c.Z,{variant:"body1",fontSize:24},"Loading... \xa0",a.createElement(s.Z,{sx:{display:"inline-block"},size:24})))))))}},1969:(e,t,n)=>{n.d(t,{$Z:()=>l,BE:()=>r,OA:()=>i,PE:()=>o});var a=n(86459);function o(e,t){let{title:n,via:o,hashtags:r=[],related:l=[]}=t;return"https://twitter.com/share"+(0,a.Z)({url:e,text:n,via:o,hashtags:r.length>0?r.join(","):void 0,related:l.length>0?l.join(","):void 0})}function r(e,t){let{title:n,summary:o,source:r}=t;return"https://linkedin.com/shareArticle"+(0,a.Z)({url:e,mini:"true",title:n,summary:o,source:r})}function l(e,t){let{title:n}=t;return"https://www.reddit.com/submit"+(0,a.Z)({url:e,title:n})}function i(e,t){let{title:n}=t;return"https://telegram.me/share/url"+(0,a.Z)({url:e,text:n})}}}]);