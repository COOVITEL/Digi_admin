import BarChart from './BarChart';
import { TrunsDates } from '@/pages/api/dates';
import { Bar } from "react-chartjs-2"

export default function Graffic () {

    const turnsTotal = TrunsDates.length
    const turnsBogota = TrunsDates.filter(turn => turn.city === "Bogotá").length
    const turnsTunja = TrunsDates.filter(turn => turn.city === "Tunja").length

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
          borderWidth: 2
        }]
      };
    return (
        <div className="flex items-center border-2 p-5 rounded-lg w-[400px]">
            <Bar data={data}/>
      </div>
        )
};

