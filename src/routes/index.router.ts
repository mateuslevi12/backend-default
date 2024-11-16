import express from 'express';
import cors from 'cors';
import http from 'http';
import { ManagerRouter } from './manager/manager.router';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/chats', new ManagerRouter().routes());

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default server;
