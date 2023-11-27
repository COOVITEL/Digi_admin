import { getAllTurns } from '@/pages/api/turns';
import { useEffect, useState } from 'react';
import BarChart from './BarChart';
import { TrunsDates } from '@/pages/api/dates';

export default function Graffic () {

/*    const [turns, setTurns] = useState()
    useEffect(() => {
        async function loadTurns() {
            const res = await getAllTurns()
            setTurns(res.data)
        }
        console.log(turns)
        loadTurns()
    }, [])
*/
    const turnsTotal = TrunsDates.length
    const turnsBogota = TrunsDates.filter(turn => turn.city === "Bogotá").length
    const turnsTunja = TrunsDates.filter(turn => turn.city === "Tunja").length

    const data = {
        labels: ["Bogotá", "Tunja", "Total"],
        datasets: [{
          label: 'Turnos Sucursal',
          data: [turnsBogota, turnsTunja, turnsTotal],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(201, 203, 207, 0.5)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 2
        }]
      };
    return (
    <div className="flex flex-row m-6 justify-around items-center">
        <div className='flex w-[400px]'>
            <BarChart chartData={data}/>
        </div>
        <h5 className='text-white w-[250px]'>Podras encontrar diferentes tablas de comparacion de los datos obtenidos en el digiturno</h5>
    </div>
        )
};

