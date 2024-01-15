import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";
import { useEffect, useState } from 'react';
import { getAllTurns } from '@/pages/api/turns';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GrafficScores() {

    const [turns, setTurns] = useState([])

    useEffect(() => {
        async function loadTurns() {
            const res = await getAllTurns()
            setTurns(res.data)
        }
        loadTurns()
    }, [])

    const empty = turns.filter((turn) => turn.score_time === "empty" && turn.state === "finished").length
    const qualitySucursal = turns.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send != "send").length
    const qualitySms = turns.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send === "send").length
    const qualityCall = turns.filter((turn) => turn.state === "by_call").length
    const notContact = turns.filter((turn) => turn.state === 'not_contacted').length

    const data = {
        datasets: [{
            data: [empty, qualitySucursal, qualitySms, qualityCall, notContact],
            backgroundColor: [
                'rgba(230, 151, 227, 0.9)',
                'rgba(230, 138, 82, 0.9)',
                'rgba(95, 235, 81, 0.9)',
                'rgba(146, 122, 197, 0.9)',
                'rgba(116, 172, 197, 0.9)',
              ]
        }],
        labels: ['Sin calificar', 'Calificado en Sucursal', 'Calificado por SMS', 'Calificado por llamada', 'No contactado']
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white',
                }
            }
        }
    }
    return (
        <div className='flex flex-row items-center gap-5 p-10'>
            <p className='text-white w-52'>
                Estado de la calificación de nuestros asociados y tipo de canal de calificaión de nuestro servicio.
                Junto con el numero de turnos calificados y el canal de su calificación.
            </p>
            <div className="flex flex-col justify-center items-center border-2 p-10 rounded-lg w-[700px] h-[550px]">
                <h5 className="text-white pb-3 text-sm">Estados de Calificación de Turno</h5>
                <Pie data={data} options={options}/>
            </div>
        </div>
    )
}