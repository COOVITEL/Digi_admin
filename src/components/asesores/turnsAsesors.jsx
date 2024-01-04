import { ListAsesors } from "@/pages/api/asesors"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates"
import { useEffect, useState } from "react"
import { optionsAsesors } from "../options";


ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

function countTurns(list, turns, name) {
    let listAsesors = []
    for (const asesor of list) {
        if (asesor.sucursal === name) {
            asesor.turns = turns.filter((turn) => turn.adviser == asesor.cc).length
            listAsesors.push(asesor)
        }
    }
    return listAsesors
}

export default function NumberAsesors({ name, time}) {

    const [asesors, setAsesors] = useState(countTurns(ListAsesors, TunrsDates, name))

    useEffect(() => {
        setAsesors(countTurns(ListAsesors, TunrsDates, name))
        console.log(asesors)
    }, [name])

    const types = asesors.map((ase) => ase.name)
    const counts = asesors.map((ase) => ase.turns)

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
            <h4 className='text-white'>Tipos de Turnos Tomados en</h4>
            <Bar data={data} options={optionsAsesors}/>
        </div>
    )
}