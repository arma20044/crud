'use client'

import { createCars } from "@/app/helpers/cars/cars"
import  { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"


export default function NewCar() {

    const router = useRouter();


  const [brand, setBrand] = useState()
  const [model, setModel] = useState()
  const [year, setYear] = useState()

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()


    console.log('enviar: ' + (brand) + " " + model + ' ' + year)


    createCars(JSON.stringify(
      {
        'brand': brand,
        'model': model,
        'year': year,
        'activo':true
      }),
    )

    // listar()
    router.refresh()




  }


  return (
    <form onSubmit={onSubmit}>
        BRAND
        <input value={brand}
          onChange={(e) => setBrand(e.target.value)} />
        MODEL
        <input value={model}
          onChange={(e) => setModel(e.target.value)} />
        YEAR
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <input type="submit" />

        <h1>Hello GRID CAR</h1>
        {/* {'results: ' + JSON.stringify(data)} */}

        </form>
  );
}