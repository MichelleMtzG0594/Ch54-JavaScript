/*
 El uso de JavaScript como módulo en HTML se ha vuelto una práctica 
 estándar y altamente recomendada en el desarrollo web moderno. 
 Esto se debe a que los módulos ES (ECMAScript) resuelven muchos 
 problemas que existían con la forma tradicional de incluir scripts, 
 como la contaminación del ámbito global y la dificultad para 
 organizar grandes bases de código.

 Ventajas del uso de módulos:
- Organización del código: Facilita la división de la aplicación en 
  archivos más pequeños y manejables, cada uno con una responsabilidad específica.
- Reutilización de código: Permite compartir funciones, clases y datos 
  entre diferentes partes de la aplicación o incluso entre diferentes proyectos.
- Mantenibilidad: El código modular es más fácil de entender, depurar y 
  modificar, ya que los cambios en un módulo generalmente no afectan a otros 
  a menos que las interfaces de exportación/importación cambien.
- Prevención de conflictos: Al evitar la contaminación del ámbito global, 
  se reducen las posibilidades de que variables o funciones con el mismo nombre 
  entren en conflicto.
- Rendimiento: La carga diferida y la ejecución única contribuyen a una 
  mejor performance de la aplicación web.

Características clave de los módulos JS:
- Ámbito de Módulo (Scope): Las variables, funciones y clases declaradas 
  en un módulo están limitadas al ámbito de ese módulo. No contaminan 
  el ámbito global del navegador, lo que reduce los conflictos de nombres 
  y mejora la robustez del código. Solo lo que se exporta es accesible desde fuera.
- Modo Estricto por Defecto: Todo el código dentro de un módulo se ejecuta 
  automáticamente en modo estricto ("use strict"). Esto ayuda a escribir código 
  más seguro y a evitar errores comunes al imponer ciertas restricciones en la 
  sintaxis de JavaScript.
- Carga Diferida (defer) por Defecto: Los scripts de módulo se cargan y ejecutan 
  de forma asíncrona, de manera similar a como lo haría un script con el atributo 
  defer. Esto significa que el navegador puede seguir construyendo el DOM mientras 
  se carga el script, y el script solo se ejecutará una vez que el HTML esté completamente 
  parseado. Esto mejora el rendimiento de carga de la página.
- Ejecución Única: Si un módulo se importa varias veces en diferentes lugares de tu 
  aplicación, su código solo se ejecutará una vez. Las exportaciones se crean una sola 
  vez y se comparten entre todos los importadores, lo que evita la redundancia y asegura 
  la consistencia.


  La clave para usar módulos en HTML es el atributo type="module" en la etiqueta <script>
  <script type="module" src="main.js"></script>


  =================   Importación y Exportación (import y export) =================   
  
  La característica más importante de los módulos es la capacidad de importar y exportar 
  funcionalidades entre diferentes archivos JavaScript. Esto permite una modularización 
  real del código.

  export (exportar):
  Se utiliza para hacer que funciones, variables, clases, etc., de un módulo sean accesibles 
  desde otros módulos.

  export const PI = 3.14159;

  export function sumar(a, b) {
    return a + b;
  }

  También puedes exportar por defecto (solo uno por módulo (archivo)):
  export default function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
  }

  =================    import (importar): =================   
  Se utiliza para traer funcionalidades exportadas de otros módulos a tu módulo actual.
  
  Importar exportaciones con nombre
  import { PI, sumar, Calculadora } from './utils.js';

  Importar la exportación por defecto
  import miSaludo from './utils.js'; // Puedes darle el nombre que quieras

*/


// importa las funciones del footer y header e invócalos para que se ejecuten
import { insertMainHeader } from "../modules/header/header.js"; //import nombrado
//import { insertMainFooter } from "../modules/footer/footer.js";
import  footer  from "../modules/footer/footer.js"; //import por default solo se puede 1 por archivo

insertMainHeader(document.getElementById("header"));//llamada del import nombrado
//insertMainFooter(document.getElementById("footer"));
footer(document.getElementById("footer")); //LLamada del Import por default


/*
  Uso del local Storage.

  LocalStorage es una API de almacenamiento en el navegador que permite guardar 
  datos de forma persistente sin fecha de expiración.

  Características:
    - Almacena hasta 5MB por dominio.
    - Los datos persisten incluso si el usuario cierra el navegador.
    - Puedes guardar objetos con JSON.stringify().

  Métodos clave:
    localStorage.setItem("clave", "valor") → Guarda un dato.
    localStorage.getItem("clave") → Obtiene un dato.
    localStorage.removeItem("clave") → Elimina un dato.
    localStorage.clear() → Borra todo el almacenamiento.

*/
/*
 Crear en el HTML un input y un botón para guardar el valor en el localStorage.
  
  Al cargar la página, si hay un valor guardado, mostrarlo en el titulo H1 "Hola, {nombre}".
  En caso contrario, mostrar "Hola, persona invitada".
*/


