import{j as s}from"./jsx-runtime.a2dc3690.js";import{C as l,a as i,f as d,P as m,A as p,L as u,B as c,p as f,b as g,c as x,g as b}from"./index.f8b4ff70.js";import{T as j}from"./dates.9bba945f.js";import{o as h}from"./options.f2ef4408.js";import"./index.72123234.js";l.register(i,d,m,p,u,c,f,g,x);function A(){const a=j.reduce((e,t)=>(e[t.date]?e[t.date]++:e[t.date]=1,e),{}),r=Object.keys(a),o=Object.values(a),n={labels:r,datasets:[{label:"Turnos",data:o,borderColor:"rgb(75, 192, 192)",pointBackgroundColor:"rgba(75, 132, 255)",tension:.3}]};return s.jsxs("div",{className:"flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[450px] h-[300px]",children:[s.jsx("h4",{className:"text-white",children:"Cantidad de Turnos por Fecha"}),s.jsx(b,{data:n,options:h})]})}export{A as default};
