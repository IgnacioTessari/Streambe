//---------------------------------------------------------------------------------------------------------------------

let edad = parseInt(prompt("ingrese su edad"));
let edad_max = parseInt(prompt("ingrese su edad maxima"));
let papas_fritas = parseInt(prompt("ingrese cuantas papas fritas se comera por dia."));

let años_restantes = edad_max - edad;
let resultado_final = años_restantes * 366 * papas_fritas;
let precio_total = resultado_final * 1000

alert("Necesitaras " + resultado_final + " papas fritas para que te alcancen hasta los " + edad_max + " años, y el total en pesos seria de $" + precio_total);


