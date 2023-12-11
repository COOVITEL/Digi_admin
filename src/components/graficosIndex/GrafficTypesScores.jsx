import { Doughnut } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";

export default function GrafficTypesScores() {
    const Excelente = TunrsDates.filter((turn) => turn.score_service == "Excelente").length
    const Bueno = TunrsDates.filter((turn) => turn.score_service == "Bueno").length
    const Normal = TunrsDates.filter((turn) => turn.score_service == "Normal").length
    const Regular = TunrsDates.filter((turn) => turn.score_service == "Regular").length
    const Malo = TunrsDates.filter((turn) => turn.score_service == "Malo").length

    const data = {
        datasets: [{
            data: [Excelente, Bueno, Normal, Regular, Malo]
        }],
        labels: ['Excelente', 'Bueno', 'Normal', 'Regular', 'Malo']
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
            <h4 className="text-white pb-3">Calificacion Servicio Brindado</h4>
            <Doughnut data={data} options={options}/>
        </div>
    )
}