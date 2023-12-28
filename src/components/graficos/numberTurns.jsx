import { Chart as ChartJS, CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Line } from "react-chartjs-2"
import { options } from "../options";
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

function countList(list) {
    return list.reduce((acc, cur) => {
        if (acc[cur.date]) {
            acc[cur.date]++;
        } else {
            acc[cur.date] = 1;
        }
        return acc
    }, {})
}

function filterDatesByNameAndMonth(name, time) {
    const date = new Date();
    let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
    let dates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);
    if (time === 2) {
        newMonth = date.getMonth() - 1;
        dates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
    }
    return name === "all" ? dates : dates.filter((turn) => turn.city === name);
 }

export default function NumberTurns({ name, time }) {

    const [countDays, setCountDays] = useState(countList(TunrsDates))

    useEffect(() => {
        const dates = filterDatesByNameAndMonth(name, time)
        setCountDays(countList(dates))
    }, [name, time])
    
    const labels = Object.keys(countDays)
    const data = Object.values(countDays)

    const datas = {
        labels: labels,
        datasets: [{
            label: 'Turnos en el Tiempo',
            data: data,
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgba(75, 132, 255)',
            tension: 0.3
        }]
    };

    return (
        <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[70%] h-auto">
            <Line data={datas} options={options}/>
        </div>
    )
}