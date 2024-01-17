import { TunrsDates } from "@/pages/api/dates";
import { useEffect, useRef, useState } from "react";
import NumberAsesors from "./turnsAsesors";
import TypesScores from "./scores/typesScores";
import TimesAwaitAsesors from "./averageTime";


export default function NavAsesors() {

    const [isScrolling, setIsScrolling] = useState(true)
    const sucursales = TunrsDates.map((city) => city.city)
    const uniqueSuc = [...new Set(sucursales)]
    const [currentName, setCurrentName] = useState("Bogotá")
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setIsScrolling(false)
        }, 2000)
     
        const handleScroll = (event) => {
            setIsScrolling(true)
            setTimeout(() => {
                setIsScrolling(false)
            }, 500)
        }
        
        window.addEventListener('scroll', handleScroll, { capture: true });
     
        return () => {
            if (window) {
                window.removeEventListener('scroll', handleScroll, { capture: true });
            }
        }
     }, [])
     
     

    function handleClick(cityName, time) {
        setCurrentName(cityName);
        setCurrentTime(time)
     }
       
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <nav className={`flex flex-col p-3 px-20 mt-5 fixed top-0 bg-zinc-700 rounded-lg items-center transition duration-500 hover:opacity-100 ${isScrolling ? "opacity-100" : "opacity-0"}`}>
                <ul className="flex flex-row gap-10">
                    {uniqueSuc.map(suc => (
                        <button className={currentName === suc ? "text-white text-xl" : "text-zinc-400 hover:scale-110  hover:text-white"} key={suc} onClick={() => handleClick(suc, currentTime)}>{suc}</button>
                        ))}
                </ul>
                <ul className="flex flex-row gap-10 text-zinc-400">
                    <button className={currentTime === 0 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 0)}>Mes Actual</button>
                    <button className={currentTime === 1 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 1)}>Ultimo mes</button>
                    <button className={currentTime === 2 ? "text-white text-xl" : "text-zinc-400 hover:scale-110 hover:text-white"} onClick={() => handleClick(currentName, 2)}>Ultimos 3 meses</button>
                </ul>
            </nav>
            <h2 className="text-white mt-10">
                Es importante conocer el servicio y la antencion brindada de cada uno de nuestros asesores.
            </h2>
            <h3 className="text-white">Por lo que acontinuación encontraremos un analisis y datos obtenidos por cada uno de ellos en cada una de sus sucursales.</h3>
            <NumberAsesors name={currentName} time={currentTime}/>
            <TypesScores name={currentName} time={currentTime}/>
            <TimesAwaitAsesors name={currentName} time={currentTime}/>
        </div>
    )
}
