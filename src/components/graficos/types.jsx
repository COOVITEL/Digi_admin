import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Bar } from "react-chartjs-2"
import { options } from "../options";
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Types({ name, time }) {

    const types = ["Caja", "Crédito", "Afiliación", "Ahorro", "Seguros", "Auxilios", "Estado", "Otros"]
    const [counts, setCount] = useState(types.reduce((acc, type) => {
        acc[type] = TunrsDates.filter((turn) => turn.type2 === type).length
        return acc
    }, {}))
    const [porcentajes, setPorcentajes] = useState(types.map((type) => ((counts[type] / TunrsDates.length) * 100).toFixed(2)))
    const [title, setTitle] = useState("Todas las Sucursales")

    useEffect(() => {
        const date = new Date()
        let newMonth = date.getMonth() + 1;
        let newDates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);
     
        if (name == "all" && time === 0) {
            newMonth = date.getMonth() + 1;
            newDates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);
            setTitle("Todas las Sucursales");
        }
        if (name == "all" && time === 1) {
            newMonth = date.getMonth();
            newDates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);
            setTitle("Todas las Sucursales");

        }
        if (name == "all" && time === 2) {
            newMonth = date.getMonth() - 1;
            newDates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
            setTitle("Todas las Sucursales");
        }
        if (name != "all" && time === 0) {
            newMonth = date.getMonth() + 1;
            newDates = TunrsDates.filter((turn) => turn.city == name && Number(turn.date.split("-")[1]) === newMonth)
            setTitle(name);
        }
        if (name != "all" && time === 1) {
            newMonth = date.getMonth();
            newDates = TunrsDates.filter((turn) => turn.city == name && Number(turn.date.split("-")[1]) === newMonth)
            setTitle(name);

        }
        if (name != "all" && time === 2) {
            newMonth = date.getMonth() - 1;
            newDates = TunrsDates.filter((turn) => turn.city == name && Number(turn.date.split("-")[1]) >= newMonth)
            setTitle(name);
        }
    
        const counts = types.reduce((acc, type) => {
            acc[type] = newDates.filter((turn) => turn.type2 === type).length
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
        <div className="flex flex-col justify-center items-center border-2 p-5 mt-28 rounded-lg w-[65%] h-auto">
            <h4 className='text-white'>Tipos de Turnos Tomados en {title}</h4>
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
    )
}
