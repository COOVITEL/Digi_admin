import { ListAsesors } from "@/pages/api/asesors"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates"
import { useEffect, useState } from "react"
import { optionsAsesors } from "../options";


ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

function countTurns(list, turns, name, time) {
    const date = new Date()
    let year = date.getFullYear();
    let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
    let newDates;

    if (newMonth == 0) {
        year = date.getFullYear() - 1;
        newDates = turns.filter((turn) => Number(turn.date.split("-")[1]) === 12 && Number(turn.date.split('-')[0]) === year);
    } else {
        newDates = turns.filter((turn) => Number(turn.date.split("-")[1]) === newMonth  && Number(turn.date.split('-')[0]) === year);
    }

    if (time == 2) {
        newMonth = date.getMonth() - 1;
        if (newMonth < 0) {
            newDates = turns.filter((turn) => Number(turn.date.split("-")[1]) >= (12 + newMonth))
        } else {
            newDates = turns.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
        }
    }

    let listAsesors = []
    for (const asesor of list) {
        if (asesor.sucursal === name) {
            asesor.turns = newDates.filter((turn) => turn.adviser == asesor.cc).length
            listAsesors.push(asesor)
        }
    }
    return listAsesors
}

export default function NumberAsesors({ name, time}) {

    const [asesors, setAsesors] = useState(countTurns(ListAsesors, TunrsDates, name, time))

    useEffect(() => {
        setAsesors(countTurns(ListAsesors, TunrsDates, name, time))
    }, [name, time])

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
                'rgba(12, 22, 34, 0.5)',
                'rgba(45, 112, 232, 0.5)',
                'rgba(220, 19, 0, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(22, 67, 111, 0.5)',
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
        <div className="w-full flex flex-row items-center gap-5 p-10">
            <p className="text-white w-52 font-light">
                En esta grafica podemos encontrar el numero de turnos tomados por cada uno de nuestros asesores en su sucursal.
            </p>
            <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[70%] h-auto">
                <h4 className='text-white font-bold'>Cantidad de turnos tomados por cada Asesor</h4>
                <Bar data={data} options={optionsAsesors}/>
            </div>
        </div>
    )
}