const lista = document.querySelector('#listado');
fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((turnero) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h4>${turnero.nombre}</h4>
        <p>${turnero.disponibles}</p>
        <p>Código:${turnero.id}</p>
        <hr/>
    `;

      lista.append(li);
    });
  });
