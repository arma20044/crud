'use server'


import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

interface Props {
    nombre: string;
    activo: boolean;
}

export const cargarActivities = async(datos:Props) => {
  

    const { nombre, activo } = datos

    const response = await sql`INSERT INTO ACTIVITIES (nombre, activo) VALUES (${nombre}, ${activo})`;

    revalidatePath('/dashboard/activities')


    return response;


}
