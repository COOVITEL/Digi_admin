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
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(201, 203, 207, 0.5)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
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

