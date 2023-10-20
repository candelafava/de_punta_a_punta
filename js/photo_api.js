// Función para mostrar fotos basadas en las URL de imágenes
function mostrarFotos(photoURLs) {
    // Esta función toma una matriz de URL de imágenes y las muestra en un elemento de la página con el id "galeria".
    var galeria = document.getElementById("galeria");

    // Elimina las fotos existentes antes de mostrar las nuevas fotos
    galeria.innerHTML = "";

    // Itera a través de las URL de imágenes y crea elementos de imagen
    photoURLs.forEach(function (url) {
        var img = document.createElement("img");
        img.src = url; // Asigna la URL de la imagen
        galeria.appendChild(img); // Agrega la imagen a la galería
    });
}

// Ejemplo de uso:
var ciudadElegida = 'tierra del fuego';

// Función para obtener fotos según una ubicación o etiqueta
function obtenerFotos(ubicacionOEtiqueta) {
    // Esta función debería realizar una solicitud AJAX para obtener las URL de las imágenes
    // basadas en la ubicación o etiqueta proporcionada. Luego, llama a mostrarFotos para mostrar las fotos obtenidas.
    var fotosObtenidas = obtenerFotosDesdeServidor(ubicacionOEtiqueta);
    mostrarFotos(fotosObtenidas);
}

// Evento de escucha para el elemento select
var select = document.getElementById("miSelectMultiple");

select.addEventListener("change", function () {
    // ... (código existente)

    // Opcionalmente, puedes llamar a mostrarFotos(photoURLs) aquí para mostrar las fotos obtenidas.
    // Ejemplo: mostrarFotos(photoURLs);
});

// Función para obtener fotos desde el servidor (debes implementar esta función)
function obtenerFotosDesdeServidor(ubicacionOEtiqueta) {
    // Agrega la lógica para obtener las URL de las imágenes desde el servidor o una API
    // y devuelve un array de URLs de imágenes. Debes implementar esta función para obtener las URL reales.
    // Por ahora, usaremos un ejemplo simple:
    var fotosEjemplo = [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
    ];
    return fotosEjemplo;
}
