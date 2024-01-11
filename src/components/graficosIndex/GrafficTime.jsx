import { Chart as ChartJS, CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Line } from "react-chartjs-2"
import { options } from "../options";

ChartJS.register(CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AllTime() {

    const days = TunrsDates.reduce((acc, cur) => {
        if(acc[cur.date]) {
            acc[cur.date]++
        } else {
            acc[cur.date] = 1
        }
        return acc
    }, {})
    const labels = Object.keys(days)
    const data = Object.values(days)

    const datas = {
        labels: labels,
        datasets: [{
            label: 'Turnos',
            data: data,
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgba(75, 132, 255)',
            tension: 0.3
        }]
    };

    return (
        <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[450px] h-[300px]">
            <h4 className='text-white'>Cantidad de Turnos por Fecha</h4>
            <Line data={datas} options={options}/>
        </div>
    )
}