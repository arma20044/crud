import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    const response =
        await sql`SELECT * FROM cars `;

    // return new Response(JSON.stringify({
    //     respuestaListar: `${response.rows}`
    // }), { status: 200 });

    return NextResponse.json(response.rows)

}




export async function POST(request: Request, context: { params: { saludo: string } }) {

    //brand VARCHAR(255),
  //model VARCHAR(255),
  //year INT

    const { brand, model,year,activo } = await request.json();

   // const { saludo } = context.params

    const response =
    await sql`INSERT INTO cars (brand, model,year, activo) VALUES (${brand}, ${model}, ${year}, ${activo})`;


    return new Response(JSON.stringify({
        message: `Hello INSERT: ${JSON.stringify(response)}`
       // message: `${saludo}`
      // message: "hola"
    }), { status: 200 });


}




