import Form from "./form"



export default async function GridCars() {

    async function getData() {
        try {
          const res = await fetch('http://localhost:3000/api/cars')
          // The return value is *not* serialized
          // You can return Date, Map, Set, etc.
    
         //console.log(res.json())
    
          if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
          }

          const r = res.json()
          //console.log(r)
    
          return r
    
        }
        catch (er) {
          console.error({ er })
        }
    
    
      }
    
      const data = await getData()
    
      console.log('asd:' + (data.message))
    

    


  return (
    <Form data={data}/>
  );
}