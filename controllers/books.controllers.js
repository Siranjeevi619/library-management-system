import { request as req, response as res } from "express";
import Book from "../models/book.models.js";

export const bookPublish = async (req, res) => {
  try {
    const newBook = new Book({
      bookTitle: req.body.bookTitle,
      bookDescription: req.body.bookDescription,
      bookMaterial: req.body.bookMaterial,
      authorName: req.body.authorName,
      genre: req.body.genre,
      ISBN_CODE: req.body.ISBN_CODE,
      publisher: req.body.publisher,
      dateOfPublish: req.body.dateOfPublish,
      language: req.body.language,
      price: req.body.price,
      bookThumbnail: req.body.bookThumbnail,
    });
    const book = await newBook.save();
    return res.status(201).json({ book });
  } catch (e) {
    console.error(e.message);
    return res.status(400).json({ message: e.message });
  }
};

export const bookAll = async (req, res) => {
  try {
    console.log("fetch all book");
    const fetchAllBook = await Book.find();
    res.send({ fetchAllBook });
    return res.status(200).json({ fetchAllBook });
  } catch (e) {
    console.log(e.message);
    return res.status(404).json({ message: "books not founded" });
  }
};

export const bookDeleteOne = async (req, res) => {
  try {
    console.log("delete one book");
    const bookTitle = req.params.bookTitle;
    const bookDelete = await Book.deleteOne({ bookTitle: bookTitle });
    if (bookDelete.deletedCount === 0) {
      return res.status(404).json({ message: "book not found" });
    }
    return res.status(200).json({ message: "Book Deleted successfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const bookUpdateOne = async (req, res) => {
  try {
    console.log("update one book");
    const bookId = req.body.bookId;
    const bookUpdate = await Book.findOneAndUpdate(
      { _id: bookId }, //filter
      {
        //changes
        bookTitle: req.body.bookTitle,
        bookDescription: req.body.bookDescription,
        bookMaterial: req.body.bookMaterial,
        authorName: req.body.authorName,
        genre: req.body.genre,
        ISBN_CODE: req.body.ISBN_CODE,
        publisher: req.body.publisher,
        dateOfPublish: req.body.dateOfPublish,
        language: req.body.language,
        price: req.body.price,
        bookThumbnail: req.body.bookThumbnail,
      },
      { new: true, upsert: true }
    );

    if (!bookUpdate) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res
      .status(200)
      .json({ message: "Updated successfully", data: bookUpdate });
  } catch (e) {
    console.error(e.message);
    return res.status(404).json({ message: e.message });
  }
};

//find by book title

export const findBookByTitle = async (req, res) => {
  try {
    const { bookTitle } = req.params;
    const book = await Book.findOne({ bookTitle: bookTitle });
    if (book) {
      console.log("book founded:", book);
      return res.status(200).json({ message: "book found", book });
    }
    return res.status(404).json({ message: "book not founded" });
  } catch (e) {
    console.log(e.message);
  }
};

//find by author

export const findBookByAuthor = async (req, res) => {
  try {
    const { authorName } = req.params;
    const book = await Book.find({ authorName: authorName });
    if (!book) {
      return res.status(404).json({ message: "book not found", book });
    }
    return res.status(200).json({ message: "book found", book });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "server error", authorName });
  }
};

//books done by author

export const bookByAuthorCount = async (req, res) => {
  try {
    const { authorName } = req.body;

    if (!authorName) {
      return res.status(400).json({ message: "Author name is required" });
    }

    const bookCount = await Book.countDocuments({ authorName: authorName });

    if (bookCount === 0) {
      return res
        .status(200)
        .json({ message: "No books found for this author", count: bookCount });
    }

    return res.status(200).json({ message: "Books found", count: bookCount });
  } catch (e) {
    console.error(e.message);
    return res
      .status(500)
      .json({ message: "Internal server error", error: e.message });
  }
};
