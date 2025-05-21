
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) { //Solo sirve para iterar del 0 al íltimo número, no se puede sabr}er el index de los elem.
    console.log( color );
}


const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];

//Imprimir en consola cada uno de los cantantes usando for of y usar arrow function
const imprimirCantantes2 = ( listaCantantes ) => {
    let cantantesConcatenados = "";
    for (const cantante of listaCantantes) {
        // cantantesConcatenados = cantantesConcatenados + cantante + " - ";
        cantantesConcatenados +=  cantante + " - ";
    }
    return cantantesConcatenados;
}
console.log(imprimirCantantes2(cantantes));

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */



const imprimirCantantes = (cantantes) => {
    let listaCantantes = "";
        for (const cantante of cantantes) {
         listaCantantes += "<li>" + cantante + " </li> " ;
    }

    return listaCantantes;
}
const refListaCantantes = document.getElementById("cantantes-lista").innerHTML = imprimirCantantes(cantantes);
imprimirCantantes(cantantes);




// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando; //Aqui se rompe el ciclo superior (multiplicando) y daria las tablas completas del 1 al 3 y solo daria la de 4x1=4 
    }

}

multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break //En este caso se romperia el 2do ciclo por lo que daría las tablas completas del 1 al 6 hasta el 7x1=7----------------------------
    }

}

let myIteration; // undefined
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0...5    
}
console.log("Final", myIteration); // 6

// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

console.log(   NaN === NaN );  // false
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}

/*
 Pregunta al usuario si queire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En caso contrario, despedirse.
*/ 
/* while(  confirm("¿Quieres tu número de la suerte?")  ){
    const numeroSuerte = Math.random();
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar"); */

/* 
 Uso de Math.random();
 Generar 5 números aleatorios.
 Los números deben estar entre el 0.0 y 10.0(sin incluir 10.0)
*/

const generarNumerosAleatorios = (cantidad) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random() * 10;
        console.log("Número aleatorio: ", numeroAleatorio); // 0.0...10.0
    }
 ;
};
generarNumerosAleatorios(5);

/* 
 Uso de Math.random();
 Generar 5 números aleatorios.
 Los números deben estar entre el 0.0 y 10.0(sin incluir 10.0)
 Solo números enteros
*/

const generarNumerosAleatorios2 = (cantidad,minNum = 0, maxNum = 10) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.floor(Math.random() * ((maxNum - minNum) + 1) + minNum) ; //Si ponemos *11 tendriamos de rango del 0.0 al 10.99
        console.log("Número aleatorio: ", numeroAleatorio); // 0.0...10.0
    }
  
};
generarNumerosAleatorios2(10,50,60);

/* Melate chocolate CH54
    1. Al pulsar el botón generar mis números de la suerte.
    2. Genrar 6 números aleatorios entre el 1 y el 54.
    3. Mostrar el resultado en el DOM.
*/

/**
 * Generar un número aleatorio entre un rango de números
 * @param {number} minNum
 * @param {number} maxNum
 */
const generarNumeroAleatorio = (minNum, maxNum) => {
    const numeroAleatorio = Math.random();
    const escalarNumero = numeroAleatorio * ((maxNum - minNum) + 1);
    const numeroEntero = Math.floor(escalarNumero + minNum);
    return numeroEntero;
};

const numeroExisteEnArreglo = (arreglo, numero) => {
   /*  for (const elemento of arreglo) {
        if (elemento === numero) return true
    }
    return false; */
    return arreglo.includes(numero); //Refactorizamos el código anterior
}

const imprimirMelateChocolate = (numeros) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = `${numeros.join(' - ')}`
}


const generarNumerosDeLaSuerte = (size = 6 , minNum = 1, maxNum = 54) => {
    const numeros = [];
    let iteracion = 0;

    while (numeros.length < size) {
        const numAleatorio = generarNumeroAleatorio(minNum, maxNum);
        if (!numeroExisteEnArreglo(numeros,numAleatorio) ) {
            numeros.push(numAleatorio);

        }
        console.log(iteracion, numeros, numAleatorio);
        iteracion++;
        
    }
    imprimirMelateChocolate(numeros)
}

//Uso del método sort
const numerosIniciales = [ 5, 33, 8, 100, 4, 2, 7, 6 ];
                       //[ 5, 33, 8, 100, 4, 2, 7, 6 ] iteración 0
                       //[ 5, 8, 33, 100, 4, 2, 7, 6 ] iteración 1
                       //[ 5, 8, 33, 100, 4, 2, 7, 6 ] iteración 2
                       //[ 5, 8, 33, 4, 100, 2, 7, 6 ] iteración 3
                       //[ 5, 8, 33, 4, 2, 100, 7, 6 ] iteración 4
                       //[ 5, 8, 33, 4, 2, 7, 100, 6 ] iteración 5
                       //[ 5, 8, 33, 4, 2, 7, 6, 100 ] iteración 6

const compararNumerosOrdenAscendente = (a,b) => {
    if ( a < b ) return -1; //Menor a 0 no intercambia a por b
    if ( a > b ) return 1; //Mayor a 0 si intercambia a por b
    return 0;
}

//Refactorizando la función anterior quedaria como:
const compararNumerosOrdenAscendente2 = (a,b) => a - b;

const compararNumerosOrdenDescendente = (a,b) => {
    if ( a < b ) return 1; //Menor a 0 no intercambia a por b
    if ( a > b ) return -1; //Mayor a 0 si intercambia a por b
    return 0;
}
//Refactorizando la función anterior quedaria como:
const compararNumerosOrdenDescendente2 = (a,b) => b - a;

const ordenarNumeros = ( numerosDesordenados, tipoOrden )=> {
    const numerosOrdenados = numerosDesordenados.slice(); //.slice hace una copia del arreglo de numerosIniciales para no modificar el arreglo original
    numerosOrdenados.sort(tipoOrden);
    return numerosOrdenados;
}

console.log(numerosIniciales); //[5, 33, 8, 100, 4, 2, 7, 6]
console.log(ordenarNumeros(numerosIniciales, compararNumerosOrdenAscendente) ); // [2, 4, 5, 6, 7, 8, 33, 100]
console.log(ordenarNumeros([56,32,11,77,95,3], compararNumerosOrdenAscendente2) ); // [3, 11, 32, 56, 77, 95]
console.log(ordenarNumeros(numerosIniciales, compararNumerosOrdenDescendente) ); // [100, 33, 8, 7, 6, 5, 4, 2]
console.log(ordenarNumeros([56,32,11,77,95,3], compararNumerosOrdenDescendente2) ); // [95, 77, 56, 32, 11, 3]
console.log(ordenarNumeros([56,32,11,77,95,3],(a,b)=> b - a) )

// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/


