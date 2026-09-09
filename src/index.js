import express from "express";
import cors from "cors";
import useRouter from "./Modules/users/users.route.js";
import blogRouter from "./Modules/Blogs/blogs.route.js";
const app = express();

const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: "https://yourdomain.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Sample endpoint to test the server
app.get("/", (req, res) => {
  res.send("Hello, World!, ths is a sample endpoint to test the server.");
});

app.use("/api/users", useRouter);
app.use("/api/blogs", blogRouter);

// Not Found End point
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
