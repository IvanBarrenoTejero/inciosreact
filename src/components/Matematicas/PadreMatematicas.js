function PadreMatematicas() {
    const dobleNumero = (numero) => {
        numero = numero * 2;
        console.log("El doble del número es: " + numero);
    }


    const tripleNumero = (numero) => {
        numero = numero * 3;
        console.log("El triple del número es: " + numero);
    }

    return (<div>
        <h1>Padre mates</h1>
        <Matematicas numero="7" dobleNumero={dobleNumero} tripleNumero={tripleNumero}/>
        <MAtematicas numero="79" dobleNumero={dobleNumero} tripleNumero={tripleNumero}/>
    </div>)

}