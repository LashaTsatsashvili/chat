import express, {Request, Response} from 'express';
import {ChatService} from './chat.service';

const chatRouter = express.Router();
const chatService = new ChatService();

chatRouter.get('/', (request: Request, response: Response, next: any) => {
    response.send(chatService.test());
    next();
});

chatRouter.post('/send', (request: Request, response: Response, next: any) => {
    response.send('send');
    next();
});

chatRouter.get('/messages', (request: Request, response: Response, next: any) => {
    response.send('messages');
    next();
});

export {chatRouter};
