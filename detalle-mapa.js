// detalle-mapa.js

// Función para obtener el UUID del mapa de la URL
function obtenerUuid() {
    const params = new URLSearchParams(window.location.search);
    return params.get('uuid');
}

// Función para obtener los detalles del mapa
async function fetchDetalleMapa() {
    const uuid = obtenerUuid();
    
    if (!uuid) {
        document.getElementById('map-details').innerText = 'Mapa no encontrado.';
        return;
    }

    try {
        const response = await fetch(`https://valorant-api.com/v1/maps/${uuid}`);
        const data = await response.json();

        // Verifica que la respuesta tenga datos
        if (data && data.data) {
            mostrarDetalles(data.data);
        } else {
            document.getElementById('map-details').innerText = 'No se encontraron detalles del mapa.';
        }
    } catch (error) {
        console.error('Error al obtener los detalles del mapa:', error);
        document.getElementById('map-details').innerText = 'Error al cargar los detalles del mapa.';
    }
}

// Función para mostrar los detalles del mapa en el HTML
function mostrarDetalles(mapa) {
    document.getElementById('map-name').innerText = mapa.displayName || 'Nombre no disponible';
    document.getElementById('map-image').src = mapa.splash || ''; // Usar la imagen del mapa

    // Extraer la descripción y otros detalles de la API
    const descripcion = mapa.description || 'Descripción no disponible.';
    const tamaño = mapa.size || 'Tamaño no especificado.';
    const uuid = mapa.uuid || 'UUID no disponible.';
    const imagenMiniMapa = mapa.image || '';

    document.getElementById('map-details').innerHTML = `
        <p><strong>Descripción:</strong> ${descripcion}</p>
        <p><strong>Tamaño:</strong> ${tamaño}</p>
        <p><strong>UUID:</strong> ${uuid}</p>
    `;
}

// Llamada a la función para obtener y mostrar los detalles al cargar la página
document.addEventListener('DOMContentLoaded', fetchDetalleMapa);