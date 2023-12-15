import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";
import { useEffect, useState } from "react";

export default function Scores({name}) {
    const [dates, setDates] = useState(TunrsDates)
    const [title, setTitle] = useState()

    useEffect(() => {
        if (name == "all") {
            setDates(TunrsDates)
            setTitle("Todas las Sucursales")
        }
        if (name != "all") {
            setDates(TunrsDates.filter((turn) => turn.city === name))
            setTitle(name)
        }
    }, [name]);

    const types = ['Sin calificar', 'Calificado en Sucursal', 'Calificado por SMS', 'Calificado por llamada']
 
    const empty = dates.filter((turn) => turn.score_time === "empty").length
    const qualitySucursal = dates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send != "send").length
    const qualitySms = dates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send === "send").length
    const qualityCall = dates.filter((turn) => turn.score_time != "empty" && turn.state === "by_call").length

    const porceEmpty = (empty / dates.length * 100).toFixed(2)
    const porceSuc = (qualitySucursal / dates.length * 100).toFixed(2)
    const porceSms = (qualitySms / dates.length * 100).toFixed(2)
    const porceCall = (qualityCall/ dates.length * 100).toFixed(2)

    const data = {
        labels: types,
        datasets: [{
            data: [empty, qualitySucursal, qualitySms, qualityCall],
            backgroundColor: [
                'rgba(155, 79, 162, 0.5)',
                'rgba(153, 66, 138, 0.5)',
                'rgba(123, 56, 158, 0.5)',
                'rgba(92, 189, 148, 0.5)',
            ],
            borderColor: [
                'rgba(155, 79, 162)',
                'rgba(153, 66, 138)',
                'rgba(123, 56, 158)',
                'rgba(92, 189, 148)',
            ],
        }],
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (
        <div className="flex flex-col justify-center items-center border-2 p-5 mt-20 rounded-lg w-[55%] h-auto">
            <h5 className="text-white pb-3 text-sm">Estados de Calificación de Turno en {title}</h5>
            <div className='w-[250px]'>
                <Pie data={data} options={options}/>
            </div>
            <table className='text-white mt-8'>
                <tr>
                    <th className='p-2 text-center text-sm'>Estado de Turno</th>
                    {types.map((type, index) => (
                        <th key={index} className='p-2 text-center text-sm'>{type}</th>
                    ))}
                </tr>
                <tr>
                    <td className='p-2 text-center text-sm'>Procentaje</td>
                    <td className='p-2 text-center text-sm'>{porceEmpty} %</td>
                    <td className='p-2 text-center text-sm'>{porceSuc} %</td>
                    <td className='p-2 text-center text-sm'>{porceSms} %</td>
                    <td className='p-2 text-center text-sm'>{porceCall} %</td>
                </tr>
            </table>
        </div>
    )
}