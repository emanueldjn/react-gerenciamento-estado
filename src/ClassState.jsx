import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: false,
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


                if(SECURITY_CODE === this.state.value) {
                    this.setState({ error: false, loading: false})
                } else {
                    this.setState({ error: true, loading: false })
                }

                
                console.log("terminando validação")
            }, 3000)
        }
    }



    render() {

        

        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridade para comprobar que uqieres eliminar.</p>

                {(this.state.error && !this.state.loading) && (
                    <p>Error: El codigo es incorreto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                <input 
                    placeholder="Codigo de Seguridad"
                    value={this.state.value} 
                    onChange={(event) => {
                        this.setState({ value: event.target.value })
                    }}  
                />
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprovar</button>
            </div>
        )
    }
}

export { ClassState };