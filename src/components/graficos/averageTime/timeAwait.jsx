import { Chart as ChartJS, CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from '@/pages/api/dates';
import { Line } from 'react-chartjs-2'
import { options } from '../../options';
import { useEffect, useState } from 'react';
import { getAllTurns } from '@/pages/api/turns';

ChartJS.register(CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

function filterDatesByNameAndMonth(name, time, list) {
   const date = new Date();
   let year = date.getFullYear();
   let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
   let dates = list.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);

   if (newMonth == 0) {
    year = date.getFullYear() - 1;
    dates = list.filter((turn) => Number(turn.date.split("-")[1]) === 12 && Number(turn.date.split('-')[0]) === year);
    } else {
        dates = list.filter((turn) => Number(turn.date.split("-")[1]) === newMonth  && Number(turn.date.split('-')[0]) === year);
    }

    if (time == 2) {
        newMonth = date.getMonth() - 1;
        if (newMonth < 0) {
            dates = list.filter((turn) => Number(turn.date.split("-")[1]) >= (12 + newMonth))
        } else {
            dates = list.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
        }
    }
   return name === "all" ? dates : dates.filter((turn) => turn.city === name);
}

function calculateTimes(list, property1, property2) {
   return list.reduce((acc, cur) => {
       if (cur[property1] && cur[property2]) {
           let date1 = cur[property1].substring(0, 10)
           let date2 = cur[property2].substring(0, 10)
           if (cur.date == date1 && cur.date == date2) {
               let date1Obj = new Date(cur[property1])
               let date2Obj = new Date(cur[property2])
               let diff = (date2Obj.getTime() - date1Obj.getTime()) / 60000;
               if (acc[cur.date]) {
                  acc[cur.date] = (acc[cur.date] + diff) / 2;
               } else {
                  acc[cur.date] = diff;
               }
           }
       }
       return acc;
   }, {});
}

function calculateAverage(times) {
   return Object.values(times).reduce((sum, value) => sum + value, 0) / Object.values(times).length;
}

function createDatasets(labels, dataAwait) {
   return {
       labels: labels,
       datasets: [
           {
               data: dataAwait,
               borderColor: 'rgb(75, 192, 192)',
               pointBackgroundColor: 'rgba(185, 182, 25)',
               tension: 0.3,
               label: 'Tiempo de Espera Promedio: '
           }
       ]
   };
}

export default function TimesAwait({name, time}) {
    const [turns, setTurns] = useState([])
    const [listTime, setlistTime] = useState([])
    const [title, setTitle] = useState()

    useEffect(() => {
        async function loadTurns() {
            const res = await getAllTurns()
            setTurns(res.data)
        }
        loadTurns()
    }, [])

    useEffect(() => {
        const dates = filterDatesByNameAndMonth(name, time, turns);
        setlistTime(dates)
        setTitle(name === "all" ? "Todas las Sucursales" : name)
    }, [name, time, turns]);

    const timesAwait = calculateTimes(listTime, 'arrival_time', 'await_time');

    const averageTimeAwait = calculateAverage(timesAwait);

    const labels = Object.keys(timesAwait);
    const dataAwait = Object.values(timesAwait);

    const datas = createDatasets(labels, dataAwait);

    return (
        <div className='flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[80%] h-auto'>
            <h4 className='text-white'>Tiempo de Espera en {title}</h4>
            <Line data={datas} options={options}/> 
            <div className='flex flex-row gap-16 pt-4'>
                <h3 className='text-[rgb(22,234,234)]'>Espera promedio:  {averageTimeAwait.toFixed(2)} Minutos</h3>
            </div>
        </div>
    )
}
