
export const listCars = async() => {

    const carsList = await fetch('http://localhost:3000/api/cars',{
        cache:'no-cache'
    }).then(res => res.json())

    console.log(carsList)


    return carsList;

}


export const createCars = async (body: string) => {

    console.log('llego createcars: ' + JSON.stringify(body))

    
    

    const car = await fetch('/api/cars', {
        method: 'POST',
        body,

    }).then(res => res.json()
    )

    return car



}
export const softDelteCars = async (id: number) => {

    console.log('llego softdeletecar: ' + JSON.stringify(id))

    
    

    const car = await fetch('/api/cars/update', {
        method: 'POST',
        body: JSON.stringify({
            id:id
        }),

    }).then(res => res.json()
    )

    return car

}