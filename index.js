
const contenedor = document.getElementById("turnos");

const tablaCarrito = document.getElementById("tablaCarrito");

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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
    `);
    
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
    console.log(acumulador);
    nodo.innerHTML = acumulador;
    carritoStorage();
    
    
    
    
};

const getCarrito = (item) => {

    let acum = "";
    item.forEach((item) =>
      acum +=
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
    console.log(acum);
    tablaCarrito.innerHTML = acum;
    carritoStorage();
    
  }





const reservarClase = (id) =>{
    const seleccion = TURNOS.find(item => item.id===id);
    

   
    carrito.push({
        id: seleccion.id,
        nombre: seleccion.nombre,
        profesora: seleccion.profesora,
        lugares: seleccion.lugares,
        imagen: seleccion.imagen,
    })
    
  
    cargarTurnos(carrito, tablaCarrito, true);
    carritoStorage();
    
    
    
}

cargarTurnos(TURNOS, contenedor, false);


function carritoStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

let btnCarrito = document.getElementById('turnoSeleccionado');
btnCarrito.addEventListener("click", () => getCarrito(carrito));



const vaciarCarrito = () => {
    localStorage.clear();
    carrito = [];
  
  }
 
let btnVaciar = document.getElementById('boton1');
btnVaciar.addEventListener("click", () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "No podras revertir esto.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, vaciar.'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Carrito vaciado!',
          'Todos los productos han sido eliminados.',
          'success'
        )
        vaciarCarrito();
      }
    })
  });

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



// ``const boton1 = document.getElementById("boton1");

// boton1.addEventListener('click', () => {

//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Se borraron sus turnos',
//         showConfirmButton: false,
//         timer: 1500
//       })

// });
``


//   let usuario;
//   let usuarioStorage = sessionStorage.getItem("usuario");

//   if(usuarioStorage){
//     console.log("entramos cuado hay usuario");
//   }else{
//     usuario = document.getElementById("exampleInputName");
//     sessionStorage.setItem("usuario", usuario);
//   }

  