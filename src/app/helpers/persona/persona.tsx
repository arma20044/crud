'use server'

import { revalidatePath } from "next/cache";


export const listPersonas = async() => {

    const personaList = await fetch('http://localhost:3000/api/persona',{
        cache:'no-cache',
        //next:{revalidate:2}
    }).then(res => res.json())

    console.log(personaList)

    
    return personaList;
    
}


export const createPersona = async (body: string) => {

    console.log('llego persona: ' + JSON.stringify(body))

    
   

    const car = await fetch('http://localhost:3000/api/persona', {
        method: 'POST',
        body,
       cache:'no-store'

    }).then(res => res.json()
    )

    console.log('insert: ' + JSON.stringify(car))

   revalidatePath('/dashboard/persona')

    return car




}


export const borrarPersona = async(body: string) => {

    const car = await fetch('http://localhost:3000/api/persona', {
        method: 'DELETE',
        body,
       // cache:'no-cache'

    }).then(res => res.json()
    )

    console.log('borrar: ' + JSON.stringify(car))

    return car


}