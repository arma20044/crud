import { NextResponse, NextRequest } from 'next/server'
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {

    const response =
        await sql`SELECT * FROM persona `;

    // return new Response(JSON.stringify({
    //     respuestaListar: `${response.rows}`
    // }), { status: 200 });

    return NextResponse.json(response.rows)

}


export async function POST(request: Request, context: { params: { saludo: string } }) {

    //brand VARCHAR(255),
  //model VARCHAR(255),
  //year INT

    const { nombre, apellido,fecha_nacimiento,correo_electronico } = await request.json();

   // const { saludo } = context.params

    const response =
    await sql`INSERT INTO persona (nombre, apellido,fecha_nacimiento, correo_electronico) VALUES (${nombre}, ${apellido}, ${fecha_nacimiento}, ${correo_electronico})`;


    return new Response(JSON.stringify({
        message: `Hello INSERT PERSONA: ${JSON.stringify(response)}`
       // message: `${saludo}`
      // message: "hola"
    }), { status: 200 });


}
