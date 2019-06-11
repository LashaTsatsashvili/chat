import express, {Request, Response} from 'express';
import {SocketService} from './socket.service';

const socketRouter = express.Router();
const socketService = new SocketService();

export {socketRouter};