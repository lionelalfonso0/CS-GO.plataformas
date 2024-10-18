async function mostrarAgentes(){
const info = document.querySelector("#agentes");

const agentes= await fetch(`https://valorant-api.com/v1/agents`)
    .then((response) => response.json())
    .then(data => {
        data.data.forEach (agente => {
            if(agente.isPlayableCharacter){
                info.innerHTML += `
                    <div class="col">
                        <div class="card" style="width: 15rem; height: 30rem;">
                            <img src="${agente.displayIcon}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${agente.displayName}</h5>
                                <p class="card-text">${agente.description}</p>
                            </div>
                        </div>
                            <img src="${agente.role.displayIcon}" class="card-img-bottom" alt="...">
                        </div>`
                console.log(agente.uuid);
            }
        })
        return data.data;
    })
}
mostrarAgentes();
