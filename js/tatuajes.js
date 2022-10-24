let datos = [];
fetch("https://my-json-server.typicode.com/Sofiamedina002/API_tatuajes/arreglo")
    .then(response => response.json())
    .then(data => {  // data contiene el JSON
        datos = data 

        let cad = `<div id="galeria">`

        for (tatuaje of datos) {
            cad += `<img src="${tatuaje.imagen}" alt="${tatuaje.nombre}">`
        }

        cad += `</div>`

        document.getElementById("galeria").innerHTML = cad;

    }
    );





