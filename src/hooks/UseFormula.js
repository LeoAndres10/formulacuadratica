import { useState } from "react";
import Swal from "sweetalert2";


const UseFormula = () => {

    const [ValorA,setValorA] = useState('');
    const [ValorB,setValorB] = useState('');
    const [ValorC,setValorC] = useState('');
    const [Resultado,setResultado] = useState('');
    const [Resultado2,setResultado2] = useState('');
const Formula = () =>  {

    if (ValorA === '') {
        Alerta('Ingrese el valor de A')
    } else if (ValorB === '') {
        Alerta('Ingrese el valor de B')
       } else if (ValorC === '') {
            Alerta('Ingrese el valor de C')
    }else{
    let discriminante = Math.sqrt(Math.pow(Number(ValorB),2) - (4 * Number(ValorA) * Number(ValorC)));
    let x1 = -Number(ValorB) + discriminante / (2*Number(ValorA)); 
    let x2 = -Number(ValorB) - discriminante/ (2*Number(ValorA));
    setResultado(x1);
    setResultado2(x2);
    }
}

const Limpiar = () => {

    setValorA('')
    setValorB('')
    setValorC('')
    setResultado('')
    setResultado2('')
}

const Alerta = (mensaje) => {
    Swal.fire({
        title: "Advertencia",
        text: mensaje,
        icon: "warning"
    })
}
return {

    ValorA,
    setValorA,
    ValorB,
    setValorB,
    ValorC,
    setValorC,
    Resultado,
    Resultado2,
    Formula,
    Limpiar

}
    

}

export default UseFormula;