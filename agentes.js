async function mostrarAgentes() {
    const info = document.querySelector("#agentes");
    const agentes = await fetch(`https://valorant-api.com/v1/agents`)
        .then((response) => response.json())
        .then(data => {
            data.data.forEach(agente => {
                if (agente.isPlayableCharacter) {
                    info.innerHTML += `
                        <div class="col">
                            <div class="card" onclick="window.location.href='detalle_agente.html?uuid=${agente.uuid}'" style="width: 15rem; ">
                                <img src="${agente.displayIcon}" class="card-img-top" alt="${agente.displayName}">
                                <div class="card-body">
                                    <h5 class="card-title">${agente.displayName}</h5>
                                    <p class="card-text">${agente.description}</p>
                                </div>
                                <div class="d-flex justify-content-center mb-3">
                                    <img src="${agente.role.displayIcon}" class="role-icon" alt="${agente.role.displayName}" style="width: 40px; height: 40px;"/>
                                </div>
                            </div>
                        </div>`;
                    console.log(agente.uuid);
                }
            });
            return data.data;
        });
}
mostrarAgentes();