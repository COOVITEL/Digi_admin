import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";
import { useEffect, useState } from 'react';
import { getAllTurns } from '@/pages/api/turns';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GrafficTypesScores() {

    const [turns, setTurns] = useState([])

    useEffect(() => {
        async function loadTurns() {
            const res = await getAllTurns()
            setTurns(res.data)
        }
        loadTurns()
    }, [])

    const Excelente = turns.filter((turn) => turn.score_service == "Excelente").length
    const Bueno = turns.filter((turn) => turn.score_service == "Bueno").length
    const Normal = turns.filter((turn) => turn.score_service == "Normal").length
    const Regular = turns.filter((turn) => turn.score_service == "Regular").length
    const Malo = turns.filter((turn) => turn.score_service == "Malo").length

    const data = {
        datasets: [{
            data: [Excelente, Bueno, Normal, Regular, Malo],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 99, 132, 0.8)',
              ],
        }],
        labels: ['Excelente', 'Bueno', 'Normal', 'Regular', 'Malo']
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white'
                }
            }
        }
    }
    return (
        <div className='flex flex-row items-center gap-5 p-10'>
            <p className='text-white w-64 text-center'>
                La atención a nuestros asociados es de vital importancia para nosotros,
                a continuación podemos observar la calificación de nuestro servicio brindado hacia nuestros
                asociados a nivel general de todas nuestras sucursales.
            </p>
            <div className="flex flex-col justify-center items-center border-2 p-10 rounded-lg w-[700px] h-[520px]">
                <h5 className="text-white pb-3 text-sm">Calificación Servicio Brindado</h5>
                <Pie data={data} options={options}/>
            </div>
        </div>
    )
}