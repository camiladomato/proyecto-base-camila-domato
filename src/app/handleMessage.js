
const $listMessages = document.querySelector(".messages");
const $message = document.getElementById("message");
const $formMessage = document.getElementById("formMessage");

let messages = [
    {
        id: 1,
        text: "¡Hola! ¿Querés venir al cine?🎫​📽️​🎞️​🎬​",
        hour: "14:12 p. m.",
        me: false,
    },
    {
        id: 2,
        text: "Si, dale. ¿A que hora?​",
        hour: "14:13 p. m.",
        me: true,
    },
    {
        id: 3,
        text: "llega temprano y elegimos​",
        hour: "14:13 p. m.",
        me: false,
    },
    {
        id: 4,
        text: "okiii​",
        hour: "14:13 p. m.",
        me: true,
    },
    {
        id: 5,
        text: "Daleee , voy comprando​",
        hour: "14:14 p. m.",
        me: false,
    },
    {
        id: 6,
        text: "Adiooos​",
        hour: "14:15 p. m.",
        me: true,
    }
];

const loadChats = () => {
    const data = JSON.parse(localStorage.getItem("messages"));
    if(data === null){
        return messages;
    }
    return data;
};

const saveChats = (list) => {
    localStorage.setItem("messages", JSON.stringify(list));
};

const renderMessages = (list) => {
    $listMessages.innerHTML = "";

    list.forEach(message => {
        $listMessages.innerHTML += `
        <div class="message ${message.me === true ? 'me' : ''}">
          <p class="content">${message.text}​</p>
          <p class="time">${message.hour}</p>
        </div>
        `
    });
}

const sendMessage = (event) => {
    const now = new Date();

    if (event.key === "Enter") {
        const newMessage = {
            text: $message.value,
            me: true,
            hour: now.getHours() + ":" + now.getMinutes()
        }
        const messageInLs = loadChats();
        messages = [...messageInLs , newMessage];

        saveChats(messages);
        renderMessages(messages);

        $formMessage.reset();
    }

}

$message.addEventListener("keydown", (e) => {
    sendMessage(e)
})

const initialMessages = loadChats();
renderMessages(initialMessages);

