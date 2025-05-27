import {insertMainHeader} from "../../modules/header/header.js"
import footer from "../../modules/footer/footer.js"
import { leerInputsFormulario } from "./leerInputformulario.js";
import { isUserValid } from "../../js/validations/isUserValid.js";
import { postUser } from "../../js/api/postUser/postUser.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));




const registerFrom = document.getElementById("contactForm");
    //registerForm.addEventListener("evento",()=>{});
registerFrom.addEventListener("submit",async (e)=>{
    e.preventDefault(); //evita que se envie el formulario por default y ya no se borran los input
    console.log("Manejo del formulario");
    //console.log(e);


    //Obtener los datos del formulario
    const newUser = leerInputsFormulario (registerFrom);
    console.log(newUser);
    const validatedUser = isUserValid(newUser);
    console.log(validatedUser)

    //Validar los datos
    if (validatedUser.isValid) {
        try {
            //Si los datos son validos enviar el formulario
            //usando la api fetch al servidor, con el método POST enviar el formulario
          const response =  await postUser(newUser, "https://reqres.in/api/users") //Es asincrona la funcion
          alert("Formulario enviado correctamente" + message.createdAt)
            
        } catch (error) {
            alert("Error al enviar el formulario: " + error.message)
        }

    }else {
        //Si los datos no son validos enviar un mensaje al usuario
        alert(validatedUser.errors.join("\n"));
    }



});
    

        //Enviar un mensaje al usiario diciendo al usuario ""felicidades has ingresado", limpiar el formulario,redirigir la pagina

        //Enviar al usuario el error del servidor




/*     try {
            const response = await postUser("https://reqres.in/api/users", newUser ); 
            alert("Formulario enviado correctamente " + response.createdAt);           
        } catch (error) {
            alert("Error al enviar el formulario: " + error.message);
        } */