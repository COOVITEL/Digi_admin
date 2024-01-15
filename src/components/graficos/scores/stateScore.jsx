import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {  Pie } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";
import { useEffect, useState } from "react";
import { getAllTurns } from '@/pages/api/turns';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StateScore({name, time}) {
    const types = ['Sin calificar', 'Calificado en Sucursal', 'Calificado por SMS', 'Calificado por llamada', 'No contactado']
    const [title, setTitle] = useState()
    const [dates, setDates] = useState([])
    const [turns, setTurns] = useState([])

    useEffect(() => {
        async function loadTurns() {
            const res = await getAllTurns()
            setTurns(res.data)
        }
        loadTurns()
        CountDates(turns, name, time)
    }, [name, time]);

    function CountDates(list, name, time) {
        const date = new Date()
        let year = date.getFullYear();
        let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
        let dates = list.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);

        if (newMonth == 0) {
            year = date.getFullYear() - 1;
            dates = list.filter((turn) => Number(turn.date.split('-')[1]) === 12 && Number(turn.date.split('-')[0]) === year); 
        } else {
            dates = list.filter((turn) => Number(turn.date.split('-')[1]) === newMonth && Number(turn.date.split('-')[0]) === year);
        }

        if (time === 2) {
            newMonth = date.getMonth() - 1;
            if (newMonth < 0) {
                dates = list.filter((turn) => Number(turn.date.split('-')[1]) >= (12 + newMonth));
            } else {
                dates = list.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
            }
        }
        if (name == "all") {
            setDates(dates)
            setTitle("Todas las Sucursales")
        }
        if (name != "all") {
            setDates(dates.filter((turn) => turn.city === name))
            setTitle(name)
        }
    }

    const empty = dates.filter((turn) => turn.score_time === "empty").length
    const qualitySucursal = dates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send != "send").length
    const qualitySms = dates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send === "send").length
    const qualityCall = dates.filter((turn) => turn.score_time != "empty" && turn.state === "by_call").length
    const notContact = dates.filter((turn) => turn.state == 'not_contacted').length

    const porceEmpty = (empty / dates.length * 100).toFixed(2)
    const porceSuc = (qualitySucursal / dates.length * 100).toFixed(2)
    const porceSms = (qualitySms / dates.length * 100).toFixed(2)
    const porceCall = (qualityCall / dates.length * 100).toFixed(2)
    const porceNot = (notContact / dates.length * 100).toFixed(2)

    const data = {
        labels: types,
        datasets: [{
            data: [empty, qualitySucursal, qualitySms, qualityCall, notContact],
            backgroundColor: [
                'rgba(230, 151, 227, 0.9)',
                'rgba(230, 138, 82, 0.9)',
                'rgba(242, 252, 97, 0.9)',
                'rgba(146, 122, 197, 0.9)',
                'rgba(116, 172, 197, 0.9)',
            ]
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
        <div className="flex flex-col justify-center items-center border-2 p-5 mt-20 rounded-lg w-[60%] h-auto">
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
                    <td className='p-2 text-center text-sm'>{porceNot} %</td>
                </tr>
            </table>
        </div>
    )
}