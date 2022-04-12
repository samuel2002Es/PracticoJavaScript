function calcularMediaAritmetica(lista){
    /*     let sumaLista = 0;
        for (let i = 0; i <lista.length; i ++){
        sumaLista = sumaLista + lista[i];
        } */
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
    /* [■,■,■,■].map(■→●) ⇒ [●,●,●,●]
    [■,●,■,▲].filter(■→true) ⇒ [■,■]
    [■,●,■,▲].find(●→true) ⇒ ●
    [■,●,■,▲].findIndex(●→true) ⇒ 1
    [■,●,■,▲].fill(●) ⇒ [●,●,●,●]
    [■,●,■,▲].some(●→true) ⇒ true
    [■,●,■,▲].every(●→true) ⇒ false */
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }
/* const lista1= [
    100,
    200,
    500,
    600,
    40000000,
]; */
function calcularMedianaAritmetica(lista1){
    function compareNumbers(a, b) {
        return a - b;
    }
    const mitadLista1 = parseInt(lista1.length / 2);
    //parseInt se puede decir que nos ayuda a que cuando lo dividamos nos de un numero entero, y no con puntos decimales
    lista1.sort(compareNumbers); // [1, 5, 40, 200]
    console.log(lista1);
    function esPar(numerito ){
        if (numerito %2 === 0) {
            return true;
        }else{
            return false
        }
    }
    let mediana
    if (esPar(lista1.length)){
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1]
        const Promedio1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
    ]);
        mediana = Promedio1y2;
       // posicion mitadLista1 dentro de lista1
       // ->mediana 
    } else{
        //metemos el numero que nesitamos en mediana
        mediana =lista1[mitadLista1];
    }
    return mediana;
}