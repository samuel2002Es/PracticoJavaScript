const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

const lista1Count = {};

NUMBERS.map(
    function(elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);
/* map nos ayuda  a recorrer nuestro arreglo*/

const listaArray = Object.entries(lista1Count).sort(
    function()
);

/* object.entries  le enviamos un objeto que queremos convertir en un array*/