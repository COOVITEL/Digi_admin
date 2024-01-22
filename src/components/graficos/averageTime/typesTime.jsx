import TimesAttent from "./timeAttent";
import TimesAwait from "./timeAwait";

export default function TypesTimes({ name, time }) {
    return (
        <div className="flex flex-col items-center w-full p-10 pb-24">
            <h2 className="text-white text-2xl p-5">Tiempos de Espera y Atención a nuestros Asociados</h2>
            <div className='flex flex-row w-[100%] items-center justify-center'>
                <p className="text-white w-[300px] text-center">
                    Tiempos de espera promedio de nuestros asociados para ser atendidos por nuestros asesores.
                    Los tiempos pueden ser obtenidos por día, por mes actual, último mes o ultimos 3 meses,
                    y de forma global o por cada de nuestras sucursales.
                </p>
                <div className="flex flex-col w-full items-center pt-5">
                    <TimesAwait name={name} time={time} />
                </div>
            </div>
            <div className='flex flex-row-reverse w-[100%] items-center justify-center m-10'>
                <p className="text-white w-[300px] text-center">
                    El tiempo de atención es de gran importancia, ya que allí medimos el servicio brindado hacia nuestros asesores.
                    Acá podrás observar un tiempo promedio por día, mes actual, último mes o últmos 3 meses, de forma global 
                    o por cada una de nuestras sucursales.
                </p>
                <div className="flex flex-col w-full items-center pt-5">
                    <TimesAttent name={name} time={time} />
                </div>
            </div>
        </div>
        
    )
}