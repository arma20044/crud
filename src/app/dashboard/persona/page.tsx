 



import Grilla from "./components/grilla";
import { listPersonas } from "@/app/helpers/persona/persona";
import { Button } from "@mui/material";
import { Suspense, useEffect } from "react";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
 
export default async function PersonaPage() {

  const session = await getServerSession();





if(!session){
    redirect('/login')
}


  const cookieStore = cookies();

  const selected = cookieStore.get('seleccionado')

  console.log(selected?.value)


  

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
      {'selected COOKIE: ' + JSON.stringify(selected)}
      <Suspense fallback={<div>Loading...</div>}>
      <Grilla data={data} />
      </Suspense>
    </div>
  );
}