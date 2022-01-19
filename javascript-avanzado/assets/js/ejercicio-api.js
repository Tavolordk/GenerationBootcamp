const urlAPI = 'https://jsonplaceholder.typicode.com/albums/1/photos';
const $llenar = document.querySelector('#llenar');

fetch(urlAPI)
    .then(resp => resp.json()).then(data =>{
        data.forEach(dato => {
            const imagen = dato.thumbnailUrl;
            const titulo = dato.title;
            console.log(imagen,titulo);

            const texto = `<div class="col mb-4">
            <div class="card">
              <img src="${imagen}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
              </div>
            </div>
          </div>`;

            const espacio = document.createElement('div');
            espacio.innerHTML = texto;

            $llenar.appendChild(espacio);

        });

    });