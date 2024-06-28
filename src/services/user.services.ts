import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { IUser } from "../utils/interfaces";
import userModel from '../models/user.model';
import { SALT_ROUNDS } from "../config/bcryptCfg";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../helpers/constants";

//Create user
const createUser = async (user: IUser): Promise<boolean> => {
  try {
    const existUser = await userModel.findOne({ userName: user.userName });

    if (existUser) {
      console.error(`User creation in MongoDB failed: user already exists (${user.userName})`);
      return false;
    }
    
    const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);

    const userMongo = await userModel.create({
      ...user,
      password: hashedPassword,
    });
    
    console.info(`Usuario creado/a en MongoDB: ${userMongo._id}`);
    return true;
  } catch (error) {
    console.error('Error al crear usuario en MongoDB', error);
    return false;
  }
};

// Delete user
const deleteUserInMongo = async (userId: number) => {
  try {
    const user = await userModel.findByIdAndDelete(userId);
    if (!user) {
      console.error(`Error al eliminar el usuario en MongoDB: usuario no encontrado (${userId})`);
      return { error: 'Usuario no encontrado en MongoDB' };
    }
    console.info(`Usuario eliminado en MongoDB: ${user._id}`);
    return { user };
  } catch (err) {
    console.error('Error al eliminar usuario en MongoDB', err);
    return { error: 'Error al eliminar usuario en MongoDB' };
  }
};

// Editar un usuario
const editUserService = async (userId: number, updateData: IUser) => {
  const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });
  return updatedUser;
};

//Logueo de usuario
const loginUser = async ({userName, password}: IUser) => {
  const user = await userModel.findOne({userName: userName})

  if (!user) {
    throw new Error('no se pudo encontrar el usuario');
  }

  const valid = bcrypt.compare(password, user.password);

  if (!valid) console.log('no logueado');

  const token = jwt.sign({id: user._id}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  
  return {user, token};
};

export default {
  createUser,
  deleteUserInMongo,
  editUserService,
  loginUser
}