const validateName = (name) => {
     const result = {
        isValid: true,
        errors: []
    };

    if (name === ""){
        result.isValid = false;
        result.errors.push("El nombre no debe estar vacío.")
    } else if ( name.length < 3) {
        result.isValid = false;
        result.errors.push("El nombre debe tener al menos 3 caracteres.")
    }else if (!/^[a-zA-Z\s]+$/.test(name)) {
        result.isValid = false;
        result.errors.push("El nombre solo puede contener letras y espacios.")
    }

    return result;
}


export {validateName}