import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    //NECESITAMOS UN MÉTODO PARA QUE EL HIJO
    //SE COMUNIQUE CON NOSOTROS

    const metodoPadre = (nombre) => {
        console.log("Yo soy tu padre," + nombre);
    }
    return (<div>
        <h1>Hola, soy el padre</h1>
        <SaludoHijo idhijo = "1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo = "2" metodoPadre={metodoPadre}/>
    </div>)
}

export default SaludoPadre;