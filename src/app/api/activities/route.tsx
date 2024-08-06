
import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {


    const response = await sql`SELECT * FROM ACTIVITIES `;

    return new Response(JSON.stringify({
        resultado: response.rows
        // message: `${saludo}`
        // message: "hola"
    }), { status: 200 });
}




export async function POST(request: Request) {

    const { nombre, activo } = await request.json();

    const response = await sql`INSERT INTO ACTIVITIES (nombre, activo) VALUES (${nombre}, ${activo})`;


    return new Response(JSON.stringify({
        message: `Hello INSERT ACTIVITIES: ${JSON.stringify(response)}`
        // message: `${saludo}`
        // message: "hola"
    }), { status: 200 });

  
}