import{j as e}from"./jsx-runtime.a2dc3690.js";import{T as x}from"./dates.88674acf.js";import{C as M,a as A,P as F,A as E,L as _,B as D,p as O,b as k,c as Y,d as $,e as J,f as H,g as I}from"./index.f8b4ff70.js";import{o as L}from"./options.f2ef4408.js";import{r as m}from"./index.72123234.js";import{g as K}from"./turns.262303b5.js";M.register(A,F,E,_,D,O,k,Y);function Q({name:r,time:i}){const[a,c]=m.useState([]),[s,l]=m.useState([]),t=["Caja","Crédito","Afiliación","Ahorro","Seguros","Auxilios","Estado","Otros"];m.useEffect(()=>{async function d(){const f=await K();c(f.data)}d()},[]),m.useEffect(()=>{const d=V(r,i,a);l(d)},[r,i]);const o=t.reduce((d,f)=>(d[f]=s.filter(u=>u.type2===f).length,d),{}),b=Object.values(o).reduce((d,f)=>d+f,0),g=t.map(d=>(o[d]/b*100).toFixed(2)),T={labels:t,datasets:[{data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)","rgba(72, 209, 0, 0.5)","rgba(220, 19, 0, 0.5)","rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)"],borderColor:["rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)","rgba(72, 209, 0)","rgba(220, 19, 0)","rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)"],borderWidth:2}]};return e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 mt-28 rounded-lg w-[65%] h-auto",children:[e.jsx("h4",{className:"text-white",children:"Tipos de Turnos Tomados en "}),e.jsx($,{data:T,options:L}),e.jsxs("table",{className:"text-white mt-8",children:[e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-center",children:"Tipo Turno"}),t.map((d,f)=>e.jsx("th",{className:"p-2 text-center",children:d},f))]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-center",children:"Procentaje"}),g.map((d,f)=>e.jsxs("td",{className:"text-center",children:[d,"%"]},f))]})]})]})}function V(r,i,a){const c=new Date;let s=c.getFullYear(),l=i===0?c.getMonth()+1:c.getMonth(),t;return l==0?(s=c.getFullYear()-1,t=a.filter(o=>Number(o.date.split("-")[1])===12&&Number(o.date.split("-")[0])===s)):t=a.filter(o=>Number(o.date.split("-")[1])===l&&Number(o.date.split("-")[0])===s),i==2&&(l=c.getMonth()-1,l<0?t=a.filter(o=>Number(o.date.split("-")[1])>=12+l):t=a.filter(o=>Number(o.date.split("-")[1])>=l)),r!="all"&&(t=a.filter(o=>o.city===r)),t}M.register(A,F,E,_,D,O,k,Y);function X({name:r,time:i}){const a=["Sin calificar","Calificado en Sucursal","Calificado por SMS","Calificado por llamada","No contactado"],[c,s]=m.useState(),[l,t]=m.useState(x);function o(n,j,B){const C=new Date;let R=C.getFullYear(),y=B===0?C.getMonth()+1:C.getMonth(),S=n.filter(p=>Number(p.date.split("-")[1])===y);y==0?(R=C.getFullYear()-1,S=n.filter(p=>Number(p.date.split("-")[1])===12&&Number(p.date.split("-")[0])===R)):S=n.filter(p=>Number(p.date.split("-")[1])===y&&Number(p.date.split("-")[0])===R),B===2&&(y=C.getMonth()-1,y<0?S=n.filter(p=>Number(p.date.split("-")[1])>=12+y):S=n.filter(p=>Number(p.date.split("-")[1])>=y)),j=="all"&&(t(S),s("Todas las Sucursales")),j!="all"&&(t(S.filter(p=>p.city===j)),s(j))}m.useEffect(()=>{o(x,r,i)},[r,i]);const b=l.filter(n=>n.score_time==="empty").length,g=l.filter(n=>n.score_time!="empty"&&n.state==="finished"&&n.sms_send!="send").length,T=l.filter(n=>n.score_time!="empty"&&n.state==="finished"&&n.sms_send==="send").length,d=l.filter(n=>n.score_time!="empty"&&n.state==="by_call").length,f=l.filter(n=>n.state=="not_contacted").length,u=(b/l.length*100).toFixed(2),h=(g/l.length*100).toFixed(2),N=(T/l.length*100).toFixed(2),w=(d/l.length*100).toFixed(2),v=(f/l.length*100).toFixed(2),P={labels:a,datasets:[{data:[b,g,T,d,f],backgroundColor:["rgba(230, 151, 227, 0.9)","rgba(230, 138, 82, 0.9)","rgba(242, 252, 97, 0.9)","rgba(146, 122, 197, 0.9)","rgba(116, 172, 197, 0.9)"]}]},q={plugins:{legend:{display:!1}}};return e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 mt-20 rounded-lg w-[60%] h-auto",children:[e.jsxs("h5",{className:"text-white pb-3 text-sm",children:["Estados de Calificación de Turno en ",c]}),e.jsx("div",{className:"w-[250px]",children:e.jsx(J,{data:P,options:q})}),e.jsxs("table",{className:"text-white mt-8",children:[e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-center text-sm",children:"Estado de Turno"}),a.map((n,j)=>e.jsx("th",{className:"p-2 text-center text-sm",children:n},j))]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 text-center text-sm",children:"Procentaje"}),e.jsxs("td",{className:"p-2 text-center text-sm",children:[u," %"]}),e.jsxs("td",{className:"p-2 text-center text-sm",children:[h," %"]}),e.jsxs("td",{className:"p-2 text-center text-sm",children:[N," %"]}),e.jsxs("td",{className:"p-2 text-center text-sm",children:[w," %"]}),e.jsxs("td",{className:"p-2 text-center text-sm",children:[v," %"]})]})]})]})}M.register(A,F,E,_,D,O,k,Y);function z({name:r,time:i,typeScore:a,list:c,param:s}){const l=c,[t,o]=m.useState(l.reduce((u,h)=>(u[h]=x.filter(N=>N[s]===h).length,u),{})),[b,g]=m.useState(l.map(u=>(t[u]/x.length*100).toFixed(2))),[T,d]=m.useState("Todas las Sucursales");m.useEffect(()=>{const u=new Date;let h=u.getFullYear(),N=i===0?u.getMonth()+1:u.getMonth(),w;N==0?(h=u.getFullYear()-1,w=x.filter(n=>Number(n.date.split("-")[1])===12&&Number(n.date.split("-")[0])===h)):w=x.filter(n=>Number(n.date.split("-")[1])===N&&Number(n.date.split("-")[0])===h),i==2&&(N=u.getMonth()-1,N<0?w=x.filter(n=>Number(n.date.split("-")[1])>=12+N):w=x.filter(n=>Number(n.date.split("-")[1])>=N)),r=="all"&&d("Todas las Sucursales"),r!="all"&&(w=w.filter(n=>n.city===r),d(r));const v=l.reduce((n,j)=>(n[j]=w.filter(B=>B[s]===j).length,n),{});o(Object.values(v));const P=Object.values(v).reduce((n,j)=>n+j,0),q=l.map(n=>(v[n]/P*100).toFixed(2));g(q)},[r,i]);const f={labels:l,datasets:[{data:t,backgroundColor:["rgb(52, 104, 192)","rgb(134, 167, 252)","rgb(170, 217, 187)","rgb(250, 239, 155)","rgba(220, 19, 0, 0.5)"],borderWidth:2}]};return e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[43%] h-auto",children:[e.jsxs("h4",{className:"text-white",children:["Calificación ",a,", ",T]}),e.jsx($,{data:f,options:L}),e.jsxs("table",{className:"text-white mt-8",children:[e.jsx("tr",{children:l.map((u,h)=>e.jsx("th",{className:"p-2 text-center",children:u},h))}),e.jsx("tr",{children:b.map((u,h)=>e.jsxs("td",{className:"p-2 text-center",children:[u,"%"]},h))})]})]})}function Z({name:r,time:i}){return e.jsxs("div",{className:"flex flex-col w-full items-center pt-5",children:[e.jsx("h2",{className:"text-white text-2xl",children:"Calificaciones dadas por nuestros asosiados"}),e.jsxs("div",{className:"flex flex-wrap gap-10 m-5 justify-center items-center",children:[e.jsx(z,{name:r,time:i,typeScore:"Servicio",list:["Excelente","Bueno","Normal","Regular","Malo"],param:"score_service"}),e.jsx(z,{name:r,time:i,typeScore:"Tiempo",list:["Muy rápido","Rápido","Normal","Lento","Muy Lento"],param:"score_time"}),e.jsx(z,{name:r,time:i,typeScore:"Solicitud Atendida",list:["Si","No"],param:"score_att"}),e.jsx(z,{name:r,time:i,typeScore:"Recomendación",list:["Si","Tal vez","No"],param:"score_recommen"})]})]})}M.register(A,H,F,E,_,D,O,k,Y);function ee(r,i){const a=new Date;let c=a.getFullYear(),s=i===0?a.getMonth()+1:a.getMonth(),l=x.filter(t=>Number(t.date.split("-")[1])===s);return s==0?(c=a.getFullYear()-1,l=x.filter(t=>Number(t.date.split("-")[1])===12&&Number(t.date.split("-")[0])===c)):l=x.filter(t=>Number(t.date.split("-")[1])===s&&Number(t.date.split("-")[0])===c),i==2&&(s=a.getMonth()-1,s<0?l=x.filter(t=>Number(t.date.split("-")[1])>=12+s):l=x.filter(t=>Number(t.date.split("-")[1])>=s)),r==="all"?l:l.filter(t=>t.city===r)}function U(r,i,a){return r.reduce((c,s)=>{if(s[i]&&s[a]){let l=s[i].substring(0,10),t=s[a].substring(0,10);if(s.date==l&&s.date==t){let o=new Date(s[i]),g=(new Date(s[a]).getTime()-o.getTime())/6e4;c[s.date]?c[s.date]=(c[s.date]+g)/2:c[s.date]=g}}return c},{})}function W(r){return Object.values(r).reduce((i,a)=>i+a,0)/Object.values(r).length}function te(r,i,a){return{labels:r,datasets:[{data:i,borderColor:"rgb(75, 192, 192)",pointBackgroundColor:"rgba(185, 182, 25)",tension:.3},{data:a,borderColor:"rgb(238, 80, 192)",pointBackgroundColor:"rgba(75, 132, 255)",tension:.3}]}}function se({name:r,time:i}){const[a,c]=m.useState(x),[s,l]=m.useState();m.useEffect(()=>{const h=ee(r,i);c(h),l(r==="all"?"Todas las Sucursales":r)},[r,i]);const t=U(a,"arrival_time","await_time"),o=U(a,"await_time","atention_time"),b=W(t),g=W(o),T=Object.keys(t),d=Object.values(t),f=Object.values(o),u=te(T,d,f);return e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[67%] h-auto",children:[e.jsxs("h4",{className:"text-white",children:["Tiempo de Espera en ",s]}),e.jsx(I,{data:u,options:L}),e.jsxs("div",{className:"flex flex-row gap-16 pt-4",children:[e.jsxs("h3",{className:"text-[rgb(22,234,234)]",children:["Espera promedio:  ",b.toFixed(2)," Min"]}),e.jsxs("h3",{className:"text-[rgba(248,106,213)]",children:["Atencion promedio:  ",g.toFixed(2)," Min"]})]})]})}function ae({name:r,time:i}){return e.jsxs("div",{className:"flex flex-col w-full items-center pt-5",children:[e.jsx("h2",{className:"text-white text-2xl",children:"Tiempos de Atención a nuestros Asociados"}),e.jsx("div",{className:"flex flex-wrap gap-10 m-5 justify-center items-center w-full h-auto",children:e.jsx(se,{name:r,time:i})})]})}M.register(A,H,F,E,_,D,O,k,Y);function G(r){return r.reduce((i,a)=>(i[a.date]?i[a.date]++:i[a.date]=1,i),{})}function le(r,i){const a=new Date;let c=a.getFullYear(),s=i===0?a.getMonth()+1:a.getMonth(),l;return s==0?(c=a.getFullYear()-1,l=x.filter(t=>Number(t.date.split("-")[1])===12&&Number(t.date.split("-")[0])===c)):l=x.filter(t=>Number(t.date.split("-")[1])===s&&Number(t.date.split("-")[0])===c),i===2&&(s=a.getMonth()-1,s<0?l=x.filter(t=>Number(t.date.split("-")[1])>=12+s&&Number(t.date.split("-")[0])===c):l=x.filter(t=>Number(t.date.split("-")[1])>=s&&Number(t.date.split("-")[0])===c)),r==="all"?l:l.filter(t=>t.city===r)}function re({name:r,time:i}){const[a,c]=m.useState([G(x)]);m.useEffect(()=>{const o=le(r,i);c(G(o))},[r,i]);const s=Object.keys(a),l=Object.values(a),t={labels:s,datasets:[{label:"Turnos en el Tiempo",data:l,borderColor:"rgb(75, 192, 192)",pointBackgroundColor:"rgba(75, 132, 255)",tension:.3}]};return e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[70%] h-auto",children:[e.jsx("h4",{className:"text-white",children:"Cantidad de Turnos Tomados por Fecha"}),e.jsx(I,{data:t,options:L})]})}function xe(){const r=x.map(o=>o.city),i=[...new Set(r)],[a,c]=m.useState("all"),[s,l]=m.useState(0);function t(o,b){c(o),l(b)}return e.jsxs("div",{className:"flex flex-col gap-10 justify-center items-center",children:[e.jsxs("nav",{className:"flex flex-col p-3 px-10 mt-5 fixed top-0 bg-zinc-700 rounded-lg items-center",children:[e.jsxs("ul",{className:"flex flex-row gap-10",children:[e.jsx("button",{className:a==="all"?"text-white text-xl":"text-zinc-400 hover:scale-110  hover:text-white",onClick:()=>t("all",s),children:"Global"},"todos"),i.map(o=>e.jsx("button",{className:a===o?"text-white text-xl":"text-zinc-400 hover:scale-110  hover:text-white",onClick:()=>t(o,s),children:o},o))]}),e.jsxs("ul",{className:"flex flex-row gap-10 text-zinc-400",children:[e.jsx("button",{className:s===0?"text-white text-xl":"text-zinc-400 hover:scale-110 hover:text-white",onClick:()=>t(a,0),children:"Mes Actual"}),e.jsx("button",{className:s===1?"text-white text-xl":"text-zinc-400 hover:scale-110 hover:text-white",onClick:()=>t(a,1),children:"Ultimo mes"}),e.jsx("button",{className:s===2?"text-white text-xl":"text-zinc-400 hover:scale-110 hover:text-white",onClick:()=>t(a,2),children:"Ultimos 3 meses"})]})]}),e.jsx(Q,{name:a,time:s}),e.jsx(re,{name:a,time:s}),e.jsx(X,{name:a,time:s}),e.jsx(Z,{name:a,time:s}),e.jsx(ae,{name:a,time:s})]})}export{xe as default};