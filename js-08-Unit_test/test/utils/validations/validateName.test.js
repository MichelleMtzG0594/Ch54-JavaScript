/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
 * 
 */

/*
 .toBe(expected)
 Propósito: Compara valores primitivos (números, strings, booleanos, 
 null, undefined) para una igualdad estricta (similar a === ). 
 También compara objetos por referencia (si son exactamente 
 el mismo objeto en memoria).
 .toEqual(expected)
 Propósito: Compara la igualdad profunda de objetos y arrays. 
 Jest recorre recursivamente las propiedades de los objetos o 
 los elementos de los arrays para verificar que sus contenidos 
 son equivalentes, no solo que sean la misma referencia en memoria.
*/


import { validateName } from "../../../src/utils/validations/validateName";

//test("Mensaje de la prueba ", ()=> {});

test("Debe aceptar un nombre válido", ()=>{
    //expect(valorRecibido).matcher(valorEsperado);
    const response = validateName("Abril");
    expect(response.isValid).toBe(true); 
    //El arreglo de errors debe estar vacio y con toEqual valida que sea igual al arreglo vacío [] (que tenga los mismos elementos mas no los valores)
    
    expect(response.errors).toEqual([]);
    //Es lo mismo que el anterior solo que este recorre el tamaño del arreglo y toBe debe ser igual a 0
    expect(response.errors.length).toBe(0);
});

/*
 .toBeTruthy()
 Propósito: Verifica si un valor es "truthy" (evalúa a true en un contexto booleano). 
 Esto incluye valores como true, números distintos de cero, strings no vacíos, objetos y arrays.
 
 .toBeFalsy()
 Propósito: Verifica si un valor es "falsy" (evalúa a false en un contexto booleano). 
 Esto incluye valores como false, 0, -0, null, undefined, NaN, y el string vacío "".

  .toBeGreaterThan(number) / .toBeGreaterThanOrEqual(number)
 Propósito: Compara si un número es mayor que, o mayor o igual que, otro.
 .toBeLessThan(number) / .toBeLessThanOrEqual(number)
 Propósito: Compara si un número es menor que, o menor o igual que, otro.
*/


test("Debe rechazar un nombre vacío", ()=>{
    const response = validateName("");
    expect(response.isValid).toBe(false);
    //Usando toBeFalsy()
    expect(response.isValid).toBeFalsy();
    //Usando .length > 0 para que de un error
    expect(response.errors.length>0).toBe(true);
    //Usando toBeTruthy()
    expect(response.errors.length>0).toBeTruthy();
    //Usando toBeGreaterThan()
    expect(response.errors.length).toBeGreaterThan(0);

});
