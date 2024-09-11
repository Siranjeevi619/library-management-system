import { model, Schema } from "mongoose";

const BookSchema = new Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  bookDescription: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  ISBN_CODE: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dateOfPublish: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  bookThumbnail: {
    type: String,
    required: true,
  },
  bookMaterial: {
    type: String,
    required: true,
  },
});

const Book = model("Book", BookSchema);
export default Book;
