/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/
 /*Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/
 const mayorOMenor = edad => {
    if (edad <= 18)  return "Eres menor de edad"; 
    else return "Eres mayor de edad";
 }

 console.log(mayorOMenor(15));
 console.log(mayorOMenor(28));

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const queLuchadorEres = edad => {
    if (edad < 18) return "tu luchador es Penta";
    else if (edad >= 18 && edad <= 30 ) return "tu luchador es Místico";
    else return "tu luchador es el perro Aguayo"
}

console.log(queLuchadorEres(12));
console.log(queLuchadorEres(29));
console.log(queLuchadorEres(56));

//Bloque de código
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet,myVarConst,myVarVar)
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet,myVarConst,myVarVar)
    }
    console.log(myVarLet,myVarConst,myVarVar)
}

//----------- Ejercicio 1 ---------------
let active = false
if (active === true); {
    console.log("Esta activo");
 }
 console.log("Fin del programa");

 //----------- Ejercicio 2 ---------------
active = false
 if (active === true)
    console.log("Esta activo");
    console.log("Tiene autorización");

 console.log("Fin del programa");

//----------- Ejercicio 3 ---------------
active = false
 if (active === true);console.log("Esta activo");
 //else console.log("No esta activo"); //Marca error unexpected token else
 //console.log("Fin del programa")


//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

const evaluarNombre = (nombre) => {
    let resultado;
    switch (nombre) {
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego": 
        case "Besito":
        case "Fijól":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break;
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado ="No se sabe de quién es"
    }
    return resultado;
}
console.log(evaluarNombre("Lua")); //Es de Abril
console.log(evaluarNombre("Milo")); //Sin brakes daría "No se sabe de quién es"
console.log( evaluarNombre("Borrego") ); // Es de Jessica

const nombreMascota = "Lua"


/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */

const velocidadVentilador = (velocidad) => {
    if (velocidad === 0) return "Apagado"
    else if (velocidad === 1) return "Baja"
    else if (velocidad === 2) return "Media"
    else if (velocidad === 3) return "Alta"
    else return "Velocidad desconocida"
}

console.log(velocidadVentilador(0));
console.log(velocidadVentilador(1));
console.log(velocidadVentilador(2));
console.log(velocidadVentilador(3));
console.log(velocidadVentilador(4));

const velocidadVentilador2 = (velocidad) => {
    let resultado;
    switch (velocidad) {
        case 0:
            resultado = "Apagado"
            break;
         case 1:
            resultado = "Baja"
            break;
         case 2:
            resultado = "Media"
            break;
         case 3:
            resultado = "Alta"
            break;
        default:
            resultado = "Velocidad desconocida"
    }
    return resultado;
}

console.log(velocidadVentilador2(0));
console.log(velocidadVentilador2(1));
console.log(velocidadVentilador2(2));
console.log(velocidadVentilador2(3));
console.log(velocidadVentilador2(4));

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/

const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ) ); //"La tarjta ha sido pagada"
console.log( verficarPagoDeTarjeta( false ) ); //"La tarjeta no ha sido pagada"

//Versión con operador ternario
const verficarPagoDeTarjetaUsandoTernario = ( estaPagado ) =>{
    return estaPagado ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}
console.log( verficarPagoDeTarjetaUsandoTernario( true ) ); // "La tarjta ha sido pagada"
console.log( verficarPagoDeTarjetaUsandoTernario( false ) ); // "La tarjeta no ha sido pagada"

/*
 Dado un número entero, imprimir:
 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 - Realizar una función que reciba el número y retorne el mensaje.
 - El retorno debe ser impreso en la consola.
 - Realizar una versión if-else, switch y operador ternario.
*/

const numeroEntero = (entero) => {
    if (entero < 0) return "Negativo";
    else if (entero === 0) return "Cero";
    else if (entero > 0 && entero < 100) return "Positivo";
    else return "Grande";
}

console.log(numeroEntero(-15));
console.log(numeroEntero(0));
console.log(numeroEntero(99));
console.log(numeroEntero(100));

const numeroEntero2 = (numero) => {
    let resultado;
    switch (true) {
        case (numero < 0):
            resultado = "Negativo"
            break;
        case (numero === 0):
            resultado = "Cero"
            break;
        case (numero > 0 && numero < 100):
            resultado = "Positivo"
            break;
        default:
            resultado = "Grande";
    }

    return resultado;
}

console.log(numeroEntero2(-15));
console.log(numeroEntero2(0));
console.log(numeroEntero2(99));
console.log(numeroEntero2(100));

function numeroEnteroTernario(numero) {
    return numero < 0 ? "Negativo" :
           numero === 0 ? "Cero" :
           numero < 100 ? "Positivo" :
           "Grande";
}

console.log(numeroEnteroTernario(-15));
console.log(numeroEnteroTernario(0));
console.log(numeroEnteroTernario(99));
console.log(numeroEnteroTernario(100));

/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


