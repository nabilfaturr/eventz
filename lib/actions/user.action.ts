import { CreateUserParam } from "@/types";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";

export const createUser = async (user: CreateUserParam) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
