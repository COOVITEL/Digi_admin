import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from '@/pages/api/dates';
import { Bar } from "react-chartjs-2"
import { options } from '../options';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);


export default function Graffic () {

    const numNames = TunrsDates.reduce((acc, cur) => {
      if (acc[cur.city]) {
        acc[cur.city]++;
      } else {
        acc[cur.city] = 1;
      }
      return acc
    }, {})

    const labels = Object.keys(numNames)
    const data = Object.values(numNames)

    const datas = {
        labels: labels,
        datasets: [{
          label: 'Turnos Sucursal',
          data: data,
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
            <Bar data={datas} options={options}/>
      </div>
        )
};

