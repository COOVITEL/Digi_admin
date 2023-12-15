import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Bar } from "react-chartjs-2"
import { options } from "../options";
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TypesScores({name}) {
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
    
    const types = ["Caja", "Crédito", "Afiliación", "Ahorro", "Seguros", "Auxilios", "Estado de cuenta", "Otros"]

    const counts = types.reduce((acc, type) => {
        acc[type] = dates.filter((turn) => turn.type2 === type).length
        return acc
    }, {})

    const data = {
        labels: types,
        datasets: [{
            data: Object.values(counts),
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
        <div className="flex flex-col justify-center items-center border-2 p-5 mt-20 rounded-lg w-[70%] h-auto">
            <h4 className='text-white'>Tipos de Turnos Tomados en {title}</h4>
            <Bar data={data} options={options}/>
            <table>
                <tr>
                    <th>Estado de Calificación</th>
                </tr>
            </table>
        </div>
    )
}
