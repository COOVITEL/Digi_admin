import { T as e, j as r } from "./dates.f0d6c0ca.js";
import {
  C as d,
  a as b,
  P as f,
  A as u,
  L as h,
  B as m,
  p as x,
  b as y,
  c as j,
  d as C,
} from "./index.74d5ba86.js";
import { o as A } from "./options.3d8c69a9.js";
import "./index.72123234.js";
d.register(b, f, u, h, m, x, y, j);
function _() {
  const a = e.filter((t) => t.type2 === "Caja").length,
    s = e.filter((t) => t.type2 === "Crédito").length,
    o = e.filter((t) => t.type2 === "Afiliación").length,
    l = e.filter((t) => t.type2 === "Ahorro").length,
    i = e.filter((t) => t.type2 === "Seguros").length,
    n = e.filter((t) => t.type2 === "Auxilios").length,
    g = e.filter((t) => t.type2 === "Estado").length,
    c = e.filter((t) => t.type2 === "Otros").length,
    p = {
      labels: [
        "Caja",
        "Crédito",
        "Afiliación",
        "Ahorro",
        "Seguros",
        "Auxilios",
        "Estado de cuenta",
        "Otros",
      ],
      datasets: [
        {
          data: [a, s, o, l, i, n, g, c],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(183, 46, 168, 0.5)",
            "rgba(72, 209, 168, 0.5)",
            "rgba(72, 209, 0, 0.5)",
            "rgba(220, 19, 0, 0.5)",
            "rgba(255, 99, 132, 0.5)",
            "rgba(183, 46, 168, 0.5)",
            "rgba(72, 209, 168, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132)",
            "rgba(183, 46, 168)",
            "rgba(72, 209, 168)",
            "rgba(72, 209, 0)",
            "rgba(220, 19, 0)",
            "rgba(255, 99, 132)",
            "rgba(183, 46, 168)",
            "rgba(72, 209, 168)",
          ],
          borderWidth: 2,
        },
      ],
    };
  return r.jsxs("div", {
    className:
      "flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[520px] h-[300px]",
    children: [
      r.jsx("h4", {
        className: "text-white",
        children: "Tipos de Turnos Tomados en las Sucursales",
      }),
      r.jsx(C, { data: p, options: A }),
    ],
  });
}
export { _ as default };
