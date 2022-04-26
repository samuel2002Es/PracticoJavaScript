const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];




function calcularModaAritmetica(lista){
    const lista1Count = {};

    lista.map(
        function(elemento){
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                /* si no esta el elemento lo agregamos con un 1  */
                lista1Count[elemento] = 1;
            }
        }
    );
    /* map nos ayuda  a recorrer nuestro arreglo*/
    /* convertir el objeto ya creado de nuevo en un array y ordenarlo*/
    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor){
            /* dentro de esta funcion le debemos decir como queremos que lo ordene */
            /*  if (valorAcumulado > nuevoValor)  {
                return 1;
            }
            if (valorAcumulado == nuevoValor)  {
                return 0;
            }
            if (valorAcumulado < nuevoValor)  {
                return -1;
            } */
            /* o bien podemos decirlo de  */
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    /* object.entries  le enviamos un objeto que queremos convertir en un array*/
    
    const moda =lista1Array [lista1Array.length -1];
        return moda;
}
