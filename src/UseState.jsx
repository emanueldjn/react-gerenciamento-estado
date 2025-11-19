import React from 'react'

const SECURITY_CODE = 'paradigma';

const UseState = ({ name }) => {

    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

    // efectos
    React.useEffect(() => {
        if (!state.loading) return;

        const timeout = setTimeout(() => {
            if (state.value === SECURITY_CODE) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    confirmed: true,
                    error: false
                }));
            } else {
                setState(prev => ({
                    ...prev,
                    error: true,
                    loading: false
                }));
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [state.loading, state.value]);

    // RENDER
    if (!state.deleted && !state.confirmed) {
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
                        setState(prev => ({
                            ...prev,
                            value: event.target.value
                        }));
                    }}
                />
                <button
                    onClick={() => {
                        // iniciar verificação — limpar erro antigo
                        setState(prev => ({
                            ...prev,
                            loading: true,
                            error: false
                        }));
                    }}
                >
                    Comprovar
                </button>
            </div>
        )
    } else if (!!state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>Seguro que quieres eliminar {name}?</p>

                <button
                    onClick={() => {
                        setState(prev => ({
                            ...prev,
                            deleted: true,
                        }));
                    }}
                >
                    Si, eliminar
                </button>

                <button
                    onClick={() => {
                        setState(prev => ({
                            ...prev,
                            confirmed: false,
                            value: '',
                            error: false
                        }));
                    }}
                >
                    No, me arrependí.
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado com éxito</p>

                <button
                    onClick={() => {
                        // >>> CORREÇÃO: setar deleted: false para voltar ao início
                        setState({
                            value: '',
                            error: false,
                            loading: false,
                            deleted: false,
                            confirmed: false,
                        });
                    }}
                >
                    Resetear, volver atrás.
                </button>
            </React.Fragment>
        )
    }
}

export { UseState }
