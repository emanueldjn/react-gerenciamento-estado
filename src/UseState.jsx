import React from 'react'

const UseState = ({ name }) => {

    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false) // novo estado chamado Loading

    // efectos
    React.useEffect(() => {
        // despues de 2 segundos de true tirar o cargando 
        console.log("começando")

        if (loading) {
            setTimeout(() => {
                console.log("validação")

                setLoading(false);

                console.log("terminando validação")
            }, 3000)
        }



        console.log("terminando")
    }, [loading]);


    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridade para comprobar que uqieres eliminar.</p>

            {error && (
                <p>Error: El codigo es incorreto</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}

            <input placeholder="Codigo de Seguridad" />
            <button onClick={() => setLoading(true)} >Comprovar</button>
        </div>
    )
}

export { UseState }