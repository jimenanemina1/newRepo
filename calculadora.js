
let sumar = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicaion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, opreacion) => opreacion(numero1,numero2);

console.log(calculadora(10,5,multiplicaion))

let numeros = [2,4,6];


let dobleDeLosNumeros = numeros.map(function(unNumero){
 return unNumero * 2;
});


console.log(dobleDeLosNumeros);

//let numeros = [5,7,16];

let resultado = numeros.reduce(function(acumulador,numero) {
   return acumulador + numero;
});

console.log(resultado)
