function Car() {
    //VARIABLE PARA AVERIGUAR EL ESTADO DEL COCHE (APAGADO/ENCENDIDO)
    const [estado, setEstado] = useState("false");
    const [velocidd, setVelocidad] = useState(0);
    //DECLARAMOS UN OBJETO COCHE CON LOS DATOS DE PROPS
    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadmaxima: parseInt(props.velocidadmaxima),
        aceleracion: parseInt(props.aceleracion)
    }

    //VAMOS A CREAR UN METODO QUE DIBUJARA HTML DINAMICO
    //DEPENDIENDO DEL ESTADO, DIBUJARA UN MENSAJE U OTRO MENSAJE
    const comprobarEstado = () => {
        if (estado === "true") {
            return (<h1 style={{color:"blue"}}>Arrancado</h1>)
        } else {
            return (<h1 style={{color:"red"}}>Apagado</h1>)
        }
    }
    const acelerarCoche = () => {
        if (estado == "true") {
            alert("El coche está apagado, ande vas???")
            setVelocidad(0);
        } else {
            if (velocidd >= coche.velocidadmaxima) {
            
            } else {
                //ACELERAMOS
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
    return (<div>
        <h1>{coche.marca} {coche.modelo}</h1>
        {/*ESTADO DEL COCHE Y QUE SIEMPRE SE ACTIVE*/}
        { comprobarEstado()}
        <h2 style={{color:"fuchsia"}}>Velocidad actual: {velocidd} km/h</h2>
        <button onClick={ () => {
            setEstado(!estado);
        }}>On/Off coche</button>
        <button onClick={ () => acelerarCoche()}>
            Acelerar {coche.aceleracion} km/h
        </button>
    </div>)
}

export default Car;