import { Suspense } from "react";
import {unstable_noStore as noStore} from 'next/cache'
import { redirect } from "next/navigation";
import Link from "next/link";
 

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
                <div className="flex bg-cyan-300 ">
                <h1>{e.nombre }</h1>
                <h1 className="px-2">{e.activo.toString() }</h1>
                </div>
            )
        )
        
    }


    
     function AgregarButton() {
       
      return (
        <div>
          <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add
          </button>
          <Link href={'/dashboard/activities/nuevo'}>Ir</Link>
        </div>
      );
    }


  return (
    <div>
      <h1>Hello ActivitiesPage</h1>
      <AgregarButton/>
      <Suspense fallback={null}>
            <CantidadActivities/>
      </Suspense>
    </div>
  );
}