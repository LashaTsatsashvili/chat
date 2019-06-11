import express from 'express';
import socket from 'socket.io';
import * as chatRouter from './chat/src/chat.router';

const app = express();
const server = app.listen(process.env.PORT || 3000, () => console.log('s on port s3000!'));
app.use('/chat', chatRouter.chatRouter);

const socketIo = socket(server);

socketIo.on('connection', () => {
    socketIo.emit('message', 'test12');
});
