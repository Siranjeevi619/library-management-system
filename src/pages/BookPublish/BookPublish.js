import React, { useState } from "react";

function BookPublish() {
  //   const [bookTitle, setBookTitle] = useState("");
  //   const [authorName, setAuthorName] = useState("");
  //   const [file, setFile] = useState(null);
  //   const [message, setMessage] = useState("");

  //   const handleFileChange = (event) => {
  //     setFile(event.target.files[0]);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     if (!bookTitle || !authorName || !file) {
  //       setMessage("Please fill in all fields and upload a file.");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("bookTitle", bookTitle);
  //     formData.append("authorName", authorName);
  //     formData.append("file", file);

  //     // Example: Use fetch or axios to send formData to your backend server
  //     // fetch('/api/upload', {
  //     //   method: 'POST',
  //     //   body: formData,
  //     // })
  //     // .then((response) => response.json())
  //     // .then((data) => {
  //     //   setMessage('Book uploaded successfully!');
  //     // })
  //     // .catch((error) => {
  //     //   console.error('Error uploading book:', error);
  //     //   setMessage('Failed to upload the book. Please try again.');
  //     // });

  //     setMessage("Book uploaded successfully! (This is a simulated message)");
  //   };

  return (
    <>
      {/* <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h2>Upload a Book</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="bookTitle" className="form-label">
                  Book Title
                </label>
                <input
                  type="text"
                  id="bookTitle"
                  className="form-control"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="authorName" className="form-label">
                  Author Name
                </label>
                <input
                  type="text"
                  id="authorName"
                  className="form-control"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Upload Book (PDF)
                </label>
                <input
                  type="file"
                  id="file"
                  className="form-control"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-12  my-2 my-md-3">
            <h3 className="text-center fw-light">Publish your thoughts</h3>
          </div>
          <div className="col-md-3"></div>

          {/* //form  */}
          <div className="col-12 col-md-6">
            <form className="form h6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="bookTitle"
                  placeholder="enter title"
                />
                <label htmlFor="bookTitle">Book Title</label>
              </div>
              <div className=" form-floating my-3">
                <label htmlFor="bookDescription">Book Description</label>
                <textarea className="form-control" id=""></textarea>
              </div>{" "}
              <div className="my-3">
                <label>Book Title</label>
                <input
                  type="text"
                  id="bookTitle"
                  className="form-control"
                  value=""
                  required
                />
              </div>{" "}
              <div className="my-3">
                <label>Book Title</label>
                <input
                  type="text"
                  id="bookTitle"
                  className="form-control"
                  value=""
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPublish;
