const Message = require("./Server/message");

const messages = [];

const test1 = new Message("Hello");
const test2 = new Message("World");

messages.push(test1);
messages.push(test2);

for(let i = 0; i < messages.length; i++){
    console.log(messages[i].value);
}

messages.forEach((message) => {
    console.log(message.value);
});

