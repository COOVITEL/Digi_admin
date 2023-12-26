import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from '@/pages/api/dates';
import { Bar } from "react-chartjs-2"
import { options } from '../options';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);


export default function Graffic () {

    const turnsTotal = TunrsDates.length
    const turnsBogota = TunrsDates.filter(turn => turn.city === "Bogotá").length
    const turnsTunja = TunrsDates.filter(turn => turn.city === "Tunja").length

    const data = {
        labels: ["Bogotá", "Tunja", "Total"],
        datasets: [{
          label: 'Turnos Sucursal',
          data: [turnsBogota, turnsTunja, turnsTotal],
          backgroundColor: [
            'rgba(228, 65, 53, 0.5)',
            'rgba(141, 90, 204, 0.5)',
            'rgba(121, 151, 227, 0.5)'
          ],
          borderColor: [
            'rgba(228, 65, 53)',
            'rgba(141, 90, 204)',
            'rgba(121, 151, 227)',
          ],
          borderWidth: 2,
          hoverOffset: 5
        }]
      };
       
    return (
        <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[490px] h-[300px]">
            <h4 className='text-white'>Turnos por Sucursales</h4>
            <Bar data={data} options={options}/>
      </div>
        )
};

