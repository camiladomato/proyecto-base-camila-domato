
const $listMessages = document.querySelector(".messages");
const $message = document.getElementById("message");
const $formMessage = document.getElementById("formMessage");

let messages = [
    {
        id: 1,
        type: "text",
        text: "¡Hola! ¿Querés venir al cine?🎫​📽️​🎞️​🎬​",
        hour: "14:12 p. m.",
        me: false,
    },
    {
        id: 2,
        text: "Si, dale. ¿A que hora?​",
        type: "audio", 
        source: "./assets/audio/mensaje.mp3",
        duration:"0:45",
        hour: "14:13 p. m.",
        me: true,
    },
    {
        id: 3,
        type: "gif", 
        source: "./assets/img/gato-baila.gif",
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
        text: "Daleee , voy comprando 🍿​🥤​​",
        hour: "14:14 p. m.",
        me: false,
    },
    {
        id: 6,
        type: "gif", 
        source: "./assets/img/michael-jackson-thriller.gif",
        hour: "14:13 p. m.",
        me: false,
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
      let contentHTML = "";

        switch (message.type) {
            case "audio":
                contentHTML = `
                <div class="audio-player">
                    <img class="img-user" src="https://github.com/camiladomato.png" alt="user" />
                    <button class="play-btn"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.14v13.72L19 12z" /></svg></button>
                    <div class="progress-bar"><div class="progress-line" style="width: 75%"></div></div>
                </div>
                <div class="duration-time">
                    <span class="duration">${message.duration}</span>
                    <p class="time">${message.hour}</p>
                </div>`;
                break;

            case "gif":
                contentHTML = `
                <div class="media-content">
                    <img src="${message.source}" class="gif-preview" />
                </div>
                <p class="time">${message.hour}</p>`;
                break;

            default: 
                contentHTML = `
                <p class="content">${message.text}</p>
                <p class="time">${message.hour}</p>`;
        }

        $listMessages.innerHTML += `
        <div class="message ${message.me ? 'me' : ''} ${message.type === 'gif' ? 'gif-message' : ''} ${message.type === 'audio' ? 'audio-message' : ''}">
          ${contentHTML}
        </div>`;
    });
    $listMessages.scrollTop = $listMessages.scrollHeight;
}

const processMessage = () => {
    const text = $message.value.trim(); 
    if (text === "") return; 

    const now = new Date();
    const hour = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');

    const newMessage = {
        id: Date.now(),
        text: text,
        me: true,
        type:"text",
        hour: hour
    };

    const messageInLs = loadChats();
    messages = [...messageInLs, newMessage];

    saveChats(messages);
    renderMessages(messages);
    $formMessage.reset();
};


$formMessage.addEventListener("submit", (e) => {
    e.preventDefault(); 
    processMessage();
});

$message.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        processMessage();
    }
});

const initialMessages = loadChats();
renderMessages(initialMessages);

