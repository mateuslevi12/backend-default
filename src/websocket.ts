import WebSocket, { WebSocketServer } from 'ws';
import server from './routes/index.router';

const wss = new WebSocketServer({ server }); 

const clients: WebSocket[] = [];

wss.on('connection', (ws: WebSocket) => {
    console.log('Novo cliente conectado');
    clients.push(ws);
    console.log(clients.length)

    ws.on('message', (message: string) => {
        console.log(`Mensagem recebida: ${message}`);
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
        const index = clients.indexOf(ws);
        if (index > -1) {
            clients.splice(index, 1);
        }
    });
});

function broadcast(data: any): void {
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

export { wss, broadcast };
