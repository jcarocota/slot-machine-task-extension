import express from 'express';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import { SlotMachine } from './SlotMachine.js';
const slotMachine = new SlotMachine();
const app = express();
const server = createServer(app);
const port = 3000;
const wss = new WebSocketServer({
    server: server
});
wss.on('connection', (ws) => {
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        //log the received message and send it back to the client
        console.log('received: %s', message, '... trying to convert to json');
        let jsonMessage;
        try {
            jsonMessage = JSON.parse(message);
        }
        catch (error) {
            console.error(`Unable to convert ${message} to JSON`);
        }
        if (jsonMessage && jsonMessage['action'] && jsonMessage['user']) {
            let action = String(jsonMessage['action']).toLowerCase();
            if (action == 'spin') {
                const result = slotMachine.spin();
                ws.send(JSON.stringify(result));
            }
            else {
                console.error(`Action '${action}' not recognized`);
            }
        }
        else {
            console.error('Unable to process request');
            ws.send(`Unable to process request for the data: ${message}`);
        }
        //console.log('received: %s', jsonMessage);
        //ws.send(`Hello, you sent -> ${jsonMessage}`);
    });
    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
});
//start our server
server.listen(port, () => {
    console.log(`Server started on port ${port} :)`);
});
//# sourceMappingURL=index.js.map