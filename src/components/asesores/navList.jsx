import { TunrsDates } from "@/pages/api/dates";
import { useEffect, useRef, useState } from "react";
import NumberAsesors from "./turnsAsesors";
import TypesScores from "./scores/typesScores";
import TimesAwaitAsesors from "./averageTime";


export default function NavAsesors() {

    const navRef = useRef(null)
    const sucursales = TunrsDates.map((city) => city.city)
    const uniqueSuc = [...new Set(sucursales)]
    const [currentName, setCurrentName] = useState("Bogotá")
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        let timeoutId;
     
        const handleScroll = () => {
          clearTimeout(timeoutId);
          
          // Actualiza el estilo del nav directamente
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
       
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <nav ref={navRef} className={`flex flex-col p-3 px-20 mt-5 fixed top-0 bg-zinc-700 rounded-lg items-center transition duration-500 opacity-0 hover:opacity-100`}>
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
            <h1 className="text-white text-3xl p-5 border-b-[3px]">Graficos y Estadisticas Asesores</h1>
            <h2 className="text-white">
                Es importante conocer el servicio y la antencion brindada de cada uno de nuestros asesores.
            </h2>
            <h3 className="text-white">Por lo que acontinuación encontraremos un analisis y datos obtenidos por cada uno de ellos en cada una de sus sucursales.</h3>
            <NumberAsesors name={currentName} time={currentTime}/>
            <TypesScores name={currentName} time={currentTime}/>
            <TimesAwaitAsesors name={currentName} time={currentTime}/>
        </div>
    )
}
