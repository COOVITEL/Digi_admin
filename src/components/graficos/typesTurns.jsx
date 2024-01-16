import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Bar } from "react-chartjs-2"
import { options } from "../options";
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Types({ name, time }) {

    const types = ["Caja", "Crédito", "Afiliación", "Ahorro", "Seguros", "Auxilios", "Estado", "Otros"]


    const [turns, setTurns] = useState([])

    function filterDatesByNameAndMonth(name, time, list) {
        const date = new Date();
        let year = date.getFullYear();
        let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
        let newDates;
    
        if (newMonth == 0) {
            year = date.getFullYear() - 1;
            newDates = list.filter((turn) => Number(turn.date.split("-")[1]) === 12 && Number(turn.date.split('-')[0]) === year);
        } else {
            newDates = list.filter((turn) => Number(turn.date.split('-')[1]) === newMonth && Number(turn.date.split('-')[0]) === year);
        }
    
        if (time === 2) {
            newMonth = date.getMonth() - 1;
            if (newMonth < 0) {
                newDates = list.filter((turn) => (Number(turn.date.split('-')[1]) >= (12 + newMonth) && Number(turn.date.split('-')[0]) === year)) ;
            } else {
                newDates = list.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth && Number(turn.date.split('-')[0]) === year);
            }
        }
        return name === "all" ? newDates : newDates.filter((turn) => turn.city === name);
    }

    useEffect(() => {
        const dates = filterDatesByNameAndMonth(name, time, TunrsDates)
        setTurns(dates)
    }, [name, time])

    
    const counts = types.reduce((acc, type) => {
        acc[type] = turns.filter((turn) => turn.type2 === type).length
        return acc
    }, {})

    const total = Object.values(counts).reduce((a, b) => a + b, 0)
    const porcentajes = types.map((type) => ((counts[type] / total) * 100).toFixed(2))

    const data = {
        labels: types,
        datasets: [{
            data: counts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(183, 46, 168, 0.5)',
                'rgba(72, 209, 168, 0.5)',
                'rgba(72, 209, 0, 0.5)',
                'rgba(220, 19, 0, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(183, 46, 168, 0.5)',
                'rgba(72, 209, 168, 0.5)',
                ],
                borderColor: [
                'rgba(255, 99, 132)',
                'rgba(183, 46, 168)',
                'rgba(72, 209, 168)',
                'rgba(72, 209, 0)',
                'rgba(220, 19, 0)',
                'rgba(255, 99, 132)',
                'rgba(183, 46, 168)',
                'rgba(72, 209, 168)',
                ],
                borderWidth: 2,
            }],
    }
    return (
        <div className='flex flex-row w-[85%] p-10 pb-20 gap-5 items-center'>
            <p className='text-white w-52'>
                Tipos de turnos tomados por nuestros asociados, en cada una de las sucursales.
                Durante el mes actual, el mes pasado o durante los 3 ultimos meses.
            </p>
            <div className="flex flex-col justify-center items-center border-2 p-5 mt-5 rounded-lg">
                <Bar data={data} options={options}/>
                <table className='text-white mt-8'>
                    <tr>
                        <th className='p-2 text-center'>Tipo Turno</th>
                        {types.map((type, index) => (
                            <th key={index} className='p-2 text-center'>{type}</th>
                        ))}
                    </tr>
                    <tr>
                        <td className='p-2 text-center'>Procentaje</td>
                        {porcentajes.map((porcen, index) => (
                            <td key={index} className='text-center'>{porcen}%</td>
                        ))}
                    </tr>
                </table>
            </div>
        </div>
    )
}