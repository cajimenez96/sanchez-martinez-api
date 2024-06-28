import express from 'express';
import { createUser, loginUser } from '../controller/user.controller';
// import { authMiddleware } from '../middleware/authMiddleware';


const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.post('/login', loginUser);


export default userRouter;