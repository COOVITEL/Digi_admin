import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
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
                'rgba(146, 122, 197, 0.9)',
                'rgba(230, 138, 82, 0.9)',
                'rgba(230, 151, 227, 0.9)',
                'rgba(95, 235, 81, 0.9)',
                'rgba(230, 138, 82, 0.9)',
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
            <Pie data={data} options={options}/>
        </div>
    )
}