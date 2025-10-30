import React from 'react'

const UseState = ({ name }) => {

    const [error, setError] = React.useState(true);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridade para comprobar que uqieres eliminar.</p>

            {error && (
                <p>Error: El codigo es incorreto</p>
            )}

            <input placeholder="Codigo de Seguridad" />
            <button onClick={() => setError(!error)} >Comprovar</button>
        </div>
    )
}

export { UseState }