async function detalleAgentes(){
    const info = document.querySelector("#detalle-agente");   
    const response = await fetch(`https://valorant-api.com/v1/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf`);
    const data = await response.json();
    const agente = data.data;

    if (agente.isPlayableCharacter) {
        info.innerHTML = `
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4">
                        <!-- Tarjeta con imagen del Agente -->
                        <div class="card shadow-lg">
                            <img src="${agente.displayIcon}" class="img-fluid card-img-top" alt="${agente.displayName}">
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
                    </div>
                </div>
            </div>`;
    }
}

detalleAgentes();