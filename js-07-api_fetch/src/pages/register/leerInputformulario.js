


const leerInputsFormulario = (formulario) => {

/* Falta hacer saneamiento con trim para quitar espacios al principio o final */

   const newUser = {
    name : formulario.elements["name"].value,
    lastName : formulario.elements["family-name"].value,
    email : formulario.elements["email"].value,
    password : formulario.elements["new-password"].value,
    birthday : formulario.elements["bday"].value,
    checkbox : formulario.elements["terminos-condiciones"].checked //Solo para checkbox se usa este atributo?
   }
   console.table(newUser);
   return newUser;

}

   

export {leerInputsFormulario};

 