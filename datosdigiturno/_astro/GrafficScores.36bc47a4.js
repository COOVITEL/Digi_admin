import{T as m,j as a}from"./dates.e9e21c89.js";import{C as p,a as u,P as g,A as h,L as x,B as y,p as b,b as C,c as S,e as _}from"./index.f8b4ff70.js";import{r as s}from"./index.72123234.js";import"./turns.6c01899b.js";p.register(u,g,h,x,y,b,C,S);function T(){const[t,i]=s.useState([]);s.useEffect(()=>{i(m)},[]);const l=t.filter(e=>e.score_time==="empty"&&e.state==="finished").length,c=t.filter(e=>e.score_time!="empty"&&e.state==="finished"&&e.sms_send!="send").length,o=t.filter(e=>e.score_time!="empty"&&e.state==="finished"&&e.sms_send==="send").length,n=t.filter(e=>e.state==="by_call").length,r=t.filter(e=>e.state==="not_contacted").length,d={datasets:[{data:[l,c,o,n,r],backgroundColor:["rgba(230, 151, 227, 0.9)","rgba(230, 138, 82, 0.9)","rgba(95, 235, 81, 0.9)","rgba(146, 122, 197, 0.9)","rgba(116, 172, 197, 0.9)"]}],labels:["Sin calificar","Calificado en Sucursal","Calificado por SMS","Calificado por llamada","No contactado"]},f={plugins:{legend:{display:!0,labels:{color:"white"}}}};return a.jsxs("div",{className:"flex flex-row items-center gap-5 p-10",children:[a.jsx("p",{className:"text-white w-52",children:"Estado de la calificación de nuestros asociados y tipo de canal de calificaión de nuestro servicio. Junto con el numero de turnos calificados y el canal de su calificación."}),a.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-10 rounded-lg w-[700px] h-[550px]",children:[a.jsx("h5",{className:"text-white pb-3 text-sm",children:"Estados de Calificación de Turno"}),a.jsx(_,{data:d,options:f})]})]})}export{T as default};