import React, { Component } from "react";
import API from "../utils/API";



class SearchFunction extends Component {
    //state variables
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
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
                    let results = res.data.items
                    console.log(results)
                    //map through the array 
                    // results = results.map(result => {
                    //     // Create Results Object
                    // })
                    // this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        event.preventDefault();
        <div>Add Saved API</div>
    }
    render() {
        return (
            <div>Add Components</div>
        )
    }


}

export default SearchFunction