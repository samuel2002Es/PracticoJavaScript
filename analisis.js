const salariosCol = colombia.map(
    function (personita) {
        return personita.salay;
    }
);
/* ordenamos los salarios */
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
)
function esPar(numerito){
    /*  if (numerito %2 === 0) {
        return true;
    }else {
        return false;
    } */
    return (numerito % 2 === 0);
}
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

function medianaSalarios(lista) {
    /* quitamos los decimales */
    const mitad =parseInt(lista.length/ 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return  personitaMitad;
    }
}
console.log(
    medianaSalarios(salariosColSorted)
);