import ScoreOptions from "./scoreOptions";

export default function TypesScores({ name, time }) {
    return (
        <div className="flex flex-col w-full items-center pt-5">
            <h2 className="text-white text-2xl">Calificaciones dadas por nuestros asosiados</h2>
            <div className="flex flex-wrap gap-10 m-5 justify-center items-center">
                <ScoreOptions name={name} time={time} typeScore={"Servicio"} list={['Excelente', 'Bueno', 'Normal', 'Regular', 'Malo']} param={"score_service"} />
                <ScoreOptions name={name} time={time} typeScore={"Tiempo"} list={['Muy rápido', 'Rápido', 'Normal', 'Lento', 'Muy Lento']} param={"score_time"} />
                <ScoreOptions name={name} time={time} typeScore={"Solicitud Atendida"} list={['Si', 'No']} param={"score_att"} />
                <ScoreOptions name={name} time={time} typeScore={"Recomendación"} list={['Si', 'Tal vez', 'No']} param={"score_recommen"} />
            </div>
        </div>
    )
}