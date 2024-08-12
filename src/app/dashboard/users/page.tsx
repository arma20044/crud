import Link from "next/link";
import { Suspense } from "react";
import Grilla from "./components/grilla";

export default function UserPage() {

  interface Props {
    email : string;
    password : string;
    avatarUrl : string;
}

  async function CantidadUsers() {
    
    let res = await fetch('http://localhost:3000/api/users',{cache:'no-store'})
    let data = await res.json();
    console.log(JSON.stringify(data))

    return (
        // data.resultado.map((e : Props) => 
        //     <div className="flex bg-cyan-300 ">
        //     <h1>{e.email }</h1>
        //     <h1 className="px-2">{e.avatarUrl }</h1>
        //     </div>
        // )
         <Grilla data={data.resultado}/>
    )
    
}

function AgregarButton() {
       
  return (
    <div className="my-5">
      {/* <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Add
      </button> */}
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={'/dashboard/users/nuevo'}>Agregar</Link>
    </div>
  );
}


  return (
    <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">USERS</h2>
        <AgregarButton/>
      {/* <Suspense fallback={<div>CARGANDO...</div>}> */}
            <CantidadUsers/>
            
      {/* </Suspense> */}
    </div>
  );
}


