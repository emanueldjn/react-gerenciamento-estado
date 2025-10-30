import React from "react";
import { Loading } from "./Loading";
class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: false,
        };
    };

    // metodos de ciclos de vida
    // componentWillMont() {
    //     console.log("componentWillMont")
    // }

    // componentDidMount() {
    //     console.log("componentDidMount")
    // }


    componentDidUpdate() {
        console.log("acualizacion")


        if (this.state.loading) {
            setTimeout(() => {
                console.log("validação")

                this.setState({ loading: false });

                console.log("terminando validação")
            }, 3000)
        }
    }



    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridade para comprobar que uqieres eliminar.</p>

                {this.state.error && (
                    <p>Error: El codigo es incorreto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                <input placeholder="Codigo de Seguridad" />
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprovar</button>
            </div>
        )
    }
}

export { ClassState };