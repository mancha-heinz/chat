const { WebSocketServer } = require("ws");
const dotenv = require("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

wss.on("connection", (ws) => {
    ws.on("error", console.error()); // inf. erro
    ws.on("message", (data) => { // inf. msg
        // recebe msg e envia p/ todos os clientes q estão no serv
        wss.clients.forEach((client) => {
            client.send(data.toString())
        })
    })

    console.log("client connected")
})