import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Bar } from "react-chartjs-2"
import { options } from "../options";
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TimeOptions({name, time}) {
    const asesores = TunrsDates.map((turn) => turn.adviser)
    const uniqueAsesor = [...new Set(asesores)]

    const [counts, setCount] = useState(uniqueAsesor.reduce((acc, type) => {
        acc[type] = TunrsDates.filter((turn) => turn.adviser === type).length
        return acc
    }, {}))
    const [porcentajes, setPorcentajes] = useState(types.map((type) => ((counts[type] / TunrsDates.length) * 100).toFixed(2)))
    const [title, setTitle] = useState("Todas las Sucursales")

    useEffect(() => {
        const date = new Date()
        let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
        let newDates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);
        if (time === 2) {
            newMonth = date.getMonth() - 1;
            newDates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
        }
        if (name == "all") {
            setTitle("Todas las Sucursales");
        }
        if (name != "all") {
            newDates = newDates.filter((turn) => turn.city === name)
            setTitle(name);
        }
    
        const counts = types.reduce((acc, type) => {
            acc[type] = newDates.filter((turn) => turn[param] === type).length
            return acc
        }, {})
        setCount(Object.values(counts))
    
        const total = Object.values(counts).reduce((a, b) => a + b, 0)
        const porcentajes = types.map((type) => ((counts[type] / total) * 100).toFixed(2))
        setPorcentajes(porcentajes)
        
    }, [name, time])

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
                ],
                borderWidth: 2,
            }],
    }

    return (
        <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[43%] h-auto">
            <h4 className='text-white'>Calificación {typeScore}, {title}</h4>
            <Bar data={data} options={options}/>
            <table className='text-white mt-8'>
                <tr>
                    {types.map((type, index) => (
                        <th key={index} className='p-2 text-center'>{type}</th>
                    ))}
                </tr>
                <tr>
                    {porcentajes.map((porcen, index) => (
                        <td key={index} className='p-2 text-center'>{porcen}%</td>
                    ))}
                </tr>
            </table>
        </div>
    )
}
