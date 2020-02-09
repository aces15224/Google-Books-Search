import React from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Form from "../components/Form";

class SearchFunction extends React.Component {
    //state variables
    state = {
        value: "",
        books: []
    };
// run a search as soon as the page loads

    componentDidMount() {
        this.searchBook();
    }
// create an results object 

    bookObject = bookResults => {
        return {
            _id: bookResults.id,
            title: bookResults.volumeInfo.title,
            authors: bookResults.volumeInfo.authors,
            description: bookResults.volumeInfo.description,
            image: bookResults.volumeInfo.imageLinks.thumbnail,
            link: bookResults.volumeInfo.previewLink
        }
    }
// this is the search function

    searchBook = query => {
        API.getGoogleResults(query)
            .then(res => this.setState({ books: res.data.items.map(bookResults => this.bookObject(bookResults)) }))
            .catch(err => console.error(err));
    };

    // this targets the input and tells the app what to search for 

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

// form submit handler

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}




export default SearchFunction
