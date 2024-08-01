'use client'


export default function Form({data}) {

    console.log('esto llego: ' + JSON.stringify(data))

    const enviar = () => {


        console.log('enviar')
    }


    return (
        <form onSubmit={() => enviar()}>
            BRAND
            <input />
            MODEL
            <input />
            YEAR
            <input />

            <input type="submit" />

            <h1>Hello GRID CAR</h1>
            {/* {'results: ' + JSON.stringify(data)} */}

            {data.map(
                e =>
                    <div key={e.model}>
                        {e.brand + ' ' + e.model + ' ' + e.year}
                    </div>
            )}


        </form>
    );
}