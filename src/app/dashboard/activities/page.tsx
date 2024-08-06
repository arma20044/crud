import { Suspense } from "react";
import {unstable_noStore as noStore} from 'next/cache'

interface Props {
    nombre : string;
    activo : boolean;
}

export default async function ActivitiesPage() {

    async function CantidadActivities() {
        noStore()
        let res = await fetch('http://localhost:3000/api/activities')
        let data = await res.json();
        console.log(JSON.stringify(data))

        return (
            data.resultado.map((e : Props) => 
                <div className="flex ">
                <h1>{e.nombre }</h1>
                <h1 className="px-2">{e.activo.toString() }</h1>
                </div>
            )
        )
        
    }


  return (
    <div>
      <h1>Hello ActivitiesPage</h1>
      <Suspense fallback={null}>
            <CantidadActivities/>
      </Suspense>
    </div>
  );
}