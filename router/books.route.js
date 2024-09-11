import express from "express";
const router = express.Router();
import { bookPublish, bookAll } from "../controllers/books.controllers.js";

//book publish

router.post("/", bookPublish);

//display all books
router.get("/", bookAll);

export default router;
