import express from 'express';
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js';
import auttMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add',auttMiddleware, addToCart);
cartRouter.post('/remove',auttMiddleware, removeFromCart);
cartRouter.post('/get',auttMiddleware, getCart);

export default cartRouter;