

export const listPersonas = async() => {

    const personaList = await fetch('http://localhost:3000/api/persona',{
        cache:'no-cache'
    }).then(res => res.json())

    console.log(personaList)


    return personaList;
    
}