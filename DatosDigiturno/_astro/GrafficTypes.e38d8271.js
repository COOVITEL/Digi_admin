import{j as e}from"./jsx-runtime.a2dc3690.js";import{C as b,a as h,P as m,A as x,L as y,B as j,p as A,b as C,c as E,d as T}from"./index.f8b4ff70.js";import{o as S}from"./options.f2ef4408.js";import{r as a}from"./index.72123234.js";import{g as w}from"./turns.262303b5.js";b.register(h,m,x,y,j,A,C,E);function P(){const[r,s]=a.useState([]);a.useEffect(()=>{async function t(){const d=await w();s(d.data)}t()},[]);const o=r.filter(t=>t.type2==="Caja").length,n=r.filter(t=>t.type2==="Crédito").length,l=r.filter(t=>t.type2==="Afiliación").length,i=r.filter(t=>t.type2==="Ahorro").length,g=r.filter(t=>t.type2==="Seguros").length,c=r.filter(t=>t.type2==="Auxilios").length,p=r.filter(t=>t.type2==="Estado").length,f=r.filter(t=>t.type2==="Otros").length,u={labels:["Caja","Crédito","Afiliación","Ahorro","Seguros","Auxilios","Estado de cuenta","Otros"],datasets:[{data:[o,n,l,i,g,c,p,f],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)","rgba(72, 209, 0, 0.5)","rgba(220, 19, 0, 0.5)","rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)"],borderColor:["rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)","rgba(72, 209, 0)","rgba(220, 19, 0)","rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)"],borderWidth:2}]};return e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[520px] h-[300px]",children:[e.jsx("h4",{className:"text-white",children:"Tipos de Turnos Tomados en las Sucursales"}),e.jsx(T,{data:u,options:S})]})}export{P as default};