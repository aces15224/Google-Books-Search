import React, { Component } from "react";
import API from "../utils/API";



class SearchFunction extends Component {
    //state variables
    state = {
        search: "",
        books: [],
        error: ""
        };

    //handling search input
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //search form submission
    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleResults(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let searchResults = res.data.items
                    
                    // map through the array 
                     searchResults = searchResults.map(books => {
                    //  Create Results Object
                    books={
                    _id: searchResults.id,
                    key: searchResults.id,
                    title: searchResults.volumeInfo.title,
                    author: searchResults.volumeInfo.authors,
                    description: searchResults.volumeInfo.description,
                    image: searchResults.volumeInfo.imageLinks.thumbnail,
                    link: searchResults.volumeInfo.previewLink

                }
                return books;
                    })
                     this.setState({ books: searchResults, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    // handleSavedButton = event => {
    //     event.preventDefault();
    //     <div>Add Saved API</div>
    // }
    render() {
        return (
            <div>Add Components</div>
        )
    }


}

export default SearchFunction