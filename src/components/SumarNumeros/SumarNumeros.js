import "./SumarNumeros.css"
function SumarNumeros() {
    const realizarSuma = (num1, num2) => {
        //let suma = num1 + num2;
        let suma = props.numero1 + props.numero2;
        console.log("La suma de " + parseInt(prps.numero1) + " + " + parseInt(props.numero2) + " es: " + suma);
    }
}

return (<div>
    <h1> Sumar números {props.numero1} y {props.numero2}</h1>
    <button onClick={ () => SumarNumeros(7,8)}>
        Sumar 7 + 8
    </button>
</div>);

export default SumarNumeros;