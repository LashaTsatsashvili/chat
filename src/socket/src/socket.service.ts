import express from 'express';
import socket from 'socket.io';

export class SocketService {
    private app;
    private socketIo;
    private server;

    constructor() {
        this.app = express();
        this.server = this.app.listen(process.env.PORT || 3000, () => console.log('s on port s3000!'));
        this.socketIo = socket(this.server);
    }
}