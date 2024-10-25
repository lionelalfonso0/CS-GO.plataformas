// mapas.js

// Función para obtener los datos de los mapas de la API de Valorant
async function fetchMapas() {
    try {
        // URL de la API de Valorant para obtener mapas
        const response = await fetch('https://valorant-api.com/v1/maps');
        const data = await response.json();

        // Llama a la función para mostrar los mapas
        mostrarMapas(data.data);
    } catch (error) {
        console.error('Error al obtener los mapas:', error);
    }
}

// Función para mostrar los mapas en el HTML
function mostrarMapas(mapas) {
    const mapasContainer = document.getElementById('mapas-container');
    
    mapas.forEach(mapa => {
        const card = document.createElement('div');
        card.classList.add('card', 'text-white', 'col-md-3'); // Clase de Bootstrap para tarjetas

        card.innerHTML = `
            <img src="${mapa.splash}" class="card-img-top" alt="${mapa.displayName}">
            <div class="card-body">
                <h5 class="card-title">
                    <a href="detalle-mapa.html?uuid=${mapa.uuid}" class="text-white text-decoration-none">
                        ${mapa.displayName}
                    </a>
                </h5>
                <p class="card-text">${mapa.description || 'Descripción no disponible.'}</p>
                <p><strong>Jugadores:</strong> 5v5</p>
                <p><strong>Tamaño:</strong> ${mapa.size || 'Desconocido'}</p>
            </div>
        `;
        
        mapasContainer.appendChild(card);
    });
}

// Llamada a la función para obtener y mostrar los mapas al cargar la página
document.addEventListener('DOMContentLoaded', fetchMapas);