import { TrunsDates } from "@/pages/api/dates";
import { Bar } from "react-chartjs-2"

export default function GrafficTypes() {
    const caj = TrunsDates.filter((type) => type.type2 === "Caja").length
    const cre = TrunsDates.filter((type) => type.type2 === "Crédito").length
    const afi = TrunsDates.filter((type) => type.type2 === "Afiliación").length
    const aho = TrunsDates.filter((type) => type.type2 === "Ahorro").length
    const seg = TrunsDates.filter((type) => type.type2 === "Seguros").length
    const aux = TrunsDates.filter((type) => type.type2 === "Auxilios").length
    const est = TrunsDates.filter((type) => type.type2 === "Estado").length
    const otr = TrunsDates.filter((type) => type.type2 === "Otros").length

    const data = {
        labels: ["Caja", "Crédito", "Afiliación", "Ahorro", "Seguros", "Auxilios", "Estado de cuenta", "Otros"],
        datasets: [{
            data: [caj, cre,  afi, aho, seg, aux, est, otr],
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
        <div className="border-2 p-5 rounded-lg w-[550px]">
            <Bar data={data}/>
        </div>
    )
}