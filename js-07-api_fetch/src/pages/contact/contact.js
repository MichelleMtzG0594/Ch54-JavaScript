/*

 API: Application Programming Interface

   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:

    fetch(resource, options)
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.

 Las promesas tiene 3 estados:

 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón

*/
//Se usan promesas cuando quiero que el código no bloquee otro código. Esto es difernte que en la programación sincrona.
/* const vueltasAleatorias = (min=1, max=10)=> Math.floor(Math.random()*( max - min + 1)) + min;

const irPorElElote = (horaDelDia) => {
    //const miPromesa = new Promisa(fncCallBack);
    const miPromesa = new Promise((fncCallBackResolve,fncCallBackReject)=>{
    console.log("Voy por el elote en la " + horaDelDia ); //esta tarea puede demorar mucho o poco
        //SE puede verificar lo sig:
        if(horaDelDia === "día" || horaDelDia === "tarde") {
            //cuando usamos return retornamos un valor
            fncCallBackResolve("Toma tu elote que está dentro de una bolsa");
        } else {
            fncCallBackReject( {error: 404, descripcion:"Elote no fue encontrado"} );
        }
 
    });
    return miPromesa;
} */

/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */

/* const numeroDeVueltas = (number) => {
    console.log("El número de vueltas es: " + number);
    const miPromesa = new Promise((fncCallBackResolve,fncCallBackReject)=>{
        if (number <= 2 ) {
            fncCallBackResolve("ñomi ñomi, me como mi elote");
        } else {
            fncCallBackReject("ups, se me cayó tu elote")
        }
    });
    return miPromesa;

} */
/* .then se ejecuta cuando se cumpla la promesa
    .catch se ejecuta cuando se rechaza la promesa (opcional poner)
    .finally se ejecuta independientemente de la promesa (opcional poner)
*/
//mifuncionPromesa(callback).then(callback).catch(callback).finally(callback);
/* 
    irPorElElote("tarde")
    .then( ( response )=> console.log("1eraPromesa", response) );

    irPorElElote("noche")
    .then( ( response )=> console.log("2aPromesa", response) )
    .catch((error) => console.log(`Promesa rechazada`,error) )
    .finally(() => console.log("Se ha terminado tu promesa"));
 */
    //Ya tengo mi elote pero falta abrir la bolsa

/* 
 La función se llama ponerChilito()
 La función NO tiene parámetro de entrada.
 Realizar una promesa que retorne en el estado resolve: "Chilito del que pica".
 La función no debe tener Reject.
*/

   /*  const ponerChilito = () => {

    const miPromesa = new Promise((fncCallBackResolve)=>{   
        fncCallBackResolve("Chilito del que pica");
    });
    return miPromesa;

}
//Forma más simplifcada de la función anterior
const ponerChilito2 = Promise.resolve("chilito del que pica"); */

/*const tiempo = "tarde";
irPorElElote(tiempo) // sirve para ir por el elote
    .then( ( response )=> {
        console.log("Promesa",tiempo, response);
        return numeroDeVueltas(response.vueltas);
        
       })
        .then( (response) => {
            console.log("Promesa num de vueltas", response);
            return ponerChilito();

        }) //then para la promesa de num de vueltas
        .then( (response) => {
            console.log("Promesa chilito", response);
            
        }) //then para la promesa del chilito
    .catch((error) => console.log(`Promesa rechazada`,error) ) //catch para las 2 promesas
    .finally(() => console.log("Se ha terminado tu promesa")); */

    //uso de async y await
    // ============= uso de async y await ==========================
 /* const crisQuiereElote = async () =>{
   
try {
     const tiempo = "tarde"; 
    const response = await irPorElElote( tiempo );
    console.log(response);
    const respuestaBolsa = await numeroDeVueltas(response.vueltas);
    console.log(respuestaBolsa);
    const mensajeFinal = await ponerChilito();
    console.log(mensajeFinal)

} catch (error) {
    console.log(`Promesa rechazada`,error);
}

 }

 console.log("Msj 1");
 await crisQuiereElote();
 console.log("Msj 2") */


 //=========== Uso de la api fetch ============
//async function myFunction(){};
const leerProductos = async (url) => {
    try {
        const response = await fetch(url);
        const datosApi = await response.json();
        return datosApi;
    } catch (error) {
        console.log("No se puede obtener los datos", error)
    }
}


/*  const leerProductos = async (url) => {
   //Usar try-catch si mi promesa marca error(manejo de errores)
   try {
     const response = await fetch(url); //Obtener datos json
     //console.log(response);
     const datosApi = await response.json(); //Convertir de JSON a objetos JS
     //console.log(datosApi);
     return datosApi;
   } catch (error) {
     console.log("No se puede obtener los datos", error);
   }
 };
 */
const construirTarjetasDeRickYMorty = (personajes) => {
    const tarjetas = personajes.map( (personaje,index,array)=> {
         `<div class="col-12 col-md-4 col-lg-3">
        <div class="card-md-2">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" class="btn btn-primary">${personaje.species}</a>
            </div>
        </div> 
      </div>
     `
    });
    return tarjetas;
 }    

 const insertarTarjetasAlDom = (tarjetas,idDOM = "tarjetas") => {
    const refDom = document.getElementById(idDOM);
    refDom.innerHTML = tarjetas.join("");
 }

 const crearCardsRickAndMorty = async () => {
     const data = await leerProductos("https://rickandmortyapi.com/api/character");
     //const data = await leerProductos("/public/json/rick.json");
     const personajes = data.results;
     console.log( personajes );
     const tarjetas= construirTarjetasDeRickYMorty (personajes);
     insertarTarjetasAlDom(tarjetas);
 }

  crearCardsRickAndMorty();

