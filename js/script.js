//aviso imortante antes de comnezar
alert('Antes de comenzar debo recordar que se tiene comentado la septima y la octava instruccion, con el objetivo de evitar la molestia de tener que quitar los alert y los prompt implementados a cada rato, una vez revisado los pimeros ejercicios de la actividad se recomienda comentar este primer alert.');


console.log('       Primera instruccion')
// Declare variables and assign values
let firstName = "Juan";
let lastName = "Sanchez";
let country = "MEXICO";
let city = "Playa del Carmen";
let age = 18;
let isMarried = false;
let year = 2024;
//Imprimir en la consola
console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);
console.log(year);

// Use typeof operator to check data types
console.log("firstName:", typeof firstName);
console.log("lastName:", typeof lastName);
console.log("country:", typeof country);
console.log("city:", typeof city);
console.log("age:", typeof age);
console.log("isMarried:", typeof isMarried);
console.log("year:", typeof year);
console.log(' '); //Este solo para dividir la consola



console.log('       Segunda instruccion');
// Check if type of '10' is equal to 10
console.log("Type of '10':", typeof '10');
console.log("Type of 10:", typeof 10);
console.log("Is type of '10' equal to type of 10?", typeof '10' === typeof 10);
console.log(' '); //Este solo para dividir la consola



console.log('       Tercera instruccion');
//Check if parseInt('9.8') is equal to 10
console.log("parseInt('9.8'): ", parseInt('9.8'));
console.log("Is parseInt('9.8') equal to 10?", parseInt('9.8') === 10);
console.log(' '); //Este solo para dividir la consola



console.log('       Cuarta instruccion');
//Boolean value is either true or false.
//Write three JavaScript statements which provide truthy value.
//Primero declaramos las variables
console.log('Truth values');
let vartruth1 = 4 > 3 && 4 === 4;
let vartruth2 = 10 > 3 || 10 === 10;
let vartruth3 = 10 > 3 && 10 === 10;
//luego imprimimos los resultados de las variables
console.log(vartruth1);
console.log(vartruth2);
console.log(vartruth3);

//Write three JavaScript statements which provide falsy value.
//Primero declaramos las variables
let varfalse1 = 4 > 3 && 4 === 3;
let varfalse2 = 10 < 3 || 10 === 3;
let varfalse3 = 10 > 3 && 10 === 3;
//luego imprimimos los resultados de las variables
console.log('False values');
console.log(varfalse1);
console.log(varfalse2);
console.log(varfalse3);
console.log(' '); //Este solo para dividir la consola


console.log('       Quinta instruccion');
//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
/*
Esto es la suposicion que yo le di a la instruccion
4 > 3 el resultado es verdadero
4 >= 3 el resultado es falso
4 < 3 el resultado es falso 
4 <= 3 el resultado es falso
4 == 4 el resultado es verdadero
4 === 4 el resultado es verdadero
4 != 4 el resultado es falso
4 !== 4 el resultaso es false 
4 != '4' es resulttado es falso 
4 == '4' es resultado es verdadero 
4 === '4' es resultado es falso 
*/
//Y este es el resultado verdadero
console.log(4 > 3);          // true
console.log(4 >= 3);         // true
console.log(4 < 3);          // false
console.log(4 <= 3);         // false
console.log(4 == 4);         // true
console.log(4 === 4);        // true
console.log(4 != 4);         // false
console.log(4 !== 4);        // false
console.log(4 != '4');       // false
console.log(4 == '4');       // true
console.log(4 === '4');      // false
console.log(' '); //Este solo para dividir la consola


console.log('       Sexta instruccion');
//Use the Date object to do the following activities
//Para esta parte usamos los onjetos de Date para conseguir los resultados solicitados 
let today = new Date();
console.log('El año actual es:', today.getFullYear());           // Año actual
console.log('El mes actual es:',today.getMonth() + 1);          // Mes actual (sumamos 1 porque es base 0)
console.log('El dias actual es:',today.getDate());               // Día del mes actual
console.log('El año numero del dia actual es:',today.getDay());                // Día de la semana actual
console.log('El hora actual es:',today.getHours());              // Hora actual
console.log('El minuto actual es:',today.getMinutes());            // Minutos actuales
console.log('Los segundos desde 1 de enero de 1970 hasta hoy son: ', Math.floor(today.getTime() / 1000)); // Segundos desde 1 de enero de 1970
console.log(' '); //Este solo para dividir la consola
/*
console.log('       Séptima instruccion');
//Write a script that prompts the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is: ` + area);
alert(`The area of the triangle is: ` + area); //Este solo para dividir la consola

console.log('       Octava instruccion');
// Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c)

// Primeros un alert para imprimir para que sirven los datos que usaremos
alert('Calculemos el perimetro de un triangulo');

// Luego declaramos las variables y los datos que vamos a usar
let sidea = parseFloat(prompt("Enter side a:")); // Convertimos a número
let sideb = parseFloat(prompt("Enter side b:")); // Convertimos a número
let sidec = parseFloat(prompt("Enter side c:")); // Convertimos a número
//investigansdo y con el aporo de herramientas virtuales usare el parseFloat para convertir los datos a numeros, esto ya que al intentar hacerlo sin la impresion es: The perimeter of the triangle is: 543

// Luego declaramor la variable que almacenara los datos y usaremos para hacer el calculo del perimetro
let perimeter = sidea + sideb + sidec; // Realizamos la suma correctamente
console.log(`The perimeter of the triangle is: ` + perimeter);
alert(`The perimeter of the triangle is: ` + perimeter);

//Este es solo es el mensaje final 
alert('Felicidades, has terminado que tengas un buen dia!!!');
*/



