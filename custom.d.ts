import { Server } from 'ws';
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      ws?: Server;
    }
  }
}
