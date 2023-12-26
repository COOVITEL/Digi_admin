import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GrafficScores() {
    const empty = TunrsDates.filter((turn) => turn.score_time === "empty").length
    const qualitySucursal = TunrsDates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send != "send").length
    const qualitySms = TunrsDates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send === "send").length
    const qualityCall = TunrsDates.filter((turn) => turn.score_time != "empty" && turn.state === "by_call").length
    const notContact = TunrsDates.filter((turn) => turn.state == 'not_contacted').length

    const data = {
        datasets: [{
            data: [empty, qualitySucursal, qualitySms, qualityCall, notContact],
            backgroundColor: [
                'rgba(230, 151, 227, 0.9)',
                'rgba(230, 138, 82, 0.9)',
                'rgba(95, 235, 81, 0.9)',
                'rgba(146, 122, 197, 0.9)',
                'rgba(116, 172, 197, 0.9)',
              ],
              borderColor: [
                'rgba(255, 99, 132)',
                'rgba(183, 46, 168)',
                'rgba(72, 209, 168)',
                'rgba(72, 209, 168)',
                'rgba(116, 172, 197)',
              ],
        }],
        labels: ['Sin calificar', 'Calificado en Sucursal', 'Calificado por SMS', 'Calificado por llamada', 'No contactado']
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (
        <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[270px] h-[300px]">
            <h5 className="text-white pb-3 text-sm">Estados de Calificación de Turno</h5>
            <Pie data={data} options={options}/>
        </div>
    )
}