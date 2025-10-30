import React from "react";
class ClassState extends React.Component {

    constructor() {
        super();

        this.state = {
            error: false,
        };
    };

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridade para comprobar que uqieres eliminar.</p>

                {this.state.error && (
                    <p>Error: El codigo es incorreto</p>
                )}

                <input placeholder="Codigo de Seguridad" />
                <button>Comprovar</button>
            </div>
        )
    }
}

export { ClassState };