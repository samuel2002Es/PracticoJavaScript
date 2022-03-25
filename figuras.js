//codigo del cuadrado
console.group("Cuadrados")
/* const ladoCuadrado= 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm"); */

function perimetroCuadrado(lado){
    return lado* 4;
}
/* console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+ " cm") */

function  areaCuadrado(lado){
    return lado*lado;
}
/* console.log("El area del cuadrado es: "+ AreaCuadrado+  " cm^2") */
console.groupEnd();

//codigo del triangulo
console.group("Triangulos")
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo =5.5;
console.log("Los lados del triangulo miden: \n"+ ladoTriangulo1 + "cm\n"+ ladoTriangulo2 + "cm\n"+ baseTriangulo + "cm");

console.log("La altura del triangulo es de: "+alturaTriangulo) */

function perimetroTriangulo(lado1, lado2, base){
    var result= lado1 + lado2 + base;
    return result;
}
/* console.log("El perimetro del triangulo es: "+ perimetroTriangulo+ " cm") */

function AreaTriangulo(base, altura){
    return ((base * altura)/2);
}
/* console.log("El area del triangulo es: "+ AreaTriangulo+  " cm^2") */
console.groupEnd();

//codigo del circulo 
/* console.group("Circulos")
const pi = Math.PI;
const  radioCirculo = 4;
const diametroCirculo = radioCirculo *2;
console.log("El radio es de: "+ radioCirculo+ " cm \n el diametro es  de: "+ diametroCirculo + " cm\n pi vale: "+ pi); */
console.group("Circulos")
const pi = Math.PI;
function diametroCirculo(radio){
    diametro = radio*2
    return radio*2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
/* console.log("El perimetro del circulo es: "+ pereimetroCirculo+ " cm"); */

function Areacirculo(radio){
    return (radio * radio)* pi;
}
/* console.log("El area del circulo es: "+ Areacirculo+  " cm^2"); */
console.groupEnd();

/* interactuamos con html y js */
//Cuadrado
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}
var perimetrochidisimo;
//Triangulo
function  CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1")
    const lado1 = Number(input1.value);
    
    const input2 = document.getElementById("InputTrianguloLado2")
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("InputTrianguloBase")
    const base = Number(input3.value);
    const perimetro = perimetroTriangulo(lado1,lado2,base)
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    const input3 = document.getElementById("InputTrianguloBase")
    const base = Number(input3.value);

    const input1 = document.getElementById("InputTrianguloAltura")
    const altura = input1.value;

    const area = AreaTriangulo(base,altura)
    alert(area);
}
function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculoRadio")
    const radio = Number(input.value);

    const perimetro =  perimetroCirculo(radio);
    alert(perimetro);
}
function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculoRadio")
    const radio = Number(input.value);

    const area =  Areacirculo(radio);
    alert(area);
}
