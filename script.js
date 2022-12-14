const authorInput = document.querySelector("author");
const messageInput = document.querySelector("message");
const fizininBtnu = document.querySelector(".btn");

class Message {
    constructor(sender, content) {
        this.sender = sender;
        this.date = gettime();
        this.content = content;
    }

    toString() {
        return `${this.date} ${this.sender}: ${this.content}`;
    }

    toHtml() {
        return `<p>${this.date} ${this.sender}: ${this.content}</p></br>`;
    }
}

class Messenger {
    constructor() {
        this.history = [];
        this.historyelement = document.querySelector(`.history`);
    }

    show_history() {
        this.history.forEach((message) => {
            console.log(message.toString());
        });
    }

    send(author, text) {
        const message = new Message(author, text);
        this.history.push(message);
        const p = document.createElement("p");
        p.innerHTML = message.toHtml();
        this.historyelement.appendChild(p);
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

let messenger = new Messenger("messenger");

fizininBtnu.addEventListener("click", () => {
    const author = authorInput.value;
    const message = messageInput.value;
    authorInput.value = "";
    messageInput.value = "";
    messenger.send(author, message);
});