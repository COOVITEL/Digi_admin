import AttentionScore from "./atentionScore";
import RecommentScore from "./recomment";
import ServiceScore from "./serviceScore";
import TimeScore from "./timeScore";

export default function TypesScores({ name, time }) {
    return (
        <div className="flex flex-col w-full items-center pt-5">
            <h2 className="text-white text-2xl font-bold">Calificaciones dadas por nuestros asociados</h2>
            <div className="flex flex-wrap gap-10 m-5 justify-center items-center">
                <ServiceScore name={name} time={time} />
                <TimeScore name={name} time={time}/>
                <AttentionScore name={name} time={time}/>
                <RecommentScore name={name} time={time}/>
            </div>
        </div>
    )
}