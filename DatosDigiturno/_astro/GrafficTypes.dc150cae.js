import{j as e}from"./jsx-runtime.a2dc3690.js";import{C as d,a as b,P as f,A as u,L as h,B as m,p as x,b as y,c as j,d as C}from"./index.f8b4ff70.js";import{T as r}from"./dates.9bba945f.js";import{o as A}from"./options.f2ef4408.js";import"./index.72123234.js";d.register(b,f,u,h,m,x,y,j);function w(){const a=r.filter(t=>t.type2==="Caja").length,s=r.filter(t=>t.type2==="Crédito").length,o=r.filter(t=>t.type2==="Afiliación").length,i=r.filter(t=>t.type2==="Ahorro").length,l=r.filter(t=>t.type2==="Seguros").length,n=r.filter(t=>t.type2==="Auxilios").length,g=r.filter(t=>t.type2==="Estado").length,c=r.filter(t=>t.type2==="Otros").length,p={labels:["Caja","Crédito","Afiliación","Ahorro","Seguros","Auxilios","Estado de cuenta","Otros"],datasets:[{data:[a,s,o,i,l,n,g,c],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)","rgba(72, 209, 0, 0.5)","rgba(220, 19, 0, 0.5)","rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)"],borderColor:["rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)","rgba(72, 209, 0)","rgba(220, 19, 0)","rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)"],borderWidth:2}]};return e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[520px] h-[300px]",children:[e.jsx("h4",{className:"text-white",children:"Tipos de Turnos Tomados en las Sucursales"}),e.jsx(C,{data:p,options:A})]})}export{w as default};
