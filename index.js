alert("Bienvenido al Sistema de turno online");

let registro=prompt("Se encuentra Registrado? s/n"); 

//REGISTRO
if(registro=="n" || registro=="N"){
    let usuario=prompt("Ingrese nombre de usuario");
    let contraseña=prompt("Ingrese su contraseña:");
    let confirm=prompt("Vuelva a ingresar la contraseña: ")
    if(contraseña===confirm){
        alert("Registro correcto!");
    }
    else{
        alert("Las contraseñas ingresadas no coinciden!");
    }

    

}

//Elegir turno
function solicitarhorario(horario){
    let horarioIngresado = prompt("ingresehorario")
    alert("El horario elegido es" + horarioIngresado)
}


//login y seleccion
if(registro=="s" || registro=="S"){
    let usuario=prompt("Ingrese el usuario:");
    let pass=prompt("ingrese contraseña:");
    alert("Ingreso Correcto");
    let otro="s";
    let total=0;

    while(otro=="s"){
        let horario=prompt("Ingrese el horario que desea asistir (08:00 , 10:00 , 12:00): ");
        alert ("Usted eligio el horario" + horario)
     
        otro=prompt("Desea elegir otro horario?s/n");

    }
   
}

