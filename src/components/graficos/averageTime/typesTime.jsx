import TimesAwait from "./timeAwait";

export default function TypesTimes({ name, time }) {
    return (
        <div className="flex flex-col items-center w-full p-10">
            <h2 className="text-white text-2xl p-5">Tiempos de Atención a nuestros Asociados</h2>
            <div className='flex flex-row w-[100%] items-center justify-center'>
                <p className="text-white w-[400px]">
                    Los tiempos de espera y atención de nuestros asociados son de gran importancia para nosotros.
                    Es por esto que conocer los tiempos promedios de antencion a nivel general y por sucursales, nos permitiran mejorar y organizar mejor nuestro servicio.
                </p>
                <div className="flex flex-col w-full items-center pt-5">
                    <TimesAwait name={name} time={time} />
                </div>
            </div>
        </div>
    )
}