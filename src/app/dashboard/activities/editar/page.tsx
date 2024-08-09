'use client'


import { useSearchParams } from 'next/navigation'


export default function EditarPage() {
    const searchParams = useSearchParams()


    const search = searchParams.get('nombre')


  return (
    <div>
      <h1>Hello Editar Page  {search}</h1>
    </div>
  );
}