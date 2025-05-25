import {insertMainHeader} from "../../modules/header/header.js"
import footer from "../../modules/footer/footer.js"
import {ejecutarObjetos} from "./objetos.js"
import { leerInputsFormulario } from "./leerInputformulario.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));
ejecutarObjetos
leerInputsFormulario



const registerFrom = document.getElementById("contactForm");
//registerForm.addEventListener("evento",()=>{});
registerFrom.addEventListener("submit",(e)=>{
    e.preventDefault(); //evita que se envie el formulario por default y ya no se borran los input
    console.log("Manejo del formulario");
    //console.log(e);
});
    //obtener los datos del formulario
    const newUser = leerInputsFormulario (registerFrom);
    console.log(newUser);

    //validar los datos

    //Si los datos son validos enviar el formulario
        //usando la api fetch al servidor, con el modo post enviar el formulario
        //Enviar un mensaje al usiario diciendo al usuario ""felicidades has ingresado", limpiar el formulario,redirigir la pagina

        //Enviar al usuario el error del servidor

    //Si los datos no son validos enviar un mensaje al usuario
