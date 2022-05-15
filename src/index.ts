let suma,número,resultado:number;
suma = 0;

for(let i: number=1; i<=3; i++) {
i=prompt("Ingrese un número entero:");
número = Number(prompt("Primer número ingresado: " + i + ". Ahora ingrese el segundo número:"));
suma += número;
}
resultado = suma
console.log("La suma de los números es igual a: ", resultado);
