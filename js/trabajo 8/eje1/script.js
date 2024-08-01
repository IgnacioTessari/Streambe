let uno = 1;
let dos = uno;
uno = 2;

//---------------------------------------------------------------------------------------------------------------------

alert("Bienvenidos a mi pagina")

let nombre = prompt("Ingrese su nombre")

alert("Bienvenidos a mi pagina" + nombre)

let edad = prompt("ingrese su edad")
edad = parseInt(edad);

while (isNaN(edad)){
    alert("la edad ingresada no es valida");
    edad = prompt("ingrese su edad")
} 

    
alert("Nombre: " + nombre + " Edad: " + edad);