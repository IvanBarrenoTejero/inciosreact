//DEBEMOS IMPORTAR useState de react
import { useState } from "react";

function Contador() {
    //LAS VARIABES state SE DECLARAN CON NOMBRE PARA GT
    //Y METODO PARA SET
    const [ numero, setNumero] = useState(0);
    const incrementar = () => {
        //PARA MODIFICAR EL VALOR UTILIZAMOS EL METODO QUE HEMOS DECALRADO EN SET
        setNumero(valorActual => valorActual + 1);
    }
    return (<div>
        <h1>Contador state</h1>
        <h3 style={{color:"red"}}>Contador: {numero}</h3>
        <button onClick={ () => incrementar()}>
            Incrementar
        </button>
        <button onClick={ () => {
            setNumero(valorActual => valorActual - 1);
        }}>
            Restar
        </button>
    </div>)
}

export default Contador;