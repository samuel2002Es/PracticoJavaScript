const lista1= [
    100,
    200,
    300,
    500,
];

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