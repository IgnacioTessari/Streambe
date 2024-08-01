//---------------------------------------------------------------------------------------------------------------------

let texto_breve = prompt("escriba un texto breve");
long_texto = texto_breve.length;
console.log("el numero de caracteres usado es de: " + long_texto);

let edad = prompt("ingrese su edad");
edad = parseInt(edad);

while (isNaN(edad)){
    alert("la edad ingresada no es valida");
    edad = prompt("ingrese su edad")
} 
let dias = edad * 366;

alert("el equivalente en dias a su edad es de: " + dias);

let num1 = prompt("elija un numero");
let num2 = prompt("elija otro numero");


let res = parseInt(num1) + parseInt(num2);
console.log("la suma de los 2 numeros da como resultado: " + res);