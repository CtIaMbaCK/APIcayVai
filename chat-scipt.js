// const { error } = require("console");

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");


let userMessage;
// const API_KEY = "";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">robot_2</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = () => {
    // const API_URL = "";

    const requestOptions = {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: {
                "model":"gpt-3.5-turbo-1106",
                "messages": [
                    {
                    "role": "user",
                    "content": userMessage
                    }
                ],
                "max_tokens": 1000
            }
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data);
    }).catch((error) => {
        console.log(error); // handling this fucking err plz => fucking api key mother fuck
    })
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);

    if (!userMessage) return;

    // them cau hoi ng dung vao chat
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        chatbox.appendChild(createChatLi("Bố mày đang suy nghĩ, đợi đi...", "incoming"));
        generateResponse();
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat);


