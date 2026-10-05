import "./SumarNumeros.css";
function SumarNumeros({ numero1, numero2 }) {
  const realizarSuma = () => {
    const suma = Number(numero1) + Number(numero2);
    console.log(`La suma de ${numero1} + ${numero2} es: ${suma}`);
  };

  return (
    <div>
      <h1>
        Sumar números {numero1} y {numero2}
      </h1>
      <button onClick={realizarSuma}>
        Sumar {numero1} + {numero2}
      </button>
    </div>
  );
}

export default SumarNumeros;
