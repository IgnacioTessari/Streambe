// test1 retornara 30
// test2 retornara 20

function triplicador(num) {
    return num * 3;
}

function multiplicador(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function resto(num1, num2) {
    return num1 % num2;
}

console.log(resto(division(multiplicador(12, triplicador(5)), 12), 3));

function contarDeA_n(contar_de_a, contar_hasta) {
    let numbers_list = []
    for (let i = 1; i <= contar_hasta; i += contar_de_a) {
        numbers_list.push(i);
    }
    return numbers_list;
}

console.log(contarDeA_n(1,10));

//---------------------------------------------------------------------------------------------------------------------

function fizzBuzz2(palabra1, palabra2, contar_hasta, fizz_num, buzz_num) {
    let array = []
    for (let i = 1; i <= contar_hasta; i++) {
        if (i % fizz_num == 0 && i % buzz_num == 0){
            array.push(palabra1 + palabra2);

        }else if (i % fizz_num == 0){
            array.push(palabra1);
        }
        else if (i % buzz_num == 0){
            array.push(palabra2);
        }
        else{
            array.push(i);
        }
        }
    return array.join();
}

let palabra1 = prompt("ingrese la palabra que remplazara a fizz");
let palabra2 = prompt("ingrese la palabra que remplazara a buzz");
let contar_hasta = prompt("ingrese hasta que numero desea contar");
let fizz_num = prompt("ingrese el numero que remplazara al fizz");
let buzz_num = prompt("ingrese el numero que remplazara al buzz");

console.log(fizzBuzz2(palabra1, palabra2, contar_hasta, fizz_num, buzz_num))