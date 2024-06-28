import mongoose, {Model, Schema} from "mongoose";
import { IUser } from "../utils/interfaces";

const userSchema: Schema<IUser> = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      maxlength: 10,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Agregar createdAt y updatedAt
  }
);

const userModel: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default userModel;