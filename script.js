async function mostrarAgentes(){
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
            console.log(agente.uuid);
            console.log(agente.displayName);  
            
            /*agente.abilities.map(habilidad =>{
                console.log(habilidad);
            })*/
        }
    });
}
mostrarAgentes();

