 



import Grilla from "./components/grilla";
import { listPersonas } from "@/app/helpers/persona/persona";
import { Button } from "@mui/material";
import { Suspense, useEffect } from "react";
import { revalidatePath, revalidateTag } from "next/cache";
 
export default async function PersonaPage() {


  

        const response = await fetch('http://localhost:3000/api/persona',{
          cache:'no-cache'
        })
     

        const data = await response.json();


        //revalidatePath('/')
  

  

  // const a = await listPersonas();
  // console.log('hola:' + JSON.stringify(a))



  return (
    <div>
      <h1>Hello PERSONA Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <Grilla data={data} />
      </Suspense>
    </div>
  );
}