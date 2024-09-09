import React from "react";

function BookPublish() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 mt-2 my-md-3">
          <h3 className="text-center fw-light">Publish Your Thoughts</h3>
        </div>
        <div className="col-md-3"></div>
        {/* Form Section */}
        <div className="col-12 col-md-6">
          <form className="p-4 border rounded-3 shadow-sm bg-light my-md-4 my-1">
            {/* Book Title */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="bookTitle"
                placeholder="Enter title"
                required
              />
              <label htmlFor="bookTitle">Book Title</label>
            </div>

            {/* Book Description */}
            <div className="form-floating mb-3">
              <textarea
                className="form-control rounded-3"
                id="bookDescription"
                placeholder="Enter description"
                style={{ height: "100px" }}
                required
              ></textarea>
              <label htmlFor="bookDescription">Book Description</label>
            </div>

            {/* Author Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="authorName"
                placeholder="Author name"
                required
              />
              <label htmlFor="authorName">Author Name</label>
            </div>

            {/* Genre */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="genre"
                placeholder="Genre"
                required
              />
              <label htmlFor="genre">Genre</label>
            </div>

            {/* ISBN */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="isbn"
                placeholder="ISBN"
                required
              />
              <label htmlFor="isbn">ISBN</label>
            </div>

            {/* Publisher */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="publisher"
                placeholder="Publisher"
                required
              />
              <label htmlFor="publisher">Publisher</label>
            </div>

            {/* Price */}
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control rounded-3"
                id="price"
                placeholder="Price"
                min="0"
                required
              />
              <label htmlFor="price">Price</label>
            </div>

            {/* Publication Date */}
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control rounded-3"
                id="publicationDate"
                required
              />
              <label htmlFor="publicationDate">Publication Date</label>
            </div>

            {/* Language */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                id="language"
                placeholder="Language"
                required
              />
              <label htmlFor="language">Language</label>
            </div>

            {/* Book Poster Upload */}
            <div className="form-group mb-3">
              <label htmlFor="bookPoster" className="form-label">
                Upload Book Poster (Image)
              </label>
              <input
                type="file"
                className="form-control"
                id="bookPoster"
                accept="image/*"
                required
              />
            </div>

            {/* Book File Upload */}
            <div className="form-group mb-3">
              <label htmlFor="file" className="form-label">
                Upload Book (PDF)
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                accept=".pdf"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-3"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookPublish;
