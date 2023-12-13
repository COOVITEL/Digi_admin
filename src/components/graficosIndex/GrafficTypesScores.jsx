import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { TunrsDates } from "@/pages/api/dates";

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GrafficTypesScores() {
    const Excelente = TunrsDates.filter((turn) => turn.score_service == "Excelente").length
    const Bueno = TunrsDates.filter((turn) => turn.score_service == "Bueno").length
    const Normal = TunrsDates.filter((turn) => turn.score_service == "Normal").length
    const Regular = TunrsDates.filter((turn) => turn.score_service == "Regular").length
    const Malo = TunrsDates.filter((turn) => turn.score_service == "Malo").length

    const data = {
        datasets: [{
            data: [Excelente, Bueno, Normal, Regular, Malo],
            backgroundColor: [
                'rgba(72, 209, 0, 0.5)',
                'rgba(220, 19, 0, 0.5)',
                'rgba(183, 46, 168, 0.5)',
                'rgba(72, 209, 168, 0.5)',
              ],
              borderColor: [
                'rgba(72, 209, 168)',
                'rgba(72, 209, 0)',
                'rgba(183, 46, 168)',
                'rgba(72, 209, 168)',
              ],
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
        <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[270px] h-[300px]">
            <h4 className="text-white pb-3">Calificacion Servicio Brindado</h4>
            <Doughnut data={data} options={options}/>
        </div>
    )
}