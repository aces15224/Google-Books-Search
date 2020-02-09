import axios from "axios"

export default {
    // Get book from google search 
    getGoogleResults: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // save book to database
    saveBook: function (bookResults) {
        return axios.post("/api/books", bookResults)
//         .then(result => result.data)
    },

    // deletes specific book w/ specific id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id)
//         .then(result => result.data);
    },
    // saved books
    savedBooks: function () {
        return axios.get("/api/books")
//         .then(result => result.data);
      }
};
