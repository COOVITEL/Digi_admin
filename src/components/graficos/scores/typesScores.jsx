import ScoreOptions from "./scoreOptions";

export default function TypesScores({ name, time }) {
    return (
        <div className="flex flex-col w-full items-center pt-5 pb-10">
            <h2 className="text-white text-2xl">Calificaciones dadas por nuestros asosiados</h2>
            <p className="text-white p-5 w-[800px] text-center">
                Conocer el servicio brindado de nuestros asesores es de gran importancia.
                Pero conocer la percepcion de nuestros asociados es aun mas importante.
            </p>
            <p className="text-white p-5 w-[1000px] text-center">
                Eso por esto que acontinuación podras encontrar la percepción del servicio, atencion,
                tiempo de sus visitas y si nuestros asociados nos recomendarian con un amigo o conocido.
            </p>
            <div className="flex flex-wrap gap-10 m-5 justify-center items-center">
                <ScoreOptions name={name} time={time} typeScore={"Servicio"} list={['Excelente', 'Bueno', 'Normal', 'Regular', 'Malo']} param={"score_service"} />
                <ScoreOptions name={name} time={time} typeScore={"Tiempo"} list={['Muy rápido', 'Rápido', 'Normal', 'Lento', 'Muy Lento']} param={"score_time"} />
                <ScoreOptions name={name} time={time} typeScore={"Solicitud Atendida"} list={['Si', 'No']} param={"score_att"} />
                <ScoreOptions name={name} time={time} typeScore={"Recomendación"} list={['Si', 'Tal vez', 'No']} param={"score_recommen"} />
            </div>
        </div>
    )
}