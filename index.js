import express from "express";
import multer from "multer";
import { bookPublish } from "./controllers/books.controllers.js";

const app = express();
const PORT = 9000;

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Use diskStorage if you need to store files on disk
const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the route for book publishing with file uploads
app.post(
  "/book",
  upload.fields([
    { name: "bookThumbnail", maxCount: 1 },
    { name: "bookMaterial", maxCount: 1 },
  ]),
  bookPublish
);

app.listen(PORT, () => {
  
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("hello hero")
});
