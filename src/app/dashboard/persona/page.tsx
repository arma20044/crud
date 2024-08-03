 

'use client'

import Grilla from "./components/grilla";
import { listPersonas } from "@/app/helpers/persona/persona";
import { Button } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { revalidatePath, revalidateTag } from "next/cache";
 
export default function PersonaPage() {

  const [listado, setListado] = useState();
  const [cargando, setCargando] = useState(false)

  
  useEffect(() => {
   
    const fetchListado = async  () => {
      try{
        const response = await fetch('/api/persona')
        if(!response.ok){
            throw new Error("fallo fetch al listado de personas")
        }

        const data = await response.json();
        console.log({data})
        setListado(data)
      
    } catch(err){
          console.log('error: ' + err)
    } finally {
      setCargando(false)
    }
  }

  fetchListado()
  }, [])

  

  // const a = await listPersonas();
  // console.log('hola:' + JSON.stringify(a))



  return (
    <div>
      <h1>Hello PERSONA Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <Grilla data={listado} />
      </Suspense>
    </div>
  );
}