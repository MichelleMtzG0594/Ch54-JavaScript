/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300
*/



// Función para calcular la edad en meses
        function calcularEdad() {
            // Obtener el valor del input y convertirlo a número
            const edad = parseInt(document.getElementById('birthdate').value);
            
            // Calcular la edad en meses (12 meses por año)
            const edadMeses = edad * 12;
            
            // Mostrar el resultado
            document.getElementById('result').innerHTML =  `Tu edad en meses es : ${edadMeses} meses`;
        }

        // Asignar la función al evento click del botón
        document.getElementById('calculate').addEventListener('click', calcularEdad);