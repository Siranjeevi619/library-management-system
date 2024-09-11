import Book from "../models/book.models.js";

export const bookPublish = async (request, response) => {
  try {
    const newBook = new Book({
      bookTitle: request.body.bookTitle,
      bookDescription: request.body.bookDescription,
      bookMaterial: request.body.bookMaterial,
      authorName: request.body.authorName,
      genre: request.body.genre,
      ISBN_CODE: request.body.ISBN_CODE,
      publisher: request.body.publisher,
      dateOfPublish: request.body.dateOfPublish,
      language: request.body.language,
      price:request.body.price,
      bookThumbnail: request.body.bookThumbnail,
    });
    const book = await newBook.save();
    return response.status(201).json(book);
  } catch (e) {
    console.error(e.message);
    return response.status(400).json({ message: e.message });
  }
};

export const bookAll = async (request, response) => {
  try {
    console.log("fetch all book");
    const fetchAllBook = await Book.find();

    return response.status(200).json({ fetchAllBook });
  } catch (e) {
    console.log(e.message);
  }
};
