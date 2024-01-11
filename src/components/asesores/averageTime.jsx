import { Chart as ChartJS, CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from '@/pages/api/dates';
import { Line } from 'react-chartjs-2'
import { options } from '../options';
import { useEffect, useState } from 'react';
import { ListAsesors } from '@/pages/api/asesors';

ChartJS.register(CategoryScale, LineElement, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

function filterDatesByNameAndMonth(name, time) {
   const date = new Date();
   let year = date.getFullYear();
   let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
   let dates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth);

   if (newMonth == 0) {
    year = date.getFullYear() - 1;
    dates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === 12 && Number(turn.date.split('-')[0]) === year);
    } else {
        dates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth  && Number(turn.date.split('-')[0]) === year);
    }

    if (time == 2) {
        newMonth = date.getMonth() - 1;
        if (newMonth < 0) {
            dates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) >= (12 + newMonth))
        } else {
            dates = TunrsDates.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
        }
    }
   return name === "all" ? dates : dates.filter((turn) => turn.city === name);
}

function calculateAverage(times) {
   return Object.values(times).reduce((sum, value) => sum + value, 0) / Object.values(times).length;
}


function calculateTimes(list, property1, property2, name) {
    return list.reduce((acc, cur) => {
        if (cur[property1] && cur[property2] && cur.adviser == name) {
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

 function countsAsesors(name, listTime, ListAsesors) {

    let datesTimesAsesors = [];
    for (const asesor of ListAsesors) {
        if (asesor.sucursal === name) {
            const datesAsesor = {
                'name': asesor.name,
                'await': calculateTimes(listTime, 'arrival_time', 'await_time', asesor.cc),
                'atten': calculateTimes(listTime, 'await_time', 'atention_time', asesor.cc),
            }
            datesTimesAsesors.push(datesAsesor)
        }
    }
    return datesTimesAsesors;
}

function createDatasets(labels, dataAwait, dataAtten, names) {

    const listColorsWeak = [
        'rgb(56,135,190)',
        'rgb(159,187,115)',
        'rgb(236,143,94)']
        
    const listColorsStrong = [
        'rgb(82,211,216)', 
        'rgb(225,236,200)',
        'rgb(243,182,100)']

    let dataSets = [];

    for (let x = 0; x < dataAwait.length; x++) {
        dataSets.push({
            label: `Tiempo de espera ${names[x]}`,
            data: dataAwait[x],
            borderColor: listColorsWeak[x],
            pointBackgroundColor: listColorsWeak[x],
            tension: 0.3,
        },)
        dataSets.push({
            label: 'Tiempo de Atención',
            data: dataAtten[x],
            borderColor: listColorsStrong[x],
            pointBackgroundColor: listColorsStrong[x],
            tension: 0.3,
        },)
    }
    return {
        labels: labels,
        datasets: dataSets
    };
 }

export default function TimesAwait({name, time}) {
    const [listTime, setlistTime] = useState(TunrsDates)
    const [title, setTitle] = useState()
    const [listAverageTime, setListAverageTime] = useState(countsAsesors(name, listTime, ListAsesors))

    useEffect(() => {
        const dates = filterDatesByNameAndMonth(name, time);
        setlistTime(dates)
        setTitle(name === "all" ? "Todas las Sucursales" : name)
    }, [name, time]);
    
    useEffect(() => {
        setListAverageTime(countsAsesors(name, listTime, ListAsesors))   
    }, [listTime])

    let countAsesors = ListAsesors.filter((ase) => ase.sucursal === name).length
    
    let names = [], timesAwait = [], timesAtten = [];

    for (let i = 0; i < countAsesors; i++) {
      names.push(listAverageTime[i]['name']);
      timesAwait.push(listAverageTime[i]['await']);
      timesAtten.push(listAverageTime[i]['atten']);
    }

    let averageTimeAtten = [], averageTimeAwait = [];
    for ( let x = 0; x < names.length; x++) {
        averageTimeAwait.push(calculateAverage(timesAwait[x]));
        averageTimeAtten.push(calculateAverage(timesAtten[x]));
    }

    const listDates = listTime.map(turn => turn.date)
    const labels = [...new Set(listDates)]
    
    let dataAwait = [], dataAtten = [];
    for ( let y = 0; y < names.length; y++) {
        dataAwait.push(Object.values(timesAwait[y]))
        dataAtten.push(Object.values(timesAtten[y]))
    }

    const datas = createDatasets(labels, dataAwait, dataAtten, names);

    const colorsOptions = [
        ['text-[rgb(12,128,205)]', 'text-[rgb(56,135,190)]', 'text-[rgb(82,211,216)]'],
        ['text-[rgb(159,187,115)]', 'text-[rgb(159,187,115)]', 'text-[rgb(225,236,200)]'],
        ['text-[rgb(236,143,94)]', 'text-[rgb(236,143,94)]', 'text-[rgb(243,182,100)]']
    ]

    return (
        <div className='flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[67%] h-auto'>
            <h4 className='text-white font-bold'>Tiempo de Espera en {title}</h4>
            <Line data={datas} options={options}/> 
            <div className='flex flex-row gap-16 pt-4'>
                {names.map((name, index) => (
                    <div className='flex flex-col gap-3'>
                        <h4 className={`${colorsOptions[index][0]} text-sm text-center`}>{name}</h4>
                        <h4 className={`${colorsOptions[index][1]} text-sm text-center`}>Espera promedio:  {averageTimeAwait[index].toFixed(2)} Min</h4>
                        <h4 className={`${colorsOptions[index][2]} text-sm text-center`}>Atencion promedio:  {averageTimeAtten[index].toFixed(2)} Min</h4> 
                    </div>
                ))}
            </div>
        </div>
    )
}