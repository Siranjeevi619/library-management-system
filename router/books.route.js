import express from "express";
const router = express.Router();
import {
  bookPublish,
  bookAll,
  bookDeleteOne,
  bookUpdateOne,
} from "../controllers/books.controllers.js";

//book publish

router.post("/", bookPublish);

//display all books
router.get("/", bookAll);

//delete one book
router.delete("/:bookTitle", bookDeleteOne);

//update one book
router.put("/:bookId", bookUpdateOne);

export default router;
