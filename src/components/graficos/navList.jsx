import { TunrsDates } from "@/pages/api/dates";
import Types from "./types";


export default function NavList() {

    const sucursales = TunrsDates.map((city) => city.city)
    const uniqueSuc = [...new Set(sucursales)]

    return (
        <div className="flex flex-col">
            <nav className="p-5">
                <ul className="flex flex-row gap-10 text-white">
                    <li key="todos"><a href="">Todas</a></li>
                    {uniqueSuc.map(suc => (
                        <li key={suc}><a href="">{suc}</a></li>
                        ))}
                </ul>
            </nav>
            <Types />
            
        </div>
    )
}
