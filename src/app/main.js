
let $buscador = document.getElementById("search");
let $listChat = document.querySelector(".chats ul")
let appData = []; 
let activeChat = null;


async function cargarDatos() {
    const localData = localStorage.getItem("whatsapp_data");
    console.log(localData)
    
    if (localData) {
        appData = JSON.parse(localData);
    } else {
        const respuesta = await fetch('./src/app/data.json');
        const resultado = await respuesta.json();
        appData = resultado.chats;
        guardarEnLS(); 
    }
    
    renderChats(appData);
    if (appData.length > 0) selectChat(0);
    
}
const guardarEnLS = () => {
    localStorage.setItem("whatsapp_data", JSON.stringify(appData));
};



const renderChats = (list) => {
$listChat.innerHTML = ""

if(list.length === 0){
 $listChat.innerHTML = "<li class='empty'> No se encuentraron resultados.</li>"
}
list.forEach((chat ,index) => {
const ultimoMsg = chat.messages[chat.messages.length - 1]?.text || "Sin mensajes";
$listChat.innerHTML += `
<li class="user-chat" onclick="selectChat(${index})">
            <img src="${chat.avatar}" alt="foto de perfil de ${chat.name}" />
            <div class="chat-info">
              <h3>${chat.name}</h3>
              <p>${ultimoMsg}</p>
            </div>
           <span class="time">${chat.messages[chat.messages.length - 1]?.hour || ""}</span>
          </li> 
               
`
})
};

const selectChat = (index) => {
    activeChat = appData[index];

    const $headerImg = document.querySelector(".chat-header img");
    const $headerName = document.querySelector(".chat-header h3");

    if (activeChat) {
        $headerImg.src = activeChat.avatar;
        $headerName.textContent = activeChat.name;

        if (typeof renderMessages === 'function') {
            renderMessages(activeChat.messages);
        }
    }
};




$buscador.addEventListener("input", () => {
    const nameSearch = $buscador.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filterchats = appData.filter((chat) => {
        const chatNameNormalized = chat.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return chatNameNormalized.includes(nameSearch);
    });
    renderChats(filterchats);
});

cargarDatos();
