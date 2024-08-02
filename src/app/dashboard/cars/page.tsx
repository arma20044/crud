


import Form from "./components/form";
import { FormEvent, useEffect, useState } from "react";
import { createCars, listCars } from "@/app/helpers/cars/cars";
import FormCar from "./components/form";
import NewCar from "./components/newCar";



export default async function NamePage() {










  // const listar = async() => {

  const list = await listCars()

  console.log(JSON.stringify(list))

  //     return list

  // }

  // const listResp = await listar()







  return (
    <>

      <NewCar />
      <FormCar data={list} />
    </>
  );
}