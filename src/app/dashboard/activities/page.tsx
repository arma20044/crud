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
        <div className="my-5">
          {/* <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add
          </button> */}
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={'/dashboard/activities/nuevo'}>Agregar</Link>
        </div>
      );
    }


  return (
    <div>      
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Activities</h2>
      <AgregarButton/>
      <Suspense fallback={null}>
            <CantidadActivities/>
      </Suspense>
    </div>
  );
}