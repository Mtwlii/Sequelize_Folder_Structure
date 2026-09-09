import {Router} from "express";
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "./blogs.controller.js";

const blogRouter = Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogById);
blogRouter.post("/", createBlog);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter