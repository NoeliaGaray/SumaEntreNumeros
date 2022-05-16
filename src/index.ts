var numero1: number = 0;
var numero2: number = 0;
var resultado: number = 0;

numero1 = Number(prompt("Ingrese un número entero"));
numero2 = Number(prompt("Ingrese otro número entero"));

for (let i: number = numero1; i <= numero2; i++) {
  resultado = resultado + i;
}
console.log("La suma entre los números es: ", resultado);
