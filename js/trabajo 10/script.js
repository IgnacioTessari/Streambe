// objeto_demo['dos'] devolvera el valor 2
// objeto_demo[uno] devolvera el valor 3

// capitales['lugar'] devolvera undefined
// capitales.lugar devolvera undefinded
// capitales[lugar] devolvera Montevideo
// capitales['Argentina'] devolvera Buenas Aires
// capitales.Argentina devolvera Buenas Aires
// capitales[Argentina] devolvera undefined

//---------------------------------------------------------------------------------------------------------------------
// registro
function Cuenta(usuario, edad, direccion, fechaDeNacimiento, contraseña) {
    this.usuario = usuario,
    this.edad = edad,
    this.direccion = direccion,
    this.fechaDeNacimiento = fechaDeNacimiento,
    this.contraseña = contraseña
};
const cuenta1 = new Cuenta("Manuel", 19, "calle 7 y 43", "2/02/2005", 12345);

console.log(cuenta1);

//variable miauto

let autos = {};

let miAuto = autos;

miAuto.marca = "Ferrari";
miAuto.año = 1996;
miAuto.nuevo = false;
let propertyKey = "Gran Turismo";
miAuto.modelo = propertyKey;
let anotherPropertyKey = "precio";
miAuto.valor = anotherPropertyKey;
let nextProperty = "colores";
miAuto.color = nextProperty;

for (const property in miAuto) {
    console.log(property + ":" + miAuto[property])
};


// miAuto[propertyKey] devolvera undefined
// miAuto["modelo"] devolvera "Gran Turismo"
// miAuto[nextProperty] devolvera undefined
// miAuto["color"] devolvera "colores"

//Aumentar La Nota
let alumnos = [
    { Estudiante: "Juan", nota: 6 },
    { Estudiante: "Mario", nota: 8 },
    { Estudiante: "Julia", nota: 10 },
    { Estudiante: "Sofia", nota: 2 },
];

alumnos.forEach(alumno => {
    if (alumno.nota > 5 && alumno.nota < 9){
        alumno.nota += 2
    }

});

console.log(alumnos);

//Base De Datos De Películas

let peliculas = [
    {titulo: "Dracula Untold", rating: 5.0, loHasVisto: true},
    {titulo: "The Secret: Dare to Dream", rating: 3.5, loHasVisto: true},
    {titulo: "Late Night with the Devil", rating: 4.5, loHasVisto: true },
    {titulo: "Society of the Snow", rating: 4.0, loHasVisto: false}
];

peliculas.forEach(peli =>{
    if (peli.loHasVisto){
    console.log(`Viste ${peli.titulo} - ${peli.rating} Estrellas`)
} else {
    console.log(`No viste ${peli.titulo} - ${peli.rating} Estrellas`)
}});

//Números Duplicados

let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

numeros.forEach(j => {
    numeros_duplicados[j] = j * 2;
});

console.log(numeros_duplicados);

//Desafío + 27

let personas = [
    {nombre: "Ana", edad: "28"},
    {nombre: "Maria", edad: "24"},
    {nombre: "Jose", edad: "31"}
];

let personasConMasDe27 = personas.filter(persona => persona.edad > 27);

console.log(personasConMasDe27);

//Camino Al Oscar

let actoresVocales = [];
let actoresPrincipales = [
    "Tom Hanks", 
    "Johnny Depp", 
    "Elizabeth Taylor", 
    "Morgan Freeman", 
    "Jeniffer Aniston", 
    "Meryl Steep", 
    "Natalia Portman", 
    "Ashton Kutcher"
];

let peliculas2 = [];
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo Dicaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith", 
    "Bastardos sin gloria": "Brad pitt"
};

actoresPrincipales.forEach(nombre => {
    if (nombre[0] === "A" || nombre[0] === "E" || nombre[0] === "I" || nombre[0] === "O" || nombre[0] === "U"){
        actoresVocales.push(nombre);
    } 
});

console.log(actoresVocales);

for(let pelicula in actoresPrincipalesPorPelicula) {
    actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
};

console.log(actoresPrincipales);

for (let pelicula in actoresPrincipalesPorPelicula) {
    peliculas2.push(pelicula);
};

console.log(peliculas2);

let peliculaPorActor = {
    "Leonardo Dicaprio": ["Titanic", "Shutter Island"],
    "Brad Pitt": ["Bastardos sin gloria", "Fight Club"],
    "Al Pacino": ["El Padrino", "Scarface"]
}

console.log(peliculaPorActor);

// Posición Adecuada


// let Nombre_Edad = [
//     {nombre: "Alba", edad: 15, posicion: 1},
//     {nombre: "Estrella", edad: 30, posicion: 3},
//     {nombre: "Belen", edad: 20, posicion: 2},
//     {nombre: "Santiago", edad: 4, posicion: 0},
//     {nombre: "Katherine", edad: 55, posicion: 4}
// ];

// Software Factory 

function totalArticulos(ecommerce) {
    return ecommerce.map(producto => {
        return {
            [producto.nombre]: producto.precio * producto.articulos
        };
    });
}

let ecommerce = [
    {nombre: "Samsung TV", precio: 6000, articulos: 10},
    {nombre: "DELL notebook", precio: 4000, articulos: 30},
    {nombre: "Auriculares Sony", precio: 1500, articulos: 15},
    {nombre: "Monitor Philips", precio: 12000, articulos: 20},
    {nombre: "Teclado logitech", precio: 3000, articulos: 5}
];

console.log(totalArticulos(ecommerce));
