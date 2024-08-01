//---------------------------------------------------------------------------------------------------------------------

let dias = parseInt(prompt("Ingrese la cantidad de dias que vas a estar de viaje"));
let presupuesto_comida = parseInt(prompt("Ingrese cuanto dinero llevara para comida"));
let cantidad_comidas = parseInt(prompt("Ingrese la cantidad veces que comera por dia"));

let resultado_final = presupuesto_comida / (dias * cantidad_comidas);

alert("Podés gastar "+ parseInt(resultado_final) +" en cada comida para que te alcance la plata durante los " + dias +" días de viaje")