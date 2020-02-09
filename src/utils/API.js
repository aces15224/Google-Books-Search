import axios from "axios"

export default {
    // Get book from google search 
    getGoogleResults: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Saves a book to the database
    saveBook: function (bookResults) {
        return axios.post("/api/books", bookResults)
        .then(result => result.data)
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Route to saved books
    savedBooks: function () {
        return axios.get("/api/books")
        .then(result => result.data);
      }
}