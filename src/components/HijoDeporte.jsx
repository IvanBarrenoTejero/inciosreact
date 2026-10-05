import { Component } from "react";

export default class HijoDeport extends Component {
    seleccionarFavorito = () => {
        //CUANDO DESEEMOS, LLAMAMOS AL PADRE MEDAINTE SU METODO
        //EN PROPS
        this.props.mostrarFavorito(this.props.nombre);
    }

    render () {
        return (
            <div>
                <h3 style={{color: "blue"}}>
                    Deporte: {this.props.nombre}
                </h3>
                <button onClick={this.seleccionarFavorito}>
                    Favorito
                </button>
            </div>
        )
    }
    

}