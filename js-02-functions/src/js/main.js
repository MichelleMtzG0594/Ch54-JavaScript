console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

saludar("Jenipher");

function saludar(nombre) {
  console.log("¿Qué te gustaría de regalo de cumpleaños" + nombre);
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function (nombre, regalo) {
  console.log(`Felicidades ${nombre} te traje una ${regalo}`);
};

darRegalo("Jen", "sopa marusha con camarón");

/* Realizar una función declarada que sume 2 números y retorne un resultado */

sumaNumeros(89, 97);

function sumaNumeros(num1, num2) {
  const suma = num1 + num2;
  console.log(`El total es: ${suma}`);
  return `El total es: ${suma}`;
}

/* Realizar una función expresada que reste 2 números y retorne un resultado */

const restaNumeros = function (num1, num2) {
  const resta = num1 - num2;
  console.log(`El total es: ${resta}`);
};

restaNumeros(56, 26);
/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp() {
  console.log("Configuración inicial de la aplicación");
})();
/*Con esta función te ahorras la invocacióon de la función en este caso el setUp() */

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
 - Si se tiene un solo parámetro podemos omitir los paréntesis

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

//Realizar una función declarada que calcule el área de un triángulo y debe retornar el resultado.

/* console.log(`El área del triángulo es: ${areaTriangulo (20,2)}`);

function areaTriangulo (base, altura) {
  const area = base * altura / 2 ;
  return area;
} */

//Realizar una función expresada que calcule el área de un triángulo y debe retornar el resultado.

/* const areaTriangulo = function ( base, altura) {
  const area = base * altura / 2 ;
  return area;
}

console.log(`El área del triángulo es: ${areaTriangulo(60,20)}`);
 */
//Realizar una función de flecha que calcule el área de un triángulo y debe retornar el resultado.
const calcularArea = (base, altura) => (base * altura) / 2;
console.log(`El resultado es: ${calcularArea(12, 20)}`);

// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(calcularArea(base, altura));
imprimirArea(12, 20);

//Realizar una función flecha que calcule el area de un circulo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

const areaCirculo = radio => Math.PI * (radio ** 2);

const imprimirResultado = radio => document.getElementById("area-circulo").innerText = areaCirculo(radio.toFixed(2));
imprimirResultado(5);

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

/* const saludarPersona = (nombre) => console.log(`Hola ${nombre} ya nos vamos a descansar.`)
saludarPersona(); */ // Nos mostaria undefined porque no se envió un argumento y el valor que se carga es ese 

const saludarPersona = (nombre="persona invitada") => console.log(`Hola ${nombre} ya nos vamos a descansar.`)
saludarPersona("Mich");

/* parseInt tiene de default paramater base 10, pero se la podemos cambiar */
console.log(parseInt("5")); //5 (base 10: 0,1,2,3,4,5,6,7,8,9)
console.log(parseInt("1000")); //1000 (base 10)
console.log(parseInt("1000",10)); //1000 (base 10)
console.log(parseInt(1000,2)); //8 (base 10)
console.log(parseInt("D2042D")); //NaN (base 10)
console.log(parseInt("D2042D",16)); //13763629 (base 10)
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola CH54");
                                          //Si le mandamos un argumento como el 18, nos daria: 18("Hola CH54") lo cual es un error.
                                          //console.log("Hola CH54"); este si funcionaría
                                          //undefined("hola CH54");
/* imprimirMensaje(18); */ //fncCallBAck is not a function
imprimirMensaje(console.log);
/* imprimirMensaje(console.log("Luis"));  *///se imprime Luis pero el retorno es undefined
/* imprimirMensaje(undefined); */ //fncCallBAck is not a function

const enviarAParrafo = (mensaje) => {
  const saluda = "Hola, buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`;
}

imprimirMensaje(enviarAParrafo);

/* Usando la funcion imprimirMensaje, enviar un callback para que imprima con alert
 */
/* imprimirMensaje(alert); */

/* Realizar una función que sume dos números y que imprima el resultado
 - Inicialmente se imprimirá en la consola
 - es posible que se te pida que se imprima en el dom
 - es posible que se te pida que se te pída imprimir en el dom */

/* const sumarNumeros = (a, b) => a + b; */

/* const imprimirSuma = (a, b, opcion) => {
  const resultado = sumarNumeros(a, b);
  const mensaje = `La suma de ${a} + ${b} es igual a ${resultado}`; */
  /*  console.log(mensaje); */

  /* if (opcion === "consola") console.log(mensaje);
  else if (opcion === "parrafo")
    document.getElementById("resultado-sumatoria").innerText = mensaje;
  else if (opcion === "h2")
    document.getElementById("resultadoh2-sumatoria").innerText = mensaje;
  else alert(mensaje);
};
 */
/*  imprimirSuma(10,14); //se imprime en consola
 imprimirSuma(10,14, "parrafo"); //se imprime en el párrafo */


const sumarNumeros = (a, b) => a + b;

 const imprimirSuma = (a, b, imprimir = console.log) => {

  const resultado = sumarNumeros(a, b);
  const mensaje = `La suma de ${a} + ${b} es igual a ${resultado}`;
  imprimir(mensaje)

 };

 imprimirSuma(10,14);

  const imprimirEnDOMParagraph = (mensaje) => {
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
 }

 const imprimirEnDOMH2 = (mensaje) => {
  const refh2 = document.getElementById("resultadoh2-sumatoria");
  refh2.innerText = mensaje;
 }

 imprimirSuma(10,14, imprimirEnDOMParagraph); //se imprime en paragraph
 imprimirSuma(10,14, imprimirEnDOMH2); // se imprime en h2
 imprimirSuma(10,14, alert); // se imprime en alert


 // -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120

// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120
/*
    parámetro   recursividad(n-1)   returnFnc
     5              5-1 = 4            120
     4              4-1 = 3            24
     3              3-1 = 2            6       
     2              2-1 = 1            2         
     1               ----              1
  
*/
/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludoConRecursividad (numSaludo){
  if( numSaludo <= 0  ) return numSaludo;
  const result = saludoConRecursividad( numSaludo - 1 );
  console.log(`Saludo ${numSaludo}`);
}
 saludoConRecursividad(10);
