const Message = require("./message.js");
const express = require("express"); 

const app = express();
const messages = [];

app.use(express.json())

app.get("/api/message", (req, res) => {
    res.json({ messages: ["Card5", "Card6", "Card7", "Card8"]  });
});
  
app.post("/api/message", (req,res) =>{
    console.log(req.body.message)
    messages.push(new Message(req.body.message))
    res.json({message: "Message Success." })
});

app.listen(3001, () => {
console.log(`Server listening on ${3001}`);
});





