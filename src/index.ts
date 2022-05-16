var número1: number = 0;
var número2: number = 0;
var resultado: number = 0;
// var suma: number = 0;

número1 = Number(prompt("Ingrese un número entero"));
número2 = Number(prompt("Ingrese otro número entero"));

for (número1 = 0; número1 <= número2; número1++) {
  número1 += número2;
  resultado = número1 + número2;
}
console.log("La suma entre los números es: ", resultado);