//Función que lee si hay un nombre guardado en local storage
const leerNombreLocalStorage = () => {
  const valorNombre = localStorage.getItem("nombre") || "persona invitada";
  return valorNombre;
}

//Función para insertar en el H2 el nombre guardado
const insertarNombreEnDOM = () => {
  const refH1 = document.querySelector("#nombre-guardado"); //Este es otro método para obtener un elemento o clase
  const nombre = leerNombreLocalStorage();
  refH1.textContent = `Hola, ${nombre}`;

}

insertarNombreEnDOM();

const guardarNombre = () => {
  const refInput = document.querySelector("#nombre-input");
  const inputValor = refInput.value;
  inputValor && localStorage.setItem("nombre", inputValor);
}

/* No lo debemos hacer
window.aLLamadaBotonGuardar = guardarNombre; */

const guardar = document.getElementById("guardar-local");
guardar.addEventListener("click", guardarNombre); //Se hace callback a la función guardarNombre(), no se le pone ()

/* const refNameInput = document.getElementById("nombreInput"); //
refNameInput.addEventListener( "keydown" , ( event )=>{
  console.log(event.key);
}); */


/*
  Programación síncrona.
 
  Ejecutar una tarea después de otra, de manera secuencial.
  Si una tarea tarda mucho tiempo en completarse, puede bloquear el hilo
  de ejecución.

*/

const primerPaso = () => {
  console.log("01 - Inicio de mi programa");
};

const segundoPaso = () => {
  console.log("02 - Desarrollo de mi programa");
  for (let i = 0; i < 1_000_000_000; i++) {
    i * 2;
  }
};

const tercerPaso = () => {
  console.log("03 - Fin de mi programa");
};

/* 
primerPaso();
segundoPaso(); // Este proceso demora tiempo
tercerPaso();
 */

/*
 Programación asíncrona.

 Las tareas no se bloquean entre sí.
 La programación asíncrona es fundamental en JavaScript para
  realizar operaciones no bloqueantes, como peticiones HTTP, 
  operaciones de lectura/escritura de archivos, etc., 
  lo que mejora el rendimiento y la capacidad de respuesta 
  de las aplicaciones.

  setTimeout()
   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador

   sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );

*/
/*En funciones asíncronas se usa async y await o then y catch
para que nuestra aplicación se peuda comunicar con el exterior como con un servidor que es parte del backend

Async/await
Es una sintaxis construida sobre promesas, diseñada para hacer que el código asincrónico se vea y se comporte un poco más como código sincrónico, lo que facilita su lectura y mantenimiento. La palabra clave async se utiliza para definir una función asincrónica, que implícitamente devuelve una promesa. La palabra clave await se utiliza dentro de una función asíncrona para pausar la ejecución hasta que se resuelva una promesa.
 Ejemplo:

 async function fetchData() {
  try {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

fetchData()
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Caught an error:', error));

  
async:
Colocado antes de una declaración de función, significa que la función manejará operaciones asincrónicas y siempre devuelve una promesa.
await:
Utilizado dentro de una función async antes de una promesa, pausa la ejecución de la función hasta que se resuelva la promesa (se cumpla o se rechace).
Manejo de errores:
try...catch Los bloques se pueden usar para manejar errores en operaciones asincrónicas, de forma similar al código sincrónico.
Legibilidad:
Async/await hace que el código asincrónico sea más fácil de leer y comprender, especialmente cuando se trata de múltiples promesas encadenadas.
Sin bloqueo:
Mientras await pausa la ejecución de la función async, no bloquea el hilo principal, permitiendo que otras operaciones continúen.
Cola de microtareas:
Utiliza la cola de microtareas, similar a las promesas, lo que garantiza que awaitlas llamadas se manejen con prioridad sobre otras tareas.
Compatibilidad:
Es compatible con navegadores modernos y versiones de Node.js.
*/


const saludarTranscurridoXSeg = ( milisegundos ) => {

  const saludar = (nombre) => alert (`Hola ${nombre}`);
  //Sintaxis del setTimeout( fncCallback, tiempo_ms, argumentos_fnc )
  setTimeout( saludar,milisegundos, "Neo" );
}

/* console.log("Antes de saludar");
saludarTranscurridoXSeg(5000);
console.log("Después de saludar"); */