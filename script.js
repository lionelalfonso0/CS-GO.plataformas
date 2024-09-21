/*async function mostrarAgentes(){
const info = document.querySelector(".valorant");

console.log(info);
const agentes= await fetch(`https://valorant-api.com/v1/agents`)
    .then((response) => response.json())
    .then(data => {
        return data.data;
    })
    console.log(agentes);
    agentes.map(agente => {
        if(agente.isPlayableCharacter){
            console.log(agente);
            const div = document.createElement("div")
            const titulo= document.createElement("h2")
            titulo.textContent = agente.displayName;
            const img = document.createElement("img");
            img.src = agente.displayIcon;
            div.append(titulo, img);
            
            agente.abilities.map(habilidad =>{
                const habilidadDiv = document.createElement("div")
                const habilidadP = document.createElement("p");
                habilidadP.textContent = habilidad.displayName;
                habilidadDiv.appendChild(habilidadP);
                div.appendChild(habilidadDiv);
            })
            info.appendChild(div);
        }
    });
}

mostrarAgentes();*/