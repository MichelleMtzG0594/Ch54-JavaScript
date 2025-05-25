   export {ejecutarObjetos};

const myArray = [1,2,3,4];
    const unionArray = myArray.join(" - "); // 1 - 2 -3 - 4 
    myArray.push(5,6,7,8);
    const arrayData = myArray[3]; // 4
    
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
    }

const myObj = {
        key : "valor",
        name : "Mich Trinity",
        firstName : "Mtz",
        email : "trinimich@matrix.com",
        password : "despertar!",
        birthdate : "1994-05-05",
        isActive : true,
        hobbies: ["Dormir","Comer", "Ser badass"],
        favoritos : {
            bebidas : ["agua", "coca","cerveza"],
            comidas : ["taquitos", "pozole"]
        },
        saludar : function myFunction(persona) {
            return `Hola ${persona}`;
        }
    };
const ejecutarObjetos = () => {
    //Leer datos del objeto
    console.log(myObj);
    const nombrePersona = myObj.name; //"Mich Trinity"
    const favoritos = myObj.favoritos.bebidas; // ["agua", "coca","cerveza"]
    const segundaBebida = favoritos[1]; //"coca" Con este se accede primero a la variable anterior de favoritos
    const tercerBebida = myObj.favoritos.bebidas[2]; //"cerveza"

    //Acceder al atributo firstName
    /* 
    -Mas legible y corta
    -Usada comunmente y preferida para conocer el nombre de la propiedad
     */

    const apellidoPaterno = myObj.firstName; //"Mtz"

    /* 
    -Soporta nombres con espacio, simbolos o dinámicos
     */
    const firstName = myObj["firstName"] //"Mtz"

      //Ejecutar funciones de mi objeto
      const mensaje = myObj.saludar("Abril");
      console.log(mensaje);

      //--------------Optional Chaining--------------
      //Sirve para acceder apropiedades de objetos de forma segura
      //errores si una propiedad intermedia no existe
      //const primeraComida = myObj.favoritos.alimentos;// undefined porque no existe el atributo elementos //Cannot read properties of undefined
      const primeraComida = myObj?.favoritos?.alimentos; //undefined

      //iterar un objeto
      //for in itera sobre los atributos de un objeto
      for (let clave in myObj){
        console.log(clave,myObj[clave]); //myObj.name , myObj.firstName
      }

    }

 

  