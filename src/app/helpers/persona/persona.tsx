
export const fetchCache = 'force-no-store';
export const listPersonas = async() => {

    const personaList = await fetch('http://localhost:3000/api/persona',{
        cache:'no-cache',
        //next:{revalidate:2}
    }).then(res => res.json())

    console.log(personaList)

    
    return personaList;
    
}


export const createPersona = async (body: string) => {

    console.log('llego persona: ' + JSON.stringify(body))

    
    try{

    const car = await fetch('/api/persona', {
        method: 'POST',
        body,
        cache:'no-cache'

    }).then(res => res.json()
    )

    return car
}
catch(err){

    console.log('createPersonacreatePersona: ' + err)

    return err
}



}


export const borrarPersona = async(body: string) => {

    const car = await fetch('/api/persona', {
        method: 'DELETE',
        body,
       // cache:'no-cache'

    }).then(res => res.json()
    )

    console.log('asdsa: ' + {car})

    return car


}