import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Bar } from "react-chartjs-2"
import { options } from "../options";

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Types({name}) {
   const caj = TunrsDates.filter((type) => type.type2 === "Caja").length
   const cre = TunrsDates.filter((type) => type.type2 === "Crédito").length
   const afi = TunrsDates.filter((type) => type.type2 === "Afiliación").length
   const aho = TunrsDates.filter((type) => type.type2 === "Ahorro").length
   const seg = TunrsDates.filter((type) => type.type2 === "Seguros").length
   const aux = TunrsDates.filter((type) => type.type2 === "Auxilios").length
   const est = TunrsDates.filter((type) => type.type2 === "Estado").length
   const otr = TunrsDates.filter((type) => type.type2 === "Otros").length

   const data = {
       labels: ["Caja", "Crédito", "Afiliación", "Ahorro", "Seguros", "Auxilios", "Estado de cuenta", "Otros"],
       datasets: [{
           data: [caj, cre, afi, aho, seg, aux, est, otr],
           backgroundColor: [
               'rgba(255, 99, 132, 0.5)',
               'rgba(183, 46, 168, 0.5)',
               'rgba(72, 209, 168, 0.5)',
               'rgba(72, 209, 0, 0.5)',
               'rgba(220, 19, 0, 0.5)',
               'rgba(255, 99, 132, 0.5)',
               'rgba(183, 46, 168, 0.5)',
               'rgba(72, 209, 168, 0.5)',
             ],
             borderColor: [
               'rgba(255, 99, 132)',
               'rgba(183, 46, 168)',
               'rgba(72, 209, 168)',
               'rgba(72, 209, 0)',
               'rgba(220, 19, 0)',
               'rgba(255, 99, 132)',
               'rgba(183, 46, 168)',
               'rgba(72, 209, 168)',
             ],
             borderWidth: 2,
           }],
   }

   return (
       <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[70%] h-auto">
           <h4 className='text-white'>Tipos de Turnos Tomados en las Sucursales</h4>
           <Bar data={data} options={options}/>
       </div>
   )
}
