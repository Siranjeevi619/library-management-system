import express from "express";
const router = express.Router();
import { bookPublish } from "../controllers/books.controllers.js";

//book publish

router.post("/", bookPublish);

export default router;
