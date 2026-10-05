function Matematicas(props) {

    let numero = props.numero;
    let dobleNumero = props.dobleNumero;
    let tripleNumero = props.tripleNumero;

    return (<div>
        <h2>Matemáticas</h2>
        <button onClick={ () => dobleNumero(numero)}>
            Doble {numero}
        </button> 

        <button onClick={ () => tripleNumero(numero)}>
            Triple {numero}
        </button>  
    </div>)

}