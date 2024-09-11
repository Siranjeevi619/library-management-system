import express from "express";
import multer from "multer";
// import { bookPublish } from "./controllers/books.controllers.js";
import router from "./router/books.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 9000;

// const storage = multer.memoryStorage();
// const upload = multer({ storage });
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/book", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("hello hero");
});
