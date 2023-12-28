import { ListAsesors } from "@/pages/api/asesors";
import { TunrsDates } from "@/pages/api/dates";
import {  useEffect, useState } from "react";


export default function NavAsesors() {

    const sucursales = TunrsDates.map((city) => city.city)
    const uniqueSuc = [...new Set(sucursales)]
    const [currentName, setCurrentName] = useState("Bogotá")
    const asesors = TunrsDates.filter((ase) => ase.city === currentName).map((asesor) => asesor.adviser)
    const uniqueAsesor = [...new Set(asesors)]
    const [currentTime, setCurrentTime] = useState(0)

    const filterCC = [1033747211, 122349157, 1014199690]; // Esta es la lista de CC que quieres mantener

    const filteredAsesors = ListAsesors.filter(({ cc }) => filterCC.includes(cc));
    
    useEffect(() => {}, [name])

    function handleClick(cityName, time) {
        setCurrentName(cityName);
        setCurrentTime(time)
     }

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <nav className="flex flex-col p-3 px-20 mt-5 fixed top-0 bg-zinc-700 rounded-lg items-center">
                <ul className="flex flex-row gap-10">
                    {uniqueSuc.map(suc => (
                        <button className={currentName === suc ? "text-white text-xl" : "text-zinc-400 hover:scale-110  hover:text-white"} key={suc} onClick={() => handleClick(suc, currentTime)}>{suc}</button>
                        ))}
                </ul>
                <ul className="flex flex-col gap-2">
                    {filteredAsesors.map(ase => (
                        <button>{ase.name}</button>
                    ))}
                </ul>
                <ul className="flex flex-row gap-10 text-zinc-400">
                    <button className={currentTime === 0 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 0)}>Mes Actual</button>
                    <button className={currentTime === 1 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 1)}>Ultimo mes</button>
                    <button className={currentTime === 2 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 2)}>Ultimos 3 meses</button>
                </ul>
            </nav>
        </div>
    )
}
