import { Request, Response } from 'express';
import userService from '../services/user.services';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await userService.createUser(req.body);

    if (!newUser) res.status(400).json({error: 'Intente más tarde'});
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const {userName, password} = req.body
  if (!userName || !password) res.status(400).json({error: 'Debe ingresar usuario y contraseña'});

  try {
    const user = await userService.loginUser(req.body);

    if (!user) res.status(400).json({error: 'Usuario no encontrado'})
    res.send(user)
  } catch (error) {
    res.status(400).json(error);
  }
}

