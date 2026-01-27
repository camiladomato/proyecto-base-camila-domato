
let $buscador = document.getElementById("search");
let $listChat = document.querySelector(".chats ul")


const chatsData = [
    {   name: "Damián Benitez",
        lastMessage: "Vamos al cine ?",
        avatar: "./assets/img/dami.jpg",
    },
    {   name: "Grupo UTN - turno mañana",
        lastMessage: "que hicieron hoy?",
        avatar: "./assets/img/muichiro.jpg",
    },
    {   name: "Movistar",
        lastMessage: "Movistar te acerca la factura",
        avatar: "./assets/img/mv.png",
    }
]

const renderChats = (list) => {
$listChat.innerHTML = ""

list.forEach((chat) => {
$listChat.innerHTML += `
<li class="user-chat">
            <img src="${chat.avatar}" alt="foto de perfil de ${chat.name}" />
            <div class="chat-info">
              <h3>${chat.name}</h3>
              <p>${chat.lastMessage}</p>
            </div>
            <span class="time">14:12 p. m.</span>
          </li>      
`
})
}

const searchChats = () => {

//let $chats = document.querySelectorAll(".user-chat");
   const nameSearch = $buscador.value.toLowerCase();
// filtrando en data con filter
   const filterchats = chatsData.filter((chat) => chat.name.toLocaleLowerCase().includes(nameSearch));
   renderChats(filterchats);
// manera anterior para filtar desde el dom   
//    for (let i = 0 ; i < $chats.length; i++){
//     const $chat = $chats[i]
//     const $titleChat = $chat.querySelector("h3");
//     const name = $titleChat.textContent.toLowerCase();

//     if(name.includes(nameSearch)){
//         $chat.style.display="flex";
//     }else{
//         $chat.style.display= "none";
//     }
//    }

}

$buscador.addEventListener("input", searchChats);
renderChats(chatsData)
