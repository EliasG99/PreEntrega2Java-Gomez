
alert("Bienvenido a Recargas Online");

//DECLARACION DE VARIABLES
let monto;
let opcion;
let numero = parseInt(prompt("Por favor, ingresa tu numero telefonico"));
let saldo = 0;
let prestamo = 0;
let deuda = 0;


//FUNCIONES


function validarSaldo(saldo, deuda){
  if( saldo < 0 ){
    alert("No tiene saldo, debe recargar");
  } else {
    alert("Su saldo es:$ " + saldo );
    alert("Tiene una deuda de:$  "+ deuda);
  }
}
function recargaSos(prestamo, deuda){
  
  switch(prestamo){
     case 1: 
         saldo = saldo + 250;
         deuda = deuda + 250;
     break;
     case 2: 
     saldo = saldo + 500;
     deuda = deuda + 500;
     break;
     case 3: 
     saldo = saldo + 750;
     deuda = deuda + 750;
     break;
     case 4: 
     saldo = saldo + 1000;
     deuda = deuda + 1000;
     break; 
     default: 

     break;
}
 }

 // OBJETOS
 
 
  const nombre = prompt("Ingresa tu Nombre");
  const apellido = prompt("Ingresa tu apellido");
  const email = prompt("Ingresa tu email");
  const personal = {
    nombre: nombre,
    apellido: apellido,
    email: email
   }

// ARRAYS y METODOS

   const compania = [
      {comp: "Movistar"},
      {comp: "Claro"},
      {comp: "Tuenti" },
      {comp: "Personal" }
   ];

   const companiaResultado = compania.find((el) => el.comp === "Movistar")


 // MENU DE OPCIONES Y OPERACIONES
do{
    opcion = parseInt(prompt("Selecciona una opción:\n1. Recargar \n2. Consultar \n3. Prestamo \n4. Datos del Titular(Se muestran por consola)\n5. Buscar compañias \n6. Salir "));
    switch (opcion) {
        case 1:
        
         monto = parseInt(prompt("Bienvenido " + numero + " ingrese el monto a recargar(Mayor o igual a 100): "));
         saldo = saldo + monto;
          if(monto <=100){
            alert("Monto incorrecto, intentelo nuevamente")
            monto = prompt("Bienvenido " + numero + " ingrese el monto a recargar(Mayor o igual a 100): ");
            saldo = saldo + monto;
          }
          pago = prompt("Ingrese como va a recargar:\n 1. Tarjeta de Credito. \n2. Tarjeta de Debito");
          if (pago === "1"){
            alert("Usted recargo: "+ monto + " con tarjeta de credito. Obtiene un regalo de $200" );
            saldo = saldo + 200;
          } else {
            alert("Usted recargo: "+ monto + " con tarjeta de debito. Obtiene un regalo de $150" );
            saldo = saldo + 150;
          }
          break;
        case 2:
          validarSaldo(saldo,deuda);
          break;
        case 3:
          prestamo = parseInt(prompt("Ingrese una opción:\n1. $250 \n2. $500 \n3. $750 \n4. $1000 "));
          recargaSos(prestamo);
          break;
        case 4:
          
          console.log(personal)
          break;
        case 5:
            console.log(companiaResultado)

            break;
        default:
          alert("Opción inválida. Por favor, selecciona una opción válida.");
          break;
      }
} while (opcion!==4)



