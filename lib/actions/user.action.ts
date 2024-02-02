import { CreateUserParam, UpdateUserParam } from "@/types";
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

export const updateUser = async (user: UpdateUserParam, clerkId: string) => {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("Update User failed");
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};