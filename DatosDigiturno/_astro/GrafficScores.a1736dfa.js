import{T as a,j as s}from"./dates.f0d6c0ca.js";import{C as c,a as d,P as m,A as p,L as g,B as f,p as u,b,c as h,D as x}from"./index.74d5ba86.js";import"./index.72123234.js";c.register(d,m,p,g,f,u,b,h);function S(){const t=a.filter(e=>e.score_time==="empty").length,l=a.filter(e=>e.score_time!="empty"&&e.state==="finished"&&e.sms_send!="send").length,i=a.filter(e=>e.score_time!="empty"&&e.state==="finished"&&e.sms_send==="send").length,r=a.filter(e=>e.score_time!="empty"&&e.state==="by_call").length,o={datasets:[{data:[t,l,i,r],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)"],borderColor:["rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)","rgba(72, 209, 168)"]}],labels:["Sin calificar","Calificado en Sucursal","Calificado por SMS","Calificado por llamada"]},n={plugins:{legend:{display:!1}}};return s.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[270px] h-[300px]",children:[s.jsx("h5",{className:"text-white pb-3 text-sm",children:"Estados de Calificación de Turno"}),s.jsx(x,{data:o,options:n})]})}export{S as default};