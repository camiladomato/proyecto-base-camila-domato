
const $listMessages = document.querySelector(".messages");

const messages = [
    {
        id:1,
        text: "¡Hola! ¿Querés venir al cine?🎫​📽️​🎞️​🎬​",
        hour: "14:12 p. m.",
        me: false,
    },
    {
        id:2,
        text: "Si, dale. ¿A que hora?​",
        hour: "14:13 p. m.",
        me: true,
    },
    {
        id:3,
        text: "llega temprano y elegimos​",
        hour: "14:13 p. m.",
        me: false,
    },
    {
        id:4,
        text: "okiii​",
        hour: "14:13 p. m.",
        me: true,
    },
    {
        id:5,
        text: "Daleee , voy comprando​",
        hour: "14:14 p. m.",
        me: false,
    },
    {
        id:6,
        text: "Adiooos​",
        hour: "14:15 p. m.",
        me: true,
    }
];

const renderMessages = (list) =>{
    $listMessages.innerHTML = "";
    
    list.forEach(message => {
        $listMessages.innerHTML += `
        <div class="message ${message.me === true ? 'me' : '' }">
          <p class="content">${message.text}​</p>
          <p class="time">${message.hour}</p>
        </div>
        `
    });
}
renderMessages(messages);
