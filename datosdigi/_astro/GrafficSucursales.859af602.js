import{j as r,g as u}from"./turns.4589a0ea.js";import{C as g,a as b,P as d,A as m,L as p,B as f,p as x,b as h,c as j,d as y}from"./index.f8b4ff70.js";import{o as w}from"./options.f2ef4408.js";import{r as t}from"./index.72123234.js";g.register(b,d,m,p,f,x,h,j);function T(){const[o,n]=t.useState([]);t.useEffect(()=>{async function a(){const e=await u();n(e.data)}a()},[]);const s=o.reduce((a,e)=>(a[e.city]?a[e.city]++:a[e.city]=1,a),{}),l=Object.keys(s),i=Object.values(s),c={labels:l,datasets:[{label:"Turnos Sucursal",data:i,backgroundColor:["rgba(228, 65, 53, 0.5)","rgba(141, 90, 204, 0.5)","rgba(121, 151, 227, 0.5)","rgba(72, 209, 0, 0.5)","rgba(220, 19, 0, 0.5)","rgba(255, 99, 132, 0.5)","rgba(183, 46, 168, 0.5)","rgba(72, 209, 168, 0.5)","rgba(45, 180, 49, 0.5)"],borderColor:["rgba(228, 65, 53)","rgba(141, 90, 204)","rgba(121, 151, 227)","rgba(72, 209, 0)","rgba(220, 19, 0)","rgba(255, 99, 132)","rgba(183, 46, 168)","rgba(72, 209, 168)","rgba(45, 180, 49)"],borderWidth:2,hoverOffset:5}]};return r.jsxs("div",{className:"flex flex-row items-center gap-5 p-10",children:[r.jsx("p",{className:"text-white w-52 text-center",children:"Numero de turnos tomados en cada sucursal, por nuestros asociados."}),r.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[800px] h-[400px]",children:[r.jsx("h4",{className:"text-white",children:"Turnos por Sucursales"}),r.jsx(y,{data:c,options:w})]})]})}export{T as default};
