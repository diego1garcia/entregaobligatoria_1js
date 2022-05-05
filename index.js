alert("Bienvenido al Sistema de turno online");

let registro=prompt("Se encuentra Registrado? s/n"); 

//REGISTRO
if(registro=="n" || registro=="N"){
    // let usuario=prompt("Ingrese nombre de usuario");
    // let contraseña=prompt("Ingrese su contraseña:");
    // let confirm=prompt("Vuelva a ingresar la contraseña: ")
    // if(contraseña===confirm){
    //     alert("Registro correcto!");
    // }
    function Registro(usuario, contraseña, contraseña2){
       this.usuario = usuario
       this.contraseña = contraseña
       this.contraseña2 = contraseña2
    }

    let usuario = prompt("ingrese su usuario")
    let contraseña = prompt("ingrese su contraseña")
    let contraseña2 = prompt("vuelva a ingresar su contraseña")
    if(contraseña===contraseña2){
        alert("registro correcto!");
    }
    else{
        alert("Las contraseñas no coinciden")
        
    }
    
    


    let otro="n"


    while(otro=="n"){
        let horario=prompt("Ingrese el horario que desea asistir (08:00 , 10:00 , 12:00): ");
        let profe=prompt("Ingrese con que profesora quiere tomar la clase (Diana , Jose)")
        alert (`"Usted eligio el horario" ${horario} con la profesora ${profe}`)
     
        otro=prompt("Desea elegir otro horario?s/n");

        

    }

    

    

}




//login y seleccion
if(registro=="s" || registro=="S"){
    let usuario=prompt("Ingrese el usuario:");
    let pass=prompt("ingrese contraseña:");
    alert("Ingreso Correcto");
    let otro="s";
    

    while(otro=="s"){
        let horario=prompt("Ingrese el horario que desea asistir (08:00 , 10:00 , 12:00): ");
        let profe=prompt("Ingrese con que profesora quiere tomar la clase (Diana , Jose")
        alert (`"Usted eligio el horario" ${horario} con la profesora ${profe}`)
     
        otro=prompt("Desea elegir otro horario?s/n");

    }
   
}
// //Elegir turno
// function solicitarhorario(){
//     let horarioIngresado = prompt("ingresehorario")
//     alert( `El horario elegido es ${horarioIngresado}`)
// }

// solicitarhorario()