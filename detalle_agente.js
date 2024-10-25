document.addEventListener('DOMContentLoaded', () => {
async function detalleAgentes() {
    const info = document.querySelector("#detalle-agente"); 
    const uuid = new URLSearchParams(window.location.search).get('uuid') 
    const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
    const data = await response.json();
    const agente = data.data;

    if (agente.isPlayableCharacter) {
        // Filtrar imágenes duplicadas y crear el carrusel
        const images = [];
        if (agente.fullPortrait && !images.includes(agente.fullPortrait)) images.push(agente.fullPortrait);
        if (agente.bustPortrait && !images.includes(agente.bustPortrait)) images.push(agente.bustPortrait);
        if (agente.killfeedPortrait && !images.includes(agente.killfeedPortrait)) images.push(agente.killfeedPortrait);

        const carouselImages = images.length ? `
            <div id="agentCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${images.map((img, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img}" class="d-block w-100" alt="Agent Image">
                        </div>`).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#agentCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#agentCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        ` : '';  

        // Crear la lista de habilidades
        const habilidades = agente.abilities.map(ability => `
            <li class="list-group-item bg-gradient text-dark d-flex align-items-center">
                <span>${ability.displayName}</span>
                <img src="${ability.displayIcon}" alt="${ability.displayName} Icon" class="ms-2" style="width: 30px;">
            </li>
        `).join('');
            
        info.innerHTML = `
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4">
                        <!-- Tarjeta con imagen del Agente -->
                        <div class="card shadow-lg">
                            ${carouselImages}
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h1 id="agente-nombre" class="text-danger">${agente.displayName}</h1>
                        <p id="agente-descripcion" class="mb-4">${agente.description}</p>
                        <h3>Características</h3>
                        <ul class="list-group mb-4">
                            <li id="agente-developer" class="list-group-item bg-gradient text-dark">Developer: ${agente.developerName || 'Unknown'}</li>
                            <li id="agente-role" class="list-group-item bg-gradient text-dark d-flex align-items-center">
                                <span id="role-text">${agente.role.displayName}</span>
                                <img id="role-icon" class="ms-2 role-icon" src="${agente.role.displayIcon}" alt="${agente.role.displayName} Icon">
                            </li>
                            <li id="role-description" class="list-group-item bg-gradient text-dark">${agente.role.description}</li>
                        </ul>

                        <h3>Habilidades</h3>
                        <ul class="list-group mb-4">
                            ${habilidades}
                        </ul>
                    </div>
                </div>
            </div>`;
    }
    
}
detalleAgentes();
})