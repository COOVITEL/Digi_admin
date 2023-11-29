import { TrunsDates } from "@/pages/api/dates";
import { Line } from "react-chartjs-2"

export default function AllTime() {

    const days = TrunsDates.reduce((acc, cur) => {
        if(acc[cur.date]) {
            acc[cur.date]++
        } else {
            acc[cur.date] = 1
        }
        return acc
    }, {})
    const labels = Object.keys(days)
    const data = Object.values(days)

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
        <div className="border-2 p-5 rounded-lg w-[450px]">
            <Line data={datas} />
        </div>
    )
}