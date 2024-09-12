import express from "express";
const router = express.Router();
import {
  bookPublish,
  bookAll,
  bookDeleteOne,
  bookUpdateOne,
  findBookByTitle,
  findBookByAuthor,
  bookByAuthorCount,
} from "../controllers/books.controllers.js";

//book publish

router.post("/", bookPublish);

//display all books
router.get("/", bookAll);

//delete one book
router.delete("/:bookTitle", bookDeleteOne);

//update one book
router.put("/:bookId", bookUpdateOne);

//find book by booktitle
router.get("/:bookTitle", findBookByTitle);

//find book by authorName
router.get("/author/:authorName", findBookByAuthor);

//no of book done by author
router.post("/books-count", bookByAuthorCount);
export default router;
