import React, { Component } from 'react';

class DibujosComplejosArray extends Component {
    dibujarNumeros = () => {
        let lista = [];
        for (let i = 0; i < 10; i++) {
            var num = parseInt(Math.random() * 120) + 1;
            lista.push(<li>{num}</li>)
        }
        return lista;
    }

    render() {
        return (
            <div>
                <h1>
                    Dibujos complejos con array
                </h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>)
    }
}

export default DibujosComplejosArray;