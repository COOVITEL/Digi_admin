import{T as u,j as e}from"./dates.e9e21c89.js";import{C as d,a as m,P as p,A as f,L as x,B as b,p as g,b as h,c as j,d as y}from"./index.f8b4ff70.js";import{o as E}from"./options.f2ef4408.js";import{r as a}from"./index.72123234.js";import"./turns.6c01899b.js";d.register(m,p,f,x,b,g,h,j);function v(){const[o,n]=a.useState([]);a.useEffect(()=>{n(u)},[]);const t=o.reduce((s,r)=>(s[r.city]?s[r.city]++:s[r.city]=1,s),{}),l=Object.keys(t),i=Object.values(t),c={labels:l,datasets:[{label:"Turnos Sucursal",data:i,backgroundColor:["rgba(228, 65, 53, 0.5)","rgba(141, 90, 204, 0.5)","rgba(121, 151, 227, 0.5)"],borderColor:["rgba(228, 65, 53)","rgba(141, 90, 204)","rgba(121, 151, 227)"],borderWidth:2,hoverOffset:5}]};return e.jsxs("div",{className:"flex flex-row items-center gap-5 p-10",children:[e.jsx("p",{className:"text-white w-52",children:"Numero de turnos tomados en cada sucursal, por nuestros asociados."}),e.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[800px] h-[400px]",children:[e.jsx("h4",{className:"text-white",children:"Turnos por Sucursales"}),e.jsx(y,{data:c,options:E})]})]})}export{v as default};
