import{j as a,g as p}from"./turns.4589a0ea.js";import{C as u,a as g,P as x,A as h,L as y,B as b,p as C,b as S,c as _,e as j}from"./index.f8b4ff70.js";import{r as s}from"./index.72123234.js";u.register(g,x,h,y,b,C,S,_);function T(){const[t,i]=s.useState([]);s.useEffect(()=>{async function e(){const m=await p();i(m.data)}e()},[]);const l=t.filter(e=>e.score_time==="empty"&&e.state==="finished").length,n=t.filter(e=>e.score_time!="empty"&&e.state==="finished"&&e.sms_send!="send").length,c=t.filter(e=>e.score_time!="empty"&&e.state==="finished"&&e.sms_send==="send").length,o=t.filter(e=>e.state==="by_call").length,r=t.filter(e=>e.state==="not_contacted").length,d={datasets:[{data:[l,n,c,o,r],backgroundColor:["rgba(230, 151, 227, 0.9)","rgba(230, 138, 82, 0.9)","rgba(95, 235, 81, 0.9)","rgba(146, 122, 197, 0.9)","rgba(116, 172, 197, 0.9)"]}],labels:["Sin calificar","Calificado en Sucursal","Calificado por SMS","Calificado por llamada","No contactado"]},f={plugins:{legend:{display:!0,labels:{color:"white"}}}};return a.jsxs("div",{className:"flex flex-row items-center gap-5 p-10",children:[a.jsx("p",{className:"text-white w-52 text-center",children:"Estado de la calificación de nuestros asociados y tipo de canal de calificaión de nuestro servicio. Junto con el numero de turnos calificados y el canal de su calificación."}),a.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-10 rounded-lg w-[700px] h-[550px]",children:[a.jsx("h5",{className:"text-white pb-3 text-sm",children:"Estados de Calificación de Turno"}),a.jsx(j,{data:d,options:f})]})]})}export{T as default};
