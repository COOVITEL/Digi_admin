import { Doughnut } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";

export default function GrafficScores() {
    const empty = TunrsDates.filter((turn) => turn.score_time === "empty").length
    const qualitySucursal = TunrsDates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send != "send").length
    const qualitySms = TunrsDates.filter((turn) => turn.score_time != "empty" && turn.state === "finished" && turn.sms_send === "send").length
    const qualityCall = TunrsDates.filter((turn) => turn.score_time != "empty" && turn.state === "by_call").length

    const data = {
        datasets: [{
            data: [empty, qualitySucursal, qualitySms, qualityCall]
        }],
        labels: ['Sin calificar', 'Calificado en Sucursal', 'Calificado por SMS', 'Calificado por llamada']
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (
        <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[300px] h-[300px]">
            <h4 className="text-white pb-3">Estados de Calificación de Turno</h4>
            <Doughnut data={data} options={options}/>
        </div>
    )
}