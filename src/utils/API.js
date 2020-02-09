import axios from "axios"

export default {
    // Get book from google search 
    getGoogleResults: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/books", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/books/" + id);
    },

    savedBooks: function () {
        return axios.get("/api/books").then(result => result.data);
      }
}