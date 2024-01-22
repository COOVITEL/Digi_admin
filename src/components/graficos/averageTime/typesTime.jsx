import TimesAttent from "./timeAttent";
import TimesAwait from "./timeAwait";

export default function TypesTimes({ name, time }) {
    return (
        <div className="flex flex-col items-center w-full p-10 pb-24">
            <h2 className="text-white text-2xl p-5">Tiempos de Espera y Atención a nuestros Asociados</h2>
            <div className='flex flex-row w-[100%] items-center justify-center'>
                <p className="text-white w-[300px] text-center">
                    Tiempos de espera promedio de nuestros asociados para ser atendidos por nuestro asesores.
                    Los tiempos pueden ser obtenidos por dia, por mes actual, ultimo mes o ultimos 3 meses,
                    y de forma global o por cada de nuestras sucursales.
                </p>
                <div className="flex flex-col w-full items-center pt-5">
                    <TimesAwait name={name} time={time} />
                </div>
            </div>
            <div className='flex flex-row-reverse w-[100%] items-center justify-center m-10'>
                <p className="text-white w-[300px] text-center">
                    El timpo de atención es de gran importancia, ya que alli medimos el servicio brindado hacia nuestros asesores.
                    Aca podras observar un tiempo promedio por dia, mes actual, ultimo me so ultmos 3 meses, de forma global 
                    o por cada una de nuestras sucursales.
                </p>
                <div className="flex flex-col w-full items-center pt-5">
                    <TimesAttent name={name} time={time} />
                </div>
            </div>
        </div>
        
    )
}