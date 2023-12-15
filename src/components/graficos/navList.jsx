import { TunrsDates } from "@/pages/api/dates";
import Types from "./types";
import { useEffect, useState } from "react";
import Scores from "./scores";
import TypesScores from "./typesScores";


export default function Navbuttons() {

    const sucursales = TunrsDates.map((city) => city.city)
    const uniqueSuc = [...new Set(sucursales)]
    const [currentName, setCurrentName] = useState("all")
    const [currentTime, setCurrentTime] = useState(0)

    function handleClick(cityName, time) {
        setCurrentName(cityName);
        setCurrentTime(time)
     }

    return (
        <div className="flex flex-col justify-center items-center">
            <nav className="flex flex-col p-3 px-20 mt-5 fixed top-0 bg-zinc-700 rounded-lg items-center">
                <ul className="flex flex-row gap-10">
                    <button className={currentName === "all" ? "text-white text-xl" : "text-zinc-400 hover:scale-110  hover:text-white"} key="todos" onClick={() => handleClick("all", currentTime)}>Global</button>
                    {uniqueSuc.map(suc => (
                        <button className={currentName === suc ? "text-white text-xl" : "text-zinc-400 hover:scale-110  hover:text-white"} key={suc} onClick={() => handleClick(suc, currentTime)}>{suc}</button>
                        ))}
                </ul>
                <ul className="flex flex-row gap-10 text-zinc-400">
                    <button className={currentTime === 0 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 0)}>Mes Acutual</button>
                    <button className={currentTime === 1 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 1)}>Ultimo mes</button>
                    <button className={currentTime === 2 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 2)}>Ultimos 3 meses</button>
                </ul>
            </nav>
            <Types name={currentName} time={currentTime}/>
            <Scores name={currentName} />
            <TypesScores name={currentName}/>
        </div>
    )
}
