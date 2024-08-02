import { listCars } from "@/app/helpers/cars/cars";
import Grilla from "./components/grilla";
import { listPersonas } from "@/app/helpers/persona/persona";
import { Button } from "@mui/material";

export default async function PersonaPage() {

  const data = await listPersonas()



  return (
    <div>
      <h1>Hello PERSONA Page</h1>
      
      <Grilla data={data}/>
    </div>
  );
}