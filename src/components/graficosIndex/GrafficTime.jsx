import { Chart as ChartJS, CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Line } from "react-chartjs-2"
import { options } from "../options";
import { useEffect, useState } from 'react';
import { getAllTurns } from '@/pages/api/turns';

ChartJS.register(CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AllTime() {

    const [turns, setTurns] = useState([])

    useEffect(() => {
        async function loadTurns() {
            const res = await getAllTurns()
            setTurns(res.data)
        }
        loadTurns()
    }, [])

    const days = turns.reduce((acc, cur) => {
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
        <div className='flex flex-row items-center gap-5 p-10'>
            <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[750px] h-[500px]">
                <h4 className='text-white'>Cantidad de Turnos por Fecha</h4>
                <Line data={datas} options={options}/>
            </div>
            <p className='text-white w-52'>
                Numero de turnos tomados en todas las sucursales por fecha,
                esto nos permitira conocer que dias y que fechas son las mas visitadas por nuestros asociados.
            </p>
        </div>
    )
}