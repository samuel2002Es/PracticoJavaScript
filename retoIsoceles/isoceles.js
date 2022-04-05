var lado1;
var lado2;
var base;

console.log("Bienvenido al programa de sacar alturas de triangulos ISOCELES")
//let valor1 = prompt("Dame el valor 1",0);
function PidiendoValores(){
    lado1 = prompt("Dame el valor del primer lado grande: ",0)
    lado2 = prompt("Dame el valor del primer lado grande: ",0)
    base = prompt("Dame el valor de la base: ",0)
    verificando(lado1,lado2,base);
}

var verificado = false;
function verificando(lado1,lado2,base){
    if (lado1 === lado2 && lado1 !=base){
        alert('Efectivamente es un triangulo Isoceles')
        altura();
    }else{
        alert("carnal ponte trucha eso no es un triangulo isoceles")
    }
}

function altura(){
    const baseChida = (base/2)**2;
    const c =  (lado1)**2;
    const result= c - baseChida;
    var altura = Math.sqrt(result);
    console.log(altura);
}
PidiendoValores();
