/*alert("Bienvenido al Sistema de turno online");



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
}*/



const contenedor = document.getElementById("turnos");

const tablaCarrito = document.getElementById("tablaCarrito");

const carrito = [];

const TURNOS =[
   
{   
    id: 1,
    nombre: "Turno 08:00 hs",
    profesora: "Diana",
    lugares: "Lugares Disponibles: 3",
    imagen: "https://dw24840-diegogarciamellado.000webhostapp.com/img/nosotros_2.png"

},
{
    id: 2,
    nombre: "Turno 10:00 hs",
    profesora: "Josefina",
    lugares: "Lugares Disponibles: 5",
    imagen: "https://dw24840-diegogarciamellado.000webhostapp.com/img/nosotros_1.png",

},
];

const getCard = (item) => {
    return (`
    <div class="card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
         <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <h5 class="card-title">${item.profesora}</h5>
            <p class="card-text">${item.lugares}</p>
            <a href="#" onclick=reservarClase(${item.id}) class="btn btn-primary">Reservar Turno</a>
    </div>
  </div>
    `)
};

const getRow = (item) => {
    return(
        `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nombre}</td>
            <td>${item.profesora}</td>
            <td>${item.lugares}</td>
            <td><img style="width:40px" src=${item.imagen} alt"imagen"> </td>
        </tr>

        `
    )
}

const cargarTurnos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el);
    })
    nodo.innerHTML = acumulador;
};

const reservarClase = (id) =>{
    const seleccion = TURNOS.find(item => item.id===id)

    carrito.push({
        id: seleccion.id,
        nombre: seleccion.nombre,
        profesora: seleccion.profesora,
        lugares: seleccion.lugares,
        imagen: seleccion.imagen,
    })

    cargarTurnos(carrito, tablaCarrito, true);
    


    
}

cargarTurnos(TURNOS, contenedor, false);




