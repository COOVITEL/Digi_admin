import{T as r,j as a}from"./dates.f0d6c0ca.js";import{C as l,a as i,P as u,A as c,L as g,B as d,p,b as f,c as m,d as b}from"./index.74d5ba86.js";import{o as h}from"./options.3d8c69a9.js";import"./index.72123234.js";l.register(i,u,c,g,d,p,f,m);function C(){const e=r.length,s=r.filter(t=>t.city==="Bogotá").length,o=r.filter(t=>t.city==="Tunja").length,n={labels:["Bogotá","Tunja","Total"],datasets:[{label:"Turnos Sucursal",data:[s,o,e],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(255, 159, 64, 0.5)","rgba(201, 203, 207, 0.5)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)"],borderWidth:2,hoverOffset:5}]};return a.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[490px] h-[300px]",children:[a.jsx("h4",{className:"text-white",children:"Turnos por Sucursales"}),a.jsx(b,{data:n,options:h})]})}export{C as default};
