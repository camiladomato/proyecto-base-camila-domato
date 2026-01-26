
let $buscador = document.getElementById("search");
let $chats = document.querySelectorAll(".user-chat");
console.log($buscador);
console.log($chats);

const searchChats = () => {
   const nameSearch = $buscador.value.toLowerCase();
    
   for (let i = 0 ; i < $chats.length; i++){
    const $chat = $chats[i]
    const $titleChat = $chat.querySelector("h3");
    const name = $titleChat.textContent.toLowerCase();
    
    if(name.includes(nameSearch)){
        $chat.style.display="flex";
    }else{
        $chat.style.display= "none";
    }
   }

}

$buscador.addEventListener("input", searchChats);

