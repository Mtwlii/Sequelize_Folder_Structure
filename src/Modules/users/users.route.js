import { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "./users.controller.js";



const useRouter = Router();

// Define routes for user-related operations
useRouter.get("/", getAllUsers);
useRouter.get("/:id", getUserById);
useRouter.post("/", createUser);
useRouter.put("/:id", updateUser);
useRouter.delete("/:id", deleteUser);

export default useRouter;