import { Chart as ChartJS, CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TunrsDates } from "@/pages/api/dates";
import { Bar } from "react-chartjs-2"
import { optionsAsesors } from "../../options";
import { useEffect, useState } from 'react';
import { ListAsesors } from '@/pages/api/asesors';

ChartJS.register(CategoryScale, PointElement, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ServiceScore({name, time}) {
    const asesors = ListAsesors.filter((turn) => turn.sucursal === name)
    const listAse = asesors.map((turn) => turn.name)
    const [listDatesAsesors, setListDatesAsesors] = useState(countDates(ListAsesors, TunrsDates, name, time))
    const [service, setService] = useState(listDatesAsesors)

    useEffect(() => {
        let newListDatesAsesors = countDates(ListAsesors, TunrsDates, name, time);
        setListDatesAsesors(newListDatesAsesors);
     }, [name, time]);
     
     useEffect(() => {
        let newService = Service(listDatesAsesors);
        setService(newService);
     }, [listDatesAsesors]);

    const data = {
        labels: listAse, // Etiquetas para las columnas principales
        datasets: [
            {
                label: 'Excelente',
                data: service[0], // Datos para las subcolumnas de la primera columna principal
                backgroundColor: 'rgba(54, 162, 235, 0.8)' // Color de las subcolumnas
            },
            {
                label: 'Buena',
                data: service[1], // Datos para las subcolumnas de la segunda columna principal
                backgroundColor: 'rgba(153, 102, 255, 0.8)' // Color de las subcolumnas
            },
            {
                label: 'Normal',
                data: service[2], // Datos para las subcolumnas de la tercera columna principal
                backgroundColor: 'rgba(255, 206, 86, 0.8)' // Color de las subcolumnas
            },
            {
                label: 'Regular',
                data: service[3], // Datos para las subcolumnas de la cuarta columna principal
                backgroundColor: 'rgba(75, 192, 192, 0.8)' // Color de las subcolumnas
            },
            {
                label: 'Malo',
                data: service[4], // Datos para las subcolumnas de la quinta columna principal
                backgroundColor: 'rgba(255, 99, 132, 0.8)' // Color de las subcolumnas
            }
        ]
    };

    return (
        <div className="w-full flex flex-col items-center gap-5 p-10">
            <p className="text-white font-light">
                Calificaciones del <strong className='font-bold'>Servicio</strong> brindado por nuestros <strong className='font-bold'>asesores</strong> a nuestros <strong className='font-bold'>asociados</strong>.
            </p>
            <div className="flex flex-col justify-center items-center border-2 p-5 rounded-lg w-[95%] h-auto">
                <h4 className='text-white font-bold'>Calificación sobre el Servicio Brindado</h4>
                <Bar data={data} options={optionsAsesors}/>
            </div>
        </div>
    )
}

function Service(list) {
    let score1 = [];
    let score2 = [];
    let score3 = [];
    let score4 = [];
    let score5 = [];

    for (const date of list) {
        score1.push(date[0])
        score2.push(date[1])
        score3.push(date[2])
        score4.push(date[3])
        score5.push(date[4])
    }

    return [score1, score2, score3, score4, score5];
}

function countDates(listAsesors, listDates, name, time) {

    const date = new Date()
    let year = date.getFullYear();
    let newMonth = time === 0 ? date.getMonth() + 1 : date.getMonth();
    let newDates;

    if (newMonth == 0) {
        year = date.getFullYear() - 1;
        newDates = listDates.filter((turn) => Number(turn.date.split("-")[1]) === 12 && Number(turn.date.split('-')[0]) === year);
    } else {
        newDates = listDates.filter((turn) => Number(turn.date.split("-")[1]) === newMonth  && Number(turn.date.split('-')[0]) === year);
    }

    if (time == 2) {
        newMonth = date.getMonth() - 1;
        if (newMonth < 0) {
            newDates = listDates.filter((turn) => Number(turn.date.split("-")[1]) >= (12 + newMonth))
        } else {
            newDates = listDates.filter((turn) => Number(turn.date.split("-")[1]) >= newMonth)
        }
    }

    let listDatesAsesors = [];
    for (const asesor of listAsesors) {
        if (asesor.sucursal === name) {
            let ase = [
                newDates.filter((turn) => turn.adviser == asesor.cc && turn.score_service === 'Excelente').length,
                newDates.filter((turn) => turn.adviser == asesor.cc && turn.score_service === 'Bueno').length,
                newDates.filter((turn) => turn.adviser == asesor.cc && turn.score_service === 'Normal').length,
                newDates.filter((turn) => turn.adviser == asesor.cc && turn.score_service === 'Regular').length,
                newDates.filter((turn) => turn.adviser == asesor.cc && turn.score_service === 'Malo').length,
            ];
            listDatesAsesors.push(ase);
        }
    }
    return listDatesAsesors
}