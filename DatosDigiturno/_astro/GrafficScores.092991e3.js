import{j as a}from"./jsx-runtime.a2dc3690.js";import{C as m,a as p,P as u,A as b,L as h,B as x,p as y,b as C,c as S,g as _}from"./index.041cd9a4.js";import{r as s}from"./index.72123234.js";import{g as E}from"./turns.262303b5.js";m.register(p,u,b,h,x,y,C,S);function A(){const[e,r]=s.useState([]);s.useEffect(()=>{async function t(){const g=await E();r(g.data)}t()},[]);const l=e.filter(t=>t.score_time==="empty"&&t.state==="finished").length,i=e.filter(t=>t.score_time!="empty"&&t.state==="finished"&&t.sms_send!="send").length,o=e.filter(t=>t.score_time!="empty"&&t.state==="finished"&&t.sms_send==="send").length,n=e.filter(t=>t.state==="by_call").length,c=e.filter(t=>t.state==="not_contacted").length,d={datasets:[{data:[l,i,o,n,c],backgroundColor:["rgba(230, 151, 227, 0.9)","rgba(230, 138, 82, 0.9)","rgba(95, 235, 81, 0.9)","rgba(146, 122, 197, 0.9)","rgba(116, 172, 197, 0.9)"],borderColor:["rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)","rgba(72, 209, 168)","rgba(116, 172, 197)"]}],labels:["Sin calificar","Calificado en Sucursal","Calificado por SMS","Calificado por llamada","No contactado"]},f={plugins:{legend:{display:!1}}};return a.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[270px] h-[300px]",children:[a.jsx("h5",{className:"text-white pb-3 text-sm",children:"Estados de Calificación de Turno"}),a.jsx(_,{data:d,options:f})]})}export{A as default};
