import { TunrsDates } from "@/pages/api/dates";
import Types from "./typesTurns";
import {  useEffect, useRef, useState } from "react";
import StateScore from "./scores/stateScore";
import TypesScores from "./scores/typesScores";
import TypesTimes from "./averageTime/typesTime";
import NumberTurns from "./numberTurns";
import { getAllTurns } from "@/pages/api/turns";


export default function Navbuttons() {

    const navRef = useRef(null)
    const [turns, setTurns] = useState([])
    const sucursales = turns.map((city) => city.city)
    const uniqueSuc = [...new Set(sucursales)]
    const [currentName, setCurrentName] = useState("all")
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        async function loadTurns() {
            const res = await getAllTurns()
            setTurns(res.data)
        }
        loadTurns()
    }, [uniqueSuc])

    useEffect(() => {
        let timeoutId;
     
        const handleScroll = () => {
          clearTimeout(timeoutId);
          
          if (navRef.current) {
            navRef.current.style.opacity = 1;
          }
     
          timeoutId = setTimeout(() => {
            if (navRef.current) {
              navRef.current.style.opacity = 0;
            }
          }, 500);
        };
     
        window.addEventListener('scroll', handleScroll, { capture: true });
     
        return () => {
          window.removeEventListener('scroll', handleScroll, { capture: true });
        };
      }, []);

    function handleClick(cityName, time) {
        setCurrentName(cityName);
        setCurrentTime(time) 
     }

     function handleMouseEnter() {
        if (navRef.current) {
            navRef.current.style.opacity = 1;
        }
     }
     
     function handleMouseLeave() {
        if (navRef.current) {
            navRef.current.style.opacity = 0;
        }
     }
     

    return (
        <div className="flex flex-col gap-50 justify-center items-center">
            <nav
                ref={navRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`flex flex-col p-3 px-10 mt-5 fixed top-0 bg-zinc-700 rounded-lg items-center transition duration-500 opacity-0`}>
                <ul className="flex flex-row gap-10">
                    <button className={currentName === "all" ? "text-white text-xl" : "text-zinc-400 hover:scale-110  hover:text-white"} key="todos" onClick={() => handleClick("all", currentTime)}>Global</button>
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
            <h1 className="text-white text-3xl mt-5 mb-5 border-b-[3px] p-5">Gráficos y Estadísticas Sucursales</h1>
            <Types name={currentName} time={currentTime}/>
            <NumberTurns name={currentName} time={currentTime}/>
            <StateScore name={currentName} time={currentTime}/>
            <TypesTimes name={currentName} time={currentTime}/>
            <TypesScores name={currentName} time={currentTime}/>
        </div>
    )
}
