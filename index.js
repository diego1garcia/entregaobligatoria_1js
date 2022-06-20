
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
    
    localStorage.setItem("TURNOS", JSON.stringify(seleccion));


    
}

cargarTurnos(TURNOS, contenedor, false);

const boton = document.getElementById("boton");

boton.addEventListener('click', () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usted acaba de reservar su turno',
        showConfirmButton: false,
        timer: 1500
      })

});

const boton1 = document.getElementById("boton1");

boton1.addEventListener('click', () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se borraron sus turnos',
        showConfirmButton: false,
        timer: 1500
      })

});



  let usuario;
  let usuarioStorage = sessionStorage.getItem("usuario");

  if(usuarioStorage){
    console.log("entramos cuado hay usuario");
  }else{
    usuario = document.getElementById("exampleInputName");
    sessionStorage.setItem("usuario", usuario);
  }

  