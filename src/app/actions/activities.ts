'use server'


import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

interface Props {
    id?: number;
    nombre: string;
    activo: boolean;
}

export const cargarActivities = async(datos:Props) => {
  

   

    const response = await sql`SELECT * FROM ACTIVITIES `;

     revalidatePath('/dashboard/activities')


     return response;


}


export const crearActivities = async(datos:Props) => {
  

    const { nombre, activo } = datos

    const response = await sql`INSERT INTO ACTIVITIES (nombre, activo) VALUES (${nombre}, ${activo})`;

    revalidatePath('/dashboard/activities')


    return response;


}


export const eliminarActivities = async(id:number) => {

    const response = await sql `DELETE FROM ACTIVITIES WHERE ID = ${id}`;

    return response.rows;

}


export const buscarActivitiesById = async(id:number) => {
  

    console.log('a buscar:  ' + id)
   

    const response = await sql`SELECT * FROM ACTIVITIES WHERE id = ${id} `;

     //revalidatePath('/dashboard/activities')


     return response;


}
export const actualizarActivitiesById = async(datos:Props) => {
  
    const {id, nombre, activo } = datos;
    
   

    const response = await sql`UPDATE ACTIVITIES SET NOMBRE = ${nombre} , ACTIVO = ${activo} WHERE id = ${id} `;

     revalidatePath('/dashboard/activities')


     return response;


}
