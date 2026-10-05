function SaludoHijo(props) {
    //NECESITAMOS CAPUTRAR EN UNA VARIABLE 
    //EL METODO DE PROPS DEL METODO PADRE
    let ejecutarPadre = props.metodoPadre;

    return (<div>
        <h2>Saludo hijo</h2>
        <button onClick={ () => ejecutarPadre("Luke Skywalker" + props.idhijo)}>
            Llamar al parent 
        </button>   
    </div>)
}

export default SaludoHijo;