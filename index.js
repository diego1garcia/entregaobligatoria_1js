alert("Bienvenido al Sistema de turno online");



let admin=prompt("Es Utd Administrador? s/n");
if (admin==="s" || admin === "S"){
    let userAdmin = prompt ("Ingrese Usuario Administrador: ");
    let passAdmin = prompt ("Ingrese Contarseña: ");
        if (userAdmin==="admin" && passAdmin==="admin"){
            alert("Sistema para agregar turnos");
            const turnos = ["08:00", "10:00", "12:00"];
             let turno = prompt("agregue un turno");
                alert(`"Usted a agregado el turno" ${turno} hs`)
        }
        if (userAdmin !="admin" && passAdmin !="admin"){
            alert("El usuario o contraseña no coinciden")
        }
    }
if (admin==="n" || admin ==="N"){
    let registro=prompt("Se encuentra Registrado? s/n"); 


//REGISTRO
if(registro=="n" || registro=="N"){
   
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
        const arr1 = ["08:00 - profe diana","10:00 profe jose", "12:00 - Profe Diana"];
            alert(`"los horairos disponibles son " ${arr1}`)
        let horario=prompt("Ingrese el horario que desea asistir (08:00 - Profe Diana , 10:00 - Profe Jose, 12:00 - Profe Diana): ");
            alert(`"usted eligio el turno" ${horario}`)
        

     
        otro=prompt("Desea elegir otro horario?s/n");
    }

    otro=prompt("Desea elegir otro horario?s/n");

    

}




//login y seleccion
if(registro=="s" || registro=="S"){
    let usuario=prompt("Ingrese el usuario:");
    let pass=prompt("ingrese contraseña:");
    alert("Ingreso Correcto");
    let otro="s";
    

    while(otro=="s"){
        const arr1 = ["08:00 - profe diana","10:00 profe jose", "12:00 - Profe Diana"];
            alert(`"los horairos disponibles son " ${arr1}`)
        let horario=prompt("Ingrese el horario que desea asistir (08:00 - Profe Diana , 10:00 - Profe Jose, 12:00 - Profe Diana): ");
            alert(`"usted eligio el turno" ${horario}`)
        

     
        otro=prompt("Desea elegir otro horario?s/n");

    }
   
}
}
