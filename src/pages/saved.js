import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results"

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data  }))
            .catch(err => console.error(err));
    }
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <h2>Saved books</h2>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;
