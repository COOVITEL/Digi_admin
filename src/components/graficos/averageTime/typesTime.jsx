import TimesAwait from "./timeAwait";

export default function TypesTimes({ name, time }) {
    return (
        <div className="flex flex-col w-full items-center pt-5">
            <h2 className="text-white text-2xl">Tiempos de Atención a nuestros Asociados</h2>
            <div className="flex flex-wrap gap-10 m-5 justify-center items-center w-full h-auto">
                <TimesAwait name={name} time={time} />
            </div>
        </div>
    )
}