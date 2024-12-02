import React, { useState } from 'react'

function Calculadora() {
    const [numero, setNumero] = useState(0);
    const [cuadrado, setCuadrado] = useState(0);

    const handleInputChange = (e) => {
        const valor = e.target.value;
        setNumero(valor);
        setCuadrado(valor * valor);
    };
    return (
        <div>
            <h1>Calculadora de Cuadrados</h1>
            <input
                type="number"
                value={numero}
                onChange={handleInputChange}
                placeholder="Ingresa un número"
            />
            <p>El cuadrado es: {cuadrado}</p>
        </div>
    );

}

export default Calculadora