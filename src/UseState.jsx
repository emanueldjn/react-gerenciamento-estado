import React from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
    const [state, setState] = React.useState({
        value: "",
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

    // ---------------------------
    // EVENTOS
    // ---------------------------
    const onConfirm = () => {
        setState((prev) => ({
            ...prev,
            loading: false,
            confirmed: true,
            error: false,
        }));
    };

    const onError = () => {
        setState((prev) => ({
            ...prev,
            error: true,
            loading: false,
        }));
    };

    const onWrite = (newValue) => {
        setState((prev) => ({
            ...prev,
            value: newValue,
        }));
    };

    const onCheck = () => {
        setState((prev) => ({
            ...prev,
            loading: true,
            error: false,
        }));
    };

    const onDelete = () => {
        setState((prev) => ({
            ...prev,
            deleted: true,
        }));
    };

    const onReset = () => {
        setState({
            value: "",
            error: false,
            loading: false,
            deleted: false,
            confirmed: false,
        });
    };

    const onCancel = () => {
        setState((prev) => ({
            ...prev,
            confirmed: false,
            value: "",
            error: false,
        }));
    };

    // ---------------------------
    // EFFECT
    // ---------------------------
    React.useEffect(() => {
        if (!state.loading) return;

        const timeout = setTimeout(() => {
            state.value === SECURITY_CODE ? onConfirm() : onError();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [state.loading, state.value]);

    // ---------------------------
    // RENDER
    // ---------------------------
    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el código de seguridad.</p>

                {state.error && !state.loading && (
                    <p>Error: El código es incorrecto</p>
                )}

                {state.loading && <p>Cargando...</p>}

                <input
                    placeholder="Código de Seguridad"
                    value={state.value}
                    onChange={(e) => onWrite(e.target.value)}
                />

                <button onClick={onCheck}>Comprobar</button>
            </div>
        );
    }

    if (!!state.confirmed && !state.deleted) {
        return (
            <>
                <p>Seguro que quieres eliminar {name}?</p>

                <button onClick={onDelete}>Sí, eliminar</button>
                <button onClick={onCancel}>No, me arrepentí</button>
            </>
        );
    }

    return (
        <>
            <p>Eliminado con éxito</p>
            <button onClick={onReset}>Resetear, volver atrás</button>
        </>
    );
};

export { UseState };
