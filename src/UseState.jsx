import React from 'react'

const SECURITY_CODE = 'paradigma';

const UseState = ({ name }) => {

    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false
    })

    console.log(state)

    // efectos
    React.useEffect(() => {
        // despues de 2 segundos de true tirar o cargando 
        console.log("começando")

        if (!!state.loading) {
            setTimeout(() => {
                console.log("validação")

                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        loading: false
                    })
                    // setLoading(false);
                } else {
                      setState({
                        ...state,
                        error: true,
                        loading: false
                    })
                    
                }
                

                console.log("terminando validação")
            }, 3000)
        }
        console.log("terminando")
    }, [state.loading]);


    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridade para comprobar que uqieres eliminar.</p>

            {(state.error && !state.loading) && (
                <p>Error: El codigo es incorreto</p>
            )}

            {state.loading && (
                <p>Cargando...</p>
            )}

            <input 

                placeholder="Codigo de Seguridad" 
                value={state.value}
                onChange={(event) => {
                     setState({
                        ...state,
                        value: event.target.value
                    })
                   
                }}
            />
            <button 
                onClick={() => {
                    // setError(false); // ESTE FUE
                      setState({
                        ...state,
                        loading: true
                    })
                    
                }}
            > 
            Comprovar</button>
        </div>
    )
}

export { UseState }